import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  RotateCcw, 
  CheckSquare, 
  ExternalLink, 
  Sparkles,
  MapPin,
  Building2
} from 'lucide-react';
import { SCHEMES } from '../data/schemes';
import { GOVERNMENTS } from '../data/governments';
import type { Scheme } from '../types/scheme';
import { useLanguage } from '../context/LanguageContext';

interface AssessmentResult {
  scheme: Scheme;
  matchStatus: 'high' | 'conditional' | 'unlikely';
  matchedReasons: string[];
  unmetOrUncertainReasons: string[];
}

export const EligibilityPage = () => {
  const [searchParams] = useSearchParams();
  const preselectedSchemeId = searchParams.get('scheme');
  const { t, language } = useLanguage();

  const [currentStep, setCurrentStep] = useState<number>(1);

  // Form State
  const [targetState, setTargetState] = useState<string>(() => {
    const s = searchParams.get('state')?.toLowerCase();
    if (!s) return 'all';
    const found = GOVERNMENTS.find(g => 
      g.slug === s || 
      g.stateCode?.toLowerCase() === s || 
      g.name.toLowerCase() === s
    );
    return found ? found.name : 'all';
  });
  const [targetSchemeId, setTargetSchemeId] = useState<string>(preselectedSchemeId || 'all');
  const [occupation, setOccupation] = useState<string>('');
  const [age, setAge] = useState<string>('25');
  const [gender, setGender] = useState<string>('all');
  const [socialCategory, setSocialCategory] = useState<string>('General');
  const [disabilityStatus, setDisabilityStatus] = useState<string>('none'); // 'none', 'pwd_40', 'pwd_80_severe', 'chronic_dialysis'
  const [incomeRange, setIncomeRange] = useState<string>('below_250k');
  const [hasCultivableLand, setHasCultivableLand] = useState<string>('no');
  const [isBPL, setIsBPL] = useState<string>('no');
  const [isGovernmentEmployee, setIsGovernmentEmployee] = useState<string>('no');
  const [supportIntent, setSupportIntent] = useState<string>('all');

  const [hasCompleted, setHasCompleted] = useState<boolean>(false);
  const [results, setResults] = useState<AssessmentResult[]>([]);

  const handleRunAssessment = () => {
    const ageNum = parseInt(age, 10) || 25;
    const isGov = isGovernmentEmployee === 'yes';
    const isBplHousehold = isBPL === 'yes';
    const hasLand = hasCultivableLand === 'yes';
    const isPwD = disabilityStatus === 'pwd_40' || disabilityStatus === 'pwd_80_severe' || disabilityStatus === 'chronic_dialysis';
    const isSeverePwD = disabilityStatus === 'pwd_80_severe';
    const isDialysis = disabilityStatus === 'chronic_dialysis';
    
    const selectedGov = targetState !== 'all' 
      ? GOVERNMENTS.find(g => g.name.toLowerCase() === targetState.toLowerCase() || g.stateCode === targetState || g.slug === targetState.toLowerCase())
      : null;
    const selectedCode = selectedGov?.stateCode;
    const isAP = !selectedCode || selectedCode === 'AP';
    const isTG = !selectedCode || selectedCode === 'TG';
    const isTN = !selectedCode || selectedCode === 'TN';

    const evaluatedSchemes = targetSchemeId === 'all'
      ? SCHEMES
      : SCHEMES.filter(s => s.id === targetSchemeId);

    const assessed: AssessmentResult[] = evaluatedSchemes.map(scheme => {
      const matched: string[] = [];
      const unmet: string[] = [];

      // 1. State / Union Territory Jurisdiction Check
      if (scheme.governmentLevel === 'state' || scheme.governmentLevel === 'union-territory') {
        if (selectedGov) {
          if (scheme.stateCode !== selectedCode) {
            unmet.push(`Scheme is exclusively applicable to permanent residents of ${scheme.administeringGovernment}.`);
          } else {
            matched.push(`Resident of ${selectedGov.name}, matching ${selectedGov.level === 'union-territory' ? 'UT' : 'state'} jurisdiction.`);
          }
        } else {
          matched.push(`Administered by ${scheme.administeringGovernment} (${scheme.stateCode}).`);
        }
      } else {
        matched.push('Central Government scheme applicable across all Indian states and Union Territories.');
      }

      // 2. Government Employee Statutory Exclusion
      if (isGov && (scheme.id === 'pm-kisan' || scheme.id === 'pmmvy' || scheme.id === 'pm-vishwakarma' || scheme.id === 'ap-thalliki-vandanam' || scheme.id === 'ap-annadata-sukhibhava' || scheme.id === 'tg-rythu-bharosa' || scheme.id === 'tn-kmut-women-basic-income')) {
        unmet.push('Disqualified: Government employees and regular public sector workers are statutory exclusions.');
      }

      // 3. Age Restrictions
      if (scheme.eligibilityRules.minAge && ageNum < scheme.eligibilityRules.minAge) {
        unmet.push(`Requires minimum age of ${scheme.eligibilityRules.minAge} years (provided: ${ageNum}).`);
      } else if (scheme.eligibilityRules.minAge) {
        matched.push(`Meets minimum age requirement of ${scheme.eligibilityRules.minAge}+ years.`);
      }

      if (scheme.eligibilityRules.maxAge && ageNum > scheme.eligibilityRules.maxAge) {
        unmet.push(`Exceeds maximum age ceiling of ${scheme.eligibilityRules.maxAge} years (provided: ${ageNum}).`);
      }

      // 4. Gender Checks
      if (scheme.eligibilityRules.targetGender === 'female' && gender !== 'female') {
        unmet.push('This scheme is exclusively reserved for women / mothers.');
      } else if (scheme.eligibilityRules.targetGender === 'female' && gender === 'female') {
        matched.push('Applicant is female, matching targeted gender criteria.');
      }

      // 5. Disability Specific Checks
      if (scheme.id === 'ap-ntr-bharosa-disability') {
        if (isDialysis) {
          matched.push('Chronic Kidney Disease patient on dialysis: eligible for ₹10,000/month medical pension.');
        } else if (isSeverePwD) {
          matched.push('Severe / Bedridden disability (80%+): eligible for top ₹15,000/month pension tier.');
        } else if (isPwD) {
          matched.push('Benchmark disability (40%+): eligible for ₹6,000/month disability pension.');
        } else {
          unmet.push('Requires certified SADAREM / UDID disability of 40%+ or chronic dialysis medical condition.');
        }
      }

      if (scheme.id === 'adip-scheme') {
        if (isPwD) {
          matched.push('Holds benchmark disability (40%+), qualifying for 100% free assistive aids & appliances.');
        } else {
          unmet.push('ADIP scheme strictly requires certified physical, visual, hearing, or intellectual disability (40%+).');
        }
      }

      if (scheme.id === 'igndps-disability-pension') {
        if (isSeverePwD) {
          matched.push('Meets 80%+ severe disability requirement.');
        } else {
          unmet.push('IGNDPS central component requires severe or multiple disabilities of 80% or above.');
        }
        if (isBplHousehold) {
          matched.push('Meets BPL household status requirement.');
        } else {
          unmet.push('IGNDPS requires verified BPL / Antyodaya ration card.');
        }
      }

      if (scheme.id === 'tn-differently-abled-pension') {
        if (isPwD) {
          matched.push('Holds certified benchmark disability (≥40%), qualifying for ₹1,500 - ₹2,000/month maintenance pension in Tamil Nadu.');
        } else {
          unmet.push('Requires certified disability certificate of 40% or above in Tamil Nadu.');
        }
      }

      // 6. Occupation & Sector Specific Checks
      if (scheme.id === 'pm-kisan' || scheme.id === 'pmfby-crop-insurance') {
        if (hasLand || occupation === 'Farmer' || occupation === 'Tenant Farmer') {
          matched.push('Cultivator / agricultural landholding family profile.');
        } else {
          unmet.push('Requires ownership or active cultivation of agricultural land.');
        }
      }

      if (scheme.id === 'ap-annadata-sukhibhava') {
        if (isAP && (hasLand || occupation === 'Farmer' || occupation === 'Tenant Farmer')) {
          matched.push('AP Farmer / CCRC Tenant Cultivator eligible for ₹20,000/year assistance.');
        } else {
          unmet.push('Requires agricultural land ownership or valid CCRC tenant card in Andhra Pradesh.');
        }
      }

      if (scheme.id === 'tg-rythu-bharosa') {
        if (isTG && (hasLand || occupation === 'Farmer' || occupation === 'Tenant Farmer')) {
          matched.push('Telangana farmer / landholder eligible for ₹15,000/acre annual Rythu Bharosa investment support.');
        } else {
          unmet.push('Requires cultivable land ownership (Pattadar passbook) or registered tenant cultivation in Telangana.');
        }
      }

      if (scheme.id === 'ap-thalliki-vandanam') {
        if (isAP && (occupation === 'Student' || occupation === 'Homemaker' || ageNum <= 18)) {
          matched.push('School/Intermediate student or mother eligible for ₹15,000 annual education grant.');
        } else {
          unmet.push('Requires child enrolled in Class 1 to 12 in Andhra Pradesh with 75% attendance.');
        }
      }

      if (scheme.id === 'tg-aasara-cheyutha-pension') {
        if (isSeverePwD || isPwD || ageNum >= 65 || isBplHousehold) {
          matched.push('Eligible for Telangana Cheyutha / Aasara enhanced pension (₹4,016/month for seniors/widows, ₹6,016/month for PwD).');
        } else {
          unmet.push('Requires age 65+, benchmark disability, or BPL single woman / weaver / toddy tapper eligibility in Telangana.');
        }
      }

      if (scheme.id === 'tg-mahalakshmi-scheme') {
        if (gender === 'female') {
          matched.push('Telangana resident woman: entitled to 100% free RTC bus travel statewide and eligible for monthly financial empowerment.');
        } else {
          unmet.push('Exclusively targeted to women and girls residing in Telangana.');
        }
      }

      if (scheme.id === 'tg-gruha-jyothi') {
        if (isBplHousehold || incomeRange === 'below_100k' || incomeRange === 'below_250k') {
          matched.push('Domestic household with White Ration Card in Telangana: eligible for up to 200 units free monthly electricity.');
        } else {
          unmet.push('Requires domestic consumer electricity connection linked to White Ration Card in Telangana.');
        }
      }

      if (scheme.id === 'tn-kmut-women-basic-income') {
        if (isTN && gender === 'female' && (isBplHousehold || incomeRange === 'below_100k' || incomeRange === 'below_250k')) {
          matched.push('Tamil Nadu woman head of family with Smart Ration Card: eligible for ₹1,000/month basic income right.');
        } else if (gender !== 'female') {
          unmet.push('Exclusively reserved for women heads of families in Tamil Nadu.');
        } else {
          unmet.push('Requires annual family income below ₹2.5 Lakh and smart family ration card in Tamil Nadu.');
        }
      }

      if (scheme.id === 'tn-pudhumai-penn') {
        if (gender === 'female' && (occupation === 'Student' || ageNum <= 25)) {
          matched.push('Tamil Nadu female student pursuing higher education after Govt School (Classes 6-12): eligible for ₹1,000/month DBT.');
        } else if (gender !== 'female') {
          unmet.push('Scheme strictly reserved for female college/diploma students.');
        } else {
          unmet.push('Requires enrollment in recognized higher education after completing Classes 6-12 in Tamil Nadu government schools.');
        }
      }

      if (scheme.id === 'tn-naan-mudhalvan') {
        if (occupation === 'Student' || occupation === 'Unemployed' || ageNum <= 35) {
          matched.push('Tamil Nadu youth/student eligible for high-impact industry skilling, AI/tech curriculum, and placement support.');
        }
      }

      if (scheme.id === 'pm-vishwakarma') {
        if (['Artisan', 'Carpenter', 'Blacksmith', 'Potter', 'Mason', 'Tailor', 'Weaver', 'Cobbler'].includes(occupation)) {
          matched.push(`Practices one of the 18 designated traditional handcraft trades (${occupation}).`);
        } else {
          unmet.push('Applicant must be actively practicing one of the 18 traditional craftsmanship trades.');
        }
      }

      if (scheme.id === 'pm-svanidhi') {
        if (['Shopkeeper', 'Street Vendor'].includes(occupation)) {
          matched.push('Engaged in urban street vending or micro retail trade.');
        } else {
          unmet.push('Requires Certificate of Vending or municipal survey recommendation as a street vendor.');
        }
      }

      if (scheme.id === 'eshram-worker-card' || scheme.id === 'pmsym-worker-pension') {
        if (['Worker', 'Daily Wage', 'Artisan', 'Shopkeeper', 'Driver', 'Homemaker'].includes(occupation)) {
          matched.push('Eligible under unorganized worker sector.');
        } else if (isGov) {
          unmet.push('Unorganized worker benefits exclude regular government and EPFO/ESIC employees.');
        }
      }

      if (scheme.id === 'ncs-career-service' || scheme.id === 'pmkvy-skill-india') {
        if (occupation === 'Unemployed' || occupation === 'Student' || ageNum <= 35) {
          matched.push('Eligible for free career counseling, skill development, and placement drives.');
        }
      }

      // 7. Senior Citizen Checks
      if (scheme.id === 'pmjay-senior-70') {
        if (ageNum >= 70) {
          matched.push('Senior citizen aged 70+: unconditionally entitled to dedicated ₹5 Lakh healthcare cover irrespective of income.');
        } else {
          unmet.push(`Requires age 70 years or above (provided: ${ageNum}).`);
        }
      }

      if (scheme.id === 'ignoaps-pension') {
        if (ageNum >= 60) {
          matched.push('Attained minimum senior age milestone of 60+ years.');
        } else {
          unmet.push(`Requires age 60+ (provided: ${ageNum}).`);
        }
        if (isBplHousehold) {
          matched.push('Verified Below Poverty Line (BPL) status.');
        } else {
          unmet.push('Requires verified BPL status or Antyodaya Ration Card.');
        }
      }

      // 8. Economic / Income Checks
      if (scheme.id === 'nmmss-scholarship' || scheme.id === 'nsp-post-matric' || scheme.id === 'pm-usp-higher-edu') {
        if (occupation === 'Student') {
          matched.push('Currently an active student in recognized institution.');
        } else {
          unmet.push('Applicant must be an actively enrolled student.');
        }

        if (incomeRange === 'below_100k' || incomeRange === 'below_250k') {
          matched.push('Family income within the scholarship ceiling.');
        } else {
          unmet.push('Family income exceeds prescribed scholarship ceiling.');
        }
      }

      if (scheme.id === 'pm-jay' || scheme.id === 'ap-ntr-aarogyasri' || scheme.id === 'tg-rajiv-aarogyasri' || scheme.id === 'tn-cmchis-health') {
        if (isBplHousehold || incomeRange === 'below_100k' || incomeRange === 'below_250k' || ageNum >= 70) {
          matched.push('Eligible under state/central low-income criteria, White Ration Card, or universal senior tier.');
        } else {
          unmet.push('Requires BPL / White Ration Card, low-income certification, or age 70+ for universal cover.');
        }
      }

      if (scheme.id === 'pmgkay-free-foodgrain') {
        if (isBplHousehold) {
          matched.push('Priority Household / Antyodaya Food Security Ration Card holder.');
        } else {
          unmet.push('Requires active NFSA Priority Ration Card (PHH) or Antyodaya Card (AAY).');
        }
      }

      // Match Status Resolution
      let matchStatus: 'high' | 'conditional' | 'unlikely' = 'conditional';
      if (unmet.length === 0 && matched.length >= 2) {
        matchStatus = 'high';
      } else if (unmet.some(u => u.includes('Disqualified') || u.includes('exclusively') || u.includes('strictly requires'))) {
        matchStatus = 'unlikely';
      } else {
        matchStatus = 'conditional';
      }

      return {
        scheme,
        matchStatus,
        matchedReasons: matched.length > 0 ? matched : [
          language === 'hi' ? 'सामान्य जनसांख्यिकीय पात्रता संरेखण' : language === 'te' ? 'సాధారణ ప్రొఫైల్ అనుకూలత' : 'General demographic profile alignment'
        ],
        unmetOrUncertainReasons: unmet
      };
    });

    // Sort by high match first
    assessed.sort((a, b) => {
      const order = { high: 0, conditional: 1, unlikely: 2 };
      return order[a.matchStatus] - order[b.matchStatus];
    });

    setResults(assessed);
    setHasCompleted(true);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setHasCompleted(false);
    setResults([]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#101412] pb-24 transition-colors duration-200 animate-fade-in">
      
      {/* Header Banner */}
      <section className="bg-white dark:bg-[#181D1A] border-b border-[#E7DFD4] dark:border-[#2C352F] pt-8 pb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-3">
          
          <div className="flex items-center gap-2 text-xs font-mono text-[#565C56] dark:text-[#A3ACA5]">
            <Link to="/" className="hover:underline">{t('nav.home')}</Link>
            <span>/</span>
            <span className="text-[#1A3B2B] dark:text-[#90C8A4] font-semibold">{t('nav.eligibility')}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl text-[#161815] dark:text-[#F3EFEA] font-normal tracking-tight">
            Personalized Eligibility Intelligence
          </h1>
          <p className="text-sm text-[#565C56] dark:text-[#A3ACA5] max-w-2xl leading-relaxed">
            Answer a few quick questions to identify government schemes you may qualify for across Central Government, all 28 States, and all 8 Union Territories. No login required—your details are processed purely in your browser's local memory.
          </p>

        </div>
      </section>

      {/* Main Guidance Flow */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-8">
        
        {!hasCompleted ? (
          /* Multi-Step Form Card */
          <div className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 shadow-xs space-y-8">
            
            {/* Step Progress Indicators */}
            <div className="flex items-center justify-between border-b border-[#E7DFD4] dark:border-[#2C352F] pb-5">
              {[
                { step: 1, label: 'Profile & State' },
                { step: 2, label: 'Disability & Status' },
                { step: 3, label: 'Household & Support' }
              ].map(item => (
                <div
                  key={item.step}
                  className={`flex items-center gap-2 text-xs font-mono ${
                    currentStep === item.step
                      ? 'text-[#1A3B2B] dark:text-[#DFB24E] font-bold'
                      : currentStep > item.step
                      ? 'text-[#2A5A43] dark:text-[#90C8A4]'
                      : 'text-[#858D85] dark:text-[#7A837C]'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                      currentStep === item.step
                        ? 'bg-[#1A3B2B] dark:bg-[#DFB24E] text-white dark:text-[#101412]'
                        : currentStep > item.step
                        ? 'bg-[#EBF2ED] dark:bg-[#1F2C23] text-[#2A5A43] dark:text-[#90C8A4] font-bold'
                        : 'bg-[#EFE8DE] dark:bg-[#242A26] text-[#858D85] dark:text-[#7A837C]'
                    }`}
                  >
                    {currentStep > item.step ? '✓' : item.step}
                  </div>
                  <span className="hidden sm:inline">{item.label}</span>
                </div>
              ))}
            </div>

            {/* STEP 1: Basic Profile & State */}
            {currentStep === 1 && (
              <div className="space-y-6 animate-fade-in-fast">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">Step 1: Your Jurisdiction & Profile</h3>
                  <p className="text-xs text-[#565C56] dark:text-[#A3ACA5]">Select your state of residence and primary demographic details.</p>
                </div>

                <div className="space-y-4">
                  
                  {/* State Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA] flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#B95938] dark:text-[#DFB24E]" />
                      <span>State of Permanent Residence</span>
                    </label>
                    <select
                      value={targetState}
                      onChange={e => setTargetState(e.target.value)}
                      className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg p-2.5 text-xs text-[#161815] dark:text-[#F3EFEA] focus:outline-none"
                    >
                      <option value="all">All India (Central Schemes + All 36 State & UT Catalogs)</option>
                      <optgroup label="28 States (State Programs + Central Schemes)">
                        {GOVERNMENTS.filter(g => g.jurisdictionType === 'state').map(g => (
                          <option key={g.id} value={g.name}>
                            {g.name} ({g.stateCode} State + Central Schemes)
                          </option>
                        ))}
                      </optgroup>
                      <optgroup label="8 Union Territories (UT Programs + Central Schemes)">
                        {GOVERNMENTS.filter(g => g.jurisdictionType === 'union-territory').map(g => (
                          <option key={g.id} value={g.name}>
                            {g.name} ({g.stateCode} UT + Central Schemes)
                          </option>
                        ))}
                      </optgroup>
                    </select>
                  </div>

                  {/* Scheme Scope Selection */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('eligibility.evalScope')}</label>
                    <select
                      value={targetSchemeId}
                      onChange={e => setTargetSchemeId(e.target.value)}
                      className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg p-2.5 text-xs text-[#161815] dark:text-[#F3EFEA] focus:outline-none"
                    >
                      <option value="all">Check against all verified welfare schemes ({SCHEMES.length})</option>
                      {SCHEMES.map(s => (
                        <option key={s.id} value={s.id}>Only evaluate {s.name}</option>
                      ))}
                    </select>
                  </div>

                  {/* Age and Gender */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('eligibility.yourAge')}</label>
                      <input
                        type="number"
                        min="1"
                        max="105"
                        value={age}
                        onChange={e => setAge(e.target.value)}
                        className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg p-2.5 text-xs text-[#161815] dark:text-[#F3EFEA] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('eligibility.gender')}</label>
                      <select
                        value={gender}
                        onChange={e => setGender(e.target.value)}
                        className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg p-2.5 text-xs text-[#161815] dark:text-[#F3EFEA] focus:outline-none"
                      >
                        <option value="all">{t('eligibility.genderPreferNot')}</option>
                        <option value="female">{t('eligibility.genderFemale')}</option>
                        <option value="male">{t('eligibility.genderMale')}</option>
                      </select>
                    </div>
                  </div>

                  {/* Social Category */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('eligibility.socialCategory')}</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['General', 'OBC', 'SC', 'ST'].map(cat => (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => setSocialCategory(cat)}
                          className={`p-2 rounded-lg text-xs font-medium border text-center transition-colors ${
                            socialCategory === cat
                              ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white border-[#1A3B2B] dark:border-[#24583F]'
                              : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F] hover:bg-[#EFE8DE] dark:hover:bg-[#1C221E]'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="flex justify-end pt-4 border-t border-[#E7DFD4] dark:border-[#2C352F]">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-5 py-2.5 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-xs font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Continue to Step 2</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Disability & Occupation Details */}
            {currentStep === 2 && (
              <div className="space-y-6 animate-fade-in-fast">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">Step 2: Disability & Occupation Status</h3>
                  <p className="text-xs text-[#565C56] dark:text-[#A3ACA5]">Critical for evaluating special disability pensions, aids, and worker programs.</p>
                </div>

                <div className="space-y-5">
                  
                  {/* Disability Status */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">
                      Disability or Special Medical Condition
                    </label>
                    <select
                      value={disabilityStatus}
                      onChange={e => setDisabilityStatus(e.target.value)}
                      className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg p-2.5 text-xs text-[#161815] dark:text-[#F3EFEA] focus:outline-none"
                    >
                      <option value="none">No Certified Disability</option>
                      <option value="pwd_40">Benchmark Disability (40% to 79% - UDID / SADAREM Card)</option>
                      <option value="pwd_80_severe">Severe Disability (80%+ or Bedridden / Multiple Disabilities)</option>
                      <option value="chronic_dialysis">Chronic Medical Condition (Kidney Dialysis / Organ Transplant)</option>
                    </select>
                    <p className="text-[11px] text-[#565C56] dark:text-[#A3ACA5]">
                      In Andhra Pradesh, certified 40%+ disability receives ₹6,000/mo; severe 80%+ receives ₹15,000/mo; dialysis patients receive ₹10,000/mo.
                    </p>
                  </div>

                  {/* Occupation */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('eligibility.primaryOcc')}</label>
                    <select
                      value={occupation}
                      onChange={e => setOccupation(e.target.value)}
                      className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg p-2.5 text-xs text-[#161815] dark:text-[#F3EFEA] focus:outline-none"
                    >
                      <option value="">{t('eligibility.selectOcc')}</option>
                      <option value="Student">{t('eligibility.occStudent')}</option>
                      <option value="Farmer">{t('eligibility.occFarmer')}</option>
                      <option value="Tenant Farmer">Tenant Farmer / Cultivator (with CCRC Card)</option>
                      <option value="Artisan">{t('eligibility.occArtisan')}</option>
                      <option value="Shopkeeper">{t('eligibility.occShopkeeper')}</option>
                      <option value="Worker">Unorganized Worker / Construction Laborer / Gig Worker</option>
                      <option value="Unemployed">{t('eligibility.occUnemployed')}</option>
                      <option value="Homemaker">{t('eligibility.occHomemaker')}</option>
                      <option value="Senior Citizen">{t('eligibility.occSenior')}</option>
                    </select>
                  </div>

                  {/* Government Employment Exclusion */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('eligibility.govQuestion')}</label>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setIsGovernmentEmployee('yes')}
                        className={`flex-1 p-2.5 rounded-lg text-xs font-medium border text-center transition-colors ${
                          isGovernmentEmployee === 'yes'
                            ? 'bg-[#B95938] dark:bg-[#9E4528] text-white border-[#B95938] dark:border-[#9E4528]'
                            : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F]'
                        }`}
                      >
                        {t('eligibility.govYes')}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsGovernmentEmployee('no')}
                        className={`flex-1 p-2.5 rounded-lg text-xs font-medium border text-center transition-colors ${
                          isGovernmentEmployee === 'no'
                            ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white border-[#1A3B2B] dark:border-[#24583F]'
                            : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F]'
                        }`}
                      >
                        {t('eligibility.govNo')}
                      </button>
                    </div>
                  </div>

                </div>

                <div className="flex justify-between pt-4 border-t border-[#E7DFD4] dark:border-[#2C352F]">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(1)}
                    className="px-4 py-2 border border-[#D5CABE] dark:border-[#2C352F] text-[#565C56] dark:text-[#C5CDC6] rounded-lg text-xs font-semibold hover:bg-[#FAF8F5] dark:hover:bg-[#202622] flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setCurrentStep(3)}
                    className="px-5 py-2.5 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-xs font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Continue to Step 3</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Household, Land & Support Needed */}
            {currentStep === 3 && (
              <div className="space-y-6 animate-fade-in-fast">
                <div>
                  <h3 className="font-serif font-bold text-xl text-[#161815] dark:text-[#F3EFEA]">Step 3: Household & Welfare Goal</h3>
                  <p className="text-xs text-[#565C56] dark:text-[#A3ACA5]">Final details to generate your personalized match report.</p>
                </div>

                <div className="space-y-5">
                  
                  {/* Income Range */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">{t('eligibility.familyIncome')}</label>
                    <select
                      value={incomeRange}
                      onChange={e => setIncomeRange(e.target.value)}
                      className="w-full bg-[#FAF8F5] dark:bg-[#121614] border border-[#D5CABE] dark:border-[#2C352F] rounded-lg p-2.5 text-xs text-[#161815] dark:text-[#F3EFEA] focus:outline-none"
                    >
                      <option value="below_100k">{t('eligibility.inc1')}</option>
                      <option value="below_250k">{t('eligibility.inc2')}</option>
                      <option value="below_500k">{t('eligibility.inc3')}</option>
                      <option value="above_500k">{t('eligibility.inc4')}</option>
                    </select>
                  </div>

                  {/* Cultivable Land & Ration Card in 2-column grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">Agricultural Land Ownership?</label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setHasCultivableLand('yes')}
                          className={`flex-1 p-2 rounded text-xs font-medium border transition-colors ${
                            hasCultivableLand === 'yes'
                              ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white border-[#1A3B2B]'
                              : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F]'
                          }`}
                        >
                          Yes, Landowner
                        </button>
                        <button
                          type="button"
                          onClick={() => setHasCultivableLand('no')}
                          className={`flex-1 p-2 rounded text-xs font-medium border transition-colors ${
                            hasCultivableLand === 'no'
                              ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white border-[#1A3B2B]'
                              : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F]'
                          }`}
                        >
                          No / Landless
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">Active BPL / White Ration Card?</label>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setIsBPL('yes')}
                          className={`flex-1 p-2 rounded text-xs font-medium border transition-colors ${
                            isBPL === 'yes'
                              ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white border-[#1A3B2B]'
                              : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F]'
                          }`}
                        >
                          Yes, Active Card
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsBPL('no')}
                          className={`flex-1 p-2 rounded text-xs font-medium border transition-colors ${
                            isBPL === 'no'
                              ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white border-[#1A3B2B]'
                              : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F]'
                          }`}
                        >
                          No Card
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Primary Support Goal */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#161815] dark:text-[#F3EFEA]">Primary Support Category</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {[
                        { id: 'all', label: 'Explore Any Matching Support' },
                        { id: 'disability', label: 'Disability Pension & Assistive Devices' },
                        { id: 'education', label: 'Education Scholarships & Fee Reimbursement' },
                        { id: 'farming', label: 'Farmer Direct Investment & Insurance' },
                        { id: 'health', label: 'Cashless Hospitalization Shield (₹5L - ₹25L)' },
                        { id: 'business', label: 'Collateral-Free Micro Credit & Startups' },
                        { id: 'artisan', label: 'Artisan Toolkit Grant & Concessional Loans' },
                        { id: 'pension', label: 'Senior Citizen Monthly Pension' },
                        { id: 'housing', label: 'Pucca House Construction & Rooftop Solar' }
                      ].map(opt => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSupportIntent(opt.id)}
                          className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-colors ${
                            supportIntent === opt.id
                              ? 'bg-[#1A3B2B] dark:bg-[#24583F] text-white border-[#1A3B2B] dark:border-[#24583F]'
                              : 'bg-[#FAF8F5] dark:bg-[#121614] text-[#565C56] dark:text-[#C5CDC6] border-[#D5CABE] dark:border-[#2C352F] hover:bg-[#EFE8DE]'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Review Summary snippet */}
                <div className="p-4 bg-[#FAF8F5] dark:bg-[#121614] rounded-lg border border-[#D5CABE] dark:border-[#2C352F] text-xs space-y-1.5 text-[#565C56] dark:text-[#A3ACA5]">
                  <div className="font-semibold text-[#161815] dark:text-[#F3EFEA]">Summary of Inputs:</div>
                  <div>• State: <strong>{targetState}</strong> | Role: <strong>{occupation || 'Not specified'}</strong> | Age: <strong>{age} yrs</strong></div>
                  <div>• Disability: <strong>{disabilityStatus.replace('_', ' ')}</strong> | Category: <strong>{socialCategory}</strong> | BPL: <strong>{isBPL}</strong></div>
                </div>

                <div className="flex justify-between pt-4 border-t border-[#E7DFD4] dark:border-[#2C352F]">
                  <button
                    type="button"
                    onClick={() => setCurrentStep(2)}
                    className="px-4 py-2 border border-[#D5CABE] dark:border-[#2C352F] text-[#565C56] dark:text-[#C5CDC6] rounded-lg text-xs font-semibold hover:bg-[#FAF8F5] dark:hover:bg-[#202622] flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleRunAssessment}
                    className="px-6 py-2.5 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-lg text-xs font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] flex items-center gap-2 shadow-xs"
                  >
                    <Sparkles className="w-4 h-4 text-[#DFB24E]" />
                    <span>Generate Eligibility Intelligence Report</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        ) : (
          /* RESULTS SCREEN */
          <div className="space-y-6 animate-fade-in">
            
            {/* Results Header Card */}
            <div className="bg-white dark:bg-[#181D1A] rounded-xl border border-[#D5CABE] dark:border-[#2C352F] p-6 sm:p-8 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E7DFD4] dark:border-[#2C352F] pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#1A3B2B] dark:text-[#90C8A4] font-bold">
                    Guidance Output
                  </span>
                  <h2 className="font-serif text-2xl font-bold text-[#161815] dark:text-[#F3EFEA]">
                    Personalized Eligibility Assessment
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs text-[#B95938] dark:text-[#E07A5F] hover:underline"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Modify Answers & Retest</span>
                </button>
              </div>

              {/* Disclaimer notice */}
              <div className="p-3.5 bg-[#FAF3E2] dark:bg-[#262015] rounded-lg border border-[#E0D0AB] dark:border-[#4A3D25] text-xs text-[#565C56] dark:text-[#D5C5A8] flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-[#B95938] dark:text-[#E07A5F] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong className="text-[#161815] dark:text-[#F3EFEA]">Non-Binding Guidance: </strong>
                  This assessment matches your responses against gazetted eligibility norms. CivicAI does not approve benefits. Actual verification is conducted exclusively by authorized government revenue and departmental officers against original physical documents.
                </div>
              </div>
            </div>

            {/* Assessment Cards */}
            <div className="space-y-4">
              {results.map(item => (
                <div
                  key={item.scheme.id}
                  className={`bg-white dark:bg-[#181D1A] rounded-xl border p-6 space-y-4 transition-all card-hover-lift ${
                    item.matchStatus === 'high'
                      ? 'border-[#2A5A43] dark:border-[#3E7D5F] shadow-xs'
                      : item.matchStatus === 'conditional'
                      ? 'border-[#D5CABE] dark:border-[#2C352F]'
                      : 'border-[#ECCDC5] dark:border-[#4D2821] opacity-80'
                  }`}
                >
                  {/* Status Banner */}
                  <div className="flex flex-wrap items-center justify-between border-b border-[#E7DFD4] dark:border-[#2C352F] pb-3 text-xs gap-2">
                    <div className="flex items-center gap-2">
                      <span className="font-serif font-bold text-lg text-[#161815] dark:text-[#F3EFEA]">
                        <Link to={`/schemes/${item.scheme.id}`} className="hover:text-[#1A3B2B] dark:hover:text-[#90C8A4] hover:underline">
                          {item.scheme.name}
                        </Link>
                      </span>
                      <span className={`px-2 py-0.5 font-mono text-[10px] rounded flex items-center gap-1 ${
                        item.scheme.governmentLevel === 'central'
                          ? 'bg-[#FAF3E2] dark:bg-[#252219] text-[#A07A18] dark:text-[#DFB24E] border border-[#E0D0AB] dark:border-[#383220]'
                          : 'bg-[#EBF2ED] dark:bg-[#1A2E22] text-[#1A3B2B] dark:text-[#7A9984] border border-[#C5DAC9] dark:border-[#253D30]'
                      }`}>
                        <Building2 className="w-2.5 h-2.5" />
                        <span>{item.scheme.governmentLevel === 'central' ? 'Central' : (item.scheme.stateApplicability || 'State')}</span>
                      </span>
                    </div>

                    <span
                      className={`px-2.5 py-1 rounded text-xs font-mono font-semibold ${
                        item.matchStatus === 'high'
                          ? 'bg-[#EBF2ED] dark:bg-[#1F2C23] text-[#1A3B2B] dark:text-[#90C8A4] border border-[#C5DAC9] dark:border-[#2A5A43]'
                          : item.matchStatus === 'conditional'
                          ? 'bg-[#FAF3E2] dark:bg-[#262015] text-[#A07A18] dark:text-[#DFB24E] border border-[#E0D0AB] dark:border-[#4A3D25]'
                          : 'bg-[#FAECE7] dark:bg-[#2C1D18] text-[#B95938] dark:text-[#E07A5F] border border-[#ECCDC5] dark:border-[#52291E]'
                      }`}
                    >
                      {item.matchStatus === 'high' && '✓ High Potential Match'}
                      {item.matchStatus === 'conditional' && '⚡ Conditional / Evidence Needed'}
                      {item.matchStatus === 'unlikely' && '✕ Unlikely Match'}
                    </span>
                  </div>

                  {/* Financial Benefit Callout */}
                  <div className="text-xs text-[#565C56] dark:text-[#A3ACA5]">
                    Benefit: <strong className="font-serif text-[#1A3B2B] dark:text-[#DFB24E] text-sm">{item.scheme.financialBenefit}</strong>
                  </div>

                  {/* Reasons Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    
                    {/* Met criteria */}
                    <div className="p-3 rounded-lg bg-[#FAF8F5] dark:bg-[#121614] border border-[#E7DFD4] dark:border-[#2C352F] space-y-1">
                      <div className="font-semibold text-[#2A5A43] dark:text-[#90C8A4] flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Supporting Profile Factors:</span>
                      </div>
                      <ul className="space-y-1 pl-1 text-[#161815] dark:text-[#EAE5DF]">
                        {item.matchedReasons.map((r, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-[#2A5A43] dark:text-[#90C8A4] font-bold">•</span>
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Unmet or needed evidence */}
                    {item.unmetOrUncertainReasons.length > 0 && (
                      <div className="p-3 rounded-lg bg-[#FAECE7]/50 dark:bg-[#2C1D18]/50 border border-[#ECCDC5] dark:border-[#52291E] space-y-1">
                        <div className="font-semibold text-[#B95938] dark:text-[#E07A5F] flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Conditions Requiring Confirmation:</span>
                        </div>
                        <ul className="space-y-1 pl-1 text-[#161815] dark:text-[#EAE5DF]">
                          {item.unmetOrUncertainReasons.map((r, i) => (
                            <li key={i} className="flex items-start gap-1.5">
                              <span className="text-[#B95938] dark:text-[#E07A5F] font-bold">•</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  </div>

                  {/* Next Action Buttons */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs border-t border-[#E7DFD4] dark:border-[#2C352F]">
                    <div className="flex flex-wrap items-center gap-2">
                      <Link
                        to={`/checklist?scheme=${item.scheme.id}`}
                        className="px-3.5 py-1.5 bg-[#1A3B2B] dark:bg-[#24583F] text-white rounded-md font-semibold hover:bg-[#122B1F] dark:hover:bg-[#1D4A35] flex items-center gap-1.5"
                      >
                        <CheckSquare className="w-3.5 h-3.5" />
                        <span>Prepare Document Checklist ({item.scheme.requiredDocuments.length})</span>
                      </Link>
                      <Link
                        to={`/schemes/${item.scheme.id}`}
                        className="px-3.5 py-1.5 bg-white dark:bg-[#202622] border border-[#D5CABE] dark:border-[#2C352F] text-[#161815] dark:text-[#F3EFEA] rounded-md font-semibold hover:bg-[#FAF8F5] dark:hover:bg-[#28302B]"
                      >
                        View Full Rules
                      </Link>
                    </div>

                    <a
                      href={item.scheme.officialSource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[11px] text-[#565C56] dark:text-[#A3ACA5] hover:text-[#1A3B2B] dark:hover:text-[#90C8A4] flex items-center gap-1"
                    >
                      <span>Official Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
