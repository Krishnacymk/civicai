import type { Scheme } from "../../types/scheme";

export const NORTH_STATES_SCHEMES: Scheme[] = [
  {
    "id": "hr-chirayu-haryana",
    "name": "Chirayu Haryana (Ayushman Bharat State Expansion)",
    "hindiName": "चिरायु हरियाणा योजना",
    "teluguName": "చిరాయు హర్యానా ఆరోగ్య పథకం",
    "tamilName": "சிராயு ஹரியானா மருத்துவத் திட்டம்",
    "tagline": "Comprehensive cashless healthcare coverage of up to ₹5,00,000 per family per year for households earning up to ₹1.80 Lakh.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Haryana)",
    "stateApplicability": "Haryana",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HR",
    "administeringGovernment": "Government of Haryana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Antyodaya Families",
      "PPP Verified Low-Income Households",
      "Senior Citizens"
    ],
    "shortSummary": "Expands Ayushman Bharat to cover all Haryana families verified with annual income under ₹1.80 Lakh in Parivar Pehchan Patra, granting ₹5 Lakh cashless hospital treatment.",
    "fullDescription": "Chirayu Haryana bridges healthcare inequality by providing 100% state-funded cashless hospitalization across 1,500+ listed medical procedures to more than 38 lakh verified low-income families in Haryana without requiring any premium payment.",
    "financialBenefit": "Up to ₹5,00,000 per family per year in cashless hospitalization",
    "keyObjectives": [
      "Universalize ₹5 Lakh secondary and tertiary healthcare for families with income below ₹1.80 Lakh",
      "Integrate automated eligibility through Parivar Pehchan Patra (PPP) database",
      "Provide cashless treatment in government civil hospitals and empaneled private facilities"
    ],
    "eligibilityRules": {
      "isBPLRequired": true,
      "maxIncome": 180000,
      "stateResidence": "Haryana",
      "notes": "Must have verified annual family income below ₹1.80 Lakh in the Parivar Pehchan Patra (PPP) database."
    },
    "eligibilityHighlights": [
      "Resident of Haryana with verified Parivar Pehchan Patra (PPP)",
      "Verified annual family income up to ₹1,80,000",
      "Automated digital card issuance via chirayuayushmanharyana.in"
    ],
    "exclusions": [
      "Families with verified income exceeding ₹1.80 Lakh (unless enrolled in nominal co-pay tier)",
      "Government employees covered under state employee medical reimbursement"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hr-ch-ppp",
        "name": "Parivar Pehchan Patra (PPP Family ID)",
        "category": "identity",
        "purpose": "Automated income verification and family member mapping",
        "citizenTip": "Check your verified income status at meraparivar.haryana.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-hr-ch-aadhaar",
        "name": "Aadhaar Card of Family Members",
        "category": "identity",
        "purpose": "Biometric hospital admission and Golden Card generation",
        "citizenTip": "Bring original Aadhaar card to the hospital Ayushman desk.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Check Eligibility with PPP Family ID",
        "description": "Visit chirayuayushmanharyana.in and enter your 8-character Parivar Pehchan Patra ID.",
        "portalOrOffice": "chirayuayushmanharyana.in"
      },
      {
        "stepNumber": 2,
        "title": "Download Chirayu Ayushman Card",
        "description": "Authenticate through OTP on your Aadhaar-registered mobile and download the digital card.",
        "portalOrOffice": "Online Portal"
      },
      {
        "stepNumber": 3,
        "title": "Show Card at Hospital for Cashless Care",
        "description": "Present the Chirayu card at any empaneled hospital helpdesk for cashless admission and surgeries.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "Haryana Health Protection Authority, Government of Haryana",
      "url": "https://haryana.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department",
      "helpline": "1800-180-2128",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship health protection framework managed by Government of Haryana."
    }
  },
  {
    "id": "hr-parivar-pehchan-patra",
    "name": "Haryana Proactive Old Age & Social Security Pension (via PPP)",
    "hindiName": "हरियाणा वृद्धावस्था सम्मान भत्ता (परिवार पहचान पत्र द्वारा)",
    "teluguName": "హర్యానా వృద్ధాప్య పింఛను పథకం",
    "tamilName": "ஹரியானா முதியோர் உதவித்தொகை திட்டம்",
    "tagline": "Proactive non-contributory monthly pension of ₹3,000 automatically sanctioned upon turning 60 years.",
    "category": "seniors-elderly",
    "categoryLabel": "Senior Citizens",
    "geographicScope": "State Scheme (Haryana)",
    "stateApplicability": "Haryana",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HR",
    "administeringGovernment": "Government of Haryana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "senior",
    "beneficiaries": [
      "Senior Citizens aged 60+",
      "Vulnerable Elderly",
      "Low-Income Couples"
    ],
    "shortSummary": "Proactive paperless old-age pension of ₹3,000 per month automatically approved and credited without cumbersome manual applications once a citizen turns 60 in the PPP registry.",
    "fullDescription": "Haryana pioneered paperless social security by linking the Old Age Samman Allowance directly with verified birth dates in the Parivar Pehchan Patra database. Once an eligible citizen reaches 60 years and family income is below ₹3 Lakh, the pension is processed with home-doorstep consent.",
    "financialBenefit": "₹3,000 / month direct pension via DBT (₹36,000 per year)",
    "keyObjectives": [
      "Eliminate physical paperwork and middlemen for senior citizen social pensions",
      "Provide dignified monthly financial living allowances to all elderly residents",
      "Automate doorstep consent verification through local Parivar Pehchan Patra operators"
    ],
    "eligibilityRules": {
      "minAge": 60,
      "maxIncome": 300000,
      "stateResidence": "Haryana",
      "notes": "Must be a domicile of Haryana aged 60+ with combined family annual income not exceeding ₹3,00,000 in PPP."
    },
    "eligibilityHighlights": [
      "Aged 60 years or above with verified date of birth in PPP",
      "Domicile of Haryana residing for minimum 15 years in the state",
      "Combined annual income of self and spouse below ₹3,00,000"
    ],
    "exclusions": [
      "Recipients of regular government, PSU, or military pensions",
      "Tax-paying individuals or institutional landowners"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hr-ppp-id",
        "name": "Parivar Pehchan Patra (Family ID)",
        "category": "identity",
        "purpose": "Verification of age, residence, and income",
        "citizenTip": "Ensure date of birth is verified by the local verification committee.",
        "isMandatory": true
      },
      {
        "id": "doc-hr-bank-id",
        "name": "Aadhaar-Linked Bank Account Passbook",
        "category": "bank",
        "purpose": "Direct monthly pension credit destination",
        "citizenTip": "Check that bank account is active with NPCI DBT mapping.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Automated Age Tracking in PPP Registry",
        "description": "System automatically flags citizen profile upon reaching 60 years with verified age.",
        "portalOrOffice": "Automated System"
      },
      {
        "stepNumber": 2,
        "title": "Doorstep Consent Verification",
        "description": "Local operator or social welfare representative visits to obtain citizen signature/biometric consent.",
        "portalOrOffice": "Doorstep Verification"
      },
      {
        "stepNumber": 3,
        "title": "Direct Monthly DBT Credit",
        "description": "₹3,000 is credited on the designated pension date every month directly to the bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Social Justice, Empowerment, Welfare of SCs & BCs, Haryana",
      "url": "https://socialjusticehry.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Justice & Empowerment Department",
      "helpline": "1800-180-2128",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship automated social security initiative under Government of Haryana."
    }
  },
  {
    "id": "hr-bhavantar-bharpayee",
    "name": "Bhavantar Bharpayee Yojana (Haryana Crop Deficit Protection)",
    "hindiName": "भावांतर भरपाई योजना (हरियाणा)",
    "teluguName": "భావంతర్ భర్పాయీ పథకం (హర్యానా)",
    "tamilName": "பாவாந்தர் பார்பாயி திட்டம் (ஹரியானா)",
    "tagline": "Direct price deficit compensation for farmers whenever wholesale mandi prices fall below state-guaranteed cost prices.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Haryana)",
    "stateApplicability": "Haryana",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HR",
    "administeringGovernment": "Government of Haryana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Horticulture Farmers",
      "Vegetable and Fruit Cultivators",
      "Millet and Oilseed Farmers"
    ],
    "shortSummary": "Insulates horticulture and vegetable growers from market distress by transferring the exact difference between the state protected base price and the actual selling price in mandis.",
    "fullDescription": "Bhavantar Bharpayee Yojana mitigates agricultural market volatility for farmers cultivating potatoes, onions, tomatoes, cauliflower, carrots, peas, and designated crops. If the mandi sales price drops below the benchmark cost price, the Haryana government credits the deficit directly to the farmer bank account.",
    "financialBenefit": "Deficit price compensation credited directly via DBT (up to ₹7,500 - ₹15,000 per acre)",
    "keyObjectives": [
      "Incentivize crop diversification away from water-intensive paddy into high-value vegetables",
      "Protect farmers from distress selling during seasonal bumper harvests",
      "Ensure guaranteed minimum return on investment for horticulture crops"
    ],
    "eligibilityRules": {
      "occupations": [
        "Farmer",
        "Tenant Cultivator",
        "Vegetable Grower"
      ],
      "stateResidence": "Haryana",
      "notes": "Must register crop sowing details on Meri Fasal Mera Byora portal (fasal.haryana.gov.in) during the active registration window."
    },
    "eligibilityHighlights": [
      "Cultivating designated horticulture or agricultural crops in Haryana",
      "Registered on Meri Fasal Mera Byora with satellite/revenue verified land parcel",
      "Sales conducted at notified Haryana State Agricultural Marketing Board mandis"
    ],
    "exclusions": [
      "Crops sold outside authorized e-NAM/APMC market yards without J-Form receipts",
      "Unregistered acreage or false crop declarations"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hr-mfmb",
        "name": "Meri Fasal Mera Byora (MFMB) Registration Slip",
        "category": "land",
        "purpose": "Verification of sown area, crop variety, and land parcel",
        "citizenTip": "Register during sowing month on fasal.haryana.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-hr-jform",
        "name": "Mandi J-Form / Auction Sales Invoice",
        "category": "other",
        "purpose": "Proof of selling price and quantity sold at mandi",
        "citizenTip": "Ask the commission agent (Arhtiya) for computerised J-Form copy.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register Acreage on Meri Fasal Mera Byora",
        "description": "Enter your khasra/kila number and select the crop variety sown on fasal.haryana.gov.in.",
        "portalOrOffice": "fasal.haryana.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Sell Produce at Mandi & Collect J-Form",
        "description": "Sell the harvested produce at your nearest APMC market yard and obtain the official digital J-Form.",
        "portalOrOffice": "APMC Mandi"
      },
      {
        "stepNumber": 3,
        "title": "Automated Price Deficit DBT Transfer",
        "description": "If average mandi price is below base price, the deficit is computed and transferred directly via DBT.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Haryana State Agricultural Marketing Board & Agriculture Department",
      "url": "https://agriharyana.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Agriculture & Farmers Welfare Department",
      "helpline": "1800-180-2117",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Price deficit compensation framework managed via Meri Fasal Mera Byora."
    }
  },
  {
    "id": "hr-mukhyamantri-antyodaya-parivar",
    "name": "Mukhyamantri Antyodaya Parivar Utthan Yojana (MMAPUY)",
    "hindiName": "मुख्यमंत्री अंत्योदय परिवार उत्थान योजना (हरियाणा)",
    "teluguName": "ముఖ్యమంత్రి అంత్యోదయ పరివార్ ఉత్థాన్ పథకం",
    "tamilName": "முதலமைச்சர் அந்த்யோதயா பரிவார் உத்தன் திட்டம்",
    "tagline": "Tailored livelihood packages, skill training, and subsidized credit to elevate poorest family incomes above ₹1.80 Lakh.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Haryana)",
    "stateApplicability": "Haryana",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HR",
    "administeringGovernment": "Government of Haryana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Poorest Families (Income <₹1 Lakh)",
      "Unemployed Youth",
      "Rural Artisans and Dairy Workers"
    ],
    "shortSummary": "Comprehensive mission identifying the poorest families through PPP data and organizing Antyodaya Melas to provide them customized packages of dairy loans, grants, and job placements.",
    "fullDescription": "MMAPUY identifies the bottom-most economic quintile of Haryana families earning under ₹1,00,000 per annum and delivers multi-department interventions—ranging from subsidized dairy cattle loans (with 25-33% capital subsidy) to e-rickshaws, kirana store credit, and free skill placements—to sustainably lift household earnings above ₹1.80 Lakh.",
    "financialBenefit": "Subsidized livelihood loans up to ₹3,00,000 with capital subsidies up to ₹50,000 and interest subvention",
    "keyObjectives": [
      "Elevate household income of all verified families earning under ₹1 Lakh above ₹1.80 Lakh",
      "Organize block-level Antyodaya Melas providing doorstep banking and departmental schemes",
      "Provide collateral-free micro-credit for dairy farming, retail trade, and vehicle operations"
    ],
    "eligibilityRules": {
      "isBPLRequired": true,
      "maxIncome": 100000,
      "stateResidence": "Haryana",
      "notes": "Targeted exclusively to families in Haryana verified with annual income below ₹1,00,000 in Parivar Pehchan Patra."
    },
    "eligibilityHighlights": [
      "Resident of Haryana with verified PPP Family ID",
      "Annual family income verified below ₹1,00,000",
      "Willingness to take up self-employment, wage employment, or skill training"
    ],
    "exclusions": [
      "Families with verified income exceeding ₹1.00 Lakh in PPP database",
      "Willful bank defaulters with active recovery proceedings"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hr-mmapuy-ppp",
        "name": "Parivar Pehchan Patra (Family ID)",
        "category": "identity",
        "purpose": "Verification of income below ₹1 Lakh and household identification",
        "citizenTip": "Check your family eligibility status on parivar.haryana.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-hr-mmapuy-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Disbursement of loan and capital subsidy",
        "citizenTip": "Ensure your account has no pending KYC blocks.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Receive Invitation for Block Antyodaya Mela",
        "description": "Eligible families receive SMS invitation to attend the block-level Antyodaya Utthan Mela.",
        "portalOrOffice": "Block Development Office"
      },
      {
        "stepNumber": 2,
        "title": "Choose Desired Livelihood Scheme at Mela",
        "description": "Meet departmental counselors (Animal Husbandry, Skill Development, MSME) and select preferred scheme.",
        "portalOrOffice": "Antyodaya Mela Kiosk"
      },
      {
        "stepNumber": 3,
        "title": "On-Spot Bank Approval & Asset Delivery",
        "description": "Bank partners process loan sanction on the spot, and government subsidy is mapped directly.",
        "portalOrOffice": "Bank Partner & Department"
      }
    ],
    "officialSource": {
      "name": "Human Resource Department, Government of Haryana",
      "url": "https://haryanacmoffice.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Human Resource Department & Antyodaya Mission",
      "helpline": "1800-180-2128",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship poverty alleviation mission monitored under Chief Minister Office Haryana."
    }
  },
  {
    "id": "hr-ladli-social-security",
    "name": "Ladli Social Security Allowance Scheme (Haryana)",
    "hindiName": "लाडली सामाजिक सुरक्षा भत्ता योजना (हरियाणा)",
    "teluguName": "లాడ్లీ సామాజిక భద్రత భత్యం (హర్యానా)",
    "tamilName": "லாட்லி சமூக பாதுகாப்பு திட்டம் (ஹரியானா)",
    "tagline": "Monthly financial assistance of ₹3,000 for parents who have only daughters upon the mother or father turning 45.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Haryana)",
    "stateApplicability": "Haryana",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HR",
    "administeringGovernment": "Government of Haryana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "parent",
    "beneficiaries": [
      "Parents with Only Daughters",
      "Families without Male Child",
      "Middle-Aged Mothers"
    ],
    "shortSummary": "Monthly financial allowance of ₹3,000 granted to parents residing in Haryana who have only female children, payable from the 45th birthday of either parent until they turn 60.",
    "fullDescription": "To combat gender discrimination and incentivize girl child upbringing, Haryana provides a monthly social security allowance of ₹3,000 to families who have only daughters. When the parent turns 60, the benefit smoothly transitions into the Old Age Samman Allowance.",
    "financialBenefit": "₹3,00,0 / month direct pension via DBT (₹36,000 per year for 15 years)",
    "keyObjectives": [
      "Eliminate son-preference and reward parents raising only female children",
      "Provide economic security to families without male offspring in middle and senior age",
      "Support daughters higher education and career development through parental income stability"
    ],
    "eligibilityRules": {
      "minAge": 45,
      "maxAge": 60,
      "maxIncome": 300000,
      "stateResidence": "Haryana",
      "notes": "Applicant parent must be aged 45 to 60, a resident of Haryana for at least 15 years, and must have only daughters (biological or legally adopted)."
    },
    "eligibilityHighlights": [
      "Parents having only biological or legally adopted daughters and no sons",
      "Mother or father has completed 45 years of age and has not reached 60",
      "Combined annual family income does not exceed ₹3,00,000"
    ],
    "exclusions": [
      "Parents who have one or more biological or adopted sons",
      "Regular government or public sector employees with pension rights"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hr-ladli-birth",
        "name": "Birth Certificates of All Daughters",
        "category": "identity",
        "purpose": "Proof of having only daughters and dependent family status",
        "citizenTip": "Attach digital municipal or civil registration birth certificates.",
        "isMandatory": true
      },
      {
        "id": "doc-hr-ladli-affidavit",
        "name": "Self-Attested Affidavit Confirming No Male Child",
        "category": "other",
        "purpose": "Legal statement affirming absence of sons",
        "citizenTip": "Attested before Executive Magistrate or Notary Public.",
        "isMandatory": true
      },
      {
        "id": "doc-hr-ladli-bank",
        "name": "Aadhaar-Seeded Bank Passbook (Preferably of Mother)",
        "category": "bank",
        "purpose": "Direct benefit transfer destination",
        "citizenTip": "Allowance is preferably credited to the mother bank account.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply through Antyodaya SARAL Portal",
        "description": "Login to saralharyana.gov.in and select Ladli Social Security Allowance.",
        "portalOrOffice": "saralharyana.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Submit Dossier at Antyodaya Kendra / CSC",
        "description": "Submit proof of daughter births and affidavit at your nearest SARAL Kendra.",
        "portalOrOffice": "SARAL Kendra / CSC"
      },
      {
        "stepNumber": 3,
        "title": "Verification and Monthly DBT Sanction",
        "description": "District Social Welfare Officer verifies credentials and activates monthly transfer of ₹3,000.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Women & Child Development, Government of Haryana",
      "url": "https://wcdhry.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Women & Child Development Department",
      "helpline": "1800-180-2128",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Progressive gender social security scheme under Government of Haryana."
    }
  },
  {
    "id": "hp-pyari-behna-sukh-samman",
    "name": "Indira Gandhi Pyari Behna Sukh Samman Nidhi (Himachal Pradesh)",
    "hindiName": "इंदिरा गांधी प्यारी बहना सुख सम्मान निधि (हिमाचल प्रदेश)",
    "teluguName": "ఇందిరా గాంధీ ప్యారీ బెహనా సుఖ్ సమ్మాన్ నిధి",
    "tamilName": "இந்திரா காந்தி பியாரி பெஹ்னா சம்மான் நிதி",
    "tagline": "Monthly financial empowerment grant of ₹1,500 for eligible women aged 18 to 59 in Himachal Pradesh.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Himachal Pradesh)",
    "stateApplicability": "Himachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HP",
    "administeringGovernment": "Government of Himachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "parent",
    "beneficiaries": [
      "Women aged 18 to 59",
      "Rural Homemakers",
      "Single Women & Widows"
    ],
    "shortSummary": "Guarantees unconditional direct financial assistance of ₹1,500 per month (₹18,000 per year) directly to the Aadhaar-linked bank accounts of adult women in Himachal Pradesh.",
    "fullDescription": "Indira Gandhi Pyari Behna Sukh Samman Nidhi is a landmark women empowerment initiative by the Government of Himachal Pradesh, providing ₹1,500 monthly financial security to eligible female residents aged 18-59 to support their healthcare, nutrition, and financial independence.",
    "financialBenefit": "₹1,500 / month direct cash assistance via DBT (₹18,000 per year)",
    "keyObjectives": [
      "Empower adult women with dedicated monthly financial autonomy",
      "Support nutritional and healthcare expenses for female members in mountain households",
      "Provide direct social security to unpaid homemakers and female youth"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 59,
      "targetGender": "female",
      "stateResidence": "Himachal Pradesh",
      "notes": "Must be a female bonafide resident of Himachal Pradesh aged 18 to 59 years."
    },
    "eligibilityHighlights": [
      "Bonafide female resident of Himachal Pradesh aged between 18 and 59 years",
      "Applicant is not receiving any other regular state/central social security pension exceeding ₹1,500",
      "Active bank or post office account linked with Aadhaar"
    ],
    "exclusions": [
      "Female members of households with permanent government/PSU employees or pensioners",
      "Income tax paying families",
      "Recipients of other state welfare pensions of equal or higher value"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hp-pb-bonafide",
        "name": "Himachal Bonafide / Domicile Certificate",
        "category": "identity",
        "purpose": "Proof of permanent resident status in Himachal Pradesh",
        "citizenTip": "Apply on edistrict.hp.gov.in for digital bonafide certificate.",
        "isMandatory": true
      },
      {
        "id": "doc-hp-pb-aadhaar",
        "name": "Aadhaar Card and Age Proof",
        "category": "identity",
        "purpose": "Verification of age between 18 and 59 years",
        "citizenTip": "Check that your mobile number is linked to Aadhaar.",
        "isMandatory": true
      },
      {
        "id": "doc-hp-pb-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer credit destination",
        "citizenTip": "Ensure single-holder account in beneficiary name.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Collect Form from Tehsil Welfare Office or Anganwadi",
        "description": "Obtain free application form from local Anganwadi worker, Gram Panchayat, or download from himachal.nic.in.",
        "portalOrOffice": "Tehsil Welfare Office / Anganwadi"
      },
      {
        "stepNumber": 2,
        "title": "Submit with Bonafide and Non-Employment Attestation",
        "description": "Submit completed dossier to the Tehsil Welfare Officer (TWO) with Panchayat attestation.",
        "portalOrOffice": "Tehsil Welfare Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Disbursement",
        "description": "Upon verification by District Welfare Officer, ₹1,500 is credited monthly directly to the bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Social Justice and Empowerment, Himachal Pradesh",
      "url": "https://himachal.nic.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Justice & Empowerment Department",
      "helpline": "1100",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship women welfare guarantee administered statewide by Government of Himachal Pradesh."
    }
  },
  {
    "id": "hp-himcare-health",
    "name": "Mukhya Mantri Himachal Health Care Scheme (HIMCARE)",
    "hindiName": "मुख्यमंत्री हिमाचल हेल्थ केयर योजना (हिमकेयर)",
    "teluguName": "హిమ్‌కేర్ ఆరోగ్య పథకం (హిమాచల్ ప్రదేశ్)",
    "tamilName": "ஹிம்கேர் மருத்துவத் திட்டம் (இமாச்சலப் பிரதேசம்)",
    "tagline": "Cashless medical treatment of up to ₹5,00,000 per family per year across empaneled hospitals in Himachal Pradesh.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Himachal Pradesh)",
    "stateApplicability": "Himachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HP",
    "administeringGovernment": "Government of Himachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Citizens not covered under Ayushman Bharat",
      "BPL Families",
      "Senior Citizens"
    ],
    "shortSummary": "Universalizes secondary and tertiary hospital protection in Himachal Pradesh by providing ₹5 Lakh cashless treatment per year to all families not covered by central Ayushman Bharat.",
    "fullDescription": "HIMCARE ensures that no family in Himachal Pradesh suffers catastrophic healthcare debt. Covering up to 5 family members on a single card across 200+ state and leading premier hospitals (including PGI Chandigarh), HIMCARE covers pre-existing diseases, diagnostics, and critical surgeries with minimal or zero enrolment fees.",
    "financialBenefit": "Up to ₹5,00,000 per family per year in cashless hospitalization",
    "keyObjectives": [
      "Provide universal health coverage to families left out of Ayushman Bharat PM-JAY",
      "Ensure zero out-of-pocket expenses for critical surgeries, chemotherapy, and dialysis",
      "Provide portability across top state hospitals and premier tertiary centers like PGI Chandigarh"
    ],
    "eligibilityRules": {
      "stateResidence": "Himachal Pradesh",
      "notes": "Must be a resident of Himachal Pradesh not covered under Ayushman Bharat or regular government employee medical schemes."
    },
    "eligibilityHighlights": [
      "Resident families of Himachal Pradesh not covered under Ayushman Bharat PM-JAY",
      "BPL, registered street vendors, and MNREGA workers eligible with zero enrollment fee",
      "Senior citizens and general families can enroll with nominal annual fees of ₹365 to ₹1,000"
    ],
    "exclusions": [
      "Government employees and pensioners entitled to full medical reimbursement",
      "Active beneficiaries already holding central Ayushman Bharat PM-JAY cards"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hp-hc-ration",
        "name": "Himachal Pradesh Digital Ration Card",
        "category": "income",
        "purpose": "Family unit verification and member mapping",
        "citizenTip": "Check your digital ration card on epds.co.in.",
        "isMandatory": true
      },
      {
        "id": "doc-hp-hc-aadhaar",
        "name": "Aadhaar Card of All Family Members",
        "category": "identity",
        "purpose": "Biometric identity verification and HIMCARE card issuance",
        "citizenTip": "Aadhaar e-KYC is mandatory during enrollment.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply on HIMCARE Portal / LokMitra Kendra",
        "description": "Visit hpsbys.in or your nearest LokMitra Kendra with your ration card and Aadhaar details.",
        "portalOrOffice": "hpsbys.in / LokMitra Kendra"
      },
      {
        "stepNumber": 2,
        "title": "Fee Payment and Card Generation",
        "description": "Pay nominal fee (if applicable) or get zero-fee approval for BPL/MNREGA and print the HIMCARE card.",
        "portalOrOffice": "Online Portal"
      },
      {
        "stepNumber": 3,
        "title": "Avail Cashless Hospitalization",
        "description": "Present card at any empaneled hospital (IGMC Shimla, Tanda Medical College, PGI) for cashless treatment.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "Himachal Pradesh Swasthya Bima Yojna Society (HPSBYS)",
      "url": "https://hpsbys.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department",
      "helpline": "104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship state healthcare program administered through HPSBYS."
    }
  },
  {
    "id": "hp-swavlamban-yojana",
    "name": "Mukhya Mantri Swavlamban Yojana (Himachal Pradesh Youth Startups)",
    "hindiName": "मुख्यमंत्री स्वावलंबन योजना (हिमाचल प्रदेश)",
    "teluguName": "ముఖ్యమంత్రి స్వావలంబన్ పథకం",
    "tamilName": "முதலமைச்சர் ஸ்வாவலம்பன் திட்டம்",
    "tagline": "Capital investment subsidy of 25% to 35% on bank loans up to ₹1 Crore for youth establishing micro-enterprises.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Himachal Pradesh)",
    "stateApplicability": "Himachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HP",
    "administeringGovernment": "Government of Himachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "Youth Entrepreneurs aged 18-45",
      "Women Entrepreneurs",
      "Technical Diploma & ITI Holders"
    ],
    "shortSummary": "Subsidizes capital investments and offers 5% interest subvention for 3 years to young entrepreneurs setting up manufacturing, tourism, agriculture processing, and service enterprises in Himachal Pradesh.",
    "fullDescription": "Mukhya Mantri Swavlamban Yojana promotes local job creation and youth entrepreneurship in Himachal Pradesh. The Industries Department provides 25% capital subsidy for general male youth, 30% for SC/ST, and 35% for women and widow entrepreneurs on projects up to ₹1 Crore (subsidies capped on ₹60 Lakh project cost).",
    "financialBenefit": "25% to 35% capital subsidy (up to ₹21 Lakh) + 5% interest subvention for 3 years",
    "keyObjectives": [
      "Encourage local youth to become job creators rather than job seekers in Himachal Pradesh",
      "Promote eco-tourism, agro-processing, cold storage, and modern services in hill areas",
      "Provide higher affirmative capital subsidies to women, SC/ST, and Divyangjan entrepreneurs"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 45,
      "stateResidence": "Himachal Pradesh",
      "notes": "Bonafide resident of Himachal Pradesh aged 18 to 45. Women applicants are eligible up to 50 years of age."
    },
    "eligibilityHighlights": [
      "Bonafide youth of Himachal Pradesh aged 18 to 45 years",
      "New micro or small enterprise in manufacturing, service, or tourism sectors",
      "Project cost up to ₹1 Crore (capital subsidy calculated on loan up to ₹60 Lakh)"
    ],
    "exclusions": [
      "Existing running units seeking working capital without expansion",
      "Tobacco, liquor, and ecologically hazardous industries in the negative list"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hp-msy-bonafide",
        "name": "Himachal Bonafide Certificate",
        "category": "identity",
        "purpose": "Proof of state domicile and local youth status",
        "citizenTip": "Digital certificate issued by Tehsildar.",
        "isMandatory": true
      },
      {
        "id": "doc-hp-msy-dpr",
        "name": "Detailed Project Report (DPR)",
        "category": "other",
        "purpose": "Business feasibility, machinery quotation, and project cost details",
        "citizenTip": "Can be prepared with assistance from District Industries Centre (DIC).",
        "isMandatory": true
      },
      {
        "id": "doc-hp-msy-bank",
        "name": "Bank Loan In-Principle Sanction Letter",
        "category": "bank",
        "purpose": "Verification of tie-up with nationalized or regional rural bank",
        "citizenTip": "Issued by commercial bank or HP State Cooperative Bank.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on Emerging Himachal Portal",
        "description": "Register and submit application along with DPR on emerginghimachal.hp.gov.in.",
        "portalOrOffice": "emerginghimachal.hp.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "District Committee Evaluation & Loan Sanction",
        "description": "District Level Committee (DLC) headed by Deputy Commissioner approves project and forwards to bank.",
        "portalOrOffice": "District Industries Centre (DIC)"
      },
      {
        "stepNumber": 3,
        "title": "Capital Subsidy Credit into Loan Account",
        "description": "Upon physical inspection of plant/machinery, the capital subsidy is credited to the bank loan account.",
        "portalOrOffice": "Bank Loan Account"
      }
    ],
    "officialSource": {
      "name": "Department of Industries, Government of Himachal Pradesh",
      "url": "https://emerginghimachal.hp.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Industries",
      "helpline": "0177-2813414",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship industrial self-employment program managed by Department of Industries HP."
    }
  },
  {
    "id": "hp-sahara-yojana",
    "name": "Mukhya Mantri Sahara Yojana (Himachal Chronic Patient Financial Aid)",
    "hindiName": "मुख्यमंत्री सहारा योजना (हिमाचल प्रदेश)",
    "teluguName": "ముఖ్యమంత్రి సహారా పథకం",
    "tamilName": "முதலமைச்சர் சஹாரா திட்டம்",
    "tagline": "Monthly financial assistance of ₹3,000 for patients suffering from Parkinson’s, cancer, paralysis, renal failure, and severe chronic diseases.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Himachal Pradesh)",
    "stateApplicability": "Himachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HP",
    "administeringGovernment": "Government of Himachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Patients with Parkinson’s / Paralysis / Cancer",
      "Kidney Failure Patients",
      "Low-Income Families"
    ],
    "shortSummary": "Monthly financial grant of ₹3,000 transferred via DBT to economically weaker chronic patients needing continuous palliative care, attendants, and ongoing diagnostic medicines.",
    "fullDescription": "Mukhya Mantri Sahara Yojana addresses the hidden costs of severe chronic illnesses that push families into poverty. Beneficiaries suffering from Parkinson disease, cancer, paralysis, muscular dystrophy, hemophilia, thalassemia, and permanent renal failure receive ₹3,000 monthly directly in their bank accounts.",
    "financialBenefit": "₹3,000 / month direct financial support via DBT (₹36,000 per year)",
    "keyObjectives": [
      "Provide monthly income assistance to meet continuous medical, nutrition, and attendant expenses",
      "Alleviate debt burdens for low-income households dealing with terminal or chronic bedridden illnesses",
      "Ensure dignity and regular nutritional support for long-term palliative care patients"
    ],
    "eligibilityRules": {
      "maxIncome": 400000,
      "stateResidence": "Himachal Pradesh",
      "notes": "Must be a permanent resident of Himachal Pradesh diagnosed with one of the designated chronic diseases by an authorized government medical specialist, with family income under ₹4 Lakh/year."
    },
    "eligibilityHighlights": [
      "Diagnosed with Parkinson’s, cancer, muscular dystrophy, hemophilia, thalassemia, renal failure, or paralysis",
      "Medical certificate signed by designated medical board or specialist doctor",
      "Annual family income from all sources not exceeding ₹4,00,000"
    ],
    "exclusions": [
      "Patients receiving regular financial assistance of equivalent or higher value from other government schemes",
      "Government employees and retired pensioners"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hp-sy-medical",
        "name": "Medical Specialist Certificate / Medical Board Report",
        "category": "medical",
        "purpose": "Certification of diagnosis of designated chronic illness",
        "citizenTip": "Obtain from Medical Superintendent of District Hospital or Medical College.",
        "isMandatory": true
      },
      {
        "id": "doc-hp-sy-income",
        "name": "Income Certificate (Income <₹4 Lakh/year)",
        "category": "income",
        "purpose": "Verification of family income ceiling",
        "citizenTip": "Issued by Executive Magistrate or Tehsildar.",
        "isMandatory": true
      },
      {
        "id": "doc-hp-sy-bank",
        "name": "Aadhaar-Seeded Bank Passbook of Patient",
        "category": "bank",
        "purpose": "Direct benefit transfer credit destination",
        "citizenTip": "If patient is incapacitated, joint account with legal guardian is permitted.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Obtain Medical Certification & Fill Application",
        "description": "Get application form verified by government medical specialist along with treatment history.",
        "portalOrOffice": "Government Medical College / Hospital"
      },
      {
        "stepNumber": 2,
        "title": "Submit to Block Medical Officer (BMO) / ASHA Worker",
        "description": "Submit completed dossier to local BMO office or through your village ASHA worker.",
        "portalOrOffice": "Block Medical Officer Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Disbursement",
        "description": "Chief Medical Officer approves the grant, and ₹3,000 is credited monthly directly to the bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Health & Family Welfare, Himachal Pradesh",
      "url": "https://hphealth.nic.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department",
      "helpline": "104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Chronic illness financial assistance framework managed by Health Department HP."
    }
  },
  {
    "id": "hp-beti-hai-anmol",
    "name": "Beti Hai Anmol Yojana (Himachal Pradesh Girl Child Support)",
    "hindiName": "बेटी है अनमोल योजना (हिमाचल प्रदेश)",
    "teluguName": "బేటీ హై అన్మోల్ పథకం (హిమాచల్ ప్రదేశ్)",
    "tamilName": "பேட்டி ஹை அன்மோல் திட்டம் (இமாச்சலப் பிரதேசம்)",
    "tagline": "Fixed deposit of ₹21,000 at birth and annual education scholarships up to graduation for girl children of BPL families.",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Himachal Pradesh)",
    "stateApplicability": "Himachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "HP",
    "administeringGovernment": "Government of Himachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "Girl Children of BPL Families",
      "School and College Students",
      "Single/Two-Daughter Households"
    ],
    "shortSummary": "Post-birth financial investment of ₹21,000 in a post office/bank account plus annual scholarships ranging from ₹450 to ₹5,000 for each educational grade up to college graduation.",
    "fullDescription": "Beti Hai Anmol eliminates child marriage and incentivizes female education in Himachal Pradesh. For up to two daughters of BPL families, the state invests ₹21,000 in a fixed deposit upon birth (withdrawable at 18) and provides continuous annual scholarship stipends from Class 1 to college graduation.",
    "financialBenefit": "₹21,000 fixed deposit at birth + annual scholarships of ₹450 to ₹5,000 / year up to graduation",
    "keyObjectives": [
      "Promote girl child survival and improve sex ratio at birth in Himachal Pradesh",
      "Provide financial assets maturing when the girl child turns 18 to support career and higher studies",
      "Prevent female dropouts through continuous milestone school and college scholarships"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "isBPLRequired": true,
      "stateResidence": "Himachal Pradesh",
      "notes": "Eligible for up to two girl children per BPL family holding a verified bonafide certificate of Himachal Pradesh."
    },
    "eligibilityHighlights": [
      "Girl child born in a certified BPL family residing in Himachal Pradesh",
      "Limited to a maximum of two daughters per eligible household",
      "Girl child must be enrolled in recognized school or college"
    ],
    "exclusions": [
      "Families belonging to non-BPL or income-tax paying categories",
      "Third or subsequent girl child born in the family"
    ],
    "requiredDocuments": [
      {
        "id": "doc-hp-bha-birth",
        "name": "Birth Certificate of Girl Child",
        "category": "identity",
        "purpose": "Proof of date of birth and parentage",
        "citizenTip": "Issued by local registrar of births / Panchayat Secretary.",
        "isMandatory": true
      },
      {
        "id": "doc-hp-bha-bpl",
        "name": "BPL Ration Card / BPL Certificate",
        "category": "income",
        "purpose": "Proof of Below Poverty Line family status",
        "citizenTip": "Attested by Gram Panchayat Pradhan or Secretary.",
        "isMandatory": true
      },
      {
        "id": "doc-hp-bha-school",
        "name": "School / College Enrollment Certificate (for scholarship component)",
        "category": "academic",
        "purpose": "Verification of active schooling",
        "citizenTip": "Signed and stamped by school headmaster or principal.",
        "isMandatory": false
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply through Local Anganwadi Worker / CDPO",
        "description": "Submit application to your local Anganwadi Worker or Child Development Project Officer (CDPO).",
        "portalOrOffice": "Anganwadi Centre / CDPO Office"
      },
      {
        "stepNumber": 2,
        "title": "Fixed Deposit Account Opening in Post Office/Bank",
        "description": "Department deposits ₹21,000 in the name of the girl child into a designated post office/bank deposit.",
        "portalOrOffice": "Post Office / Bank"
      },
      {
        "stepNumber": 3,
        "title": "Annual Scholarship Disbursement",
        "description": "Submit yearly school enrollment proof to receive direct scholarship stipends from Class 1 to graduation.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Women & Child Development, Himachal Pradesh",
      "url": "https://wcdhp.nic.in",
      "lastVerifiedDate": "October 2026",
      "department": "Women & Child Development Department",
      "helpline": "181",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Targeted girl child empowerment program by Government of Himachal Pradesh."
    }
  },
  {
    "id": "pb-bhagwant-mann-sarkar-tuhade-dwar",
    "name": "Bhagwant Mann Sarkar Tuhade Dwar (Doorstep Citizen Services)",
    "hindiName": "भगवंत मान सरकार तुहाडे द्वार (पंजाब घर-द्वार सेवा)",
    "teluguName": "భగవంత్ మాన్ సర్కార్ తుహాడే ద్వారా (పంజాబ్)",
    "tamilName": "பகவந்த் மான் சர்க்கார் துஹாடே த்வார் (பஞ்சாப்)",
    "tagline": "Direct delivery of 43+ key government certificates, revenue, and welfare services right at citizen doorsteps.",
    "category": "low-income-welfare",
    "categoryLabel": "Public & Citizen Services",
    "geographicScope": "State Scheme (Punjab)",
    "stateApplicability": "Punjab",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "PB",
    "administeringGovernment": "Government of Punjab",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "All Punjab Citizens",
      "Senior Citizens",
      "Working Class & Rural Families"
    ],
    "shortSummary": "Punjab citizens can dial helpline 1076 to book an appointment for government services including caste, birth, marriage, and income certificates delivered directly to their residence.",
    "fullDescription": "Bhagwant Mann Sarkar Tuhade Dwar is a revolutionary public governance initiative delivering 43 essential public services at citizens homes. A mobile government facilitator (Sewak) visits the applicant residence with a biometric tablet to collect documents, capture biometrics, and deliver finalized government certificates, removing the need to visit government offices or brokers.",
    "financialBenefit": "Doorstep service facilitation at nominal fee (₹120) with zero harassment and broker-free delivery",
    "keyObjectives": [
      "Eliminate the need for citizens to queue at district administrative complexes (Sewa Kendras)",
      "Provide transparent, time-bound delivery of caste, residence, pension, and revenue certificates",
      "Eradicate middleman commissions through automated digital scheduling"
    ],
    "eligibilityRules": {
      "stateResidence": "Punjab",
      "notes": "Available to all bonafide residents of Punjab needing any of the 43 notified administrative services."
    },
    "eligibilityHighlights": [
      "Any bonafide resident or native of Punjab",
      "Requires standard documents relevant to specific requested service (e.g. Aadhaar, photographs)"
    ],
    "exclusions": [
      "Judicial and specialized departmental court proceedings requiring in-person magistrate testimony"
    ],
    "requiredDocuments": [
      {
        "id": "doc-pb-std-aadhaar",
        "name": "Aadhaar Card",
        "category": "identity",
        "purpose": "Identity and biometric authentication",
        "citizenTip": "Keep active mobile phone nearby for SMS verification.",
        "isMandatory": true
      },
      {
        "id": "doc-pb-std-proof",
        "name": "Supporting Documents for Specific Service",
        "category": "other",
        "purpose": "Documentation proof for specific certificate (e.g., hospital birth slip, salary slip)",
        "citizenTip": "Service operator will digitize original documents at your doorstep.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Dial Toll-Free Helpline 1076",
        "description": "Call 1076 or visit connect.punjab.gov.in and schedule a doorstep visit at your preferred time slot.",
        "portalOrOffice": "Helpline 1076 / connect.punjab.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Facilitator (Mobile Sewak) Visit",
        "description": "Authorized Sewak visits your home with portable biometric kit, verifies originals, and submits form.",
        "portalOrOffice": "Citizen Residence"
      },
      {
        "stepNumber": 3,
        "title": "Delivery of Digitally Signed Certificate",
        "description": "Certificate is delivered to doorstep or sent via SMS/WhatsApp with verifiable QR code.",
        "portalOrOffice": "Doorstep / Digital Download"
      }
    ],
    "officialSource": {
      "name": "Department of Governance Reforms, Government of Punjab",
      "url": "https://connect.punjab.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Governance Reforms & Public Grievances",
      "helpline": "1076",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship governance reform delivering 43+ services at citizen doorstep."
    }
  },
  {
    "id": "pb-mukhya-mantri-sehat-bima",
    "name": "Ayushman Bharat Mukhya Mantri Sehat Bima Yojana (Punjab Health Insurance)",
    "hindiName": "आयुष्मान भारत मुख्यमंत्री सेहत बीमा योजना (पंजाब)",
    "teluguName": "ముఖ్యమంత్రి సెహత్ బీమా పథకం (పంజాబ్)",
    "tamilName": "முதலமைச்சர் சேஹத் பீமா திட்டம் (பஞ்சாப்)",
    "tagline": "₹5 Lakh per family per year cashless secondary and tertiary inpatient healthcare for 45+ Lakh Punjab families.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Punjab)",
    "stateApplicability": "Punjab",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "PB",
    "administeringGovernment": "Government of Punjab",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Smart Ration Card Holders",
      "J-Form Registered Farmers",
      "BOCW Registered Workers",
      "Accredited Journalists"
    ],
    "shortSummary": "Comprehensive cashless health insurance scheme providing ₹5 Lakh annual cover across 1,600+ medical and surgical packages in 900+ empaneled government and private hospitals in Punjab.",
    "fullDescription": "The Mukhya Mantri Sehat Bima Yojana combines state resources with Ayushman Bharat to cover over 65% of Punjab population. It protects NFSA ration card holders, small farmers holding J-Forms, registered construction workers, small traders, and yellow card journalists against catastrophic medical expenses.",
    "financialBenefit": "₹5,00,000 / family / year cashless hospitalization coverage",
    "keyObjectives": [
      "Provide equitable access to high-end cardiac, oncology, orthopedic, and neurosurgery care",
      "Protect vulnerable rural and informal worker families from medical poverty",
      "Provide cashless transactions with zero out-of-pocket expenses for admitted patients"
    ],
    "eligibilityRules": {
      "stateResidence": "Punjab",
      "notes": "Residents of Punjab covered under Smart Ration Card (NFSA), J-Form farmer registry, Excise & Taxation registered small traders, or BOCW construction worker boards."
    },
    "eligibilityHighlights": [
      "NFSA Smart Ration Card holding families",
      "Farmers registered with Punjab Mandi Board holding valid J-Forms",
      "Registered construction workers under BOCW Board",
      "Small business traders registered with Punjab Excise & Taxation Department"
    ],
    "exclusions": [
      "Serving and retired Punjab Government regular employees (covered under separate medical reimbursement scheme)"
    ],
    "requiredDocuments": [
      {
        "id": "doc-pb-sb-aadhaar",
        "name": "Aadhaar Card",
        "category": "identity",
        "purpose": "Biometric verification at hospital helpdesk",
        "citizenTip": "Must match name on ration card / J-Form.",
        "isMandatory": true
      },
      {
        "id": "doc-pb-sb-eligibility-card",
        "name": "Smart Ration Card / J-Form / BOCW Registration Card",
        "category": "other",
        "purpose": "Proof of entitlement category",
        "citizenTip": "Carry original or digital card on Digilocker.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Check Eligibility Online or at Sewa Kendra",
        "description": "Verify your name in the Sehat Bima database on sha.punjab.gov.in or at any Sewa Kendra.",
        "portalOrOffice": "sha.punjab.gov.in / Sewa Kendra"
      },
      {
        "stepNumber": 2,
        "title": "Generate Sehat Card (E-Card)",
        "description": "Visit empaneled hospital Arogya Mitra counter or Sewa Kendra to generate e-card via biometric e-KYC.",
        "portalOrOffice": "Hospital Arogya Mitra Desk"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Admission & Treatment",
        "description": "Show card during hospital admission; treatment and medications are fully cashless up to ₹5 Lakh.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "State Health Agency, Government of Punjab",
      "url": "https://sha.punjab.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Health and Family Welfare, Punjab",
      "helpline": "104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship health insurance portal operated by State Health Agency Punjab."
    }
  },
  {
    "id": "pb-ashirwad-scheme",
    "name": "Ashirwad Scheme (Punjab Financial Assistance for Daughters Marriage)",
    "hindiName": "आशीर्वाद योजना (पंजाब कन्या विवाह सहायता)",
    "teluguName": "ఆశీర్వాద్ పథకం (పంజాబ్)",
    "tamilName": "ஆசீர்வாத் திட்டம் (பஞ்சாப்)",
    "tagline": "Direct grant of ₹51,000 for the marriage of daughters belonging to SC, BC, Christian, and economically weaker families.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Punjab)",
    "stateApplicability": "Punjab",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "PB",
    "administeringGovernment": "Government of Punjab",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "SC / BC / Christian Girls",
      "Economically Weaker Daughters",
      "Daughters of Widows"
    ],
    "shortSummary": "One-time direct bank transfer of ₹51,000 given to poor parents for their daughters wedding expenses, applicable up to two daughters per family.",
    "fullDescription": "The Ashirwad Scheme (formerly Shagun Scheme) provides unconditional financial dignity to economically disadvantaged families during daughter marriage. Administered by the Social Justice and Empowerment Department, the grant of ₹51,000 is directly credited to the bride or mother bank account before or immediately upon the marriage date.",
    "financialBenefit": "₹51,000 one-time financial grant via DBT",
    "keyObjectives": [
      "Prevent debt distress and usurious loans taken by underprivileged parents for wedding expenditures",
      "Encourage solemnization of marriages above the legal age of 18",
      "Support economic inclusion of SC, backward class, and Christian households in Punjab"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "targetGender": "female",
      "maxIncome": 32790,
      "stateResidence": "Punjab",
      "notes": "Bride must be 18 years or older, resident of Punjab, belonging to SC, BC, or EWS, with family annual income not exceeding ₹32,790."
    },
    "eligibilityHighlights": [
      "Permanent resident / domicile of Punjab",
      "Belongs to Scheduled Caste (SC), Backward Class (BC), or Economically Weaker Section (EWS)",
      "Annual family income does not exceed ₹32,790 from all sources",
      "Bride must be minimum 18 years of age on date of marriage"
    ],
    "exclusions": [
      "Families that have already availed assistance for two daughters under this scheme",
      "Families with annual income exceeding ₹32,790"
    ],
    "requiredDocuments": [
      {
        "id": "doc-pb-ash-caste",
        "name": "Caste Certificate / Income Certificate",
        "category": "caste",
        "purpose": "Verification of social category and income ceiling",
        "citizenTip": "Obtain from Sub-Divisional Magistrate (SDM) / Tehsildar.",
        "isMandatory": true
      },
      {
        "id": "doc-pb-ash-age",
        "name": "Age Proof of Bride and Groom (Birth Certificate / Matriculation)",
        "category": "identity",
        "purpose": "Verify legal marriageable age (Bride 18+, Groom 21+)",
        "citizenTip": "Aadhaar or 10th marksheet can serve as age proof.",
        "isMandatory": true
      },
      {
        "id": "doc-pb-ash-bank",
        "name": "Aadhaar Seeded Bank Passbook of Bride / Mother",
        "category": "bank",
        "purpose": "Direct benefit transfer credit",
        "citizenTip": "Account must have active mobile alerts enabled.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application Online or at Sewa Kendra",
        "description": "Submit Ashirwad application up to 30 days before or within 30 days after the marriage date on connect.punjab.gov.in.",
        "portalOrOffice": "Sewa Kendra / connect.punjab.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Field Verification by District Social Justice Officer",
        "description": "Tehsildar or Tehsil Welfare Officer verifies residence, income status, and marriage credentials.",
        "portalOrOffice": "Tehsil Welfare Office"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit of ₹51,000",
        "description": "Sanction order is issued and ₹51,000 is credited directly into the bride or mother bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Social Justice, Empowerment and Minorities, Punjab",
      "url": "https://socwel.punjab.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Justice, Empowerment and Minorities",
      "helpline": "1800-180-2444",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official scheme portal managed by Punjab Social Justice Department."
    }
  },
  {
    "id": "pb-free-power-agriculture",
    "name": "Punjab Free Power Subsidy (Agricultural Tubewells & 300 Units Domestic)",
    "hindiName": "पंजाब निःशुल्क बिजली योजना (कृषि एवं ३०० यूनिट घरेलू)",
    "teluguName": "పంజాబ్ ఉచిత విద్యుత్ పథకం",
    "tamilName": "பஞ்சாப் இலவச மின்சார திட்டம்",
    "tagline": "100% free electricity for agricultural tubewells and 300 units free power per month for domestic consumers.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Energy Support",
    "geographicScope": "State Scheme (Punjab)",
    "stateApplicability": "Punjab",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "PB",
    "administeringGovernment": "Government of Punjab",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Punjab Farmers with AP Tube Wells",
      "Domestic Consumers (Zero Bill up to 300 units/mo)",
      "SC/BC Domestic Consumers"
    ],
    "shortSummary": "Zero power bill for 14+ Lakh agricultural tubewells across Punjab to support foodgrain production, plus 300 units free electricity monthly for domestic households with bi-monthly zero bills.",
    "fullDescription": "Punjab has long pioneered power subsidies for its agrarian economy. This scheme provides completely free power to over 1.4 million agricultural tube wells without meter charges, ensuring irrigation viability for wheat and paddy. Additionally, the state provides 300 free units of electricity per month to all domestic consumers, resulting in zero electricity bills for over 85% of households.",
    "financialBenefit": "100% free power for farming tubewells + up to 600 units free per 2-month billing cycle for homes (saving ₹3,000-₹6,000/bill)",
    "keyObjectives": [
      "Guarantee uninterrupted, subsidized irrigation power to preserve national food security",
      "Provide substantial cost-of-living relief to rural and urban domestic consumers",
      "Reduce utility debt stress among marginalized households"
    ],
    "eligibilityRules": {
      "stateResidence": "Punjab",
      "notes": "Agricultural connection registered in Punjab under AP category; domestic consumers with active PSPCL domestic connection."
    },
    "eligibilityHighlights": [
      "All farmers holding sanctioned Agricultural Power (AP) tubewell connections with PSPCL",
      "All domestic consumers in Punjab consuming up to 300 units/month (600 units per bi-monthly cycle)"
    ],
    "exclusions": [
      "Commercial, industrial, and institutional high-tension power consumers"
    ],
    "requiredDocuments": [
      {
        "id": "doc-pb-power-bill",
        "name": "PSPCL Electricity Bill & Account Number",
        "category": "other",
        "purpose": "Identification of consumer account number (Contract Account Number)",
        "citizenTip": "Find 10-digit Account ID on top right corner of previous bill.",
        "isMandatory": true
      },
      {
        "id": "doc-pb-power-aadhaar",
        "name": "Aadhaar Card of Consumer",
        "category": "identity",
        "purpose": "Linking KYC with electricity service account",
        "citizenTip": "Can be linked online on pspcl.in.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Automatic Application for Existing Consumers",
        "description": "Existing domestic consumers and AP tubewell connections receive the subsidy automatically on their PSPCL bill.",
        "portalOrOffice": "PSPCL Automatic Billing"
      },
      {
        "stepNumber": 2,
        "title": "Verify Zero Bill Generation",
        "description": "Check your physical bill or download bill on the PSPCL Consumer App / pspcl.in displaying ₹0 bill amount.",
        "portalOrOffice": "pspcl.in / PSPCL Mobile App"
      },
      {
        "stepNumber": 3,
        "title": "Lodge Grievance if Discrepancy Occurs",
        "description": "Call 1912 or lodge an online query if subsidy is not reflected despite consumption being under 600 bi-monthly units.",
        "portalOrOffice": "PSPCL Helpline 1912"
      }
    ],
    "officialSource": {
      "name": "Punjab State Power Corporation Limited (PSPCL)",
      "url": "https://pspcl.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Power, Government of Punjab",
      "helpline": "1912",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official power utility portal of Punjab State Power Corporation."
    }
  },
  {
    "id": "pb-ghar-ghar-rozgar",
    "name": "Punjab Ghar Ghar Rozgar and Karobar Mission (Youth Employment & Skilling)",
    "hindiName": "पंजाब घर घर रोज़गार एवं कारोबार मिशन",
    "teluguName": "పంజాబ్ ఘర్ ఘర్ రోజ్‌గార్ మిషన్",
    "tamilName": "பஞ்சாப் கர் கர் ரோஜ்கார் மிஷன்",
    "tagline": "Comprehensive placement portal, mega job fairs, foreign study counselling, and self-employment loans for Punjab youth.",
    "category": "unemployment-skills",
    "categoryLabel": "Employment & Skills",
    "geographicScope": "State Scheme (Punjab)",
    "stateApplicability": "Punjab",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "PB",
    "administeringGovernment": "Government of Punjab",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "Unemployed Educated Youth",
      "Technical Diploma & ITI Graduates",
      "Job Seekers Looking for Foreign Study/Work"
    ],
    "shortSummary": "Statewide mission connecting job seekers with leading domestic and international employers through District Bureaus of Employment and Enterprise (DBEE) across all 23 districts of Punjab.",
    "fullDescription": "The Punjab Ghar Ghar Rozgar and Karobar Mission (PGRKAM) provides structured employment facilitation to youths. Operating via specialized DBEE offices in every district, the portal provides free job matching, free preparation coaching for state and armed forces exams, overseas employment guidance to prevent illegal immigration, and collateral-free credit linkages for self-employment.",
    "financialBenefit": "Free job placement facilitation, vocational training, exam coaching, and self-employment loans up to ₹10 Lakh",
    "keyObjectives": [
      "Bridge the gap between skilled youth and corporate recruiters in Punjab and NCR",
      "Provide legitimate, government-regulated guidance for foreign employment and study visas",
      "Facilitate low-interest entrepreneurial loans through Mudra and state cooperative banks"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 40,
      "stateResidence": "Punjab",
      "notes": "Residents of Punjab aged 18 to 40 holding 10th pass, 12th pass, ITI, diploma, graduate, or postgraduate degrees."
    },
    "eligibilityHighlights": [
      "Bonafide resident of Punjab looking for employment or self-employment",
      "Minimum educational qualification 10th pass or ITI certification"
    ],
    "exclusions": [
      "Regular full-time employees in organized public sector corporations"
    ],
    "requiredDocuments": [
      {
        "id": "doc-pb-ggr-edu",
        "name": "Educational Certificates and Marksheets",
        "category": "academic",
        "purpose": "Verification of academic qualifications for job matching",
        "citizenTip": "Keep digitized copies in PDF format.",
        "isMandatory": true
      },
      {
        "id": "doc-pb-ggr-aadhaar",
        "name": "Aadhaar Card",
        "category": "identity",
        "purpose": "Identity verification and candidate registration",
        "citizenTip": "Aadhaar OTP is needed for portal login.",
        "isMandatory": true
      },
      {
        "id": "doc-pb-ggr-resume",
        "name": "Curriculum Vitae (CV) / Resume",
        "category": "other",
        "purpose": "Resume creation and submission to recruiters",
        "citizenTip": "Can also be auto-generated on PGRKAM website.",
        "isMandatory": false
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register on PGRKAM Portal",
        "description": "Create candidate profile on pgrkam.com detailing education, technical skills, and job preferences.",
        "portalOrOffice": "pgrkam.com"
      },
      {
        "stepNumber": 2,
        "title": "Participate in Mega Rozgar Melas & Interviews",
        "description": "Receive notifications for district job fairs and appear for in-person or virtual employer interviews.",
        "portalOrOffice": "District Bureau of Employment and Enterprise (DBEE)"
      },
      {
        "stepNumber": 3,
        "title": "Job Offer & Onboarding",
        "description": "Receive appointment letters directly from empaneled corporate partners and industrial employers.",
        "portalOrOffice": "Employer / DBEE"
      }
    ],
    "officialSource": {
      "name": "Department of Employment Generation and Training, Punjab",
      "url": "https://pgrkam.com",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Employment Generation, Skill Development and Training",
      "helpline": "0172-5011186",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Punjab employment platform operating across all 23 districts."
    }
  },
  {
    "id": "rj-chiranjeevi-swasthya-bima",
    "name": "Mukhya Mantri Ayushman Arogya Yojana (Chiranjeevi Swasthya Bima)",
    "hindiName": "मुख्यमंत्री आयुष्मान आरोग्य योजना (चिरंजीवी स्वास्थ्य बीमा)",
    "teluguName": "ముఖ్యమంత్రి చిరంజీవి ఆరోగ్య పథకం (రాజస్థాన్)",
    "tamilName": "முதலமைச்சர் சிரஞ்சீவி ஆயுஷ்மான் காப்பீடு திட்டம்",
    "tagline": "Up to ₹25 Lakh cashless medical treatment per family per year in government and empaneled private hospitals.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Rajasthan)",
    "stateApplicability": "Rajasthan",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "RJ",
    "administeringGovernment": "Government of Rajasthan",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "NFSA Beneficiaries",
      "SECC Families",
      "Small & Marginal Farmers",
      "Contractual Workers",
      "All Jan Aadhaar Families"
    ],
    "shortSummary": "Universal health insurance covering hospital admissions, major surgeries, organ transplants, and cancer therapy up to ₹25 Lakh annually for all families holding Jan Aadhaar cards in Rajasthan.",
    "fullDescription": "The Mukhya Mantri Ayushman Arogya Yojana (formerly Chiranjeevi) offers unmatched cashless inpatient coverage up to ₹25 Lakh per family per year. NFSA cardholders, SECC families, COVID-19 ex-gratia beneficiaries, contractual workers, and small farmers receive 100% state-paid premium. Other resident families can participate with a nominal premium contribution of ₹850/year.",
    "financialBenefit": "Up to ₹25,00,000 / year cashless hospital treatment + ₹10 Lakh accidental death/disability coverage",
    "keyObjectives": [
      "Eliminate catastrophic out-of-pocket health spending for tertiary surgeries and chronic conditions",
      "Provide cashless admission across 1,800+ empaneled private and government hospitals",
      "Integrate organ transplant, cardiac stenting, knee replacement, and oncology under universal state coverage"
    ],
    "eligibilityRules": {
      "stateResidence": "Rajasthan",
      "notes": "All families registered under Jan Aadhaar in Rajasthan. Free for NFSA, small farmers, contractual workers; ₹850/yr for other categories."
    },
    "eligibilityHighlights": [
      "Resident families of Rajasthan with active Jan Aadhaar card",
      "Free premium category: NFSA, SECC 2011, small & marginal farmers, contractual employees, COVID-19 orphans",
      "Open to all other Rajasthan residents at subsidized premium of ₹850 per year"
    ],
    "exclusions": [
      "Central and state government permanent employees eligible for RGHS (Rajasthan Government Health Scheme)"
    ],
    "requiredDocuments": [
      {
        "id": "doc-rj-chi-janaadhaar",
        "name": "Jan Aadhaar Card / Jan Aadhaar Enrolment Slip",
        "category": "identity",
        "purpose": "Family identity and eligibility verification",
        "citizenTip": "Card can be downloaded online on janaadhaar.rajasthan.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-rj-chi-aadhaar",
        "name": "Aadhaar Card of the Patient",
        "category": "identity",
        "purpose": "Individual biometric identification during hospital admission",
        "citizenTip": "Must match details listed in Jan Aadhaar directory.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Check Status / Register Jan Aadhaar on SSO Portal",
        "description": "Login to sso.rajasthan.gov.in and check Chiranjeevi / Ayushman Arogya status under Jan Aadhaar.",
        "portalOrOffice": "sso.rajasthan.gov.in / E-Mitra"
      },
      {
        "stepNumber": 2,
        "title": "Pay Nominal Premium (if in general category)",
        "description": "General category families pay ₹850 annual premium at E-Mitra kiosk or online.",
        "portalOrOffice": "E-Mitra / Online SSO"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Admission with Jan Aadhaar",
        "description": "Present Jan Aadhaar card at the Swasthya Margdarshak helpdesk in any empaneled hospital.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "Department of Medical, Health and Family Welfare, Rajasthan",
      "url": "https://health.rajasthan.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Rajasthan State Health Assurance Agency",
      "helpline": "181",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship health assurance scheme of Rajasthan providing comprehensive medical cover."
    }
  },
  {
    "id": "rj-indira-rasoi-annapurna",
    "name": "Shri Annapurna Rasoi Yojana (Rajasthan Subsidized Wholesome Meals)",
    "hindiName": "श्री अन्नपूर्णा रसोई योजना (राजस्थान सुलभ भोजन)",
    "teluguName": "శ్రీ అన్నపూర్ణ రసోయి పథకం (రాజస్థాన్)",
    "tamilName": "ஸ்ரீ அன்னபூர்ணா ரசோய் திட்டம் (ராஜஸ்தான்)",
    "tagline": "Nutritious, hygienic, freshly prepared wholesome meal for only ₹8 at 1,000+ kitchen centers across Rajasthan.",
    "category": "low-income-welfare",
    "categoryLabel": "Public & Citizen Services",
    "geographicScope": "State Scheme (Rajasthan)",
    "stateApplicability": "Rajasthan",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "RJ",
    "administeringGovernment": "Government of Rajasthan",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Migrant Laborers",
      "Daily Wage Earners",
      "Students",
      "Hospital Attendants",
      "Destitute Citizens"
    ],
    "shortSummary": "Provides freshly cooked nutritious lunch and dinner comprising 450 grams of food (chapati, dal, sabzi, pickle) for ₹8 per thali, with state government providing ₹22 subsidy per plate.",
    "fullDescription": "Guided by the motto \"No One Sleeps Hungry\" (Koi Bhookha Na Soye), Shri Annapurna Rasoi Yojana operates over 1,000 hygienic dining kitchens near railway stations, bus stands, and district hospitals. Citizens receive a hot, wholesome 450g meal (100g pulses, 100g seasonal vegetables, 250g chapatis, and pickles) at a token price of ₹8, fully inspected and monitored through real-time CCTV and mobile app auditing.",
    "financialBenefit": "Wholesome nutritious meal at ₹8/thali (State government subsidizes ₹22 per thali)",
    "keyObjectives": [
      "Eradicate hunger and nutritional deficits among urban and semi-urban labor migrants",
      "Provide clean, dignified sitting dining facilities for daily wage earners and hospital visitors",
      "Maintain strict food safety standards with biometric receipt issuance"
    ],
    "eligibilityRules": {
      "stateResidence": "Rajasthan",
      "notes": "Open to all citizens present in Rajasthan without requiring caste or income documentation."
    },
    "eligibilityHighlights": [
      "Universal access — any individual can walk in and purchase a token for ₹8",
      "Zero paperwork or income certificate required at the counter"
    ],
    "exclusions": [
      "Commercial bulk resale or off-site catering takeaway abuses"
    ],
    "requiredDocuments": [
      {
        "id": "doc-rj-rasoi-none",
        "name": "Basic Mobile Number or Jan Aadhaar / Aadhaar (Optional)",
        "category": "identity",
        "purpose": "Token generation and meal receipt logging",
        "citizenTip": "Aadhaar / Mobile number is captured for digital audit at billing counter.",
        "isMandatory": false
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Walk into any Shri Annapurna Rasoi Center",
        "description": "Visit any of the 1,000+ centers located near hospitals, bus terminals, and industrial clusters.",
        "portalOrOffice": "Annapurna Rasoi Dining Hall"
      },
      {
        "stepNumber": 2,
        "title": "Purchase Meal Coupon for ₹8",
        "description": "Pay ₹8 in cash or UPI at the digital token counter and receive your dining token.",
        "portalOrOffice": "Cashier Counter"
      },
      {
        "stepNumber": 3,
        "title": "Enjoy Freshly Cooked Meal",
        "description": "Receive hot hygienic meal in clean seated dining hall.",
        "portalOrOffice": "Dining Area"
      }
    ],
    "officialSource": {
      "name": "Department of Local Self Government, Rajasthan",
      "url": "https://lsg.urban.rajasthan.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Local Self Government Department",
      "helpline": "181",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Urban subsidized dining network managed by Local Self Government Department."
    }
  },
  {
    "id": "rj-palanhar-yojana",
    "name": "Palanhar Yojana (Rajasthan Foster & Orphan Child Care Support)",
    "hindiName": "पालनहार योजना (राजस्थान अनाथ एवं देखरेख योग्य बच्चे)",
    "teluguName": "పాలన్‌హార్ పథకం (రాజస్థాన్)",
    "tamilName": "பாலன்ஹார் திட்டம் (ராஜஸ்தான்)",
    "tagline": "Monthly financial assistance of ₹1,500 to ₹2,500 + annual clothing allowance of ₹2,000 for vulnerable and orphan children.",
    "category": "children-nutrition",
    "categoryLabel": "Children & Family Welfare",
    "geographicScope": "State Scheme (Rajasthan)",
    "stateApplicability": "Rajasthan",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "RJ",
    "administeringGovernment": "Government of Rajasthan",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "childhood",
    "beneficiaries": [
      "Orphan Children",
      "Children of Widows",
      "Children of Incarcerated Parents",
      "Children of PwD Parents"
    ],
    "shortSummary": "Direct monthly cash stipends to legal guardians (Palanhar) who raise orphan, destitute, or vulnerable children in family settings, along with mandatory school enrollment and health checks.",
    "fullDescription": "Palanhar Yojana avoids institutionalizing vulnerable children by providing monthly maintenance payments to relatives or guardians who care for them. Guardians receive ₹1,500/month for children aged 0-6 years (enrolled in Anganwadi) and ₹2,500/month for children aged 6-18 years (enrolled in school), plus an annual lump sum of ₹2,000 for books, clothing, and footwear.",
    "financialBenefit": "₹1,500 to ₹2,500 / month / child + ₹2,000 annual clothing and book grant",
    "keyObjectives": [
      "Ensure vulnerable children grow up within a loving familial environment instead of orphanages",
      "Enforce mandatory school attendance and routine immunization through financial incentives",
      "Shield children of widowed, disabled, or incarcerated parents from child labor"
    ],
    "eligibilityRules": {
      "maxAge": 18,
      "maxIncome": 120000,
      "stateResidence": "Rajasthan",
      "notes": "Child must be under 18 years, resident of Rajasthan, and guardian annual family income must not exceed ₹1.2 Lakh (no income limit for orphan category)."
    },
    "eligibilityHighlights": [
      "Orphan children, or children of divorced/widowed mothers, disabled parents, or life-term prisoners",
      "Child must be enrolled in Anganwadi (age 0-6) or recognized school (age 6-18)",
      "Guardian annual income not exceeding ₹1,20,000 (exempt for orphan category)"
    ],
    "exclusions": [
      "Children above 18 years of age or not attending recognized school/Anganwadi"
    ],
    "requiredDocuments": [
      {
        "id": "doc-rj-pal-death",
        "name": "Death Certificate of Parents / Jail Certificate / Disability Certificate",
        "category": "medical",
        "purpose": "Proof of entitlement category",
        "citizenTip": "Depends on category (e.g. death certificate for orphans).",
        "isMandatory": true
      },
      {
        "id": "doc-rj-pal-school",
        "name": "School / Anganwadi Enrollment & Attendance Certificate",
        "category": "academic",
        "purpose": "Verify ongoing educational attendance",
        "citizenTip": "Renewed annually through school headmaster stamp.",
        "isMandatory": true
      },
      {
        "id": "doc-rj-pal-janaadhaar",
        "name": "Jan Aadhaar Card of Guardian (Palanhar)",
        "category": "identity",
        "purpose": "DBT bank verification and family linkage",
        "citizenTip": "Guardian bank account must be actively seeded in Jan Aadhaar.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online via E-Mitra or SSO Portal",
        "description": "Submit Palanhar application online on sso.rajasthan.gov.in or through nearest E-Mitra kiosk.",
        "portalOrOffice": "sso.rajasthan.gov.in / E-Mitra"
      },
      {
        "stepNumber": 2,
        "title": "Scrutiny by Block Social Justice Officer",
        "description": "Block Development Officer (BDO) verifies credentials and approves guardian authorization.",
        "portalOrOffice": "Social Justice Block Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Disbursal",
        "description": "Monthly assistance (₹1,500 - ₹2,500) is credited directly to the guardian Jan Aadhaar bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Social Justice and Empowerment, Rajasthan",
      "url": "https://sje.rajasthan.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Justice and Empowerment Department",
      "helpline": "181",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship social welfare scheme for child foster protection in Rajasthan."
    }
  },
  {
    "id": "rj-anuprati-coaching",
    "name": "Mukhyamantri Anuprati Coaching Yojana (Rajasthan Free Competitive Coaching)",
    "hindiName": "मुख्यमंत्री अनुप्रति कोचिंग योजना (राजस्थान निःशुल्क कोचिंग)",
    "teluguName": "ముఖ్యమంత్రి అనుప్రతి కోచింగ్ పథకం",
    "tamilName": "முதலமைச்சர் அனுப்ரதி பயிற்சி திட்டம்",
    "tagline": "100% free professional coaching in top institutes + ₹40,000/year living stipend for UPSC, JEE, NEET, and State PSC exams.",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Rajasthan)",
    "stateApplicability": "Rajasthan",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "RJ",
    "administeringGovernment": "Government of Rajasthan",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "SC / ST / OBC / MBC / EWS / Minority Students",
      "Specially-Abled Aspirants",
      "College Graduates"
    ],
    "shortSummary": "Offers 30,000 meritorious underprivileged students free tuition at premier coaching institutes across Rajasthan for UPSC, RPSC, JEE, NEET, CA, and CLAT exams, plus accommodation allowances.",
    "fullDescription": "Mukhyamantri Anuprati Coaching Yojana democratizes access to expensive competitive exam preparation. Students from marginalized economic backgrounds are selected based on 10th and 12th board merit. The state pays 100% of coaching fees directly to premier institutions in Jaipur, Kota, Jodhpur, and Udaipur, and provides an additional ₹40,000/year living allowance for students studying outside their home towns.",
    "financialBenefit": "100% free premium coaching fees + ₹40,000 / year boarding stipend for outstation students",
    "keyObjectives": [
      "Eliminate commercial coaching fee barriers for brilliant underprivileged students",
      "Increase selection ratios of SC/ST/OBC/EWS candidates in premier administrative and technical careers",
      "Provide living stipends so rural candidates can afford hostel accommodation in coaching hubs"
    ],
    "eligibilityRules": {
      "maxIncome": 800000,
      "stateResidence": "Rajasthan",
      "notes": "Resident of Rajasthan belonging to SC, ST, OBC, MBC, EWS, or Minority, or children of state employees in Pay Matrix L-11, with family annual income under ₹8 Lakh."
    },
    "eligibilityHighlights": [
      "Bonafide resident of Rajasthan holding Jan Aadhaar",
      "Belongs to SC, ST, OBC, MBC, EWS, Minority, or Specially-Abled category",
      "Family annual income under ₹8,00,000",
      "Selected strictly on merit of Class 10th or 12th board exam marks"
    ],
    "exclusions": [
      "Students with family annual income exceeding ₹8 Lakh (unless parent is govt employee up to L-11)",
      "Students who have already availed the benefit of this scheme in a previous year for the same course"
    ],
    "requiredDocuments": [
      {
        "id": "doc-rj-anu-marks",
        "name": "Class 10th and 12th Board Marksheets",
        "category": "academic",
        "purpose": "Merit list preparation and verification of qualifying scores",
        "citizenTip": "Original scanned copies must be uploaded on portal.",
        "isMandatory": true
      },
      {
        "id": "doc-rj-anu-caste",
        "name": "Caste Certificate / EWS Certificate",
        "category": "caste",
        "purpose": "Category verification",
        "citizenTip": "Digital certificate issued via Jan Aadhaar / E-Mitra.",
        "isMandatory": true
      },
      {
        "id": "doc-rj-anu-income",
        "name": "Income Certificate (Family income < ₹8 Lakh)",
        "category": "income",
        "purpose": "Income threshold compliance",
        "citizenTip": "Self-declaration format signed by two gazetted officers or Jan Aadhaar verified.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online during Open Window on SJMS Portal",
        "description": "Login to sso.rajasthan.gov.in and select SJMS portal to choose desired competitive course and coaching institute.",
        "portalOrOffice": "sso.rajasthan.gov.in / sjmsnew.rajasthan.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Merit List Publication",
        "description": "Department publishes category-wise merit list based on board exam scores.",
        "portalOrOffice": "SJMS Portal"
      },
      {
        "stepNumber": 3,
        "title": "Institute Allotment & Joining",
        "description": "Report to allotted coaching institute within specified timeline with original documents to commence classes.",
        "portalOrOffice": "Empaneled Coaching Institute"
      }
    ],
    "officialSource": {
      "name": "Department of Social Justice and Empowerment, Rajasthan",
      "url": "https://sjmsnew.rajasthan.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Justice and Empowerment Department",
      "helpline": "181",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Competitive coaching scholarship scheme administered by Rajasthan Social Justice Department."
    }
  },
  {
    "id": "rj-kisan-mahotsav-samaan-nidhi",
    "name": "Rajasthan Kisan Samman Nidhi (State Top-Up Scheme)",
    "hindiName": "राजस्थान किसान सम्मान निधि (राज्य टॉप-अप सहायता)",
    "teluguName": "రాజస్థాన్ కిసాన్ సమ్మాన్ నిధి పథకం",
    "tamilName": "ராஜஸ்தான் கிசான் சம்மான் நிதி திட்டம்",
    "tagline": "Additional ₹2,000 / year state financial bonus to PM-KISAN beneficiary farmers in Rajasthan, raising total to ₹8,000/year.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Rajasthan)",
    "stateApplicability": "Rajasthan",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "RJ",
    "administeringGovernment": "Government of Rajasthan",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Landowner Farmers",
      "Small & Marginal Cultivators",
      "PM-KISAN Enrolled Families in Rajasthan"
    ],
    "shortSummary": "Rajasthan government supplements the Central PM-KISAN ₹6,000 with an additional ₹2,000 annual state assistance, granting ₹8,000 directly to farmer bank accounts in seasonal installments.",
    "fullDescription": "To offset the rising cost of diesel, hybrid seeds, and micro-irrigation maintenance in arid and semi-arid terrain, the Government of Rajasthan provides an additional ₹2,000 annually over and above Central PM-KISAN installments. Over 65 Lakh farmers in Rajasthan receive this supplemental direct benefit transfer directly linked to their Jan Aadhaar and land records.",
    "financialBenefit": "₹2,000 / year additional state financial assistance (Total ₹8,000/year with PM-KISAN)",
    "keyObjectives": [
      "Provide supplementary cash liquidity to farmers before Kharif and Rabi sowing seasons",
      "Mitigate crop risk in water-scarce rainfed regions of Rajasthan",
      "Ensure 100% paperless DBT through Jan Aadhaar and PM-KISAN integration"
    ],
    "eligibilityRules": {
      "occupations": [
        "Farmer",
        "Cultivator"
      ],
      "stateResidence": "Rajasthan",
      "notes": "Eligible farmers must be permanent residents of Rajasthan enrolled in PM-KISAN with verified land ownership in Jamabandi records."
    },
    "eligibilityHighlights": [
      "Resident farmer families in Rajasthan owning cultivable agricultural land",
      "Active beneficiary status under Central PM-KISAN scheme",
      "Bank account seeded with Aadhaar and Jan Aadhaar with NPCI mandate"
    ],
    "exclusions": [
      "Institutional landholders",
      "Government employees and retired government pensioners",
      "Income tax payees in previous assessment year"
    ],
    "requiredDocuments": [
      {
        "id": "doc-rj-ksn-jamabandi",
        "name": "Land Record (Jamabandi / Khatauni / Revenue Passbook)",
        "category": "land",
        "purpose": "Proof of agricultural land ownership",
        "citizenTip": "Download signed Jamabandi from Apna Khata portal (apnakhata.rajasthan.gov.in).",
        "isMandatory": true
      },
      {
        "id": "doc-rj-ksn-janaadhaar",
        "name": "Jan Aadhaar Card",
        "category": "identity",
        "purpose": "State DBT beneficiary authentication",
        "citizenTip": "Ensure bank account details in Jan Aadhaar are updated.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Verify PM-KISAN Registration",
        "description": "Ensure PM-KISAN e-KYC and land seeding are verified on pmkisan.gov.in.",
        "portalOrOffice": "pmkisan.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Automatic Seeding via Jan Aadhaar",
        "description": "State agriculture portal automatically matches PM-KISAN beneficiaries with Jan Aadhaar records.",
        "portalOrOffice": "RajKisan Sathi Portal"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit into Bank Account",
        "description": "State top-up installments are credited directly into the farmer Jan Aadhaar mapped bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Agriculture, Government of Rajasthan",
      "url": "https://agriculture.rajasthan.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Agriculture Department",
      "helpline": "1800-180-1551",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official farmer assistance portal operated by Rajasthan Agriculture Department."
    }
  },
  {
    "id": "up-kanya-sumangala-yojana",
    "name": "Mukhya Mantri Kanya Sumangala Yojana (Uttar Pradesh Girl Child Milestone Grants)",
    "hindiName": "मुख्यमंत्री कन्या सुमंगला योजना (उत्तर प्रदेश)",
    "teluguName": "ముఖ్యమంత్రి కన్యా సుమంగళ పథకం (ఉత్తర ప్రదేశ్)",
    "tamilName": "முதலமைச்சர் கன்யா சுமங்கலா திட்டம் (உத்தரப் பிரதேசம்)",
    "tagline": "Structured conditional cash grant of ₹25,000 paid across six key educational and developmental milestones of a girl child.",
    "category": "education",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Uttar Pradesh)",
    "stateApplicability": "Uttar Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UP",
    "administeringGovernment": "Government of Uttar Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "childhood",
    "beneficiaries": [
      "Girl Children born in UP",
      "School & College Girls",
      "Two Daughters per Family"
    ],
    "shortSummary": "Financial grant increased to ₹25,000 transferred in six stages: birth, complete vaccination, Class 1 admission, Class 6 admission, Class 9 admission, and after passing Class 12 upon college entry.",
    "fullDescription": "The Mukhya Mantri Kanya Sumangala Yojana establishes a holistic social security foundation for girl children in Uttar Pradesh. Designed to prevent female feticide, ensure universal institutional birth, complete immunization, and eradicate school dropouts, the scheme transfers direct financial milestones: ₹5,000 at birth, ₹2,000 upon vaccination, ₹3,000 in Class 1, ₹3,000 in Class 6, ₹5,000 in Class 9, and ₹7,000 upon enrolling in diploma or degree programs.",
    "financialBenefit": "₹25,000 total conditional financial grant distributed across 6 milestones",
    "keyObjectives": [
      "Eliminate female foeticide and improve sex ratio at birth in Uttar Pradesh",
      "Ensure 100% completion of childhood immunizations",
      "Incentivize uninterrupted school education and graduation for daughters"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "maxIncome": 300000,
      "stateResidence": "Uttar Pradesh",
      "notes": "Resident of Uttar Pradesh with annual family income not exceeding ₹3,00,000. Benefit capped at maximum two daughters per family."
    },
    "eligibilityHighlights": [
      "Permanent resident of Uttar Pradesh",
      "Annual household income from all sources does not exceed ₹3,00,000",
      "Maximum two daughters per family (or three if second birth yields twin girls)"
    ],
    "exclusions": [
      "Households with annual income exceeding ₹3 Lakh",
      "More than two daughters in the family (unless exceptional twin birth rules apply)"
    ],
    "requiredDocuments": [
      {
        "id": "doc-up-ksy-birth",
        "name": "Birth Certificate of Girl Child",
        "category": "identity",
        "purpose": "Proof of age and institutional delivery",
        "citizenTip": "Must be issued by Registrar of Births and Deaths / Nagar Nigam / Gram Panchayat.",
        "isMandatory": true
      },
      {
        "id": "doc-up-ksy-income",
        "name": "Income Certificate (Income under ₹3 Lakh)",
        "category": "income",
        "purpose": "Income threshold validation",
        "citizenTip": "Obtain digital income certificate from edistrict.up.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-up-ksy-vaccine",
        "name": "Immunization Card / School Admission Certificate (Milestone Specific)",
        "category": "academic",
        "purpose": "Verification of specific milestone achievement",
        "citizenTip": "Mother and Child Protection (MCP) card signed by ANM for Stage 2.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register Online on MKSY Portal",
        "description": "Create parent/guardian login on mksy.up.gov.in and enter family and child details.",
        "portalOrOffice": "mksy.up.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Apply for Specific Milestone Stage",
        "description": "Upload required certificate (birth, vaccine card, or school admission receipt) for the target stage.",
        "portalOrOffice": "Online Portal / Common Service Centre (CSC)"
      },
      {
        "stepNumber": 3,
        "title": "Block/District Verification & Direct Payment",
        "description": "Block Development Officer (rural) or SDM (urban) approves the claim and funds are credited via PFMS.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Women and Child Development, Uttar Pradesh",
      "url": "https://mksy.up.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Women and Child Development Department",
      "helpline": "181 / 1098",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official UP government portal for Mukhya Mantri Kanya Sumangala Yojana."
    }
  },
  {
    "id": "up-shadi-anudan-yojana",
    "name": "UP Vivah Hetu Anudan Yojana (Marriage Financial Grant for Poor Daughters)",
    "hindiName": "उत्तर प्रदेश विवाह हेतु अनुदान योजना (शादी अनुदान)",
    "teluguName": "ఉత్తరప్రదేశ్ వివాహ అనుదాన పథకం",
    "tamilName": "உத்தரப் பிரதேசம் திருமண மானியத் திட்டம்",
    "tagline": "One-time direct financial grant of ₹20,000 for the wedding expenses of poor daughters of SC, ST, OBC, Minority, and General BPL families.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Uttar Pradesh)",
    "stateApplicability": "Uttar Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UP",
    "administeringGovernment": "Government of Uttar Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "SC / ST / OBC / General Poor Families",
      "Minority Households",
      "Daughters of Impoverished Parents"
    ],
    "shortSummary": "One-time ₹20,000 direct bank grant provided to low-income parents in Uttar Pradesh to assist with daughter wedding costs, preventing debt burdens and exploitation.",
    "fullDescription": "The Uttar Pradesh Vivah Hetu Anudan Yojana gives meaningful relief to poor families during daughter marriage ceremonies. Handled by the Social Welfare, Backward Classes Welfare, and Minority Welfare departments, the grant of ₹20,000 is directly credited to the father/mother or daughter bank account. Applications can be submitted starting 90 days before the wedding up to 90 days following marriage.",
    "financialBenefit": "₹20,000 one-time financial marriage grant via DBT",
    "keyObjectives": [
      "Shield destitute and landless parents from informal money lenders during weddings",
      "Enforce mandatory minimum age of 18 years for girls and 21 years for grooms",
      "Promote simple and dignified marriage ceremonies among economically weaker sections"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "targetGender": "female",
      "maxIncome": 56460,
      "stateResidence": "Uttar Pradesh",
      "notes": "Bride must be 18+, groom 21+. Annual income ceiling: ₹46,080 for rural areas and ₹56,460 for urban areas. Capped at 2 daughters per family."
    },
    "eligibilityHighlights": [
      "Permanent resident of Uttar Pradesh",
      "Annual family income not exceeding ₹46,080 (rural) or ₹56,460 (urban)",
      "Bride must be at least 18 years and groom at least 21 years of age",
      "Maximum up to two daughters per family"
    ],
    "exclusions": [
      "Income above the stipulated rural/urban ceilings",
      "Marriages where either bride or groom does not satisfy the legal marriageable age"
    ],
    "requiredDocuments": [
      {
        "id": "doc-up-sha-income",
        "name": "Income Certificate (Rural < ₹46,080 / Urban < ₹56,460)",
        "category": "income",
        "purpose": "Poverty ceiling certification",
        "citizenTip": "Must be issued by Tehsildar via eDistrict portal.",
        "isMandatory": true
      },
      {
        "id": "doc-up-sha-card",
        "name": "Wedding Invitation Card (Shaadi Card) or Marriage Certificate",
        "category": "other",
        "purpose": "Proof of upcoming or solemnized marriage",
        "citizenTip": "Ensure bride and groom names match age proof documents.",
        "isMandatory": true
      },
      {
        "id": "doc-up-sha-bank",
        "name": "Aadhaar-Seeded Bank Passbook of Applicant / Bride",
        "category": "bank",
        "purpose": "Direct benefit transfer bank account",
        "citizenTip": "Must have active NPCI mapping.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on Shadi Anudan Portal",
        "description": "Submit online form on shadianudan.upsdc.gov.in between 90 days before and 90 days after marriage date.",
        "portalOrOffice": "shadianudan.upsdc.gov.in / CSC Jan Seva Kendra"
      },
      {
        "stepNumber": 2,
        "title": "Verification by Sub-Divisional Magistrate / BDO",
        "description": "Lekhpal or village secretary conducts physical field inquiry to verify marriage credentials and income.",
        "portalOrOffice": "Tehsildar / BDO Office"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit of ₹20,000",
        "description": "District Social Welfare Officer approves the disbursement and amount is credited to bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Social Welfare Department, Government of Uttar Pradesh",
      "url": "https://shadianudan.upsdc.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Welfare Department",
      "helpline": "1800-419-0001",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official UP government portal for marriage financial assistance."
    }
  },
  {
    "id": "up-abhyudaya-yojana",
    "name": "Mukhya Mantri Abhyudaya Yojana (Uttar Pradesh Free Coaching & Tablet Support)",
    "hindiName": "मुख्यमंत्री अभ्युदय योजना (उत्तर प्रदेश निःशुल्क कोचिंग)",
    "teluguName": "ముఖ్యమంత్రి అభ్యుదయ పథకం (ఉత్తరప్రదేశ్)",
    "tamilName": "முதலமைச்சர் அப்யுதய திட்டம் (உத்தரப் பிரதேசம்)",
    "tagline": "Free top-tier in-person and online coaching by IAS/IPS officers, subject experts, and free tablets for competitive exam aspirants.",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Uttar Pradesh)",
    "stateApplicability": "Uttar Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UP",
    "administeringGovernment": "Government of Uttar Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "UPSC / UPPSC Aspirants",
      "JEE / NEET Students",
      "NDA / CDS Candidates",
      "Economically Weaker Students"
    ],
    "shortSummary": "Statewide network of divisional coaching academies providing free classroom mentoring by senior civil servants, digital study materials, and free tablet computers to meritorious underprivileged youths.",
    "fullDescription": "Launched to ensure that talented youth from rural and low-income backgrounds do not have to migrate to expensive coaching hubs like Prayagraj or Delhi, Mukhya Mantri Abhyudaya Yojana operates free physical training centers across all 75 districts and 18 divisions in UP. Classes are led by serving IAS, IPS, and PCS officers alongside domain experts. Outstanding attendees receive free digital tablets to support e-learning.",
    "financialBenefit": "100% free coaching + digital e-library access + free educational tablet computer for selected students",
    "keyObjectives": [
      "Provide level-playing field mentorship for competitive civil services, medical, and engineering entrances",
      "Utilize administrative expertise of serving civil servants for interactive mentoring and interview guidance",
      "Bridge the digital divide by equipping meritorious rural students with tablet computers"
    ],
    "eligibilityRules": {
      "stateResidence": "Uttar Pradesh",
      "notes": "Resident of Uttar Pradesh pursuing preparation for competitive examinations (UPSC, UPPSC, JEE, NEET, NDA, CDS)."
    },
    "eligibilityHighlights": [
      "Domicile of Uttar Pradesh",
      "Students preparing for recognized competitive exams",
      "Selection conducted through state-level entrance screening test"
    ],
    "exclusions": [
      "Candidates already selected into full-time permanent government services"
    ],
    "requiredDocuments": [
      {
        "id": "doc-up-abh-aadhaar",
        "name": "Aadhaar Card",
        "category": "identity",
        "purpose": "Identity and UP residence validation",
        "citizenTip": "Keep copy ready for examination hall admit card verification.",
        "isMandatory": true
      },
      {
        "id": "doc-up-abh-qual",
        "name": "Qualifying Examination Certificate (10th/12th/Graduation)",
        "category": "academic",
        "purpose": "Educational eligibility verification",
        "citizenTip": "Marksheet of highest attained education.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register Online on Abhyudaya Portal",
        "description": "Visit abhyuday.up.gov.in and register for the specific exam stream (UPSC, NEET, JEE, etc.).",
        "portalOrOffice": "abhyuday.up.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Appear for Online Screening Test",
        "description": "Qualify the online competitive screening assessment conducted by the Social Welfare Department.",
        "portalOrOffice": "Online Portal"
      },
      {
        "stepNumber": 3,
        "title": "Join Divisional Coaching Center",
        "description": "Enroll at the assigned district center and attend interactive classroom and officer mentoring sessions.",
        "portalOrOffice": "Divisional Coaching Center"
      }
    ],
    "officialSource": {
      "name": "Social Welfare Department, Government of Uttar Pradesh",
      "url": "https://abhyuday.up.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Welfare Department",
      "helpline": "0522-2287190",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official UP government competitive coaching portal."
    }
  },
  {
    "id": "up-gopalak-yojana",
    "name": "Uttar Pradesh Gopalak Yojana (Dairy Farming Self-Employment Loan Subsidy)",
    "hindiName": "उत्तर प्रदेश गोपालक योजना (डेयरी स्वरोजगार ऋण अनुदान)",
    "teluguName": "ఉత్తరప్రదేశ్ గోపాలక్ పథకం",
    "tamilName": "உத்தரப் பிரதேசம் கோபாலக் திட்டம்",
    "tagline": "Bank loan assistance up to ₹9 Lakh with ₹1.8 Lakh state interest subsidy for setting up 10-12 cow/buffalo dairy units.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Uttar Pradesh)",
    "stateApplicability": "Uttar Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UP",
    "administeringGovernment": "Government of Uttar Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Unemployed Rural Youth",
      "Small & Marginal Dairy Farmers",
      "Livestock Entrepreneurs"
    ],
    "shortSummary": "Subsidized institutional bank financing to establish modern 10 to 12 milch cow/buffalo dairy mini-farms, providing ₹1.8 Lakh interest subsidy spread over 5 years (₹36,000/year).",
    "fullDescription": "The UP Gopalak Yojana stimulates rural employment and enhances milk production across Uttar Pradesh. Eligible youth can secure up to ₹9 Lakh bank loan to establish a dairy farm with 10 to 12 indigenous milch animals (Gir, Sahiwal, Murrah buffaloes). The state animal husbandry department provides ₹36,000 per year for 5 consecutive years as an interest subsidy, dramatically reducing repayment pressure.",
    "financialBenefit": "Bank loan up to ₹9,00,000 + ₹1,80,000 state interest subsidy disbursed over 5 years",
    "keyObjectives": [
      "Foster white revolution and indigenous cattle rearing in rural Uttar Pradesh",
      "Create self-sustaining dairy micro-enterprises for unemployed rural youth",
      "Link rural dairy units with organized milk collection grids like Parag and Amul"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 50,
      "stateResidence": "Uttar Pradesh",
      "notes": "Unemployed resident of Uttar Pradesh aged 18 to 50 having suitable land for cattle shelter and committed to maintaining at least 5 to 10 milch cattle."
    },
    "eligibilityHighlights": [
      "Permanent resident of Uttar Pradesh aged 18-50 years",
      "Unemployed or underemployed with suitable space for housing milch cattle",
      "Farmer must be willing to rear indigenous cows or recognized buffalo breeds"
    ],
    "exclusions": [
      "Defaulters on prior agricultural or commercial loans with any financial institution"
    ],
    "requiredDocuments": [
      {
        "id": "doc-up-gop-land",
        "name": "Land Ownership / Lease Documents for Cattle Shed",
        "category": "land",
        "purpose": "Verify adequate infrastructure space for livestock",
        "citizenTip": "Must have at least enough land for shed and green fodder storage.",
        "isMandatory": true
      },
      {
        "id": "doc-up-gop-dpr",
        "name": "Detailed Project Report (DPR) / Cattle Quotation",
        "category": "other",
        "purpose": "Bank loan appraisal and subsidy calculation",
        "citizenTip": "Can be assisted by local Veterinary Medical Officer (VMO).",
        "isMandatory": true
      },
      {
        "id": "doc-up-gop-aadhaar",
        "name": "Aadhaar Card and Domicile Certificate",
        "category": "identity",
        "purpose": "Proof of identity and UP residency",
        "citizenTip": "Link mobile with Aadhaar for loan processing.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application to Chief Veterinary Officer (CVO)",
        "description": "Collect and submit form along with project report to the district Chief Veterinary Officer office.",
        "portalOrOffice": "District CVO Office"
      },
      {
        "stepNumber": 2,
        "title": "District Screening Committee Approval",
        "description": "Committee led by Chief Development Officer (CDO) reviews project and forwards sanction to partner bank.",
        "portalOrOffice": "District Animal Husbandry Department"
      },
      {
        "stepNumber": 3,
        "title": "Loan Disbursement and Annual Subsidy Release",
        "description": "Bank disburses purchase loan for cattle; state department credits ₹36,000/year interest subsidy into loan account.",
        "portalOrOffice": "Commercial Bank"
      }
    ],
    "officialSource": {
      "name": "Department of Animal Husbandry, Government of Uttar Pradesh",
      "url": "https://animalhusb.upsdc.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Animal Husbandry Department",
      "helpline": "0522-2740289",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official UP government portal for animal husbandry and dairy self-employment."
    }
  },
  {
    "id": "up-nirashrit-mahila-pension",
    "name": "UP Nirashrit Mahila Pension Yojana (Destitute Widow Pension)",
    "hindiName": "उत्तर प्रदेश निराश्रित महिला पेंशन योजना (विधवा पेंशन)",
    "teluguName": "ఉత్తరప్రదేశ్ నిరాశ్రిత మహిళల పెన్షన్ పథకం",
    "tamilName": "உத்தரப் பிரதேசம் ஆதரவற்ற பெண்கள் ஓய்வூதியத் திட்டம்",
    "tagline": "Monthly social security pension of ₹1,000 (₹12,000/year) transferred directly via DBT to destitute widows.",
    "category": "pension",
    "categoryLabel": "Pensions & Social Security",
    "geographicScope": "State Scheme (Uttar Pradesh)",
    "stateApplicability": "Uttar Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UP",
    "administeringGovernment": "Government of Uttar Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Widowed Women",
      "Destitute Women without Support",
      "BPL Families"
    ],
    "shortSummary": "Quarterly direct benefit transfer of ₹3,000 (₹1,000/month) credited to the bank accounts of destitute widows residing in Uttar Pradesh to guarantee economic survival and dignity.",
    "fullDescription": "The Nirashrit Mahila Pension Yojana provides basic financial autonomy to widowed women who have lost their family primary breadwinner and lack independent sustenance. Operated by the Women and Child Development Department, the pension was raised to ₹1,000 per month and is disbursed on a quarterly schedule directly to Aadhaar-seeded bank accounts without middlemen.",
    "financialBenefit": "₹1,000 / month (₹12,000 annually) transferred via DBT in quarterly installments",
    "keyObjectives": [
      "Provide uninterrupted income floor to destitute widows and dependent children",
      "Shield vulnerable women from extreme poverty and destitution",
      "Enable direct digital transfer with automated biometric life verification"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "targetGender": "female",
      "maxIncome": 200000,
      "stateResidence": "Uttar Pradesh",
      "notes": "Widow residing in Uttar Pradesh aged 18 or above, with family annual income not exceeding ₹2,00,000 and not receiving any other social security pension."
    },
    "eligibilityHighlights": [
      "Resident of Uttar Pradesh aged 18 years and above",
      "Must have lost legal husband (husband death certificate required)",
      "Family annual income must not exceed ₹2,00,000 from all sources",
      "Not receiving old age, disability, or other government pensions"
    ],
    "exclusions": [
      "Women who have remarried after husband death",
      "Beneficiaries already availing Old Age Pension or Disability Pension"
    ],
    "requiredDocuments": [
      {
        "id": "doc-up-nmp-death",
        "name": "Death Certificate of Husband",
        "category": "identity",
        "purpose": "Legal proof of widowhood status",
        "citizenTip": "Issued by Registrar of Births and Deaths / Nagar Nigam / Gram Panchayat.",
        "isMandatory": true
      },
      {
        "id": "doc-up-nmp-income",
        "name": "Income Certificate (Family income < ₹2 Lakh)",
        "category": "income",
        "purpose": "Income threshold verification",
        "citizenTip": "Digital certificate issued through eDistrict portal.",
        "isMandatory": true
      },
      {
        "id": "doc-up-nmp-bank",
        "name": "Aadhaar-Linked Bank Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer receiving account",
        "citizenTip": "Account must be in applicant own sole name with NPCI mapping.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on SSPY Portal",
        "description": "Fill online form on sspy-up.gov.in under the Widows Pension section and upload documents.",
        "portalOrOffice": "sspy-up.gov.in / CSC Jan Seva Kendra"
      },
      {
        "stepNumber": 2,
        "title": "Field Verification by BDO / SDM",
        "description": "Block Development Officer (rural) or Sub-Divisional Magistrate (urban) verifies details within 45 days.",
        "portalOrOffice": "BDO / SDM Office"
      },
      {
        "stepNumber": 3,
        "title": "Quarterly DBT Disbursement",
        "description": "District Probation Officer issues sanction, and ₹3,000 quarterly pension is credited directly to the bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Women and Child Development, Uttar Pradesh",
      "url": "https://sspy-up.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Women and Child Development Department",
      "helpline": "1800-419-0001 / 1090",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Unified social security pension portal of Uttar Pradesh."
    }
  },
  {
    "id": "uk-atal-ayushman-yojana",
    "name": "Atal Ayushman Uttarakhand Yojana (Universal State Health Insurance)",
    "hindiName": "अटल आयुष्मान उत्तराखण्ड योजना (सार्वभौमिक स्वास्थ्य बीमा)",
    "teluguName": "అటల్ ఆయుష్మాన్ ఉత్తరాఖండ్ పథకం",
    "tamilName": "அடல் ஆயுஷ்மான் உத்தராகண்ட் திட்டம்",
    "tagline": "Universal cashless hospitalization up to ₹5 Lakh per family per year for all 23+ Lakh families of Uttarakhand.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Uttarakhand)",
    "stateApplicability": "Uttarakhand",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UK",
    "administeringGovernment": "Government of Uttarakhand",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "All Permanent Residents of Uttarakhand",
      "NFSA Families",
      "State Pensioners & Dependents"
    ],
    "shortSummary": "Universal health coverage offering ₹5 Lakh annual cashless treatment across 175+ empaneled hospitals in Uttarakhand and leading national tertiary hospitals like AIIMS Rishikesh.",
    "fullDescription": "Uttarakhand is one of the few states in India providing truly universal health protection. The Atal Ayushman Uttarakhand Yojana covers all 2.3 million resident families without income ceiling, providing cashless secondary and tertiary medical treatments up to ₹5 Lakh annually across 1,750+ standard surgical and medical procedures.",
    "financialBenefit": "₹5,00,000 / family / year universal cashless inpatient medical coverage",
    "keyObjectives": [
      "Provide 100% universal health protection across tough Himalayan hill terrains",
      "Ensure cashless emergency treatment at AIIMS Rishikesh and tertiary centers in Dehradun",
      "Eliminate out-of-pocket healthcare debt for hill communities"
    ],
    "eligibilityRules": {
      "stateResidence": "Uttarakhand",
      "notes": "All bonafide residents of Uttarakhand possessing a valid state ration card or NFSA card."
    },
    "eligibilityHighlights": [
      "Permanent resident or domicile of Uttarakhand",
      "Family must be registered in the state food and civil supplies ration card database"
    ],
    "exclusions": [
      "Serving central government employees covered under CGHS"
    ],
    "requiredDocuments": [
      {
        "id": "doc-uk-aay-ration",
        "name": "Uttarakhand State Ration Card",
        "category": "income",
        "purpose": "Family unit verification and member mapping",
        "citizenTip": "Check your ration card on fcs.uk.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-uk-aay-aadhaar",
        "name": "Aadhaar Card of Family Members",
        "category": "identity",
        "purpose": "Individual biometric identification during Golden Card creation",
        "citizenTip": "Keep mobile handy for Aadhaar OTP.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Check Family Eligibility on Ayushman Portal",
        "description": "Verify your name in the state database on ayushmanuttarakhand.org or at any CSC center.",
        "portalOrOffice": "ayushmanuttarakhand.org / CSC"
      },
      {
        "stepNumber": 2,
        "title": "Generate Golden Card (Ayushman Card)",
        "description": "Visit nearest government hospital Arogya Mitra counter or CSC to complete e-KYC and print card.",
        "portalOrOffice": "Government Hospital / CSC"
      },
      {
        "stepNumber": 3,
        "title": "Avail Cashless Hospitalization",
        "description": "Present Golden Card at any empaneled hospital for cashless admission, surgery, and discharge medications.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "State Health Agency, Uttarakhand",
      "url": "https://ayushmanuttarakhand.org",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Medical Health & Family Welfare",
      "helpline": "104 / 1800-180-5145",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Universal health coverage framework managed by State Health Agency Uttarakhand."
    }
  },
  {
    "id": "uk-nanda-gaura-yojana",
    "name": "Nanda Gaura Yojana (Uttarakhand Girl Child Education & Empowerment)",
    "hindiName": "नन्दा गौरा योजना (उत्तराखण्ड कन्या कल्याण)",
    "teluguName": "నందా గౌరా పథకం (ఉత్తరాఖండ్)",
    "tamilName": "நந்தா கௌரா திட்டம் (உத்தராகண்ட்)",
    "tagline": "Direct grant of ₹11,000 at girl child birth + ₹51,000 upon passing Class 12 for higher education and career building.",
    "category": "education",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Uttarakhand)",
    "stateApplicability": "Uttarakhand",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UK",
    "administeringGovernment": "Government of Uttarakhand",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "Newborn Girl Children",
      "Class 12 Passed Girls",
      "Low-Income Households in Hill Districts"
    ],
    "shortSummary": "Comprehensive financial lifecycle support providing ₹11,000 upon birth of a girl child and ₹51,000 upon graduating Class 12 for pursuing higher education or vocational skills.",
    "fullDescription": "Nanda Gaura Yojana is Uttarakhand flagship initiative for female empowerment and preventing child marriage in mountainous regions. The scheme provides ₹11,000 DBT to the mother upon institutional delivery of a daughter, followed by a major financial grant of ₹51,000 credited to the girl student bank account after successfully passing Class 12, enabling her to pay college tuition fees or technical skilling diplomas.",
    "financialBenefit": "₹11,000 grant at birth + ₹51,000 grant upon passing Class 12 (Total ₹62,000)",
    "keyObjectives": [
      "Eradicate gender bias, promote girl child birth, and enhance sex ratio in Uttarakhand",
      "Prevent early child marriage by tying ₹51,000 grant to completing Class 12 before turning 18",
      "Finance girl students college admissions, engineering, medical, or nursing fees"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "maxIncome": 72000,
      "stateResidence": "Uttarakhand",
      "notes": "Bonafide resident of Uttarakhand with annual family income not exceeding ₹72,000. Capped at maximum two daughters per household."
    },
    "eligibilityHighlights": [
      "Bonafide permanent resident of Uttarakhand",
      "Annual family income does not exceed ₹72,000",
      "For Class 12 grant: girl must pass from a recognized school in Uttarakhand and remain unmarried"
    ],
    "exclusions": [
      "Families with annual income exceeding ₹72,000",
      "More than two daughters per family"
    ],
    "requiredDocuments": [
      {
        "id": "doc-uk-ng-birth",
        "name": "Birth Certificate of Girl Child (for Birth Stage)",
        "category": "identity",
        "purpose": "Verification of birth and parentage",
        "citizenTip": "Institutional delivery certificate signed by hospital authority.",
        "isMandatory": false
      },
      {
        "id": "doc-uk-ng-marks",
        "name": "Class 12 Marksheet & Admit Card (for Class 12 Stage)",
        "category": "academic",
        "purpose": "Proof of clearing Class 12 board examination",
        "citizenTip": "UK Board, CBSE, or ICSE marksheet from Uttarakhand school.",
        "isMandatory": true
      },
      {
        "id": "doc-uk-ng-income",
        "name": "Income Certificate (Family income < ₹72,000)",
        "category": "income",
        "purpose": "Income threshold validation",
        "citizenTip": "Issued by competent Tehsildar.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on Nanda Gaura Portal",
        "description": "Submit application online on nandagaura.uk.gov.in along with academic and family certificates.",
        "portalOrOffice": "nandagaura.uk.gov.in / Anganwadi"
      },
      {
        "stepNumber": 2,
        "title": "Verification by Child Development Project Officer (CDPO)",
        "description": "Local CDPO verifies school records, age credentials, and family domicile details.",
        "portalOrOffice": "Block CDPO Office"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit of ₹51,000",
        "description": "Sanction order is issued and ₹51,000 is credited directly into the girl student bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Women Empowerment & Child Development, Uttarakhand",
      "url": "https://nandagaura.uk.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Women Empowerment & Child Development",
      "helpline": "1098 / 0135-2715017",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Uttarakhand state portal for Nanda Gaura Yojana."
    }
  },
  {
    "id": "uk-saur-swarojgar-yojana",
    "name": "Mukhyamantri Saur Swarojgar Yojana (Uttarakhand Solar Self-Employment)",
    "hindiName": "मुख्यमंत्री सौर स्वरोजगार योजना (उत्तराखण्ड)",
    "teluguName": "ముఖ్యమంత్రి సౌర స్వయం ఉపాధి పథకం",
    "tamilName": "முதலமைச்சர் சௌர் சுயாட்சி திட்டம் (உத்தராகண்ட்)",
    "tagline": "Establish 20-25 kW grid-connected solar power plant with 70% bank loan, 15-25% state subsidy, and guaranteed power purchase.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Uttarakhand)",
    "stateApplicability": "Uttarakhand",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UK",
    "administeringGovernment": "Government of Uttarakhand",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "Returnee Migrants",
      "Unemployed Hill Youths",
      "Small Landholders with Unproductive Hill Slopes"
    ],
    "shortSummary": "Enables rural youths and returnee migrants to install 20 to 25 kilowatt solar power plants on barren hill land with UPCL entering into 25-year guaranteed power purchase agreements (PPA).",
    "fullDescription": "The Mukhyamantri Saur Swarojgar Yojana empowers unemployed hill youth and returnee migrants in Uttarakhand to generate clean energy and earn steady monthly incomes. Beneficiaries install a 25 kW solar power unit (approx ₹10 Lakh cost) supported by a 70% bank loan from cooperative banks and 15-25% capital subsidy from MSME/UREDA. UPCL purchases all generated power at a fixed tariff under a 25-year PPA, yielding around ₹25,000-₹30,000 net monthly earnings.",
    "financialBenefit": "15% to 25% capital subsidy (up to ₹2.5 Lakh) + 25-year guaranteed solar power purchase agreement",
    "keyObjectives": [
      "Stop hill migration and provide sustainable clean green income in remote villages",
      "Productively utilize sloped, barren, and fallow Himalayan land for renewable energy",
      "Generate guaranteed monthly earnings through institutional power purchase agreements"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "stateResidence": "Uttarakhand",
      "notes": "Bonafide resident of Uttarakhand aged 18+ with ownership or long-term lease of at least 300 sq meters of unshaded land."
    },
    "eligibilityHighlights": [
      "Bonafide permanent resident of Uttarakhand",
      "Possession of minimum 300 to 350 sq meters of shadow-free land near electrical grid",
      "Priority given to returnee migrants and unemployed youth"
    ],
    "exclusions": [
      "Prior loan defaulters with commercial or cooperative financial institutions"
    ],
    "requiredDocuments": [
      {
        "id": "doc-uk-mss-land",
        "name": "Land Revenue Record (Khatauni / Registered Lease Deed)",
        "category": "land",
        "purpose": "Verify ownership of shadow-free terrain for solar array",
        "citizenTip": "Check revenue records with local Patwari.",
        "isMandatory": true
      },
      {
        "id": "doc-uk-mss-domicile",
        "name": "Uttarakhand Bonafide Domicile Certificate",
        "category": "identity",
        "purpose": "Proof of state residency",
        "citizenTip": "Digital certificate issued via eServices UK.",
        "isMandatory": true
      },
      {
        "id": "doc-uk-mss-grid",
        "name": "Grid Feasibility Report from UPCL",
        "category": "other",
        "purpose": "Technical feasibility of feeding power into local 11 kV line",
        "citizenTip": "Issued by local UPCL Junior Engineer.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on UREDA Portal",
        "description": "Submit application along with land documents on ureda.uk.gov.in / msme.uk.gov.in.",
        "portalOrOffice": "ureda.uk.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Technical Feasibility & Bank Loan Sanction",
        "description": "UPCL verifies grid feasibility and partner cooperative/commercial bank sanctions 70% project loan.",
        "portalOrOffice": "District UREDA / Bank"
      },
      {
        "stepNumber": 3,
        "title": "Installation & 25-Year PPA Execution",
        "description": "UREDA installs solar array; UPCL signs 25-year Power Purchase Agreement and starts monthly power purchase payments.",
        "portalOrOffice": "UPCL / UREDA"
      }
    ],
    "officialSource": {
      "name": "Uttarakhand Renewable Energy Development Agency (UREDA)",
      "url": "https://ureda.uk.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Energy and Renewable Energy, Uttarakhand",
      "helpline": "0135-2521553",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official renewable energy and solar self-employment agency of Uttarakhand."
    }
  },
  {
    "id": "uk-anchal-amrit-yojana",
    "name": "Mukhyamantri Anchal Amrit Yojana (Uttarakhand Fortified Milk for Children)",
    "hindiName": "मुख्यमंत्री आंचल अमृत योजना (उत्तराखण्ड पौष्टिक दुग्ध)",
    "teluguName": "ముఖ్యమంత్రి ఆంచల్ అమృత్ పథకం",
    "tamilName": "முதலமைச்சர் ஆஞ்சல் அம்ருத் திட்டம் (உத்தராகண்ட்)",
    "tagline": "Free fortified, sweetened skimmed milk (100ml twice a week) for 2.5+ Lakh children aged 3 to 6 years at 20,000+ Anganwadi centers.",
    "category": "children-nutrition",
    "categoryLabel": "Children & Family Welfare",
    "geographicScope": "State Scheme (Uttarakhand)",
    "stateApplicability": "Uttarakhand",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UK",
    "administeringGovernment": "Government of Uttarakhand",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "childhood",
    "beneficiaries": [
      "Children aged 3-6 years enrolled in Anganwadi Centers",
      "Malnourished Children in Hill Districts"
    ],
    "shortSummary": "Addresses child malnutrition, stunting, and anemia in remote mountainous terrain by providing 100ml hot, flavored, fortified milk twice weekly to all children enrolled in Anganwadis.",
    "fullDescription": "Under the Mukhyamantri Anchal Amrit Yojana, the Government of Uttarakhand partners with the Uttarakhand Cooperative Dairy Federation (Aanchal) to supply fortified skimmed milk powder with Vitamins A and D to all 20,000 Anganwadi centers. Over 2.5 Lakh preschool children receive 100ml of freshly prepared, sweetened fortified milk twice a week, fighting micronutrient malnutrition across the state.",
    "financialBenefit": "100% free fortified nutritious milk provided twice every week to all Anganwadi children",
    "keyObjectives": [
      "Eliminate protein and micronutrient deficiency among preschool children in remote hill hamlets",
      "Increase preschool attendance and active participation in Anganwadi development activities",
      "Support local dairy farmers through organized milk powder procurement via Aanchal Dairy Federation"
    ],
    "eligibilityRules": {
      "minAge": 3,
      "maxAge": 6,
      "stateResidence": "Uttarakhand",
      "notes": "All children aged 3 to 6 years enrolled in registered Anganwadi centers across Uttarakhand."
    },
    "eligibilityHighlights": [
      "Child aged between 3 and 6 years",
      "Enrolled in any recognized government Anganwadi center in Uttarakhand",
      "Universal coverage with zero income, caste, or background barriers"
    ],
    "exclusions": [
      "Children above 6 years of age (covered under Mid-Day Meal school programs)"
    ],
    "requiredDocuments": [
      {
        "id": "doc-uk-aaa-reg",
        "name": "Anganwadi Enrollment Record / Poshan Tracker Entry",
        "category": "other",
        "purpose": "Verification of child active enrollment at local Anganwadi center",
        "citizenTip": "Managed directly by Anganwadi Worker (AWW) in your village.",
        "isMandatory": true
      },
      {
        "id": "doc-uk-aaa-aadhaar",
        "name": "Aadhaar Card of Child or Parent (Poshan Tracker Verified)",
        "category": "identity",
        "purpose": "Identity verification on national Poshan Tracker app",
        "citizenTip": "Can be linked with mother Aadhaar if child has no Aadhaar yet.",
        "isMandatory": false
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Enroll Child at Village Anganwadi Center",
        "description": "Parents register the child (aged 3-6 years) with the local village Anganwadi Worker.",
        "portalOrOffice": "Village Anganwadi Center"
      },
      {
        "stepNumber": 2,
        "title": "Registration on Poshan Tracker App",
        "description": "Anganwadi worker logs the child details into the government Poshan Tracker portal.",
        "portalOrOffice": "Poshan Tracker"
      },
      {
        "stepNumber": 3,
        "title": "Twice-Weekly Milk Distribution",
        "description": "Child receives 100ml hot, flavored, fortified milk on scheduled distribution days.",
        "portalOrOffice": "Anganwadi Center"
      }
    ],
    "officialSource": {
      "name": "Department of Women Empowerment and Child Development, Uttarakhand",
      "url": "https://wecd.uk.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Women Empowerment and Child Development",
      "helpline": "1800-180-4104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Child nutritional supplementation scheme operated through 20,000+ Anganwadis."
    }
  },
  {
    "id": "uk-teerth-darshan-yojana",
    "name": "Deendayal Matru-Pitri Teerth Yatra (Uttarakhand Senior Citizen Free Pilgrimage)",
    "hindiName": "दीनदयाल मातृ-पितृ तीर्थ यात्रा योजना (उत्तराखण्ड)",
    "teluguName": "దీన్‌దయాళ్ మాతృ-పితృ తీర్థ యాత్ర పథకం",
    "tamilName": "தீனதயாள் மாத்ரு-பித்ரு தீர்த்த யாத்திரை திட்டம்",
    "tagline": "100% free pilgrimage travel, accommodation, and food to Badrinath, Gangotri, and holy shrines for senior citizens aged 60+.",
    "category": "seniors-elderly",
    "categoryLabel": "Pensions & Social Security",
    "geographicScope": "State Scheme (Uttarakhand)",
    "stateApplicability": "Uttarakhand",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "UK",
    "administeringGovernment": "Government of Uttarakhand",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "senior",
    "beneficiaries": [
      "Senior Citizens aged 60 and above",
      "Senior Couples",
      "BPL & Low-Income Elders"
    ],
    "shortSummary": "All-expenses-paid holy pilgrimage to Char Dham and major state shrines (Badrinath, Kedarnath, Gangotri, Yamunotri, Hemkund Sahib, Jageshwar Dham) for senior citizens of Uttarakhand.",
    "fullDescription": "The Deendayal Matru-Pitri Teerth Yatra Yojana enables elderly residents to undertake sacred pilgrimages without bearing travel or lodging costs. The Tourism and Endowments Department organizes escorted luxury coach tours, medical attendants, comfortable stay at GMVN/KMVN tourist bungalows, vegetarian meals, and guided shrine darshans completely free of cost for senior citizens aged 60+ (and companion for seniors aged 65+).",
    "financialBenefit": "100% free travel, accommodation, meals, insurance, and medical escort for pilgrimage",
    "keyObjectives": [
      "Enable elderly citizens from poor and rural families to fulfill lifelong sacred pilgrimage wishes",
      "Provide dignified, medically escorted travel across difficult mountain pilgrimage routes",
      "Promote inclusive domestic cultural tourism for senior citizens"
    ],
    "eligibilityRules": {
      "minAge": 60,
      "stateResidence": "Uttarakhand",
      "notes": "Bonafide resident of Uttarakhand aged 60 years or above, medically fit to travel in high-altitude terrain, and not an income tax payee."
    },
    "eligibilityHighlights": [
      "Permanent resident of Uttarakhand aged 60 years or above",
      "Possesses medical fitness certificate from a registered government medical officer",
      "Income tax non-payee category"
    ],
    "exclusions": [
      "Senior citizens who have already availed the subsidized pilgrimage benefit within the past 3 years",
      "Income tax payers"
    ],
    "requiredDocuments": [
      {
        "id": "doc-uk-mpy-medical",
        "name": "Medical Fitness Certificate (High Altitude Travel)",
        "category": "medical",
        "purpose": "Verify physical fitness for hill travel and altitude endurance",
        "citizenTip": "Obtain from Primary Health Centre (PHC) or Community Health Centre (CHC) doctor.",
        "isMandatory": true
      },
      {
        "id": "doc-uk-mpy-age",
        "name": "Age Proof (Aadhaar Card / Voter ID / Pension Card)",
        "category": "identity",
        "purpose": "Verify age 60+ status and Uttarakhand residency",
        "citizenTip": "Must clearly show full date of birth.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application to District Tourism Officer",
        "description": "Submit filled application form along with medical certificate to the District Tourism Development Office.",
        "portalOrOffice": "District Tourism Development Office / uttarakhandtourism.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Batch Selection and Itinerary Allotment",
        "description": "Tourism department verifies applications and notifies candidate of travel date and boarding pickup point.",
        "portalOrOffice": "District Tourism Office"
      },
      {
        "stepNumber": 3,
        "title": "Escorted Free Pilgrimage Journey",
        "description": "Board designated GMVN luxury coach with dedicated medical team and tour guide for all-expenses-paid tour.",
        "portalOrOffice": "GMVN / KMVN Tour Departure Point"
      }
    ],
    "officialSource": {
      "name": "Uttarakhand Tourism Development Board (UTDB)",
      "url": "https://uttarakhandtourism.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Tourism, Government of Uttarakhand",
      "helpline": "0135-2559898 / 1364",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official pilgrimage scheme managed by Uttarakhand Tourism Development Board."
    }
  }
];
