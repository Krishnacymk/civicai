import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { LandingPage } from './pages/LandingPage';
import { SchemesPage } from './pages/SchemesPage';
import { SchemeDetailPage } from './pages/SchemeDetailPage';
import { GovernmentSchemesPage } from './pages/GovernmentSchemesPage';
import { GOVERNMENTS } from './data/governments';
import { AssistantPage } from './pages/AssistantPage';
import { EligibilityPage } from './pages/EligibilityPage';
import { ChecklistPage } from './pages/ChecklistPage';
import { AboutPage } from './pages/AboutPage';
import { PrivacyPage } from './pages/PrivacyPage';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-fade-in">
      <Routes location={location}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/schemes" element={<SchemesPage />} />

        {/* 1. Canonical government jurisdiction routes */}
        <Route path="/schemes/central" element={<GovernmentSchemesPage />} />
        <Route path="/schemes/state/:govSlug" element={<GovernmentSchemesPage />} />
        <Route path="/schemes/ut/:govSlug" element={<GovernmentSchemesPage />} />

        {/* 2. Direct government slug routes for backward compatibility (e.g. /schemes/karnataka) */}
        {GOVERNMENTS.filter(gov => gov.slug !== 'central').map(gov => (
          <Route key={gov.slug} path={`/schemes/${gov.slug}`} element={<GovernmentSchemesPage />} />
        ))}

        {/* 3. Scheme detail route */}
        <Route path="/schemes/:id" element={<SchemeDetailPage />} />

        {/* 4. Core feature pages */}
        <Route path="/assistant" element={<AssistantPage />} />
        <Route path="/eligibility" element={<EligibilityPage />} />
        <Route path="/checklist" element={<ChecklistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />

        {/* 5. Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#101412] text-[#161815] dark:text-[#F3EFEA] transition-colors duration-150">
            <Navbar />
            <main className="flex-1">
              <AnimatedRoutes />
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
