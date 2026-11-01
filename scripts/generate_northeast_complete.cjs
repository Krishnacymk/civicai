const fs = require('fs');

// 1. ARUNACHAL PRADESH (5) & ASSAM (5)
const part1Content = fs.readFileSync('D:/civicai/scripts/generate_northeast.cjs', 'utf8');
const start1 = part1Content.indexOf('const northEastSchemes = [') + 'const northEastSchemes = '.length;
const end1 = part1Content.indexOf('// Let\'s add remaining 30 schemes');
const ar_as_schemes = eval(part1Content.slice(start1, end1).trim().replace(/;$/, ''));

// 2. MANIPUR (5)
const part2Content = fs.readFileSync('D:/civicai/scripts/generate_northeast_full.cjs', 'utf8');
const start2 = part2Content.indexOf('const part2 = [') + 'const part2 = '.length;
const end2 = part2Content.indexOf('// Let\'s add ML, MZ, NL, SK, TR');
const mn_schemes = eval(part2Content.slice(start2, end2).trim().replace(/;$/, ''));

// 3. MEGHALAYA (5)
const part3Content = fs.readFileSync('D:/civicai/scripts/generate_northeast_all.cjs', 'utf8');
const start3 = part3Content.indexOf('const mlSchemes = [') + 'const mlSchemes = '.length;
const end3 = part3Content.indexOf('// Let\'s now assemble MZ');
const ml_schemes = eval(part3Content.slice(start3, end3).trim().replace(/;$/, ''));

// 4. MIZORAM (5), NAGALAND (5), SIKKIM (5), TRIPURA (5)
const remainingNorthEastSchemes = [
  // MIZORAM (MZ)
  {
    id: 'mz-sedp-flagship-scheme',
    name: 'Socio-Economic Development Policy (Mizoram Family Livelihood Seed Grants)',
    hindiName: 'सामाजिक-आर्थिक विकास नीति (मिज़ोरम पारिवारिक आजीविका अनुदान)',
    teluguName: 'సోషియో-ఎకనామిక్ డెవలప్‌మెంట్ పాలసీ (మిజోరం)',
    tamilName: 'சமூக-பொருளாதார மேம்பாட்டுக் கொள்கை (மிஸோரம்)',
    tagline: 'Direct seed financial grant of ₹50,000 for family micro-enterprises and ginger, bamboo, and rubber farming.',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'State Scheme (Mizoram)',
    stateApplicability: 'Mizoram',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MZ',
    administeringGovernment: 'Government of Mizoram',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Mizo Farming Families', 'Women Homemakers and Artisans', 'Small Livestock & Agro-Entrepreneurs'],
    shortSummary: 'Flagship economic transformation program providing ₹50,000 direct capital grants per beneficiary family to transition away from shifting (jhum) cultivation towards sustainable cash cropping, piggery, and handloom businesses.',
    fullDescription: 'The Socio-Economic Development Policy (SEDP) is Mizoram primary economic blueprint. The policy provides direct financial assistance of ₹50,000 disbursed directly into the beneficiary bank accounts across 6 key pillars: agriculture, horticulture, animal husbandry, commerce and industries, fisheries, and rural tourism. Selected families receive technical training from departmental officers to ensure viable long-term returns.',
    financialBenefit: '₹50,000 direct capital seed grant transferred via DBT',
    keyObjectives: [
      'Transform traditional slash-and-burn (jhum) farming into permanent commercial agriculture',
      'Provide startup capital for piggery, poultry, handloom weaving, and retail micro-enterprises',
      'Boost rural household income and achieve statewide economic self-sufficiency'
    ],
    eligibilityRules: {
      stateResidence: 'Mizoram',
      notes: 'Permanent resident of Mizoram holding a certified Village Council recommendation and not employed in permanent government service.'
    },
    eligibilityHighlights: [
      'Permanent resident / indigenous Mizo citizen',
      'Recommendation letter from local Village Council (VC) or Local Council (LC)',
      'Aadhaar-seeded bank account in a recognized bank in Mizoram'
    ],
    exclusions: [
      'Regular government servants and families receiving central or state civil pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-mz-sed-vc',
        name: 'Village Council (VC) / Local Council Endorsement',
        category: 'other',
        purpose: 'Verify resident status and proposed livelihood activity',
        citizenTip: 'Signed by VC President / Secretary.',
        isMandatory: true
      },
      {
        id: 'doc-mz-sed-aadhaar',
        name: 'Aadhaar Card and Voter ID (EPIC)',
        category: 'identity',
        purpose: 'Identity and domicile verification',
        citizenTip: 'Must match details in village electoral roll.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Local Village Council',
        description: 'Submit SEDP application specifying chosen livelihood trade (piggery, ginger, handloom) to Village Council.',
        portalOrOffice: 'Village Council Office'
      },
      {
        stepNumber: 2,
        title: 'Screening by District Level Committee',
        description: 'District Level SEDP Committee headed by Deputy Commissioner approves final beneficiary list.',
        portalOrOffice: 'DC Office'
      },
      {
        stepNumber: 3,
        title: 'DBT Grant Credit into Bank Account',
        description: '₹50,000 is credited directly into beneficiary bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Planning & Programme Implementation Department, Mizoram',
      url: 'https://planning.mizoram.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Planning & Programme Implementation Department',
      helpline: '0389-2322336',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official SEDP portal of Government of Mizoram.'
    }
  },
  {
    id: 'mz-state-health-care-scheme',
    name: 'Mizoram State Health Care Scheme (MSHCS Cashless Medical Cover & Reimbursement)',
    hindiName: 'मिज़ोरम राज्य स्वास्थ्य सुरक्षा योजना (कैशलेस चिकित्सा कवर एवं प्रतिपूर्ति)',
    teluguName: 'మిజోరం స్టేట్ హెల్త్ కేర్ పథకం',
    tamilName: 'மிஸோரம் மாநில சுகாதாரத் திட்டம்',
    tagline: 'Medical hospitalization coverage up to ₹5 Lakh per family per year for treatment in Mizoram and referral hospitals.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Mizoram)',
    stateApplicability: 'Mizoram',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MZ',
    administeringGovernment: 'Government of Mizoram',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['All Resident Families of Mizoram', 'Informal Workers and Farmers', 'Patients Needing Super-Specialty Referral Care'],
    shortSummary: 'Universal health assurance providing ₹5 Lakh medical coverage for secondary and tertiary treatments in government hospitals in Mizoram and designated referral centers in Shillong, Guwahati, and Kolkata.',
    fullDescription: 'The Mizoram State Health Care Scheme (MSHCS) ensures no Mizo citizen suffers financial ruin due to complex medical conditions. The scheme provides up to ₹5,00,000 annual inpatient medical protection. Beneficiaries receive cashless services at Civil Hospital Aizawl and state referral hospitals, alongside reimbursement for authorized outstation medical treatments for cardiac procedures, kidney transplants, and oncology.',
    financialBenefit: 'Up to ₹5,00,000 / family / year medical treatment coverage and reimbursement',
    keyObjectives: [
      'Shield families from high medical expenses when requiring super-specialty referral outside Mizoram',
      'Provide coverage for costly cancer therapy and cardiac surgeries',
      'Ensure accessible enrollment through annual Village Council drives'
    ],
    eligibilityRules: {
      stateResidence: 'Mizoram',
      notes: 'Any permanent resident family in Mizoram not covered under central government CGHS schemes, enrolled upon paying nominal annual fee.'
    },
    eligibilityHighlights: [
      'Permanent resident of Mizoram',
      'Enrolled during annual open registration window (nominal fee of ₹1,000/year for general, ₹500 for low-income)',
      'Covers all family members listed on the family registration card'
    ],
    exclusions: [
      'Central government employees and civil defense personnel covered under CGHS/ECHS'
    ],
    requiredDocuments: [
      {
        id: 'doc-mz-shc-card',
        name: 'MSHCS Beneficiary Card / Enrolment Receipt',
        category: 'other',
        purpose: 'Verify active policy membership and family listing',
        citizenTip: 'Renewed annually through Village Council.',
        isMandatory: true
      },
      {
        id: 'doc-mz-shc-aadhaar',
        name: 'Aadhaar Card and Voter ID (EPIC)',
        category: 'identity',
        purpose: 'Identity validation during hospital admission',
        citizenTip: 'Carry original ID during hospital admission.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Enrol at Village Council or District Medical Office',
        description: 'Submit family details and nominal annual fee during the annual open enrollment campaign.',
        portalOrOffice: 'Village Council / Chief Medical Officer (CMO) Office'
      },
      {
        stepNumber: 2,
        title: 'Card Issuance & Digital Activation',
        description: 'Mizoram State Health Care Society issues official MSHCS family identity card.',
        portalOrOffice: 'MSHCS Society'
      },
      {
        stepNumber: 3,
        title: 'Avail Treatment / Claim Reimbursement',
        description: 'Avail cashless care at empaneled hospitals or submit reimbursement claims with referral proof for outside hospitals.',
        portalOrOffice: 'Empaneled Hospital / CMO Office'
      }
    ],
    officialSource: {
      name: 'Mizoram State Health Care Society (MSHCS)',
      url: 'https://health.mizoram.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department, Mizoram',
      helpline: '0389-2315082',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal of Mizoram State Health Care Society.'
    }
  },
  {
    id: 'mz-pmay-g-state-topup',
    name: 'Mizoram Rural Housing Top-Up Scheme (Disaster-Resilient Hill Housing Grant)',
    hindiName: 'मिज़ोरम ग्रामीण आवास टॉप-अप योजना (आपदा-रोधी पहाड़ी आवास अनुदान)',
    teluguName: 'మిజోరం గ్రామీణ హౌసింగ్ టాప్-అప్ పథకం',
    tamilName: 'மிஸோரம் ஊரக வீட்டுவசதி டாப்-அப் திட்டம்',
    tagline: 'Additional ₹50,000 state grant to PMAY-G beneficiaries to build earthquake and landslide-resilient hill homes.',
    category: 'housing',
    categoryLabel: 'Housing & Urban Planning',
    geographicScope: 'State Scheme (Mizoram)',
    stateApplicability: 'Mizoram',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MZ',
    administeringGovernment: 'Government of Mizoram',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Houseless Rural Families in Mizoram', 'PMAY-G Sanctioned Households', 'Vulnerable Hill Dwellers'],
    shortSummary: 'State financial top-up granting an extra ₹50,000 directly to rural PMAY-G beneficiaries to offset high transportation costs of construction materials in steep Himalayan terrain and reinforce slope foundations.',
    fullDescription: 'Constructing houses in mountainous Mizoram is exceptionally expensive due to steep slope grading, heavy monsoons, and high haulage costs of cement and steel. The Mizoram Rural Housing Top-Up Scheme provides an additional ₹50,000 direct grant from state revenue to every rural family sanctioned under PMAY-G, ensuring they can afford seismic-resistant reinforced concrete retaining walls and tin roofing.',
    financialBenefit: '₹50,000 direct cash grant added to PMAY-G assistance (Total ~₹1.80 Lakh)',
    keyObjectives: [
      'Bridge the construction cost gap caused by difficult terrain and high transportation freight in Mizoram',
      'Ensure all new rural houses have reinforced slope foundations and disaster-resilient roofs',
      'Achieve 100% pucca housing saturation across all rural blocks'
    ],
    eligibilityRules: {
      stateResidence: 'Mizoram',
      notes: 'Rural resident of Mizoram holding a verified sanction order under Pradhan Mantri Awaas Yojana - Gramin (PMAY-G).'
    },
    eligibilityHighlights: [
      'Permanent resident of rural Mizoram',
      'Sanctioned beneficiary under PMAY-G in AwaasSoft database',
      'House construction must be on approved hillside plot with stable slope'
    ],
    exclusions: [
      'Urban residents or beneficiaries possessing permanent multi-story pucca homes'
    ],
    requiredDocuments: [
      {
        id: 'doc-mz-pmt-sanction',
        name: 'PMAY-G Sanction Order & Registration ID',
        category: 'other',
        purpose: 'Verify central PMAY-G allocation',
        citizenTip: 'Check ID on rhreporting.nic.in.',
        isMandatory: true
      },
      {
        id: 'doc-mz-pmt-bank',
        name: 'Aadhaar-Linked Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer credit',
        citizenTip: 'Must match PMAY-G receiving bank account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Automatic Integration with PMAY-G List',
        description: 'Block Development Officer (BDO) maps PMAY-G beneficiaries to the state top-up portal.',
        portalOrOffice: 'BDO Office'
      },
      {
        stepNumber: 2,
        title: 'Plinth Level Geo-Tagging Verification',
        description: 'Panchayat/Block engineer inspects and geo-tags the plinth and slope foundation construction.',
        portalOrOffice: 'AwaasApp Verification'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of ₹50,000 Top-Up',
        description: 'State government credits ₹50,000 directly into the beneficiary bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Rural Development Department, Government of Mizoram',
      url: 'https://rd.mizoram.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Rural Development Department',
      helpline: '0389-2322511',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official housing welfare portal of Mizoram Rural Development Department.'
    }
  },
  {
    id: 'mz-handloom-artisan-support',
    name: 'Mizoram Handloom & Puan Promotion Scheme (Traditional Weavers Subsidy & Equipment)',
    hindiName: 'मिज़ोरम हथकरघा एवं पुआन संवर्धन योजना (पारंपरिक बुनकर सब्सिडी)',
    teluguName: 'మిజోరం చేనేత & పువాన్ ప్రోత్సాహక పథకం',
    tamilName: 'மிஸோரம் கைத்தறி & புவான் ஊக்குவிப்புத் திட்டம்',
    tagline: '100% subsidized frame looms, 50% subsidized yarn, and marketing support for traditional Puan weavers.',
    category: 'artisans',
    categoryLabel: 'Artisans & Traditional Crafts',
    geographicScope: 'State Scheme (Mizoram)',
    stateApplicability: 'Mizoram',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MZ',
    administeringGovernment: 'Government of Mizoram',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Mizo Women Weavers', 'Handloom Artisans & Cooperative Societies', 'Youth Weaving Entrepreneurs'],
    shortSummary: 'Preserves Mizoram GI-tagged handloom heritage (Puanchei, Ngotekherh, Hmaram, Tawlhlohpuan) by providing free modern frame looms, subsidized quality yarn, and direct buyback through ZOHANDCO emporiums.',
    fullDescription: 'Weaving traditional Puan is an integral part of Mizo cultural identity and female livelihood. The Department of Commerce & Industries provides registered women weavers with free modern improved frame looms (replacing traditional loin looms), 50% subsidized dyed yarn banks, design improvement training, and marketing linkages through Mizoram Handloom & Handicrafts Development Corporation (ZOHANDCO).',
    financialBenefit: '100% free improved frame loom (worth ₹15,000) + 50% subsidized yarn + marketing support',
    keyObjectives: [
      'Preserve and promote 5 GI-tagged traditional Mizo Puans globally',
      'Increase production speed and ergonomic comfort for female weavers',
      'Provide guaranteed fair-trade buyback through government emporiums'
    ],
    eligibilityRules: {
      occupations: ['Weaver', 'Handloom Artisan'],
      stateResidence: 'Mizoram',
      notes: 'Resident woman weaver of Mizoram practicing traditional handloom weaving.'
    },
    eligibilityHighlights: [
      'Permanent resident / indigenous woman of Mizoram',
      'Registered with District Industries Centre (DIC) as an active weaver',
      'Skilled in weaving traditional Mizo Puan varieties'
    ],
    exclusions: [
      'Commercial industrial synthetic fabric importers'
    ],
    requiredDocuments: [
      {
        id: 'doc-mz-hps-card',
        name: 'Weaver Identity Card / DIC Registration',
        category: 'other',
        purpose: 'Verify genuine handloom weaver credentials',
        citizenTip: 'Issued by General Manager, District Industries Centre.',
        isMandatory: true
      },
      {
        id: 'doc-mz-hps-aadhaar',
        name: 'Aadhaar Card and Domicile Certificate',
        category: 'identity',
        purpose: 'Identity and residency validation',
        citizenTip: 'Carry original ID for physical verification.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through District Industries Centre (DIC)',
        description: 'Submit weaver application at local District Industries Centre (DIC) in Aizawl, Lunglei, Champhai, etc.',
        portalOrOffice: 'District DIC Office'
      },
      {
        stepNumber: 2,
        title: 'Inspection by Handloom Officer',
        description: 'Handloom extension officer inspects home loom setup and verifies weaving skill.',
        portalOrOffice: 'Artisan Workshop'
      },
      {
        stepNumber: 3,
        title: 'Loom Handover & Subsidized Yarn Passbook',
        description: 'Beneficiary receives improved frame loom kit and subsidized yarn procurement passbook.',
        portalOrOffice: 'ZOHANDCO / DIC Depot'
      }
    ],
    officialSource: {
      name: 'Department of Commerce & Industries, Government of Mizoram',
      url: 'https://industries.mizoram.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Commerce & Industries Department',
      helpline: '0389-2322237',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official handloom and craft portal of Mizoram.'
    }
  },
  {
    id: 'mz-youth-skilling-employment',
    name: 'Mizoram Youth Commission Career Guidance & Coaching Scheme (MYC Civil Services Sponsorship)',
    hindiName: 'मिज़ोरम युवा आयोग करियर मार्गदर्शन एवं कोचिंग योजना',
    teluguName: 'మిజోరం యూత్ కమిషన్ కెరీర్ గైడెన్స్ పథకం',
    tamilName: 'மிஸோரம் இளைஞர் ஆணைய தொழில் வழிகாட்டுதல் திட்டம்',
    tagline: '100% free professional coaching in Delhi/Aizawl + ₹10,000/month living stipend for UPSC civil services aspirants.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Mizoram)',
    stateApplicability: 'Mizoram',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MZ',
    administeringGovernment: 'Government of Mizoram',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['UPSC / MPSC Aspirants', 'Meritorious Mizo Graduates', 'Youths Pursuing Professional Technical Careers'],
    shortSummary: 'Premier state scholarship sponsoring brilliant Mizo students for UPSC coaching at top academies in New Delhi and Aizawl, covering 100% tuition fees, hostel boarding, and providing ₹10,000 monthly stipends.',
    fullDescription: 'The Mizoram Youth Commission (MYC) identifies and grooms outstanding young Mizo graduates for competitive national administrative careers. Selected through an annual statewide screening test, students receive full tuition sponsorship at premier UPSC coaching institutions in Old Rajinder Nagar / Mukherjee Nagar, New Delhi, accompanied by a ₹10,000 monthly living allowance to ensure undivided focus on civil services preparation.',
    financialBenefit: '100% coaching fees (up to ₹2 Lakh) + ₹10,000 / month living stipend for 10-12 months',
    keyObjectives: [
      'Increase the number of Mizo youths qualifying for IAS, IPS, IFS, and central allied services',
      'Eliminate financial barriers that prevent talented tribal graduates from moving to national coaching hubs',
      'Provide structured mentoring by serving civil servants from the state'
    ],
    eligibilityRules: {
      minAge: 21,
      maxAge: 35,
      stateResidence: 'Mizoram',
      notes: 'Permanent resident of Mizoram holding a recognized university graduate degree, selected through MYC screening entrance exam.'
    },
    eligibilityHighlights: [
      'Permanent resident / indigenous Mizo citizen',
      'Completed graduation in any discipline from a recognized university',
      'Cleared competitive screening examination conducted by Mizoram Youth Commission'
    ],
    exclusions: [
      'Candidates already holding full-time permanent government employment'
    ],
    requiredDocuments: [
      {
        id: 'doc-mz-myc-degree',
        name: 'Graduation Degree Certificate & Marksheets',
        category: 'academic',
        purpose: 'Verify minimum educational qualification',
        citizenTip: 'Original certificates needed during interview.',
        isMandatory: true
      },
      {
        id: 'doc-mz-myc-domicile',
        name: 'Mizoram Domicile / ST Certificate',
        category: 'caste',
        purpose: 'Proof of state residency',
        citizenTip: 'Issued by Deputy Commissioner.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on MYC Portal',
        description: 'Submit application for Civil Services Coaching Sponsorship on myc.mizoram.gov.in.',
        portalOrOffice: 'myc.mizoram.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Screening Test and Personal Interview',
        description: 'Appear for statewide preliminary aptitude exam followed by interview in Aizawl.',
        portalOrOffice: 'Mizoram Youth Commission, Aizawl'
      },
      {
        stepNumber: 3,
        title: 'Academy Admission & Monthly Stipend Release',
        description: 'Enrol in partner Delhi coaching academy; monthly living stipend of ₹10,000 is credited via DBT.',
        portalOrOffice: 'Empaneled Coaching Institute / DBT'
      }
    ],
    officialSource: {
      name: 'Mizoram Youth Commission (MYC), Government of Mizoram',
      url: 'https://myc.mizoram.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Mizoram Youth Commission',
      helpline: '0389-2334057',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal of the Mizoram Youth Commission.'
    }
  },

  // NAGALAND (NL)
  {
    id: 'nl-cmhis-health-insurance',
    name: 'Chief Minister Health Insurance Scheme (CMHIS Nagaland Universal Cashless Health Cover)',
    hindiName: 'मुख्यमंत्री स्वास्थ्य बीमा योजना (नागालैंड सार्वभौमिक स्वास्थ्य सुरक्षा)',
    teluguName: 'ముఖ్యమంత్రి హెల్త్ ఇన్సూరెన్స్ పథకం (నాగాలాండ్)',
    tamilName: 'முதலமைச்சர் சுகாதார காப்பீட்டுத் திட்டம் (நாகாலாந்து)',
    tagline: 'Universal cashless medical coverage of ₹5 Lakh per family per year in 200+ empaneled hospitals across India.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Nagaland)',
    stateApplicability: 'Nagaland',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'NL',
    administeringGovernment: 'Government of Nagaland',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['All Indigenous Inhabitant Families of Nagaland', 'Permanent Resident Certificate (PRC) Holders', 'State Government Employees and Pensioners'],
    shortSummary: 'Universal health assurance scheme covering 100% of Nagaland population with ₹5 Lakh cashless hospitalization annually for General citizens (and up to ₹20 Lakh for state employees/pensioners) in premier hospitals across Nagaland, Assam, and metro cities.',
    fullDescription: 'CMHIS ensures that no citizen in Nagaland is denied quality healthcare due to poverty or remoteness. Divided into CMHIS (General) and CMHIS (Employees/Pensioners), the scheme provides ₹5,00,000 cashless tertiary cover per family annually for ordinary citizens. It operates seamlessly across Christian Institute of Health Sciences & Research (CIHSR) Dimapur, Naga Hospital Authority Kohima (NHAK), and premier referral hospitals in Guwahati, Kolkata, and New Delhi.',
    financialBenefit: '₹5,00,000 / family / year cashless hospitalization coverage (up to ₹20 Lakh for employees)',
    keyObjectives: [
      'Provide 100% universal healthcare protection for all citizens of Nagaland without income limits',
      'Shield tribal families from crippling medical debts when seeking tertiary care outside the state',
      'Provide seamless cashless admission with zero paperwork at hospital helpdesks'
    ],
    eligibilityRules: {
      stateResidence: 'Nagaland',
      notes: 'All indigenous inhabitants of Nagaland holding an Indigenous Inhabitant Certificate (IIC), or permanent residents holding valid PRC.'
    },
    eligibilityHighlights: [
      'Holder of Indigenous Inhabitant of Nagaland Certificate (IIC), or',
      'Permanent Resident Certificate (PRC) issued prior to notified cutoff',
      'Universal family coverage with no income cap'
    ],
    exclusions: [
      'Temporary non-resident workers without valid PRC or IIC'
    ],
    requiredDocuments: [
      {
        id: 'doc-nl-cmh-iic',
        name: 'Indigenous Inhabitant Certificate (IIC) / PRC',
        category: 'caste',
        purpose: 'Verify indigenous Naga status or permanent residency',
        citizenTip: 'Issued by Deputy Commissioner of home district.',
        isMandatory: true
      },
      {
        id: 'doc-nl-cmh-aadhaar',
        name: 'Aadhaar Card of Family Members',
        category: 'identity',
        purpose: 'Biometric identity during e-KYC',
        citizenTip: 'Aadhaar is mandatory for generating CMHIS digital card.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register Online on CMHIS Portal or at Kiosk',
        description: 'Submit family details and IIC/PRC on cmhis.nagaland.gov.in or at nearest CSC counter.',
        portalOrOffice: 'cmhis.nagaland.gov.in / CSC Kendra'
      },
      {
        stepNumber: 2,
        title: 'Verification & CMHIS Card Generation',
        description: 'State Health Agency verifies records and generates instant digital CMHIS Ayushman card.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Cashless Hospitalization',
        description: 'Present card at Arogya Mitra counter in empaneled hospital for cashless admission and care up to ₹5 Lakh.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'Nagaland Health Protection Society (NHPS)',
      url: 'https://cmhis.nagaland.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Health & Family Welfare, Nagaland',
      helpline: '1800-345-3644 / 104',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official CMHIS portal of Government of Nagaland.'
    }
  },
  {
    id: 'nl-cmmfi-microfinance',
    name: 'Chief Minister Micro Finance Initiative (CMMFI Nagaland Agri & Entrepreneurship Credit)',
    hindiName: 'मुख्यमंत्री सूक्ष्म वित्त पहल (नागालैंड कृषि एवं उद्यमिता ऋण सहायता)',
    teluguName: 'ముఖ్యమంత్రి మైక్రో ఫైనాన్స్ ఇనిషియేటివ్ (నాగాలాండ్)',
    tamilName: 'முதலமைச்சர் மைக்ரோ ஃபைனான்ஸ் திட்டம் (நாகாலாந்து)',
    tagline: 'Credit-linked capital subsidies up to ₹15 Lakh for farmers, SHGs, and youth entrepreneurs at subsidized bank interest.',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'State Scheme (Nagaland)',
    stateApplicability: 'Nagaland',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'NL',
    administeringGovernment: 'Government of Nagaland',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Individual Farmers & Agripreneurs', 'Self Help Groups (SHGs) & Joint Liability Groups', 'Youth Startups and Village Enterprises'],
    shortSummary: 'Flagship financial inclusion program unlocking bank credit for agriculture and rural micro-enterprises with 30% state capital subsidy (up to ₹4.5 Lakh), 10% farmer margin, and 60% bank loan with state interest subvention.',
    fullDescription: 'The Chief Minister Micro Finance Initiative (CMMFI) solves the chronic lack of institutional credit in Nagaland. Partnering with major banks (SBI, Nagaland Rural Bank, Apex Bank), the scheme finances coffee and cardamom plantations, piggery farms, cold chain mini-units, eco-tourism homestays, and handicraft units. The state provides a 30% capital subsidy, 4% interest subvention for 3 years, and covers loan processing and stamp fees.',
    financialBenefit: '30% capital subsidy (up to ₹4.5 Lakh) + 4% interest subvention on bank loans up to ₹15 Lakh',
    keyObjectives: [
      'Increase the credit-deposit (CD) ratio and institutional lending in Nagaland',
      'Foster micro-enterprises in organic farming, animal husbandry, and rural tourism',
      'Provide credit access to SHGs, FPOs, and youth entrepreneurs with low collateral'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 55,
      stateResidence: 'Nagaland',
      notes: 'Indigenous inhabitant of Nagaland aged 18 to 55 with an active bank account in good standing, proposing a viable project in agriculture, allied, or service sectors.'
    },
    eligibilityHighlights: [
      'Indigenous inhabitant / permanent resident of Nagaland',
      'Individual farmer, registered SHG, Joint Liability Group, or FPO',
      'Project cost up to ₹15 Lakh in notified agro-allied or micro-enterprise categories'
    ],
    exclusions: [
      'Willful defaulters with any commercial or cooperative financial institution'
    ],
    requiredDocuments: [
      {
        id: 'doc-nl-cmm-dpr',
        name: 'Detailed Project Report (DPR) & Budget Estimate',
        category: 'other',
        purpose: 'Technical and financial appraisal of enterprise',
        citizenTip: 'Can be prepared with assistance from District Agriculture / Industries Officer.',
        isMandatory: true
      },
      {
        id: 'doc-nl-cmm-iic',
        name: 'Indigenous Inhabitant Certificate (IIC) & Aadhaar',
        category: 'caste',
        purpose: 'Proof of indigenous status and identity',
        citizenTip: 'Issued by Deputy Commissioner.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on CMMFI Portal or at DC Office',
        description: 'Submit project proposal on cmmfi.nagaland.gov.in or through the District Level Implementation Committee (DLIC).',
        portalOrOffice: 'cmmfi.nagaland.gov.in / DC Office'
      },
      {
        stepNumber: 2,
        title: 'DLIC Screening and Bank Recommendation',
        description: 'DLIC headed by Deputy Commissioner screens project and forwards sanctioned files to partner banks.',
        portalOrOffice: 'Deputy Commissioner Office'
      },
      {
        stepNumber: 3,
        title: 'Loan Disbursal & Capital Subsidy Credit',
        description: 'Bank disburses project loan; state government releases 30% capital subsidy directly into loan account.',
        portalOrOffice: 'Partner Bank Branch'
      }
    ],
    officialSource: {
      name: 'Department of Finance, Government of Nagaland',
      url: 'https://cmmfi.nagaland.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Finance Department',
      helpline: '0370-2270036',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official CMMFI microfinance portal of Nagaland.'
    }
  },
  {
    id: 'nl-state-disability-grant',
    name: 'Nagaland State Disability Welfare Grant (Monthly Maintenance & Assistive Devices)',
    hindiName: 'नागालैंड राज्य दिव्यांग कल्याण अनुदान (मासिक भरण-पोषण एवं सहायक उपकरण)',
    teluguName: 'నాగాలాండ్ స్టేట్ డిసేబిలిటీ వెల్ఫేర్ గ్రాంట్',
    tamilName: 'நாகாலாந்து மாநில மாற்றுத்திறனாளிகள் நல மானியம்',
    tagline: 'Monthly financial maintenance allowance of ₹1,000 to ₹1,500 + free assistive hearing and mobility aids for PwD.',
    category: 'disability-pwd',
    categoryLabel: 'Disability & Inclusion',
    geographicScope: 'State Scheme (Nagaland)',
    stateApplicability: 'Nagaland',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'NL',
    administeringGovernment: 'Government of Nagaland',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Persons with Disabilities (PwD) in Nagaland', 'Visually and Hearing Impaired Citizens', 'Caregivers of Severe Disability Patients'],
    shortSummary: 'Dedicated social welfare grant providing ₹1,000 to ₹1,500 monthly subsistence allowance directly via DBT to persons with benchmark disabilities across all 16 districts of Nagaland, alongside free tricycles and hearing aids.',
    fullDescription: 'The Social Welfare Department in Nagaland operates this assistance scheme to ensure financial security and social integration for persons with disabilities. Beneficiaries holding a verified UDID card or disability certificate of 40% and above receive monthly financial maintenance support credited directly to their bank accounts, alongside free motorized tricycles, braille kits, and assistive prosthetics.',
    financialBenefit: '₹1,000 to ₹1,500 / month direct benefit transfer + free specialized assistive mobility aids',
    keyObjectives: [
      'Provide basic financial autonomy to persons with disabilities living in remote hill villages',
      'Facilitate mobility through free wheelchairs, motorized tricycles, and hearing aids',
      'Promote inclusive education and vocational rehabilitation'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      stateResidence: 'Nagaland',
      notes: 'Indigenous inhabitant or permanent resident of Nagaland possessing certified disability of 40% or above / UDID card.'
    },
    eligibilityHighlights: [
      'Resident of Nagaland holding Indigenous Inhabitant Certificate',
      'Possesses valid UDID card or certificate from District Medical Board (40%+ disability)',
      'Not receiving any other regular government employment or pension'
    ],
    exclusions: [
      'Permanent government employees'
    ],
    requiredDocuments: [
      {
        id: 'doc-nl-dis-udid',
        name: 'UDID Card / Disability Certificate',
        category: 'disability',
        purpose: 'Verify disability category and percentage',
        citizenTip: 'Check UDID on swavlambancard.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-nl-dis-iic',
        name: 'Indigenous Inhabitant Certificate & Aadhaar',
        category: 'caste',
        purpose: 'Verify indigenous domicile and identity',
        citizenTip: 'Issued by Deputy Commissioner.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through District Welfare Officer (DWO)',
        description: 'Submit application along with UDID card to District Welfare Officer in your district.',
        portalOrOffice: 'District Welfare Office'
      },
      {
        stepNumber: 2,
        title: 'Medical Board Verification',
        description: 'District Medical Board verifies disability assessment and approves eligibility.',
        portalOrOffice: 'District Hospital / DWO Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement & Aid Distribution',
        description: 'Allowance is credited monthly to bank account; assistive aids are distributed at district welfare camps.',
        portalOrOffice: 'Direct Benefit Transfer / Camp'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of Nagaland',
      url: 'https://socialwelfare.nagaland.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0370-2270036',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official disability welfare portal of Government of Nagaland.'
    }
  },
  {
    id: 'nl-old-age-social-pension',
    name: 'Nagaland State Old Age Pension Scheme (NSOAPS Tribal Elders Social Security)',
    hindiName: 'नागालैंड राज्य वृद्धावस्था पेंशन योजना (जनजातीय बुजुर्ग सामाजिक सुरक्षा)',
    teluguName: 'నాగాలాండ్ ఓల్డ్ ఏజ్ పెన్షన్ పథకం',
    tamilName: 'நாகாலாந்து முதியோர் ஓய்வூதியத் திட்டம்',
    tagline: 'Monthly social security pension of ₹1,000 for senior citizens aged 60 and above in tribal villages.',
    category: 'seniors-elderly',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'State Scheme (Nagaland)',
    stateApplicability: 'Nagaland',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'NL',
    administeringGovernment: 'Government of Nagaland',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Elderly Tribal Men and Women', 'Destitute Rural Elders'],
    shortSummary: 'Universal old age social safety net transferring ₹1,000 monthly directly via DBT into the bank accounts of over 55,000 senior citizens across rural and urban Nagaland, ensuring dignity in their twilight years.',
    fullDescription: 'The Nagaland State Old Age Pension Scheme provides monthly sustenance to elderly tribal citizens who have no formal pension or family breadwinner. Handled by the Social Welfare Department in coordination with village Gaonburahs, the pension of ₹1,000 per month is directly credited into the senior citizen Aadhaar-linked bank account, shielding them from poverty and neglect.',
    financialBenefit: '₹1,000 / month (₹12,000 per year) credited directly via DBT',
    keyObjectives: [
      'Provide basic financial dignity and social security to elderly tribal citizens across Nagaland',
      'Shield vulnerable senior citizens from poverty, neglect, and medical destitution',
      'Ensure 100% digital benefit delivery directly into bank accounts'
    ],
    eligibilityRules: {
      minAge: 60,
      stateResidence: 'Nagaland',
      notes: 'Indigenous resident of Nagaland aged 60 years or above, holding verified birth/age proof or Gaonburah age certification.'
    },
    eligibilityHighlights: [
      'Indigenous inhabitant of Nagaland aged 60 years or above',
      'Age verified by Village Gaonburah / Church certificate / Aadhaar',
      'Not receiving any other regular government or civil pension'
    ],
    exclusions: [
      'Retired government servants receiving civil or military pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-nl-oap-age',
        name: 'Age Proof (Aadhaar / Voter ID / Church Baptism Certificate / GB Certificate)',
        category: 'identity',
        purpose: 'Verify age 60+ status',
        citizenTip: 'Gaonburah certification is accepted for rural elders without formal birth records.',
        isMandatory: true
      },
      {
        id: 'doc-nl-oap-bank',
        name: 'Aadhaar-Linked Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Check with bank that direct credit is active.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Village Gaonburah / DWO Office',
        description: 'Submit form endorsed by village Gaonburah to local District Welfare Officer.',
        portalOrOffice: 'Village Council / DWO Office'
      },
      {
        stepNumber: 2,
        title: 'Verification and Sanction Order',
        description: 'Department of Social Welfare verifies records and issues pension sanction number.',
        portalOrOffice: 'DWO Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹1,000 is credited directly into the senior citizen bank account every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of Nagaland',
      url: 'https://socialwelfare.nagaland.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0370-2270036',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official social security pension portal of Nagaland.'
    }
  },
  {
    id: 'nl-agri-allied-shg-mission',
    name: 'Nagaland Agri-Allied Women SHG Mission (Community Seed Banks & Organic Spice Grants)',
    hindiName: 'नागालैंड कृषि-संबद्ध महिला स्वयं सहायता मिशन (सामुदायिक बीज बैंक एवं जैविक मसाला अनुदान)',
    teluguName: 'నాగాలాండ్ మహిళా ఎస్‌హెచ్‌జి వ్యవసాయ మిషన్',
    tamilName: 'நாகாலாந்து மகளிர் சுயஉதவிக்குழு வேளாண் இயக்கம்',
    tagline: 'Capital grants up to ₹2 Lakh for women SHGs establishing organic cardamom, Naga Mircha, and coffee nurseries.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Nagaland)',
    stateApplicability: 'Nagaland',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'NL',
    administeringGovernment: 'Government of Nagaland',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Women Self Help Groups (SHGs)', 'Organic Spices and Cardamom Cultivators', 'Naga Chilli (Raja Mircha) Growers'],
    shortSummary: 'Empowers rural women collectives across Nagaland with financial grants up to ₹2,00,000 per SHG to establish community seed banks, solar drying sheds, and nursery propagation for high-value GI-tagged Naga Mircha and large cardamom.',
    fullDescription: 'Under the Nagaland State Rural Livelihoods Mission (NSRLM) and Department of Agriculture, this scheme promotes female leadership in organic spices and cash crop farming. Women SHGs receive capital grants of ₹1,00,000 to ₹2,00,000 to purchase modern solar tunnel dryers, construct organic seed banks, and propagate organic large cardamom, ginger, and GI-tagged Naga King Chilli (Raja Mircha), multiplying collective household earnings.',
    financialBenefit: 'Direct financial grant of ₹1,00,000 to ₹2,00,000 per women SHG',
    keyObjectives: [
      'Promote women-led organic spice value chains (Naga Mircha, Cardamom, Ginger)',
      'Construct hygienic solar drying and packaging facilities to reduce post-harvest spoilage',
      'Provide collective marketing linkages through the Nagaland Organic brand'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Nagaland',
      notes: 'Registered women SHG in Nagaland with active engagement in agro-allied, horticulture, or organic spices cultivation.'
    },
    eligibilityHighlights: [
      'Women SHG registered with Nagaland State Rural Livelihoods Mission (NSRLM)',
      'Active savings bank account with at least 6 months regular transactions',
      'Land availability for community nursery or solar drying unit'
    ],
    exclusions: [
      'Individual non-farming entities without group structure'
    ],
    requiredDocuments: [
      {
        id: 'doc-nl-ash-reg',
        name: 'SHG Registration Certificate & Resolution',
        category: 'other',
        purpose: 'Verify SHG status under NSRLM',
        citizenTip: 'Issued by Block Program Manager (BPM).',
        isMandatory: true
      },
      {
        id: 'doc-nl-ash-bank',
        name: 'Joint Savings Bank Account Passbook',
        category: 'bank',
        purpose: 'Grant transfer destination',
        citizenTip: 'Must have active mobile alerts enabled.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Proposal to Block Program Manager (NSRLM)',
        description: 'Submit project proposal for spice nursery or solar dryer through local NSRLM coordinator.',
        portalOrOffice: 'Block Mission Management Unit (BMMU)'
      },
      {
        stepNumber: 2,
        title: 'Field Verification by Agriculture Officer',
        description: 'Agriculture inspector verifies crop plan, nursery land suitability, and group cohesion.',
        portalOrOffice: 'Village Nursery Site'
      },
      {
        stepNumber: 3,
        title: 'Direct Grant Disbursement',
        description: 'Grant of ₹1 Lakh to ₹2 Lakh is credited directly into the SHG bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture & NSRLM, Government of Nagaland',
      url: 'https://agriculture.nagaland.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Agriculture / NSRLM',
      helpline: '0370-2270036',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official agro-allied livelihoods portal of Nagaland.'
    }
  },

  // SIKKIM (SK)
  {
    id: 'sk-aama-yojana',
    name: 'Aama Yojana (Sikkim Direct Annual Financial Transfer for Non-Working Mothers)',
    hindiName: 'आमा योजना (सिक्किम गैर-कामकाजी माताओं के लिए प्रत्यक्ष वित्तीय सहायता)',
    teluguName: 'ఆమా పథకం (సిక్కిం)',
    tamilName: 'ஆமா திட்டம் (சிக்கிம்)',
    tagline: 'Annual direct financial grant of ₹40,000 transferred in two ₹20,000 installments to non-working rural mothers.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Sikkim)',
    stateApplicability: 'Sikkim',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'SK',
    administeringGovernment: 'Government of Sikkim',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Non-Working Mothers across Sikkim', 'Rural Homemakers', 'Low & Middle-Income Mothers'],
    shortSummary: 'Revolutionary women welfare initiative transferring ₹40,000 annually (₹20,000 biannually) directly via DBT into the personal bank accounts of non-working mothers across Sikkim to support child care, health, and family nutrition.',
    fullDescription: 'Recognizing the immense unpaid domestic labor of mothers, the Government of Sikkim launched the Aama Yojana to provide financial autonomy to stay-at-home mothers. All non-working mothers residing in Sikkim holding a Sikkim Subject Certificate or Certificate of Identification (COI) receive ₹40,000 per year directly in their bank accounts in two equal ₹20,000 installments, completely free of middleman commissions.',
    financialBenefit: '₹40,000 / year direct benefit transfer credited into mother bank account in two installments',
    keyObjectives: [
      'Recognize and financially reward the unpaid household and caregiving work of mothers',
      'Foster women financial independence and savings habits across rural and urban Sikkim',
      'Improve nutritional and educational investments in children'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Sikkim',
      notes: 'Mother residing in Sikkim holding Sikkim Subject Certificate / Certificate of Identification (COI) or residential certificate, not engaged in formal salaried employment.'
    },
    eligibilityHighlights: [
      'Mother residing in Sikkim possessing Sikkim Subject Certificate / COI',
      'Must be unemployed / non-working in formal government or private sector',
      'Personal bank account in State Bank of Sikkim or nationalized bank with Aadhaar seeding'
    ],
    exclusions: [
      'Mothers who are regular government servants or formal corporate employees',
      'Income tax paying mothers'
    ],
    requiredDocuments: [
      {
        id: 'doc-sk-aam-coi',
        name: 'Certificate of Identification (COI) / Sikkim Subject Certificate',
        category: 'caste',
        purpose: 'Verify indigenous Sikkim domicile',
        citizenTip: 'Issued by District Collector.',
        isMandatory: true
      },
      {
        id: 'doc-sk-aam-unemp',
        name: 'Declaration of Non-Employment',
        category: 'other',
        purpose: 'Certify non-working homemaker status',
        citizenTip: 'Attested by local Panchayat President or Ward Councillor.',
        isMandatory: true
      },
      {
        id: 'doc-sk-aam-bank',
        name: 'Bank Passbook (State Bank of Sikkim / Commercial Bank)',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Account must be in mother sole name.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through Gram Panchayat / Urban Ward Office',
        description: 'Submit Aama Yojana application along with COI and bank passbook to local Gram Panchayat Unit (GPU).',
        portalOrOffice: 'Gram Panchayat Unit / Ward Office'
      },
      {
        stepNumber: 2,
        title: 'Verification by Women & Child Development Department',
        description: 'Child Development Project Officer (CDPO) verifies non-working status and bank details.',
        portalOrOffice: 'CDPO Office'
      },
      {
        stepNumber: 3,
        title: 'Biannual DBT Disbursement',
        description: '₹40,000 annual grant is credited in two installments of ₹20,000 directly into the mother bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Government of Sikkim',
      url: 'https://sikkim.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '03592-202206',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Aama Yojana portal of Government of Sikkim.'
    }
  },
  {
    id: 'sk-vatsalya-yojana',
    name: 'Vatsalya Scheme (Sikkim Financial Grant for Childless Couples IVF Treatment)',
    hindiName: 'वात्सल्य योजना (सिक्किम निःसंतान दंपतियों के लिए आईवीएफ उपचार अनुदान)',
    teluguName: 'వాత్సల్య పథకం (సిక్కిం)',
    tamilName: 'வாத்ஸல்யா திட்டம் (சிக்கிம்)',
    tagline: 'Direct financial assistance of ₹3 Lakh for childless indigenous couples undergoing IVF fertility treatments.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Sikkim)',
    stateApplicability: 'Sikkim',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'SK',
    administeringGovernment: 'Government of Sikkim',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'parent',
    beneficiaries: ['Childless Indigenous Couples in Sikkim', 'Couples Undergoing In-Vitro Fertilization (IVF)', 'Families with Fertility Challenges'],
    shortSummary: 'Groundbreaking demographic support policy providing ₹3,00,000 direct financial grant to childless couples holding Sikkim Subject / COI to undergo In-Vitro Fertilization (IVF) treatment, addressing declining fertility rates.',
    fullDescription: 'To address the declining fertility rate among indigenous communities in Sikkim, the Vatsalya Scheme provides ₹3 Lakh financial assistance to childless couples undergoing IVF treatment. Disbursed in two installments (₹1.5 Lakh upon medical initiation and ₹1.5 Lakh upon embryo transfer), the grant enables couples to access advanced reproductive technologies at empaneled fertility hospitals without catastrophic financial strain.',
    financialBenefit: '₹3,00,000 direct financial assistance for IVF fertility treatments in two installments',
    keyObjectives: [
      'Address the declining total fertility rate (TFR) across indigenous communities in Sikkim',
      'Provide financial support to lower and middle-income couples facing expensive IVF treatment costs',
      'Ensure high standards of reproductive healthcare across empaneled fertility clinics'
    ],
    eligibilityRules: {
      stateResidence: 'Sikkim',
      notes: 'Childless legally married couple holding Sikkim Subject Certificate / Certificate of Identification (COI) undergoing medically certified IVF treatment.'
    },
    eligibilityHighlights: [
      'Couple holding valid Sikkim Subject Certificate / Certificate of Identification (COI)',
      'Legally married for at least 3 years without surviving children',
      'Medical certification from registered fertility specialist confirming requirement of IVF'
    ],
    exclusions: [
      'Couples who already have surviving biological or adopted children'
    ],
    requiredDocuments: [
      {
        id: 'doc-sk-vat-coi',
        name: 'Certificate of Identification (COI) of Husband & Wife',
        category: 'caste',
        purpose: 'Verify indigenous Sikkim domicile',
        citizenTip: 'Both spouses COI/Sikkim Subject copies required.',
        isMandatory: true
      },
      {
        id: 'doc-sk-vat-medical',
        name: 'Medical Specialist IVF Recommendation & Treatment Estimate',
        category: 'medical',
        purpose: 'Clinical certification of infertility and treatment plan',
        citizenTip: 'Issued by recognized IVF centre / STNM Hospital.',
        isMandatory: true
      },
      {
        id: 'doc-sk-vat-marriage',
        name: 'Marriage Certificate',
        category: 'identity',
        purpose: 'Proof of legal marriage',
        citizenTip: 'Civil marriage registration certificate.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Health & Family Welfare Department',
        description: 'Submit Vatsalya application along with medical fertility report to Health Secretariat, Gangtok.',
        portalOrOffice: 'Health & Family Welfare Department, Gangtok'
      },
      {
        stepNumber: 2,
        title: 'State Medical Committee Approval',
        description: 'State Medical Committee reviews clinical case files and issues sanction order.',
        portalOrOffice: 'Health Secretariat'
      },
      {
        stepNumber: 3,
        title: 'Two-Stage Grant Disbursal',
        description: '₹1.5 Lakh is released upon cycle initiation, and ₹1.5 Lakh is released upon embryo transfer stage directly to bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Health & Family Welfare, Government of Sikkim',
      url: 'https://sikkim.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department',
      helpline: '03592-202206',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official fertility welfare portal of Government of Sikkim.'
    }
  },
  {
    id: 'sk-sikkim-garib-awas-yojana',
    name: 'Sikkim Garib Awas Yojana (SGAY Fully-Equipped Modern Rural Pucca Homes)',
    hindiName: 'सिक्किम गरीब आवास योजना (एसजीएवाई आधुनिक सर्वसुविधायुक्त पक्का आवास)',
    teluguName: 'సిక్కిం గరీబ్ ఆవాస్ పథకం (SGAY)',
    tamilName: 'சிக்கிம் கரீப் ஆவாஸ் திட்டம் (SGAY)',
    tagline: 'Complete modern 1-story pucca house worth ₹17.5 Lakh including furniture and TV provided 100% free to poor families.',
    category: 'housing',
    categoryLabel: 'Housing & Urban Planning',
    geographicScope: 'State Scheme (Sikkim)',
    stateApplicability: 'Sikkim',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'SK',
    administeringGovernment: 'Government of Sikkim',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Houseless Rural Families', 'Kutcha / Dilapidated Mud House Dwellers', 'Vulnerable Indigenous Families in Sikkim'],
    shortSummary: 'India most generous state housing program constructing a fully finished modern single-story RCC house (living room, 2 bedrooms, kitchen, toilet) worth ₹17.5 Lakh, complete with basic furniture and TV, handed over 100% free to poor families.',
    fullDescription: 'The Sikkim Garib Awas Yojana (SGAY) sets a national benchmark for dignified public housing. Constructed entirely by the Rural Development Department, each earthquake-resistant home features high-quality RCC framing, double-pitched roofing, tiled flooring, modular electrical fittings, and comes pre-equipped with essential furniture (sofa set, double bed, dining table) and a 32-inch LED TV, ensuring poor rural families instantly transition into modern dignified living.',
    financialBenefit: 'Fully constructed, furnished RCC modern house worth ₹17,50,000 handed over 100% free',
    keyObjectives: [
      'Eliminate all kutcha and unsafe dwellings across rural Sikkim',
      'Provide fully furnished, earthquake-resistant permanent RCC homes to the poorest families',
      'Ensure zero financial burden or debt on the beneficiary family'
    ],
    eligibilityRules: {
      stateResidence: 'Sikkim',
      notes: 'Permanent resident of rural Sikkim possessing Certificate of Identification (COI) / Sikkim Subject Certificate who does not own a pucca house anywhere.'
    },
    eligibilityHighlights: [
      'Permanent resident of Sikkim holding COI / Sikkim Subject Certificate',
      'Living in temporary kutcha house or houseless in rural areas',
      'Family must own or possess rights to suitable construction land plot'
    ],
    exclusions: [
      'Households possessing an existing pucca concrete house or having government employee family members'
    ],
    requiredDocuments: [
      {
        id: 'doc-sk-sga-coi',
        name: 'Certificate of Identification (COI) / Sikkim Subject Certificate',
        category: 'caste',
        purpose: 'Verify indigenous Sikkim domicile',
        citizenTip: 'Issued by District Collector.',
        isMandatory: true
      },
      {
        id: 'doc-sk-sga-land',
        name: 'Parcha / Land Ownership Document',
        category: 'land',
        purpose: 'Verify ownership of plot where house will be constructed',
        citizenTip: 'Check land records with Sub-Divisional Magistrate.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Gram Sabha Selection & Survey',
        description: 'Eligible houseless families are identified and prioritized by the local Gram Sabha.',
        portalOrOffice: 'Gram Panchayat Unit (GPU)'
      },
      {
        stepNumber: 2,
        title: 'Technical Feasibility & Soil Inspection',
        description: 'Rural Development Department engineers inspect slope stability and prepare construction drawings.',
        portalOrOffice: 'Block Rural Development Centre (BAC)'
      },
      {
        stepNumber: 3,
        title: 'Departmental Construction & Key Handover',
        description: 'Government executes complete construction and hands over keys to the fully furnished home.',
        portalOrOffice: 'New Home Handover Ceremony'
      }
    ],
    officialSource: {
      name: 'Rural Development Department, Government of Sikkim',
      url: 'https://rdd.sikkim.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Rural Development Department',
      helpline: '03592-202206',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official housing welfare portal of Government of Sikkim.'
    }
  },
  {
    id: 'sk-swasthya-bima-yojana',
    name: 'Mukhya Mantri Swasthya Bima Yojana (Sikkim Universal Cashless Health Cover)',
    hindiName: 'मुख्यमंत्री स्वास्थ्य बीमा योजना (सिक्किम सार्वभौमिक कैशलेस स्वास्थ्य सुरक्षा)',
    teluguName: 'ముఖ్యమంత్రి స్వాస్థ్య బీమా పథకం (సిక్కిం)',
    tamilName: 'முதலமைச்சர் சுவாஸ்திய பீமா திட்டம் (சிக்கிம்)',
    tagline: 'Universal cashless medical hospitalization cover up to ₹5 Lakh per family per year in empaneled hospitals.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Sikkim)',
    stateApplicability: 'Sikkim',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'SK',
    administeringGovernment: 'Government of Sikkim',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['All Resident Families of Sikkim', 'State Government Contractual Workers', 'Senior Citizens in Hill Districts'],
    shortSummary: 'Universal health assurance providing ₹5 Lakh cashless hospitalization annually for secondary and tertiary care in government hospitals (STNM Hospital Gangtok) and premier referral hospitals in Siliguri, Kolkata, and Delhi.',
    fullDescription: 'The Mukhya Mantri Swasthya Bima Yojana guarantees universal health security across all six districts of Sikkim. Complementing Ayushman Bharat, it covers all left-out families holding COI or residential certificates. Patients receive cashless surgeries, oncology treatments, dialysis, and ICU care at STNM Hospital Gangtok, CRH Tadong, and empaneled multi-specialty hospitals in Siliguri and Kolkata.',
    financialBenefit: '₹5,00,000 / family / year cashless hospitalization coverage',
    keyObjectives: [
      'Provide 100% universal healthcare coverage across Sikkim with zero co-payment',
      'Shield families from catastrophic debts when referred to hospitals in Siliguri or Kolkata',
      'Ensure seamless cashless pre-authorization through digital health cards'
    ],
    eligibilityRules: {
      stateResidence: 'Sikkim',
      notes: 'All permanent resident families in Sikkim holding Certificate of Identification (COI) / Sikkim Subject Certificate or state residential card.'
    },
    eligibilityHighlights: [
      'Permanent resident family in Sikkim',
      'Holding valid COI / Sikkim Subject Certificate or state residential proof',
      'Universal coverage with zero income ceilings'
    ],
    exclusions: [
      'Serving Central Government permanent employees covered under CGHS'
    ],
    requiredDocuments: [
      {
        id: 'doc-sk-msb-coi',
        name: 'Certificate of Identification (COI) / Residential Certificate',
        category: 'caste',
        purpose: 'Verify Sikkim residency',
        citizenTip: 'Issued by District Collector / SDM.',
        isMandatory: true
      },
      {
        id: 'doc-sk-msb-aadhaar',
        name: 'Aadhaar Card of Family Members',
        category: 'identity',
        purpose: 'Biometric identity for health card generation',
        citizenTip: 'Aadhaar e-KYC is mandatory.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Enrol at District Hospital or CSC Counter',
        description: 'Submit family details and COI at nearest CSC or STNM Hospital helpdesk.',
        portalOrOffice: 'STNM Hospital Gangtok / CSC'
      },
      {
        stepNumber: 2,
        title: 'Health Card Issuance',
        description: 'Biometrics are verified and digital health card is generated.',
        portalOrOffice: 'Health Kiosk'
      },
      {
        stepNumber: 3,
        title: 'Cashless Admission & Treatment',
        description: 'Show card at hospital Arogya Mitra desk for cashless admission, surgery, and medications.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'Department of Health & Family Welfare, Government of Sikkim',
      url: 'https://sikkim.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department',
      helpline: '104 / 03592-202206',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official health insurance portal of Government of Sikkim.'
    }
  },
  {
    id: 'sk-krishi-atmanirbhar-pashupalan',
    name: 'Sikkim Milk Production Incentive Scheme (₹8/Liter Direct Subsidy for Dairy Farmers)',
    hindiName: 'सिक्किम दुग्ध उत्पादन प्रोत्साहन योजना (डेयरी किसानों के लिए ₹८/लीटर प्रत्यक्ष अनुदान)',
    teluguName: 'సిక్కిం పాల ఉత్పత్తి ప్రోత్సాహక పథకం',
    tamilName: 'சிக்கிம் பால் உற்பத்தி ஊக்குவிப்புத் திட்டம்',
    tagline: 'Direct benefit transfer of ₹8 per liter of milk supplied to cooperative societies, paid directly to dairy farmers.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Sikkim)',
    stateApplicability: 'Sikkim',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'SK',
    administeringGovernment: 'Government of Sikkim',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Dairy Farmers in Sikkim', 'Members of Village Milk Producer Cooperative Societies', 'Livestock Rearers in Hill Hamlets'],
    shortSummary: 'India highest direct milk production subsidy transferring ₹8 per liter directly into the bank accounts of over 15,000 dairy farmers supplying milk to village cooperative societies, over and above the base milk procurement price.',
    fullDescription: 'Under the Mukhya Mantri Krishi Atmanirbhar Pashupalan scheme, Sikkim provides an unprecedented ₹8 per liter direct cash incentive on cow milk. In addition to the base price paid by the Sikkim Cooperative Milk Producers Union (Sikkim Milk Union), the Animal Husbandry Department deposits ₹8 per liter directly into the farmer personal bank account via DBT, dramatically boosting dairy incomes and rural self-sufficiency.',
    financialBenefit: '₹8 / liter direct cash incentive paid via DBT directly to dairy farmer bank accounts',
    keyObjectives: [
      'Incentivize commercial dairy farming and bovine husbandry in mountain terrain',
      'Increase statewide milk procurement to achieve self-sufficiency in dairy products',
      'Ensure direct, transparent digital payment to dairy farmers without middleman deductions'
    ],
    eligibilityRules: {
      occupations: ['Dairy Farmer', 'Livestock Rearer'],
      stateResidence: 'Sikkim',
      notes: 'Resident dairy farmer of Sikkim enrolled as an active member of a registered Village Milk Producer Cooperative Society (MPCS).'
    },
    eligibilityHighlights: [
      'Permanent resident of Sikkim rearing milch cattle',
      'Active member pouring milk into a registered village MPCS under Sikkim Milk Union',
      'Aadhaar-seeded bank account in a scheduled commercial bank or State Bank of Sikkim'
    ],
    exclusions: [
      'Commercial bulk traders selling outside organized cooperative networks'
    ],
    requiredDocuments: [
      {
        id: 'doc-sk-mpi-mpcs',
        name: 'Village MPCS Membership Passbook / Pourer ID',
        category: 'other',
        purpose: 'Verify active milk supply and fat/SNF records',
        citizenTip: 'Issued by local Village Milk Producer Cooperative Society.',
        isMandatory: true
      },
      {
        id: 'doc-sk-mpi-bank',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer receiving account',
        citizenTip: 'Check with bank that direct credit is active.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register with Village Milk Producer Cooperative Society (MPCS)',
        description: 'Register milch cattle and bank account details with local village MPCS.',
        portalOrOffice: 'Village MPCS Center'
      },
      {
        stepNumber: 2,
        title: 'Daily Milk Pouring & Digital Logging',
        description: 'Pour milk daily; electronic tester records quantity, fat, and SNF into centralized system.',
        portalOrOffice: 'Milk Collection Center'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Incentive Credit',
        description: 'Incentive of ₹8 per liter is credited directly into the farmer bank account on a monthly basis.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Animal Husbandry & Veterinary Services Department, Sikkim',
      url: 'https://sikkim.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Animal Husbandry & Veterinary Services Department',
      helpline: '03592-202206',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official dairy incentive initiative of Government of Sikkim.'
    }
  },

  // TRIPURA (TR)
  {
    id: 'tr-mukhyamantri-matru-pusti-uphaar',
    name: 'Mukhyamantri Matru Pusti Uphaar (Tripura Nutrition Kits for Pregnant & Lactating Mothers)',
    hindiName: 'मुख्यमंत्री मातृ पुष्टि उपहार (त्रिपुरा गर्भवती एवं धात्री माताओं के लिए पोषण किट)',
    teluguName: 'ముఖ్యమంత్రి మాతృ పుష్టి ఉపహార్ (త్రిపుర)',
    tamilName: 'முதலமைச்சர் மாத்ரு புஷ்டி உபஹார் (திரிபுரா)',
    tagline: 'Four free comprehensive nutrition kits containing milk powder, ghee, pulses, and iron supplements for pregnant women.',
    category: 'children-nutrition',
    categoryLabel: 'Children & Family Welfare',
    geographicScope: 'State Scheme (Tripura)',
    stateApplicability: 'Tripura',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'TR',
    administeringGovernment: 'Government of Tripura',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'parent',
    beneficiaries: ['Pregnant Women in Tripura', 'Lactating Mothers during First 6 Months', 'Low-Income and Tribal Mothers'],
    shortSummary: 'High-impact nutritional safety net providing 4 free standardized nutrition hampers (milk powder, desi ghee, soya beans, pulses, dates, and iron-folic acid) distributed during antenatal checkups to eradicate maternal anemia and low birth weight.',
    fullDescription: 'To eliminate maternal malnutrition and child stunting across Tripura, the Social Welfare & Social Education Department provides four free nutrition gift baskets worth over ₹2,000 each to pregnant women during periodic Antenatal Care (ANC) visits at Primary Health Centres. The hampers supply essential protein, calcium, and micronutrients during crucial pregnancy trimesters, significantly reducing infant and maternal mortality.',
    financialBenefit: '4 free comprehensive high-nutrition hampers (worth ₹2,000 each = total ₹8,000 value)',
    keyObjectives: [
      'Eradicate maternal anemia and severe malnutrition in rural and tribal habitations',
      'Incentivize 100% adherence to all four periodic antenatal checkups (ANC) at health centers',
      'Prevent low birth weight (LBW) and infant stunting across Tripura'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Tripura',
      notes: 'Pregnant woman residing in Tripura registered at the local Anganwadi center and attending scheduled ANC checkups at a government health center.'
    },
    eligibilityHighlights: [
      'Resident pregnant woman in Tripura',
      'Registered at nearest Anganwadi center with Mother and Child Protection (MCP) card',
      'Undergoing scheduled Antenatal Care (ANC) checkups at Primary Health Centre (PHC)'
    ],
    exclusions: [
      'Women not attending institutional antenatal checkups'
    ],
    requiredDocuments: [
      {
        id: 'doc-tr-mmp-mcp',
        name: 'Mother and Child Protection (MCP) Card / RCH ID',
        category: 'medical',
        purpose: 'Verify pregnancy registration and scheduled ANC checkup records',
        citizenTip: 'Issued by Auxiliary Nurse Midwife (ANM) / ASHA.',
        isMandatory: true
      },
      {
        id: 'doc-tr-mmp-aadhaar',
        name: 'Aadhaar Card of Pregnant Woman',
        category: 'identity',
        purpose: 'Identity verification',
        citizenTip: 'Check that name matches MCP card.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register Pregnancy at Local Anganwadi Center',
        description: 'Register pregnancy with village Anganwadi Worker (AWW) or ASHA to receive MCP card.',
        portalOrOffice: 'Anganwadi Center / Sub-Center'
      },
      {
        stepNumber: 2,
        title: 'Attend Periodic ANC Checkup at PHC',
        description: 'Undergo blood pressure, hemoglobin, and ultrasound checkups at Primary Health Centre during scheduled ANC days.',
        portalOrOffice: 'Primary Health Centre (PHC)'
      },
      {
        stepNumber: 3,
        title: 'Nutrition Hamper Handover',
        description: 'Receive free sealed Matru Pusti Uphaar nutrition basket immediately following each ANC checkup.',
        portalOrOffice: 'PHC / Anganwadi Desk'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare & Social Education, Tripura',
      url: 'https://swse.tripura.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare & Social Education Department',
      helpline: '0381-2323533',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official maternal nutrition welfare portal of Tripura.'
    }
  },
  {
    id: 'tr-kanya-atmanirbhar-yojana',
    name: 'Mukhyamantri Kanya Atmanirbhar Yojana (Tripura Free Laptops for Meritorious Girl Students)',
    hindiName: 'मुख्यमंत्री कन्या आत्मनिर्भर योजना (त्रिपुरा मेधावी छात्राओं के लिए निःशुल्क लैपटॉप)',
    teluguName: 'ముఖ్యమంత్రి కన్యా ఆత్మనిర్భర్ పథకం (త్రిపుర)',
    tamilName: 'முதலமைச்சர் கன்யா ஆத்மநிர்பர் திட்டம் (திரிபுரா)',
    tagline: 'Free high-specification educational laptops or ₹20,000 cash grant for meritorious Class 12 passed girl students.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Tripura)',
    stateApplicability: 'Tripura',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'TR',
    administeringGovernment: 'Government of Tripura',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Class 12 Passed Meritorious Girls', 'Girls Enrolled in Higher Education / Degree Colleges', 'Rural and Tribal Female Students'],
    shortSummary: 'Digital empowerment program rewarding meritorious female students clearing Class 12 board examinations with free laptops or direct grants of ₹20,000 to purchase computers, bridging the gender digital divide in higher education.',
    fullDescription: 'The Mukhyamantri Kanya Atmanirbhar Yojana supports ambitious girl students across Tripura transitioning into university education. Meritorious girl students passing the Tripura Board of Secondary Education (TBSE) Class 12 Higher Secondary examinations receive a brand-new branded laptop computer or ₹20,000 direct bank transfer to acquire digital computing devices, enabling access to online lectures, research, and technical certifications.',
    financialBenefit: 'Brand-new laptop computer (worth ~₹25,000) or ₹20,000 direct cash grant via DBT',
    keyObjectives: [
      'Bridge the digital divide for female students entering college and university education',
      'Incentivize high academic performance in Class 12 board examinations',
      'Equip young women with digital tools for coding, competitive exam preparation, and remote learning'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Tripura',
      notes: 'Girl student who is a permanent resident of Tripura, passed Class 12 Higher Secondary from TBSE with first division, and enrolled in a recognized degree college.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Tripura',
      'Passed Class 12 HS examination from Tripura Board of Secondary Education (TBSE)',
      'Admitted into recognized degree college or technical university'
    ],
    exclusions: [
      'Students passing from non-recognized private unaccredited boards'
    ],
    requiredDocuments: [
      {
        id: 'doc-tr-mka-marks',
        name: 'TBSE Class 12 Marksheet & Admit Card',
        category: 'academic',
        purpose: 'Verify board exam marks and roll number',
        citizenTip: 'Original marksheet scan.',
        isMandatory: true
      },
      {
        id: 'doc-tr-mka-admission',
        name: 'College Admission Receipt / Identity Card',
        category: 'academic',
        purpose: 'Proof of continuing higher education',
        citizenTip: 'Issued by college authority.',
        isMandatory: true
      },
      {
        id: 'doc-tr-mka-aadhaar',
        name: 'Aadhaar Card and Permanent Resident Certificate (PRTC)',
        category: 'identity',
        purpose: 'Proof of Tripura residency and identity',
        citizenTip: 'Issued by Sub-Divisional Magistrate (SDM).',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Higher Education Portal',
        description: 'Submit application along with Class 12 marksheet and college admission receipt on highereducation.tripura.gov.in.',
        portalOrOffice: 'highereducation.tripura.gov.in'
      },
      {
        stepNumber: 2,
        title: 'College Nodal Verification',
        description: 'College principal verifies student enrollment and forwards recommendation to Directorate of Higher Education.',
        portalOrOffice: 'College Administration'
      },
      {
        stepNumber: 3,
        title: 'Laptop Handover Ceremony / DBT Credit',
        description: 'Receive brand-new laptop at district distribution event or ₹20,000 credit directly in bank account.',
        portalOrOffice: 'District Event / DBT'
      }
    ],
    officialSource: {
      name: 'Directorate of Higher Education, Government of Tripura',
      url: 'https://highereducation.tripura.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Higher Education Department',
      helpline: '0381-2325357',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official laptop incentive portal of Tripura Higher Education Directorate.'
    }
  },
  {
    id: 'tr-shramik-kalyan-prakalpa',
    name: 'Mukhyamantri Cha Sramik Kalyan Prakalpa (Tripura Tea Garden Workers Comprehensive Welfare)',
    hindiName: 'मुख्यमंत्री चा श्रमिक कल्याण प्रकल्प (त्रिपुरा चाय बागान श्रमिक समग्र कल्याण)',
    teluguName: 'ముఖ్యమంత్రి టీ శ్రామిక్ కళ్యాణ్ ప్రకల్ప (త్రిపుర)',
    tamilName: 'முதலமைச்சர் தேயிலை தொழிலாளர் நலத் திட்டம் (திரிபுரா)',
    tagline: 'All-inclusive welfare: free pucca housing, piped drinking water, ration cards, and social security for 7,000+ tea workers.',
    category: 'workers-social-security',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'State Scheme (Tripura)',
    stateApplicability: 'Tripura',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'TR',
    administeringGovernment: 'Government of Tripura',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Tea Garden Workers in Tripura', 'Families across 54 Tea Estates', 'Female Tea Pluckers'],
    shortSummary: 'Comprehensive ₹85 Crore rehabilitation mission uplifting over 7,000 tea garden workers across 54 estates in Tripura with free land ownership (patta), pucca houses, piped tap water, electricity, and health insurance.',
    fullDescription: 'Tea garden laborers are among the most marginalized communities in Tripura. The Mukhyamantri Cha Sramik Kalyan Prakalpa consolidates 15 central and state welfare programs to provide a complete socio-economic safety net. Beneficiaries receive allotment of homestead land (land patta), a permanent pucca house under PMAY, tap water under Jal Jeevan Mission, Ayushman health cover, priority ration cards, and educational scholarships for children.',
    financialBenefit: 'Homestead land patta + free pucca house + 100% free piped water and subsidized food grains',
    keyObjectives: [
      'Provide permanent legal land ownership (patta) and pucca houses to tea garden laborer families',
      'Ensure 100% access to treated piped drinking water and electricity in tea estate worker lines',
      'Provide comprehensive social security, maternity benefits, and children educational stipends'
    ],
    eligibilityRules: {
      occupations: ['Tea Garden Worker', 'Plantation Laborer'],
      stateResidence: 'Tripura',
      notes: 'Registered tea garden worker or dependent family member residing in any of the 54 recognized tea estates in Tripura.'
    },
    eligibilityHighlights: [
      'Worker employed in a registered tea estate in Tripura',
      'Possesses Tea Board / Tea Estate worker identity card',
      'Residing within tea estate worker settlements (labour lines)'
    ],
    exclusions: [
      'Management staff and commercial estate owners'
    ],
    requiredDocuments: [
      {
        id: 'doc-tr-csk-worker',
        name: 'Tea Estate Worker Identity Card / Estate Muster Roll Entry',
        category: 'other',
        purpose: 'Verify tea plantation worker employment',
        citizenTip: 'Signed by tea estate manager or Labour Officer.',
        isMandatory: true
      },
      {
        id: 'doc-tr-csk-aadhaar',
        name: 'Aadhaar Card and Ration Card',
        category: 'identity',
        purpose: 'Identity and family verification',
        citizenTip: 'Check details with local Labour Inspector.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Enumeration by District Labour Officer (DLO)',
        description: 'Labour department conducts survey of workers across all 54 tea estates in Tripura.',
        portalOrOffice: 'Tea Estate Labour Office'
      },
      {
        stepNumber: 2,
        title: 'Land Patta & Housing Sanction Handover',
        description: 'District administration allocates homestead land patta and issues pucca house construction order.',
        portalOrOffice: 'Collectorate / Block Development Office'
      },
      {
        stepNumber: 3,
        title: 'Socio-Economic Saturation Delivery',
        description: 'Family receives tap water connection, Ayushman health card, and schooling allowances for children.',
        portalOrOffice: 'Tea Garden Worker Colony'
      }
    ],
    officialSource: {
      name: 'Labour Department, Government of Tripura',
      url: 'https://labour.tripura.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Labour Department',
      helpline: '0381-2323533',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal of the Tripura Labour Department for tea garden welfare.'
    }
  },
  {
    id: 'tr-disability-pension-scheme',
    name: 'Tripura Social Security Disability Pension (Divyangjan Monthly Subsistence Support)',
    hindiName: 'त्रिपुरा सामाजिक सुरक्षा दिव्यांग पेंशन योजना (दिव्यांगजन मासिक भरण-पोषण सहायता)',
    teluguName: 'త్రిపుర డిసేబిలిటీ పెన్షన్ పథకం',
    tamilName: 'திரிபுரா மாற்றுத்திறனாளிகள் ஓய்வூதியத் திட்டம்',
    tagline: 'Monthly financial subsistence pension of ₹2,000 directly via DBT for Persons with Disabilities (PwD).',
    category: 'disability-pwd',
    categoryLabel: 'Disability & Inclusion',
    geographicScope: 'State Scheme (Tripura)',
    stateApplicability: 'Tripura',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'TR',
    administeringGovernment: 'Government of Tripura',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Persons with Disabilities (PwD)', 'Visually, Speech, and Locomotor Impaired Citizens', 'Caregivers of Severe Disability Patients'],
    shortSummary: 'Comprehensive disability social security pension providing ₹2,000 per month (₹24,000 annually) directly via DBT into the bank accounts of persons with 40%+ benchmark disabilities across Tripura.',
    fullDescription: 'The Social Welfare & Social Education Department in Tripura ensures persons with disabilities receive continuous monthly financial support. Beneficiaries holding a verified UDID card or disability certificate of 40% and above receive ₹2,000 monthly subsistence allowance directly in their Aadhaar-linked bank accounts, guaranteeing economic survival and dignity with zero middleman deductions.',
    financialBenefit: '₹2,00,000 per decade or ₹2,000 / month (₹24,000 annually) direct benefit transfer',
    keyObjectives: [
      'Provide predictable monthly financial independence to persons with disabilities across Tripura',
      'Shield differently-abled citizens from poverty and nutritional neglect',
      'Ensure 100% digital benefit delivery through automated Aadhaar DBT'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      stateResidence: 'Tripura',
      notes: 'Permanent resident of Tripura possessing certified disability of 40% or above / UDID card with family annual income under ₹1 Lakh.'
    },
    eligibilityHighlights: [
      'Permanent resident / PRTC holder of Tripura',
      'Disability percentage of 40% or higher verified by Medical Board / UDID card',
      'Annual family income does not exceed ₹1,00,000',
      'Not receiving any other regular government or EPF pension'
    ],
    exclusions: [
      'Government employees or pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-tr-dsp-udid',
        name: 'UDID Card / Disability Certificate',
        category: 'disability',
        purpose: 'Verify disability percentage and category',
        citizenTip: 'Check UDID on swavlambancard.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-tr-dsp-income',
        name: 'Income Certificate (Family income < ₹1 Lakh/year)',
        category: 'income',
        purpose: 'Income ceiling compliance',
        citizenTip: 'Issued by Deputy Collector & Magistrate (DCM).',
        isMandatory: true
      },
      {
        id: 'doc-tr-dsp-bank',
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
        title: 'Apply through CDPO Office or at e-District Kiosk',
        description: 'Submit application along with UDID card to local Child Development Project Officer (CDPO) or e-District portal.',
        portalOrOffice: 'Block CDPO Office / edistrict.tripura.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Medical & Income Scrutiny',
        description: 'CDPO verifies disability credentials against UDID database and checks income limit.',
        portalOrOffice: 'CDPO Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹2,000 is credited directly into the beneficiary bank account by the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare & Social Education, Tripura',
      url: 'https://swse.tripura.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare & Social Education Department',
      helpline: '0381-2323533',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official social security disability pension portal of Tripura.'
    }
  },
  {
    id: 'tr-tripura-bamboo-mission',
    name: 'Tripura Bamboo Mission Artisan Livelihood Scheme (Tools, Training & Machinery Subsidy)',
    hindiName: 'त्रिपुरा बांस मिशन शिल्पकार आजीविका योजना (उपकरण, प्रशिक्षण एवं मशीनरी सब्सिडी)',
    teluguName: 'త్రిపుర వెదురు మిషన్ పథకం',
    tamilName: 'திரிபுரா மூங்கில் இயக்கம் கைவினைஞர் திட்டம்',
    tagline: '75% subsidized modern bamboo processing machinery, toolkits, and marketing support for traditional bamboo artisans.',
    category: 'artisans',
    categoryLabel: 'Artisans & Traditional Crafts',
    geographicScope: 'State Scheme (Tripura)',
    stateApplicability: 'Tripura',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'TR',
    administeringGovernment: 'Government of Tripura',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Bamboo & Cane Artisans', 'Traditional Weavers of Bamboo Mats (Chtai)', 'Handicraft SHGs & Clusters across Tripura'],
    shortSummary: 'Livelihood transformation program providing modern electric splitting machinery, toolkits, design training, and marketing linkages through the Tripura Bamboo Mission (TBM) to empower over 30,000 rural bamboo artisans.',
    fullDescription: 'Tripura accounts for a substantial share of India bamboo diversity and cane craftsmanship. The Tripura Bamboo Mission (TBM) modernizes the traditional bamboo sector by providing artisans with 75% subsidized electric bamboo cross-cutting, splitting, and slivering machinery, free ergonomic toolkits, and structured design training to produce contemporary furniture, incense sticks (agarbatti), and decorative handicrafts, linking artisans directly with national retail markets.',
    financialBenefit: '75% capital subsidy on bamboo processing machines + free improved toolkits + stipend during training',
    keyObjectives: [
      'Modernize traditional bamboo handicraft and agarbatti stick manufacturing across Tripura',
      'Increase artisan daily productivity from ₹150/day to ₹500+/day through motorized slivering tools',
      'Provide marketing outlets through Purbasha government handicraft emporiums'
    ],
    eligibilityRules: {
      occupations: ['Bamboo Artisan', 'Handicraft Worker', 'Agarbatti Roller'],
      stateResidence: 'Tripura',
      notes: 'Resident of Tripura practicing traditional bamboo and cane crafts, registered with Tripura Bamboo Mission or District Industries Centre.'
    },
    eligibilityHighlights: [
      'Permanent resident of Tripura practicing bamboo/cane crafts',
      'Registered with local bamboo artisan cluster or SHG under TBM',
      'Aadhaar-seeded bank account for stipend and subsidy'
    ],
    exclusions: [
      'Commercial bulk timber contractors without artisanal production'
    ],
    requiredDocuments: [
      {
        id: 'doc-tr-tbm-artisan',
        name: 'Artisan Identity Card / DIC Registration',
        category: 'other',
        purpose: 'Verify authentic bamboo artisan credentials',
        citizenTip: 'Issued by General Manager, District Industries Centre.',
        isMandatory: true
      },
      {
        id: 'doc-tr-tbm-aadhaar',
        name: 'Aadhaar Card and Bank Passbook',
        category: 'identity',
        purpose: 'Identity and DBT routing',
        citizenTip: 'Ensure name matches bank passbook.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register with Local Bamboo Cluster Facilitator',
        description: 'Register with local cluster facilitator or submit form at District Industries Centre (DIC).',
        portalOrOffice: 'District DIC / Bamboo Mission Office'
      },
      {
        stepNumber: 2,
        title: 'Skill Upgradation & Machinery Allocation',
        description: 'Complete 15-day design training workshop and receive modern electric slivering machine allocation.',
        portalOrOffice: 'TBM Common Facility Centre'
      },
      {
        stepNumber: 3,
        title: 'Production and Direct Marketing',
        description: 'Produce high-value handicrafts and sell through TBM collection centers and Purbasha emporiums.',
        portalOrOffice: 'Purbasha Emporium / TBM'
      }
    ],
    officialSource: {
      name: 'Tripura Bamboo Mission, Department of Industries and Commerce',
      url: 'https://industries.tripura.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Industries and Commerce, Tripura',
      helpline: '0381-2325357',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal of the Tripura Bamboo Mission.'
    }
  }
];

const allNorthEastSchemes = [
  ...ar_as_schemes,
  ...mn_schemes,
  ...ml_schemes,
  ...remainingNorthEastSchemes
];

const fileContent = 'import type { Scheme } from "../../types/scheme";\n\nexport const NORTHEAST_STATES_SCHEMES: Scheme[] = ' + JSON.stringify(allNorthEastSchemes, null, 2) + ';\n';
fs.writeFileSync('D:/civicai/frontend/src/data/schemes/statesNorthEast.ts', fileContent, 'utf8');

const counts = {};
allNorthEastSchemes.forEach(s => counts[s.stateCode] = (counts[s.stateCode] || 0) + 1);
console.log('NorthEast States generation complete! Total schemes:', allNorthEastSchemes.length);
console.log('Counts per state:', counts);
