# CivicAI AWS EC2 & Nginx Deployment Guide

This guide describes how to deploy **CivicAI** on an **Amazon Web Services (AWS) EC2 Ubuntu instance** using **Nginx** as a high-performance web server and reverse proxy.

---

## 1. Architecture Overview

In production, CivicAI's compiled React 19 single-page application is served as static optimized assets (`HTML`, `JS`, `CSS`, `SVG`) by **Nginx**. 

```text
[ Citizen Browser ] 
        │ (HTTPS :443 / HTTP :80)
        ▼
[ AWS EC2 Security Group ]
        │
        ▼
[ Nginx Web Server / Reverse Proxy ]
   ├── Static SPA Routing (try_files $uri $uri/ /index.html)
   │     └── Serves: /var/www/civicai/html (frontend/dist)
   │
   └── Future API Proxy (/api/*) ─► [ Local Backend Service :8000 ] (Optional)
```

### Key Architectural Requirements
- **SPA Fallback Routing:** All nested URLs (e.g., `/schemes/state/karnataka`, `/eligibility`, `/assistant`) must route to `/index.html` so React Router can resolve the route in the browser without 404 errors.
- **Branch Target:** The production codebase lives on the **`feature/national-schemes-mission`** branch of [`https://github.com/Krishnacymk/civicai`](https://github.com/Krishnacymk/civicai).

---

## 2. AWS EC2 Instance Provisioning

1. **Log in to the AWS Management Console** and navigate to **EC2 > Instances > Launch an instance**.
2. **Instance Details:**
   - **Name:** `civicai-production`
   - **AMI (Operating System):** Ubuntu Server 24.04 LTS or 22.04 LTS (64-bit x86)
   - **Instance Type:** `t3.micro` (AWS Free Tier eligible) or `t3.small` (recommended for faster build compiles)
   - **Key Pair:** Create or select an existing `.pem` key pair for SSH access.
3. **Network & Security Group Configuration:**
   Configure a Security Group with the following inbound rules:

   | Protocol | Port Range | Source | Purpose |
   | :--- | :--- | :--- | :--- |
   | **SSH** | `22` | `My IP` (or trusted bastion IP) | Secure administrative access |
   | **HTTP** | `80` | `0.0.0.0/0` (Anywhere) | Public web traffic & SSL challenges |
   | **HTTPS** | `443` | `0.0.0.0/0` (Anywhere) | Secure encrypted public web traffic |

4. **Storage:** Standard 16 GB to 30 GB gp3 SSD volume.
5. Click **Launch Instance**.

---

## 3. Server Configuration & Setup Steps

### Step 1: Connect to Your EC2 Instance via SSH

```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@<YOUR_EC2_PUBLIC_IP>
```

---

### Step 2: Update System Packages & Install Dependencies

```bash
# Update repository lists and upgrade packages
sudo apt update && sudo apt upgrade -y

# Install git, curl, build essentials, and nginx
sudo apt install -y curl git nginx ufw certbot python3-certbot-nginx
```

---

### Step 3: Install Node.js LTS (v20.x or v22.x)

Use the NodeSource official repository:

```bash
# Download and setup NodeSource repository
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -

# Install Node.js and npm
sudo apt install -y nodejs

# Verify installation
node -v   # Should output v20.x.x
npm -v    # Should output v10.x.x
```

---

### Step 4: Clone the Repository & Build Production Assets

> [!IMPORTANT]
> Clone the repository and immediately switch to the active application branch: `feature/national-schemes-mission`.

```bash
# Create application directory
sudo mkdir -p /var/www/civicai
sudo chown -R ubuntu:ubuntu /var/www/civicai

# Clone repository
cd /var/www/civicai
git clone https://github.com/Krishnacymk/civicai.git repo
cd repo

# Checkout the active feature branch containing the complete application
git checkout feature/national-schemes-mission

# Install dependencies and compile production build
cd frontend
npm install
npm run build
```

This generates the compiled production assets in `/var/www/civicai/repo/frontend/dist`.

---

### Step 5: Configure Nginx Virtual Host

Create a new Nginx configuration file for CivicAI:

```bash
sudo nano /etc/nginx/sites-available/civicai
```

Paste the following configuration (replace `your-domain.com` with your actual domain name or EC2 public DNS/IP):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name your-domain.com www.your-domain.com; # Or your EC2 Public IP

    # Root directory pointing to Vite's compiled production dist
    root /var/www/civicai/repo/frontend/dist;
    index index.html;

    # Security Headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;

    # Gzip Compression for fast delivery
    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml application/json application/javascript application/xml+rss application/atom+xml image/svg+xml;

    # Static Asset Caching
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Single Page Application (SPA) routing fallback
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Pluggable Backend API reverse proxy (Forward-compatible)
    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Prevent access to hidden files
    location ~ /\. {
        deny all;
    }
}
```

Enable the site configuration and verify syntax:

```bash
# Disable default nginx configuration
sudo rm -f /etc/nginx/sites-enabled/default

# Enable civicai site configuration
sudo ln -sf /etc/nginx/sites-available/civicai /etc/nginx/sites-enabled/

# Test Nginx configuration for syntax errors
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

### Step 6: Configure UFW Firewall

```bash
# Allow OpenSSH, HTTP, and HTTPS traffic
sudo ufw allow 'OpenSSH'
sudo ufw allow 'Nginx Full'

# Enable firewall
sudo ufw --force enable
sudo ufw status
```

---

### Step 7: Configure HTTPS with Let's Encrypt (Certbot)

If pointing a registered domain name (e.g. `civicai.example.in`) to the EC2 IP:

```bash
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

Certbot will automatically modify the Nginx configuration to enforce HTTP-to-HTTPS redirection and manage automated renewal via systemd timers.

---

## 4. Continuous Deployment & Updates

To deploy new updates from the `feature/national-schemes-mission` branch:

```bash
#!/bin/bash
set -e

cd /var/www/civicai/repo
git fetch origin feature/national-schemes-mission
git checkout feature/national-schemes-mission
git pull origin feature/national-schemes-mission

cd frontend
npm install --prefer-offline
npm run build

sudo systemctl reload nginx

echo "CivicAI successfully updated and reloaded!"
```

---

## 5. Security & Secrets Management

1. **No Embedded Client Secrets:**  
   The CivicAI frontend is a static bundle and must never contain cloud credentials, private signing keys, or administrative tokens.
2. **Server Access Hardening:**  
   Disable password-based authentication in `/etc/ssh/sshd_config` (`PasswordAuthentication no`). Rely exclusively on private SSH key pairs.
3. **File System Permissions:**  
   Ensure web assets are owned by the deployment user and readable by `www-data`:
   ```bash
   sudo chown -R ubuntu:www-data /var/www/civicai/repo/frontend/dist
   sudo chmod -R 755 /var/www/civicai/repo/frontend/dist
   ```
