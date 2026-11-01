import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckSquare, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  ArrowUpRight,
  ShieldCheck,
  FileText,
  Landmark,
  GraduationCap,
  HeartPulse,
  Briefcase,
  Sprout,
  SunMedium,
  Baby,
  Accessibility,
  Store,
  Users
} from 'lucide-react';
import { SCHEMES, CATEGORIES } from '../data/schemes';
import { useLanguage } from '../context/LanguageContext';
import { GovernmentSectionNav } from '../components/schemes/GovernmentSectionNav';

export const LandingPage = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleHeroSearch = (e: FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/schemes?q=${encodeURIComponent(searchQuery.trim())}`);
    } else {
      navigate('/schemes');
    }
  };

  const displayedSchemes = selectedCategory === 'all'
    ? SCHEMES.slice(0, 6)
    : SCHEMES.filter(s => s.category === selectedCategory).slice(0, 6);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    { q: t('home.faq1Q'), a: t('home.faq1A') },
    { q: t('home.faq2Q'), a: t('home.faq2A') },
    { q: t('home.faq3Q'), a: t('home.faq3A') },
    { q: t('home.faq4Q'), a: t('home.faq4A') },
    { q: t('home.faq5Q'), a: t('home.faq5A') }
  ];

  // 10 Life Stage Category Cards Config
  const lifeStages = [
    {
      id: 'children',
      icon: Baby,
      title: t('home.lifeChildrenTitle'),
      desc: t('home.lifeChildrenDesc'),
      link: '/schemes?category=children',
      tag: '0–6 Years'
    },
    {
      id: 'students',
      icon: GraduationCap,
      title: t('home.lifeStudentsTitle'),
      desc: t('home.lifeStudentsDesc'),
      link: '/schemes?category=education',
      tag: 'School & College'
    },
    {
      id: 'disability',
      icon: Accessibility,
      title: t('home.lifeDisabilityTitle'),
      desc: t('home.lifeDisabilityDesc'),
      link: '/schemes?category=disability',
      tag: 'PwD & SADAREM'
    },
    {
      id: 'unemployed',
      icon: Briefcase,
      title: t('home.lifeUnemployedTitle'),
      desc: t('home.lifeUnemployedDesc'),
      link: '/schemes?category=unemployed',
      tag: 'Youth & Skilling'
    },
    {
      id: 'workers',
      icon: Users,
      title: t('home.lifeWorkersTitle'),
      desc: t('home.lifeWorkersDesc'),
      link: '/schemes?category=workers',
      tag: 'Unorganised & Labour'
    },
    {
      id: 'women',
      icon: HeartPulse,
      title: t('home.lifeWomenTitle'),
      desc: t('home.lifeWomenDesc'),
      link: '/schemes?category=women',
      tag: 'Mothers & Girls'
    },
    {
      id: 'farmers',
      icon: Sprout,
      title: t('home.lifeFarmersTitle'),
      desc: t('home.lifeFarmersDesc'),
      link: '/schemes?category=agriculture',
      tag: 'Rythus & Tenants'
    },
    {
      id: 'seniors',
      icon: Landmark,
      title: t('home.lifeSeniorsTitle'),
      desc: t('home.lifeSeniorsDesc'),
      link: '/schemes?category=seniors',
      tag: '60+ & 70+ Universal'
    },
    {
      id: 'enterprises',
      icon: Store,
      title: t('home.lifeEnterprisesTitle'),
      desc: t('home.lifeEnterprisesDesc'),
      link: '/schemes?category=entrepreneurs',
      tag: 'Artisans & MSME'
    },
    {
      id: 'clean-energy',
      icon: SunMedium,
      title: t('home.lifeCleanEnergyTitle'),
      desc: t('home.lifeCleanEnergyDesc'),
      link: '/schemes?category=housing',
      tag: 'Solar & Health'
    }
  ];

  // Common Documents Config
  const commonDocuments = [
    {
      title: t('home.docAadhaarTitle'),
      desc: t('home.docAadhaarDesc'),
      tip: 'Verify mobile OTP reception at uidai.gov.in before applying.'
    },
    {
      title: t('home.docIncomeTitle'),
      desc: t('home.docIncomeDesc'),
      tip: 'Must bear digital MeeSeva / e-District barcode and official Tehsildar stamp.'
    },
    {
      title: t('home.docCasteTitle'),
      desc: t('home.docCasteDesc'),
      tip: 'Permanent digital caste certificate is valid across central and state welfare applications.'
    },
    {
      title: t('home.docRationTitle'),
      desc: t('home.docRationDesc'),
      tip: 'Ensure all family beneficiary names are accurately printed on the Rice/Ration Card.'
    },
    {
      title: t('home.docBankTitle'),
      desc: t('home.docBankDesc'),
      tip: 'Ask bank manager for NPCI Aadhaar Payments Bridge (APB) mapping form.'
    },
    {
      title: t('home.docLandTitle'),
      desc: t('home.docLandDesc'),
      tip: 'Computerized 1B or Pattadar Passbook for landowners; registered CCRC card for tenant farmers.'
    },
    {
      title: t('home.docDisabilityTitle'),
      desc: t('home.docDisabilityDesc'),
      tip: 'UDID smart card or SADAREM certificate certifying ≥40% disability is mandatory.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] text-[#161815] dark:text-[#F3EFEA] transition-colors duration-150">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-[#E7DFD4] dark:border-[#232A25] pt-12 pb-16 lg:pt-16 lg:pb-24">
        
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#EAE2D5]/30 dark:bg-[#1F2E24]/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-[#E5ECE7]/40 dark:bg-[#252219]/20 blur-2xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#EBF2ED] dark:bg-[#1A2E22] border border-[#C5DAC9] dark:border-[#253D30] text-xs font-mono text-[#1A3B2B] dark:text-[#7A9984]">
                <span className="w-2 h-2 rounded-full bg-[#2A5A43] dark:bg-[#7A9984] animate-pulse" />
                <span className="font-semibold uppercase tracking-wider">{t('home.heroBadge')}</span>
                <span className="text-[#6A816F]">•</span>
                <span>{t('home.heroVerified')}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight leading-[1.12]">
                {t('home.heroTitle1')} <br />
                <span className="italic font-serif font-light text-[#1A3B2B] dark:text-[#DFB24E] underline decoration-[#C69B32]/40 dark:decoration-[#DFB24E]/40 decoration-wavy decoration-1 underline-offset-8">
                  {t('home.heroHighlight')}
                </span> {t('home.heroTitle2')}
              </h1>

              <p className="text-base sm:text-lg text-[#565C56] dark:text-[#A3ACA5] leading-relaxed max-w-2xl font-normal">
                {t('home.heroSubtitle')}
              </p>

              {/* In-Hero Search Bar */}
              <form onSubmit={handleHeroSearch} className="relative max-w-xl">
                <div className="flex items-center rounded-xl bg-[#FFFFFF] dark:bg-[#181D1A] border-2 border-[#1A3B2B]/30 dark:border-[#DFB24E]/30 focus-within:border-[#1A3B2B] dark:focus-within:border-[#DFB24E] shadow-sm transition-all overflow-hidden p-1.5">
                  <div className="pl-3 pr-2 text-[#858D85] dark:text-[#737D75]">
                    <Search className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t('home.searchPlaceholder')}
                    className="w-full bg-transparent text-sm text-[#161815] dark:text-[#F3EFEA] placeholder-[#858D85] dark:placeholder-[#737D75] focus:outline-hidden py-2"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1A3B2B] dark:bg-[#244E39] text-[#FAF8F5] text-xs font-semibold rounded-lg hover:bg-[#122B1F] dark:hover:bg-[#1A3B2B] shrink-0 transition-colors"
                  >
                    {t('home.searchSubmit')}
                  </button>
                </div>

                {/* Popular Search Suggestions */}
                <div className="pt-2.5 flex flex-wrap items-center gap-1.5 text-xs text-[#565C56] dark:text-[#A3ACA5]">
                  <span className="font-mono text-[11px] font-semibold text-[#858D85] dark:text-[#737D75]">Portals:</span>
                  <button
                    type="button"
                    onClick={() => navigate('/schemes/central')}
                    className="px-2 py-0.5 rounded bg-[#FAF3E2] dark:bg-[#252219] hover:bg-[#EFE4CF] text-[11px] font-semibold text-[#A07A18] dark:text-[#DFB24E] border border-[#E0D0AB] dark:border-[#383220] transition-colors"
                  >
                    Central (25)
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/schemes/andhra-pradesh')}
                    className="px-2 py-0.5 rounded bg-[#EBF2ED] dark:bg-[#1A2E22] hover:bg-[#DDE9E0] text-[11px] font-semibold text-[#1A3B2B] dark:text-[#7A9984] border border-[#C5DAC9] dark:border-[#253D30] transition-colors"
                  >
                    Andhra Pradesh (4)
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/schemes/telangana')}
                    className="px-2 py-0.5 rounded bg-[#EBF2ED] dark:bg-[#1A2E22] hover:bg-[#DDE9E0] text-[11px] font-semibold text-[#1A3B2B] dark:text-[#7A9984] border border-[#C5DAC9] dark:border-[#253D30] transition-colors"
                  >
                    Telangana (5)
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/schemes/tamil-nadu')}
                    className="px-2 py-0.5 rounded bg-[#EBF2ED] dark:bg-[#1A2E22] hover:bg-[#DDE9E0] text-[11px] font-semibold text-[#1A3B2B] dark:text-[#7A9984] border border-[#C5DAC9] dark:border-[#253D30] transition-colors"
                  >
                    Tamil Nadu (5)
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/schemes?category=disability')}
                    className="px-2 py-0.5 rounded bg-[#EFE8DE] dark:bg-[#232A25] hover:bg-[#E2D8C9] dark:hover:bg-[#2C352F] text-[11px] transition-colors"
                  >
                    Disability
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate('/schemes?category=agriculture')}
                    className="px-2 py-0.5 rounded bg-[#EFE8DE] dark:bg-[#232A25] hover:bg-[#E2D8C9] dark:hover:bg-[#2C352F] text-[11px] transition-colors"
                  >
                    Farmers
                  </button>
                </div>
              </form>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link
                  to="/schemes"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#1A3B2B] dark:bg-[#244E39] text-[#FAF8F5] font-semibold text-sm rounded-lg hover:bg-[#122B1F] dark:hover:bg-[#1A3B2B] shadow-sm hover:shadow transition-all group"
                >
                  <Search className="w-4 h-4 text-[#DFB24E]" />
                  <span>{t('home.exploreBtn')}</span>
                  <ArrowRight className="w-4 h-4 text-[#FAF8F5]/80 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/assistant"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#FFFFFF] dark:bg-[#181D1A] text-[#161815] dark:text-[#F3EFEA] font-semibold text-sm rounded-lg border border-[#D5CABE] dark:border-[#2C352F] hover:bg-[#FAF8F5] dark:hover:bg-[#232A25] shadow-xs transition-all"
                >
                  <Sparkles className="w-4 h-4 text-[#B95938] dark:text-[#DFB24E]" />
                  <span>{t('home.askAiBtn')}</span>
                </Link>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#565C56] dark:text-[#A3ACA5]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A5A43] dark:text-[#7A9984]" />
                  <span>{t('home.noTracking')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A5A43] dark:text-[#7A9984]" />
                  <span>{t('home.clientSide')}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#2A5A43] dark:text-[#7A9984]" />
                  <span>{t('home.officialGazettes')}</span>
                </div>
              </div>

            </div>

            {/* Right Interactive Artifact Column: Tactile Scheme Dossier */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Background decorative card offset */}
                <div className="absolute inset-0 bg-[#EFE8DE] dark:bg-[#1F2622] rounded-2xl transform rotate-2 translate-x-2 translate-y-2 border border-[#D5CABE] dark:border-[#2C352F]" />

                {/* Main Foreground Card: Scheme Dossier */}
                <div className="relative bg-[#FFFFFF] dark:bg-[#181D1A] rounded-2xl border border-[#D5CABE] dark:border-[#2C352F] p-6 shadow-md space-y-5">
                  
                  {/* Card Header */}
                  <div className="flex items-center justify-between border-b border-[#E7DFD4] dark:border-[#232A25] pb-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded bg-[#1A3B2B] dark:bg-[#244E39] text-white flex items-center justify-center text-xs font-mono font-bold">
                        AP
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#B95938] dark:text-[#DFB24E] font-bold">Andhra Pradesh Flagship</span>
                        <h3 className="font-serif font-bold text-base text-[#161815] dark:text-[#F3EFEA]">NTR Bharosa Disability Pension</h3>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-[#EBF2ED] dark:bg-[#1E2E24] text-[#1A3B2B] dark:text-[#7A9984] font-semibold rounded border border-[#C5DAC9] dark:border-[#253D30]">
                      G.O.Ms.No.43
                    </span>
                  </div>

                  {/* Benefit Snippet */}
                  <div className="p-3.5 bg-[#FAF8F5] dark:bg-[#1F2622] rounded-lg border border-[#E7DFD4] dark:border-[#232A25] space-y-1.5">
                    <div className="text-xs text-[#565C56] dark:text-[#A3ACA5]">Monthly Social Security Grant:</div>
                    <div className="font-serif text-2xl font-bold text-[#1A3B2B] dark:text-[#DFB24E]">
                      ₹6,000 to ₹15,000 <span className="text-xs font-sans font-normal text-[#565C56] dark:text-[#A3ACA5]">/ month</span>
                    </div>
                    <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-snug">
                      ₹6,000/mo for 40-79% disability; ₹15,000/mo for severe/bedridden 80%+; ₹10,000/mo for chronic dialysis.
                    </p>
                  </div>

                  {/* Interactive Mini Checklist Preview */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('home.docReadiness')}</span>
                      <span className="text-[#1A3B2B] dark:text-[#DFB24E] font-mono text-[11px] font-bold">3 of 4 Ready</span>
                    </div>
                    
                    <div className="w-full bg-[#EFE8DE] dark:bg-[#2C352F] h-1.5 rounded-full overflow-hidden">
                      <div className="bg-[#1A3B2B] dark:bg-[#DFB24E] h-full w-3/4 rounded-full transition-all" />
                    </div>

                    <div className="space-y-1.5 pt-1 text-xs">
                      <div className="flex items-center gap-2 text-[#161815] dark:text-[#F3EFEA]">
                        <CheckSquare className="w-3.5 h-3.5 text-[#2A5A43] dark:text-[#7A9984]" />
                        <span>SADAREM / UDID Certificate (≥40%)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#161815] dark:text-[#F3EFEA]">
                        <CheckSquare className="w-3.5 h-3.5 text-[#2A5A43] dark:text-[#7A9984]" />
                        <span>Andhra Pradesh Rice Card (White Ration Card)</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#161815] dark:text-[#F3EFEA]">
                        <CheckSquare className="w-3.5 h-3.5 text-[#2A5A43] dark:text-[#7A9984]" />
                        <span>Aadhaar-seeded DBT Bank Account</span>
                      </div>
                      <div className="flex items-center gap-2 text-[#858D85] dark:text-[#737D75]">
                        <div className="w-3.5 h-3.5 rounded border border-[#D5CABE] dark:border-[#3D4941] flex items-center justify-center text-[9px]">4</div>
                        <span>Village/Ward Secretariat Biometric Verification</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-2 border-t border-[#E7DFD4] dark:border-[#232A25] flex items-center justify-between">
                    <Link
                      to="/schemes/ap-ntr-bharosa-disability"
                      className="text-xs font-semibold text-[#1A3B2B] dark:text-[#DFB24E] hover:underline flex items-center gap-1 group"
                    >
                      <span>{t('home.readBreakdown')}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>

                    <a
                      href="https://sspensions.ap.gov.in"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-mono text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-[#F3EFEA] flex items-center gap-1"
                    >
                      <span>sspensions.ap.gov.in</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 1.5 EXPLORE GOVERNMENT SCHEMES (CENTRAL & STATES) */}
      <section className="py-12 bg-white dark:bg-[#181D1A] border-b border-[#E7DFD4] dark:border-[#232A25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GovernmentSectionNav showAllLink={true} />
        </div>
      </section>

      {/* 2. DISCOVER BENEFITS FOR YOUR LIFE STAGE */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] dark:bg-[#101412] border-b border-[#E7DFD4] dark:border-[#232A25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B95938] dark:text-[#DFB24E] font-bold">
              {t('home.lifeStagesBadge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
              {t('home.lifeStagesTitle')}
            </h2>
            <p className="text-sm sm:text-base text-[#565C56] dark:text-[#A3ACA5]">
              {t('home.lifeStagesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {lifeStages.map((stage) => {
              const IconComp = stage.icon;
              return (
                <Link
                  key={stage.id}
                  to={stage.link}
                  className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-5 space-y-3 hover:border-[#1A3B2B] dark:hover:border-[#DFB24E] hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-lg bg-[#FAF8F5] dark:bg-[#232A25] text-[#1A3B2B] dark:text-[#DFB24E] flex items-center justify-center border border-[#E7DFD4] dark:border-[#2C352F] group-hover:scale-105 transition-transform">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#EFE8DE] dark:bg-[#232A25] text-[#565C56] dark:text-[#A3ACA5]">
                        {stage.tag}
                      </span>
                    </div>

                    <h3 className="font-serif font-bold text-base text-[#161815] dark:text-[#F3EFEA] group-hover:text-[#1A3B2B] dark:group-hover:text-[#DFB24E] transition-colors">
                      {stage.title}
                    </h3>

                    <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed line-clamp-3">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#E7DFD4] dark:border-[#232A25] flex items-center text-xs font-semibold text-[#1A3B2B] dark:text-[#DFB24E]">
                    <span>View schemes</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform ml-auto" />
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* 3. FIND SCHEMES THAT MATCH YOUR NEEDS: INTERACTIVE DIRECTORY PREVIEW */}
      <section className="py-16 lg:py-24 bg-[#F5EFEB] dark:bg-[#141916] border-b border-[#E7DFD4] dark:border-[#232A25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#1A3B2B] dark:text-[#DFB24E] font-bold">
                {t('home.repoBadge')}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
                {t('home.repoTitle')}
              </h2>
              <p className="text-sm text-[#565C56] dark:text-[#A3ACA5]">
                {t('home.repoSubtitle')}
              </p>
            </div>

            <Link
              to="/schemes"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A3B2B] dark:text-[#DFB24E] hover:underline group shrink-0"
            >
              <span>{t('home.viewAllSchemes')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Category Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.slice(0, 8).map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A3B2B] dark:bg-[#244E39] text-white shadow-xs'
                    : 'bg-[#FFFFFF] dark:bg-[#181D1A] text-[#565C56] dark:text-[#A3ACA5] border border-[#D5CABE] dark:border-[#2C352F] hover:bg-[#EFE8DE] dark:hover:bg-[#232A25]'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Varied Scheme Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSchemes.map(scheme => (
              <div
                key={scheme.id}
                className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 space-y-4 hover:border-[#1A3B2B] dark:hover:border-[#DFB24E] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold bg-[#EFE8DE] dark:bg-[#232A25] text-[#1A3B2B] dark:text-[#7A9984] rounded">
                      {scheme.categoryLabel}
                    </span>
                    <span className="text-[11px] font-mono text-[#2A5A43] dark:text-[#7A9984] font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{scheme.isCentral ? 'Central' : scheme.stateApplicability}</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#161815] dark:text-[#F3EFEA] leading-snug">
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
                    <div className="text-[10px] font-mono uppercase text-[#B95938] dark:text-[#DFB24E] font-bold">{t('home.benefit')}</div>
                    <div className="font-serif font-bold text-[#1A3B2B] dark:text-[#DFB24E] text-sm mt-0.5 line-clamp-2">
                      {scheme.financialBenefit}
                    </div>
                  </div>

                  <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed line-clamp-2">
                    {scheme.shortSummary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {scheme.beneficiaries.slice(0, 2).map((b, i) => (
                      <span key={i} className="text-[11px] bg-[#FAF8F5] dark:bg-[#141916] text-[#565C56] dark:text-[#A3ACA5] px-2 py-0.5 rounded border border-[#E7DFD4] dark:border-[#232A25]">
                        {b}
                      </span>
                    ))}
                    <span className="text-[11px] bg-[#FAF8F5] dark:bg-[#141916] text-[#565C56] dark:text-[#A3ACA5] px-2 py-0.5 rounded border border-[#E7DFD4] dark:border-[#232A25]">
                      {scheme.requiredDocuments.length} Documents
                    </span>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-[#E7DFD4] dark:border-[#232A25] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Link
                      to={`/schemes/${scheme.id}`}
                      className="px-3 py-1.5 bg-[#FAF8F5] dark:bg-[#232A25] text-[#161815] dark:text-[#F3EFEA] hover:bg-[#EAE3D6] dark:hover:bg-[#2D3630] text-xs font-semibold rounded border border-[#D5CABE] dark:border-[#2C352F] transition-colors"
                    >
                      {t('home.details')}
                    </Link>
                    <Link
                      to={`/checklist?scheme=${scheme.id}`}
                      className="px-3 py-1.5 bg-[#FAF8F5] dark:bg-[#1E2E24] text-[#1A3B2B] dark:text-[#7A9984] hover:bg-[#EBF2ED] text-xs font-semibold rounded border border-[#C5DAC9] dark:border-[#253D30] transition-colors flex items-center gap-1"
                    >
                      <CheckSquare className="w-3 h-3" />
                      <span>{t('home.checklist')}</span>
                    </Link>
                  </div>

                  <a
                    href={scheme.officialSource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#565C56] dark:text-[#A3ACA5] hover:text-[#1A3B2B] dark:hover:text-[#DFB24E] flex items-center gap-1"
                  >
                    <span>{t('home.portal')}</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. THE THREE-STEP JOURNEY */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] dark:bg-[#101412] border-b border-[#E7DFD4] dark:border-[#232A25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B95938] dark:text-[#DFB24E] font-bold">
              {t('home.pathwayBadge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
              {t('home.pathwayTitle')}
            </h2>
            <p className="text-sm sm:text-base text-[#565C56] dark:text-[#A3ACA5]">
              {t('home.pathwaySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1: ASK */}
            <div className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-7 space-y-4 hover:border-[#1A3B2B]/50 transition-colors shadow-xs relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-[#1A3B2B] dark:text-[#7A9984]">01</span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-[#EBF2ED] dark:bg-[#1A2E22] text-[#1A3B2B] dark:text-[#7A9984] rounded font-semibold uppercase">
                  {t('home.step1Badge')}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">{t('home.step1Title')}</h3>
              <p className="text-sm text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                {t('home.step1Desc')}
              </p>

              <div className="pt-2 text-xs font-mono text-[#4E6352] dark:text-[#7A9984] bg-[#FAF8F5] dark:bg-[#141916] p-3 rounded border border-[#E7DFD4] dark:border-[#232A25]">
                {t('home.step1Sample')}
              </div>

              <Link
                to="/assistant"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A3B2B] dark:text-[#DFB24E] hover:underline pt-2"
              >
                <span>{t('home.step1Action')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Step 2: UNDERSTAND */}
            <div className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-7 space-y-4 hover:border-[#1A3B2B]/50 transition-colors shadow-xs relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-[#B95938] dark:text-[#DFB24E]">02</span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-[#FAECE7] dark:bg-[#252219] text-[#B95938] dark:text-[#DFB24E] rounded font-semibold uppercase">
                  {t('home.step2Badge')}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">{t('home.step2Title')}</h3>
              <p className="text-sm text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                {t('home.step2Desc')}
              </p>

              <div className="pt-2 text-xs font-mono text-[#B95938] dark:text-[#DFB24E] bg-[#FAF8F5] dark:bg-[#141916] p-3 rounded border border-[#E7DFD4] dark:border-[#232A25]">
                {t('home.step2Sample')}
              </div>

              <Link
                to="/eligibility"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#B95938] dark:text-[#DFB24E] hover:underline pt-2"
              >
                <span>{t('home.step2Action')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Step 3: TAKE THE NEXT STEP */}
            <div className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-7 space-y-4 hover:border-[#1A3B2B]/50 transition-colors shadow-xs relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-bold text-[#C69B32] dark:text-[#DFB24E]">03</span>
                <span className="px-2 py-0.5 text-[10px] font-mono bg-[#FAF3E2] dark:bg-[#252219] text-[#A07A18] dark:text-[#DFB24E] rounded font-semibold uppercase">
                  {t('home.step3Badge')}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">{t('home.step3Title')}</h3>
              <p className="text-sm text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                {t('home.step3Desc')}
              </p>

              <div className="pt-2 text-xs font-mono text-[#1A3B2B] dark:text-[#7A9984] bg-[#FAF8F5] dark:bg-[#141916] p-3 rounded border border-[#E7DFD4] dark:border-[#232A25]">
                {t('home.step3Sample')}
              </div>

              <Link
                to="/checklist"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C69B32] dark:text-[#DFB24E] hover:underline pt-2"
              >
                <span>{t('home.step3Action')}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 5. COMMON DOCUMENTS YOU MAY NEED AHEAD OF TIME */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] dark:bg-[#101412] border-b border-[#E7DFD4] dark:border-[#232A25]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A3B2B] dark:text-[#DFB24E] font-bold">
              {t('home.docsBadge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
              {t('home.docsTitle')}
            </h2>
            <p className="text-sm sm:text-base text-[#565C56] dark:text-[#A3ACA5]">
              {t('home.docsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commonDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 space-y-3 hover:border-[#1A3B2B] dark:hover:border-[#DFB24E] transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[#1A3B2B] dark:text-[#DFB24E]">
                    <div className="w-7 h-7 rounded bg-[#FAF8F5] dark:bg-[#232A25] flex items-center justify-center font-mono font-bold text-xs border border-[#E7DFD4] dark:border-[#2C352F]">
                      0{idx + 1}
                    </div>
                    <FileText className="w-4 h-4 text-[#B95938] dark:text-[#DFB24E]" />
                  </div>

                  <h3 className="font-serif font-bold text-base text-[#161815] dark:text-[#F3EFEA]">
                    {doc.title}
                  </h3>

                  <p className="text-xs text-[#565C56] dark:text-[#A3ACA5] leading-relaxed">
                    {doc.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E7DFD4] dark:border-[#232A25] text-[11px] font-mono text-[#4E6352] dark:text-[#7A9984] bg-[#FAF8F5] dark:bg-[#141916] p-2.5 rounded">
                  <span className="font-bold">Citizen Tip: </span>{doc.tip}
                </div>
              </div>
            ))}

            {/* Checklist CTA card */}
            <div className="bg-[#1A3B2B] dark:bg-[#152E22] rounded-xl border border-[#2A5A43] p-6 text-white flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-[#DFB24E] font-bold">Interactive Tool</span>
                <h3 className="font-serif font-bold text-xl text-white">Generate Your Complete Dossier</h3>
                <p className="text-xs text-[#C5DAC9] leading-relaxed">
                  Select any scheme in our directory to create an interactive document checklist with instant download and local state saving.
                </p>
              </div>

              <Link
                to="/checklist"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#FAF8F5] text-[#1A3B2B] font-semibold text-xs rounded-lg hover:bg-[#EFE8DE] transition-colors"
              >
                <span>Open Checklist Manager</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. THE CITIZEN PROBLEM & SAFEGUARDS */}
      <section className="py-16 lg:py-24 bg-[#122B1F] dark:bg-[#0D1F17] text-[#FAF8F5] border-b border-[#1A3B2B] dark:border-[#1E3B2D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#DFB24E] font-bold">
              {t('home.safeguardsBadge')}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal leading-tight">
              {t('home.safeguardsTitle')}
            </h2>
            <p className="text-sm sm:text-base text-[#C5DAC9] leading-relaxed">
              {t('home.safeguardsSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-[#1A3B2B] dark:bg-[#152E22] p-6 rounded-xl border border-[#2A5A43] dark:border-[#1E4331] space-y-3">
              <div className="w-8 h-8 rounded bg-[#2A5A43] text-[#DFB24E] flex items-center justify-center font-mono font-bold text-sm">
                01
              </div>
              <h4 className="font-serif font-bold text-lg text-white">{t('home.sg1Title')}</h4>
              <p className="text-xs text-[#C5DAC9] leading-relaxed">
                {t('home.sg1Desc')}
              </p>
            </div>

            <div className="bg-[#1A3B2B] dark:bg-[#152E22] p-6 rounded-xl border border-[#2A5A43] dark:border-[#1E4331] space-y-3">
              <div className="w-8 h-8 rounded bg-[#2A5A43] text-[#DFB24E] flex items-center justify-center font-mono font-bold text-sm">
                02
              </div>
              <h4 className="font-serif font-bold text-lg text-white">{t('home.sg2Title')}</h4>
              <p className="text-xs text-[#C5DAC9] leading-relaxed">
                {t('home.sg2Desc')}
              </p>
            </div>

            <div className="bg-[#1A3B2B] dark:bg-[#152E22] p-6 rounded-xl border border-[#2A5A43] dark:border-[#1E4331] space-y-3">
              <div className="w-8 h-8 rounded bg-[#2A5A43] text-[#DFB24E] flex items-center justify-center font-mono font-bold text-sm">
                03
              </div>
              <h4 className="font-serif font-bold text-lg text-white">{t('home.sg3Title')}</h4>
              <p className="text-xs text-[#C5DAC9] leading-relaxed">
                {t('home.sg3Desc')}
              </p>
            </div>

            <div className="bg-[#1A3B2B] dark:bg-[#152E22] p-6 rounded-xl border border-[#2A5A43] dark:border-[#1E4331] space-y-3">
              <div className="w-8 h-8 rounded bg-[#2A5A43] text-[#DFB24E] flex items-center justify-center font-mono font-bold text-sm">
                04
              </div>
              <h4 className="font-serif font-bold text-lg text-white">{t('home.sg4Title')}</h4>
              <p className="text-xs text-[#C5DAC9] leading-relaxed">
                {t('home.sg4Desc')}
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. CITIZEN FREQUENTLY ASKED QUESTIONS */}
      <section className="py-16 lg:py-24 bg-[#FAF8F5] dark:bg-[#101412]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B95938] dark:text-[#DFB24E] font-bold">
              {t('home.faqBadge')}
            </span>
            <h2 className="font-serif text-3xl font-normal text-[#161815] dark:text-[#F3EFEA]">
              {t('home.faqTitle')}
            </h2>
            <p className="text-sm text-[#565C56] dark:text-[#A3ACA5]">
              {t('home.faqSubtitle')}
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FFFFFF] dark:bg-[#181D1A] rounded-lg border border-[#D5CABE] dark:border-[#2C352F] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif text-base font-bold text-[#161815] dark:text-[#F3EFEA] hover:text-[#1A3B2B] dark:hover:text-[#DFB24E] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronRight
                    className={`w-4 h-4 text-[#565C56] dark:text-[#A3ACA5] shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-90 text-[#1A3B2B] dark:text-[#DFB24E]' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-sm text-[#565C56] dark:text-[#A3ACA5] leading-relaxed border-t border-[#E7DFD4] dark:border-[#232A25] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 8. BOTTOM CALLOUT BANNER: START YOUR SCHEME DISCOVERY */}
          <div className="p-8 rounded-xl bg-[#FAF3E2] dark:bg-[#1C1A14] border border-[#E0D0AB] dark:border-[#383220] text-center space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">
              {t('home.ctaBannerTitle')}
            </h3>
            <p className="text-sm text-[#565C56] dark:text-[#A3ACA5] max-w-xl mx-auto">
              {t('home.ctaBannerSubtitle')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                to="/schemes"
                className="px-6 py-2.5 bg-[#1A3B2B] dark:bg-[#244E39] text-white font-semibold text-xs rounded-lg hover:bg-[#122B1F] dark:hover:bg-[#1A3B2B] shadow-xs"
              >
                {t('home.exploreBtn')}
              </Link>
              <Link
                to="/eligibility"
                className="px-6 py-2.5 bg-[#B95938] hover:bg-[#9E472A] text-white font-semibold text-xs rounded-lg shadow-xs"
              >
                Check Eligibility
              </Link>
              <Link
                to="/assistant"
                className="px-6 py-2.5 bg-[#FFFFFF] dark:bg-[#181D1A] text-[#161815] dark:text-[#F3EFEA] font-semibold text-xs rounded-lg border border-[#D5CABE] dark:border-[#2C352F] hover:bg-[#FAF8F5] dark:hover:bg-[#232A25]"
              >
                {t('home.askAiBtn')}
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};