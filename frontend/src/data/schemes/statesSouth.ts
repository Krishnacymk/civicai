import type { Scheme } from "../../types/scheme";

export const SOUTH_STATES_SCHEMES: Scheme[] = [
  {
    "id": "ap-annadata-sukhibhava",
    "name": "Annadata Sukhibhava (Andhra Pradesh Farmer Investment Support)",
    "hindiName": "अन्नदाता सुखीभव (आंध्र प्रदेश)",
    "teluguName": "అన్నదాత సుఖీభవ (ఆంధ్రప్రదేశ్)",
    "tamilName": "அன்னதாதா சுகிபவா (ஆந்திரப் பிரதேசம்)",
    "tagline": "Comprehensive ₹20,000/year farmer investment assistance for AP landowners and CCRC tenant cultivators.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Andhra Pradesh)",
    "stateApplicability": "Andhra Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "stateCode": "AP",
    "administeringGovernment": "Government of Andhra Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "te",
      "ta"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "AP Landowner Farmers",
      "Tenant Cultivators (CCRC)",
      "FRA Cultivators"
    ],
    "shortSummary": "Direct investment support of ₹20,000 annually per farmer household in Andhra Pradesh, combining ₹14,000 from the State Government and ₹6,000 from Central PM-KISAN, distributed in seasonal installments.",
    "fullDescription": "The Annadata Sukhibhava scheme is Andhra Pradesh flagship farmer support program. It provides robust direct investment assistance of ₹20,000 per year directly to bank accounts to purchase seeds, fertilizers, and machinery inputs. Unlike standard central schemes, it officially covers tenant farmers holding Crop Cultivator Rights Cards (CCRC).",
    "financialBenefit": "₹20,000 / year (₹14,000 State Component + ₹6,000 PM-KISAN)",
    "keyObjectives": [
      "Provide substantial ₹20,000 seasonal liquidity to reduce input debt for AP farmers",
      "Extend institutional investment support to tenant farmers and sharecroppers via CCRC cards",
      "Align state disbursements with Kharif and Rabi sowing schedules"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "occupations": [
        "Farmer",
        "Tenant Cultivator with CCRC",
        "Tribal Cultivator"
      ],
      "stateResidence": "Andhra Pradesh",
      "notes": "Must be a resident farmer of Andhra Pradesh. Landowners must have e-Panta land records; tenant farmers must hold valid CCRC agreement."
    },
    "eligibilityHighlights": [
      "Resident farmer families in Andhra Pradesh holding agricultural land or registered CCRC card",
      "Tenant farmers cultivating land under recognized mutual agreements with landowners",
      "Aadhaar-seeded bank account with NPCI mapping is mandatory",
      "Must have completed seasonal e-Crop (e-Panta) digital booking"
    ],
    "exclusions": [
      "Government employees, institutional landholders, and regular pensioners",
      "Income tax payers in preceding financial year",
      "Commercial real estate land conversions without agricultural cultivation"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ap-farmer-aadhaar",
        "name": "Aadhaar Card",
        "category": "identity",
        "purpose": "Identity verification and DBT routing",
        "citizenTip": "Ensure mobile number is linked to Aadhaar for OTP verification.",
        "isMandatory": true
      },
      {
        "id": "doc-ap-pattadar",
        "name": "Pattadar Passbook / 1-B Record or CCRC Card (for Tenants)",
        "category": "land",
        "purpose": "Proof of agricultural landholding or tenant cultivation rights",
        "citizenTip": "CCRC cards can be renewed at your local Grama Sachivalayam (Village Secretariat).",
        "isMandatory": true
      },
      {
        "id": "doc-ap-bank",
        "name": "Bank Passbook (NPCI Mapped)",
        "category": "bank",
        "purpose": "Direct Benefit Transfer credit",
        "citizenTip": "Confirm with your local bank that NPCI Aadhaar seeding is in Active status.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "e-Crop Digital Booking (e-Panta)",
        "description": "Ensure your cultivated crop is recorded by the Village Agriculture Assistant during the seasonal e-Crop survey.",
        "portalOrOffice": "Rythu Seva Kendram (RSK) / Village Secretariat"
      },
      {
        "stepNumber": 2,
        "title": "Check Beneficiary Status on Annadata Sukhibhava Portal",
        "description": "Visit annadathasukhibhava.ap.gov.in and check your Aadhaar in the beneficiary search list.",
        "portalOrOffice": "annadathasukhibhava.ap.gov.in"
      },
      {
        "stepNumber": 3,
        "title": "Resolve Grievances via Village Secretariat",
        "description": "If omitted or facing land mapping errors, submit a grievance at your local Grama Sachivalayam.",
        "portalOrOffice": "Village Agriculture Assistant"
      }
    ],
    "officialSource": {
      "name": "Department of Agriculture, Government of Andhra Pradesh",
      "url": "https://annadathasukhibhava.ap.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Agriculture and Cooperation Department, Govt of AP",
      "helpline": "1902 / 155251",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship AP state farmer program offering ₹20,000/year (including ₹6,000 PM-KISAN)."
    }
  },
  {
    "id": "ap-ntr-bharosa-disability",
    "name": "NTR Bharosa Disability Pension (Andhra Pradesh Social Security Pension)",
    "hindiName": "एनटीआर भरोसा दिव्यांगता पेंशन (आंध्र प्रदेश)",
    "teluguName": "ఎన్టీఆర్ భరోసా దివ్యాంగుల పింఛను (ఆంధ్రప్రదేశ్)",
    "tamilName": "என்டிஆர் பரோசா மாற்றுத்திறனாளி ஓய்வூதியம் (ஆந்திரா)",
    "tagline": "Substantial monthly social security pension of ₹6,000 to ₹15,000 for persons with disabilities in AP.",
    "category": "disability-pwd",
    "categoryLabel": "Persons with Disabilities (PwD)",
    "geographicScope": "State Scheme (Andhra Pradesh)",
    "stateApplicability": "Andhra Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "stateCode": "AP",
    "administeringGovernment": "Government of Andhra Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "te",
      "ta"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Persons with Benchmark Disabilities (40%+)",
      "Severe / Bedridden Disabled (80%+)",
      "Chronic Kidney Disease Dialysis Patients"
    ],
    "shortSummary": "Under G.O.Ms.No.43, Andhra Pradesh provides a monthly pension of ₹6,000 for general PwD (40-79% disability), ₹15,000 for fully disabled/severe/bedridden cases, and ₹10,000 for chronic kidney disease dialysis patients, delivered to doorstep monthly.",
    "fullDescription": "The NTR Bharosa Social Security Pension Scheme (administered by the Society for Elimination of Rural Poverty - SERP, Panchayat Raj & Rural Development Department, Govt of AP) provides the highest state-level disability financial assistance in India. The revised pension rates under G.O.Ms.No.43 provide ₹6,000/month for 40-79% disability, ₹15,000/month for severe/bedridden persons, and ₹10,000/month for dialysis and chronic disease patients.",
    "financialBenefit": "₹6,000/mo (40-79% PwD) | ₹15,000/mo (Severe/Bedridden 80%+) | ₹10,000/mo (Dialysis/CKD)",
    "keyObjectives": [
      "Ensure dignified financial sustenance for persons with physical, sensory, or intellectual disabilities",
      "Provide exceptional monthly support of ₹15,000 for families caring for severe bedridden members",
      "Deliver monthly pension directly at doorstep on the 1st of every month via village/ward volunteers"
    ],
    "eligibilityRules": {
      "minDisabilityPercentage": 40,
      "requiresUDID": true,
      "stateResidence": "Andhra Pradesh",
      "isBPLRequired": true,
      "notes": "Must be a permanent resident of Andhra Pradesh holding a valid SADAREM / UDID disability certificate. Family must have white ration card with income < ₹10,000/mo rural or < ₹12,000/mo urban."
    },
    "eligibilityHighlights": [
      "Resident of Andhra Pradesh with official SADAREM medical assessment board certificate or UDID card",
      "40% to 79% disability qualifies for ₹6,000 per month",
      "80% and above severe disability or bedridden cases qualify for ₹15,000 per month",
      "Patients with chronic kidney disease undergoing regular dialysis qualify for ₹10,000 per month regardless of age",
      "White Ration Card holder (BPL family)"
    ],
    "exclusions": [
      "Families owning four-wheeler vehicles (excluding auto-rickshaws, tractors, taxis)",
      "Government employees or regular government service pensioners",
      "Urban residential built-up property exceeding 1,000 sq.ft"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ap-sadarem",
        "name": "SADAREM Disability Certificate / UDID Card",
        "category": "disability",
        "purpose": "Government medical board assessment of disability percentage and category",
        "citizenTip": "Book an appointment at your local Area/District Government Hospital for SADAREM board evaluation.",
        "isMandatory": true
      },
      {
        "id": "doc-ap-pwd-whitecard",
        "name": "White Rice Card (AP Ration Card)",
        "category": "income",
        "purpose": "Proof of economic category and household composition",
        "citizenTip": "Your name must be listed on the active White Ration card.",
        "isMandatory": true
      },
      {
        "id": "doc-ap-pwd-aadhaar",
        "name": "Aadhaar Card",
        "category": "identity",
        "purpose": "Biometric identification for monthly pension delivery",
        "citizenTip": "Check that Aadhaar biometric details are updated for doorstep authentication.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Obtain SADAREM Medical Assessment",
        "description": "Get assessed by the district medical board and obtain your permanent SADAREM disability certificate.",
        "portalOrOffice": "Government Area / District Hospital"
      },
      {
        "stepNumber": 2,
        "title": "Submit Application at Village/Ward Secretariat",
        "description": "Submit an application at your local Grama / Ward Sachivalayam via the Welfare and Education Assistant.",
        "portalOrOffice": "Grama / Ward Sachivalayam"
      },
      {
        "stepNumber": 3,
        "title": "Field Verification & Doorstep Pension Delivery",
        "description": "Following field verification by MPDO / Municipal Commissioner, pension is sanctioned and delivered monthly to your residence.",
        "portalOrOffice": "sspensions.ap.gov.in / Village Secretariat"
      }
    ],
    "officialSource": {
      "name": "Society for Elimination of Rural Poverty (SERP), PR & RD Dept, Govt of Andhra Pradesh",
      "url": "https://sspensions.ap.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Panchayat Raj and Rural Development Department, Govt of AP",
      "helpline": "1902",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Andhra Pradesh pension portal. Rates verified under G.O.Ms.No.43 (July 2024)."
    }
  },
  {
    "id": "ap-thalliki-vandanam",
    "name": "Thalliki Vandanam Scheme (Andhra Pradesh School Education DBT)",
    "hindiName": "तल्लिकी वंदनम योजना (आंध्र प्रदेश)",
    "teluguName": "తల్లికి వందనం పథకం (ఆంధ్రప్రదేశ్)",
    "tamilName": "தல்லிகி வந்தனம் திட்டம் (ஆந்திரப் பிரதேசம்)",
    "tagline": "₹15,000 per year per school-going child credited directly into mother's bank account.",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Andhra Pradesh)",
    "stateApplicability": "Andhra Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "stateCode": "AP",
    "administeringGovernment": "Government of Andhra Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "te",
      "ta"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "Mothers of School Students",
      "Class 1 to 12 Students",
      "Intermediate Students in AP"
    ],
    "shortSummary": "Under the revised flagship educational initiative of Andhra Pradesh, ₹15,000 annual financial assistance is sanctioned per eligible child studying from Class 1 to 12 (net ₹13,000 deposited via DBT directly into the mother's bank account, with ₹2,000 allocated for school infrastructure/maintenance).",
    "fullDescription": "Thalliki Vandanam is Andhra Pradesh flagship educational support scheme for mothers. The assistance applies per child in the family with no restriction on the number of children. It aims to eliminate child labor, reduce school dropouts, and support mothers in providing uniforms, books, and study aids.",
    "financialBenefit": "₹15,000 / year per eligible child (net ₹13,000 credited to mother via DBT)",
    "keyObjectives": [
      "Empower mothers to finance schooling of their children from Class 1 through Intermediate (Class 12)",
      "Incentivize minimum 75% attendance in recognized government and private schools",
      "Remove family child-count caps to ensure all children in poor households are educated"
    ],
    "eligibilityRules": {
      "minAge": 5,
      "maxAge": 19,
      "stateResidence": "Andhra Pradesh",
      "occupations": [
        "Student (Class 1 to 12 / Intermediate)"
      ],
      "educationLevel": [
        "Class 1-10",
        "Intermediate / Class 11-12"
      ],
      "notes": "Child must maintain minimum 75% attendance. Mother must hold active White Ration Card with family income < ₹10,000/mo (rural) or < ₹12,000/mo (urban)."
    },
    "eligibilityHighlights": [
      "Child studying in Class 1 to 12 (including Junior College / Intermediate) in recognized AP institutions",
      "Minimum 75% school attendance during the academic evaluation window",
      "Assistance credited directly to mother or legal guardian Aadhaar-seeded bank account",
      "White Rice Card holder with monthly family income within prescribed limits"
    ],
    "exclusions": [
      "Households owning four-wheeler vehicles (excluding taxi, tractor, auto)",
      "Government employees, PSU staff, or income tax payers",
      "Electricity consumption exceeding 300 units/month",
      "Landholding exceeding 3 acres wet or 10 acres dry land"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tv-mother-aadhaar",
        "name": "Mother / Guardian Aadhaar Card",
        "category": "identity",
        "purpose": "Identity verification and biometric DBT authentication",
        "citizenTip": "Account must be Aadhaar-seeded with active NPCI mapping in bank.",
        "isMandatory": true
      },
      {
        "id": "doc-tv-child-aadhaar",
        "name": "Child Aadhaar Card & School Student ID (Child Info ID)",
        "category": "identity",
        "purpose": "Mapping student attendance and enrollment record",
        "citizenTip": "Check with your school teacher that your child information is verified on U-DISE.",
        "isMandatory": true
      },
      {
        "id": "doc-tv-whitecard",
        "name": "AP White Rice Card",
        "category": "income",
        "purpose": "Family economic criteria verification",
        "citizenTip": "Both child and mother names must be active on the card.",
        "isMandatory": true
      },
      {
        "id": "doc-tv-bank",
        "name": "Mother Savings Bank Passbook",
        "category": "bank",
        "purpose": "Direct Benefit Transfer credit",
        "citizenTip": "Must not be a dormant or block-listed account.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "School Headmaster Enters Student Record",
        "description": "School principal enters student enrollment and attendance in the Department of School Education database.",
        "portalOrOffice": "School Headmaster / U-DISE"
      },
      {
        "stepNumber": 2,
        "title": "Social Audit List at Village / Ward Secretariat",
        "description": "Eligible beneficiary lists are published at Grama Sachivalayam for social verification and grievance redressal.",
        "portalOrOffice": "Village / Ward Secretariat"
      },
      {
        "stepNumber": 3,
        "title": "Direct Benefit Transfer (DBT)",
        "description": "Financial assistance is credited directly into the mother bank account before the academic year commences.",
        "portalOrOffice": "bm-sgsw.ap.gov.in / AP Govt DBT"
      }
    ],
    "officialSource": {
      "name": "Department of School Education, Government of Andhra Pradesh",
      "url": "https://jaganannaammavodi.ap.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "School Education Department, Govt of AP",
      "helpline": "1902",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship school education assistance program in Andhra Pradesh covering Class 1-12."
    }
  },
  {
    "id": "ap-ntr-aarogyasri",
    "name": "Dr. NTR Aarogyasri Scheme (Andhra Pradesh Universal Health Scheme)",
    "hindiName": "डॉ. एनटीआर आरोग्यश्री योजना (आंध्र प्रदेश)",
    "teluguName": "డాక్టర్ ఎన్టీఆర్ ఆరోగ్యశ్రీ పథకం (ఆంధ్రప్రదేశ్)",
    "tamilName": "டாக்டர் என்டிஆர் ஆரோக்கியஸ்ரீ திட்டம் (ஆந்திரா)",
    "tagline": "Comprehensive cashless health insurance up to ₹25 Lakhs per family per year in empanelled hospitals.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Andhra Pradesh)",
    "stateApplicability": "Andhra Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "stateCode": "AP",
    "administeringGovernment": "Government of Andhra Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "te",
      "ta"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "White Ration Card Holders in AP",
      "Low & Middle Income Families in AP",
      "Chronic Patients"
    ],
    "shortSummary": "Pioneering health insurance scheme of Andhra Pradesh providing free cashless treatment up to an unprecedented ₹25 Lakhs per family per year covering 3,257+ medical and surgical procedures in over 2,200 empanelled network hospitals across AP and major metro cities.",
    "fullDescription": "Dr. NTR Aarogyasri is the flagship healthcare scheme of Andhra Pradesh administered by the Dr. NTR Aarogyasri Health Care Trust. It covers end-to-end medical expenses from consultation, diagnostics, hospitalization, surgery, and post-operative follow-up medications, with dedicated Aarogya Mithras positioned in every hospital to facilitate cashless entry.",
    "financialBenefit": "Up to ₹25,00,000 / family / year cashless treatment covering 3,257+ procedures",
    "keyObjectives": [
      "Provide world-class catastrophic healthcare coverage up to ₹25 Lakhs without financial burden on families",
      "Cover 3,257 high-end medical procedures including organ transplants, cancer treatment, and robotic surgery",
      "Station 24/7 dedicated Aarogya Mithra assistants at hospital front desks to eliminate paperwork for patients"
    ],
    "eligibilityRules": {
      "stateResidence": "Andhra Pradesh",
      "isBPLRequired": true,
      "notes": "Must be a resident of Andhra Pradesh holding a valid White Ration Card (BPL card) or Aarogyasri health card with annual family income up to ₹5 Lakh."
    },
    "eligibilityHighlights": [
      "All families holding an active White Rice Card in Andhra Pradesh",
      "Families whose annual income is less than or equal to ₹5.00 Lakh",
      "Covers 3,257 medical procedures across government and private network hospitals in AP, Hyderabad, Chennai, and Bengaluru",
      "Financial allowance provided during recuperation period (Aarogyasri Aasara)"
    ],
    "exclusions": [
      "Families owning four-wheeler private cars (excluding commercial cabs and tractors)",
      "Regular government employees and state pensioners covered by separate employee health schemes (EHS)",
      "Households possessing more than 12 acres of wetland or 35 acres of dryland"
    ],
    "requiredDocuments": [
      {
        "id": "doc-aarogyasri-card",
        "name": "Aarogyasri Health Card / AP White Rice Card",
        "category": "income",
        "purpose": "Direct verification of family entitlement at network hospital",
        "citizenTip": "Physical card or digital card on citizen mobile app is accepted instantly.",
        "isMandatory": true
      },
      {
        "id": "doc-aarogyasri-aadhaar",
        "name": "Aadhaar Card of the Patient",
        "category": "identity",
        "purpose": "Patient biometric authentication and admission pre-authorization",
        "citizenTip": "Aarogya Mithra will complete pre-authorization within 1 hour of hospital admission.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Check Network Hospital Directory",
        "description": "Search empanelled private and government specialty hospitals on aarogyasri.ap.gov.in.",
        "portalOrOffice": "aarogyasri.ap.gov.in / 104 Helpline"
      },
      {
        "stepNumber": 2,
        "title": "Report to Aarogya Mithra Help Desk",
        "description": "Visit the Aarogya Mithra counter at hospital reception with your White Ration Card or Aadhaar.",
        "portalOrOffice": "Hospital Aarogya Mithra Kiosk"
      },
      {
        "stepNumber": 3,
        "title": "Undergo Cashless Treatment & Discharge Medication",
        "description": "Complete cashless treatment; post-discharge medications and doctor reviews are provided free of cost.",
        "portalOrOffice": "Network Hospital"
      }
    ],
    "officialSource": {
      "name": "Dr. NTR Aarogyasri Health Care Trust, Government of Andhra Pradesh",
      "url": "https://aarogyasri.ap.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health, Medical and Family Welfare Department, Govt of AP",
      "helpline": "104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official AP state health portal. Coverage ceiling enhanced to ₹25 Lakhs per family."
    }
  },
  {
    "id": "ap-deepam-free-lpg",
    "name": "AP Deepam 2.0 (Free LPG Cylinder Scheme - Andhra Pradesh)",
    "hindiName": "आंध्र प्रदेश दीपम 2.0 मुफ्त एलपीजी सिलेंडर योजना",
    "teluguName": "ఆంధ్రప్రదేశ్ దీపం 2.0 ఉచిత గ్యాస్ సిలిండర్ల పథకం",
    "tamilName": "ஆந்திரப் பிரதேசம் தீபம் 2.0 இலவச எரிவாயு சிலிண்டர் திட்டம்",
    "tagline": "Three 100% free domestic LPG cylinder refills per year for BPL White Ration Card holding families under Super Six guarantees.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Andhra Pradesh)",
    "stateApplicability": "Andhra Pradesh",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "AP",
    "administeringGovernment": "Government of Andhra Pradesh",
    "schemeStatus": "active",
    "languages": [
      "en",
      "te"
    ],
    "lifeStage": "parent",
    "beneficiaries": [
      "BPL Households",
      "Rural and Urban Women",
      "Deepam and Ujjwala Gas Beneficiaries"
    ],
    "shortSummary": "Financial reimbursement covering 100% cost of three 14.2 kg domestic LPG refills every year directly deposited into the woman head of household bank account.",
    "fullDescription": "Under the flagship Super Six governance guarantees, the Government of Andhra Pradesh provides three free domestic cooking gas refills every financial year to all eligible households possessing an active Rice Card (White Ration Card), eliminating household pollution and financial stress.",
    "financialBenefit": "3 Free LPG Cylinders per year (DBT subsidy reimbursement of ~₹850-₹890 per cylinder)",
    "keyObjectives": [
      "Provide clean cooking fuel to all low-income households in Andhra Pradesh without financial burden",
      "Protect the health of rural women and children from respiratory ailments caused by firewood and biomass smoke",
      "Deliver prompt 48-hour Direct Benefit Transfer (DBT) subsidy reimbursement after cylinder delivery"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "isBPLRequired": true,
      "stateResidence": "Andhra Pradesh",
      "notes": "Must possess an active Andhra Pradesh Rice Card (White Ration Card) and an active domestic LPG consumer connection linked to Aadhaar."
    },
    "eligibilityHighlights": [
      "Permanent resident of Andhra Pradesh holding an active White Ration Card / Rice Card",
      "Single active domestic LPG connection in the name of the female applicant or family member",
      "Aadhaar-seeded bank account enabled for NPCI Direct Benefit Transfer"
    ],
    "exclusions": [
      "Commercial gas connection holders",
      "Families without active Andhra Pradesh Rice Card / BPL food security status",
      "Regular government and public sector permanent employees"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ap-deepam-rice",
        "name": "Andhra Pradesh Rice Card (White Ration Card)",
        "category": "income",
        "purpose": "Verification of BPL household status and beneficiary mapping",
        "citizenTip": "Check at your local Grama/Ward Sachivalayam that all family member Aadhaar numbers are seeded on the Rice Card.",
        "isMandatory": true
      },
      {
        "id": "doc-ap-deepam-aadhaar",
        "name": "Aadhaar Card of Woman Applicant",
        "category": "identity",
        "purpose": "Biometric identity verification and DBT credit routing",
        "citizenTip": "Ensure your Aadhaar is linked to your active bank account.",
        "isMandatory": true
      },
      {
        "id": "doc-ap-deepam-lpg",
        "name": "Domestic LPG Consumer Passbook / Subscription Voucher",
        "category": "other",
        "purpose": "Verification of consumer ID and oil marketing company linkage (IOCL, BPCL, HPCL)",
        "citizenTip": "Keep your 17-digit LPG ID handy during Sachivalayam mapping.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Book Regular LPG Cylinder with Gas Agency",
        "description": "Book your 14.2 kg refill through IVRS, WhatsApp, or distributor app (Indane, Bharatgas, or HP Gas).",
        "portalOrOffice": "Gas Agency IVRS / App"
      },
      {
        "stepNumber": 2,
        "title": "Pay and Receive Cylinder Delivery",
        "description": "Accept the delivered cylinder and pay the delivery agent. Keep the cash memo and delivery invoice.",
        "portalOrOffice": "Doorstep Delivery"
      },
      {
        "stepNumber": 3,
        "title": "Automated 48-Hour DBT Subsidy Transfer",
        "description": "The state government verifies the delivery electronically with OMC and credits the full subsidy to your bank within 48 hours.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Government of Andhra Pradesh - Civil Supplies Department",
      "url": "https://ap.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Consumer Affairs, Food & Civil Supplies Department",
      "helpline": "1967",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Super Six welfare guarantee administered statewide by Government of Andhra Pradesh."
    }
  },
  {
    "id": "tg-rythu-bharosa",
    "name": "Rythu Bharosa / Rythu Bandhu (Telangana Farmer Investment Support)",
    "hindiName": "रैतु भरोसा (तेलंगाना किसान निवेश सहायता योजना)",
    "teluguName": "రైతు భరోసా / రైతు బంధు (తెలంగాణ)",
    "tamilName": "ரைத்து பரோசா (தெலுங்கானா விவசாய முதலீட்டு உதவி)",
    "tagline": "Direct seasonal crop investment support of ₹10,000 to ₹15,000 per acre per year for Telangana farmers.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "governmentLevel": "state",
    "stateCode": "TG",
    "administeringGovernment": "Government of Telangana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "te"
    ],
    "geographicScope": "State Scheme (Telangana)",
    "stateApplicability": "Telangana",
    "isCentral": false,
    "lifeStage": "worker",
    "beneficiaries": [
      "Landholding Farmers of Telangana",
      "Pattadar Passbook Holders",
      "Rural Farming Households"
    ],
    "shortSummary": "Investment assistance of ₹5,000 to ₹7,500 per acre per crop season transferred directly into farmer bank accounts via DBT ahead of Kharif and Rabi sowing seasons.",
    "fullDescription": "Rythu Bharosa is a flagship agricultural welfare initiative by the Government of Telangana designed to eliminate farmer debt traps caused by private moneylenders. By providing non-refundable financial assistance per acre each season, it enables farmers to purchase high-quality certified seeds, fertilizers, pesticides, and cover field preparation costs without borrowing.",
    "financialBenefit": "₹10,000 to ₹15,000 / acre per year (₹5,000–₹7,500/acre in 2 seasons via DBT)",
    "keyObjectives": [
      "Provide timely liquidity for seeds, fertilizers, and ploughing before each cropping season",
      "Liberate tenant and smallholder farmers from high-interest informal loans",
      "Enhance agricultural productivity and rural income resilience across Telangana"
    ],
    "eligibilityRules": {
      "minAge": 18,
      "occupations": [
        "Farmer",
        "Cultivator",
        "Agriculture Landowner"
      ],
      "stateResidence": "Telangana",
      "notes": "Must own agricultural land registered on the Dharani / Telangana State Land Records portal with a valid digital Pattadar Passbook."
    },
    "eligibilityHighlights": [
      "Resident farmer of Telangana holding agricultural land",
      "Pattadar Passbook issued by Telangana Revenue Department",
      "Bank account seeded with Aadhaar and mapped with NPCI",
      "Land title verified on Dharani portal"
    ],
    "exclusions": [
      "Institutional and corporate landholders",
      "Commercial real estate plots converted from agricultural land",
      "Government employees holding constitutional posts"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tg-farmer-aadhaar",
        "name": "Aadhaar Card of Landowner",
        "category": "identity",
        "purpose": "Identity verification and biometric eKYC authentication",
        "citizenTip": "Check that Aadhaar name exactly matches your Dharani land title.",
        "isMandatory": true
      },
      {
        "id": "doc-tg-pattadar",
        "name": "Telangana Digital Pattadar Passbook (Dharani RoR)",
        "category": "land",
        "purpose": "Proof of cultivable agricultural land title and survey extent",
        "citizenTip": "Download digital copy from dharani.telangana.gov.in using Khata number.",
        "isMandatory": true
      },
      {
        "id": "doc-tg-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Direct Benefit Transfer (DBT) credit destination",
        "citizenTip": "Ensure bank account is in active status with NPCI mapper enabled.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Land Verification on Dharani Portal",
        "description": "Verify your agricultural land parcels and Khata number on the official Dharani land records portal.",
        "portalOrOffice": "dharani.telangana.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Agriculture Extension Officer (AEO) Enrollment",
        "description": "Submit your passbook and Aadhaar details to your local Agriculture Extension Officer (AEO) at the Rythu Vedika.",
        "portalOrOffice": "Local Rythu Vedika / Mandal Agriculture Office"
      },
      {
        "stepNumber": 3,
        "title": "DBT Credit into Bank Account",
        "description": "Following Treasury verification, funds are released directly into your bank account before sowing begins.",
        "portalOrOffice": "Direct Bank Account"
      }
    ],
    "officialSource": {
      "name": "Department of Agriculture, Government of Telangana",
      "url": "https://rythubandhu.telangana.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Agriculture and Cooperation Department",
      "helpline": "040-2338-3520",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Telangana Government agricultural investment portal."
    }
  },
  {
    "id": "tg-aasara-cheyutha-pension",
    "name": "Telangana Aasara / Cheyutha Social Security Pension",
    "hindiName": "तेलंगाना आसरा / चेयुता सामाजिक सुरक्षा पेंशन",
    "teluguName": "తెలంగాణ ఆసరా / చేయూత సామాజిక పింఛన్లు",
    "tamilName": "தெலுங்கானா ஆசரா சமூக பாதுகாப்பு ஓய்வூதியம்",
    "tagline": "Monthly non-contributory pension of ₹2,016 to ₹4,016 for elderly, widows, weavers, and disabled citizens.",
    "category": "pension",
    "categoryLabel": "Senior Citizens",
    "governmentLevel": "state",
    "stateCode": "TG",
    "administeringGovernment": "Government of Telangana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "te"
    ],
    "geographicScope": "State Scheme (Telangana)",
    "stateApplicability": "Telangana",
    "isCentral": false,
    "lifeStage": "senior",
    "beneficiaries": [
      "Senior Citizens (57+)",
      "Widows",
      "Persons with Disabilities (PwD)",
      "Weavers",
      "Toddy Tappers",
      "Beedi Workers"
    ],
    "shortSummary": "Monthly financial assistance of ₹2,016 per month for senior citizens, widows, and artisans, and ₹4,016 per month for persons with disabilities holding Food Security Cards.",
    "fullDescription": "The Aasara / Cheyutha pension scheme is Telangana's premier social safety net to protect vulnerable segments of society from destitution. Administered by the Society for Elimination of Rural Poverty (SERP), it guarantees monthly dignified living support deposited into biometric postal/bank accounts.",
    "financialBenefit": "₹2,016/month (Elderly, Widows, Artisans) | ₹4,016/month (Persons with Disabilities)",
    "keyObjectives": [
      "Provide monthly living assistance to disabled, elderly, and widowed citizens living below the poverty line",
      "Prevent social exclusion and support economic dignity in rural and urban Telangana",
      "Disburse pensions punctually through biometric post office and bank points"
    ],
    "eligibilityRules": {
      "minAge": 57,
      "isBPLRequired": true,
      "minDisabilityPercentage": 40,
      "stateResidence": "Telangana",
      "notes": "Age threshold is 57+ for Old Age Pension; 18+ for Widows and PwD (with ≥40% SADAREM disability certificate). Must hold valid Telangana Food Security Card."
    },
    "eligibilityHighlights": [
      "Resident of Telangana belonging to below-poverty-line household",
      "Valid Food Security Card (FSC / White Ration Card)",
      "Age 57 or above for Old Age Pension; 18+ for Widow Pension",
      "SADAREM certificate showing ≥40% disability for PwD pension"
    ],
    "exclusions": [
      "Persons with family members in regular government service or receiving another government pension",
      "Families owning more than 3 acres of wet land or 7.5 acres of dry land",
      "Income tax assessees"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tg-pension-aadhaar",
        "name": "Aadhaar Card of Applicant",
        "category": "identity",
        "purpose": "Identity, age proof, and biometric DBT linkage",
        "citizenTip": "Ensure date of birth in Aadhaar card matches your birth record or voter ID.",
        "isMandatory": true
      },
      {
        "id": "doc-tg-fsc",
        "name": "Telangana Food Security Card (White Ration Card)",
        "category": "income",
        "purpose": "Proof of Below Poverty Line (BPL) economic eligibility",
        "citizenTip": "Check that applicant name is listed as head or member in the FSC.",
        "isMandatory": true
      },
      {
        "id": "doc-tg-sadarem",
        "name": "SADAREM Disability Certificate (for PwD applicants)",
        "category": "disability",
        "purpose": "Proof of certified disability percentage (minimum 40%)",
        "citizenTip": "Obtain from district medical board camp with valid computerized registration number.",
        "isMandatory": false
      },
      {
        "id": "doc-tg-pension-bank",
        "name": "Aadhaar-Linked Bank / Post Office Account Passbook",
        "category": "bank",
        "purpose": "Monthly pension direct benefit transfer",
        "citizenTip": "Post office savings accounts with Aadhaar micro-ATM access are preferred.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application at MeeSeva / Ward Office",
        "description": "Submit Aasara application at local MeeSeva Centre or Village Gram Panchayat / Municipal Ward Office.",
        "portalOrOffice": "MeeSeva Centre / Gram Panchayat"
      },
      {
        "stepNumber": 2,
        "title": "Verification by Panchayat Secretary / Municipal Commissioner",
        "description": "Field inspection and socioeconomic verification conducted by local revenue and panchayat officials.",
        "portalOrOffice": "Local Administration"
      },
      {
        "stepNumber": 3,
        "title": "Sanction and Monthly Pension Release",
        "description": "District Collector issues sanction order; monthly pension is disbursed via DBT on the 1st week of each month.",
        "portalOrOffice": "Bank / Post Office"
      }
    ],
    "officialSource": {
      "name": "Society for Elimination of Rural Poverty (SERP), Government of Telangana",
      "url": "https://aasara.telangana.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Panchayat Raj & Rural Development Department",
      "helpline": "1800-200-1001",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official Telangana social security pension administration portal."
    }
  },
  {
    "id": "tg-rajiv-aarogyasri",
    "name": "Rajiv Aarogyasri Telangana (Comprehensive Health Care Scheme)",
    "hindiName": "राजीव आरोग्यश्री तेलंगाना स्वास्थ्य योजना",
    "teluguName": "రాజీవ్ ఆరోగ్యశ్రీ తెలంగాణ హెల్త్ కేర్ ట్రస్ట్",
    "tamilName": "ராஜீவ் ஆரோக்கியஸ்ரீ தெலுங்கானா மருத்துவ திட்டம்",
    "tagline": "Cashless hospitalization cover up to ₹10 Lakhs per family per year for 1,672+ medical procedures.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "governmentLevel": "state",
    "stateCode": "TG",
    "administeringGovernment": "Government of Telangana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "te"
    ],
    "geographicScope": "State Scheme (Telangana)",
    "stateApplicability": "Telangana",
    "isCentral": false,
    "lifeStage": "all",
    "beneficiaries": [
      "BPL Families of Telangana",
      "White Food Security Card Holders",
      "Low-Income Patients"
    ],
    "shortSummary": "End-to-end cashless treatment, surgeries, ICU care, diagnostics, and 10 days post-discharge medicines up to ₹10,00,000 per family per year across 1,600+ network hospitals.",
    "fullDescription": "Rajiv Aarogyasri Telangana is a pioneering health protection scheme covering secondary and tertiary ailments for economically vulnerable families. The financial ceiling has been elevated to ₹10 Lakhs per family per year, shielding citizens from catastrophic out-of-pocket medical expenditure for cardiac, cancer, neurological, and renal treatments.",
    "financialBenefit": "Up to ₹10,00,000 (₹10 Lakhs) cashless cover per family / year (1,672+ listed procedures)",
    "keyObjectives": [
      "Provide catastrophic health risk cover to eliminate medical bankruptcy for poor households",
      "Guarantee 100% cashless treatment from outpatient consultation to post-discharge care",
      "Empanel top-tier tertiary government and private hospitals across Telangana"
    ],
    "eligibilityRules": {
      "isBPLRequired": true,
      "stateResidence": "Telangana",
      "notes": "Must be an active White Food Security Card (FSC) holder in Telangana with Aadhaar seeding."
    },
    "eligibilityHighlights": [
      "Possession of active Telangana White Food Security Card (Rice Card)",
      "Patient must be resident citizen of Telangana with Aadhaar",
      "Applicable at all network government and empaneled private hospitals",
      "Zero pre-existing illness exclusion period"
    ],
    "exclusions": [
      "High-income individuals with white cards who pay Income Tax",
      "Unlisted cosmetic and experimental treatments not included in the standard 1,672 treatment packages"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tg-aarogya-fsc",
        "name": "Telangana White Food Security Card (FSC)",
        "category": "identity",
        "purpose": "Proof of scheme enrollment and family beneficiary validation",
        "citizenTip": "Card number is checked instantly at the Aarogyasri hospital kiosk by the Aarogyamithra.",
        "isMandatory": true
      },
      {
        "id": "doc-tg-aarogya-aadhaar",
        "name": "Aadhaar Card of Patient",
        "category": "identity",
        "purpose": "Biometric patient authentication at hospital admission desk",
        "citizenTip": "Keep original Aadhaar handy for biometric fingerprint check upon admission.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Visit Empaneled Network Hospital Kiosk",
        "description": "Approach the Aarogyasri Helpdesk (Aarogyamithra) at any empaneled government or private hospital.",
        "portalOrOffice": "Hospital Aarogyasri Kiosk"
      },
      {
        "stepNumber": 2,
        "title": "Pre-Authorization Submission",
        "description": "The treating physician uploads clinical reports and diagnostic scans for online Trust approval.",
        "portalOrOffice": "Aarogyasri Hospital Portal"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Treatment and Discharge",
        "description": "Upon approval, receive 100% free treatment, surgery, ICU care, diet, and 10 days of post-discharge medications.",
        "portalOrOffice": "Network Hospital"
      }
    ],
    "officialSource": {
      "name": "Aarogyasri Health Care Trust, Government of Telangana",
      "url": "https://aarogyasri.telangana.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health, Medical & Family Welfare Department",
      "helpline": "104",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official health insurance trust portal of Government of Telangana."
    }
  },
  {
    "id": "tg-mahalakshmi-scheme",
    "name": "Telangana Mahalakshmi Scheme (Free Bus Travel & Gas Subsidy)",
    "hindiName": "तेलंगाना महालक्ष्मी योजना (मुफ्त बस यात्रा और ₹500 गैस)",
    "teluguName": "తెలంగాణ మహాలక్ష్మి పథకం (ఉచిత బస్సు ప్రయాణం & ₹500 సిలిండర్)",
    "tamilName": "தெலுங்கானா மகாலட்சுமி திட்டம் (இலவச பேருந்து & சிலிண்டர்)",
    "tagline": "Zero-fare bus travel across Telangana for women and girls, plus ₹500 subsidized domestic LPG cylinder.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "governmentLevel": "state",
    "stateCode": "TG",
    "administeringGovernment": "Government of Telangana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "te"
    ],
    "geographicScope": "State Scheme (Telangana)",
    "stateApplicability": "Telangana",
    "isCentral": false,
    "lifeStage": "parent",
    "beneficiaries": [
      "Women Residents of Telangana",
      "Girl Students",
      "Transgender Persons",
      "Low-Income Households"
    ],
    "shortSummary": "Unlimited 100% free travel in TGSRTC Palle Velugu and Express buses across the state, alongside ₹500 domestic LPG cylinder refills for Food Security Card holders.",
    "fullDescription": "The Mahalakshmi Scheme is a transformative public welfare guarantee by the Government of Telangana ensuring women's mobility and household economic relief. Women and girl students of all ages travel for free within state borders on state-run buses by simply presenting a government ID, while eligible families receive LPG cylinders at ₹500.",
    "financialBenefit": "100% Free State Bus Travel + ₹500 Domestic LPG Cylinder (saving ₹1,500–₹2,500/month)",
    "keyObjectives": [
      "Empower women with free, unrestricted mobility for work, education, and healthcare",
      "Reduce household living costs through subsidized clean cooking gas cylinders at ₹500",
      "Promote gender equity and increase female workforce participation across Telangana"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Telangana",
      "notes": "Free bus travel is universally available to all female and transgender residents of Telangana. LPG cylinder at ₹500 requires active Food Security Card and LPG consumer link."
    },
    "eligibilityHighlights": [
      "Resident woman, girl student, or transgender person of Telangana",
      "Proof of residence via Aadhaar, Voter ID, or Telangana Domicile Certificate",
      "White Food Security Card for ₹500 LPG cylinder benefit",
      "Applicable on all TGSRTC Palle Velugu and Express buses"
    ],
    "exclusions": [
      "Interstate luxury buses like Garuda, Garuda Plus, and AC sleeper coaches for free travel",
      "Commercial LPG consumers"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tg-maha-id",
        "name": "Aadhaar Card or Residential ID Proof",
        "category": "identity",
        "purpose": "Show to bus conductor to receive zero-fare ticket",
        "citizenTip": "Physical original or DigiLocker digital copy showing Telangana address is valid.",
        "isMandatory": true
      },
      {
        "id": "doc-tg-maha-gas",
        "name": "LPG Connection Consumer Passbook & FSC (for Gas Subsidy)",
        "category": "other",
        "purpose": "Verification of domestic LPG consumer ID and subsidy transfer",
        "citizenTip": "Link your LPG consumer number with your Food Security Card at Praja Palana or MeeSeva.",
        "isMandatory": false
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Free Bus Travel: Instant Boarding",
        "description": "Board any TGSRTC Palle Velugu or Express bus and display your Aadhaar card with Telangana address to receive a zero-fare passenger ticket.",
        "portalOrOffice": "TGSRTC Buses"
      },
      {
        "stepNumber": 2,
        "title": "Gas Subsidy: Praja Palana / MeeSeva Verification",
        "description": "Submit your consumer number and FSC details at your local MeeSeva or Praja Palana Seva Kendra for ₹500 cylinder mapping.",
        "portalOrOffice": "MeeSeva / Praja Palana Portal"
      }
    ],
    "officialSource": {
      "name": "Government of Telangana (Transport & Consumer Affairs)",
      "url": "https://telangana.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Transport, Roads & Buildings Department",
      "helpline": "040-2345-0425",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official scheme notifications by Government of Telangana."
    }
  },
  {
    "id": "tg-gruha-jyothi",
    "name": "Telangana Gruha Jyothi Scheme (200 Units Free Electricity)",
    "hindiName": "तेलंगाना गृह ज्योति योजना (200 यूनिट मुफ्त बिजली)",
    "teluguName": "తెలంగాణ గృహ జ్యోతి పథకం (200 యూనిట్ల ఉచిత విద్యుత్)",
    "tamilName": "தெலுங்கானா கிருக ஜோதி திட்டம் (200 யூனிட் இலவச மின்சாரம்)",
    "tagline": "Up to 200 units of free residential electricity per month for domestic consumers with Food Security Cards.",
    "category": "housing",
    "categoryLabel": "Housing & Clean Energy",
    "governmentLevel": "state",
    "stateCode": "TG",
    "administeringGovernment": "Government of Telangana",
    "schemeStatus": "active",
    "languages": [
      "en",
      "te"
    ],
    "geographicScope": "State Scheme (Telangana)",
    "stateApplicability": "Telangana",
    "isCentral": false,
    "lifeStage": "all",
    "beneficiaries": [
      "Domestic Households",
      "White Ration Card Holders",
      "Low-Income Consumers"
    ],
    "shortSummary": "Zero electricity bill for households whose monthly domestic power consumption does not exceed 200 units, saving ₹800 to ₹1,200 per month.",
    "fullDescription": "Gruha Jyothi is a landmark clean energy and economic guarantee launched by the Government of Telangana. Eligible domestic consumers holding Food Security Cards receive zero-rupee electricity bills for consumption up to 200 kWh per month, directly subsidized by the state government through TSSPDCL and TSNPDCL.",
    "financialBenefit": "Zero electricity bill for monthly usage up to 200 units (saving ₹800–₹1,200 / month)",
    "keyObjectives": [
      "Alleviate cost of living pressures for low- and middle-income families",
      "Ensure universal access to clean household electricity across Telangana",
      "Promote energy efficiency by incentivizing households to stay within 200 monthly units"
    ],
    "eligibilityRules": {
      "isBPLRequired": true,
      "stateResidence": "Telangana",
      "notes": "Consumption must be ≤200 units per month for domestic connection. Consumer Service Connection must be linked to White Food Security Card and Aadhaar."
    },
    "eligibilityHighlights": [
      "Domestic electricity consumer in Telangana (TSSPDCL / TSNPDCL)",
      "Valid Food Security Card (White Ration Card)",
      "Monthly electricity consumption within 200 units threshold",
      "One free connection per eligible household"
    ],
    "exclusions": [
      "Commercial, industrial, or agricultural power service connections",
      "Households whose monthly consumption consistently exceeds 200 units (full bill payable)",
      "Consumers without valid Food Security Card linkage"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tg-jyothi-bill",
        "name": "Recent Domestic Electricity Bill (USC / Service Number)",
        "category": "other",
        "purpose": "Verification of Unique Service Number and meter connection",
        "citizenTip": "Check that service connection is categorized as LT-I Domestic.",
        "isMandatory": true
      },
      {
        "id": "doc-tg-jyothi-fsc",
        "name": "Telangana Food Security Card (FSC)",
        "category": "identity",
        "purpose": "Verification of household economic eligibility",
        "citizenTip": "Link FSC with your electricity meter at Praja Palana / MeeSeva.",
        "isMandatory": true
      },
      {
        "id": "doc-tg-jyothi-aadhaar",
        "name": "Aadhaar Card of Consumer / Family Head",
        "category": "identity",
        "purpose": "Biometric and eKYC verification",
        "citizenTip": "Aadhaar must be linked to the electricity consumer profile.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Meter Linkage via Praja Palana / MeeSeva",
        "description": "Submit your Unique Service Number (USC) and Food Security Card number at MeeSeva or during Praja Palana drives.",
        "portalOrOffice": "MeeSeva / DISCOM Portal"
      },
      {
        "stepNumber": 2,
        "title": "DISCOM Digital Mapping",
        "description": "TSSPDCL or TSNPDCL links your consumer account and applies the Gruha Jyothi zero-bill tariff automatically.",
        "portalOrOffice": "DISCOM Billing System"
      },
      {
        "stepNumber": 3,
        "title": "Monthly Zero Bill Generation",
        "description": "When meter reader takes monthly reading below 200 units, a net ₹0 bill is issued on the spot.",
        "portalOrOffice": "Doorstep Spot Billing"
      }
    ],
    "officialSource": {
      "name": "Energy Department, Government of Telangana",
      "url": "https://telangana.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Energy Department & TGDISCOMs (TSSPDCL / TSNPDCL)",
      "helpline": "1912",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official scheme guidelines issued by Energy Department, Telangana."
    }
  },
  {
    "id": "tn-kmut-women-basic-income",
    "name": "Kalaignar Magalir Urimai Thittam (KMUT — Women's Basic Income Scheme)",
    "tamilName": "கலைஞர் மகளிர் உரிமைத் திட்டம் (KMUT)",
    "hindiName": "कलैग्नार महिला अधिकार योजना (तमिलनाडु महिला मूल आय योजना)",
    "teluguName": "కలైంజర్ మగళిర్ ఉరిమై తిట్టం (మహిళల ప్రాథమిక ఆదాయ పథకం)",
    "tagline": "Monthly basic income grant of ₹1,000 directly transferred via DBT to female heads of low-income families.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "governmentLevel": "state",
    "stateCode": "TN",
    "administeringGovernment": "Government of Tamil Nadu",
    "schemeStatus": "active",
    "languages": [
      "en",
      "ta"
    ],
    "geographicScope": "State Scheme (Tamil Nadu)",
    "stateApplicability": "Tamil Nadu",
    "isCentral": false,
    "lifeStage": "parent",
    "beneficiaries": [
      "Female Heads of Households in Tamil Nadu",
      "Low-Income Women",
      "Single Mothers and Widows"
    ],
    "shortSummary": "Direct monthly financial assistance of ₹1,000 (₹12,000 per year) credited directly into the bank accounts of over 1.15 crore eligible women heads of families across Tamil Nadu.",
    "fullDescription": "Kalaignar Magalir Urimai Thittam is a historic rights-based social welfare program implemented by the Government of Tamil Nadu. Recognizing the uncompensated domestic and care labor performed by women, it provides unconditional basic income support to enhance women's autonomy, nutrition, and financial decision-making power.",
    "financialBenefit": "₹1,000 / month (₹12,000 / year) directly credited into woman's bank account via DBT",
    "keyObjectives": [
      "Recognize and compensate women's unpaid household and caregiving labor",
      "Provide predictable basic income to improve female nutritional and health outcomes",
      "Foster financial inclusion and poverty reduction across Tamil Nadu households"
    ],
    "eligibilityRules": {
      "minAge": 21,
      "targetGender": "female",
      "maxIncome": 250000,
      "stateResidence": "Tamil Nadu",
      "notes": "Woman head of household aged 21 or older. Annual family income < ₹2.5 Lakhs; domestic electricity usage < 3,600 units/year; family landholding < 5 acres wetland or < 10 acres dryland."
    },
    "eligibilityHighlights": [
      "Female head of family aged 21 years or older",
      "Resident of Tamil Nadu with Smart Family Card (Ration Card)",
      "Annual household income below ₹2,50,000",
      "Electricity consumption under 3,600 units per year"
    ],
    "exclusions": [
      "Government employees (Central/State, PSUs, local bodies) and pensioners",
      "Elected representatives (MLAs, MPs, ward councillors)",
      "Income tax assessees and professional tax payers",
      "Owners of four-wheelers (cars/SUVs, excluding commercial transport drivers)"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tn-kmut-smartcard",
        "name": "Tamil Nadu Smart Family Card (Ration Card)",
        "category": "identity",
        "purpose": "Proof of family head status and household address",
        "citizenTip": "Woman applicant should be registered as head of family or designated female elder.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-kmut-aadhaar",
        "name": "Aadhaar Card of Woman Applicant",
        "category": "identity",
        "purpose": "Biometric identification and eKYC verification",
        "citizenTip": "Check that Aadhaar has active phone link for verification alerts.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-kmut-bank",
        "name": "Aadhaar-Seeded Bank Passbook (Individual Account)",
        "category": "bank",
        "purpose": "Direct Benefit Transfer (DBT) credit destination",
        "citizenTip": "Single bank account in applicant's own name is required; joint accounts are not accepted.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-kmut-eb",
        "name": "Electricity Consumer Card / Recent EB Bill",
        "category": "other",
        "purpose": "Verification of annual consumption (<3,600 units/year)",
        "citizenTip": "Available on TANGEDCO portal using consumer number.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Special Camp Enrollment / e-Sevai Centre",
        "description": "Submit biometric application at designated ward/village camps or government e-Sevai centre.",
        "portalOrOffice": "Special Village Camp / e-Sevai"
      },
      {
        "stepNumber": 2,
        "title": "Field Inspection and Income Verification",
        "description": "Revenue department and Village Administrative Officers (VAO) verify land, electricity, and vehicle records digitally.",
        "portalOrOffice": "Revenue Department"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Credit on the 15th",
        "description": "Approved beneficiaries receive ₹1,000 credited directly into their bank account on the 15th of every month.",
        "portalOrOffice": "Direct Bank Account"
      }
    ],
    "officialSource": {
      "name": "Special Programme Implementation Department, Government of Tamil Nadu",
      "url": "https://kmut.tn.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Special Programme Implementation & Revenue Department",
      "helpline": "044-2561-9208",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official KMUT verification portal by Government of Tamil Nadu."
    }
  },
  {
    "id": "tn-pudhumai-penn",
    "name": "Moovalur Ramamirtham Ammaiyar Higher Education Assurance (Pudhumai Penn)",
    "tamilName": "மூவலூர் ராமாமிர்தம் அம்மையார் புதுமைப் பெண் திட்டம்",
    "hindiName": "पुदुमई पेन योजना (उच्च शिक्षा प्रोत्साहन)",
    "teluguName": "పుదుమై పెణ్ పథకం (ఉన్నత విద్యా ప్రోత్సాహం)",
    "tagline": "Monthly financial assistance of ₹1,000 for girl students from government schools pursuing higher education.",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "governmentLevel": "state",
    "stateCode": "TN",
    "administeringGovernment": "Government of Tamil Nadu",
    "schemeStatus": "active",
    "languages": [
      "en",
      "ta"
    ],
    "geographicScope": "State Scheme (Tamil Nadu)",
    "stateApplicability": "Tamil Nadu",
    "isCentral": false,
    "lifeStage": "student",
    "beneficiaries": [
      "Girl Students in Tamil Nadu",
      "Government School Alumnae",
      "College & Diploma Undergraduates"
    ],
    "shortSummary": "Direct financial transfer of ₹1,000 per month (₹12,000/year) into student bank accounts for girl students who studied Classes 6 to 12 in government schools until they complete their undergraduate degree or diploma.",
    "fullDescription": "The Pudhumai Penn scheme is a trailblazing education incentive implemented by the Government of Tamil Nadu. It aims to eliminate female student dropouts after Class 12, curb child marriages, and promote higher education enrollment among girls from low-income backgrounds by providing ₹1,000 cash monthly directly to the student.",
    "financialBenefit": "₹1,000 / month (₹12,000 / year) throughout undergraduate degree / diploma / ITI course",
    "keyObjectives": [
      "Dramatically increase the Gross Enrollment Ratio (GER) of girl students in higher education",
      "Eliminate economic barriers forcing female students to drop out after school",
      "Prevent child marriage by supporting young women until university graduation"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Tamil Nadu",
      "notes": "Must have studied continuously from Class 6 to 12 in Tamil Nadu Government schools (or recognized government corporation/municipal/tribal welfare schools) and enrolled in a recognized UG degree, polytechnic diploma, or ITI course."
    },
    "eligibilityHighlights": [
      "Female student resident in Tamil Nadu",
      "Studied in Tamil Nadu Government schools from Class 6 to 12",
      "Currently enrolled in recognized undergraduate course (BA, BSc, BCom, BE, MBBS, LLB, Polytechnic, ITI)",
      "Direct monthly DBT transfer into student's individual bank account"
    ],
    "exclusions": [
      "Students who studied Class 6-12 in private schools without RTE sponsorship",
      "Students pursuing distance-education or correspondence courses without regular college enrollment"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tn-penn-bonafide",
        "name": "School Study Certificate (EMIS Number Classes 6–12)",
        "category": "academic",
        "purpose": "Proof of government schooling from Class 6 to 12 via EMIS database",
        "citizenTip": "School Education Department EMIS ID automatically verifies study history.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-penn-college",
        "name": "College Admission Bonafide Certificate",
        "category": "academic",
        "purpose": "Proof of active regular enrollment in recognized college or diploma institution",
        "citizenTip": "Get signed bonafide form from your college principal or nodal officer.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-penn-aadhaar",
        "name": "Aadhaar Card of Student",
        "category": "identity",
        "purpose": "Identity verification and biometric KYC authentication",
        "citizenTip": "Student name must match college records.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-penn-bank",
        "name": "Student's Individual Bank Account Passbook",
        "category": "bank",
        "purpose": "DBT credit of monthly ₹1,000 assistance",
        "citizenTip": "Must be an individual account in the student's name with NPCI mapper enabled.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Online Application on Pudhumai Penn Portal",
        "description": "Apply on pudhumaipenn.tn.gov.in through your college's designated nodal officer using your school EMIS ID.",
        "portalOrOffice": "pudhumaipenn.tn.gov.in / College Helpdesk"
      },
      {
        "stepNumber": 2,
        "title": "College and School Education Department Verification",
        "description": "College Principal and District Social Welfare Officer verify EMIS school records and college admission.",
        "portalOrOffice": "District Social Welfare Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly Cash Credit of ₹1,000",
        "description": "Assistance of ₹1,000 is transferred directly via DBT into the student's account every month until graduation.",
        "portalOrOffice": "Student Bank Account"
      }
    ],
    "officialSource": {
      "name": "Social Welfare & Women Empowerment Department, Government of Tamil Nadu",
      "url": "https://pudhumaipenn.tn.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Welfare & Women Empowerment Department",
      "helpline": "044-2567-0740",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official higher education assurance portal by Government of Tamil Nadu."
    }
  },
  {
    "id": "tn-cmchis-health",
    "name": "Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS — Tamil Nadu)",
    "tamilName": "முதலமைச்சரின் விரிவான மருத்துவக் காப்பீட்டுத் திட்டம் (CMCHIS)",
    "hindiName": "मुख्यमंत्री समग्र स्वास्थ्य बीमा योजना (तमिलनाडु)",
    "teluguName": "ముఖ్యమంత్రి సమగ్ర ఆరోగ్య బీమా పథకం (తమిళనాడు)",
    "tagline": "Cashless hospitalization coverage up to ₹5 Lakhs per family per year across 1,090+ procedures.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "governmentLevel": "state",
    "stateCode": "TN",
    "administeringGovernment": "Government of Tamil Nadu",
    "schemeStatus": "active",
    "languages": [
      "en",
      "ta"
    ],
    "geographicScope": "State Scheme (Tamil Nadu)",
    "stateApplicability": "Tamil Nadu",
    "isCentral": false,
    "lifeStage": "all",
    "beneficiaries": [
      "Low-Income Families of Tamil Nadu",
      "Smart Ration Card Holders",
      "Organ Transplant & Dialysis Patients"
    ],
    "shortSummary": "Cashless hospitalization coverage up to ₹5,00,000 per family per year across 1,090 medical procedures, 52 diagnostic tests, and specialized procedures like organ transplants.",
    "fullDescription": "CMCHIS is Tamil Nadu's flagship universal healthcare program, providing poor and vulnerable families with access to quality medical and surgical care in over 1,600 empanelled government and private healthcare facilities. The scheme covers diagnostics, surgery, intensive care, medicines, and post-discharge consultations.",
    "financialBenefit": "Up to ₹5,00,000 (₹5 Lakhs) cashless hospitalization per family / year (1,090+ procedures)",
    "keyObjectives": [
      "Provide cashless hospital care for secondary and tertiary illnesses",
      "Shield vulnerable families from catastrophic health-related debts",
      "Empanel premier private and government medical colleges across Tamil Nadu"
    ],
    "eligibilityRules": {
      "maxIncome": 120000,
      "isBPLRequired": true,
      "stateResidence": "Tamil Nadu",
      "notes": "Family annual income must be ≤₹1,20,000 as certified by revenue authority, or family must hold an Antyodaya Anna Yojana (AAY) or priority Smart Family Card in Tamil Nadu."
    },
    "eligibilityHighlights": [
      "Resident family in Tamil Nadu",
      "Possession of active Tamil Nadu Smart Family Card (Ration Card)",
      "Family annual income less than or equal to ₹1,20,000",
      "Covers pre-existing illnesses from day one without waiting period"
    ],
    "exclusions": [
      "Families with annual income exceeding ₹1,20,000 without priority card",
      "Non-medical aesthetic surgery, unapproved experimental therapies"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tn-cmchis-smartcard",
        "name": "Tamil Nadu Smart Family Card",
        "category": "identity",
        "purpose": "Proof of family residency and BPL status",
        "citizenTip": "Check that all family members requiring coverage are listed on the smart card.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-cmchis-income",
        "name": "Income Certificate from Revenue Department (VAO / Tehsildar)",
        "category": "income",
        "purpose": "Proof of family income ≤₹1,20,000 per year",
        "citizenTip": "Obtain digital barcoded income certificate from e-Sevai centre.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-cmchis-aadhaar",
        "name": "Aadhaar Cards of All Family Members",
        "category": "identity",
        "purpose": "Biometric patient verification at hospital kiosk",
        "citizenTip": "Aadhaar check confirms identity during admission and discharge.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Enroll at District Collectorate Kiosk / e-Sevai",
        "description": "Submit Smart Family Card, Income Certificate, and Aadhaar at the CMCHIS kiosk located at your District Collectorate.",
        "portalOrOffice": "District Collectorate CMCHIS Centre"
      },
      {
        "stepNumber": 2,
        "title": "Biometric CMCHIS Smart Card Issuance",
        "description": "Photo and biometric data of all family members are captured, and a CMCHIS Smart Health Card with URN is issued.",
        "portalOrOffice": "CMCHIS Enrollment Centre"
      },
      {
        "stepNumber": 3,
        "title": "Cashless Admission at Network Hospital",
        "description": "Present the card or URN at any empaneled hospital's CMCHIS helpdesk to obtain immediate pre-authorization and free care.",
        "portalOrOffice": "Network Hospital Kiosk"
      }
    ],
    "officialSource": {
      "name": "Tamil Nadu Health Systems Project, Department of Health",
      "url": "https://cmchistn.com",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Health and Family Welfare, Government of Tamil Nadu",
      "helpline": "1800-425-3993",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official CMCHIS portal operated by Government of Tamil Nadu & UIIC."
    }
  },
  {
    "id": "tn-differently-abled-pension",
    "name": "Tamil Nadu Differently Abled Welfare Maintenance Allowance & Pension",
    "tamilName": "மாற்றுத்திறனாளிகள் பராமரிப்பு உதவித்தொகை திட்டம்",
    "hindiName": "तमिलनाडु दिव्यांगजन भरण-पोषण भत्ता योजना",
    "teluguName": "తమిళనాడు దివ్యాంగుల నిర్వహణ భత్యం మరియు పెన్షన్",
    "tagline": "Monthly financial maintenance allowance of ₹2,000 for severely differently-abled persons.",
    "category": "disability-pwd",
    "categoryLabel": "Persons with Disabilities",
    "governmentLevel": "state",
    "stateCode": "TN",
    "administeringGovernment": "Government of Tamil Nadu",
    "schemeStatus": "active",
    "languages": [
      "en",
      "ta"
    ],
    "geographicScope": "State Scheme (Tamil Nadu)",
    "stateApplicability": "Tamil Nadu",
    "isCentral": false,
    "lifeStage": "all",
    "beneficiaries": [
      "Differently Abled Persons of Tamil Nadu",
      "Severely Disabled Individuals (60%+)",
      "Persons with Intellectual Disability"
    ],
    "shortSummary": "Monthly maintenance assistance of ₹2,000 per month deposited directly via DBT into the bank accounts of severely differently-abled individuals to cover medical and basic living costs.",
    "fullDescription": "The Tamil Nadu Welfare Maintenance Allowance Scheme is a vital statutory security provision administered by the Directorate for Welfare of the Differently Abled. It ensures regular financial aid for citizens suffering from locomotor disability, cerebral palsy, visual impairment, intellectual disability, and muscular dystrophy.",
    "financialBenefit": "₹2,000 / month directly credited into beneficiary bank account via DBT",
    "keyObjectives": [
      "Provide monthly living assistance to disabled individuals unable to earn a livelihood",
      "Cover ongoing therapy, medical, and personal caregiving expenses",
      "Promote dignity and social inclusion for families with special-needs dependents"
    ],
    "eligibilityRules": {
      "minDisabilityPercentage": 60,
      "requiresUDID": true,
      "stateResidence": "Tamil Nadu",
      "notes": "Certified disability of 60% or above (or any percentage for severe intellectual/developmental disability) assessed by authorized District Medical Board. Resident of Tamil Nadu."
    },
    "eligibilityHighlights": [
      "Certified differently-abled person residing in Tamil Nadu",
      "Minimum 60% disability certified by District Medical Board (or mental retardation/cerebral palsy)",
      "Possession of Unique Disability ID (UDID) or National Disability Identity Card",
      "Aadhaar-seeded bank account"
    ],
    "exclusions": [
      "Persons in regular government employment",
      "Beneficiaries currently drawing other state pensions exceeding this allowance"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tn-pwd-udid",
        "name": "UDID Smart Card / State Disability Medical Certificate",
        "category": "disability",
        "purpose": "Proof of certified disability percentage (≥60%) and condition",
        "citizenTip": "Medical board assessment from government district hospital is required.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-pwd-ration",
        "name": "Tamil Nadu Smart Family Card (Ration Card)",
        "category": "identity",
        "purpose": "Proof of residence and family background in Tamil Nadu",
        "citizenTip": "Check that beneficiary name is registered on the smart card.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-pwd-aadhaar",
        "name": "Aadhaar Card of Differently Abled Beneficiary",
        "category": "identity",
        "purpose": "Biometric identity verification and DBT routing",
        "citizenTip": "If biometric authentication is challenging, face-RD or guardian auth is permitted.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-pwd-bank",
        "name": "Aadhaar-Seeded Bank Passbook (or Post Office Account)",
        "category": "bank",
        "purpose": "Direct Benefit Transfer (DBT) credit destination",
        "citizenTip": "Joint account with legal guardian is permitted for minor or intellectually challenged persons.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application to District Differently Abled Welfare Officer (DDAWO)",
        "description": "Submit prescribed application form along with UDID card and bank passbook at the District Collectorate DDAWO office or local e-Sevai.",
        "portalOrOffice": "DDAWO Office / e-Sevai Centre"
      },
      {
        "stepNumber": 2,
        "title": "District Medical Board Verification",
        "description": "Verification of disability medical records and residential inspection by field welfare staff.",
        "portalOrOffice": "District Medical Board"
      },
      {
        "stepNumber": 3,
        "title": "Sanction and Monthly Pension Release",
        "description": "DDAWO issues sanction order; monthly maintenance grant of ₹2,000 is released via DBT directly into bank account.",
        "portalOrOffice": "Direct Bank Account"
      }
    ],
    "officialSource": {
      "name": "Welfare of Differently Abled Persons Department, Government of Tamil Nadu",
      "url": "https://scd.tn.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Welfare of Differently Abled Persons Department",
      "helpline": "044-2841-9686",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official disability welfare portal by Government of Tamil Nadu."
    }
  },
  {
    "id": "tn-naan-mudhalvan",
    "name": "Naan Mudhalvan Skill Development and Career Guidance Scheme",
    "tamilName": "நான் முதல்வன் திட்டம் (திறன் மேம்பாடு & வேலைவாய்ப்பு)",
    "hindiName": "नान मुधलवन कौशल विकास योजना",
    "teluguName": "నాన్ ముదల్వన్ నైపుణ్యాభివృద్ధి పథకం",
    "tagline": "Free industry-aligned technical training, certifications in AI/data, and campus placement drives.",
    "category": "unemployment-skills",
    "categoryLabel": "Unemployment & Skills",
    "governmentLevel": "state",
    "stateCode": "TN",
    "administeringGovernment": "Government of Tamil Nadu",
    "schemeStatus": "active",
    "languages": [
      "en",
      "ta"
    ],
    "geographicScope": "State Scheme (Tamil Nadu)",
    "stateApplicability": "Tamil Nadu",
    "isCentral": false,
    "lifeStage": "student",
    "beneficiaries": [
      "College Students in Tamil Nadu",
      "Engineering & Arts Graduates",
      "Polytechnic Diploma Students"
    ],
    "shortSummary": "Comprehensive skilling curriculum integrated into college degrees, offering free courses and certifications in emerging technologies (AI, cloud computing, robotics, advanced manufacturing) with direct placement drives.",
    "fullDescription": "Naan Mudhalvan is an umbrella skill-enhancement and career-guidance initiative launched by the Government of Tamil Nadu. Implemented through the Tamil Nadu Skill Development Corporation (TNSDC), it equips over 10 lakh college students annually with high-demand technical and soft skills, partnering with leading multinational tech companies.",
    "financialBenefit": "100% Free Industry Certifications, Upskilling Courses & Direct Campus Placement Drives",
    "keyObjectives": [
      "Bridge the industry-academia skill gap for engineering, polytechnic, and arts students",
      "Provide free certifications in high-demand technologies (AI, cybersecurity, cloud, EV technology)",
      "Connect students from rural and underprivileged colleges with top multinational recruiters"
    ],
    "eligibilityRules": {
      "stateResidence": "Tamil Nadu",
      "educationLevel": [
        "Undergraduate Student",
        "Engineering",
        "Arts & Science",
        "Polytechnic Diploma",
        "ITI"
      ],
      "notes": "Enrolled in any recognized government or government-aided arts, science, engineering, or polytechnic institution in Tamil Nadu."
    },
    "eligibilityHighlights": [
      "College student currently enrolled in higher education in Tamil Nadu",
      "Government and government-aided colleges, universities, and polytechnics",
      "Access to curated online courses, laboratory sessions, and hackathons",
      "Direct interview access to corporate recruitment drives"
    ],
    "exclusions": [
      "Non-students or working professionals not enrolled in accredited colleges"
    ],
    "requiredDocuments": [
      {
        "id": "doc-tn-naan-college",
        "name": "College Student ID Card & Roll Number",
        "category": "academic",
        "purpose": "Verification of active college enrollment and course year",
        "citizenTip": "Use your institutional college email or student roll number for portal login.",
        "isMandatory": true
      },
      {
        "id": "doc-tn-naan-aadhaar",
        "name": "Aadhaar Card of Student",
        "category": "identity",
        "purpose": "Identity verification and digital skill certificate authentication",
        "citizenTip": "Aadhaar linkage enables verified digital badge generation upon course completion.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register on Naan Mudhalvan Portal",
        "description": "Login to naanmudhalvan.tn.gov.in using your college student ID and institution code.",
        "portalOrOffice": "naanmudhalvan.tn.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Select Skill Track and Complete Modules",
        "description": "Choose your desired specialization (e.g., Data Analytics, Robotics, Cloud Computing) and complete interactive coursework.",
        "portalOrOffice": "Online Learning Platform"
      },
      {
        "stepNumber": 3,
        "title": "Certification and Placement Drive Access",
        "description": "Earn industry-recognized certification and participate in state-sponsored campus placement fairs.",
        "portalOrOffice": "Campus Placement Drive"
      }
    ],
    "officialSource": {
      "name": "Tamil Nadu Skill Development Corporation (TNSDC)",
      "url": "https://naanmudhalvan.tn.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Special Programme Implementation Department & TNSDC",
      "helpline": "044-2250-1002",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official skill enhancement portal by Government of Tamil Nadu."
    }
  },
  {
    "id": "ka-gruha-lakshmi",
    "name": "Gruha Lakshmi Scheme (Karnataka)",
    "hindiName": "गृह लक्ष्मी योजना (कर्नाटक)",
    "teluguName": "గృహ లక్ష్మి పథకం (కర్ణాటక)",
    "tamilName": "கிரக லட்சுமி திட்டம் (கர்நாடகா)",
    "tagline": "Direct financial assistance of ₹2,000 per month to female heads of eligible households in Karnataka.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Karnataka)",
    "stateApplicability": "Karnataka",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KA",
    "administeringGovernment": "Government of Karnataka",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "kn"
    ],
    "lifeStage": "parent",
    "beneficiaries": [
      "Women Heads of Household",
      "Antyodaya & BPL Cardholders",
      "APL Cardholders"
    ],
    "shortSummary": "Monthly financial guarantee of ₹2,000 transferred via DBT directly into the bank account of the designated female head of family.",
    "fullDescription": "Gruha Lakshmi is one of the five flagship guarantees of the Government of Karnataka, designed to eliminate gender poverty, empower homemakers, and recognize the unpaid domestic labor of female family heads across Karnataka.",
    "financialBenefit": "₹2,000 / month (₹24,000 per year via DBT)",
    "keyObjectives": [
      "Provide monthly basic income guarantee to women heads of family in Karnataka",
      "Enhance financial autonomy and household purchasing power",
      "Eliminate informal usurious borrowing for basic grocery and medical needs"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Karnataka",
      "notes": "Must be designated as the female head of family on an active Antyodaya, BPL, or APL ration card issued by Government of Karnataka."
    },
    "eligibilityHighlights": [
      "Permanent resident of Karnataka designated as woman head on ration card",
      "Only one female head per ration card is eligible",
      "Aadhaar-seeded bank account enabled for NPCI Direct Benefit Transfer"
    ],
    "exclusions": [
      "Female heads or their husbands who are income tax payers",
      "Female heads or their husbands who file GST returns",
      "Government and public sector permanent employees"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ka-gl-ration",
        "name": "Karnataka Ration Card (BPL / Antyodaya / APL Card)",
        "category": "income",
        "purpose": "Identification of designated woman head of household",
        "citizenTip": "Check at your local Grama One or Karnataka One center that the ration card specifies you as head.",
        "isMandatory": true
      },
      {
        "id": "doc-ka-gl-aadhaar",
        "name": "Aadhaar Card of Woman Beneficiary and Spouse",
        "category": "identity",
        "purpose": "Biometric identification and tax exclusion checks",
        "citizenTip": "Aadhaar must be linked to your active bank account for DBT credits.",
        "isMandatory": true
      },
      {
        "id": "doc-ka-gl-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Monthly credit destination for the ₹2,000 grant",
        "citizenTip": "Confirm NPCI mapping with your bank manager to avoid failed transactions.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "SMS Appointment / Direct Center Visit",
        "description": "Send SMS with ration card number to 1902/8147500500 to get slot or visit nearest Grama One, Karnataka One, or Bapuji Seva Kendra.",
        "portalOrOffice": "Grama One / Karnataka One"
      },
      {
        "stepNumber": 2,
        "title": "Biometric Verification and Form Submission",
        "description": "Operator verifies ration card details, husband Aadhaar, and takes OTP or biometric authentication.",
        "portalOrOffice": "Seva Sindhu Portal"
      },
      {
        "stepNumber": 3,
        "title": "DBT Sanction and Monthly Transfer",
        "description": "Once approved by Women & Child Development Department, ₹2,000 is credited monthly directly into the bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Women & Child Development, Government of Karnataka",
      "url": "https://sevasindhu.karnataka.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Department of Women & Child Development",
      "helpline": "1902",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship guarantee scheme with dedicated Seva Sindhu portal integration."
    }
  },
  {
    "id": "ka-gruha-jyothi",
    "name": "Gruha Jyothi Scheme (Karnataka)",
    "hindiName": "गृह ज्योति योजना (कर्नाटक)",
    "teluguName": "గృహ జ్యోతి పథకం (కర్ణాటక)",
    "tamilName": "கிரக ஜோதி திட்டம் (கர்நாடகா)",
    "tagline": "Zero electricity bills for domestic households consuming up to 200 units per month.",
    "category": "housing",
    "categoryLabel": "Housing & Clean Energy",
    "geographicScope": "State Scheme (Karnataka)",
    "stateApplicability": "Karnataka",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KA",
    "administeringGovernment": "Government of Karnataka",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "kn"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Domestic Power Consumers",
      "Tenants & Homeowners",
      "Rural & Urban Households"
    ],
    "shortSummary": "Provides up to 200 units of free electricity every month to residential domestic consumers across Karnataka, resulting in zero monthly electricity bills.",
    "fullDescription": "Gruha Jyothi provides universal relief against rising living costs by making residential domestic electricity consumption free up to 200 units per month, calculated based on the consumer 12-month historical average plus a 10% allowance.",
    "financialBenefit": "Up to 200 units free monthly domestic power (Savings of up to ₹1,400 - ₹1,800/month)",
    "keyObjectives": [
      "Alleviate electricity expenditure for middle-class and poor households across Karnataka",
      "Incentivize domestic energy conservation below the 200-unit ceiling",
      "Provide zero-bill electricity to over 1.5 crore domestic power connections"
    ],
    "eligibilityRules": {
      "stateResidence": "Karnataka",
      "notes": "Must possess an active domestic electricity consumer connection (Account ID) in Karnataka linked to Aadhaar. Tenants can apply using their rental agreement."
    },
    "eligibilityHighlights": [
      "Applies to all domestic/residential electricity connections across all ESCOMs",
      "Both house owners and tenants residing in Karnataka are eligible",
      "Average monthly consumption over previous 12 months must not exceed 200 units"
    ],
    "exclusions": [
      "Commercial, industrial, or temporary electrical installations",
      "Domestic consumers whose average consumption exceeds 200 units/month"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ka-gj-bill",
        "name": "Electricity Bill with Account ID",
        "category": "other",
        "purpose": "Verification of domestic consumer number and ESCOM installation",
        "citizenTip": "Check your 10-digit Account ID printed on any recent BESCOM, MESCOM, or HESCOM bill.",
        "isMandatory": true
      },
      {
        "id": "doc-ka-gj-aadhaar",
        "name": "Aadhaar Card of Consumer / Tenant",
        "category": "identity",
        "purpose": "One-connection per person deduplication authentication",
        "citizenTip": "Only one installation can be linked per Aadhaar card.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Open Seva Sindhu Gruha Jyothi Portal",
        "description": "Navigate to sevasindhugs.karnataka.gov.in and click Gruha Jyothi.",
        "portalOrOffice": "sevasindhugs.karnataka.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Enter ESCOM, Account ID & Aadhaar",
        "description": "Select your ESCOM (BESCOM, HESCOM, etc.), type your Account ID, and authenticate using Aadhaar OTP.",
        "portalOrOffice": "Online Portal"
      },
      {
        "stepNumber": 3,
        "title": "Automated Net-Zero Billing Activation",
        "description": "Starting from the next billing cycle, if consumption is within entitled units, a Zero Bill is issued.",
        "portalOrOffice": "Monthly Electricity Bill"
      }
    ],
    "officialSource": {
      "name": "Energy Department, Government of Karnataka",
      "url": "https://sevasindhugs.karnataka.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Energy Department & Karnataka ESCOMs",
      "helpline": "1912",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship free electricity guarantee under Energy Department of Karnataka."
    }
  },
  {
    "id": "ka-shakti-scheme",
    "name": "Shakti Scheme (Karnataka Free Bus Travel for Women)",
    "hindiName": "शक्ति योजना (कर्नाटक)",
    "teluguName": "శక్తి పథకం (మహిళలకు ఉచిత బస్సు ప్రయాణం)",
    "tamilName": "சக்தி திட்டம் (மகளிர் இலவச பேருந்து பயணம்)",
    "tagline": "100% fare-free public bus travel for women and girl students across Karnataka state road transport corporations.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Karnataka)",
    "stateApplicability": "Karnataka",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KA",
    "administeringGovernment": "Government of Karnataka",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "kn"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Women Residents of Karnataka",
      "College & School Girls",
      "Transgender Persons"
    ],
    "shortSummary": "Zero-fare public bus transportation for all female residents and students across four Karnataka state transport corporations (KSRTC, BMTC, NWKRTC, KKRTC).",
    "fullDescription": "Shakti Scheme provides free mobility to all women and transgender residents of Karnataka, allowing them to travel free of cost in non-premium ordinary, city, and express buses operated by KSRTC, BMTC, NWKRTC, and KKRTC.",
    "financialBenefit": "100% Free Bus Travel (Average monthly savings of ₹1,200 - ₹2,500 per commuter)",
    "keyObjectives": [
      "Promote female labor force participation by reducing commuting costs",
      "Ensure safe, universal public mobility for women and students",
      "Encourage girl student enrollment in secondary and higher education"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "stateResidence": "Karnataka",
      "notes": "Open to all women and transgender persons who are permanent residents of Karnataka."
    },
    "eligibilityHighlights": [
      "All women, girl students, and transgender residents of Karnataka",
      "No income, age, caste, or employment restrictions",
      "Valid on intra-state routes within Karnataka"
    ],
    "exclusions": [
      "Luxury and premium bus services (Airavat, Club Class, Flybus, EV Power Plus, Sleeper coaches)",
      "Inter-state journeys traveling beyond Karnataka state borders"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ka-shakti-id",
        "name": "Government Photo ID with Karnataka Address (Aadhaar / Voter ID / Driving License)",
        "category": "identity",
        "purpose": "Proof of female identity and Karnataka residential address",
        "citizenTip": "Show original physical ID or DigiLocker copy to the conductor upon boarding to get zero-fare ticket.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Board Any State Corporation Bus",
        "description": "Board any ordinary, express, or city bus operated by KSRTC, BMTC, NWKRTC, or KKRTC.",
        "portalOrOffice": "Bus Stop / Terminal"
      },
      {
        "stepNumber": 2,
        "title": "Show Karnataka Address Photo ID",
        "description": "Present your Aadhaar or government ID proving Karnataka domicile to the bus conductor.",
        "portalOrOffice": "Bus Conductor"
      },
      {
        "stepNumber": 3,
        "title": "Receive Zero-Fare Shakti Ticket",
        "description": "The conductor prints a Zero-Fare Shakti Ticket for your travel destination at no charge.",
        "portalOrOffice": "Immediate on Bus"
      }
    ],
    "officialSource": {
      "name": "Transport Department, Government of Karnataka",
      "url": "https://ksrtc.karnataka.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Transport Department & KSRTC",
      "helpline": "080-49596666",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship women free transit policy enacted under Government of Karnataka."
    }
  },
  {
    "id": "ka-yuva-nidhi",
    "name": "Yuva Nidhi Scheme (Karnataka Graduate & Diploma Stipend)",
    "hindiName": "युवा निधि योजना (कर्नाटक)",
    "teluguName": "యువ నిధి పథకం (నిరుద్యోగ గ్రాడ్యుయేట్ సాయం)",
    "tamilName": "யுவ நிதி திட்டம் (படித்த இளைஞர் உதவித்தொகை)",
    "tagline": "Monthly unemployment allowance of ₹3,000 for degree graduates and ₹1,500 for diploma holders for up to two years.",
    "category": "unemployment-skills",
    "categoryLabel": "Unemployment & Skills",
    "geographicScope": "State Scheme (Karnataka)",
    "stateApplicability": "Karnataka",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KA",
    "administeringGovernment": "Government of Karnataka",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "kn"
    ],
    "lifeStage": "youth",
    "beneficiaries": [
      "Unemployed Graduates",
      "Diploma Holders",
      "Fresh College Pass-outs"
    ],
    "shortSummary": "Monthly financial unemployment relief of ₹3,000 for degree graduates and ₹1,500 for diploma holders who remain unplaced after graduation.",
    "fullDescription": "Yuva Nidhi provides financial protection to fresh graduates and diploma holders from Karnataka universities who have completed their degrees and remained unemployed for at least 180 days, supporting them with up to 24 months of monthly stipends alongside free skill training.",
    "financialBenefit": "₹3,000 / month for Graduates; ₹1,500 / month for Diploma holders (up to 24 months)",
    "keyObjectives": [
      "Provide financial stability to educated youth searching for jobs",
      "Prevent financial distress and cover application and interview expenses",
      "Connect unemployed graduates with state-sponsored skill development courses"
    ],
    "eligibilityRules": {
      "stateResidence": "Karnataka",
      "educationLevel": [
        "Bachelor Degree",
        "Diploma"
      ],
      "notes": "Must have graduated from recognized Karnataka universities and remained unemployed/unplaced for at least 180 days after graduation."
    },
    "eligibilityHighlights": [
      "Permanent resident of Karnataka who completed graduation or diploma",
      "Unemployed after graduation and not pursuing higher education full-time",
      "Not employed in government, private sector, or self-employment with PF/ESIC"
    ],
    "exclusions": [
      "Candidates employed in government, private sector, or holding active GST/EPF accounts",
      "Students actively enrolled in full-time regular post-graduate studies",
      "Apprenticeship stipend recipients"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ka-yn-degree",
        "name": "Degree or Diploma Passing Certificate & Marks Cards",
        "category": "academic",
        "purpose": "Verification of university completion and passing year",
        "citizenTip": "NAD/DigiLocker verified certificates speed up approval.",
        "isMandatory": true
      },
      {
        "id": "doc-ka-yn-aadhaar",
        "name": "Aadhaar Card and Domicile Certificate",
        "category": "identity",
        "purpose": "Proof of age and Karnataka residence",
        "citizenTip": "Ensure your Aadhaar is linked to the bank account for monthly DBT.",
        "isMandatory": true
      },
      {
        "id": "doc-ka-yn-selfdec",
        "name": "Self-Declaration of Unemployment",
        "category": "other",
        "purpose": "Legal declaration confirming non-employment and non-enrollment in higher studies",
        "citizenTip": "Submitted digitally via OTP on the portal.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register on Seva Sindhu Portal",
        "description": "Login to sevasindhugs.karnataka.gov.in and select Yuva Nidhi registration.",
        "portalOrOffice": "sevasindhugs.karnataka.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Upload Degree Details & Complete Aadhaar eKYC",
        "description": "Fetch your degree credentials via university roll number/NAD and submit self-declaration.",
        "portalOrOffice": "Online Portal"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Disbursement and Skill Registration",
        "description": "Receive monthly allowance directly in your bank account while accessing free skill workshops.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Department of Skill Development, Entrepreneurship and Livelihood, Karnataka",
      "url": "https://sevasindhugs.karnataka.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Skill Development & Livelihood Department",
      "helpline": "1902",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Official guarantee scheme for educated unemployed youth in Karnataka."
    }
  },
  {
    "id": "ka-anna-bhagya",
    "name": "Anna Bhagya Scheme (Karnataka Food Security & DBT)",
    "hindiName": "अन्न भाग्य योजना (कर्नाटक)",
    "teluguName": "అన్న భాగ్య పథకం (ఉచిత బియ్యం & డీబీటీ)",
    "tamilName": "அன்ன பாக்யா திட்டம் (இலவச உணவு தானியம்)",
    "tagline": "Ensures 10 kg of free foodgrains per person per month (or direct cash transfer equivalent for additional 5 kg) to BPL/Antyodaya households.",
    "category": "low-income-welfare",
    "categoryLabel": "Food & Essential Welfare",
    "geographicScope": "State Scheme (Karnataka)",
    "stateApplicability": "Karnataka",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KA",
    "administeringGovernment": "Government of Karnataka",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "kn"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Antyodaya Anna Yojana (AAY) Families",
      "Priority Household (PHH) BPL Cardholders"
    ],
    "shortSummary": "Guarantees 10 kg free rice per person per month by providing 5 kg under central NFSA and the remaining 5 kg in cash DBT directly deposited at ₹34 per kg into the cardholder bank account.",
    "fullDescription": "Anna Bhagya ensures food and nutritional sovereignty across Karnataka by expanding free foodgrain entitlements to 10 kg per beneficiary per month. The additional 5 kg entitlement is credited as Direct Benefit Transfer (DBT) cash at ₹34/kg (₹170 per person per month) directly to the bank account of the head of family.",
    "financialBenefit": "5 kg free central rice + ₹170 cash DBT per person per month (₹850/month for family of 5)",
    "keyObjectives": [
      "Eliminate hunger and undernutrition across low-income families in Karnataka",
      "Provide cash flexibility through direct benefit transfer for buying local nutritious grains",
      "Ensure 100% biometric transparency in Public Distribution System entitlements"
    ],
    "eligibilityRules": {
      "isBPLRequired": true,
      "stateResidence": "Karnataka",
      "notes": "Must hold a valid Antyodaya Anna Yojana (AAY) or Priority Household (PHH) BPL ration card in Karnataka."
    },
    "eligibilityHighlights": [
      "Holders of valid BPL / Antyodaya Ration Cards issued by Government of Karnataka",
      "All listed family members seeded with Aadhaar in the food database",
      "Active bank account linked to the designated head of household"
    ],
    "exclusions": [
      "APL cardholders (Above Poverty Line non-priority cards)",
      "Income tax payers and commercial vehicle owners with luxury registrations"
    ],
    "requiredDocuments": [
      {
        "id": "doc-ka-ab-ration",
        "name": "Karnataka BPL / AAY Ration Card",
        "category": "income",
        "purpose": "Entitlement calculation and family member count verification",
        "citizenTip": "Check your status on ahara.kar.nic.in under DBT status menu.",
        "isMandatory": true
      },
      {
        "id": "doc-ka-ab-aadhaar",
        "name": "Aadhaar of All Listed Family Members",
        "category": "identity",
        "purpose": "Biometric deduplication and ePOS fair price shop distribution",
        "citizenTip": "Ensure 100% Aadhaar seeding of all family members.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Automatic Enrolment via Existing BPL Card",
        "description": "All existing active BPL and AAY cardholders are automatically enrolled; no separate application is needed.",
        "portalOrOffice": "ahara.kar.nic.in"
      },
      {
        "stepNumber": 2,
        "title": "Collect 5 kg Free Rice at Fair Price Shop",
        "description": "Authenticate through biometric ePOS at your designated Fair Price Shop (ration shop) to collect central 5 kg rice.",
        "portalOrOffice": "Fair Price Shop"
      },
      {
        "stepNumber": 3,
        "title": "Monthly Cash DBT Credit for Additional 5 kg",
        "description": "The cash equivalent of the state share (₹34/kg) is credited directly to the cardholder bank account every month.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Food, Civil Supplies & Consumer Affairs Department, Karnataka",
      "url": "https://ahara.kar.nic.in",
      "lastVerifiedDate": "October 2026",
      "department": "Food, Civil Supplies & Consumer Affairs Department",
      "helpline": "1967",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship food security guarantee administered across Karnataka."
    }
  },
  {
    "id": "kl-karunya-kasp",
    "name": "Karunya Arogya Suraksha Padhathi (KASP - Kerala)",
    "hindiName": "कारुण्या आरोग्य सुरक्षा पद्धति (केरल)",
    "teluguName": "కారుణ్య ఆరోగ్య సురక్ష పథకం (కేరళ)",
    "tamilName": "காருண்யா ஆரோக்கிய சுரக்ஷா திட்டம் (கேரளா)",
    "tagline": "Cashless hospitalization cover of up to ₹5,00,000 per family per year for secondary and tertiary care across 1,600+ empaneled hospitals.",
    "category": "healthcare",
    "categoryLabel": "Healthcare & Wellness",
    "geographicScope": "State Scheme (Kerala)",
    "stateApplicability": "Kerala",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KL",
    "administeringGovernment": "Government of Kerala",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "ml"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "BPL Ration Card Families",
      "Vulnerable APL Families",
      "Senior Citizens"
    ],
    "shortSummary": "Comprehensive public healthcare insurance providing up to ₹5 Lakh per family per year in cashless hospitalization across government and private empaneled hospitals.",
    "fullDescription": "KASP converges state medical relief initiatives with national healthcare guarantees, protecting over 42 lakh poor and vulnerable families in Kerala from catastrophic health expenditures across 1,600+ secondary and tertiary medical treatments.",
    "financialBenefit": "Up to ₹5,00,000 per family per year in cashless hospitalization",
    "keyObjectives": [
      "Eliminate out-of-pocket medical expenditure for poor and vulnerable families in Kerala",
      "Provide cashless treatment for critical conditions like cardiology, oncology, neurosurgery, and nephrology",
      "Integrate seamless health access across state medical colleges and private healthcare providers"
    ],
    "eligibilityRules": {
      "isBPLRequired": true,
      "stateResidence": "Kerala",
      "notes": "Must possess an active Yellow (AAY) or Pink (PHH) ration card in Kerala, or designated eligible Blue ration cards under state health norms."
    },
    "eligibilityHighlights": [
      "Holders of Yellow (AAY) and Pink (PHH) Ration Cards in Kerala",
      "Pre-existing diseases covered from day one without waiting period",
      "Family floater coverage without cap on family size"
    ],
    "exclusions": [
      "Non-priority White ration card holders with annual income exceeding ₹3 Lakh",
      "Families covered under government employee and pensioner medical insurance (MEDISEP)"
    ],
    "requiredDocuments": [
      {
        "id": "doc-kl-kasp-ration",
        "name": "Kerala Ration Card (Yellow / Pink Card)",
        "category": "income",
        "purpose": "Verification of family membership and priority economic status",
        "citizenTip": "Bring original ration card to the hospital KASP helpdesk.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-kasp-aadhaar",
        "name": "Aadhaar Card of Patient and Family Members",
        "category": "identity",
        "purpose": "Biometric verification and Golden Card generation",
        "citizenTip": "Aadhaar e-KYC can be done on the spot at hospital helpdesk.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Check Eligibility Online or at Empaneled Hospital",
        "description": "Verify your name on sha.kerala.gov.in or visit the KASP kiosk at any government taluk hospital or medical college.",
        "portalOrOffice": "sha.kerala.gov.in / KASP Helpdesk"
      },
      {
        "stepNumber": 2,
        "title": "Generate KASP Beneficiary Golden Card",
        "description": "Arogyamithra operator verifies ration card and Aadhaar to generate digital Golden Card.",
        "portalOrOffice": "Hospital KASP Desk"
      },
      {
        "stepNumber": 3,
        "title": "Avail 100% Cashless Hospital Treatment",
        "description": "Surgeries, medicines, ICU care, diagnostics, and 15 days post-discharge medications are fully covered.",
        "portalOrOffice": "Empaneled Hospital"
      }
    ],
    "officialSource": {
      "name": "State Health Agency (SHA), Government of Kerala",
      "url": "https://sha.kerala.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Health & Family Welfare Department",
      "helpline": "1056",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Flagship health protection framework managed by State Health Agency Kerala."
    }
  },
  {
    "id": "kl-aaswasakiranam",
    "name": "Aaswasakiranam Scheme (Kerala Bedridden Patient Caregiver Assistance)",
    "hindiName": "आश्वासकिरणम योजना (केरल)",
    "teluguName": "ఆశ్వాసకిరణం పథకం (కేరళ)",
    "tamilName": "ஆஸ்வாசகிரணம் திட்டம் (கேரளா)",
    "tagline": "Monthly financial grant to family caregivers of fully bedridden mentally challenged, autistic, or chronically ill individuals.",
    "category": "disability-pwd",
    "categoryLabel": "Persons with Disabilities",
    "geographicScope": "State Scheme (Kerala)",
    "stateApplicability": "Kerala",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KL",
    "administeringGovernment": "Government of Kerala",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "ml"
    ],
    "lifeStage": "all",
    "beneficiaries": [
      "Caregivers of Bedridden Patients",
      "Patients with Severe Autism / Cerebral Palsy",
      "BPL Families"
    ],
    "shortSummary": "Monthly financial stipend provided to informal family caregivers who cannot take up employment because they provide round-the-clock physical care to bedridden relatives.",
    "fullDescription": "Implemented by the Kerala Social Security Mission (KSSM), Aaswasakiranam provides monthly financial support to family members who act as full-time caregivers for individuals who are 100% bedridden, severely intellectually impaired, or coping with brittle bone disease or terminal conditions.",
    "financialBenefit": "₹600 / month direct pension to family caregiver via DBT",
    "keyObjectives": [
      "Recognize and compensate unpaid, full-time informal caregivers in poor families",
      "Provide basic nutritional and medical sustenance for bedridden citizens",
      "Prevent abandonment of critically disabled and bedridden individuals"
    ],
    "eligibilityRules": {
      "isBPLRequired": true,
      "stateResidence": "Kerala",
      "minDisabilityPercentage": 80,
      "notes": "Patient must be 100% bedridden or have severe benchmark disability requiring constant assistance. Family must belong to BPL category."
    },
    "eligibilityHighlights": [
      "Patient must be completely bedridden due to physical/mental illness or advanced age",
      "Caregiver must be a close relative providing dedicated full-time physical care",
      "Family must possess BPL ration card or annual income certificate below ₹1 Lakh"
    ],
    "exclusions": [
      "Patients residing in government institutional rehabilitation homes or private paid care centers",
      "Caregivers who are employed in government or formal private sector jobs"
    ],
    "requiredDocuments": [
      {
        "id": "doc-kl-ak-medical",
        "name": "Medical Certificate from Government Doctor (Assistant Surgeon or above)",
        "category": "medical",
        "purpose": "Certification that patient is 100% bedridden requiring constant full-time caregiver",
        "citizenTip": "Obtain from your local Community Health Centre (CHC) or Taluk Hospital.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-ak-bpl",
        "name": "BPL Ration Card / Income Certificate",
        "category": "income",
        "purpose": "Verification of below-poverty-line family status",
        "citizenTip": "Issued by village officer or local body secretary.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-ak-bank",
        "name": "Bank Passbook of Caregiver",
        "category": "bank",
        "purpose": "Direct benefit transfer credit destination",
        "citizenTip": "Account must be in caregiver name with Aadhaar linkage.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Obtain Doctor Certification and Fill Application",
        "description": "Download form from socialsecuritymission.gov.in and get it signed by medical officer and local self-government body.",
        "portalOrOffice": "socialsecuritymission.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Submit to Grama Panchayat / Municipal Office",
        "description": "Submit completed dossier to the ICDS Child Development Project Officer (CDPO) or local body secretary.",
        "portalOrOffice": "ICDS / CDPO Office"
      },
      {
        "stepNumber": 3,
        "title": "Field Verification and Monthly DBT Sanction",
        "description": "KSSM inspects the case and activates monthly direct benefit transfer directly to the caregiver bank account.",
        "portalOrOffice": "KSSM Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Kerala Social Security Mission (KSSM), Government of Kerala",
      "url": "https://socialsecuritymission.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Justice Department",
      "helpline": "0471-2322992",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Statutory compassionate caregiver initiative by Social Justice Department Kerala."
    }
  },
  {
    "id": "kl-snehasparsham",
    "name": "Snehasparsham Scheme (Kerala Unwed & Vulnerable Mother Welfare)",
    "hindiName": "स्नेहस्पर्शम योजना (केरल)",
    "teluguName": "స్నేహస్పర్శం పథకం (కేరళ)",
    "tamilName": "ஸ்னேகஸ்பர்ஷம் திட்டம் (கேரளா)",
    "tagline": "Monthly financial sustenance and social security protection for unwed mothers and deserted women from vulnerable communities.",
    "category": "women",
    "categoryLabel": "Women & Child Development",
    "geographicScope": "State Scheme (Kerala)",
    "stateApplicability": "Kerala",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KL",
    "administeringGovernment": "Government of Kerala",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "ml"
    ],
    "lifeStage": "parent",
    "beneficiaries": [
      "Unwed Mothers",
      "Deserted Women",
      "Tribal and Vulnerable Women"
    ],
    "shortSummary": "Provides regular monthly financial pensions directly into the bank accounts of unwed mothers and destitute deserted women to secure their livelihood and child upbringing.",
    "fullDescription": "Administered by the Social Justice Department, Snehasparsham offers social dignity, financial self-reliance, and child support to unwed mothers who face acute social marginalization and economic distress, particularly in tribal districts like Wayanad, Palakkad, and Idukki.",
    "financialBenefit": "₹2,000 / month direct pension via DBT",
    "keyObjectives": [
      "Provide monthly income security to unwed mothers raising children alone",
      "Support the nutrition, education, and health of children of single mothers",
      "Prevent social exploitation and poverty traps in vulnerable tribal communities"
    ],
    "eligibilityRules": {
      "targetGender": "female",
      "isBPLRequired": true,
      "stateResidence": "Kerala",
      "notes": "Must be an unwed mother residing in Kerala belonging to BPL household or with family income not exceeding ₹1,00,000 per year."
    },
    "eligibilityHighlights": [
      "Unwed mother residing in Kerala raising one or more children",
      "Belonging to BPL category or certified income under ₹1,00,000/year",
      "Not remarried or living with spouse providing formal maintenance"
    ],
    "exclusions": [
      "Beneficiaries receiving regular government salary or permanent pension",
      "Women whose children are formally adopted or receiving full institutional state custody"
    ],
    "requiredDocuments": [
      {
        "id": "doc-kl-sn-birth",
        "name": "Birth Certificate of Child",
        "category": "identity",
        "purpose": "Proof of parenthood and dependent child status",
        "citizenTip": "Obtain certified copy from the local registrar of births.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-sn-bpl",
        "name": "BPL Ration Card / Income Certificate",
        "category": "income",
        "purpose": "Verification of economic eligibility and below-poverty-line status",
        "citizenTip": "Issued by village revenue officer.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-sn-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Direct benefit transfer credit destination",
        "citizenTip": "Account must be in the mother sole name.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Submit Application to ICDS Child Development Officer",
        "description": "Obtain application form from local Anganwadi worker or CDPO office and attach supporting certificates.",
        "portalOrOffice": "ICDS / Anganwadi Centre"
      },
      {
        "stepNumber": 2,
        "title": "Discreet Inquiry by Social Justice Officer",
        "description": "District Social Justice Officer conducts confidential verification respecting privacy and dignity.",
        "portalOrOffice": "District Social Justice Office"
      },
      {
        "stepNumber": 3,
        "title": "Monthly DBT Direct Pension Activation",
        "description": "Upon approval, ₹2,000 is transferred monthly directly into the beneficiary bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Social Justice Department, Government of Kerala",
      "url": "https://sjd.kerala.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Justice Department",
      "helpline": "0471-2306040",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Targeted affirmative social justice program by Government of Kerala."
    }
  },
  {
    "id": "kl-vidyakiranam",
    "name": "Vidyakiranam Scheme (Kerala Disability Parent Educational Assistance)",
    "hindiName": "विद्याकिरणम योजना (केरल)",
    "teluguName": "విద్యాకిరణం పథకం (కేరళ)",
    "tamilName": "வித்யாகிரணம் திட்டம் (கேரளா)",
    "tagline": "Educational scholarship and book stipends for economically backward children whose parent(s) have benchmark disability (40%+).",
    "category": "education",
    "categoryLabel": "Education & Scholarships",
    "geographicScope": "State Scheme (Kerala)",
    "stateApplicability": "Kerala",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KL",
    "administeringGovernment": "Government of Kerala",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "ml"
    ],
    "lifeStage": "student",
    "beneficiaries": [
      "Children of Disabled Parents",
      "School and College Students",
      "BPL Families"
    ],
    "shortSummary": "Financial educational scholarships provided for 10 months every academic year to school and college students whose mother or father lives with physical or sensory disability.",
    "fullDescription": "Vidyakiranam protects children from dropping out of school or college due to economic distress caused by their parents disability. The Social Justice Department provides annual educational grants categorized across Class 1 to Post-Graduation and Professional courses.",
    "financialBenefit": "₹350 to ₹1,000 / month scholarship for 10 months per academic year (₹3,500 to ₹10,000 / year)",
    "keyObjectives": [
      "Ensure uninterrupted primary, secondary, and higher education for children of disabled parents",
      "Alleviate educational and transport expenses for families living with disability",
      "Encourage children of PwD parents to complete professional degrees and ITI diplomas"
    ],
    "eligibilityRules": {
      "isBPLRequired": true,
      "stateResidence": "Kerala",
      "minDisabilityPercentage": 40,
      "notes": "Either father or mother (or both) must have benchmark disability certificate of 40% or more. Student must be enrolled in recognized educational institution."
    },
    "eligibilityHighlights": [
      "Student enrolled in recognized government or aided school/college in Kerala",
      "Either parent possesses UDID card or medical board disability certificate (40%+)",
      "Family belongs to BPL category or certified annual income under ₹1,00,000"
    ],
    "exclusions": [
      "Students receiving parallel complete boarding scholarships from state or central schemes",
      "Students failing or repeating the same academic grade"
    ],
    "requiredDocuments": [
      {
        "id": "doc-kl-vk-pwd",
        "name": "UDID Card / Disability Certificate of Parent (≥40%)",
        "category": "disability",
        "purpose": "Proof of benchmark disability of either parent",
        "citizenTip": "Issued by district medical board.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-vk-study",
        "name": "Study Certificate from Head of Institution",
        "category": "academic",
        "purpose": "Verification of active enrollment, current class, and conduct",
        "citizenTip": "Signed and sealed by school principal or college dean.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-vk-bank",
        "name": "Bank Passbook of Student / Joint Account with Parent",
        "category": "bank",
        "purpose": "Direct scholarship deposit destination",
        "citizenTip": "Must have active IFSC and Aadhaar mapping.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Apply through SUNEETHI Portal",
        "description": "Submit online application through suneethi.sjd.kerala.gov.in during the annual scholarship call.",
        "portalOrOffice": "suneethi.sjd.kerala.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Institutional Verification by Principal",
        "description": "The school or college verifies student attendance and marks card digitally on the portal.",
        "portalOrOffice": "School / College Portal"
      },
      {
        "stepNumber": 3,
        "title": "District Social Justice Approval & DBT Release",
        "description": "District Social Justice Officer sanctions the scholarship, and funds are credited directly to the student bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Directorate of Social Justice, Government of Kerala",
      "url": "https://sjd.kerala.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Social Justice Department",
      "helpline": "0471-2306040",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Annual educational assistance managed through Suneethi portal."
    }
  },
  {
    "id": "kl-subhiksha-keralam",
    "name": "Subhiksha Keralam (Integrated Food Security & Fallow Land Cultivation)",
    "hindiName": "सुभिक्षा केरलम योजना",
    "teluguName": "సుభిక్ష కేరళం పథకం",
    "tamilName": "சுபிக்ஷா கேரளம் திட்டம்",
    "tagline": "Targeted production incentives, capital subsidies, and fallow land development support to make Kerala self-reliant in food production.",
    "category": "agriculture",
    "categoryLabel": "Agriculture & Farming",
    "geographicScope": "State Scheme (Kerala)",
    "stateApplicability": "Kerala",
    "isCentral": false,
    "governmentLevel": "state",
    "jurisdictionType": "state",
    "stateCode": "KL",
    "administeringGovernment": "Government of Kerala",
    "schemeStatus": "active",
    "languages": [
      "en",
      "hi",
      "ml"
    ],
    "lifeStage": "worker",
    "beneficiaries": [
      "Farmers",
      "Kudumbashree Joint Liability Groups",
      "Youth Agri-Entrepreneurs"
    ],
    "shortSummary": "Financial incentives and production subsidies provided to farmers and self-help groups bringing fallow land under paddy, tuber, vegetable, and pulse cultivation.",
    "fullDescription": "Subhiksha Keralam is an integrated flagship initiative spearheaded by the Agriculture Development & Farmers Welfare Department to achieve food self-sufficiency in Kerala by converting unused fallow lands into productive agricultural parcels with subsidies up to ₹40,000 per hectare.",
    "financialBenefit": "₹40,000 / hectare subsidy for fallow land paddy & ₹30,000 / hectare for tubers and vegetables",
    "keyObjectives": [
      "Bring over 25,000 hectares of fallow land under active organic cultivation",
      "Provide direct production subsidies and input kits to small farmers and Kudumbashree groups",
      "Ensure guaranteed market off-take through Horticorp and local agricultural cooperatives"
    ],
    "eligibilityRules": {
      "occupations": [
        "Farmer",
        "Tenant Cultivator",
        "Kudumbashree JLG Member"
      ],
      "stateResidence": "Kerala",
      "notes": "Must cultivate agricultural crops on owned or leased fallow land in Kerala. Minimum area criteria apply as per local Krishi Bhavan guidelines."
    },
    "eligibilityHighlights": [
      "Farmers, farmer groups, or Kudumbashree JLGs residing in Kerala",
      "Willing to bring documented fallow land under cultivation for at least two crop seasons",
      "Registered with local Krishi Bhavan through AIMS portal"
    ],
    "exclusions": [
      "Unauthorized encroachment on forest land or public utility lands",
      "Parcels already receiving non-agricultural conversion clearances"
    ],
    "requiredDocuments": [
      {
        "id": "doc-kl-sk-land",
        "name": "Land Tax Receipt / Lease Agreement for Fallow Land",
        "category": "land",
        "purpose": "Proof of land possession or registered tenancy",
        "citizenTip": "Obtain lease endorsement from Grama Panchayat Agriculture Officer.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-sk-aadhaar",
        "name": "Aadhaar Card of Farmer / JLG President",
        "category": "identity",
        "purpose": "Farmer identity verification on AIMS portal",
        "citizenTip": "Check your mobile linkage for portal alerts.",
        "isMandatory": true
      },
      {
        "id": "doc-kl-sk-bank",
        "name": "Aadhaar-Seeded Bank Passbook",
        "category": "bank",
        "purpose": "Direct subsidy transfer destination",
        "citizenTip": "Submit cancelled cheque or passbook copy.",
        "isMandatory": true
      }
    ],
    "applicationSteps": [
      {
        "stepNumber": 1,
        "title": "Register on Kerala AIMS Agriculture Portal",
        "description": "Create farmer profile on aims.kerala.gov.in and register your land details.",
        "portalOrOffice": "aims.kerala.gov.in"
      },
      {
        "stepNumber": 2,
        "title": "Inspection by Krishi Bhavan Agricultural Officer",
        "description": "Local Agricultural Officer inspects the fallow parcel and approves sowing plan.",
        "portalOrOffice": "Local Krishi Bhavan"
      },
      {
        "stepNumber": 3,
        "title": "Sowing Verification and DBT Subsidy Credit",
        "description": "Upon verification of crop germination, the production subsidy is credited directly to the farmer bank account.",
        "portalOrOffice": "Direct Benefit Transfer"
      }
    ],
    "officialSource": {
      "name": "Agriculture Development & Farmers Welfare Department, Kerala",
      "url": "https://keralaagriculture.gov.in",
      "lastVerifiedDate": "October 2026",
      "department": "Agriculture Development & Farmers Welfare Department",
      "helpline": "1800-425-1661",
      "verificationStatus": "verified",
      "linkStatus": "accessible",
      "verificationNotes": "Statewide food self-sufficiency program managed via AIMS portal."
    }
  }
];
