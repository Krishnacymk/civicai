import { Link } from 'react-router-dom';
import { Shield, Sparkles, ExternalLink, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CURRENT_YEAR = 2026;

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#161815] dark:bg-[#0C0F0D] text-[#FAF8F5] pt-16 pb-12 border-t-4 border-[#C69B32] dark:border-[#DFB24E] transition-colors duration-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2D302C] dark:border-[#1E2320]">
          
          {/* Brand & Mission Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] flex items-center justify-center">
                <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none">
                  <path d="M14 36H34" stroke="#1A3B2B" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M17 32H31" stroke="#1A3B2B" strokeWidth="2.2" strokeLinecap="round"/>
                  <path d="M19 32V20" stroke="#1A3B2B" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M24 32V20" stroke="#C69B32" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M29 32V20" stroke="#1A3B2B" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M15 19L24 12L33 19H15Z" fill="#C69B32"/>
                  <circle cx="24" cy="8.5" r="2" fill="#1A3B2B"/>
                </svg>
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight text-[#FAF8F5]">{t('nav.brand')}</span>
            </div>
            
            <p className="text-sm text-[#A8AEA5] dark:text-[#9BA399] leading-relaxed max-w-md">
              {t('footer.mission')}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#222521] dark:bg-[#151917] border border-[#373B35] dark:border-[#252C27] text-xs font-mono text-[#DFB24E]">
              <Sparkles className="w-3.5 h-3.5 text-[#DFB24E]" />
              <span>{t('footer.smartCities')}</span>
            </div>

            <div className="pt-2 text-xs text-[#858D85] space-y-1">
              <p className="font-medium text-[#C8CFC6]">{t('footer.teamSynergy')}</p>
              <p>{t('footer.teamMembers')}</p>
            </div>
          </div>

          {/* Scheme Categories */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#DFB24E] uppercase">
              {t('footer.categories')}
            </h4>
            <ul className="space-y-2 text-xs text-[#A8AEA5] dark:text-[#9BA399]">
              <li>
                <Link to="/schemes?cat=agriculture" className="hover:text-[#FAF8F5] transition-colors">
                  PM-KISAN (Agriculture)
                </Link>
              </li>
              <li>
                <Link to="/schemes?cat=education" className="hover:text-[#FAF8F5] transition-colors">
                  Post-Matric Scholarship (NSP)
                </Link>
              </li>
              <li>
                <Link to="/schemes?cat=healthcare" className="hover:text-[#FAF8F5] transition-colors">
                  Ayushman Bharat (PM-JAY)
                </Link>
              </li>
              <li>
                <Link to="/schemes?cat=women" className="hover:text-[#FAF8F5] transition-colors">
                  Matru Vandana (PMMVY)
                </Link>
              </li>
              <li>
                <Link to="/schemes?cat=business" className="hover:text-[#FAF8F5] transition-colors">
                  MUDRA Micro Loans (PMMY)
                </Link>
              </li>
              <li>
                <Link to="/schemes?cat=artisans" className="hover:text-[#FAF8F5] transition-colors">
                  PM Vishwakarma (Artisans)
                </Link>
              </li>
              <li>
                <Link to="/schemes?cat=housing" className="hover:text-[#FAF8F5] transition-colors">
                  Rural Housing (PMAY-G)
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Tools */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#DFB24E] uppercase">
              {t('footer.tools')}
            </h4>
            <ul className="space-y-2 text-xs text-[#A8AEA5] dark:text-[#9BA399]">
              <li>
                <Link to="/assistant" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#DFB24E]" />
                  <span>{t('nav.aiGuide')}</span>
                </Link>
              </li>
              <li>
                <Link to="/eligibility" className="hover:text-[#FAF8F5] transition-colors">
                  {t('nav.eligibility')}
                </Link>
              </li>
              <li>
                <Link to="/checklist" className="hover:text-[#FAF8F5] transition-colors">
                  {t('nav.checklists')}
                </Link>
              </li>
              <li>
                <Link to="/schemes" className="hover:text-[#FAF8F5] transition-colors">
                  {t('nav.exploreSchemes')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust & Principles */}
          <div className="space-y-3">
            <h4 className="font-serif text-sm font-semibold tracking-wider text-[#DFB24E] uppercase">
              {t('footer.trust')}
            </h4>
            <ul className="space-y-2 text-xs text-[#A8AEA5] dark:text-[#9BA399]">
              <li>
                <Link to="/about" className="hover:text-[#FAF8F5] transition-colors flex items-center gap-1.5">
                  <Shield className="w-3 h-3 text-[#6A816F]" />
                  <span>{t('footer.trustArchitecture')}</span>
                </Link>
              </li>
              <li>
                <Link to="/about#safeguards" className="hover:text-[#FAF8F5] transition-colors">
                  {t('footer.transparentUncertainty')}
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-[#FAF8F5] transition-colors">
                  {t('footer.privacyPolicy')}
                </Link>
              </li>
              <li>
                <a 
                  href="https://india.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#FAF8F5] transition-colors inline-flex items-center gap-1 text-[#DFB24E]"
                >
                  <span>{t('footer.nationalPortal')}</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Independence Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="p-4 rounded-lg bg-[#222521] dark:bg-[#151917] border border-[#373B35] dark:border-[#252C27] flex items-start gap-3 text-xs text-[#C8CFC6]">
            <AlertTriangle className="w-4 h-4 text-[#DFB24E] shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-semibold text-[#FAF8F5]">{t('footer.disclaimerTitle')}</span>
              {t('footer.disclaimerText')}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-[#7B837A] gap-4">
            <p>
              © {CURRENT_YEAR} {t('footer.copyright')}
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="hover:text-[#FAF8F5] transition-colors">{t('footer.methodology')}</Link>
              <Link to="/privacy" className="hover:text-[#FAF8F5] transition-colors">{t('footer.privacyLink')}</Link>
              <span className="font-mono text-[11px] text-[#A8AEA5]">{t('footer.freshness')}</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
