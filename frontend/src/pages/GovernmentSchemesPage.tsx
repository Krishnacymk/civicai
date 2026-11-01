import { useState, useMemo } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { 
  Search, 
  X, 
  CheckSquare, 
  ExternalLink, 
  RotateCcw, 
  MapPin,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { getGovernmentBySlug, getGovernmentByCode, getGovernmentById } from '../data/governments';
import { 
  getSchemesByGovernment, 
  getCentralSchemesAvailableInState 
} from '../services/schemeFilterService';
import { CATEGORIES } from '../data/schemes';
import { GovernmentSectionNav } from '../components/schemes/GovernmentSectionNav';
import { useLanguage } from '../context/LanguageContext';
import type { SchemeCategory, SchemeOperationalStatus } from '../types/scheme';

export const GovernmentSchemesPage = () => {
  const { govSlug: paramSlug } = useParams<{ govSlug: string }>();
  const location = useLocation();
  const { language } = useLanguage();

  // Extract slug cleanly from route params or pathname segments
  const activeSlug = useMemo(() => {
    if (paramSlug) return paramSlug;
    const segments = location.pathname.split('/').filter(Boolean);
    // handles /schemes/state/:slug or /schemes/ut/:slug
    if (segments.length >= 3 && (segments[1] === 'state' || segments[1] === 'ut')) {
      return segments[2];
    }
    // handles /schemes/central or /schemes/:slug
    if (segments.length >= 2 && segments[0] === 'schemes') {
      return segments[1];
    }
    return '';
  }, [paramSlug, location.pathname]);

  const gov = useMemo(() => {
    if (!activeSlug) return undefined;
    return getGovernmentBySlug(activeSlug) || getGovernmentByCode(activeSlug) || getGovernmentById(activeSlug);
  }, [activeSlug]);

  // State filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SchemeCategory | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<SchemeOperationalStatus | 'all'>('all');
  const [showCentralInState, setShowCentralInState] = useState(false);

  // Base state/central schemes directly administered by this government
  const administeredSchemes = useMemo(() => {
    return gov ? getSchemesByGovernment(gov.slug) : [];
  }, [gov]);

  // Central schemes available in state/UT (only relevant for state/UT governments)
  const centralSchemes = useMemo(() => {
    if (gov?.level === 'state' || gov?.level === 'union-territory') {
      return getCentralSchemesAvailableInState();
    }
    return [];
  }, [gov?.level]);

  // Filter schemes
  const filteredAdministeredSchemes = useMemo(() => {
    return administeredSchemes.filter(scheme => {
      // Category filter
      if (selectedCategory !== 'all' && scheme.category !== selectedCategory) {
        return false;
      }
      // Status filter
      if (selectedStatus !== 'all' && scheme.schemeStatus !== selectedStatus) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = scheme.name.toLowerCase().includes(q);
        const matchHindi = scheme.hindiName?.toLowerCase().includes(q) ?? false;
        const matchTelugu = scheme.teluguName?.toLowerCase().includes(q) ?? false;
        const matchTamil = scheme.tamilName?.toLowerCase().includes(q) ?? false;
        const matchSummary = scheme.shortSummary.toLowerCase().includes(q);
        const matchBenefit = scheme.financialBenefit.toLowerCase().includes(q);
        const matchBeneficiary = scheme.beneficiaries.some(b => b.toLowerCase().includes(q));

        if (!matchName && !matchHindi && !matchTelugu && !matchTamil && !matchSummary && !matchBenefit && !matchBeneficiary) {
          return false;
        }
      }
      return true;
    });
  }, [administeredSchemes, selectedCategory, selectedStatus, searchQuery]);

  const filteredCentralSchemes = useMemo(() => {
    if (!showCentralInState) return [];
    return centralSchemes.filter(scheme => {
      if (selectedCategory !== 'all' && scheme.category !== selectedCategory) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        return scheme.name.toLowerCase().includes(q) || scheme.shortSummary.toLowerCase().includes(q);
      }
      return true;
    });
  }, [centralSchemes, showCentralInState, selectedCategory, searchQuery]);

  // If invalid government slug, display a helpful not-found state
  if (!gov) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center bg-[#FAF8F5] dark:bg-[#101412]">
        <div className="max-w-md space-y-4">
          <div className="w-16 h-16 bg-[#B95938]/10 text-[#B95938] dark:text-[#DFB24E] rounded-full flex items-center justify-center mx-auto mb-2">
            <Building2 className="w-8 h-8" />
          </div>
          <h1 className="font-serif text-3xl font-bold text-[#161815] dark:text-[#F3EFEA]">
            Government Portal Not Found
          </h1>
          <p className="text-sm text-[#565C56] dark:text-[#A3ACA5]">
            We could not locate a government welfare portal for &ldquo;{activeSlug || 'this URL'}&rdquo;. Please explore our verified national and state portals.
          </p>
          <div className="pt-2">
            <Link
              to="/schemes"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A3B2B] text-white text-xs font-semibold rounded-lg hover:bg-[#122A1E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A3B2B]"
            >
              <span>Explore All 37 Portals</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedStatus('all');
  };

  const getLocalizedGovName = () => {
    if (language === 'te' && gov.teluguName) return gov.teluguName;
    if (language === 'hi' && gov.hindiName) return gov.hindiName;
    if (language === 'ta' && gov.tamilName) return gov.tamilName;
    return gov.name;
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] text-[#161815] dark:text-[#F3EFEA] transition-colors duration-150">
      
      {/* 1. DEDICATED GOVERNMENT PORTAL HEADER BANNER */}
      <section className="border-b border-[#E7DFD4] dark:border-[#232A25] bg-[#FFFFFF] dark:bg-[#181D1A] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs font-mono text-[#565C56] dark:text-[#A3ACA5] mb-5">
            <Link to="/" className="hover:text-[#1A3B2B] dark:hover:text-[#DFB24E]">Home</Link>
            <span>/</span>
            <Link to="/schemes" className="hover:text-[#1A3B2B] dark:hover:text-[#DFB24E]">Portals</Link>
            <span>/</span>
            <span className="text-[#1A3B2B] dark:text-[#DFB24E] font-semibold">{gov.regionLabel}</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-md bg-[#1A3B2B] text-white">
                  {gov.level === 'central' 
                    ? 'National Government' 
                    : gov.level === 'union-territory' 
                    ? `${gov.stateCode} UT Portal` 
                    : `${gov.stateCode} State Portal`}
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#EFE8DE] dark:bg-[#232A25] text-[#565C56] dark:text-[#A3ACA5] border border-[#D5CABE] dark:border-[#2C352F] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#B95938] dark:text-[#DFB24E]" />
                  <span>{gov.regionLabel}</span>
                </span>
                <span className="px-2.5 py-1 text-xs font-mono rounded-md bg-[#EBF2ED] dark:bg-[#1A2E22] text-[#1A3B2B] dark:text-[#7A9984] font-semibold border border-[#C5DAC9] dark:border-[#253D30]">
                  Capital: {gov.capitalCity}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-bold tracking-tight">
                {getLocalizedGovName()}
              </h1>

              <p className="text-sm sm:text-base text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                {gov.fullDescription}
              </p>

              {/* Official Links & Helpline Bar */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                <a
                  href={gov.officialPortalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#1A3B2B] dark:text-[#DFB24E] font-bold hover:underline"
                >
                  <Building2 className="w-4 h-4" />
                  <span>{gov.officialPortalName}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <span className="text-[#858D85] dark:text-[#737D75]">•</span>
                <span className="text-[#565C56] dark:text-[#A3ACA5]">
                  Citizen Helpline: <strong className="text-[#161815] dark:text-[#F3EFEA]">{gov.helpline}</strong>
                </span>
              </div>
            </div>

            {/* Scheme Count Stat Box */}
            <div className="lg:shrink-0 bg-[#FAF8F5] dark:bg-[#121614] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 shadow-xs min-w-[240px] text-center lg:text-left space-y-2">
              <div className="text-xs font-mono text-[#565C56] dark:text-[#A3ACA5] uppercase tracking-wider flex items-center justify-center lg:justify-start gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#1A3B2B] dark:text-[#DFB24E]" />
                <span>Administered Schemes</span>
              </div>
              <div className="font-serif text-4xl font-bold text-[#1A3B2B] dark:text-[#DFB24E]">
                {administeredSchemes.length}
              </div>
              <p className="text-[11px] text-[#565C56] dark:text-[#A3ACA5]">
                100% verified against official gazettes & department circulars.
              </p>
              <div className="pt-2 border-t border-[#E7DFD4] dark:border-[#232A25]">
                <Link
                  to="/eligibility"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#B95938] dark:text-[#DFB24E] hover:underline"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Check Your Eligibility</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SCHEMES LISTING & SEARCH AREA */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-4 mb-8 shadow-xs space-y-4">
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#858D85]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${gov.regionLabel} schemes by name, benefits, keywords...`}
                className="w-full pl-9 pr-9 py-2 text-xs sm:text-sm rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] text-[#161815] dark:text-[#F3EFEA] focus:outline-hidden focus:ring-1 focus:ring-[#1A3B2B]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858D85] hover:text-[#161815] dark:hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as SchemeCategory | 'all')}
                className="px-3 py-2 text-xs rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] text-[#161815] dark:text-[#F3EFEA] focus:outline-hidden focus:ring-1 focus:ring-[#1A3B2B]"
                aria-label="Filter by category"
              >
                <option value="all">All Categories ({administeredSchemes.length})</option>
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.label}</option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as SchemeOperationalStatus | 'all')}
                className="px-3 py-2 text-xs rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] text-[#161815] dark:text-[#F3EFEA] focus:outline-hidden focus:ring-1 focus:ring-[#1A3B2B]"
                aria-label="Filter by operational status"
              >
                <option value="all">All Statuses</option>
                <option value="active">Active & Open</option>
                <option value="cyclical">Cyclical / Seasonal</option>
                <option value="revised">Recently Revised</option>
              </select>

              {(searchQuery || selectedCategory !== 'all' || selectedStatus !== 'all') && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="p-2 text-[#B95938] hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                  title="Reset filters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Optional Toggle for State/UT Portals: Include Central Schemes Accessible in State/UT */}
          {gov.level !== 'central' && (
            <div className="pt-3 border-t border-[#E7DFD4] dark:border-[#232A25] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="showCentral"
                  checked={showCentralInState}
                  onChange={(e) => setShowCentralInState(e.target.checked)}
                  className="rounded border-[#D5CABE] text-[#1A3B2B] focus:ring-[#1A3B2B]"
                />
                <label htmlFor="showCentral" className="text-[#565C56] dark:text-[#C5CDC6] cursor-pointer">
                  Show All-India Central Schemes accessible in {gov.regionLabel} (+{centralSchemes.length} schemes)
                </label>
              </div>

              <span className="font-mono text-[#858D85] dark:text-[#737D75]">
                {gov.level === 'union-territory' ? 'UT' : 'State'} Government count: <strong>{administeredSchemes.length}</strong> (Central count strictly isolated)
              </span>
            </div>
          )}
        </div>

        {/* Schemes Results Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#565C56] dark:text-[#A3ACA5]">
            <span>
              Showing <strong>{filteredAdministeredSchemes.length}</strong> schemes administered by {gov.name}
            </span>
            <span>
              Portal Code: <strong className="text-[#1A3B2B] dark:text-[#DFB24E]">{gov.stateCode || 'IN-CENTRAL'}</strong>
            </span>
          </div>

          {filteredAdministeredSchemes.length === 0 ? (
            <div className="bg-white dark:bg-[#181D1A] rounded-xl border border-dashed border-[#D5CABE] dark:border-[#2C352F] p-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#FAF8F5] dark:bg-[#232A25] flex items-center justify-center mx-auto text-[#858D85]">
                <Search className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-[#161815] dark:text-[#F3EFEA]">
                No schemes match your active filter
              </h3>
              <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] max-w-sm mx-auto">
                Try searching for different keywords or clear the filters to view all {administeredSchemes.length} schemes for {gov.regionLabel}.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1A3B2B] text-white text-xs font-semibold rounded-lg hover:bg-[#122A1E] transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Filters</span>
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAdministeredSchemes.map((scheme) => (
                <div
                  key={scheme.id}
                  className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden group"
                >
                  <div className="space-y-3">
                    {/* Header: Category & Verification */}
                    <div className="flex items-center justify-between gap-2">
                      <span className="px-2.5 py-1 text-xs font-semibold rounded bg-[#EBF2ED] dark:bg-[#1A2E22] text-[#1A3B2B] dark:text-[#7A9984]">
                        {scheme.categoryLabel}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#FAF8F5] dark:bg-[#141916] text-[#565C56] dark:text-[#A3ACA5] border border-[#E7DFD4] dark:border-[#232A25]">
                          {scheme.stateCode 
                            ? `${scheme.stateCode} ${scheme.governmentLevel === 'union-territory' ? 'UT' : 'State'}` 
                            : 'Central'}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#161815] dark:text-[#F3EFEA] group-hover:text-[#1A3B2B] dark:group-hover:text-[#DFB24E] transition-colors leading-snug">
                        <Link to={`/schemes/${scheme.id}`}>
                          {scheme.name}
                        </Link>
                      </h3>
                      {scheme.teluguName && language === 'te' && (
                        <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] mt-0.5 font-medium">{scheme.teluguName}</p>
                      )}
                      {scheme.hindiName && language === 'hi' && (
                        <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] mt-0.5 font-medium">{scheme.hindiName}</p>
                      )}
                      {scheme.tamilName && language === 'ta' && (
                        <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] mt-0.5 font-medium">{scheme.tamilName}</p>
                      )}
                    </div>

                    {/* Benefit Highlight Box */}
                    <div className="p-3 bg-[#FAF8F5] dark:bg-[#121614] rounded-lg border border-[#E7DFD4] dark:border-[#2C352F] space-y-1">
                      <div className="text-[10px] font-mono uppercase text-[#858D85] dark:text-[#737D75] font-semibold">
                        Financial / Key Benefit
                      </div>
                      <div className="font-serif font-bold text-sm text-[#1A3B2B] dark:text-[#DFB24E] leading-tight">
                        {scheme.financialBenefit}
                      </div>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed line-clamp-3">
                      {scheme.shortSummary}
                    </p>

                    {/* Eligibility & Beneficiaries Pills */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {scheme.beneficiaries.slice(0, 3).map((b, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 text-[10px] rounded bg-[#EFE8DE] dark:bg-[#232A25] text-[#565C56] dark:text-[#A3ACA5]"
                        >
                          {b}
                        </span>
                      ))}
                      {scheme.beneficiaries.length > 3 && (
                        <span className="px-1.5 py-0.5 text-[10px] text-[#858D85] dark:text-[#737D75]">
                          +{scheme.beneficiaries.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-[#E7DFD4] dark:border-[#232A25] flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/schemes/${scheme.id}`}
                        className="px-3.5 py-1.5 bg-[#FAF8F5] dark:bg-[#232A25] text-[#161815] dark:text-[#F3EFEA] hover:bg-[#EAE3D6] dark:hover:bg-[#2D3630] text-xs font-semibold rounded border border-[#D5CABE] dark:border-[#2C352F] transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        to={`/checklist?scheme=${scheme.id}`}
                        className="px-3 py-1.5 bg-[#FAF8F5] dark:bg-[#1E2E24] text-[#1A3B2B] dark:text-[#7A9984] hover:bg-[#EBF2ED] text-xs font-semibold rounded border border-[#C5DAC9] dark:border-[#253D30] transition-colors flex items-center gap-1"
                      >
                        <CheckSquare className="w-3 h-3" />
                        <span>Checklist</span>
                      </Link>
                    </div>

                    <a
                      href={scheme.officialSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono text-[#565C56] dark:text-[#A3ACA5] hover:text-[#1A3B2B] dark:hover:text-[#DFB24E] flex items-center gap-1"
                    >
                      <span>Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 3. SEPARATE SECTION: CENTRAL SCHEMES ACCESSIBLE IN THIS STATE/UT (NEVER MIXED) */}
        {gov.level !== 'central' && showCentralInState && (
          <div className="mt-16 pt-12 border-t-2 border-dashed border-[#D5CABE] dark:border-[#2C352F] space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#A07A18] dark:text-[#DFB24E]">
                <Building2 className="w-3.5 h-3.5" />
                <span>Central Government Programs Available in {gov.regionLabel}</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">
                National Schemes Accessible Across All States
              </h3>
              <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#A3ACA5]">
                These programs are funded and administered by Union Ministries of the Government of India. They are available to eligible residents in {gov.regionLabel} alongside state-administered schemes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {filteredCentralSchemes.slice(0, 6).map((cScheme) => (
                <div
                  key={cScheme.id}
                  className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-5 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-[#FAF3E2] dark:bg-[#252219] text-[#A07A18] dark:text-[#DFB24E] font-semibold rounded">
                      Central (All India)
                    </span>
                    <h4 className="font-serif font-bold text-base text-[#161815] dark:text-[#F3EFEA]">
                      <Link to={`/schemes/${cScheme.id}`} className="hover:underline">
                        {cScheme.name}
                      </Link>
                    </h4>
                    <div className="text-xs font-serif font-bold text-[#1A3B2B] dark:text-[#DFB24E]">
                      {cScheme.financialBenefit}
                    </div>
                    <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] line-clamp-2">
                      {cScheme.shortSummary}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#E7DFD4] dark:border-[#232A25] flex items-center justify-between text-xs">
                    <Link
                      to={`/schemes/${cScheme.id}`}
                      className="text-xs font-semibold text-[#1A3B2B] dark:text-[#DFB24E] hover:underline"
                    >
                      View Details →
                    </Link>
                    <a
                      href={cScheme.officialSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#858D85] hover:text-[#161815] flex items-center gap-1"
                    >
                      <span>.gov.in</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-2">
              <Link
                to="/schemes/central"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FAF8F5] dark:bg-[#1F2622] text-[#1A3B2B] dark:text-[#DFB24E] border border-[#D5CABE] dark:border-[#2C352F] text-xs font-semibold rounded-lg hover:bg-[#EFE8DE] transition-colors"
              >
                <span>View All 25 Central Government Schemes</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        )}

      </section>

      {/* 4. EXPLORE OTHER GOVERNMENT PORTALS */}
      <section className="border-t border-[#E7DFD4] dark:border-[#232A25] bg-[#FFFFFF] dark:bg-[#181D1A] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">
                Explore Other National & State Portals
              </h2>
              <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#A3ACA5] mt-0.5">
                Switch to any of the 37 Indian government jurisdictions to view localized welfare programs.
              </p>
            </div>
            <Link
              to="/schemes"
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#1A3B2B] dark:text-[#DFB24E] hover:underline"
            >
              <span>View All Unified Schemes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <GovernmentSectionNav currentGovSlug={gov.slug} showAllLink={false} />
        </div>
      </section>

    </div>
  );
};
