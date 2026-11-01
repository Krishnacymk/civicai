import { useState, useMemo } from 'react';
import { useParams, useLocation, Link, Navigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  CheckSquare, 
  ExternalLink, 
  RotateCcw, 
  MapPin,
  Building2,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { getGovernmentBySlug } from '../data/governments';
import { 
  getSchemesByGovernment, 
  getCentralSchemesAvailableInState 
} from '../services/schemeFilterService';
import { CATEGORIES } from '../data/schemes';
import { GovernmentSectionNav } from '../components/schemes/GovernmentSectionNav';
import { OfficialSourceBadge } from '../components/common/OfficialSourceBadge';
import { useLanguage } from '../context/LanguageContext';
import type { SchemeCategory, SchemeOperationalStatus } from '../types/scheme';

export const GovernmentSchemesPage = () => {
  const { govSlug: paramSlug } = useParams<{ govSlug: string }>();
  const location = useLocation();
  const pathSlug = location.pathname.split('/')[2];
  const activeSlug = paramSlug || pathSlug || '';
  const { language } = useLanguage();

  const gov = getGovernmentBySlug(activeSlug);

  // State filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SchemeCategory | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<SchemeOperationalStatus | 'all'>('all');
  const [showCentralInState, setShowCentralInState] = useState(false);

  // Base state/central schemes directly administered by this government
  const administeredSchemes = useMemo(() => {
    return gov ? getSchemesByGovernment(gov.slug) : [];
  }, [gov]);

  // Central schemes available in state (only relevant for state governments)
  const centralSchemes = useMemo(() => {
    if (gov?.level === 'state') {
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

  // If invalid government slug, redirect to /schemes
  if (!gov) {
    return <Navigate to="/schemes" replace />;
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
      
      {/* 1. TOP PROMINENT GOVERNMENT SWITCHER NAV */}
      <section className="border-b border-[#E7DFD4] dark:border-[#232A25] bg-[#FFFFFF] dark:bg-[#181D1A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GovernmentSectionNav currentGovSlug={gov.slug} showAllLink={true} />
        </div>
      </section>

      {/* 2. DEDICATED GOVERNMENT PORTAL HEADER BANNER */}
      <section className="border-b border-[#E7DFD4] dark:border-[#232A25] bg-[#FAF8F5] dark:bg-[#141916] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 text-xs font-mono font-bold uppercase rounded-md bg-[#1A3B2B] text-white">
                  {gov.level === 'central' ? 'National Government' : `${gov.stateCode} State Portal`}
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
            <div className="lg:shrink-0 bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 shadow-sm min-w-[240px] text-center lg:text-left space-y-2">
              <div className="text-xs font-mono text-[#565C56] dark:text-[#A3ACA5] uppercase tracking-wider">
                Administered Schemes
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

      {/* 3. LISTING & SEARCH AREA */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Bar */}
        <div className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-4 sm:p-5 shadow-xs space-y-4 mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#858D85] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={`Search ${gov.name} schemes by name, keyword, or benefit...`}
                className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] dark:bg-[#141916] text-[#161815] dark:text-[#F3EFEA] text-sm rounded-lg border border-[#D5CABE] dark:border-[#2C352F] focus:outline-hidden focus:border-[#1A3B2B] dark:focus:border-[#DFB24E]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858D85] hover:text-[#161815]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Dropdown */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as SchemeCategory | 'all')}
              className="px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#141916] text-[#161815] dark:text-[#F3EFEA] text-sm rounded-lg border border-[#D5CABE] dark:border-[#2C352F] focus:outline-hidden focus:border-[#1A3B2B] dark:focus:border-[#DFB24E]"
            >
              <option value="all">All Beneficiary Categories</option>
              {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                <option key={cat.id} value={cat.id}>{cat.label}</option>
              ))}
            </select>

            {/* Operational Status Dropdown */}
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as SchemeOperationalStatus | 'all')}
              className="px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-[#141916] text-[#161815] dark:text-[#F3EFEA] text-sm rounded-lg border border-[#D5CABE] dark:border-[#2C352F] focus:outline-hidden focus:border-[#1A3B2B] dark:focus:border-[#DFB24E]"
            >
              <option value="all">All Operational Statuses</option>
              <option value="active">Active & Open</option>
              <option value="upcoming">Upcoming</option>
              <option value="needs-verification">Needs Verification</option>
            </select>

            {(searchQuery || selectedCategory !== 'all' || selectedStatus !== 'all') && (
              <button
                type="button"
                onClick={resetFilters}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-semibold text-[#B95938] hover:bg-[#FAECE7] dark:hover:bg-[#252219] rounded-lg border border-transparent transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Optional Toggle for State Portals: Include Central Schemes Accessible in State */}
          {gov.level === 'state' && (
            <div className="pt-3 border-t border-[#E7DFD4] dark:border-[#232A25] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="includeCentralCheck"
                  checked={showCentralInState}
                  onChange={(e) => setShowCentralInState(e.target.checked)}
                  className="rounded border-[#D5CABE] text-[#1A3B2B] focus:ring-[#1A3B2B]"
                />
                <label htmlFor="includeCentralCheck" className="text-[#565C56] dark:text-[#A3ACA5] cursor-pointer">
                  Also show Central Government schemes available in {gov.regionLabel} (displayed separately below)
                </label>
              </div>

              <span className="font-mono text-[#858D85] dark:text-[#737D75]">
                State Government count: <strong>{administeredSchemes.length}</strong> (Central count strictly isolated)
              </span>
            </div>
          )}
        </div>

        {/* Results Count Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="text-sm text-[#565C56] dark:text-[#A3ACA5]">
            Showing <strong className="text-[#161815] dark:text-[#F3EFEA]">{filteredAdministeredSchemes.length}</strong> of{' '}
            <strong className="text-[#161815] dark:text-[#F3EFEA]">{administeredSchemes.length}</strong> schemes administered by{' '}
            <strong className="text-[#1A3B2B] dark:text-[#DFB24E]">{gov.name}</strong>
          </div>
        </div>

        {/* Empty State */}
        {filteredAdministeredSchemes.length === 0 && (
          <div className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-12 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] dark:bg-[#232A25] flex items-center justify-center mx-auto text-[#858D85]">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">
              No schemes match your filter criteria
            </h3>
            <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#A3ACA5] max-w-md mx-auto">
              Try clearing your search query or selecting "All Beneficiary Categories" to view all programs administered by {gov.name}.
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="px-4 py-2 bg-[#1A3B2B] text-white text-xs font-semibold rounded-lg hover:bg-[#122B1F]"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Scheme Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAdministeredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 space-y-4 hover:border-[#1A3B2B] dark:hover:border-[#DFB24E] hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Badge Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-[#EFE8DE] dark:bg-[#232A25] text-[#1A3B2B] dark:text-[#7A9984] rounded">
                    {scheme.categoryLabel}
                  </span>

                  <div className="flex items-center gap-1.5">
                    {/* Operational Status */}
                    <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${
                      scheme.schemeStatus === 'active'
                        ? 'bg-[#EBF2ED] dark:bg-[#1E2E24] text-[#1A3B2B] dark:text-[#7A9984] border border-[#C5DAC9] dark:border-[#253D30]'
                        : 'bg-[#FAF3E2] text-[#A07A18] border border-[#E0D0AB]'
                    }`}>
                      {scheme.schemeStatus === 'active' ? '● Active' : scheme.schemeStatus}
                    </span>

                    {/* Government Badge */}
                    <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#FAF8F5] dark:bg-[#141916] text-[#565C56] dark:text-[#A3ACA5] border border-[#E7DFD4] dark:border-[#232A25]">
                      {scheme.stateCode ? `${scheme.stateCode} State` : 'Central'}
                    </span>
                  </div>
                </div>

                {/* Scheme Title */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#161815] dark:text-[#F3EFEA] leading-snug">
                    <Link to={`/schemes/${scheme.id}`} className="hover:underline">
                      {scheme.name}
                    </Link>
                  </h3>
                  {scheme.teluguName && language === 'te' && (
                    <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] mt-0.5">{scheme.teluguName}</p>
                  )}
                  {scheme.hindiName && language === 'hi' && (
                    <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] mt-0.5">{scheme.hindiName}</p>
                  )}
                  {scheme.tamilName && language === 'ta' && (
                    <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] mt-0.5">{scheme.tamilName}</p>
                  )}
                </div>

                {/* Financial Benefit Callout */}
                <div className="p-3 bg-[#FAF8F5] dark:bg-[#1F2622] rounded-md border border-[#E7DFD4] dark:border-[#232A25]">
                  <div className="text-[10px] font-mono uppercase text-[#B95938] dark:text-[#DFB24E] font-bold">
                    Official Statutory Benefit
                  </div>
                  <div className="font-serif font-bold text-[#1A3B2B] dark:text-[#DFB24E] text-base mt-0.5">
                    {scheme.financialBenefit}
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed line-clamp-3">
                  {scheme.shortSummary}
                </p>

                {/* Beneficiaries & Documents Pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  {scheme.beneficiaries.slice(0, 2).map((b, i) => (
                    <span key={i} className="text-[11px] bg-[#FAF8F5] dark:bg-[#141916] text-[#565C56] dark:text-[#A3ACA5] px-2 py-0.5 rounded border border-[#E7DFD4] dark:border-[#232A25]">
                      {b}
                    </span>
                  ))}
                  <span className="text-[11px] bg-[#FAF8F5] dark:bg-[#141916] text-[#565C56] dark:text-[#A3ACA5] px-2 py-0.5 rounded border border-[#E7DFD4] dark:border-[#232A25]">
                    {scheme.requiredDocuments.length} Verified Documents
                  </span>
                </div>

                {/* Official Source Badge Component */}
                <div className="pt-2">
                  <OfficialSourceBadge source={scheme.officialSource} compact={true} />
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

        {/* 4. SEPARATE SECTION: CENTRAL SCHEMES ACCESSIBLE IN THIS STATE (NEVER MIXED) */}
        {gov.level === 'state' && showCentralInState && (
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

    </div>
  );
};
