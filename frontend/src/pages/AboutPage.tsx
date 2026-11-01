import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] pb-24 transition-colors duration-200">
      
      {/* Header Banner */}
      <section className="bg-white dark:bg-[#181D1A] border-b border-[#E7DFD4] dark:border-[#2C352F] pt-10 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#565C56] dark:text-[#A3ACA5]">
            <Link to="/" className="hover:underline">{t('nav.home')}</Link>
            <span>/</span>
            <span className="text-[#1A3B2B] dark:text-[#90C8A4] font-semibold">{t('nav.about')}</span>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B95938] dark:text-[#E07A5F] font-bold">
              {t('about.heroBadge')}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
              {t('about.heroTitle')}
            </h1>
            <p className="text-sm sm:text-base text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
              {t('about.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-12">
        
        {/* Mission Statement */}
        <section className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">{t('about.gapTitle')}</h2>
          <p className="text-sm text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
            {t('about.gapP1')}
          </p>
          <p className="text-sm text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
            {t('about.gapP2')}
          </p>
          <div className="p-4 bg-[#FAF8F5] dark:bg-[#121614] rounded-lg border border-[#E7DFD4] dark:border-[#2C352F] text-xs text-[#1A3B2B] dark:text-[#90C8A4] font-serif italic text-base">
            {t('about.quote')}
          </div>
        </section>

        {/* 4-Step Trust Architecture */}
        <section className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-6 shadow-xs" id="safeguards">
          <div className="space-y-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A3B2B] dark:text-[#90C8A4] font-bold">{t('about.principlesBadge')}</span>
            <h2 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">{t('about.principlesTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#E7DFD4] dark:border-[#2C352F] space-y-2">
              <div className="font-mono text-sm font-bold text-[#1A3B2B] dark:text-[#DFB24E]">{t('about.p1Title')}</div>
              <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                {t('about.p1Desc')}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#E7DFD4] dark:border-[#2C352F] space-y-2">
              <div className="font-mono text-sm font-bold text-[#1A3B2B] dark:text-[#DFB24E]">{t('about.p2Title')}</div>
              <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                {t('about.p2Desc')}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#E7DFD4] dark:border-[#2C352F] space-y-2">
              <div className="font-mono text-sm font-bold text-[#1A3B2B] dark:text-[#DFB24E]">{t('about.p3Title')}</div>
              <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                {t('about.p3Desc')}
              </p>
            </div>

            <div className="p-5 rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#E7DFD4] dark:border-[#2C352F] space-y-2">
              <div className="font-mono text-sm font-bold text-[#1A3B2B] dark:text-[#DFB24E]">{t('about.p4Title')}</div>
              <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                {t('about.p4Desc')}
              </p>
            </div>

          </div>
        </section>

        {/* Limitations & Non-Negotiables */}
        <section className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-4 shadow-xs">
          <h2 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">{t('about.boundariesTitle')}</h2>
          
          <div className="space-y-3 text-xs text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] flex items-center justify-center font-bold shrink-0 mt-0.5">✕</div>
              <div>
                <strong className="text-[#161815] dark:text-[#F3EFEA]">{t('about.b1Title')} </strong>
                {t('about.b1Desc')}
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] flex items-center justify-center font-bold shrink-0 mt-0.5">✕</div>
              <div>
                <strong className="text-[#161815] dark:text-[#F3EFEA]">{t('about.b2Title')} </strong>
                {t('about.b2Desc')}
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-5 h-5 rounded bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] flex items-center justify-center font-bold shrink-0 mt-0.5">✕</div>
              <div>
                <strong className="text-[#161815] dark:text-[#F3EFEA]">{t('about.b3Title')} </strong>
                {t('about.b3Desc')}
              </div>
            </div>
          </div>
        </section>

        {/* Team Synergy Hackathon Attribution */}
        <section className="bg-[#FAF3E2] dark:bg-[#262015] rounded-xl border border-[#E0D0AB] dark:border-[#4A3D25] p-6 sm:p-8 space-y-4 shadow-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#B95938] dark:text-[#DFB24E]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#A07A18] dark:text-[#DFB24E] font-bold">
              {t('about.teamBadge')}
            </span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">{t('about.teamTitle')}</h3>
          
          <p className="text-xs text-[#565C56] dark:text-[#D5C5A8] leading-relaxed">
            {t('about.teamDesc')}
          </p>

          <div className="pt-2">
            <h4 className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA] uppercase tracking-wider mb-2">{t('about.teamMembers')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#161815] dark:text-[#F3EFEA] font-mono">
              <div className="p-2.5 bg-white dark:bg-[#181D1A] rounded border border-[#D5CABE] dark:border-[#4A3D25]">✦ V. Gowthami</div>
              <div className="p-2.5 bg-white dark:bg-[#181D1A] rounded border border-[#D5CABE] dark:border-[#4A3D25]">✦ K. Hemasree Krishna</div>
              <div className="p-2.5 bg-white dark:bg-[#181D1A] rounded border border-[#D5CABE] dark:border-[#4A3D25]">✦ T. Sai Snikitha</div>
              <div className="p-2.5 bg-white dark:bg-[#181D1A] rounded border border-[#D5CABE] dark:border-[#4A3D25]">✦ R. T. Tulasi Devi</div>
              <div className="p-2.5 bg-white dark:bg-[#181D1A] rounded border border-[#D5CABE] dark:border-[#4A3D25]">✦ T. Srija</div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#E7DFD4] dark:border-[#2C352F]">
          <Link
            to="/privacy"
            className="text-xs font-semibold text-[#1A3B2B] dark:text-[#90C8A4] hover:underline"
          >
            {t('about.readPrivacy')}
          </Link>
          <Link
            to="/schemes"
            className="px-5 py-2.5 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-xs font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35]"
          >
            {t('about.exploreVerified')}
          </Link>
        </div>

      </div>

    </div>
  );
};
