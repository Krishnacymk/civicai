const fs = require('fs');

const westSchemes = [
  // GOA (GA)
  {
    id: 'ga-griha-aadhar-scheme',
    name: 'Griha Aadhar Scheme (Goa Monthly Homemaker Inflation Allowance)',
    hindiName: 'गृह आधार योजना (गोवा गृहिणी मासिक वित्तीय सहायता)',
    teluguName: 'గృహ ఆధార్ పథకం (గోవా)',
    tamilName: 'கிருஹ ஆதார் திட்டம் (கோவா)',
    tagline: 'Monthly financial assistance of ₹1,500 credited directly to homemakers to alleviate household cost-of-living burdens.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Goa)',
    stateApplicability: 'Goa',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GA',
    administeringGovernment: 'Government of Goa',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Goan Homemakers & Housewives', 'Low & Middle-Income Families', 'Women Heads of Households'],
    shortSummary: 'Direct benefit transfer of ₹1,500 per month credited to the personal bank account of married women and homemakers in Goa whose family income is below ₹3 Lakh per annum.',
    fullDescription: 'The Griha Aadhar Scheme mitigates the impact of price rise and inflation on middle and low-income families across Goa. Administered by the Directorate of Women & Child Development, the scheme recognizes the vital domestic role of housewives by transferring ₹1,500 monthly directly into the woman bank account, empowering her to meet grocery, nutritional, and family health expenditures.',
    financialBenefit: '₹1,500 / month (₹18,000 annually) transferred directly via DBT',
    keyObjectives: [
      'Alleviate domestic cost-of-living burdens for middle and lower-income Goan households',
      'Provide individual financial independence to homemakers and mothers',
      'Ensure direct digital benefit delivery with zero administrative intermediaries'
    ],
    eligibilityRules: {
      minAge: 18,
      targetGender: 'female',
      maxIncome: 300000,
      stateResidence: 'Goa',
      notes: 'Married woman/homemaker who has resided in Goa for at least 15 years, with combined family gross annual income from all sources not exceeding ₹3,00,000.'
    },
    eligibilityHighlights: [
      'Homemaker residing in Goa for minimum 15 consecutive years (15-year residence certificate)',
      'Combined annual family income from all sources must not exceed ₹3,00,000',
      'Individual bank account in Goa with Aadhaar seeding'
    ],
    exclusions: [
      'Government employees and income tax paying households',
      'Families where any member is already receiving financial assistance under similar state schemes'
    ],
    requiredDocuments: [
      {
        id: 'doc-ga-ga-residence',
        name: '15-Year Residence Certificate',
        category: 'identity',
        purpose: 'Verify 15 years continuous domicile in Goa',
        citizenTip: 'Issued by Mamlatdar of the respective Taluka.',
        isMandatory: true
      },
      {
        id: 'doc-ga-ga-income',
        name: 'Income Certificate (Family income < ₹3 Lakh)',
        category: 'income',
        purpose: 'Income eligibility verification',
        citizenTip: 'Issued by competent revenue authority (Mamlatdar).',
        isMandatory: true
      },
      {
        id: 'doc-ga-ga-marriage',
        name: 'Marriage Certificate / Ration Card',
        category: 'identity',
        purpose: 'Proof of marriage and family unit structure',
        citizenTip: 'Civil marriage registration certificate issued in Goa.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application at Village Panchayat / Municipality / DWCD',
        description: 'Collect and submit form along with documents at local Village Panchayat, Municipality, or DWCD office.',
        portalOrOffice: 'Directorate of Women & Child Development, Panaji / Taluka Office'
      },
      {
        stepNumber: 2,
        title: 'Verification by Child Development Project Officer (CDPO)',
        description: 'CDPO verifies residence certificate, income ceiling, and bank account credentials.',
        portalOrOffice: 'Taluka CDPO Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Credit',
        description: '₹1,500 monthly grant is credited directly into the homemaker bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Directorate of Women and Child Development, Government of Goa',
      url: 'https://dwcd.goa.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women and Child Development Department',
      helpline: '0832-2426112',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Griha Aadhar portal managed by Goa DWCD.'
    }
  },
  {
    id: 'ga-dayanand-social-security',
    name: 'Dayanand Social Security Scheme (Goa Universal Social Security Pensions)',
    hindiName: 'दयानंद सामाजिक सुरक्षा योजना (गोवा सामाजिक सुरक्षा पेंशन)',
    teluguName: 'దయానంద్ సోషల్ సెక్యూరిటీ పథకం (గోవా)',
    tamilName: 'தயானந்த் சமூக பாதுகாப்புத் திட்டம் (கோவா)',
    tagline: 'Monthly pension of ₹2,000 to ₹3,500 for senior citizens, widows, disabled persons, and single women.',
    category: 'pension',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'State Scheme (Goa)',
    stateApplicability: 'Goa',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GA',
    administeringGovernment: 'Government of Goa',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60 and above', 'Widows and Single Women', 'Persons with Severe Disabilities', 'HIV/Cancer Patients'],
    shortSummary: 'Generous social security pension transferring ₹2,000/month for senior citizens and widows, and up to ₹3,500/month for persons with severe disabilities across Goa.',
    fullDescription: 'The Dayanand Social Security Scheme (DSSS) provides one of the highest monthly social security allowances in India. Administered by the Directorate of Social Welfare, the scheme grants ₹2,000 monthly to senior citizens aged 60+ and widows, ₹2,500 for single unmarried women above 45, and up to ₹3,500 monthly for citizens with disability percentage of 90% or above, providing comprehensive dignity in old age and adversity.',
    financialBenefit: '₹2,000 to ₹3,500 / month direct benefit transfer based on vulnerability category',
    keyObjectives: [
      'Provide substantial financial independence to elderly and disabled citizens of Goa',
      'Shield single women, destitute widows, and orphan children from destitution',
      'Ensure uninterrupted automated monthly bank credits'
    ],
    eligibilityRules: {
      maxIncome: 150000,
      stateResidence: 'Goa',
      notes: 'Resident of Goa for at least 15 years with family annual income under ₹1.5 Lakh. Age 60+ for seniors, widows of any age, PwD with 40%+ disability.'
    },
    eligibilityHighlights: [
      'Resident of Goa for minimum 15 consecutive years',
      'Annual family income not exceeding ₹1,50,000 from all sources',
      'Senior citizens (age 60+), widows, or persons with disability (40%+)',
      'Not receiving any other pension from government or autonomous bodies'
    ],
    exclusions: [
      'Civil/military government pensioners and EPF pension recipients'
    ],
    requiredDocuments: [
      {
        id: 'doc-ga-dss-residence',
        name: '15-Year Residence Certificate',
        category: 'identity',
        purpose: 'Verify 15-year Goan domicile status',
        citizenTip: 'Obtain from Mamlatdar office.',
        isMandatory: true
      },
      {
        id: 'doc-ga-dss-income',
        name: 'Income Certificate (Income under ₹1.5 Lakh/year)',
        category: 'income',
        purpose: 'Verify income ceiling requirement',
        citizenTip: 'Issued by Mamlatdar.',
        isMandatory: true
      },
      {
        id: 'doc-ga-dss-disability',
        name: 'Disability Certificate / Medical Board Certificate',
        category: 'medical',
        purpose: 'Required for PwD category applicants',
        citizenTip: 'Issued by Goa Medical College (GMC) Medical Board.',
        isMandatory: false
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application at Directorate of Social Welfare',
        description: 'Submit form and verified documents to Directorate of Social Welfare, Panaji or Taluka Welfare Office.',
        portalOrOffice: 'Directorate of Social Welfare, Panaji / Taluka Office'
      },
      {
        stepNumber: 2,
        title: 'Scrutiny and Sanction Order',
        description: 'Department verifies records and issues formal pension sanction order.',
        portalOrOffice: 'Social Welfare Department'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: 'Pension amount is credited directly into beneficiary bank account by the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Directorate of Social Welfare, Government of Goa',
      url: 'https://socialwelfare.goa.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Welfare Department',
      helpline: '0832-2223784',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal of the Dayanand Social Security Scheme Goa.'
    }
  },
  {
    id: 'ga-deen-dayal-swasthya-seva',
    name: 'Deen Dayal Swasthya Seva Yojana (DDSSY Goa Universal Cashless Health Cover)',
    hindiName: 'दीन दयाल स्वास्थ्य सेवा योजना (गोवा कैशलेस स्वास्थ्य बीमा)',
    teluguName: 'దీన్ దయాల్ స్వాస్థ్య సేవా పథకం (గోవా)',
    tamilName: 'தீன் தயாள் சுவாஸ்திய சேவா திட்டம் (கோவா)',
    tagline: 'Cashless hospitalization coverage of ₹2.5 Lakh to ₹4 Lakh per family per year for all residents of Goa.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Goa)',
    stateApplicability: 'Goa',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GA',
    administeringGovernment: 'Government of Goa',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['All Goan Resident Families (5+ Years Domicile)', 'Informal Sector Workers', 'Middle-Class Families'],
    shortSummary: 'Universal biometric smart card health insurance providing ₹2.5 Lakh (family of 3 or less) to ₹4 Lakh (family of 4 or more) cashless coverage across 440+ medical and surgical procedures in private and government hospitals.',
    fullDescription: 'DDSSY provides comprehensive inpatient medical protection for all Goan residents. A family of up to 3 members receives annual coverage of ₹2.5 Lakh, while families with 4 or more members receive ₹4 Lakh annually. The scheme covers specialized tertiary surgeries, cardiac stenting, joint replacements, and ICU stays across empaneled private hospitals in Goa and neighboring Karnataka/Maharashtra.',
    financialBenefit: '₹2,50,000 to ₹4,00,000 / family / year cashless hospitalization coverage',
    keyObjectives: [
      'Eliminate out-of-pocket medical debts for Goan resident families',
      'Provide cashless choice of high-quality private multi-specialty hospitals',
      'Maintain universal digital health coverage through dedicated DDSSY smart cards'
    ],
    eligibilityRules: {
      stateResidence: 'Goa',
      notes: 'Any family residing in Goa for at least 5 consecutive years possessing a 5-year residence certificate or valid Goan ration card.'
    },
    eligibilityHighlights: [
      'Continuous residence in Goa for at least 5 years',
      'Eligible families receive a DDSSY Smart Card upon paying nominal annual registration fee (₹500 for general, ₹250 for OBC/SC/ST)',
      'Covers pre-existing diseases from day one with zero waiting period'
    ],
    exclusions: [
      'Central and State Government permanent employees eligible for government medical reimbursement'
    ],
    requiredDocuments: [
      {
        id: 'doc-ga-dds-residence',
        name: '5-Year Residence Certificate / Ration Card',
        category: 'identity',
        purpose: 'Verify 5 years domicile in Goa',
        citizenTip: 'Issued by Mamlatdar.',
        isMandatory: true
      },
      {
        id: 'doc-ga-dds-aadhaar',
        name: 'Aadhaar Card of All Family Members',
        category: 'identity',
        purpose: 'Biometric registration and member linkage',
        citizenTip: 'Aadhaar is mandatory for all members being added to card.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online or at GoaOnline / CSC Kendra',
        description: 'Submit DDSSY application on goaonline.gov.in or nearest Goa Electronics Limited (GEL) counter.',
        portalOrOffice: 'goaonline.gov.in / GEL Kendra'
      },
      {
        stepNumber: 2,
        title: 'Pay Nominal Registration Fee & Collect Card',
        description: 'Pay nominal fee (₹250 - ₹500) and collect your chipped DDSSY smart card.',
        portalOrOffice: 'GEL Service Center'
      },
      {
        stepNumber: 3,
        title: 'Cashless Admission at Hospital',
        description: 'Present DDSSY card at any empaneled hospital helpdesk for cashless hospitalization and surgery.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'Directorate of Health Services, Government of Goa',
      url: 'https://ddssy.goa.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Directorate of Health Services',
      helpline: '0832-2415174 / 104',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official DDSSY portal of Directorate of Health Services Goa.'
    }
  },
  {
    id: 'ga-laadli-laxmi-scheme',
    name: 'Laadli Laxmi Scheme (Goa Financial Asset Grant for Daughters)',
    hindiName: 'लाडली लक्ष्मी योजना (गोवा कन्या वित्तीय सुरक्षा अनुदान)',
    teluguName: 'లాడ్లీ లక్ష్మి పథకం (గోవా)',
    tamilName: 'லாட்லி லக்ஷ்மி திட்டம் (கோவா)',
    tagline: 'Fixed deposit of ₹1 Lakh granted to Goan girls upon reaching age 18 to support marriage or higher education.',
    category: 'education',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Goa)',
    stateApplicability: 'Goa',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GA',
    administeringGovernment: 'Government of Goa',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Goan Girls aged 18 to 40 years', 'Young Women entering Marriage', 'Girls pursuing Higher Education'],
    shortSummary: 'Financial grant of ₹1,00,000 deposited in bank fixed deposit in the name of the girl upon turning 18, which can be withdrawn with interest upon marriage or for self-employment/higher studies.',
    fullDescription: 'The Laadli Laxmi Scheme was launched in Goa to eliminate discrimination against the girl child, eradicate female foeticide, and protect parents from wedding debts. Under this scheme, any Goan girl who turns 18 and registers with the Women & Child Development Department receives ₹1,00,000 in a dedicated bank fixed deposit, withdrawable when she contracts a legal marriage or reaches age 40.',
    financialBenefit: '₹1,00,000 fixed deposit grant + accrued interest',
    keyObjectives: [
      'Eradicate gender bias and enhance girl child value in society',
      'Provide financial security for young women during marriage or higher education',
      'Ensure every Goan girl starts adult life with an asset in her own name'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 40,
      targetGender: 'female',
      stateResidence: 'Goa',
      notes: 'Girl must be born in Goa and resident for at least 15 years (or non-Goa born resident for 25 years with parent resident for 15 years).'
    },
    eligibilityHighlights: [
      'Girl resident of Goa for minimum 15 years (or 25 years if born outside Goa)',
      'Completed 18 years of age (apply between age 18 and 40)',
      'Single/unmarried at time of application; funds mature upon marriage'
    ],
    exclusions: [
      'Applications made after solemnization of marriage without prior registration'
    ],
    requiredDocuments: [
      {
        id: 'doc-ga-ll-birth',
        name: 'Birth Certificate of the Applicant Girl',
        category: 'identity',
        purpose: 'Proof of age and place of birth',
        citizenTip: 'Civil registration birth certificate issued in Goa.',
        isMandatory: true
      },
      {
        id: 'doc-ga-ll-residence',
        name: '15-Year Residence Certificate',
        category: 'identity',
        purpose: 'Verify 15-year Goan domicile status',
        citizenTip: 'Issued by Mamlatdar.',
        isMandatory: true
      },
      {
        id: 'doc-ga-ll-aadhaar',
        name: 'Aadhaar Card and Bank Account Details',
        category: 'identity',
        purpose: 'Biometric identity and fixed deposit account opening',
        citizenTip: 'Bank must be an empaneled commercial or state cooperative bank.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application Online on GoaOnline or at DWCD Office',
        description: 'Fill form on goaonline.gov.in or submit at Directorate of Women & Child Development, Panaji.',
        portalOrOffice: 'goaonline.gov.in / DWCD Panaji'
      },
      {
        stepNumber: 2,
        title: 'Verification and Sanction Order Issuance',
        description: 'DWCD verifies domicile, birth, and age records and issues formal sanction order.',
        portalOrOffice: 'DWCD Office'
      },
      {
        stepNumber: 3,
        title: 'Fixed Deposit Creation & Withdrawal upon Marriage',
        description: '₹1 Lakh is deposited into a bank FD; upon marriage, submit marriage certificate to withdraw full amount.',
        portalOrOffice: 'Bank Branch'
      }
    ],
    officialSource: {
      name: 'Directorate of Women & Child Development, Government of Goa',
      url: 'https://dwcd.goa.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '0832-2426112',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Laadli Laxmi portal of Goa DWCD.'
    }
  },
  {
    id: 'ga-kanya-dhan-scheme',
    name: 'Goa Kanya Dhan Scheme (Scholarship & Fixed Maturity for SC/ST Girl Students)',
    hindiName: 'गोवा कन्या धन योजना (अनुसूचित जाति/जनजाति बालिका शिक्षा प्रोत्साहन)',
    teluguName: 'గోవా కన్యా ధన్ పథకం',
    tamilName: 'கோவா கன்யா தன் திட்டம்',
    tagline: 'Fixed deposit bond of ₹25,000 deposited at birth and maturing with interest when girl clears Class 10.',
    category: 'education',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Goa)',
    stateApplicability: 'Goa',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GA',
    administeringGovernment: 'Government of Goa',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['SC and ST Girl Children', 'Tribal Students', 'Low-Income Female Students'],
    shortSummary: 'Targeted empowerment scheme providing ₹25,000 fixed deposit investment in the name of SC/ST baby girls born in Goa, maturing with substantial compound interest when she clears Class 10.',
    fullDescription: 'The Kanya Dhan Scheme operates under the Directorate of Tribal Welfare and Social Welfare in Goa. Specifically created to improve educational retention and reduce dropout rates among Scheduled Tribe and Scheduled Caste girls, the state deposits ₹25,000 in a fixed deposit upon institutional birth. The deposit matures when the girl student successfully clears the SSC (Class 10) board examination, providing substantial funds to pursue higher education.',
    financialBenefit: '₹25,000 fixed deposit at birth + compound interest (yields ~₹60,000 - ₹80,000 at age 16)',
    keyObjectives: [
      'Incentivize high school matriculation among SC and ST girl students in Goa',
      'Provide financial assets directly to tribal daughters upon completing Class 10',
      'Eliminate school dropouts in rural forest and mining talukas'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Goa',
      notes: 'Girl child born to SC or ST parents who have resided in Goa for at least 15 years.'
    },
    eligibilityHighlights: [
      'Girl child born in a certified SC or ST family in Goa',
      'Parents must possess 15-year residence certificate in Goa',
      'Child must be enrolled in a recognized school and pass Class 10 SSC exam'
    ],
    exclusions: [
      'Families belonging to non-SC/ST categories'
    ],
    requiredDocuments: [
      {
        id: 'doc-ga-kd-caste',
        name: 'SC / ST Caste Certificate of Parents',
        category: 'caste',
        purpose: 'Category entitlement verification',
        citizenTip: 'Issued by Deputy Collector / SDO.',
        isMandatory: true
      },
      {
        id: 'doc-ga-kd-birth',
        name: 'Birth Certificate of Girl Child',
        category: 'identity',
        purpose: 'Proof of birth in Goa',
        citizenTip: 'Must be issued by local Civil Registrar.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through Directorate of Tribal Welfare',
        description: 'Submit application within 1 year of child birth to Directorate of Tribal Welfare or Social Welfare.',
        portalOrOffice: 'Directorate of Tribal Welfare, Panaji'
      },
      {
        stepNumber: 2,
        title: 'Fixed Deposit Certificate Handover',
        description: 'Department issues fixed deposit bond of ₹25,000 in the name of the infant girl.',
        portalOrOffice: 'Bank Branch / Department'
      },
      {
        stepNumber: 3,
        title: 'Maturity Withdrawal after Class 10 Passing',
        description: 'Submit SSC passing marksheet to withdraw matured principal and interest for higher education.',
        portalOrOffice: 'Bank Branch'
      }
    ],
    officialSource: {
      name: 'Directorate of Tribal Welfare, Government of Goa',
      url: 'https://tribalwelfare.goa.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Tribal Welfare Department',
      helpline: '0832-2438024',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official scheme portal of Goa Tribal Welfare Directorate.'
    }
  },

  // GUJARAT (GJ)
  {
    id: 'gj-mukhyamantri-amrutam-maa',
    name: 'Mukhyamantri Amrutam / PM-JAY MAA Yojana (Gujarat Cashless Health Cover)',
    hindiName: 'मुख्यमंत्री अमृतम (मा योजना - गुजरात कैशलेस स्वास्थ्य सुरक्षा)',
    teluguName: 'ముఖ్యమంత్రి అమృతం పథకం (గుజరాత్)',
    tamilName: 'முதலமைச்சர் அம்ருதம் திட்டம் (குஜராத்)',
    tagline: 'Cashless tertiary healthcare cover of ₹10 Lakh per family per year in 750+ empaneled hospitals.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Gujarat)',
    stateApplicability: 'Gujarat',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GJ',
    administeringGovernment: 'Government of Gujarat',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['BPL and Low-Income Families', 'Middle-Class Families (Income < ₹4 Lakh)', 'Senior Citizens in Gujarat'],
    shortSummary: 'Universal cashless health coverage providing up to ₹10 Lakh per family annually across 2,600+ surgical and medical procedures in top-tier private and government hospitals throughout Gujarat.',
    fullDescription: 'The Mukhyamantri Amrutam (MAA) Yojana was pioneered by Gujarat to provide cashless treatment for catastrophic illnesses. Unified with Ayushman Bharat, the state enhanced the coverage ceiling to ₹10 Lakh per family per year. Families with annual income up to ₹4 Lakh receive 100% cashless coverage for cardiovascular surgeries, neurosurgery, burns, poly-trauma, cancer, renal transplants, and pediatric surgeries.',
    financialBenefit: '₹10,00,000 / family / year cashless hospitalization coverage',
    keyObjectives: [
      'Eliminate catastrophic financial ruin from expensive tertiary medical surgeries',
      'Provide cashless treatment across premier private hospital networks in Ahmedabad, Surat, and Vadodara',
      'Cover complete diagnostic, pre-hospitalization, and post-discharge medicines'
    ],
    eligibilityRules: {
      maxIncome: 400000,
      stateResidence: 'Gujarat',
      notes: 'Resident families in Gujarat holding BPL ration card or having family annual income up to ₹4,00,000.'
    },
    eligibilityHighlights: [
      'Permanent resident of Gujarat',
      'BPL cardholders or family annual income not exceeding ₹4,00,000',
      'All family members listed in the ration card are eligible'
    ],
    exclusions: [
      'Government employees and organized sector workers covered under CGHS or ESIC'
    ],
    requiredDocuments: [
      {
        id: 'doc-gj-maa-ration',
        name: 'Barcoded Gujarat Ration Card',
        category: 'income',
        purpose: 'Family member structure verification',
        citizenTip: 'Check details on ipds.gujarat.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-gj-maa-income',
        name: 'Income Certificate (Income < ₹4 Lakh/year)',
        category: 'income',
        purpose: 'Income eligibility verification',
        citizenTip: 'Issued by Mamlatdar or Taluka Development Officer (TDO).',
        isMandatory: true
      },
      {
        id: 'doc-gj-maa-aadhaar',
        name: 'Aadhaar Card of Family Members',
        category: 'identity',
        purpose: 'Biometric identity during e-KYC',
        citizenTip: 'Aadhaar is mandatory for generating MAA/Ayushman card.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply at Civic Centre, Taluka Kiosk or E-Gram Kendra',
        description: 'Visit nearest Taluka Mamlatdar office, Civic Center, or Gram Panchayat E-Gram Kendra.',
        portalOrOffice: 'Taluka Mamlatdar Office / E-Gram Kendra'
      },
      {
        stepNumber: 2,
        title: 'Biometric Enrollment & MAA Card Generation',
        description: 'Provide biometric fingerprint scan and photo to print instant MAA/Ayushman PVC card.',
        portalOrOffice: 'Kiosk Counter'
      },
      {
        stepNumber: 3,
        title: 'Avail Cashless Hospitalization',
        description: 'Show card at MAA helpdesk in any empaneled private or civil hospital for cashless admission.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'Department of Health & Family Welfare, Government of Gujarat',
      url: 'https://magujarat.com',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department',
      helpline: '1800-233-1022 / 104',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal for Mukhyamantri Amrutam / Ayushman Gujarat.'
    }
  },
  {
    id: 'gj-mukhya-mantri-kisan-sahay',
    name: 'Mukhya Mantri Kisan Sahay Yojana (Gujarat Zero-Premium Crop Risk Compensation)',
    hindiName: 'मुख्यमंत्री किसान सहाय योजना (गुजरात शून्य-प्रीमियम फसल आपदा सहायता)',
    teluguName: 'ముఖ్యమంత్రి కిసాన్ సహాయ్ పథకం (గుజరాత్)',
    tamilName: 'முதலமைச்சர் கிசான் சகாய் திட்டம் (குஜராத்)',
    tagline: '100% state-funded zero-premium crop compensation of ₹20,000 to ₹25,000/hectare for drought, flood, or unseasonal rain.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Gujarat)',
    stateApplicability: 'Gujarat',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GJ',
    administeringGovernment: 'Government of Gujarat',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['All Gujarat Landowner Farmers', 'Tribal Landholders', 'Small & Marginal Cultivators'],
    shortSummary: 'Zero-cost universal crop protection covering all 56+ Lakh farmer account holders in Gujarat against natural disasters (drought, excessive rainfall, and unseasonal cloudbursts) with zero premium deducted.',
    fullDescription: 'Gujarat replaced traditional private insurance-based crop schemes with the 100% government-funded Mukhya Mantri Kisan Sahay Yojana (MMKSY). Farmers pay zero premium. If crop loss exceeds 33% to 60%, farmers receive ₹20,000 per hectare (up to 4 hectares). For crop loss exceeding 60%, assistance is ₹25,000 per hectare directly credited via DBT, alongside additional SDRF state disaster compensation.',
    financialBenefit: '₹20,000 to ₹25,000 / hectare direct compensation via DBT (up to 4 hectares = ₹1,00,000 max)',
    keyObjectives: [
      'Eliminate private insurance premium burdens on farmers',
      'Guarantee swift, transparent disaster relief using satellite imagery and drone surveys',
      'Protect farmers across Saurashtra, Kutch, and North Gujarat against drought and cyclonic rains'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Cultivator'],
      stateResidence: 'Gujarat',
      notes: 'All farmers owning agricultural land in Gujarat recorded in 8-A / 7-12 revenue records, or tribal farmers under Forest Rights Act.'
    },
    eligibilityHighlights: [
      'Landholding farmer in Gujarat recorded in AnyRoR portal',
      'Crop loss must be 33% or higher due to declared drought, heavy rain, or unseasonal weather',
      'Zero premium required from the farmer'
    ],
    exclusions: [
      'Non-agricultural residential or commercial land parcels'
    ],
    requiredDocuments: [
      {
        id: 'doc-gj-mks-ror',
        name: 'Land Record 7/12 & 8-A Revenue Records',
        category: 'land',
        purpose: 'Verify agricultural land ownership and survey number',
        citizenTip: 'Download signed 7/12 from anyror.gujarat.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-gj-mks-aadhaar',
        name: 'Aadhaar Card of Farmer',
        category: 'identity',
        purpose: 'Identity verification and DBT routing',
        citizenTip: 'Aadhaar must be seeded with bank account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Disaster Notification by State Revenue Department',
        description: 'District Collector notifies calamity-hit talukas following rainfall and satellite survey assessments.',
        portalOrOffice: 'Collectorate Notification'
      },
      {
        stepNumber: 2,
        title: 'Apply on MMKSY Portal / E-Gram Kendra',
        description: 'Farmers in notified talukas submit digital claim on mmksy.gujarat.gov.in through Village Computer Entrepreneur (VCE).',
        portalOrOffice: 'E-Gram Center / mmksy.gujarat.gov.in'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer (DBT)',
        description: 'Compensation amount (up to ₹1,00,000) is credited directly to the farmer bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture, Farmers Welfare and Co-operation, Gujarat',
      url: 'https://agri.gujarat.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Agriculture and Farmers Welfare Department',
      helpline: '1800-180-1551',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official farmer portal for MMKSY crop relief in Gujarat.'
    }
  },
  {
    id: 'gj-mukhyamantri-mahila-utkarsh',
    name: 'Mukhyamantri Mahila Utkarsh Yojana (Gujarat Interest-Free Loans for Women SHGs)',
    hindiName: 'मुख्यमंत्री महिला उत्कर्ष योजना (गुजरात महिला स्वयं सहायता ब्याज मुक्त ऋण)',
    teluguName: 'ముఖ్యమంత్రి మహిళా ఉత్కర్ష్ పథకం (గుజరాత్)',
    tamilName: 'முதலமைச்சர் மஹிளா உட்கர்ஷ் திட்டம் (குஜராத்)',
    tagline: 'Collateral-free, 100% interest-free bank loan of ₹1 Lakh for 10-woman Joint Liability Groups (JLGs).',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'State Scheme (Gujarat)',
    stateApplicability: 'Gujarat',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GJ',
    administeringGovernment: 'Government of Gujarat',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Women Self Help Groups (SHGs)', 'Joint Liability Groups (10 Women)', 'Rural and Urban Micro-Entrepreneurs'],
    shortSummary: 'Financial inclusion program extending ₹1 Lakh collateral-free, 0% interest loans to 10-woman groups for starting food processing, handicrafts, tailoring, and retail micro-businesses, with state paying complete bank interest.',
    fullDescription: 'The Mukhyamantri Mahila Utkarsh Yojana (MMUY) empowers 10 Lakh women across Gujarat through economic self-reliance. Groups of 10 women (Joint Liability Earning Groups) receive ₹1,00,000 bank loans at 0% interest (the state government directly reimburses the entire interest to lending banks). Additionally, stamp duty and loan documentation fees are fully waived by the state.',
    financialBenefit: '₹1,00,000 interest-free bank loan per 10-woman group + 100% waiver of stamp duty and processing fees',
    keyObjectives: [
      'Foster women micro-entrepreneurship across rural villages and urban nagarpalikas',
      'Provide 100% interest-free credit directly through nationalized and cooperative banks',
      'Eliminate loan shark exploitation and build group savings habits'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 59,
      targetGender: 'female',
      stateResidence: 'Gujarat',
      notes: 'Group of 10 women aged 18 to 59 residing in the same village or urban ward, formed as a Mahila Utkarsh JLG.'
    },
    eligibilityHighlights: [
      'Resident women of Gujarat forming a group of 10 members',
      'Group must open a joint savings bank account',
      'Members must not be willful defaulters with any commercial or cooperative bank'
    ],
    exclusions: [
      'Members who are regular permanent government employees'
    ],
    requiredDocuments: [
      {
        id: 'doc-gj-mmu-aadhaar',
        name: 'Aadhaar Cards of All 10 Group Members',
        category: 'identity',
        purpose: 'Identity and residence verification',
        citizenTip: 'All 10 members must provide KYC.',
        isMandatory: true
      },
      {
        id: 'doc-gj-mmu-group',
        name: 'Group Resolution & Joint Bank Account Passbook',
        category: 'bank',
        purpose: 'Loan disbursement and repayment mapping',
        citizenTip: 'Opened with assistance from Mission Mangalam / NULM team.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Form 10-Member Group via Mission Mangalam',
        description: 'Form a group of 10 women and register with the Gram Panchayat Mission Mangalam / Urban Livelihood Cell.',
        portalOrOffice: 'Mission Mangalam / Taluka Panchayat'
      },
      {
        stepNumber: 2,
        title: 'Submit Loan Application to Partner Bank',
        description: 'Submit MMUY application to local nationalized, private, or cooperative bank.',
        portalOrOffice: 'Partner Bank Branch'
      },
      {
        stepNumber: 3,
        title: 'Loan Disbursal & Interest Reimbursement',
        description: 'Bank disburses ₹1 Lakh directly to group account; state government pays monthly interest to the bank.',
        portalOrOffice: 'Bank Branch'
      }
    ],
    officialSource: {
      name: 'Gujarat Livelihood Promotion Company (GLPC) / Mission Mangalam',
      url: 'https://glpc.gujarat.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Rural Development Department, Gujarat',
      helpline: '079-23253500',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official women livelihood and microcredit portal of Gujarat.'
    }
  },
  {
    id: 'gj-kunwarbai-nu-mameru',
    name: 'Kunwarbai Nu Mameru Scheme (Gujarat Financial Assistance for Daughters Marriage)',
    hindiName: 'कुंवरबाई नु मामेरू योजना (गुजरात कन्या विवाह वित्तीय सहायता)',
    teluguName: 'కున్వర్‌బాయి ను మామేరు పథకం (గుజరాత్)',
    tamilName: 'குன்வர்பாய் நு மாமேரு திட்டம் (குஜராத்)',
    tagline: 'Direct financial assistance of ₹12,000 for the marriage expenses of daughters of SC, ST, and SEBC families.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Gujarat)',
    stateApplicability: 'Gujarat',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GJ',
    administeringGovernment: 'Government of Gujarat',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['SC / ST / SEBC / EBC Daughters', 'Rural Poor Families', 'Daughters of Widows'],
    shortSummary: 'One-time direct bank transfer of ₹12,000 provided to parents of adult daughters during wedding ceremonies, promoting formal marriage registration and easing family debt burdens.',
    fullDescription: 'Named after the legendary story of saint-poet Narsinh Mehta daughter Kunwarbai, this scheme offers financial respect to underprivileged families during daughter wedding ceremonies. Handled by the Social Justice & Empowerment Department, the grant of ₹12,000 is directly transferred to the daughter bank account upon submitting marriage registration proof, applicable for up to two daughters per family.',
    financialBenefit: '₹12,000 one-time direct benefit transfer into bride bank account',
    keyObjectives: [
      'Mitigate wedding expenses for backward class and impoverished families',
      'Encourage legal marriage registration with competent municipal/panchayat registrars',
      'Directly credit funds to the young bride to foster financial autonomy'
    ],
    eligibilityRules: {
      minAge: 18,
      targetGender: 'female',
      maxIncome: 600000,
      stateResidence: 'Gujarat',
      notes: 'Bride must be 18+ and groom 21+. Belongs to SC, ST, SEBC, or EWS category with annual family income up to ₹6,00,000.'
    },
    eligibilityHighlights: [
      'Permanent resident of Gujarat',
      'Belongs to Scheduled Caste (SC), Scheduled Tribe (ST), SEBC, or Economically Weaker Section',
      'Family annual income does not exceed ₹6,00,000',
      'Bride must be at least 18 and groom at least 21 years old'
    ],
    exclusions: [
      'Families that have already received assistance for two daughters under this scheme',
      'Child marriages where either party does not meet statutory age limits'
    ],
    requiredDocuments: [
      {
        id: 'doc-gj-knm-marriage',
        name: 'Marriage Registration Certificate',
        category: 'other',
        purpose: 'Legal proof of solemnized marriage',
        citizenTip: 'Issued by Talati-cum-Mantri or Municipal Registrar.',
        isMandatory: true
      },
      {
        id: 'doc-gj-knm-caste',
        name: 'Caste Certificate / Income Certificate',
        category: 'caste',
        purpose: 'Verification of social category and income limit',
        citizenTip: 'Obtain from digitalgujarat.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-gj-knm-bank',
        name: 'Aadhaar-Seeded Bank Passbook of the Bride',
        category: 'bank',
        purpose: 'Direct benefit transfer receiving account',
        citizenTip: 'Must be in the sole name of the bride.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on e-Samaj Kalyan Portal',
        description: 'Submit online form within 2 years of marriage date on esamajkalyan.gujarat.gov.in.',
        portalOrOffice: 'esamajkalyan.gujarat.gov.in'
      },
      {
        stepNumber: 2,
        title: 'District Social Welfare Officer Scrutiny',
        description: 'District officer verifies marriage registration certificate, caste, and income credentials.',
        portalOrOffice: 'District Social Welfare Office'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit into Bride Bank Account',
        description: '₹12,000 is credited directly into the bride bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Social Justice & Empowerment Department, Government of Gujarat',
      url: 'https://esamajkalyan.gujarat.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Justice & Empowerment Department',
      helpline: '079-23253406',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Gujarat e-Samaj Kalyan portal for Kunwarbai Nu Mameru.'
    }
  },
  {
    id: 'gj-vidya-lakshmi-bond',
    name: 'Vidya Lakshmi Bond Scheme (Gujarat Girl Child Primary Education Incentive)',
    hindiName: 'विद्या लक्ष्मी बॉन्ड योजना (गुजरात बालिका प्राथमिक शिक्षा प्रोत्साहन)',
    teluguName: 'విద్యా లక్ష్మి బాండ్ పథకం (గుజராత్)',
    tamilName: 'வித்யா லக்ஷ்மி பாண்ட் திட்டம் (குஜராத்)',
    tagline: '₹2,000 government interest-bearing bond given to girls enrolling in Class 1 in low-literacy talukas.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Gujarat)',
    stateApplicability: 'Gujarat',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'GJ',
    administeringGovernment: 'Government of Gujarat',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Girl Children enrolling in Class 1', 'Students in Low-Literacy Talukas', 'BPL Girl Students across Gujarat'],
    shortSummary: 'Incentive bond of ₹2,000 deposited in Sardar Sarovar Narmada Nigam bonds in the name of the girl upon primary school admission, maturing with interest when she completes Class 8.',
    fullDescription: 'To combat female school dropouts in rural and tribal belts of Gujarat, the Education Department issues a ₹2,000 Vidya Lakshmi Bond to every girl who enters Class 1 in government or aided schools located in talukas where female literacy is below 35% (or any BPL girl across all urban and rural areas). The bond earns interest and matures when the student completes Class 8, incentivizing 8 full years of education.',
    financialBenefit: '₹2,000 interest-bearing bond maturing with compound interest after Class 8 completion',
    keyObjectives: [
      'Achieve 100% primary school enrollment of girl children in backward talukas',
      'Prevent mid-school dropouts between Class 1 and Class 8',
      'Provide cash assets to girl students upon entering high school'
    ],
    eligibilityRules: {
      minAge: 5,
      maxAge: 7,
      targetGender: 'female',
      stateResidence: 'Gujarat',
      notes: 'Girl student enrolling in Class 1 in a notified low-literacy taluka, or any girl from a BPL family enrolling in Class 1 anywhere in Gujarat.'
    },
    eligibilityHighlights: [
      'Girl child taking admission in Class 1 in government/aided primary school',
      'School located in identified low female literacy talukas or girl belonging to BPL family',
      'Must continue studies continuously through Class 8'
    ],
    exclusions: [
      'Private unaided expensive international schools'
    ],
    requiredDocuments: [
      {
        id: 'doc-gj-vlb-admission',
        name: 'Class 1 School Admission Certificate / General Register (GR) Entry',
        category: 'academic',
        purpose: 'Verify enrolment in Class 1',
        citizenTip: 'Provided by school headmaster.',
        isMandatory: true
      },
      {
        id: 'doc-gj-vlb-bpl',
        name: 'BPL Card / Domicile Certificate',
        category: 'income',
        purpose: 'Proof of entitlement category',
        citizenTip: 'Not required if school is in notified backward taluka.',
        isMandatory: false
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'School Enrolment during Shala Praveshotsav',
        description: 'Enroll girl child in Class 1 during the annual state Shala Praveshotsav drive.',
        portalOrOffice: 'Government Primary School'
      },
      {
        stepNumber: 2,
        title: 'Bond Issuance by Taluka Primary Education Officer (TPEO)',
        description: 'School submits list to TPEO; state issues ₹2,000 Vidya Lakshmi Bond certificate.',
        portalOrOffice: 'Taluka Education Office'
      },
      {
        stepNumber: 3,
        title: 'Redemption after Class 8 Completion',
        description: 'Upon passing Class 8, surrender the bond at designated bank to receive principal and accrued interest.',
        portalOrOffice: 'Bank / Post Office'
      }
    ],
    officialSource: {
      name: 'Education Department, Government of Gujarat',
      url: 'https://gujarat-education.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Primary Education Directorate',
      helpline: '079-23253825',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official primary education incentive initiative of Government of Gujarat.'
    }
  },

  // MADHYA PRADESH (MP)
  {
    id: 'mp-mukhyamantri-ladli-behna',
    name: 'Mukhyamantri Ladli Behna Yojana (Madhya Pradesh Direct Monthly Women Allowance)',
    hindiName: 'मुख्यमंत्री लाड़ली बहना योजना (मध्य प्रदेश महिला मासिक आर्थिक सहायता)',
    teluguName: 'ముఖ్యమంత్రి లాడ్లీ బెహ్నా పథకం (మధ్య ప్రదేశ్)',
    tamilName: 'முதலமைச்சர் லாட்லி பெஹ்னா திட்டம் (மத்திய பிரதேசம்)',
    tagline: 'Direct monthly financial assistance of ₹1,250 (₹15,000/year) credited to 1.29+ Crore women on the 10th of every month.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Madhya Pradesh)',
    stateApplicability: 'Madhya Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MP',
    administeringGovernment: 'Government of Madhya Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Women aged 21 to 60 years', 'Married, Widowed, and Divorced Women', 'Homemakers across Madhya Pradesh'],
    shortSummary: 'Landmark women empowerment initiative providing ₹1,250 direct cash benefit every month into the Aadhaar-linked bank accounts of 1.29 Crore women in Madhya Pradesh, fostering health, nutrition, and financial agency.',
    fullDescription: 'The Mukhyamantri Ladli Behna Yojana is one of India most influential direct cash transfer schemes. Targeting women aged 21 to 60 whose family annual income is below ₹2.5 Lakh, the scheme credits ₹1,250 directly into the woman personal bank account on the 10th of every month. The program has significantly elevated women decision-making power, household nutrition spending, and micro-savings throughout urban and rural Madhya Pradesh.',
    financialBenefit: '₹1,250 / month (₹15,000 annually) transferred directly via DBT',
    keyObjectives: [
      'Foster financial self-reliance and social dignity for women across Madhya Pradesh',
      'Improve health and nutritional outcomes of mothers and dependent children',
      'Guarantee unconditional digital monthly income transfers without middleman leakages'
    ],
    eligibilityRules: {
      minAge: 21,
      maxAge: 60,
      targetGender: 'female',
      maxIncome: 250000,
      stateResidence: 'Madhya Pradesh',
      notes: 'Woman resident of MP aged 21 to 60 years (married, widow, divorced, or abandoned) with family annual income under ₹2.5 Lakh and owning less than 5 acres of agricultural land.'
    },
    eligibilityHighlights: [
      'Resident woman of Madhya Pradesh aged 21 to 60 years',
      'Family annual income does not exceed ₹2,50,000',
      'Family does not own more than 5 acres of cultivable agricultural land',
      'Personal single bank account with active Aadhaar DBT enablement'
    ],
    exclusions: [
      'Income tax paying families',
      'Families owning a registered four-wheeler (excluding tractors)',
      'Permanent government employees or pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-mp-lb-samagra',
        name: 'Samagra Family ID & Member ID',
        category: 'identity',
        purpose: 'Family verification and member mapping',
        citizenTip: 'Ensure Samagra e-KYC is completed on samagra.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-mp-lb-aadhaar',
        name: 'Aadhaar Card of the Applicant',
        category: 'identity',
        purpose: 'Biometric identity verification and DBT linking',
        citizenTip: 'Aadhaar must be linked to active mobile number.',
        isMandatory: true
      },
      {
        id: 'doc-mp-lb-bank',
        name: 'Aadhaar-Linked Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Check with bank that NPCI Aadhaar seeding is in Active status.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply at Panchayat / Ward Outreach Camp',
        description: 'Submit free form at designated Gram Panchayat or Ward Camp; mobile operator clicks live photo and verifies Samagra.',
        portalOrOffice: 'Gram Panchayat / Ward Camp'
      },
      {
        stepNumber: 2,
        title: 'Aadhaar DBT Linking Verification',
        description: 'System verifies that applicant bank account is active on the NPCI Aadhaar payment bridge.',
        portalOrOffice: 'Automated System'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement on 10th',
        description: '₹1,250 is credited directly into the applicant account on the 10th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Madhya Pradesh',
      url: 'https://cmladlibahna.mp.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '0755-2700800',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Madhya Pradesh Ladli Behna portal.'
    }
  },
  {
    id: 'mp-ladli-laxmi-yojana',
    name: 'Ladli Laxmi Yojana 2.0 (Madhya Pradesh Girl Child Financial Security & College Incentive)',
    hindiName: 'लाड़ली लक्ष्मी योजना २.० (मध्य प्रदेश कन्या संवर्धन एवं उच्च शिक्षा प्रोत्साहन)',
    teluguName: 'లాడ్లీ లక్ష్మి పథకం 2.0 (మధ్య ప్రదేశ్)',
    tamilName: 'லாட்லி லக்ஷ்மி திட்டம் 2.0 (மத்திய பிரதேசம்)',
    tagline: 'Cumulative financial assurance of ₹1,43,000 + ₹25,000 college admission incentive + free tuition fees for girl students.',
    category: 'education',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Madhya Pradesh)',
    stateApplicability: 'Madhya Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MP',
    administeringGovernment: 'Government of Madhya Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Girl Children born in Madhya Pradesh', 'School and College Students', 'Girls pursuing Medical/IIT/IIM/Law'],
    shortSummary: 'National pioneer girl child welfare scheme providing milestone scholarships across schooling (₹2,000 to ₹6,000), ₹25,000 incentive for college admission, full payment of professional college fees, and ₹1 Lakh maturity bond at age 21.',
    fullDescription: 'Ladli Laxmi Yojana has transformed attitudes towards female children in Madhya Pradesh since 2007. Under version 2.0, the state guarantees ₹1,43,000 total financial assurance. Girls receive periodic cash stipends at Classes 6, 9, 11, and 12, a dedicated ₹25,000 incentive upon taking admission in degree college, 100% payment of professional tuition fees (medical, engineering, law), and ₹1,00,000 final lump sum upon turning 21 unmarried.',
    financialBenefit: '₹1,43,000 cumulative assurance + ₹25,000 college entry incentive + 100% professional degree tuition payment',
    keyObjectives: [
      'Eliminate female foeticide and significantly improve child sex ratio in MP',
      'Guarantee 100% completion of higher secondary and college education for daughters',
      'Finance high-cost professional degree education (NEET, JEE, CLAT) for girls'
    ],
    eligibilityRules: {
      targetGender: 'female',
      stateResidence: 'Madhya Pradesh',
      notes: 'Parents must be permanent residents of Madhya Pradesh, non-income tax payers, with birth registered within 1 year at Anganwadi, up to 2 daughters per family.'
    },
    eligibilityHighlights: [
      'Girl child born to resident parents in Madhya Pradesh',
      'Parents must not be income tax payers',
      'Registration completed at Anganwadi within 1 year of birth',
      'Beneficiary must remain unmarried until age 21 to receive final maturity payment'
    ],
    exclusions: [
      'Families with more than two living children (unless twins born in second delivery)',
      'Income tax paying households'
    ],
    requiredDocuments: [
      {
        id: 'doc-mp-lly-birth',
        name: 'Birth Certificate of Girl Child',
        category: 'identity',
        purpose: 'Proof of age and institutional delivery',
        citizenTip: 'Civil registration birth certificate.',
        isMandatory: true
      },
      {
        id: 'doc-mp-lly-samagra',
        name: 'Samagra Family ID',
        category: 'identity',
        purpose: 'Verification of family composition and MP domicile',
        citizenTip: 'Child name must be added to family Samagra card.',
        isMandatory: true
      },
      {
        id: 'doc-mp-lly-family-planning',
        name: 'Family Planning Certificate of Parents (after second child)',
        category: 'other',
        purpose: 'Compliance with family size norms',
        citizenTip: 'Issued by government health centre.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register at Anganwadi or on Ladli Laxmi Portal',
        description: 'Submit application through local Anganwadi Worker or online on ladlilaxmi.mp.gov.in.',
        portalOrOffice: 'Anganwadi Centre / ladlilaxmi.mp.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Approval & Ladli Laxmi Assurance Certificate Issuance',
        description: 'Project Officer issues formal Ladli Laxmi Certificate guaranteeing future milestone payments.',
        portalOrOffice: 'CDPO Office'
      },
      {
        stepNumber: 3,
        title: 'Milestone Disbursal & Final Maturity at 21',
        description: 'Scholarships are paid automatically at schooling milestones, and ₹1 Lakh is credited upon turning 21.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Madhya Pradesh',
      url: 'https://ladlilaxmi.mp.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '0755-2550910',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Madhya Pradesh Ladli Laxmi 2.0 portal.'
    }
  },
  {
    id: 'mp-mukhyamantri-sambal-yojana',
    name: 'Mukhyamantri Jan Kalyan Sambal Yojana 2.0 (Madhya Pradesh Unorganized Worker Safety Net)',
    hindiName: 'मुख्यमंत्री जन कल्याण संबल योजना २.० (मध्य प्रदेश असंगठित श्रमिक सुरक्षा)',
    teluguName: 'ముఖ్యమంత్రి సంబల్ పథకం 2.0 (మధ్య ప్రదేశ్)',
    tamilName: 'முதலமைச்சர் சம்பல் திட்டம் 2.0 (மத்திய பிரதேசம்)',
    tagline: 'Comprehensive unorganized worker safety net: ₹4 Lakh accidental death, ₹2 Lakh normal death, ₹16,000 maternity aid, and free power.',
    category: 'workers-social-security',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'State Scheme (Madhya Pradesh)',
    stateApplicability: 'Madhya Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MP',
    administeringGovernment: 'Government of Madhya Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Unorganized Sector Workers', 'Agricultural Laborers & Artisans', 'Pregnant Women of Worker Families', 'School/College Children of Laborers'],
    shortSummary: 'All-in-one social security package for over 1.7 Crore registered unorganized workers in MP providing ₹4 Lakh accidental death ex-gratia, ₹2 Lakh normal death grant, ₹16,000 maternity assistance, full college tuition waiver for children, and subsidized electricity.',
    fullDescription: 'Sambal 2.0 provides an cradle-to-grave social security architecture for informal laborers in MP. Registered workers receive ₹16,000 maternity financial aid, free hospital delivery, 100% college tuition fees paid for their children in engineering, medical, and polytechnic courses, ₹2,00,000 ex-gratia for normal death, ₹4,00,000 for accidental death, ₹1,00,000-₹2,00,000 for permanent disability, and ₹5,000 immediate funeral assistance.',
    financialBenefit: '₹4,00,000 accidental death aid + ₹2,00,000 natural death + ₹16,000 maternity grant + 100% children tuition fee reimbursement',
    keyObjectives: [
      'Shield informal and unorganized workers from sudden destitution due to accidents or death',
      'Finance high-cost university and professional education for children of construction and daily wage laborers',
      'Deliver dignified maternity care and immediate funeral relief'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 60,
      occupations: ['Unorganized Worker', 'Laborer', 'Artisan', 'Domestic Worker', 'Driver', 'Vendor'],
      stateResidence: 'Madhya Pradesh',
      notes: 'Resident of MP aged 18 to 60 working in the unorganized sector, not paying income tax, and possessing less than 1 hectare of agricultural land.'
    },
    eligibilityHighlights: [
      'Unorganized sector worker residing in MP aged 18-60 years',
      'Samagra ID registered and Aadhaar e-KYC completed',
      'Non-income tax payer holding less than 1 hectare land'
    ],
    exclusions: [
      'Organized sector employees covered by PF, ESIC, or government service'
    ],
    requiredDocuments: [
      {
        id: 'doc-mp-sam-samagra',
        name: 'Samagra Member ID & Family ID',
        category: 'identity',
        purpose: 'Citizen verification and Sambal card registration',
        citizenTip: 'Check status on samagra.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-mp-sam-aadhaar',
        name: 'Aadhaar Card',
        category: 'identity',
        purpose: 'Biometric identity verification',
        citizenTip: 'Must have active mobile linked.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register for Sambal Card on Sambal Portal',
        description: 'Apply on sambal.mp.gov.in using Samagra ID and Aadhaar e-KYC.',
        portalOrOffice: 'sambal.mp.gov.in / CSC Kiosk'
      },
      {
        stepNumber: 2,
        title: 'Verification by Panchayat Secretary / Ward Incharge',
        description: 'Local authority verifies unorganized worker occupation status and approves registration.',
        portalOrOffice: 'Gram Panchayat / Ward Office'
      },
      {
        stepNumber: 3,
        title: 'Download Sambal Card & Claim Benefits',
        description: 'Download digital Sambal card to claim maternity aid, education fee waivers, or ex-gratia relief.',
        portalOrOffice: 'Sambal Portal / DBT'
      }
    ],
    officialSource: {
      name: 'Labour Department, Government of Madhya Pradesh',
      url: 'https://sambal.mp.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Labour Department',
      helpline: '0755-2570080',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Madhya Pradesh Sambal 2.0 unorganized worker portal.'
    }
  },
  {
    id: 'mp-kisan-kalyan-yojana',
    name: 'Mukhyamantri Kisan Kalyan Yojana (Madhya Pradesh Farmer State Direct Top-Up)',
    hindiName: 'मुख्यमंत्री किसान कल्याण योजना (मध्य प्रदेश कृषक राज्य टॉप-अप सहायता)',
    teluguName: 'ముఖ్యమంత్రి కిసాన్ కళ్యాణ్ పథకం (మధ్య ప్రదేశ్)',
    tamilName: 'முதலமைச்சர் கிசான் கல்யாண் திட்டம் (மத்திய பிரதேசம்)',
    tagline: 'Additional ₹6,000/year state cash grant to PM-KISAN farmers in MP, raising total direct income to ₹12,000/year.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Madhya Pradesh)',
    stateApplicability: 'Madhya Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MP',
    administeringGovernment: 'Government of Madhya Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Landowner Farmers', 'Small & Marginal Cultivators', 'PM-KISAN Beneficiaries in MP'],
    shortSummary: 'Substantial direct farmer income supplement matching the Central PM-KISAN scheme with an equal ₹6,000 state grant paid in three ₹2,000 installments, giving MP farmers ₹12,000 annually directly via DBT.',
    fullDescription: 'The Mukhyamantri Kisan Kalyan Yojana provides vital seasonal cash liquidity to over 80 Lakh farmers across Madhya Pradesh. Operating seamlessly in tandem with Central PM-KISAN, the MP Revenue Department transfers an additional ₹6,000 per year directly to farmer bank accounts in three ₹2,000 installments, synchronizing with Kharif, Rabi, and Zaid cultivation expenses without paperwork.',
    financialBenefit: '₹6,000 / year state cash transfer (Combined ₹12,000 / year with PM-KISAN)',
    keyObjectives: [
      'Double the annual direct cash support for farming families in Madhya Pradesh to ₹12,000',
      'Provide timely capital for certified seeds, micro-nutrients, and diesel irrigation',
      'Operate 100% paperless DBT through SAARA (Smart Application for Agricultural Revenue Activities)'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Cultivator'],
      stateResidence: 'Madhya Pradesh',
      notes: 'Farmer owning cultivable agricultural land in Madhya Pradesh who is an active, verified beneficiary of PM-KISAN.'
    },
    eligibilityHighlights: [
      'Permanent resident of Madhya Pradesh owning cultivable land',
      'Active beneficiary under Central PM-KISAN scheme',
      'Land records verified on MP Bhulekh / SAARA portal',
      'Bank account seeded with Aadhaar and NPCI mapped'
    ],
    exclusions: [
      'Institutional landholders',
      'Serving and retired government employees and constitutional post holders',
      'Income tax payees in preceding financial year'
    ],
    requiredDocuments: [
      {
        id: 'doc-mp-mkk-saara',
        name: 'MP Bhulekh Khasra / Khatauni Revenue Record',
        category: 'land',
        purpose: 'Verify agricultural land ownership in MP',
        citizenTip: 'Check land record on mpbhulekh.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-mp-mkk-aadhaar',
        name: 'Aadhaar Card and PM-KISAN Beneficiary ID',
        category: 'identity',
        purpose: 'Beneficiary mapping and DBT verification',
        citizenTip: 'Ensure PM-KISAN e-KYC is active.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Automatic Enrolment via PM-KISAN / SAARA',
        description: 'Existing verified PM-KISAN farmers in MP are enrolled automatically by the local Patwari.',
        portalOrOffice: 'saara.mp.gov.in / Patwari Desk'
      },
      {
        stepNumber: 2,
        title: 'Verification on SAARA Portal',
        description: 'Patwari verifies physical land possession and Aadhaar bank linkage on SAARA mobile app.',
        portalOrOffice: 'Patwari Verification'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of ₹2,000 Installments',
        description: 'Three installments of ₹2,000 each are credited directly into farmer bank accounts.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Revenue Department, Government of Madhya Pradesh',
      url: 'https://saara.mp.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Revenue Department',
      helpline: '181 / 0755-2527132',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official SAARA portal for Mukhyamantri Kisan Kalyan Yojana.'
    }
  },
  {
    id: 'mp-medhavi-vidhyarthi-protsahan',
    name: 'Mukhyamantri Medhavi Vidhyarthi Yojana (MP 100% Higher Education Tuition Sponsorship)',
    hindiName: 'मुख्यमंत्री मेधावी विद्यार्थी योजना (मध्य प्रदेश १००% उच्च शिक्षा शुल्क भुगतान)',
    teluguName: 'ముఖ్యమంత్రి మేధావి విద్యార్థి పథకం (మధ్య ప్రదేశ్)',
    tamilName: 'முதலமைச்சர் மேதாவி வித்யார்த்தி திட்டம் (மத்திய பிரதேசம்)',
    tagline: '100% government payment of undergraduate tuition fees for engineering, medical, law, and degree courses.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Madhya Pradesh)',
    stateApplicability: 'Madhya Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MP',
    administeringGovernment: 'Government of Madhya Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Class 12 Meritorious Students (70%+ MP Board / 85%+ CBSE)', 'NEET Medical Students', 'JEE Mains Engineering Students', 'CLAT Law Students'],
    shortSummary: 'State government pays the entire tuition fee (often ₹1.5 Lakh to ₹10 Lakh per year) for meritorious students of MP securing admission in MBBS (any government/private medical college), engineering (IIT, NIT), or law (NLU).',
    fullDescription: 'Under the Mukhyamantri Medhavi Vidhyarthi Yojana (MMVY), financial constraints never stop a talented student from becoming a doctor, engineer, or lawyer. Students scoring 70%+ in MP Board (or 85%+ in CBSE/ICSE) with family annual income under ₹6 Lakh receive 100% tuition sponsorship. For MBBS, the state pays complete fees at all government and private medical colleges in MP; for JEE Mains, it covers fees at IITs, NITs, and top engineering institutions.',
    financialBenefit: '100% payment of full course tuition fees directly to the university/college',
    keyObjectives: [
      'Eliminate commercial education debt for meritorious middle and low-income students',
      'Produce doctors, engineers, and civil administrators from rural and ordinary MP families',
      'Reward academic excellence in Class 12 board examinations'
    ],
    eligibilityRules: {
      maxIncome: 600000,
      stateResidence: 'Madhya Pradesh',
      notes: 'Resident of MP scoring 70%+ in MP Board or 85%+ in CBSE/ICSE Class 12, with family annual income under ₹6 Lakh, admitted to recognized medical, engineering, law, or degree programs.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Madhya Pradesh',
      'Scored 70% or more in MP Board or 85% or more in CBSE/ICSE Class 12',
      'Father/Guardian annual income from all sources does not exceed ₹6,00,000',
      'Secured admission in recognized medical (NEET rank), engineering (JEE rank up to 1.5 Lakh), or law institute'
    ],
    exclusions: [
      'Students with family annual income exceeding ₹6,00,000'
    ],
    requiredDocuments: [
      {
        id: 'doc-mp-mmv-marks',
        name: 'Class 12 Marksheet',
        category: 'academic',
        purpose: 'Verify qualifying board percentage (70%+ MP Board / 85%+ CBSE)',
        citizenTip: 'Original marksheet scan.',
        isMandatory: true
      },
      {
        id: 'doc-mp-mmv-entrance',
        name: 'Entrance Exam Scorecard & College Allotment Letter',
        category: 'academic',
        purpose: 'Proof of merit admission (NEET / JEE / CLAT)',
        citizenTip: 'Issued by centralized counselling authority.',
        isMandatory: true
      },
      {
        id: 'doc-mp-mmv-income',
        name: 'Income Certificate (Income < ₹6 Lakh/year)',
        category: 'income',
        purpose: 'Income ceiling compliance',
        citizenTip: 'Issued by competent Tehsildar via Lok Seva Kendra.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Scholarshipportal.mp.nic.in',
        description: 'Submit MMVY scholarship application with college fee structure on the MP State Scholarship portal.',
        portalOrOffice: 'scholarshipportal.mp.nic.in'
      },
      {
        stepNumber: 2,
        title: 'Institutional Online Verification',
        description: 'College/University nodal officer verifies admission, branch, and exact tuition fee schedule.',
        portalOrOffice: 'College Administration'
      },
      {
        stepNumber: 3,
        title: 'Direct Tuition Fee Remittance',
        description: 'State Higher Education Department transfers 100% of the tuition fees directly into the college account.',
        portalOrOffice: 'State Higher Education Directorate'
      }
    ],
    officialSource: {
      name: 'Department of Higher Education, Madhya Pradesh',
      url: 'https://scholarshipportal.mp.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Higher Education Department',
      helpline: '0755-2660061',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Madhya Pradesh higher education scholarship portal.'
    }
  },

  // MAHARASHTRA (MH)
  {
    id: 'mh-mukhyamantri-majhi-ladki-bahin',
    name: 'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra Monthly Women Allowance)',
    hindiName: 'मुख्यमंत्री माझी लाड़की बहिन योजना (महाराष्ट्र महिला मासिक आर्थिक सहायता)',
    teluguName: 'ముఖ్యమంత్రి మాఝీ లాడ్కీ బహీన్ పథకం (మహారాష్ట్ర)',
    tamilName: 'முதலமைச்சர் மாஜி லாட்கி பஹின் திட்டம் (மகாராஷ்டிரா)',
    tagline: 'Direct monthly financial assistance of ₹1,500 (₹18,000/year) transferred to 2.4+ Crore adult women.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Maharashtra)',
    stateApplicability: 'Maharashtra',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MH',
    administeringGovernment: 'Government of Maharashtra',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Women aged 21 to 65 years', 'Homemakers, Widows, and Divorced Women', 'Women in Agriculture and Unorganized Sectors'],
    shortSummary: 'Maharashtra flagship women direct income scheme transferring ₹1,500 monthly via DBT into the bank accounts of over 2.4 Crore women aged 21 to 65 whose family income is up to ₹2.5 Lakh per year.',
    fullDescription: 'The Mukhyamantri Majhi Ladki Bahin Yojana provides comprehensive economic dignity and autonomy to women across Maharashtra. Beneficiary women receive ₹1,500 per month directly into their Aadhaar-seeded bank accounts to meet healthcare, personal nutrition, and child educational needs. The scheme has simplified application protocols via the Nari Shakti Doot mobile app and Setu Kendra centers.',
    financialBenefit: '₹1,500 / month (₹18,000 annually) transferred directly via DBT',
    keyObjectives: [
      'Promote women financial autonomy, decision-making, and social security across Maharashtra',
      'Improve nutritional and medical outcomes for rural and urban women',
      'Ensure 100% paperless digital DBT delivery to woman personal bank accounts'
    ],
    eligibilityRules: {
      minAge: 21,
      maxAge: 65,
      targetGender: 'female',
      maxIncome: 250000,
      stateResidence: 'Maharashtra',
      notes: 'Woman resident of Maharashtra aged 21 to 65 years (married, widow, divorced, or single) with family annual income up to ₹2.5 Lakh.'
    },
    eligibilityHighlights: [
      'Permanent resident of Maharashtra aged 21 to 65 years',
      'Family annual income must not exceed ₹2,50,000 (holding Yellow or Orange Ration Card)',
      'Individual single bank account seeded with Aadhaar and active NPCI mandate'
    ],
    exclusions: [
      'Income tax paying families',
      'Permanent government employees or families receiving government civil pensions',
      'Beneficiaries receiving more than ₹1,500/month from another state cash scheme'
    ],
    requiredDocuments: [
      {
        id: 'doc-mh-mlb-aadhaar',
        name: 'Aadhaar Card of Applicant',
        category: 'identity',
        purpose: 'Biometric identity and age verification',
        citizenTip: 'Check that birth date confirms age between 21 and 65.',
        isMandatory: true
      },
      {
        id: 'doc-mh-mlb-ration',
        name: 'Yellow or Orange Ration Card / Income Certificate',
        category: 'income',
        purpose: 'Income ceiling proof (< ₹2.5 Lakh/year)',
        citizenTip: 'Holding Yellow/Orange ration card waives requirement for separate income certificate.',
        isMandatory: true
      },
      {
        id: 'doc-mh-mlb-domicile',
        name: 'Maharashtra Domicile Certificate / Voter ID / 15-Year Residence Proof',
        category: 'identity',
        purpose: 'Proof of residence in Maharashtra',
        citizenTip: 'Voter ID or school leaving certificate issued in MH is accepted.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply on Nari Shakti Doot App or at Setu Kendra',
        description: 'Submit form via Nari Shakti Doot mobile app or visit nearest Setu Kendra / Anganwadi worker.',
        portalOrOffice: 'Nari Shakti Doot App / Setu Kendra'
      },
      {
        stepNumber: 2,
        title: 'Scrutiny by Ward / Taluka Committee',
        description: 'Taluka committee verifies Aadhaar-bank seeding and ration card status online.',
        portalOrOffice: 'Taluka Committee'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Credit of ₹1,500',
        description: '₹1,500 is credited directly into the woman bank account every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Maharashtra',
      url: 'https://ladakibahin.maharashtra.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '181',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal for Mukhyamantri Majhi Ladki Bahin Yojana Maharashtra.'
    }
  },
  {
    id: 'mh-mahatma-jyotirao-phule-jan-arogya',
    name: 'Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY Maharashtra Universal Cashless Health Cover)',
    hindiName: 'महात्मा ज्योतिराव फुले जन आरोग्य योजना (महाराष्ट्र सार्वभौमिक स्वास्थ्य सुरक्षा)',
    teluguName: 'మహాత్మా జ్యోతిరావ్ ఫూలే జన్ ఆరోగ్య పథకం (మహారాష్ట్ర)',
    tamilName: 'மகாத்மா ஜோதிராவ் பூலே ஜன் ஆரோக்கிய திட்டம் (மகாராஷ்டிரா)',
    tagline: 'Universal cashless medical coverage of ₹5 Lakh per family per year across 1,000+ top hospitals in Maharashtra.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Maharashtra)',
    stateApplicability: 'Maharashtra',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MH',
    administeringGovernment: 'Government of Maharashtra',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['All Resident Families of Maharashtra (Universal)', 'White, Orange & Yellow Ration Card Holders', 'Farmers in Distress Districts'],
    shortSummary: 'Universal health insurance covering all 12+ Crore citizens of Maharashtra with ₹5 Lakh cashless hospitalization per family per year across 1,350+ medical and surgical procedures in private and government hospitals.',
    fullDescription: 'MJPJAY provides universal tertiary health security for every family in Maharashtra. With coverage expanded to all ration card holders (Yellow, Orange, and White cards), any resident family can access up to ₹5 Lakh cashless treatment per year for cardiac surgeries, oncology, nephrology, organ transplants, poly-trauma, and intensive care across premier hospitals in Mumbai, Pune, Nagpur, and all 36 districts.',
    financialBenefit: '₹5,00,000 / family / year universal cashless hospitalization coverage',
    keyObjectives: [
      'Provide 100% universal healthcare protection across all 12 Crore residents of Maharashtra',
      'Eliminate catastrophic debt from complex surgeries, cancer therapy, and ICU hospitalizations',
      'Provide cashless admission across premier multi-specialty private and trust hospitals'
    ],
    eligibilityRules: {
      stateResidence: 'Maharashtra',
      notes: 'All permanent resident families of Maharashtra possessing a valid state ration card (Yellow, Orange, or White) or domicile certificate.'
    },
    eligibilityHighlights: [
      'Universal eligibility for all resident families of Maharashtra',
      'Valid Yellow, Orange, or White Ration card, or Maharashtra Domicile certificate',
      'Covers pre-existing diseases from day one with zero co-payment'
    ],
    exclusions: [
      'Central government employees covered under CGHS or defense medical services'
    ],
    requiredDocuments: [
      {
        id: 'doc-mh-mjp-ration',
        name: 'Maharashtra State Ration Card (Yellow / Orange / White)',
        category: 'income',
        purpose: 'Family identification and scheme entitlement',
        citizenTip: 'Check digital ration card on mahafood.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-mh-mjp-aadhaar',
        name: 'Aadhaar Card of the Admitted Patient',
        category: 'identity',
        purpose: 'Biometric identity verification at hospital Arogya Mitra counter',
        citizenTip: 'Aadhaar e-KYC is mandatory during pre-authorization.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Visit Empaneled Hospital Arogya Mitra Helpdesk',
        description: 'Present your ration card and Aadhaar at the Arogya Mitra counter in any empaneled hospital.',
        portalOrOffice: 'Hospital Arogya Mitra Counter'
      },
      {
        stepNumber: 2,
        title: 'Online Pre-Authorization Request',
        description: 'Hospital submits online pre-authorization request with diagnostic reports to State Health Assurance Society.',
        portalOrOffice: 'MJPJAY Portal'
      },
      {
        stepNumber: 3,
        title: 'Cashless Treatment & Free Discharge Medicines',
        description: 'Patient receives cashless surgery, ICU care, diagnostics, and up to 10 days of post-discharge medicines.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'State Health Assurance Society, Maharashtra',
      url: 'https://jeevandayee.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Public Health Department, Government of Maharashtra',
      helpline: '155388 / 1800-233-2200',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official universal health insurance portal of Maharashtra.'
    }
  },
  {
    id: 'mh-namo-shetkari-mahasanman',
    name: 'Namo Shetkari Maha Samman Nidhi (Maharashtra Farmer State Top-Up Scheme)',
    hindiName: 'नमो शेतकरी महासन्मान निधि (महाराष्ट्र कृषक राज्य टॉप-अप सहायता)',
    teluguName: 'నమో షేత్కారీ మహాసమ్మాన్ నిధి పథకం (మహారాష్ట్ర)',
    tamilName: 'நமோ ஷேத்காரி மகா சம்மான் நிதி திட்டம் (மகாராஷ்டிரா)',
    tagline: 'Additional ₹6,000/year state cash grant to PM-KISAN farmers in Maharashtra, raising total to ₹12,000/year.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Maharashtra)',
    stateApplicability: 'Maharashtra',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MH',
    administeringGovernment: 'Government of Maharashtra',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Maharashtra Landowner Farmers', 'Small & Marginal Cultivators', 'PM-KISAN Enrolled Families in MH'],
    shortSummary: 'Supplementary farmer income assistance providing ₹6,000 annually from state funds in three ₹2,000 installments directly into farmer bank accounts, combining with PM-KISAN for a total of ₹12,000/year.',
    fullDescription: 'The Namo Shetkari Maha Samman Nidhi Yojana supports over 90 Lakh farmer families across Vidarbha, Marathwada, and Western Maharashtra. To mitigate weather uncertainties and rising agricultural input costs, the Government of Maharashtra matches the central PM-KISAN allocation with ₹6,000 state funds per year, distributed seamlessly in three equal seasonal disbursements via Aadhaar DBT.',
    financialBenefit: '₹6,000 / year additional state financial grant (Combined ₹12,000 / year with PM-KISAN)',
    keyObjectives: [
      'Provide supplementary seasonal liquidity for seeds, fertilizers, and drip irrigation maintenance',
      'Alleviate agrarian debt distress in drought-prone Marathwada and Vidarbha districts',
      'Ensure 100% automated DBT without requiring fresh manual registrations'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Cultivator'],
      stateResidence: 'Maharashtra',
      notes: 'Resident farmer family in Maharashtra holding verified cultivable land and receiving Central PM-KISAN installments.'
    },
    eligibilityHighlights: [
      'Permanent resident farmer of Maharashtra',
      'Active verified beneficiary status under PM-KISAN scheme',
      'Land records (7/12) linked with Aadhaar and Mahabhulekh'
    ],
    exclusions: [
      'Institutional landholders and income tax paying families',
      'Serving/retired government employees'
    ],
    requiredDocuments: [
      {
        id: 'doc-mh-nsm-ror',
        name: 'Land Record (7/12 Extract & 8-A Record)',
        category: 'land',
        purpose: 'Verify agricultural land ownership in Maharashtra',
        citizenTip: 'Download signed 7/12 extract from mahabhumi.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-mh-nsm-aadhaar',
        name: 'Aadhaar Card of Farmer',
        category: 'identity',
        purpose: 'Biometric identity verification and DBT routing',
        citizenTip: 'Aadhaar must be seeded with active bank account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Verify PM-KISAN Active Status',
        description: 'Ensure PM-KISAN e-KYC and land seeding are marked Yes on pmkisan.gov.in.',
        portalOrOffice: 'pmkisan.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Automatic Mahabhulekh Seeding',
        description: 'State agriculture portal automatically matches verified PM-KISAN beneficiaries in Maharashtra.',
        portalOrOffice: 'Automated System Integration'
      },
      {
        stepNumber: 3,
        title: 'DBT Credit of ₹2,000 Installments',
        description: 'Three installments of ₹2,000 each are credited directly to the farmer Aadhaar-seeded bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture, Government of Maharashtra',
      url: 'https://krishi.maharashtra.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Agriculture',
      helpline: '1800-120-8040',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official farmer portal of Maharashtra Agriculture Department.'
    }
  },
  {
    id: 'mh-ladka-bhau-yuva-karya',
    name: 'Mukhyamantri Yuva Karya Prashikshan Yojana (Ladka Bhau Youth Internship Stipends)',
    hindiName: 'मुख्यमंत्री युवा कार्य प्रशिक्षण योजना (लाड़का भाऊ युवा इंटर्नशिप स्टाइपेंड)',
    teluguName: 'ముఖ్యమంత్రి యువ కార్య ప్రశిక్షణ్ పథకం (మహారాష్ట్ర)',
    tamilName: 'முதலமைச்சர் யுவ கார்ய பயிற்சி திட்டம் (மகாராஷ்டிரா)',
    tagline: 'Monthly on-the-job training stipend of ₹6,000 to ₹10,000 for 6 months for 12th pass, ITI, and graduate youths.',
    category: 'unemployment-skills',
    categoryLabel: 'Employment & Skills',
    geographicScope: 'State Scheme (Maharashtra)',
    stateApplicability: 'Maharashtra',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MH',
    administeringGovernment: 'Government of Maharashtra',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Unemployed Educated Youths (Aged 18-35)', '12th Pass Students', 'ITI & Polytechnic Diploma Holders', 'Degree & Post-Graduate Youths'],
    shortSummary: 'Subsidized 6-month industry apprenticeship program providing monthly stipends of ₹6,000 (12th pass), ₹8,000 (ITI/Diploma), and ₹10,000 (Graduates) deposited directly by the state government.',
    fullDescription: 'Popularly known as the "Ladka Bhau" scheme, the Mukhyamantri Yuva Karya Prashikshan Yojana bridges the gap between education and industrial employment across Maharashtra. Youths aged 18 to 35 undergo 6 months of paid on-the-job internship in registered private enterprises, industries, and government corporations. The state government directly pays the monthly stipend into candidate bank accounts, enhancing youth employability.',
    financialBenefit: 'Monthly stipend for 6 months: ₹6,000 (12th Pass), ₹8,000 (ITI/Diploma), ₹10,000 (Degree/PG) via DBT',
    keyObjectives: [
      'Provide practical workplace experience and job-ready skills to educated unemployed youths',
      'Incentivize Maharashtra MSMEs and industries to take on apprentices with 100% government stipend support',
      'Facilitate transition of interns into full-time permanent corporate employment'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 35,
      stateResidence: 'Maharashtra',
      notes: 'Resident of Maharashtra aged 18 to 35 who has cleared 12th pass, ITI, polytechnic diploma, graduate, or postgraduate degree, currently unemployed.'
    },
    eligibilityHighlights: [
      'Permanent resident / domicile of Maharashtra aged 18-35 years',
      'Minimum qualification: 12th pass, ITI, Diploma, Graduate, or Post-Graduate',
      'Aadhaar-seeded bank account for stipend DBT'
    ],
    exclusions: [
      'Full-time permanent employees in organized private or government sector'
    ],
    requiredDocuments: [
      {
        id: 'doc-mh-lb-qual',
        name: 'Educational Marksheets and Passing Certificates',
        category: 'academic',
        purpose: 'Verify qualification level (12th/ITI/Diploma/Degree)',
        citizenTip: 'Upload clear scans on rojgar.mahaswayam.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-mh-lb-aadhaar',
        name: 'Aadhaar Card and Domicile Certificate',
        category: 'identity',
        purpose: 'Age, identity, and Maharashtra residence verification',
        citizenTip: 'Aadhaar OTP is required during registration.',
        isMandatory: true
      },
      {
        id: 'doc-mh-lb-bank',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Monthly stipend credit destination',
        citizenTip: 'Check with bank that direct credit is active.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register on Mahaswayam Employment Portal',
        description: 'Register as a candidate on rojgar.mahaswayam.gov.in and apply for notified training internships.',
        portalOrOffice: 'rojgar.mahaswayam.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Internship Matching & Industry Joining',
        description: 'Candidate matches with an employer establishment and signs 6-month apprenticeship agreement.',
        portalOrOffice: 'Industrial Establishment'
      },
      {
        stepNumber: 3,
        title: 'Monthly Stipend DBT Disbursal',
        description: 'Monthly stipend (₹6,000 to ₹10,000) is credited directly to candidate account upon monthly attendance verification.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Skill Development, Employment and Entrepreneurship Department, Maharashtra',
      url: 'https://rojgar.mahaswayam.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Skill Development, Employment and Entrepreneurship Department',
      helpline: '1800-120-8040',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Mahaswayam skill and youth internship portal.'
    }
  },
  {
    id: 'mh-sanjay-gandhi-niradhar-anudan',
    name: 'Sanjay Gandhi Niradhar Anudan Yojana (Maharashtra Destitute Social Security Pension)',
    hindiName: 'संजय गांधी निराधार अनुदान योजना (महाराष्ट्र निराधार सामाजिक सुरक्षा पेंशन)',
    teluguName: 'సంజయ్ గాంధీ నిరాధార్ అనుదాన్ పథకం (మహారాష్ట్ర)',
    tamilName: 'சஞ்சய் காந்தி நிராதார் அனுதான் திட்டம் (மகாராஷ்டிரா)',
    tagline: 'Monthly social security pension of ₹1,500 for destitute senior citizens, widows, and severely disabled persons.',
    category: 'pension',
    categoryLabel: 'Pensions & Social Security',
    geographicScope: 'State Scheme (Maharashtra)',
    stateApplicability: 'Maharashtra',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'MH',
    administeringGovernment: 'Government of Maharashtra',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Destitute Elderly Persons (Age 65+)', 'Widows and Divorced Women', 'Persons with Severe Disabilities (40%+)', 'Transgender Persons'],
    shortSummary: 'Essential social security safety net providing ₹1,500 per month (₹18,000/year) directly via DBT to destitute citizens who have no source of independent income or family sustenance.',
    fullDescription: 'The Sanjay Gandhi Niradhar Anudan Yojana (SGNAY) provides direct financial assistance to the most destitute citizens of Maharashtra. Handled by the Revenue & Forest Department, the pension provides ₹1,500 monthly for a single destitute beneficiary (and ₹1,500 per family plus ₹500 for each child up to 2 children for widows). Beneficiaries include elderly persons aged 65+, destitute widows, persons with 40%+ disability, and cancer/paralysis patients.',
    financialBenefit: '₹1,500 / month direct benefit transfer into beneficiary bank account',
    keyObjectives: [
      'Provide basic financial subsistence to destitute individuals without family breadwinners',
      'Shield vulnerable widows, disabled persons, and abandoned elderly from starvation and neglect',
      'Operate automated monthly bank credits via Sanjay Gandhi Taluka Committees'
    ],
    eligibilityRules: {
      maxIncome: 21000,
      stateResidence: 'Maharashtra',
      notes: 'Resident of Maharashtra for at least 15 years with family annual income not exceeding ₹21,000. Age 65+ for seniors, widows of any age, PwD with 40%+ disability.'
    },
    eligibilityHighlights: [
      'Resident of Maharashtra for minimum 15 years',
      'Annual family income does not exceed ₹21,000 from all sources',
      'Senior citizen (age 65+), destitute widow, or person with disability (40%+)',
      'Not receiving any other government pension'
    ],
    exclusions: [
      'Families with annual income exceeding ₹21,000',
      'Recipients of regular government retirement or EPF pensions'
    ],
    requiredDocuments: [
      {
        id: 'doc-mh-sgn-residence',
        name: '15-Year Domicile / Residence Certificate',
        category: 'identity',
        purpose: 'Verify 15-year Maharashtra domicile',
        citizenTip: 'Obtain from Tahsildar / Setu Kendra.',
        isMandatory: true
      },
      {
        id: 'doc-mh-sgn-income',
        name: 'Income Certificate (Income under ₹21,000/year)',
        category: 'income',
        purpose: 'Verify destitute income threshold',
        citizenTip: 'Issued by Tahsildar.',
        isMandatory: true
      },
      {
        id: 'doc-mh-sgn-disability',
        name: 'Disability Certificate / Husband Death Certificate',
        category: 'medical',
        purpose: 'Proof of entitlement category',
        citizenTip: 'Issued by Civil Surgeon for disability category.',
        isMandatory: false
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Submit Application at Tahsildar Office or Setu Kendra',
        description: 'Submit SGNAY application form along with income and residence documents at local Tahsildar office or Setu Kendra.',
        portalOrOffice: 'Tahsildar Office / Setu Kendra'
      },
      {
        stepNumber: 2,
        title: 'Approval by Sanjay Gandhi Taluka Committee',
        description: 'Sanjay Gandhi Niradhar Committee headed by local MLA/Tahsildar reviews and sanctions eligible applicants.',
        portalOrOffice: 'Taluka Committee'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹1,500 is credited monthly directly into the beneficiary bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Revenue & Forest Department, Government of Maharashtra',
      url: 'https://revenue.maharashtra.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Revenue & Forest Department',
      helpline: '1800-120-8040',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official destitute pension framework of Government of Maharashtra.'
    }
  },

  // CHHATTISGARH (CG)
  {
    id: 'cg-mahtari-vandan-yojana',
    name: 'Mahtari Vandan Yojana (Chhattisgarh Direct Monthly Women Assistance)',
    hindiName: 'महतारी वंदन योजना (छत्तीसगढ़ महिला मासिक आर्थिक सहायता)',
    teluguName: 'మహతారీ వందన్ పథకం (ఛత్తీస్‌గఢ్)',
    tamilName: 'மஹதாரி வந்தன் திட்டம் (சத்தீஸ்கர்)',
    tagline: 'Direct monthly financial assistance of ₹1,00,000 per family or ₹1,000/month (₹12,000/year) for 70+ Lakh married women.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Chhattisgarh)',
    stateApplicability: 'Chhattisgarh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'CG',
    administeringGovernment: 'Government of Chhattisgarh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Married Women aged 21 and above', 'Widowed, Divorced, and Abandoned Women', 'Homemakers across Chhattisgarh'],
    shortSummary: 'Flagship women empowerment scheme transferring ₹1,000 on the first week of every month directly via DBT into the bank accounts of over 70 Lakh married women across Chhattisgarh.',
    fullDescription: 'The Mahtari Vandan Yojana provides guaranteed individual income to married women across Chhattisgarh to foster health, nutrition, and financial independence. All married women aged 21 or older who are permanent residents of Chhattisgarh receive ₹1,000 per month (₹12,000 annually) directly in their Aadhaar-linked bank accounts with zero paperwork hassles.',
    financialBenefit: '₹1,000 / month (₹12,000 annually) direct benefit transfer into woman bank account',
    keyObjectives: [
      'Empower married women across tribal, rural, and urban Chhattisgarh with guaranteed income',
      'Improve nutritional and medical spending within households',
      'Enhance women decision-making and economic self-reliance'
    ],
    eligibilityRules: {
      minAge: 21,
      targetGender: 'female',
      stateResidence: 'Chhattisgarh',
      notes: 'Married woman residing in Chhattisgarh aged 21 years or older on January 1 of the application year (includes widows, divorcees, and abandoned women).'
    },
    eligibilityHighlights: [
      'Permanent resident of Chhattisgarh',
      'Married woman aged 21 years or above on January 1',
      'Widowed, divorced, and abandoned women are fully eligible',
      'Personal single bank account with active Aadhaar DBT mapping'
    ],
    exclusions: [
      'Families with an income tax payer',
      'Regular government servants or pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-cg-mv-aadhaar',
        name: 'Aadhaar Card of Applicant and Husband',
        category: 'identity',
        purpose: 'Identity, age, and marital record verification',
        citizenTip: 'Aadhaar must be linked to active mobile phone.',
        isMandatory: true
      },
      {
        id: 'doc-cg-mv-marriage',
        name: 'Marriage Certificate / Ration Card / Panchayat Declaration',
        category: 'identity',
        purpose: 'Proof of marriage',
        citizenTip: 'Panchayat or local body certification is accepted if no formal marriage certificate.',
        isMandatory: true
      },
      {
        id: 'doc-cg-mv-bank',
        name: 'Aadhaar-Enabled Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer payment destination',
        citizenTip: 'Must be an individual account in applicant own name.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online or at Anganwadi / Panchayat Kendra',
        description: 'Submit form on mahtarivandan.cgstate.gov.in or at nearest Anganwadi center or Gram Panchayat.',
        portalOrOffice: 'mahtarivandan.cgstate.gov.in / Anganwadi'
      },
      {
        stepNumber: 2,
        title: 'Supervisory Verification & Final List Publication',
        description: 'Child Development Project Officer (CDPO) verifies records and publishes approved beneficiary list.',
        portalOrOffice: 'CDPO Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: '₹1,000 is credited directly into the applicant bank account by the 7th of every month.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Chhattisgarh',
      url: 'https://mahtarivandan.cgstate.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '1800-233-4357',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal for Mahtari Vandan Yojana Chhattisgarh.'
    }
  },
  {
    id: 'cg-rajiv-gandhi-kisan-nyay',
    name: 'Krishak Unnati Yojana (Chhattisgarh Paddy Procurement Assistance at ₹3,100/Quintal)',
    hindiName: 'कृषक उन्नति योजना (छत्तीसगढ़ धान उपार्जन ₹३,१००/क्विंटल सहायता)',
    teluguName: 'కృషక్ ఉన్నతి పథకం (ఛత్తీస్‌గఢ్)',
    tamilName: 'கிருஷக் உன்னதி திட்டம் (சத்தீஸ்கர்)',
    tagline: 'Record paddy procurement support paying ₹3,100 per quintal (up to 21 quintals per acre) directly to farmers.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Chhattisgarh)',
    stateApplicability: 'Chhattisgarh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'CG',
    administeringGovernment: 'Government of Chhattisgarh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Paddy Farmers in Chhattisgarh', 'Small & Marginal Cultivators', 'Tribal Farmers holding Forest Patta'],
    shortSummary: 'India highest state paddy procurement payout purchasing paddy from farmers at ₹3,100 per quintal for up to 21 quintals per acre, transferring the difference above MSP directly via DBT.',
    fullDescription: 'The Krishak Unnati Yojana (formerly Rajiv Gandhi Kisan Nyay Yojana) powers Chhattisgarh agrarian economy as the "Rice Bowl of Central India." Farmers sell paddy at Primary Agricultural Credit Societies (PACS) at Central MSP and receive the differential input assistance to reach the guaranteed state price of ₹3,100 per quintal (up to 21 quintals per acre) directly into their bank accounts via DBT, resulting in payments exceeding ₹65,000 per acre.',
    financialBenefit: 'Guaranteed paddy price of ₹3,100 / quintal (up to 21 quintals/acre = ~₹65,100 / acre)',
    keyObjectives: [
      'Guarantee the highest agricultural remunerative returns for paddy farmers in India',
      'Stimulate rural liquidity and consumer spending across Chhattisgarh',
      'Incentivize paddy, pulses, and oilseeds cultivation on small and tribal landholdings'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Cultivator', 'Tribal Forest Rights Holder'],
      stateResidence: 'Chhattisgarh',
      notes: 'Farmer cultivating paddy or notified crops in Chhattisgarh registered on the Unified Farmer Portal (Kisan Panjiyan).'
    },
    eligibilityHighlights: [
      'Resident farmer of Chhattisgarh cultivating paddy, maize, or pulses',
      'Registered on the unified state procurement portal (kisan.cg.nic.in)',
      'Aadhaar-seeded bank account for procurement DBT'
    ],
    exclusions: [
      'Commercial traders and unregistered non-agricultural land brokers'
    ],
    requiredDocuments: [
      {
        id: 'doc-cg-kuy-ror',
        name: 'Land Record (B-1 / P-II Khasra & Rin Pustika)',
        category: 'land',
        purpose: 'Verify agricultural land ownership and sown crop acreage',
        citizenTip: 'Check Khasra details on bhuiyan.cg.nic.in.',
        isMandatory: true
      },
      {
        id: 'doc-cg-kuy-aadhaar',
        name: 'Aadhaar Card of Farmer',
        category: 'identity',
        purpose: 'Biometric identity verification and PACS registration',
        citizenTip: 'Must match name on Rin Pustika.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register on Unified Farmer Portal (Kisan Panjiyan)',
        description: 'Register land and crop details at local PACS cooperative society or on kisan.cg.nic.in.',
        portalOrOffice: 'PACS Society / kisan.cg.nic.in'
      },
      {
        stepNumber: 2,
        title: 'Generate Token and Sell Paddy at Mandi',
        description: 'Book token on Token Tuhar Hath mobile app and sell harvested paddy at nearest cooperative procurement center.',
        portalOrOffice: 'PACS Procurement Mandi'
      },
      {
        stepNumber: 3,
        title: 'Direct Benefit Transfer (DBT)',
        description: 'MSP is paid immediately and the Krishak Unnati bonus difference to ₹3,100/quintal is credited via DBT.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture Development and Farmer Welfare, Chhattisgarh',
      url: 'https://agriportal.cg.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Agriculture Development and Farmer Welfare Department',
      helpline: '1800-233-3663',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Chhattisgarh farmer procurement and welfare portal.'
    }
  },
  {
    id: 'cg-mukhyamantri-kanya-vivah',
    name: 'Mukhyamantri Kanya Vivah Yojana (Chhattisgarh Daughter Wedding Financial Grant)',
    hindiName: 'मुख्यमंत्री कन्या विवाह योजना (छत्तीसगढ़ कन्या विवाह अनुदान)',
    teluguName: 'ముఖ్యమంత్రి కన్యా వివాహ పథకం (ఛత్తీస్‌గఢ్)',
    tamilName: 'முதலமைச்சர் கன்யா விவாஹ திட்டம் (சத்தீஸ்கர்)',
    tagline: 'Direct financial and material assistance of ₹50,000 for the marriage of daughters of poor and BPL families.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Chhattisgarh)',
    stateApplicability: 'Chhattisgarh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'CG',
    administeringGovernment: 'Government of Chhattisgarh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Daughters of BPL Families', 'SC / ST / OBC Poor Families', 'Daughters of Widows'],
    shortSummary: 'Total financial assistance of ₹50,000 per marriage (₹35,000 bank draft to bride, ₹10,000 in wedding gifts/jewellery, and ₹5,000 mass wedding event cost) to prevent marriage debt distress.',
    fullDescription: 'The Mukhyamantri Kanya Vivah Yojana ensures poor families across Chhattisgarh can celebrate daughter weddings with dignity. Managed by the Women & Child Development Department, the assistance package was enhanced to ₹50,000 per beneficiary. The bride receives ₹35,000 as a direct bank draft/DBT for starting marital life, ₹10,000 in essential household utensils and gifts, and ₹5,000 spent on conducting organized mass wedding ceremonies.',
    financialBenefit: '₹50,000 total assistance (₹35,000 cash grant to bride + ₹10,000 household gifts + ₹5,000 ceremony expenses)',
    keyObjectives: [
      'Eliminate dowry exploitation and private moneylender debt for impoverished parents',
      'Promote simple, registered community weddings and eradicate child marriages',
      'Provide direct liquid capital to the newly wedded bride'
    ],
    eligibilityRules: {
      minAge: 18,
      targetGender: 'female',
      isBPLRequired: true,
      stateResidence: 'Chhattisgarh',
      notes: 'Bride must be 18+ and groom 21+. Resident of Chhattisgarh holding BPL card or Antyodaya ration card, applicable up to two daughters per family.'
    },
    eligibilityHighlights: [
      'Permanent resident of Chhattisgarh',
      'Family must be listed in Below Poverty Line (BPL) or Antyodaya registry',
      'Bride minimum 18 years of age, groom minimum 21 years of age',
      'Capped at maximum two daughters per household'
    ],
    exclusions: [
      'Families not belonging to BPL category',
      'Underage child marriages'
    ],
    requiredDocuments: [
      {
        id: 'doc-cg-mkv-bpl',
        name: 'BPL Ration Card / BPL Survey Certificate',
        category: 'income',
        purpose: 'Proof of poverty threshold entitlement',
        citizenTip: 'Check card on khadya.cg.nic.in.',
        isMandatory: true
      },
      {
        id: 'doc-cg-mkv-age',
        name: 'Age Proof of Bride and Groom (Birth Certificate / School Marksheet)',
        category: 'identity',
        purpose: 'Verify legal marriageable age (Bride 18+, Groom 21+)',
        citizenTip: 'Aadhaar card or voter ID is accepted.',
        isMandatory: true
      },
      {
        id: 'doc-cg-mkv-bank',
        name: 'Bank Account Passbook of the Bride',
        category: 'bank',
        purpose: 'Disbursement of ₹35,000 bank draft / DBT',
        citizenTip: 'Account must be opened in bride sole name.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through CDPO Office or Anganwadi Worker',
        description: 'Submit application along with age and BPL proof to local Child Development Project Officer (CDPO).',
        portalOrOffice: 'Block CDPO Office / Anganwadi'
      },
      {
        stepNumber: 2,
        title: 'Verification by Women & Child Development Department',
        description: 'Department verifies age, residence, and BPL credentials and registers couple for mass marriage.',
        portalOrOffice: 'District WCD Office'
      },
      {
        stepNumber: 3,
        title: 'Ceremony Solemnization & Grant Handover',
        description: 'During the mass wedding ceremony, bride receives ₹35,000 bank draft, ₹10,000 gift articles, and marriage certificate.',
        portalOrOffice: 'Mass Wedding Venue'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Chhattisgarh',
      url: 'https://wcd.cg.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '0771-2234192',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal of the Women and Child Development Department Chhattisgarh.'
    }
  },
  {
    id: 'cg-godhan-nyay-yojana',
    name: 'Godhan Nyay Yojana (Chhattisgarh Cow Dung & Vermicompost Rural Income)',
    hindiName: 'गोधन न्याय योजना (छत्तीसगढ़ गोबर क्रय एवं वर्मीकम्पोस्ट ग्रामीण आजीविका)',
    teluguName: 'గోధన్ న్యాయ్ పథకం (ఛత్తీస్‌గఢ్)',
    tamilName: 'கோதன் நியாய் திட்டம் (சத்தீஸ்கர்)',
    tagline: 'State procurement of cow dung at ₹2/kg at Gauthans, generating steady supplementary rural incomes for SHGs and cattle rearers.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Chhattisgarh)',
    stateApplicability: 'Chhattisgarh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'CG',
    administeringGovernment: 'Government of Chhattisgarh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Cattle Rearers & Pastoralists', 'Women Self-Help Groups (SHGs)', 'Landless Rural Laborers'],
    shortSummary: 'Innovative rural circular economy scheme purchasing cow dung at ₹2 per kg at local village cattle shelters (Gauthans) to produce vermicompost and natural paint, transferring ₹250+ Crore directly to cattle rearers and SHGs.',
    fullDescription: 'The Godhan Nyay Yojana transforms livestock rearing into a profitable venture by monetizing bovine dung. Operating through over 10,000 village Gauthans, the state buys cattle dung from pastoralists at ₹2/kg. Women Self-Help Groups convert the dung into organic vermicompost, super compost, and natural paints, earning substantial livelihood dividends while promoting organic farming across the state.',
    financialBenefit: 'Direct procurement payment of ₹2/kg of cow dung + vermicompost sales profits for women SHGs via DBT',
    keyObjectives: [
      'Monetize cattle waste to generate steady daily income for rural livestock owners',
      'Promote organic agriculture and reduce dependence on chemical synthetic fertilizers',
      'Empower women SHGs through decentralized vermicompost production units'
    ],
    eligibilityRules: {
      occupations: ['Cattle Rearer', 'Farmer', 'SHG Member', 'Agricultural Laborer'],
      stateResidence: 'Chhattisgarh',
      notes: 'Resident cattle rearer or women SHG member registered at local village Gauthan in Chhattisgarh.'
    },
    eligibilityHighlights: [
      'Permanent resident of Chhattisgarh owning livestock',
      'Registered at nearest village Gauthan committee',
      'Aadhaar-seeded bank account for procurement DBT'
    ],
    exclusions: [
      'Commercial bulk industrial waste not meeting purity standards'
    ],
    requiredDocuments: [
      {
        id: 'doc-cg-gny-gauthan',
        name: 'Gauthan Beneficiary Registration Card',
        category: 'other',
        purpose: 'Verify registration with local village Gauthan committee',
        citizenTip: 'Issued by Gauthan Samiti / Nodal Officer.',
        isMandatory: true
      },
      {
        id: 'doc-cg-gny-aadhaar',
        name: 'Aadhaar Card and Bank Passbook',
        category: 'identity',
        purpose: 'Biometric identity and direct bank payment',
        citizenTip: 'DBT is credited fortnightly directly to bank account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register with Village Gauthan Committee',
        description: 'Register livestock and bank details with local Gauthan Samiti or Gram Panchayat.',
        portalOrOffice: 'Village Gauthan'
      },
      {
        stepNumber: 2,
        title: 'Daily Dung Weighing & Receipt Generation',
        description: 'Deposit dung daily at Gauthan weighing scale and receive digital receipt on mobile app.',
        portalOrOffice: 'Gauthan Weighing Center'
      },
      {
        stepNumber: 3,
        title: 'Fortnightly DBT Payment',
        description: 'State Agriculture Department transfers procurement payments directly to bank accounts every 15 days.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Agriculture Development and Farmer Welfare, Chhattisgarh',
      url: 'https://agriportal.cg.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Agriculture Development and Farmer Welfare Department',
      helpline: '1800-233-3663',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official Godhan Nyay portal of Government of Chhattisgarh.'
    }
  },
  {
    id: 'cg-dr-khoobchand-baghel-swasthya',
    name: 'Dr. Khoobchand Baghel Swasthya Sahayata Yojana (Chhattisgarh Cashless Health Insurance)',
    hindiName: 'डॉ. खूबचंद बघेल स्वास्थ्य सहायता योजना (छत्तीसगढ़ कैशलेस स्वास्थ्य बीमा)',
    teluguName: 'డాక్టర్ ఖూబ్‌చంద్ బాఘేల్ స్వాస్థ్య సహాయతా పథకం',
    tamilName: 'டாக்டர் கூப்சந்த் பாகேல் சுவாஸ்திய திட்டம் (சத்தீஸ்கர்)',
    tagline: 'Cashless healthcare cover up to ₹5 Lakh per family per year for 65+ Lakh BPL/priority families in Chhattisgarh.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Chhattisgarh)',
    stateApplicability: 'Chhattisgarh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'CG',
    administeringGovernment: 'Government of Chhattisgarh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Priority and Antyodaya Ration Card Holders', 'General Non-Priority Families', 'Low-Income Tribal Families'],
    shortSummary: 'Universal health insurance covering over 65 Lakh families with ₹5 Lakh cashless treatment for priority ration cardholders (and ₹50,000 for general non-priority cardholders) across 800+ empaneled hospitals.',
    fullDescription: 'Dr. Khoobchand Baghel Swasthya Sahayata Yojana (DKBSSY) consolidates multiple health schemes into a single comprehensive healthcare umbrella in Chhattisgarh. Priority and Antyodaya ration cardholders receive ₹5 Lakh annual cashless treatment, while general ration cardholders receive ₹50,000. It covers major cardiology, neurology, pediatric surgery, and oncology procedures in empaneled government and private hospitals.',
    financialBenefit: '₹5,00,000 / family / year cashless hospitalization for priority families (₹50,000 for general families)',
    keyObjectives: [
      'Protect vulnerable rural and tribal families from catastrophic medical spending',
      'Provide cashless secondary and tertiary inpatient healthcare across empaneled hospitals',
      'Ensure 100% cashless admission, treatment, and discharge medications'
    ],
    eligibilityRules: {
      stateResidence: 'Chhattisgarh',
      notes: 'All resident families of Chhattisgarh possessing a valid state food department ration card (Priority/Antyodaya for ₹5 Lakh; General for ₹50,000).'
    },
    eligibilityHighlights: [
      'Permanent resident family in Chhattisgarh',
      'Possesses digital ration card issued by Food & Civil Supplies Department',
      'Covers all family members listed on the ration card'
    ],
    exclusions: [
      'Serving central government employees covered under CGHS'
    ],
    requiredDocuments: [
      {
        id: 'doc-cg-dkb-ration',
        name: 'Chhattisgarh Digital Ration Card',
        category: 'income',
        purpose: 'Verify family structure and coverage ceiling (Priority vs General)',
        citizenTip: 'Check card on khadya.cg.nic.in.',
        isMandatory: true
      },
      {
        id: 'doc-cg-dkb-aadhaar',
        name: 'Aadhaar Card of Admitted Patient',
        category: 'identity',
        purpose: 'Biometric identity verification at hospital helpdesk',
        citizenTip: 'Aadhaar e-KYC is performed at Arogya Mitra counter.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Eligibility via Ration Card',
        description: 'Verify your ration card status on dkbssy.cg.nic.in or at any empaneled hospital.',
        portalOrOffice: 'dkbssy.cg.nic.in / Hospital'
      },
      {
        stepNumber: 2,
        title: 'Visit Empaneled Hospital Arogya Mitra Counter',
        description: 'Present ration card and Aadhaar at the hospital Arogya Mitra desk for cashless pre-authorization.',
        portalOrOffice: 'Hospital Arogya Mitra Desk'
      },
      {
        stepNumber: 3,
        title: 'Cashless Admission and Care',
        description: 'Avail complete cashless surgery, medications, diagnostic tests, and hospitalization up to ₹5 Lakh.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'State Nodal Agency, Directorate of Health Services, Chhattisgarh',
      url: 'https://dkbssy.cg.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health and Family Welfare Department',
      helpline: '104 / 1800-233-0104',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Official portal for Dr. Khoobchand Baghel health insurance scheme in Chhattisgarh.'
    }
  }
];

const fileContent = 'import type { Scheme } from "../../types/scheme";\n\nexport const WEST_STATES_SCHEMES: Scheme[] = ' + JSON.stringify(westSchemes, null, 2) + ';\n';
fs.writeFileSync('D:/civicai/frontend/src/data/schemes/statesWest.ts', fileContent, 'utf8');

const counts = {};
westSchemes.forEach(s => counts[s.stateCode] = (counts[s.stateCode] || 0) + 1);
console.log('West States generation complete! Total schemes:', westSchemes.length);
console.log('Counts per state:', counts);
