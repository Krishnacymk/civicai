const fs = require('fs');

const eastSchemes = [
  // BIHAR (BR)
  {
    id: 'br-mukhyamantri-kanya-utthan',
    name: 'Mukhyamantri Kanya Utthan Yojana (Bihar Girl Child Lifecycle Support)',
    hindiName: 'मुख्यमंत्री कन्या उत्थान योजना (बिहार)',
    teluguName: 'ముఖ్యమంత్రి కన్యా ఉత్థాన్ పథకం (బీహార్)',
    tamilName: 'முதலமைச்சர் கன்யா உத்தான் திட்டம் (பீகார்)',
    tagline: 'Cumulative financial grant of ₹54,100 from birth to college graduation for every daughter in Bihar.',
    category: 'education',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Bihar)',
    stateApplicability: 'Bihar',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'BR',
    administeringGovernment: 'Government of Bihar',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Girl Children born in Bihar', 'Class 12 Intermediate Passed Girls', 'Graduate Unmarried/Married Daughters'],
    shortSummary: 'Comprehensive lifecycle grant providing ₹5,000 at birth, uniform allowances across schooling, ₹25,000 upon passing Class 12 (unmarried), and ₹50,000 upon completing graduation.',
    fullDescription: 'The Mukhyamantri Kanya Utthan Yojana is Bihar premier social initiative to eradicate female infanticide, promote universal schooling, and incentivize higher education for girls. The scheme provides continuous assistance from birth through graduation: ₹2,000 at birth, ₹1,000 on Aadhaar linking, ₹2,000 upon complete immunization, annual uniform and sanitary napkin allowances, ₹25,000 after clearing Class 12 intermediate, and ₹50,000 directly into the bank account of every female graduate from any recognized university in Bihar.',
    financialBenefit: 'Up to ₹54,100+ cumulative grants (₹25,000 for Class 12 + ₹50,000 for Degree Graduation)',
    keyObjectives: [
      'Stop female foeticide and significantly elevate the child sex ratio in Bihar',
      'Incentivize completion of secondary and university education among girls',
      'Eliminate child marriage by requiring unmarried status for intermediate grants'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Bihar',
      notes: 'Girl student must be a permanent resident of Bihar and enrolled in recognized schools/colleges in Bihar.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Bihar',
      'Must have passed Class 12 (unmarried) or passed graduation from recognized Bihar university',
      'Bank account in candidate own name in a nationalized or scheduled commercial bank'
    ],
    exclusions: [
      'Students passing through unaccredited or fraudulent non-recognized colleges'
    ],
    requiredDocuments: [
      {
        id: 'doc-br-mku-marks',
        name: 'Class 12 / Graduation Degree Marksheet',
        category: 'academic',
        purpose: 'Verification of academic achievement and university roll number',
        citizenTip: 'Must match registration details on Medhasoft portal.',
        isMandatory: true
      },
      {
        id: 'doc-br-mku-aadhaar',
        name: 'Aadhaar Card of the Student',
        category: 'identity',
        purpose: 'Identity validation and biometric authentication',
        citizenTip: 'Aadhaar must be linked to bank account with NPCI mapping.',
        isMandatory: true
      },
      {
        id: 'doc-br-mku-domicile',
        name: 'Bihar Domicile (Niwas) Certificate',
        category: 'identity',
        purpose: 'Proof of permanent residence in Bihar',
        citizenTip: 'Apply on RTPS Bihar portal (serviceonline.bihar.gov.in).',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register on Medhasoft / e-Kalyan Portal',
        description: 'Visit medhasoft.bih.nic.in and register using your university registration number and Aadhaar.',
        portalOrOffice: 'medhasoft.bih.nic.in'
      },
      {
        stepNumber: 2,
        title: 'College / Department Verification',
        description: 'College principal and university nodal officer verify marksheet and enrollment online.',
        portalOrOffice: 'University Nodal Desk'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer (DBT)',
        description: 'Amount (₹25,000 or ₹50,000) is credited directly to the student bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Education Department, Government of Bihar',
      url: 'https://medhasoft.bih.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Education, Govt of Bihar',
      helpline: '0612-2215323',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official e-Kalyan / Medhasoft platform for girl student grants in Bihar.'
    }
  },
  {
    id: 'br-bihar-student-credit-card',
    name: 'Bihar Student Credit Card Scheme (BSCCS Higher Education Loans)',
    hindiName: 'बिहार स्टूडेंट क्रेडिट कार्ड योजना (उच्च शिक्षा ऋण)',
    teluguName: 'బీహార్ స్టూడెంట్ క్రెడిట్ కార్డ్ పథకం',
    tamilName: 'பீகார் மாணவர் கிரெடிட் கார்டு திட்டம்',
    tagline: 'Collateral-free education loan up to ₹4 Lakh at nominal 1% interest for girls/PwD/transgender and 4% for boys.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Bihar)',
    stateApplicability: 'Bihar',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'BR',
    administeringGovernment: 'Government of Bihar',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Class 12 Passed Students', 'Polytechnic Diploma Holders', 'Students pursuing BA/BSc/BTech/MBBS/MBA'],
    shortSummary: 'State-guaranteed loan up to ₹4 Lakh covering tuition fees, hostel rent, books, and laptop for students pursuing 40+ professional and technical courses across India.',
    fullDescription: 'Under the Seven Resolves (Saat Nischay) of Bihar, the Student Credit Card Scheme removes financial handicaps preventing youths from entering higher education. The Bihar State Education Finance Corporation (BSEFC) provides institutional education loans up to ₹4 Lakh with zero collateral or third-party guarantee. The interest rate is subsidized to 1% for female, Divyang, and transgender students, and 4% for male students, with repayment beginning only one year after course completion.',
    financialBenefit: 'Up to ₹4,00,000 collateral-free education loan with state guarantee and subsidized interest',
    keyObjectives: [
      'Increase the Gross Enrollment Ratio (GER) of Bihar in higher technical education',
      'Provide zero-collateral financing for poor rural students pursuing engineering, medicine, and management',
      'Eliminate repayment stress during study period via extended moratorium'
    ],
    eligibilityRules: {
      maxAge: 25,
      stateResidence: 'Bihar',
      notes: 'Resident of Bihar under 25 years who has passed Class 12 or equivalent and secured admission in a recognized institution.'
    },
    eligibilityHighlights: [
      'Permanent resident of Bihar aged up to 25 years',
      'Passed Class 12 / Intermediate from a recognized board in Bihar',
      'Admitted or selected for admission in any accredited university or institute in India'
    ],
    exclusions: [
      'Institutions blacklisted or non-accredited by NAAC / AICTE / UGC'
    ],
    requiredDocuments: [
      {
        id: 'doc-br-scc-admission',
        name: 'Admission Letter & Fee Structure from College',
        category: 'academic',
        purpose: 'Proof of course admission and fee estimate',
        citizenTip: 'College fee schedule must be signed on official letterhead.',
        isMandatory: true
      },
      {
        id: 'doc-br-scc-marks',
        name: 'Class 10th and 12th Passing Certificates',
        category: 'academic',
        purpose: 'Educational eligibility verification',
        citizenTip: 'Original certificates needed for verification at DRCC.',
        isMandatory: true
      },
      {
        id: 'doc-br-scc-residence',
        name: 'Bihar Residence Certificate & Domicile',
        category: 'identity',
        purpose: 'Proof of state residency',
        citizenTip: 'Issued by Circle Officer (CO) or SDO.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on MNSSBY Portal',
        description: 'Register and submit application form on 7nishchay-yuvaupmission.bihar.gov.in.',
        portalOrOffice: '7nishchay-yuvaupmission.bihar.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Document Verification at District DRCC',
        description: 'Visit the District Registration and Counseling Center (DRCC) on scheduled date with original documents.',
        portalOrOffice: 'District DRCC Center'
      },
      {
        stepNumber: 3,
        title: 'Sanction and Direct Tuition Disbursement',
        description: 'BSEFC sanctions loan; tuition fees are transferred directly to college semester-wise and living expenses to student account.',
        portalOrOffice: 'BSEFC / Partner Bank'
      }
    ],
    officialSource: {
      name: 'Bihar State Education Finance Corporation Limited (BSEFC)',
      url: 'https://www.7nishchay-yuvaupmission.bihar.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Education Department, Government of Bihar',
      helpline: '1800-345-6444',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal under Bihar Vikas Mission Saat Nischay.'
    }
  },
  {
    id: 'br-mukhyamantri-udyami-yojana',
    name: 'Mukhyamantri Udyami Yojana (Bihar Entrepreneurship & Industrial Seed Capital)',
    hindiName: 'मुख्यमंत्री उद्यमी योजना (बिहार सूक्ष्म उद्योग प्रोत्साहन)',
    teluguName: 'ముఖ్యమంత్రి ఉద్యమి పథకం (బీహార్)',
    tamilName: 'முதலமைச்சர் உத்யமி திட்டம் (பீகார்)',
    tagline: 'Up to ₹10 Lakh financial package (50% grant up to ₹5 Lakh + 50% interest-free/1% loan) for micro-enterprises.',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'State Scheme (Bihar)',
    stateApplicability: 'Bihar',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'BR',
    administeringGovernment: 'Government of Bihar',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['SC / ST Entrepreneurs', 'Extremely Backward Class (EBC) Youth', 'Women Entrepreneurs', 'Young Innovators'],
    shortSummary: 'High-impact enterprise startup support offering ₹10 Lakh per approved project (₹5 Lakh non-repayable grant + ₹5 Lakh repayable over 7 years at 0% or 1% interest) plus free technical training.',
    fullDescription: 'The Mukhyamantri Udyami Yojana (encompassing SC/ST, EBC, Mahila, and Yuva categories) provides capital to establish small manufacturing and processing units across Bihar. Selected applicants undergo 2 weeks of entrepreneurship training at premier institutes like IIT Patna or CIPET, receive ₹25,000 training allowance, and get ₹10 Lakh disbursed in three milestone-based installments to purchase machinery and setup plants.',
    financialBenefit: '₹10,00,000 project funding (₹5,00,000 100% grant + ₹5,00,000 interest-free / 1% loan repayable in 84 EMIs)',
    keyObjectives: [
      'Foster indigenous industrialization and manufacturing micro-clusters in Bihar',
      'Create massive non-farm employment for local rural and semi-urban youth',
      'Empower women and marginalized social groups to become business owners'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 50,
      stateResidence: 'Bihar',
      notes: 'Resident of Bihar aged 18 to 50 who has cleared 10+2 / Intermediate, ITI, Polytechnic diploma or equivalent.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Bihar aged 18 to 50',
      'Minimum qualification: 10+2, ITI, Polytechnic, or Graduate degree',
      'Enterprise must be registered as Sole Proprietorship, Partnership, or Pvt Ltd company in Bihar'
    ],
    exclusions: [
      'Individuals who have previously availed default-prone commercial loans'
    ],
    requiredDocuments: [
      {
        id: 'doc-br-udy-caste',
        name: 'Caste Certificate / Domicile Certificate',
        category: 'caste',
        purpose: 'Category entitlement verification (SC/ST/EBC/Mahila/Yuva)',
        citizenTip: 'Obtain digital caste certificate on RTPS portal.',
        isMandatory: true
      },
      {
        id: 'doc-br-udy-pan',
        name: 'PAN Card & Current Bank Account Passbook',
        category: 'identity',
        purpose: 'Business transaction and account verification',
        citizenTip: 'Current bank account in the name of the firm is mandatory before second installment.',
        isMandatory: true
      },
      {
        id: 'doc-br-udy-qual',
        name: 'Intermediate / ITI / Diploma Certificate',
        category: 'academic',
        purpose: 'Proof of minimum required educational qualification',
        citizenTip: 'Scanned clear copy of marksheet.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online during Annual Application Window',
        description: 'Register and choose your trade/project type on udyami.bihar.gov.in.',
        portalOrOffice: 'udyami.bihar.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Computerized Lottery Selection & Training',
        description: 'Candidates are selected via transparent computerized lottery and sent for 2-week technical training.',
        portalOrOffice: 'Department of Industries'
      },
      {
        stepNumber: 3,
        title: 'Installment-Based Fund Disbursement',
        description: 'Funds are credited in three stages (infrastructure, machinery purchase, working capital).',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Industries, Government of Bihar',
      url: 'https://udyami.bihar.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Industries',
      helpline: '1800-345-6214',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Bihar entrepreneurship portal for Mukhyamantri Udyami Yojana.'
    }
  },
  {
    id: 'br-mukhyamantri-vridhajan-pension',
    name: 'Mukhyamantri Vridhajan Pension Yojana (Bihar Universal Senior Citizen Pension)',
    hindiName: 'मुख्यमंत्री वृद्धजन पेंशन योजना (बिहार)',
    teluguName: 'ముఖ్యమంత్రి వృద్ధజన్ పెన్షన్ పథకం (బీహార్)',
    tamilName: 'முதலமைச்சர் முதியோர் ஓய்வூதியத் திட்டம் (பீகார்)',
    tagline: 'Universal monthly pension of ₹400 (age 60-79) and ₹500 (age 80+) for all senior citizens with zero caste or poverty restrictions.',
    category: 'seniors-elderly',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'State Scheme (Bihar)',
    stateApplicability: 'Bihar',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'BR',
    administeringGovernment: 'Government of Bihar',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Elderly Widows & Widowers', 'Rural Senior Citizens'],
    shortSummary: 'Universal direct monthly pension transferred to all elderly citizens in Bihar regardless of BPL/APL status or caste, requiring only state domicile and non-receipt of government pensions.',
    fullDescription: 'The Mukhyamantri Vridhajan Pension Yojana (MVPY) provides social security to senior citizens in Bihar. Unlike central schemes requiring strict BPL listings, MVPY covers every elderly citizen aged 60 years or older. Beneficiaries aged 60 to 79 receive ₹400 monthly, which increases to ₹500 per month upon reaching age 80, credited directly into their Aadhaar-seeded bank accounts through the Social Welfare Department.',
    financialBenefit: '₹400 / month (age 60-79) and ₹500 / month (age 80+) transferred directly via DBT',
    keyObjectives: [
      'Provide universal old-age financial dignity to all senior citizens of Bihar',
      'Shield vulnerable elderly individuals from neglect and poverty in their twilight years',
      'Operate automated monthly DBT without paper vouchers or middleman leakages'
    ],
    eligibilityRules: {
      minAge: 60,
      stateResidence: 'Bihar',
      notes: 'Resident of Bihar aged 60 years or above, who is not receiving any other government pension or EPF retirement benefits.'
    },
    eligibilityHighlights: [
      'Permanent resident of Bihar aged 60 years or above',
      'Universal eligibility — no requirement of BPL card or income ceiling',
      'Must have valid Aadhaar card and Aadhaar-seeded bank account'
    ],
    exclusions: [
      'Retired central/state government employees receiving civil or military pensions',
      'Beneficiaries receiving pensions under EPF or other statutory social security schemes'
    ],
    requiredDocuments: [
      {
        id: 'doc-br-mvp-aadhaar',
        name: 'Aadhaar Card of the Senior Citizen',
        category: 'identity',
        purpose: 'Age proof and biometric identity verification',
        citizenTip: 'Aadhaar consent form must be filled and signed.',
        isMandatory: true
      },
      {
        id: 'doc-br-mvp-bank',
        name: 'Bank Passbook (Aadhaar Seeded)',
        category: 'bank',
        purpose: 'Direct benefit transfer bank account',
        citizenTip: 'Bank account must be in applicant own name in a branch located in Bihar.',
        isMandatory: true
      },
      {
        id: 'doc-br-mvp-residence',
        name: 'Voter ID / Domicile Certificate',
        category: 'identity',
        purpose: 'Proof of Bihar residency',
        citizenTip: 'EPIC card copy is accepted.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on SSPMIS Portal or at Block Office',
        description: 'Submit online form on sspmis.bihar.gov.in or visit local Block Development Officer (RTPS counter).',
        portalOrOffice: 'sspmis.bihar.gov.in / RTPS Counter'
      },
      {
        stepNumber: 2,
        title: 'Aadhaar Authentication & Approval by BDO',
        description: 'Block Development Officer verifies biometric Aadhaar linkage and approves the pension application.',
        portalOrOffice: 'Block Development Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Credit',
        description: 'Pension amount is credited monthly directly into the beneficiary bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Social Welfare Department, Government of Bihar',
      url: 'https://sspmis.bihar.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '1800-345-6262',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official social security pension management system of Bihar (SSPMIS).'
    }
  },
  {
    id: 'br-har-ghar-nal-ka-jal',
    name: 'Har Ghar Nal Ka Jal (Bihar Piped Drinking Water to Every Household)',
    hindiName: 'हर घर नल का जल (बिहार ग्रामीण एवं शहरी पेयजल निश्चय)',
    teluguName: 'హర్ ఘర్ నల్ కా జల్ (బీహార్)',
    tamilName: 'ஹர் கர் நல் கா ஜல் (பீகார்)',
    tagline: '100% free treated piped drinking water connection right into the courtyard of every rural and urban household.',
    category: 'low-income-welfare',
    categoryLabel: 'Public & Citizen Services',
    geographicScope: 'State Scheme (Bihar)',
    stateApplicability: 'Bihar',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'BR',
    administeringGovernment: 'Government of Bihar',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Rural Families in All Wards', 'Slum Dwellers and Urban Poor', 'Arsenic/Fluoride Affected Hamlets'],
    shortSummary: 'Flagship initiative under Saat Nischay delivering 70 liters per capita daily of safe, clean piped water through individual household tap connections to 1.7+ Crore rural households.',
    fullDescription: 'Har Ghar Nal Ka Jal is one of the most successful rural water transformations in India. Executed by the Public Health Engineering Department (PHED) and Panchayati Raj Department, it installed decentralized mini-water supply plants and water towers across 1.14 Lakh rural wards, providing treated, safe drinking water directly to household taps, effectively eliminating waterborne diseases like cholera, dysentery, and arsenic/fluoride toxicity.',
    financialBenefit: '100% free tap installation and clean water supply at negligible maintenance charge of ₹30/month',
    keyObjectives: [
      'Deliver safe potable drinking water to 100% of rural and urban habitations in Bihar',
      'Free rural women and girls from the drudgery of carrying water from distant tube wells',
      'Eradicate endemic arsenic, fluoride, and iron water contamination in Gangetic plains'
    ],
    eligibilityRules: {
      stateResidence: 'Bihar',
      notes: 'All permanent residential households located in registered wards and villages across Bihar.'
    },
    eligibilityHighlights: [
      'Every household in the village ward is entitled to a tap connection',
      'Zero connection charges or pipe installation fees'
    ],
    exclusions: [
      'Commercial factories and unauthorized agricultural irrigation diversion'
    ],
    requiredDocuments: [
      {
        id: 'doc-br-nal-ration',
        name: 'Ration Card / Household Survey Entry',
        category: 'identity',
        purpose: 'Ward household verification',
        citizenTip: 'Registered by Ward Implementation & Management Committee (WIMC).',
        isMandatory: true
      },
      {
        id: 'doc-br-nal-aadhaar',
        name: 'Aadhaar Card of Head of Household',
        category: 'identity',
        purpose: 'Citizen identity verification',
        citizenTip: 'Collected by Ward Member or Panchayati Raj Assistant.',
        isMandatory: false
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Ward Committee Household Survey',
        description: 'Ward Implementation and Management Committee (WIMC) includes household in ward water scheme plan.',
        portalOrOffice: 'Gram Panchayat Ward Committee'
      },
      {
        stepNumber: 2,
        title: 'Pipeline Laying & Tap Connection',
        description: 'Engineers connect distribution pipeline and install tap valve inside household boundary.',
        portalOrOffice: 'Household Premise'
      },
      {
        stepNumber: 3,
        title: 'Grievance Redressal via PHED Helpline',
        description: 'Report pipe leakages or pump breakdowns on toll-free helpline 1800-345-6602 or Lok Shikayat portal.',
        portalOrOffice: 'PHED Call Center'
      }
    ],
    officialSource: {
      name: 'Public Health Engineering Department (PHED), Government of Bihar',
      url: 'https://phed.bihar.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Public Health Engineering Department',
      helpline: '1800-345-6602',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Piped drinking water monitoring system of Bihar PHED.'
    }
  },

  // JHARKHAND (JH)
  {
    id: 'jh-abua-awas-yojana',
    name: 'Abua Awas Yojana (Jharkhand 3-Room Pucca Housing Scheme)',
    hindiName: 'अबुआ आवास योजना (झारखण्ड ३-कमरा पक्का आवास)',
    teluguName: 'అబువా ఆవాస్ పథకం (జార్ఖండ్)',
    tamilName: 'அபுவா ஆவாஸ் திட்டம் (ஜார்கண்ட்)',
    tagline: '₹2 Lakh direct grant + MNREGA labor wages to construct a permanent 3-room pucca house with dedicated kitchen.',
    category: 'housing',
    categoryLabel: 'Housing & Urban Planning',
    geographicScope: 'State Scheme (Jharkhand)',
    stateApplicability: 'Jharkhand',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'JH',
    administeringGovernment: 'Government of Jharkhand',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Houseless Rural Families', 'Kutcha / Mud House Dwellers', 'Vulnerable Tribal Families (PVTG)', 'Single Widows'],
    shortSummary: 'Comprehensive 100% state-funded housing scheme providing ₹2 Lakh in four installments plus 95 days of MNREGA wages to build a spacious 31 sq. meter 3-room brick home with clean kitchen.',
    fullDescription: 'The Abua Awas Yojana provides permanent housing for poor families who were left out of Central PMAY-G lists in Jharkhand. The scheme provides ₹2,00,000 cash grant transferred directly into the beneficiary bank account across 4 milestone stages (plinth, lintel, roof, and finishing) alongside ₹24,000+ in MNREGA unskilled labor wages. Priority is given to Particularly Vulnerable Tribal Groups (PVTG), natural disaster victims, and families living in dilapidated mud huts.',
    financialBenefit: '₹2,00,000 direct construction grant + ~₹25,000 MNREGA labor wages (Total ~₹2.25 Lakh)',
    keyObjectives: [
      'Provide secure, dignified 3-room permanent housing to all houseless rural families in Jharkhand',
      'Prioritize Particularly Vulnerable Tribal Groups (Birhor, Paharia, Mal Paharia)',
      'Ensure transparency via geo-tagged verification and Aapki Yojana Aapki Sarkar camps'
    ],
    eligibilityRules: {
      stateResidence: 'Jharkhand',
      notes: 'Resident of Jharkhand living in kutcha/mud house, houseless, or destitute, who has not availed benefits under PMAY-G, Baba Saheb Ambedkar Awas, or other government housing schemes.'
    },
    eligibilityHighlights: [
      'Permanent resident of Jharkhand',
      'Families residing in kutcha houses or temporary shelters',
      'Must not own a permanent pucca house anywhere in India'
    ],
    exclusions: [
      'Families that have already received houses under PMAY-G, Birsa Awas, or Ambedkar Awas',
      'Households possessing mechanized four-wheelers or motorized agricultural equipment'
    ],
    requiredDocuments: [
      {
        id: 'doc-jh-aay-aadhaar',
        name: 'Aadhaar Card of Family Head and Spouse',
        category: 'identity',
        purpose: 'Identity verification and beneficiary registration',
        citizenTip: 'Both husband and wife Aadhaar must be linked.',
        isMandatory: true
      },
      {
        id: 'doc-jh-aay-jobcard',
        name: 'MNREGA Job Card',
        category: 'other',
        purpose: 'Payment of construction labor wages',
        citizenTip: 'Must be registered in the same Gram Panchayat.',
        isMandatory: true
      },
      {
        id: 'doc-jh-aay-bank',
        name: 'Bank Passbook (NPCI Aadhaar Enabled)',
        category: 'bank',
        purpose: 'Direct benefit transfer installments',
        citizenTip: 'Check with bank that direct credit is active.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply at Aapki Yojana Aapki Sarkar Aapke Dwar Camps',
        description: 'Submit physical application form during special government outreach camps in your Gram Panchayat.',
        portalOrOffice: 'Panchayat Outreach Camp / BDO Office'
      },
      {
        stepNumber: 2,
        title: 'Gram Sabha Verification & Geo-Tagging',
        description: 'Gram Sabha verifies kutcha housing status and panchayat secretary geo-tags the existing structure.',
        portalOrOffice: 'Gram Panchayat'
      },
      {
        stepNumber: 3,
        title: 'Sanction and 4-Stage Installment Disbursal',
        description: 'Sanction letter issued; ₹2 Lakh released in 4 installments as construction progresses from foundation to roof.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Rural Development, Government of Jharkhand',
      url: 'https://aay.jharkhand.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Rural Development Department',
      helpline: '1800-345-6527',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Abua Awas Yojana tracking portal of Jharkhand Rural Development Department.'
    }
  },
  {
    id: 'jh-maiyan-samman-yojana',
    name: 'Jharkhand Mukhya Mantri Maiyan Samman Yojana (JMMSY Monthly Women Financial Dignity)',
    hindiName: 'झारखण्ड मुख्यमंत्री मइयां सम्मान योजना',
    teluguName: 'జార్ఖండ్ ముఖ్యమంత్రి మైయాన్ సమ్మాన్ పథకం',
    tamilName: 'ஜார்கண்ட் முதலமைச்சர் மையாங் சம்மான் திட்டம்',
    tagline: 'Monthly financial assistance of ₹1,000 (₹12,000/year) directly credited to the bank accounts of women aged 18 to 50.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Jharkhand)',
    stateApplicability: 'Jharkhand',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'JH',
    administeringGovernment: 'Government of Jharkhand',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Women aged 18 to 50 years', 'Rural Homemakers', 'Self-Employed Women', 'Low-Income Women'],
    shortSummary: 'Universal women empowerment program providing ₹1,000 monthly cash assistance via DBT to approximately 48 Lakh women across Jharkhand to foster financial independence and healthcare nutrition.',
    fullDescription: 'The Jharkhand Mukhya Mantri Maiyan Samman Yojana (JMMSY) provides unconditional monthly income support to adult women aged 18 to 50 residing in Jharkhand. Intended to strengthen women household decision-making, nutrition, and child education, the ₹1,000 monthly sum is credited via Aadhaar-based DBT on the 15th of every month. Upon turning 50, beneficiaries seamlessly transition into the state universal old age pension.',
    financialBenefit: '₹1,000 / month (₹12,000 annually) transferred directly via DBT',
    keyObjectives: [
      'Provide guaranteed monthly financial support to adult women across rural and urban Jharkhand',
      'Improve nutritional outcomes and health-seeking behavior among mothers and young women',
      'Foster women economic autonomy and reduce dependency on informal loans'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 50,
      targetGender: 'female',
      stateResidence: 'Jharkhand',
      notes: 'Woman residing in Jharkhand aged 18 to 50 years holding a Jharkhand ration card (Antyodaya, PHH, or Green Card) and not an income tax payee.'
    },
    eligibilityHighlights: [
      'Woman resident of Jharkhand aged 18 to 50 years',
      'Name listed in state digital ration card database (AAY / PHH / Green Card)',
      'Individual bank account linked with Aadhaar and NPCI enabled'
    ],
    exclusions: [
      'Women who are regular government employees or pension holders',
      'Income tax paying families'
    ],
    requiredDocuments: [
      {
        id: 'doc-jh-msy-aadhaar',
        name: 'Aadhaar Card of the Applicant',
        category: 'identity',
        purpose: 'Biometric identity and age verification',
        citizenTip: 'Must clearly state date of birth showing age between 18 and 50.',
        isMandatory: true
      },
      {
        id: 'doc-jh-msy-ration',
        name: 'Jharkhand State Ration Card',
        category: 'income',
        purpose: 'Family identification and domicile proof',
        citizenTip: 'Check member details on aahar.jharkhand.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-jh-msy-bank',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer payment destination',
        citizenTip: 'Bank account must be in applicant own single name.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Form at Pragya Kendra or Special Camps',
        description: 'Submit application at nearest Pragya Kendra (CSC) or special Panchayat camps.',
        portalOrOffice: 'Pragya Kendra / Panchayat Bhawan'
      },
      {
        stepNumber: 2,
        title: 'Digital Verification by Circle Officer / BDO',
        description: 'Block Development Officer verifies ration card and Aadhaar seeding credentials online.',
        portalOrOffice: 'BDO Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹1,000 is credited automatically to applicant bank account on the 15th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women, Child Development and Social Security, Jharkhand',
      url: 'https://mmmsy.jharkhand.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women, Child Development and Social Security Department',
      helpline: '1800-890-0215',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal for Mukhya Mantri Maiyan Samman Yojana Jharkhand.'
    }
  },
  {
    id: 'jh-guruji-student-credit-card',
    name: 'Guruji Student Credit Card Scheme (Jharkhand Higher Education Loans)',
    hindiName: 'गुरुजी स्टूडेंट क्रेडिट कार्ड योजना (झारखण्ड उच्च शिक्षा ऋण)',
    teluguName: 'గురూజీ స్టూడెంట్ క్రెడిట్ కార్డ్ పథకం (జార్ఖండ్)',
    tamilName: 'குருஜி மாணவர் கிரெடிட் கார்டு திட்டம் (ஜார்கண்ட்)',
    tagline: 'Collateral-free higher education loan up to ₹15 Lakh at ultra-low 4% simple interest with 15-year repayment.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Jharkhand)',
    stateApplicability: 'Jharkhand',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'JH',
    administeringGovernment: 'Government of Jharkhand',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Class 10th/12th Passed Students', 'Students admitted to Engineering, Medical, Law, and Management', 'Tribal & Marginalized Youths'],
    shortSummary: 'Guaranteed education credit up to ₹15 Lakh for meritorious students of Jharkhand admitted to top NIRF-ranked institutions, with 30% of the loan allowed for non-institutional living and laptop expenses.',
    fullDescription: 'Named after prominent leader Shibu Soren, the Guruji Student Credit Card Scheme allows students from poor and middle-class backgrounds in Jharkhand to access premier higher education. The state government acts as 100% guarantor, providing up to ₹15 Lakh at a simple interest rate of just 4%. Repayment begins 1 year after graduation and can be paid back over a relaxed 15-year tenure.',
    financialBenefit: 'Up to ₹15,00,000 collateral-free education loan at 4% simple interest with 15-year EMI duration',
    keyObjectives: [
      'Enable bright underprivileged students to attend IITs, IIMs, AIIMS, and top NIRF colleges',
      'Remove third-party collateral and parental mortgage requirements for educational credit',
      'Provide living stipends (up to 30% of loan) covering hostels, books, and laptops'
    ],
    eligibilityRules: {
      stateResidence: 'Jharkhand',
      notes: 'Student must be a resident of Jharkhand who passed Class 10 and 12 from recognized institutions in Jharkhand and secured admission in approved top colleges.'
    },
    eligibilityHighlights: [
      'Bonafide resident of Jharkhand',
      'Completed Class 10th and 12th from recognized schools in Jharkhand',
      'Secured admission in institutions ranked in NIRF overall top 200 or specialized category rankings'
    ],
    exclusions: [
      'Non-recognized distance learning diploma courses without regulatory approval'
    ],
    requiredDocuments: [
      {
        id: 'doc-jh-gscc-admission',
        name: 'Admission Letter and Fee Structure from College',
        category: 'academic',
        purpose: 'Verify admission into recognized institution and fee schedule',
        citizenTip: 'Must include breakdown of tuition, mess, and hostel fees.',
        isMandatory: true
      },
      {
        id: 'doc-jh-gscc-marks',
        name: 'Class 10th and 12th Marksheets',
        category: 'academic',
        purpose: 'Proof of clearing qualifying schooling in Jharkhand',
        citizenTip: 'Original certificates to be presented during verification.',
        isMandatory: true
      },
      {
        id: 'doc-jh-gscc-residence',
        name: 'Jharkhand Residential Certificate',
        category: 'identity',
        purpose: 'Proof of domicile in Jharkhand',
        citizenTip: 'Issued by Sub-Divisional Officer (SDO).',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Guruji Credit Card Portal',
        description: 'Register and submit application along with college admission proof on gscc.jharkhand.gov.in.',
        portalOrOffice: 'gscc.jharkhand.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Nodal Agency Verification',
        description: 'Department of Higher & Technical Education verifies academic credentials and college rankings.',
        portalOrOffice: 'Higher Education Directorate'
      },
      {
        stepNumber: 3,
        title: 'Bank Loan Sanction & Direct Fee Remittance',
        description: 'Partner bank issues student credit card and disburses semester tuition fees directly to the university.',
        portalOrOffice: 'Partner Commercial Bank'
      }
    ],
    officialSource: {
      name: 'Department of Higher and Technical Education, Jharkhand',
      url: 'https://gscc.jharkhand.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Higher and Technical Education Department',
      helpline: '1800-123-1836',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Jharkhand student credit loan portal.'
    }
  },
  {
    id: 'jh-sarvajan-pension-yojana',
    name: 'Jharkhand Sarvajan Pension Yojana (Universal Social Security Pensions)',
    hindiName: 'झारखण्ड सर्वजन पेंशन योजना (सार्वभौमिक सामाजिक सुरक्षा)',
    teluguName: 'జార్ఖండ్ సర్వజన్ పెన్షన్ పథకం',
    tamilName: 'ஜார்கண்ட் சர்வஜன் ஓய்வூதியத் திட்டம்',
    tagline: 'Universal monthly pension of ₹1,000 for all senior citizens (age 50+ for SC/ST/Women, 60+ others), widows, and PwD.',
    category: 'pension',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'State Scheme (Jharkhand)',
    stateApplicability: 'Jharkhand',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'JH',
    administeringGovernment: 'Government of Jharkhand',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens (Age 50+ for SC/ST/Women, 60+ others)', 'Widows & Destitute Women', 'Divyangjan / PwD', 'HIV/AIDS Patients'],
    shortSummary: 'Universal social security coverage providing ₹1,000 per month via DBT without BPL caps, targeting 30+ Lakh vulnerable citizens across rural and tribal Jharkhand.',
    fullDescription: 'Jharkhand transformed its pension delivery by launching the Sarvajan Pension Yojana, abolishing restrictive quotas and BPL card requirements. The qualifying age for old-age pension was progressively reduced to 50 years for women, SC, and ST citizens (and 60 for others). Over 3 million beneficiaries receive ₹1,000 on the 5th of every month directly in their bank accounts.',
    financialBenefit: '₹1,000 / month (₹12,000 per year) credited via DBT',
    keyObjectives: [
      'Provide universal old-age, widow, and disability coverage across all 24 districts of Jharkhand',
      'Affirmative age reduction to 50 years acknowledging life expectancy realities among indigenous tribal populations',
      'Eliminate quotas and waiting lists through simplified approval by Circle Officers'
    ],
    eligibilityRules: {
      stateResidence: 'Jharkhand',
      notes: 'Resident of Jharkhand. Age: 50+ for SC/ST/Women; 60+ for general males. Widows aged 18+ and PwD with 40%+ disability eligible unconditionally.'
    },
    eligibilityHighlights: [
      'Permanent resident of Jharkhand',
      'Age criteria: 50+ for SC, ST, and all women; 60+ for others',
      'Widows aged 18+ and persons with disability (any age) eligible without income caps',
      'Not receiving any other regular government or EPF pension'
    ],
    exclusions: [
      'Income tax paying families',
      'Government employees or pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-jh-spy-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Age proof and biometric identity verification',
        citizenTip: 'Check that birth date matches school or voter ID records.',
        isMandatory: true
      },
      {
        id: 'doc-jh-spy-caste',
        name: 'Caste Certificate (for SC/ST aged 50-59)',
        category: 'caste',
        purpose: 'Verification of early qualification age (50 years)',
        citizenTip: 'Not required for applicants aged 60+ or widows.',
        isMandatory: false
      },
      {
        id: 'doc-jh-spy-bank',
        name: 'Aadhaar-Linked Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Must have active NPCI Aadhaar seeding.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application at Block / Panchayat Office',
        description: 'Submit simple single-page form at your local Block Office, Circle Office, or Pragya Kendra.',
        portalOrOffice: 'Block Development Office / Pragya Kendra'
      },
      {
        stepNumber: 2,
        title: 'Time-Bound Approval by BDO / CO',
        description: 'Application is verified and sanctioned within 7 days by the Block Development Officer.',
        portalOrOffice: 'BDO Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹1,000 is credited directly into the applicant bank account by the 5th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women, Child Development and Social Security, Jharkhand',
      url: 'https://pension.jharkhand.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women, Child Development and Social Security Department',
      helpline: '1800-345-6527',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Universal social security pension management system of Jharkhand.'
    }
  },
  {
    id: 'jh-birsa-harit-gram-yojana',
    name: 'Birsa Harit Gram Yojana (Jharkhand Fruit Orchard & Agro-Forestry Livelihoods)',
    hindiName: 'बिरसा हरित ग्राम योजना (झारखण्ड फलदार बागवानी आजीविका)',
    teluguName: 'బిర్సా హరిత్ గ్రామ్ పథకం (జార్ఖండ్)',
    tamilName: 'பிர்சா ஹரித் கிராம் திட்டம் (ஜார்கண்ட்)',
    tagline: 'Plant 100 fruit trees (mango, guava) on 1 acre of uncultivated land with 100% free saplings, fencing, and 3 years of MNREGA wages.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Jharkhand)',
    stateApplicability: 'Jharkhand',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'JH',
    administeringGovernment: 'Government of Jharkhand',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Small & Marginal Farmers', 'Tribal Landholders', 'Women SHG Members', 'Owners of Fallow Uplands (Taand Land)'],
    shortSummary: 'Transforms fallow, uncultivated tribal land into lucrative fruit orchards (mango and guava) by combining MNREGA labor subsidies for pit digging, planting, and watering, yielding ₹50,000+ annual income per family after 3 years.',
    fullDescription: 'Under the Birsa Harit Gram Yojana, the Rural Development Department assists small rural families in Jharkhand to develop fruit orchards on 0.5 to 1 acre of fallow upland (Taand). The scheme provides 100 high-yielding fruit saplings (Amrapali/Mallika mangoes, Allahabad Safeda guavas), timber saplings for boundary fencing, organic fertilizers, and up to 3 years of guaranteed MNREGA daily labor wages to care for the plantation, creating sustainable multi-decade wealth.',
    financialBenefit: '100% free saplings, bio-fertilizers, and water tanks + up to ~₹60,000 in MNREGA wages over 3 years + sustainable fruit sales',
    keyObjectives: [
      'Afforest barren tribal uplands with income-generating horticultural fruit orchards',
      'Provide regular wage employment during initial 3-year gestation period',
      'Generate sustained annual incomes of ₹50,000-₹1,00,000 per family from fruit harvesting'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Tribal Cultivator', 'MGNREGA Worker'],
      stateResidence: 'Jharkhand',
      notes: 'Small/marginal farmer or tribal household owning or holding rights to at least 0.5 to 1 acre of uncultivated or fallow land with a valid MGNREGA job card.'
    },
    eligibilityHighlights: [
      'Resident farmer family in Jharkhand with MGNREGA job card',
      'Ownership or community rights over 0.5 to 1 acre of contiguous fallow land',
      'Preference given to SC, ST, primitive tribes, and single women households'
    ],
    exclusions: [
      'Commercial real estate land or active multi-crop irrigated fertile lowland'
    ],
    requiredDocuments: [
      {
        id: 'doc-jh-bhg-land',
        name: 'Land Possession Record / Forest Rights Act (FRA) Patta',
        category: 'land',
        purpose: 'Verify rights to plot designated for fruit orchard',
        citizenTip: 'Can be validated by Gram Sabha resolution.',
        isMandatory: true
      },
      {
        id: 'doc-jh-bhg-jobcard',
        name: 'MGNREGA Job Card',
        category: 'other',
        purpose: 'Disbursement of daily labor wages for pit digging and plant maintenance',
        citizenTip: 'Ensure job card is active and Aadhaar mapped.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Gram Sabha Resolution & Ward Selection',
        description: 'Propose your fallow plot during the annual Gram Sabha MGNREGA planning meeting.',
        portalOrOffice: 'Gram Sabha / Panchayat Bhawan'
      },
      {
        stepNumber: 2,
        title: 'Technical Sanction & Sapling Delivery',
        description: 'Block Programme Officer approves project; horticulture department supplies grafted fruit saplings.',
        portalOrOffice: 'Block MGNREGA Cell'
      },
      {
        stepNumber: 3,
        title: 'Plantation & Wage Disbursal',
        description: 'Beneficiary executes pit digging and planting; wages are credited weekly into bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Rural Development, Government of Jharkhand',
      url: 'https://rural.jharkhand.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Rural Development Department (MGNREGA Division)',
      helpline: '1800-345-6527',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official agro-forestry and MGNREGA horticultural mission of Jharkhand.'
    }
  },

  // ODISHA (OD)
  {
    id: 'od-subhadra-yojana',
    name: 'Subhadra Yojana (Odisha Women Direct Financial Assistance)',
    hindiName: 'सुभद्रा योजना (ओडिशा महिला प्रत्यक्ष वित्तीय सहायता)',
    teluguName: 'సుభద్ర పథకం (ఒడిశా)',
    tamilName: 'சுபத்ரா திட்டம் (ஒடிசா)',
    tagline: 'Direct financial assistance of ₹50,000 disbursed over 5 years (₹10,000/year in 2 installments) for women aged 21 to 60.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Odisha)',
    stateApplicability: 'Odisha',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'OD',
    administeringGovernment: 'Government of Odisha',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Women aged 21 to 60 years', 'Rural and Urban Homemakers', 'Women SHG Members', 'Marginalized Women'],
    shortSummary: 'Flagship women empowerment scheme providing ₹50,000 over 5 years via direct bank transfer (₹5,000 on Raksha Bandhan and ₹5,000 on International Women Day) alongside Subhadra Debit Cards and digital transaction rewards.',
    fullDescription: 'The Subhadra Yojana is Odisha biggest women social protection and financial inclusion scheme. Over 1 Crore women aged 21 to 60 receive ₹10,000 every year credited in two equal ₹5,000 installments via DBT directly linked to their Aadhaar-enabled bank accounts. Beneficiaries receive a dedicated Subhadra Debit Card, and top digital transaction users in each Gram Panchayat receive additional financial incentives of ₹500.',
    financialBenefit: '₹50,000 total assistance over 5 years (₹10,000 / year via DBT) + Subhadra Debit Card',
    keyObjectives: [
      'Empower adult women across Odisha through guaranteed individual cash liquidity',
      'Promote digital financial literacy through Subhadra Debit Cards and digital payment incentives',
      'Foster women entrepreneurship and self-reliance at grassroots levels'
    ],
    eligibilityRules: {
      minAge: 21,
      maxAge: 60,
      targetGender: 'female',
      stateResidence: 'Odisha',
      notes: 'Woman residing in Odisha aged between 21 and 60 years holding an active NFSA or SFSS ration card, or having family annual income under ₹2.5 Lakh.'
    },
    eligibilityHighlights: [
      'Resident woman of Odisha aged between 21 and 60 years',
      'Covered under NFSA / SFSS ration card or family annual income under ₹2,50,000',
      'Individual bank account linked with Aadhaar with active NPCI mapping'
    ],
    exclusions: [
      'Regular government servants, pensioners, or income tax payees',
      'Women receiving more than ₹1,500/month from any other government DBT scheme'
    ],
    requiredDocuments: [
      {
        id: 'doc-od-sub-aadhaar',
        name: 'Aadhaar Card of the Applicant',
        category: 'identity',
        purpose: 'Biometric identity and age verification',
        citizenTip: 'Mobile number must be linked with Aadhaar for OTP authentication.',
        isMandatory: true
      },
      {
        id: 'doc-od-sub-ration',
        name: 'NFSA / SFSS Ration Card',
        category: 'income',
        purpose: 'Family identification and income verification',
        citizenTip: 'If no ration card, income certificate from Tehsildar is required.',
        isMandatory: true
      },
      {
        id: 'doc-od-sub-bank',
        name: 'Aadhaar-Enabled Single Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer and Subhadra Debit Card issuance',
        citizenTip: 'Account must be in applicant own name, not a joint account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application Online or at Mo Seva Kendra',
        description: 'Fill free form online on subhadra.odisha.gov.in or submit at nearest Mo Seva Kendra / Anganwadi Center.',
        portalOrOffice: 'subhadra.odisha.gov.in / Mo Seva Kendra'
      },
      {
        stepNumber: 2,
        title: 'Aadhaar e-KYC Verification',
        description: 'Complete e-KYC via Aadhaar OTP or biometric fingerprint scanning at Mo Seva Kendra.',
        portalOrOffice: 'Mo Seva Kendra'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer (DBT)',
        description: 'Installment of ₹5,000 is credited on Raksha Bandhan and ₹5,000 on International Women Day (March 8).',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Government of Odisha',
      url: 'https://subhadra.odisha.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '14678',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Subhadra Yojana portal operated by Government of Odisha.'
    }
  },
  {
    id: 'od-kalia-yojana',
    name: 'KALIA Scheme (Odisha Farmer Investment, Livelihood & Income Assistance)',
    hindiName: 'कालिया योजना (ओडिशा कृषक आजीविका एवं आय संवर्धन)',
    teluguName: 'కాలియా పథకం (ఒడిశా)',
    tamilName: 'காலியா திட்டம் (ஒடிசா)',
    tagline: '₹10,000/year farm input support for small/marginal farmers and ₹12,500 livelihood grant for landless agricultural laborers.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Odisha)',
    stateApplicability: 'Odisha',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'OD',
    administeringGovernment: 'Government of Odisha',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Small & Marginal Farmers', 'Sharecroppers & Tenant Cultivators', 'Landless Agricultural Households', 'Vulnerable Agri-Laborers'],
    shortSummary: 'Revolutionary farmer assistance scheme covering over 43 Lakh cultivator and landless agricultural laborer families with direct seasonal inputs, micro-enterprise seed funds, and interest-free crop loans.',
    fullDescription: 'Krushak Assistance for Livelihood and Income Augmentation (KALIA) protects smallholders and landless agricultural workers in Odisha. Cultivators receive ₹10,000 annually in two installments (Kharif and Rabi) to procure seeds and fertilizers. Crucially, landless agricultural households receive a ₹12,500 livelihood grant to establish goat rearing, duckery, mushroom farming, or beekeeping units, backed by ₹2 Lakh life and accident insurance.',
    financialBenefit: '₹10,000 / year for farmers or ₹12,500 one-time livelihood grant for landless laborers + 0% interest crop loans up to ₹1 Lakh',
    keyObjectives: [
      'Accelerate agricultural productivity and alleviate agrarian debt distress in Odisha',
      'Provide dedicated financial inclusion for landless agricultural laborers and sharecroppers',
      'Shield farming families against sudden catastrophic health or mortality shocks'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Tenant Cultivator', 'Agricultural Laborer'],
      stateResidence: 'Odisha',
      notes: 'Resident of Odisha belonging to small/marginal farmer category (cultivating 1 to 5 acres) or landless agricultural laborer household.'
    },
    eligibilityHighlights: [
      'Small and marginal farmers holding 1 to 2.5 hectares of land',
      'Landless agricultural households with agricultural labor as primary income',
      'Aadhaar-seeded bank account with active DBT mandate'
    ],
    exclusions: [
      'Medium and large farmers owning more than 5 acres of land',
      'Government employees, sitting/former MPs/MLAs, and income tax payees'
    ],
    requiredDocuments: [
      {
        id: 'doc-od-kal-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Identity and biometric authentication',
        citizenTip: 'Check that Aadhaar is mapped to bank account.',
        isMandatory: true
      },
      {
        id: 'doc-od-kal-land',
        name: 'RoR (Record of Rights / Patta) or Landless Laborer Verification',
        category: 'land',
        purpose: 'Proof of landholding size or landless worker status',
        citizenTip: 'Check land record on Bhulekh Odisha (bhulekh.ori.nic.in).',
        isMandatory: true
      },
      {
        id: 'doc-od-kal-ration',
        name: 'NFSA / SFSS Ration Card',
        category: 'income',
        purpose: 'Family identification',
        citizenTip: 'Used to avoid duplicate family claims.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Status / Register on KALIA Portal',
        description: 'Verify your name on kalia.odisha.gov.in or submit Green Form at Gram Panchayat office.',
        portalOrOffice: 'kalia.odisha.gov.in / Mo Seva Kendra'
      },
      {
        stepNumber: 2,
        title: 'Gram Panchayat Scrutiny & Approval',
        description: 'Village Agriculture Worker (VAW) and Gram Panchayat committee verify land and occupation details.',
        portalOrOffice: 'Gram Panchayat Office'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit into Bank Account',
        description: 'Seasonal installment of ₹5,000 is credited directly into the farmer bank account before sowing.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture and Farmers Empowerment, Odisha',
      url: 'https://kalia.odisha.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Agriculture and Farmers Empowerment Department',
      helpline: '1800-572-1122',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official farmer portal for KALIA scheme operated by Government of Odisha.'
    }
  },
  {
    id: 'od-bsky-gopabandhu-health',
    name: 'Gopabandhu Jan Arogya Yojana (Odisha Cashless Health Insurance)',
    hindiName: 'गोपबंधु जन आरोग्य योजना (ओडिशा निःशुल्क स्वास्थ्य बीमा)',
    teluguName: 'గోపబంధు జన్ ఆరోగ్య పథకం (ఒడిశా)',
    tamilName: 'கோபபந்து ஜன் ஆரோக்கிய திட்டம் (ஒடிசா)',
    tagline: 'Cashless tertiary healthcare coverage of ₹5 Lakh for male and ₹10 Lakh for female family members per year.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Odisha)',
    stateApplicability: 'Odisha',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'OD',
    administeringGovernment: 'Government of Odisha',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['NFSA / SFSS Cardholders in Odisha', 'Low-Income Families', 'Women Needing Tertiary Medical Care'],
    shortSummary: 'Comprehensive cashless health insurance providing ₹5 Lakh medical coverage per family, with special affirmative coverage of ₹10 Lakh for women family members across 800+ top private hospitals in Odisha and major metros.',
    fullDescription: 'Gopabandhu Jan Arogya Yojana (formerly BSKY) ensures zero out-of-pocket medical expenditure for more than 1.1 Crore families in Odisha. All NFSA and SFSS ration card holders receive free secondary and tertiary care. While male family members are covered up to ₹5 Lakh annually, female members receive an enhanced ceiling of ₹10 Lakh per year, covering oncology, cardiology, neurosurgery, and nephrology across premier hospitals in Bhubaneswar, Cuttack, Kolkata, Hyderabad, and Chennai.',
    financialBenefit: '₹5,00,000 / year cashless cover for male members, enhanced to ₹10,00,000 / year for female members',
    keyObjectives: [
      'Eliminate catastrophic medical debts for over 85% of Odisha population',
      'Affirmative gender health protection by doubling hospital coverage to ₹10 Lakh for women',
      'Provide cashless treatment portability across premier national multispecialty hospitals'
    ],
    eligibilityRules: {
      stateResidence: 'Odisha',
      notes: 'All resident families in Odisha possessing a valid NFSA or SFSS ration card, or state-issued health card.'
    },
    eligibilityHighlights: [
      'Resident families of Odisha holding NFSA or SFSS ration card',
      'Coverage is universal for all card-mapped family members with no age caps'
    ],
    exclusions: [
      'Regular government servants eligible for statutory medical reimbursement'
    ],
    requiredDocuments: [
      {
        id: 'doc-od-bsk-ration',
        name: 'NFSA / SFSS Digital Ration Card',
        category: 'income',
        purpose: 'Proof of scheme entitlement and family member listing',
        citizenTip: 'Check card on pdsodisha.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-od-bsk-aadhaar',
        name: 'Aadhaar Card of the Admitted Patient',
        category: 'identity',
        purpose: 'Biometric verification at hospital helpdesk',
        citizenTip: 'Aadhaar e-KYC is performed at Swasthya Mitra counter.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Automatic Enrolment via Ration Card',
        description: 'Existing NFSA/SFSS cardholders are enrolled automatically with zero paperwork.',
        portalOrOffice: 'Automatic System Integration'
      },
      {
        stepNumber: 2,
        title: 'Visit Empaneled Hospital Swasthya Mitra Counter',
        description: 'Show your ration card and Aadhaar at the Swasthya Mitra desk in any empaneled hospital.',
        portalOrOffice: 'Hospital Swasthya Mitra Desk'
      },
      {
        stepNumber: 3,
        title: 'Cashless Hospital Admission & Treatment',
        description: 'Hospital provides cashless admission, medicines, surgeries, diagnostics, and food without any payment.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'State Health Assurance Society, Government of Odisha',
      url: 'https://bsky.odisha.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department, Govt of Odisha',
      helpline: '104 / 155369',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official health assurance platform of the Government of Odisha.'
    }
  },
  {
    id: 'od-madhu-babu-pension',
    name: 'Madhu Babu Pension Yojana (Odisha Social Security Disability & Senior Pension)',
    hindiName: 'मधु बाबू पेंशन योजना (ओडिशा सामाजिक सुरक्षा पेंशन)',
    teluguName: 'మధు బాబు పెన్షన్ పథకం (ఒడిశా)',
    tamilName: 'மது பாபு ஓய்வூதியத் திட்டம் (ஒடிசா)',
    tagline: 'Monthly pension of ₹1,000 (age under 80) and ₹1,200 (age 80+ or severe disability) for elderly, widows, and PwD.',
    category: 'pension',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'State Scheme (Odisha)',
    stateApplicability: 'Odisha',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'OD',
    administeringGovernment: 'Government of Odisha',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Widows & Divorced Women', 'Persons with Disabilities (PwD)', 'Transgender Persons', 'Leprosy Patients'],
    shortSummary: 'Flagship social welfare pension scheme providing monthly financial dignity to over 48 Lakh destitute seniors, widows, persons with disabilities, and transgender citizens across Odisha.',
    fullDescription: 'Named after legendary statesman Madhusudan Das, the Madhu Babu Pension Yojana (MBPY) protects the most vulnerable citizens of Odisha. Administered by the Social Security and Empowerment of Persons with Disabilities (SSEPD) Department, the pension provides ₹1,000 per month for beneficiaries up to 79 years of age and ₹1,200 per month for beneficiaries aged 80 and above or those suffering from 80%+ disability.',
    financialBenefit: '₹1,000 / month (up to age 79) and ₹1,200 / month (age 80+ or severe disability) via DBT or cash on 15th of each month',
    keyObjectives: [
      'Provide monthly subsistence support to destitute elderly, disabled, and widowed citizens',
      'Include marginalized communities including transgender persons and leprosy patients under social security',
      'Guarantee punctual payment on the 15th of every month (Panchayat Pension Day)'
    ],
    eligibilityRules: {
      maxIncome: 24000,
      stateResidence: 'Odisha',
      notes: 'Permanent resident of Odisha with family annual income not exceeding ₹24,000. Age 60+ for old age, 18+ for widows, any age for PwD with 40%+ disability.'
    },
    eligibilityHighlights: [
      'Permanent resident of Odisha',
      'Annual family income does not exceed ₹24,000',
      'Senior citizen (age 60+), widow of any age, or person with disability (40%+)',
      'Not receiving any other statutory pension'
    ],
    exclusions: [
      'Individuals with family income exceeding ₹24,000/year',
      'Serving or retired government employees'
    ],
    requiredDocuments: [
      {
        id: 'doc-od-mbp-aadhaar',
        name: 'Aadhaar Card of the Applicant',
        category: 'identity',
        purpose: 'Identity, age, and address verification',
        citizenTip: 'Must match details on family ration card.',
        isMandatory: true
      },
      {
        id: 'doc-od-mbp-income',
        name: 'Income Certificate (Income under ₹24,000/year)',
        category: 'income',
        purpose: 'Verification of economic destitution ceiling',
        citizenTip: 'Obtain from local Revenue Inspector (RI) or Tehsildar.',
        isMandatory: true
      },
      {
        id: 'doc-od-mbp-disability',
        name: 'Disability Certificate / Husband Death Certificate',
        category: 'medical',
        purpose: 'Proof of entitlement category',
        citizenTip: 'UDID card is accepted for disability pension category.',
        isMandatory: false
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on SSEPD Portal or at Mo Seva Kendra',
        description: 'Submit application on ssepd.gov.in or fill physical form at Gram Panchayat office.',
        portalOrOffice: 'ssepd.gov.in / Mo Seva Kendra'
      },
      {
        stepNumber: 2,
        title: 'Block Scrutiny by BDO / DSSO',
        description: 'Block Social Security Officer (BSSO) conducts field verification of eligibility credentials.',
        portalOrOffice: 'Block Development Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly Pension Disbursement',
        description: 'Pension is disbursed on the 15th of every month directly to bank account or in cash at Panchayat.',
        portalOrOffice: 'Panchayat Pension Camp / DBT'
      }
    ],
    officialSource: {
      name: 'Department of Social Security & Empowerment of Persons with Disabilities, Odisha',
      url: 'https://ssepd.odisha.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'SSEPD Department',
      helpline: '1800-345-7150',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official social security pension portal of Odisha SSEPD Department.'
    }
  },
  {
    id: 'od-nirman-shramik-pucca-ghar',
    name: 'Nirman Shramik Pucca Ghar Yojana (Odisha Construction Workers Housing Grant)',
    hindiName: 'निर्माण श्रमिक पक्का घर योजना (ओडिशा भवन निर्माण आवास सहायता)',
    teluguName: 'నిర్మాణ శ్రామిక్ పక్కా ఘర్ పథకం (ఒడిశా)',
    tamilName: 'நிர்மான் சராமிக் பக்கா கர் திட்டம் (ஒடிசா)',
    tagline: 'Direct housing grant of ₹1.5 Lakh in four installments for registered construction workers without a pucca house.',
    category: 'housing',
    categoryLabel: 'Housing & Urban Planning',
    geographicScope: 'State Scheme (Odisha)',
    stateApplicability: 'Odisha',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'OD',
    administeringGovernment: 'Government of Odisha',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Registered Construction Workers (BOCW)', 'Masons, Carpenters & Laborers', 'Houseless Building Workers'],
    shortSummary: 'Substantial ₹1.5 Lakh direct financial grant funded by the Odisha Building & Other Construction Workers Welfare Board (OB&OCWWB) to build a permanent pucca house for registered construction laborers.',
    fullDescription: 'The Nirman Shramik Pucca Ghar Yojana recognizes the toil of construction laborers by ensuring they own a safe, resilient home. Administered jointly by the Labor & ESI Department and Panchayati Raj Department, registered building workers who have maintained active membership with the BOCW Board for at least 3 years receive ₹1,50,000 disbursed across foundation, lintel, roof, and finishing milestones.',
    financialBenefit: '₹1,50,000 direct housing construction grant via DBT in 4 milestone installments',
    keyObjectives: [
      'Provide permanent, cyclone-resistant pucca homes to construction workers across coastal and tribal Odisha',
      'Utilize construction welfare cess funds directly for worker welfare',
      'Eliminate living in unsafe thatched huts for daily wage building laborers'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 60,
      occupations: ['Construction Worker', 'Building Laborer', 'Mason', 'Electrician', 'Carpenter'],
      stateResidence: 'Odisha',
      notes: 'Registered building and other construction worker with OB&OCWWB with at least 3 years of active continuous registration who does not own a pucca house.'
    },
    eligibilityHighlights: [
      'Permanent resident of Odisha registered with OB&OCWWB for minimum 3 years',
      'Must have deposited annual welfare subscription regularly',
      'Must not own any pucca house in their or spouse name anywhere'
    ],
    exclusions: [
      'Workers who have already availed housing benefits under PMAY, Biju Pucca Ghar, or other schemes'
    ],
    requiredDocuments: [
      {
        id: 'doc-od-nsp-card',
        name: 'OB&OCWWB Construction Worker Registration Book / Smart Card',
        category: 'other',
        purpose: 'Verify active registration and 3-year subscription history',
        citizenTip: 'Must show up-to-date annual contribution stamps.',
        isMandatory: true
      },
      {
        id: 'doc-od-nsp-land',
        name: 'Land Record (RoR / Patta) or Homestead Land Rights',
        category: 'land',
        purpose: 'Proof of land availability for construction of pucca house',
        citizenTip: 'Joint ownership with spouse is fully accepted.',
        isMandatory: true
      },
      {
        id: 'doc-od-nsp-bank',
        name: 'Aadhaar-Linked Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer receiving account',
        citizenTip: 'Bank account must be active in a branch in Odisha.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through District Labor Officer (DLO) or Mo Seva Kendra',
        description: 'Submit Nirman Shramik housing application along with BOCW registration book on nirmanshramik.odisha.gov.in.',
        portalOrOffice: 'nirmanshramik.odisha.gov.in / DLO Office'
      },
      {
        stepNumber: 2,
        title: 'Field Verification by BDO / Labor Officer',
        description: 'Joint inquiry by BDO and Labor Officer verifies existing kutcha dwelling and land feasibility.',
        portalOrOffice: 'District Labor Office'
      },
      {
        stepNumber: 3,
        title: 'Work Order & Milestone Disbursal',
        description: 'Work order is issued and ₹1.5 Lakh is released in 4 installments as construction progress is geo-tagged.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Odisha Building and Other Construction Workers Welfare Board (OB&OCWWB)',
      url: 'https://bocboard.labdirodisha.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Labour & ESI Department, Government of Odisha',
      helpline: '155368',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal of the Odisha Building and Other Construction Workers Welfare Board.'
    }
  },

  // WEST BENGAL (WB)
  {
    id: 'wb-lakshmir-bhandar',
    name: 'Lakshmir Bhandar (West Bengal Direct Basic Income Support for Women)',
    hindiName: 'लक्ष्मी भंडार योजना (पश्चिम बंगाल महिला बुनियादी आय सहायता)',
    teluguName: 'లక్ష్మీర్ భాండార్ పథకం (పశ్చిమ బెంగాల్)',
    tamilName: 'லக்ஷ்மிர் பாண்டார் திட்டம் (மேற்கு வங்காளம்)',
    tagline: 'Monthly basic income support of ₹1,000 for General and ₹1,200 for SC/ST female heads of household.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (West Bengal)',
    stateApplicability: 'West Bengal',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'WB',
    administeringGovernment: 'Government of West Bengal',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Women aged 25 to 60 years', 'Female Heads of Households', 'SC / ST Women', 'Homemakers across West Bengal'],
    shortSummary: 'Universal basic income scheme transferring ₹1,000/month (General) and ₹1,200/month (SC/ST) directly into the bank accounts of over 2.1 Crore adult women across West Bengal.',
    fullDescription: 'Lakshmir Bhandar is one of the largest unconditional cash transfer programs in South Asia. Launched to provide financial autonomy and social security to women, the scheme provides ₹1,000 per month for general category women and ₹1,200 per month for SC and ST women aged 25 to 60. The allowance is credited on the 1st week of every month directly into the woman bank account through Duare Sarkar outreach camps.',
    financialBenefit: '₹1,000 / month (General) or ₹1,200 / month (SC/ST) direct bank transfer (₹12,000 - ₹14,400 per year)',
    keyObjectives: [
      'Provide guaranteed monthly basic income floor to female household heads',
      'Recognize and financially value the unpaid care work of women homemakers',
      'Promote universal bank account ownership and digital financial independence'
    ],
    eligibilityRules: {
      minAge: 25,
      maxAge: 60,
      targetGender: 'female',
      stateResidence: 'West Bengal',
      notes: 'Woman resident of West Bengal aged 25 to 60 holding a Swasthya Sathi card, who is not a permanent government employee or receiving regular civil pensions.'
    },
    eligibilityHighlights: [
      'Resident woman of West Bengal aged 25 to 60 years',
      'Enrolled under the Swasthya Sathi health scheme (holding Swasthya Sathi card)',
      'Individual single bank account seeded with Aadhaar'
    ],
    exclusions: [
      'Permanent government employees in central/state governments, municipalities, or PSUs',
      'Recipients of regular government retirement pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-wb-lb-swasthya',
        name: 'Swasthya Sathi Card',
        category: 'identity',
        purpose: 'Family identification and female head status verification',
        citizenTip: 'Must have valid Swasthya Sathi URN number.',
        isMandatory: true
      },
      {
        id: 'doc-wb-lb-aadhaar',
        name: 'Aadhaar Card of the Applicant',
        category: 'identity',
        purpose: 'Biometric identity and age verification',
        citizenTip: 'Date of birth must confirm age between 25 and 60.',
        isMandatory: true
      },
      {
        id: 'doc-wb-lb-caste',
        name: 'SC / ST Digital Caste Certificate (for ₹1,200 tier)',
        category: 'caste',
        purpose: 'Verification of affirmative higher grant category',
        citizenTip: 'Must be issued by Sub-Divisional Officer in West Bengal.',
        isMandatory: false
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Collect & Submit Form at Duare Sarkar Camp',
        description: 'Obtain free application form with pre-printed government serial number at Duare Sarkar camp or BDO office.',
        portalOrOffice: 'Duare Sarkar Camp / BDO Office'
      },
      {
        stepNumber: 2,
        title: 'Digital Entry & Verification',
        description: 'Block or municipal team verifies Swasthya Sathi URN, Aadhaar details, and bank account mapping.',
        portalOrOffice: 'BDO / Municipality Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursal',
        description: '₹1,000 or ₹1,200 is credited directly into the applicant bank account by the 7th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development and Social Welfare, West Bengal',
      url: 'https://wb.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development and Social Welfare Department',
      helpline: '033-23341563',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official scheme managed by Government of West Bengal under Duare Sarkar.'
    }
  },
  {
    id: 'wb-kanyashree-prakalpa',
    name: 'Kanyashree Prakalpa (West Bengal UN-Awarded Girl Child Education Incentive)',
    hindiName: 'कन्याश्री प्रकल्प (पश्चिम बंगाल बालिका शिक्षा प्रोत्साहन)',
    teluguName: 'కన్యాశ్రీ ప్రకల్ప పథకం (పశ్చిమ బెంగాల్)',
    tamilName: 'கன்யாஸ்ரீ பிரகல்பா திட்டம் (மேற்கு வங்காளம்)',
    tagline: 'Annual scholarship of ₹1,000 (K1) for teenage schoolgirls + one-time grant of ₹25,000 (K2) upon turning 18 unmarried.',
    category: 'education',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (West Bengal)',
    stateApplicability: 'West Bengal',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'WB',
    administeringGovernment: 'Government of West Bengal',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Girl Students aged 13-18 (Class 8-12)', 'Girls aged 18-19 pursuing Higher Education', 'Differently-Abled Girls'],
    shortSummary: 'Globally recognized, United Nations Public Service Award-winning program providing annual stipends (K1) and a ₹25,000 milestone grant (K2) to keep girls in school and prevent child marriage.',
    fullDescription: 'Kanyashree Prakalpa is West Bengal signature social initiative credited with transforming female education. It operates through two key components: Kanyashree K1 provides ₹1,000 annual scholarship to adolescent girls aged 13 to 18 enrolled in Class 8 to 12. Kanyashree K2 provides a one-time grant of ₹25,000 when the girl turns 18, provided she is enrolled in education and unmarried, creating a compelling financial incentive against underage marriage.',
    financialBenefit: '₹1,000 / year (K1) + ₹25,000 one-time milestone grant (K2) deposited directly via DBT',
    keyObjectives: [
      'Eradicate child marriage across rural and urban Bengal',
      'Incentivize uninterrupted school and higher secondary education for girl students',
      'Facilitate girl students entry into colleges and vocational career institutes'
    ],
    eligibilityRules: {
      minAge: 13,
      maxAge: 19,
      targetGender: 'female',
      stateResidence: 'West Bengal',
      notes: 'Girl student studying in recognized school/college in West Bengal. Must remain unmarried until at least age 18 to claim K2 grant.'
    },
    eligibilityHighlights: [
      'Resident girl student in West Bengal',
      'Enrolled in recognized government, aided, or madrasah institution',
      'K1: Age 13-18 enrolled in Class 8 or higher',
      'K2: Age 18-19, currently pursuing higher education/vocational training, and unmarried'
    ],
    exclusions: [
      'Girls married before completing 18 years of age (ineligible for K2)'
    ],
    requiredDocuments: [
      {
        id: 'doc-wb-kp-birth',
        name: 'Birth Certificate of the Girl Student',
        category: 'identity',
        purpose: 'Proof of age and date of birth',
        citizenTip: 'Issued by Municipal Corporation or Panchayat Registrar of Births.',
        isMandatory: true
      },
      {
        id: 'doc-wb-kp-unmarried',
        name: 'Declaration of Unmarried Status',
        category: 'other',
        purpose: 'Affirming candidate has not been married prior to 18',
        citizenTip: 'Self-declaration signed by parent/guardian and countersigned by school head.',
        isMandatory: true
      },
      {
        id: 'doc-wb-kp-bank',
        name: 'Aadhaar-Linked Single Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer payment destination',
        citizenTip: 'Account must be opened in student sole name.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Receive Application Form from School / College',
        description: 'Form is distributed free by the school/college head teacher where the student is enrolled.',
        portalOrOffice: 'School / College Administration Desk'
      },
      {
        stepNumber: 2,
        title: 'Institutional Online Upload on Kanyashree Portal',
        description: 'School nodal teacher uploads student data and documents directly onto wbkanysashree.gov.in.',
        portalOrOffice: 'wbkanysashree.gov.in'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer',
        description: 'Sub-Divisional Officer approves the record and ₹1,000 (K1) or ₹25,000 (K2) is credited into bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, West Bengal',
      url: 'https://wbkanyashree.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development and Social Welfare Department',
      helpline: '033-23373840',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official UN Public Service First Prize-winning Kanyashree portal.'
    }
  },
  {
    id: 'wb-rupashree-prakalpa',
    name: 'Rupashree Prakalpa (West Bengal One-Time Marriage Financial Assistance)',
    hindiName: 'रूपाश्री प्रकल्प (पश्चिम बंगाल कन्या विवाह एकमुश्त सहायता)',
    teluguName: 'రూపశ్రీ ప్రకల్ప పథకం (పశ్చిమ బెంగాల్)',
    tamilName: 'ரூபஸ்ரீ பிரகல்பா திட்டம் (மேற்கு வங்காளம்)',
    tagline: 'One-time direct financial grant of ₹25,000 transferred to the bride bank account before her wedding.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (West Bengal)',
    stateApplicability: 'West Bengal',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'WB',
    administeringGovernment: 'Government of West Bengal',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Economically Weaker Adult Women', 'Daughters of Poor Families', 'First-Time Adult Brides'],
    shortSummary: 'One-time direct grant of ₹25,000 credited to the bank account of an adult woman from a poor family before her marriage, ensuring financial dignity and preventing usurious debt.',
    fullDescription: 'The Rupashree Prakalpa mitigates severe financial distress faced by low-income families during daughter marriages. Administered by the Women & Child Development Department, the scheme transfers ₹25,000 directly into the woman own bank account prior to solemnization of marriage. Eligible women must be at least 18 years old, marry a groom aged 21 or older, and have annual family income under ₹1.5 Lakh.',
    financialBenefit: '₹25,000 one-time financial grant credited directly into bride bank account',
    keyObjectives: [
      'Prevent low-income families from falling into high-interest debt traps during weddings',
      'Strictly enforce legal marriageable age standards (Bride 18+, Groom 21+)',
      'Empower the bride by making her the sole direct recipient of wedding welfare funds'
    ],
    eligibilityRules: {
      minAge: 18,
      targetGender: 'female',
      maxIncome: 150000,
      stateResidence: 'West Bengal',
      notes: 'Woman aged 18+ resident of West Bengal with family annual income not exceeding ₹1.5 Lakh, entering her first marriage.'
    },
    eligibilityHighlights: [
      'Bride must be a permanent resident of West Bengal and minimum 18 years of age',
      'Groom must be at least 21 years of age',
      'Annual family income does not exceed ₹1,50,000 from all sources',
      'Must be applied before the solemnization of marriage'
    ],
    exclusions: [
      'Families with annual income exceeding ₹1.5 Lakh',
      'Child marriages where either party does not meet statutory age limits'
    ],
    requiredDocuments: [
      {
        id: 'doc-wb-rp-age',
        name: 'Age Proof of Bride & Groom (Birth Certificate / Madhyamik Admit Card)',
        category: 'identity',
        purpose: 'Verify legal marriageable age (Bride 18+, Groom 21+)',
        citizenTip: 'Original certificates must be shown to verifying inquiry officer.',
        isMandatory: true
      },
      {
        id: 'doc-wb-rp-invitation',
        name: 'Wedding Invitation Card or Marriage Registration Notice',
        category: 'other',
        purpose: 'Proof of proposed marriage date and venue',
        citizenTip: 'Ensure dates are clearly legible.',
        isMandatory: true
      },
      {
        id: 'doc-wb-rp-income',
        name: 'Income Certificate (Family income < ₹1.5 Lakh/year)',
        category: 'income',
        purpose: 'Verification of family income ceiling',
        citizenTip: 'Issued by Pradhan, Councillor, or MLA/BDO.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application at BDO / SDO Office',
        description: 'Submit completed form along with wedding proof at least 30-60 days before the wedding date.',
        portalOrOffice: 'BDO / SDO / Municipality Office'
      },
      {
        stepNumber: 2,
        title: 'Field Verification by Government Enquiry Officer',
        description: 'Government officer conducts physical home inquiry to verify wedding preparations and documents.',
        portalOrOffice: 'Applicant Residence'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of ₹25,000 Before Wedding',
        description: 'Amount is credited directly into the bride bank account before the wedding date.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development and Social Welfare, West Bengal',
      url: 'https://wb.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development and Social Welfare Department',
      helpline: '033-23373840',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Rupashree Prakalpa welfare portal.'
    }
  },
  {
    id: 'wb-krishak-bandhu',
    name: 'Krishak Bandhu Scheme (West Bengal Farmer Direct Income Support & Death Benefit)',
    hindiName: 'कृषक बंधु योजना (पश्चिम बंगाल कृषक आय सहायता एवं मृत्यु बीमा)',
    teluguName: 'కృషక్ బంధు పథకం (పశ్చిమ బెంగాల్)',
    tamilName: 'கிருஷக் பந்து திட்டம் (மேற்கு வங்காளம்)',
    tagline: '₹10,000/acre/year farmer investment grant in two installments + ₹2 Lakh death benefit for farmer families.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (West Bengal)',
    stateApplicability: 'West Bengal',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'WB',
    administeringGovernment: 'Government of West Bengal',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Landowner Farmers', 'Recorded Bhagchasis (Sharecroppers)', 'Marginal Cultivators'],
    shortSummary: 'Guaranteed agricultural support providing ₹10,000/acre annually (minimum ₹4,000 even for tiny plots) to over 95 Lakh farmers and recorded sharecroppers, plus ₹2 Lakh death compensation.',
    fullDescription: 'Krushak Bandhu is West Bengal comprehensive farmer safety net. Beneficiaries owning 1 acre or more receive ₹10,000 per year (split into ₹5,000 for Kharif and ₹5,000 for Rabi). Farmers with smaller holdings receive pro-rata assistance with a guaranteed minimum floor of ₹4,000 per year. Furthermore, under the Krishak Bandhu Death Benefit component, the family of any farmer or recorded sharecropper aged 18 to 60 who passes away receives ₹2 Lakh ex-gratia compensation.',
    financialBenefit: '₹4,000 to ₹10,000 / year direct input grant + ₹2,00,000 life insurance / death benefit',
    keyObjectives: [
      'Provide predictable cash liquidity before Kharif and Rabi agricultural seasons',
      'Provide institutional inclusion to recorded sharecroppers (Bhagchasis)',
      'Protect bereaved farming families with immediate ₹2 Lakh financial assistance'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Sharecropper (Bhagchasi)', 'Cultivator'],
      stateResidence: 'West Bengal',
      notes: 'Resident farmer of West Bengal owning cultivable agricultural land or recorded as a sharecropper in Banglarbhumi revenue records.'
    },
    eligibilityHighlights: [
      'Resident farmer or recorded Bhagchasi in West Bengal',
      'Recorded agricultural landholding in state RoR (Record of Rights)',
      'Aadhaar-seeded bank account with active DBT routing'
    ],
    exclusions: [
      'Non-agricultural residential or commercial plot holders without crop cultivation'
    ],
    requiredDocuments: [
      {
        id: 'doc-wb-kb-ror',
        name: 'Land Record of Rights (RoR / Khatian / Parcha)',
        category: 'land',
        purpose: 'Verify agricultural land ownership or recorded sharecropper status',
        citizenTip: 'Check your digital Khatian on banglarbhumi.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-wb-kb-aadhaar',
        name: 'Aadhaar Card of Farmer',
        category: 'identity',
        purpose: 'Identity validation and Krishak Bandhu ID generation',
        citizenTip: 'Aadhaar e-KYC is mandatory.',
        isMandatory: true
      },
      {
        id: 'doc-wb-kb-bank',
        name: 'Bank Passbook (NPCI Mapped)',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Passbook must show account number and IFS code clearly.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply at Duare Sarkar Camp or ADA Office',
        description: 'Submit Krishak Bandhu application form at nearest Duare Sarkar camp or Assistant Director of Agriculture (ADA) office.',
        portalOrOffice: 'Duare Sarkar Camp / ADA Office'
      },
      {
        stepNumber: 2,
        title: 'Verification against Banglarbhumi Database',
        description: 'Department of Agriculture verifies land ownership against Banglarbhumi land registry.',
        portalOrOffice: 'ADA Block Office'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of Seasonal Installment',
        description: 'Bi-annual installments of up to ₹5,000 each are credited directly into farmer bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture, Government of West Bengal',
      url: 'https://krishakbandhu.wb.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Agriculture',
      helpline: '8336957370',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official West Bengal Krishak Bandhu portal.'
    }
  },
  {
    id: 'wb-swasthya-sathi',
    name: 'Swasthya Sathi (West Bengal Universal Cashless Smart Card Health Scheme)',
    hindiName: 'स्वास्थ्य साथी (पश्चिम बंगाल सार्वभौमिक कैशलेस स्वास्थ्य कार्ड)',
    teluguName: 'స్వాస్థ్య సాథి పథకం (పశ్చిమ బెంగాల్)',
    tamilName: 'சுவாஸ்திய சாதி திட்டம் (மேற்கு வங்காளம்)',
    tagline: 'Universal cashless medical coverage of ₹5 Lakh per family per year, issued in the name of the eldest female family head.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (West Bengal)',
    stateApplicability: 'West Bengal',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'WB',
    administeringGovernment: 'Government of West Bengal',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['All Resident Families of West Bengal', 'Informal Sector Workers', 'Female Heads of Households'],
    shortSummary: 'Universal biometric smart card health scheme covering 2.4+ Crore families with ₹5 Lakh cashless hospitalization annually across 2,400+ empaneled government and private hospitals, issued in the name of the female head of family.',
    fullDescription: 'Swasthya Sathi provides 100% state-funded, universal health protection to all citizens of West Bengal. The scheme is uniquely designed with women empowerment at its core: the biometric smart card is officially issued in the name of the eldest female member of the household. It covers secondary and tertiary care up to ₹5 Lakh per family annually with zero co-payment, zero balance deduction for pre-existing diseases, and 2,000+ medical and surgical packages.',
    financialBenefit: '₹5,00,000 / family / year cashless hospitalization coverage',
    keyObjectives: [
      'Ensure 100% universal healthcare access for all residents of West Bengal without economic screening',
      'Empower women by placing the family health insurance ownership under female heads of households',
      'Provide cashless treatment portability across premier hospitals in Bengal and major metros'
    ],
    eligibilityRules: {
      stateResidence: 'West Bengal',
      notes: 'All resident families of West Bengal. Card issued in the name of the eldest female member of the family.'
    },
    eligibilityHighlights: [
      'Universal eligibility for all permanent residents of West Bengal',
      'Smart card issued in the name of the eldest female member of the household',
      'Covers all dependent family members including parents, spouse, and children'
    ],
    exclusions: [
      'Central and State Government permanent employees eligible for government medical reimbursement'
    ],
    requiredDocuments: [
      {
        id: 'doc-wb-ss-aadhaar',
        name: 'Aadhaar Card of All Family Members',
        category: 'identity',
        purpose: 'Biometric registration and smart card mapping',
        citizenTip: 'Aadhaar is mandatory for all members being added to card.',
        isMandatory: true
      },
      {
        id: 'doc-wb-ss-ration',
        name: 'Digital Ration Card',
        category: 'income',
        purpose: 'Family unit structure verification',
        citizenTip: 'Check family details on wbpds.wb.gov.in.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Enroll at Duare Sarkar Camp',
        description: 'Submit Form B at the nearest Duare Sarkar camp with family member documents.',
        portalOrOffice: 'Duare Sarkar Camp / BDO Office'
      },
      {
        stepNumber: 2,
        title: 'Instant Biometric Smart Card Generation',
        description: 'Female head of household provides biometric photo and fingerprint; smart card is printed and handed over instantly.',
        portalOrOffice: 'Duare Sarkar Smart Card Counter'
      },
      {
        stepNumber: 3,
        title: 'Avail Cashless Hospital Treatment',
        description: 'Show Swasthya Sathi smart card at any empaneled hospital Swasthya Sathi desk for cashless admission and care.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'Department of Health & Family Welfare, Government of West Bengal',
      url: 'https://swasthyasathi.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department',
      helpline: '1800-345-5384',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official universal health insurance portal of West Bengal.'
    }
  }
];

const fileContent = 'import type { Scheme } from "../../types/scheme";\n\nexport const EAST_STATES_SCHEMES: Scheme[] = ' + JSON.stringify(eastSchemes, null, 2) + ';\n';
fs.writeFileSync('D:/civicai/frontend/src/data/schemes/statesEast.ts', fileContent, 'utf8');

const counts = {};
eastSchemes.forEach(s => counts[s.stateCode] = (counts[s.stateCode] || 0) + 1);
console.log('East States generation complete! Total schemes:', eastSchemes.length);
console.log('Counts per state:', counts);
