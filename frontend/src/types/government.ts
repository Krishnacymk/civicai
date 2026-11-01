export type GovernmentLevel = 'central' | 'state';

export type StateCode = 'AP' | 'TG' | 'TN' | 'KA' | 'MH' | 'KL' | 'DL' | 'GJ' | 'WB';

export type GovernmentId = 'central' | 'andhra-pradesh' | 'telangana' | 'tamil-nadu';

export interface GovernmentConfig {
  id: GovernmentId | string;
  slug: string;
  name: string;
  hindiName: string;
  teluguName: string;
  tamilName: string;
  level: GovernmentLevel;
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
