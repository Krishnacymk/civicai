const fs = require('fs');

const content = fs.readFileSync('D:/civicai/frontend/src/data/schemes.ts', 'utf8');
const arrayCode = content.substring(
  content.indexOf('export const SCHEMES: Scheme[] = [') + 'export const SCHEMES: Scheme[] = '.length,
  content.indexOf('export const CATEGORIES_CONFIG =')
).trim().replace(/;\s*$/, '');
const existingSchemes = eval(arrayCode);

const apSchemes = existingSchemes.filter(s => s.stateCode === 'AP');
const tgSchemes = existingSchemes.filter(s => s.stateCode === 'TG');
const tnSchemes = existingSchemes.filter(s => s.stateCode === 'TN');

const newApScheme = {
  id: 'ap-deepam-free-lpg',
  name: 'AP Deepam 2.0 (Free LPG Cylinder Scheme - Andhra Pradesh)',
  hindiName: 'आंध्र प्रदेश दीपम 2.0 मुफ्त एलपीजी सिलेंडर योजना',
  teluguName: 'ఆంధ్రప్రదేశ్ దీపం 2.0 ఉచిత గ్యాస్ సిలిండర్ల పథకం',
  tamilName: 'ஆந்திரப் பிரதேசம் தீபம் 2.0 இலவச எரிவாயு சிலிண்டர் திட்டம்',
  tagline: 'Three 100% free domestic LPG cylinder refills per year for BPL White Ration Card holding families under Super Six guarantees.',
  category: 'women',
  categoryLabel: 'Women & Child Development',
  geographicScope: 'State Scheme (Andhra Pradesh)',
  stateApplicability: 'Andhra Pradesh',
  isCentral: false,
  governmentLevel: 'state',
  jurisdictionType: 'state',
  stateCode: 'AP',
  administeringGovernment: 'Government of Andhra Pradesh',
  schemeStatus: 'active',
  languages: ['en', 'te'],
  lifeStage: 'parent',
  beneficiaries: ['BPL Households', 'Rural and Urban Women', 'Deepam and Ujjwala Gas Beneficiaries'],
  shortSummary: 'Financial reimbursement covering 100% cost of three 14.2 kg domestic LPG refills every year directly deposited into the woman head of household bank account.',
  fullDescription: 'Under the flagship Super Six governance guarantees, the Government of Andhra Pradesh provides three free domestic cooking gas refills every financial year to all eligible households possessing an active Rice Card (White Ration Card), eliminating household pollution and financial stress.',
  financialBenefit: '3 Free LPG Cylinders per year (DBT subsidy reimbursement of ~₹850-₹890 per cylinder)',
  keyObjectives: [
    'Provide clean cooking fuel to all low-income households in Andhra Pradesh without financial burden',
    'Protect the health of rural women and children from respiratory ailments caused by firewood and biomass smoke',
    'Deliver prompt 48-hour Direct Benefit Transfer (DBT) subsidy reimbursement after cylinder delivery'
  ],
  eligibilityRules: {
    targetGender: 'female',
    isBPLRequired: true,
    stateResidence: 'Andhra Pradesh',
    notes: 'Must possess an active Andhra Pradesh Rice Card (White Ration Card) and an active domestic LPG consumer connection linked to Aadhaar.'
  },
  eligibilityHighlights: [
    'Permanent resident of Andhra Pradesh holding an active White Ration Card / Rice Card',
    'Single active domestic LPG connection in the name of the female applicant or family member',
    'Aadhaar-seeded bank account enabled for NPCI Direct Benefit Transfer'
  ],
  exclusions: [
    'Commercial gas connection holders',
    'Families without active Andhra Pradesh Rice Card / BPL food security status',
    'Regular government and public sector permanent employees'
  ],
  requiredDocuments: [
    {
      id: 'doc-ap-deepam-rice',
      name: 'Andhra Pradesh Rice Card (White Ration Card)',
      category: 'income',
      purpose: 'Verification of BPL household status and beneficiary mapping',
      citizenTip: 'Check at your local Grama/Ward Sachivalayam that all family member Aadhaar numbers are seeded on the Rice Card.',
      isMandatory: true
    },
    {
      id: 'doc-ap-deepam-aadhaar',
      name: 'Aadhaar Card of Woman Applicant',
      category: 'identity',
      purpose: 'Biometric identity verification and DBT credit routing',
      citizenTip: 'Ensure your Aadhaar is linked to your active bank account.',
      isMandatory: true
    },
    {
      id: 'doc-ap-deepam-lpg',
      name: 'Domestic LPG Consumer Passbook / Subscription Voucher',
      category: 'other',
      purpose: 'Verification of consumer ID and oil marketing company linkage (IOCL, BPCL, HPCL)',
      citizenTip: 'Keep your 17-digit LPG ID handy during Sachivalayam mapping.',
      isMandatory: true
    }
  ],
  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Book Regular LPG Cylinder with Gas Agency',
      description: 'Book your 14.2 kg refill through IVRS, WhatsApp, or distributor app (Indane, Bharatgas, or HP Gas).',
      portalOrOffice: 'Gas Agency IVRS / App'
    },
    {
      stepNumber: 2,
      title: 'Pay and Receive Cylinder Delivery',
      description: 'Accept the delivered cylinder and pay the delivery agent. Keep the cash memo and delivery invoice.',
      portalOrOffice: 'Doorstep Delivery'
    },
    {
      stepNumber: 3,
      title: 'Automated 48-Hour DBT Subsidy Transfer',
      description: 'The state government verifies the delivery electronically with OMC and credits the full subsidy to your bank within 48 hours.',
      portalOrOffice: 'Direct Benefit Transfer'
    }
  ],
  officialSource: {
    name: 'Government of Andhra Pradesh - Civil Supplies Department',
    url: 'https://ap.gov.in',
    lastVerifiedDate: 'October 2026',
    department: 'Consumer Affairs, Food & Civil Supplies Department',
    helpline: '1967',
    verificationStatus: 'verified',
    linkStatus: 'accessible',
    verificationNotes: 'Official Super Six welfare guarantee administered statewide by Government of Andhra Pradesh.'
  }
};

const kaSchemes = [
  {
    id: 'ka-gruha-lakshmi',
    name: 'Gruha Lakshmi Scheme (Karnataka)',
    hindiName: 'गृह लक्ष्मी योजना (कर्नाटक)',
    teluguName: 'గృహ లక్ష్మి పథకం (కర్ణాటక)',
    tamilName: 'கிரக லட்சுமி திட்டம் (கர்நாடகா)',
    tagline: 'Direct financial assistance of ₹2,000 per month to female heads of eligible households in Karnataka.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Karnataka)',
    stateApplicability: 'Karnataka',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KA',
    administeringGovernment: 'Government of Karnataka',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'kn'],
    lifeStage: 'parent',
    beneficiaries: ['Women Heads of Household', 'Antyodaya & BPL Cardholders', 'APL Cardholders'],
    shortSummary: 'Monthly financial guarantee of ₹2,000 transferred via DBT directly into the bank account of the designated female head of family.',
    fullDescription: 'Gruha Lakshmi is one of the five flagship guarantees of the Government of Karnataka, designed to eliminate gender poverty, empower homemakers, and recognize the unpaid domestic labor of female family heads across Karnataka.',
    financialBenefit: '₹2,000 / month (₹24,000 per year via DBT)',
    keyObjectives: [
      'Provide monthly basic income guarantee to women heads of family in Karnataka',
      'Enhance financial autonomy and household purchasing power',
      'Eliminate informal usurious borrowing for basic grocery and medical needs'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Karnataka',
      notes: 'Must be designated as the female head of family on an active Antyodaya, BPL, or APL ration card issued by Government of Karnataka.'
    },
    eligibilityHighlights: [
      'Permanent resident of Karnataka designated as woman head on ration card',
      'Only one female head per ration card is eligible',
      'Aadhaar-seeded bank account enabled for NPCI Direct Benefit Transfer'
    ],
    exclusions: [
      'Female heads or their husbands who are income tax payers',
      'Female heads or their husbands who file GST returns',
      'Government and public sector permanent employees'
    ],
    requiredDocuments: [
      {
        id: 'doc-ka-gl-ration',
        name: 'Karnataka Ration Card (BPL / Antyodaya / APL Card)',
        category: 'income',
        purpose: 'Identification of designated woman head of household',
        citizenTip: 'Check at your local Grama One or Karnataka One center that the ration card specifies you as head.',
        isMandatory: true
      },
      {
        id: 'doc-ka-gl-aadhaar',
        name: 'Aadhaar Card of Woman Beneficiary and Spouse',
        category: 'identity',
        purpose: 'Biometric identification and tax exclusion checks',
        citizenTip: 'Aadhaar must be linked to your active bank account for DBT credits.',
        isMandatory: true
      },
      {
        id: 'doc-ka-gl-bank',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Monthly credit destination for the ₹2,000 grant',
        citizenTip: 'Confirm NPCI mapping with your bank manager to avoid failed transactions.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'SMS Appointment / Direct Center Visit',
        description: 'Send SMS with ration card number to 1902/8147500500 to get slot or visit nearest Grama One, Karnataka One, or Bapuji Seva Kendra.',
        portalOrOffice: 'Grama One / Karnataka One'
      },
      {
        stepNumber: 2,
        title: 'Biometric Verification and Form Submission',
        description: 'Operator verifies ration card details, husband Aadhaar, and takes OTP or biometric authentication.',
        portalOrOffice: 'Seva Sindhu Portal'
      },
      {
        stepNumber: 3,
        title: 'DBT Sanction and Monthly Transfer',
        description: 'Once approved by Women & Child Development Department, ₹2,000 is credited monthly directly into the bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Government of Karnataka',
      url: 'https://sevasindhu.karnataka.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Women & Child Development',
      helpline: '1902',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship guarantee scheme with dedicated Seva Sindhu portal integration.'
    }
  },
  {
    id: 'ka-gruha-jyothi',
    name: 'Gruha Jyothi Scheme (Karnataka)',
    hindiName: 'गृह ज्योति योजना (कर्नाटक)',
    teluguName: 'గృహ జ్యోతి పథకం (కర్ణాటక)',
    tamilName: 'கிரக ஜோதி திட்டம் (கர்நாடகா)',
    tagline: 'Zero electricity bills for domestic households consuming up to 200 units per month.',
    category: 'housing',
    categoryLabel: 'Housing & Clean Energy',
    geographicScope: 'State Scheme (Karnataka)',
    stateApplicability: 'Karnataka',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KA',
    administeringGovernment: 'Government of Karnataka',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'kn'],
    lifeStage: 'all',
    beneficiaries: ['Domestic Power Consumers', 'Tenants & Homeowners', 'Rural & Urban Households'],
    shortSummary: 'Provides up to 200 units of free electricity every month to residential domestic consumers across Karnataka, resulting in zero monthly electricity bills.',
    fullDescription: 'Gruha Jyothi provides universal relief against rising living costs by making residential domestic electricity consumption free up to 200 units per month, calculated based on the consumer 12-month historical average plus a 10% allowance.',
    financialBenefit: 'Up to 200 units free monthly domestic power (Savings of up to ₹1,400 - ₹1,800/month)',
    keyObjectives: [
      'Alleviate electricity expenditure for middle-class and poor households across Karnataka',
      'Incentivize domestic energy conservation below the 200-unit ceiling',
      'Provide zero-bill electricity to over 1.5 crore domestic power connections'
    ],
    eligibilityRules: {
      stateResidence: 'Karnataka',
      notes: 'Must possess an active domestic electricity consumer connection (Account ID) in Karnataka linked to Aadhaar. Tenants can apply using their rental agreement.'
    },
    eligibilityHighlights: [
      'Applies to all domestic/residential electricity connections across all ESCOMs',
      'Both house owners and tenants residing in Karnataka are eligible',
      'Average monthly consumption over previous 12 months must not exceed 200 units'
    ],
    exclusions: [
      'Commercial, industrial, or temporary electrical installations',
      'Domestic consumers whose average consumption exceeds 200 units/month'
    ],
    requiredDocuments: [
      {
        id: 'doc-ka-gj-bill',
        name: 'Electricity Bill with Account ID',
        category: 'other',
        purpose: 'Verification of domestic consumer number and ESCOM installation',
        citizenTip: 'Check your 10-digit Account ID printed on any recent BESCOM, MESCOM, or HESCOM bill.',
        isMandatory: true
      },
      {
        id: 'doc-ka-gj-aadhaar',
        name: 'Aadhaar Card of Consumer / Tenant',
        category: 'identity',
        purpose: 'One-connection per person deduplication authentication',
        citizenTip: 'Only one installation can be linked per Aadhaar card.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Open Seva Sindhu Gruha Jyothi Portal',
        description: 'Navigate to sevasindhugs.karnataka.gov.in and click Gruha Jyothi.',
        portalOrOffice: 'sevasindhugs.karnataka.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Enter ESCOM, Account ID & Aadhaar',
        description: 'Select your ESCOM (BESCOM, HESCOM, etc.), type your Account ID, and authenticate using Aadhaar OTP.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Automated Net-Zero Billing Activation',
        description: 'Starting from the next billing cycle, if consumption is within entitled units, a Zero Bill is issued.',
        portalOrOffice: 'Monthly Electricity Bill'
      }
    ],
    officialSource: {
      name: 'Energy Department, Government of Karnataka',
      url: 'https://sevasindhugs.karnataka.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Energy Department & Karnataka ESCOMs',
      helpline: '1912',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship free electricity guarantee under Energy Department of Karnataka.'
    }
  },
  {
    id: 'ka-shakti-scheme',
    name: 'Shakti Scheme (Karnataka Free Bus Travel for Women)',
    hindiName: 'शक्ति योजना (कर्नाटक)',
    teluguName: 'శక్తి పథకం (మహిళలకు ఉచిత బస్సు ప్రయాణం)',
    tamilName: 'சக்தி திட்டம் (மகளிர் இலவச பேருந்து பயணம்)',
    tagline: '100% fare-free public bus travel for women and girl students across Karnataka state road transport corporations.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Karnataka)',
    stateApplicability: 'Karnataka',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KA',
    administeringGovernment: 'Government of Karnataka',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'kn'],
    lifeStage: 'all',
    beneficiaries: ['Women Residents of Karnataka', 'College & School Girls', 'Transgender Persons'],
    shortSummary: 'Zero-fare public bus transportation for all female residents and students across four Karnataka state transport corporations (KSRTC, BMTC, NWKRTC, KKRTC).',
    fullDescription: 'Shakti Scheme provides free mobility to all women and transgender residents of Karnataka, allowing them to travel free of cost in non-premium ordinary, city, and express buses operated by KSRTC, BMTC, NWKRTC, and KKRTC.',
    financialBenefit: '100% Free Bus Travel (Average monthly savings of ₹1,200 - ₹2,500 per commuter)',
    keyObjectives: [
      'Promote female labor force participation by reducing commuting costs',
      'Ensure safe, universal public mobility for women and students',
      'Encourage girl student enrollment in secondary and higher education'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Karnataka',
      notes: 'Open to all women and transgender persons who are permanent residents of Karnataka.'
    },
    eligibilityHighlights: [
      'All women, girl students, and transgender residents of Karnataka',
      'No income, age, caste, or employment restrictions',
      'Valid on intra-state routes within Karnataka'
    ],
    exclusions: [
      'Luxury and premium bus services (Airavat, Club Class, Flybus, EV Power Plus, Sleeper coaches)',
      'Inter-state journeys traveling beyond Karnataka state borders'
    ],
    requiredDocuments: [
      {
        id: 'doc-ka-shakti-id',
        name: 'Government Photo ID with Karnataka Address (Aadhaar / Voter ID / Driving License)',
        category: 'identity',
        purpose: 'Proof of female identity and Karnataka residential address',
        citizenTip: 'Show original physical ID or DigiLocker copy to the conductor upon boarding to get zero-fare ticket.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Board Any State Corporation Bus',
        description: 'Board any ordinary, express, or city bus operated by KSRTC, BMTC, NWKRTC, or KKRTC.',
        portalOrOffice: 'Bus Stop / Terminal'
      },
      {
        stepNumber: 2,
        title: 'Show Karnataka Address Photo ID',
        description: 'Present your Aadhaar or government ID proving Karnataka domicile to the bus conductor.',
        portalOrOffice: 'Bus Conductor'
      },
      {
        stepNumber: 3,
        title: 'Receive Zero-Fare Shakti Ticket',
        description: 'The conductor prints a Zero-Fare Shakti Ticket for your travel destination at no charge.',
        portalOrOffice: 'Immediate on Bus'
      }
    ],
    officialSource: {
      name: 'Transport Department, Government of Karnataka',
      url: 'https://ksrtc.karnataka.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Transport Department & KSRTC',
      helpline: '080-49596666',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship women free transit policy enacted under Government of Karnataka.'
    }
  },
  {
    id: 'ka-yuva-nidhi',
    name: 'Yuva Nidhi Scheme (Karnataka Graduate & Diploma Stipend)',
    hindiName: 'युवा निधि योजना (कर्नाटक)',
    teluguName: 'యువ నిధి పథకం (నిరుద్యోగ గ్రాడ్యుయేట్ సాయం)',
    tamilName: 'யுவ நிதி திட்டம் (படித்த இளைஞர் உதவித்தொகை)',
    tagline: 'Monthly unemployment allowance of ₹3,000 for degree graduates and ₹1,500 for diploma holders for up to two years.',
    category: 'unemployment-skills',
    categoryLabel: 'Unemployment & Skills',
    geographicScope: 'State Scheme (Karnataka)',
    stateApplicability: 'Karnataka',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KA',
    administeringGovernment: 'Government of Karnataka',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'kn'],
    lifeStage: 'youth',
    beneficiaries: ['Unemployed Graduates', 'Diploma Holders', 'Fresh College Pass-outs'],
    shortSummary: 'Monthly financial unemployment relief of ₹3,000 for degree graduates and ₹1,500 for diploma holders who remain unplaced after graduation.',
    fullDescription: 'Yuva Nidhi provides financial protection to fresh graduates and diploma holders from Karnataka universities who have completed their degrees and remained unemployed for at least 180 days, supporting them with up to 24 months of monthly stipends alongside free skill training.',
    financialBenefit: '₹3,000 / month for Graduates; ₹1,500 / month for Diploma holders (up to 24 months)',
    keyObjectives: [
      'Provide financial stability to educated youth searching for jobs',
      'Prevent financial distress and cover application and interview expenses',
      'Connect unemployed graduates with state-sponsored skill development courses'
    ],
    eligibilityRules: {
      stateResidence: 'Karnataka',
      educationLevel: ['Bachelor Degree', 'Diploma'],
      notes: 'Must have graduated from recognized Karnataka universities and remained unemployed/unplaced for at least 180 days after graduation.'
    },
    eligibilityHighlights: [
      'Permanent resident of Karnataka who completed graduation or diploma',
      'Unemployed after graduation and not pursuing higher education full-time',
      'Not employed in government, private sector, or self-employment with PF/ESIC'
    ],
    exclusions: [
      'Candidates employed in government, private sector, or holding active GST/EPF accounts',
      'Students actively enrolled in full-time regular post-graduate studies',
      'Apprenticeship stipend recipients'
    ],
    requiredDocuments: [
      {
        id: 'doc-ka-yn-degree',
        name: 'Degree or Diploma Passing Certificate & Marks Cards',
        category: 'academic',
        purpose: 'Verification of university completion and passing year',
        citizenTip: 'NAD/DigiLocker verified certificates speed up approval.',
        isMandatory: true
      },
      {
        id: 'doc-ka-yn-aadhaar',
        name: 'Aadhaar Card and Domicile Certificate',
        category: 'identity',
        purpose: 'Proof of age and Karnataka residence',
        citizenTip: 'Ensure your Aadhaar is linked to the bank account for monthly DBT.',
        isMandatory: true
      },
      {
        id: 'doc-ka-yn-selfdec',
        name: 'Self-Declaration of Unemployment',
        category: 'other',
        purpose: 'Legal declaration confirming non-employment and non-enrollment in higher studies',
        citizenTip: 'Submitted digitally via OTP on the portal.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register on Seva Sindhu Portal',
        description: 'Login to sevasindhugs.karnataka.gov.in and select Yuva Nidhi registration.',
        portalOrOffice: 'sevasindhugs.karnataka.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Upload Degree Details & Complete Aadhaar eKYC',
        description: 'Fetch your degree credentials via university roll number/NAD and submit self-declaration.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement and Skill Registration',
        description: 'Receive monthly allowance directly in your bank account while accessing free skill workshops.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Skill Development, Entrepreneurship and Livelihood, Karnataka',
      url: 'https://sevasindhugs.karnataka.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Skill Development & Livelihood Department',
      helpline: '1902',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official guarantee scheme for educated unemployed youth in Karnataka.'
    }
  },
  {
    id: 'ka-anna-bhagya',
    name: 'Anna Bhagya Scheme (Karnataka Food Security & DBT)',
    hindiName: 'अन्न भाग्य योजना (कर्नाटक)',
    teluguName: 'అన్న భాగ్య పథకం (ఉచిత బియ్యం & డీబీటీ)',
    tamilName: 'அன்ன பாக்யா திட்டம் (இலவச உணவு தானியம்)',
    tagline: 'Ensures 10 kg of free foodgrains per person per month (or direct cash transfer equivalent for additional 5 kg) to BPL/Antyodaya households.',
    category: 'low-income-welfare',
    categoryLabel: 'Food & Essential Welfare',
    geographicScope: 'State Scheme (Karnataka)',
    stateApplicability: 'Karnataka',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KA',
    administeringGovernment: 'Government of Karnataka',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'kn'],
    lifeStage: 'all',
    beneficiaries: ['Antyodaya Anna Yojana (AAY) Families', 'Priority Household (PHH) BPL Cardholders'],
    shortSummary: 'Guarantees 10 kg free rice per person per month by providing 5 kg under central NFSA and the remaining 5 kg in cash DBT directly deposited at ₹34 per kg into the cardholder bank account.',
    fullDescription: 'Anna Bhagya ensures food and nutritional sovereignty across Karnataka by expanding free foodgrain entitlements to 10 kg per beneficiary per month. The additional 5 kg entitlement is credited as Direct Benefit Transfer (DBT) cash at ₹34/kg (₹170 per person per month) directly to the bank account of the head of family.',
    financialBenefit: '5 kg free central rice + ₹170 cash DBT per person per month (₹850/month for family of 5)',
    keyObjectives: [
      'Eliminate hunger and undernutrition across low-income families in Karnataka',
      'Provide cash flexibility through direct benefit transfer for buying local nutritious grains',
      'Ensure 100% biometric transparency in Public Distribution System entitlements'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      stateResidence: 'Karnataka',
      notes: 'Must hold a valid Antyodaya Anna Yojana (AAY) or Priority Household (PHH) BPL ration card in Karnataka.'
    },
    eligibilityHighlights: [
      'Holders of valid BPL / Antyodaya Ration Cards issued by Government of Karnataka',
      'All listed family members seeded with Aadhaar in the food database',
      'Active bank account linked to the designated head of household'
    ],
    exclusions: [
      'APL cardholders (Above Poverty Line non-priority cards)',
      'Income tax payers and commercial vehicle owners with luxury registrations'
    ],
    requiredDocuments: [
      {
        id: 'doc-ka-ab-ration',
        name: 'Karnataka BPL / AAY Ration Card',
        category: 'income',
        purpose: 'Entitlement calculation and family member count verification',
        citizenTip: 'Check your status on ahara.kar.nic.in under DBT status menu.',
        isMandatory: true
      },
      {
        id: 'doc-ka-ab-aadhaar',
        name: 'Aadhaar of All Listed Family Members',
        category: 'identity',
        purpose: 'Biometric deduplication and ePOS fair price shop distribution',
        citizenTip: 'Ensure 100% Aadhaar seeding of all family members.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Automatic Enrolment via Existing BPL Card',
        description: 'All existing active BPL and AAY cardholders are automatically enrolled; no separate application is needed.',
        portalOrOffice: 'ahara.kar.nic.in'
      },
      {
        stepNumber: 2,
        title: 'Collect 5 kg Free Rice at Fair Price Shop',
        description: 'Authenticate through biometric ePOS at your designated Fair Price Shop (ration shop) to collect central 5 kg rice.',
        portalOrOffice: 'Fair Price Shop'
      },
      {
        stepNumber: 3,
        title: 'Monthly Cash DBT Credit for Additional 5 kg',
        description: 'The cash equivalent of the state share (₹34/kg) is credited directly to the cardholder bank account every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Food, Civil Supplies & Consumer Affairs Department, Karnataka',
      url: 'https://ahara.kar.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Food, Civil Supplies & Consumer Affairs Department',
      helpline: '1967',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship food security guarantee administered across Karnataka.'
    }
  }
];

const klSchemes = [
  {
    id: 'kl-karunya-kasp',
    name: 'Karunya Arogya Suraksha Padhathi (KASP - Kerala)',
    hindiName: 'कारुण्या आरोग्य सुरक्षा पद्धति (केरल)',
    teluguName: 'కారుణ్య ఆరోగ్య సురక్ష పథకం (కేరళ)',
    tamilName: 'காருண்யா ஆரோக்கிய சுரக்ஷா திட்டம் (கேரளா)',
    tagline: 'Cashless hospitalization cover of up to ₹5,00,000 per family per year for secondary and tertiary care across 1,600+ empaneled hospitals.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Kerala)',
    stateApplicability: 'Kerala',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KL',
    administeringGovernment: 'Government of Kerala',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'ml'],
    lifeStage: 'all',
    beneficiaries: ['BPL Ration Card Families', 'Vulnerable APL Families', 'Senior Citizens'],
    shortSummary: 'Comprehensive public healthcare insurance providing up to ₹5 Lakh per family per year in cashless hospitalization across government and private empaneled hospitals.',
    fullDescription: 'KASP converges state medical relief initiatives with national healthcare guarantees, protecting over 42 lakh poor and vulnerable families in Kerala from catastrophic health expenditures across 1,600+ secondary and tertiary medical treatments.',
    financialBenefit: 'Up to ₹5,00,000 per family per year in cashless hospitalization',
    keyObjectives: [
      'Eliminate out-of-pocket medical expenditure for poor and vulnerable families in Kerala',
      'Provide cashless treatment for critical conditions like cardiology, oncology, neurosurgery, and nephrology',
      'Integrate seamless health access across state medical colleges and private healthcare providers'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      stateResidence: 'Kerala',
      notes: 'Must possess an active Yellow (AAY) or Pink (PHH) ration card in Kerala, or designated eligible Blue ration cards under state health norms.'
    },
    eligibilityHighlights: [
      'Holders of Yellow (AAY) and Pink (PHH) Ration Cards in Kerala',
      'Pre-existing diseases covered from day one without waiting period',
      'Family floater coverage without cap on family size'
    ],
    exclusions: [
      'Non-priority White ration card holders with annual income exceeding ₹3 Lakh',
      'Families covered under government employee and pensioner medical insurance (MEDISEP)'
    ],
    requiredDocuments: [
      {
        id: 'doc-kl-kasp-ration',
        name: 'Kerala Ration Card (Yellow / Pink Card)',
        category: 'income',
        purpose: 'Verification of family membership and priority economic status',
        citizenTip: 'Bring original ration card to the hospital KASP helpdesk.',
        isMandatory: true
      },
      {
        id: 'doc-kl-kasp-aadhaar',
        name: 'Aadhaar Card of Patient and Family Members',
        category: 'identity',
        purpose: 'Biometric verification and Golden Card generation',
        citizenTip: 'Aadhaar e-KYC can be done on the spot at hospital helpdesk.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Eligibility Online or at Empaneled Hospital',
        description: 'Verify your name on sha.kerala.gov.in or visit the KASP kiosk at any government taluk hospital or medical college.',
        portalOrOffice: 'sha.kerala.gov.in / KASP Helpdesk'
      },
      {
        stepNumber: 2,
        title: 'Generate KASP Beneficiary Golden Card',
        description: 'Arogyamithra operator verifies ration card and Aadhaar to generate digital Golden Card.',
        portalOrOffice: 'Hospital KASP Desk'
      },
      {
        stepNumber: 3,
        title: 'Avail 100% Cashless Hospital Treatment',
        description: 'Surgeries, medicines, ICU care, diagnostics, and 15 days post-discharge medications are fully covered.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'State Health Agency (SHA), Government of Kerala',
      url: 'https://sha.kerala.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department',
      helpline: '1056',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship health protection framework managed by State Health Agency Kerala.'
    }
  },
  {
    id: 'kl-aaswasakiranam',
    name: 'Aaswasakiranam Scheme (Kerala Bedridden Patient Caregiver Assistance)',
    hindiName: 'आश्वासकिरणम योजना (केरल)',
    teluguName: 'ఆశ్వాసకిరణం పథకం (కేరళ)',
    tamilName: 'ஆஸ்வாசகிரணம் திட்டம் (கேரளா)',
    tagline: 'Monthly financial grant to family caregivers of fully bedridden mentally challenged, autistic, or chronically ill individuals.',
    category: 'disability-pwd',
    categoryLabel: 'Persons with Disabilities',
    geographicScope: 'State Scheme (Kerala)',
    stateApplicability: 'Kerala',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KL',
    administeringGovernment: 'Government of Kerala',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'ml'],
    lifeStage: 'all',
    beneficiaries: ['Caregivers of Bedridden Patients', 'Patients with Severe Autism / Cerebral Palsy', 'BPL Families'],
    shortSummary: 'Monthly financial stipend provided to informal family caregivers who cannot take up employment because they provide round-the-clock physical care to bedridden relatives.',
    fullDescription: 'Implemented by the Kerala Social Security Mission (KSSM), Aaswasakiranam provides monthly financial support to family members who act as full-time caregivers for individuals who are 100% bedridden, severely intellectually impaired, or coping with brittle bone disease or terminal conditions.',
    financialBenefit: '₹600 / month direct pension to family caregiver via DBT',
    keyObjectives: [
      'Recognize and compensate unpaid, full-time informal caregivers in poor families',
      'Provide basic nutritional and medical sustenance for bedridden citizens',
      'Prevent abandonment of critically disabled and bedridden individuals'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      stateResidence: 'Kerala',
      minDisabilityPercentage: 80,
      notes: 'Patient must be 100% bedridden or have severe benchmark disability requiring constant assistance. Family must belong to BPL category.'
    },
    eligibilityHighlights: [
      'Patient must be completely bedridden due to physical/mental illness or advanced age',
      'Caregiver must be a close relative providing dedicated full-time physical care',
      'Family must possess BPL ration card or annual income certificate below ₹1 Lakh'
    ],
    exclusions: [
      'Patients residing in government institutional rehabilitation homes or private paid care centers',
      'Caregivers who are employed in government or formal private sector jobs'
    ],
    requiredDocuments: [
      {
        id: 'doc-kl-ak-medical',
        name: 'Medical Certificate from Government Doctor (Assistant Surgeon or above)',
        category: 'medical',
        purpose: 'Certification that patient is 100% bedridden requiring constant full-time caregiver',
        citizenTip: 'Obtain from your local Community Health Centre (CHC) or Taluk Hospital.',
        isMandatory: true
      },
      {
        id: 'doc-kl-ak-bpl',
        name: 'BPL Ration Card / Income Certificate',
        category: 'income',
        purpose: 'Verification of below-poverty-line family status',
        citizenTip: 'Issued by village officer or local body secretary.',
        isMandatory: true
      },
      {
        id: 'doc-kl-ak-bank',
        name: 'Bank Passbook of Caregiver',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Account must be in caregiver name with Aadhaar linkage.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Obtain Doctor Certification and Fill Application',
        description: 'Download form from socialsecuritymission.gov.in and get it signed by medical officer and local self-government body.',
        portalOrOffice: 'socialsecuritymission.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Submit to Grama Panchayat / Municipal Office',
        description: 'Submit completed dossier to the ICDS Child Development Project Officer (CDPO) or local body secretary.',
        portalOrOffice: 'ICDS / CDPO Office'
      },
      {
        stepNumber: 3,
        title: 'Field Verification and Monthly DBT Sanction',
        description: 'KSSM inspects the case and activates monthly direct benefit transfer directly to the caregiver bank account.',
        portalOrOffice: 'KSSM Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Kerala Social Security Mission (KSSM), Government of Kerala',
      url: 'https://socialsecuritymission.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Justice Department',
      helpline: '0471-2322992',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Statutory compassionate caregiver initiative by Social Justice Department Kerala.'
    }
  },
  {
    id: 'kl-snehasparsham',
    name: 'Snehasparsham Scheme (Kerala Unwed & Vulnerable Mother Welfare)',
    hindiName: 'स्नेहस्पर्शम योजना (केरल)',
    teluguName: 'స్నేహస్పర్శం పథకం (కేరళ)',
    tamilName: 'ஸ்னேகஸ்பர்ஷம் திட்டம் (கேரளா)',
    tagline: 'Monthly financial sustenance and social security protection for unwed mothers and deserted women from vulnerable communities.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Kerala)',
    stateApplicability: 'Kerala',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KL',
    administeringGovernment: 'Government of Kerala',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'ml'],
    lifeStage: 'parent',
    beneficiaries: ['Unwed Mothers', 'Deserted Women', 'Tribal and Vulnerable Women'],
    shortSummary: 'Provides regular monthly financial pensions directly into the bank accounts of unwed mothers and destitute deserted women to secure their livelihood and child upbringing.',
    fullDescription: 'Administered by the Social Justice Department, Snehasparsham offers social dignity, financial self-reliance, and child support to unwed mothers who face acute social marginalization and economic distress, particularly in tribal districts like Wayanad, Palakkad, and Idukki.',
    financialBenefit: '₹2,000 / month direct pension via DBT',
    keyObjectives: [
      'Provide monthly income security to unwed mothers raising children alone',
      'Support the nutrition, education, and health of children of single mothers',
      'Prevent social exploitation and poverty traps in vulnerable tribal communities'
    ],
    eligibilityRules: {
      targetGender: 'female',
      isBPLRequired: true,
      stateResidence: 'Kerala',
      notes: 'Must be an unwed mother residing in Kerala belonging to BPL household or with family income not exceeding ₹1,00,000 per year.'
    },
    eligibilityHighlights: [
      'Unwed mother residing in Kerala raising one or more children',
      'Belonging to BPL category or certified income under ₹1,00,000/year',
      'Not remarried or living with spouse providing formal maintenance'
    ],
    exclusions: [
      'Beneficiaries receiving regular government salary or permanent pension',
      'Women whose children are formally adopted or receiving full institutional state custody'
    ],
    requiredDocuments: [
      {
        id: 'doc-kl-sn-birth',
        name: 'Birth Certificate of Child',
        category: 'identity',
        purpose: 'Proof of parenthood and dependent child status',
        citizenTip: 'Obtain certified copy from the local registrar of births.',
        isMandatory: true
      },
      {
        id: 'doc-kl-sn-bpl',
        name: 'BPL Ration Card / Income Certificate',
        category: 'income',
        purpose: 'Verification of economic eligibility and below-poverty-line status',
        citizenTip: 'Issued by village revenue officer.',
        isMandatory: true
      },
      {
        id: 'doc-kl-sn-bank',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Account must be in the mother sole name.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to ICDS Child Development Officer',
        description: 'Obtain application form from local Anganwadi worker or CDPO office and attach supporting certificates.',
        portalOrOffice: 'ICDS / Anganwadi Centre'
      },
      {
        stepNumber: 2,
        title: 'Discreet Inquiry by Social Justice Officer',
        description: 'District Social Justice Officer conducts confidential verification respecting privacy and dignity.',
        portalOrOffice: 'District Social Justice Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Direct Pension Activation',
        description: 'Upon approval, ₹2,000 is transferred monthly directly into the beneficiary bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Social Justice Department, Government of Kerala',
      url: 'https://sjd.kerala.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Justice Department',
      helpline: '0471-2306040',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Targeted affirmative social justice program by Government of Kerala.'
    }
  },
  {
    id: 'kl-vidyakiranam',
    name: 'Vidyakiranam Scheme (Kerala Disability Parent Educational Assistance)',
    hindiName: 'विद्याकिरणम योजना (केरल)',
    teluguName: 'విద్యాకిరణం పథకం (కేరళ)',
    tamilName: 'வித்யாகிரணம் திட்டம் (கேரளா)',
    tagline: 'Educational scholarship and book stipends for economically backward children whose parent(s) have benchmark disability (40%+).',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Kerala)',
    stateApplicability: 'Kerala',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KL',
    administeringGovernment: 'Government of Kerala',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'ml'],
    lifeStage: 'student',
    beneficiaries: ['Children of Disabled Parents', 'School and College Students', 'BPL Families'],
    shortSummary: 'Financial educational scholarships provided for 10 months every academic year to school and college students whose mother or father lives with physical or sensory disability.',
    fullDescription: 'Vidyakiranam protects children from dropping out of school or college due to economic distress caused by their parents disability. The Social Justice Department provides annual educational grants categorized across Class 1 to Post-Graduation and Professional courses.',
    financialBenefit: '₹350 to ₹1,000 / month scholarship for 10 months per academic year (₹3,500 to ₹10,000 / year)',
    keyObjectives: [
      'Ensure uninterrupted primary, secondary, and higher education for children of disabled parents',
      'Alleviate educational and transport expenses for families living with disability',
      'Encourage children of PwD parents to complete professional degrees and ITI diplomas'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      stateResidence: 'Kerala',
      minDisabilityPercentage: 40,
      notes: 'Either father or mother (or both) must have benchmark disability certificate of 40% or more. Student must be enrolled in recognized educational institution.'
    },
    eligibilityHighlights: [
      'Student enrolled in recognized government or aided school/college in Kerala',
      'Either parent possesses UDID card or medical board disability certificate (40%+)',
      'Family belongs to BPL category or certified annual income under ₹1,00,000'
    ],
    exclusions: [
      'Students receiving parallel complete boarding scholarships from state or central schemes',
      'Students failing or repeating the same academic grade'
    ],
    requiredDocuments: [
      {
        id: 'doc-kl-vk-pwd',
        name: 'UDID Card / Disability Certificate of Parent (≥40%)',
        category: 'disability',
        purpose: 'Proof of benchmark disability of either parent',
        citizenTip: 'Issued by district medical board.',
        isMandatory: true
      },
      {
        id: 'doc-kl-vk-study',
        name: 'Study Certificate from Head of Institution',
        category: 'academic',
        purpose: 'Verification of active enrollment, current class, and conduct',
        citizenTip: 'Signed and sealed by school principal or college dean.',
        isMandatory: true
      },
      {
        id: 'doc-kl-vk-bank',
        name: 'Bank Passbook of Student / Joint Account with Parent',
        category: 'bank',
        purpose: 'Direct scholarship deposit destination',
        citizenTip: 'Must have active IFSC and Aadhaar mapping.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through SUNEETHI Portal',
        description: 'Submit online application through suneethi.sjd.kerala.gov.in during the annual scholarship call.',
        portalOrOffice: 'suneethi.sjd.kerala.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Institutional Verification by Principal',
        description: 'The school or college verifies student attendance and marks card digitally on the portal.',
        portalOrOffice: 'School / College Portal'
      },
      {
        stepNumber: 3,
        title: 'District Social Justice Approval & DBT Release',
        description: 'District Social Justice Officer sanctions the scholarship, and funds are credited directly to the student bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Directorate of Social Justice, Government of Kerala',
      url: 'https://sjd.kerala.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Justice Department',
      helpline: '0471-2306040',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Annual educational assistance managed through Suneethi portal.'
    }
  },
  {
    id: 'kl-subhiksha-keralam',
    name: 'Subhiksha Keralam (Integrated Food Security & Fallow Land Cultivation)',
    hindiName: 'सुभिक्षा केरलम योजना',
    teluguName: 'సుభిక్ష కేరళం పథకం',
    tamilName: 'சுபிக்ஷா கேரளம் திட்டம்',
    tagline: 'Targeted production incentives, capital subsidies, and fallow land development support to make Kerala self-reliant in food production.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Kerala)',
    stateApplicability: 'Kerala',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'KL',
    administeringGovernment: 'Government of Kerala',
    schemeStatus: 'active',
    languages: ['en', 'hi', 'ml'],
    lifeStage: 'worker',
    beneficiaries: ['Farmers', 'Kudumbashree Joint Liability Groups', 'Youth Agri-Entrepreneurs'],
    shortSummary: 'Financial incentives and production subsidies provided to farmers and self-help groups bringing fallow land under paddy, tuber, vegetable, and pulse cultivation.',
    fullDescription: 'Subhiksha Keralam is an integrated flagship initiative spearheaded by the Agriculture Development & Farmers Welfare Department to achieve food self-sufficiency in Kerala by converting unused fallow lands into productive agricultural parcels with subsidies up to ₹40,000 per hectare.',
    financialBenefit: '₹40,000 / hectare subsidy for fallow land paddy & ₹30,000 / hectare for tubers and vegetables',
    keyObjectives: [
      'Bring over 25,000 hectares of fallow land under active organic cultivation',
      'Provide direct production subsidies and input kits to small farmers and Kudumbashree groups',
      'Ensure guaranteed market off-take through Horticorp and local agricultural cooperatives'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Tenant Cultivator', 'Kudumbashree JLG Member'],
      stateResidence: 'Kerala',
      notes: 'Must cultivate agricultural crops on owned or leased fallow land in Kerala. Minimum area criteria apply as per local Krishi Bhavan guidelines.'
    },
    eligibilityHighlights: [
      'Farmers, farmer groups, or Kudumbashree JLGs residing in Kerala',
      'Willing to bring documented fallow land under cultivation for at least two crop seasons',
      'Registered with local Krishi Bhavan through AIMS portal'
    ],
    exclusions: [
      'Unauthorized encroachment on forest land or public utility lands',
      'Parcels already receiving non-agricultural conversion clearances'
    ],
    requiredDocuments: [
      {
        id: 'doc-kl-sk-land',
        name: 'Land Tax Receipt / Lease Agreement for Fallow Land',
        category: 'land',
        purpose: 'Proof of land possession or registered tenancy',
        citizenTip: 'Obtain lease endorsement from Grama Panchayat Agriculture Officer.',
        isMandatory: true
      },
      {
        id: 'doc-kl-sk-aadhaar',
        name: 'Aadhaar Card of Farmer / JLG President',
        category: 'identity',
        purpose: 'Farmer identity verification on AIMS portal',
        citizenTip: 'Check your mobile linkage for portal alerts.',
        isMandatory: true
      },
      {
        id: 'doc-kl-sk-bank',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Direct subsidy transfer destination',
        citizenTip: 'Submit cancelled cheque or passbook copy.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register on Kerala AIMS Agriculture Portal',
        description: 'Create farmer profile on aims.kerala.gov.in and register your land details.',
        portalOrOffice: 'aims.kerala.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Inspection by Krishi Bhavan Agricultural Officer',
        description: 'Local Agricultural Officer inspects the fallow parcel and approves sowing plan.',
        portalOrOffice: 'Local Krishi Bhavan'
      },
      {
        stepNumber: 3,
        title: 'Sowing Verification and DBT Subsidy Credit',
        description: 'Upon verification of crop germination, the production subsidy is credited directly to the farmer bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Agriculture Development & Farmers Welfare Department, Kerala',
      url: 'https://keralaagriculture.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Agriculture Development & Farmers Welfare Department',
      helpline: '1800-425-1661',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Statewide food self-sufficiency program managed via AIMS portal.'
    }
  }
];

const allSouthSchemes = [
  ...apSchemes,
  newApScheme,
  ...tgSchemes,
  ...tnSchemes,
  ...kaSchemes,
  ...klSchemes
];

const fileContent = 'import type { Scheme } from "../../types/scheme";\n\nexport const SOUTH_STATES_SCHEMES: Scheme[] = ' + JSON.stringify(allSouthSchemes, null, 2) + ';\n';
fs.writeFileSync('D:/civicai/frontend/src/data/schemes/statesSouth.ts', fileContent, 'utf8');
console.log('South States schemes written successfully:', allSouthSchemes.length);
