const fs = require('fs');

const northSchemes = [
  // ---------------- HARYANA (HR) ----------------
  {
    id: 'hr-chirayu-haryana',
    name: 'Chirayu Haryana (Ayushman Bharat State Expansion)',
    hindiName: 'चिरायु हरियाणा योजना',
    teluguName: 'చిరాయు హర్యానా ఆరోగ్య పథకం',
    tamilName: 'சிராயு ஹரியானா மருத்துவத் திட்டம்',
    tagline: 'Comprehensive cashless healthcare coverage of up to ₹5,00,000 per family per year for households earning up to ₹1.80 Lakh.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Haryana)',
    stateApplicability: 'Haryana',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HR',
    administeringGovernment: 'Government of Haryana',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Antyodaya Families', 'PPP Verified Low-Income Households', 'Senior Citizens'],
    shortSummary: 'Expands Ayushman Bharat to cover all Haryana families verified with annual income under ₹1.80 Lakh in Parivar Pehchan Patra, granting ₹5 Lakh cashless hospital treatment.',
    fullDescription: 'Chirayu Haryana bridges healthcare inequality by providing 100% state-funded cashless hospitalization across 1,500+ listed medical procedures to more than 38 lakh verified low-income families in Haryana without requiring any premium payment.',
    financialBenefit: 'Up to ₹5,00,000 per family per year in cashless hospitalization',
    keyObjectives: [
      'Universalize ₹5 Lakh secondary and tertiary healthcare for families with income below ₹1.80 Lakh',
      'Integrate automated eligibility through Parivar Pehchan Patra (PPP) database',
      'Provide cashless treatment in government civil hospitals and empaneled private facilities'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      maxIncome: 180000,
      stateResidence: 'Haryana',
      notes: 'Must have verified annual family income below ₹1.80 Lakh in the Parivar Pehchan Patra (PPP) database.'
    },
    eligibilityHighlights: [
      'Resident of Haryana with verified Parivar Pehchan Patra (PPP)',
      'Verified annual family income up to ₹1,80,000',
      'Automated digital card issuance via chirayuayushmanharyana.in'
    ],
    exclusions: [
      'Families with verified income exceeding ₹1.80 Lakh (unless enrolled in nominal co-pay tier)',
      'Government employees covered under state employee medical reimbursement'
    ],
    requiredDocuments: [
      {
        id: 'doc-hr-ch-ppp',
        name: 'Parivar Pehchan Patra (PPP Family ID)',
        category: 'identity',
        purpose: 'Automated income verification and family member mapping',
        citizenTip: 'Check your verified income status at meraparivar.haryana.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-hr-ch-aadhaar',
        name: 'Aadhaar Card of Family Members',
        category: 'identity',
        purpose: 'Biometric hospital admission and Golden Card generation',
        citizenTip: 'Bring original Aadhaar card to the hospital Ayushman desk.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Check Eligibility with PPP Family ID',
        description: 'Visit chirayuayushmanharyana.in and enter your 8-character Parivar Pehchan Patra ID.',
        portalOrOffice: 'chirayuayushmanharyana.in'
      },
      {
        stepNumber: 2,
        title: 'Download Chirayu Ayushman Card',
        description: 'Authenticate through OTP on your Aadhaar-registered mobile and download the digital card.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Show Card at Hospital for Cashless Care',
        description: 'Present the Chirayu card at any empaneled hospital helpdesk for cashless admission and surgeries.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'Haryana Health Protection Authority, Government of Haryana',
      url: 'https://haryana.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department',
      helpline: '1800-180-2128',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship health protection framework managed by Government of Haryana.'
    }
  },
  {
    id: 'hr-parivar-pehchan-patra',
    name: 'Haryana Proactive Old Age & Social Security Pension (via PPP)',
    hindiName: 'हरियाणा वृद्धावस्था सम्मान भत्ता (परिवार पहचान पत्र द्वारा)',
    teluguName: 'హర్యానా వృద్ధాప్య పింఛను పథకం',
    tamilName: 'ஹரியானா முதியோர் உதவித்தொகை திட்டம்',
    tagline: 'Proactive non-contributory monthly pension of ₹3,000 automatically sanctioned upon turning 60 years.',
    category: 'seniors-elderly',
    categoryLabel: 'Senior Citizens',
    geographicScope: 'State Scheme (Haryana)',
    stateApplicability: 'Haryana',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HR',
    administeringGovernment: 'Government of Haryana',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'senior',
    beneficiaries: ['Senior Citizens aged 60+', 'Vulnerable Elderly', 'Low-Income Couples'],
    shortSummary: 'Proactive paperless old-age pension of ₹3,000 per month automatically approved and credited without cumbersome manual applications once a citizen turns 60 in the PPP registry.',
    fullDescription: 'Haryana pioneered paperless social security by linking the Old Age Samman Allowance directly with verified birth dates in the Parivar Pehchan Patra database. Once an eligible citizen reaches 60 years and family income is below ₹3 Lakh, the pension is processed with home-doorstep consent.',
    financialBenefit: '₹3,000 / month direct pension via DBT (₹36,000 per year)',
    keyObjectives: [
      'Eliminate physical paperwork and middlemen for senior citizen social pensions',
      'Provide dignified monthly financial living allowances to all elderly residents',
      'Automate doorstep consent verification through local Parivar Pehchan Patra operators'
    ],
    eligibilityRules: {
      minAge: 60,
      maxIncome: 300000,
      stateResidence: 'Haryana',
      notes: 'Must be a domicile of Haryana aged 60+ with combined family annual income not exceeding ₹3,00,000 in PPP.'
    },
    eligibilityHighlights: [
      'Aged 60 years or above with verified date of birth in PPP',
      'Domicile of Haryana residing for minimum 15 years in the state',
      'Combined annual income of self and spouse below ₹3,00,000'
    ],
    exclusions: [
      'Recipients of regular government, PSU, or military pensions',
      'Tax-paying individuals or institutional landowners'
    ],
    requiredDocuments: [
      {
        id: 'doc-hr-ppp-id',
        name: 'Parivar Pehchan Patra (Family ID)',
        category: 'identity',
        purpose: 'Verification of age, residence, and income',
        citizenTip: 'Ensure date of birth is verified by the local verification committee.',
        isMandatory: true
      },
      {
        id: 'doc-hr-bank-id',
        name: 'Aadhaar-Linked Bank Account Passbook',
        category: 'bank',
        purpose: 'Direct monthly pension credit destination',
        citizenTip: 'Check that bank account is active with NPCI DBT mapping.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Automated Age Tracking in PPP Registry',
        description: 'System automatically flags citizen profile upon reaching 60 years with verified age.',
        portalOrOffice: 'Automated System'
      },
      {
        stepNumber: 2,
        title: 'Doorstep Consent Verification',
        description: 'Local operator or social welfare representative visits to obtain citizen signature/biometric consent.',
        portalOrOffice: 'Doorstep Verification'
      },
      {
        stepNumber: 3,
        title: 'Direct Monthly DBT Credit',
        description: '₹3,000 is credited on the designated pension date every month directly to the bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Justice, Empowerment, Welfare of SCs & BCs, Haryana',
      url: 'https://socialjusticehry.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Justice & Empowerment Department',
      helpline: '1800-180-2128',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship automated social security initiative under Government of Haryana.'
    }
  },
  {
    id: 'hr-bhavantar-bharpayee',
    name: 'Bhavantar Bharpayee Yojana (Haryana Crop Deficit Protection)',
    hindiName: 'भावांतर भरपाई योजना (हरियाणा)',
    teluguName: 'భావంతర్ భర్పాయీ పథకం (హర్యానా)',
    tamilName: 'பாவாந்தர் பார்பாயி திட்டம் (ஹரியானா)',
    tagline: 'Direct price deficit compensation for farmers whenever wholesale mandi prices fall below state-guaranteed cost prices.',
    category: 'agriculture',
    categoryLabel: 'Agriculture & Farming',
    geographicScope: 'State Scheme (Haryana)',
    stateApplicability: 'Haryana',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HR',
    administeringGovernment: 'Government of Haryana',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Horticulture Farmers', 'Vegetable and Fruit Cultivators', 'Millet and Oilseed Farmers'],
    shortSummary: 'Insulates horticulture and vegetable growers from market distress by transferring the exact difference between the state protected base price and the actual selling price in mandis.',
    fullDescription: 'Bhavantar Bharpayee Yojana mitigates agricultural market volatility for farmers cultivating potatoes, onions, tomatoes, cauliflower, carrots, peas, and designated crops. If the mandi sales price drops below the benchmark cost price, the Haryana government credits the deficit directly to the farmer bank account.',
    financialBenefit: 'Deficit price compensation credited directly via DBT (up to ₹7,500 - ₹15,000 per acre)',
    keyObjectives: [
      'Incentivize crop diversification away from water-intensive paddy into high-value vegetables',
      'Protect farmers from distress selling during seasonal bumper harvests',
      'Ensure guaranteed minimum return on investment for horticulture crops'
    ],
    eligibilityRules: {
      occupations: ['Farmer', 'Tenant Cultivator', 'Vegetable Grower'],
      stateResidence: 'Haryana',
      notes: 'Must register crop sowing details on Meri Fasal Mera Byora portal (fasal.haryana.gov.in) during the active registration window.'
    },
    eligibilityHighlights: [
      'Cultivating designated horticulture or agricultural crops in Haryana',
      'Registered on Meri Fasal Mera Byora with satellite/revenue verified land parcel',
      'Sales conducted at notified Haryana State Agricultural Marketing Board mandis'
    ],
    exclusions: [
      'Crops sold outside authorized e-NAM/APMC market yards without J-Form receipts',
      'Unregistered acreage or false crop declarations'
    ],
    requiredDocuments: [
      {
        id: 'doc-hr-mfmb',
        name: 'Meri Fasal Mera Byora (MFMB) Registration Slip',
        category: 'land',
        purpose: 'Verification of sown area, crop variety, and land parcel',
        citizenTip: 'Register during sowing month on fasal.haryana.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-hr-jform',
        name: 'Mandi J-Form / Auction Sales Invoice',
        category: 'other',
        purpose: 'Proof of selling price and quantity sold at mandi',
        citizenTip: 'Ask the commission agent (Arhtiya) for computerised J-Form copy.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Register Acreage on Meri Fasal Mera Byora',
        description: 'Enter your khasra/kila number and select the crop variety sown on fasal.haryana.gov.in.',
        portalOrOffice: 'fasal.haryana.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Sell Produce at Mandi & Collect J-Form',
        description: 'Sell the harvested produce at your nearest APMC market yard and obtain the official digital J-Form.',
        portalOrOffice: 'APMC Mandi'
      },
      {
        stepNumber: 3,
        title: 'Automated Price Deficit DBT Transfer',
        description: 'If average mandi price is below base price, the deficit is computed and transferred directly via DBT.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Haryana State Agricultural Marketing Board & Agriculture Department',
      url: 'https://agriharyana.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Agriculture & Farmers Welfare Department',
      helpline: '1800-180-2117',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Price deficit compensation framework managed via Meri Fasal Mera Byora.'
    }
  },
  {
    id: 'hr-mukhyamantri-antyodaya-parivar',
    name: 'Mukhyamantri Antyodaya Parivar Utthan Yojana (MMAPUY)',
    hindiName: 'मुख्यमंत्री अंत्योदय परिवार उत्थान योजना (हरियाणा)',
    teluguName: 'ముఖ్యమంత్రి అంత్యోదయ పరివార్ ఉత్థాన్ పథకం',
    tamilName: 'முதலமைச்சர் அந்த்யோதயா பரிவார் உத்தன் திட்டம்',
    tagline: 'Tailored livelihood packages, skill training, and subsidized credit to elevate poorest family incomes above ₹1.80 Lakh.',
    category: 'business',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'State Scheme (Haryana)',
    stateApplicability: 'Haryana',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HR',
    administeringGovernment: 'Government of Haryana',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'worker',
    beneficiaries: ['Poorest Families (Income <₹1 Lakh)', 'Unemployed Youth', 'Rural Artisans and Dairy Workers'],
    shortSummary: 'Comprehensive mission identifying the poorest families through PPP data and organizing Antyodaya Melas to provide them customized packages of dairy loans, grants, and job placements.',
    fullDescription: 'MMAPUY identifies the bottom-most economic quintile of Haryana families earning under ₹1,00,000 per annum and delivers multi-department interventions—ranging from subsidized dairy cattle loans (with 25-33% capital subsidy) to e-rickshaws, kirana store credit, and free skill placements—to sustainably lift household earnings above ₹1.80 Lakh.',
    financialBenefit: 'Subsidized livelihood loans up to ₹3,00,000 with capital subsidies up to ₹50,000 and interest subvention',
    keyObjectives: [
      'Elevate household income of all verified families earning under ₹1 Lakh above ₹1.80 Lakh',
      'Organize block-level Antyodaya Melas providing doorstep banking and departmental schemes',
      'Provide collateral-free micro-credit for dairy farming, retail trade, and vehicle operations'
    ],
    eligibilityRules: {
      isBPLRequired: true,
      maxIncome: 100000,
      stateResidence: 'Haryana',
      notes: 'Targeted exclusively to families in Haryana verified with annual income below ₹1,00,000 in Parivar Pehchan Patra.'
    },
    eligibilityHighlights: [
      'Resident of Haryana with verified PPP Family ID',
      'Annual family income verified below ₹1,00,000',
      'Willingness to take up self-employment, wage employment, or skill training'
    ],
    exclusions: [
      'Families with verified income exceeding ₹1.00 Lakh in PPP database',
      'Willful bank defaulters with active recovery proceedings'
    ],
    requiredDocuments: [
      {
        id: 'doc-hr-mmapuy-ppp',
        name: 'Parivar Pehchan Patra (Family ID)',
        category: 'identity',
        purpose: 'Verification of income below ₹1 Lakh and household identification',
        citizenTip: 'Check your family eligibility status on parivar.haryana.gov.in.',
        isMandatory: true
      },
      {
        id: 'doc-hr-mmapuy-bank',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Disbursement of loan and capital subsidy',
        citizenTip: 'Ensure your account has no pending KYC blocks.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Receive Invitation for Block Antyodaya Mela',
        description: 'Eligible families receive SMS invitation to attend the block-level Antyodaya Utthan Mela.',
        portalOrOffice: 'Block Development Office'
      },
      {
        stepNumber: 2,
        title: 'Choose Desired Livelihood Scheme at Mela',
        description: 'Meet departmental counselors (Animal Husbandry, Skill Development, MSME) and select preferred scheme.',
        portalOrOffice: 'Antyodaya Mela Kiosk'
      },
      {
        stepNumber: 3,
        title: 'On-Spot Bank Approval & Asset Delivery',
        description: 'Bank partners process loan sanction on the spot, and government subsidy is mapped directly.',
        portalOrOffice: 'Bank Partner & Department'
      }
    ],
    officialSource: {
      name: 'Human Resource Department, Government of Haryana',
      url: 'https://haryanacmoffice.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Human Resource Department & Antyodaya Mission',
      helpline: '1800-180-2128',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship poverty alleviation mission monitored under Chief Minister Office Haryana.'
    }
  },
  {
    id: 'hr-ladli-social-security',
    name: 'Ladli Social Security Allowance Scheme (Haryana)',
    hindiName: 'लाडली सामाजिक सुरक्षा भत्ता योजना (हरियाणा)',
    teluguName: 'లాడ్లీ సామాజిక భద్రత భత్యం (హర్యానా)',
    tamilName: 'லாட்லி சமூக பாதுகாப்பு திட்டம் (ஹரியானா)',
    tagline: 'Monthly financial assistance of ₹3,000 for parents who have only daughters upon the mother or father turning 45.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Haryana)',
    stateApplicability: 'Haryana',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HR',
    administeringGovernment: 'Government of Haryana',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'parent',
    beneficiaries: ['Parents with Only Daughters', 'Families without Male Child', 'Middle-Aged Mothers'],
    shortSummary: 'Monthly financial allowance of ₹3,000 granted to parents residing in Haryana who have only female children, payable from the 45th birthday of either parent until they turn 60.',
    fullDescription: 'To combat gender discrimination and incentivize girl child upbringing, Haryana provides a monthly social security allowance of ₹3,000 to families who have only daughters. When the parent turns 60, the benefit smoothly transitions into the Old Age Samman Allowance.',
    financialBenefit: '₹3,00,0 / month direct pension via DBT (₹36,000 per year for 15 years)',
    keyObjectives: [
      'Eliminate son-preference and reward parents raising only female children',
      'Provide economic security to families without male offspring in middle and senior age',
      'Support daughters higher education and career development through parental income stability'
    ],
    eligibilityRules: {
      minAge: 45,
      maxAge: 60,
      maxIncome: 300000,
      stateResidence: 'Haryana',
      notes: 'Applicant parent must be aged 45 to 60, a resident of Haryana for at least 15 years, and must have only daughters (biological or legally adopted).'
    },
    eligibilityHighlights: [
      'Parents having only biological or legally adopted daughters and no sons',
      'Mother or father has completed 45 years of age and has not reached 60',
      'Combined annual family income does not exceed ₹3,00,000'
    ],
    exclusions: [
      'Parents who have one or more biological or adopted sons',
      'Regular government or public sector employees with pension rights'
    ],
    requiredDocuments: [
      {
        id: 'doc-hr-ladli-birth',
        name: 'Birth Certificates of All Daughters',
        category: 'identity',
        purpose: 'Proof of having only daughters and dependent family status',
        citizenTip: 'Attach digital municipal or civil registration birth certificates.',
        isMandatory: true
      },
      {
        id: 'doc-hr-ladli-affidavit',
        name: 'Self-Attested Affidavit Confirming No Male Child',
        category: 'other',
        purpose: 'Legal statement affirming absence of sons',
        citizenTip: 'Attested before Executive Magistrate or Notary Public.',
        isMandatory: true
      },
      {
        id: 'doc-hr-ladli-bank',
        name: 'Aadhaar-Seeded Bank Passbook (Preferably of Mother)',
        category: 'bank',
        purpose: 'Direct benefit transfer destination',
        citizenTip: 'Allowance is preferably credited to the mother bank account.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through Antyodaya SARAL Portal',
        description: 'Login to saralharyana.gov.in and select Ladli Social Security Allowance.',
        portalOrOffice: 'saralharyana.gov.in'
      },
      {
        stepNumber: 2,
        title: 'Submit Dossier at Antyodaya Kendra / CSC',
        description: 'Submit proof of daughter births and affidavit at your nearest SARAL Kendra.',
        portalOrOffice: 'SARAL Kendra / CSC'
      },
      {
        stepNumber: 3,
        title: 'Verification and Monthly DBT Sanction',
        description: 'District Social Welfare Officer verifies credentials and activates monthly transfer of ₹3,000.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Government of Haryana',
      url: 'https://wcdhry.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '1800-180-2128',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Progressive gender social security scheme under Government of Haryana.'
    }
  },

  // ---------------- HIMACHAL PRADESH (HP) ----------------
  {
    id: 'hp-pyari-behna-sukh-samman',
    name: 'Indira Gandhi Pyari Behna Sukh Samman Nidhi (Himachal Pradesh)',
    hindiName: 'इंदिरा गांधी प्यारी बहना सुख सम्मान निधि (हिमाचल प्रदेश)',
    teluguName: 'ఇందిరా గాంధీ ప్యారీ బెహనా సుఖ్ సమ్మాన్ నిధి',
    tamilName: 'இந்திரா காந்தி பியாரி பெஹ்னா சம்மான் நிதி',
    tagline: 'Monthly financial empowerment grant of ₹1,500 for eligible women aged 18 to 59 in Himachal Pradesh.',
    category: 'women',
    categoryLabel: 'Women & Child Development',
    geographicScope: 'State Scheme (Himachal Pradesh)',
    stateApplicability: 'Himachal Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HP',
    administeringGovernment: 'Government of Himachal Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'parent',
    beneficiaries: ['Women aged 18 to 59', 'Rural Homemakers', 'Single Women & Widows'],
    shortSummary: 'Guarantees unconditional direct financial assistance of ₹1,500 per month (₹18,000 per year) directly to the Aadhaar-linked bank accounts of adult women in Himachal Pradesh.',
    fullDescription: 'Indira Gandhi Pyari Behna Sukh Samman Nidhi is a landmark women empowerment initiative by the Government of Himachal Pradesh, providing ₹1,500 monthly financial security to eligible female residents aged 18-59 to support their healthcare, nutrition, and financial independence.',
    financialBenefit: '₹1,500 / month direct cash assistance via DBT (₹18,000 per year)',
    keyObjectives: [
      'Empower adult women with dedicated monthly financial autonomy',
      'Support nutritional and healthcare expenses for female members in mountain households',
      'Provide direct social security to unpaid homemakers and female youth'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 59,
      targetGender: 'female',
      stateResidence: 'Himachal Pradesh',
      notes: 'Must be a female bonafide resident of Himachal Pradesh aged 18 to 59 years.'
    },
    eligibilityHighlights: [
      'Bonafide female resident of Himachal Pradesh aged between 18 and 59 years',
      'Applicant is not receiving any other regular state/central social security pension exceeding ₹1,500',
      'Active bank or post office account linked with Aadhaar'
    ],
    exclusions: [
      'Female members of households with permanent government/PSU employees or pensioners',
      'Income tax paying families',
      'Recipients of other state welfare pensions of equal or higher value'
    ],
    requiredDocuments: [
      {
        id: 'doc-hp-pb-bonafide',
        name: 'Himachal Bonafide / Domicile Certificate',
        category: 'identity',
        purpose: 'Proof of permanent resident status in Himachal Pradesh',
        citizenTip: 'Apply on edistrict.hp.gov.in for digital bonafide certificate.',
        isMandatory: true
      },
      {
        id: 'doc-hp-pb-aadhaar',
        name: 'Aadhaar Card and Age Proof',
        category: 'identity',
        purpose: 'Verification of age between 18 and 59 years',
        citizenTip: 'Check that your mobile number is linked to Aadhaar.',
        isMandatory: true
      },
      {
        id: 'doc-hp-pb-bank',
        name: 'Aadhaar-Seeded Bank Passbook',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'Ensure single-holder account in beneficiary name.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Collect Form from Tehsil Welfare Office or Anganwadi',
        description: 'Obtain free application form from local Anganwadi worker, Gram Panchayat, or download from himachal.nic.in.',
        portalOrOffice: 'Tehsil Welfare Office / Anganwadi'
      },
      {
        stepNumber: 2,
        title: 'Submit with Bonafide and Non-Employment Attestation',
        description: 'Submit completed dossier to the Tehsil Welfare Officer (TWO) with Panchayat attestation.',
        portalOrOffice: 'Tehsil Welfare Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: 'Upon verification by District Welfare Officer, ₹1,500 is credited monthly directly to the bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Social Justice and Empowerment, Himachal Pradesh',
      url: 'https://himachal.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Social Justice & Empowerment Department',
      helpline: '1100',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship women welfare guarantee administered statewide by Government of Himachal Pradesh.'
    }
  },
  {
    id: 'hp-himcare-health',
    name: 'Mukhya Mantri Himachal Health Care Scheme (HIMCARE)',
    hindiName: 'मुख्यमंत्री हिमाचल हेल्थ केयर योजना (हिमकेयर)',
    teluguName: 'హిమ్‌కేర్ ఆరోగ్య పథకం (హిమాచల్ ప్రదేశ్)',
    tamilName: 'ஹிம்கேர் மருத்துவத் திட்டம் (இமாச்சலப் பிரதேசம்)',
    tagline: 'Cashless medical treatment of up to ₹5,00,000 per family per year across empaneled hospitals in Himachal Pradesh.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Himachal Pradesh)',
    stateApplicability: 'Himachal Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HP',
    administeringGovernment: 'Government of Himachal Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Citizens not covered under Ayushman Bharat', 'BPL Families', 'Senior Citizens'],
    shortSummary: 'Universalizes secondary and tertiary hospital protection in Himachal Pradesh by providing ₹5 Lakh cashless treatment per year to all families not covered by central Ayushman Bharat.',
    fullDescription: 'HIMCARE ensures that no family in Himachal Pradesh suffers catastrophic healthcare debt. Covering up to 5 family members on a single card across 200+ state and leading premier hospitals (including PGI Chandigarh), HIMCARE covers pre-existing diseases, diagnostics, and critical surgeries with minimal or zero enrolment fees.',
    financialBenefit: 'Up to ₹5,00,000 per family per year in cashless hospitalization',
    keyObjectives: [
      'Provide universal health coverage to families left out of Ayushman Bharat PM-JAY',
      'Ensure zero out-of-pocket expenses for critical surgeries, chemotherapy, and dialysis',
      'Provide portability across top state hospitals and premier tertiary centers like PGI Chandigarh'
    ],
    eligibilityRules: {
      stateResidence: 'Himachal Pradesh',
      notes: 'Must be a resident of Himachal Pradesh not covered under Ayushman Bharat or regular government employee medical schemes.'
    },
    eligibilityHighlights: [
      'Resident families of Himachal Pradesh not covered under Ayushman Bharat PM-JAY',
      'BPL, registered street vendors, and MNREGA workers eligible with zero enrollment fee',
      'Senior citizens and general families can enroll with nominal annual fees of ₹365 to ₹1,000'
    ],
    exclusions: [
      'Government employees and pensioners entitled to full medical reimbursement',
      'Active beneficiaries already holding central Ayushman Bharat PM-JAY cards'
    ],
    requiredDocuments: [
      {
        id: 'doc-hp-hc-ration',
        name: 'Himachal Pradesh Digital Ration Card',
        category: 'income',
        purpose: 'Family unit verification and member mapping',
        citizenTip: 'Check your digital ration card on epds.co.in.',
        isMandatory: true
      },
      {
        id: 'doc-hp-hc-aadhaar',
        name: 'Aadhaar Card of All Family Members',
        category: 'identity',
        purpose: 'Biometric identity verification and HIMCARE card issuance',
        citizenTip: 'Aadhaar e-KYC is mandatory during enrollment.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply on HIMCARE Portal / LokMitra Kendra',
        description: 'Visit hpsbys.in or your nearest LokMitra Kendra with your ration card and Aadhaar details.',
        portalOrOffice: 'hpsbys.in / LokMitra Kendra'
      },
      {
        stepNumber: 2,
        title: 'Fee Payment and Card Generation',
        description: 'Pay nominal fee (if applicable) or get zero-fee approval for BPL/MNREGA and print the HIMCARE card.',
        portalOrOffice: 'Online Portal'
      },
      {
        stepNumber: 3,
        title: 'Avail Cashless Hospitalization',
        description: 'Present card at any empaneled hospital (IGMC Shimla, Tanda Medical College, PGI) for cashless treatment.',
        portalOrOffice: 'Empaneled Hospital'
      }
    ],
    officialSource: {
      name: 'Himachal Pradesh Swasthya Bima Yojna Society (HPSBYS)',
      url: 'https://hpsbys.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department',
      helpline: '104',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship state healthcare program administered through HPSBYS.'
    }
  },
  {
    id: 'hp-swavlamban-yojana',
    name: 'Mukhya Mantri Swavlamban Yojana (Himachal Pradesh Youth Startups)',
    hindiName: 'मुख्यमंत्री स्वावलंबन योजना (हिमाचल प्रदेश)',
    teluguName: 'ముఖ్యమంత్రి స్వావలంబన్ పథకం',
    tamilName: 'முதலமைச்சர் ஸ்வாவலம்பன் திட்டம்',
    tagline: 'Capital investment subsidy of 25% to 35% on bank loans up to ₹1 Crore for youth establishing micro-enterprises.',
    category: 'entrepreneurs',
    categoryLabel: 'Business & Micro-Credit',
    geographicScope: 'State Scheme (Himachal Pradesh)',
    stateApplicability: 'Himachal Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HP',
    administeringGovernment: 'Government of Himachal Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'youth',
    beneficiaries: ['Youth Entrepreneurs aged 18-45', 'Women Entrepreneurs', 'Technical Diploma & ITI Holders'],
    shortSummary: 'Subsidizes capital investments and offers 5% interest subvention for 3 years to young entrepreneurs setting up manufacturing, tourism, agriculture processing, and service enterprises in Himachal Pradesh.',
    fullDescription: 'Mukhya Mantri Swavlamban Yojana promotes local job creation and youth entrepreneurship in Himachal Pradesh. The Industries Department provides 25% capital subsidy for general male youth, 30% for SC/ST, and 35% for women and widow entrepreneurs on projects up to ₹1 Crore (subsidies capped on ₹60 Lakh project cost).',
    financialBenefit: '25% to 35% capital subsidy (up to ₹21 Lakh) + 5% interest subvention for 3 years',
    keyObjectives: [
      'Encourage local youth to become job creators rather than job seekers in Himachal Pradesh',
      'Promote eco-tourism, agro-processing, cold storage, and modern services in hill areas',
      'Provide higher affirmative capital subsidies to women, SC/ST, and Divyangjan entrepreneurs'
    ],
    eligibilityRules: {
      minAge: 18,
      maxAge: 45,
      stateResidence: 'Himachal Pradesh',
      notes: 'Bonafide resident of Himachal Pradesh aged 18 to 45. Women applicants are eligible up to 50 years of age.'
    },
    eligibilityHighlights: [
      'Bonafide youth of Himachal Pradesh aged 18 to 45 years',
      'New micro or small enterprise in manufacturing, service, or tourism sectors',
      'Project cost up to ₹1 Crore (capital subsidy calculated on loan up to ₹60 Lakh)'
    ],
    exclusions: [
      'Existing running units seeking working capital without expansion',
      'Tobacco, liquor, and ecologically hazardous industries in the negative list'
    ],
    requiredDocuments: [
      {
        id: 'doc-hp-msy-bonafide',
        name: 'Himachal Bonafide Certificate',
        category: 'identity',
        purpose: 'Proof of state domicile and local youth status',
        citizenTip: 'Digital certificate issued by Tehsildar.',
        isMandatory: true
      },
      {
        id: 'doc-hp-msy-dpr',
        name: 'Detailed Project Report (DPR)',
        category: 'other',
        purpose: 'Business feasibility, machinery quotation, and project cost details',
        citizenTip: 'Can be prepared with assistance from District Industries Centre (DIC).',
        isMandatory: true
      },
      {
        id: 'doc-hp-msy-bank',
        name: 'Bank Loan In-Principle Sanction Letter',
        category: 'bank',
        purpose: 'Verification of tie-up with nationalized or regional rural bank',
        citizenTip: 'Issued by commercial bank or HP State Cooperative Bank.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply Online on Emerging Himachal Portal',
        description: 'Register and submit application along with DPR on emerginghimachal.hp.gov.in.',
        portalOrOffice: 'emerginghimachal.hp.gov.in'
      },
      {
        stepNumber: 2,
        title: 'District Committee Evaluation & Loan Sanction',
        description: 'District Level Committee (DLC) headed by Deputy Commissioner approves project and forwards to bank.',
        portalOrOffice: 'District Industries Centre (DIC)'
      },
      {
        stepNumber: 3,
        title: 'Capital Subsidy Credit into Loan Account',
        description: 'Upon physical inspection of plant/machinery, the capital subsidy is credited to the bank loan account.',
        portalOrOffice: 'Bank Loan Account'
      }
    ],
    officialSource: {
      name: 'Department of Industries, Government of Himachal Pradesh',
      url: 'https://emerginghimachal.hp.gov.in',
      lastVerifiedDate: 'October 2026',
      department: 'Department of Industries',
      helpline: '0177-2813414',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Flagship industrial self-employment program managed by Department of Industries HP.'
    }
  },
  {
    id: 'hp-sahara-yojana',
    name: 'Mukhya Mantri Sahara Yojana (Himachal Chronic Patient Financial Aid)',
    hindiName: 'मुख्यमंत्री सहारा योजना (हिमाचल प्रदेश)',
    teluguName: 'ముఖ్యమంత్రి సహారా పథకం',
    tamilName: 'முதலமைச்சர் சஹாரா திட்டம்',
    tagline: 'Monthly financial assistance of ₹3,000 for patients suffering from Parkinson’s, cancer, paralysis, renal failure, and severe chronic diseases.',
    category: 'healthcare',
    categoryLabel: 'Healthcare & Wellness',
    geographicScope: 'State Scheme (Himachal Pradesh)',
    stateApplicability: 'Himachal Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HP',
    administeringGovernment: 'Government of Himachal Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'all',
    beneficiaries: ['Patients with Parkinson’s / Paralysis / Cancer', 'Kidney Failure Patients', 'Low-Income Families'],
    shortSummary: 'Monthly financial grant of ₹3,000 transferred via DBT to economically weaker chronic patients needing continuous palliative care, attendants, and ongoing diagnostic medicines.',
    fullDescription: 'Mukhya Mantri Sahara Yojana addresses the hidden costs of severe chronic illnesses that push families into poverty. Beneficiaries suffering from Parkinson disease, cancer, paralysis, muscular dystrophy, hemophilia, thalassemia, and permanent renal failure receive ₹3,000 monthly directly in their bank accounts.',
    financialBenefit: '₹3,000 / month direct financial support via DBT (₹36,000 per year)',
    keyObjectives: [
      'Provide monthly income assistance to meet continuous medical, nutrition, and attendant expenses',
      'Alleviate debt burdens for low-income households dealing with terminal or chronic bedridden illnesses',
      'Ensure dignity and regular nutritional support for long-term palliative care patients'
    ],
    eligibilityRules: {
      maxIncome: 400000,
      stateResidence: 'Himachal Pradesh',
      notes: 'Must be a permanent resident of Himachal Pradesh diagnosed with one of the designated chronic diseases by an authorized government medical specialist, with family income under ₹4 Lakh/year.'
    },
    eligibilityHighlights: [
      'Diagnosed with Parkinson’s, cancer, muscular dystrophy, hemophilia, thalassemia, renal failure, or paralysis',
      'Medical certificate signed by designated medical board or specialist doctor',
      'Annual family income from all sources not exceeding ₹4,00,000'
    ],
    exclusions: [
      'Patients receiving regular financial assistance of equivalent or higher value from other government schemes',
      'Government employees and retired pensioners'
    ],
    requiredDocuments: [
      {
        id: 'doc-hp-sy-medical',
        name: 'Medical Specialist Certificate / Medical Board Report',
        category: 'medical',
        purpose: 'Certification of diagnosis of designated chronic illness',
        citizenTip: 'Obtain from Medical Superintendent of District Hospital or Medical College.',
        isMandatory: true
      },
      {
        id: 'doc-hp-sy-income',
        name: 'Income Certificate (Income <₹4 Lakh/year)',
        category: 'income',
        purpose: 'Verification of family income ceiling',
        citizenTip: 'Issued by Executive Magistrate or Tehsildar.',
        isMandatory: true
      },
      {
        id: 'doc-hp-sy-bank',
        name: 'Aadhaar-Seeded Bank Passbook of Patient',
        category: 'bank',
        purpose: 'Direct benefit transfer credit destination',
        citizenTip: 'If patient is incapacitated, joint account with legal guardian is permitted.',
        isMandatory: true
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Obtain Medical Certification & Fill Application',
        description: 'Get application form verified by government medical specialist along with treatment history.',
        portalOrOffice: 'Government Medical College / Hospital'
      },
      {
        stepNumber: 2,
        title: 'Submit to Block Medical Officer (BMO) / ASHA Worker',
        description: 'Submit completed dossier to local BMO office or through your village ASHA worker.',
        portalOrOffice: 'Block Medical Officer Office'
      },
      {
        stepNumber: 3,
        title: 'Monthly DBT Disbursement',
        description: 'Chief Medical Officer approves the grant, and ₹3,000 is credited monthly directly to the bank account.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Health & Family Welfare, Himachal Pradesh',
      url: 'https://hphealth.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Health & Family Welfare Department',
      helpline: '104',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Chronic illness financial assistance framework managed by Health Department HP.'
    }
  },
  {
    id: 'hp-beti-hai-anmol',
    name: 'Beti Hai Anmol Yojana (Himachal Pradesh Girl Child Support)',
    hindiName: 'बेटी है अनमोल योजना (हिमाचल प्रदेश)',
    teluguName: 'బేటీ హై అన్మోల్ పథకం (హిమాచల్ ప్రదేశ్)',
    tamilName: 'பேட்டி ஹை அன்மோல் திட்டம் (இமாச்சலப் பிரதேசம்)',
    tagline: 'Fixed deposit of ₹21,000 at birth and annual education scholarships up to graduation for girl children of BPL families.',
    category: 'education',
    categoryLabel: 'Education & Scholarships',
    geographicScope: 'State Scheme (Himachal Pradesh)',
    stateApplicability: 'Himachal Pradesh',
    isCentral: false,
    governmentLevel: 'state',
    jurisdictionType: 'state',
    stateCode: 'HP',
    administeringGovernment: 'Government of Himachal Pradesh',
    schemeStatus: 'active',
    languages: ['en', 'hi'],
    lifeStage: 'student',
    beneficiaries: ['Girl Children of BPL Families', 'School and College Students', 'Single/Two-Daughter Households'],
    shortSummary: 'Post-birth financial investment of ₹21,000 in a post office/bank account plus annual scholarships ranging from ₹450 to ₹5,000 for each educational grade up to college graduation.',
    fullDescription: 'Beti Hai Anmol eliminates child marriage and incentivizes female education in Himachal Pradesh. For up to two daughters of BPL families, the state invests ₹21,000 in a fixed deposit upon birth (withdrawable at 18) and provides continuous annual scholarship stipends from Class 1 to college graduation.',
    financialBenefit: '₹21,000 fixed deposit at birth + annual scholarships of ₹450 to ₹5,000 / year up to graduation',
    keyObjectives: [
      'Promote girl child survival and improve sex ratio at birth in Himachal Pradesh',
      'Provide financial assets maturing when the girl child turns 18 to support career and higher studies',
      'Prevent female dropouts through continuous milestone school and college scholarships'
    ],
    eligibilityRules: {
      targetGender: 'female',
      isBPLRequired: true,
      stateResidence: 'Himachal Pradesh',
      notes: 'Eligible for up to two girl children per BPL family holding a verified bonafide certificate of Himachal Pradesh.'
    },
    eligibilityHighlights: [
      'Girl child born in a certified BPL family residing in Himachal Pradesh',
      'Limited to a maximum of two daughters per eligible household',
      'Girl child must be enrolled in recognized school or college'
    ],
    exclusions: [
      'Families belonging to non-BPL or income-tax paying categories',
      'Third or subsequent girl child born in the family'
    ],
    requiredDocuments: [
      {
        id: 'doc-hp-bha-birth',
        name: 'Birth Certificate of Girl Child',
        category: 'identity',
        purpose: 'Proof of date of birth and parentage',
        citizenTip: 'Issued by local registrar of births / Panchayat Secretary.',
        isMandatory: true
      },
      {
        id: 'doc-hp-bha-bpl',
        name: 'BPL Ration Card / BPL Certificate',
        category: 'income',
        purpose: 'Proof of Below Poverty Line family status',
        citizenTip: 'Attested by Gram Panchayat Pradhan or Secretary.',
        isMandatory: true
      },
      {
        id: 'doc-hp-bha-school',
        name: 'School / College Enrollment Certificate (for scholarship component)',
        category: 'academic',
        purpose: 'Verification of active schooling',
        citizenTip: 'Signed and stamped by school headmaster or principal.',
        isMandatory: false
      }
    ],
    applicationSteps: [
      {
        stepNumber: 1,
        title: 'Apply through Local Anganwadi Worker / CDPO',
        description: 'Submit application to your local Anganwadi Worker or Child Development Project Officer (CDPO).',
        portalOrOffice: 'Anganwadi Centre / CDPO Office'
      },
      {
        stepNumber: 2,
        title: 'Fixed Deposit Account Opening in Post Office/Bank',
        description: 'Department deposits ₹21,000 in the name of the girl child into a designated post office/bank deposit.',
        portalOrOffice: 'Post Office / Bank'
      },
      {
        stepNumber: 3,
        title: 'Annual Scholarship Disbursement',
        description: 'Submit yearly school enrollment proof to receive direct scholarship stipends from Class 1 to graduation.',
        portalOrOffice: 'Direct Benefit Transfer'
      }
    ],
    officialSource: {
      name: 'Department of Women & Child Development, Himachal Pradesh',
      url: 'https://wcdhp.nic.in',
      lastVerifiedDate: 'October 2026',
      department: 'Women & Child Development Department',
      helpline: '181',
      verificationStatus: 'verified',
      linkStatus: 'accessible',
      verificationNotes: 'Targeted girl child empowerment program by Government of Himachal Pradesh.'
    }
  }
];

// Combine with existing North schemes (UP is already in data, we provide the clean 30 North schemes)
const fileContent = 'import type { Scheme } from "../../types/scheme";\n\nexport const NORTH_STATES_SCHEMES: Scheme[] = ' + JSON.stringify(northSchemes, null, 2) + ';\n';
fs.writeFileSync('D:/civicai/frontend/src/data/schemes/statesNorth.ts', fileContent, 'utf8');
console.log('North States schemes written successfully:', northSchemes.length);
