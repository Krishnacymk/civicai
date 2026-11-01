# Contributing to CivicAI

Thank you for your interest in contributing to **CivicAI**! Our mission is to make Indian government welfare schemes accessible, understandable, and transparent for every citizen.

---

## 1. Ground Rules & Data Integrity Policy

> [!IMPORTANT]
> **Strict Verification Policy:**  
> CivicAI delivers real-world welfare information that directly affects citizens' livelihoods. 
> - **Never fabricate, simulate, or guess** government scheme benefits, income criteria, or application procedures.
> - Every scheme entry must link to an authoritative official government portal (`*.gov.in`, `*.nic.in`, or official state administration domain).
> - Never mark a link or scheme as `verified` unless you have checked it against official notifications.

---

## 2. Git & Branching Workflow

- **Base Development Branch:** `feature/national-schemes-mission`  
  *(Note: All active application code lives on this branch in `https://github.com/Krishnacymk/civicai`).*
- **Feature Branches:** Create branches off `feature/national-schemes-mission`:
  ```bash
  git checkout feature/national-schemes-mission
  git pull origin feature/national-schemes-mission
  git checkout -b feat/add-karnataka-yuvanidhi
  ```
- **Commit Messages:** Follow [Conventional Commits](https://www.conventionalcommits.org/):
  - `feat(schemes): add Yuva Nidhi scheme for Karnataka`
  - `fix(navigation): repair back button state on detail page`
  - `docs(api): update assistant network probe documentation`
  - `test(e2e): add test for state code search`

---

## 3. How to Add a New Welfare Scheme

All schemes must conform to the TypeScript interface `Scheme` defined in [`frontend/src/types/scheme.ts`](file:///D:/civicai/frontend/src/types/scheme.ts).

### Step 1: Locate the Appropriate Regional Partition File
Schemes are organized regionally under `frontend/src/data/schemes/`:
- **Central Government:** `central.ts`
- **Southern States:** `statesSouth.ts` (AP, TG, TN, KA, KL)
- **Northern States:** `statesNorth.ts` (UP, RJ, PB, HR, UK, HP)
- **Eastern States:** `statesEast.ts` (WB, BR, OD, JH)
- **Western States:** `statesWest.ts` (MH, GJ, MP, CG, GA)
- **Northeastern States:** `statesNorthEast.ts` (AS, AR, MN, ML, MZ, NL, SK, TR)
- **Union Territories:** `unionTerritories.ts` (AN, CH, DNHDD, DL, JK, LA, LD, PY)

### Step 2: Implement the Scheme Definition
Ensure all mandatory fields are populated accurately:

```typescript
{
  id: 'ka-yuva-nidhi',
  name: 'Yuva Nidhi Scheme',
  tagline: 'Monthly unemployment financial assistance for degree and diploma holders in Karnataka',
  category: 'unemployment-skills',
  categoryLabel: 'Unemployment & Skills',
  
  // Government & Jurisdiction
  governmentLevel: 'state',
  stateCode: 'KA',
  administeringGovernment: 'Government of Karnataka',
  schemeStatus: 'active',
  
  // Backward compatibility fields
  geographicScope: 'Karnataka',
  stateApplicability: 'Karnataka State Residents Only',
  isCentral: false,
  
  beneficiaries: ['Unemployed Graduates', 'Unemployed Diploma Holders'],
  shortSummary: 'Financial support of Rs 3,000/month for degree holders and Rs 1,500/month for diploma holders for up to 2 years.',
  fullDescription: '...',
  financialBenefit: 'Rs 3,000/month (Graduates), Rs 1,500/month (Diploma holders)',
  keyObjectives: [
    'Provide transitional financial cushion during active job search',
    'Encourage skill acquisition and competitive exam preparation'
  ],
  eligibilityRules: {
    minAge: 18,
    maxAge: 35,
    occupations: ['Unemployed Graduate', 'Unemployed Diploma Holder'],
    notes: 'Must be unemployed for at least 6 months after graduation.'
  },
  eligibilityHighlights: [
    'Graduated or completed diploma in the recognized academic year',
    'Unemployed for a minimum period of 6 months',
    'Karnataka domicile for at least 6 continuous years'
  ],
  exclusions: [
    'Candidates employed in private or public sector',
    'Higher education enrolled students'
  ],
  requiredDocuments: [
    {
      id: 'doc-aadhaar',
      name: 'Aadhaar Card',
      category: 'identity',
      purpose: 'Identity and biometric authentication',
      citizenTip: 'Must be linked to your active bank account for DBT transfers',
      isMandatory: true
    }
  ],
  officialSources: [
    {
      name: 'Karnataka Seva Sindhu Portal',
      url: 'https://sevasindhuservices.karnataka.gov.in',
      lastVerifiedDate: '2026-11-01',
      department: 'Department of Skill Development, Entrepreneurship and Livelihood',
      verificationStatus: 'verified',
      linkStatus: 'accessible'
    }
  ],
  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Portal Registration',
      description: 'Visit the Seva Sindhu portal and authenticate using Aadhaar OTP.',
      portalOrOffice: 'Seva Sindhu Online Portal'
    }
  ],
  faqs: []
}
```

### Step 3: Verify with Unit Tests
Run the unit test suite to verify that your scheme has no duplicate ID and adheres to the catalog schema:
```bash
cd frontend
npm test
```

---

## 4. How to Add a New UI Language

CivicAI currently supports English (`en`), Hindi (`hi`), Tamil (`ta`), and Telugu (`te`). To contribute a new Indian language:

1. **Update Language Code Type:**  
   In `frontend/src/i18n/types.ts`, add the new language code to `LanguageCode` (e.g., `'kn'` for Kannada, `'mr'` for Marathi, `'bn'` for Bengali).
2. **Create Locale Dictionary:**  
   Create `frontend/src/i18n/locales/<code >.ts` providing translations for all UI strings.
3. **Register in Language Context:**  
   In `frontend/src/context/LanguageContext.tsx`, import the new locale dictionary and add it to `TRANSLATIONS`.
4. **Update Language Selector:**  
   In `frontend/src/components/common/LanguageSelector.tsx`, add the language option with its native script name (e.g. `{ code: 'kn', name: 'ಕನ್ನಡ', label: 'Kannada' }`).
5. **Configure Voice Recognition Locale:**  
   In `frontend/src/hooks/useSpeechRecognition.ts`, map the new language code to its BCP-47 speech recognition identifier (e.g., `'kn-IN'`).

---

## 5. UI/UX & Accessibility Guidelines

- **Design Tokens:** Use CSS variables and semantic Tailwind utility classes rather than hardcoded hex codes. Support both Light and Dark modes.
- **Accessible Links:** Wrap cards with single semantic `<Link to="...">` containers. Never place interactive buttons inside anchor tags.
- **Keyboard Navigation:** Ensure all interactive elements feature visible focus indicators (`focus-visible:ring-2 focus-visible:ring-[#1A3B2B] dark:focus-visible:ring-[#DFB24E]`).
- **Screen Reader Support:** Provide descriptive `aria-label` attributes on icon buttons.

---

## 6. Pre-Commit Quality Checklist

Always execute the complete verification suite before opening a pull request:

```bash
# 1. Vitest Unit & Catalog integrity tests
cd frontend
npm test

# 2. Fast AST Linter
npm run lint

# 3. Production TypeScript Build
npm run build

# 4. Automated Headless Chrome Navigation Suite
cd ..
node scripts/verify_navigation_e2e.cjs
```
