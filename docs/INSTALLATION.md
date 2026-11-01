# CivicAI Local Installation & Development Setup

This guide provides step-by-step instructions to clone, install, configure, test, and run **CivicAI** locally across Windows (Command Prompt and PowerShell), Linux, and macOS environments.

---

## 1. Prerequisites

Before installing CivicAI, verify that your development machine has the following tools installed:

| Tool | Minimum Version | Recommended Version | Verification Command |
| :--- | :--- | :--- | :--- |
| **Node.js** | `v18.0.0` | `v20.x` or `v24.x LTS` | `node -v` |
| **npm** | `v9.0.0` | `v10.x+` | `npm -v` |
| **Git** | `v2.30.0` | Latest | `git -v` |
| **Browser** | Chromium-based | Google Chrome or Edge | Required for Web Speech API & E2E tests |

---

## 2. Clone the Repository & Check Out Active Branch

> [!IMPORTANT]
> The complete application code, master scheme directory, and navigation features reside on branch **`feature/national-schemes-mission`**.
> Always ensure you have checked out this branch after cloning.

```bash
git clone https://github.com/Krishnacymk/civicai.git
cd civicai
git checkout feature/national-schemes-mission
```

---

## 3. Environment-Specific Setup Instructions

### 3.1 Windows Command Prompt (`cmd.exe`)

Open Command Prompt as a regular user (or administrator):

```cmd
:: 1. Navigate to your project directory
cd /d D:\civicai

:: 2. Switch to the frontend directory
cd frontend

:: 3. Install dependencies
npm install

:: 4. Start the Vite development server
npm run dev
```

The terminal will display the local development server URL:
```text
  VITE v8.3.5  ready in 240 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Press `Ctrl + C` in the Command Prompt to stop the development server.

---

### 3.2 Windows PowerShell

Open PowerShell:

```powershell
# 1. Navigate to the project root
Set-Location -Path "D:\civicai"

# 2. Navigate to the frontend directory
Set-Location -Path "frontend"

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

> [!TIP]
> If you encounter PowerShell script execution policy errors (e.g. `cannot be loaded because running scripts is disabled`), run:
> ```powershell
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```

---

### 3.3 Linux & macOS (Bash / Zsh)

Open Terminal:

```bash
# 1. Navigate to project root
cd ~/civicai  # or your clone path

# 2. Switch to the frontend directory
cd frontend

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

---

## 4. Production Build & Local Preview

To compile the production-ready bundle and test it locally using Vite's built-in preview server:

```bash
cd frontend

# Type-check with TypeScript and compile using Vite
npm run build

# Preview the built production assets
npm run preview
```

The production output is generated in `frontend/dist/`.

---

## 5. Running the Test & Verification Suites

### 5.1 Unit & Integration Tests (Vitest)
CivicAI includes 11 unit and data integrity tests covering catalog consistency, 0 duplicate IDs, and strict state/UT isolation:

```bash
cd frontend
npm test
```

### 5.2 Static Code Analysis & Linter (Oxlint)
Run Oxlint across all TypeScript and TSX files:

```bash
cd frontend
npm run lint
```

### 5.3 Automated End-to-End Browser Tests (Chrome CDP)
An automated suite verifies portal clicks, search filters, state code aliases (AP, TG, DL, KA), back/forward navigation, direct route reloads, and all 37 government portals using headless Chrome:

```bash
# From the repository root
node scripts/verify_navigation_e2e.cjs
```

### 5.4 Live Link Audit Suite
Audit the external government portal URLs:

```bash
# From the repository root
node scripts/link_audit.cjs
```

---

## 6. Environment Variables Configuration

Currently, CivicAI runs as a **self-contained, zero-configuration client SPA**. All 205 schemes and 37 government profiles are packaged statically, requiring no mandatory environment variables for development.

For forward compatibility with planned backend APIs or deployment customizations, you may create an optional `.env` file in `frontend/`:

```bash
# frontend/.env (Optional)

# Base URL for future backend API service (defaults to relative /api)
# VITE_API_BASE_URL=http://localhost:8000/api

# Port override for local development server (default: 5173)
# PORT=5173
```

> [!NOTE]
> Never commit sensitive secrets, private tokens, or proprietary credentials into `.env` files. Ensure `.env` is listed in `frontend/.gitignore`.

---

## 7. Common Troubleshooting

### Port 5173 Already in Use
If another process is occupying port `5173`, Vite will automatically attempt the next available port (e.g. `5174`). Alternatively, specify a custom port:
```bash
npm run dev -- --port 3000
```

### Clean Reinstall of Dependencies
If you experience package resolution issues or corrupted lockfiles:
```bash
cd frontend
rmdir /s /q node_modules package-lock.json    # Windows CMD
# or: rm -rf node_modules package-lock.json  # Linux/macOS/PowerShell
npm install
```

### Web Speech Recognition Not Working
- Ensure you are using Google Chrome, Microsoft Edge, or a Chromium-compatible browser.
- Ensure your browser has granted microphone access permissions to `http://localhost:5173`.
- The Web Speech API requires internet access to connect to Google's speech recognition engine in standard Chrome installations.
