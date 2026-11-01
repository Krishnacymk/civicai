import type { Scheme } from "../../types/scheme";

export const NORTHEAST_STATES_SCHEMES: Scheme[] = [
  {
    "id": "ar-dulari-kanya-scheme",
    "name": "Dulari Kanya Scheme (Arunachal Pradesh Girl Child Fixed Deposit Incentive)",
    "hindiName": "दुलारी कन्या योजना (अरुणाचल प्रदेश बालिका सावधि जमा प्रोत्साहन)",
    "teluguName": "దులారి కన్య పథకం (అరుణాచల్ ప్రదేశ్)",
    "tamilName": "துலாரி கன்யா திட்டம் (அருணாச்சலப் பிரதேசம்)",
    "tagline": "Fixed deposit of ₹20,000 invested at birth in the name of the girl child delivered in a government hospital.",
    "category": "education",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Arunachal Pradesh)",
    "stateApplicability": "Arunachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AR",
    "administeringGovernment": "Government of Arunachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "childhood",
    "beneficiaries": [
      "Newborn Girl Children",
      "Institutional Delivery Mothers in Arunachal",
      "Indigenous Tribal Families"
    ],
    "shortSummary": "Financial asset creation providing a ₹20,000 fixed deposit bond from the state government for girl babies born in government hospitals, maturing with compound interest when she turns 18 and clears Class 10.",
    "fullDescription": "The Dulari Kanya Scheme addresses high infant mortality and low institutional deliveries in Arunachal Pradesh. To encourage safe deliveries in Primary Health Centres and district hospitals, the Department of Health & Family Welfare deposits ₹20,000 in SBI fixed deposits in the name of every baby girl born in an institutional health facility. The deposit matures when she attains 18 years and passes Class 10.",
    "financialBenefit": "₹20,000 fixed deposit at birth + compound interest (matures to ~₹50,000 at age 18)",
    "keyObjectives": [
      "Incentivize 100% institutional deliveries in government health centers across hilly terrain",
      "Improve child sex ratio and eradicate gender preference in tribal communities",
      "Provide financial assets directly to the girl child for higher education"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Arunachal Pradesh",
      "notes": "Baby girl born to parents holding Arunachal Pradesh Scheduled Tribe (APST) certificate or permanent resident certificate, delivered in a government hospital."
    },
    "eligibilityHighlights": [
      "Parents must be permanent residents / APST certificate holders of Arunachal Pradesh",
      "Delivery must take place in an empanelled government hospital or PHC",
      "Registration must be done within 1 year of child birth"
    ],
    "exclusions": [
      "Home deliveries or deliveries in non-recognized private nursing homes"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ar-dk-delivery",
        "name": "Institutional Delivery Discharge Certificate",
        "category": "medical",
        "purpose": "Proof of birth in a government hospital",
        "citizenTip": "Signed by Medical Officer in charge of PHC / District Hospital.",
        "isMandatory": true
      },
      {
        "id": "doc-ar-dk-apst",
        "name": "APST Certificate / PRC of Parents",
        "category": "caste",
        "purpose": "Proof of Arunachal Pradesh domicile/tribal status",
        "citizenTip": "Issued by Deputy Commissioner.",
        "isMandatory": true
      },
      {
        "id": "doc-ar-dk-birth",
        "name": "Birth Certificate of the Child",
        "category": "identity",
        "purpose": "Legal registration of birth",
        "citizenTip": "Issued by Registrar of Births & Deaths.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Obtain Delivery Slip from Government Hospital",
        "description": "Collect Dulari Kanya recommendation certificate upon delivery at government hospital.",
        "portalOrOffice": "Government Hospital / PHC"
      },
      {
        "stepNumber": 2,
        "title": "Submit Application to District Medical Officer (DMO)",
        "description": "Submit form along with APST/PRC and birth certificate to District Medical Officer office.",
        "portalOrOffice": "DMO Office"
      },
      {
        "stepNumber": 3,
        "title": "Fixed Deposit Certificate Issuance",
        "description": "State Health Department deposits ₹20,000 in SBI and hands over fixed deposit certificate to parents.",
        "portalOrOffice": "SBI Branch / DMO Office"
      }
    ],
    "officialSource": {
      "name": "Department of Health & Family Welfare, Government of Arunachal Pradesh",
      "url": "https://arunachalpradesh.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department",
      "helpline": "0360-2212370",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official girl child institutional delivery scheme of Arunachal Pradesh."
    }
  },
  {
    "id": "ar-cmaay-health-assurance",
    "name": "Chief Minister Arogya Arunachal Yojana (CMAAY Universal Cashless Health Cover)",
    "hindiName": "मुख्यमंत्री आरोग्य अरुणाचल योजना (कैशलेस स्वास्थ्य सुरक्षा)",
    "teluguName": "ముఖ్యమంత్రి ఆరోగ్య అరుణాచల్ పథకం",
    "tamilName": "முதலமைச்சர் ஆரோக்ய அருணாச்சல் திட்டம்",
    "tagline": "Cashless secondary and tertiary hospitalization coverage of ₹5 Lakh per family per year for all residents.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Arunachal Pradesh)",
    "stateApplicability": "Arunachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AR",
    "administeringGovernment": "Government of Arunachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "APST Tribal Families",
      "Permanent Resident Certificate (PRC) Holders",
      "State Government Employees and Dependents"
    ],
    "shortSummary": "Universal cashless health coverage providing ₹5 Lakh per family annually across 1,000+ medical and surgical packages in government and empaneled private hospitals in Arunachal, Assam, and national metros.",
    "fullDescription": "CMAAY covers indigenous tribal populations and resident families across Arunachal Pradesh against catastrophic medical expenses. It provides ₹5,00,000 cashless cover per family annually, running on the Ayushman Bharat IT platform. Patients enjoy seamless cashless access at TRIHMS Naharlagun and premier referral hospitals in Guwahati, Dibrugarh, Kolkata, and New Delhi.",
    "financialBenefit": "₹5,00,000 / family / year cashless hospitalization coverage",
    "keyObjectives": [
      "Eliminate catastrophic out-of-pocket health spending for remote Himalayan communities",
      "Provide cashless secondary and tertiary referral care across Northeast and national hospitals",
      "Ensure zero co-payment for major surgeries, cancer therapy, and ICU admissions"
    ],
    "eligibilityRules": {
      "stateResidence": "Arunachal Pradesh",
      "notes": "All indigenous APST families and non-APST permanent residents holding valid PRC in Arunachal Pradesh."
    },
    "eligibilityHighlights": [
      "Arunachal Pradesh Scheduled Tribe (APST) certificate holder, or",
      "Permanent Resident Certificate (PRC) holder issued by Deputy Commissioner",
      "Universal family coverage with no income cap"
    ],
    "exclusions": [
      "Temporary migrant visitors without permanent resident status"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ar-cma-apst",
        "name": "APST Certificate / Permanent Resident Certificate (PRC)",
        "category": "caste",
        "purpose": "Verify indigenous tribal status or domicile",
        "citizenTip": "Check PRC certificate issued by Deputy Commissioner.",
        "isMandatory": true
      },
      {
        "id": "doc-ar-cma-aadhaar",
        "name": "Aadhaar Card of Family Members",
        "category": "identity",
        "purpose": "Biometric identity during e-KYC",
        "citizenTip": "Aadhaar is mandatory for generating CMAAY e-card.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register Online on CMAAY Portal or at Kiosk",
        "description": "Submit family details and APST/PRC on cmaay.com or at district hospital kiosk.",
        "portalOrOffice": "cmaay.com / District Hospital"
      },
      {
        "stepNumber": 2,
        "title": "Verification and CMAAY Card Issuance",
        "description": "Chief Medical Officer approves registration and digital CMAAY card is generated.",
        "portalOrOffice": "District Medical Desk"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Admission & Treatment",
        "description": "Show CMAAY card at Arogya Mitra counter in empaneled hospital for cashless treatment up to ₹5 Lakh.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "Chief Minister Arogya Arunachal Society (CMAAS)",
      "url": "https://cmaay.com",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department",
      "helpline": "1800-233-5555 / 104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official portal for Chief Minister Arogya Arunachal Yojana."
    }
  },
  {
    "id": "ar-atmanirbhar-krishi-yojana",
    "name": "Atmanirbhar Krishi Yojana (Arunachal Pradesh Farm Mechanization & Input Subsidy)",
    "hindiName": "आत्मनिर्भर कृषि योजना (अरुणाचल प्रदेश कृषि यंत्रीकरण एवं सब्सिडी)",
    "teluguName": "ఆత్మనిర్భర్ కృషి పథకం (అరుణాచల్ ప్రదేశ్)",
    "tamilName": "ஆத்மநிர்பர் கிருஷி திட்டம் (அருணாச்சலப் பிரதேசம்)",
    "tagline": "Credit-linked farm assistance: 45% government subsidy + 45% bank loan + 10% farmer contribution for tractors and farm machinery.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Arunachal Pradesh)",
    "stateApplicability": "Arunachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AR",
    "administeringGovernment": "Government of Arunachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Individual Tribal Farmers",
      "Self-Help Groups (SHGs)",
      "Farmer Producer Organizations (FPOs)"
    ],
    "shortSummary": "Front-ended subsidy scheme enabling farmers and SHGs to acquire power tillers, tractors, mini-rice mills, and farm equipment with 45% state subsidy and 45% bank credit, requiring only 10% farmer cash margin.",
    "fullDescription": "The Atmanirbhar Krishi Yojana modernizes agriculture across the eastern Himalayas. Farmers, SHGs, and FPOs receive 45% capital subsidy directly from the state government, combined with a 45% collateral-free bank loan from partner commercial and regional rural banks (Arunachal Pradesh Rural Bank / Apex Bank), requiring only 10% farmer margin money to acquire modern mechanized machinery.",
    "financialBenefit": "45% direct capital subsidy (up to ₹4.5 Lakh) + 45% subsidized bank loan",
    "keyObjectives": [
      "Accelerate agricultural mechanization in difficult hilly terraced terrains",
      "Double farmer incomes and transition traditional Jhum cultivation to sedentary commercial agriculture",
      "Provide easy bank credit linkages with zero bureaucratic delays"
    ],
    "eligibilityRules": {
      "occupations": [
        "Farmer",
        "Cultivator",
        "SHG Member",
        "FPO Member"
      ],
      "stateResidence": "Arunachal Pradesh",
      "notes": "Resident farmer of Arunachal Pradesh holding cultivable land certificate or Land Possession Certificate (LPC)."
    },
    "eligibilityHighlights": [
      "Permanent resident / APST farmer in Arunachal Pradesh",
      "Holding valid Land Possession Certificate (LPC) or certificate from Gaon Burah",
      "Bank account in good standing with partner bank"
    ],
    "exclusions": [
      "Defaulters on prior commercial or agricultural bank loans"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ar-aky-lpc",
        "name": "Land Possession Certificate (LPC)",
        "category": "land",
        "purpose": "Verify agricultural landholding and rights",
        "citizenTip": "Issued by Deputy Commissioner / Circle Officer.",
        "isMandatory": true
      },
      {
        "id": "doc-ar-aky-apst",
        "name": "APST / Domicile Certificate",
        "category": "caste",
        "purpose": "Proof of Arunachal Pradesh resident status",
        "citizenTip": "Issued by district administration.",
        "isMandatory": true
      },
      {
        "id": "doc-ar-aky-quotation",
        "name": "Machinery Quotation from Registered Dealer",
        "category": "other",
        "purpose": "Cost estimation for subsidy and loan calculation",
        "citizenTip": "Dealer must be registered with Department of Agriculture.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on ANKY Portal",
        "description": "Submit application along with LPC and quotation on anky.arunachal.gov.in.",
        "portalOrOffice": "anky.arunachal.gov.in / District ADO Office"
      },
      {
        "stepNumber": 2,
        "title": "District Level Committee (DLC) Approval",
        "description": "Committee headed by Deputy Commissioner reviews project and forwards sanction to bank.",
        "portalOrOffice": "Deputy Commissioner Office"
      },
      {
        "stepNumber": 3,
        "title": "Machinery Delivery and Subsidy Release",
        "description": "Farmer deposits 10% share, bank releases loan, state credits 45% subsidy, and machinery is delivered.",
        "portalOrOffice": "Bank Branch / Dealer"
      }
    ],
    "officialSource": {
      "name": "Department of Agriculture, Government of Arunachal Pradesh",
      "url": "https://anky.arunachal.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Agriculture",
      "helpline": "0360-2212359",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official portal for Atmanirbhar Krishi Yojana Arunachal Pradesh."
    }
  },
  {
    "id": "ar-atmanirbhar-bagwani-yojana",
    "name": "Atmanirbhar Bagwani Yojana (Arunachal Pradesh High-Value Horticulture Subsidy)",
    "hindiName": "आत्मनिर्भर बागवानी योजना (अरुणाचल प्रदेश उच्च मूल्य बागवानी संवर्धन)",
    "teluguName": "ఆత్మనిర్భర్ బగ్వానీ పథకం (అరుణాచల్ ప్రదేశ్)",
    "tamilName": "ஆத்மநிர்பர் பக்வானி திட்டம் (அருணாச்சலப் பிரதேசம்)",
    "tagline": "Credit-linked 45% government subsidy + 45% bank loan for kiwi, apple, walnut, and orange orchards.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Arunachal Pradesh)",
    "stateApplicability": "Arunachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AR",
    "administeringGovernment": "Government of Arunachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Kiwi, Apple & Citrus Growers",
      "Tribal Orchard Cultivators",
      "Horticulture SHGs and FPOs"
    ],
    "shortSummary": "High-impact horticulture mission offering 45% state subsidy and 45% bank loans to develop commercial fruit orchards (organic kiwi in Ziro, temperate apples in Dirang, mandarin oranges, and walnuts) across Arunachal.",
    "fullDescription": "Arunachal Pradesh unique microclimates make it ideal for high-value temperate and subtropical horticulture. The Atmanirbhar Bagwani Yojana subsidizes high-density planting of organic kiwis, apples, oranges, pineapples, and large cardamom. The scheme provides 45% state subsidy, 45% bank loan, and requires only 10% farmer margin to finance certified rootstocks, micro-drip irrigation, and trellising systems.",
    "financialBenefit": "45% direct capital subsidy + 45% institutional bank loan (up to ₹5 Lakh subsidy per hectare)",
    "keyObjectives": [
      "Establish Arunachal Pradesh as India organic kiwi and temperate fruit hub",
      "Create high-earning horticultural assets generating ₹3-5 Lakh annual revenue per hectare",
      "Support GI-tagged Arunachal Kiwi and Wakro Orange cultivation"
    ],
    "eligibilityRules": {
      "occupations": [
        "Horticulturist",
        "Farmer",
        "SHG Member"
      ],
      "stateResidence": "Arunachal Pradesh",
      "notes": "Resident farmer possessing at least 1 hectare of suitable hillside land with valid Land Possession Certificate (LPC)."
    },
    "eligibilityHighlights": [
      "Permanent resident / APST farmer in Arunachal Pradesh",
      "Minimum 1 hectare of land suitable for notified fruit crop cultivation",
      "Valid LPC issued by district administration"
    ],
    "exclusions": [
      "Commercial real estate land or non-agricultural holdings"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ar-aby-lpc",
        "name": "Land Possession Certificate (LPC)",
        "category": "land",
        "purpose": "Verify orchard land rights and area",
        "citizenTip": "Issued by Circle Officer / DC.",
        "isMandatory": true
      },
      {
        "id": "doc-ar-aby-soil",
        "name": "Soil Feasibility & Crop Suitability Certificate",
        "category": "other",
        "purpose": "Technical suitability report for kiwi/apple/citrus",
        "citizenTip": "Issued by District Horticulture Officer (DHO).",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on ANBY Portal",
        "description": "Submit horticulture orchard proposal on anby.arunachal.gov.in.",
        "portalOrOffice": "anby.arunachal.gov.in / DHO Office"
      },
      {
        "stepNumber": 2,
        "title": "District Committee Evaluation & Bank Sanction",
        "description": "District Horticulture Officer verifies land and District Level Committee forwards project to bank.",
        "portalOrOffice": "DHO Office"
      },
      {
        "stepNumber": 3,
        "title": "Sapling Planting & Subsidy Credit",
        "description": "Rootstocks are procured, planting is verified, and 45% subsidy is credited to loan account.",
        "portalOrOffice": "Bank / Horticulture Orchard"
      }
    ],
    "officialSource": {
      "name": "Department of Horticulture, Government of Arunachal Pradesh",
      "url": "https://anby.arunachal.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Horticulture",
      "helpline": "0360-2212359",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official horticulture mission portal of Arunachal Pradesh."
    }
  },
  {
    "id": "ar-deendayal-upadhyaya-swavalamban",
    "name": "Deen Dayal Upadhyaya Swavalamban Yojana (Arunachal Youth Enterprise Capital Subsidy)",
    "hindiName": "दीनदयाल उपाध्याय स्वावलंबन योजना (अरुणाचल युवा स्वरोजगार पूंजी सब्सिडी)",
    "teluguName": "దీన్‌దయాళ్ ఉపాధ్యాయ స్వావలంబన్ పథకం",
    "tamilName": "தீனதயாள் உபாத்யாய ஸ்வாவலம்பன் திட்டம்",
    "tagline": "Front-ended capital investment subsidy of 40% on bank loans up to ₹50 Lakh for youth startups and micro-enterprises.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Arunachal Pradesh)",
    "stateApplicability": "Arunachal Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AR",
    "administeringGovernment": "Government of Arunachal Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "Unemployed Educated Youths",
      "Women Entrepreneurs",
      "Eco-Tourism & Agro-Processing Startups"
    ],
    "shortSummary": "Flagship entrepreneurship program providing 40% front-ended state capital subsidy (up to ₹20 Lakh) on bank loans between ₹10 Lakh and ₹50 Lakh to establish eco-tourism, agro-processing, handloom, and service units.",
    "fullDescription": "To foster local job creators and encourage private enterprise in the frontier state, Deen Dayal Upadhyaya Swavalamban Yojana (DDUSY) subsidizes bank loans for youths aged 18 to 40. The state government provides a 40% front-ended capital subsidy (50% for women entrepreneurs) on project costs up to ₹50 Lakh for ventures in eco-tourism homestays, traditional handlooms, food processing, cold storage, and adventure tourism.",
    "financialBenefit": "40% to 50% front-ended capital subsidy (up to ₹25 Lakh) on bank loans up to ₹50 Lakh",
    "keyObjectives": [
      "Foster indigenous private enterprise and local job creation across Arunachal Pradesh",
      "Promote eco-tourism homestays and adventure tourism in Tawang, Ziro, Mechuka, and Pasighat",
      "Provide higher affirmative subsidies to female entrepreneurs"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 40,
      "stateResidence": "Arunachal Pradesh",
      "notes": "Unemployed resident of Arunachal Pradesh aged 18 to 40 with valid APST or PRC, holding minimum educational qualification of Class 10 pass."
    },
    "eligibilityHighlights": [
      "Permanent resident / APST youth aged 18 to 40 years",
      "Minimum educational qualification Class 10 pass",
      "Project cost between ₹10 Lakh and ₹50 Lakh in notified sunrise sectors"
    ],
    "exclusions": [
      "Individuals with default records on previous commercial bank loans"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ar-ddu-dpr",
        "name": "Detailed Project Report (DPR)",
        "category": "other",
        "purpose": "Technical and financial viability appraisal of proposed business",
        "citizenTip": "Can be prepared with assistance from District Industries Centre (DIC).",
        "isMandatory": true
      },
      {
        "id": "doc-ar-ddu-apst",
        "name": "APST / PRC Certificate & Class 10 Marksheet",
        "category": "identity",
        "purpose": "Proof of domicile and age/educational qualification",
        "citizenTip": "Digital certificate issued by Deputy Commissioner.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on Arunachal DDUSY Portal",
        "description": "Submit online form along with DPR on ddusy.arunachal.gov.in.",
        "portalOrOffice": "ddusy.arunachal.gov.in / District DIC"
      },
      {
        "stepNumber": 2,
        "title": "District Level Committee (DLC) Interview",
        "description": "Appear before the DLC headed by Deputy Commissioner for project defense and approval.",
        "portalOrOffice": "Deputy Commissioner Office"
      },
      {
        "stepNumber": 3,
        "title": "Bank Loan Sanction & Front-Ended Subsidy Credit",
        "description": "Partner bank sanctions project loan; state government deposits 40% capital subsidy into loan account.",
        "portalOrOffice": "Commercial Bank"
      }
    ],
    "officialSource": {
      "name": "Department of Planning and Investment, Government of Arunachal Pradesh",
      "url": "https://ddusy.arunachal.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Planning and Investment",
      "helpline": "0360-2212359",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official entrepreneurship portal of Arunachal Pradesh."
    }
  },
  {
    "id": "as-orunodoi-scheme",
    "name": "Orunodoi 3.0 Scheme (Assam Direct Monthly Women Financial Assistance)",
    "hindiName": "अरुणोदय ३.० योजना (असम महिला मासिक प्रत्यक्ष वित्तीय सहायता)",
    "teluguName": "ఒరునోడోయి 3.0 పథకం (అసోం)",
    "tamilName": "ஒருனோடோய் 3.0 திட்டம் (அஸ்ஸாம்)",
    "tagline": "Direct monthly financial assistance of ₹1,250 (₹15,000/year) into the bank accounts of 30+ Lakh poor women.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Assam)",
    "stateApplicability": "Assam",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AS",
    "administeringGovernment": "Government of Assam",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Women Heads of Poor Households",
      "Widows and Divorced Women",
      "Families with Divyang Members",
      "Tea Garden Worker Families"
    ],
    "shortSummary": "Assam biggest direct benefit transfer scheme crediting ₹1,250 on the 10th of every month into the bank account of the nominated female head of impoverished households to procure medicines, pulses, and nutritional food.",
    "fullDescription": "Orunodoi 3.0 provides financial dignity to over 30 Lakh vulnerable families across the Brahmaputra and Barak valleys. Transferring ₹1,250 per month via Aadhaar DBT directly into the bank account of the primary female caretaker, the assistance helps poor households meet essential medical costs (₹400), purchase 4 kg pulses (₹200), sugar (₹80), essential fruits (₹150), and cooking gas/electricity expenses.",
    "financialBenefit": "₹1,250 / month (₹15,000 annually) transferred directly via DBT",
    "keyObjectives": [
      "Provide guaranteed monthly financial support to female caretakers in vulnerable households",
      "Enhance nutrition, medicine access, and healthcare-seeking behaviors among poor families",
      "Empower women by legally making them the direct recipient of family welfare cash transfers"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "targetGender": "female",
      "maxIncome": 200000,
      "stateResidence": "Assam",
      "notes": "Female resident of Assam with annual family income not exceeding ₹2,00,000, holding an Assam NFSA ration card."
    },
    "eligibilityHighlights": [
      "Permanent resident of Assam",
      "Annual household income from all sources does not exceed ₹2,00,000",
      "Beneficiary must be a female member nominated by the household",
      "Priority given to widows, unmarried adult women, divorcees, and households with disabled members"
    ],
    "exclusions": [
      "Families owning four-wheelers, mechanized boats, or more than 15 bighas of agricultural land",
      "Serving and retired government employees and doctors/engineers/lawyers"
    ],
    "requiredDocuments": [
      {
        "id": "doc-as-oru-ration",
        "name": "Assam NFSA Digital Ration Card",
        "category": "income",
        "purpose": "Family identification and income verification",
        "citizenTip": "Check details on fcsca.assam.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-as-oru-aadhaar",
        "name": "Aadhaar Card of Female Beneficiary",
        "category": "identity",
        "purpose": "Biometric identity and DBT routing",
        "citizenTip": "Aadhaar must be linked to active bank account.",
        "isMandatory": true
      },
      {
        "id": "doc-as-oru-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer payment destination",
        "citizenTip": "Must be an individual account in the woman own single name.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Nomination by Village Gaonburah / Gaon Panchayat",
        "description": "VLEW and Gaon Panchayat identify eligible households and collect pre-printed Orunodoi forms.",
        "portalOrOffice": "Gaon Panchayat Office / Ward Office"
      },
      {
        "stepNumber": 2,
        "title": "District Level Verification & Approval",
        "description": "District Level Monitoring Committee (DLMC) headed by District Commissioner verifies records.",
        "portalOrOffice": "District Commissioner Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Disbursement on 10th",
        "description": "₹1,250 is credited directly into the woman bank account on the 10th of every month.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Finance Department, Government of Assam",
      "url": "https://orunodoi.assam.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Finance Department",
      "helpline": "1800-345-3525",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Assam Orunodoi scheme portal."
    }
  },
  {
    "id": "as-pragyan-bharati-scooty",
    "name": "Pragyan Bharati Scooty Scheme (Dr. Banikanta Kakati Merit Award)",
    "hindiName": "प्रज्ञान भारती स्कूटी योजना (असम मेधावी विद्यार्थी स्कूटी पुरस्कार)",
    "teluguName": "ప్రజ్ఞాన్ భారతి స్కూటీ పథకం (అసోం)",
    "tamilName": "பிரக்யான் பாரதி ஸ்கூட்டர் திட்டம் (அஸ்ஸாம்)",
    "tagline": "Free two-wheeler scooter (petrol or electric) for meritorious Class 12 passed students (60%+ girls / 75%+ boys).",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Assam)",
    "stateApplicability": "Assam",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AS",
    "administeringGovernment": "Government of Assam",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "Class 12 Passed Meritorious Girls (60%+ marks)",
      "Class 12 Passed Meritorious Boys (75%+ marks)",
      "Rural College Students"
    ],
    "shortSummary": "Rewards over 35,000 meritorious students clearing Class 12 Higher Secondary examinations with brand-new two-wheeler scooters to facilitate safe, independent transport to colleges and universities.",
    "fullDescription": "Under the Pragyan Bharati initiative, named after eminent scholar Dr. Banikanta Kakati, the Higher Education Department awards two-wheeler scooters to meritorious students passing the AHSEC Class 12 board examinations. Girl students securing 60% or more (1st division) and boy students securing 75% or more receive a choice of a brand-new petrol scooter or an eco-friendly electric scooter, complete with registration and insurance.",
    "financialBenefit": "Brand-new two-wheeler scooter (worth ~₹80,000 - ₹95,000) + free registration and insurance",
    "keyObjectives": [
      "Incentivize academic excellence in Higher Secondary examinations across Assam",
      "Solve long-distance commute hurdles preventing rural students from attending degree colleges",
      "Promote female mobility, safety, and educational retention"
    ],
    "eligibilityRules": {
      "stateResidence": "Assam",
      "notes": "Student who passed Class 12 Higher Secondary exams from AHSEC in Assam: 60%+ for girls and 75%+ for boys."
    },
    "eligibilityHighlights": [
      "Passed Class 12 HS examination from Assam Higher Secondary Education Council (AHSEC)",
      "Minimum marks: 60% or higher for female students; 75% or higher for male students",
      "Permanent resident of Assam"
    ],
    "exclusions": [
      "Students passing from non-AHSEC boards (unless specifically notified under separate quota)"
    ],
    "requiredDocuments": [
      {
        "id": "doc-as-pbs-marks",
        "name": "AHSEC Class 12 Marksheet & Admit Card",
        "category": "academic",
        "purpose": "Verify qualifying board percentage",
        "citizenTip": "Check roll number on ahsec.assam.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-as-pbs-aadhaar",
        "name": "Aadhaar Card and Domicile Certificate",
        "category": "identity",
        "purpose": "Identity and Assam residency verification",
        "citizenTip": "Must match details on AHSEC admit card.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Choice Selection on Pragyan Bharati Portal",
        "description": "Login on sebaonline.org / dhe.assam.gov.in using AHSEC roll number and choose scooter type (petrol or EV).",
        "portalOrOffice": "dhe.assam.gov.in / sebaonline.org"
      },
      {
        "stepNumber": 2,
        "title": "College Nodal Verification",
        "description": "Higher Education Department matches merit list and allocates vehicle allotment tokens.",
        "portalOrOffice": "Directorate of Higher Education"
      },
      {
        "stepNumber": 3,
        "title": "Vehicle Handover Ceremony",
        "description": "Scooter is ceremonially handed over at district ceremonial distribution events with registration keys.",
        "portalOrOffice": "District Sports Stadium / College Venue"
      }
    ],
    "officialSource": {
      "name": "Directorate of Higher Education, Government of Assam",
      "url": "https://dhe.assam.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Higher Education Department",
      "helpline": "0361-2384862",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Pragyan Bharati scooter scheme portal of Assam."
    }
  },
  {
    "id": "as-arundhati-gold-scheme",
    "name": "Arundhati Gold Scheme (Assam Financial Marriage Grant for Brides)",
    "hindiName": "अरुंधति स्वर्ण योजना (असम वधू स्वर्ण क्रय वित्तीय अनुदान)",
    "teluguName": "అరుంధతి గోల్డ్ పథకం (అసోం)",
    "tamilName": "அருந்ததி தங்கம் திட்டம் (அஸ்ஸாம்)",
    "tagline": "Direct grant of ₹40,000 transferred to the bride bank account to purchase 1 tola (10g) of gold upon marriage registration.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Assam)",
    "stateApplicability": "Assam",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AS",
    "administeringGovernment": "Government of Assam",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "First-Time Adult Brides",
      "Daughters of Poor Families",
      "Registered Marriages under Special Marriage Act"
    ],
    "shortSummary": "One-time direct financial assistance of ₹40,000 credited to the newly married bride bank account to purchase 10 grams of traditional gold jewellery, encouraging formal marriage registration.",
    "fullDescription": "The Arundhati Gold Scheme promotes the formal legal registration of marriages and secures the economic status of young brides across Assam. When an adult woman registers her marriage under the Special Marriage Act 1954, the Revenue & Disaster Management Department transfers ₹40,000 directly into her personal bank account. Eligible brides must have studied up to at least Class 10 (exempted for Adivasi tea garden communities) and have family annual income under ₹5 Lakh.",
    "financialBenefit": "₹40,000 one-time direct bank transfer into bride bank account",
    "keyObjectives": [
      "Incentivize 100% legal registration of marriages with competent Marriage Officers",
      "Prevent child marriage by strictly requiring bride age 18+ and groom age 21+",
      "Ensure the bride directly owns a valuable financial asset (gold) upon entering marriage"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "targetGender": "female",
      "maxIncome": 500000,
      "stateResidence": "Assam",
      "notes": "Bride must be 18+ and groom 21+, resident of Assam, family annual income under ₹5 Lakh, marriage registered under Special Marriage Act 1954, bride must have passed Class 10 (exempt for tea garden workers)."
    },
    "eligibilityHighlights": [
      "Permanent resident of Assam entering first marriage",
      "Marriage legally registered under the Special Marriage Act 1954",
      "Bride must be at least 18 and groom at least 21 years of age",
      "Annual family income does not exceed ₹5,00,000",
      "Minimum educational qualification Class 10 (exempt for tea garden labor communities)"
    ],
    "exclusions": [
      "Unregistered customary marriages without legal certification",
      "Second or subsequent marriages"
    ],
    "requiredDocuments": [
      {
        "id": "doc-as-ags-marriage",
        "name": "Marriage Registration Certificate under Special Marriage Act",
        "category": "other",
        "purpose": "Legal proof of registered marriage",
        "citizenTip": "Issued by Marriage Officer (Senior Sub-Registrar).",
        "isMandatory": true
      },
      {
        "id": "doc-as-ags-education",
        "name": "Class 10 (HSLC) Admit Card or Marksheet",
        "category": "academic",
        "purpose": "Verify educational requirement and age",
        "citizenTip": "Exempt for tea tribe community applicants.",
        "isMandatory": false
      },
      {
        "id": "doc-as-ags-income",
        "name": "Income Certificate (Family income < ₹5 Lakh/year)",
        "category": "income",
        "purpose": "Income threshold validation",
        "citizenTip": "Issued by Circle Officer.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register Marriage with Sub-Registrar",
        "description": "Submit Notice of Intended Marriage and obtain marriage certificate under Special Marriage Act.",
        "portalOrOffice": "Sub-Registrar / Marriage Office"
      },
      {
        "stepNumber": 2,
        "title": "Apply Online on Arundhati Portal",
        "description": "Submit application along with marriage certificate on revenueassam.nic.in/arundhati.",
        "portalOrOffice": "revenueassam.nic.in/arundhati"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit of ₹40,000",
        "description": "Amount is credited directly into the bride single bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Revenue & Disaster Management Department, Government of Assam",
      "url": "https://revenueassam.nic.in/arundhati",
      "lastVerifiedDate": "October 2026",
      "department": "Revenue & Disaster Management Department",
      "helpline": "0361-2237054",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Assam Arundhati Gold scheme portal."
    }
  },
  {
    "id": "as-swanirbhar-naari-scheme",
    "name": "Swanirbhar Naari Scheme (Assam Indigenous Handloom Direct Procurement)",
    "hindiName": "स्वनिर्भर नारी योजना (असम स्वदेशी हथकरघा वस्त्र प्रत्यक्ष क्रय)",
    "teluguName": "స్వనిర్భర్ నారీ పథకం (అసోం)",
    "tamilName": "ஸ்வநிர்பர் நாரி திட்டம் (அஸ்ஸாம்)",
    "tagline": "Direct government procurement of traditional handloom products (Gamosa, Dokhona, Mekhela Chador) directly from female weavers.",
    "category": "artisans",
    "categoryLabel": "Artisans & Traditional Crafts",
    "geographicScope": "State Scheme (Assam)",
    "stateApplicability": "Assam",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AS",
    "administeringGovernment": "Government of Assam",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Indigenous Female Weavers",
      "Handloom Artisans in Rural Assam",
      "Bodo, Mishing, Karbi, Dimasa Weavers"
    ],
    "shortSummary": "Direct procurement scheme purchasing 31 notified traditional handloom items directly from women weavers at standardized benchmark rates via ARTFED and AGMC, transferring payments directly via DBT and eliminating middlemen.",
    "fullDescription": "The Swanirbhar Naari Scheme protects Assam rich handloom heritage and guarantees fair wages to over 4.5 Lakh registered female weavers. The Directorate of Handloom & Textiles procures traditional garments like Gamosa, Mekhela Chador, Dokhona, Aronai, and Puan directly from registered weavers through 100+ procurement centers across the state, transferring guaranteed fair-trade payments directly into their bank accounts within 48 hours.",
    "financialBenefit": "Direct procurement payments at benchmark state-fixed rates credited directly into weaver bank accounts",
    "keyObjectives": [
      "Eliminate predatory middleman commissions exploiting rural tribal handloom weavers",
      "Protect traditional Assamese textiles against cheap powerloom duplicates",
      "Guarantee steady seasonal market demand and fair income for women weavers"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "occupations": [
        "Weaver",
        "Handloom Artisan"
      ],
      "stateResidence": "Assam",
      "notes": "Female indigenous weaver of Assam owning and operating a traditional handloom, registered on the Swanirbhar Naari portal."
    },
    "eligibilityHighlights": [
      "Resident woman weaver of Assam",
      "Registered on swanirbharnaari.assam.gov.in",
      "Weaving authentic handloom textiles on pit looms, frame looms, or loin looms"
    ],
    "exclusions": [
      "Commercial powerloom operators or bulk machine-made synthetic textile traders"
    ],
    "requiredDocuments": [
      {
        "id": "doc-as-snn-weaver",
        "name": "Weaver Registration Card / Yarn Passbook",
        "category": "other",
        "purpose": "Verify authentic weaver credentials and loom ownership",
        "citizenTip": "Issued by Handloom & Textiles Department inspector.",
        "isMandatory": true
      },
      {
        "id": "doc-as-snn-aadhaar",
        "name": "Aadhaar Card and Bank Passbook",
        "category": "identity",
        "purpose": "Biometric identity and direct payment routing",
        "citizenTip": "Account must have active mobile alerts enabled.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register as Weaver on Swanirbhar Naari Portal",
        "description": "Register loom and profile on swanirbharnaari.assam.gov.in with local Handloom Inspector.",
        "portalOrOffice": "swanirbharnaari.assam.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Deposit Handloom Goods at Procurement Center",
        "description": "Bring woven textiles to designated district procurement center for quality inspection and digital tagging.",
        "portalOrOffice": "ARTFED / AGMC Procurement Center"
      },
      {
        "stepNumber": 3,
        "title": "Direct Benefit Transfer within 48 Hours",
        "description": "Benchmark procurement value is credited directly into the weaver bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Directorate of Handloom & Textiles, Government of Assam",
      "url": "https://swanirbharnaari.assam.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Handloom, Textiles & Sericulture Department",
      "helpline": "1800-345-3525",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official handloom procurement portal of Assam."
    }
  },
  {
    "id": "as-mukhya-mantri-krishi-sa-sajuli",
    "name": "Mukhya Mantri Krishi Sa-Sajuli Yojana (Assam Direct Farm Implements Financial Grant)",
    "hindiName": "मुख्यमंत्री कृषि सा-साजुली योजना (असम कृषक कृषि उपकरण अनुदान)",
    "teluguName": "ముఖ్యమంత్రి కృషి సా-సజులి పథకం (అసోం)",
    "tamilName": "முதலமைச்சர் கிருஷி சா-சஜுலி திட்டம் (அஸ்ஸாம்)",
    "tagline": "Direct cash grant of ₹5,000 credited to small and marginal farmers to purchase modern farm tools and implements.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Assam)",
    "stateApplicability": "Assam",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AS",
    "administeringGovernment": "Government of Assam",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Small & Marginal Farmers",
      "Tenant Farmers",
      "Rural Cultivators across Assam"
    ],
    "shortSummary": "One-time direct financial grant of ₹5,000 transferred via DBT into the bank accounts of over 5 Lakh small and marginal farmers across Assam to acquire hand tools, sprayers, and farm equipment.",
    "fullDescription": "The Mukhya Mantri Krishi Sa-Sajuli Yojana empowers smallholders in Assam to upgrade basic farm equipment. Cultivators receive ₹5,000 credited directly into their bank accounts to buy knapsack sprayers, weeding tools, spades, water pipes, and manual seed drills, enhancing agricultural productivity across small family farms.",
    "financialBenefit": "₹5,000 direct benefit transfer into farmer bank account",
    "keyObjectives": [
      "Alleviate farm input stress for small and marginal cultivators across Assam",
      "Promote mechanization and efficient spray operations to boost crop yields",
      "Provide unconditional cash flexibility to purchase preferred equipment locally"
    ],
    "eligibilityRules": {
      "occupations": [
        "Farmer",
        "Cultivator",
        "Tenant Farmer"
      ],
      "stateResidence": "Assam",
      "notes": "Resident farmer of Assam cultivating at least 1 bigha of agricultural land with a valid Kisan Credit Card (KCC) or land possession proof."
    },
    "eligibilityHighlights": [
      "Permanent resident farmer in Assam",
      "Cultivating agricultural land for at least 3 consecutive years",
      "Holder of active bank account and Kisan Credit Card"
    ],
    "exclusions": [
      "Large commercial landholders and government employees"
    ],
    "requiredDocuments": [
      {
        "id": "doc-as-kss-land",
        "name": "Land Record (Jamabandi) or Tenant Verification Certificate",
        "category": "land",
        "purpose": "Verify agricultural cultivation",
        "citizenTip": "Verified by local Gaonburah or Agricultural Development Officer (ADO).",
        "isMandatory": true
      },
      {
        "id": "doc-as-kss-bank",
        "name": "Bank Passbook (Aadhaar Seeded)",
        "category": "bank",
        "purpose": "Direct benefit transfer credit destination",
        "citizenTip": "Check with bank that DBT mandate is active.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Form to Agricultural Development Officer (ADO)",
        "description": "Submit Krishi Sa-Sajuli form at local Block Agricultural Development Office.",
        "portalOrOffice": "Block ADO Office"
      },
      {
        "stepNumber": 2,
        "title": "District Level Committee Verification",
        "description": "District Agriculture Officer approves beneficiary list based on land and crop records.",
        "portalOrOffice": "District Agriculture Office"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit of ₹5,000",
        "description": "₹5,000 is credited directly to the farmer bank account via PFMS.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Agriculture, Government of Assam",
      "url": "https://agri-horti.assam.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Agriculture",
      "helpline": "1800-345-3525",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official agricultural welfare initiative of Government of Assam."
    }
  },
  {
    "id": "mn-cmht-health-scheme",
    "name": "Chief Minister-gi Hakshelgi Tengbang (CMHT Manipur Cashless Health Cover)",
    "hindiName": "चीफ मिनिस्टर-गी हक्शेलगी तेंगबांग (मणिपुर कैशलेस स्वास्थ्य सुरक्षा)",
    "teluguName": "చీఫ్ మినిస్టర్-గీ హక్షేల్గి తెంగ్‌బాంగ్ (మణిపూర్)",
    "tamilName": "சீஃப் மினிஸ்டர்-கி ஹக்ஷெல்கி தெங்பாங் (மணிப்பூர்)",
    "tagline": "Cashless secondary and tertiary hospitalization cover of ₹5 Lakh per family per year in 100+ empaneled hospitals.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Manipur)",
    "stateApplicability": "Manipur",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MN",
    "administeringGovernment": "Government of Manipur",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Poor and Vulnerable Families in Manipur",
      "Widows and Destitute Women",
      "Accredited Media Persons / Journalists"
    ],
    "shortSummary": "Universal health insurance covering over 4.5 Lakh families with ₹5 Lakh cashless treatment per family annually for critical illnesses, heart surgeries, oncology, and burns in top hospitals in Imphal and across India.",
    "fullDescription": "Chief Minister-gi Hakshelgi Tengbang (CMHT) provides cashless inpatient medical coverage across hill and valley districts of Manipur. Beneficiaries receive a dedicated biometric smart card entitling them to ₹5,00,000 cashless cover across 1,400+ medical and surgical packages, with special priority given to widows, persons with disabilities, and working journalists.",
    "financialBenefit": "₹5,00,000 / family / year cashless hospitalization coverage",
    "keyObjectives": [
      "Protect vulnerable communities across hill and valley districts from catastrophic medical expenses",
      "Provide cashless admission across premier regional institutions like RIMS and JNIMS Imphal",
      "Cover critical cardiology, neurology, and kidney transplants"
    ],
    "eligibilityRules": {
      "stateResidence": "Manipur",
      "notes": "Resident of Manipur possessing BPL/AAY ration card, or certified low-income status by local authority, or accredited journalist."
    },
    "eligibilityHighlights": [
      "Permanent resident of Manipur",
      "Covered under SECC 2011 / BPL / Antyodaya ration cards",
      "Widows, Divyangjan, and accredited journalists eligible unconditionally"
    ],
    "exclusions": [
      "Regular government servants eligible for government medical reimbursement"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mn-cmh-ration",
        "name": "Digital Ration Card / BPL Certificate",
        "category": "income",
        "purpose": "Verify family entitlement category",
        "citizenTip": "Check details on pdsmanipur.nic.in.",
        "isMandatory": true
      },
      {
        "id": "doc-mn-cmh-aadhaar",
        "name": "Aadhaar Card of Family Members",
        "category": "identity",
        "purpose": "Biometric identity for smart card creation",
        "citizenTip": "Biometrics collected at CMHT enrollment kiosk.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Enrol at CMHT Enrollment Kiosk or District Hospital",
        "description": "Visit nearest CMHT enrollment kiosk at district hospital or Community Health Centre.",
        "portalOrOffice": "District Hospital / CHC"
      },
      {
        "stepNumber": 2,
        "title": "Biometric Smart Card Generation",
        "description": "Provide photo and fingerprint scans; receive instant CMHT optical health smart card.",
        "portalOrOffice": "Kiosk Counter"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Hospitalization",
        "description": "Present card at CMHT Arogya Mitra counter in RIMS, JNIMS, or empaneled hospitals for cashless care.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "State Health Society, Government of Manipur",
      "url": "https://cmhtmanipur.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health and Family Welfare Department",
      "helpline": "1800-103-2015",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official CMHT health portal of Manipur."
    }
  },
  {
    "id": "mn-startup-manipur",
    "name": "Start-Up Manipur Scheme (Youth Entrepreneurship & Innovation Seed Capital)",
    "hindiName": "स्टार्ट-अप मणिपुर योजना (युवा नवाचार एवं बीज पूंजी अनुदान)",
    "teluguName": "స్టార్ట్-అప్ మణిపూర్ పథకం",
    "tamilName": "ஸ்டார்ட்-அப் மணிப்பூர் திட்டம்",
    "tagline": "Seed funding grants up to ₹3 Lakh and matching bank loan subsidies up to ₹30 Lakh for youth startups.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Manipur)",
    "stateApplicability": "Manipur",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MN",
    "administeringGovernment": "Government of Manipur",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "Young Innovators and Startups",
      "IT and Organic Agro-Processing Entrepreneurs",
      "Women Entrepreneurs in Manipur"
    ],
    "shortSummary": "Multi-tier startup program providing ₹3 Lakh direct grants for early-stage idea founders and up to ₹30 Lakh subsidized credit packages for scaling enterprises in organic farming, handloom, tourism, and IT services.",
    "fullDescription": "Start-Up Manipur transforms the economic landscape by nurturing homegrown entrepreneurs. Operating across Idea Stage (revenue support up to ₹3 Lakh grant), ESSENCE Stage (up to ₹10 Lakh matching grant/loan), and StandUp Stage (up to ₹30 Lakh), the scheme provides comprehensive incubation, mentorship, and collateral-free funding to create scalable private enterprises.",
    "financialBenefit": "₹3,00,000 direct grant (Idea stage) or up to ₹30,00,000 project financing (Revenue stage)",
    "keyObjectives": [
      "Foster a vibrant startup and innovation culture among educated youths in Manipur",
      "Commercialize local indigenous resources like black rice (Chak-Hao), bamboo, and silk",
      "Provide seed equity and mentorship through premier incubation partners"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 45,
      "stateResidence": "Manipur",
      "notes": "Resident of Manipur aged 18 to 45 holding an innovative business idea or early-stage enterprise registered in Manipur."
    },
    "eligibilityHighlights": [
      "Permanent resident / domicile of Manipur",
      "Innovative product or business model operating within Manipur",
      "Business entity registered as Sole Proprietorship, LLP, or Pvt Ltd company"
    ],
    "exclusions": [
      "Traditional brick-and-mortar trading without value addition or innovation"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mn-sum-pitch",
        "name": "Pitch Deck & Business Plan / DPR",
        "category": "other",
        "purpose": "Evaluation of business concept and financial feasibility",
        "citizenTip": "Include market size, traction, and employment projections.",
        "isMandatory": true
      },
      {
        "id": "doc-mn-sum-domicile",
        "name": "Manipur Domicile Certificate & Aadhaar",
        "category": "identity",
        "purpose": "Identity and residence verification",
        "citizenTip": "Issued by SDO / Deputy Commissioner.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on Start-Up Manipur Portal",
        "description": "Submit pitch deck and project application on startupmanipur.mn.gov.in.",
        "portalOrOffice": "startupmanipur.mn.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Pitch Presentation before Expert Committee",
        "description": "Shortlisted candidates present their pitch deck before a state evaluation panel.",
        "portalOrOffice": "Planning Department, Imphal"
      },
      {
        "stepNumber": 3,
        "title": "Seed Grant Release and Incubation",
        "description": "Selected startups receive direct grant credits into bank accounts and incubation mentorship.",
        "portalOrOffice": "Direct Benefit Transfer / Incubation Centre"
      }
    ],
    "officialSource": {
      "name": "Planning Department, Government of Manipur",
      "url": "https://startupmanipur.mn.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Planning Department",
      "helpline": "0385-2451144",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Manipur startup incubation and funding platform."
    }
  },
  {
    "id": "mn-cm-pwd-pension",
    "name": "CM-gi Sotharabasingi Tengbang (CMST Manipur Disability Social Security & Scholarships)",
    "hindiName": "चीफ मिनिस्टर-गी सोथराबासिंगी तेंगबांग (मणिपुर दिव्यांग सामाजिक सुरक्षा)",
    "teluguName": "సీఎం-గీ సోతరబాసింగి తెంగ్‌బాంగ్ (మణిపూర్)",
    "tamilName": "சீஎம்-கி சோதரபாசிங்கி தெங்பாங் (மணிப்பூர்)",
    "tagline": "Monthly pension of ₹1,500 + free assistive aids + annual education scholarships for Persons with Disabilities (PwD).",
    "category": "disability-pwd",
    "categoryLabel": "Disability & Inclusion",
    "geographicScope": "State Scheme (Manipur)",
    "stateApplicability": "Manipur",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MN",
    "administeringGovernment": "Government of Manipur",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Persons with Disabilities (PwD)",
      "Differently-Abled Students",
      "Caregivers of Severe Disability Patients"
    ],
    "shortSummary": "Comprehensive disability welfare program providing ₹1,500 monthly pension for persons with benchmark disability, scholarships from Class 1 to university, free motorized tricycles, and free health checkups.",
    "fullDescription": "The CM-gi Sotharabasingi Tengbang (CMST) scheme establishes a protective social security umbrella for persons with disabilities in Manipur. Administered by the Social Welfare Department, the scheme grants ₹1,500 monthly subsistence allowance to persons with 80%+ disability (and ₹1,000 for 40-79% disability), annual scholarships up to ₹8,000 for disabled students, free motorized tricycles, hearing aids, and caregiver stipends.",
    "financialBenefit": "₹1,000 to ₹1,500 / month pension + annual student scholarships up to ₹8,000 + free motorized aids",
    "keyObjectives": [
      "Provide guaranteed monthly financial support to persons with disabilities across Manipur",
      "Facilitate mobility through free motorized tricycles, smart canes, and hearing aids",
      "Incentivize inclusive schooling and vocational training for differently-abled youths"
    ],
    "eligibilityRules": {
      "minDisabilityPercentage": 40,
      "requiresUDID": true,
      "stateResidence": "Manipur",
      "notes": "Resident of Manipur with certified disability of 40% or above holding a valid Unique Disability ID (UDID)."
    },
    "eligibilityHighlights": [
      "Permanent resident of Manipur",
      "Possesses certified disability of 40% or higher / UDID card",
      "Not receiving any other government disability pension"
    ],
    "exclusions": [
      "Government employees or pensioners"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mn-cms-udid",
        "name": "UDID Card / Disability Certificate",
        "category": "disability",
        "purpose": "Verification of disability percentage and category",
        "citizenTip": "Check UDID on swavlambancard.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-mn-cms-aadhaar",
        "name": "Aadhaar Card and Bank Passbook",
        "category": "identity",
        "purpose": "Identity and DBT routing",
        "citizenTip": "Bank account must be in the name of the beneficiary or legal guardian.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply at District Social Welfare Office (DSWO)",
        "description": "Submit CMST application along with UDID card to District Social Welfare Officer.",
        "portalOrOffice": "DSWO Office"
      },
      {
        "stepNumber": 2,
        "title": "Medical Verification & Sanction Order",
        "description": "Medical board and Social Welfare Department verify disability credentials and issue sanction.",
        "portalOrOffice": "Social Welfare Department"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Credit and Aid Distribution",
        "description": "Monthly allowance is credited directly to bank account, and assistive devices are distributed at district camps.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Social Welfare, Government of Manipur",
      "url": "https://socialwelfare.mn.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Welfare Department",
      "helpline": "0385-2450502",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Manipur disability welfare portal."
    }
  },
  {
    "id": "mn-msrlm-livelihood-mission",
    "name": "Manipur State Rural Livelihoods Mission (Women SHG Revolving Fund & Livelihood Grants)",
    "hindiName": "मणिपुर राज्य ग्रामीण आजीविका मिशन (महिला स्वयं सहायता आजीविका संवर्धन)",
    "teluguName": "మణిపూర్ గ్రామీణ జీవనోపాధి మిషన్",
    "tamilName": "மணிப்பூர் மாநில ஊரக வாழ்வாதார இயக்கம்",
    "tagline": "Revolving fund of ₹15,000 + Community Investment Fund up to ₹1.5 Lakh for women SHGs across hill and valley districts.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Manipur)",
    "stateApplicability": "Manipur",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MN",
    "administeringGovernment": "Government of Manipur",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Women Self Help Groups (SHGs)",
      "Rural Homemakers & Artisans",
      "Tribal Livelihood Collectives"
    ],
    "shortSummary": "Empowers over 50,000 women across Manipur through institutional SHG federation funding, providing Revolving Funds (RF) of ₹15,000 and Community Investment Funds (CIF) up to ₹1.5 Lakh for food processing, handloom, and poultry.",
    "fullDescription": "Under the Manipur State Rural Livelihoods Mission (MSRLM), poor rural women form cohesive Self-Help Groups to escape informal debt traps. The mission provides institutional seed grants: ₹15,000 Revolving Fund to initiate internal lending, followed by Community Investment Fund up to ₹1,50,000 per SHG to finance poultry farming, mushroom cultivation, ginger processing, and traditional handloom weaving.",
    "financialBenefit": "₹15,000 Revolving Fund + up to ₹1,50,000 Community Investment Fund per SHG at subsidized rates",
    "keyObjectives": [
      "Organize rural women into sustainable self-managed thrift and credit SHG institutions",
      "Provide low-cost institutional microfinance to eliminate predatory moneylenders",
      "Develop market value chains for indigenous Manipuri handicrafts and agro-products"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Manipur",
      "notes": "Group of 10 to 15 women residing in the same village in Manipur, maintaining regular thrift savings and panchasutra norms."
    },
    "eligibilityHighlights": [
      "Resident women of Manipur forming an SHG",
      "Group adhering to Panchasutra principles (regular meetings, savings, internal lending, timely repayment, book-keeping)",
      "Joint bank account opened with scheduled commercial or rural bank"
    ],
    "exclusions": [
      "SHGs formed purely for speculative investments without micro-livelihood activities"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mn-msr-group",
        "name": "SHG Resolution and Bank Passbook",
        "category": "bank",
        "purpose": "Verify group formation and savings record",
        "citizenTip": "Maintained with assistance from Village Coordinator (VC).",
        "isMandatory": true
      },
      {
        "id": "doc-mn-msr-aadhaar",
        "name": "Aadhaar Cards of Group Members",
        "category": "identity",
        "purpose": "Identity and residency validation",
        "citizenTip": "All members must complete e-KYC.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Form SHG with Block Mission Management Unit (BMMU)",
        "description": "Form group with help of Community Resource Person (CRP) and register with BMMU.",
        "portalOrOffice": "Block Mission Management Unit"
      },
      {
        "stepNumber": 2,
        "title": "Grading and Revolving Fund Sanction",
        "description": "After 3 months of regular savings, BMMU evaluates group and disburses ₹15,000 Revolving Fund.",
        "portalOrOffice": "Bank Branch / BMMU"
      },
      {
        "stepNumber": 3,
        "title": "Livelihood Project & CIF Grant Disbursal",
        "description": "Submit Micro Credit Plan (MCP) to access up to ₹1.5 Lakh Community Investment Fund for business startup.",
        "portalOrOffice": "Village Organization / Bank"
      }
    ],
    "officialSource": {
      "name": "Department of Rural Development and Panchayati Raj, Manipur",
      "url": "https://rdpr.mn.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Rural Development and Panchayati Raj Department",
      "helpline": "0385-2451144",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Manipur State Rural Livelihoods Mission portal."
    }
  },
  {
    "id": "mn-go-to-village-services",
    "name": "Go to Village Mission (Khungang Chatse - Doorstep Public Services Delivery)",
    "hindiName": "गो टू विलेज मिशन (खुंगंग चात्से - मणिपुर घर-द्वार नागरिक सेवा)",
    "teluguName": "గో టు విలేజ్ మిషన్ (మణిపూర్)",
    "tamilName": "கோ டு வில்லேஜ் இயக்கம் (மணிப்பூர்)",
    "tagline": "Direct mobile camp delivery of 40+ government schemes, Aadhaar, health cards, and pensions in every village.",
    "category": "low-income-welfare",
    "categoryLabel": "Public & Citizen Services",
    "geographicScope": "State Scheme (Manipur)",
    "stateApplicability": "Manipur",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MN",
    "administeringGovernment": "Government of Manipur",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "All Rural & Hill Citizens of Manipur",
      "Senior Citizens & Homemakers",
      "Marginalized Tribal Villagers"
    ],
    "shortSummary": "High-level governance outreach initiative bringing entire government departments (Health, Social Welfare, Revenue, Agriculture, Banks) directly to remote villages in mobile administrative camps.",
    "fullDescription": "Khungang Chatse (Go to Village) bridges the administrative divide between remote hill/valley hamlets and district secretariats in Manipur. Multi-departmental mobile convoys pitch camps in every village, enabling citizens to enroll in CMHT, apply for social security pensions, obtain caste and domicile certificates, update Aadhaar, open Jan Dhan bank accounts, and register grievance petitions right in their home village.",
    "financialBenefit": "Zero-cost doorstep delivery of government welfare schemes and official certificates",
    "keyObjectives": [
      "Take government administration directly to citizens doorsteps across tough hill terrain",
      "Achieve 100% saturation of welfare programs in remote indigenous villages",
      "Eliminate the expense and time spent traveling to district headquarters for certificates"
    ],
    "eligibilityRules": {
      "stateResidence": "Manipur",
      "notes": "Available to all permanent residents and villagers across all 16 districts of Manipur."
    },
    "eligibilityHighlights": [
      "Resident of the village hosting the outreach camp",
      "No application fees or middleman charges"
    ],
    "exclusions": [
      "Matters sub-judice before judicial courts"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mn-gtv-aadhaar",
        "name": "Aadhaar Card / Basic Identity Proof",
        "category": "identity",
        "purpose": "Identity verification for on-the-spot service requests",
        "citizenTip": "Carry original documents for digital scanning at camp counters.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Check Camp Schedule in your Village",
        "description": "Village authority notifies upcoming Khungang Chatse camp date announced by District Commissioner.",
        "portalOrOffice": "Village Community Hall / DC Office"
      },
      {
        "stepNumber": 2,
        "title": "Visit Specific Department Counter at Camp",
        "description": "Visit relevant desk (Health for CMHT, Social Welfare for pensions, Revenue for certificates).",
        "portalOrOffice": "Mobile Camp Pavilion"
      },
      {
        "stepNumber": 3,
        "title": "On-the-Spot Service Delivery & Sanction",
        "description": "Receive instant certificate, health card, or sanction letter on the same day.",
        "portalOrOffice": "Camp Desk"
      }
    ],
    "officialSource": {
      "name": "Department of Personnel & Administrative Reforms, Manipur",
      "url": "https://manipur.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Administrative Reforms Department",
      "helpline": "0385-2451144",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Manipur public outreach mission."
    }
  },
  {
    "id": "ml-focus-scheme",
    "name": "FOCUS Scheme (Meghalaya Farmers Collectivization for Upscaling Production)",
    "hindiName": "फोकस योजना (मेघालय कृषक उत्पादक समूह आजीविका संवर्धन)",
    "teluguName": "ఫోకస్ పథకం (మేఘాలయ)",
    "tamilName": "ஃபோகஸ் திட்டம் (மேகாலயா)",
    "tagline": "Direct seed financial support of ₹5,000 per farmer member in Producer Groups for value chain upscaling.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Meghalaya)",
    "stateApplicability": "Meghalaya",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "ML",
    "administeringGovernment": "Government of Meghalaya",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Small & Marginal Farmers",
      "Horticulture Producer Groups",
      "Tribal Cultivators in Khasi, Jaintia & Garo Hills"
    ],
    "shortSummary": "Largest farmer support program in Meghalaya granting ₹5,000 direct capital per farmer member in registered Producer Groups (typically ₹25,000 to ₹1,00,000 per group) to purchase quality seeds, ginger/turmeric inputs, and processing machinery.",
    "fullDescription": "FOCUS (Farmers Collectivization for Upscaling Production and Marketing Systems) is Meghalaya flagship rural development program. Covering over 4.5 Lakh farming households, the scheme organizes farmers into Producer Groups (PGs) of 10 to 20 members. Each member receives a ₹5,000 direct grant credited directly into the group account to establish collective nurseries, procure Lakadong turmeric and ginger rhizomes, and invest in common aggregation and post-harvest infrastructure.",
    "financialBenefit": "₹5,000 direct grant per farmer member credited directly to the Producer Group bank account",
    "keyObjectives": [
      "Scale up high-value indigenous agricultural crops (Lakadong Turmeric, Ginger, Broom Grass, Honey)",
      "Organize individual subsistence farmers into commercially competitive Producer Groups",
      "Provide collateral-free direct seed grants to enhance rural farm liquidity"
    ],
    "eligibilityRules": {
      "occupations": [
        "Farmer",
        "Horticulturist",
        "Agri-Entrepreneur"
      ],
      "stateResidence": "Meghalaya",
      "notes": "Resident farmer of Meghalaya belonging to a registered Producer Group (PG) with active agricultural cultivation."
    },
    "eligibilityHighlights": [
      "Permanent resident / indigenous tribal farmer of Meghalaya",
      "Member of a recognized Producer Group (PG) formed under Meghalaya Basin Development Authority (MBDA)",
      "Group bank account opened in a scheduled commercial, rural, or apex bank"
    ],
    "exclusions": [
      "Individual non-farming entities without group formation"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ml-foc-pg",
        "name": "Producer Group Registration Certificate & Resolution",
        "category": "other",
        "purpose": "Verify group formation and list of 10-20 member farmers",
        "citizenTip": "Issued by District Basin Development Unit (DBDU).",
        "isMandatory": true
      },
      {
        "id": "doc-ml-foc-aadhaar",
        "name": "Aadhaar Card and EPIC (Voter ID) of Members",
        "category": "identity",
        "purpose": "Identity and domicile verification",
        "citizenTip": "All group members must provide KYC.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Form Producer Group with Village Facilitator",
        "description": "Form a group of 10-20 farmers and register with the local Community Facilitator (CF) or Enterprise Facilitator (EF).",
        "portalOrOffice": "District Basin Development Unit (DBDU)"
      },
      {
        "stepNumber": 2,
        "title": "Validation & Group Bank Account Opening",
        "description": "MBDA team verifies farm activities and assists in opening a zero-balance PG bank account.",
        "portalOrOffice": "Bank Branch / DBDU"
      },
      {
        "stepNumber": 3,
        "title": "Direct Benefit Transfer (DBT)",
        "description": "₹5,000 per member is credited directly into the group bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Meghalaya Basin Development Authority (MBDA)",
      "url": "https://mbda.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Agriculture and Farmers Welfare, Meghalaya",
      "helpline": "1800-345-3644",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official portal of Meghalaya Basin Development Authority."
    }
  },
  {
    "id": "ml-focus-plus-scheme",
    "name": "FOCUS+ Scheme (Meghalaya Universal Rural Household Direct Financial Aid)",
    "hindiName": "फोकस प्लस योजना (मेघालय ग्रामीण परिवार प्रत्यक्ष वित्तीय सहायता)",
    "teluguName": "ఫోకస్ ప్లస్ పథకం (మేఘాలయ)",
    "tamilName": "ஃபோகஸ் பிளஸ் திட்டம் (மேகாலயா)",
    "tagline": "Direct unconditional cash grant of ₹5,000 transferred into the bank account of every rural farming household.",
    "category": "low-income-welfare",
    "categoryLabel": "Public & Citizen Services",
    "geographicScope": "State Scheme (Meghalaya)",
    "stateApplicability": "Meghalaya",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "ML",
    "administeringGovernment": "Government of Meghalaya",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "All Rural Households in Meghalaya",
      "Farming Families",
      "Tribal Women Heads of Households"
    ],
    "shortSummary": "Universal household income support providing ₹5,000 direct bank transfer to every rural household across Meghalaya to supplement farming inputs, children schooling, and household health expenditures.",
    "fullDescription": "Launched as an extension to the FOCUS scheme, FOCUS+ provides an unconditional financial grant of ₹5,000 directly into the individual bank account of the head of every rural household in Meghalaya. The scheme covers over 4.5 Lakh rural families across Khasi, Jaintia, and Garo hills, ensuring that every rural family receives dedicated liquidity support directly via Aadhaar DBT.",
    "financialBenefit": "₹5,000 one-time direct cash transfer per rural household via DBT",
    "keyObjectives": [
      "Provide direct cash liquidity support to 100% of rural households in Meghalaya",
      "Stimulate local rural market demand and grassroots trade during harvest seasons",
      "Ensure zero paperwork and seamless digital transfers via Meghalaya FOCUS+ cards"
    ],
    "eligibilityRules": {
      "stateResidence": "Meghalaya",
      "notes": "Any rural household permanently residing in the state of Meghalaya outside municipal corporation boundaries."
    },
    "eligibilityHighlights": [
      "Permanent resident of rural Meghalaya",
      "Household registered under village census / EPIC rolls",
      "Active bank account seeded with Aadhaar"
    ],
    "exclusions": [
      "Urban households residing in municipal city limits of Shillong and Tura"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ml-fp-epic",
        "name": "Voter ID (EPIC) / Domicile Certificate",
        "category": "identity",
        "purpose": "Verify rural residence and family head status",
        "citizenTip": "Check polling station on ceomeghalaya.nic.in.",
        "isMandatory": true
      },
      {
        "id": "doc-ml-fp-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer payment destination",
        "citizenTip": "Check with bank that direct credit is active.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Registration with Community Facilitator",
        "description": "Community Facilitator registers household details during village camp.",
        "portalOrOffice": "Village Community Hall / C&RD Block"
      },
      {
        "stepNumber": 2,
        "title": "Verification & FOCUS+ Card Handover",
        "description": "Block Development Officer verifies data and issues digital FOCUS+ card.",
        "portalOrOffice": "Block Development Office"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit of ₹5,000",
        "description": "Amount is credited directly into the household head bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Meghalaya Basin Development Authority (MBDA)",
      "url": "https://mbda.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Community & Rural Development Department",
      "helpline": "1800-345-3644",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Meghalaya FOCUS+ portal."
    }
  },
  {
    "id": "ml-mhis-health-insurance",
    "name": "Meghalaya Health Insurance Scheme (MHIS Phase 5 Universal Cashless Health Cover)",
    "hindiName": "मेघालय स्वास्थ्य बीमा योजना (एमएचआईएस सार्वभौमिक स्वास्थ्य सुरक्षा)",
    "teluguName": "మేఘాలయ హెల్త్ ఇన్సూరెన్స్ పథకం (MHIS)",
    "tamilName": "மேகாலயா சுகாதார காப்பீட்டுத் திட்டம் (MHIS)",
    "tagline": "Universal cashless health coverage of ₹5.3 Lakh per family per year in 1,000+ empaneled hospitals.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Meghalaya)",
    "stateApplicability": "Meghalaya",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "ML",
    "administeringGovernment": "Government of Meghalaya",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "All Resident Families of Meghalaya (Universal)",
      "State Government Employees and Pensioners",
      "Indigenous Tribal Communities"
    ],
    "shortSummary": "Universal health insurance covering all citizens of Meghalaya with ₹5.3 Lakh cashless treatment per family annually for secondary and tertiary care in hospitals across Meghalaya, Guwahati, and national metros.",
    "fullDescription": "MHIS Phase 5 converges with Ayushman Bharat PM-JAY to offer ₹5,30,000 cashless health protection per family per year. Meghalaya was among the first states to make tertiary health cover truly universal, covering state government employees, pensioners, and ordinary citizens alike, with zero out-of-pocket expenses for cancer treatments, cardiac surgeries, and diagnostic imaging.",
    "financialBenefit": "₹5,30,000 / family / year cashless hospitalization coverage",
    "keyObjectives": [
      "Provide 100% universal healthcare protection for all resident families in Meghalaya",
      "Shield families from catastrophic health debt when referred to hospitals in Guwahati or Kolkata",
      "Ensure cashless admission with zero co-payment"
    ],
    "eligibilityRules": {
      "stateResidence": "Meghalaya",
      "notes": "All permanent resident families of Meghalaya holding a valid EPIC (Voter ID) or state ration card."
    },
    "eligibilityHighlights": [
      "Universal eligibility for all permanent residents of Meghalaya",
      "Covers pre-existing diseases from day one",
      "No cap on family size or age of members"
    ],
    "exclusions": [
      "Serving Central Government employees covered under CGHS"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ml-mhi-epic",
        "name": "Voter ID (EPIC Card) / Ration Card",
        "category": "identity",
        "purpose": "Proof of Meghalaya residency and family unit structure",
        "citizenTip": "EPIC card is mandatory for enrollment.",
        "isMandatory": true
      },
      {
        "id": "doc-ml-mhi-aadhaar",
        "name": "Aadhaar Card of Family Members",
        "category": "identity",
        "purpose": "Biometric identity for smart card creation",
        "citizenTip": "Carry original Aadhaar cards to enrollment kiosk.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Enroll at Village MHIS Kiosk or CSC",
        "description": "Visit annual MHIS enrollment drive in your village or local CSC with family EPIC and Aadhaar.",
        "portalOrOffice": "MHIS Village Kiosk / CSC"
      },
      {
        "stepNumber": 2,
        "title": "Smart Card Issuance",
        "description": "Biometric photo is captured and MHIS smart card is handed over on the spot.",
        "portalOrOffice": "Kiosk Counter"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Hospitalization",
        "description": "Show card at MHIS helpdesk in any empaneled hospital (NEIGRIHMS, Nazareth, Civil Hospital) for cashless care.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "State Nodal Agency, Meghalaya Health Insurance Scheme (MHIS)",
      "url": "https://mhis.org.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Health & Family Welfare",
      "helpline": "1800-345-3644 / 104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official portal of the Meghalaya Health Insurance Scheme."
    }
  },
  {
    "id": "ml-yess-meghalaya-youth",
    "name": "YESS Meghalaya (Youth Engagement through Social Success - Grants for Youth Organizations)",
    "hindiName": "येस मेघालय (युवा सशक्तिकरण एवं युवा क्लब प्रत्यक्ष अनुदान)",
    "teluguName": "యెస్ మేఘాలయ పథకం",
    "tamilName": "யெஸ் மேகாலயா திட்டம்",
    "tagline": "Direct financial grants of ₹1 Lakh for registered youth clubs, sports teams, and socio-cultural groups.",
    "category": "unemployment-skills",
    "categoryLabel": "Employment & Skills",
    "geographicScope": "State Scheme (Meghalaya)",
    "stateApplicability": "Meghalaya",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "ML",
    "administeringGovernment": "Government of Meghalaya",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "Youth Clubs and Societies",
      "Sports Teams and Music Collectives",
      "Grassroots Youth Organizations in Meghalaya"
    ],
    "shortSummary": "High-impact youth mobilization initiative providing direct financial grants up to ₹1,00,000 to registered youth organizations, village sports clubs, and music societies to organize tournaments, skill workshops, and community events.",
    "fullDescription": "YESS Meghalaya channels the immense creative and athletic potential of youth across Meghalaya. Registered youth groups, village sports clubs, traditional music troupes, and student societies receive direct grants of ₹1,00,000 to conduct football tournaments, music festivals, environmental clean-ups, and career guidance workshops, preventing drug abuse and building leadership.",
    "financialBenefit": "Direct financial grant of up to ₹1,00,000 per youth organization",
    "keyObjectives": [
      "Empower grassroots youth clubs to lead community development and sports programs",
      "Prevent youth substance abuse through structured engagement in sports, music, and arts",
      "Provide transparent funding directly to registered youth societies"
    ],
    "eligibilityRules": {
      "stateResidence": "Meghalaya",
      "notes": "Registered youth organization, club, or society in Meghalaya with at least 15 active youth members aged 15 to 35."
    },
    "eligibilityHighlights": [
      "Youth club or organization operating in Meghalaya for at least 1 year",
      "Registered under Societies Registration Act or recognized by local Dorbar Shnong / Nokma",
      "Active bank account in the name of the organization"
    ],
    "exclusions": [
      "Political organizations or commercial event management companies"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ml-yes-reg",
        "name": "Society Registration Certificate / Dorbar Shnong Recognition",
        "category": "other",
        "purpose": "Verify legitimate non-profit youth organization status",
        "citizenTip": "Endorsement letter from local Rangbah Shnong is accepted.",
        "isMandatory": true
      },
      {
        "id": "doc-ml-yes-proposal",
        "name": "Event / Community Project Proposal & Budget",
        "category": "other",
        "purpose": "Details of planned tournament, workshop, or community event",
        "citizenTip": "Include itemized budget up to ₹1 Lakh.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on YESS Meghalaya Portal",
        "description": "Submit club details and project proposal on yessmeghalaya.in.",
        "portalOrOffice": "yessmeghalaya.in"
      },
      {
        "stepNumber": 2,
        "title": "District Screening Committee Review",
        "description": "District Sports Officer / Deputy Commissioner reviews event feasibility and approves grant.",
        "portalOrOffice": "District Sports Office"
      },
      {
        "stepNumber": 3,
        "title": "Grant Disbursement into Club Bank Account",
        "description": "₹1,00,000 grant is transferred directly into the organization bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Sports and Youth Affairs, Government of Meghalaya",
      "url": "https://yessmeghalaya.in",
      "lastVerifiedDate": "October 2026",
      "department": "Sports and Youth Affairs Department",
      "helpline": "0364-2223784",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official YESS Meghalaya youth engagement portal."
    }
  },
  {
    "id": "ml-cmyfs-fellowship",
    "name": "Chief Ministers Youth Development Scheme (Meghalaya Skilling & Career Stipends)",
    "hindiName": "मुख्यमंत्री युवा विकास योजना (मेघालय कौशल प्रशिक्षण एवं करियर स्टाइपेंड)",
    "teluguName": "ముఖ్యమంత్రి యువ వికాస్ పథకం (మేఘాలయ)",
    "tamilName": "முதலமைச்சர் யுவ விகாஸ் திட்டம் (மேகாலயா)",
    "tagline": "Monthly skill training stipend of ₹5,000 + free coaching for competitive exams for Meghalaya youth.",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Meghalaya)",
    "stateApplicability": "Meghalaya",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "ML",
    "administeringGovernment": "Government of Meghalaya",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "Unemployed Educated Youths (Aged 18-30)",
      "Civil Services Aspirants (UPSC/MPSC)",
      "Technical Diploma Holders"
    ],
    "shortSummary": "Comprehensive youth empowerment program providing free professional coaching for UPSC and MPSC exams, vocational skilling in IT and hospitality, and monthly living stipends of ₹5,000 during training.",
    "fullDescription": "The Chief Ministers Youth Development Scheme (CMYDS) equips educated youths across Meghalaya for successful professional careers. The scheme sponsors meritorious candidates for competitive civil services coaching, hospitality and aviation certifications, and digital media diplomas, providing a ₹5,000 monthly living stipend to ensure trainees focus on exam preparation and skill acquisition without financial distress.",
    "financialBenefit": "100% free coaching/training fees + ₹5,000 / month living stipend during course",
    "keyObjectives": [
      "Increase the representation of Meghalaya youth in central civil services and defense forces",
      "Provide industry-standard technical skilling for modern hospitality, IT, and tourism careers",
      "Support outstation candidates with monthly boarding allowances"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 30,
      "stateResidence": "Meghalaya",
      "notes": "Permanent resident of Meghalaya aged 18 to 30 holding a graduate or polytechnic degree, selected through entrance screening."
    },
    "eligibilityHighlights": [
      "Permanent resident / indigenous tribal youth of Meghalaya",
      "Minimum educational qualification: Graduate or recognized diploma",
      "Cleared state-level screening assessment"
    ],
    "exclusions": [
      "Regular full-time government employees"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ml-cmy-grad",
        "name": "Degree Marksheets & Passing Certificate",
        "category": "academic",
        "purpose": "Verify educational qualification",
        "citizenTip": "Marksheet from recognized university.",
        "isMandatory": true
      },
      {
        "id": "doc-ml-cmy-prc",
        "name": "ST Certificate / Permanent Resident Certificate",
        "category": "caste",
        "purpose": "Proof of Meghalaya residency",
        "citizenTip": "Issued by Deputy Commissioner.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on Meghalaya Youth Portal",
        "description": "Submit application for competitive coaching or skilling stream on megplanning.gov.in.",
        "portalOrOffice": "megplanning.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Screening Examination",
        "description": "Appear for competitive screening test conducted by the Planning Department.",
        "portalOrOffice": "Designated Examination Center"
      },
      {
        "stepNumber": 3,
        "title": "Admission to Empaneled Academy & Stipend Disbursement",
        "description": "Join empaneled institute; monthly ₹5,000 stipend is credited directly to candidate bank account.",
        "portalOrOffice": "Empaneled Coaching Academy / DBT"
      }
    ],
    "officialSource": {
      "name": "Planning Department, Government of Meghalaya",
      "url": "https://megplanning.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Planning Department",
      "helpline": "0364-2223784",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official youth development portal of Meghalaya Planning Department."
    }
  },
  {
    "id": "mz-sedp-flagship-scheme",
    "name": "Socio-Economic Development Policy (Mizoram Family Livelihood Seed Grants)",
    "hindiName": "सामाजिक-आर्थिक विकास नीति (मिज़ोरम पारिवारिक आजीविका अनुदान)",
    "teluguName": "సోషియో-ఎకనామిక్ డెవలప్‌మెంట్ పాలసీ (మిజోరం)",
    "tamilName": "சமூக-பொருளாதார மேம்பாட்டுக் கொள்கை (மிஸோரம்)",
    "tagline": "Direct seed financial grant of ₹50,000 for family micro-enterprises and ginger, bamboo, and rubber farming.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Mizoram)",
    "stateApplicability": "Mizoram",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MZ",
    "administeringGovernment": "Government of Mizoram",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Mizo Farming Families",
      "Women Homemakers and Artisans",
      "Small Livestock & Agro-Entrepreneurs"
    ],
    "shortSummary": "Flagship economic transformation program providing ₹50,000 direct capital grants per beneficiary family to transition away from shifting (jhum) cultivation towards sustainable cash cropping, piggery, and handloom businesses.",
    "fullDescription": "The Socio-Economic Development Policy (SEDP) is Mizoram primary economic blueprint. The policy provides direct financial assistance of ₹50,000 disbursed directly into the beneficiary bank accounts across 6 key pillars: agriculture, horticulture, animal husbandry, commerce and industries, fisheries, and rural tourism. Selected families receive technical training from departmental officers to ensure viable long-term returns.",
    "financialBenefit": "₹50,000 direct capital seed grant transferred via DBT",
    "keyObjectives": [
      "Transform traditional slash-and-burn (jhum) farming into permanent commercial agriculture",
      "Provide startup capital for piggery, poultry, handloom weaving, and retail micro-enterprises",
      "Boost rural household income and achieve statewide economic self-sufficiency"
    ],
    "eligibilityRules": {
      "stateResidence": "Mizoram",
      "notes": "Permanent resident of Mizoram holding a certified Village Council recommendation and not employed in permanent government service."
    },
    "eligibilityHighlights": [
      "Permanent resident / indigenous Mizo citizen",
      "Recommendation letter from local Village Council (VC) or Local Council (LC)",
      "Aadhaar-seeded bank account in a recognized bank in Mizoram"
    ],
    "exclusions": [
      "Regular government servants and families receiving central or state civil pensions"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mz-sed-vc",
        "name": "Village Council (VC) / Local Council Endorsement",
        "category": "other",
        "purpose": "Verify resident status and proposed livelihood activity",
        "citizenTip": "Signed by VC President / Secretary.",
        "isMandatory": true
      },
      {
        "id": "doc-mz-sed-aadhaar",
        "name": "Aadhaar Card and Voter ID (EPIC)",
        "category": "identity",
        "purpose": "Identity and domicile verification",
        "citizenTip": "Must match details in village electoral roll.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application to Local Village Council",
        "description": "Submit SEDP application specifying chosen livelihood trade (piggery, ginger, handloom) to Village Council.",
        "portalOrOffice": "Village Council Office"
      },
      {
        "stepNumber": 2,
        "title": "Screening by District Level Committee",
        "description": "District Level SEDP Committee headed by Deputy Commissioner approves final beneficiary list.",
        "portalOrOffice": "DC Office"
      },
      {
        "stepNumber": 3,
        "title": "DBT Grant Credit into Bank Account",
        "description": "₹50,000 is credited directly into beneficiary bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Planning & Programme Implementation Department, Mizoram",
      "url": "https://planning.mizoram.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Planning & Programme Implementation Department",
      "helpline": "0389-2322336",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official SEDP portal of Government of Mizoram."
    }
  },
  {
    "id": "mz-state-health-care-scheme",
    "name": "Mizoram State Health Care Scheme (MSHCS Cashless Medical Cover & Reimbursement)",
    "hindiName": "मिज़ोरम राज्य स्वास्थ्य सुरक्षा योजना (कैशलेस चिकित्सा कवर एवं प्रतिपूर्ति)",
    "teluguName": "మిజోరం స్టేట్ హెల్త్ కేర్ పథకం",
    "tamilName": "மிஸோரம் மாநில சுகாதாரத் திட்டம்",
    "tagline": "Medical hospitalization coverage up to ₹5 Lakh per family per year for treatment in Mizoram and referral hospitals.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Mizoram)",
    "stateApplicability": "Mizoram",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MZ",
    "administeringGovernment": "Government of Mizoram",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "All Resident Families of Mizoram",
      "Informal Workers and Farmers",
      "Patients Needing Super-Specialty Referral Care"
    ],
    "shortSummary": "Universal health assurance providing ₹5 Lakh medical coverage for secondary and tertiary treatments in government hospitals in Mizoram and designated referral centers in Shillong, Guwahati, and Kolkata.",
    "fullDescription": "The Mizoram State Health Care Scheme (MSHCS) ensures no Mizo citizen suffers financial ruin due to complex medical conditions. The scheme provides up to ₹5,00,000 annual inpatient medical protection. Beneficiaries receive cashless services at Civil Hospital Aizawl and state referral hospitals, alongside reimbursement for authorized outstation medical treatments for cardiac procedures, kidney transplants, and oncology.",
    "financialBenefit": "Up to ₹5,00,000 / family / year medical treatment coverage and reimbursement",
    "keyObjectives": [
      "Shield families from high medical expenses when requiring super-specialty referral outside Mizoram",
      "Provide coverage for costly cancer therapy and cardiac surgeries",
      "Ensure accessible enrollment through annual Village Council drives"
    ],
    "eligibilityRules": {
      "stateResidence": "Mizoram",
      "notes": "Any permanent resident family in Mizoram not covered under central government CGHS schemes, enrolled upon paying nominal annual fee."
    },
    "eligibilityHighlights": [
      "Permanent resident of Mizoram",
      "Enrolled during annual open registration window (nominal fee of ₹1,000/year for general, ₹500 for low-income)",
      "Covers all family members listed on the family registration card"
    ],
    "exclusions": [
      "Central government employees and civil defense personnel covered under CGHS/ECHS"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mz-shc-card",
        "name": "MSHCS Beneficiary Card / Enrolment Receipt",
        "category": "other",
        "purpose": "Verify active policy membership and family listing",
        "citizenTip": "Renewed annually through Village Council.",
        "isMandatory": true
      },
      {
        "id": "doc-mz-shc-aadhaar",
        "name": "Aadhaar Card and Voter ID (EPIC)",
        "category": "identity",
        "purpose": "Identity validation during hospital admission",
        "citizenTip": "Carry original ID during hospital admission.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Enrol at Village Council or District Medical Office",
        "description": "Submit family details and nominal annual fee during the annual open enrollment campaign.",
        "portalOrOffice": "Village Council / Chief Medical Officer (CMO) Office"
      },
      {
        "stepNumber": 2,
        "title": "Card Issuance & Digital Activation",
        "description": "Mizoram State Health Care Society issues official MSHCS family identity card.",
        "portalOrOffice": "MSHCS Society"
      },
      {
        "stepNumber": 3,
        "title": "Avail Treatment / Claim Reimbursement",
        "description": "Avail cashless care at empaneled hospitals or submit reimbursement claims with referral proof for outside hospitals.",
        "portalOrOffice": "Empaneled Hospital / CMO Office"
      }
    ],
    "officialSource": {
      "name": "Mizoram State Health Care Society (MSHCS)",
      "url": "https://health.mizoram.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department, Mizoram",
      "helpline": "0389-2315082",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official portal of Mizoram State Health Care Society."
    }
  },
  {
    "id": "mz-pmay-g-state-topup",
    "name": "Mizoram Rural Housing Top-Up Scheme (Disaster-Resilient Hill Housing Grant)",
    "hindiName": "मिज़ोरम ग्रामीण आवास टॉप-अप योजना (आपदा-रोधी पहाड़ी आवास अनुदान)",
    "teluguName": "మిజోరం గ్రామీణ హౌసింగ్ టాప్-అప్ పథకం",
    "tamilName": "மிஸோரம் ஊரக வீட்டுவசதி டாப்-அப் திட்டம்",
    "tagline": "Additional ₹50,000 state grant to PMAY-G beneficiaries to build earthquake and landslide-resilient hill homes.",
    "category": "housing",
    "categoryLabel": "Housing & Urban Planning",
    "geographicScope": "State Scheme (Mizoram)",
    "stateApplicability": "Mizoram",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MZ",
    "administeringGovernment": "Government of Mizoram",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Houseless Rural Families in Mizoram",
      "PMAY-G Sanctioned Households",
      "Vulnerable Hill Dwellers"
    ],
    "shortSummary": "State financial top-up granting an extra ₹50,000 directly to rural PMAY-G beneficiaries to offset high transportation costs of construction materials in steep Himalayan terrain and reinforce slope foundations.",
    "fullDescription": "Constructing houses in mountainous Mizoram is exceptionally expensive due to steep slope grading, heavy monsoons, and high haulage costs of cement and steel. The Mizoram Rural Housing Top-Up Scheme provides an additional ₹50,000 direct grant from state revenue to every rural family sanctioned under PMAY-G, ensuring they can afford seismic-resistant reinforced concrete retaining walls and tin roofing.",
    "financialBenefit": "₹50,000 direct cash grant added to PMAY-G assistance (Total ~₹1.80 Lakh)",
    "keyObjectives": [
      "Bridge the construction cost gap caused by difficult terrain and high transportation freight in Mizoram",
      "Ensure all new rural houses have reinforced slope foundations and disaster-resilient roofs",
      "Achieve 100% pucca housing saturation across all rural blocks"
    ],
    "eligibilityRules": {
      "stateResidence": "Mizoram",
      "notes": "Rural resident of Mizoram holding a verified sanction order under Pradhan Mantri Awaas Yojana - Gramin (PMAY-G)."
    },
    "eligibilityHighlights": [
      "Permanent resident of rural Mizoram",
      "Sanctioned beneficiary under PMAY-G in AwaasSoft database",
      "House construction must be on approved hillside plot with stable slope"
    ],
    "exclusions": [
      "Urban residents or beneficiaries possessing permanent multi-story pucca homes"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mz-pmt-sanction",
        "name": "PMAY-G Sanction Order & Registration ID",
        "category": "other",
        "purpose": "Verify central PMAY-G allocation",
        "citizenTip": "Check ID on rhreporting.nic.in.",
        "isMandatory": true
      },
      {
        "id": "doc-mz-pmt-bank",
        "name": "Aadhaar-Linked Bank Account Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer credit",
        "citizenTip": "Must match PMAY-G receiving bank account.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Automatic Integration with PMAY-G List",
        "description": "Block Development Officer (BDO) maps PMAY-G beneficiaries to the state top-up portal.",
        "portalOrOffice": "BDO Office"
      },
      {
        "stepNumber": 2,
        "title": "Plinth Level Geo-Tagging Verification",
        "description": "Panchayat/Block engineer inspects and geo-tags the plinth and slope foundation construction.",
        "portalOrOffice": "AwaasApp Verification"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit of ₹50,000 Top-Up",
        "description": "State government credits ₹50,000 directly into the beneficiary bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Rural Development Department, Government of Mizoram",
      "url": "https://rd.mizoram.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Rural Development Department",
      "helpline": "0389-2322511",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official housing welfare portal of Mizoram Rural Development Department."
    }
  },
  {
    "id": "mz-handloom-artisan-support",
    "name": "Mizoram Handloom & Puan Promotion Scheme (Traditional Weavers Subsidy & Equipment)",
    "hindiName": "मिज़ोरम हथकरघा एवं पुआन संवर्धन योजना (पारंपरिक बुनकर सब्सिडी)",
    "teluguName": "మిజోరం చేనేత & పువాన్ ప్రోత్సాహక పథకం",
    "tamilName": "மிஸோரம் கைத்தறி & புவான் ஊக்குவிப்புத் திட்டம்",
    "tagline": "100% subsidized frame looms, 50% subsidized yarn, and marketing support for traditional Puan weavers.",
    "category": "artisans",
    "categoryLabel": "Artisans & Traditional Crafts",
    "geographicScope": "State Scheme (Mizoram)",
    "stateApplicability": "Mizoram",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MZ",
    "administeringGovernment": "Government of Mizoram",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Mizo Women Weavers",
      "Handloom Artisans & Cooperative Societies",
      "Youth Weaving Entrepreneurs"
    ],
    "shortSummary": "Preserves Mizoram GI-tagged handloom heritage (Puanchei, Ngotekherh, Hmaram, Tawlhlohpuan) by providing free modern frame looms, subsidized quality yarn, and direct buyback through ZOHANDCO emporiums.",
    "fullDescription": "Weaving traditional Puan is an integral part of Mizo cultural identity and female livelihood. The Department of Commerce & Industries provides registered women weavers with free modern improved frame looms (replacing traditional loin looms), 50% subsidized dyed yarn banks, design improvement training, and marketing linkages through Mizoram Handloom & Handicrafts Development Corporation (ZOHANDCO).",
    "financialBenefit": "100% free improved frame loom (worth ₹15,000) + 50% subsidized yarn + marketing support",
    "keyObjectives": [
      "Preserve and promote 5 GI-tagged traditional Mizo Puans globally",
      "Increase production speed and ergonomic comfort for female weavers",
      "Provide guaranteed fair-trade buyback through government emporiums"
    ],
    "eligibilityRules": {
      "occupations": [
        "Weaver",
        "Handloom Artisan"
      ],
      "stateResidence": "Mizoram",
      "notes": "Resident woman weaver of Mizoram practicing traditional handloom weaving."
    },
    "eligibilityHighlights": [
      "Permanent resident / indigenous woman of Mizoram",
      "Registered with District Industries Centre (DIC) as an active weaver",
      "Skilled in weaving traditional Mizo Puan varieties"
    ],
    "exclusions": [
      "Commercial industrial synthetic fabric importers"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mz-hps-card",
        "name": "Weaver Identity Card / DIC Registration",
        "category": "other",
        "purpose": "Verify genuine handloom weaver credentials",
        "citizenTip": "Issued by General Manager, District Industries Centre.",
        "isMandatory": true
      },
      {
        "id": "doc-mz-hps-aadhaar",
        "name": "Aadhaar Card and Domicile Certificate",
        "category": "identity",
        "purpose": "Identity and residency validation",
        "citizenTip": "Carry original ID for physical verification.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply through District Industries Centre (DIC)",
        "description": "Submit weaver application at local District Industries Centre (DIC) in Aizawl, Lunglei, Champhai, etc.",
        "portalOrOffice": "District DIC Office"
      },
      {
        "stepNumber": 2,
        "title": "Inspection by Handloom Officer",
        "description": "Handloom extension officer inspects home loom setup and verifies weaving skill.",
        "portalOrOffice": "Artisan Workshop"
      },
      {
        "stepNumber": 3,
        "title": "Loom Handover & Subsidized Yarn Passbook",
        "description": "Beneficiary receives improved frame loom kit and subsidized yarn procurement passbook.",
        "portalOrOffice": "ZOHANDCO / DIC Depot"
      }
    ],
    "officialSource": {
      "name": "Department of Commerce & Industries, Government of Mizoram",
      "url": "https://industries.mizoram.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Commerce & Industries Department",
      "helpline": "0389-2322237",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official handloom and craft portal of Mizoram."
    }
  },
  {
    "id": "mz-youth-skilling-employment",
    "name": "Mizoram Youth Commission Career Guidance & Coaching Scheme (MYC Civil Services Sponsorship)",
    "hindiName": "मिज़ोरम युवा आयोग करियर मार्गदर्शन एवं कोचिंग योजना",
    "teluguName": "మిజోరం యూత్ కమిషన్ కెరీర్ గైడెన్స్ పథకం",
    "tamilName": "மிஸோரம் இளைஞர் ஆணைய தொழில் வழிகாட்டுதல் திட்டம்",
    "tagline": "100% free professional coaching in Delhi/Aizawl + ₹10,000/month living stipend for UPSC civil services aspirants.",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Mizoram)",
    "stateApplicability": "Mizoram",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "MZ",
    "administeringGovernment": "Government of Mizoram",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "UPSC / MPSC Aspirants",
      "Meritorious Mizo Graduates",
      "Youths Pursuing Professional Technical Careers"
    ],
    "shortSummary": "Premier state scholarship sponsoring brilliant Mizo students for UPSC coaching at top academies in New Delhi and Aizawl, covering 100% tuition fees, hostel boarding, and providing ₹10,000 monthly stipends.",
    "fullDescription": "The Mizoram Youth Commission (MYC) identifies and grooms outstanding young Mizo graduates for competitive national administrative careers. Selected through an annual statewide screening test, students receive full tuition sponsorship at premier UPSC coaching institutions in Old Rajinder Nagar / Mukherjee Nagar, New Delhi, accompanied by a ₹10,000 monthly living allowance to ensure undivided focus on civil services preparation.",
    "financialBenefit": "100% coaching fees (up to ₹2 Lakh) + ₹10,000 / month living stipend for 10-12 months",
    "keyObjectives": [
      "Increase the number of Mizo youths qualifying for IAS, IPS, IFS, and central allied services",
      "Eliminate financial barriers that prevent talented tribal graduates from moving to national coaching hubs",
      "Provide structured mentoring by serving civil servants from the state"
    ],
    "eligibilityRules": {
      "minAge": 21,
      "maxAge": 35,
      "stateResidence": "Mizoram",
      "notes": "Permanent resident of Mizoram holding a recognized university graduate degree, selected through MYC screening entrance exam."
    },
    "eligibilityHighlights": [
      "Permanent resident / indigenous Mizo citizen",
      "Completed graduation in any discipline from a recognized university",
      "Cleared competitive screening examination conducted by Mizoram Youth Commission"
    ],
    "exclusions": [
      "Candidates already holding full-time permanent government employment"
    ],
    "requiredDocuments": [
      {
        "id": "doc-mz-myc-degree",
        "name": "Graduation Degree Certificate & Marksheets",
        "category": "academic",
        "purpose": "Verify minimum educational qualification",
        "citizenTip": "Original certificates needed during interview.",
        "isMandatory": true
      },
      {
        "id": "doc-mz-myc-domicile",
        "name": "Mizoram Domicile / ST Certificate",
        "category": "caste",
        "purpose": "Proof of state residency",
        "citizenTip": "Issued by Deputy Commissioner.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on MYC Portal",
        "description": "Submit application for Civil Services Coaching Sponsorship on myc.mizoram.gov.in.",
        "portalOrOffice": "myc.mizoram.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Screening Test and Personal Interview",
        "description": "Appear for statewide preliminary aptitude exam followed by interview in Aizawl.",
        "portalOrOffice": "Mizoram Youth Commission, Aizawl"
      },
      {
        "stepNumber": 3,
        "title": "Academy Admission & Monthly Stipend Release",
        "description": "Enrol in partner Delhi coaching academy; monthly living stipend of ₹10,000 is credited via DBT.",
        "portalOrOffice": "Empaneled Coaching Institute / DBT"
      }
    ],
    "officialSource": {
      "name": "Mizoram Youth Commission (MYC), Government of Mizoram",
      "url": "https://myc.mizoram.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Mizoram Youth Commission",
      "helpline": "0389-2334057",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official portal of the Mizoram Youth Commission."
    }
  },
  {
    "id": "nl-cmhis-health-insurance",
    "name": "Chief Minister Health Insurance Scheme (CMHIS Nagaland Universal Cashless Health Cover)",
    "hindiName": "मुख्यमंत्री स्वास्थ्य बीमा योजना (नागालैंड सार्वभौमिक स्वास्थ्य सुरक्षा)",
    "teluguName": "ముఖ్యమంత్రి హెల్త్ ఇన్సూరెన్స్ పథకం (నాగాలాండ్)",
    "tamilName": "முதலமைச்சர் சுகாதார காப்பீட்டுத் திட்டம் (நாகாலாந்து)",
    "tagline": "Universal cashless medical coverage of ₹5 Lakh per family per year in 200+ empaneled hospitals across India.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Nagaland)",
    "stateApplicability": "Nagaland",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "NL",
    "administeringGovernment": "Government of Nagaland",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "All Indigenous Inhabitant Families of Nagaland",
      "Permanent Resident Certificate (PRC) Holders",
      "State Government Employees and Pensioners"
    ],
    "shortSummary": "Universal health assurance scheme covering 100% of Nagaland population with ₹5 Lakh cashless hospitalization annually for General citizens (and up to ₹20 Lakh for state employees/pensioners) in premier hospitals across Nagaland, Assam, and metro cities.",
    "fullDescription": "CMHIS ensures that no citizen in Nagaland is denied quality healthcare due to poverty or remoteness. Divided into CMHIS (General) and CMHIS (Employees/Pensioners), the scheme provides ₹5,00,000 cashless tertiary cover per family annually for ordinary citizens. It operates seamlessly across Christian Institute of Health Sciences & Research (CIHSR) Dimapur, Naga Hospital Authority Kohima (NHAK), and premier referral hospitals in Guwahati, Kolkata, and New Delhi.",
    "financialBenefit": "₹5,00,000 / family / year cashless hospitalization coverage (up to ₹20 Lakh for employees)",
    "keyObjectives": [
      "Provide 100% universal healthcare protection for all citizens of Nagaland without income limits",
      "Shield tribal families from crippling medical debts when seeking tertiary care outside the state",
      "Provide seamless cashless admission with zero paperwork at hospital helpdesks"
    ],
    "eligibilityRules": {
      "stateResidence": "Nagaland",
      "notes": "All indigenous inhabitants of Nagaland holding an Indigenous Inhabitant Certificate (IIC), or permanent residents holding valid PRC."
    },
    "eligibilityHighlights": [
      "Holder of Indigenous Inhabitant of Nagaland Certificate (IIC), or",
      "Permanent Resident Certificate (PRC) issued prior to notified cutoff",
      "Universal family coverage with no income cap"
    ],
    "exclusions": [
      "Temporary non-resident workers without valid PRC or IIC"
    ],
    "requiredDocuments": [
      {
        "id": "doc-nl-cmh-iic",
        "name": "Indigenous Inhabitant Certificate (IIC) / PRC",
        "category": "caste",
        "purpose": "Verify indigenous Naga status or permanent residency",
        "citizenTip": "Issued by Deputy Commissioner of home district.",
        "isMandatory": true
      },
      {
        "id": "doc-nl-cmh-aadhaar",
        "name": "Aadhaar Card of Family Members",
        "category": "identity",
        "purpose": "Biometric identity during e-KYC",
        "citizenTip": "Aadhaar is mandatory for generating CMHIS digital card.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register Online on CMHIS Portal or at Kiosk",
        "description": "Submit family details and IIC/PRC on cmhis.nagaland.gov.in or at nearest CSC counter.",
        "portalOrOffice": "cmhis.nagaland.gov.in / CSC Kendra"
      },
      {
        "stepNumber": 2,
        "title": "Verification & CMHIS Card Generation",
        "description": "State Health Agency verifies records and generates instant digital CMHIS Ayushman card.",
        "portalOrOffice": "Online Portal"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Hospitalization",
        "description": "Present card at Arogya Mitra counter in empaneled hospital for cashless admission and care up to ₹5 Lakh.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "Nagaland Health Protection Society (NHPS)",
      "url": "https://cmhis.nagaland.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Health & Family Welfare, Nagaland",
      "helpline": "1800-345-3644 / 104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official CMHIS portal of Government of Nagaland."
    }
  },
  {
    "id": "nl-cmmfi-microfinance",
    "name": "Chief Minister Micro Finance Initiative (CMMFI Nagaland Agri & Entrepreneurship Credit)",
    "hindiName": "मुख्यमंत्री सूक्ष्म वित्त पहल (नागालैंड कृषि एवं उद्यमिता ऋण सहायता)",
    "teluguName": "ముఖ్యమంత్రి మైక్రో ఫైనాన్స్ ఇనిషియేటివ్ (నాగాలాండ్)",
    "tamilName": "முதலமைச்சர் மைக்ரோ ஃபைனான்ஸ் திட்டம் (நாகாலாந்து)",
    "tagline": "Credit-linked capital subsidies up to ₹15 Lakh for farmers, SHGs, and youth entrepreneurs at subsidized bank interest.",
    "category": "business",
    "categoryLabel": "Business & Micro-Credit",
    "geographicScope": "State Scheme (Nagaland)",
    "stateApplicability": "Nagaland",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "NL",
    "administeringGovernment": "Government of Nagaland",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Individual Farmers & Agripreneurs",
      "Self Help Groups (SHGs) & Joint Liability Groups",
      "Youth Startups and Village Enterprises"
    ],
    "shortSummary": "Flagship financial inclusion program unlocking bank credit for agriculture and rural micro-enterprises with 30% state capital subsidy (up to ₹4.5 Lakh), 10% farmer margin, and 60% bank loan with state interest subvention.",
    "fullDescription": "The Chief Minister Micro Finance Initiative (CMMFI) solves the chronic lack of institutional credit in Nagaland. Partnering with major banks (SBI, Nagaland Rural Bank, Apex Bank), the scheme finances coffee and cardamom plantations, piggery farms, cold chain mini-units, eco-tourism homestays, and handicraft units. The state provides a 30% capital subsidy, 4% interest subvention for 3 years, and covers loan processing and stamp fees.",
    "financialBenefit": "30% capital subsidy (up to ₹4.5 Lakh) + 4% interest subvention on bank loans up to ₹15 Lakh",
    "keyObjectives": [
      "Increase the credit-deposit (CD) ratio and institutional lending in Nagaland",
      "Foster micro-enterprises in organic farming, animal husbandry, and rural tourism",
      "Provide credit access to SHGs, FPOs, and youth entrepreneurs with low collateral"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "maxAge": 55,
      "stateResidence": "Nagaland",
      "notes": "Indigenous inhabitant of Nagaland aged 18 to 55 with an active bank account in good standing, proposing a viable project in agriculture, allied, or service sectors."
    },
    "eligibilityHighlights": [
      "Indigenous inhabitant / permanent resident of Nagaland",
      "Individual farmer, registered SHG, Joint Liability Group, or FPO",
      "Project cost up to ₹15 Lakh in notified agro-allied or micro-enterprise categories"
    ],
    "exclusions": [
      "Willful defaulters with any commercial or cooperative financial institution"
    ],
    "requiredDocuments": [
      {
        "id": "doc-nl-cmm-dpr",
        "name": "Detailed Project Report (DPR) & Budget Estimate",
        "category": "other",
        "purpose": "Technical and financial appraisal of enterprise",
        "citizenTip": "Can be prepared with assistance from District Agriculture / Industries Officer.",
        "isMandatory": true
      },
      {
        "id": "doc-nl-cmm-iic",
        "name": "Indigenous Inhabitant Certificate (IIC) & Aadhaar",
        "category": "caste",
        "purpose": "Proof of indigenous status and identity",
        "citizenTip": "Issued by Deputy Commissioner.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on CMMFI Portal or at DC Office",
        "description": "Submit project proposal on cmmfi.nagaland.gov.in or through the District Level Implementation Committee (DLIC).",
        "portalOrOffice": "cmmfi.nagaland.gov.in / DC Office"
      },
      {
        "stepNumber": 2,
        "title": "DLIC Screening and Bank Recommendation",
        "description": "DLIC headed by Deputy Commissioner screens project and forwards sanctioned files to partner banks.",
        "portalOrOffice": "Deputy Commissioner Office"
      },
      {
        "stepNumber": 3,
        "title": "Loan Disbursal & Capital Subsidy Credit",
        "description": "Bank disburses project loan; state government releases 30% capital subsidy directly into loan account.",
        "portalOrOffice": "Partner Bank Branch"
      }
    ],
    "officialSource": {
      "name": "Department of Finance, Government of Nagaland",
      "url": "https://cmmfi.nagaland.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Finance Department",
      "helpline": "0370-2270036",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official CMMFI microfinance portal of Nagaland."
    }
  },
  {
    "id": "nl-state-disability-grant",
    "name": "Nagaland State Disability Welfare Grant (Monthly Maintenance & Assistive Devices)",
    "hindiName": "नागालैंड राज्य दिव्यांग कल्याण अनुदान (मासिक भरण-पोषण एवं सहायक उपकरण)",
    "teluguName": "నాగాలాండ్ స్టేట్ డిసేబిలిటీ వెల్ఫేర్ గ్రాంట్",
    "tamilName": "நாகாலாந்து மாநில மாற்றுத்திறனாளிகள் நல மானியம்",
    "tagline": "Monthly financial maintenance allowance of ₹1,000 to ₹1,500 + free assistive hearing and mobility aids for PwD.",
    "category": "disability-pwd",
    "categoryLabel": "Disability & Inclusion",
    "geographicScope": "State Scheme (Nagaland)",
    "stateApplicability": "Nagaland",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "NL",
    "administeringGovernment": "Government of Nagaland",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Persons with Disabilities (PwD) in Nagaland",
      "Visually and Hearing Impaired Citizens",
      "Caregivers of Severe Disability Patients"
    ],
    "shortSummary": "Dedicated social welfare grant providing ₹1,000 to ₹1,500 monthly subsistence allowance directly via DBT to persons with benchmark disabilities across all 16 districts of Nagaland, alongside free tricycles and hearing aids.",
    "fullDescription": "The Social Welfare Department in Nagaland operates this assistance scheme to ensure financial security and social integration for persons with disabilities. Beneficiaries holding a verified UDID card or disability certificate of 40% and above receive monthly financial maintenance support credited directly to their bank accounts, alongside free motorized tricycles, braille kits, and assistive prosthetics.",
    "financialBenefit": "₹1,000 to ₹1,500 / month direct benefit transfer + free specialized assistive mobility aids",
    "keyObjectives": [
      "Provide basic financial autonomy to persons with disabilities living in remote hill villages",
      "Facilitate mobility through free wheelchairs, motorized tricycles, and hearing aids",
      "Promote inclusive education and vocational rehabilitation"
    ],
    "eligibilityRules": {
      "minDisabilityPercentage": 40,
      "requiresUDID": true,
      "stateResidence": "Nagaland",
      "notes": "Indigenous inhabitant or permanent resident of Nagaland possessing certified disability of 40% or above / UDID card."
    },
    "eligibilityHighlights": [
      "Resident of Nagaland holding Indigenous Inhabitant Certificate",
      "Possesses valid UDID card or certificate from District Medical Board (40%+ disability)",
      "Not receiving any other regular government employment or pension"
    ],
    "exclusions": [
      "Permanent government employees"
    ],
    "requiredDocuments": [
      {
        "id": "doc-nl-dis-udid",
        "name": "UDID Card / Disability Certificate",
        "category": "disability",
        "purpose": "Verify disability category and percentage",
        "citizenTip": "Check UDID on swavlambancard.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-nl-dis-iic",
        "name": "Indigenous Inhabitant Certificate & Aadhaar",
        "category": "caste",
        "purpose": "Verify indigenous domicile and identity",
        "citizenTip": "Issued by Deputy Commissioner.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply through District Welfare Officer (DWO)",
        "description": "Submit application along with UDID card to District Welfare Officer in your district.",
        "portalOrOffice": "District Welfare Office"
      },
      {
        "stepNumber": 2,
        "title": "Medical Board Verification",
        "description": "District Medical Board verifies disability assessment and approves eligibility.",
        "portalOrOffice": "District Hospital / DWO Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Disbursement & Aid Distribution",
        "description": "Allowance is credited monthly to bank account; assistive aids are distributed at district welfare camps.",
        "portalOrOffice": "Direct Benefit Transfer / Camp"
      }
    ],
    "officialSource": {
      "name": "Department of Social Welfare, Government of Nagaland",
      "url": "https://socialwelfare.nagaland.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Welfare Department",
      "helpline": "0370-2270036",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official disability welfare portal of Government of Nagaland."
    }
  },
  {
    "id": "nl-old-age-social-pension",
    "name": "Nagaland State Old Age Pension Scheme (NSOAPS Tribal Elders Social Security)",
    "hindiName": "नागालैंड राज्य वृद्धावस्था पेंशन योजना (जनजातीय बुजुर्ग सामाजिक सुरक्षा)",
    "teluguName": "నాగాలాండ్ ఓల్డ్ ఏజ్ పెన్షన్ పథకం",
    "tamilName": "நாகாலாந்து முதியோர் ஓய்வூதியத் திட்டம்",
    "tagline": "Monthly social security pension of ₹1,000 for senior citizens aged 60 and above in tribal villages.",
    "category": "seniors-elderly",
    "categoryLabel": "Pensions & Social Security",
    "geographicScope": "State Scheme (Nagaland)",
    "stateApplicability": "Nagaland",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "NL",
    "administeringGovernment": "Government of Nagaland",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "senior",
    "beneficiaries": [
      "Senior Citizens aged 60 and above",
      "Elderly Tribal Men and Women",
      "Destitute Rural Elders"
    ],
    "shortSummary": "Universal old age social safety net transferring ₹1,000 monthly directly via DBT into the bank accounts of over 55,000 senior citizens across rural and urban Nagaland, ensuring dignity in their twilight years.",
    "fullDescription": "The Nagaland State Old Age Pension Scheme provides monthly sustenance to elderly tribal citizens who have no formal pension or family breadwinner. Handled by the Social Welfare Department in coordination with village Gaonburahs, the pension of ₹1,000 per month is directly credited into the senior citizen Aadhaar-linked bank account, shielding them from poverty and neglect.",
    "financialBenefit": "₹1,000 / month (₹12,000 per year) credited directly via DBT",
    "keyObjectives": [
      "Provide basic financial dignity and social security to elderly tribal citizens across Nagaland",
      "Shield vulnerable senior citizens from poverty, neglect, and medical destitution",
      "Ensure 100% digital benefit delivery directly into bank accounts"
    ],
    "eligibilityRules": {
      "minAge": 60,
      "stateResidence": "Nagaland",
      "notes": "Indigenous resident of Nagaland aged 60 years or above, holding verified birth/age proof or Gaonburah age certification."
    },
    "eligibilityHighlights": [
      "Indigenous inhabitant of Nagaland aged 60 years or above",
      "Age verified by Village Gaonburah / Church certificate / Aadhaar",
      "Not receiving any other regular government or civil pension"
    ],
    "exclusions": [
      "Retired government servants receiving civil or military pensions"
    ],
    "requiredDocuments": [
      {
        "id": "doc-nl-oap-age",
        "name": "Age Proof (Aadhaar / Voter ID / Church Baptism Certificate / GB Certificate)",
        "category": "identity",
        "purpose": "Verify age 60+ status",
        "citizenTip": "Gaonburah certification is accepted for rural elders without formal birth records.",
        "isMandatory": true
      },
      {
        "id": "doc-nl-oap-bank",
        "name": "Aadhaar-Linked Bank Account Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer credit destination",
        "citizenTip": "Check with bank that direct credit is active.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application to Village Gaonburah / DWO Office",
        "description": "Submit form endorsed by village Gaonburah to local District Welfare Officer.",
        "portalOrOffice": "Village Council / DWO Office"
      },
      {
        "stepNumber": 2,
        "title": "Verification and Sanction Order",
        "description": "Department of Social Welfare verifies records and issues pension sanction number.",
        "portalOrOffice": "DWO Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Disbursement",
        "description": "₹1,000 is credited directly into the senior citizen bank account every month.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Social Welfare, Government of Nagaland",
      "url": "https://socialwelfare.nagaland.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Welfare Department",
      "helpline": "0370-2270036",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official social security pension portal of Nagaland."
    }
  },
  {
    "id": "nl-agri-allied-shg-mission",
    "name": "Nagaland Agri-Allied Women SHG Mission (Community Seed Banks & Organic Spice Grants)",
    "hindiName": "नागालैंड कृषि-संबद्ध महिला स्वयं सहायता मिशन (सामुदायिक बीज बैंक एवं जैविक मसाला अनुदान)",
    "teluguName": "నాగాలాండ్ మహిళా ఎస్‌హెచ్‌జి వ్యవసాయ మిషన్",
    "tamilName": "நாகாலாந்து மகளிர் சுயஉதவிக்குழு வேளாண் இயக்கம்",
    "tagline": "Capital grants up to ₹2 Lakh for women SHGs establishing organic cardamom, Naga Mircha, and coffee nurseries.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Nagaland)",
    "stateApplicability": "Nagaland",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "NL",
    "administeringGovernment": "Government of Nagaland",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Women Self Help Groups (SHGs)",
      "Organic Spices and Cardamom Cultivators",
      "Naga Chilli (Raja Mircha) Growers"
    ],
    "shortSummary": "Empowers rural women collectives across Nagaland with financial grants up to ₹2,00,000 per SHG to establish community seed banks, solar drying sheds, and nursery propagation for high-value GI-tagged Naga Mircha and large cardamom.",
    "fullDescription": "Under the Nagaland State Rural Livelihoods Mission (NSRLM) and Department of Agriculture, this scheme promotes female leadership in organic spices and cash crop farming. Women SHGs receive capital grants of ₹1,00,000 to ₹2,00,000 to purchase modern solar tunnel dryers, construct organic seed banks, and propagate organic large cardamom, ginger, and GI-tagged Naga King Chilli (Raja Mircha), multiplying collective household earnings.",
    "financialBenefit": "Direct financial grant of ₹1,00,000 to ₹2,00,000 per women SHG",
    "keyObjectives": [
      "Promote women-led organic spice value chains (Naga Mircha, Cardamom, Ginger)",
      "Construct hygienic solar drying and packaging facilities to reduce post-harvest spoilage",
      "Provide collective marketing linkages through the Nagaland Organic brand"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Nagaland",
      "notes": "Registered women SHG in Nagaland with active engagement in agro-allied, horticulture, or organic spices cultivation."
    },
    "eligibilityHighlights": [
      "Women SHG registered with Nagaland State Rural Livelihoods Mission (NSRLM)",
      "Active savings bank account with at least 6 months regular transactions",
      "Land availability for community nursery or solar drying unit"
    ],
    "exclusions": [
      "Individual non-farming entities without group structure"
    ],
    "requiredDocuments": [
      {
        "id": "doc-nl-ash-reg",
        "name": "SHG Registration Certificate & Resolution",
        "category": "other",
        "purpose": "Verify SHG status under NSRLM",
        "citizenTip": "Issued by Block Program Manager (BPM).",
        "isMandatory": true
      },
      {
        "id": "doc-nl-ash-bank",
        "name": "Joint Savings Bank Account Passbook",
        "category": "bank",
        "purpose": "Grant transfer destination",
        "citizenTip": "Must have active mobile alerts enabled.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Proposal to Block Program Manager (NSRLM)",
        "description": "Submit project proposal for spice nursery or solar dryer through local NSRLM coordinator.",
        "portalOrOffice": "Block Mission Management Unit (BMMU)"
      },
      {
        "stepNumber": 2,
        "title": "Field Verification by Agriculture Officer",
        "description": "Agriculture inspector verifies crop plan, nursery land suitability, and group cohesion.",
        "portalOrOffice": "Village Nursery Site"
      },
      {
        "stepNumber": 3,
        "title": "Direct Grant Disbursement",
        "description": "Grant of ₹1 Lakh to ₹2 Lakh is credited directly into the SHG bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Agriculture & NSRLM, Government of Nagaland",
      "url": "https://agriculture.nagaland.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Agriculture / NSRLM",
      "helpline": "0370-2270036",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official agro-allied livelihoods portal of Nagaland."
    }
  },
  {
    "id": "sk-aama-yojana",
    "name": "Aama Yojana (Sikkim Direct Annual Financial Transfer for Non-Working Mothers)",
    "hindiName": "आमा योजना (सिक्किम गैर-कामकाजी माताओं के लिए प्रत्यक्ष वित्तीय सहायता)",
    "teluguName": "ఆమా పథకం (సిక్కిం)",
    "tamilName": "ஆமா திட்டம் (சிக்கிம்)",
    "tagline": "Annual direct financial grant of ₹40,000 transferred in two ₹20,000 installments to non-working rural mothers.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Sikkim)",
    "stateApplicability": "Sikkim",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "SK",
    "administeringGovernment": "Government of Sikkim",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Non-Working Mothers across Sikkim",
      "Rural Homemakers",
      "Low & Middle-Income Mothers"
    ],
    "shortSummary": "Revolutionary women welfare initiative transferring ₹40,000 annually (₹20,000 biannually) directly via DBT into the personal bank accounts of non-working mothers across Sikkim to support child care, health, and family nutrition.",
    "fullDescription": "Recognizing the immense unpaid domestic labor of mothers, the Government of Sikkim launched the Aama Yojana to provide financial autonomy to stay-at-home mothers. All non-working mothers residing in Sikkim holding a Sikkim Subject Certificate or Certificate of Identification (COI) receive ₹40,000 per year directly in their bank accounts in two equal ₹20,000 installments, completely free of middleman commissions.",
    "financialBenefit": "₹40,000 / year direct benefit transfer credited into mother bank account in two installments",
    "keyObjectives": [
      "Recognize and financially reward the unpaid household and caregiving work of mothers",
      "Foster women financial independence and savings habits across rural and urban Sikkim",
      "Improve nutritional and educational investments in children"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Sikkim",
      "notes": "Mother residing in Sikkim holding Sikkim Subject Certificate / Certificate of Identification (COI) or residential certificate, not engaged in formal salaried employment."
    },
    "eligibilityHighlights": [
      "Mother residing in Sikkim possessing Sikkim Subject Certificate / COI",
      "Must be unemployed / non-working in formal government or private sector",
      "Personal bank account in State Bank of Sikkim or nationalized bank with Aadhaar seeding"
    ],
    "exclusions": [
      "Mothers who are regular government servants or formal corporate employees",
      "Income tax paying mothers"
    ],
    "requiredDocuments": [
      {
        "id": "doc-sk-aam-coi",
        "name": "Certificate of Identification (COI) / Sikkim Subject Certificate",
        "category": "caste",
        "purpose": "Verify indigenous Sikkim domicile",
        "citizenTip": "Issued by District Collector.",
        "isMandatory": true
      },
      {
        "id": "doc-sk-aam-unemp",
        "name": "Declaration of Non-Employment",
        "category": "other",
        "purpose": "Certify non-working homemaker status",
        "citizenTip": "Attested by local Panchayat President or Ward Councillor.",
        "isMandatory": true
      },
      {
        "id": "doc-sk-aam-bank",
        "name": "Bank Passbook (State Bank of Sikkim / Commercial Bank)",
        "category": "bank",
        "purpose": "Direct benefit transfer credit destination",
        "citizenTip": "Account must be in mother sole name.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply through Gram Panchayat / Urban Ward Office",
        "description": "Submit Aama Yojana application along with COI and bank passbook to local Gram Panchayat Unit (GPU).",
        "portalOrOffice": "Gram Panchayat Unit / Ward Office"
      },
      {
        "stepNumber": 2,
        "title": "Verification by Women & Child Development Department",
        "description": "Child Development Project Officer (CDPO) verifies non-working status and bank details.",
        "portalOrOffice": "CDPO Office"
      },
      {
        "stepNumber": 3,
        "title": "Biannual DBT Disbursement",
        "description": "₹40,000 annual grant is credited in two installments of ₹20,000 directly into the mother bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Women & Child Development, Government of Sikkim",
      "url": "https://sikkim.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Women & Child Development Department",
      "helpline": "03592-202206",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Aama Yojana portal of Government of Sikkim."
    }
  },
  {
    "id": "sk-vatsalya-yojana",
    "name": "Vatsalya Scheme (Sikkim Financial Grant for Childless Couples IVF Treatment)",
    "hindiName": "वात्सल्य योजना (सिक्किम निःसंतान दंपतियों के लिए आईवीएफ उपचार अनुदान)",
    "teluguName": "వాత్సల్య పథకం (సిక్కిం)",
    "tamilName": "வாத்ஸல்யா திட்டம் (சிக்கிம்)",
    "tagline": "Direct financial assistance of ₹3 Lakh for childless indigenous couples undergoing IVF fertility treatments.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Sikkim)",
    "stateApplicability": "Sikkim",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "SK",
    "administeringGovernment": "Government of Sikkim",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "parent",
    "beneficiaries": [
      "Childless Indigenous Couples in Sikkim",
      "Couples Undergoing In-Vitro Fertilization (IVF)",
      "Families with Fertility Challenges"
    ],
    "shortSummary": "Groundbreaking demographic support policy providing ₹3,00,000 direct financial grant to childless couples holding Sikkim Subject / COI to undergo In-Vitro Fertilization (IVF) treatment, addressing declining fertility rates.",
    "fullDescription": "To address the declining fertility rate among indigenous communities in Sikkim, the Vatsalya Scheme provides ₹3 Lakh financial assistance to childless couples undergoing IVF treatment. Disbursed in two installments (₹1.5 Lakh upon medical initiation and ₹1.5 Lakh upon embryo transfer), the grant enables couples to access advanced reproductive technologies at empaneled fertility hospitals without catastrophic financial strain.",
    "financialBenefit": "₹3,00,000 direct financial assistance for IVF fertility treatments in two installments",
    "keyObjectives": [
      "Address the declining total fertility rate (TFR) across indigenous communities in Sikkim",
      "Provide financial support to lower and middle-income couples facing expensive IVF treatment costs",
      "Ensure high standards of reproductive healthcare across empaneled fertility clinics"
    ],
    "eligibilityRules": {
      "stateResidence": "Sikkim",
      "notes": "Childless legally married couple holding Sikkim Subject Certificate / Certificate of Identification (COI) undergoing medically certified IVF treatment."
    },
    "eligibilityHighlights": [
      "Couple holding valid Sikkim Subject Certificate / Certificate of Identification (COI)",
      "Legally married for at least 3 years without surviving children",
      "Medical certification from registered fertility specialist confirming requirement of IVF"
    ],
    "exclusions": [
      "Couples who already have surviving biological or adopted children"
    ],
    "requiredDocuments": [
      {
        "id": "doc-sk-vat-coi",
        "name": "Certificate of Identification (COI) of Husband & Wife",
        "category": "caste",
        "purpose": "Verify indigenous Sikkim domicile",
        "citizenTip": "Both spouses COI/Sikkim Subject copies required.",
        "isMandatory": true
      },
      {
        "id": "doc-sk-vat-medical",
        "name": "Medical Specialist IVF Recommendation & Treatment Estimate",
        "category": "medical",
        "purpose": "Clinical certification of infertility and treatment plan",
        "citizenTip": "Issued by recognized IVF centre / STNM Hospital.",
        "isMandatory": true
      },
      {
        "id": "doc-sk-vat-marriage",
        "name": "Marriage Certificate",
        "category": "identity",
        "purpose": "Proof of legal marriage",
        "citizenTip": "Civil marriage registration certificate.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application to Health & Family Welfare Department",
        "description": "Submit Vatsalya application along with medical fertility report to Health Secretariat, Gangtok.",
        "portalOrOffice": "Health & Family Welfare Department, Gangtok"
      },
      {
        "stepNumber": 2,
        "title": "State Medical Committee Approval",
        "description": "State Medical Committee reviews clinical case files and issues sanction order.",
        "portalOrOffice": "Health Secretariat"
      },
      {
        "stepNumber": 3,
        "title": "Two-Stage Grant Disbursal",
        "description": "₹1.5 Lakh is released upon cycle initiation, and ₹1.5 Lakh is released upon embryo transfer stage directly to bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Health & Family Welfare, Government of Sikkim",
      "url": "https://sikkim.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department",
      "helpline": "03592-202206",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official fertility welfare portal of Government of Sikkim."
    }
  },
  {
    "id": "sk-sikkim-garib-awas-yojana",
    "name": "Sikkim Garib Awas Yojana (SGAY Fully-Equipped Modern Rural Pucca Homes)",
    "hindiName": "सिक्किम गरीब आवास योजना (एसजीएवाई आधुनिक सर्वसुविधायुक्त पक्का आवास)",
    "teluguName": "సిక్కిం గరీబ్ ఆవాస్ పథకం (SGAY)",
    "tamilName": "சிக்கிம் கரீப் ஆவாஸ் திட்டம் (SGAY)",
    "tagline": "Complete modern 1-story pucca house worth ₹17.5 Lakh including furniture and TV provided 100% free to poor families.",
    "category": "housing",
    "categoryLabel": "Housing & Urban Planning",
    "geographicScope": "State Scheme (Sikkim)",
    "stateApplicability": "Sikkim",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "SK",
    "administeringGovernment": "Government of Sikkim",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Houseless Rural Families",
      "Kutcha / Dilapidated Mud House Dwellers",
      "Vulnerable Indigenous Families in Sikkim"
    ],
    "shortSummary": "India most generous state housing program constructing a fully finished modern single-story RCC house (living room, 2 bedrooms, kitchen, toilet) worth ₹17.5 Lakh, complete with basic furniture and TV, handed over 100% free to poor families.",
    "fullDescription": "The Sikkim Garib Awas Yojana (SGAY) sets a national benchmark for dignified public housing. Constructed entirely by the Rural Development Department, each earthquake-resistant home features high-quality RCC framing, double-pitched roofing, tiled flooring, modular electrical fittings, and comes pre-equipped with essential furniture (sofa set, double bed, dining table) and a 32-inch LED TV, ensuring poor rural families instantly transition into modern dignified living.",
    "financialBenefit": "Fully constructed, furnished RCC modern house worth ₹17,50,000 handed over 100% free",
    "keyObjectives": [
      "Eliminate all kutcha and unsafe dwellings across rural Sikkim",
      "Provide fully furnished, earthquake-resistant permanent RCC homes to the poorest families",
      "Ensure zero financial burden or debt on the beneficiary family"
    ],
    "eligibilityRules": {
      "stateResidence": "Sikkim",
      "notes": "Permanent resident of rural Sikkim possessing Certificate of Identification (COI) / Sikkim Subject Certificate who does not own a pucca house anywhere."
    },
    "eligibilityHighlights": [
      "Permanent resident of Sikkim holding COI / Sikkim Subject Certificate",
      "Living in temporary kutcha house or houseless in rural areas",
      "Family must own or possess rights to suitable construction land plot"
    ],
    "exclusions": [
      "Households possessing an existing pucca concrete house or having government employee family members"
    ],
    "requiredDocuments": [
      {
        "id": "doc-sk-sga-coi",
        "name": "Certificate of Identification (COI) / Sikkim Subject Certificate",
        "category": "caste",
        "purpose": "Verify indigenous Sikkim domicile",
        "citizenTip": "Issued by District Collector.",
        "isMandatory": true
      },
      {
        "id": "doc-sk-sga-land",
        "name": "Parcha / Land Ownership Document",
        "category": "land",
        "purpose": "Verify ownership of plot where house will be constructed",
        "citizenTip": "Check land records with Sub-Divisional Magistrate.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Gram Sabha Selection & Survey",
        "description": "Eligible houseless families are identified and prioritized by the local Gram Sabha.",
        "portalOrOffice": "Gram Panchayat Unit (GPU)"
      },
      {
        "stepNumber": 2,
        "title": "Technical Feasibility & Soil Inspection",
        "description": "Rural Development Department engineers inspect slope stability and prepare construction drawings.",
        "portalOrOffice": "Block Rural Development Centre (BAC)"
      },
      {
        "stepNumber": 3,
        "title": "Departmental Construction & Key Handover",
        "description": "Government executes complete construction and hands over keys to the fully furnished home.",
        "portalOrOffice": "New Home Handover Ceremony"
      }
    ],
    "officialSource": {
      "name": "Rural Development Department, Government of Sikkim",
      "url": "https://rdd.sikkim.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Rural Development Department",
      "helpline": "03592-202206",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official housing welfare portal of Government of Sikkim."
    }
  },
  {
    "id": "sk-swasthya-bima-yojana",
    "name": "Mukhya Mantri Swasthya Bima Yojana (Sikkim Universal Cashless Health Cover)",
    "hindiName": "मुख्यमंत्री स्वास्थ्य बीमा योजना (सिक्किम सार्वभौमिक कैशलेस स्वास्थ्य सुरक्षा)",
    "teluguName": "ముఖ్యమంత్రి స్వాస్థ్య బీమా పథకం (సిక్కిం)",
    "tamilName": "முதலமைச்சர் சுவாஸ்திய பீமா திட்டம் (சிக்கிம்)",
    "tagline": "Universal cashless medical hospitalization cover up to ₹5 Lakh per family per year in empaneled hospitals.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Sikkim)",
    "stateApplicability": "Sikkim",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "SK",
    "administeringGovernment": "Government of Sikkim",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "All Resident Families of Sikkim",
      "State Government Contractual Workers",
      "Senior Citizens in Hill Districts"
    ],
    "shortSummary": "Universal health assurance providing ₹5 Lakh cashless hospitalization annually for secondary and tertiary care in government hospitals (STNM Hospital Gangtok) and premier referral hospitals in Siliguri, Kolkata, and Delhi.",
    "fullDescription": "The Mukhya Mantri Swasthya Bima Yojana guarantees universal health security across all six districts of Sikkim. Complementing Ayushman Bharat, it covers all left-out families holding COI or residential certificates. Patients receive cashless surgeries, oncology treatments, dialysis, and ICU care at STNM Hospital Gangtok, CRH Tadong, and empaneled multi-specialty hospitals in Siliguri and Kolkata.",
    "financialBenefit": "₹5,00,000 / family / year cashless hospitalization coverage",
    "keyObjectives": [
      "Provide 100% universal healthcare coverage across Sikkim with zero co-payment",
      "Shield families from catastrophic debts when referred to hospitals in Siliguri or Kolkata",
      "Ensure seamless cashless pre-authorization through digital health cards"
    ],
    "eligibilityRules": {
      "stateResidence": "Sikkim",
      "notes": "All permanent resident families in Sikkim holding Certificate of Identification (COI) / Sikkim Subject Certificate or state residential card."
    },
    "eligibilityHighlights": [
      "Permanent resident family in Sikkim",
      "Holding valid COI / Sikkim Subject Certificate or state residential proof",
      "Universal coverage with zero income ceilings"
    ],
    "exclusions": [
      "Serving Central Government permanent employees covered under CGHS"
    ],
    "requiredDocuments": [
      {
        "id": "doc-sk-msb-coi",
        "name": "Certificate of Identification (COI) / Residential Certificate",
        "category": "caste",
        "purpose": "Verify Sikkim residency",
        "citizenTip": "Issued by District Collector / SDM.",
        "isMandatory": true
      },
      {
        "id": "doc-sk-msb-aadhaar",
        "name": "Aadhaar Card of Family Members",
        "category": "identity",
        "purpose": "Biometric identity for health card generation",
        "citizenTip": "Aadhaar e-KYC is mandatory.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Enrol at District Hospital or CSC Counter",
        "description": "Submit family details and COI at nearest CSC or STNM Hospital helpdesk.",
        "portalOrOffice": "STNM Hospital Gangtok / CSC"
      },
      {
        "stepNumber": 2,
        "title": "Health Card Issuance",
        "description": "Biometrics are verified and digital health card is generated.",
        "portalOrOffice": "Health Kiosk"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Admission & Treatment",
        "description": "Show card at hospital Arogya Mitra desk for cashless admission, surgery, and medications.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "Department of Health & Family Welfare, Government of Sikkim",
      "url": "https://sikkim.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department",
      "helpline": "104 / 03592-202206",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official health insurance portal of Government of Sikkim."
    }
  },
  {
    "id": "sk-krishi-atmanirbhar-pashupalan",
    "name": "Sikkim Milk Production Incentive Scheme (₹8/Liter Direct Subsidy for Dairy Farmers)",
    "hindiName": "सिक्किम दुग्ध उत्पादन प्रोत्साहन योजना (डेयरी किसानों के लिए ₹८/लीटर प्रत्यक्ष अनुदान)",
    "teluguName": "సిక్కిం పాల ఉత్పత్తి ప్రోత్సాహక పథకం",
    "tamilName": "சிக்கிம் பால் உற்பத்தி ஊக்குவிப்புத் திட்டம்",
    "tagline": "Direct benefit transfer of ₹8 per liter of milk supplied to cooperative societies, paid directly to dairy farmers.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Sikkim)",
    "stateApplicability": "Sikkim",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "SK",
    "administeringGovernment": "Government of Sikkim",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Dairy Farmers in Sikkim",
      "Members of Village Milk Producer Cooperative Societies",
      "Livestock Rearers in Hill Hamlets"
    ],
    "shortSummary": "India highest direct milk production subsidy transferring ₹8 per liter directly into the bank accounts of over 15,000 dairy farmers supplying milk to village cooperative societies, over and above the base milk procurement price.",
    "fullDescription": "Under the Mukhya Mantri Krishi Atmanirbhar Pashupalan scheme, Sikkim provides an unprecedented ₹8 per liter direct cash incentive on cow milk. In addition to the base price paid by the Sikkim Cooperative Milk Producers Union (Sikkim Milk Union), the Animal Husbandry Department deposits ₹8 per liter directly into the farmer personal bank account via DBT, dramatically boosting dairy incomes and rural self-sufficiency.",
    "financialBenefit": "₹8 / liter direct cash incentive paid via DBT directly to dairy farmer bank accounts",
    "keyObjectives": [
      "Incentivize commercial dairy farming and bovine husbandry in mountain terrain",
      "Increase statewide milk procurement to achieve self-sufficiency in dairy products",
      "Ensure direct, transparent digital payment to dairy farmers without middleman deductions"
    ],
    "eligibilityRules": {
      "occupations": [
        "Dairy Farmer",
        "Livestock Rearer"
      ],
      "stateResidence": "Sikkim",
      "notes": "Resident dairy farmer of Sikkim enrolled as an active member of a registered Village Milk Producer Cooperative Society (MPCS)."
    },
    "eligibilityHighlights": [
      "Permanent resident of Sikkim rearing milch cattle",
      "Active member pouring milk into a registered village MPCS under Sikkim Milk Union",
      "Aadhaar-seeded bank account in a scheduled commercial bank or State Bank of Sikkim"
    ],
    "exclusions": [
      "Commercial bulk traders selling outside organized cooperative networks"
    ],
    "requiredDocuments": [
      {
        "id": "doc-sk-mpi-mpcs",
        "name": "Village MPCS Membership Passbook / Pourer ID",
        "category": "other",
        "purpose": "Verify active milk supply and fat/SNF records",
        "citizenTip": "Issued by local Village Milk Producer Cooperative Society.",
        "isMandatory": true
      },
      {
        "id": "doc-sk-mpi-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer receiving account",
        "citizenTip": "Check with bank that direct credit is active.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register with Village Milk Producer Cooperative Society (MPCS)",
        "description": "Register milch cattle and bank account details with local village MPCS.",
        "portalOrOffice": "Village MPCS Center"
      },
      {
        "stepNumber": 2,
        "title": "Daily Milk Pouring & Digital Logging",
        "description": "Pour milk daily; electronic tester records quantity, fat, and SNF into centralized system.",
        "portalOrOffice": "Milk Collection Center"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Incentive Credit",
        "description": "Incentive of ₹8 per liter is credited directly into the farmer bank account on a monthly basis.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Animal Husbandry & Veterinary Services Department, Sikkim",
      "url": "https://sikkim.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Animal Husbandry & Veterinary Services Department",
      "helpline": "03592-202206",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official dairy incentive initiative of Government of Sikkim."
    }
  },
  {
    "id": "tr-mukhyamantri-matru-pusti-uphaar",
    "name": "Mukhyamantri Matru Pusti Uphaar (Tripura Nutrition Kits for Pregnant & Lactating Mothers)",
    "hindiName": "मुख्यमंत्री मातृ पुष्टि उपहार (त्रिपुरा गर्भवती एवं धात्री माताओं के लिए पोषण किट)",
    "teluguName": "ముఖ్యమంత్రి మాతృ పుష్టి ఉపహార్ (త్రిపుర)",
    "tamilName": "முதலமைச்சர் மாத்ரு புஷ்டி உபஹார் (திரிபுரா)",
    "tagline": "Four free comprehensive nutrition kits containing milk powder, ghee, pulses, and iron supplements for pregnant women.",
    "category": "children-nutrition",
    "categoryLabel": "Children & Family Welfare",
    "geographicScope": "State Scheme (Tripura)",
    "stateApplicability": "Tripura",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "TR",
    "administeringGovernment": "Government of Tripura",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "parent",
    "beneficiaries": [
      "Pregnant Women in Tripura",
      "Lactating Mothers during First 6 Months",
      "Low-Income and Tribal Mothers"
    ],
    "shortSummary": "High-impact nutritional safety net providing 4 free standardized nutrition hampers (milk powder, desi ghee, soya beans, pulses, dates, and iron-folic acid) distributed during antenatal checkups to eradicate maternal anemia and low birth weight.",
    "fullDescription": "To eliminate maternal malnutrition and child stunting across Tripura, the Social Welfare & Social Education Department provides four free nutrition gift baskets worth over ₹2,000 each to pregnant women during periodic Antenatal Care (ANC) visits at Primary Health Centres. The hampers supply essential protein, calcium, and micronutrients during crucial pregnancy trimesters, significantly reducing infant and maternal mortality.",
    "financialBenefit": "4 free comprehensive high-nutrition hampers (worth ₹2,000 each = total ₹8,000 value)",
    "keyObjectives": [
      "Eradicate maternal anemia and severe malnutrition in rural and tribal habitations",
      "Incentivize 100% adherence to all four periodic antenatal checkups (ANC) at health centers",
      "Prevent low birth weight (LBW) and infant stunting across Tripura"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Tripura",
      "notes": "Pregnant woman residing in Tripura registered at the local Anganwadi center and attending scheduled ANC checkups at a government health center."
    },
    "eligibilityHighlights": [
      "Resident pregnant woman in Tripura",
      "Registered at nearest Anganwadi center with Mother and Child Protection (MCP) card",
      "Undergoing scheduled Antenatal Care (ANC) checkups at Primary Health Centre (PHC)"
    ],
    "exclusions": [
      "Women not attending institutional antenatal checkups"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tr-mmp-mcp",
        "name": "Mother and Child Protection (MCP) Card / RCH ID",
        "category": "medical",
        "purpose": "Verify pregnancy registration and scheduled ANC checkup records",
        "citizenTip": "Issued by Auxiliary Nurse Midwife (ANM) / ASHA.",
        "isMandatory": true
      },
      {
        "id": "doc-tr-mmp-aadhaar",
        "name": "Aadhaar Card of Pregnant Woman",
        "category": "identity",
        "purpose": "Identity verification",
        "citizenTip": "Check that name matches MCP card.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register Pregnancy at Local Anganwadi Center",
        "description": "Register pregnancy with village Anganwadi Worker (AWW) or ASHA to receive MCP card.",
        "portalOrOffice": "Anganwadi Center / Sub-Center"
      },
      {
        "stepNumber": 2,
        "title": "Attend Periodic ANC Checkup at PHC",
        "description": "Undergo blood pressure, hemoglobin, and ultrasound checkups at Primary Health Centre during scheduled ANC days.",
        "portalOrOffice": "Primary Health Centre (PHC)"
      },
      {
        "stepNumber": 3,
        "title": "Nutrition Hamper Handover",
        "description": "Receive free sealed Matru Pusti Uphaar nutrition basket immediately following each ANC checkup.",
        "portalOrOffice": "PHC / Anganwadi Desk"
      }
    ],
    "officialSource": {
      "name": "Department of Social Welfare & Social Education, Tripura",
      "url": "https://swse.tripura.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Welfare & Social Education Department",
      "helpline": "0381-2323533",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official maternal nutrition welfare portal of Tripura."
    }
  },
  {
    "id": "tr-kanya-atmanirbhar-yojana",
    "name": "Mukhyamantri Kanya Atmanirbhar Yojana (Tripura Free Laptops for Meritorious Girl Students)",
    "hindiName": "मुख्यमंत्री कन्या आत्मनिर्भर योजना (त्रिपुरा मेधावी छात्राओं के लिए निःशुल्क लैपटॉप)",
    "teluguName": "ముఖ్యమంత్రి కన్యా ఆత్మనిర్భర్ పథకం (త్రిపుర)",
    "tamilName": "முதலமைச்சர் கன்யா ஆத்மநிர்பர் திட்டம் (திரிபுரா)",
    "tagline": "Free high-specification educational laptops or ₹20,000 cash grant for meritorious Class 12 passed girl students.",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Tripura)",
    "stateApplicability": "Tripura",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "TR",
    "administeringGovernment": "Government of Tripura",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "Class 12 Passed Meritorious Girls",
      "Girls Enrolled in Higher Education / Degree Colleges",
      "Rural and Tribal Female Students"
    ],
    "shortSummary": "Digital empowerment program rewarding meritorious female students clearing Class 12 board examinations with free laptops or direct grants of ₹20,000 to purchase computers, bridging the gender digital divide in higher education.",
    "fullDescription": "The Mukhyamantri Kanya Atmanirbhar Yojana supports ambitious girl students across Tripura transitioning into university education. Meritorious girl students passing the Tripura Board of Secondary Education (TBSE) Class 12 Higher Secondary examinations receive a brand-new branded laptop computer or ₹20,000 direct bank transfer to acquire digital computing devices, enabling access to online lectures, research, and technical certifications.",
    "financialBenefit": "Brand-new laptop computer (worth ~₹25,000) or ₹20,000 direct cash grant via DBT",
    "keyObjectives": [
      "Bridge the digital divide for female students entering college and university education",
      "Incentivize high academic performance in Class 12 board examinations",
      "Equip young women with digital tools for coding, competitive exam preparation, and remote learning"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Tripura",
      "notes": "Girl student who is a permanent resident of Tripura, passed Class 12 Higher Secondary from TBSE with first division, and enrolled in a recognized degree college."
    },
    "eligibilityHighlights": [
      "Permanent resident / domicile of Tripura",
      "Passed Class 12 HS examination from Tripura Board of Secondary Education (TBSE)",
      "Admitted into recognized degree college or technical university"
    ],
    "exclusions": [
      "Students passing from non-recognized private unaccredited boards"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tr-mka-marks",
        "name": "TBSE Class 12 Marksheet & Admit Card",
        "category": "academic",
        "purpose": "Verify board exam marks and roll number",
        "citizenTip": "Original marksheet scan.",
        "isMandatory": true
      },
      {
        "id": "doc-tr-mka-admission",
        "name": "College Admission Receipt / Identity Card",
        "category": "academic",
        "purpose": "Proof of continuing higher education",
        "citizenTip": "Issued by college authority.",
        "isMandatory": true
      },
      {
        "id": "doc-tr-mka-aadhaar",
        "name": "Aadhaar Card and Permanent Resident Certificate (PRTC)",
        "category": "identity",
        "purpose": "Proof of Tripura residency and identity",
        "citizenTip": "Issued by Sub-Divisional Magistrate (SDM).",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply Online on Higher Education Portal",
        "description": "Submit application along with Class 12 marksheet and college admission receipt on highereducation.tripura.gov.in.",
        "portalOrOffice": "highereducation.tripura.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "College Nodal Verification",
        "description": "College principal verifies student enrollment and forwards recommendation to Directorate of Higher Education.",
        "portalOrOffice": "College Administration"
      },
      {
        "stepNumber": 3,
        "title": "Laptop Handover Ceremony / DBT Credit",
        "description": "Receive brand-new laptop at district distribution event or ₹20,000 credit directly in bank account.",
        "portalOrOffice": "District Event / DBT"
      }
    ],
    "officialSource": {
      "name": "Directorate of Higher Education, Government of Tripura",
      "url": "https://highereducation.tripura.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Higher Education Department",
      "helpline": "0381-2325357",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official laptop incentive portal of Tripura Higher Education Directorate."
    }
  },
  {
    "id": "tr-shramik-kalyan-prakalpa",
    "name": "Mukhyamantri Cha Sramik Kalyan Prakalpa (Tripura Tea Garden Workers Comprehensive Welfare)",
    "hindiName": "मुख्यमंत्री चा श्रमिक कल्याण प्रकल्प (त्रिपुरा चाय बागान श्रमिक समग्र कल्याण)",
    "teluguName": "ముఖ్యమంత్రి టీ శ్రామిక్ కళ్యాణ్ ప్రకల్ప (త్రిపుర)",
    "tamilName": "முதலமைச்சர் தேயிலை தொழிலாளர் நலத் திட்டம் (திரிபுரா)",
    "tagline": "All-inclusive welfare: free pucca housing, piped drinking water, ration cards, and social security for 7,000+ tea workers.",
    "category": "workers-social-security",
    "categoryLabel": "Pensions & Social Security",
    "geographicScope": "State Scheme (Tripura)",
    "stateApplicability": "Tripura",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "TR",
    "administeringGovernment": "Government of Tripura",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Tea Garden Workers in Tripura",
      "Families across 54 Tea Estates",
      "Female Tea Pluckers"
    ],
    "shortSummary": "Comprehensive ₹85 Crore rehabilitation mission uplifting over 7,000 tea garden workers across 54 estates in Tripura with free land ownership (patta), pucca houses, piped tap water, electricity, and health insurance.",
    "fullDescription": "Tea garden laborers are among the most marginalized communities in Tripura. The Mukhyamantri Cha Sramik Kalyan Prakalpa consolidates 15 central and state welfare programs to provide a complete socio-economic safety net. Beneficiaries receive allotment of homestead land (land patta), a permanent pucca house under PMAY, tap water under Jal Jeevan Mission, Ayushman health cover, priority ration cards, and educational scholarships for children.",
    "financialBenefit": "Homestead land patta + free pucca house + 100% free piped water and subsidized food grains",
    "keyObjectives": [
      "Provide permanent legal land ownership (patta) and pucca houses to tea garden laborer families",
      "Ensure 100% access to treated piped drinking water and electricity in tea estate worker lines",
      "Provide comprehensive social security, maternity benefits, and children educational stipends"
    ],
    "eligibilityRules": {
      "occupations": [
        "Tea Garden Worker",
        "Plantation Laborer"
      ],
      "stateResidence": "Tripura",
      "notes": "Registered tea garden worker or dependent family member residing in any of the 54 recognized tea estates in Tripura."
    },
    "eligibilityHighlights": [
      "Worker employed in a registered tea estate in Tripura",
      "Possesses Tea Board / Tea Estate worker identity card",
      "Residing within tea estate worker settlements (labour lines)"
    ],
    "exclusions": [
      "Management staff and commercial estate owners"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tr-csk-worker",
        "name": "Tea Estate Worker Identity Card / Estate Muster Roll Entry",
        "category": "other",
        "purpose": "Verify tea plantation worker employment",
        "citizenTip": "Signed by tea estate manager or Labour Officer.",
        "isMandatory": true
      },
      {
        "id": "doc-tr-csk-aadhaar",
        "name": "Aadhaar Card and Ration Card",
        "category": "identity",
        "purpose": "Identity and family verification",
        "citizenTip": "Check details with local Labour Inspector.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Enumeration by District Labour Officer (DLO)",
        "description": "Labour department conducts survey of workers across all 54 tea estates in Tripura.",
        "portalOrOffice": "Tea Estate Labour Office"
      },
      {
        "stepNumber": 2,
        "title": "Land Patta & Housing Sanction Handover",
        "description": "District administration allocates homestead land patta and issues pucca house construction order.",
        "portalOrOffice": "Collectorate / Block Development Office"
      },
      {
        "stepNumber": 3,
        "title": "Socio-Economic Saturation Delivery",
        "description": "Family receives tap water connection, Ayushman health card, and schooling allowances for children.",
        "portalOrOffice": "Tea Garden Worker Colony"
      }
    ],
    "officialSource": {
      "name": "Labour Department, Government of Tripura",
      "url": "https://labour.tripura.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Labour Department",
      "helpline": "0381-2323533",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official portal of the Tripura Labour Department for tea garden welfare."
    }
  },
  {
    "id": "tr-disability-pension-scheme",
    "name": "Tripura Social Security Disability Pension (Divyangjan Monthly Subsistence Support)",
    "hindiName": "त्रिपुरा सामाजिक सुरक्षा दिव्यांग पेंशन योजना (दिव्यांगजन मासिक भरण-पोषण सहायता)",
    "teluguName": "త్రిపుర డిసేబిలిటీ పెన్షన్ పథకం",
    "tamilName": "திரிபுரா மாற்றுத்திறனாளிகள் ஓய்வூதியத் திட்டம்",
    "tagline": "Monthly financial subsistence pension of ₹2,000 directly via DBT for Persons with Disabilities (PwD).",
    "category": "disability-pwd",
    "categoryLabel": "Disability & Inclusion",
    "geographicScope": "State Scheme (Tripura)",
    "stateApplicability": "Tripura",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "TR",
    "administeringGovernment": "Government of Tripura",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Persons with Disabilities (PwD)",
      "Visually, Speech, and Locomotor Impaired Citizens",
      "Caregivers of Severe Disability Patients"
    ],
    "shortSummary": "Comprehensive disability social security pension providing ₹2,000 per month (₹24,000 annually) directly via DBT into the bank accounts of persons with 40%+ benchmark disabilities across Tripura.",
    "fullDescription": "The Social Welfare & Social Education Department in Tripura ensures persons with disabilities receive continuous monthly financial support. Beneficiaries holding a verified UDID card or disability certificate of 40% and above receive ₹2,000 monthly subsistence allowance directly in their Aadhaar-linked bank accounts, guaranteeing economic survival and dignity with zero middleman deductions.",
    "financialBenefit": "₹2,00,000 per decade or ₹2,000 / month (₹24,000 annually) direct benefit transfer",
    "keyObjectives": [
      "Provide predictable monthly financial independence to persons with disabilities across Tripura",
      "Shield differently-abled citizens from poverty and nutritional neglect",
      "Ensure 100% digital benefit delivery through automated Aadhaar DBT"
    ],
    "eligibilityRules": {
      "minDisabilityPercentage": 40,
      "requiresUDID": true,
      "stateResidence": "Tripura",
      "notes": "Permanent resident of Tripura possessing certified disability of 40% or above / UDID card with family annual income under ₹1 Lakh."
    },
    "eligibilityHighlights": [
      "Permanent resident / PRTC holder of Tripura",
      "Disability percentage of 40% or higher verified by Medical Board / UDID card",
      "Annual family income does not exceed ₹1,00,000",
      "Not receiving any other regular government or EPF pension"
    ],
    "exclusions": [
      "Government employees or pensioners"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tr-dsp-udid",
        "name": "UDID Card / Disability Certificate",
        "category": "disability",
        "purpose": "Verify disability percentage and category",
        "citizenTip": "Check UDID on swavlambancard.gov.in.",
        "isMandatory": true
      },
      {
        "id": "doc-tr-dsp-income",
        "name": "Income Certificate (Family income < ₹1 Lakh/year)",
        "category": "income",
        "purpose": "Income ceiling compliance",
        "citizenTip": "Issued by Deputy Collector & Magistrate (DCM).",
        "isMandatory": true
      },
      {
        "id": "doc-tr-dsp-bank",
        "name": "Aadhaar-Linked Bank Account Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer credit destination",
        "citizenTip": "Account must have active mobile alerts enabled.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply through CDPO Office or at e-District Kiosk",
        "description": "Submit application along with UDID card to local Child Development Project Officer (CDPO) or e-District portal.",
        "portalOrOffice": "Block CDPO Office / edistrict.tripura.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Medical & Income Scrutiny",
        "description": "CDPO verifies disability credentials against UDID database and checks income limit.",
        "portalOrOffice": "CDPO Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Disbursement",
        "description": "₹2,000 is credited directly into the beneficiary bank account by the 10th of every month.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Social Welfare & Social Education, Tripura",
      "url": "https://swse.tripura.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Welfare & Social Education Department",
      "helpline": "0381-2323533",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official social security disability pension portal of Tripura."
    }
  },
  {
    "id": "tr-tripura-bamboo-mission",
    "name": "Tripura Bamboo Mission Artisan Livelihood Scheme (Tools, Training & Machinery Subsidy)",
    "hindiName": "त्रिपुरा बांस मिशन शिल्पकार आजीविका योजना (उपकरण, प्रशिक्षण एवं मशीनरी सब्सिडी)",
    "teluguName": "త్రిపుర వెదురు మిషన్ పథకం",
    "tamilName": "திரிபுரா மூங்கில் இயக்கம் கைவினைஞர் திட்டம்",
    "tagline": "75% subsidized modern bamboo processing machinery, toolkits, and marketing support for traditional bamboo artisans.",
    "category": "artisans",
    "categoryLabel": "Artisans & Traditional Crafts",
    "geographicScope": "State Scheme (Tripura)",
    "stateApplicability": "Tripura",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "TR",
    "administeringGovernment": "Government of Tripura",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Bamboo & Cane Artisans",
      "Traditional Weavers of Bamboo Mats (Chtai)",
      "Handicraft SHGs & Clusters across Tripura"
    ],
    "shortSummary": "Livelihood transformation program providing modern electric splitting machinery, toolkits, design training, and marketing linkages through the Tripura Bamboo Mission (TBM) to empower over 30,000 rural bamboo artisans.",
    "fullDescription": "Tripura accounts for a substantial share of India bamboo diversity and cane craftsmanship. The Tripura Bamboo Mission (TBM) modernizes the traditional bamboo sector by providing artisans with 75% subsidized electric bamboo cross-cutting, splitting, and slivering machinery, free ergonomic toolkits, and structured design training to produce contemporary furniture, incense sticks (agarbatti), and decorative handicrafts, linking artisans directly with national retail markets.",
    "financialBenefit": "75% capital subsidy on bamboo processing machines + free improved toolkits + stipend during training",
    "keyObjectives": [
      "Modernize traditional bamboo handicraft and agarbatti stick manufacturing across Tripura",
      "Increase artisan daily productivity from ₹150/day to ₹500+/day through motorized slivering tools",
      "Provide marketing outlets through Purbasha government handicraft emporiums"
    ],
    "eligibilityRules": {
      "occupations": [
        "Bamboo Artisan",
        "Handicraft Worker",
        "Agarbatti Roller"
      ],
      "stateResidence": "Tripura",
      "notes": "Resident of Tripura practicing traditional bamboo and cane crafts, registered with Tripura Bamboo Mission or District Industries Centre."
    },
    "eligibilityHighlights": [
      "Permanent resident of Tripura practicing bamboo/cane crafts",
      "Registered with local bamboo artisan cluster or SHG under TBM",
      "Aadhaar-seeded bank account for stipend and subsidy"
    ],
    "exclusions": [
      "Commercial bulk timber contractors without artisanal production"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tr-tbm-artisan",
        "name": "Artisan Identity Card / DIC Registration",
        "category": "other",
        "purpose": "Verify authentic bamboo artisan credentials",
        "citizenTip": "Issued by General Manager, District Industries Centre.",
        "isMandatory": true
      },
      {
        "id": "doc-tr-tbm-aadhaar",
        "name": "Aadhaar Card and Bank Passbook",
        "category": "identity",
        "purpose": "Identity and DBT routing",
        "citizenTip": "Ensure name matches bank passbook.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register with Local Bamboo Cluster Facilitator",
        "description": "Register with local cluster facilitator or submit form at District Industries Centre (DIC).",
        "portalOrOffice": "District DIC / Bamboo Mission Office"
      },
      {
        "stepNumber": 2,
        "title": "Skill Upgradation & Machinery Allocation",
        "description": "Complete 15-day design training workshop and receive modern electric slivering machine allocation.",
        "portalOrOffice": "TBM Common Facility Centre"
      },
      {
        "stepNumber": 3,
        "title": "Production and Direct Marketing",
        "description": "Produce high-value handicrafts and sell through TBM collection centers and Purbasha emporiums.",
        "portalOrOffice": "Purbasha Emporium / TBM"
      }
    ],
    "officialSource": {
      "name": "Tripura Bamboo Mission, Department of Industries and Commerce",
      "url": "https://industries.tripura.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Industries and Commerce, Tripura",
      "helpline": "0381-2325357",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official portal of the Tripura Bamboo Mission."
    }
  }
];
