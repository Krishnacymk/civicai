# CivicAI API & Service Reference

This document describes the application programming interfaces (APIs) and service contracts currently implemented in the CivicAI codebase.

> [!IMPORTANT]
> **Current Architecture Note:**  
> CivicAI currently operates as a client-side Single Page Application (SPA).  
> - **In-Memory Service APIs:** Fully implemented in TypeScript.  
> - **Backend HTTP Endpoints:** The client application includes a network client call targeting `/api/assistant/chat`. A backend service is planned and scaffolded under `backend/app/`, but **no standalone backend server is currently bundled or running** in this repository. When the network call is unreachable, the application falls back gracefully to its embedded local demonstration engine.

---

## 1. Client-Side Service APIs (`schemeFilterService.ts`)

The primary data query and filtering operations are exposed as pure, deterministic functions in [`frontend/src/services/schemeFilterService.ts`](file:///D:/civicai/frontend/src/services/schemeFilterService.ts).

### 1.1 `getCentralSchemes(schemes?: Scheme[]): Scheme[]`
Returns all welfare schemes strictly administered by the Central Government of India.
- **Filtering Logic:** `scheme.governmentLevel === 'central' && scheme.stateCode === null`
- **Output:** Exactly 25 central schemes.

### 1.2 `getStateSchemes(stateCode: StateCode, schemes?: Scheme[]): Scheme[]`
Returns schemes administered by a specific state or union territory.
- **Parameters:**
  - `stateCode`: Valid two-letter state/UT code (e.g., `'AP'`, `'TG'`, `'TN'`, `'KA'`, `'DL'`).
- **Filtering Logic:** `(s.governmentLevel === 'state' || s.governmentLevel === 'union-territory') && s.stateCode === stateCode`
- **Output:** Exactly 5 schemes per state/UT (140 total state schemes across 28 states, 40 total across 8 UTs).

### 1.3 `getSchemesByGovernment(governmentIdOrSlug: string, schemes?: Scheme[]): Scheme[]`
Resolves schemes for a specified government jurisdiction using any identifier.
- **Parameters:**
  - `governmentIdOrSlug`: Matches `slug` (e.g. `'andhra-pradesh'`, `'karnataka'`), `id` (e.g. `'gov-ap'`), or `stateCode` (e.g. `'AP'`).
- **Behavior:**
  - If `slug === 'central'`, delegates to `getCentralSchemes()`.
  - If state or UT, delegates to `getStateSchemes(stateCode)`.
  - If unknown, returns an empty array `[]`.

### 1.4 `getSchemesByCategory(category: SchemeCategory | 'all', governmentIdOrSlug?: string, schemes?: Scheme[]): Scheme[]`
Filters schemes by functional category within an optional jurisdiction scope.
- **Categories:** `'agriculture'`, `'education'`, `'healthcare'`, `'women'`, `'business'`, `'pension'`, `'housing'`, `'artisans'`, `'children-nutrition'`, `'disability-pwd'`, `'unemployment-skills'`, `'workers-social-security'`, `'seniors-elderly'`, `'low-income-welfare'`.

### 1.5 `searchSchemes(query: string, governmentIdOrSlug?: string, schemes?: Scheme[]): Scheme[]`
Executes multi-field textual matching across scheme metadata:
- Scans `name`, `tagline`, `categoryLabel`, `fullDescription`, `administeringGovernment`, and regional name fields (`hindiName`, `teluguName`, `tamilName`).
- Performs case-insensitive matching with trimmed whitespace.

### 1.6 `getGovernmentStats(schemes?: Scheme[]): GovernmentStats[]`
Aggregates summary statistics for all 37 government entities:
- **Returns:**
  ```typescript
  interface GovernmentStats {
    governmentId: string;
    name: string;
    level: 'central' | 'state' | 'union-territory';
    jurisdictionType?: 'central' | 'state' | 'union-territory';
    stateCode: StateCode | null;
    schemeCount: number;
    verifiedCount: number;
    partiallyVerifiedCount: number;
  }
  ```

### 1.7 `getCatalogSummary(schemes?: Scheme[]): CatalogSummary`
Generates top-level catalog totals:
- Total schemes: `205`
- Central count: `25`
- State count: `140`
- UT count: `40`
- Government breakdown: Dictionary of counts per jurisdiction ID.

---

## 2. Assistant Service API (`assistantService.ts`)

Located in [`frontend/src/services/assistantService.ts`](file:///D:/civicai/frontend/src/services/assistantService.ts).

### `sendQueryToAssistant(query, history?, language?, targetGovernment?): Promise<AssistantMessage>`

Dispatches a citizen query to the assistant pipeline.

#### Parameters
- `query` (`string`): Natural language citizen question.
- `_history` (`AssistantMessage[]`, optional): Prior conversation turns.
- `language` (`LanguageCode`, default `'en'`): Current UI language (`'en' | 'hi' | 'ta' | 'te'`).
- `targetGovernment` (`string`, default `'all'`): Selected jurisdiction scope (e.g. `'central'`, `'andhra-pradesh'`, `'all'`).

#### Data Flow & Dual-Mode Execution
1. **Network Probe:**
   Dispatches an HTTP `POST` request to `/api/assistant/chat` with a 2,000ms `AbortController` timeout.
2. **Deterministic Fallback:**
   If the fetch fails (due to network timeout, 404 Not Found, or offline backend), the catch block executes `generateLocalDemonstrationResponse(...)`.

#### Return Type (`AssistantMessage`)
```typescript
interface AssistantMessage {
  id: string;
  sender: 'user' | 'assistant';
  timestamp: string;
  text: string;
  isDemonstrationMode?: boolean;
  matchedSchemes?: Scheme[];
  missingEvidenceNotes?: string[];
  suggestedFollowUps?: string[];
  citations?: {
    name: string;
    url: string;
    lastVerifiedDate: string;
  }[];
}
```

---

## 3. Network HTTP Contract (Planned / Scaffolded)

The client code in `assistantService.ts` contains the following HTTP client request definition:

### `POST /api/assistant/chat`

- **Status:** **Client network contract defined; backend endpoint planned / scaffolded**.
- **Request Headers:**
  - `Content-Type: application/json`
- **Request Payload:**
  ```json
  {
    "query": "What schemes help women entrepreneurs in Tamil Nadu?",
    "language": "en",
    "government": "tamil-nadu"
  }
  ```
- **Expected Success Response (`200 OK`):**
  ```json
  {
    "text": "The Government of Tamil Nadu provides the following assistance...",
    "matchedSchemes": [
      {
        "id": "tn-kmut-women-basic-income",
        "name": "Kalaignar Magalir Urimai Thittam (KMUT)",
        "administeringGovernment": "Government of Tamil Nadu",
        "financialBenefit": "Rs 1,000 monthly direct bank transfer"
      }
    ],
    "missingEvidenceNotes": [
      "Requires Tamil Nadu Smart Ration Card (PHH / NPHH)"
    ],
    "suggestedFollowUps": [
      "What are the family electricity consumption limits for KMUT?"
    ],
    "citations": [
      {
        "name": "KMUT Official Portal",
        "url": "https://kmut.tn.gov.in",
        "lastVerifiedDate": "2026-10-31"
      }
    ]
  }
  ```

---

## 4. Browser Platform APIs Utilized

CivicAI interacts directly with the following standard Web APIs:

| Web API | Location | Purpose |
| :--- | :--- | :--- |
| **Web Speech API** (`SpeechRecognition`) | `hooks/useSpeechRecognition.ts` | Speech-to-text input with `en-IN`, `hi-IN`, `ta-IN`, `te-IN` locale mapping |
| **Window Match Media** (`prefers-color-scheme`) | `context/ThemeContext.tsx` | Operating system light/dark theme detection |
| **DOM Storage** (`localStorage`) | `context/ThemeContext.tsx`, `context/LanguageContext.tsx` | Persistent caching of theme and locale preferences |
| **History API** (`window.history.pushState`) | `App.tsx` via `react-router-dom` | Browser URL navigation, back/forward cache state |
