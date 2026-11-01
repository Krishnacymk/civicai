import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export const PrivacyPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] pb-24 transition-colors duration-200">
      
      {/* Header Banner */}
      <section className="bg-white dark:bg-[#181D1A] border-b border-[#E7DFD4] dark:border-[#2C352F] pt-10 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#565C56] dark:text-[#A3ACA5]">
            <Link to="/" className="hover:underline">{t('nav.home')}</Link>
            <span>/</span>
            <span className="text-[#1A3B2B] dark:text-[#90C8A4] font-semibold">{t('nav.privacy')}</span>
          </div>

          <div className="space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3B2B] dark:text-[#90C8A4] font-bold">
              {t('privacy.heroBadge')}
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
              {t('privacy.heroTitle')}
            </h1>
            <p className="text-sm text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
              {t('privacy.heroSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Privacy Notice */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-10 space-y-8">
        
        <div className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-6 shadow-xs">
          
          <div className="space-y-3">
            <h2 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">{t('privacy.s1Title')}</h2>
            <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
              {t('privacy.s1Desc')}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3 bg-[#FAF8F5] dark:bg-[#121614] rounded-lg border border-[#E7DFD4] dark:border-[#2C352F] space-y-1">
                <span className="font-semibold text-[#1A3B2B] dark:text-[#DFB24E]">{t('privacy.whatWeDoNotCollect')}</span>
                <ul className="space-y-1 text-[#565C56] dark:text-[#A3ACA5]">
                  <li>{t('privacy.noAadhaar')}</li>
                  <li>{t('privacy.noPhone')}</li>
                  <li>{t('privacy.noBiometrics')}</li>
                  <li>{t('privacy.noPdfs')}</li>
                  <li>{t('privacy.noCookies')}</li>
                </ul>
              </div>

              <div className="p-3 bg-[#FAF8F5] dark:bg-[#121614] rounded-lg border border-[#E7DFD4] dark:border-[#2C352F] space-y-1">
                <span className="font-semibold text-[#1A3B2B] dark:text-[#DFB24E]">{t('privacy.whatYouProvide')}</span>
                <ul className="space-y-1 text-[#565C56] dark:text-[#A3ACA5]">
                  <li>{t('privacy.provCategory')}</li>
                  <li>{t('privacy.provAge')}</li>
                  <li>{t('privacy.provIncome')}</li>
                  <li>{t('privacy.provQuestions')}</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#E7DFD4] dark:border-[#2C352F]">
            <h2 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">{t('privacy.s2Title')}</h2>
            <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
              {t('privacy.s2Desc')}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#E7DFD4] dark:border-[#2C352F]">
            <h2 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">{t('privacy.s3Title')}</h2>
            <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
              {t('privacy.s3Desc')}
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-[#E7DFD4] dark:border-[#2C352F]">
            <h2 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">{t('privacy.s4Title')}</h2>
            <p className="text-xs sm:text-sm text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
              {t('privacy.s4Desc')}
            </p>
          </div>

        </div>

        <div className="p-4 rounded-xl bg-[#FAF3E2] dark:bg-[#262015] border border-[#E0D0AB] dark:border-[#4A3D25] text-xs text-[#565C56] dark:text-[#D5C5A8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>{t('privacy.questionsTeam')}</span>
          <Link
            to="/about"
            className="px-4 py-2 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-md font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] shrink-0"
          >
            {t('privacy.learnTeam')}
          </Link>
        </div>

      </div>

    </div>
  );
};
