const { spawn } = require('child_process');
const http = require('http');
const os = require('os');
const path = require('path');
const fs = require('fs');

async function runTests() {
  console.log('🚀 Starting CivicAI E2E Navigation & Portal Card Verification Suite...\n');

  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-test-'));
  const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
  const chrome = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9222',
    '--no-sandbox',
    '--disable-gpu',
    `--user-data-dir=${tmpDir}`,
    'http://localhost:5173/schemes'
  ]);

  let targets = null;
  for (let i = 0; i < 25; i++) {
    await new Promise(r => setTimeout(r, 200));
    try {
      targets = await new Promise((resolve, reject) => {
        http.get('http://127.0.0.1:9222/json', res => {
          let data = '';
          res.on('data', chunk => data += chunk);
          res.on('end', () => resolve(JSON.parse(data)));
        }).on('error', reject);
      });
      if (targets && targets.length > 0) break;
    } catch (e) {}
  }

  if (!targets) {
    chrome.kill();
    throw new Error('Could not connect to Chrome on port 9222');
  }

  const pageTarget = targets.find(t => t.type === 'page');
  const ws = new WebSocket(pageTarget.webSocketDebuggerUrl);
  await new Promise(r => ws.onopen = r);

  let id = 1;
  const pending = new Map();
  const consoleErrors = [];

  ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    if (msg.id && pending.has(msg.id)) {
      pending.get(msg.id)(msg);
      pending.delete(msg.id);
    }
  };

  const send = (method, params = {}) => new Promise((resolve) => {
    const curId = id++;
    const timer = setTimeout(() => {
      pending.delete(curId);
      resolve({ error: 'timeout' });
    }, 8000);
    pending.set(curId, (val) => {
      clearTimeout(timer);
      resolve(val);
    });
    ws.send(JSON.stringify({ id: curId, method, params }));
  });

  await send('Page.enable');
  await send('Runtime.enable');

  ws.addEventListener('message', (evt) => {
    const data = JSON.parse(evt.data);
    if (data.method === 'Runtime.consoleAPICalled') {
      if (data.params.type === 'error') {
        consoleErrors.push(data.params.args.map(a => a.value || a.description).join(' '));
      }
    }
    if (data.method === 'Runtime.exceptionThrown') {
      consoleErrors.push(JSON.stringify(data.params.exceptionDetails));
    }
  });

  async function evaluate(code) {
    const res = await send('Runtime.evaluate', {
      expression: code,
      returnByValue: true
    });
    return res?.result?.result?.value;
  }

  async function navigateTo(url) {
    await send('Page.navigate', { url });
    await new Promise(r => setTimeout(r, 600));
  }

  const testResults = [];
  function assert(title, condition, details = '') {
    if (condition) {
      console.log(`  ✅ PASS: ${title}`);
      testResults.push({ title, status: 'PASS', details });
    } else {
      console.error(`  ❌ FAIL: ${title} - ${details}`);
      testResults.push({ title, status: 'FAIL', details });
    }
  }

  // --- Initial load ---
  await navigateTo('http://localhost:5173/schemes');
  await new Promise(r => setTimeout(r, 1200));

  console.log('--- TEST GROUP 1: Government Portal Card Navigation Clicks ---');

  const jurisdictionsToClick = [
    { name: 'Central Government of India', expectedPath: '/schemes/central', expectedTitle: 'Central Government of India' },
    { name: 'Andhra Pradesh', expectedPath: '/schemes/state/andhra-pradesh', expectedTitle: 'Andhra Pradesh' },
    { name: 'Telangana', expectedPath: '/schemes/state/telangana', expectedTitle: 'Telangana' },
    { name: 'Tamil Nadu', expectedPath: '/schemes/state/tamil-nadu', expectedTitle: 'Tamil Nadu' },
    { name: 'Karnataka', expectedPath: '/schemes/state/karnataka', expectedTitle: 'Karnataka' },
    { name: 'Maharashtra', expectedPath: '/schemes/state/maharashtra', expectedTitle: 'Maharashtra' },
    { name: 'Uttar Pradesh', expectedPath: '/schemes/state/uttar-pradesh', expectedTitle: 'Uttar Pradesh' },
    { name: 'Delhi', expectedPath: '/schemes/ut/delhi', expectedTitle: 'Delhi' }
  ];

  for (const j of jurisdictionsToClick) {
    await navigateTo('http://localhost:5173/schemes');
    await new Promise(r => setTimeout(r, 400));

    const clickInfo = await evaluate(`(() => {
      const link = document.querySelector('[data-testid="gov-portals-grid"] a[href="${j.expectedPath}"]');
      if (!link) return { found: false };
      link.click();
      return { found: true };
    })()`);

    let state = null;
    for (let p = 0; p < 12; p++) {
      await new Promise(r => setTimeout(r, 100));
      state = await evaluate(`({
        pathname: window.location.pathname,
        h1: document.querySelector('h1')?.innerText
      })`);
      if (state?.pathname === j.expectedPath && state?.h1?.includes(j.expectedTitle)) break;
    }

    assert(
      `Click ${j.name} card opens ${j.expectedPath}`,
      clickInfo?.found && state?.pathname === j.expectedPath && state?.h1?.includes(j.expectedTitle),
      `Expected path: ${j.expectedPath}, got: ${state?.pathname}. Heading: ${state?.h1}`
    );
  }

  console.log('\n--- TEST GROUP 2: Additional State & UT Card Clicks ---');

  // Additional State: Gujarat
  await navigateTo('http://localhost:5173/schemes');
  await new Promise(r => setTimeout(r, 400));
  // Switch to states tab
  await evaluate(`(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    tabs[1]?.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  const gjClick = await evaluate(`(() => {
    const link = document.querySelector('[data-testid="gov-portals-grid"] a[href="/schemes/state/gujarat"]');
    if (!link) return { found: false };
    link.click();
    return { found: true };
  })()`);

  let gjState = null;
  for (let p = 0; p < 12; p++) {
    await new Promise(r => setTimeout(r, 100));
    gjState = await evaluate(`({
      pathname: window.location.pathname,
      h1: document.querySelector('h1')?.innerText
    })`);
    if (gjState?.pathname === '/schemes/state/gujarat' && gjState?.h1?.includes('Gujarat')) break;
  }
  assert(
    'Additional State (Gujarat) opens correctly',
    gjClick?.found && gjState?.pathname === '/schemes/state/gujarat' && gjState?.h1?.includes('Gujarat'),
    `Path: ${gjState?.pathname}, Heading: ${gjState?.h1}`
  );

  // Additional UT: Puducherry
  await navigateTo('http://localhost:5173/schemes');
  await new Promise(r => setTimeout(r, 400));
  await evaluate(`(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    tabs[2]?.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  const pyClick = await evaluate(`(() => {
    const link = document.querySelector('[data-testid="gov-portals-grid"] a[href="/schemes/ut/puducherry"]');
    if (!link) return { found: false };
    link.click();
    return { found: true };
  })()`);

  let pyState = null;
  for (let p = 0; p < 12; p++) {
    await new Promise(r => setTimeout(r, 100));
    pyState = await evaluate(`({
      pathname: window.location.pathname,
      h1: document.querySelector('h1')?.innerText
    })`);
    if (pyState?.pathname === '/schemes/ut/puducherry' && pyState?.h1?.includes('Puducherry')) break;
  }
  assert(
    'Additional UT (Puducherry) opens correctly',
    pyClick?.found && pyState?.pathname === '/schemes/ut/puducherry' && pyState?.h1?.includes('Puducherry'),
    `Path: ${pyState?.pathname}, Heading: ${pyState?.h1}`
  );

  console.log('\n--- TEST GROUP 3: Tabs Functionality & Accurate Counts ---');
  await navigateTo('http://localhost:5173/schemes');
  await new Promise(r => setTimeout(r, 400));

  // 1. Featured Tab
  await evaluate(`(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    tabs[0]?.click();
  })()`);
  await new Promise(r => setTimeout(r, 200));
  const featuredCards = await evaluate(`document.querySelectorAll('[data-testid="gov-portals-grid"] a').length`);
  assert('Featured Portals tab displays 8 cards', featuredCards === 8, `Got ${featuredCards} cards`);

  // 2. States Tab
  await evaluate(`(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    tabs[1]?.click();
  })()`);
  await new Promise(r => setTimeout(r, 200));
  const stateCards = await evaluate(`document.querySelectorAll('[data-testid="gov-portals-grid"] a').length`);
  assert('28 States tab displays 28 cards', stateCards === 28, `Got ${stateCards} cards`);

  // 3. UTs Tab
  await evaluate(`(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    tabs[2]?.click();
  })()`);
  await new Promise(r => setTimeout(r, 200));
  const utCards = await evaluate(`document.querySelectorAll('[data-testid="gov-portals-grid"] a').length`);
  assert('8 Union Territories tab displays 8 cards', utCards === 8, `Got ${utCards} cards`);

  // 4. All 37 Tab
  await evaluate(`(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    tabs[3]?.click();
  })()`);
  await new Promise(r => setTimeout(r, 200));
  const allCards = await evaluate(`document.querySelectorAll('[data-testid="gov-portals-grid"] a').length`);
  assert('All 37 Portals tab displays 37 cards', allCards === 37, `Got ${allCards} cards`);

  console.log('\n--- TEST GROUP 4: Search Box Functionality ---');
  await navigateTo('http://localhost:5173/schemes');
  await new Promise(r => setTimeout(r, 400));

  // Switch to all 37 tab before searching
  await evaluate(`(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    tabs[3]?.click();
  })()`);
  await new Promise(r => setTimeout(r, 200));

  async function testSearchQuery(query) {
    await evaluate(`(() => {
      const input = document.querySelector('input[placeholder*="Search state"]');
      if (input) {
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        nativeSetter.call(input, ${JSON.stringify(query)});
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    })()`);
    await new Promise(r => setTimeout(r, 200));
    const matched = await evaluate(`(() => {
      const links = Array.from(document.querySelectorAll('[data-testid="gov-portals-grid"] a'));
      return links.map(l => l.getAttribute('href'));
    })()`);
    return matched || [];
  }

  // Search AP
  const apResults = await testSearchQuery('AP');
  assert('Search "AP" matches Andhra Pradesh', apResults.some(h => h.includes('andhra-pradesh')), `Results: ${apResults}`);

  // Search TG
  const tgResults = await testSearchQuery('TG');
  assert('Search "TG" matches Telangana', tgResults.some(h => h.includes('telangana')), `Results: ${tgResults}`);

  // Search KA
  const kaResults = await testSearchQuery('KA');
  assert('Search "KA" matches Karnataka', kaResults.some(h => h.includes('karnataka')), `Results: ${kaResults}`);

  // Search DL
  const dlResults = await testSearchQuery('DL');
  assert('Search "DL" matches Delhi', dlResults.some(h => h.includes('delhi')), `Results: ${dlResults}`);

  // Search with leading/trailing spaces "   kerala   "
  const klResults = await testSearchQuery('   kerala   ');
  assert('Search with spaces "   kerala   " matches Kerala', klResults.some(h => h.includes('kerala')), `Results: ${klResults}`);

  // Search nonexistent term
  await testSearchQuery('xyz999nonexistent');
  const emptyState = await evaluate(`document.querySelector('[data-testid="gov-portals-grid"]')?.innerText.includes('No government portals found matching')`);
  assert('Nonexistent search shows clear empty state message', !!emptyState, 'Empty state rendered');

  // Clear button click
  await evaluate(`(() => {
    const clearBtn = document.querySelector('button[aria-label="Clear search query"]');
    clearBtn?.click();
  })()`);
  await new Promise(r => setTimeout(r, 200));
  const restoredCards = await evaluate(`document.querySelectorAll('[data-testid="gov-portals-grid"] a').length`);
  assert('Clear button restores portal cards', restoredCards > 0, `Restored ${restoredCards} cards`);

  console.log('\n--- TEST GROUP 5: View All Unified Schemes Action ---');
  await navigateTo('http://localhost:5173/schemes/state/karnataka');
  await new Promise(r => setTimeout(r, 400));

  const unifiedClick = await evaluate(`(() => {
    const link = Array.from(document.querySelectorAll('a')).find(a => a.innerText.includes('View All Unified Schemes'));
    if (!link) return { found: false };
    link.click();
    return { found: true };
  })()`);

  let unifiedState = null;
  for (let p = 0; p < 12; p++) {
    await new Promise(r => setTimeout(r, 100));
    unifiedState = await evaluate(`({
      pathname: window.location.pathname,
      h1: document.querySelector('h1')?.innerText
    })`);
    if (unifiedState?.pathname === '/schemes') break;
  }
  assert(
    '"View All Unified Schemes" navigates to /schemes directory',
    unifiedClick?.found && unifiedState?.pathname === '/schemes',
    `Path: ${unifiedState?.pathname}`
  );

  console.log('\n--- TEST GROUP 6: Direct Refresh on Nested Routes ---');

  const directUrls = [
    { url: 'http://localhost:5173/schemes/central', expectedTitle: 'Central Government of India' },
    { url: 'http://localhost:5173/schemes/state/karnataka', expectedTitle: 'Karnataka' },
    { url: 'http://localhost:5173/schemes/state/maharashtra', expectedTitle: 'Maharashtra' },
    { url: 'http://localhost:5173/schemes/ut/delhi', expectedTitle: 'Delhi' },
    { url: 'http://localhost:5173/schemes/ut/chandigarh', expectedTitle: 'Chandigarh' }
  ];

  for (const d of directUrls) {
    await navigateTo(d.url);
    const h1 = await evaluate(`document.querySelector('h1')?.innerText`);
    assert(
      `Direct navigation & reload on ${d.url}`,
      h1?.includes(d.expectedTitle),
      `Heading found: ${h1}`
    );
  }

  console.log('\n--- TEST GROUP 7: Unknown Route Not-Found Handling ---');

  // Unknown state
  await navigateTo('http://localhost:5173/schemes/state/atlantis');
  const unknownStateH1 = await evaluate(`document.querySelector('h1')?.innerText`);
  assert(
    'Unknown state route (/schemes/state/atlantis) displays Portal Not Found',
    unknownStateH1?.includes('Not Found') || unknownStateH1?.includes('Portal Not Found'),
    `Heading: ${unknownStateH1}`
  );

  // Unknown scheme ID
  await navigateTo('http://localhost:5173/schemes/nonexistent-scheme-999');
  const unknownSchemeH1 = await evaluate(`document.querySelector('h1')?.innerText`);
  assert(
    'Unknown scheme route (/schemes/nonexistent-scheme-999) displays Scheme Not Found',
    unknownSchemeH1?.includes('Not Found'),
    `Heading: ${unknownSchemeH1}`
  );

  console.log('\n--- TEST GROUP 8: Browser Back and Forward Navigation ---');
  await navigateTo('http://localhost:5173/schemes');
  await new Promise(r => setTimeout(r, 300));
  await navigateTo('http://localhost:5173/schemes/state/karnataka');
  await new Promise(r => setTimeout(r, 300));

  // Go Back
  await evaluate(`window.history.back()`);
  await new Promise(r => setTimeout(r, 500));
  const backPath = await evaluate(`window.location.pathname`);
  assert('Browser back navigates back to /schemes', backPath === '/schemes', `Got ${backPath}`);

  // Go Forward
  await evaluate(`window.history.forward()`);
  await new Promise(r => setTimeout(r, 500));
  const forwardPath = await evaluate(`window.location.pathname`);
  assert('Browser forward navigates forward to /schemes/state/karnataka', forwardPath === '/schemes/state/karnataka', `Got ${forwardPath}`);

  console.log('\n--- TEST GROUP 9: All 37 Jurisdiction Routes Resolution ---');
  await navigateTo('http://localhost:5173/schemes');
  await new Promise(r => setTimeout(r, 400));
  // Switch to all 37 tab
  await evaluate(`(() => {
    const tabs = Array.from(document.querySelectorAll('button[role="tab"]'));
    tabs[3]?.click();
  })()`);
  await new Promise(r => setTimeout(r, 300));

  const all37Hrefs = await evaluate(`(() => {
    return Array.from(document.querySelectorAll('[data-testid="gov-portals-grid"] a')).map(a => a.getAttribute('href'));
  })()`);

  console.log(`Found ${all37Hrefs?.length} jurisdiction paths in All 37 tab.`);
  assert('All 37 portal links exist', all37Hrefs?.length === 37, `Count: ${all37Hrefs?.length}`);

  let failedRoutes = 0;
  for (const href of (all37Hrefs || [])) {
    await send('Page.navigate', { url: `http://localhost:5173${href}` });
    await new Promise(r => setTimeout(r, 450));
    const evalRes = await send('Runtime.evaluate', {
      expression: 'document.querySelector("h1")?.innerText',
      returnByValue: true
    });
    const h1 = evalRes?.result?.result?.value;
    if (!h1 || h1.includes('Not Found')) {
      console.error(`Route failed: ${href} (h1: ${h1})`);
      failedRoutes++;
    }
  }

  assert('All 37 jurisdiction routes resolve to their valid portal pages', failedRoutes === 0, `${failedRoutes} failed`);

  console.log('\n--- TEST GROUP 10: Browser Console Errors Audit ---');
  assert('Zero uncaught browser console errors during test run', consoleErrors.length === 0, `Errors: ${JSON.stringify(consoleErrors)}`);

  console.log('\n=========================================');
  const totalPassed = testResults.filter(r => r.status === 'PASS').length;
  const totalFailed = testResults.filter(r => r.status === 'FAIL').length;
  console.log(`E2E SUITE RESULTS: ${totalPassed} Passed | ${totalFailed} Failed`);
  console.log('=========================================');

  ws.close();
  chrome.kill();
  try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch (e) {}

  if (totalFailed > 0) {
    process.exit(1);
  }
}

runTests().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
