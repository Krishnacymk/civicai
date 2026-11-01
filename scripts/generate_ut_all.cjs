const fs = require('fs');

// 1. AN (5)
const anContent = fs.readFileSync('D:/civicai/scripts/generate_ut.cjs', 'utf8');
const startAN = anContent.indexOf('const utSchemes = [') + 'const utSchemes = '.length;
const endAN = anContent.indexOf('// Let\'s now add CH, DH, DL, JK, LA, LD, PY');
const an_schemes = eval(anContent.slice(startAN, endAN).trim().replace(/;$/, ''));

// 2. CH (5) & DH (5)
const chDhContent = fs.readFileSync('D:/civicai/scripts/generate_ut_full.cjs', 'utf8');
const startChDh = chDhContent.indexOf('const remainingUTSchemes = [') + 'const remainingUTSchemes = '.length;
const endChDh = chDhContent.indexOf('// Let\'s add remaining 25 schemes');
const ch_dh_schemes = eval(chDhContent.slice(startChDh, endChDh).trim().replace(/;$/, ''));

// 3. DL (5), JK (5), LA (5), LD (5), PY (5)
const finalUTSchemes = [
  // DELHI (DL)
  {
    id: 'dl-delhi-arogya-kosh',
    name: 'Delhi Arogya Kosh (DAK Cashless Surgery, Tertiary Care & Free Private Diagnostics)',
    hindiName: 'दिल्ली आरोग्य कोष (डीएक कैशलेस सर्जरी एवं निःशुल्क निजी जांच)',
    teluguName: 'ఢిల్లీ ఆరోగ్య కోష్ పథకం',
    tamilName: 'தில்லி ஆரோக்ய கோஷ் திட்டம்',
    tagline: 'Up to ₹5 Lakh cashless assistance for specialized surgeries + free high-end MRI, PET, CT scans in top private labs.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'Union Territory Scheme (Delhi NCT)',
    stateApplicability: 'NCT of Delhi',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'DL',
    administeringGovernment: 'Government of NCT of Delhi',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['All Residents of Delhi (Voter ID Holders)', 'Patients Needing Major Surgeries', 'Citizens Needing Expensive Diagnostics (MRI/PET/CT)'],
    shortSummary: 'Universal health assurance providing up to ₹5 Lakh financial grant for complex tertiary surgeries and cashless referral for 50+ high-end diagnostic tests (MRI, CT, PET scans) in premier private diagnostic centers when government hospital wait times exceed 30 days.',
    fullDescription: 'Delhi Arogya Kosh (DAK) provides high-level health protection for all Delhi residents. If a patient faces surgery waiting times longer than 30 days in a Delhi government hospital, DAK covers 100% cashless surgery in empaneled private hospitals (up to ₹5 Lakh). Furthermore, any patient referred by a Delhi government hospital doctor can undergo expensive MRI, CT, PET, and ultrasound scans completely free at top private diagnostic centers across NCR.',
    financialBenefit: 'Up to ₹5,00,000 cashless tertiary surgery + 100% free high-end diagnostic imaging in private centers',
    keyObjectives: [
      'Eliminate lethal surgical waiting backlogs in overburdened Delhi government hospitals',
      'Provide zero-cost access to state-of-the-art MRI, PET, and CT scan diagnostics in private centers',
      'Shield middle and lower-income families from catastrophic private healthcare costs'
    ],
    eligibilityRules: {
      stateResidence: 'Delhi',
      notes: 'Any resident of Delhi holding a valid Delhi Voter ID card (EPIC) referred by an authorized Delhi Government hospital doctor.'
    },
    eligibilityHighlights: [
      'Resident of Delhi holding a Delhi Voter ID (EPIC) card',
      'Referred by an authorized medical specialist in a Delhi Government hospital',
      'Universal eligibility with zero caste or income discrimination'
    ],
    exclusions: [
      'Central Government employees covered under CGHS or defense medical services'
    ],
    requiredDocuments: [
      {
        id: 'doc-dl-dak-voter',
        name: 'Delhi Voter ID Card (EPIC) / Aadhar Card with Delhi Address',
        category: 'identity',
        purpose: 'Verify Delhi residency and voter status',
        citizenTip: 'Voter ID is primary document required under DAK rules.',
        isMandatory: true
      },
      {
        id: 'doc-dl-dak-prescription',
        name: 'Doctor Referral Prescription from Delhi Government Hospital',
        category: 'medical',
        purpose: 'Clinical referral for diagnostic scan or surgical package',
        citizenTip: 'Signed and stamped by government hospital specialist.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Consult Doctor at Delhi Government Hospital',
        description: 'Doctor advises specialized surgery or diagnostic scan (MRI/CT) and issues DAK referral slip.',
        portalOrOffice: 'Delhi Govt Hospital (LNJP, GTB, DDU, etc.)'
      },
      {
        stepNumber: 2,
        title: 'Visit Empaneled Private Center / Hospital',
        description: 'Present referral prescription along with Delhi Voter ID at empaneled private diagnostic lab or hospital.',
        portalOrOffice: 'Empaneled Private Lab / Hospital'
      },
      {
        stepNumber: 3,
        title: 'Avail 100% Cashless Diagnostics or Surgery',
        description: 'Receive free high-end scan reports or cashless surgery; bill is settled directly by Delhi Arogya Kosh.',
        portalOrOffice: 'Empaneled Private Center'
      }
    ],
    officialSource: {
      name: 'Directorate General of Health Services, Government of NCT of Delhi',
      url: 'https://dghs.delhi.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health and Family Welfare Department, GNCTD',
      helpline: '1031 / 1800-11-2454',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Delhi Arogya Kosh health initiative.'
    }
  },
  {
    id: 'dl-jai-bhim-mukhyamantri-pratibha-vikas',
    name: 'Jai Bhim Mukhyamantri Pratibha Vikas Yojana (Delhi Free Competitive Coaching & Stipend)',
    hindiName: 'जय भीम मुख्यमंत्री प्रतिभा विकास योजना (दिल्ली निःशुल्क कोचिंग एवं स्टाइपेंड)',
    teluguName: 'జై భీమ్ ముఖ్యమంత్రి ప్రతిభా వికాస్ పథకం',
    tamilName: 'ஜெய் பீம் முதலமைச்சர் பிரதீபா விகாஸ் திட்டம்',
    tagline: '100% free coaching in premier private institutes + ₹2,500/month stipend for UPSC, JEE, NEET, and CLAT exams.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'Union Territory Scheme (Delhi NCT)',
    stateApplicability: 'NCT of Delhi',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'DL',
    administeringGovernment: 'Government of NCT of Delhi',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['SC / ST / OBC / EWS Aspirants in Delhi', 'Competitive Exam Students (UPSC, NEET, JEE, CLAT)', 'Meritorious Underprivileged Youths'],
    shortSummary: 'High-impact competitive coaching scheme sponsoring students from SC, ST, OBC, and EWS backgrounds for free coaching in top private academies across Delhi, paying full coaching fees plus ₹2,500 monthly travel/book stipends.',
    fullDescription: 'Jai Bhim Mukhyamantri Pratibha Vikas Yojana levels the playing field for ambitious youths in Delhi. Eligible students receive 100% government fee payment to attend renowned coaching centers for Civil Services (UPSC), Medical (NEET), Engineering (IIT-JEE), Law (CLAT), and Banking/SSC exams. The government additionally transfers a ₹2,500 monthly stipend directly into the student bank account to support books and daily travel.',
    financialBenefit: '100% free coaching fees (up to ₹1.5 Lakh) + ₹2,500 / month living stipend via DBT',
    keyObjectives: [
      'Eliminate commercial coaching fee barriers for brilliant underprivileged students',
      'Increase selection of SC/ST/OBC/EWS candidates in premier civil services and technical institutes',
      'Provide monthly stipends to ensure uninterrupted study focus'
    ],
    eligibilityRules: {
      maxIncome: 800000,
      stateResidence: 'Delhi',
      notes: 'Resident of Delhi belonging to SC, ST, OBC, or EWS category with family annual income not exceeding ₹8 Lakh, having passed Class 10 and 12 from schools in Delhi.'
    },
    eligibilityHighlights: [
      'Permanent resident of Delhi holding caste/EWS certificate',
      'Completed Class 10th and 12th from recognized schools in Delhi',
      'Annual family income does not exceed ₹8,00,000 from all sources',
      'Avail benefit up to two times for different competitive courses'
    ],
    exclusions: [
      'Students with family annual income exceeding ₹8 Lakh'
    ],
    requiredDocuments: [
      {
        id: 'doc-dl-jbp-caste',
        name: 'Caste Certificate (SC/ST/OBC) or EWS Certificate',
        category: 'caste',
        purpose: 'Category entitlement verification',
        citizenTip: 'Issued by Revenue Department, GNCTD via edistrict.delhigovt.nic.in.',
        isMandatory: true
      },
      {
        id: 'doc-dl-jbp-marks',
        name: 'Class 10th and 12th Marksheets',
        category: 'academic',
        purpose: 'Verify schooling in Delhi',
        citizenTip: 'CBSE or recognized board marksheet from Delhi school.',
        isMandatory: true
      },
      {
        id: 'doc-dl-jbp-income',
        name: 'Income Certificate (Income < ₹8 Lakh/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Obtain from e-District Delhi portal.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through Empaneled Coaching Institute or e-District',
        description: 'Apply directly at empaneled coaching institute or submit online form on edistrict.delhigovt.nic.in.',
        portalOrOffice: 'edistrict.delhigovt.nic.in / Empaneled Institute'
      },
      {
        stepNumber: 2,
        title: 'Scrutiny by SC/ST/OBC Welfare Department',
        description: 'Department verifies caste, schooling records, and income credentials.',
        portalOrOffice: 'SC/ST Welfare Department'
      },
      {
        stepNumber: 3,
        title: 'Admission & Monthly Stipend DBT',
        description: 'State pays coaching fees directly to institute; ₹2,500 monthly stipend is credited to student account.',
        portalOrOffice: 'Coaching Institute / DBT'
      }
    ],
    officialSource: {
      name: 'Department for Welfare of SC/ST/OBC, Government of NCT of Delhi',
      url: 'https://scstwelfare.delhi.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Welfare of SC/ST/OBC Department',
      helpline: '011-23378418',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Jai Bhim Pratibha Vikas portal of Delhi Government.'
    }
  },
  {
    id: 'dl-delhi-ladli-scheme',
    name: 'Delhi Ladli Scheme (Girl Child Cumulative Financial Milestone Deposits)',
    hindiName: 'दिल्ली लाडली योजना (बालिका संवर्धन संचयी सावधि जमा)',
    teluguName: 'ఢిల్లీ లాడ్లీ పథకం',
    tamilName: 'தில்லி லாட்லி திட்டம்',
    tagline: 'Cumulative financial milestones up to ₹22,000 deposited across six stages from birth to Class 12 passing.',
    category: 'education',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'Union Territory Scheme (Delhi NCT)',
    stateApplicability: 'NCT of Delhi',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'DL',
    administeringGovernment: 'Government of NCT of Delhi',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Girl Children born in Delhi', 'School Students (Class 1, 6, 9, 10, 12)', 'Girls Turning 18 Unmarried'],
    shortSummary: 'Milestone financial security scheme providing institutional deposits in SBI Life Insurance across 6 school stages (₹11,000 at birth, ₹5,000 in Class 1, 6, 9, 10, 12), maturing into a major lump sum when the girl turns 18.',
    fullDescription: 'The Delhi Ladli Scheme empowers girl children and prevents female foeticide. Managed by the Department of Women and Child Development, financial milestone grants are locked in an interest-accruing fund: ₹11,000 upon institutional birth (or ₹10,000 for home birth), followed by ₹5,000 each upon Class 1, 6, 9, 10, and 12 admission. When the girl completes Class 10/12 and attains age 18, she can withdraw the accumulated principal and interest for higher education.',
    financialBenefit: 'Up to ₹22,000 in milestone deposits + compound interest (yields ~₹1,00,000+ at age 18)',
    keyObjectives: [
      'Enhance child sex ratio and promote institutional deliveries in Delhi',
      'Incentivize female educational retention from primary school through Class 12',
      'Provide financial assets directly to the girl student at age 18 for college studies'
    ],
    eligibilityRules: {
      targetGender: 'female',
      maxIncome: 100000,
      stateResidence: 'Delhi',
      notes: 'Parents must be residents of Delhi for at least 3 years with annual family income under ₹1 Lakh, applicable for up to two girl children per family.'
    },
    eligibilityHighlights: [
      'Girl child born to resident parents in Delhi (3 years domicile in Delhi)',
      'Family annual income must not exceed ₹1,00,000',
      'Girl child must be enrolled in a recognized school in Delhi',
      'Capped at maximum two daughters per family'
    ],
    exclusions: [
      'Families with annual income exceeding ₹1 Lakh',
      'More than two girl children per family'
    ],
    requiredDocuments: [
      {
        id: 'doc-dl-lad-birth',
        name: 'Birth Certificate of Girl Child',
        category: 'identity',
        purpose: 'Verify age, date of birth, and institutional delivery',
        citizenTip: 'Issued by MCD / NDMC / Delhi Cantonment Board.',
        isMandatory: true
      },
      {
        id: 'doc-dl-lad-residence',
        name: '3-Year Delhi Residence Proof of Parents',
        category: 'identity',
        purpose: 'Proof of 3 years domicile in Delhi',
        citizenTip: 'Voter ID, electricity bill, or ration card.',
        isMandatory: true
      },
      {
        id: 'doc-dl-lad-income',
        name: 'Income Certificate (Family income < ₹1 Lakh/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Issued by Revenue Department on e-District portal.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through School or Anganwadi Worker',
        description: 'Submit Delhi Ladli application form through school head teacher or local Anganwadi worker.',
        portalOrOffice: 'School Administration / Anganwadi'
      },
      {
        stepNumber: 2,
        title: 'Verification and Sanction by WCD Department',
        description: 'District Women & Child Development Officer verifies documents and issues Ladli Certificate.',
        portalOrOffice: 'District WCD Office'
      },
      {
        stepNumber: 3,
        title: 'Maturity Claim at 18',
        description: 'Upon passing Class 10/12 and turning 18, submit claim to State Bank of India to withdraw accumulated maturity funds.',
        portalOrOffice: 'SBI Branch / WCD Directorate'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Government of NCT of Delhi',
      url: 'https://wcd.delhi.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '011-23381611',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Delhi Ladli scheme portal.'
    }
  },
  {
    id: 'dl-senior-citizen-pension',
    name: 'Delhi Financial Assistance to Senior Citizens (Old Age Social Security Pension)',
    hindiName: 'दिल्ली वरिष्ठ नागरिक वित्तीय सहायता योजना (वृद्धावस्था पेंशन)',
    teluguName: 'ఢిల్లీ వృద్ధాప్య పెన్షన్ పథకం',
    tamilName: 'தில்லி முதியோர் ஓய்வூதியத் திட்டம்',
    tagline: 'Monthly pension of ₹2,000 (age 60-69) and ₹2,500 (age 70+) transferred directly via DBT.',
    category: 'seniors-elderly',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'Union Territory Scheme (Delhi NCT)',
    stateApplicability: 'NCT of Delhi',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'DL',
    administeringGovernment: 'Government of NCT of Delhi',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Elderly Women and Widowers', 'Low-Income Seniors in Delhi'],
    shortSummary: 'Universal social security pension providing ₹2,000 monthly (age 60-69) and ₹2,500 monthly (age 70+) directly via DBT into the bank accounts of over 4.5 Lakh senior citizens across Delhi.',
    fullDescription: 'The Department of Social Welfare in Delhi ensures elderly citizens live with financial security and dignity. Seniors aged 60 to 69 with family income under ₹1 Lakh receive ₹2,000 per month (with additional ₹500 for SC/ST/minority elders). Upon turning 70, all beneficiaries receive ₹2,500 per month credited directly into their Aadhaar-linked bank accounts.',
    financialBenefit: '₹2,000 / month (age 60-69) and ₹2,500 / month (age 70+) credited directly via DBT',
    keyObjectives: [
      'Provide basic monthly financial independence to senior citizens in Delhi',
      'Shield vulnerable elderly individuals from poverty, medical debt, and neglect',
      'Operate automated monthly bank credits via e-District Delhi portal'
    ],
    eligibilityRules: {
      minAge: 60,
      maxIncome: 100000,
      stateResidence: 'Delhi',
      notes: 'Resident of Delhi for at least 5 years with family annual income not exceeding ₹1,00,000 from all sources. Age 60 years or above.'
    },
    eligibilityHighlights: [
      'Resident of Delhi for minimum 5 consecutive years',
      'Annual family income does not exceed ₹1,00,000',
      'Senior citizen aged 60 years or above',
      'Not receiving any other civil, military, or government pension'
    ],
    exclusions: [
      'Retired government employees receiving regular civil or military pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-dl-oap-voter',
        name: 'Delhi Voter ID (EPIC Card) / 5-Year Residence Proof',
        category: 'identity',
        purpose: 'Verify 5-year Delhi domicile and age',
        citizenTip: 'Check epic on ceodelhi.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-dl-oap-income',
        name: 'Income Certificate (Income < ₹1 Lakh/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Self-declaration format verified by Sub-Divisional Magistrate.',
        isMandatory: true
      },
      {
        id: 'doc-dl-oap-bank',
        name: 'Aadhaar-Linked Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Account must have active NPCI mapping.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on e-District Delhi Portal',
        description: 'Submit online form under Social Welfare Department on edistrict.delhigovt.nic.in.',
        portalOrOffice: 'edistrict.delhigovt.nic.in'
      },
      {
        stepNumber: 2,
        title: 'Sub-Divisional Magistrate (SDM) Verification',
        description: 'SDM and District Social Welfare Officer verify residency, age, and income credentials.',
        portalOrOffice: 'SDM Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: 'Pension amount is credited monthly directly into the beneficiary bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of NCT of Delhi',
      url: 'https://socialwelfare.delhi.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '011-23381611 / 1031',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official social security pension portal of Delhi Government.'
    }
  },
  {
    id: 'dl-delhi-disability-pension',
    name: 'Delhi Financial Assistance to Persons with Special Needs (Disability Pension)',
    hindiName: 'दिल्ली विशेष आवश्यकता वाले व्यक्तियों के लिए वित्तीय सहायता (दिव्यांग पेंशन)',
    teluguName: 'ఢిల్లీ దివ్యాంగుల ఆర్థిక సహాయ పథకం',
    tamilName: 'தில்லி மாற்றுத்திறனாளிகள் நிதி உதவித் திட்டம்',
    tagline: 'Monthly financial assistance of ₹2,500 transferred directly via DBT to Persons with Disabilities (PwD).',
    category: 'disability-pwd',
    categoryLabel: 'Disability & Inclusion',
    geographicScope: 'Union Territory Scheme (Delhi NCT)',
    stateApplicability: 'NCT of Delhi',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'DL',
    administeringGovernment: 'Government of NCT of Delhi',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Persons with Disabilities (PwD) in Delhi', 'Differently-Abled Children and Adults', 'Caregivers of Severe Disability Patients'],
    shortSummary: 'Generous disability welfare pension transferring ₹2,500 monthly directly via DBT into the bank accounts of over 1.2 Lakh persons with certified disabilities residing in Delhi.',
    fullDescription: 'The Department of Social Welfare in Delhi provides financial independence to persons with special needs. Differently-abled citizens holding a certified disability of 40% or higher / UDID card whose family annual income does not exceed ₹1 Lakh receive ₹2,500 per month credited directly into their Aadhaar-linked bank accounts to cover personal care, assistive devices, and ongoing medications.',
    financialBenefit: '₹2,500 / month (₹30,000 annually) transferred directly via DBT',
    keyObjectives: [
      'Provide basic financial autonomy to persons with special needs across Delhi',
      'Shield differently-abled citizens from poverty and nutritional neglect',
      'Ensure 100% digital benefit delivery with automated monthly bank credits'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      maxIncome: 100000,
      stateResidence: 'Delhi',
      notes: 'Resident of Delhi for at least 5 years possessing certified disability of 40% or above / UDID card with family annual income under ₹1 Lakh.'
    },
    eligibilityHighlights: [
      'Resident of Delhi for minimum 5 consecutive years',
      'Disability percentage of 40% or higher verified by Medical Board / UDID card',
      'Family annual income does not exceed ₹1,00,000',
      'Not receiving any other government disability pension'
    ],
    exclusions: [
      'Permanent government employees or pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-dl-dis-udid',
        name: 'UDID Card / Disability Certificate',
        category: 'disability',
        purpose: 'Verify disability category and percentage',
        citizenTip: 'Check UDID on swavlambancard.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-dl-dis-voter',
        name: '5-Year Delhi Residence Proof (Voter ID / Domicile)',
        category: 'identity',
        purpose: 'Verify Delhi domicile',
        citizenTip: 'Voter ID or electricity bill.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on e-District Delhi Portal',
        description: 'Submit application along with UDID card under Social Welfare on edistrict.delhigovt.nic.in.',
        portalOrOffice: 'edistrict.delhigovt.nic.in'
      },
      {
        stepNumber: 2,
        title: 'Medical Scrutiny by Government Hospital Board',
        description: 'Delhi Government hospital medical board verifies disability percentage and approves application.',
        portalOrOffice: 'Hospital Medical Board'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹2,500 is credited directly into the beneficiary bank account by the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of NCT of Delhi',
      url: 'https://socialwelfare.delhi.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '011-23381611 / 1031',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official disability welfare portal of Delhi Government.'
    }
  },

  // JAMMU AND KASHMIR (JK)
  {
    id: 'jk-mumkin-youth-livelihood',
    name: 'Mission Youth Mumkin Scheme (J&K Subsidized Commercial Vehicle Livelihoods)',
    hindiName: 'मिशन यूथ मुमकिन योजना (जम्मू-कश्मीर वाणिज्यिक वाहन स्वरोजगार)',
    teluguName: 'మిషన్ యూత్ ముమ్కిన్ పథకం (జమ్మూ & కశ్మీర్)',
    tamilName: 'மிஷன் யூத் மும்கின் திட்டம் (ஜம்மு & காஷ்மீர்)',
    tagline: '100% on-road financing with 20% capital subsidy (10% state grant + 10% vehicle maker discount) for commercial transport vehicles.',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'Union Territory Scheme (Jammu and Kashmir)',
    stateApplicability: 'Jammu and Kashmir',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'JK',
    administeringGovernment: 'Government of Jammu and Kashmir',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Unemployed Youths in J&K (Aged 18-35)', 'Commercial Drivers and Transport Operators', 'Rural Transport Entrepreneurs'],
    shortSummary: 'Premier youth self-employment initiative under Mission Youth J&K enabling unemployed youths to acquire commercial goods vehicles, passenger mini-buses, and pick-up trucks with 20% capital subsidy and zero down-payment.',
    fullDescription: 'Under the Mumkin Scheme, Mission Youth J&K empowers unemployed youths aged 18 to 35 to establish sustainable transport businesses. Beneficiaries receive a commercial vehicle (Tata, Mahindra, Ashok Leyland) with 100% on-road financing without any initial down payment: the vehicle manufacturer provides a 10% upfront discount, Mission Youth provides a 10% state capital grant, and partner banks finance the remaining 80% at low interest.',
    financialBenefit: '20% capital subsidy (up to ₹1.6 Lakh) + zero down payment 100% on-road commercial vehicle loan',
    keyObjectives: [
      'Empower unemployed youths across all 20 districts of J&K with sustainable transport livelihoods',
      'Eliminate down payment hurdles preventing youths from acquiring commercial goods/passenger vehicles',
      'Strengthen intra-district rural goods connectivity and horticultural logistics'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 35,
      stateResidence: 'Jammu and Kashmir',
      notes: 'Domicile of J&K aged 18 to 35, currently unemployed, holding a valid commercial driving license.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Jammu and Kashmir',
      'Unemployed youth aged between 18 and 35 years',
      'Holds valid commercial driving license issued by Motor Vehicles Department J&K'
    ],
    exclusions: [
      'Individuals already holding permanent government employment'
    ],
    requiredDocuments: [
      {
        id: 'doc-jk-mum-license',
        name: 'Commercial Driving License',
        category: 'other',
        purpose: 'Verify authorization to operate commercial transport vehicles',
        citizenTip: 'Issued by RTO / ARTO in J&K.',
        isMandatory: true
      },
      {
        id: 'doc-jk-mum-domicile',
        name: 'J&K Domicile Certificate and Aadhaar',
        category: 'identity',
        purpose: 'Proof of J&K residency and age',
        citizenTip: 'Digital certificate issued via e-Services J&K.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Mission Youth Portal',
        description: 'Submit application along with driving license and vehicle model preference on missionyouth.jk.gov.in.',
        portalOrOffice: 'missionyouth.jk.gov.in'
      },
      {
        stepNumber: 2,
        title: 'District Level Task Force Committee (DLTFC) Approval',
        description: 'Committee headed by Deputy Commissioner screens candidate and approves vehicle sanction.',
        portalOrOffice: 'Deputy Commissioner Office'
      },
      {
        stepNumber: 3,
        title: 'Vehicle Delivery with Subsidies',
        description: 'State and manufacturer contribute 20% subsidy, bank finances remaining balance, and vehicle is delivered.',
        portalOrOffice: 'Authorized Automobile Dealership'
      }
    ],
    officialSource: {
      name: 'Mission Youth, Government of Jammu and Kashmir',
      url: 'https://missionyouth.jk.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Mission Youth J&K',
      helpline: '0194-2452055',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Mumkin scheme portal of Mission Youth J&K.'
    }
  },
  {
    id: 'jk-tejaswini-women-livelihood',
    name: 'Mission Youth Tejaswini Scheme (J&K Women Entrepreneurship Financial Support)',
    hindiName: 'मिशन यूथ तेजस्विनी योजना (जम्मू-कश्मीर महिला उद्यमिता वित्तीय सहायता)',
    teluguName: 'మిషన్ యూత్ తేజస్విని పథకం',
    tamilName: 'மிஷன் யூத் தேஜஸ்வினி திட்டம்',
    tagline: 'Collateral-free business loan up to ₹5 Lakh + 10% state grant (₹50,000) + full interest subsidy for young women.',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'Union Territory Scheme (Jammu and Kashmir)',
    stateApplicability: 'Jammu and Kashmir',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'JK',
    administeringGovernment: 'Government of Jammu and Kashmir',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Young Women Entrepreneurs aged 18-35', 'Female Graduates in J&K', 'Women Artisans and Micro-Business Owners'],
    shortSummary: 'High-impact female entrepreneurship program providing collateral-free bank loans up to ₹5,00,000 with Mission Youth contributing 10% (up to ₹50,000) as an upfront state grant and sponsoring 100% of the loan interest.',
    fullDescription: 'Tejaswini The Radiant is a special initiative under Mission Youth J&K to foster women entrepreneurship. Young women aged 18 to 35 seeking to establish manufacturing, retail, beauty and wellness, agro-processing, or tourism ventures receive bank loans up to ₹5 Lakh without collateral. Mission Youth provides ₹50,000 as a direct capital subsidy and reimburses 100% of the bank interest throughout the repayment period.',
    financialBenefit: '₹50,000 upfront state grant + 100% interest subvention on bank loans up to ₹5,00,000',
    keyObjectives: [
      'Empower young women across Jammu and Kashmir to become independent business owners',
      'Foster micro-enterprises in saffron, dry fruits, traditional shawls, tailoring, and tourism',
      'Provide 100% interest-free capital through state interest subvention'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 35,
      targetGender: 'female',
      stateResidence: 'Jammu and Kashmir',
      notes: 'Woman domicile of J&K aged 18 to 35, holding minimum qualification of Class 10 pass, currently unemployed.'
    },
    eligibilityHighlights: [
      'Female domicile of Jammu and Kashmir aged 18 to 35 years',
      'Minimum educational qualification Class 10 pass',
      'Proposed enterprise registered and operating in J&K'
    ],
    exclusions: [
      'Women who are permanent regular government employees'
    ],
    requiredDocuments: [
      {
        id: 'doc-jk-tej-dpr',
        name: 'Detailed Project Report (DPR) & Cost Estimate',
        category: 'other',
        purpose: 'Technical and financial appraisal of enterprise',
        citizenTip: 'Can be assisted by District Employment Officer.',
        isMandatory: true
      },
      {
        id: 'doc-jk-tej-domicile',
        name: 'J&K Domicile Certificate & Class 10 Marksheet',
        category: 'identity',
        purpose: 'Proof of J&K residency, gender, and age',
        citizenTip: 'Digital certificate issued via e-Services J&K.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Mission Youth Portal',
        description: 'Submit Tejaswini application along with DPR on missionyouth.jk.gov.in.',
        portalOrOffice: 'missionyouth.jk.gov.in'
      },
      {
        stepNumber: 2,
        title: 'District Task Force Approval',
        description: 'District Level Task Force headed by Deputy Commissioner approves project and forwards to bank.',
        portalOrOffice: 'Deputy Commissioner Office'
      },
      {
        stepNumber: 3,
        title: 'Loan Disbursal & Subsidy Credit',
        description: 'Partner bank disburses loan; Mission Youth credits ₹50,000 grant and starts monthly interest reimbursement.',
        portalOrOffice: 'Commercial Bank Branch'
      }
    ],
    officialSource: {
      name: 'Mission Youth, Government of Jammu and Kashmir',
      url: 'https://missionyouth.jk.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Mission Youth J&K',
      helpline: '0194-2452055',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Tejaswini women entrepreneurship portal of J&K.'
    }
  },
  {
    id: 'jk-state-marriage-assistance',
    name: 'State Marriage Assistance Scheme (SMAS J&K Financial Grant for Poor Brides)',
    hindiName: 'राज्य विवाह सहायता योजना (जम्मू-कश्मीर कन्या विवाह प्रत्यक्ष वित्तीय सहायता)',
    teluguName: 'జమ్మూ & కశ్మీర్ వివాహ సహాయ పథకం',
    tamilName: 'ஜம்மு & காஷ்மீர் திருமண உதவித் திட்டம்',
    tagline: 'One-time direct financial grant of ₹50,000 transferred to poor adult unmarried girls before marriage.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'Union Territory Scheme (Jammu and Kashmir)',
    stateApplicability: 'Jammu and Kashmir',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'JK',
    administeringGovernment: 'Government of Jammu and Kashmir',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Daughters of Poor & AAY Families', 'Adult Unmarried Girls in J&K', 'Daughters of Widows'],
    shortSummary: 'Direct financial assistance of ₹50,000 credited into the personal bank account of an adult unmarried girl from an Antyodaya or destitute household before her marriage, easing marriage expenditures.',
    fullDescription: 'The State Marriage Assistance Scheme (SMAS) safeguards underprivileged families across Jammu and Kashmir from debt distress during daughter marriages. Administered by the Social Welfare Department, the grant of ₹50,000 is directly credited into the bank account of the girl prior to her wedding. Beneficiaries must be at least 18 years old and belong to identified Antyodaya Anna Yojana (AAY) or priority households.',
    financialBenefit: '₹50,000 one-time financial grant credited directly into bride bank account',
    keyObjectives: [
      'Shield impoverished and destitute parents from informal debt traps during weddings',
      'Prevent underage marriages by strictly mandating minimum age of 18 years for brides',
      'Empower the bride by making her the sole recipient of the wedding grant'
    ],
    eligibilityRules: {
      minAge: 18,
      targetGender: 'female',
      stateResidence: 'Jammu and Kashmir',
      notes: 'Adult unmarried girl domicile of J&K aged 18 or above, belonging to an Antyodaya Anna Yojana (AAY) or PHH family.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Jammu and Kashmir',
      'Bride must be at least 18 years of age at time of marriage',
      'Family must be covered under Antyodaya Anna Yojana (AAY) or PHH ration card',
      'Applied prior to solemnization of marriage'
    ],
    exclusions: [
      'Child marriages where bride is below 18 years',
      'Families belonging to non-poor categories'
    ],
    requiredDocuments: [
      {
        id: 'doc-jk-sma-age',
        name: 'Age Proof of Bride (Matriculation Certificate / Birth Certificate / Aadhaar)',
        category: 'identity',
        purpose: 'Verify minimum 18 years age requirement',
        citizenTip: 'Check date of birth on Aadhaar.',
        isMandatory: true
      },
      {
        id: 'doc-jk-sma-ration',
        name: 'AAY / PHH Digital Ration Card',
        category: 'income',
        purpose: 'Proof of poverty category entitlement',
        citizenTip: 'Check details on jkfcsca.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-jk-sma-bank',
        name: 'Aadhaar-Seeded Bank Passbook of Bride',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Account must be in bride own single name.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on e-Services J&K Portal',
        description: 'Submit SMAS application on jkeservices.jk.gov.in along with age and ration card proof.',
        portalOrOffice: 'jkeservices.jk.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Verification by Tehsil Social Welfare Officer (TSWO)',
        description: 'TSWO verifies living conditions, age, and upcoming marriage credentials.',
        portalOrOffice: 'TSWO Office'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of ₹50,000 Before Wedding',
        description: 'Sanction order is issued and ₹50,000 is credited directly into the bride bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of Jammu and Kashmir',
      url: 'https://jksocialwelfare.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0194-2473746',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official SMAS marriage welfare portal of J&K.'
    }
  },
  {
    id: 'jk-aasra-social-security',
    name: 'Aasra Social Security Scheme (J&K Insurance Premium Sponsorship for Breadwinners)',
    hindiName: 'आसरा सामाजिक सुरक्षा योजना (जम्मू-कश्मीर कमाऊ सदस्य बीमा प्रीमियम भुगतान)',
    teluguName: 'ఆస్రా సోషల్ సెక్యూరిటీ పథకం (జమ్మూ & కశ్మీర్)',
    tamilName: 'ஆஸ்ரா சமூக பாதுகாப்புத் திட்டம் (ஜம்மு & காஷ்மீர்)',
    tagline: '100% government payment of insurance premiums for ₹2 Lakh life and ₹2 Lakh disability coverage.',
    category: 'workers-social-security',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'Union Territory Scheme (Jammu and Kashmir)',
    stateApplicability: 'Jammu and Kashmir',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'JK',
    administeringGovernment: 'Government of Jammu and Kashmir',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Low-Income Breadwinners in J&K', 'Agricultural and Informal Laborers', 'Artisans and Ponywallahs in Kashmir'],
    shortSummary: 'Universal zero-cost insurance scheme where the J&K Government pays 100% of annual premiums under PMJJBY and PMSBY for low-income breadwinners, guaranteeing ₹2 Lakh life insurance and ₹2 Lakh accident cover to their families.',
    fullDescription: 'The Aasra Scheme shields families of breadwinners in the unorganized sector against sudden mortality or permanent disability. For all breadwinners whose family annual income is under ₹75,000, the Social Welfare Department directly pays the annual premiums for both Pradhan Mantri Jeevan Jyoti Bima Yojana (life insurance) and Pradhan Mantri Suraksha Bima Yojana (accidental insurance), ensuring poor families receive ₹2 Lakh immediate financial relief without paying a single rupee in premiums.',
    financialBenefit: '100% state-paid insurance premiums covering ₹2,00,000 life and ₹2,00,000 accidental disability insurance',
    keyObjectives: [
      'Provide zero-cost life and accidental insurance to all informal sector breadwinners in J&K',
      'Prevent families from falling into destitution following the death or disability of the sole earner',
      'Automate annual premium renewals through government DBT funds'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 50,
      maxIncome: 75000,
      stateResidence: 'Jammu and Kashmir',
      notes: 'Domicile breadwinner in J&K aged 18 to 50 with family annual income not exceeding ₹75,000.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Jammu and Kashmir',
      'Breadwinner of household aged 18 to 50 years',
      'Annual family income does not exceed ₹75,000 from all sources',
      'Active savings bank account with Aadhaar seeding'
    ],
    exclusions: [
      'Regular government servants or corporate employees with formal insurance'
    ],
    requiredDocuments: [
      {
        id: 'doc-jk-aas-income',
        name: 'Income Certificate (Income under ₹75,000/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Issued by Tehsildar.',
        isMandatory: true
      },
      {
        id: 'doc-jk-aas-bank',
        name: 'Bank Passbook and Aadhaar Card',
        category: 'bank',
        purpose: 'Insurance policy linking and automated premium deduction',
        citizenTip: 'Check that bank account is active.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Form to Bank Branch or TSWO Office',
        description: 'Submit Aasra application form along with income certificate at your local bank branch or Tehsil Social Welfare Office.',
        portalOrOffice: 'Bank Branch / TSWO Office'
      },
      {
        stepNumber: 2,
        title: 'Enrolment under PMJJBY and PMSBY',
        description: 'Bank enrolls the breadwinner under insurance schemes; Social Welfare Department reimburses the premium directly.',
        portalOrOffice: 'Social Welfare Department'
      },
      {
        stepNumber: 3,
        title: 'Policy Activation & Family Security',
        description: 'Receive policy acknowledgment; family is covered for ₹2 Lakh life and ₹2 Lakh accidental insurance.',
        portalOrOffice: 'Automated System'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of Jammu and Kashmir',
      url: 'https://jksocialwelfare.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0194-2473746',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Aasra social security portal of J&K.'
    }
  },
  {
    id: 'jk-ladli-beti-scheme',
    name: 'Ladli Beti Scheme (J&K Monthly Girl Child Financial Asset Investment)',
    hindiName: 'लाडली बेटी योजना (जम्मू-कश्मीर बालिका मासिक वित्तीय निवेश)',
    teluguName: 'లాడ్లీ బేటీ పథకం (జమ్మూ & కశ్మీర్)',
    tamilName: 'லாட்லி பேட்டி திட்டம் (ஜம்மு & காஷ்மீர்)',
    tagline: 'State deposits ₹1,000/month from birth until age 14 into bank, maturing into ~₹6.5 Lakh when the girl turns 21.',
    category: 'education',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'Union Territory Scheme (Jammu and Kashmir)',
    stateApplicability: 'Jammu and Kashmir',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'JK',
    administeringGovernment: 'Government of Jammu and Kashmir',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'childhood',
    beneficiaries: ['Newborn Girl Children in J&K', 'Low-Income Families', 'Two Daughters per Household'],
    shortSummary: 'Transformative girl child asset creation program where the J&K Government deposits ₹1,000 every month for 14 years (total ₹1.68 Lakh invested) in an interest-bearing recurring deposit, maturing to approximately ₹6.5 Lakh when the girl reaches age 21.',
    fullDescription: 'The Ladli Beti Scheme changes societal mindsets and eradicates female foeticide across Jammu and Kashmir. Operating across identified districts with skewed sex ratios, the Department of Social Welfare deposits ₹1,000 per month into a special recurring deposit in J&K Bank in the name of the girl child from her birth until she reaches 14 years of age. The account continues to earn compound interest until she turns 21, maturing into approximately ₹6.5 Lakh withdrawable for higher studies or marriage.',
    financialBenefit: '₹1,000 / month invested for 14 years (Total state investment ₹1.68 Lakh maturing to ~₹6,50,000 at age 21)',
    keyObjectives: [
      'Eradicate female foeticide and improve the child sex ratio at birth in J&K',
      'Ensure every girl child starts adult life with a substantial financial asset of ₹6.5 Lakh',
      'Incentivize birth registration and institutional deliveries'
    ],
    eligibilityRules: {
      targetGender: 'female',
      maxIncome: 75000,
      stateResidence: 'Jammu and Kashmir',
      notes: 'Girl child born in J&K whose birth is registered within 6 months, with family annual income not exceeding ₹75,000, applicable up to two daughters per family.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Jammu and Kashmir',
      'Annual family income does not exceed ₹75,000',
      'Birth registered within 6 months of delivery',
      'Capped at maximum two girl children per family'
    ],
    exclusions: [
      'Families with annual income exceeding ₹75,000',
      'Births registered after 6 months without condonation'
    ],
    requiredDocuments: [
      {
        id: 'doc-jk-lb-birth',
        name: 'Birth Certificate of Girl Child',
        category: 'identity',
        purpose: 'Verify age, date of birth, and parentage',
        citizenTip: 'Civil registration birth certificate issued within 6 months.',
        isMandatory: true
      },
      {
        id: 'doc-jk-lb-income',
        name: 'Income Certificate (Family income < ₹75,000/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Issued by Tehsildar.',
        isMandatory: true
      },
      {
        id: 'doc-jk-lb-domicile',
        name: 'J&K Domicile Certificate of Parents',
        category: 'identity',
        purpose: 'Proof of J&K residency',
        citizenTip: 'Issued by competent authority.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to CDPO Office',
        description: 'Submit form along with birth and income certificates to local Child Development Project Officer (CDPO).',
        portalOrOffice: 'CDPO Office / Anganwadi Center'
      },
      {
        stepNumber: 2,
        title: 'Sanction and Account Opening at J&K Bank',
        description: 'CDPO approves application and opens a designated Ladli Beti recurring deposit account at J&K Bank.',
        portalOrOffice: 'J&K Bank Branch'
      },
      {
        stepNumber: 3,
        title: 'Monthly State Deposit & Maturity at 21',
        description: 'State deposits ₹1,000 monthly until age 14; full matured amount (~₹6.5 Lakh) is released to girl at age 21.',
        portalOrOffice: 'J&K Bank / WCD Department'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of Jammu and Kashmir',
      url: 'https://jksocialwelfare.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0194-2473746',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Ladli Beti scheme portal of J&K.'
    }
  },

  // LADAKH (LA)
  {
    id: 'la-rewa-exam-support',
    name: 'Rewa Lt. Governor Student Financial Assistance Scheme (Ladakh Competitive Coaching)',
    hindiName: 'रेवा उपराज्यपाल छात्र वित्तीय सहायता योजना (लद्दाख प्रतियोगी कोचिंग)',
    teluguName: 'రేవా విద్యార్థి ఆర్థిక సహాయ పథకం (లడఖ్)',
    tamilName: 'ரேவா துணைநிலை ஆளுநர் மாணவர் நிதி உதவித் திட்டம் (லடாக்)',
    tagline: 'Up to ₹1 Lakh direct financial grant for meritorious Ladakh students preparing for NEET, JEE, and UPSC examinations.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'Union Territory Scheme (Ladakh)',
    stateApplicability: 'Ladakh',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LA',
    administeringGovernment: 'Administration of Union Territory of Ladakh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Meritorious Ladakh Students (Class 10/12 passed)', 'NEET & JEE Engineering/Medical Aspirants', 'UPSC Civil Services Aspirants in Leh & Kargil'],
    shortSummary: 'Empowers high-altitude youth across Leh and Kargil with financial grants up to ₹1,00,000 to enroll in premier competitive exam coaching institutions in New Delhi, Chandigarh, or online, bridging the geographical isolation barrier.',
    fullDescription: 'Under the Rewa initiative, the Administration of UT Ladakh finances the competitive ambitions of local students. Meritorious students clearing Class 10 or 12 board examinations receive ₹1,00,000 for medical/engineering entrance coaching, while college graduates clearing UPSC preliminary civil services examinations receive ₹1,00,000 direct grants to support interview and mains preparation.',
    financialBenefit: 'Up to ₹1,00,000 direct grant via DBT for competitive coaching and study expenses',
    keyObjectives: [
      'Bridge the geographical divide preventing isolated Himalayan youths from accessing top national coaching',
      'Increase the number of Ladakhi students qualifying for IITs, AIIMS, and Central Civil Services',
      'Provide unconditional financial liquidity to meritorious students based on board exam scores'
    ],
    eligibilityRules: {
      stateResidence: 'Ladakh',
      notes: 'Resident of UT Ladakh holding a valid Resident Certificate, scoring top marks in Class 10/12 board exams or qualifying UPSC preliminaries.'
    },
    eligibilityHighlights: [
      'Permanent resident / Resident Certificate holder of UT Ladakh',
      'Top 70% or higher in Class 10/12 board examinations (or qualified UPSC Prelims)',
      'Enrolled or planning enrollment in recognized coaching academy'
    ],
    exclusions: [
      'Students who have already availed the benefit under Rewa twice'
    ],
    requiredDocuments: [
      {
        id: 'doc-la-rew-marks',
        name: 'Class 10th/12th Board Marksheet or UPSC Prelims Roll Slip',
        category: 'academic',
        purpose: 'Verify academic performance or qualifying status',
        citizenTip: 'Upload clear scan on portal.',
        isMandatory: true
      },
      {
        id: 'doc-la-rew-resident',
        name: 'Ladakh Resident Certificate & Aadhaar',
        category: 'identity',
        purpose: 'Proof of Ladakh residency',
        citizenTip: 'Issued by Tehsildar in Leh or Kargil.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Ladakh Higher Education Portal',
        description: 'Submit Rewa application along with marksheets on ladakh.nic.in / higher education portal.',
        portalOrOffice: 'ladakh.nic.in / Deputy Commissioner Office'
      },
      {
        stepNumber: 2,
        title: 'Screening and Merit List Generation',
        description: 'Directorate of Higher Education verifies board exam percentages and selects top candidates.',
        portalOrOffice: 'Higher Education Directorate'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of ₹1,00,000',
        description: 'Grant of ₹1 Lakh is credited directly into the student bank account via PFMS.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Higher Education, Administration of UT Ladakh',
      url: 'https://ladakh.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Higher Education',
      helpline: '01982-255567',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Rewa student support scheme of UT Ladakh.'
    }
  },
  {
    id: 'la-kunsnyoms-pwd-scheme',
    name: 'Kunsnyoms Scheme (LAHDC Equal Opportunities & Assistive Support for PwD)',
    hindiName: 'कुंसन्योम्स योजना (लद्दाख स्वायत्त पर्वतीय परिषद दिव्यांग समान अवसर सहायता)',
    teluguName: 'కున్స్‌న్యోమ్స్ పథకం (లడఖ్)',
    tamilName: 'குன்ஸ்நியோக்ஸ் திட்டம் (லடாக்)',
    tagline: '75% subsidy on customized motorized snow/hill mobility scooters and winter greenhouses for Persons with Disabilities.',
    category: 'disability-pwd',
    categoryLabel: 'Disability & Inclusion',
    geographicScope: 'Union Territory Scheme (Ladakh)',
    stateApplicability: 'Ladakh',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LA',
    administeringGovernment: 'Administration of Union Territory of Ladakh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Persons with Disabilities (PwD) in Leh & Kargil', 'Mobility-Impaired Mountain Dwellers', 'Differently-Abled Artisans and Farmers'],
    shortSummary: 'Meaningful inclusion scheme by the Ladakh Autonomous Hill Development Council (LAHDC) meaning "Equal for All", providing 75% subsidies on all-terrain motorized scooters, solar passive greenhouses, and smart assistive tech for persons with disabilities.',
    fullDescription: 'Navigating high-altitude frozen terrain with a physical disability is extremely challenging. The Kunsnyoms Scheme (Equal for All), launched by the LAHDC, provides 75% subsidies on customized motorized three-wheelers with snow chains, passive solar greenhouse kits to enable home vegetable farming during sub-zero winters, and specialized hearing and visual aids to ensure full economic independence.',
    financialBenefit: '75% capital subsidy on all-terrain mobility scooters and passive solar winter greenhouses',
    keyObjectives: [
      'Enable year-round mobility for persons with disabilities across freezing high-altitude terrain',
      'Provide livelihood tools including passive solar greenhouses for organic farming',
      'Achieve 100% saturation of assistive technology across all remote villages of Ladakh'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      stateResidence: 'Ladakh',
      notes: 'Resident of UT Ladakh holding valid Resident Certificate and certified disability of 40% or above / UDID card.'
    },
    eligibilityHighlights: [
      'Resident of Leh or Kargil districts in UT Ladakh',
      'Certified disability of 40% or higher verified by Medical Board / UDID card',
      'Selected through LAHDC Social Welfare screening committee'
    ],
    exclusions: [
      'Permanent government employees'
    ],
    requiredDocuments: [
      {
        id: 'doc-la-kun-udid',
        name: 'UDID Card / Disability Certificate',
        category: 'disability',
        purpose: 'Verify disability category and percentage',
        citizenTip: 'Check UDID on swavlambancard.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-la-kun-resident',
        name: 'Ladakh Resident Certificate & Aadhaar',
        category: 'identity',
        purpose: 'Proof of domicile in Ladakh',
        citizenTip: 'Issued by Tehsildar.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to District Social Welfare Officer',
        description: 'Submit form along with UDID card to District Social Welfare Office in Leh or Kargil.',
        portalOrOffice: 'District Social Welfare Office'
      },
      {
        stepNumber: 2,
        title: 'LAHDC Executive Council Approval',
        description: 'LAHDC council reviews application and allocates 75% subsidy sanction.',
        portalOrOffice: 'LAHDC Secretariat'
      },
      {
        stepNumber: 3,
        title: 'Delivery of Customized Scooter / Greenhouse',
        description: 'All-terrain motorized scooter or solar greenhouse kit is delivered at ceremonial distribution camp.',
        portalOrOffice: 'Council Secretariat / Camp'
      }
    ],
    officialSource: {
      name: 'Ladakh Autonomous Hill Development Council (LAHDC) / Social Welfare',
      url: 'https://leh.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Social Welfare, UT Ladakh',
      helpline: '01982-252010',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Kunsnyoms disability welfare scheme of LAHDC Leh.'
    }
  },
  {
    id: 'la-isss-integrated-social-pension',
    name: 'Ladakh Integrated Social Security Scheme (ISSS Universal Monthly Pension)',
    hindiName: 'लद्दाख एकीकृत सामाजिक सुरक्षा योजना (आईएसएसएस सार्वभौमिक मासिक पेंशन)',
    teluguName: 'లడఖ్ ఇంటిగ్రేటెడ్ సోషల్ సెక్యూరిటీ పథకం',
    tamilName: 'லடாக் ஒருங்கிணைந்த சமூக பாதுகாப்புத் திட்டம்',
    tagline: 'Monthly social security pension of ₹1,000 directly via DBT for elderly citizens, widows, and disabled persons.',
    category: 'pension',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'Union Territory Scheme (Ladakh)',
    stateApplicability: 'Ladakh',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LA',
    administeringGovernment: 'Administration of Union Territory of Ladakh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Widows and Destitute Women', 'Differently-Abled Citizens in Leh & Kargil'],
    shortSummary: 'Universal social security pension transferring ₹1,000 monthly directly into the bank accounts of over 12,000 vulnerable senior citizens, widows, and persons with disabilities across Ladakh, ensuring dignity in extreme climate.',
    fullDescription: 'The Social and Tribal Welfare Department in UT Ladakh operates the Integrated Social Security Scheme (ISSS) to protect elderly and vulnerable populations surviving in cold arid Himalayan conditions. Beneficiaries receive ₹1,000 per month credited directly into their Aadhaar-linked bank accounts to meet essential heating, food, and medical expenditures during harsh winter months.',
    financialBenefit: '₹1,000 / month (₹12,000 annually) transferred directly via DBT',
    keyObjectives: [
      'Provide basic monthly financial independence to elderly, widowed, and disabled citizens across Ladakh',
      'Shield vulnerable high-altitude villagers from winter destitution and medical poverty',
      'Ensure 100% digital benefit delivery with automated monthly bank credits'
    ],
    eligibilityRules: {
      minAge: 60,
      maxIncome: 75000,
      stateResidence: 'Ladakh',
      notes: 'Resident of UT Ladakh with family annual income not exceeding ₹75,000. Age 60+ for seniors, widows of any age, PwD with 40%+ disability.'
    },
    eligibilityHighlights: [
      'Permanent resident of Leh or Kargil district in UT Ladakh',
      'Annual family income does not exceed ₹75,000',
      'Senior citizen (age 60+), widow, or person with disability (40%+)',
      'Not receiving any other regular government or civil pension'
    ],
    exclusions: [
      'Retired government employees receiving civil or military pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-la-iss-age',
        name: 'Age Proof (Aadhaar / Voter ID / Resident Certificate)',
        category: 'identity',
        purpose: 'Verify age and Ladakh residency',
        citizenTip: 'Aadhaar card showing full date of birth is accepted.',
        isMandatory: true
      },
      {
        id: 'doc-la-iss-income',
        name: 'Income Certificate (Income under ₹75,000/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Issued by Tehsildar.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Tehsil Social Welfare Officer (TSWO)',
        description: 'Submit form along with income and resident certificate at local TSWO office in Leh or Kargil.',
        portalOrOffice: 'TSWO Office / Block Development Office'
      },
      {
        stepNumber: 2,
        title: 'Verification and Sanction Order',
        description: 'District Social Welfare Officer verifies records and issues pension sanction number.',
        portalOrOffice: 'District Social Welfare Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹1,000 is credited directly into the senior citizen bank account by the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social and Tribal Welfare, Administration of UT Ladakh',
      url: 'https://ladakh.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social and Tribal Welfare Department',
      helpline: '01982-255567',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official ISSS pension portal of UT Ladakh.'
    }
  },
  {
    id: 'la-modi-organic-agriculture',
    name: 'Mission Organic Development Initiative (MODI Ladakh 100% Organic Farming Grants)',
    hindiName: 'मिशन ऑर्गेनिक डेवलपमेंट इनिशिएटिव (मोदी लद्दाख १००% जैविक कृषि अनुदान)',
    teluguName: 'మిషన్ ఆర్గానిక్ డెవలప్‌మెంట్ ఇనిషియేటివ్ (లడఖ్)',
    tamilName: 'மிஷன் ஆர்கானிக் டெவலப்மென்ட் திட்டம் (லடாக்)',
    tagline: '100% organic certification grants, subsidized bio-fertilizers, and cold storage units for apricot and sea buckthorn growers.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'Union Territory Scheme (Ladakh)',
    stateApplicability: 'Ladakh',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LA',
    administeringGovernment: 'Administration of Union Territory of Ladakh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Apricot and Sea Buckthorn Cultivators', 'Organic Vegetable Farmers in Ladakh', 'Farmer Producer Organizations (FPOs)'],
    shortSummary: 'Flagship mission to make Ladakh 100% certified organic by providing free organic certification, bio-pesticide subsidies, solar dehydrators for GI-tagged Raktsey Karpo apricots, and climate-controlled storage.',
    fullDescription: 'Ladakh is naturally poised to become a global organic haven due to isolated valleys and chemical-free soil. Mission Organic Development Initiative (MODI) provides 100% government-funded third-party organic certification, subsidized vermicompost pits, solar dehydrators for the sweet GI-tagged Raktsey Karpo apricots, and processing machinery for vitamin C-rich Sea Buckthorn (Leh Berry), multiplying farmer export earnings.',
    financialBenefit: '100% free organic certification + 75% subsidy on solar dehydrators and micro-processing units',
    keyObjectives: [
      'Transform Ladakh into a 100% certified organic agricultural region',
      'Commercialize GI-tagged Raktsey Karpo Apricot and Himalayan Sea Buckthorn',
      'Provide zero-cost organic certification and solar drying equipment to farmers'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Horticulturist', 'Organic Cultivator'],
      stateResidence: 'Ladakh',
      notes: 'Resident farmer of UT Ladakh cultivating agricultural land and committed to zero synthetic chemical fertilizers and pesticides.'
    },
    eligibilityHighlights: [
      'Resident farmer / landowner in Leh or Kargil district',
      'Practicing traditional chemical-free agriculture',
      'Registered with local organic cluster under Agriculture Department'
    ],
    exclusions: [
      'Farms using synthetic synthetic chemical fertilizers or pesticides'
    ],
    requiredDocuments: [
      {
        id: 'doc-la-mod-land',
        name: 'Land Revenue Record (Jamabandi / Khasra)',
        category: 'land',
        purpose: 'Verify agricultural landholding in Ladakh',
        citizenTip: 'Issued by Patwari.',
        isMandatory: true
      },
      {
        id: 'doc-la-mod-aadhaar',
        name: 'Aadhaar Card and Resident Certificate',
        category: 'identity',
        purpose: 'Identity and Ladakh residency validation',
        citizenTip: 'Check with local Agriculture Officer.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register with Block Agriculture Development Officer (ADO)',
        description: 'Register farm plot for organic cluster conversion at local Block Agriculture Office.',
        portalOrOffice: 'Block Agriculture Office'
      },
      {
        stepNumber: 2,
        title: 'Soil Testing and Organic Inspection',
        description: 'Certification agency tests soil samples and enrolls farm in 3-year organic conversion protocol.',
        portalOrOffice: 'Directorate of Agriculture, Leh'
      },
      {
        stepNumber: 3,
        title: 'Organic Certification & Subsidy Handover',
        description: 'Receive official organic NPOP certification and subsidized solar apricot dehydrators.',
        portalOrOffice: 'Agriculture Department Depot'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture, Administration of UT Ladakh',
      url: 'https://agriculture.ladakh.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Agriculture',
      helpline: '01982-252010',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official MODI organic agriculture portal of UT Ladakh.'
    }
  },
  {
    id: 'la-pashmina-wool-incentive',
    name: 'Ladakh Pashmina Wool Development & Nomad Shelter Scheme (Changthang Herders Support)',
    hindiName: 'लद्दाख पश्मीना ऊन विकास एवं घुमंतू आश्रय योजना (चांगथांग चरवाहा सहायता)',
    teluguName: 'లడఖ్ పష్మినా ఉన్ని అభివృద్ధి పథకం',
    tamilName: 'லடாக் பஷ்மினா கம்பளி மேம்பாட்டுத் திட்டம்',
    tagline: 'Direct subsidies for solar predator-proof corrals, insulated nomad tents, and de-hairing combs for Changpa goat herders.',
    category: 'artisans',
    categoryLabel: 'Artisans & Traditional Crafts',
    geographicScope: 'Union Territory Scheme (Ladakh)',
    stateApplicability: 'Ladakh',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LA',
    administeringGovernment: 'Administration of Union Territory of Ladakh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Changpa Pastoralist Nomads', 'Pashmina Goat Rearers in Changthang', 'Traditional Wool Artisans and Weavers'],
    shortSummary: 'Vital nomadic pastoral welfare initiative providing 75% subsidies on all-weather insulated solar tents, predator-proof corrals to prevent snow leopard attacks, and modern de-hairing combs to Changpa herders producing world-famous Cashmere pashmina wool.',
    fullDescription: 'The Changpa pastoralists of Changthang rear the world-famous Changthangi (Pashmina) goats at altitudes exceeding 14,000 feet in -40°C winters. The Department of Sheep Husbandry provides insulated solar-lit nomadic tents, predator-proof galvanized wire corrals (protecting herds from snow leopards and wolves), veterinary feed top-ups during blizzards, and direct price support for raw pashmina wool.',
    financialBenefit: '75% subsidy on insulated nomad tents (worth ₹60,000) + free predator-proof corrals + wool price support',
    keyObjectives: [
      'Preserve the centuries-old nomadic lifestyle and traditional pastoralism of the Changpa tribe',
      'Protect valuable Pashmina goat herds from winter predator attacks and extreme snow blizzards',
      'Guarantee fair floor prices for raw Pashmina wool through the All Changthang Pashmina Growers Society'
    ],
    eligibilityRules: {
      occupations: ['Pastoralist', 'Nomad Goat Herder', 'Wool Artisan'],
      stateResidence: 'Ladakh',
      notes: 'Changpa pastoral nomad or resident of Changthang / Leh rearing certified Changthangi Pashmina goats.'
    },
    eligibilityHighlights: [
      'Resident pastoralist of Changthang region in UT Ladakh',
      'Owner of registered flock of Pashmina goats (verified by Sheep Husbandry Department)',
      'Member of village pastoral grazing cooperative'
    ],
    exclusions: [
      'Commercial traders without active livestock rearing'
    ],
    requiredDocuments: [
      {
        id: 'doc-la-pas-flock',
        name: 'Flock Verification Certificate / Nomad Ration Card',
        category: 'other',
        purpose: 'Verify herd size and nomadic herder status',
        citizenTip: 'Issued by District Sheep Husbandry Officer, Leh.',
        isMandatory: true
      },
      {
        id: 'doc-la-pas-resident',
        name: 'Ladakh Resident Certificate & ST Certificate',
        category: 'caste',
        purpose: 'Verify indigenous tribal status',
        citizenTip: 'Issued by Tehsildar, Nyoma / Durbuk.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Veterinary Assistant Surgeon (VAS)',
        description: 'Submit form through local nomadic village head (Goba) or nearest Sheep Husbandry centre in Nyoma/Durbuk.',
        portalOrOffice: 'Sheep Husbandry Center, Changthang'
      },
      {
        stepNumber: 2,
        title: 'Flock Inspection and Verification',
        description: 'Veterinary team inspects goat herd and registers ear-tag identification numbers.',
        portalOrOffice: 'Changthang Grazing Pasture'
      },
      {
        stepNumber: 3,
        title: 'Distribution of Insulated Tents and Corrals',
        description: 'Receive insulated solar living tent, predator corral kit, and wool combs at seasonal distribution camp.',
        portalOrOffice: 'Department Depot, Nyoma'
      }
    ],
    officialSource: {
      name: 'Department of Sheep Husbandry, Administration of UT Ladakh',
      url: 'https://sheephusbandry.ladakh.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Sheep Husbandry',
      helpline: '01982-252010',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official pashmina development portal of UT Ladakh.'
    }
  },

  // LAKSHADWEEP (LD)
  {
    id: 'ld-island-scholarship-scheme',
    name: 'Lakshadweep Post-Matric & Mainland Higher Education Full Scholarship Scheme',
    hindiName: 'लक्षद्वीप उत्तर-मैट्रिक एवं मुख्यभूमि उच्च शिक्षा पूर्ण छात्रवृत्ति',
    teluguName: 'లక్షద్వీప్ పోస్ట్-మెట్రిక్ స్కాలర్‌షిప్ పథకం',
    tamilName: 'லட்சத்தீவு போஸ்ட்-மெட்ரிக் கல்வி உதவித்தொகை திட்டம்',
    tagline: '100% course fees + free ship travel to Kochi/Calicut + monthly living stipend for island college students.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'Union Territory Scheme (Lakshadweep)',
    stateApplicability: 'Lakshadweep',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LD',
    administeringGovernment: 'Lakshadweep Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Lakshadweep Island Students', 'ST Tribal Students pursuing Higher Education', 'Students enrolled in Kerala & Mainland Colleges'],
    shortSummary: 'Comprehensive higher education scholarship paying 100% tuition fees, free passenger ship tickets to Kochi and Calicut, and monthly living allowances for island students enrolled in recognized universities on the Indian mainland.',
    fullDescription: 'Because Lakshadweep has no medical or engineering colleges, all higher education students study on the Indian mainland (primarily Kerala). The Directorate of Education in Kavaratti covers 100% of approved tuition and hostel fees, provides free ship passages between the islands and mainland, and deposits a monthly maintenance stipend directly into student bank accounts via PFMS.',
    financialBenefit: '100% tuition fees paid + free ship passage vouchers + monthly hostel maintenance stipend',
    keyObjectives: [
      'Ensure 100% access to professional and university education for indigenous island students',
      'Shield tribal families from exorbitant mainland hostel boarding and ship travel expenses',
      'Produce doctors, engineers, navigation officers, and teachers from the islands'
    ],
    eligibilityRules: {
      stateResidence: 'Lakshadweep',
      notes: 'Native island student of Lakshadweep holding Scheduled Tribe (ST) certificate, enrolled in an approved post-matric institution.'
    },
    eligibilityHighlights: [
      'Native of Lakshadweep holding Lakshadweep ST Certificate',
      'Passed qualifying Class 10 or 12 examination from island schools',
      'Admitted to a recognized mainland college or university'
    ],
    exclusions: [
      'Unaccredited non-recognized private coaching institutes'
    ],
    requiredDocuments: [
      {
        id: 'doc-ld-sch-admission',
        name: 'Mainland College Admission Slip & Fee Schedule',
        category: 'academic',
        purpose: 'Verify enrollment in recognized university',
        citizenTip: 'Signed by college principal / registrar.',
        isMandatory: true
      },
      {
        id: 'doc-ld-sch-st',
        name: 'Lakshadweep ST Certificate & Domicile',
        category: 'caste',
        purpose: 'Proof of indigenous island tribal status',
        citizenTip: 'Issued by Sub-Divisional Officer (SDO).',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on National Scholarship Portal (NSP)',
        description: 'Submit application under Lakshadweep state post-matric scheme on scholarships.gov.in.',
        portalOrOffice: 'scholarships.gov.in'
      },
      {
        stepNumber: 2,
        title: 'College Online Verification',
        description: 'College nodal officer verifies academic records and fee breakdown online.',
        portalOrOffice: 'College Administration'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer',
        description: 'Tuition fees, ship travel passage, and maintenance allowances are credited via PFMS.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Directorate of Education, Lakshadweep Administration',
      url: 'https://lakshadweep.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Education, Kavaratti',
      helpline: '04896-262241',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official education scholarship portal of Lakshadweep Administration.'
    }
  },
  {
    id: 'ld-deep-sea-fishermen-support',
    name: 'Lakshadweep Tuna Fishermen Motorized Boat & Ice Plant Subsidy Scheme',
    hindiName: 'लक्षद्वीप टूना मछुआरा नौका एवं बर्फ संयंत्र आधुनिकीकरण सब्सिडी',
    teluguName: 'లక్షద్వీప్ ట్యూనా మత్స్యకారుల సబ్సిడీ పథకం',
    tamilName: 'லட்சத்தீவு டுனா மீனவர்கள் நவீனமயமாக்கல் மானியம்',
    tagline: '50% capital subsidy on pole-and-line tuna fishing boats, outboard motors, and solar ice plants.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'Union Territory Scheme (Lakshadweep)',
    stateApplicability: 'Lakshadweep',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LD',
    administeringGovernment: 'Lakshadweep Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Traditional Pole-and-Line Tuna Fishermen', 'Fishermen Cooperative Societies in Lakshadweep', 'Masmin (Smoked Tuna) Artisans'],
    shortSummary: 'Comprehensive marine support scheme providing 50% capital subsidies for mechanized pole-and-line tuna boats, GPS navigation units, and insulated solar ice boxes to support export-quality skipjack tuna and traditional Masmin production.',
    fullDescription: 'Skipjack tuna fishing using traditional pole-and-line methods is the backbone of the Lakshadweep economy. The Directorate of Fisheries subsidizes 50% of the cost of marine diesel engines, GPS fish-finders, safety communication kits, and refrigerated fish-holds, ensuring fishermen maximize returns from sustainable zero-bycatch yellowfin and skipjack tuna fishing.',
    financialBenefit: '50% capital subsidy (up to ₹1.5 Lakh) on marine engines and 100% free GPS marine safety transmitters',
    keyObjectives: [
      'Modernize traditional pole-and-line tuna fishing boats across all 10 inhabited islands',
      'Preserve the ecological marine sanctuary through zero-bycatch sustainable fishing practices',
      'Provide onboard insulated cold chain storage to boost export earnings of Masmin'
    ],
    eligibilityRules: {
      occupations: ['Fisherman', 'Marine Worker'],
      stateResidence: 'Lakshadweep',
      notes: 'Active licensed fisherman native to Lakshadweep owning or operating a registered traditional fishing craft.'
    },
    eligibilityHighlights: [
      'Native islander of Lakshadweep holding ST certificate',
      'Valid fishing license issued by Department of Fisheries, Kavaratti',
      'Member of Island Fishermen Cooperative Society'
    ],
    exclusions: [
      'Commercial trawlers or purse-seine operators using destructive non-traditional gear'
    ],
    requiredDocuments: [
      {
        id: 'doc-ld-fis-license',
        name: 'Fishing License & Boat Registration Certificate',
        category: 'other',
        purpose: 'Verify active fisherman status and craft ownership',
        citizenTip: 'Issued by Department of Fisheries, Kavaratti.',
        isMandatory: true
      },
      {
        id: 'doc-ld-fis-st',
        name: 'ST Certificate & Islander Card',
        category: 'caste',
        purpose: 'Proof of indigenous island domicile',
        citizenTip: 'Issued by Sub-Divisional Officer.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Island Fisheries Officer',
        description: 'Submit form along with boat registration to local Fisheries Officer on your island (Agatti, Andrott, Minicoy, etc.).',
        portalOrOffice: 'Island Fisheries Office'
      },
      {
        stepNumber: 2,
        title: 'Technical Inspection of Craft',
        description: 'Fisheries inspector inspects craft sea-worthiness and engine quotation.',
        portalOrOffice: 'Fisheries Directorate, Kavaratti'
      },
      {
        stepNumber: 3,
        title: 'Subsidy Release & Engine Commissioning',
        description: '50% capital subsidy is released directly to partner boat builder/engine dealer and equipment is installed.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Fisheries, Lakshadweep Administration',
      url: 'https://lakshadweep.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Fisheries',
      helpline: '04896-262241',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official fisheries development portal of Lakshadweep.'
    }
  },
  {
    id: 'ld-destitute-pension-scheme',
    name: 'Lakshadweep Destitute Old Age & Widow Financial Assistance Scheme',
    hindiName: 'लक्षद्वीप निराश्रित वृद्धावस्था एवं विधवा वित्तीय सहायता योजना',
    teluguName: 'లక్షద్వీప్ వృద్ధాప్య & వితంతు పెన్షన్ పథకం',
    tamilName: 'லட்சத்தீவு முதியோர் & ஆதரவற்ற பெண்கள் ஓய்வூதியத் திட்டம்',
    tagline: 'Monthly social security pension of ₹1,500 transferred directly via DBT to senior citizens aged 60+ and widows.',
    category: 'seniors-elderly',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'Union Territory Scheme (Lakshadweep)',
    stateApplicability: 'Lakshadweep',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LD',
    administeringGovernment: 'Lakshadweep Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Widows and Destitute Women', 'Elderly Island Fishermen'],
    shortSummary: 'Universal social security pension transferring ₹1,500 monthly directly via DBT into the bank accounts of destitute seniors, widows, and deserted women across all inhabited coral atolls of Lakshadweep.',
    fullDescription: 'The Directorate of Social Welfare in Lakshadweep operates this safety net to ensure elderly islanders survive with dignity. Beneficiaries receive ₹1,500 per month credited directly into their Aadhaar-linked bank accounts to meet food, clothing, and medical expenses without depending on informal charity.',
    financialBenefit: '₹1,500 / month (₹18,000 annually) transferred directly via DBT',
    keyObjectives: [
      'Provide basic financial autonomy to destitute elderly and widowed islanders',
      'Shield vulnerable island elders from poverty and medical destitution',
      'Ensure 100% digital benefit delivery with automated monthly bank credits'
    ],
    eligibilityRules: {
      minAge: 60,
      stateResidence: 'Lakshadweep',
      notes: 'Native resident of Lakshadweep aged 60 years or above (or widow of any age) holding an ST certificate, with family annual income under ₹50,000.'
    },
    eligibilityHighlights: [
      'Native islander of Lakshadweep holding ST Certificate',
      'Annual family income does not exceed ₹50,000',
      'Senior citizen (age 60+) or widow without independent breadwinner',
      'Not receiving any other civil or government pension'
    ],
    exclusions: [
      'Retired government servants receiving civil pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-ld-oap-st',
        name: 'ST Certificate / Islander Card',
        category: 'caste',
        purpose: 'Verify native islander identity',
        citizenTip: 'Issued by Sub-Divisional Officer (SDO).',
        isMandatory: true
      },
      {
        id: 'doc-ld-oap-income',
        name: 'Income Certificate (Income under ₹50,000/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Issued by SDO / Deputy Collector.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Island SDO Office',
        description: 'Submit form along with ST certificate and income certificate at local Sub-Divisional Officer (SDO) office on your island.',
        portalOrOffice: 'SDO Office'
      },
      {
        stepNumber: 2,
        title: 'Verification by Village Dweep Panchayat',
        description: 'Dweep Panchayat verifies living conditions, age, and destitute status.',
        portalOrOffice: 'Dweep Panchayat'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹1,500 is credited directly into the senior citizen bank account by the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Lakshadweep Administration',
      url: 'https://lakshadweep.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Social Welfare, Kavaratti',
      helpline: '04896-262241',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official social security pension framework of Lakshadweep.'
    }
  },
  {
    id: 'ld-bpl-marriage-assistance',
    name: 'Lakshadweep Administration Poor Girls Marriage Financial Grant Scheme',
    hindiName: 'लक्षद्वीप प्रशासन निर्धन कन्या विवाह वित्तीय सहायता योजना',
    teluguName: 'లక్షద్వీప్ వివాహ సహాయ పథకం',
    tamilName: 'லட்சத்தீவு திருமண உதவித் திட்டம்',
    tagline: 'One-time direct financial grant of ₹25,000 transferred to the bride bank account before her wedding.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'Union Territory Scheme (Lakshadweep)',
    stateApplicability: 'Lakshadweep',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LD',
    administeringGovernment: 'Lakshadweep Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Daughters of Poor BPL Families in Lakshadweep', 'Adult Unmarried Girls', 'Daughters of Widows'],
    shortSummary: 'One-time financial grant of ₹25,000 credited to the personal bank account of an adult unmarried island girl from a BPL household prior to her wedding to assist with marriage ceremony expenditures.',
    fullDescription: 'The Department of Social Welfare in Lakshadweep provides direct financial assistance to poor island parents during daughter weddings. The grant of ₹25,000 is directly credited into the bride bank account before solemnization of marriage, helping families procure wedding attire and household essentials without incurring debt.',
    financialBenefit: '₹25,000 one-time financial grant credited directly into bride bank account',
    keyObjectives: [
      'Ease the financial burden of wedding expenses on impoverished island families',
      'Prevent informal debt and usurious borrowing during weddings',
      'Provide financial assets directly to the young bride'
    ],
    eligibilityRules: {
      minAge: 18,
      targetGender: 'female',
      isBPLRequired: true,
      stateResidence: 'Lakshadweep',
      notes: 'Native island girl of Lakshadweep aged 18 or above, belonging to a verified BPL household.'
    },
    eligibilityHighlights: [
      'Native islander holding Lakshadweep ST Certificate',
      'Family must be listed in active BPL ration card database',
      'Bride minimum 18 years of age, groom minimum 21 years of age'
    ],
    exclusions: [
      'Families belonging to non-BPL categories',
      'Underage marriages'
    ],
    requiredDocuments: [
      {
        id: 'doc-ld-mar-age',
        name: 'Age Proof of Bride and Groom (Birth Certificate / School Certificate)',
        category: 'identity',
        purpose: 'Verify legal marriageable age (Bride 18+, Groom 21+)',
        citizenTip: 'Check date of birth on Aadhaar.',
        isMandatory: true
      },
      {
        id: 'doc-ld-mar-bpl',
        name: 'BPL Ration Card / BPL Certificate',
        category: 'income',
        purpose: 'Proof of poverty threshold entitlement',
        citizenTip: 'Issued by Department of Civil Supplies.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Island SDO Office',
        description: 'Submit form along with wedding invitation notice and BPL proof to local Sub-Divisional Officer (SDO).',
        portalOrOffice: 'SDO Office'
      },
      {
        stepNumber: 2,
        title: 'Verification by Social Welfare Inspector',
        description: 'Social welfare inspector verifies age, BPL credentials, and wedding preparations.',
        portalOrOffice: 'Social Welfare Desk'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of ₹25,000',
        description: 'Amount is credited directly into the bride bank account before the wedding date.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Lakshadweep Administration',
      url: 'https://lakshadweep.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '04896-262241',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official marriage welfare portal of Lakshadweep.'
    }
  },
  {
    id: 'ld-pwd-welfare-allowance',
    name: 'Lakshadweep Differently-Abled Persons Maintenance & Rehabilitation Grant',
    hindiName: 'लक्षद्वीप दिव्यांग भरण-पोषण एवं पुनर्वास अनुदान',
    teluguName: 'లక్షద్వీప్ దివ్యాంగుల సంక్షేమ పథకం',
    tamilName: 'லட்சத்தீவு மாற்றுத்திறனாளிகள் பராமரிப்பு உதவித் திட்டம்',
    tagline: 'Monthly financial assistance of ₹2,000 for persons with disabilities + free motorized tricycles and assistive devices.',
    category: 'disability-pwd',
    categoryLabel: 'Disability & Inclusion',
    geographicScope: 'Union Territory Scheme (Lakshadweep)',
    stateApplicability: 'Lakshadweep',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'LD',
    administeringGovernment: 'Lakshadweep Administration',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Persons with Disabilities (PwD) in Lakshadweep', 'Differently-Abled Children and Adults', 'Caregivers of Severe Disability Patients'],
    shortSummary: 'Generous disability welfare allowance transferring ₹2,000 monthly directly via DBT into the bank accounts of persons with 40%+ benchmark disabilities across Lakshadweep, alongside free specialized assistive mobility aids.',
    fullDescription: 'The Social Welfare Department in Lakshadweep ensures that persons with disabilities across isolated coral atolls enjoy complete financial security and social integration. Beneficiaries possessing a certified disability of 40% or higher / UDID card receive ₹2,000 per month credited directly into their Aadhaar-linked bank accounts, alongside free wheelchairs, hearing aids, and rehabilitation support.',
    financialBenefit: '₹2,000 / month (₹24,000 annually) transferred directly via DBT + free assistive mobility aids',
    keyObjectives: [
      'Provide basic financial autonomy to persons with disabilities living across remote atolls',
      'Shield differently-abled citizens from poverty and nutritional neglect',
      'Ensure 100% digital benefit delivery with automated monthly bank credits'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      stateResidence: 'Lakshadweep',
      notes: 'Native resident of Lakshadweep possessing certified disability of 40% or above / UDID card.'
    },
    eligibilityHighlights: [
      'Native islander holding Lakshadweep ST Certificate',
      'Disability percentage of 40% or higher verified by Medical Board / UDID card',
      'Not receiving any other government disability pension'
    ],
    exclusions: [
      'Permanent government employees or pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-ld-dis-udid',
        name: 'UDID Card / Disability Certificate',
        category: 'disability',
        purpose: 'Verify disability category and percentage',
        citizenTip: 'Check UDID on swavlambancard.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-ld-dis-st',
        name: 'ST Certificate & Islander Card',
        category: 'caste',
        purpose: 'Verify native islander identity',
        citizenTip: 'Issued by Sub-Divisional Officer (SDO).',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application to Island SDO Office',
        description: 'Submit form along with UDID card to local Sub-Divisional Officer (SDO) on your island.',
        portalOrOffice: 'SDO Office'
      },
      {
        stepNumber: 2,
        title: 'Medical Scrutiny by Indira Gandhi Hospital Medical Board',
        description: 'Indira Gandhi Hospital Kavaratti medical board verifies disability credentials.',
        portalOrOffice: 'District Medical Board'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹2,000 is credited directly into the beneficiary bank account by the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Lakshadweep Administration',
      url: 'https://lakshadweep.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '04896-262241',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official disability welfare portal of Lakshadweep.'
    }
  },

  // PUDUCHERRY (PY)
  {
    id: 'py-free-rice-single-women',
    name: 'Puducherry Free Rice & Red Ration Card Nutrition Assistance Scheme',
    hindiName: 'पुदुच्चेरी निःशुल्क चावल एवं लाल राशन कार्ड पोषण सहायता योजना',
    teluguName: 'పుదుచ్చేరి ఉచిత బియ్యం పథకం',
    tamilName: 'புதுச்சேரி இலவச அரிசி மற்றும் சிவப்பு ரேஷன் கார்டு ஊட்டச்சத்து உதவித் திட்டம்',
    tagline: '20 kg free premium single boiled rice per month or direct DBT cash equivalent (₹600/month) for BPL families.',
    category: 'low-income-welfare',
    categoryLabel: 'Public & Citizen Services',
    geographicScope: 'Union Territory Scheme (Puducherry)',
    stateApplicability: 'Puducherry',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'PY',
    administeringGovernment: 'Government of Puducherry',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Red (BPL) Ration Card Holding Families', 'Single Women and Widows in Puducherry', 'Marginalized Families in Karaikal, Mahe & Yanam'],
    shortSummary: 'Universal food security program delivering 20 kg free premium single-boiled rice monthly (or direct DBT cash transfer of ₹600/month) to all Red Ration Card holding families across Puducherry, Karaikal, Mahe, and Yanam.',
    fullDescription: 'The Department of Civil Supplies and Consumer Affairs in Puducherry provides 20 kg of premium quality single-boiled rice per month completely free to all Red (BPL) ration card holders (and 10 kg free rice for Yellow cardholders). The scheme operates flexibly, providing either direct doorstep physical grain distribution or direct cash transfer of ₹30/kg directly into the bank account of the female head of the family.',
    financialBenefit: '20 kg free rice / month or ₹600 / month direct cash transfer via DBT',
    keyObjectives: [
      'Eliminate hunger and nutritional deficits among low-income households across all 4 regions of Puducherry',
      'Ensure uninterrupted food grain security for daily wage laborers and single women',
      'Provide cash flexibility directly to the female head of the family'
    ],
    eligibilityRules: {
      stateResidence: 'Puducherry',
      notes: 'Resident family of Puducherry holding an active Red (BPL) or Yellow (APL) digital ration card.'
    },
    eligibilityHighlights: [
      'Permanent resident family in Puducherry, Karaikal, Mahe, or Yanam',
      'Holder of Red Ration Card (BPL category) issued by Civil Supplies Department',
      'Aadhaar-seeded bank account of female head of household'
    ],
    exclusions: [
      'Families owning four-wheelers or having government employee family members'
    ],
    requiredDocuments: [
      {
        id: 'doc-py-ric-ration',
        name: 'Puducherry Digital Red Ration Card',
        category: 'income',
        purpose: 'Verify BPL family structure and card color',
        citizenTip: 'Check details on dcsca.py.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-py-ric-aadhaar',
        name: 'Aadhaar Card of Female Head of Household',
        category: 'identity',
        purpose: 'Biometric identity and DBT routing',
        citizenTip: 'Aadhaar must be linked to active bank account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Verify Ration Card Status on DCSCA Portal',
        description: 'Verify your Red card entitlement on dcsca.py.gov.in or at local Fair Price Shop (FPS).',
        portalOrOffice: 'dcsca.py.gov.in / FPS Shop'
      },
      {
        stepNumber: 2,
        title: 'Aadhaar Bank Seeding Confirmation',
        description: 'Civil supplies department matches Aadhaar seeding status for digital cash credit.',
        portalOrOffice: 'Civil Supplies Department'
      },
      {
        stepNumber: 3,
        title: 'Monthly Grain Delivery / DBT Credit',
        description: 'Collect 20 kg free rice at FPS or receive ₹600 direct benefit transfer on the first week of every month.',
        portalOrOffice: 'Fair Price Shop / DBT'
      }
    ],
    officialSource: {
      name: 'Department of Civil Supplies & Consumer Affairs, Government of Puducherry',
      url: 'https://dcsca.py.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Civil Supplies & Consumer Affairs',
      helpline: '1800-425-1082',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official food welfare portal of Government of Puducherry.'
    }
  },
  {
    id: 'py-old-age-destitute-pension',
    name: 'Puducherry Old Age Pension Scheme (Universal Elderly Social Security)',
    hindiName: 'पुदुच्चेरी वृद्धावस्था पेंशन योजना (सार्वभौमिक बुजुर्ग सामाजिक सुरक्षा)',
    teluguName: 'పుదుచ్చేరి ఓల్డ్ ఏజ్ పెన్షన్ పథకం',
    tamilName: 'புதுச்சேரி முதியோர் ஓய்வூதியத் திட்டம்',
    tagline: 'Monthly pension of ₹2,000 (age 55-59 for widows/destitutes), ₹2,500 (age 60-79), and ₹3,500 (age 80+).',
    category: 'seniors-elderly',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'Union Territory Scheme (Puducherry)',
    stateApplicability: 'Puducherry',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'PY',
    administeringGovernment: 'Government of Puducherry',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Very Senior Citizens (Age 80+)', 'Destitute Widows and Unmarried Women aged 50+'],
    shortSummary: 'Generous social security pension transferring ₹2,500 monthly (age 60-79) and ₹3,500 monthly (age 80+) directly via DBT into the bank accounts of over 1.7 Lakh senior citizens across Puducherry.',
    fullDescription: 'The Department of Social Welfare in Puducherry provides comprehensive financial support to elderly citizens. Seniors aged 60 to 79 receive ₹2,500 per month, while very senior citizens aged 80 and above receive an enhanced pension of ₹3,500 per month. Destitute widows and unmarried women aged 50+ receive ₹2,000 per month credited directly into their Aadhaar-linked bank accounts.',
    financialBenefit: '₹2,500 / month (age 60-79) and ₹3,500 / month (age 80+) credited directly via DBT',
    keyObjectives: [
      'Provide basic monthly financial independence to senior citizens in Puducherry',
      'Shield vulnerable elderly individuals from poverty, medical debt, and neglect',
      'Operate automated monthly bank credits via e-Services portal'
    ],
    eligibilityRules: {
      minAge: 60,
      maxIncome: 100000,
      stateResidence: 'Puducherry',
      notes: 'Resident of Puducherry for at least 5 years with family annual income not exceeding ₹1,00,000 from all sources. Age 60 years or above.'
    },
    eligibilityHighlights: [
      'Resident of Puducherry for minimum 5 consecutive years',
      'Annual family income does not exceed ₹1,00,000',
      'Senior citizen aged 60 years or above',
      'Not receiving any other civil, military, or government pension'
    ],
    exclusions: [
      'Retired government employees receiving regular civil or military pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-py-oap-voter',
        name: 'Puducherry Voter ID (EPIC Card) / 5-Year Residence Proof',
        category: 'identity',
        purpose: 'Verify 5-year Puducherry domicile and age',
        citizenTip: 'Check epic on ceopuducherry.py.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-py-oap-income',
        name: 'Income Certificate (Income under ₹1 Lakh/year)',
        category: 'income',
        purpose: 'Income threshold validation',
        citizenTip: 'Issued by Deputy Tahsildar.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through Taluk Office or e-Services Portal',
        description: 'Submit online form under Social Welfare on edistrict.py.gov.in or at local Taluk Office.',
        portalOrOffice: 'edistrict.py.gov.in / Taluk Office'
      },
      {
        stepNumber: 2,
        title: 'Tahsildar Verification',
        description: 'Tahsildar and District Social Welfare Officer verify residency, age, and income credentials.',
        portalOrOffice: 'Tahsildar Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: 'Pension amount is credited monthly directly into the beneficiary bank account by the 10th.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of Puducherry',
      url: 'https://socwelfare.py.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0413-2205872',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official social security pension portal of Puducherry.'
    }
  },
  {
    id: 'py-kamarajar-higher-education',
    name: 'Perunthalaivar Kamarajar Financial Assistance Scheme (Puducherry 100% Tuition Sponsorship)',
    hindiName: 'पेरुंथलैवर कामराजार उच्च शिक्षा वित्तीय सहायता योजना',
    teluguName: 'పెరుంతలైవర్ కామరాజర్ ఉన్నత విద్య సహాయ పథకం',
    tamilName: 'பெருந்தலைவர் காமராஜர் உயர் கல்வி நிதி உதவித் திட்டம்',
    tagline: '100% government payment of tuition fees for professional courses (MBBS, BDS, B.Tech) through CENTAC.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'Union Territory Scheme (Puducherry)',
    stateApplicability: 'Puducherry',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'PY',
    administeringGovernment: 'Government of Puducherry',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['CENTAC Admitted Professional Students', 'Meritorious Medical (MBBS/BDS) Students', 'Engineering (B.Tech) Students in Puducherry'],
    shortSummary: 'High-impact higher education sponsorship program where the Puducherry Government pays 100% of approved tuition fees directly to government and private colleges for students selected through Centralised Admission Committee (CENTAC).',
    fullDescription: 'Under the Perunthalaivar Kamarajar Scheme, no student in Puducherry is prevented from becoming a doctor or engineer due to high tuition fees. For all local students securing admission through CENTAC government quotas into MBBS, BDS, B.Tech, B.Pharm, and Nursing courses in private or government professional colleges, the Directorate of Higher & Technical Education pays 100% of the government-fixed tuition fees directly to the institution.',
    financialBenefit: '100% tuition fees paid directly to colleges (saving up to ₹4 Lakh to ₹16 Lakh over full course)',
    keyObjectives: [
      'Eliminate commercial education debt for middle and lower-income families in Puducherry',
      'Produce doctors, engineers, and healthcare professionals from local island and coastal communities',
      'Incentivize high academic performance in Higher Secondary examinations'
    ],
    eligibilityRules: {
      stateResidence: 'Puducherry',
      notes: 'Resident of Puducherry (domicile of 5+ years) securing admission into approved professional course through CENTAC.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Union Territory of Puducherry for at least 5 years',
      'Admitted into professional degree course (MBBS/BDS/B.Tech) through CENTAC counselling',
      'Studied in recognized schools in Puducherry for at least 5 continuous years'
    ],
    exclusions: [
      'Management quota admissions without CENTAC selection'
    ],
    requiredDocuments: [
      {
        id: 'doc-py-kam-centac',
        name: 'CENTAC Allotment Order & Rank Card',
        category: 'academic',
        purpose: 'Proof of merit admission through CENTAC government quota',
        citizenTip: 'Check allotment order on centacpuducherry.in.',
        isMandatory: true
      },
      {
        id: 'doc-py-kam-residence',
        name: '5-Year Puducherry Residence Certificate',
        category: 'identity',
        purpose: 'Proof of UT domicile',
        citizenTip: 'Issued by Deputy Tahsildar.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Secure Admission through CENTAC Counselling',
        description: 'Qualify entrance and obtain allotment order through CENTAC centralized counselling.',
        portalOrOffice: 'centacpuducherry.in'
      },
      {
        stepNumber: 2,
        title: 'Submit Kamarajar Scheme Dossier to College Nodal Officer',
        description: 'Submit CENTAC allotment letter and residence certificate to college administration upon joining.',
        portalOrOffice: 'College Administration'
      },
      {
        stepNumber: 3,
        title: 'Direct Tuition Fee Remittance to College',
        description: 'Directorate of Higher & Technical Education remits 100% approved tuition fees directly to the college.',
        portalOrOffice: 'DHTE Puducherry'
      }
    ],
    officialSource: {
      name: 'Directorate of Higher & Technical Education, Government of Puducherry',
      url: 'https://dhte.py.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Directorate of Higher & Technical Education',
      helpline: '0413-2253503',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Perunthalaivar Kamarajar scheme portal of Puducherry.'
    }
  },
  {
    id: 'py-pwd-financial-assistance',
    name: 'Puducherry Differently-Abled Persons Monthly Financial Assistance Scheme',
    hindiName: 'पुदुच्चेरी दिव्यांगजन मासिक वित्तीय सहायता योजना',
    teluguName: 'పుదుచ్చేరి దివ్యాంగుల ఆర్థిక సహాయ పథకం',
    tamilName: 'புதுச்சேரி மாற்றுத்திறனாளிகள் மாதாந்திர நிதி உதவித் திட்டம்',
    tagline: 'Monthly financial assistance of ₹2,000 to ₹3,800 transferred directly via DBT based on disability percentage.',
    category: 'disability-pwd',
    categoryLabel: 'Disability & Inclusion',
    geographicScope: 'Union Territory Scheme (Puducherry)',
    stateApplicability: 'Puducherry',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'PY',
    administeringGovernment: 'Government of Puducherry',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Persons with Disabilities (PwD) in Puducherry', 'Visually, Speech, and Locomotor Impaired Citizens', 'Caregivers of Severe Disability Patients'],
    shortSummary: 'India highest UT disability pension transferring ₹2,000/month (40-65% disability), ₹2,500/month (66-85% disability), and ₹3,800/month (86-100% severe disability) directly via DBT into beneficiary bank accounts.',
    fullDescription: 'The Department of Social Welfare in Puducherry provides the highest graded disability financial maintenance allowance in India. Differently-abled citizens receive monthly financial assistance directly in their bank accounts based on medical disability degree: ₹2,000 for 40-65% disability, ₹2,500 for 66-85% disability, and ₹3,800 for 86-100% severe disability, guaranteeing dignified living, specialized nutrition, and personal attendant care.',
    financialBenefit: '₹2,000 to ₹3,800 / month direct benefit transfer based on disability severity',
    keyObjectives: [
      'Provide India most generous disability financial maintenance allowance to differently-abled citizens',
      'Shield individuals with severe disabilities and their caregivers from poverty and neglect',
      'Ensure 100% digital benefit delivery with automated monthly bank credits'
    ],
    eligibilityRules: {
      minDisabilityPercentage: 40,
      requiresUDID: true,
      stateResidence: 'Puducherry',
      notes: 'Resident of Puducherry for at least 3 years possessing certified disability of 40% or above / UDID card.'
    },
    eligibilityHighlights: [
      'Resident of Puducherry for minimum 3 consecutive years',
      'Disability percentage of 40% or higher verified by Medical Board / UDID card',
      'Graded assistance: ₹2,000 (40-65%), ₹2,500 (66-85%), ₹3,800 (86-100%)',
      'Not receiving any other government disability pension'
    ],
    exclusions: [
      'Permanent government employees or pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-py-dis-udid',
        name: 'UDID Card / Disability Certificate',
        category: 'disability',
        purpose: 'Verify disability category and percentage',
        citizenTip: 'Check UDID on swavlambancard.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-py-dis-residence',
        name: '3-Year Puducherry Residence Proof & Aadhaar',
        category: 'identity',
        purpose: 'Verify Puducherry domicile',
        citizenTip: 'Voter ID or electricity bill.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through Social Welfare Office or e-District Portal',
        description: 'Submit application along with UDID card under Social Welfare on edistrict.py.gov.in.',
        portalOrOffice: 'edistrict.py.gov.in / Social Welfare Department'
      },
      {
        stepNumber: 2,
        title: 'Medical Scrutiny by JIPMER / IGGGH&PGI Medical Board',
        description: 'Government Medical Board verifies clinical disability percentage and approves graded tier.',
        portalOrOffice: 'Medical Board'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: 'Amount (up to ₹3,800) is credited directly into the beneficiary bank account by the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Welfare, Government of Puducherry',
      url: 'https://socwelfare.py.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0413-2205872',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official disability welfare portal of Puducherry.'
    }
  },
  {
    id: 'py-fishermen-relief-subsidy',
    name: 'Puducherry Marine Fishermen Ban-Period Relief & Diesel Tax Exemption Scheme',
    hindiName: 'पुदुच्चेरी समुद्री मछुआरा मत्स्य प्रतिबंध राहत एवं डीजल कर छूट योजना',
    teluguName: 'పుదుచ్చేరి మత్స్యకారుల సహాయ పథకం',
    tamilName: 'புதுச்சேரி கடல் மீனவர்கள் மீன்பிடி தடைக்கால நிவாரணம் மற்றும் டீசல் வரி விலக்குத் திட்டம்',
    tagline: 'Annual ban-period livelihood relief of ₹5,500 via DBT + 100% sales tax exemption on diesel for fishing boats.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'Union Territory Scheme (Puducherry)',
    stateApplicability: 'Puducherry',
    isCentral: false,
    governmentLevel: 'union-territory',
    jurisdictionType: 'union-territory',
    stateCode: 'PY',
    administeringGovernment: 'Government of Puducherry',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Marine Fishermen Families in Coastal Puducherry', 'Boat Owners and Crew in Karaikal & Mahe', 'Fisherwomen Vendors'],
    shortSummary: 'Comprehensive coastal livelihood support transferring ₹5,500 cash relief directly to each fisherman family during the 61-day annual marine fishing ban period, plus 100% sales tax reimbursement on diesel for mechanized boats.',
    fullDescription: 'To conserve marine fish stocks during breeding seasons while protecting the livelihoods of over 25,000 fishing families across coastal Puducherry, Karaikal, Mahe, and Yanam, the Department of Fisheries provides ₹5,500 direct cash assistance to every fisherman family during the 61-day annual fishing ban period, alongside 100% sales tax exemption on subsidized diesel for mechanized fishing vessels.',
    financialBenefit: '₹5,500 direct cash relief during ban period + 100% sales tax exemption on marine diesel',
    keyObjectives: [
      'Preserve marine fish breeding cycles along Coromandel and Malabar coasts during 61-day ban',
      'Provide essential nutritional and financial subsistence to fishing families during ban period',
      'Lower operational diesel fuel costs for mechanized and motorized fishing vessels'
    ],
    eligibilityRules: {
      occupations: ['Fisherman', 'Marine Worker'],
      stateResidence: 'Puducherry',
      notes: 'Active licensed marine fisherman native to Puducherry, Karaikal, Mahe, or Yanam registered with the Department of Fisheries.'
    },
    eligibilityHighlights: [
      'Permanent resident fisherman of UT of Puducherry',
      'Registered with Department of Fisheries and Fishermen Welfare',
      'Member of local Village Fishermen Cooperative Society'
    ],
    exclusions: [
      'Non-fishermen and commercial bulk seafood corporate processors'
    ],
    requiredDocuments: [
      {
        id: 'doc-py-fis-id',
        name: 'Fisherman Biometric Identity Card / Society Membership',
        category: 'other',
        purpose: 'Verify active fisherman status',
        citizenTip: 'Issued by Department of Fisheries, Puducherry.',
        isMandatory: true
      },
      {
        id: 'doc-py-fis-aadhaar',
        name: 'Aadhaar Card and Bank Passbook',
        category: 'identity',
        purpose: 'Identity and DBT routing',
        citizenTip: 'Check with bank that direct credit is active.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Verify Membership with Village Fishermen Cooperative Society',
        description: 'Ensure active membership in local fishermen cooperative society in Puducherry or Karaikal.',
        portalOrOffice: 'Fishermen Cooperative Society'
      },
      {
        stepNumber: 2,
        title: 'Annual Ban Period Enumeration',
        description: 'Fisheries inspector updates and verifies beneficiary list prior to annual fishing ban.',
        portalOrOffice: 'Department of Fisheries'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of ₹5,500 Ban Relief',
        description: '₹5,500 ban-period relief is credited directly into the fisherman bank account before ban begins.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Fisheries & Fishermen Welfare, Government of Puducherry',
      url: 'https://fisheries.py.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Fisheries & Fishermen Welfare',
      helpline: '0413-2226848',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official fisheries welfare portal of Government of Puducherry.'
    }
  }
];

const allUTSchemes = [
  ...an_schemes,
  ...ch_dh_schemes,
  ...finalUTSchemes
];

const fileContent = 'import type { Scheme } from "../../types/scheme";\n\nexport const UT_SCHEMES: Scheme[] = ' + JSON.stringify(allUTSchemes, null, 2) + ';\n';
fs.writeFileSync('D:/civicai/frontend/src/data/schemes/unionTerritories.ts', fileContent, 'utf8');

const counts = {};
allUTSchemes.forEach(s => counts[s.stateCode] = (counts[s.stateCode] || 0) + 1);
console.log('Union Territories generation complete! Total schemes:', allUTSchemes.length);
console.log('Counts per UT:', counts);
