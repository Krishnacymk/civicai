import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  CheckSquare, 
  Compass, 
  Sparkles, 
  AlertCircle, 
  FileText, 
  Building2, 
  CheckCircle2, 
  XCircle, 
  Info,
  Layers,
  MapPin,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { SCHEMES } from '../data/schemes';
import { OfficialSourceBadge } from '../components/common/OfficialSourceBadge';
import { useLanguage } from '../context/LanguageContext';

type TabKey = 'overview' | 'eligibility' | 'documents' | 'roadmap' | 'authority';

export const SchemeDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabKey>('overview');

  const scheme = SCHEMES.find(s => s.id === id);

  if (!scheme) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] py-20 text-[#161815] dark:text-[#F3EFEA]">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <h1 className="font-serif text-2xl font-bold">{t('detail.schemeNotFound')}</h1>
          <p className="text-sm text-[#565C56] dark:text-[#A3ACA5]">
            {t('detail.notFoundDesc')}
          </p>
          <Link
            to="/schemes"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-xs font-semibold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t('detail.returnToDirectory')}</span>
          </Link>
        </div>
      </div>
    );
  }

  const tabs: { key: TabKey; label: string; icon: typeof FileText; count?: number }[] = [
    { key: 'overview', label: 'Overview & Objectives', icon: FileText },
    { key: 'eligibility', label: 'Eligibility & Exclusions', icon: Compass },
    { key: 'documents', label: 'Required Documents', icon: CheckSquare, count: scheme.requiredDocuments.length },
    { key: 'roadmap', label: 'Application Roadmap', icon: Layers, count: scheme.applicationSteps.length },
    { key: 'authority', label: 'Official Authority', icon: Building2 }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] text-[#161815] dark:text-[#F3EFEA] pb-24 transition-colors duration-150 animate-fade-in">
      
      {/* Editorial Header Section */}
      <section className="bg-white dark:bg-[#181D1A] border-b border-[#E7DFD4] dark:border-[#2C352F] pt-8 pb-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          {/* Breadcrumb & Navigation */}
          <div className="flex items-center justify-between text-xs text-[#565C56] dark:text-[#A3ACA5]">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-1.5 hover:text-[#1A3B2B] dark:hover:text-[#90C8A4] font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{t('detail.back')}</span>
            </button>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <Link to="/" className="hover:underline">{t('nav.home')}</Link>
              <span>/</span>
              <Link to="/schemes" className="hover:underline">{t('nav.exploreSchemes')}</Link>
              <span>/</span>
              <span className="text-[#1A3B2B] dark:text-[#90C8A4] font-semibold">{scheme.id}</span>
            </div>
          </div>

          {/* Scheme Title & Badges */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-mono font-semibold bg-[#EBF2ED] dark:bg-[#1F2C23] text-[#1A3B2B] dark:text-[#90C8A4] rounded">
                {scheme.categoryLabel}
              </span>

              {/* Jurisdiction Pill */}
              <span className={`px-2.5 py-1 text-xs font-mono rounded flex items-center gap-1 ${
                scheme.isCentral
                  ? 'bg-[#EAE8E3] dark:bg-[#252826] text-[#424744] dark:text-[#C5CDC6]'
                  : 'bg-[#FAF3E2] dark:bg-[#262015] text-[#8C6D1F] dark:text-[#DFB24E] font-semibold border border-[#E0D0AB] dark:border-[#4A3D25]'
              }`}>
                <MapPin className="w-3 h-3" />
                <span>{scheme.isCentral ? 'Central Government' : 'Government of Andhra Pradesh'}</span>
              </span>

              <span className="px-2.5 py-1 text-xs font-mono bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] text-[#565C56] dark:text-[#A3ACA5] rounded">
                {scheme.geographicScope}
              </span>

              <span className="px-2.5 py-1 text-xs font-mono bg-[#EBF2ED] dark:bg-[#1F2C23] text-[#2A5A43] dark:text-[#90C8A4] font-semibold rounded flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>Verified: {scheme.officialSource.lastVerifiedDate}</span>
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal leading-tight">
              {scheme.name}
            </h1>

            {(scheme.hindiName || scheme.teluguName) && (
              <div className="text-sm text-[#565C56] dark:text-[#A3ACA5] flex flex-wrap gap-3">
                {scheme.hindiName && <span>{scheme.hindiName}</span>}
                {scheme.teluguName && <span>• {scheme.teluguName}</span>}
              </div>
            )}

            <p className="text-sm sm:text-base text-[#565C56] dark:text-[#C5CDC6] leading-relaxed pt-1">
              {scheme.tagline}
            </p>
          </div>

          {/* Key Benefit Highlight Box */}
          <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] dark:bg-[#121614] border-2 border-[#1A3B2B]/20 dark:border-[#90C8A4]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#B95938] dark:text-[#DFB24E] font-bold">
                {t('detail.entitlement')}
              </span>
              <div className="font-serif font-bold text-2xl text-[#1A3B2B] dark:text-[#DFB24E]">
                {scheme.financialBenefit}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <Link
                to={`/eligibility?scheme=${scheme.id}`}
                className="px-4 py-2.5 bg-[#1A3B2B] dark:bg-[#24583F] text-white text-xs font-semibold rounded-lg hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] shadow-xs flex items-center gap-1.5"
              >
                <Compass className="w-3.5 h-3.5 text-[#DFB24E]" />
                <span>{t('detail.checkEligibility')}</span>
              </Link>
              <Link
                to={`/checklist?scheme=${scheme.id}`}
                className="px-4 py-2.5 bg-white dark:bg-[#181D1A] text-[#1A3B2B] dark:text-[#90C8A4] border border-[#C5DAC9] dark:border-[#2C352F] text-xs font-semibold rounded-lg hover:bg-[#EBF2ED] dark:hover:bg-[#1F2C23] flex items-center gap-1.5"
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>{t('detail.prepareDocuments')} ({scheme.requiredDocuments.length})</span>
              </Link>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 border-b border-[#E7DFD4] dark:border-[#2C352F] overflow-x-auto no-scrollbar pt-2">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`px-4 py-3 text-xs font-semibold flex items-center gap-2 border-b-2 transition-all shrink-0 ${
                    isActive
                      ? 'border-[#1A3B2B] dark:border-[#90C8A4] text-[#1A3B2B] dark:text-[#90C8A4]'
                      : 'border-transparent text-[#565C56] dark:text-[#A3ACA5] hover:text-[#161815] dark:hover:text-white hover:border-[#D5CABE]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      isActive 
                        ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white' 
                        : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#858D85] dark:text-[#7A837C]'
                    }`}>
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </section>

      {/* Main Tab Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 space-y-10">
        
        {/* Tab 1: Overview & Objectives */}
        {activeTab === 'overview' && (
          <section className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-5 shadow-xs animate-fade-in-fast">
            <div className="flex items-center gap-2 border-b border-[#E7DFD4] dark:border-[#2C352F] pb-3">
              <FileText className="w-4 h-4 text-[#1A3B2B] dark:text-[#DFB24E]" />
              <h2 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">{t('detail.overviewTitle')}</h2>
            </div>

            <p className="text-sm text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
              {scheme.fullDescription}
            </p>

            <div className="pt-2 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#161815] dark:text-[#F3EFEA]">{t('detail.coreObjectives')}</h3>
              <ul className="space-y-1.5 text-xs text-[#565C56] dark:text-[#A3ACA5]">
                {scheme.keyObjectives.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2A5A43] dark:text-[#90C8A4] shrink-0 mt-0.5" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#E7DFD4] dark:border-[#2C352F] flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('detail.beneficiaries')}</span>
              {scheme.beneficiaries.map((b, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded bg-[#FAF8F5] dark:bg-[#121614] border border-[#E7DFD4] dark:border-[#2C352F] text-[#565C56] dark:text-[#A3ACA5]">
                  {b}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Tab 2: Detailed Eligibility Criteria & Exclusions */}
        {activeTab === 'eligibility' && (
          <section className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-6 shadow-xs animate-fade-in-fast">
            <div className="flex items-center justify-between border-b border-[#E7DFD4] dark:border-[#2C352F] pb-3">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#1A3B2B] dark:text-[#DFB24E]" />
                <h2 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">{t('detail.eligibilityExclusions')}</h2>
              </div>
              <Link
                to={`/eligibility?scheme=${scheme.id}`}
                className="text-xs font-semibold text-[#1A3B2B] dark:text-[#90C8A4] hover:underline"
              >
                {t('detail.testProfile')}
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Qualifying Conditions */}
              <div className="p-5 rounded-lg bg-[#EBF2ED]/50 dark:bg-[#1F2C23]/30 border border-[#C5DAC9] dark:border-[#2C352F] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1A3B2B] dark:text-[#90C8A4] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#2A5A43] dark:text-[#90C8A4]" />
                  <span>{t('detail.whoIsEligible')}</span>
                </div>
                <ul className="space-y-2 text-xs text-[#161815] dark:text-[#F3EFEA]">
                  {scheme.eligibilityHighlights.map((eh, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#2A5A43] dark:text-[#90C8A4] font-bold">✓</span>
                      <span className="leading-snug">{eh}</span>
                    </li>
                  ))}
                </ul>
                {scheme.eligibilityRules.notes && (
                  <div className="pt-2 text-[11px] text-[#4E6352] dark:text-[#A3ACA5] italic border-t border-[#C5DAC9]/60 dark:border-[#2C352F]">
                    Note: {scheme.eligibilityRules.notes}
                  </div>
                )}
              </div>

              {/* Ineligibility / Exclusions */}
              <div className="p-5 rounded-lg bg-[#FAECE7]/50 dark:bg-[#2C1D18]/30 border border-[#ECCDC5] dark:border-[#52291E] space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#B95938] dark:text-[#E07A5F] uppercase tracking-wider">
                  <XCircle className="w-4 h-4 text-[#B95938] dark:text-[#E07A5F]" />
                  <span>{t('detail.statutoryExclusions')}</span>
                </div>
                <ul className="space-y-2 text-xs text-[#161815] dark:text-[#F3EFEA]">
                  {scheme.exclusions.map((ex, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#B95938] dark:text-[#E07A5F] font-bold">✕</span>
                      <span className="leading-snug">{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <div className="p-3.5 bg-[#FAF8F5] dark:bg-[#121614] rounded-lg border border-[#E7DFD4] dark:border-[#2C352F] text-xs text-[#565C56] dark:text-[#A3ACA5] flex items-start gap-2">
              <Info className="w-4 h-4 text-[#4E6352] dark:text-[#90C8A4] shrink-0 mt-0.5" />
              <p>
                {t('detail.criteriaNote')}
              </p>
            </div>
          </section>
        )}

        {/* Tab 3: Verified Required Documents */}
        {activeTab === 'documents' && (
          <section className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-5 shadow-xs animate-fade-in-fast">
            <div className="flex items-center justify-between border-b border-[#E7DFD4] dark:border-[#2C352F] pb-3">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-[#1A3B2B] dark:text-[#DFB24E]" />
                <h2 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">{t('detail.verifiedDocs')}</h2>
              </div>
              <Link
                to={`/checklist?scheme=${scheme.id}`}
                className="text-xs font-semibold text-[#1A3B2B] dark:text-[#90C8A4] hover:underline"
              >
                {t('detail.openInteractive')}
              </Link>
            </div>

            <p className="text-xs text-[#565C56] dark:text-[#A3ACA5]">
              {t('detail.gatherAhead')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {scheme.requiredDocuments.map(doc => (
                <div
                  key={doc.id}
                  className="p-4 rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#E7DFD4] dark:border-[#2C352F] space-y-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif font-bold text-sm text-[#161815] dark:text-[#F3EFEA]">{doc.name}</h4>
                    <span className={`px-1.5 py-0.5 text-[10px] font-mono rounded ${
                      doc.isMandatory 
                        ? 'bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] font-semibold' 
                        : 'bg-[#EFE8DE] dark:bg-[#242A26] text-[#565C56] dark:text-[#A3ACA5]'
                    }`}>
                      {doc.isMandatory ? 'Mandatory' : 'Conditional'}
                    </span>
                  </div>

                  <p className="text-xs text-[#565C56] dark:text-[#A3ACA5]">
                    <strong className="text-[#161815] dark:text-[#F3EFEA]">{t('detail.purpose')}</strong> {doc.purpose}
                  </p>

                  <div className="p-2 bg-white dark:bg-[#181D1A] rounded border border-[#E7DFD4] dark:border-[#2C352F] text-[11px] text-[#4E6352] dark:text-[#A3C4AC] flex items-start gap-1.5">
                    <span className="font-bold text-[#1A3B2B] dark:text-[#90C8A4]">{t('detail.citizenAdvice')}</span>
                    <span>{doc.citizenTip}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <Link
                to={`/checklist?scheme=${scheme.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1A3B2B] dark:bg-[#24583F] text-white text-xs font-semibold rounded-lg hover:bg-[#122B1F] dark:hover:bg-[#1D4A35]"
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>{t('detail.launchChecklist')}</span>
              </Link>
            </div>
          </section>
        )}

        {/* Tab 4: Application Roadmap */}
        {activeTab === 'roadmap' && (
          <section className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-6 shadow-xs animate-fade-in-fast">
            <div className="flex items-center gap-2 border-b border-[#E7DFD4] dark:border-[#2C352F] pb-3">
              <Building2 className="w-4 h-4 text-[#1A3B2B] dark:text-[#DFB24E]" />
              <h2 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">{t('detail.applicationRoadmap')}</h2>
            </div>

            <div className="relative space-y-6 pl-4 sm:pl-8 before:absolute before:left-2 sm:before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#D5CABE] dark:before:bg-[#2C352F]">
              {scheme.applicationSteps.map(step => (
                <div key={step.stepNumber} className="relative space-y-1">
                  {/* Step Marker Dot */}
                  <div className="absolute -left-6 sm:-left-10 top-0.5 w-5 h-5 rounded-full bg-[#1A3B2B] dark:bg-[#24583F] text-white text-[10px] font-mono font-bold flex items-center justify-center ring-4 ring-[#FAF8F5] dark:ring-[#101412]">
                    {step.stepNumber}
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-serif font-bold text-base text-[#161815] dark:text-[#F3EFEA]">{step.title}</h4>
                    <span className="px-2 py-0.5 text-[10px] font-mono bg-[#EFE8DE] dark:bg-[#242A26] text-[#565C56] dark:text-[#A3ACA5] rounded">
                      {step.portalOrOffice}
                    </span>
                  </div>

                  <p className="text-xs text-[#565C56] dark:text-[#C5CDC6] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E7DFD4] dark:border-[#2C352F] flex items-center justify-between">
              <span className="text-xs text-[#565C56] dark:text-[#A3ACA5]">Ready to proceed to the government portal?</span>
              <a
                href={scheme.officialSource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-xs font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] flex items-center gap-1.5"
              >
                <span>Open {scheme.officialSource.url.replace('https://', '')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>
        )}

        {/* Tab 5: Official Source & Authority */}
        {activeTab === 'authority' && (
          <section className="space-y-4 animate-fade-in-fast">
            <h3 className="font-serif font-bold text-lg text-[#161815] dark:text-[#F3EFEA]">{t('detail.officialAuthority')}</h3>
            <OfficialSourceBadge source={scheme.officialSource} />
          </section>
        )}

        {/* Always Visible: Interactive Next Steps & Assistant Guidance Card */}
        <section className="p-6 rounded-xl bg-[#FAF3E2] dark:bg-[#262015] border border-[#E0D0AB] dark:border-[#4A3D25] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif font-bold text-base text-[#161815] dark:text-[#F3EFEA]">{t('detail.questionsBannerTitle')}</h4>
            <p className="text-xs text-[#565C56] dark:text-[#D5C5A8]">
              {t('detail.questionsBannerDesc')}
            </p>
          </div>
          <Link
            to={`/assistant?q=Tell me about the requirements and application steps for ${encodeURIComponent(scheme.name)}`}
            className="px-5 py-2.5 bg-[#1A3B2B] dark:bg-[#24583F] text-white text-xs font-semibold rounded-lg hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] shrink-0 flex items-center gap-1.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#DFB24E]" />
            <span>{t('detail.askCivicAiGuide')}</span>
          </Link>
        </section>

      </div>

    </div>
  );
};
