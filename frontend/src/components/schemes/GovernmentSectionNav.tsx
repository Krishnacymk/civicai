import { Link, useLocation } from 'react-router-dom';
import { Landmark, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ENABLED_GOVERNMENTS } from '../../data/governments';
import { getGovernmentStats } from '../../services/schemeFilterService';
import { useLanguage } from '../../context/LanguageContext';

interface GovernmentSectionNavProps {
  currentGovSlug?: string;
  className?: string;
  showAllLink?: boolean;
}

export const GovernmentSectionNav = ({
  currentGovSlug,
  className = '',
  showAllLink = true
}: GovernmentSectionNavProps) => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const stats = getGovernmentStats();

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

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#EBF2ED] dark:bg-[#1A2E22] text-[#1A3B2B] dark:text-[#7A9984] text-[11px] font-mono font-semibold uppercase tracking-wider mb-2">
            <Landmark className="w-3.5 h-3.5 text-[#B95938] dark:text-[#DFB24E]" />
            <span>{t('nav.exploreGovernments')}</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#161815] dark:text-[#F3EFEA] font-bold tracking-tight">
            {t('nav.governmentPortalsTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#A3ACA5] mt-1 max-w-2xl">
            {t('nav.governmentPortalsSubtitle')}
          </p>
        </div>

        {showAllLink && (
          <Link
            to="/schemes"
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors shrink-0 ${
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

      {/* Responsive Grid: 4 Visually Distinct Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
        {ENABLED_GOVERNMENTS.map((gov) => {
          const isActive = currentGovSlug === gov.slug || location.pathname === `/schemes/${gov.slug}`;
          const count = getCountForGov(gov.id);
          const localizedName = getLocalizedGovName(gov);

          return (
            <Link
              key={gov.id}
              to={`/schemes/${gov.slug}`}
              className={`rounded-xl p-5 border transition-all flex flex-col justify-between group relative overflow-hidden ${
                isActive
                  ? 'bg-[#FFFFFF] dark:bg-[#181D1A] border-[#1A3B2B] dark:border-[#DFB24E] shadow-md ring-2 ring-[#1A3B2B]/10 dark:ring-[#DFB24E]/10'
                  : 'bg-[#FFFFFF] dark:bg-[#181D1A] border-[#D5CABE] dark:border-[#2C352F] hover:border-[#1A3B2B]/60 dark:hover:border-[#DFB24E]/60 hover:shadow-sm'
              }`}
            >
              {/* Subtle active accent indicator line */}
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#1A3B2B] dark:bg-[#DFB24E]" />
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs ${
                    gov.level === 'central'
                      ? 'bg-[#FAF3E2] dark:bg-[#252219] text-[#A07A18] dark:text-[#DFB24E] border border-[#E0D0AB] dark:border-[#383220]'
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
        })}
      </div>
    </div>
  );
};
