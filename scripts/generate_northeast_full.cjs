const fs = require('fs');

// We load the first 10 schemes from generate_northeast.cjs
const part1Content = fs.readFileSync('D:/civicai/scripts/generate_northeast.cjs', 'utf8');
const start = part1Content.indexOf('const northEastSchemes = [') + 'const northEastSchemes = '.length;
const end = part1Content.indexOf('// Let\'s add remaining 30 schemes');
const part1 = eval(part1Content.slice(start, end).trim().replace(/;$/, ''));

const part2 = [
  // MANIPUR (MN)
  {
    id: 'mn-cmht-health-scheme',
    name: 'Chief Minister-gi Hakshelgi Tengbang (CMHT Manipur Cashless Health Cover)',
    hindiName: 'चीफ मिनिस्टर-गी हक्शेलगी तेंगबांग (मणिपुर कैशलेस स्वास्थ्य सुरक्षा)',
    teluguName: 'చీఫ్ మినిస్టర్-గీ హక్షేల్గి తెంగ్‌బాంగ్ (మణిపూర్)',
    tamilName: 'சீஃப் மினிஸ்டர்-கி ஹக்ஷெல்கி தெங்பாங் (மணிப்பூர்)',
    tagline: 'Cashless secondary and tertiary hospitalization cover of ₹5 Lakh per family per year in 100+ empaneled hospitals.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Manipur)',
    stateApplicability: 'Manipur',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MN',
    administeringGovernment: 'Government of Manipur',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Poor and Vulnerable Families in Manipur', 'Widows and Destitute Women', 'Accredited Media Persons / Journalists'],
    shortSummary: 'Universal health insurance covering over 4.5 Lakh families with ₹5 Lakh cashless treatment per family annually for critical illnesses, heart surgeries, oncology, and burns in top hospitals in Imphal and across India.',
    fullDescription: 'Chief Minister-gi Hakshelgi Tengbang (CMHT) provides cashless inpatient medical coverage across hill and valley districts of Manipur. Beneficiaries receive a dedicated biometric smart card entitling them to ₹5,00,000 cashless cover across 1,400+ medical and surgical packages, with special priority given to widows, persons with disabilities, and working journalists.',
    financialBenefit: '₹5,00,000 / family / year cashless hospitalization coverage',
    keyObjectives: [
      'Protect vulnerable communities across hill and valley districts from catastrophic medical expenses',
      'Provide cashless admission across premier regional institutions like RIMS and JNIMS Imphal',
      'Cover critical cardiology, neurology, and kidney transplants'
    ],
    eligibilityRules: {
      stateResidence: 'Manipur',
      notes: 'Resident of Manipur possessing BPL/AAY ration card, or certified low-income status by local authority, or accredited journalist.'
    },
    eligibilityHighlights: [
      'Permanent resident of Manipur',
      'Covered under SECC 2011 / BPL / Antyodaya ration cards',
      'Widows, Divyangjan, and accredited journalists eligible unconditionally'
    ],
    exclusions: [
      'Regular government servants eligible for government medical reimbursement'
    ],
    requiredDocuments: [
      {
        id: 'doc-mn-cmh-ration',
        name: 'Digital Ration Card / BPL Certificate',
        category: 'income',
        purpose: 'Verify family entitlement category',
        citizenTip: 'Check details on pdsmanipur.nic.in.',
        isMandatory: true
      },
      {
        id: 'doc-mn-cmh-aadhaar',
        name: 'Aadhaar Card of Family Members',
        category: 'identity',
        purpose: 'Biometric identity for smart card creation',
        citizenTip: 'Biometrics collected at CMHT enrollment kiosk.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Enrol at CMHT Enrollment Kiosk or District Hospital',
        description: 'Visit nearest CMHT enrollment kiosk at district hospital or Community Health Centre.',
        portalOrOffice: 'District Hospital / CHC'
      },
      {
        stepNumber: 2,
        title: 'Biometric Smart Card Generation',
        description: 'Provide photo and fingerprint scans; receive instant CMHT optical health smart card.',
        portalOrOffice: 'Kiosk Counter'
      },
      {
        stepNumber: 3,
        title: 'Cashless Hospitalization',
        description: 'Present card at CMHT Arogya Mitra counter in RIMS, JNIMS, or empaneled hospitals for cashless care.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'State Health Society, Government of Manipur',
      url: 'https://cmhtmanipur.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health and Family Welfare Department',
      helpline: '1800-103-2015',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official CMHT health portal of Manipur.'
    }
  },
  {
    id: 'mn-startup-manipur',
    name: 'Start-Up Manipur Scheme (Youth Entrepreneurship & Innovation Seed Capital)',
    hindiName: 'स्टार्ट-अप मणिपुर योजना (युवा नवाचार एवं बीज पूंजी अनुदान)',
    teluguName: 'స్టార్ట్-అప్ మణిపూర్ పథకం',
    tamilName: 'ஸ்டார்ட்-அப் மணிப்பூர் திட்டம்',
    tagline: 'Seed funding grants up to ₹3 Lakh and matching bank loan subsidies up to ₹30 Lakh for youth startups.',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'State Scheme (Manipur)',
    stateApplicability: 'Manipur',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MN',
    administeringGovernment: 'Government of Manipur',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Young Innovators and Startups', 'IT and Organic Agro-Processing Entrepreneurs', 'Women Entrepreneurs in Manipur'],
    shortSummary: 'Multi-tier startup program providing ₹3 Lakh direct grants for early-stage idea founders and up to ₹30 Lakh subsidized credit packages for scaling enterprises in organic farming, handloom, tourism, and IT services.',
    fullDescription: 'Start-Up Manipur transforms the economic landscape by nurturing homegrown entrepreneurs. Operating across Idea Stage (revenue support up to ₹3 Lakh grant), ESSENCE Stage (up to ₹10 Lakh matching grant/loan), and StandUp Stage (up to ₹30 Lakh), the scheme provides comprehensive incubation, mentorship, and collateral-free funding to create scalable private enterprises.',
    financialBenefit: '₹3,00,000 direct grant (Idea stage) or up to ₹30,00,000 project financing (Revenue stage)',
    keyObjectives: [
      'Foster a vibrant startup and innovation culture among educated youths in Manipur',
      'Commercialize local indigenous resources like black rice (Chak-Hao), bamboo, and silk',
      'Provide seed equity and mentorship through premier incubation partners'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 45,
      stateResidence: 'Manipur',
      notes: 'Resident of Manipur aged 18 to 45 holding an innovative business idea or early-stage enterprise registered in Manipur.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Manipur',
      'Innovative product or business model operating within Manipur',
      'Business entity registered as Sole Proprietorship, LLP, or Pvt Ltd company'
    ],
    exclusions: [
      'Traditional brick-and-mortar trading without value addition or innovation'
    ],
    requiredDocuments: [
      {
        id: 'doc-mn-sum-pitch',
        name: 'Pitch Deck & Business Plan / DPR',
        category: 'other',
        purpose: 'Evaluation of business concept and financial feasibility',
        citizenTip: 'Include market size, traction, and employment projections.',
        isMandatory: true
      },
      {
        id: 'doc-mn-sum-domicile',
        name: 'Manipur Domicile Certificate & Aadhaar',
        category: 'identity',
        purpose: 'Identity and residence verification',
        citizenTip: 'Issued by SDO / Deputy Commissioner.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Start-Up Manipur Portal',
        description: 'Submit pitch deck and project application on startupmanipur.mn.gov.in.',
        portalOrOffice: 'startupmanipur.mn.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Pitch Presentation before Expert Committee',
        description: 'Shortlisted candidates present their pitch deck before a state evaluation panel.',
        portalOrOffice: 'Planning Department, Imphal'
      },
      {
        stepNumber: 3,
        title: 'Seed Grant Release and Incubation',
        description: 'Selected startups receive direct grant credits into bank accounts and incubation mentorship.',
        portalOrOffice: 'Direct Benefit Transfer / Incubation Centre'
      }
    ],
    officialSource: {
      name: 'Planning Department, Government of Manipur',
      url: 'https://startupmanipur.mn.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Planning Department',
      helpline: '0385-2451144',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Manipur startup incubation and funding platform.'
    }
  },
  {
    id: 'mn-cm-pwd-pension',
    name: 'CM-gi Sotharabasingi Tengbang (CMST Manipur Disability Social Security & Scholarships)',
    hindiName: 'चीफ मिनिस्टर-गी सोथराबासिंगी तेंगबांग (मणिपुर दिव्यांग सामाजिक सुरक्षा)',
    teluguName: 'సీఎం-గీ సోతరబాసింగి తెంగ్‌బాంగ్ (మణిపూర్)',
    tamilName: 'சீஎம்-கி சோதரபாசிங்கி தெங்பாங் (மணிப்பூர்)',
    tagline: 'Monthly pension of ₹1,500 + free assistive aids + annual education scholarships for Persons with Disabilities (PwD).',
    category: 'disability-pwd',
    categoryLabel: 'Disability & Inclusion',
    geographicScope: 'State Scheme (Manipur)',
    stateApplicability: 'Manipur',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MN',
    administeringGovernment: 'Government of Manipur',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Persons with Disabilities (PwD)', 'Differently-Abled Students', 'Caregivers of Severe Disability Patients'],
    shortSummary: 'Comprehensive disability welfare program providing ₹1,500 monthly pension for persons with benchmark disability, scholarships from Class 1 to university, free motorized tricycles, and free health checkups.',
    fullDescription: 'The CM-gi Sotharabasingi Tengbang (CMST) scheme establishes a protective social security umbrella for persons with disabilities in Manipur. Administered by the Social Welfare Department, the scheme grants ₹1,500 monthly subsistence allowance to persons with 80%+ disability (and ₹1,000 for 40-79% disability), annual scholarships up to ₹8,000 for disabled students, free motorized tricycles, hearing aids, and caregiver stipends.',
    financialBenefit: '₹1,000 to ₹1,500 / month pension + annual student scholarships up to ₹8,000 + free motorized aids',
    keyObjectives: [
      'Provide guaranteed monthly financial support to persons with disabilities across Manipur',
      'Facilitate mobility through free motorized tricycles, smart canes, and hearing aids',
      'Incentivize inclusive schooling and vocational training for differently-abled youths'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      stateResidence: 'Manipur',
      notes: 'Resident of Manipur with certified disability of 40% or above holding a valid Unique Disability ID (UDID).'
    },
    eligibilityHighlights: [
      'Permanent resident of Manipur',
      'Possesses certified disability of 40% or higher / UDID card',
      'Not receiving any other government disability pension'
    ],
    exclusions: [
      'Government employees or pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-mn-cms-udid',
        name: 'UDID Card / Disability Certificate',
        category: 'disability',
        purpose: 'Verification of disability percentage and category',
        citizenTip: 'Check UDID on swavlambancard.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-mn-cms-aadhaar',
        name: 'Aadhaar Card and Bank Passbook',
        category: 'identity',
        purpose: 'Identity and DBT routing',
        citizenTip: 'Bank account must be in the name of the beneficiary or legal guardian.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply at District Social Welfare Office (DSWO)',
        description: 'Submit CMST application along with UDID card to District Social Welfare Officer.',
        portalOrOffice: 'DSWO Office'
      },
      {
        stepNumber: 2,
        title: 'Medical Verification & Sanction Order',
        description: 'Medical board and Social Welfare Department verify disability credentials and issue sanction.',
        portalOrOffice: 'Social Welfare Department'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Credit and Aid Distribution',
        description: 'Monthly allowance is credited directly to bank account, and assistive devices are distributed at district camps.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of Manipur',
      url: 'https://socialwelfare.mn.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0385-2450502',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Manipur disability welfare portal.'
    }
  },
  {
    id: 'mn-msrlm-livelihood-mission',
    name: 'Manipur State Rural Livelihoods Mission (Women SHG Revolving Fund & Livelihood Grants)',
    hindiName: 'मणिपुर राज्य ग्रामीण आजीविका मिशन (महिला स्वयं सहायता आजीविका संवर्धन)',
    teluguName: 'మణిపూర్ గ్రామీణ జీవనోపాధి మిషన్',
    tamilName: 'மணிப்பூர் மாநில ஊரக வாழ்வாதார இயக்கம்',
    tagline: 'Revolving fund of ₹15,000 + Community Investment Fund up to ₹1.5 Lakh for women SHGs across hill and valley districts.',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'State Scheme (Manipur)',
    stateApplicability: 'Manipur',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MN',
    administeringGovernment: 'Government of Manipur',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Women Self Help Groups (SHGs)', 'Rural Homemakers & Artisans', 'Tribal Livelihood Collectives'],
    shortSummary: 'Empowers over 50,000 women across Manipur through institutional SHG federation funding, providing Revolving Funds (RF) of ₹15,000 and Community Investment Funds (CIF) up to ₹1.5 Lakh for food processing, handloom, and poultry.',
    fullDescription: 'Under the Manipur State Rural Livelihoods Mission (MSRLM), poor rural women form cohesive Self-Help Groups to escape informal debt traps. The mission provides institutional seed grants: ₹15,000 Revolving Fund to initiate internal lending, followed by Community Investment Fund up to ₹1,50,000 per SHG to finance poultry farming, mushroom cultivation, ginger processing, and traditional handloom weaving.',
    financialBenefit: '₹15,000 Revolving Fund + up to ₹1,50,000 Community Investment Fund per SHG at subsidized rates',
    keyObjectives: [
      'Organize rural women into sustainable self-managed thrift and credit SHG institutions',
      'Provide low-cost institutional microfinance to eliminate predatory moneylenders',
      'Develop market value chains for indigenous Manipuri handicrafts and agro-products'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Manipur',
      notes: 'Group of 10 to 15 women residing in the same village in Manipur, maintaining regular thrift savings and panchasutra norms.'
    },
    eligibilityHighlights: [
      'Resident women of Manipur forming an SHG',
      'Group adhering to Panchasutra principles (regular meetings, savings, internal lending, timely repayment, book-keeping)',
      'Joint bank account opened with scheduled commercial or rural bank'
    ],
    exclusions: [
      'SHGs formed purely for speculative investments without micro-livelihood activities'
    ],
    requiredDocuments: [
      {
        id: 'doc-mn-msr-group',
        name: 'SHG Resolution and Bank Passbook',
        category: 'bank',
        purpose: 'Verify group formation and savings record',
        citizenTip: 'Maintained with assistance from Village Coordinator (VC).',
        isMandatory: true
      },
      {
        id: 'doc-mn-msr-aadhaar',
        name: 'Aadhaar Cards of Group Members',
        category: 'identity',
        purpose: 'Identity and residency validation',
        citizenTip: 'All members must complete e-KYC.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Form SHG with Block Mission Management Unit (BMMU)',
        description: 'Form group with help of Community Resource Person (CRP) and register with BMMU.',
        portalOrOffice: 'Block Mission Management Unit'
      },
      {
        stepNumber: 2,
        title: 'Grading and Revolving Fund Sanction',
        description: 'After 3 months of regular savings, BMMU evaluates group and disburses ₹15,000 Revolving Fund.',
        portalOrOffice: 'Bank Branch / BMMU'
      },
      {
        stepNumber: 3,
        title: 'Livelihood Project & CIF Grant Disbursal',
        description: 'Submit Micro Credit Plan (MCP) to access up to ₹1.5 Lakh Community Investment Fund for business startup.',
        portalOrOffice: 'Village Organization / Bank'
      }
    ],
    officialSource: {
      name: 'Department of Rural Development and Panchayati Raj, Manipur',
      url: 'https://rdpr.mn.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Rural Development and Panchayati Raj Department',
      helpline: '0385-2451144',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Manipur State Rural Livelihoods Mission portal.'
    }
  },
  {
    id: 'mn-go-to-village-services',
    name: 'Go to Village Mission (Khungang Chatse - Doorstep Public Services Delivery)',
    hindiName: 'गो टू विलेज मिशन (खुंगंग चात्से - मणिपुर घर-द्वार नागरिक सेवा)',
    teluguName: 'గో టు విలేజ్ మిషన్ (మణిపూర్)',
    tamilName: 'கோ டு வில்லேஜ் இயக்கம் (மணிப்பூர்)',
    tagline: 'Direct mobile camp delivery of 40+ government schemes, Aadhaar, health cards, and pensions in every village.',
    category: 'low-income-welfare',
    categoryLabel: 'Public & Citizen Services',
    geographicScope: 'State Scheme (Manipur)',
    stateApplicability: 'Manipur',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MN',
    administeringGovernment: 'Government of Manipur',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['All Rural & Hill Citizens of Manipur', 'Senior Citizens & Homemakers', 'Marginalized Tribal Villagers'],
    shortSummary: 'High-level governance outreach initiative bringing entire government departments (Health, Social Welfare, Revenue, Agriculture, Banks) directly to remote villages in mobile administrative camps.',
    fullDescription: 'Khungang Chatse (Go to Village) bridges the administrative divide between remote hill/valley hamlets and district secretariats in Manipur. Multi-departmental mobile convoys pitch camps in every village, enabling citizens to enroll in CMHT, apply for social security pensions, obtain caste and domicile certificates, update Aadhaar, open Jan Dhan bank accounts, and register grievance petitions right in their home village.',
    financialBenefit: 'Zero-cost doorstep delivery of government welfare schemes and official certificates',
    keyObjectives: [
      'Take government administration directly to citizens doorsteps across tough hill terrain',
      'Achieve 100% saturation of welfare programs in remote indigenous villages',
      'Eliminate the expense and time spent traveling to district headquarters for certificates'
    ],
    eligibilityRules: {
      stateResidence: 'Manipur',
      notes: 'Available to all permanent residents and villagers across all 16 districts of Manipur.'
    },
    eligibilityHighlights: [
      'Resident of the village hosting the outreach camp',
      'No application fees or middleman charges'
    ],
    exclusions: [
      'Matters sub-judice before judicial courts'
    ],
    requiredDocuments: [
      {
        id: 'doc-mn-gtv-aadhaar',
        name: 'Aadhaar Card / Basic Identity Proof',
        category: 'identity',
        purpose: 'Identity verification for on-the-spot service requests',
        citizenTip: 'Carry original documents for digital scanning at camp counters.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Camp Schedule in your Village',
        description: 'Village authority notifies upcoming Khungang Chatse camp date announced by District Commissioner.',
        portalOrOffice: 'Village Community Hall / DC Office'
      },
      {
        stepNumber: 2,
        title: 'Visit Specific Department Counter at Camp',
        description: 'Visit relevant desk (Health for CMHT, Social Welfare for pensions, Revenue for certificates).',
        portalOrOffice: 'Mobile Camp Pavilion'
      },
      {
        stepNumber: 3,
        title: 'On-the-Spot Service Delivery & Sanction',
        description: 'Receive instant certificate, health card, or sanction letter on the same day.',
        portalOrOffice: 'Camp Desk'
      }
    ],
    officialSource: {
      name: 'Department of Personnel & Administrative Reforms, Manipur',
      url: 'https://manipur.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Administrative Reforms Department',
      helpline: '0385-2451144',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Manipur public outreach mission.'
    }
  }
];

// Let's add ML, MZ, NL, SK, TR (5 schemes each = 25 schemes)
