# CivicAI System Architecture & Technical Design

This document details the architectural design, component hierarchy, data flow, and runtime mechanics of **CivicAI — Discover Government Welfare Schemes Across India**.

---

## 1. Architectural Overview

CivicAI is structured as an **offline-resilient, client-first Single Page Application (SPA)** written in React 19 and TypeScript, powered by Vite 8 and Tailwind CSS v4. 

The system is designed to provide immediate, zero-latency access to verified Indian public welfare schemes without requiring an active backend connection for core discovery, filtering, and eligibility assessment. It incorporates a **pluggable hybrid architecture** for conversational intelligence, attempting a remote backend inference service before seamlessly falling back to an in-browser deterministic heuristic matcher.

```mermaid
flowchart TB
    subgraph Client ["Client Browser Runtime (React 19 + TypeScript)"]
        subgraph Context_Layer ["Context & State Management"]
            ThemeCtx["ThemeContext\n(Light / Dark / System via CSS tokens)"]
            LangCtx["LanguageContext\n(i18n: EN, HI, TA, TE)"]
        end

        subgraph Routing_Layer ["Routing Engine (React Router v7)"]
            Router["BrowserRouter & AnimatedRoutes"]
            R_Home["/ (LandingPage)"]
            R_Schemes["/schemes (SchemesPage)"]
            R_Gov["/schemes/state/:govSlug\n/schemes/ut/:govSlug\n/schemes/central"]
            R_Detail["/schemes/:id (SchemeDetailPage)"]
            R_Elig["/eligibility (EligibilityPage)"]
            R_Assist["/assistant (AssistantPage)"]
        end

        subgraph Service_Layer ["Core Services & Logic Engine"]
            FilterService["schemeFilterService.ts\n- Jurisdiction isolation\n- Multi-category matching\n- Alias indexing (AP, TG, KA)"]
            AssistService["assistantService.ts\n- Network probe (2s abort controller)\n- Rule-based intent classifier\n- Citation & evidence builder"]
            VoiceService["useSpeechRecognition.ts\n- Web Speech API hook\n- Regional BCP-47 locale support"]
        end

        subgraph Data_Layer ["Curated Static Data Catalog"]
            GovCatalog["governments.ts\n37 Jurisdictions (1 Central, 28 States, 8 UTs)"]
            SchemeMaster["schemes.ts\nAggregated Master Index (205 Schemes)"]
            
            subgraph Regional_Partitions ["Regional Scheme Partition Modules"]
                CentralSchemes["central.ts (25)"]
                SouthSchemes["statesSouth.ts (25)"]
                NorthSchemes["statesNorth.ts (30)"]
                EastSchemes["statesEast.ts (20)"]
                WestSchemes["statesWest.ts (25)"]
                NESchemes["statesNorthEast.ts (40)"]
                UTSchemes["unionTerritories.ts (40)"]
            end
        end
    end

    subgraph Network_Boundary ["Network Boundary"]
        subgraph Backend_Bridge ["Pluggable Backend API (Scaffolded)"]
            API_Chat["POST /api/assistant/chat\n(FastAPI / Express Gateway)"]
        end
        
        subgraph External_Web ["External Government Infrastructure"]
            OfficialGovSites["Official Portals (*.gov.in, *.nic.in)\nApplication & verification targets"]
        end
    end

    %% Wiring
    Router --> R_Home
    Router --> R_Schemes
    Router --> R_Gov
    Router --> R_Detail
    Router --> R_Elig
    Router --> R_Assist

    R_Schemes --> FilterService
    R_Gov --> FilterService
    R_Elig --> FilterService
    R_Assist --> AssistService

    FilterService --> SchemeMaster
    FilterService --> GovCatalog
    SchemeMaster --> CentralSchemes
    SchemeMaster --> SouthSchemes
    SchemeMaster --> NorthSchemes
    SchemeMaster --> EastSchemes
    SchemeMaster --> WestSchemes
    SchemeMaster --> NESchemes
    SchemeMaster --> UTSchemes

    AssistService -.->|1. Attempts HTTP (2000ms timeout)| API_Chat
    AssistService -->|2. Local Heuristic Fallback| SchemeMaster
    R_Detail --> OfficialGovSites
```

---

## 2. Component Hierarchy & Routing Topology

The application uses **React Router DOM v7** with layout persistence. The root [`App.tsx`](file:///D:/civicai/frontend/src/App.tsx) wraps the application in `ThemeProvider` and `LanguageProvider`.

```text
<App>
  <ThemeProvider>
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />                  <!-- Sticky header with theme, language, and navigation -->
        <main>
          <AnimatedRoutes>           <!-- Keyed on location.pathname for route transitions -->
            ├── Route /                             -> <LandingPage />
            ├── Route /schemes                      -> <SchemesPage />
            ├── Route /schemes/central              -> <GovernmentSchemesPage />
            ├── Route /schemes/state/:govSlug       -> <GovernmentSchemesPage />
            ├── Route /schemes/ut/:govSlug          -> <GovernmentSchemesPage />
            ├── Route /schemes/:govSlug (compat)    -> <GovernmentSchemesPage />
            ├── Route /schemes/:id                  -> <SchemeDetailPage />
            ├── Route /eligibility                  -> <EligibilityPage />
            ├── Route /assistant                    -> <AssistantPage />
            ├── Route /checklist                    -> <ChecklistPage />
            ├── Route /about                        -> <AboutPage />
            ├── Route /privacy                      -> <PrivacyPage />
            └── Route *                             -> <Navigate to="/" replace />
          </AnimatedRoutes>
        </main>
        <Footer />                  <!-- Persistent footer with portal links & disclaimers -->
      </BrowserRouter>
    </LanguageProvider>
  </ThemeProvider>
</App>
```

### Route Design Principles
1. **Canonical Segmented Routing:**
   - Central: `/schemes/central`
   - 28 States: `/schemes/state/:govSlug` (e.g. `/schemes/state/andhra-pradesh`, `/schemes/state/karnataka`)
   - 8 Union Territories: `/schemes/ut/:govSlug` (e.g. `/schemes/ut/delhi`, `/schemes/ut/puducherry`)
2. **Backward Compatibility:**
   - Direct paths (`/schemes/:govSlug`) dynamically map across all 36 state/UT slugs to ensure legacy bookmarks and query links continue to function without disruption.
3. **Route Extraction Safety:**
   - In [`GovernmentSchemesPage.tsx`](file:///D:/civicai/frontend/src/pages/GovernmentSchemesPage.tsx), the slug is resolved via `useParams().govSlug` or by safely splitting `location.pathname`, protecting against route segment mismatches.

---

## 3. Data Architecture & Partitioning

CivicAI tracks **205 verified government schemes** and **37 administrative jurisdictions**.

### 3.1 Regional Partitioning
To prevent a monolithic 4,000-line data file and maintain clear maintainability, scheme definitions are partitioned into regional modules under [`frontend/src/data/schemes/`](file:///D:/civicai/frontend/src/data/schemes/):

```text
frontend/src/data/
├── governments.ts           # 37 Government entities (names, codes, emblems, portal URLs)
├── schemes.ts               # Master aggregator exporting SCHEMES: Scheme[] (205 items)
└── schemes/
    ├── central.ts           # Central Government (25 schemes)
    ├── statesSouth.ts       # AP, TG, TN, KA, KL (25 schemes, 5 each)
    ├── statesNorth.ts       # UP, RJ, PB, HR, UK, HP (30 schemes, 5 each)
    ├── statesEast.ts        # WB, BR, OD, JH (20 schemes, 5 each)
    ├── statesWest.ts        # MH, GJ, MP, CG, GA (25 schemes, 5 each)
    ├── statesNorthEast.ts   # AS, AR, MN, ML, MZ, NL, SK, TR (40 schemes, 5 each)
    └── unionTerritories.ts  # AN, CH, DNHDD, DL, JK, LA, LD, PY (40 schemes, 5 each)
```

### 3.2 Scheme Entity Contract (`Scheme`)
Every scheme record conforms to the strict TypeScript interface in [`types/scheme.ts`](file:///D:/civicai/frontend/src/types/scheme.ts):

- **Identity & Nomenclature:** `id`, `name`, `tagline`, `category`, `categoryLabel`, with optional regional language names (`hindiName`, `teluguName`, `tamilName`).
- **Jurisdiction Metadata:** `governmentLevel` (`'central' | 'state' | 'union-territory'`), `stateCode` (`StateCode | null`), `administeringGovernment`, `schemeStatus` (`'active' | 'closed' | 'upcoming' | 'needs-verification'`).
- **Descriptive Data:** `shortSummary`, `fullDescription`, `financialBenefit`, `keyObjectives`, `beneficiaries`.
- **Eligibility Engine Rules:** `eligibilityRules` containing numerical and categorical constraints:
  - `minAge`, `maxAge`: Numerical bounds
  - `maxIncome`: Annual family income ceiling in INR
  - `targetGender`: `'all' | 'female' | 'male'`
  - `landHoldingMaxHectares`: Agricultural ceiling
  - `socialCategories`: Array of `'General' | 'OBC' | 'SC' | 'ST' | 'EWS'`
  - `isBPLRequired`: Boolean flag
  - `minDisabilityPercentage`: For PwD targeted welfare
- **Application & Procedural Guidance:** `applicationSteps: ApplicationStep[]`, `requiredDocuments: RequiredDocument[]`, `faqs: SchemeFAQ[]`.
- **Authoritative Provenance:** `officialSources: OfficialSource[]` tracking `url`, `lastVerifiedDate`, `department`, `verificationStatus`, and `linkStatus`.

---

## 4. Core Subsystems & Services

### 4.1 Scheme Filter Service ([`schemeFilterService.ts`](file:///D:/civicai/frontend/src/services/schemeFilterService.ts))
Provides deterministic, pure querying over the in-memory dataset:
- `getCentralSchemes()`: Strictly filters `governmentLevel === 'central' && stateCode === null` (25 schemes).
- `getStateSchemes(stateCode)`: Filters by matching state code and state/UT government level (strictly 5 per state/UT).
- `getSchemesByGovernment(slugOrId)`: Polymorphic resolver matching slug, id, or state abbreviation.
- `searchSchemes(query, governmentIdOrSlug)`: Multi-field search querying scheme name, regional name, tagline, description, category, and state abbreviations.
- `getGovernmentStats()`: Computes real-time verified counts and total schemes across jurisdictions.

### 4.2 Assistant Service ([`assistantService.ts`](file:///D:/civicai/frontend/src/services/assistantService.ts))
Implements a dual-mode communication strategy:
1. **HTTP Probe:** Dispatches a `POST` request to `/api/assistant/chat` with an `AbortController` configured for a 2,000ms timeout.
2. **Deterministic Fallback Engine:** If the remote API endpoint is offline or times out (which occurs in client-only deployments), it triggers `generateLocalDemonstrationResponse(...)`:
   - Detects jurisdiction intent across all 37 Indian states, UTs, and Central Government.
   - Evaluates keyword matches against the 205 local scheme definitions.
   - Returns localized responses in English, Hindi, Tamil, or Telugu.
   - Attaches verified citations, missing evidence warnings, and recommended follow-up questions.

### 4.3 Eligibility Assessment Wizard ([`EligibilityPage.tsx`](file:///D:/civicai/frontend/src/pages/EligibilityPage.tsx))
A 3-step interactive citizen assessment engine:
- **Step 1 — Citizen Profile:** Captures state/UT residence, age, gender, social category, and PwD/health status.
- **Step 2 — Economic & Land Profile:** Evaluates annual family income, cultivable land ownership, BPL card possession, and government employee status.
- **Step 3 — Assessment Output:** Computes matching scores (`'high' | 'conditional' | 'unlikely'`) across eligible schemes, providing explicit bullet-point reasons for disqualification (e.g., age bounds exceeded, state residency requirement, statutory public employee exclusion).

### 4.4 Voice Recognition Subsystem ([`useSpeechRecognition.ts`](file:///D:/civicai/frontend/src/hooks/useSpeechRecognition.ts))
- Leverages the W3C Web Speech API (`SpeechRecognition` or `webkitSpeechRecognition`).
- Automatically maps active language context to BCP-47 language codes:
  - English: `en-IN`
  - Hindi: `hi-IN`
  - Tamil: `ta-IN`
  - Telugu: `te-IN`
- Provides real-time interim transcript updates and automatic fallback if the browser lacks microphone permission or API support.

### 4.5 Localization & Internationalization ([`LanguageContext.tsx`](file:///D:/civicai/frontend/src/context/LanguageContext.tsx))
- Built with a React Context provider storing the active language (`en`, `hi`, `ta`, `te`).
- Persists user language preference in `localStorage`.
- Strongly-typed translation dictionaries in [`src/i18n/locales/`](file:///D:/civicai/frontend/src/i18n/locales/).

### 4.6 Theme Engine ([`ThemeContext.tsx`](file:///D:/civicai/frontend/src/context/ThemeContext.tsx))
- Supports three modes: `'light'`, `'dark'`, and `'system'`.
- Automatically responds to OS preference shifts via `window.matchMedia('(prefers-color-scheme: dark)')`.
- Toggles the `.dark` class on `document.documentElement` to control Tailwind CSS v4 variables.

---

## 5. Pluggable Backend Architecture (Scaffolded)

The repository provides a scaffolded backend directory structure under [`backend/app/`](file:///D:/civicai/backend/app/):

```text
backend/
└── app/
    ├── api/          # Route handlers & controller endpoints
    ├── data/         # Ingestion scripts & raw scheme policy documents
    ├── models/       # Pydantic or ORM data models
    └── services/     # RAG pipeline, embedding vectorizer & LLM connectors
```

### Planned API Integration Contract
When a backend server is mounted, it exposes the endpoint expected by `assistantService.ts`:
- **Endpoint:** `POST /api/assistant/chat`
- **Request Body:**
  ```json
  {
    "query": "What schemes are available for small farmers in Andhra Pradesh?",
    "language": "en",
    "government": "andhra-pradesh"
  }
  ```
- **Response Structure:**
  ```json
  {
    "text": "Detailed synthesized guidance...",
    "matchedSchemes": [...],
    "missingEvidenceNotes": [...],
    "suggestedFollowUps": [...],
    "citations": [
      {
        "name": "Rythu Bharosa Portal",
        "url": "https://ysrrythubharosa.ap.gov.in",
        "lastVerifiedDate": "2026-10-31"
      }
    ]
  }
  ```

---

## 6. Security, Accessibility & Reliability

1. **External Link Hardening:**
   - All external anchor tags linking to government portals use `rel="noopener noreferrer"` and `target="_blank"`.
   - Automated HTTP link verification is performed via `scripts/link_audit.cjs`.
2. **Defensive Keyboard Navigation:**
   - Interactive portal cards use single semantic `<Link>` wrappers with visible `focus-visible:ring-2` focus indicators.
   - Screen-reader labels (`aria-label`) are assigned to all icon-only buttons (theme toggle, clear search, voice input).
3. **Zero Secrets in Frontend:**
   - No API keys, credentials, or private tokens are embedded in the client build. All client features execute deterministically.
