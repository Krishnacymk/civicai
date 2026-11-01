import { useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Landmark, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Search,
  Building,
  Flag,
  X,
  RotateCcw
} from 'lucide-react';
import { ENABLED_GOVERNMENTS, getGovernmentPath } from '../../data/governments';
import { getGovernmentStats } from '../../services/schemeFilterService';
import { useLanguage } from '../../context/LanguageContext';

interface GovernmentSectionNavProps {
  currentGovSlug?: string;
  className?: string;
  showAllLink?: boolean;
}

type NavTab = 'featured' | 'states' | 'uts' | 'all';

const FEATURED_GOV_IDS = [
  'central', 
  'andhra-pradesh', 
  'telangana', 
  'tamil-nadu', 
  'karnataka', 
  'maharashtra', 
  'delhi', 
  'uttar-pradesh'
];

const JURISDICTION_ALIASES: Record<string, string[]> = {
  'andhra-pradesh': ['ap', 'andhra', 'amaravati', 'amravati'],
  'telangana': ['tg', 'ts', 'hyderabad'],
  'tamil-nadu': ['tn', 'tamilnadu', 'madras', 'chennai'],
  'karnataka': ['ka', 'bengaluru', 'bangalore'],
  'delhi': ['dl', 'nct', 'new delhi', 'national capital territory', 'delhi nct'],
  'maharashtra': ['mh', 'mumbai', 'bombay'],
  'uttar-pradesh': ['up', 'lucknow'],
  'west-bengal': ['wb', 'bengal', 'kolkata', 'calcutta'],
  'gujarat': ['gj', 'gandhinagar', 'ahmedabad'],
  'kerala': ['kl', 'thiruvananthapuram', 'trivandrum'],
  'rajasthan': ['rj', 'jaipur'],
  'madhya-pradesh': ['mp', 'bhopal'],
  'bihar': ['br', 'patna'],
  'punjab': ['pb', 'chandigarh'],
  'haryana': ['hr', 'chandigarh'],
  'odisha': ['od', 'orissa', 'bhubaneswar'],
  'assam': ['as', 'dispur', 'guwahati'],
  'chhattisgarh': ['cg', 'raipur'],
  'jharkhand': ['jh', 'ranchi'],
  'uttarakhand': ['uk', 'ua', 'uttaranchal', 'dehradun'],
  'himachal-pradesh': ['hp', 'shimla'],
  'goa': ['ga', 'panaji'],
  'tripura': ['tr', 'agartala'],
  'manipur': ['mn', 'imphal'],
  'meghalaya': ['ml', 'shillong'],
  'nagaland': ['nl', 'kohima'],
  'mizoram': ['mz', 'aizawl'],
  'sikkim': ['sk', 'gangtok'],
  'arunachal-pradesh': ['ar', 'itanagar'],
  'puducherry': ['py', 'pondicherry', 'pondy'],
  'chandigarh': ['ch'],
  'jammu-and-kashmir': ['jk', 'j&k', 'srinagar', 'jammu'],
  'ladakh': ['la', 'leh'],
  'andaman-and-nicobar': ['an', 'a&n', 'port blair'],
  'dadra-and-nagar-haveli-and-daman-and-diu': ['dh', 'dnh', 'daman', 'diu'],
  'lakshadweep': ['ld', 'kavaratti'],
  'central': ['in', 'india', 'central', 'union', 'national', 'modi', 'pm', 'bharat']
};

export const GovernmentSectionNav = ({
  currentGovSlug,
  className = '',
  showAllLink = true
}: GovernmentSectionNavProps) => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const stats = useMemo(() => getGovernmentStats(), []);
  
  const [activeTab, setActiveTab] = useState<NavTab>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  const getCountForGov = (govId: string) => {
    const s = stats.find(item => item.governmentId === govId);
    return s ? s.schemeCount : 0;
  };

  const getLocalizedGovName = (gov: typeof ENABLED_GOVERNMENTS[0]) => {
    if (language === 'te' && gov.teluguName) return gov.teluguName;
    if (language === 'hi' && gov.hindiName) return gov.hindiName;
    if (language === 'ta' && gov.tamilName) return gov.tamilName;
    return gov.name;
  };

  // Pre-calculated jurisdiction counts from registry
  const stateGovs = useMemo(() => ENABLED_GOVERNMENTS.filter(g => g.jurisdictionType === 'state'), []);
  const utGovs = useMemo(() => ENABLED_GOVERNMENTS.filter(g => g.jurisdictionType === 'union-territory'), []);
  const featuredGovs = useMemo(() => ENABLED_GOVERNMENTS.filter(g => FEATURED_GOV_IDS.includes(g.id)), []);

  const totalGovCount = ENABLED_GOVERNMENTS.length;
  const stateGovCount = stateGovs.length;
  const utGovCount = utGovs.length;
  const featuredGovCount = featuredGovs.length;

  const stateSchemesCount = useMemo(() => {
    return stateGovs.reduce((acc, g) => {
      const s = stats.find(item => item.governmentId === g.id);
      return acc + (s ? s.schemeCount : 0);
    }, 0);
  }, [stateGovs, stats]);

  const utSchemesCount = useMemo(() => {
    return utGovs.reduce((acc, g) => {
      const s = stats.find(item => item.governmentId === g.id);
      return acc + (s ? s.schemeCount : 0);
    }, 0);
  }, [utGovs, stats]);

  // Filter governments based on tab and search query
  const displayedGovernments = useMemo(() => {
    let list = ENABLED_GOVERNMENTS;

    // Scope list by active tab
    if (activeTab === 'featured') {
      list = list.filter(g => FEATURED_GOV_IDS.includes(g.id));
    } else if (activeTab === 'states') {
      list = list.filter(g => g.jurisdictionType === 'state');
    } else if (activeTab === 'uts') {
      list = list.filter(g => g.jurisdictionType === 'union-territory');
    }

    // Apply live search query
    const trimmedQuery = searchQuery.trim().toLowerCase();
    if (trimmedQuery) {
      list = list.filter(g => {
        const nameMatch = g.name.toLowerCase().includes(trimmedQuery);
        const regionMatch = g.regionLabel.toLowerCase().includes(trimmedQuery);
        const capitalMatch = g.capitalCity.toLowerCase().includes(trimmedQuery);
        const codeMatch = g.stateCode ? g.stateCode.toLowerCase() === trimmedQuery || g.stateCode.toLowerCase().includes(trimmedQuery) : false;
        const emblemMatch = g.emblemLabel.toLowerCase().includes(trimmedQuery);
        const hindiMatch = g.hindiName?.toLowerCase().includes(trimmedQuery) ?? false;
        const teluguMatch = g.teluguName?.toLowerCase().includes(trimmedQuery) ?? false;
        const tamilMatch = g.tamilName?.toLowerCase().includes(trimmedQuery) ?? false;
        
        // Alias check
        const aliases = JURISDICTION_ALIASES[g.id] || [];
        const aliasMatch = aliases.some(alias => 
          alias === trimmedQuery || 
          alias.includes(trimmedQuery) || 
          trimmedQuery.includes(alias)
        );

        return nameMatch || regionMatch || capitalMatch || codeMatch || emblemMatch || hindiMatch || teluguMatch || tamilMatch || aliasMatch;
      });
    }

    return list;
  }, [activeTab, searchQuery]);

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EBF2ED] dark:bg-[#1A2E22] text-[#1A3B2B] dark:text-[#7A9984] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2">
            <Landmark className="w-3.5 h-3.5 text-[#B95938] dark:text-[#DFB24E]" />
            <span>{t('nav.exploreGovernments')}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#161815] dark:text-[#F3EFEA] font-bold tracking-tight">
            National Government Portals
          </h2>
          <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#A3ACA5] mt-1 max-w-2xl">
            Explore verified welfare schemes across the Government of India, all {stateGovCount} States, and all {utGovCount} Union Territories.
          </p>
        </div>

        {showAllLink && (
          <Link
            to="/schemes"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A3B2B] dark:focus-visible:ring-[#DFB24E] ${
              location.pathname === '/schemes'
                ? 'bg-[#1A3B2B] text-white shadow-xs'
                : 'bg-[#FFFFFF] dark:bg-[#181D1A] text-[#565C56] dark:text-[#A3ACA5] border border-[#D5CABE] dark:border-[#2C352F] hover:bg-[#EFE8DE] dark:hover:bg-[#232A25]'
            }`}
          >
            <span>{t('schemes.viewAllUnified')}</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        )}
      </div>

      {/* Tabs and Quick Search Filter Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 pt-1">
        <div 
          className="flex flex-wrap items-center gap-1.5 bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] p-1 rounded-xl"
          role="tablist"
          aria-label="Government portal categories"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'featured'}
            onClick={() => setActiveTab('featured')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A3B2B] ${
              activeTab === 'featured'
                ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white shadow-2xs font-semibold'
                : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-white'
            }`}
          >
            Featured Portals ({featuredGovCount})
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'states'}
            onClick={() => setActiveTab('states')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A3B2B] ${
              activeTab === 'states'
                ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white shadow-2xs font-semibold'
                : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-white'
            }`}
          >
            <Building className="w-3 h-3" />
            <span>{stateGovCount} States ({stateSchemesCount})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'uts'}
            onClick={() => setActiveTab('uts')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A3B2B] ${
              activeTab === 'uts'
                ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white shadow-2xs font-semibold'
                : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-white'
            }`}
          >
            <Flag className="w-3 h-3" />
            <span>{utGovCount} Union Territories ({utSchemesCount})</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={activeTab === 'all'}
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A3B2B] ${
              activeTab === 'all'
                ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white shadow-2xs font-semibold'
                : 'text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-white'
            }`}
          >
            All {totalGovCount} Portals
          </button>
        </div>

        {/* Quick Search with Clear Button */}
        <div className="relative w-full md:w-72">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#858D85] dark:text-[#737D75] pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search state, UT, or code (e.g. AP, DL, KA)..."
            className="w-full pl-8 pr-8 py-1.5 text-xs rounded-xl bg-white dark:bg-[#181D1A] border border-[#D5CABE] dark:border-[#2C352F] text-[#161815] dark:text-[#F3EFEA] placeholder-[#858D85] focus:outline-hidden focus:ring-1 focus:ring-[#1A3B2B] dark:focus:ring-[#DFB24E]"
            aria-label="Search government portals"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-[#858D85] hover:text-[#161815] dark:hover:text-[#F3EFEA] transition-colors"
              aria-label="Clear search query"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Responsive Grid */}
      <div data-testid="gov-portals-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
        {displayedGovernments.length > 0 ? (
          displayedGovernments.map((gov) => {
            const canonicalPath = getGovernmentPath(gov);
            const isActive = currentGovSlug === gov.slug || 
                             location.pathname === canonicalPath || 
                             location.pathname === `/schemes/${gov.slug}`;
            const count = getCountForGov(gov.id);
            const localizedName = getLocalizedGovName(gov);

            return (
              <Link
                key={gov.id}
                to={canonicalPath}
                className={`rounded-xl p-5 border transition-all flex flex-col justify-between group relative overflow-hidden focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A3B2B] dark:focus-visible:ring-[#DFB24E] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-[#FFFFFF] dark:bg-[#181D1A] border-[#1A3B2B] dark:border-[#DFB24E] shadow-md ring-2 ring-[#1A3B2B]/10 dark:ring-[#DFB24E]/10'
                    : 'bg-[#FFFFFF] dark:bg-[#181D1A] border-[#D5CABE] dark:border-[#2C352F] hover:border-[#1A3B2B]/60 dark:hover:border-[#DFB24E]/60 hover:shadow-sm'
                }`}
                aria-label={`Explore ${localizedName} welfare schemes`}
              >
                {/* Active accent indicator bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#1A3B2B] dark:bg-[#DFB24E]" />
                )}

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                      gov.level === 'central'
                        ? 'bg-[#FAF3E2] dark:bg-[#252219] text-[#A07A18] dark:text-[#DFB24E] border border-[#E0D0AB] dark:border-[#383220]'
                        : gov.jurisdictionType === 'union-territory'
                        ? 'bg-[#EBF0F5] dark:bg-[#16232E] text-[#20527A] dark:text-[#6EA8D9] border border-[#C2D6E8] dark:border-[#1F3E57]'
                        : 'bg-[#EBF2ED] dark:bg-[#1A2E22] text-[#1A3B2B] dark:text-[#7A9984] border border-[#C5DAC9] dark:border-[#253D30]'
                    }`}>
                      {gov.stateCode ? gov.stateCode : 'IN'}
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#FAF8F5] dark:bg-[#141916] text-[#565C56] dark:text-[#A3ACA5] border border-[#E7DFD4] dark:border-[#232A25] font-semibold flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-[#B95938] dark:text-[#DFB24E]" />
                        <span>{gov.regionLabel}</span>
                      </span>
                      {isActive && (
                        <CheckCircle2 className="w-4 h-4 text-[#1A3B2B] dark:text-[#DFB24E]" />
                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-serif font-bold text-base text-[#161815] dark:text-[#F3EFEA] group-hover:text-[#1A3B2B] dark:group-hover:text-[#DFB24E] transition-colors leading-snug">
                      {localizedName}
                    </h3>
                    <div className="text-[11px] font-mono text-[#858D85] dark:text-[#737D75] mt-0.5">
                      {gov.capitalCity} • {gov.emblemLabel}
                    </div>
                  </div>

                  <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed line-clamp-3">
                    {gov.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#E7DFD4] dark:border-[#232A25] flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-[#1A3B2B] dark:text-[#DFB24E] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{count} {t('schemes.verifiedSchemes')}</span>
                  </span>
                  
                  <span className="font-semibold text-[#1A3B2B] dark:text-[#DFB24E] flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                    <span>Explore</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            );
          })
        ) : (
          <div className="col-span-full py-12 px-4 text-center rounded-xl border border-dashed border-[#D5CABE] dark:border-[#2C352F] bg-[#FAF8F5]/50 dark:bg-[#141916]/50">
            <div className="w-10 h-10 rounded-full bg-[#EFE8DE] dark:bg-[#232A25] text-[#565C56] dark:text-[#A3ACA5] flex items-center justify-center mx-auto mb-2.5">
              <Search className="w-4 h-4" />
            </div>
            <p className="text-sm font-medium text-[#161815] dark:text-[#F3EFEA]">
              No government portals found matching &ldquo;{searchQuery.trim()}&rdquo;
            </p>
            <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] mt-1 max-w-md mx-auto">
              Try searching by state name, code (e.g. AP, KA, DL, TN, MH), or clear the search to view all portals.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#1A3B2B] text-white hover:bg-[#122A1E] transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A3B2B]"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Clear Search</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
