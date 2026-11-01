import type { Scheme } from '../types/scheme';

export const SCHEMES: Scheme[] = [
  // =========================================================================
  // 1. AGRICULTURE & FARMING (Central & State)
  // =========================================================================
  {
    id: 'pm-kisan',
    name: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
    hindiName: 'प्रधानमंत्री किसान सम्मान निधि',
    teluguName: 'పీఎం-కిసాన్ సమ్మాన్ నిధి',
    tamilName: 'பிஎம்-கிசான் சம்மான் நிதி',
    tagline: 'Direct income support of ₹6,000 per year for farmer families holding cultivable land.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'worker',
    beneficiaries: ['Small & Marginal Farmers', 'Cultivable Landholder Families', 'Rural Households'],
    shortSummary: 'Financial benefit of ₹6,000 per year released directly into Aadhaar-linked bank accounts in three equal 4-monthly installments of ₹2,000.',
    fullDescription: 'PM-KISAN is a flagship Central Sector scheme launched to augment the income of all landholding farmer families across India. The scheme provides timely financial assistance to help farmers procure agricultural inputs (seeds, fertilizers, equipment) and meet domestic needs ahead of cropping seasons.',
    financialBenefit: '₹6,000 / year (₹2,000 in 3 installments via DBT)',
    keyObjectives: [
      'Supplement financial needs of landholding farmers in procuring agricultural inputs',
      'Protect farmers from falling into the trap of informal moneylenders',
      'Provide regular, predictable liquidity before sowing seasons (April-July, August-November, December-March)'
    ],
    eligibilityRules: {
      minAge: 18,
      occupations: ['Farmer', 'Cultivator', 'Agriculture Worker with Land'],
      notes: 'Must possess cultivable landholding in own name as per official state land records. eKYC is mandatory on the PM-KISAN portal.'
    },
    eligibilityHighlights: [
      'Applicant family must own cultivable land with valid land title (Record of Rights / Khatauni)',
      'Bank account must be seeded with Aadhaar and enabled for Direct Benefit Transfer (DBT)',
      'Mandatory completion of biometric or OTP-based e-KYC on the portal',
      'Citizen of India of any state or union territory'
    ],
    exclusions: [
      'Institutional landholders',
      'Present or retired constitutional post holders, Ministers, MPs, MLAs, and Mayors',
      'Serving or retired officers and employees of Central/State Government ministries and PSUs (excluding Group D / MTS)',
      'All persons who paid Income Tax in the last assessment year',
      'Professionals like Doctors, Engineers, Lawyers, Chartered Accountants, and Architects'
    ],
    requiredDocuments: [
      {
        id: 'doc-aadhaar-kisan',
        name: 'Aadhaar Card (Applicant & Family)',
        category: 'identity',
        purpose: 'Identity verification and biometric eKYC authentication',
        citizenTip: 'Check that your mobile number is actively receiving Aadhaar OTPs for instant eKYC verification on the portal.',
        isMandatory: true
      },
      {
        id: 'doc-land-kisan',
        name: 'Land Record of Rights (RoR / Khatauni / Jamabandi / 1-B Pattadar)',
        category: 'land',
        purpose: 'Proof of ownership of cultivable agricultural land in the applicant name',
        citizenTip: 'Get an updated computerised land record copy from your local Tehsil or state revenue portal (e.g. MeeSeva, Dharani, Bhulekh).',
        isMandatory: true
      },
      {
        id: 'doc-bank-kisan',
        name: 'Aadhaar-Seeded Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct Benefit Transfer (DBT) credit destination',
        citizenTip: 'Visit your bank branch and confirm NPCI Aadhaar mapping. Non-seeded accounts cause payments to bounce.',
        isMandatory: true
      },
      {
        id: 'doc-mobile-kisan',
        name: 'Active Mobile Number',
        category: 'other',
        purpose: 'Installment status alerts and OTP validation',
        citizenTip: 'Use the same mobile number registered with your Aadhaar and bank account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Farmer Self-Registration or CSC Visit',
        description: 'Navigate to pmkisan.gov.in and click "New Farmer Registration" or visit your village Rythu Seva Kendra / Common Service Centre.',
        portalOrOffice: 'pmkisan.gov.in / Village CSC / RSK'
      },
      {
        stepNumber: 2,
        title: 'Enter Land Identification & Survey Details',
        description: 'Input your Aadhaar number, state, district, sub-district, village, and survey/khasra/khata numbers corresponding to your land parcel.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Complete Mandatory eKYC',
        description: 'Authenticate using Aadhaar OTP or visit a biometric centre for fingerprint or iris eKYC verification.',
        portalOrOffice: 'Portal or CSC'
      },
      {
        stepNumber: 4,
        title: 'State Revenue Verification & DBT Activation',
        description: 'State revenue officials verify land records. Once approved, the installment is credited during the next release cycle.',
        portalOrOffice: 'District Agriculture Officer'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture & Farmers Welfare, Ministry of Agriculture, GoI',
      url: 'https://pmkisan.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Agriculture and Farmers Welfare',
      helpline: '155261 / 011-24300606',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official central portal active. Biometric e-KYC and NPCI bank seeding mandatory.'
    }
  },
  {
    id: 'pmfby-crop-insurance',
    name: 'PMFBY (Pradhan Mantri Fasal Bima Yojana)',
    hindiName: 'प्रधानमंत्री फसल बीमा योजना',
    teluguName: 'ప్రధాన మంత్రి ఫసల్ బీమా యోజన',
    tamilName: 'பிரதமர் பயிர் காப்பீட்டுத் திட்டம்',
    tagline: 'Comprehensive low-premium crop insurance shielding farmers against natural disasters and yield losses.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'Central & State Partnership',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'worker',
    beneficiaries: ['Landowner Farmers', 'Sharecroppers', 'Tenant Farmers'],
    shortSummary: 'Guarantees comprehensive crop insurance against non-preventable natural risks from pre-sowing to post-harvest at minimal farmer premiums (1.5% Rabi, 2% Kharif, 5% Commercial/Horticultural).',
    fullDescription: 'PMFBY provides financial support to farmers suffering crop loss or damage arising out of natural calamities, pests, and diseases. The scheme aims to stabilize farmers income, ensure flow of credit to agriculture, and encourage adoption of modern agricultural practices.',
    financialBenefit: 'Full sum insured payout based on threshold yield deficit (Farmer pays only 1.5% - 2% premium)',
    keyObjectives: [
      'Provide insurance coverage and financial support to farmers in case of failure of notified crops',
      'Stabilize farmer incomes to ensure their continuance in farming',
      'Encourage farmers to adopt modern agricultural technologies'
    ],
    eligibilityRules: {
      minAge: 18,
      occupations: ['Farmer', 'Tenant Farmer', 'Sharecropper'],
      notes: 'Available for both loanee and non-loanee farmers cultivating notified crops in notified insurance units.'
    },
    eligibilityHighlights: [
      'Farmers cultivating notified food crops, oilseeds, and annual commercial/horticultural crops',
      'Covers pre-sowing prevented sowing, mid-season adversity, post-harvest losses, and localized calamities (hailstorm, landslide, inundation)',
      'Tenant farmers and sharecroppers are eligible with tenancy certificates or sowing proof'
    ],
    exclusions: [
      'Losses arising from war, nuclear risks, malicious damage, or domestic cattle grazing',
      'Unnotified crops or cultivation in unnotified areas',
      'Post-harvest losses occurring more than 14 days after harvesting'
    ],
    requiredDocuments: [
      {
        id: 'doc-pmfby-land',
        name: 'Land Record / Sowing Certificate / Tenancy Agreement',
        category: 'land',
        purpose: 'Proof of cultivation of notified crop on specified land parcel',
        citizenTip: 'Obtain a Crop Sowing Certificate from your village administrative officer or revenue inspector.',
        isMandatory: true
      },
      {
        id: 'doc-pmfby-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Identity verification of the farmer',
        citizenTip: 'Must match the name on the bank passbook.',
        isMandatory: true
      },
      {
        id: 'doc-pmfby-bank',
        name: 'Bank Passbook Copy',
        category: 'bank',
        purpose: 'Disbursement of claim settlement amount',
        citizenTip: 'Ensure account is active with IFSC code clearly visible.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Crop Notification & Cutoff Dates',
        description: 'Verify if your crop and district are notified for the current season on the PMFBY portal.',
        portalOrOffice: 'pmfby.gov.in / Bank / CSC'
      },
      {
        stepNumber: 2,
        title: 'Enroll and Pay Subsidized Premium',
        description: 'Non-loanee farmers apply online or via CSC before seasonal cutoff date; loanee farmers are automatically covered through their KCC bank.',
        portalOrOffice: 'National Crop Insurance Portal / Bank'
      },
      {
        stepNumber: 3,
        title: 'Report Localized Loss within 72 Hours',
        description: 'In case of localized disaster, report loss within 72 hours via the Crop Insurance Mobile App or toll-free helpline.',
        portalOrOffice: 'Crop Insurance App / Toll-free 14447'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture and Farmers Welfare, GoI',
      url: 'https://pmfby.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Agriculture and Farmers Welfare',
      helpline: '14447 / 011-23382012',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national crop insurance portal operational.'
    }
  },
  {
    id: 'ap-annadata-sukhibhava',
    name: 'Annadata Sukhibhava (Andhra Pradesh Farmer Investment Support)',
    hindiName: 'अन्नदाता सुखीभव (आंध्र प्रदेश)',
    teluguName: 'అన్నదాత సుఖీభవ (ఆంధ్రప్రదేశ్)',
    tamilName: 'அன்னதாதா சுகிபவா (ஆந்திரப் பிரதேசம்)',
    tagline: 'Comprehensive ₹20,000/year farmer investment assistance for AP landowners and CCRC tenant cultivators.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Andhra Pradesh)',
    stateApplicability: 'Andhra Pradesh',
    isCentral: false,
    lifeStage: 'worker',
    beneficiaries: ['AP Landowner Farmers', 'Tenant Cultivators (CCRC)', 'FRA Cultivators'],
    shortSummary: 'Direct investment support of ₹20,000 annually per farmer household in Andhra Pradesh, combining ₹14,000 from the State Government and ₹6,000 from Central PM-KISAN, distributed in seasonal installments.',
    fullDescription: 'The Annadata Sukhibhava scheme is Andhra Pradesh flagship farmer support program. It provides robust direct investment assistance of ₹20,000 per year directly to bank accounts to purchase seeds, fertilizers, and machinery inputs. Unlike standard central schemes, it officially covers tenant farmers holding Crop Cultivator Rights Cards (CCRC).',
    financialBenefit: '₹20,000 / year (₹14,000 State Component + ₹6,000 PM-KISAN)',
    keyObjectives: [
      'Provide substantial ₹20,000 seasonal liquidity to reduce input debt for AP farmers',
      'Extend institutional investment support to tenant farmers and sharecroppers via CCRC cards',
      'Align state disbursements with Kharif and Rabi sowing schedules'
    ],
    eligibilityRules: {
      minAge: 18,
      occupations: ['Farmer', 'Tenant Cultivator with CCRC', 'Tribal Cultivator'],
      stateResidence: 'Andhra Pradesh',
      notes: 'Must be a resident farmer of Andhra Pradesh. Landowners must have e-Panta land records; tenant farmers must hold valid CCRC agreement.'
    },
    eligibilityHighlights: [
      'Resident farmer families in Andhra Pradesh holding agricultural land or registered CCRC card',
      'Tenant farmers cultivating land under recognized mutual agreements with landowners',
      'Aadhaar-seeded bank account with NPCI mapping is mandatory',
      'Must have completed seasonal e-Crop (e-Panta) digital booking'
    ],
    exclusions: [
      'Government employees, institutional landholders, and regular pensioners',
      'Income tax payers in preceding financial year',
      'Commercial real estate land conversions without agricultural cultivation'
    ],
    requiredDocuments: [
      {
        id: 'doc-ap-farmer-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Identity verification and DBT routing',
        citizenTip: 'Ensure mobile number is linked to Aadhaar for OTP verification.',
        isMandatory: true
      },
      {
        id: 'doc-ap-pattadar',
        name: 'Pattadar Passbook / 1-B Record or CCRC Card (for Tenants)',
        category: 'land',
        purpose: 'Proof of agricultural landholding or tenant cultivation rights',
        citizenTip: 'CCRC cards can be renewed at your local Grama Sachivalayam (Village Secretariat).',
        isMandatory: true
      },
      {
        id: 'doc-ap-bank',
        name: 'Bank Passbook (NPCI Mapped)',
        category: 'bank',
        purpose: 'Direct Benefit Transfer credit',
        citizenTip: 'Confirm with your local bank that NPCI Aadhaar seeding is in Active status.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'e-Crop Digital Booking (e-Panta)',
        description: 'Ensure your cultivated crop is recorded by the Village Agriculture Assistant during the seasonal e-Crop survey.',
        portalOrOffice: 'Rythu Seva Kendram (RSK) / Village Secretariat'
      },
      {
        stepNumber: 2,
        title: 'Check Beneficiary Status on Annadata Sukhibhava Portal',
        description: 'Visit annadathasukhibhava.ap.gov.in and check your Aadhaar in the beneficiary search list.',
        portalOrOffice: 'annadathasukhibhava.ap.gov.in'
      },
      {
        stepNumber: 3,
        title: 'Resolve Grievances via Village Secretariat',
        description: 'If omitted or facing land mapping errors, submit a grievance at your local Grama Sachivalayam.',
        portalOrOffice: 'Village Agriculture Assistant'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture, Government of Andhra Pradesh',
      url: 'https://annadathasukhibhava.ap.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Agriculture and Cooperation Department, Govt of AP',
      helpline: '1902 / 155251',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship AP state farmer program offering ₹20,000/year (including ₹6,000 PM-KISAN).'
    }
  },

  // =========================================================================
  // 2. PERSONS WITH DISABILITIES (PwD) - Central & State
  // =========================================================================
  {
    id: 'adip-scheme',
    name: 'ADIP Scheme (Assistance to Disabled Persons for Purchase/Fitting of Aids & Appliances)',
    hindiName: 'एडीआईपी योजना (दिव्यांगजनों हेतु सहायक उपकरण सहायता)',
    teluguName: 'ఏడీఐపీ పథకం (దివ్యాంగుల సహాయ పరికరాల పథకం)',
    tamilName: 'ஏடிஐபி திட்டம் (மாற்றுத்திறனாளிகளுக்கான உபகரண உதவி)',
    tagline: '100% free distribution of standard durable assistive devices, prosthetics, and digital tools for PwDs.',
    category: 'disability-pwd',
    categoryLabel: 'Persons with Disabilities (PwD)',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'all',
    beneficiaries: ['Persons with Benchmark Disabilities (40%+)', 'Children with Special Needs', 'Amputees & Visually Impaired'],
    shortSummary: 'Provides up to 100% subsidy for the purchase and fitting of durable, sophisticated aids and appliances (motorized tricycles, wheelchairs, hearing aids, braille kits, prosthetics, and smart devices) for persons with 40%+ disability.',
    fullDescription: 'The ADIP Scheme is administered by the Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment. It aims to assist needy persons with disabilities in procuring durable, scientifically manufactured standard aids and appliances to promote physical, social, and economic rehabilitation.',
    financialBenefit: '100% subsidy (up to ₹30,000 monthly income: 100% for ≤ ₹22,500/mo, 50% for ₹22,501-₹30,000/mo)',
    keyObjectives: [
      'Provide free assistive devices and surgical correction to persons with benchmark disabilities',
      'Enhance independent living, mobility, and educational/occupational potential',
      'Supply modern digital aids including smartphones, DAISY players, and motorized tricycles'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      maxIncome: 360000, // ₹30,000 / month = ₹3,60,000 / year
      notes: 'Must hold a valid Disability Certificate / UDID card with 40%+ benchmark disability. Must not have received the same aid from government within the last 3 years (1 year for children < 12 years).'
    },
    eligibilityHighlights: [
      'Indian citizen of any age holding a valid UDID Card or Certificate with at least 40% benchmark disability',
      'Monthly family income from all sources not exceeding ₹30,000 (Full 100% grant for income up to ₹22,500/month)',
      'Periodic re-issuance permitted every 3 years for adults and every 1 year for growing children under 12'
    ],
    exclusions: [
      'Persons with family income exceeding ₹30,000 per month',
      'Beneficiaries who already received the same aid from government agencies within the preceding 3 years'
    ],
    requiredDocuments: [
      {
        id: 'doc-adip-udid',
        name: 'UDID Card / Valid Disability Certificate (40%+)',
        category: 'disability',
        purpose: 'Proof of benchmark disability and type of impairment',
        citizenTip: 'Apply on swavlambancard.gov.in if you do not have a digital UDID card yet.',
        isMandatory: true
      },
      {
        id: 'doc-adip-income',
        name: 'Income Certificate from Revenue Authority (or BPL/Ration Card)',
        category: 'income',
        purpose: 'Verifying eligibility for 100% or 50% subsidy band',
        citizenTip: 'A BPL ration card, Ayushman Bharat card, or Tehsildar income certificate is accepted.',
        isMandatory: true
      },
      {
        id: 'doc-adip-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Beneficiary identity and duplicate prevention',
        citizenTip: 'Original must be brought to the ALIMCO distribution assessment camp.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check District Assessment Camps',
        description: 'ALIMCO and District Disability Rehabilitation Centres (DDRC) conduct free assessment camps across all districts periodically.',
        portalOrOffice: 'District Disability Welfare Office / adip.depwd.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Online Application or Camp Registration',
        description: 'Register on the ADIP portal (adip.depwd.gov.in) or attend the camp with your UDID and Income certificate.',
        portalOrOffice: 'Online Portal / ALIMCO Camp'
      },
      {
        stepNumber: 3,
        title: 'Measurements & Appliance Fitting',
        description: 'Prosthetics, orthotic calipers, or customized wheelchairs are measured and standard devices (hearing aids, tricycles) are fitted free of cost.',
        portalOrOffice: 'ALIMCO Distribution Camp'
      }
    ],
    officialSource: {
      name: 'Department of Empowerment of Persons with Disabilities, MSJE, GoI',
      url: 'https://adip.depwd.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Social Justice and Empowerment',
      helpline: '1800-180-5129',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official central portal active. Guidelines revised through 15th Finance Commission.'
    }
  },
  {
    id: 'ap-ntr-bharosa-disability',
    name: 'NTR Bharosa Disability Pension (Andhra Pradesh Social Security Pension)',
    hindiName: 'एनटीआर भरोसा दिव्यांगता पेंशन (आंध्र प्रदेश)',
    teluguName: 'ఎన్టీఆర్ భరోసా దివ్యాంగుల పింఛను (ఆంధ్రప్రదేశ్)',
    tamilName: 'என்டிஆர் பரோசா மாற்றுத்திறனாளி ஓய்வூதியம் (ஆந்திரா)',
    tagline: 'Substantial monthly social security pension of ₹6,000 to ₹15,000 for persons with disabilities in AP.',
    category: 'disability-pwd',
    categoryLabel: 'Persons with Disabilities (PwD)',
    geographicScope: 'State Scheme (Andhra Pradesh)',
    stateApplicability: 'Andhra Pradesh',
    isCentral: false,
    lifeStage: 'all',
    beneficiaries: ['Persons with Benchmark Disabilities (40%+)', 'Severe / Bedridden Disabled (80%+)', 'Chronic Kidney Disease Dialysis Patients'],
    shortSummary: 'Under G.O.Ms.No.43, Andhra Pradesh provides a monthly pension of ₹6,000 for general PwD (40-79% disability), ₹15,000 for fully disabled/severe/bedridden cases, and ₹10,000 for chronic kidney disease dialysis patients, delivered to doorstep monthly.',
    fullDescription: 'The NTR Bharosa Social Security Pension Scheme (administered by the Society for Elimination of Rural Poverty - SERP, Panchayat Raj & Rural Development Department, Govt of AP) provides the highest state-level disability financial assistance in India. The revised pension rates under G.O.Ms.No.43 provide ₹6,000/month for 40-79% disability, ₹15,000/month for severe/bedridden persons, and ₹10,000/month for dialysis and chronic disease patients.',
    financialBenefit: '₹6,000/mo (40-79% PwD) | ₹15,000/mo (Severe/Bedridden 80%+) | ₹10,000/mo (Dialysis/CKD)',
    keyObjectives: [
      'Ensure dignified financial sustenance for persons with physical, sensory, or intellectual disabilities',
      'Provide exceptional monthly support of ₹15,000 for families caring for severe bedridden members',
      'Deliver monthly pension directly at doorstep on the 1st of every month via village/ward volunteers'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      stateResidence: 'Andhra Pradesh',
      isBPLRequired: true,
      notes: 'Must be a permanent resident of Andhra Pradesh holding a valid SADAREM / UDID disability certificate. Family must have white ration card with income < ₹10,000/mo rural or < ₹12,000/mo urban.'
    },
    eligibilityHighlights: [
      'Resident of Andhra Pradesh with official SADAREM medical assessment board certificate or UDID card',
      '40% to 79% disability qualifies for ₹6,000 per month',
      '80% and above severe disability or bedridden cases qualify for ₹15,000 per month',
      'Patients with chronic kidney disease undergoing regular dialysis qualify for ₹10,000 per month regardless of age',
      'White Ration Card holder (BPL family)'
    ],
    exclusions: [
      'Families owning four-wheeler vehicles (excluding auto-rickshaws, tractors, taxis)',
      'Government employees or regular government service pensioners',
      'Urban residential built-up property exceeding 1,000 sq.ft'
    ],
    requiredDocuments: [
      {
        id: 'doc-ap-sadarem',
        name: 'SADAREM Disability Certificate / UDID Card',
        category: 'disability',
        purpose: 'Government medical board assessment of disability percentage and category',
        citizenTip: 'Book an appointment at your local Area/District Government Hospital for SADAREM board evaluation.',
        isMandatory: true
      },
      {
        id: 'doc-ap-pwd-whitecard',
        name: 'White Rice Card (AP Ration Card)',
        category: 'income',
        purpose: 'Proof of economic category and household composition',
        citizenTip: 'Your name must be listed on the active White Ration card.',
        isMandatory: true
      },
      {
        id: 'doc-ap-pwd-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Biometric identification for monthly pension delivery',
        citizenTip: 'Check that Aadhaar biometric details are updated for doorstep authentication.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Obtain SADAREM Medical Assessment',
        description: 'Get assessed by the district medical board and obtain your permanent SADAREM disability certificate.',
        portalOrOffice: 'Government Area / District Hospital'
      },
      {
        stepNumber: 2,
        title: 'Submit Application at Village/Ward Secretariat',
        description: 'Submit an application at your local Grama / Ward Sachivalayam via the Welfare and Education Assistant.',
        portalOrOffice: 'Grama / Ward Sachivalayam'
      },
      {
        stepNumber: 3,
        title: 'Field Verification & Doorstep Pension Delivery',
        description: 'Following field verification by MPDO / Municipal Commissioner, pension is sanctioned and delivered monthly to your residence.',
        portalOrOffice: 'sspensions.ap.gov.in / Village Secretariat'
      }
    ],
    officialSource: {
      name: 'Society for Elimination of Rural Poverty (SERP), PR & RD Dept, Govt of Andhra Pradesh',
      url: 'https://sspensions.ap.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Panchayat Raj and Rural Development Department, Govt of AP',
      helpline: '1902',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Andhra Pradesh pension portal. Rates verified under G.O.Ms.No.43 (July 2024).'
    }
  },
  {
    id: 'igndps-disability-pension',
    name: 'IGNDPS (Indira Gandhi National Disability Pension Scheme)',
    hindiName: 'इंदिरा गांधी राष्ट्रीय दिव्यांगता पेंशन योजना',
    teluguName: 'ఇందిరా గాంధీ జాతీయ దివ్యాంగుల పింఛను పథకం',
    tamilName: 'இந்திரா காந்தி தேசிய மாற்றுத்திறனாளி ஓய்வூதியத் திட்டம்',
    tagline: 'Central social assistance pension for persons aged 18-79 with severe or multiple disabilities.',
    category: 'disability-pwd',
    categoryLabel: 'Persons with Disabilities (PwD)',
    geographicScope: 'Central & State Partnership',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'all',
    beneficiaries: ['Severe Disability (80%+)', 'Multiple Disabilities', 'BPL Households'],
    shortSummary: 'Constitutes the central disability social security component under NSAP providing monthly assistance to BPL citizens aged 18-79 with 80%+ severe or multiple disabilities, augmented by state government top-ups.',
    fullDescription: 'The Indira Gandhi National Disability Pension Scheme (IGNDPS) is a sub-scheme of the National Social Assistance Programme (NSAP) administered by the Ministry of Rural Development. It provides monthly social assistance to persons with severe or multiple disabilities living below the poverty line.',
    financialBenefit: '₹300/mo (Age 18-79) | ₹500/mo (Age 80+) Central Share + Substantial State Top-Up',
    keyObjectives: [
      'Provide basic income security for indigent citizens with severe disabilities',
      'Supplement household resources for caretaking and medical essentials',
      'Create universal minimum floor for disability assistance across Indian states'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 79,
      minDisabilityPercentage: 80,
      isBPLRequired: true,
      requiresUDID: true,
      notes: 'Must belong to Below Poverty Line (BPL) household. Disability level must be 80% or multiple disabilities.'
    },
    eligibilityHighlights: [
      'Age between 18 and 79 years',
      'Severe disability level of 80% or higher, or suffering from multiple disabilities',
      'Family must be listed in the BPL census list or hold Antyodaya/BPL ration card'
    ],
    exclusions: [
      'Non-BPL households or persons with mild/moderate disability (< 80%)',
      'Regular government or PSU pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-igndps-cert',
        name: 'Disability Certificate showing 80%+ Severe Disability',
        category: 'disability',
        purpose: 'Proof of severe benchmark disability',
        citizenTip: 'Issued by Medical Board comprising District Chief Medical Officer.',
        isMandatory: true
      },
      {
        id: 'doc-igndps-bpl',
        name: 'BPL Certificate / Priority Ration Card',
        category: 'income',
        purpose: 'Proof of economic deprivation',
        citizenTip: 'BPL serial number must be verified with Panchayat records.',
        isMandatory: true
      },
      {
        id: 'doc-igndps-bank',
        name: 'Bank / Post Office Savings Account Passbook',
        category: 'bank',
        purpose: 'Direct Benefit Transfer of monthly pension',
        citizenTip: 'Can be linked to local Post Office savings account if bank branch is distant.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to BDO / Tehsildar',
        description: 'Submit prescribed NSAP application at the Block Development Office or Municipal Corporation office.',
        portalOrOffice: 'BDO / Tehsildar / nsap.nic.in'
      },
      {
        stepNumber: 2,
        title: 'Verification by Social Welfare Inspector',
        description: 'Field officer confirms residence, BPL status, and physical disability documentation.',
        portalOrOffice: 'District Social Welfare Office'
      },
      {
        stepNumber: 3,
        title: 'DBT Sanction & Monthly Credit',
        description: 'Pension order is issued and funds transferred monthly to bank or post office account.',
        portalOrOffice: 'Public Financial Management System (PFMS)'
      }
    ],
    officialSource: {
      name: 'National Social Assistance Programme (NSAP), Ministry of Rural Development, GoI',
      url: 'https://nsap.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Rural Development',
      helpline: '1800-111-555',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official central NSAP portal. States provide significant top-ups over the base central share.'
    }
  },

  // =========================================================================
  // 3. CHILDREN, NEWBORNS & EARLY CHILDHOOD
  // =========================================================================
  {
    id: 'poshan-saksham-anganwadi',
    name: 'Mission Saksham Anganwadi & POSHAN 2.0',
    hindiName: 'सक्षम आंगनवाड़ी एवं पोषण 2.0',
    teluguName: 'సాక్షమ్ అంగన్‌వాడీ & పోషణ్ 2.0',
    tamilName: 'சாக்ஷம் அங்கன்வாடி & போஷன் 2.0',
    tagline: 'Free supplementary nutrition, preschool education, and growth tracking for children 0-6 years.',
    category: 'children-nutrition',
    categoryLabel: 'Children & Early Nutrition',
    geographicScope: 'Central & State Partnership',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'childhood',
    beneficiaries: ['Children aged 0 to 6 years', 'Pregnant Women', 'Lactating Mothers'],
    shortSummary: 'Universal early childhood nutrition and development package delivering Take-Home Rations (THR), hot cooked meals, immunization, growth monitoring, and preschool non-formal education through 14 lakh Anganwadi centres across India.',
    fullDescription: 'Mission Saksham Anganwadi and POSHAN 2.0 is the Government of India flagship integrated child development scheme under the Ministry of Women and Child Development. It addresses maternal and child malnutrition, stunting, wasting, and anemia by providing supplementary nutrition, health checkups, and early childhood care and education (ECCE).',
    financialBenefit: 'Free supplementary daily nutrition + hot cooked meals + free preschool learning kits',
    keyObjectives: [
      'Reduce stunting, wasting, and underweight prevalence in children under 6 years',
      'Provide hot cooked meals and fortified Take-Home Rations conforming to national calorie/protein norms',
      'Deliver foundational play-based early childhood education to children aged 3 to 6'
    ],
    eligibilityRules: {
      minAge: 0,
      maxAge: 6,
      notes: 'Universal service: Any child from birth to 6 years, pregnant woman, or nursing mother residing in the Anganwadi catchment area is eligible regardless of caste, religion, or income.'
    },
    eligibilityHighlights: [
      'Universal service for all children under 6 years residing near any Anganwadi centre in India',
      'No income ceiling or caste restrictions: free public health and nutrition entitlement',
      'Growth monitoring and real-time health tracking on the Poshan Tracker platform'
    ],
    exclusions: [
      'No exclusions: universal welfare program'
    ],
    requiredDocuments: [
      {
        id: 'doc-poshan-birth',
        name: 'Child Birth Certificate / Hospital Discharge Card',
        category: 'identity',
        purpose: 'Record accurate date of birth for immunization and growth milestone tracking',
        citizenTip: 'Even if formal birth certificate is delayed, hospital discharge slip or Mother-Child Protection (MCP) card suffices for instant enrollment.',
        isMandatory: true
      },
      {
        id: 'doc-poshan-mcp',
        name: 'Mother-Child Protection (MCP) Card',
        category: 'medical',
        purpose: 'Tracking vaccination schedule and maternal health records',
        citizenTip: 'Issued free of charge during first registration at Anganwadi or primary health centre.',
        isMandatory: true
      },
      {
        id: 'doc-poshan-parent-aadhaar',
        name: 'Parent / Mother Aadhaar Card',
        category: 'identity',
        purpose: 'Poshan Tracker digital record entry',
        citizenTip: 'Aadhaar of either parent is accepted.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Visit Nearest Village / Ward Anganwadi Centre',
        description: 'Locate your designated local Anganwadi centre and meet the Anganwadi Worker (AWW) or ASHA worker.',
        portalOrOffice: 'Local Anganwadi Centre'
      },
      {
        stepNumber: 2,
        title: 'Enrollment in Poshan Tracker',
        description: 'Worker enters child details and issues the Mother-Child Protection card for monthly rations and health tracking.',
        portalOrOffice: 'Poshan Tracker App (poshantracker.in)'
      },
      {
        stepNumber: 3,
        title: 'Receive Daily Meals / Take-Home Rations',
        description: 'Collect monthly Take-Home Rations (THR) for 0-3 age group or send child for hot cooked meals and preschool education (3-6 age group).',
        portalOrOffice: 'Anganwadi Centre'
      }
    ],
    officialSource: {
      name: 'Ministry of Women and Child Development, GoI',
      url: 'https://poshantracker.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Women and Child Development',
      helpline: '14408',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Poshan Tracker national digital platform active across all States and UTs.'
    }
  },
  {
    id: 'mission-vatsalya',
    name: 'Mission Vatsalya (Child Protection & Foster Care Sponsorship)',
    hindiName: 'मिशन वात्सल्य (बाल संरक्षण एवं प्रायोजन सहायता)',
    teluguName: 'మిషన్ వాత్సల్య (శిశు సంరక్షణ & పెంపకం సహాయం)',
    tamilName: 'மிஷன் வாத்சல்யா (குழந்தைகள் பாதுகாப்பு மற்றும் நிதியுதவி)',
    tagline: '₹4,000 monthly financial sponsorship for orphaned, destitute, and vulnerable children.',
    category: 'children-nutrition',
    categoryLabel: 'Children & Early Nutrition',
    geographicScope: 'Central & State Partnership',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'childhood',
    beneficiaries: ['Orphaned Children', 'Single-Parent Destitute Families', 'Children with Incarcerated/Disabled Parents'],
    shortSummary: 'Provides non-institutional family-based care sponsorship of ₹4,000 per month per child to prevent institutionalization and support education, nutrition, and medical needs of children in difficult circumstances.',
    fullDescription: 'Mission Vatsalya is a roadmap to achieve development and child protection priorities aligned with the Sustainable Development Goals (SDGs). Under its Family-Based Care sponsorship program, children who have lost both parents, children of single surviving mothers/fathers in extreme poverty, or children with critically ill parents receive ₹4,000 per month until age 18.',
    financialBenefit: '₹4,000 / month per child for education, nutrition & healthcare until age 18',
    keyObjectives: [
      'Prevent abandonment and institutionalization of vulnerable children by supporting families directly',
      'Ensure continuity of school education and nutritional security for orphaned or destitute minors',
      'Support foster care and kinship care arrangements within the community'
    ],
    eligibilityRules: {
      minAge: 0,
      maxAge: 18,
      maxIncome: 144000, // ₹1,44,000 per year (rural ₹72,000 to urban ₹96,000 depending on state, avg 1.44L)
      notes: 'Child must be under 18 years of age. Priority given to double orphans, children of widows/divorcees without income, and children with terminal-illness parents.'
    },
    eligibilityHighlights: [
      'Child who has lost both parents or whose surviving parent is incapacitated or destitute',
      'Family income not exceeding ₹72,000/year (rural) or ₹96,000/year (urban)',
      'Child must be regularly enrolled and attending recognized school/anganwadi'
    ],
    exclusions: [
      'Families whose income exceeds the prescribed state ceiling',
      'Children enrolled in full-time residential government juvenile care institutions where state bears all costs'
    ],
    requiredDocuments: [
      {
        id: 'doc-vatsalya-death',
        name: 'Death Certificate of Parent(s) / Incapacity Certificate',
        category: 'medical',
        purpose: 'Verification of child orphanhood or parental incapacitation',
        citizenTip: 'Obtain death certificates from municipal registrar or revenue department.',
        isMandatory: true
      },
      {
        id: 'doc-vatsalya-school',
        name: 'School Enrollment Certificate / Study Certificate',
        category: 'academic',
        purpose: 'Proof that child is regularly enrolled in school',
        citizenTip: 'Issued by the Headmaster or Principal of the attending school.',
        isMandatory: true
      },
      {
        id: 'doc-vatsalya-income',
        name: 'Income Certificate of Guardian / Kinship Carer',
        category: 'income',
        purpose: 'Income eligibility verification',
        citizenTip: 'Issued by local Tehsildar or Revenue Inspector.',
        isMandatory: true
      },
      {
        id: 'doc-vatsalya-bank',
        name: 'Joint Bank Account Passbook (Child + Guardian)',
        category: 'bank',
        purpose: 'Direct Benefit Transfer destination',
        citizenTip: 'Open a no-frills zero balance savings account in child and guardian joint names.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to DCPU or Child Welfare Committee (CWC)',
        description: 'Apply through the District Child Protection Unit (DCPU) or local Child Welfare Committee office.',
        portalOrOffice: 'District Child Protection Officer (DCPO)'
      },
      {
        stepNumber: 2,
        title: 'Social Investigation Report (SIR)',
        description: 'Protection Officer conducts home inquiry and submits Social Investigation Report confirming family hardship.',
        portalOrOffice: 'District Child Protection Unit'
      },
      {
        stepNumber: 3,
        title: 'Approval by Sponsorship & Foster Care Approval Committee (SFCAC)',
        description: 'District committee headed by District Magistrate approves ₹4,000 monthly DBT to guardian account.',
        portalOrOffice: 'Office of District Magistrate / Collector'
      }
    ],
    officialSource: {
      name: 'Ministry of Women and Child Development, Government of India',
      url: 'https://wcd.nic.in/schemes/mission-vatsalya',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Women and Child Development',
      helpline: '1098 (Childline)',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Guidelines operational nationwide through District Child Protection Units.'
    }
  },

  // =========================================================================
  // 4. SCHOOL STUDENTS & HIGHER EDUCATION
  // =========================================================================
  {
    id: 'nmmss-scholarship',
    name: 'NMMSS (National Means-cum-Merit Scholarship Scheme)',
    hindiName: 'राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति योजना',
    teluguName: 'ఎన్‌ఎంఎంఎస్‌ఎస్ (నేషనల్ మీన్స్-కమ్-మెరిట్ స్కాలర్‌షిప్)',
    tamilName: 'தேசிய வருவாய் வழி மற்றும் தகுதி உதவித்தொகை திட்டம்',
    tagline: '₹12,000 per year scholarship for meritorious students from low-income families from Class 9 to 12.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'student',
    beneficiaries: ['Meritorious Class 8 Students', 'Low-Income Households', 'Government School Students'],
    shortSummary: 'Awards ₹12,000 per annum (₹1,000 per month) to 1,00,000 meritorious students from economically weaker sections to arrest dropouts after Class 8 and encourage continuation of secondary education.',
    fullDescription: 'NMMSS is a Central Sector Scheme implemented by the Department of School Education and Literacy, Ministry of Education. Selection is conducted via a state-level competitive examination (Mental Ability Test & Scholastic Aptitude Test) for Class 8 students studying in government, local body, or government-aided schools.',
    financialBenefit: '₹12,000 / year (₹1,000 / month from Class 9 to Class 12 via DBT)',
    keyObjectives: [
      'Arrest high dropout rates at Class 8 stage among economically disadvantaged students',
      'Reward and nurture academic excellence among underprivileged rural and urban schoolchildren',
      'Provide seamless scholarship payments directly into student bank accounts through NSP portal'
    ],
    eligibilityRules: {
      minAge: 12,
      maxAge: 18,
      maxIncome: 350000,
      occupations: ['Student (Class 8 to 12)'],
      educationLevel: ['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'],
      notes: 'Parental income from all sources must not exceed ₹3,50,000 per annum. Must clear the state NMMSS exam with min 55% marks (50% for SC/ST).'
    },
    eligibilityHighlights: [
      'Enrolled in Government, Local Body, or Government-aided school in Class 8',
      'Cleared Class 7 with minimum 55% marks (50% for SC/ST candidates)',
      'Total annual family income from all sources must not exceed ₹3,50,000',
      'Must clear the state-level NMMSS selection examination'
    ],
    exclusions: [
      'Students of Navodaya Vidyalayas, Kendriya Vidyalayas, Sainik Schools, and private residential boarding schools',
      'Students receiving other parallel central or state government monthly scholarships'
    ],
    requiredDocuments: [
      {
        id: 'doc-nmmss-income',
        name: 'Income Certificate from Competent Revenue Authority',
        category: 'income',
        purpose: 'Verification of parental income ceiling (≤ ₹3.50 Lakh)',
        citizenTip: 'Obtain from local Tehsildar or Sub-Divisional Magistrate.',
        isMandatory: true
      },
      {
        id: 'doc-nmmss-marks',
        name: 'Class 7 & 8 Marksheet / School Bonafide Certificate',
        category: 'academic',
        purpose: 'Academic eligibility verification',
        citizenTip: 'Must be attested by the Headmaster of the attending school.',
        isMandatory: true
      },
      {
        id: 'doc-nmmss-aadhaar',
        name: 'Student Aadhaar Card (or Aadhaar Enrolment Slip)',
        category: 'identity',
        purpose: 'Identity verification and NSP portal registration',
        citizenTip: 'Bank account must be in the student name and mapped with Aadhaar on NPCI.',
        isMandatory: true
      },
      {
        id: 'doc-nmmss-bank',
        name: 'Student Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Direct Benefit Transfer of ₹12,000 annual scholarship',
        citizenTip: 'Open a zero-balance basic savings bank deposit account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply for State NMMSS Examination in Class 8',
        description: 'Submit exam application through your school headmaster to the State Examination Board.',
        portalOrOffice: 'State Education Directorate / School'
      },
      {
        stepNumber: 2,
        title: 'Appear and Qualify in State Exam',
        description: 'Appear for the Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT).',
        portalOrOffice: 'Designated Examination Centre'
      },
      {
        stepNumber: 3,
        title: 'Register on National Scholarship Portal (NSP)',
        description: 'Qualified students register on scholarships.gov.in under NMMSS scheme for yearly renewal.',
        portalOrOffice: 'scholarships.gov.in'
      }
    ],
    officialSource: {
      name: 'Department of School Education & Literacy, Ministry of Education, GoI',
      url: 'https://scholarships.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Education',
      helpline: '0120-6619540',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Administered through National Scholarship Portal (NSP).'
    }
  },
  {
    id: 'pm-usp-higher-edu',
    name: 'PM-USP Central Sector Scholarship for College & University Students',
    hindiName: 'पीएम-यूएसपी केंद्रीय क्षेत्र उच्च शिक्षा छात्रवृत्ति',
    teluguName: 'పీఎం-యూఎస్‌పీ కళాశాల & విశ్వవిద్యాలయ విద్యార్థుల స్కాలర్‌షిప్',
    tamilName: 'கல்லூரி மற்றும் பல்கலைக்கழக மாணவர்களுக்கான மத்திய உதவித்தொகை',
    tagline: '₹12,000 to ₹20,000/year for meritorious students pursuing graduate and professional degrees.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'student',
    beneficiaries: ['Top 80th Percentile Class 12 Graduates', 'College Students', 'Low-Income Families'],
    shortSummary: 'Provides financial support of ₹12,000/year for graduation (first 3 years) and ₹20,000/year for post-graduation to top 80th percentile students of Class 12 board exams whose family income is up to ₹4.5 Lakh.',
    fullDescription: 'Under the Pradhan Mantri Uchchatar Shiksha Protsahan (PM-USP) Central Sector Scheme of Scholarship, the Department of Higher Education awards 82,000 fresh scholarships annually (41,000 boys and 41,000 girls) to support meritorious students in covering daily expenses while pursuing higher education in recognized colleges and universities.',
    financialBenefit: '₹12,000 / year (Undergraduate years 1-3) | ₹20,000 / year (Postgraduate / Professional 4th-5th yr)',
    keyObjectives: [
      'Provide financial assistance to meritorious students from low-income families to meet day-to-day college expenses',
      'Promote gender parity in higher education by reserving 50% scholarships for female students',
      'Encourage completion of professional and technical degree courses without financial discontinuation'
    ],
    eligibilityRules: {
      minAge: 17,
      maxAge: 25,
      maxIncome: 450000,
      occupations: ['Student (College / University)'],
      educationLevel: ['Undergraduate', 'Postgraduate', 'Engineering', 'Medical'],
      notes: 'Must have scored above 80th percentile in the respective state/central Class 12 board examination. Family income ≤ ₹4,50,000 per annum.'
    },
    eligibilityHighlights: [
      'Above 80th percentile of successful candidates in relevant stream in Class 12 board exams',
      'Enrolled in regular full-time undergraduate / integrated degree course in recognized institution',
      'Annual family income from all sources not exceeding ₹4,50,000',
      'Must maintain at least 50% marks and 75% attendance for yearly renewal'
    ],
    exclusions: [
      'Students enrolled in correspondence, distance education, or diploma courses',
      'Students already availing any other government scholarship or fee reimbursement'
    ],
    requiredDocuments: [
      {
        id: 'doc-pmusp-12th',
        name: 'Class 12 Passing Certificate & Marks Statement',
        category: 'academic',
        purpose: 'Verification of 80th percentile board ranking',
        citizenTip: 'Check your state board website for cutoff percentile marks of your board year.',
        isMandatory: true
      },
      {
        id: 'doc-pmusp-college',
        name: 'College Admission Fee Receipt & Bonafide Certificate',
        category: 'academic',
        purpose: 'Proof of enrollment in regular full-time degree program',
        citizenTip: 'College must be registered on the AISHE portal with valid institute code.',
        isMandatory: true
      },
      {
        id: 'doc-pmusp-income',
        name: 'Annual Family Income Certificate',
        category: 'income',
        purpose: 'Income ceiling compliance (≤ ₹4.50 Lakh)',
        citizenTip: 'Issued by Revenue Authority not below the rank of Tehsildar.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on National Scholarship Portal',
        description: 'Register on scholarships.gov.in under Department of Higher Education - PM-USP scheme.',
        portalOrOffice: 'scholarships.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Institute Level Verification',
        description: 'Your college Nodal Officer verifies your enrollment and academic details digitally on NSP.',
        portalOrOffice: 'College Nodal Officer'
      },
      {
        stepNumber: 3,
        title: 'State & Ministry Sanction via DBT',
        description: 'State education authority validates merit list and scholarship is directly credited via PFMS.',
        portalOrOffice: 'Department of Higher Education, GoI'
      }
    ],
    officialSource: {
      name: 'Department of Higher Education, Ministry of Education, GoI',
      url: 'https://scholarships.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Education',
      helpline: '0120-6619540',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'National Scholarship Portal application window open during annual academic cycles.'
    }
  },
  {
    id: 'nsp-post-matric',
    name: 'Post-Matric Scholarship for SC/ST/OBC Students',
    hindiName: 'एससी/एसटी/ओबीसी छात्रों हेतु पोस्ट-मैट्रिक छात्रवृत्ति',
    teluguName: 'ఎస్సీ/ఎస్టీ/ఓబీసీ విద్యార్థులకు పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్',
    tamilName: 'எஸ்சி/எஸ்டி/ஓபிசி மாணவர்களுக்கான போஸ்ட்-மெட்ரிக் உதவித்தொகை',
    tagline: '100% compulsory course fees reimbursement plus monthly maintenance allowance for post-matric studies.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'Central & State Partnership',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'student',
    beneficiaries: ['SC Students', 'ST Students', 'OBC Students', 'College Students'],
    shortSummary: 'Centrally sponsored scheme providing complete tuition fee reimbursement and monthly living allowance for post-secondary education (Class 11 to PhD) to students from SC, ST, and eligible OBC categories.',
    fullDescription: 'The Post-Matric Scholarship scheme is a major affirmative action educational support program. It covers non-refundable compulsory fees charged by recognized colleges and universities, alongside a graded monthly maintenance allowance based on hosteller or day-scholar status.',
    financialBenefit: '100% Tuition Fee Reimbursement + ₹4,000 to ₹13,500/year living allowance',
    keyObjectives: [
      'Eliminate economic barriers to higher education for disadvantaged caste communities',
      'Increase Gross Enrolment Ratio (GER) in higher education for SC and ST youth',
      'Deliver tuition and living stipends directly into student accounts via DBT'
    ],
    eligibilityRules: {
      minAge: 15,
      maxIncome: 250000,
      socialCategories: ['SC', 'ST', 'OBC'],
      occupations: ['Student'],
      educationLevel: ['Class 11-12', 'Diploma', 'Undergraduate', 'Postgraduate', 'Doctoral'],
      notes: 'Annual family income from all sources must not exceed ₹2,50,000. Must have completed Class 10 (Matriculation).'
    },
    eligibilityHighlights: [
      'Belonging to officially notified SC, ST, or eligible OBC communities',
      'Enrolled in recognized post-matric course (Class 11, 12, ITI, Polytechnic, Degree, Master, PhD)',
      'Family annual income from all sources within ₹2,50,000'
    ],
    exclusions: [
      'Students in full-time employment earning regular salaries',
      'More than two male children from the same family (relaxation applies to female students in many states)'
    ],
    requiredDocuments: [
      {
        id: 'doc-caste-cert',
        name: 'Community / Caste Certificate',
        category: 'caste',
        purpose: 'Proof of SC/ST/OBC status issued by designated Revenue Officer',
        citizenTip: 'Digitally signed caste certificate from MeeSeva / e-District portal is mandatory.',
        isMandatory: true
      },
      {
        id: 'doc-income-schol',
        name: 'Income Certificate (Family Annual Income ≤ ₹2.5 Lakh)',
        category: 'income',
        purpose: 'Income ceiling compliance',
        citizenTip: 'Must be current financial year certificate from local Tehsildar.',
        isMandatory: true
      },
      {
        id: 'doc-bonafide-schol',
        name: 'College Fee Receipt & Bonafide Certificate',
        category: 'academic',
        purpose: 'Course fee calculation and attendance confirmation',
        citizenTip: 'Collect stamped bonafide form from college scholarship desk.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'NSP Registration / State Scholarship Portal',
        description: 'Register with Aadhaar on scholarships.gov.in (or state portal like Jnanabhumi in AP).',
        portalOrOffice: 'scholarships.gov.in / State Portal'
      },
      {
        stepNumber: 2,
        title: 'Institutional Verification',
        description: 'College administrative officer verifies course admission and fee details online.',
        portalOrOffice: 'College Administration'
      },
      {
        stepNumber: 3,
        title: 'State Welfare Dept Approval & DBT Transfer',
        description: 'District Welfare Officer approves fee release and maintenance allowance.',
        portalOrOffice: 'District Social Welfare Officer'
      }
    ],
    officialSource: {
      name: 'Ministry of Social Justice & Empowerment and Ministry of Tribal Affairs, GoI',
      url: 'https://scholarships.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Social Justice and Empowerment',
      helpline: '0120-6619540',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official central and state scholarship portal integration.'
    }
  },
  {
    id: 'ap-thalliki-vandanam',
    name: 'Thalliki Vandanam Scheme (Andhra Pradesh School Education DBT)',
    hindiName: 'तल्लिकी वंदनम योजना (आंध्र प्रदेश)',
    teluguName: 'తల్లికి వందనం పథకం (ఆంధ్రప్రదేశ్)',
    tamilName: 'தல்லிகி வந்தனம் திட்டம் (ஆந்திரப் பிரதேசம்)',
    tagline: '₹15,000 per year per school-going child credited directly into mother\'s bank account.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Andhra Pradesh)',
    stateApplicability: 'Andhra Pradesh',
    isCentral: false,
    lifeStage: 'student',
    beneficiaries: ['Mothers of School Students', 'Class 1 to 12 Students', 'Intermediate Students in AP'],
    shortSummary: 'Under the revised flagship educational initiative of Andhra Pradesh, ₹15,000 annual financial assistance is sanctioned per eligible child studying from Class 1 to 12 (net ₹13,000 deposited via DBT directly into the mother\'s bank account, with ₹2,000 allocated for school infrastructure/maintenance).',
    fullDescription: 'Thalliki Vandanam is Andhra Pradesh flagship educational support scheme for mothers. The assistance applies per child in the family with no restriction on the number of children. It aims to eliminate child labor, reduce school dropouts, and support mothers in providing uniforms, books, and study aids.',
    financialBenefit: '₹15,000 / year per eligible child (net ₹13,000 credited to mother via DBT)',
    keyObjectives: [
      'Empower mothers to finance schooling of their children from Class 1 through Intermediate (Class 12)',
      'Incentivize minimum 75% attendance in recognized government and private schools',
      'Remove family child-count caps to ensure all children in poor households are educated'
    ],
    eligibilityRules: {
      minAge: 5,
      maxAge: 19,
      stateResidence: 'Andhra Pradesh',
      occupations: ['Student (Class 1 to 12 / Intermediate)'],
      educationLevel: ['Class 1-10', 'Intermediate / Class 11-12'],
      notes: 'Child must maintain minimum 75% attendance. Mother must hold active White Ration Card with family income < ₹10,000/mo (rural) or < ₹12,000/mo (urban).'
    },
    eligibilityHighlights: [
      'Child studying in Class 1 to 12 (including Junior College / Intermediate) in recognized AP institutions',
      'Minimum 75% school attendance during the academic evaluation window',
      'Assistance credited directly to mother or legal guardian Aadhaar-seeded bank account',
      'White Rice Card holder with monthly family income within prescribed limits'
    ],
    exclusions: [
      'Households owning four-wheeler vehicles (excluding taxi, tractor, auto)',
      'Government employees, PSU staff, or income tax payers',
      'Electricity consumption exceeding 300 units/month',
      'Landholding exceeding 3 acres wet or 10 acres dry land'
    ],
    requiredDocuments: [
      {
        id: 'doc-tv-mother-aadhaar',
        name: 'Mother / Guardian Aadhaar Card',
        category: 'identity',
        purpose: 'Identity verification and biometric DBT authentication',
        citizenTip: 'Account must be Aadhaar-seeded with active NPCI mapping in bank.',
        isMandatory: true
      },
      {
        id: 'doc-tv-child-aadhaar',
        name: 'Child Aadhaar Card & School Student ID (Child Info ID)',
        category: 'identity',
        purpose: 'Mapping student attendance and enrollment record',
        citizenTip: 'Check with your school teacher that your child information is verified on U-DISE.',
        isMandatory: true
      },
      {
        id: 'doc-tv-whitecard',
        name: 'AP White Rice Card',
        category: 'income',
        purpose: 'Family economic criteria verification',
        citizenTip: 'Both child and mother names must be active on the card.',
        isMandatory: true
      },
      {
        id: 'doc-tv-bank',
        name: 'Mother Savings Bank Passbook',
        category: 'bank',
        purpose: 'Direct Benefit Transfer credit',
        citizenTip: 'Must not be a dormant or block-listed account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'School Headmaster Enters Student Record',
        description: 'School principal enters student enrollment and attendance in the Department of School Education database.',
        portalOrOffice: 'School Headmaster / U-DISE'
      },
      {
        stepNumber: 2,
        title: 'Social Audit List at Village / Ward Secretariat',
        description: 'Eligible beneficiary lists are published at Grama Sachivalayam for social verification and grievance redressal.',
        portalOrOffice: 'Village / Ward Secretariat'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer (DBT)',
        description: 'Financial assistance is credited directly into the mother bank account before the academic year commences.',
        portalOrOffice: 'bm-sgsw.ap.gov.in / AP Govt DBT'
      }
    ],
    officialSource: {
      name: 'Department of School Education, Government of Andhra Pradesh',
      url: 'https://jaganannaammavodi.ap.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'School Education Department, Govt of AP',
      helpline: '1902',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship school education assistance program in Andhra Pradesh covering Class 1-12.'
    }
  },

  // =========================================================================
  // 5. UNEMPLOYED PEOPLE & JOB SEEKERS
  // =========================================================================
  {
    id: 'ncs-career-service',
    name: 'National Career Service (NCS Portal)',
    hindiName: 'राष्ट्रीय करियर सेवा (एनसीएस पोर्टल)',
    teluguName: 'నేషనల్ కెరీర్ సర్వీస్ (ఎన్‌సీఎస్ పోర్టల్)',
    tamilName: 'தேசிய வேலைவாய்ப்பு சேவை (என்சிஎஸ்)',
    tagline: 'Free national platform for verified job vacancies, career counselling, and skill fairs.',
    category: 'unemployment-skills',
    categoryLabel: 'Unemployment & Skill Training',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'youth',
    beneficiaries: ['Unemployed Youth', 'Job Seekers', 'College Graduates', 'Skilled Workers'],
    shortSummary: 'Government of India centralized employment platform connecting jobseekers with verified private and public employers, free career counselling, job fairs, and vocational training across 1,000+ Model Career Centres.',
    fullDescription: 'The National Career Service (NCS) is an initiative of the Ministry of Labour and Employment. It transforms the erstwhile National Employment Exchange system into a modern, transparent digital exchange. It charges zero registration fees and provides multi-channel access via web portal, toll-free helpline, and physical Model Career Centres.',
    financialBenefit: 'Zero-fee job matchmaking + Free career counseling + Placement drives + Skill linkages',
    keyObjectives: [
      'Bridge the gap between job seekers and employers with verified, scam-free job listings',
      'Provide aptitude assessment and career counselling to guide youth toward high-demand sectors',
      'Organize regional Rozgar Melas (job fairs) for instant on-spot hiring'
    ],
    eligibilityRules: {
      minAge: 14,
      occupations: ['Unemployed', 'Job Seeker', 'Apprentice', 'Freelancer'],
      notes: 'Any citizen seeking employment, skill development, or career transition is eligible to register without fee.'
    },
    eligibilityHighlights: [
      'Indian citizen aged 14 years and above',
      'Open to all educational backgrounds: 8th pass, 10th pass, graduates, engineers, and professionals',
      '100% free government service: no agency charges or application fees'
    ],
    exclusions: [
      'No formal exclusions: open to all bona fide job seekers'
    ],
    requiredDocuments: [
      {
        id: 'doc-ncs-aadhaar',
        name: 'Aadhaar Card / Government Identity Proof',
        category: 'identity',
        purpose: 'NCS ID creation and profile authentication',
        citizenTip: 'Entering your Aadhaar gives you a verified job seeker badge on the portal.',
        isMandatory: true
      },
      {
        id: 'doc-ncs-resume',
        name: 'Educational Certificates & Curriculum Vitae (Resume)',
        category: 'academic',
        purpose: 'Skill profiling and vacancy matching algorithms',
        citizenTip: 'The portal has an online resume builder that formats your qualifications automatically.',
        isMandatory: false
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register as Jobseeker on ncs.gov.in',
        description: 'Sign up with your mobile number, email, and basic qualification details to receive your NCS ID.',
        portalOrOffice: 'ncs.gov.in / UMANG App'
      },
      {
        stepNumber: 2,
        title: 'Build Verified Profile & Search Openings',
        description: 'Filter vacancies by sector, location, salary, and experience level. Apply directly with one click.',
        portalOrOffice: 'NCS Job Portal'
      },
      {
        stepNumber: 3,
        title: 'Participate in Model Career Centre Job Fairs',
        description: 'Attend local Rozgar Melas and walk-in interviews conducted by registered corporate and PSU recruiters.',
        portalOrOffice: 'District Model Career Centre'
      }
    ],
    officialSource: {
      name: 'Ministry of Labour and Employment, Government of India',
      url: 'https://ncs.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Labour and Employment',
      helpline: '1800-425-1514',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national career exchange active with over 1 crore registered jobseekers.'
    }
  },
  {
    id: 'pmkvy-skill-india',
    name: 'PMKVY 4.0 (Pradhan Mantri Kaushal Vikas Yojana)',
    hindiName: 'प्रधानमंत्री कौशल विकास योजना 4.0',
    teluguName: 'ప్రధాన మంత్రి కౌశల్ వికాస్ యోజన',
    tamilName: 'பிரதமர் கௌசல் விகாஸ் யோஜனா',
    tagline: 'Free industry-aligned skill training with NSQF certification, assessment grant, and placement support.',
    category: 'unemployment-skills',
    categoryLabel: 'Unemployment & Skill Training',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'youth',
    beneficiaries: ['School/College Dropouts', 'Unemployed Youth', 'Informal Workers seeking upskilling'],
    shortSummary: 'Flagship skill certification scheme of the Ministry of Skill Development offering free industry-curated short-term training (STT) and Recognition of Prior Learning (RPL) in modern domains like AI, robotics, drones, electronics, and green jobs.',
    fullDescription: 'PMKVY 4.0 emphasizes on-the-job training, industry partnership, and alignment of courses with emerging market demands. Training fees and assessment costs are 100% funded by the Government through the National Skill Development Corporation (NSDC). Certified candidates receive an NSQF certificate and post-training placement guidance.',
    financialBenefit: '100% Free Training + Free Government Certification + Stipend during On-Job Training',
    keyObjectives: [
      'Equip Indian youth with globally benchmarked industrial and vocational competencies',
      'Provide formal certification to existing experienced workers through Recognition of Prior Learning (RPL)',
      'Train over 40 lakh youth in future-ready industry 4.0 trades'
    ],
    eligibilityRules: {
      minAge: 15,
      maxAge: 45,
      occupations: ['Unemployed', 'School Dropout', 'College Dropout', 'Informal Worker'],
      notes: 'Must be an Indian citizen with Aadhaar and valid bank account. Prior academic qualification requirements vary by training course.'
    },
    eligibilityHighlights: [
      'Indian national aged 15 to 45 years',
      'School dropouts, college dropouts, or unemployed candidates looking for employment skills',
      'Possess a bank account linked to Aadhaar'
    ],
    exclusions: [
      'Candidates already enrolled in full-time government-funded university degree programs',
      'Candidates who have already completed the same job role certification under PMKVY'
    ],
    requiredDocuments: [
      {
        id: 'doc-pmkvy-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Biometric AEBAS attendance and certification records',
        citizenTip: 'Attendance during training is biometric-verified daily.',
        isMandatory: true
      },
      {
        id: 'doc-pmkvy-edu',
        name: 'Highest Educational Qualification Certificate',
        category: 'academic',
        purpose: 'Meeting prerequisite entry criteria for specific technical job roles',
        citizenTip: 'Courses exist for 8th pass, 10th pass, 12th pass, and ITI graduates.',
        isMandatory: true
      },
      {
        id: 'doc-pmkvy-bank',
        name: 'Bank Passbook Copy',
        category: 'bank',
        purpose: 'Stipend disbursement and direct financial rewards',
        citizenTip: 'Check that bank account is active with IFSC code.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Explore Job Roles on Skill India Digital Portal',
        description: 'Browse certified courses on skillindiadigital.gov.in across sectors like IT, healthcare, automotive, and solar.',
        portalOrOffice: 'skillindiadigital.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Enroll at Accredited Pradhan Mantri Kaushal Kendra (PMKK)',
        description: 'Visit your nearest district PMKK centre for physical counseling and batch allotment.',
        portalOrOffice: 'District PMKK Centre'
      },
      {
        stepNumber: 3,
        title: 'Complete Training, Assessment & Receive NSQF Certificate',
        description: 'Complete hands-on curriculum, pass the third-party Sector Skill Council assessment, and receive job placement assistance.',
        portalOrOffice: 'Training Centre / Sector Skill Council'
      }
    ],
    officialSource: {
      name: 'Ministry of Skill Development and Entrepreneurship, GoI',
      url: 'https://www.skillindiadigital.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Skill Development and Entrepreneurship',
      helpline: '088000-55555 / 1800-123-9626',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Skill India Digital platform active.'
    }
  },

  // =========================================================================
  // 6. EMPLOYED PEOPLE & WORKERS
  // =========================================================================
  {
    id: 'eshram-worker-card',
    name: 'e-Shram Portal (Unorganized Workers National Database & Card)',
    hindiName: 'ई-श्रम पोर्टल (असंगठित कर्मकार राष्ट्रीय डेटाबेस)',
    teluguName: 'ఈ-శ్రమ్ పోర్టల్ (అసంఘటిత కార్మికుల కార్డు)',
    tamilName: 'இ-ஷ்ராம் தேசிய அமைப்புசாரா தொழிலாளர் அட்டை',
    tagline: '12-digit Universal Account Number (UAN) with free ₹2 Lakh accidental insurance under PMSBY.',
    category: 'workers-social-security',
    categoryLabel: 'Workers & Social Security',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'worker',
    beneficiaries: ['Unorganized Workers', 'Construction Laborers', 'Gig & Platform Workers', 'Domestic Helpers'],
    shortSummary: 'National database registering India\'s 30+ crore unorganized workers with a unique 12-digit e-Shram UAN card, providing free accidental insurance coverage of ₹2 Lakh (death/permanent disability) and seamless social security portability across states.',
    fullDescription: 'The e-Shram portal was developed by the Ministry of Labour and Employment for creating a national database of unorganized workers seeded with Aadhaar. It acts as a single-window delivery conduit for central and state social security benefits, emergency cash transfers during crises, and skill upgrades.',
    financialBenefit: 'Free ₹2 Lakh accidental insurance cover + 12-digit portable worker identity card',
    keyObjectives: [
      'Create a comprehensive national database of unorganized and migrant workers',
      'Extend social security benefits and accidental life insurance to vulnerable daily wage earners',
      'Facilitate seamless interstate portability of welfare entitlements for migrant laborers'
    ],
    eligibilityRules: {
      minAge: 16,
      maxAge: 59,
      occupations: ['Unorganized Worker', 'Construction Laborer', 'Domestic Worker', 'Agricultural Laborer', 'Street Vendor', 'Driver', 'Gig Worker'],
      notes: 'Must not be a member of EPFO (Provident Fund) or ESIC (Employees State Insurance). Must not be an income-tax payer.'
    },
    eligibilityHighlights: [
      'Unorganized worker aged between 16 and 59 years',
      'Not paying Income Tax in current or preceding assessment years',
      'Not registered under organized worker provident funds (EPFO) or ESIC'
    ],
    exclusions: [
      'Organized sector employees covered by EPFO or ESIC',
      'Persons aged below 16 or above 59 years',
      'Income tax payers'
    ],
    requiredDocuments: [
      {
        id: 'doc-eshram-aadhaar',
        name: 'Aadhaar Card with Linked Mobile Number',
        category: 'identity',
        purpose: 'OTP authentication and creation of universal worker profile',
        citizenTip: 'If mobile is not linked, visit nearest CSC for biometric fingerprint registration.',
        isMandatory: true
      },
      {
        id: 'doc-eshram-bank',
        name: 'Active Savings Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct Benefit Transfer credit destination for future social security schemes',
        citizenTip: 'Bank account must be seeded with Aadhaar for automatic DBT routing.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Self-Registration on eshram.gov.in',
        description: 'Navigate to eshram.gov.in, enter Aadhaar and mobile number, and authenticate via OTP.',
        portalOrOffice: 'eshram.gov.in / CSC / State Seva Kendra'
      },
      {
        stepNumber: 2,
        title: 'Enter Occupation, Skill & Address Details',
        description: 'Select your primary occupation from the National Classification of Occupations (NCO) list.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Download and Print 12-Digit e-Shram UAN Card',
        description: 'Immediately download your digital e-Shram card containing your unique 12-digit UAN number.',
        portalOrOffice: 'Instant Download / CSC'
      }
    ],
    officialSource: {
      name: 'Ministry of Labour and Employment, Government of India',
      url: 'https://eshram.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Labour and Employment',
      helpline: '14434',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national unorganized worker registry with over 30 crore registrations.'
    }
  },
  {
    id: 'pmsym-worker-pension',
    name: 'PMSYM (Pradhan Mantri Shram Yogi Maan-dhan Pension)',
    hindiName: 'प्रधानमंत्री श्रम योगी मान-धन योजना',
    teluguName: 'ప్రధాన మంత్రి శ్రమ యోగి మాన్-ధన్ పెన్షన్',
    tamilName: 'பிரதமர் ஷ்ரம் யோகி மான்-தன் ஓய்வூதியம்',
    tagline: 'Guaranteed monthly pension of ₹3,000 for unorganized workers with 50% government co-contribution.',
    category: 'workers-social-security',
    categoryLabel: 'Workers & Social Security',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'worker',
    beneficiaries: ['Unorganized Workers', 'Cobblers', 'Rickshaw Pullers', 'Domestic Workers', 'Washermen'],
    shortSummary: 'Voluntary and contributory pension scheme guaranteeing a fixed monthly pension of ₹3,000 after attaining the age of 60 to unorganized workers whose monthly income is ₹15,000 or less, with equal 50:50 matching contribution by the Central Government.',
    fullDescription: 'PMSYM is managed by the Life Insurance Corporation of India (LIC) and the Ministry of Labour and Employment. The subscriber contributes an affordable amount between ₹55 and ₹200 per month (depending on entry age from 18 to 40), and the Central Government deposits an exact equal matching contribution into the pension account.',
    financialBenefit: 'Assured ₹3,000 / month lifetime pension from age 60 + 50% family pension for spouse',
    keyObjectives: [
      'Provide guaranteed old-age social security to unorganized workers with modest incomes',
      'Double worker savings through 100% matching government co-contribution',
      'Ensure family pension (50%) to surviving spouse in case of beneficiary demise'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 40,
      maxIncome: 180000, // ₹15,000 / month = ₹1,80,000 / year
      occupations: ['Unorganized Worker', 'Street Vendor', 'Head Loader', 'Domestic Worker', 'Agriculture Laborer'],
      notes: 'Monthly income must be ₹15,000 or less. Must not be a member of EPFO, ESIC, or NPS (government funded), and not an income tax payer.'
    },
    eligibilityHighlights: [
      'Unorganized worker aged between 18 and 40 years',
      'Monthly income of ₹15,000 or less',
      'Possess active savings bank account or Jan Dhan account with auto-debit facility'
    ],
    exclusions: [
      'Workers covered under EPFO, ESIC, or NPS',
      'Income-tax payers',
      'Persons who have exceeded 40 years of age at entry'
    ],
    requiredDocuments: [
      {
        id: 'doc-pmsym-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Identity verification and unique pension account linkage',
        citizenTip: 'Check that date of birth matches exactly across Aadhaar and bank records.',
        isMandatory: true
      },
      {
        id: 'doc-pmsym-bank',
        name: 'Savings Bank Account Passbook / Cheque',
        category: 'bank',
        purpose: 'Monthly auto-debit mandate setup and pension disbursement',
        citizenTip: 'First contribution is paid in cash at CSC; subsequent monthly installments auto-debit from bank.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Visit Nearest CSC (Common Service Centre)',
        description: 'Walk in to any village or urban CSC with your Aadhaar and bank passbook.',
        portalOrOffice: 'CSC / maandhan.in'
      },
      {
        stepNumber: 2,
        title: 'Calculate Contribution & Setup Auto-Debit',
        description: 'Monthly contribution (₹55 at age 18 up to ₹200 at age 40) is calculated and bank auto-debit mandate generated.',
        portalOrOffice: 'VLE Portal / CSC'
      },
      {
        stepNumber: 3,
        title: 'Receive Shram Yogi Pension Card (SPAN)',
        description: 'Initial contribution is paid and your unique Shram Yogi Pension Card is issued on the spot.',
        portalOrOffice: 'CSC / LIC'
      }
    ],
    officialSource: {
      name: 'Ministry of Labour and Employment & LIC of India',
      url: 'https://maandhan.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Labour and Employment',
      helpline: '1800-267-6888',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official contributory pension portal administered via LIC.'
    }
  },

  // =========================================================================
  // 7. WOMEN & GIRL CHILDREN
  // =========================================================================
  {
    id: 'sukanya-samriddhi',
    name: 'Sukanya Samriddhi Yojana (SSY)',
    hindiName: 'सुकन्या समृद्धि योजना',
    teluguName: 'సుకున్య సమృద్ధి యోజన',
    tamilName: 'சுகன்யா சம்ரிதி திட்டம் (செல்வ மகள் சேமிப்பு)',
    tagline: 'High-interest (8.2%) tax-free government savings account for the education and marriage of girl children.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'parent',
    beneficiaries: ['Girl Children under 10 years', 'Parents & Legal Guardians'],
    shortSummary: 'Small-savings scheme for girl children below 10 years of age, offering an 8.2% sovereign-backed tax-free interest rate, deposit flexibility from ₹250 to ₹1.5 Lakh per year, and complete tax exemption under Section 80C (EEE status).',
    fullDescription: 'Sukanya Samriddhi Yojana was launched under the Beti Bachao Beti Padhao campaign. Accounts can be opened at any Post Office or authorized commercial bank branch. Deposits are made for 15 years from account opening, and the account matures after 21 years with full accumulated principal and compounding interest paid to the girl child.',
    financialBenefit: '8.2% compounding tax-free interest (Triple E: Exempt-Exempt-Exempt tax status)',
    keyObjectives: [
      'Encourage parents to build a dedicated financial fund for their daughters higher education and marriage',
      'Provide the highest interest rate among all small-savings instruments backed by sovereign guarantee',
      'Promote financial independence for young women upon turning 18 or 21'
    ],
    eligibilityRules: {
      minAge: 0,
      maxAge: 10,
      targetGender: 'female',
      notes: 'Account must be opened in the name of a girl child below 10 years of age. Maximum two accounts permitted per family (three in case of twins/triplets).'
    },
    eligibilityHighlights: [
      'Girl child who is an Indian resident and aged below 10 years at time of account opening',
      'Opened by natural or legal guardian on behalf of the child',
      'Maximum two accounts per family (allowed for third in case of multiple births in first/second order)'
    ],
    exclusions: [
      'Girl children who have already attained 10 years of age at application',
      'Non-resident Indians (NRIs) or foreign citizens'
    ],
    requiredDocuments: [
      {
        id: 'doc-ssy-birth',
        name: 'Girl Child Birth Certificate',
        category: 'identity',
        purpose: 'Verification of date of birth and age eligibility (< 10 years)',
        citizenTip: 'Obtain from municipal registrar or village panchayat office.',
        isMandatory: true
      },
      {
        id: 'doc-ssy-guardian',
        name: 'Guardian Identity and Address Proof (Aadhaar / PAN)',
        category: 'identity',
        purpose: 'KYC of the parent/legal guardian operating the account',
        citizenTip: 'PAN card of parent is required for tax deduction claim under 80C.',
        isMandatory: true
      },
      {
        id: 'doc-ssy-photo',
        name: 'Passport Size Photographs of Child and Guardian',
        category: 'other',
        purpose: 'Bank / Post Office account opening form records',
        citizenTip: 'Take two recent passport photos of both guardian and child.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Collect SSY Account Opening Form',
        description: 'Obtain Form-1 from any Post Office branch or nationalized/private commercial bank (e.g. SBI, PNB, Canara).',
        portalOrOffice: 'Post Office / Public Sector Bank'
      },
      {
        stepNumber: 2,
        title: 'Submit KYC and Initial Deposit',
        description: 'Submit child birth certificate, guardian KYC documents, and initial deposit (minimum ₹250).',
        portalOrOffice: 'Bank Branch / Post Office Counter'
      },
      {
        stepNumber: 3,
        title: 'Receive SSY Passbook',
        description: 'Collect your dedicated passbook displaying the account number, child name, and deposit schedule.',
        portalOrOffice: 'Post Office / Bank Branch'
      }
    ],
    officialSource: {
      name: 'Department of Economic Affairs, Ministry of Finance & India Post',
      url: 'https://www.indiapost.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Finance',
      helpline: '1800-266-6868',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Interest rate verified at 8.2% per annum compounding annually.'
    }
  },
  {
    id: 'pmmvy',
    name: 'PMMVY (Pradhan Mantri Matru Vandana Yojana)',
    hindiName: 'प्रधानमंत्री मातृ वंदना योजना',
    teluguName: 'ప్రధాన మంత్రి మాతృ వందన యోజన',
    tamilName: 'பிரதமர் மாத்ரு வந்தனா திட்டம்',
    tagline: 'Maternity cash incentive of ₹5,000 for first child and ₹6,000 for second girl child.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'Central & State Partnership',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'parent',
    beneficiaries: ['Pregnant Women', 'Lactating Mothers', 'Newborn Girl Children'],
    shortSummary: 'Direct benefit transfer maternity grant of ₹5,000 in two installments for the first living child, and ₹6,000 in a single installment upon the birth of a second girl child, compensating for wage loss and encouraging institutional delivery and vaccination.',
    fullDescription: 'Under the revamped Mission Shakti framework, PMMVY provides financial support to pregnant women and lactating mothers for improved health and nutrition behaviour. The scheme incentivizes early registration of pregnancy, antenatal check-ups (ANC), institutional delivery, and full initial immunization of the child.',
    financialBenefit: '₹5,000 (1st child in 2 installments) + ₹6,000 (2nd girl child upon birth)',
    keyObjectives: [
      'Provide cash compensation for wage loss during pregnancy so women can take adequate rest before and after delivery',
      'Improve health seeking behavior, institutional deliveries, and complete infant immunization',
      'Discourage female feticide by awarding an enhanced grant of ₹6,000 for birth of a second girl child'
    ],
    eligibilityRules: {
      minAge: 19,
      targetGender: 'female',
      notes: 'Eligible for pregnant women and lactating mothers for their first living child and for a second child if the newborn is a girl. Mother must have family income < ₹8 Lakh or belong to designated socially vulnerable groups (SC/ST/BPL/MGNREGA/eShram).'
    },
    eligibilityHighlights: [
      'Pregnant women aged 19 years or older',
      'First living child: ₹5,000 in two installments (₹3,000 upon pregnancy registration & 1 ANC; ₹2,000 upon birth registration & vaccination)',
      'Second child: ₹6,000 in single installment if the second child born is female',
      'Beneficiaries must belong to socially or economically vulnerable sections (e-Shram, BPL, SC/ST, disability, or income < ₹8 Lakh)'
    ],
    exclusions: [
      'Women in regular employment with Central or State Governments or Public Sector Undertakings',
      'Women who are in receipt of similar maternity benefits under any other statutory law'
    ],
    requiredDocuments: [
      {
        id: 'doc-mcp-card',
        name: 'Mother-Child Protection (MCP) Card',
        category: 'medical',
        purpose: 'Verification of early registration, ANC checkups, and child immunization',
        citizenTip: 'Obtain from your local Anganwadi Worker or ASHA within 150 days of LMP (Last Menstrual Period).',
        isMandatory: true
      },
      {
        id: 'doc-aadhaar-pmmvy',
        name: 'Aadhaar Card (Mother & Husband)',
        category: 'identity',
        purpose: 'Identity verification and duplicate registration prevention',
        citizenTip: 'Mother bank account must be seeded with Aadhaar on NPCI mapping.',
        isMandatory: true
      },
      {
        id: 'doc-birth-girl',
        name: 'Child Birth Registration Certificate',
        category: 'identity',
        purpose: 'Proof of child birth and gender verification for second girl child grant',
        citizenTip: 'Must mention institutional hospital delivery details.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Early Registration at Anganwadi / Health Centre',
        description: 'Register pregnancy at local Anganwadi centre or government primary health centre within 150 days of LMP.',
        portalOrOffice: 'Anganwadi Centre / ASHA Worker'
      },
      {
        stepNumber: 2,
        title: 'Apply Online via PMMVY Portal (pmmvy.wcd.gov.in)',
        description: 'Anganwadi worker or mother applies directly on pmmvy.wcd.gov.in with MCP card and Aadhaar details.',
        portalOrOffice: 'pmmvy.wcd.gov.in'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer (DBT)',
        description: 'Installments are verified by Child Development Project Officer (CDPO) and credited via PFMS.',
        portalOrOffice: 'CDPO Office / PFMS'
      }
    ],
    officialSource: {
      name: 'Ministry of Women and Child Development, Government of India',
      url: 'https://pmmvy.wcd.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Women and Child Development',
      helpline: '104 / 011-23382393',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official central maternity portal active with direct citizen login.'
    }
  },

  // =========================================================================
  // 8. SENIOR CITIZENS & ELDERLY
  // =========================================================================
  {
    id: 'pmjay-senior-70',
    name: 'Ayushman Bharat PM-JAY Senior Citizen (70+) Universal Health Shield',
    hindiName: 'आयुष्मान भारत वरिष्ठ नागरिक (70+) सार्वभौमिक स्वास्थ्य सुरक्षा',
    teluguName: 'ఆయుష్మాన్ భారత్ సీనియర్ సిటిజన్ (70+) సార్వత్రిక ఆరోగ్య కవరేజీ',
    tamilName: 'ஆயுஷ்மான் பாரத் முதியோர் (70+) மருத்துவக் காப்பீடு',
    tagline: 'Dedicated ₹5 Lakh free annual cashless health cover for ALL senior citizens aged 70+, regardless of income.',
    category: 'seniors-elderly',
    categoryLabel: 'Senior Citizens & Healthcare',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 70 and above', 'All Income Groups', 'Elderly Couples'],
    shortSummary: 'Universal health insurance expansion providing a dedicated, separate top-up cover of ₹5 Lakh per year for secondary and tertiary cashless hospitalisation to every Indian citizen aged 70 and older, irrespective of socioeconomic status or family income.',
    fullDescription: 'Under the historic Ayushman Bharat expansion approved by the Union Cabinet, all senior citizens aged 70 years and above are entitled to an Ayushman Vaya Vandana Card. If their family is already covered under Ayushman Bharat, the senior receives an additional distinct ₹5 Lakh cover exclusively for themselves that does not need to be shared with family members.',
    financialBenefit: '₹5,00,000 / year cashless hospitalisation cover per senior family (free dedicated shield)',
    keyObjectives: [
      'Provide comprehensive healthcare security for the elderly against catastrophic hospitalization costs',
      'Universal eligibility: eliminate all income, wealth, ration card, and economic criteria barriers for age 70+',
      'Deliver dedicated separate ₹5 Lakh envelope unconstrained by remaining family cover'
    ],
    eligibilityRules: {
      minAge: 70,
      notes: 'Age 70 years or above is the sole eligibility criterion as recorded on the Aadhaar Card. No income limits, caste quotas, or ration card requirements.'
    },
    eligibilityHighlights: [
      'Indian citizen aged 70 years and above (as verified by date of birth on Aadhaar card)',
      'Available to all income brackets: rich, middle-class, and low-income seniors alike',
      'Those holding private health insurance or ESIC can also avail this benefit simultaneously',
      'Beneficiaries of other central schemes (CGHS/ECHS/CAPF) may choose to retain existing or port to PM-JAY'
    ],
    exclusions: [
      'Individuals who have not attained 70 years of age',
      'Citizens already actively enrolled and utilizing other government schemes like CGHS/ECHS who choose not to opt in'
    ],
    requiredDocuments: [
      {
        id: 'doc-vaya-aadhaar',
        name: 'Aadhaar Card (sole required document)',
        category: 'identity',
        purpose: 'Verification of age (70+) and biometric e-KYC',
        citizenTip: 'Check that your full date of birth (DD/MM/YYYY) is recorded correctly on your Aadhaar card.',
        isMandatory: true
      },
      {
        id: 'doc-vaya-mobile',
        name: 'Active Mobile Number for OTP',
        category: 'other',
        purpose: 'Receiving OTP for instant self-enrolment on the beneficiary portal',
        citizenTip: 'Any family member mobile number can be used for OTP during self-registration.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Open Beneficiary Portal or Ayushman App',
        description: 'Visit beneficiary.nha.gov.in or download the Ayushman App on your smartphone.',
        portalOrOffice: 'beneficiary.nha.gov.in / Ayushman App'
      },
      {
        stepNumber: 2,
        title: 'Select "Senior 70+" and Complete Aadhaar eKYC',
        description: 'Input your Aadhaar number, authenticate using face authentication or mobile OTP, and capture live photo.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Instant Download of Ayushman Vaya Vandana Card',
        description: 'Upon verification, download the golden Ayushman Vaya Vandana Card instantly for cashless admission.',
        portalOrOffice: 'Instant Download / Hospital Ayushman Mitra'
      }
    ],
    officialSource: {
      name: 'National Health Authority (NHA), Ministry of Health & Family Welfare, GoI',
      url: 'https://beneficiary.nha.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Health and Family Welfare',
      helpline: '14555',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Universal 70+ expansion operational. Validated via NHA beneficiary portal.'
    }
  },
  {
    id: 'ignoaps-pension',
    name: 'IGNOAPS (Indira Gandhi National Old Age Pension Scheme)',
    hindiName: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना',
    teluguName: 'ఇందిరా గాంధీ జాతీయ వృద్ధాప్య పింఛను పథకం',
    tamilName: 'இந்திரா காந்தி தேசிய முதியோர் ஓய்வூதியத் திட்டம்',
    tagline: 'Monthly pension for senior citizens aged 60+ belonging to BPL households.',
    category: 'seniors-elderly',
    categoryLabel: 'Senior Citizens & Healthcare',
    geographicScope: 'Central & State Partnership',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60+', 'BPL Elderly', 'Destitute Seniors'],
    shortSummary: 'Centrally sponsored non-contributory pension under the National Social Assistance Programme (NSAP) providing regular monthly cash transfers to destitute elderly citizens aged 60 years and above from Below Poverty Line families.',
    fullDescription: 'IGNOAPS is the primary safety net for India\'s elderly poor. The Central Government provides monthly assistance of ₹200/month (ages 60-79) and ₹500/month (ages 80+), which states significantly supplement (e.g., Andhra Pradesh provides ₹4,000/month under NTR Bharosa, Delhi provides ₹2,000-₹2,500/month).',
    financialBenefit: '₹200 - ₹500 / month Central Component + State Top-Up (Total ₹1,000 - ₹4,000/mo depending on State)',
    keyObjectives: [
      'Provide basic financial security to prevent destitution among elderly BPL citizens',
      'Assure recurring monthly livelihood support directly into the senior citizen bank account',
      'Support families in caring for aging parents without financial strain'
    ],
    eligibilityRules: {
      minAge: 60,
      isBPLRequired: true,
      notes: 'Applicant must be 60 years or older and belong to a household listed below the official poverty line (BPL).'
    },
    eligibilityHighlights: [
      'Attained age of 60 years or older',
      'Belongs to Below Poverty Line (BPL) household according to criteria prescribed by GoI/State',
      'Indian citizen residing in the applying state'
    ],
    exclusions: [
      'Individuals from non-BPL families or income tax paying households',
      'Retired employees in receipt of regular government, PSU, or military pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-age-proof',
        name: 'Age Proof (Aadhaar / Voter ID / Birth Certificate)',
        category: 'identity',
        purpose: 'Verification of age 60+ milestone',
        citizenTip: 'Aadhaar card date of birth is the primary standard accepted.',
        isMandatory: true
      },
      {
        id: 'doc-bpl-proof',
        name: 'BPL Card / Priority Food Security Card / SECC Data Reference',
        category: 'income',
        purpose: 'Proof of economic deprivation and BPL status',
        citizenTip: 'Check with your Panchayat Secretary or Ward Councillor for BPL roster registration.',
        isMandatory: true
      },
      {
        id: 'doc-bank-pension',
        name: 'Bank / Post Office Account Passbook',
        category: 'bank',
        purpose: 'Monthly pension transfer destination',
        citizenTip: 'Single account in pensioner name is preferred over joint accounts.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Local Authority',
        description: 'Submit application at Gram Panchayat office, Block Development Office (BDO), or Urban Local Body / e-District portal.',
        portalOrOffice: 'BDO Office / Municipality / nsap.nic.in'
      },
      {
        stepNumber: 2,
        title: 'Physical Inquiry and Verification',
        description: 'Panchayat/Revenue inspector inspects living status and BPL criteria adherence.',
        portalOrOffice: 'Block Welfare Officer'
      },
      {
        stepNumber: 3,
        title: 'Sanction and Monthly Credit',
        description: 'District Collector / Welfare department sanctions pension order with monthly DBT credit.',
        portalOrOffice: 'Public Financial Management System'
      }
    ],
    officialSource: {
      name: 'National Social Assistance Programme (NSAP), Ministry of Rural Development, GoI',
      url: 'https://nsap.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Rural Development',
      helpline: '1800-111-555',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national pension register. Base central component topped up by states.'
    }
  },

  // =========================================================================
  // 9. HEALTHCARE & ESSENTIAL SERVICES
  // =========================================================================
  {
    id: 'pm-jay',
    name: 'Ayushman Bharat (PM-JAY)',
    hindiName: 'आयुष्मान भारत (पीएम-जय)',
    teluguName: 'ఆయుష్మాన్ భారత్ (పీఎం-జేఏవై)',
    tamilName: 'ஆயுஷ்மான் பாரத் (பிஎம்-ஜேஏஒய்)',
    tagline: 'Cashless hospitalisation coverage of ₹5 Lakh per family per year for secondary and tertiary care.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'Central & State Partnership',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'all',
    beneficiaries: ['Bottom 40% Vulnerable Families', 'Rural Deprived Households', 'Occupational Workers'],
    shortSummary: 'World\'s largest public health assurance scheme, providing completely cashless treatment up to ₹5 Lakh per family annually across 29,000+ empanelled government and private hospitals.',
    fullDescription: 'Ayushman Bharat Pradhan Mantri Jan Arogya Yojana (AB PM-JAY) provides health cover to over 12 crore poor and vulnerable families (approximately 55 crore beneficiaries). It covers up to 3 days of pre-hospitalization and 15 days of post-hospitalization expenses, diagnostics, medicines, surgeries, ICU charges, and day-care procedures without pre-existing condition exclusions.',
    financialBenefit: '₹5,00,000 / family / year cashless cover across 1,949 medical packages',
    keyObjectives: [
      'Eliminate catastrophic out-of-pocket health expenditures that push 6 crore Indians into poverty each year',
      'Provide paperless, cashless access to tertiary healthcare in accredited private and public hospitals',
      'Cover critical ailments including cardiovascular surgery, cancer chemotherapy, neurosurgery, and transplants'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      notes: 'Eligible based on SECC 2011 deprivation criteria (D1-D7), active Priority Ration Card (in converged states), or age 70+.'
    },
    eligibilityHighlights: [
      'Households listed in SECC 2011 rural deprivation categories (D1, D2, D3, D4, D5, D7) or urban occupational categories',
      'Families holding NFSA Priority Ration Cards in states converged with PM-JAY',
      'No cap on family size, age, or gender',
      'Pre-existing conditions covered from day one'
    ],
    exclusions: [
      'Families owning motorized 2/3/4 wheelers or mechanized agricultural equipment',
      'Households with any member in regular government employment',
      'Families paying income tax or professional tax'
    ],
    requiredDocuments: [
      {
        id: 'doc-aadhaar-pmjay',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Biometric identity matching at hospital Ayushman Kiosk',
        citizenTip: 'Carry original Aadhaar to the hospital emergency or reception desk.',
        isMandatory: true
      },
      {
        id: 'doc-ration-pmjay',
        name: 'Ration Card / PM-JAY Family Letter',
        category: 'income',
        purpose: 'Family composition and beneficiary enumeration check',
        citizenTip: 'Check your family name beforehand on beneficiary.nha.gov.in.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Family Eligibility Online',
        description: 'Visit beneficiary.nha.gov.in, enter mobile number, and search by Aadhaar, Ration Card, or Family ID.',
        portalOrOffice: 'beneficiary.nha.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Complete e-KYC and Generate Ayushman Card',
        description: 'Complete OTP or facial recognition authentication to download your PVC Ayushman Card.',
        portalOrOffice: 'Portal or CSC'
      },
      {
        stepNumber: 3,
        title: 'Avail Cashless Hospitalization',
        description: 'Walk in to any empanelled public or private hospital and present card to the Ayushman Mitra desk.',
        portalOrOffice: 'Empanelled Hospital Kiosk'
      }
    ],
    officialSource: {
      name: 'National Health Authority (NHA), Ministry of Health & Family Welfare, GoI',
      url: 'https://beneficiary.nha.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Health and Family Welfare',
      helpline: '14555',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official NHA portal active. All empanelled hospitals searchable online.'
    }
  },
  {
    id: 'ap-ntr-aarogyasri',
    name: 'Dr. NTR Aarogyasri Scheme (Andhra Pradesh Universal Health Scheme)',
    hindiName: 'डॉ. एनटीआर आरोग्यश्री योजना (आंध्र प्रदेश)',
    teluguName: 'డాక్టర్ ఎన్టీఆర్ ఆరోగ్యశ్రీ పథకం (ఆంధ్రప్రదేశ్)',
    tamilName: 'டாக்டர் என்டிஆர் ஆரோக்கியஸ்ரீ திட்டம் (ஆந்திரா)',
    tagline: 'Comprehensive cashless health insurance up to ₹25 Lakhs per family per year in empanelled hospitals.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Andhra Pradesh)',
    stateApplicability: 'Andhra Pradesh',
    isCentral: false,
    lifeStage: 'all',
    beneficiaries: ['White Ration Card Holders in AP', 'Low & Middle Income Families in AP', 'Chronic Patients'],
    shortSummary: 'Pioneering health insurance scheme of Andhra Pradesh providing free cashless treatment up to an unprecedented ₹25 Lakhs per family per year covering 3,257+ medical and surgical procedures in over 2,200 empanelled network hospitals across AP and major metro cities.',
    fullDescription: 'Dr. NTR Aarogyasri is the flagship healthcare scheme of Andhra Pradesh administered by the Dr. NTR Aarogyasri Health Care Trust. It covers end-to-end medical expenses from consultation, diagnostics, hospitalization, surgery, and post-operative follow-up medications, with dedicated Aarogya Mithras positioned in every hospital to facilitate cashless entry.',
    financialBenefit: 'Up to ₹25,00,000 / family / year cashless treatment covering 3,257+ procedures',
    keyObjectives: [
      'Provide world-class catastrophic healthcare coverage up to ₹25 Lakhs without financial burden on families',
      'Cover 3,257 high-end medical procedures including organ transplants, cancer treatment, and robotic surgery',
      'Station 24/7 dedicated Aarogya Mithra assistants at hospital front desks to eliminate paperwork for patients'
    ],
    eligibilityRules: {
      stateResidence: 'Andhra Pradesh',
      isBPLRequired: true,
      notes: 'Must be a resident of Andhra Pradesh holding a valid White Ration Card (BPL card) or Aarogyasri health card with annual family income up to ₹5 Lakh.'
    },
    eligibilityHighlights: [
      'All families holding an active White Rice Card in Andhra Pradesh',
      'Families whose annual income is less than or equal to ₹5.00 Lakh',
      'Covers 3,257 medical procedures across government and private network hospitals in AP, Hyderabad, Chennai, and Bengaluru',
      'Financial allowance provided during recuperation period (Aarogyasri Aasara)'
    ],
    exclusions: [
      'Families owning four-wheeler private cars (excluding commercial cabs and tractors)',
      'Regular government employees and state pensioners covered by separate employee health schemes (EHS)',
      'Households possessing more than 12 acres of wetland or 35 acres of dryland'
    ],
    requiredDocuments: [
      {
        id: 'doc-aarogyasri-card',
        name: 'Aarogyasri Health Card / AP White Rice Card',
        category: 'income',
        purpose: 'Direct verification of family entitlement at network hospital',
        citizenTip: 'Physical card or digital card on citizen mobile app is accepted instantly.',
        isMandatory: true
      },
      {
        id: 'doc-aarogyasri-aadhaar',
        name: 'Aadhaar Card of the Patient',
        category: 'identity',
        purpose: 'Patient biometric authentication and admission pre-authorization',
        citizenTip: 'Aarogya Mithra will complete pre-authorization within 1 hour of hospital admission.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Network Hospital Directory',
        description: 'Search empanelled private and government specialty hospitals on aarogyasri.ap.gov.in.',
        portalOrOffice: 'aarogyasri.ap.gov.in / 104 Helpline'
      },
      {
        stepNumber: 2,
        title: 'Report to Aarogya Mithra Help Desk',
        description: 'Visit the Aarogya Mithra counter at hospital reception with your White Ration Card or Aadhaar.',
        portalOrOffice: 'Hospital Aarogya Mithra Kiosk'
      },
      {
        stepNumber: 3,
        title: 'Undergo Cashless Treatment & Discharge Medication',
        description: 'Complete cashless treatment; post-discharge medications and doctor reviews are provided free of cost.',
        portalOrOffice: 'Network Hospital'
      }
    ],
    officialSource: {
      name: 'Dr. NTR Aarogyasri Health Care Trust, Government of Andhra Pradesh',
      url: 'https://aarogyasri.ap.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health, Medical and Family Welfare Department, Govt of AP',
      helpline: '104',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official AP state health portal. Coverage ceiling enhanced to ₹25 Lakhs per family.'
    }
  },

  // =========================================================================
  // 10. HOUSING & ESSENTIAL WELFARE
  // =========================================================================
  {
    id: 'pmay-g',
    name: 'PMAY-G (Pradhan Mantri Awaas Yojana - Gramin)',
    hindiName: 'प्रधानमंत्री आवास योजना - ग्रामीण',
    teluguName: 'ప్రధాన మంత్రి ఆవాస్ యోజన (గ్రామీణ)',
    tamilName: 'பிரதமர் அவாஸ் திட்டம் (ஊரகம்)',
    tagline: 'Financial grant of ₹1.20 to ₹1.30 Lakh for construction of pucca house with toilet and basic amenities.',
    category: 'housing',
    categoryLabel: 'Housing & Civic Amenities',
    geographicScope: 'Rural India',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'all',
    beneficiaries: ['Houseless Rural Families', 'Kutcha House Dwellers', 'BPL Households'],
    shortSummary: 'Central flagship rural housing mission providing direct grant of ₹1.20 Lakh (plain areas) and ₹1.30 Lakh (hilly/difficult areas) directly into beneficiary bank accounts in installments linked to geotagged construction progress.',
    fullDescription: 'PMAY-G aims to provide a pucca house with basic amenities (piped water via Jal Jeevan Mission, electricity under Saubhagya, LPG under Ujjwala, and toilet under Swachh Bharat) to all houseless households and those living in kutcha or dilapidated houses in rural areas.',
    financialBenefit: '₹1,20,000 (Plains) / ₹1,30,000 (Hills) grant + ₹27,000 MGNREGA wages + ₹12,000 toilet grant',
    keyObjectives: [
      'Eradicate rural housing deprivation by replacing unhygienic kutcha houses with durable pucca homes',
      'Empower women by mandating house ownership in the name of the female head or jointly with spouse',
      'Link construction verification with space technology and geotagged photographic audits'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      notes: 'Beneficiary must be registered in the Awaas+ 2018 survey or SECC 2011 deprivation list. Must not already own a pucca house anywhere in India.'
    },
    eligibilityHighlights: [
      'Families with no house or living in kutcha houses with zero, one, or two rooms',
      'Identified through Awaas+ verified survey approved by Gram Sabha',
      'Additional 90-95 person-days of unskilled labor wages under MGNREGA (approx ₹27,000)',
      '₹12,000 dedicated assistance for toilet construction under Swachh Bharat Mission'
    ],
    exclusions: [
      'Households possessing pucca roof and pucca wall houses',
      'Families owning motorized vehicles, mechanized agricultural machinery, or Kisan Credit Card with limit ≥ ₹50,000',
      'Households with any family member earning > ₹15,000/month or paying income tax'
    ],
    requiredDocuments: [
      {
        id: 'doc-aadhaar-pmay',
        name: 'Aadhaar Card (all family members)',
        category: 'identity',
        purpose: 'Unique beneficiary identification and duplicate elimination',
        citizenTip: 'Aadhaar consent form must be signed by all adult household members.',
        isMandatory: true
      },
      {
        id: 'doc-land-pmay',
        name: 'Land Possession Certificate / Patta / Gram Panchayat Allotment',
        category: 'land',
        purpose: 'Proof of legal possession of homestead plot for house construction',
        citizenTip: 'If landless, state governments provide homestead plots under state land allotment schemes.',
        isMandatory: true
      },
      {
        id: 'doc-bank-pmay',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Direct Benefit Transfer for 3 to 4 construction installment tranches',
        citizenTip: 'Geotagged photos of foundation, lintel, and roof levels trigger automatic installment releases.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Name in Gram Sabha Awaas+ Priority List',
        description: 'Verify your name and priority ranking on the Gram Sabha verified Awaas+ waitlist at your Panchayat office.',
        portalOrOffice: 'Gram Panchayat Office / pmayg.nic.in'
      },
      {
        stepNumber: 2,
        title: 'Geotagging of Existing House Site',
        description: 'Block housing official takes geotagged photographs of the existing kutcha plot using the AwaasApp mobile application.',
        portalOrOffice: 'AwaasApp / Block Housing Inspector'
      },
      {
        stepNumber: 3,
        title: 'Phased DBT Disbursement on Construction Progress',
        description: 'Installment 1 released at foundation; Installment 2 at lintel level; Installment 3 on roof completion.',
        portalOrOffice: 'PFMS / District Rural Development Agency'
      }
    ],
    officialSource: {
      name: 'Ministry of Rural Development, Government of India',
      url: 'https://pmayg.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Rural Development',
      helpline: '1800-11-6446',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national rural housing portal. Real-time geo-tracking active.'
    }
  },
  {
    id: 'pm-surya-ghar',
    name: 'PM Surya Ghar: Muft Bijli Yojana (Rooftop Solar Subsidy)',
    hindiName: 'पीएम सूर्य घर: मुफ्त बिजली योजना',
    teluguName: 'పీఎం సూర్య ఘర్: ఉచిత విద్యుత్ పథకం',
    tamilName: 'பிரதமர் சூர்ய கர்: இலவச மின்சாரத் திட்டம்',
    tagline: 'Up to ₹78,000 central subsidy to install rooftop solar, delivering up to 300 units free electricity monthly.',
    category: 'housing',
    categoryLabel: 'Housing & Civic Amenities',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'all',
    beneficiaries: ['Residential Households', 'Individual Homeowners', 'Housing Societies'],
    shortSummary: 'National clean-energy mission offering direct central subsidies of ₹30,000 for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW+ rooftop solar systems, enabling middle and low-income families to generate up to 300 units of free electricity every month.',
    fullDescription: 'PM Surya Ghar: Muft Bijli Yojana aims to power 1 crore households across India with rooftop solar panels. Beneficiaries enjoy substantial cuts in recurring electricity bills while selling surplus generated power back to local DISCOMs through net metering. Concessional collateral-free bank loans at approx 7% interest are provided to cover the remaining balance.',
    financialBenefit: 'Up to ₹78,000 Direct Central Subsidy + Up to 300 units free electricity per month',
    keyObjectives: [
      'Eliminate electricity bills for 1 crore households by promoting residential solar adoption',
      'Provide direct upfront DBT subsidies credited to consumer bank accounts within 30 days of installation',
      'Incentivize local grid resilience with net-metering payments for exported clean energy'
    ],
    eligibilityRules: {
      notes: 'Must be an Indian resident owning a suitable roof and an active domestic electricity connection with the local power utility (DISCOM).'
    },
    eligibilityHighlights: [
      'Residential homeowner with adequate roof space and active domestic electricity connection',
      'Direct subsidy of ₹30,000 for 1 kW system; ₹60,000 for 2 kW system; ₹78,000 for 3 kW and above systems',
      'Collateral-free low-interest bank loans available through nationalized banks at around 7% interest'
    ],
    exclusions: [
      'Commercial, industrial, or institutional electricity connections (subsidy exclusive to residential consumers)',
      'Households without legal roof ownership or roof access'
    ],
    requiredDocuments: [
      {
        id: 'doc-solar-bill',
        name: 'Recent Electricity Bill (last 6 months)',
        category: 'other',
        purpose: 'Proof of domestic consumer account number (CA number) with local DISCOM',
        citizenTip: 'Check consumer number matches your DISCOM electricity bill.',
        isMandatory: true
      },
      {
        id: 'doc-solar-aadhaar',
        name: 'Aadhaar Card of Electricity Connection Holder',
        category: 'identity',
        purpose: 'Identity matching with consumer record',
        citizenTip: 'Name on electricity bill should match Aadhaar.',
        isMandatory: true
      },
      {
        id: 'doc-solar-bank',
        name: 'Cancelled Cheque / Bank Passbook Copy',
        category: 'bank',
        purpose: 'Direct subsidy transfer within 30 days of inspection',
        citizenTip: 'Must belong to the electricity connection consumer.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register on National Portal (pmsuryaghar.gov.in)',
        description: 'Select your state, electricity distribution company (DISCOM), and enter your consumer account number.',
        portalOrOffice: 'pmsuryaghar.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Choose Registered Vendor and Install System',
        description: 'Select a registered solar vendor for site survey, net-meter application, and panel installation.',
        portalOrOffice: 'Registered Vendor / DISCOM'
      },
      {
        stepNumber: 3,
        title: 'DISCOM Inspection & Direct Subsidy Release',
        description: 'DISCOM installs net-meter, generates commissioning certificate, and central subsidy of up to ₹78,000 is credited via DBT.',
        portalOrOffice: 'Local DISCOM / Ministry of New and Renewable Energy'
      }
    ],
    officialSource: {
      name: 'Ministry of New and Renewable Energy, Government of India',
      url: 'https://pmsuryaghar.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of New and Renewable Energy',
      helpline: '15555 / 1800-180-3333',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national solar portal active with 1 crore household target.'
    }
  },
  {
    id: 'pmgkay-free-foodgrain',
    name: 'PMGKAY (Pradhan Mantri Garib Kalyan Anna Yojana / NFSA)',
    hindiName: 'प्रधानमंत्री गरीब कल्याण अन्न योजना (एनएफएसए)',
    teluguName: 'ప్రధాన మంత్రి గరీబ్ కళ్యాణ్ అన్న యోజన',
    tamilName: 'பிரதமர் கரீப் கல்யாண் அன்ன யோஜனா (ரேஷன் திட்டம்)',
    tagline: '5 kg free foodgrains per person per month under One Nation One Ration Card framework.',
    category: 'low-income-welfare',
    categoryLabel: 'Low-Income Welfare & Food Security',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'all',
    beneficiaries: ['Priority Household (PHH) Ration Holders', 'Antyodaya Anna Yojana (AAY) Families', 'Migrant Workers'],
    shortSummary: 'Universal food security scheme providing completely free foodgrains (5 kg per person per month for Priority Households; 35 kg per family per month for Antyodaya families) through 5.3 lakh Fair Price Shops across India, fully portable nationwide via One Nation One Ration Card (ONORC).',
    fullDescription: 'Under PMGKAY, extended through December 2028, the Central Government bears 100% of the food subsidy cost, eliminating all consumer co-payments for food grains. Beneficiaries receive free rice, wheat, and coarse grains through electronic Point of Sale (e-PoS) devices with biometric authentication.',
    financialBenefit: '100% Free Foodgrains (5 kg/person/mo for PHH, 35 kg/family/mo for AAY) via Fair Price Shops',
    keyObjectives: [
      'Eliminate hunger and nutritional deprivation among 81.35 crore vulnerable citizens',
      'Enable nationwide interstate food portability so migrant laborers can collect rations anywhere in India',
      'Remove out-of-pocket costs for staple food grains'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      notes: 'Eligible for all beneficiaries holding active Priority Household (PHH) or Antyodaya Anna Yojana (AAY) ration cards issued by state civil supplies departments.'
    },
    eligibilityHighlights: [
      'Covers 81.35 crore beneficiaries under the National Food Security Act',
      '5 kg of food grains per person per month for Priority Households completely free of cost',
      '35 kg of food grains per family per month for Antyodaya Anna Yojana (AAY) households free of cost',
      'Nationwide portability via One Nation One Ration Card (ONORC) using biometric e-PoS machines'
    ],
    exclusions: [
      'Households holding non-priority white/APL cards without NFSA categorization',
      'Income-tax paying households'
    ],
    requiredDocuments: [
      {
        id: 'doc-pmgkay-ration',
        name: 'NFSA Ration Card (PHH or AAY)',
        category: 'income',
        purpose: 'Entitlement calculation and monthly quota allocation',
        citizenTip: 'Check that all family member names are seeded with Aadhaar on the ration card.',
        isMandatory: true
      },
      {
        id: 'doc-pmgkay-aadhaar',
        name: 'Aadhaar Card of any listed family member',
        category: 'identity',
        purpose: 'Biometric fingerprint or iris scan at Fair Price Shop e-PoS device',
        citizenTip: 'Any adult family member listed on the card can collect the family monthly quota.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Ration Card Status on State Portal',
        description: 'Verify your ration card active status and family entitlement on your state civil supplies portal or nfsa.gov.in.',
        portalOrOffice: 'nfsa.gov.in / State Civil Supplies Portal'
      },
      {
        stepNumber: 2,
        title: 'Visit Nearest Fair Price Shop (Ration Dealer)',
        description: 'Visit your designated local ration shop or any Fair Price Shop across India under ONORC portability.',
        portalOrOffice: 'Local Fair Price Shop'
      },
      {
        stepNumber: 3,
        title: 'Biometric Authentication & Free Grain Collection',
        description: 'Place finger on e-PoS device for biometric validation; collect your weighed free food grains and digital receipt.',
        portalOrOffice: 'e-PoS Terminal'
      }
    ],
    officialSource: {
      name: 'Department of Food and Public Distribution, Ministry of Consumer Affairs, GoI',
      url: 'https://nfsa.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Consumer Affairs, Food and Public Distribution',
      helpline: '1967 / 1800-345-6789',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national food security portal. One Nation One Ration Card operational.'
    }
  },

  // =========================================================================
  // 11. ENTREPRENEURS, SMALL BUSINESSES & SELF-EMPLOYED
  // =========================================================================
  {
    id: 'pm-mudra',
    name: 'PM MUDRA Yojana (Micro Units Development & Refinance Agency)',
    hindiName: 'प्रधानमंत्री मुद्रा योजना',
    teluguName: 'ప్రధాన మంత్రి ముద్ర యోజన',
    tamilName: 'பிரதமர் முத்ரா திட்டம்',
    tagline: 'Collateral-free business credit up to ₹20 Lakh across Shishu, Kishore, Tarun, and Tarun Plus tiers.',
    category: 'business',
    categoryLabel: 'Business & Entrepreneurship',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'worker',
    beneficiaries: ['Micro-entrepreneurs', 'Shopkeepers', 'Artisans', 'Service Providers'],
    shortSummary: 'Provides institutional micro-credit without collateral or processing fees to non-corporate, non-farm small businesses across four tiers: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (₹5 Lakh to ₹10 Lakh), and Tarun Plus (up to ₹20 Lakh).',
    fullDescription: 'PM MUDRA Yojana helps small shopkeepers, fruit vendors, artisans, repair workshops, transport operators, and service units access formal bank credit at competitive interest rates without requiring real-estate collateral or third-party guarantors, secured by Credit Guarantee Funds for Micro Units (CGFMU).',
    financialBenefit: 'Collateral-free loan from ₹50,000 up to ₹20,00,000 with flexible 3 to 5 year repayment',
    keyObjectives: [
      'Bridge the missing credit gap for non-corporate micro and small enterprises',
      'Eliminate the requirement of collateral security and third-party personal guarantees',
      'Promote formalization of small trading, manufacturing, and service micro-units'
    ],
    eligibilityRules: {
      minAge: 18,
      occupations: ['Shopkeeper', 'Trader', 'Artisan', 'Self-Employed', 'Small Manufacturer', 'Service Provider'],
      notes: 'Must not be a defaulter with any commercial bank or financial institution. Business must be non-farm income generating.'
    },
    eligibilityHighlights: [
      'Any Indian citizen running or proposing to start a non-farm income-generating micro-enterprise',
      'Loan tiers: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (₹5 Lakh to ₹10 Lakh), Tarun Plus (up to ₹20 Lakh)',
      'No collateral security or third-party guarantee required',
      'Reasonable interest rates linked to bank external benchmark lending rates'
    ],
    exclusions: [
      'Non-business personal consumption loans',
      'Borrowers with unresolved NPA / default status with any financial institution'
    ],
    requiredDocuments: [
      {
        id: 'doc-mudra-id',
        name: 'Identity & Address Proof (Aadhaar / Voter ID / PAN)',
        category: 'identity',
        purpose: 'Bank KYC compliance',
        citizenTip: 'PAN card is compulsory for loans above ₹50,000.',
        isMandatory: true
      },
      {
        id: 'doc-mudra-biz',
        name: 'Proof of Business Establishment / Udyam Registration',
        category: 'other',
        purpose: 'Verification of business activity and location',
        citizenTip: 'Register for free on udyamregistration.gov.in to get instant MSME certificate.',
        isMandatory: true
      },
      {
        id: 'doc-mudra-bank',
        name: 'Bank Account Statements (last 6 months)',
        category: 'bank',
        purpose: 'Assessment of banking turnover and cash-flow capacity',
        citizenTip: 'For existing businesses, 6 months bank statements are required. For new startups, project report is required.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online via Udyami Mitra Portal',
        description: 'Submit digital application on udyamimitra.in or JanSamarth portal (jansamarth.in).',
        portalOrOffice: 'udyamimitra.in / jansamarth.in'
      },
      {
        stepNumber: 2,
        title: 'Select Preferred Bank Branch',
        description: 'Choose your local public/private bank branch or Regional Rural Bank (RRB).',
        portalOrOffice: 'Bank Branch'
      },
      {
        stepNumber: 3,
        title: 'Sanction and MUDRA Card Issuance',
        description: 'Upon business verification, loan is sanctioned and MUDRA debit card issued for working capital withdrawals.',
        portalOrOffice: 'Sanctioning Bank Branch'
      }
    ],
    officialSource: {
      name: 'Department of Financial Services, Ministry of Finance, GoI',
      url: 'https://www.mudra.org.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Finance',
      helpline: '1800-180-1111',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official MUDRA portal. Credit ceiling revised up to ₹20 Lakh (Budget 2024).'
    }
  },
  {
    id: 'pm-svanidhi',
    name: 'PM SVANidhi (Street Vendor\'s AtmaNirbhar Nidhi)',
    hindiName: 'पीएम स्वनिधि (स्ट्रीट वेंडर्स आत्मनिर्भर निधि)',
    teluguName: 'పీఎం స్వనిధి (వీధి వ్యాపారుల ఆత్మనిర్భర్ నిధి)',
    tamilName: 'பிஎம் ஸ்வநிதி (தெருவோர வியாபாரிகள் நிதி)',
    tagline: 'Collateral-free working capital loan of ₹10,000, ₹20,000, and ₹50,000 with 7% interest subsidy for street vendors.',
    category: 'business',
    categoryLabel: 'Business & Entrepreneurship',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'worker',
    beneficiaries: ['Urban Street Vendors', 'Hawkers', 'Fruit/Vegetable Sellers', 'Roadside Food Vendors'],
    shortSummary: 'Micro-credit facility empowering urban street vendors with collateral-free working capital starting at ₹10,000, stepping up to ₹20,000 and ₹50,000 upon timely repayment, with a 7% interest subsidy and cashback of up to ₹1,200 per year on digital transactions.',
    fullDescription: 'PM SVANidhi was launched by the Ministry of Housing and Urban Affairs to help informal street vendors resume their livelihoods. The scheme incentivizes digital payment adoption through QR codes and financial discipline by offering stepped credit limits without paperwork or bank collateral.',
    financialBenefit: 'Collateral-free ₹10k → ₹20k → ₹50k working capital loans + 7% interest subsidy + ₹1,200/yr cashback',
    keyObjectives: [
      'Facilitate access to working capital credit for street vendors displaced by informal moneylenders',
      'Incentivize regular repayment through a direct 7% annual interest subsidy credited quarterly',
      'Reward digital transactions with monthly cashback credited directly to vendor UPI accounts'
    ],
    eligibilityRules: {
      minAge: 18,
      occupations: ['Street Vendor', 'Hawker', 'Pavement Seller', 'Mobile Cart Operator'],
      notes: 'Must possess a Certificate of Vending (CoV) / Identity Card issued by the Urban Local Body, or a Letter of Recommendation (LoR).'
    },
    eligibilityHighlights: [
      'Engaged in street vending in urban areas on or before the cutoff date',
      'Holders of Certificate of Vending or listed in municipal town vending surveys',
      'Vendors from surrounding peri-urban or rural areas selling in municipal limits are eligible via LoR'
    ],
    exclusions: [
      'Established permanent commercial shops registered under Factory or Shop Acts',
      'Wilful bank loan defaulters'
    ],
    requiredDocuments: [
      {
        id: 'doc-svanidhi-cov',
        name: 'Certificate of Vending (CoV) or Letter of Recommendation (LoR)',
        category: 'other',
        purpose: 'Proof of street vending activity issued by Urban Local Body / Municipality',
        citizenTip: 'If your municipality has not issued a card, apply for a Letter of Recommendation (LoR) directly on the portal.',
        isMandatory: true
      },
      {
        id: 'doc-svanidhi-aadhaar',
        name: 'Aadhaar Card with Linked Mobile Number',
        category: 'identity',
        purpose: 'Identity verification and OTP application submission',
        citizenTip: 'Mobile number must be active for bank verification.',
        isMandatory: true
      },
      {
        id: 'doc-svanidhi-bank',
        name: 'Bank Passbook / UPI QR Code Account Copy',
        category: 'bank',
        purpose: 'Loan disbursement and 7% interest subsidy credit',
        citizenTip: 'Link your Paytm, PhonePe, or Google Pay QR code to earn the ₹1,200 yearly cashback.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Vending Status & Apply Online',
        description: 'Visit pmsvanidhi.mohua.gov.in or apply via local Urban Local Body (ULB) / Common Service Centre.',
        portalOrOffice: 'pmsvanidhi.mohua.gov.in / Municipality'
      },
      {
        stepNumber: 2,
        title: 'Select Lending Bank / MFI',
        description: 'Choose your local bank or micro-finance institution for immediate loan sanction.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Receive ₹10,000 and Build Credit Score',
        description: 'Loan amount is disbursed directly. Repay on time via monthly EMIs to unlock the 2nd tranche of ₹20,000.',
        portalOrOffice: 'Bank Account'
      }
    ],
    officialSource: {
      name: 'Ministry of Housing and Urban Affairs, Government of India',
      url: 'https://pmsvanidhi.mohua.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Housing and Urban Affairs',
      helpline: '1800-11-1979',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national street vendor portal active with over 65 lakh loans disbursed.'
    }
  },
  {
    id: 'pm-vishwakarma',
    name: 'PM Vishwakarma Scheme',
    hindiName: 'पीएम विश्वकर्मा योजना',
    teluguName: 'పీఎం విశ్వకర్మ పథకం',
    tamilName: 'பிஎம் விஸ்வகர்மா திட்டம்',
    tagline: '₹15,000 toolkit incentive, skill training, and 5% concessional credit up to ₹3 Lakh for traditional artisans.',
    category: 'artisans',
    categoryLabel: 'Artisans & Crafts',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'worker',
    beneficiaries: ['Traditional Artisans', 'Craftspeople (18 designated trades)', 'Carpenters', 'Potters', 'Blacksmiths', 'Masons', 'Tailors'],
    shortSummary: 'End-to-end holistic support for traditional artisans and craftspeople working with their hands and tools across 18 designated trades, offering PM Vishwakarma Certificate & ID, basic & advanced skill training with ₹500/day stipend, ₹15,000 e-voucher for modern toolkits, and collateral-free enterprise credit up to ₹3 Lakh at a concessional 5% interest rate.',
    fullDescription: 'PM Vishwakarma is an umbrella Central Sector scheme by the Ministry of MSME, Ministry of Skill Development, and Department of Financial Services. It integrates traditional craftspeople into modern domestic and global value chains while preserving ancestral heritage.',
    financialBenefit: '₹15,000 Toolkit Grant + Collateral-Free Loans up to ₹3 Lakh (at 5% interest) + ₹500/day training stipend',
    keyObjectives: [
      'Formalize recognition of traditional artisans through digital Vishwakarma Certificate and ID card',
      'Modernize production tools through a ₹15,000 digital incentive',
      'Provide affordable credit (₹1 Lakh tranche 1, ₹2 Lakh tranche 2) at heavily subsidized 5% interest without collateral'
    ],
    eligibilityRules: {
      minAge: 18,
      occupations: ['Carpenter', 'Boat Maker', 'Armourer', 'Blacksmith', 'Hammer & Tool Kit Maker', 'Locksmith', 'Sculptor/Stone Carver', 'Goldsmith', 'Potter', 'Cobbler', 'Mason', 'Basket/Mat/Broom Maker', 'Doll & Toy Maker', 'Barber', 'Garland Maker', 'Washerman', 'Tailor', 'Fishing Net Maker'],
      notes: 'Must be actively practicing one of the 18 designated traditional trades. Restricted to one member per family. Must not have active loans under PMEGP or MUDRA in the last 5 years.'
    },
    eligibilityHighlights: [
      'Artisan or craftsperson working on a self-employment basis in one of the 18 notified traditional trades',
      'Minimum age of 18 years on the date of application',
      'Registration restricted to one member per family',
      'Must not have availed credit under similar government credit schemes (PMEGP, PM SVANidhi, MUDRA) in past 5 years'
    ],
    exclusions: [
      'Government employees and their immediate family members',
      'Practitioners of non-designated crafts not listed in the 18 trades'
    ],
    requiredDocuments: [
      {
        id: 'doc-aadhaar-vishwa',
        name: 'Aadhaar Card with Biometric Verification',
        category: 'identity',
        purpose: 'Biometric verification of the artisan at CSC',
        citizenTip: 'Visit your local Common Service Centre with your trade tools for photo identification.',
        isMandatory: true
      },
      {
        id: 'doc-bank-vishwa',
        name: 'Bank Passbook / Account Details',
        category: 'bank',
        purpose: 'Direct credit of ₹500/day stipend and toolkit e-voucher',
        citizenTip: 'Bank account must be in active status with IFSC code.',
        isMandatory: true
      },
      {
        id: 'doc-trade-vishwa',
        name: 'Proof of Traditional Trade Practice / Self-Declaration',
        category: 'other',
        purpose: 'Verification of family lineage or active practice in the 18 trades',
        citizenTip: 'Gram Panchayat head or urban ULB commissioner will verify your trade during stage-1 verification.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'CSC Biometric Registration',
        description: 'Visit nearest Common Service Centre with Aadhaar and mobile to complete free biometric enrollment.',
        portalOrOffice: 'pmvishwakarma.gov.in / Village CSC'
      },
      {
        stepNumber: 2,
        title: '3-Tier Verification (Panchayat, District, State)',
        description: 'Application is verified by Gram Panchayat Head / ULB, followed by District Implementation Committee.',
        portalOrOffice: 'Panchayat & District Committee'
      },
      {
        stepNumber: 3,
        title: 'Skill Training & Toolkit e-Voucher Release',
        description: 'Attend 5-7 days basic skill training with ₹500/day stipend; receive ₹15,000 e-voucher for modern toolkits.',
        portalOrOffice: 'Skill Development Centre / Bank'
      }
    ],
    officialSource: {
      name: 'Ministry of Micro, Small and Medium Enterprises (MSME), GoI',
      url: 'https://pmvishwakarma.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of MSME',
      helpline: '1800-267-7777 / 011-23061586',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official national PM Vishwakarma portal. 18 traditional trades verified.'
    }
  },
  {
    id: 'stand-up-india',
    name: 'Stand-Up India Scheme',
    hindiName: 'स्टैंड-अप इंडिया योजना',
    teluguName: 'స్టాండప్ ఇండియా పథకం',
    tamilName: 'ஸ்டாண்ட்-அப் இந்தியா திட்டம்',
    tagline: 'Bank loans from ₹10 Lakh to ₹1 Crore for SC, ST, and Women entrepreneurs for greenfield enterprises.',
    category: 'business',
    categoryLabel: 'Business & Entrepreneurship',
    geographicScope: 'Central (All India)',
    stateApplicability: 'All India',
    isCentral: true,
    lifeStage: 'worker',
    beneficiaries: ['SC Entrepreneurs', 'ST Entrepreneurs', 'Women Entrepreneurs'],
    shortSummary: 'Facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one woman borrower per bank branch for setting up greenfield (first-time) manufacturing, services, or trading enterprises.',
    fullDescription: 'Stand-Up India promotes entrepreneurship among historically marginalized communities and women. In case of non-individual enterprises, at least 51% of the shareholding and controlling stake must be held by an SC/ST or woman entrepreneur. The margin money requirement has been relaxed to up to 15%.',
    financialBenefit: 'Bank credit from ₹10,00,000 to ₹1,00,00,000 (Composite loan for equipment & working capital)',
    keyObjectives: [
      'Foster institutional credit access for SC, ST, and women entrepreneurs',
      'Mandate every commercial bank branch to finance at least 2 greenfield projects',
      'Support handholding through SIDBI and Stand-Up Mitra connect portals'
    ],
    eligibilityRules: {
      minAge: 18,
      socialCategories: ['SC', 'ST'],
      targetGender: 'female',
      occupations: ['Entrepreneur', 'Business Owner', 'Startup Founder'],
      notes: 'Borrower must be SC, ST, or a Woman entrepreneur. For non-individual enterprises, 51% controlling stake must be held by SC/ST or Woman. Loan is for greenfield (new) enterprise only.'
    },
    eligibilityHighlights: [
      'SC, ST, or Woman entrepreneur aged 18 years or above',
      'Greenfield enterprise in manufacturing, services, agri-allied, or trading sector',
      'Borrower should not be in default to any bank or financial institution',
      'Up to 85% of total project cost funded by the bank'
    ],
    exclusions: [
      'Existing operating businesses (scheme is strictly for greenfield/new setups)',
      'Enterprises where SC/ST or Woman equity share is less than 51%'
    ],
    requiredDocuments: [
      {
        id: 'doc-standup-caste',
        name: 'SC / ST Certificate (if applying under SC/ST category)',
        category: 'caste',
        purpose: 'Verification of category eligibility',
        citizenTip: 'Not applicable if applying as a woman entrepreneur under General/OBC category.',
        isMandatory: false
      },
      {
        id: 'doc-standup-dpr',
        name: 'Detailed Project Report (DPR) & Financial Projections',
        category: 'other',
        purpose: 'Assessment of technical and commercial viability by bank',
        citizenTip: 'Connect with local SIDBI handholding agencies for free DPR assistance.',
        isMandatory: true
      },
      {
        id: 'doc-standup-kyc',
        name: 'Promoter KYC, PAN, and Bank Statements',
        category: 'identity',
        purpose: 'Bank credit appraisal and CIBIL score check',
        citizenTip: 'Check that personal credit score is above 650 with clean repayment history.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register on Stand-Up Mitra Portal',
        description: 'Create profile on standupmitra.in and opt for "Trainee" or "Ready" borrower status.',
        portalOrOffice: 'standupmitra.in'
      },
      {
        stepNumber: 2,
        title: 'Submit Application to Selected Bank Branch',
        description: 'Choose your preferred commercial bank branch and upload your DPR and business plan.',
        portalOrOffice: 'Commercial Bank Branch'
      },
      {
        stepNumber: 3,
        title: 'Credit Committee Sanction and Disbursement',
        description: 'Bank processes loan, sanctions credit with Credit Guarantee Cover (CGSIL), and disburses capital.',
        portalOrOffice: 'Bank Branch'
      }
    ],
    officialSource: {
      name: 'Department of Financial Services, Ministry of Finance & SIDBI',
      url: 'https://www.standupmitra.in',
      lastVerifiedDate: 'October 2026',
      department: 'Ministry of Finance',
      helpline: '1800-180-1111',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal operated by SIDBI for SC/ST and Women entrepreneurs.'
    }
  }
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'All Schemes', icon: 'Sparkles', count: SCHEMES.length },
  { id: 'agriculture', label: 'Agriculture & Farming', icon: 'Wheat', count: SCHEMES.filter(s => s.category === 'agriculture').length },
  { id: 'disability-pwd', label: 'Persons with Disabilities', icon: 'Accessibility', count: SCHEMES.filter(s => s.category === 'disability-pwd').length },
  { id: 'children-nutrition', label: 'Children & Early Nutrition', icon: 'Baby', count: SCHEMES.filter(s => s.category === 'children-nutrition').length },
  { id: 'education', label: 'Education & Scholarships', icon: 'GraduationCap', count: SCHEMES.filter(s => s.category === 'education').length },
  { id: 'unemployment-skills', label: 'Unemployment & Skills', icon: 'Briefcase', count: SCHEMES.filter(s => s.category === 'unemployment-skills').length },
  { id: 'workers-social-security', label: 'Workers & Social Security', icon: 'HardHat', count: SCHEMES.filter(s => s.category === 'workers-social-security').length },
  { id: 'women', label: 'Women & Child Development', icon: 'HeartHandshake', count: SCHEMES.filter(s => s.category === 'women').length },
  { id: 'seniors-elderly', label: 'Senior Citizens', icon: 'UserCheck', count: SCHEMES.filter(s => s.category === 'seniors-elderly').length },
  { id: 'healthcare', label: 'Healthcare & Wellness', icon: 'Activity', count: SCHEMES.filter(s => s.category === 'healthcare').length },
  { id: 'housing', label: 'Housing & Clean Energy', icon: 'Home', count: SCHEMES.filter(s => s.category === 'housing').length },
  { id: 'low-income-welfare', label: 'Food & Essential Welfare', icon: 'ShieldCheck', count: SCHEMES.filter(s => s.category === 'low-income-welfare').length },
  { id: 'business', label: 'Business & Micro-Credit', icon: 'Coins', count: SCHEMES.filter(s => s.category === 'business').length },
  { id: 'artisans', label: 'Artisans & Handcrafts', icon: 'Hammer', count: SCHEMES.filter(s => s.category === 'artisans').length }
];

export const STATES_CONFIG = [
  { id: 'all', label: 'All India & Central' },
  { id: 'Andhra Pradesh', label: 'Andhra Pradesh (State + Central)' },
  { id: 'Central', label: 'Central Government Only' }
];

export const CATEGORIES = CATEGORIES_CONFIG;
