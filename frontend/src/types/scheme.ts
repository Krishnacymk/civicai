import type { GovernmentLevel, StateCode, JurisdictionType } from './government';

export type SchemeCategory = 
  | 'agriculture'
  | 'education'
  | 'healthcare'
  | 'women'
  | 'business'
  | 'pension'
  | 'housing'
  | 'artisans'
  | 'children-nutrition'
  | 'disability-pwd'
  | 'unemployment-skills'
  | 'workers-social-security'
  | 'seniors-elderly'
  | 'low-income-welfare';

export type SchemeOperationalStatus = 'active' | 'closed' | 'upcoming' | 'needs-verification' | 'discontinued';

export interface RequiredDocument {
  id: string;
  name: string;
  category: 'identity' | 'income' | 'land' | 'caste' | 'academic' | 'bank' | 'medical' | 'disability' | 'other';
  purpose: string;
  citizenTip: string;
  isMandatory: boolean;
}

export interface EligibilityRule {
  minAge?: number;
  maxAge?: number;
  maxIncome?: number; // Annual income ceiling in INR
  occupations?: string[];
  landHoldingMaxHectares?: number;
  socialCategories?: string[]; // 'General', 'OBC', 'SC', 'ST', 'EWS'
  targetGender?: 'all' | 'female' | 'male';
  isBPLRequired?: boolean;
  notes: string;
  minDisabilityPercentage?: number; // For PwD schemes (e.g. 40, 80)
  requiresUDID?: boolean;
  stateResidence?: string;
  educationLevel?: string[];
  employmentStatus?: string[];
}

export interface ApplicationStep {
  stepNumber: number;
  title: string;
  description: string;
  portalOrOffice: string;
}

export type VerificationStatus = 'verified' | 'partially-verified' | 'needs-verification' | 'archived_or_discontinued';
export type LinkStatus = 'accessible' | 'slow-or-intermittent' | 'external-portal';

export interface OfficialSource {
  name: string;
  url: string;
  lastVerifiedDate: string;
  department: string;
  helpline?: string;
  verificationStatus: VerificationStatus;
  linkStatus?: LinkStatus;
  verificationNotes?: string;
}

export interface Scheme {
  id: string;
  name: string;
  hindiName?: string;
  teluguName?: string;
  tamilName?: string;
  tagline: string;
  category: SchemeCategory;
  categoryLabel: string;

  // Government & Geographic Classification
  governmentLevel: GovernmentLevel;
  jurisdictionType?: JurisdictionType;
  stateCode: StateCode | null;
  administeringGovernment: string;
  schemeStatus: SchemeOperationalStatus;
  languages?: string[];
  sourceNotes?: string;

  // Backward compatibility fields
  geographicScope: string;
  stateApplicability: string;
  isCentral: boolean;

  beneficiaries: string[];
  shortSummary: string;
  fullDescription: string;
  financialBenefit: string;
  keyObjectives: string[];
  eligibilityRules: EligibilityRule;
  eligibilityHighlights: string[];
  exclusions: string[];
  requiredDocuments: RequiredDocument[];
  applicationSteps: ApplicationStep[];
  officialSource: OfficialSource;
  badge?: string;
  lifeStage?: 'childhood' | 'student' | 'youth' | 'worker' | 'parent' | 'senior' | 'all';
}

