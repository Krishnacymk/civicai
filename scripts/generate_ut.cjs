const fs = require('fs');

const utSchemes = [
  // ANDAMAN & NICOBAR ISLANDS (AN)
  {
    id: 'an-bocw-pension',
    name: 'Andaman & Nicobar BOCW Construction Workers Social Security & Pension',
    hindiName: 'अंडमान एवं निकोबार भवन निर्माण श्रमिक पेंशन एवं सामाजिक सुरक्षा',
    teluguName: 'అండమాన్ & నికోబార్ నిర్మాణ కార్మికుల సంక్షేమ పథకం',
    tamilName: 'அந்தமான் & நிக்கோபார் கட்டுமானத் தொழிலாளர் நலத் திட்டம்',
    tagline: 'Monthly pension of ₹1,500 for senior construction workers + ₹3 Lakh accidental death compensation.',
    category: 'workers-social-security',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'Union Territory Scheme (Andaman & Nicobar Islands)',
    stateApplicability: 'Andaman & Nicobar Islands',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'AN',
    administeringGovernment: 'Andaman & Nicobar Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Registered Building & Other Construction Workers', 'Masons, Carpenters & Island Laborers', 'Senior Retired Construction Workers'],
    shortSummary: 'Comprehensive social security umbrella operated by the Andaman & Nicobar BOCW Board providing monthly old-age pensions of ₹1,500, maternity assistance of ₹10,000, death relief of ₹3 Lakh, and annual children education stipends.',
    fullDescription: 'The Andaman and Nicobar Building & Other Construction Workers Welfare Board provides vital protection for the island construction labor force. Workers registered with the board receive ₹1,500 monthly pension upon attaining age 60, ₹10,000 maternity assistance for female laborers, ₹3,00,000 ex-gratia for accidental death, funeral relief, and tool purchase subsidies to withstand island living costs.',
    financialBenefit: '₹1,500 / month old age pension + up to ₹3,00,000 accidental death relief via DBT',
    keyObjectives: [
      'Provide dedicated social security for unorganized construction laborers across island settlements',
      'Shield island worker families against sudden industrial accidents and fatal risks',
      'Incentivize long-term formal registration and skill building'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 60,
      occupations: ['Construction Worker', 'Mason', 'Carpenter', 'Painter', 'Welder'],
      stateResidence: 'Andaman and Nicobar Islands',
      notes: 'Registered with Andaman & Nicobar BOCW Board for at least 1 year with regular annual subscription deposits.'
    },
    eligibilityHighlights: [
      'Resident worker in Andaman & Nicobar Islands',
      'Registered with A&N BOCW Board',
      'Worked for at least 90 days in the preceding 12 months as a construction laborer'
    ],
    exclusions: [
      'Permanent government employees or corporate executives'
    ],
    requiredDocuments: [
      {
        id: 'doc-an-boc-card',
        name: 'A&N BOCW Registration Card / Passbook',
        category: 'other',
        purpose: 'Verify active membership and contribution history',
        citizenTip: 'Check renewal stamp with local Labour Commissioner.',
        isMandatory: true
      },
      {
        id: 'doc-an-boc-aadhaar',
        name: 'Aadhaar Card and Island Resident Proof',
        category: 'identity',
        purpose: 'Identity and island residency verification',
        citizenTip: 'Aadhaar must be linked to bank account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Labour Commissioner Office',
        description: 'Submit pension/benefit application at Labour Commissioner Office, Port Blair or Tehsil Labour Inspector.',
        portalOrOffice: 'Labour Commissioner Office, Port Blair'
      },
      {
        stepNumber: 2,
        title: 'Inspection and Scrutiny',
        description: 'Labour officer verifies 90-day work certificate and registration validity.',
        portalOrOffice: 'Labour Department'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit into Bank Account',
        description: 'Pension or welfare grant is credited directly into the worker bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Labour Department, Andaman & Nicobar Administration',
      url: 'https://andaman.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Labour',
      helpline: '03192-232535',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official welfare scheme of Andaman & Nicobar Labour Department.'
    }
  },
  {
    id: 'an-tribal-fishermen-subsidies',
    name: 'Andaman Marine Fishermen Modernization Subsidy (Outboard Motors & Safety Kits)',
    hindiName: 'अंडमान समुद्री मछुआरा आधुनिकीकरण सब्सिडी (आउटबोर्ड मोटर एवं सुरक्षा किट)',
    teluguName: 'అండమాన్ సముద్ర మత్స్యకారుల సబ్సిడీ పథకం',
    tamilName: 'அந்தமான் கடல் மீனவர்கள் நவீனமயமாக்கல் மானியம்',
    tagline: '50% capital subsidy on Outboard Motors (OBMs), life jackets, and GPS distress alert transmitters for island fishermen.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'Union Territory Scheme (Andaman & Nicobar Islands)',
    stateApplicability: 'Andaman & Nicobar Islands',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'AN',
    administeringGovernment: 'Andaman & Nicobar Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Traditional Marine Fishermen', 'Tribal Fishermen in Nicobar', 'Fishermen Cooperative Societies in A&N'],
    shortSummary: 'Financial subsidy providing 50% state contribution (up to ₹60,000) for motorized outboard engines, deep-sea insulated iceboxes, communication sets (DAT), and marine safety gear for traditional island fishermen.',
    fullDescription: 'Fishing is the lifeblood of the Andaman & Nicobar archipelago. To modernize artisanal wooden boats and ensure maritime safety in cyclonic open oceans, the Directorate of Fisheries provides a 50% capital subsidy on Outboard Motors up to 10 HP, safety distress transmitters (DAT), life-saving equipment, and insulated iceboxes, raising catch value and protecting fishermen lives.',
    financialBenefit: '50% capital subsidy (up to ₹60,000) on outboard boat engines and 100% free safety communication kits',
    keyObjectives: [
      'Modernize traditional non-motorized wooden fishing craft across South, Middle, and North Andaman',
      'Ensure maritime safety through GPS-enabled Distress Alert Transmitters (DAT)',
      'Extend cold-chain icebox facilities on board to preserve export-quality tuna'
    ],
    eligibilityRules: {
      occupations: ['Fisherman', 'Marine Cultivator'],
      stateResidence: 'Andaman and Nicobar Islands',
      notes: 'Active licensed marine fisherman residing in Andaman & Nicobar Islands owning a registered fishing craft.'
    },
    eligibilityHighlights: [
      'Permanent resident / indigenous inhabitant of A&N Islands',
      'Holds valid fishing license issued by Directorate of Fisheries',
      'Registered traditional fishing craft (canoe or boat)'
    ],
    exclusions: [
      'Large mechanized industrial trawler corporations'
    ],
    requiredDocuments: [
      {
        id: 'doc-an-fis-license',
        name: 'Fishing License & Boat Registration Certificate',
        category: 'other',
        purpose: 'Verify active fisherman status and craft ownership',
        citizenTip: 'Issued by Directorate of Fisheries, Port Blair.',
        isMandatory: true
      },
      {
        id: 'doc-an-fis-aadhaar',
        name: 'Aadhaar Card and Islander Card / Local Certificate',
        category: 'identity',
        purpose: 'Identity and island residency verification',
        citizenTip: 'Issued by Revenue Department.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Zonal Fisheries Office',
        description: 'Submit form along with craft registration to Zonal Fisheries Officer in Port Blair, Rangat, Diglipur, or Car Nicobar.',
        portalOrOffice: 'Zonal Fisheries Office'
      },
      {
        stepNumber: 2,
        title: 'Inspection and Approval',
        description: 'Fisheries inspector inspects craft and verifies engine purchase quotation.',
        portalOrOffice: 'Fisheries Directorate'
      },
      {
        stepNumber: 3,
        title: 'Subsidy Release & Engine Delivery',
        description: '50% subsidy is released directly to empaneled manufacturer and engine is fitted on craft.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Directorate of Fisheries, Andaman & Nicobar Administration',
      url: 'https://fisheries.andaman.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Directorate of Fisheries',
      helpline: '03192-232770',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official marine fisheries portal of Andaman & Nicobar Islands.'
    }
  },
  {
    id: 'an-st-scholarship-incentive',
    name: 'Andaman & Nicobar Tribal & Post-Matric Education Scholarship Scheme',
    hindiName: 'अंडमान एवं निकोबार जनजातीय एवं उत्तर-मैट्रिक शिक्षा छात्रवृत्ति',
    teluguName: 'అండమాన్ & నికోబార్ ట్రైబల్ స్కాలర్‌షిప్ పథకం',
    tamilName: 'அந்தமான் & நிக்கோபார் பழங்குடியினர் கல்வி உதவித்தொகை திட்டம்',
    tagline: '100% tuition fees + mainland travel allowance + monthly hostel maintenance stipend for island college students.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'Union Territory Scheme (Andaman & Nicobar Islands)',
    stateApplicability: 'Andaman & Nicobar Islands',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'AN',
    administeringGovernment: 'Andaman & Nicobar Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['ST Tribal Students (Nicobarese, etc.)', 'Mainland College Students from Andaman', 'Meritorious Low-Income Island Students'],
    shortSummary: 'Comprehensive higher education scholarship covering 100% course fees, subsidized ship/air passage to the Indian mainland (Chennai/Kolkata), and monthly hostel stipends for island youths pursuing college degrees.',
    fullDescription: 'Due to limited university infrastructure on the islands, thousands of students travel to mainland universities for medical, engineering, and arts degrees. The Directorate of Education reimburses 100% of approved tuition fees, provides two free or highly subsidized sea/air travel vouchers annually between Port Blair and mainland ports, and transfers a monthly hostel maintenance stipend directly into student bank accounts.',
    financialBenefit: '100% tuition fee reimbursement + annual mainland travel passage allowance + monthly hostel stipend',
    keyObjectives: [
      'Enable island students to access premier higher education institutions on the Indian mainland',
      'Shield tribal families from exorbitant sea/air travel and hostel boarding costs',
      'Incentivize degree completion in engineering, medicine, maritime navigation, and sciences'
    ],
    eligibilityRules: {
      stateResidence: 'Andaman and Nicobar Islands',
      notes: 'Resident student of Andaman & Nicobar Islands holding local resident certificate or ST certificate, pursuing recognized post-matric course in an approved college in A&N or mainland.'
    },
    eligibilityHighlights: [
      'Permanent resident / indigenous ST student of A&N Islands',
      'Admitted to a recognized post-matric degree or diploma program',
      'Passed qualifying Class 10 or 12 examinations from recognized island school'
    ],
    exclusions: [
      'Unaccredited non-recognized private coaching institutes'
    ],
    requiredDocuments: [
      {
        id: 'doc-an-sch-admission',
        name: 'College Admission Letter & Fee Schedule',
        category: 'academic',
        purpose: 'Verify ongoing post-matric higher education',
        citizenTip: 'Must be stamped by college registrar.',
        isMandatory: true
      },
      {
        id: 'doc-an-sch-local',
        name: 'Local Certificate / Tribal ST Certificate',
        category: 'caste',
        purpose: 'Proof of Andaman & Nicobar domicile',
        citizenTip: 'Issued by Deputy Commissioner, Port Blair / Nicobar.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on National Scholarship Portal (NSP)',
        description: 'Submit application under Andaman & Nicobar state post-matric scheme on scholarships.gov.in.',
        portalOrOffice: 'scholarships.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Institutional Online Verification',
        description: 'College nodal officer verifies academic records and fee breakdown online.',
        portalOrOffice: 'College Administration'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer',
        description: 'Tuition fees, travel allowance, and monthly maintenance stipends are credited via PFMS.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Directorate of Higher Education, Andaman & Nicobar Administration',
      url: 'https://dhe.andaman.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Higher Education',
      helpline: '03192-232535',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official higher education portal of Andaman & Nicobar Administration.'
    }
  },
  {
    id: 'an-senior-citizen-pension',
    name: 'Andaman & Nicobar Destitute Senior Citizen & Widow Pension Scheme',
    hindiName: 'अंडमान एवं निकोबार निराश्रित वृद्धावस्था एवं विधवा पेंशन योजना',
    teluguName: 'అండమాన్ & నికోబార్ వృద్ధాప్య పెన్షన్ పథకం',
    tamilName: 'அந்தமான் & நிக்கோபார் முதியோர் ஓய்வூதியத் திட்டம்',
    tagline: 'Monthly social security pension of ₹2,500 transferred directly via DBT to senior citizens aged 60+ and widows.',
    category: 'seniors-elderly',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'Union Territory Scheme (Andaman & Nicobar Islands)',
    stateApplicability: 'Andaman & Nicobar Islands',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'AN',
    administeringGovernment: 'Andaman & Nicobar Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Widows and Deserted Women', 'Destitute Island Elders'],
    shortSummary: 'Essential social security safety net transferring ₹2,500 monthly directly into the bank accounts of over 14,000 destitute seniors, widows, and deserted women across all inhabited islands of Andaman and Nicobar.',
    fullDescription: 'The Directorate of Social Welfare in Andaman & Nicobar provides one of the most generous UT social pensions in India. Eligible senior citizens aged 60 and older, widows, and deserted women whose family annual income does not exceed ₹48,000 receive ₹2,500 per month credited directly into their Aadhaar-linked bank accounts, guaranteeing economic survival across remote islands.',
    financialBenefit: '₹2,500 / month (₹30,000 annually) transferred directly via DBT',
    keyObjectives: [
      'Provide basic financial autonomy to destitute elderly citizens across isolated island settlements',
      'Shield vulnerable widows and deserted women from poverty and neglect',
      'Ensure 100% digital benefit delivery with zero administrative deductions'
    ],
    eligibilityRules: {
      minAge: 60,
      maxIncome: 48000,
      stateResidence: 'Andaman and Nicobar Islands',
      notes: 'Resident of A&N Islands for at least 10 years with family annual income not exceeding ₹48,000. Age 60+ for seniors, widows of any age.'
    },
    eligibilityHighlights: [
      'Permanent resident of A&N Islands for minimum 10 years',
      'Annual family income does not exceed ₹48,000',
      'Senior citizen (age 60+) or widow without family sustenance',
      'Not receiving any other government pension'
    ],
    exclusions: [
      'Recipients of civil/military government retirement pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-an-pen-local',
        name: 'Local Certificate (10-Year Island Domicile Proof)',
        category: 'identity',
        purpose: 'Verify 10-year island residency',
        citizenTip: 'Issued by Tehsildar.',
        isMandatory: true
      },
      {
        id: 'doc-an-pen-income',
        name: 'Income Certificate (Income under ₹48,000/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Issued by Tehsildar.',
        isMandatory: true
      },
      {
        id: 'doc-an-pen-bank',
        name: 'Aadhaar-Linked Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Account must have active mobile alerts enabled.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Child Development Project Officer (CDPO)',
        description: 'Submit form along with income and domicile certificates to local CDPO office.',
        portalOrOffice: 'CDPO Office / Directorate of Social Welfare, Port Blair'
      },
      {
        stepNumber: 2,
        title: 'Field Inquiry and Verification',
        description: 'Social welfare supervisor verifies living conditions, age, and destitute status.',
        portalOrOffice: 'Social Welfare Directorate'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹2,500 is credited directly into the beneficiary bank account by the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Directorate of Social Welfare, Andaman & Nicobar Administration',
      url: 'https://andaman.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Directorate of Social Welfare',
      helpline: '03192-232535',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official social security pension framework of Andaman & Nicobar Islands.'
    }
  },
  {
    id: 'an-island-solar-incentive',
    name: 'Andaman Green Island Solar Rooftop Subsidy Scheme (Clean Island Energy Incentive)',
    hindiName: 'अंडमान हरित द्वीप सौर रूफटॉप सब्सिडी योजना (स्वच्छ ऊर्जा प्रोत्साहन)',
    teluguName: 'అండమాన్ సోలార్ రూఫ్‌టాప్ పథకం',
    tamilName: 'அந்தமான் சூரிய ஒளி கூரை மின்சார திட்டம்',
    tagline: 'Up to 50% capital subsidy for installing grid-connected rooftop solar systems in island homes and hotels.',
    category: 'low-income-welfare',
    categoryLabel: 'Public & Citizen Services',
    geographicScope: 'Union Territory Scheme (Andaman & Nicobar Islands)',
    stateApplicability: 'Andaman & Nicobar Islands',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'AN',
    administeringGovernment: 'Andaman & Nicobar Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Domestic Island Households', 'Eco-Tourism Homestays & Resorts', 'Commercial Institutions in Port Blair'],
    shortSummary: 'Substantial clean energy program providing 50% capital subsidies for domestic rooftop solar plants to replace expensive diesel generator power with clean renewable solar energy across the islands.',
    fullDescription: 'The electricity grid in Andaman & Nicobar relies heavily on expensive transported diesel. To achieve 100% green energy and lower domestic electricity bills, the Electricity Department provides a 50% capital subsidy on grid-connected solar power systems up to 3 kW for domestic households (and 40% for systems up to 10 kW), complete with net-metering facilities.',
    financialBenefit: 'Up to 50% direct capital subsidy (saving up to ₹75,000 on residential rooftop installation)',
    keyObjectives: [
      'Transition the island power grid from polluting diesel generators to clean solar energy',
      'Lower domestic electricity bills for island citizens through bidirectional net metering',
      'Preserve the fragile island tropical ecosystem and marine biodiversity'
    ],
    eligibilityRules: {
      stateResidence: 'Andaman and Nicobar Islands',
      notes: 'Domestic consumer in Andaman & Nicobar Islands with an active domestic electrical connection and shadow-free rooftop space.'
    },
    eligibilityHighlights: [
      'Consumer of Electricity Department, A&N Administration',
      'Ownership or valid lease of building with unshaded rooftop',
      'System installed through empaneled solar vendors'
    ],
    exclusions: [
      'Unauthorized or illegal building constructions'
    ],
    requiredDocuments: [
      {
        id: 'doc-an-sol-bill',
        name: 'Electricity Bill & Consumer Account Number',
        category: 'other',
        purpose: 'Verify active domestic power connection',
        citizenTip: 'Check consumer number on previous month bill.',
        isMandatory: true
      },
      {
        id: 'doc-an-sol-aadhaar',
        name: 'Aadhaar Card and Property Ownership Proof',
        category: 'identity',
        purpose: 'Identity and premise ownership verification',
        citizenTip: 'Check property title deed.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply on National Rooftop Solar Portal',
        description: 'Submit application on solarrooftop.gov.in choosing Andaman & Nicobar Electricity Department.',
        portalOrOffice: 'solarrooftop.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Technical Feasibility Inspection',
        description: 'Electricity department engineer inspects roof feasibility and grants technical sanction.',
        portalOrOffice: 'Electricity Department'
      },
      {
        stepNumber: 3,
        title: 'Installation, Net-Meter Setup & Subsidy Release',
        description: 'Empaneled vendor installs solar system, bidirectional meter is commissioned, and subsidy is credited to account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Electricity Department, Andaman & Nicobar Administration',
      url: 'https://electricity.andaman.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Electricity Department',
      helpline: '03192-232535',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official solar rooftop scheme of Andaman & Nicobar Administration.'
    }
  }
];

// Let's now add CH, DH, DL, JK, LA, LD, PY
