import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  X, 
  CheckSquare, 
  ExternalLink, 
  RotateCcw, 
  Info,
  MapPin,
  CheckCircle,
  AlertTriangle,
  Building2
} from 'lucide-react';
import { SCHEMES, CATEGORIES, STATES_CONFIG } from '../data/schemes';
import { useLanguage } from '../context/LanguageContext';

export const SchemesPage = () => {
  const { t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'all';
  const initialState = searchParams.get('state') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedState, setSelectedState] = useState<string>(initialState);
  const [selectedVerification, setSelectedVerification] = useState<string>('all');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const allBeneficiaryTypes = useMemo(() => {
    const set = new Set<string>();
    SCHEMES.forEach(s => s.beneficiaries.forEach(b => set.add(b)));
    return Array.from(set).sort();
  }, []);

  const filteredSchemes = useMemo(() => {
    return SCHEMES.filter(scheme => {
      // Search matching across name, telugu/hindi names, summary, benefit, beneficiaries, department
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = scheme.name.toLowerCase().includes(q);
        const matchesHindi = scheme.hindiName?.toLowerCase().includes(q) || false;
        const matchesTelugu = scheme.teluguName?.toLowerCase().includes(q) || false;
        const matchesSummary = scheme.shortSummary.toLowerCase().includes(q);
        const matchesBenefit = scheme.financialBenefit.toLowerCase().includes(q);
        const matchesBeneficiary = scheme.beneficiaries.some(b => b.toLowerCase().includes(q));
        const matchesDept = scheme.officialSource.department.toLowerCase().includes(q);
        if (!matchesName && !matchesHindi && !matchesTelugu && !matchesSummary && !matchesBenefit && !matchesBeneficiary && !matchesDept) {
          return false;
        }
      }

      // Category matching
      if (selectedCategory !== 'all' && scheme.category !== selectedCategory) {
        return false;
      }

      // State matching
      if (selectedState === 'Andhra Pradesh') {
        // Show both AP state-specific and Central schemes that apply to AP
        if (scheme.stateApplicability !== 'Andhra Pradesh' && scheme.stateApplicability !== 'All India') {
          return false;
        }
      } else if (selectedState === 'Central') {
        if (!scheme.isCentral) {
          return false;
        }
      }

      // Verification matching
      if (selectedVerification !== 'all' && scheme.officialSource.verificationStatus !== selectedVerification) {
        return false;
      }

      // Beneficiary matching
      if (selectedBeneficiary !== 'all' && !scheme.beneficiaries.includes(selectedBeneficiary)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'docs') {
        return a.requiredDocuments.length - b.requiredDocuments.length;
      }
      return 0; // default featured order
    });
  }, [searchQuery, selectedCategory, selectedState, selectedVerification, selectedBeneficiary, sortBy]);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    if (cat === 'all') {
      searchParams.delete('cat');
    } else {
      searchParams.set('cat', cat);
    }
    setSearchParams(searchParams);
  };

  const handleStateChange = (stateId: string) => {
    setSelectedState(stateId);
    if (stateId === 'all') {
      searchParams.delete('state');
    } else {
      searchParams.set('state', stateId);
    }
    setSearchParams(searchParams);
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedState('all');
    setSelectedVerification('all');
    setSelectedBeneficiary('all');
    setSortBy('featured');
    setSearchParams({});
  };

  const hasActiveFilters = searchQuery !== '' || selectedCategory !== 'all' || selectedState !== 'all' || selectedVerification !== 'all' || selectedBeneficiary !== 'all';

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] text-[#161815] dark:text-[#F3EFEA] pb-24 transition-colors duration-150 animate-fade-in">
      
      {/* Header Banner with State Switcher */}
      <section className="bg-white dark:bg-[#181D1A] border-b border-[#E7DFD4] dark:border-[#2C352F] pt-8 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#565C56] dark:text-[#A3ACA5]">
            <div className="flex items-center gap-2">
              <Link to="/" className="hover:text-[#1A3B2B] dark:hover:text-[#DFB24E]">{t('nav.home')}</Link>
              <span>/</span>
              <span className="text-[#1A3B2B] dark:text-[#DFB24E] font-semibold">{t('schemes.directoryTitle')}</span>
            </div>

            {/* State Jurisdiction Switcher Pill */}
            <div className="flex items-center gap-1.5 bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] p-1 rounded-lg">
              <MapPin className="w-3.5 h-3.5 text-[#B95938] dark:text-[#DFB24E] ml-1.5 shrink-0" />
              <span className="text-[11px] font-semibold text-[#565C56] dark:text-[#C5CDC6] pr-1">Jurisdiction:</span>
              {STATES_CONFIG.map(st => (
                <button
                  key={st.id}
                  type="button"
                  onClick={() => handleStateChange(st.id)}
                  className={`px-2.5 py-1 rounded text-[11px] font-medium transition-all ${
                    selectedState === st.id
                      ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white shadow-2xs font-semibold'
                      : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-white'
                  }`}
                >
                  {st.id === 'all' ? 'All India' : st.id === 'Andhra Pradesh' ? 'Andhra Pradesh' : 'Central Only'}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-3xl space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
              {t('schemes.directoryTitle')}
            </h1>
            <p className="text-sm text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
              Explore {SCHEMES.length} verified government welfare programs with exact statutory eligibility criteria, required document checklists, and direct official department links.
            </p>
          </div>

          {/* Search bar & quick controls */}
          <div className="pt-2 flex flex-col md:flex-row items-stretch md:items-center gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#565C56] dark:text-[#858D85] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search schemes by name, keyword, target audience, benefit (e.g. disability, farmer, student, loan, 5 lakh)..."
                className="w-full pl-10 pr-9 py-2.5 bg-white dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] text-[#161815] dark:text-[#F3EFEA] rounded-lg text-sm placeholder-[#858D85] dark:placeholder-[#6C766E] focus:outline-none focus:ring-2 focus:ring-[#1A3B2B]/20 dark:focus:ring-[#DFB24E]/20 focus:border-[#1A3B2B] dark:focus:border-[#DFB24E] shadow-xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#858D85] hover:text-[#161815] dark:hover:text-[#F3EFEA]"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value)}
                className="bg-white dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] text-[#161815] dark:text-[#F3EFEA] rounded-lg px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-[#1A3B2B]/20 dark:focus:ring-[#DFB24E]/20 shadow-xs"
              >
                <option value="featured">{t('schemes.sortFeatured')}</option>
                <option value="name">{t('schemes.sortName')}</option>
                <option value="docs">{t('schemes.sortDocs')}</option>
              </select>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2.5 bg-[#FAF8F5] dark:bg-[#1F2622] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg text-xs font-semibold text-[#B95938] dark:text-[#DFB24E] hover:bg-[#FAECE7] dark:hover:bg-[#252219] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>{t('schemes.clearAll')}</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick Category Chips Carousel */}
          <div className="pt-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-3 py-1.5 rounded-full border whitespace-nowrap text-xs transition-all flex items-center gap-1.5 shrink-0 ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white border-[#1A3B2B] dark:border-[#24583F] font-semibold shadow-xs'
                    : 'bg-white dark:bg-[#181D1A] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F] hover:border-[#1A3B2B] dark:hover:border-[#90C8A4]'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                  selectedCategory === cat.id
                    ? 'bg-white/20 text-white'
                    : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#858D85] dark:text-[#7A837C]'
                }`}>
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Main Filter & Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Filter Sidebar */}
          <aside className="lg:col-span-3 space-y-6 bg-white dark:bg-[#181D1A] p-5 rounded-xl border border-[#D5CABE] dark:border-[#2C352F] shadow-xs sticky top-20">
            
            <div className="flex items-center justify-between border-b border-[#E7DFD4] dark:border-[#2C352F] pb-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1A3B2B] dark:text-[#DFB24E]">
                <Filter className="w-3.5 h-3.5" />
                <span>{t('schemes.filterTitle')}</span>
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="text-[11px] text-[#B95938] dark:text-[#DFB24E] hover:underline"
                >
                  {t('schemes.clearAll')}
                </button>
              )}
            </div>

            {/* Verification Status Filter */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">Verification Authority</label>
              <div className="space-y-1 text-xs">
                {[
                  { id: 'all', label: 'All Verified Schemes' },
                  { id: 'verified', label: '✓ Verified Official Source' },
                  { id: 'partially-verified', label: '⚡ Partially Verified' }
                ].map(v => (
                  <button
                    key={v.id}
                    type="button"
                    onClick={() => setSelectedVerification(v.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded transition-colors ${
                      selectedVerification === v.id
                        ? 'bg-[#EBF2ED] dark:bg-[#1F2C23] text-[#1A3B2B] dark:text-[#90C8A4] font-semibold border border-[#C5DAC9] dark:border-[#2C352F]'
                        : 'text-[#565C56] dark:text-[#A3ACA5] hover:bg-[#FAF8F5] dark:hover:bg-[#121614]'
                    }`}
                  >
                    {v.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2 pt-2 border-t border-[#E7DFD4] dark:border-[#2C352F]">
              <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('schemes.category')}</label>
              <div className="space-y-1 text-xs max-h-56 overflow-y-auto pr-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded flex items-center justify-between transition-colors ${
                      selectedCategory === cat.id
                        ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white font-medium'
                        : 'text-[#565C56] dark:text-[#A3ACA5] hover:bg-[#FAF8F5] dark:hover:bg-[#121614]'
                    }`}
                  >
                    <span className="truncate pr-2">{cat.label}</span>
                    <span className={`text-[10px] font-mono shrink-0 ${selectedCategory === cat.id ? 'text-[#FAF8F5]' : 'text-[#858D85] dark:text-[#737D75]'}`}>
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Beneficiary Filter */}
            <div className="space-y-2 pt-2 border-t border-[#E7DFD4] dark:border-[#2C352F]">
              <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('schemes.intendedBeneficiary')}</label>
              <select
                value={selectedBeneficiary}
                onChange={e => setSelectedBeneficiary(e.target.value)}
                className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-md px-2.5 py-1.5 text-xs text-[#161815] dark:text-[#F3EFEA] focus:outline-none"
              >
                <option value="all">{t('schemes.allBeneficiaries')}</option>
                {allBeneficiaryTypes.map(b => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>

            {/* Helper Guidance Card */}
            <div className="p-3.5 bg-[#FAF3E2] dark:bg-[#262015] rounded-lg border border-[#E0D0AB] dark:border-[#4A3D25] text-xs text-[#565C56] dark:text-[#D5C5A8] space-y-1.5">
              <div className="font-semibold text-[#161815] dark:text-[#F3EFEA] flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-[#B95938] dark:text-[#DFB24E]" />
                <span>{t('schemes.notSureTitle')}</span>
              </div>
              <p className="leading-snug">
                {t('schemes.notSureDesc')}
              </p>
              <Link
                to="/eligibility"
                className="inline-block text-[11px] font-semibold text-[#1A3B2B] dark:text-[#90C8A4] hover:underline pt-1"
              >
                {t('schemes.startEligibility')}
              </Link>
            </div>

          </aside>

          {/* Results Area */}
          <main className="lg:col-span-9 space-y-6">
            
            {/* Status Counter */}
            <div className="flex items-center justify-between text-xs text-[#565C56] dark:text-[#A3ACA5] px-1">
              <span>
                {t('schemes.showing')} <strong className="text-[#161815] dark:text-[#F3EFEA] font-semibold">{filteredSchemes.length}</strong> {t('schemes.of')} {SCHEMES.length} {t('schemes.verifiedSchemes')}
              </span>
              {hasActiveFilters && (
                <span className="font-mono text-[11px] text-[#B95938] dark:text-[#DFB24E]">
                  {t('schemes.filteredActive')}
                </span>
              )}
            </div>

            {/* Empty State */}
            {filteredSchemes.length === 0 ? (
              <div className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-12 text-center space-y-4 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] flex items-center justify-center mx-auto">
                  <Info className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-bold text-[#161815] dark:text-[#F3EFEA]">{t('schemes.noMatchTitle')}</h3>
                  <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] max-w-sm mx-auto">
                    {t('schemes.noMatchDesc')}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={resetAllFilters}
                  className="px-4 py-2 bg-[#1A3B2B] dark:bg-[#24583F] text-white text-xs font-semibold rounded-lg hover:bg-[#122B1F] dark:hover:bg-[#1D4A35]"
                >
                  {t('schemes.resetAll')}
                </button>
              </div>
            ) : (
              /* Scheme Cards List */
              <div className="space-y-4">
                {filteredSchemes.map(scheme => (
                  <article
                    key={scheme.id}
                    className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 hover:border-[#1A3B2B] dark:hover:border-[#90C8A4] card-hover-lift space-y-4"
                  >
                    {/* Top Row: Category, Scope, State & Verification */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E7DFD4] dark:border-[#2C352F] pb-3 text-xs">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2.5 py-0.5 font-mono text-[10px] font-semibold bg-[#EBF2ED] dark:bg-[#1F2C23] text-[#1A3B2B] dark:text-[#90C8A4] rounded">
                          {scheme.categoryLabel}
                        </span>
                        
                        {/* Jurisdiction Level Badge */}
                        <span className={`px-2 py-0.5 font-mono text-[10px] rounded flex items-center gap-1 ${
                          scheme.isCentral
                            ? 'bg-[#EAE8E3] dark:bg-[#252826] text-[#424744] dark:text-[#C5CDC6]'
                            : 'bg-[#FAF3E2] dark:bg-[#262015] text-[#8C6D1F] dark:text-[#DFB24E] font-semibold border border-[#E0D0AB] dark:border-[#4A3D25]'
                        }`}>
                          <Building2 className="w-3 h-3" />
                          <span>{scheme.isCentral ? 'Central Scheme' : 'AP State Scheme'}</span>
                        </span>

                        <span className="text-[#565C56] dark:text-[#A3ACA5] font-mono text-[11px]">
                          {scheme.geographicScope}
                        </span>
                      </div>

                      {/* Verification Status Badge */}
                      <div className="flex items-center gap-1.5 text-[11px] font-mono">
                        {scheme.officialSource.verificationStatus === 'verified' ? (
                          <span className="inline-flex items-center gap-1 text-[#2A5A43] dark:text-[#90C8A4] font-semibold bg-[#EBF2ED] dark:bg-[#1F2C23] px-2 py-0.5 rounded">
                            <CheckCircle className="w-3 h-3 text-[#2A5A43] dark:text-[#90C8A4]" />
                            <span>Verified Official</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[#A07A18] dark:text-[#DFB24E] font-semibold bg-[#FAF3E2] dark:bg-[#262015] px-2 py-0.5 rounded">
                            <AlertTriangle className="w-3 h-3" />
                            <span>Partially Verified</span>
                          </span>
                        )}
                        <span className="text-[#858D85] dark:text-[#7A837C]">• {scheme.officialSource.lastVerifiedDate}</span>
                      </div>
                    </div>

                    {/* Middle: Title, Local Names & Benefit */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
                      <div className="md:col-span-8 space-y-2">
                        <h2 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">
                          <Link to={`/schemes/${scheme.id}`} className="hover:text-[#1A3B2B] dark:hover:text-[#90C8A4] hover:underline">
                            {scheme.name}
                          </Link>
                        </h2>
                        
                        {(scheme.hindiName || scheme.teluguName) && (
                          <div className="text-xs text-[#565C56] dark:text-[#A3ACA5] flex flex-wrap gap-2">
                            {scheme.hindiName && <span>{scheme.hindiName}</span>}
                            {scheme.teluguName && <span>• {scheme.teluguName}</span>}
                          </div>
                        )}

                        <p className="text-xs text-[#565C56] dark:text-[#C5CDC6] leading-relaxed pt-1">
                          {scheme.shortSummary}
                        </p>
                      </div>

                      {/* Benefit Spotlight Badge */}
                      <div className="md:col-span-4 bg-[#FAF8F5] dark:bg-[#121614] p-3.5 rounded-lg border border-[#E7DFD4] dark:border-[#2C352F] space-y-1">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#B95938] dark:text-[#DFB24E] font-bold">
                          {t('schemes.financialBenefit')}
                        </div>
                        <div className="font-serif font-bold text-base text-[#1A3B2B] dark:text-[#DFB24E] leading-snug">
                          {scheme.financialBenefit}
                        </div>
                      </div>
                    </div>

                    {/* Eligibility Highlights Bullets */}
                    <div className="bg-[#FAF8F5]/60 dark:bg-[#121614]/60 p-3 rounded-lg border border-[#E7DFD4] dark:border-[#2C352F] space-y-1.5">
                      <div className="text-[11px] font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('schemes.keyConditions')}</div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs text-[#565C56] dark:text-[#A3ACA5]">
                        {scheme.eligibilityHighlights.slice(0, 4).map((eh, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#1A3B2B] dark:text-[#90C8A4] font-bold">•</span>
                            <span className="leading-snug">{eh}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Actions Row */}
                    <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#E7DFD4] dark:border-[#2C352F]">
                      
                      <div className="flex flex-wrap items-center gap-2">
                        <Link
                          to={`/schemes/${scheme.id}`}
                          className="px-3.5 py-2 bg-[#1A3B2B] dark:bg-[#24583F] text-white font-semibold rounded-lg hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] transition-colors"
                        >
                          {t('schemes.viewFullDetails')}
                        </Link>

                        <Link
                          to={`/eligibility?scheme=${scheme.id}`}
                          className="px-3 py-2 bg-white dark:bg-[#181D1A] text-[#161815] dark:text-[#F3EFEA] border border-[#D5CABE] dark:border-[#2C352F] font-semibold rounded-lg hover:bg-[#FAF8F5] dark:hover:bg-[#202622] transition-colors"
                        >
                          {t('schemes.checkMyEligibility')}
                        </Link>

                        <Link
                          to={`/checklist?scheme=${scheme.id}`}
                          className="px-3 py-2 bg-white dark:bg-[#181D1A] text-[#1A3B2B] dark:text-[#90C8A4] border border-[#C5DAC9] dark:border-[#2C352F] font-semibold rounded-lg hover:bg-[#EBF2ED] dark:hover:bg-[#1F2C23] transition-colors flex items-center gap-1.5"
                        >
                          <CheckSquare className="w-3.5 h-3.5" />
                          <span>{scheme.requiredDocuments.length} {t('schemes.docsCountChecklist')}</span>
                        </Link>
                      </div>

                      <a
                        href={scheme.officialSource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-[#565C56] dark:text-[#A3ACA5] hover:text-[#1A3B2B] dark:hover:text-[#90C8A4]"
                        title={`Open official portal: ${scheme.officialSource.url}`}
                      >
                        <span>{t('schemes.officialPortal')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                    </div>
                  </article>
                ))}
              </div>
            )}

          </main>

        </div>
      </div>

    </div>
  );
};
