import type { GovernmentConfig } from '../types/government';

export const GOVERNMENTS: GovernmentConfig[] = [
  {
    id: 'central',
    slug: 'central',
    name: 'Central Government of India',
    hindiName: 'भारत सरकार (केंद्रीय योजनाएं)',
    teluguName: 'భారత కేంద్ర ప్రభుత్వం',
    tamilName: 'மத்திய அரசு (இந்தியா)',
    level: 'central',
    stateCode: null,
    regionLabel: 'All India',
    shortDescription: 'National welfare, scholarship, agriculture, healthcare, and social security programs administered by Government of India ministries.',
    fullDescription: 'Central Sector and Centrally Sponsored schemes funded by the Union Government of India to empower citizens, farmers, workers, students, and entrepreneurs across all 28 states and 8 union territories.',
    officialPortalUrl: 'https://www.india.gov.in',
    officialPortalName: 'National Portal of India',
    availableLanguages: ['en', 'hi', 'te', 'ta'],
    isEnabled: true,
    capitalCity: 'New Delhi',
    emblemLabel: 'Government of India',
    helpline: '1800-11-4000',
    departmentCountLabel: '50+ Central Ministries'
  },
  {
    id: 'andhra-pradesh',
    slug: 'andhra-pradesh',
    name: 'Andhra Pradesh State Government',
    hindiName: 'आंध्र प्रदेश राज्य सरकार',
    teluguName: 'ఆంధ్రప్రదేశ్ రాష్ట్ర ప్రభుత్వం',
    tamilName: 'ஆந்திரப் பிரதேச அரசு',
    level: 'state',
    stateCode: 'AP',
    regionLabel: 'Andhra Pradesh',
    shortDescription: 'Flagship welfare, disability pension, agricultural input support, and healthcare schemes administered by the Government of Andhra Pradesh.',
    fullDescription: 'State-administered initiatives delivered through Village and Ward Secretariats (Grama/Ward Sachivalayams) guaranteeing direct DBT transfers, disability pensions, free healthcare, and maternal support.',
    officialPortalUrl: 'https://ap.gov.in',
    officialPortalName: 'Andhra Pradesh Official Portal',
    availableLanguages: ['en', 'te'],
    isEnabled: true,
    capitalCity: 'Amaravati',
    emblemLabel: 'Government of Andhra Pradesh',
    helpline: '1902',
    departmentCountLabel: '34 State Departments'
  },
  {
    id: 'telangana',
    slug: 'telangana',
    name: 'Telangana State Government',
    hindiName: 'तेलंगाना राज्य सरकार',
    teluguName: 'తెలంగాణ రాష్ట్ర ప్రభుత్వం',
    tamilName: 'தெலுங்கானா அரசு',
    level: 'state',
    stateCode: 'TG',
    regionLabel: 'Telangana',
    shortDescription: 'Welfare, farmer investment assistance, free electricity, women empowerment, and healthcare schemes administered by the Government of Telangana.',
    fullDescription: 'Flagship public welfare guarantees administered by the Government of Telangana providing financial protection for farmers, women, vulnerable pensioners, and low-income families holding Food Security Cards.',
    officialPortalUrl: 'https://www.telangana.gov.in',
    officialPortalName: 'Telangana State Portal',
    availableLanguages: ['en', 'te'],
    isEnabled: true,
    capitalCity: 'Hyderabad',
    emblemLabel: 'Government of Telangana',
    helpline: '1800-425-4440',
    departmentCountLabel: '30 State Departments'
  },
  {
    id: 'tamil-nadu',
    slug: 'tamil-nadu',
    name: 'Tamil Nadu State Government',
    hindiName: 'तमिलनाडु राज्य सरकार',
    teluguName: 'తమిళనాడు రాష్ట్ర ప్రభుత్వం',
    tamilName: 'தமிழ்நாடு அரசு',
    level: 'state',
    stateCode: 'TN',
    regionLabel: 'Tamil Nadu',
    shortDescription: 'Basic income rights, girl child higher education, comprehensive medical insurance, and disability maintenance schemes by the Government of Tamil Nadu.',
    fullDescription: 'Pioneering social security, public healthcare, women basic income rights, and youth skill-development programs administered by the Government of Tamil Nadu for residents and students across the state.',
    officialPortalUrl: 'https://www.tn.gov.in',
    officialPortalName: 'Tamil Nadu Government Portal',
    availableLanguages: ['en', 'ta'],
    isEnabled: true,
    capitalCity: 'Chennai',
    emblemLabel: 'Government of Tamil Nadu',
    helpline: '1100',
    departmentCountLabel: '32 State Departments'
  },
  // Future States Configured (Hidden until enabled)
  {
    id: 'karnataka',
    slug: 'karnataka',
    name: 'Karnataka State Government',
    hindiName: 'कर्नाटक राज्य सरकार',
    teluguName: 'కర్ణాటక రాష్ట్ర ప్రభుత్వం',
    tamilName: 'கர்நாடக அரசு',
    level: 'state',
    stateCode: 'KA',
    regionLabel: 'Karnataka',
    shortDescription: 'Welfare schemes administered by the Government of Karnataka.',
    fullDescription: 'Public services and welfare guarantees under the Government of Karnataka.',
    officialPortalUrl: 'https://karnataka.gov.in',
    officialPortalName: 'Karnataka State Portal',
    availableLanguages: ['en', 'kn'],
    isEnabled: false,
    capitalCity: 'Bengaluru',
    emblemLabel: 'Government of Karnataka',
    helpline: '1902'
  },
  {
    id: 'maharashtra',
    slug: 'maharashtra',
    name: 'Maharashtra State Government',
    hindiName: 'महाराष्ट्र राज्य सरकार',
    teluguName: 'మహారాష్ట్ర రాష్ట్ర ప్రభుత్వం',
    tamilName: 'மகாராஷ்டிரா அரசு',
    level: 'state',
    stateCode: 'MH',
    regionLabel: 'Maharashtra',
    shortDescription: 'Welfare schemes administered by the Government of Maharashtra.',
    fullDescription: 'Public services and welfare schemes under the Government of Maharashtra.',
    officialPortalUrl: 'https://www.maharashtra.gov.in',
    officialPortalName: 'Maharashtra State Portal',
    availableLanguages: ['en', 'mr'],
    isEnabled: false,
    capitalCity: 'Mumbai',
    emblemLabel: 'Government of Maharashtra',
    helpline: '1800-120-8040'
  }
];

export const ENABLED_GOVERNMENTS = GOVERNMENTS.filter(g => g.isEnabled);

export function getGovernmentBySlug(slug: string): GovernmentConfig | undefined {
  return GOVERNMENTS.find(g => g.slug.toLowerCase() === slug.toLowerCase());
}

export function getGovernmentById(id: string): GovernmentConfig | undefined {
  return GOVERNMENTS.find(g => g.id.toLowerCase() === id.toLowerCase());
}

export function getGovernmentByStateCode(stateCode: string): GovernmentConfig | undefined {
  return GOVERNMENTS.find(g => g.stateCode?.toUpperCase() === stateCode.toUpperCase());
}
