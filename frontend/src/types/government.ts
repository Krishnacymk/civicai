export type GovernmentLevel = 'central' | 'state' | 'union-territory';

export type JurisdictionType = 'central' | 'state' | 'union-territory';

export type AdministrativeSetup = 
  | 'central-ministry'
  | 'state-legislature'
  | 'ut-with-legislature'
  | 'ut-without-legislature';

export type StateCode =
  // 28 States
  | 'AP' | 'AR' | 'AS' | 'BR' | 'CG' | 'GA' | 'GJ' | 'HR' | 'HP' | 'JH'
  | 'KA' | 'KL' | 'MP' | 'MH' | 'MN' | 'ML' | 'MZ' | 'NL' | 'OD' | 'PB'
  | 'RJ' | 'SK' | 'TN' | 'TG' | 'TR' | 'UP' | 'UK' | 'WB'
  // 8 Union Territories
  | 'AN' | 'CH' | 'DH' | 'DL' | 'JK' | 'LA' | 'LD' | 'PY';

export type GovernmentId =
  | 'central'
  // States
  | 'andhra-pradesh' | 'arunachal-pradesh' | 'assam' | 'bihar' | 'chhattisgarh'
  | 'goa' | 'gujarat' | 'haryana' | 'himachal-pradesh' | 'jharkhand'
  | 'karnataka' | 'kerala' | 'madhya-pradesh' | 'maharashtra' | 'manipur'
  | 'meghalaya' | 'mizoram' | 'nagaland' | 'odisha' | 'punjab'
  | 'rajasthan' | 'sikkim' | 'tamil-nadu' | 'telangana' | 'tripura'
  | 'uttar-pradesh' | 'uttarakhand' | 'west-bengal'
  // Union Territories
  | 'andaman-and-nicobar' | 'chandigarh' | 'dadra-and-nagar-haveli-and-daman-and-diu'
  | 'delhi' | 'jammu-and-kashmir' | 'ladakh' | 'lakshadweep' | 'puducherry';

export interface GovernmentConfig {
  id: GovernmentId | string;
  slug: string;
  name: string;
  hindiName: string;
  teluguName: string;
  tamilName: string;
  level: GovernmentLevel;
  jurisdictionType: JurisdictionType;
  administrativeSetup: AdministrativeSetup;
  stateCode: StateCode | null;
  regionLabel: string;
  shortDescription: string;
  fullDescription: string;
  officialPortalUrl: string;
  officialPortalName: string;
  availableLanguages: string[];
  isEnabled: boolean;
  capitalCity: string;
  emblemLabel: string;
  helpline: string;
  departmentCountLabel?: string;
}

export interface GovernmentStats {
  governmentId: string;
  slug: string;
  name: string;
  regionLabel: string;
  level: GovernmentLevel;
  jurisdictionType: JurisdictionType;
  schemeCount: number;
}
