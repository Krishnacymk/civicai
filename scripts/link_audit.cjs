/**
 * CivicAI Comprehensive Link Audit Tool
 * Audits all officialSource URLs in scheme records and officialPortalUrls in governments.ts.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const https = require('https');
const { URL } = require('url');

const FRONTEND_DATA_DIR = path.join(__dirname, '..', 'frontend', 'src', 'data');
const SCHEMES_DIR = path.join(FRONTEND_DATA_DIR, 'schemes');
const GOVERNMENTS_FILE = path.join(FRONTEND_DATA_DIR, 'governments.ts');
const RESULTS_JSON_FILE = path.join(__dirname, 'link_audit_results.json');

const TIMEOUT_MS = 8000;
const MAX_REDIRECTS = 3;
const CONCURRENCY = 12;

const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 CivicAI-LinkChecker/1.0';

// 1. Extract URLs from Scheme Files
function extractSchemeUrls() {
  const schemeFiles = [
    'central.ts',
    'statesSouth.ts',
    'statesNorth.ts',
    'statesEast.ts',
    'statesWest.ts',
    'statesNorthEast.ts',
    'unionTerritories.ts'
  ];

  const items = [];

  for (const filename of schemeFiles) {
    const filePath = path.join(SCHEMES_DIR, filename);
    if (!fs.existsSync(filePath)) {
      console.warn(`Warning: Scheme file not found: ${filePath}`);
      continue;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Extract scheme blocks with id and officialSource.url
    // Schemes are objects with "id": "...", ... "officialSource": { ... "url": "..." }
    const schemeRegex = /"id":\s*"([^"]+)"[\s\S]*?"officialSource":\s*\{[\s\S]*?"url":\s*"([^"]+)"[\s\S]*?"name":\s*"([^"]*)"/g;
    let match;
    let countInFile = 0;

    while ((match = schemeRegex.exec(content)) !== null) {
      countInFile++;
      items.push({
        type: 'scheme',
        id: match[1],
        name: match[3],
        file: filename,
        url: match[2].trim()
      });
    }

    // Fallback regex if formatting differs (e.g. single quotes)
    if (countInFile === 0) {
      const fallbackRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?officialSource:\s*\{[\s\S]*?url:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]*)['"]/g;
      while ((match = fallbackRegex.exec(content)) !== null) {
        countInFile++;
        items.push({
          type: 'scheme',
          id: match[1],
          name: match[3],
          file: filename,
          url: match[2].trim()
        });
      }
    }
  }

  return items;
}

// 2. Extract URLs from Governments File
function extractGovernmentUrls() {
  const items = [];
  if (!fs.existsSync(GOVERNMENTS_FILE)) {
    console.warn(`Warning: Governments file not found: ${GOVERNMENTS_FILE}`);
    return items;
  }

  const content = fs.readFileSync(GOVERNMENTS_FILE, 'utf8');
  const govRegex = /id:\s*['"]([^'"]+)['"][\s\S]*?slug:\s*['"]([^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"][\s\S]*?officialPortalUrl:\s*['"]([^'"]+)['"][\s\S]*?officialPortalName:\s*['"]([^'"]+)['"]/g;
  let match;

  while ((match = govRegex.exec(content)) !== null) {
    items.push({
      type: 'government',
      id: match[1],
      slug: match[2],
      name: match[3],
      portalName: match[5],
      file: 'governments.ts',
      url: match[4].trim()
    });
  }

  return items;
}

// Check single URL with timeout & redirect handling
function checkUrl(targetUrl, hop = 0) {
  return new Promise((resolve) => {
    let parsed;
    try {
      parsed = new URL(targetUrl);
    } catch (e) {
      return resolve({
        url: targetUrl,
        finalUrl: targetUrl,
        statusCode: null,
        domain: 'invalid',
        isGovInDomain: false,
        verdict: 'error',
        error: `Invalid URL: ${e.message}`,
        hops: hop
      });
    }

    const domain = parsed.hostname;
    const isGovInDomain = domain.endsWith('.gov.in') || 
                          domain.endsWith('.nic.in') || 
                          domain.includes('.gov.in') || 
                          domain.includes('.nic.in');

    const isHttps = parsed.protocol === 'https:';
    const client = isHttps ? https : http;

    const options = {
      protocol: parsed.protocol,
      hostname: parsed.hostname,
      port: parsed.port || (isHttps ? 443 : 80),
      path: (parsed.pathname || '/') + (parsed.search || ''),
      method: 'GET',
      headers: {
        'User-Agent': USER_AGENT,
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
        'Connection': 'close'
      },
      timeout: TIMEOUT_MS,
      rejectUnauthorized: false // Government portals frequently have local/expired certificates
    };

    let settled = false;

    const finish = (result) => {
      if (settled) return;
      settled = true;
      resolve(result);
    };

    const req = client.request(options, (res) => {
      const statusCode = res.statusCode;

      // Consume data to avoid memory leaks
      res.on('data', () => {});
      res.on('end', () => {
        // Handle redirect (301, 302, 303, 307, 308)
        if ([301, 302, 303, 307, 308].includes(statusCode) && res.headers.location) {
          if (hop >= MAX_REDIRECTS) {
            return finish({
              url: targetUrl,
              finalUrl: res.headers.location,
              statusCode,
              domain,
              isGovInDomain,
              verdict: 'redirect',
              hops: hop + 1,
              note: `Exceeded max redirect hops (${MAX_REDIRECTS})`
            });
          }

          let nextUrl = res.headers.location;
          try {
            nextUrl = new URL(res.headers.location, targetUrl).href;
          } catch {
            // Keep as is
          }

          return checkUrl(nextUrl, hop + 1).then((redirectResult) => {
            finish({
              url: targetUrl,
              finalUrl: redirectResult.finalUrl,
              statusCode: redirectResult.statusCode,
              domain: redirectResult.domain,
              isGovInDomain: redirectResult.isGovInDomain,
              verdict: redirectResult.verdict,
              hops: redirectResult.hops,
              redirectChainFrom: targetUrl
            });
          });
        }

        // Determine verdict
        let verdict = 'ok';
        if (statusCode >= 200 && statusCode < 400) {
          verdict = 'ok';
        } else if ([401, 403, 405].includes(statusCode)) {
          verdict = 'blocked';
        } else if (statusCode >= 400) {
          verdict = 'error';
        }

        finish({
          url: targetUrl,
          finalUrl: targetUrl,
          statusCode,
          domain,
          isGovInDomain,
          verdict,
          hops: hop
        });
      });
    });

    req.on('timeout', () => {
      req.destroy();
      finish({
        url: targetUrl,
        finalUrl: targetUrl,
        statusCode: null,
        domain,
        isGovInDomain,
        verdict: 'timeout',
        error: `Request timed out after ${TIMEOUT_MS / 1000}s`,
        hops: hop
      });
    });

    req.on('error', (err) => {
      let verdict = 'error';
      if (err.code === 'ETIMEDOUT' || err.code === 'ESOCKETTIMEDOUT') {
        verdict = 'timeout';
      } else if (err.code === 'ECONNRESET' || err.code === 'EHOSTUNREACH') {
        verdict = 'blocked';
      }

      finish({
        url: targetUrl,
        finalUrl: targetUrl,
        statusCode: null,
        domain,
        isGovInDomain,
        verdict,
        error: err.code || err.message,
        hops: hop
      });
    });

    req.end();
  });
}

// Concurrency pool runner
async function runPool(items, concurrency, fn) {
  const results = new Array(items.length);
  let currentIndex = 0;

  async function worker() {
    while (currentIndex < items.length) {
      const idx = currentIndex++;
      results[idx] = await fn(items[idx], idx);
    }
  }

  const workers = [];
  for (let i = 0; i < Math.min(concurrency, items.length); i++) {
    workers.push(worker());
  }

  await Promise.all(workers);
  return results;
}

async function main() {
  console.log('='.repeat(70));
  console.log(' CivicAI Final Link & Navigation Verification Audit');
  console.log('='.repeat(70));

  console.log('\n[Phase 1] Extracting URLs from scheme and government catalogs...');
  const schemeItems = extractSchemeUrls();
  const govItems = extractGovernmentUrls();

  console.log(`✓ Schemes extracted: ${schemeItems.length}`);
  console.log(`✓ Governments extracted: ${govItems.length}`);

  // Build map of unique URLs to test
  const urlMap = new Map(); // url -> { references: [] }

  for (const item of schemeItems) {
    if (!urlMap.has(item.url)) {
      urlMap.set(item.url, { url: item.url, references: [] });
    }
    urlMap.get(item.url).references.push({
      type: 'scheme',
      id: item.id,
      name: item.name,
      file: item.file
    });
  }

  for (const item of govItems) {
    if (!urlMap.has(item.url)) {
      urlMap.set(item.url, { url: item.url, references: [] });
    }
    urlMap.get(item.url).references.push({
      type: 'government',
      id: item.id,
      slug: item.slug,
      name: item.name,
      file: item.file
    });
  }

  const uniqueUrls = Array.from(urlMap.values());
  console.log(`✓ Total unique URLs to test: ${uniqueUrls.length}`);

  console.log(`\n[Phase 2] Testing links with 8s timeout (concurrency: ${CONCURRENCY})...`);
  let completed = 0;

  const testResults = await runPool(uniqueUrls, CONCURRENCY, async (item) => {
    const result = await checkUrl(item.url);
    completed++;
    if (completed % 25 === 0 || completed === uniqueUrls.length) {
      process.stdout.write(`  Tested ${completed}/${uniqueUrls.length} URLs...\n`);
    }
    return {
      ...result,
      references: item.references
    };
  });

  // Group by verdict
  const groups = {
    ok: [],
    redirect: [],
    blocked: [],
    error: [],
    timeout: []
  };

  for (const res of testResults) {
    if (groups[res.verdict]) {
      groups[res.verdict].push(res);
    } else {
      groups.error.push(res);
    }
  }

  // Generate Report Object
  const report = {
    timestamp: new Date().toISOString(),
    auditSummary: {
      totalSchemeLinks: schemeItems.length,
      totalGovernmentLinks: govItems.length,
      totalUniqueUrls: uniqueUrls.length,
      verdictCounts: {
        ok: groups.ok.length,
        redirect: groups.redirect.length,
        blocked: groups.blocked.length,
        error: groups.error.length,
        timeout: groups.timeout.length
      },
      govDomainPercentage: Math.round(
        (testResults.filter(r => r.isGovInDomain).length / testResults.length) * 100
      )
    },
    resultsByVerdict: groups,
    allResults: testResults
  };

  fs.writeFileSync(RESULTS_JSON_FILE, JSON.stringify(report, null, 2), 'utf8');
  console.log(`\n✓ Results successfully saved to: ${RESULTS_JSON_FILE}`);

  // Print Human-readable summary
  console.log('\n' + '='.repeat(70));
  console.log(' AUDIT VERDICT SUMMARY');
  console.log('='.repeat(70));
  console.log(`Total URLs Audited:     ${uniqueUrls.length}`);
  console.log(`  ✓ OK (HTTP 200..399): ${groups.ok.length} (${Math.round(groups.ok.length / uniqueUrls.length * 100)}%)`);
  console.log(`  ↻ Redirect:           ${groups.redirect.length}`);
  console.log(`  🛡 Blocked (WAF/403):  ${groups.blocked.length} (Expected on Indian NIC/Cloudflare firewalls)`);
  console.log(`  ⏳ Timeout (>8s):      ${groups.timeout.length} (NIC latency / state portal downtime)`);
  console.log(`  ✕ Error:              ${groups.error.length}`);
  console.log(`Official .gov.in/.nic:  ${testResults.filter(r => r.isGovInDomain).length}/${uniqueUrls.length} (${report.auditSummary.govDomainPercentage}%)`);

  if (groups.error.length > 0) {
    console.log('\n--- URLs with Errors ---');
    groups.error.forEach(err => {
      console.log(`  [${err.statusCode || err.error}] ${err.url}`);
      err.references.slice(0, 2).forEach(ref => {
        console.log(`     -> Used by: ${ref.id} (${ref.type}) in ${ref.file}`);
      });
    });
  }

  if (groups.blocked.length > 0) {
    console.log(`\n--- Blocked URLs (WAF/Geo-fence): ${groups.blocked.length} ---`);
    groups.blocked.slice(0, 10).forEach(b => {
      console.log(`  [${b.statusCode || b.error}] ${b.url}`);
    });
    if (groups.blocked.length > 10) {
      console.log(`  ...and ${groups.blocked.length - 10} more.`);
    }
  }

  if (groups.timeout.length > 0) {
    console.log(`\n--- Timed out URLs: ${groups.timeout.length} ---`);
    groups.timeout.slice(0, 10).forEach(t => {
      console.log(`  [${t.error}] ${t.url}`);
    });
    if (groups.timeout.length > 10) {
      console.log(`  ...and ${groups.timeout.length - 10} more.`);
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log(' Audit Completed.');
  console.log('='.repeat(70));
}

main().catch(err => {
  console.error('Fatal Error during Link Audit:', err);
  process.exit(1);
});
