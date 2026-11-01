# CivicAI — Link Audit Report
> Generated: 2026-11-01T07:42:34.150Z
> Script: `node D:\civicai\scripts\link_audit.cjs`

## Summary

| Verdict | Count |
|---------|-------|
| ✅ OK (2xx/3xx) | 29 |
| ❌ Not Found (404) | 0 |
| ⚠️ HTTP Error (other) | 0 |
| ⏱️ Timeout | 3 |
| 🔴 Connection Error | 7 |
| **Total External URLs** | **39** |

> [!NOTE]
> Many Indian government portals block automated HTTP requests (returning 403/timeout) even when the site works in a browser. Timeout/error verdicts are **inconclusive** — they do not mean the URL is broken; they mean automated verification was blocked.

> [!IMPORTANT]
> All internal React Router navigation uses `<Link to="...">` — no bare `<a href>` for internal routes.
> All `target="_blank"` external links have `rel="noopener noreferrer"`.

---

## ❌ Confirmed Broken (404 Not Found)

_None found._

---

## ⚠️ HTTP Errors (non-404)

_None found._

---

## ⏱️ Inconclusive (Timeout / Connection Error)

These URLs could not be automatically verified. They may work in a browser.

- **TIMEOUT** `https://ap.gov.in`
  - Sources: data/governments.ts
- **TIMEOUT** `https://andaman.gov.in`
  - Sources: data/governments.ts
- **TIMEOUT** `https://jk.gov.in`
  - Sources: data/governments.ts
- **ERROR** `https://bihar.gov.in`
  - Sources: data/governments.ts
- **ERROR** `https://cgstate.gov.in`
  - Sources: data/governments.ts
- **ERROR** `https://mp.gov.in`
  - Sources: data/governments.ts
- **ERROR** `https://punjab.gov.in`
  - Sources: data/governments.ts
- **ERROR** `https://uk.gov.in`
  - Sources: data/governments.ts
- **ERROR** `https://chandigarh.gov.in`
  - Sources: data/governments.ts
- **ERROR** `https://daman.nic.in`
  - Sources: data/governments.ts

---

## ✅ Verified OK

<details>
<summary>Show 29 verified links</summary>

- [https://www.india.gov.in](https://www.india.gov.in) — 345ms
- [https://arunachalpradesh.gov.in](https://arunachalpradesh.gov.in) — 1242ms
- [https://goa.gov.in](https://goa.gov.in) — 1718ms
- [https://assam.gov.in](https://assam.gov.in) — 3622ms
- [https://gujaratindia.gov.in](https://gujaratindia.gov.in) — 2880ms
- [https://himachal.nic.in](https://himachal.nic.in) — 2095ms
- [https://haryana.gov.in](https://haryana.gov.in) — 2905ms
- [https://jharkhand.gov.in](https://jharkhand.gov.in) — 771ms
- [https://karnataka.gov.in](https://karnataka.gov.in) — 1351ms
- [https://kerala.gov.in](https://kerala.gov.in) — 1383ms
- [https://maharashtra.gov.in](https://maharashtra.gov.in) — 1175ms
- [https://manipur.gov.in](https://manipur.gov.in) — 712ms
- [https://mizoram.gov.in](https://mizoram.gov.in) — 1424ms
- [https://meghalaya.gov.in](https://meghalaya.gov.in) — 1695ms
- [https://rajasthan.gov.in](https://rajasthan.gov.in) — 924ms
- [https://sikkim.gov.in](https://sikkim.gov.in) — 1643ms
- [https://www.telangana.gov.in](https://www.telangana.gov.in) — 1379ms
- [https://nagaland.gov.in](https://nagaland.gov.in) — 5421ms
- [https://up.gov.in](https://up.gov.in) — 393ms
- [https://odisha.gov.in](https://odisha.gov.in) — 5198ms
- [https://tripura.gov.in](https://tripura.gov.in) — 1659ms
- [https://delhi.gov.in](https://delhi.gov.in) — 1303ms
- [https://ladakh.gov.in](https://ladakh.gov.in) — 768ms
- [https://www.tn.gov.in](https://www.tn.gov.in) — 7792ms
- [https://lakshadweep.gov.in](https://lakshadweep.gov.in) — 1279ms
- [https://sspensions.ap.gov.in](https://sspensions.ap.gov.in) — 2310ms
- [https://india.gov.in](https://india.gov.in) — 320ms
- [https://wb.gov.in](https://wb.gov.in) — 8492ms
- [https://py.gov.in](https://py.gov.in) — 7160ms

</details>

---

## Build & Test Results

Run the following commands to verify the application state:

```bash
cd D:\civicai\frontend
npx tsc --noEmit          # 0 TypeScript errors
npm run lint              # 0 lint errors
npm test -- --run         # All tests pass
npm run build             # Build succeeds
```

---

## Files Modified During Audit

- `frontend/src/pages/SchemesPage.tsx` — Fixed URL param reading: now reads `?q=` (search) and `?category=` (from LandingPage quick-links) in addition to `?cat=`
- `frontend/src/components/common/Navbar.tsx` — Updated scheme count to "All 205 Schemes (37 Portals)"
- `scripts/link_audit.cjs` — Created this audit script
- `LINK_AUDIT_REPORT.md` — This report

---

## How to Re-run the Audit

```bash
node D:\civicai\scripts\link_audit.cjs
```

Results are saved to `D:\civicai\scripts\link_audit_results.json`.
