import type { Scheme, SchemeCategory, SchemeOperationalStatus } from '../types/scheme';
import type { GovernmentId, StateCode, GovernmentLevel, JurisdictionType } from '../types/government';
import { SCHEMES } from '../data/schemes';
import { GOVERNMENTS, getGovernmentBySlug } from '../data/governments';

export interface GovernmentStats {
  governmentId: GovernmentId | string;
  name: string;
  level: GovernmentLevel;
  jurisdictionType?: JurisdictionType;
  stateCode: StateCode | null;
  schemeCount: number;
  verifiedCount: number;
  partiallyVerifiedCount: number;
}

export interface CatalogSummary {
  totalSchemes: number;
  centralCount: number;
  stateCount: number;
  utCount: number;
  governmentBreakdown: Record<string, number>;
}

/**
 * Returns all schemes strictly administered by the Central Government of India.
 * Central schemes must have governmentLevel === 'central' and stateCode === null.
 */
export function getCentralSchemes(schemes: Scheme[] = SCHEMES): Scheme[] {
  return schemes.filter(s => s.governmentLevel === 'central' && s.stateCode === null);
}

/**
 * Returns all schemes strictly administered by a specific state government or UT by state code.
 * State/UT schemes have (governmentLevel === 'state' || governmentLevel === 'union-territory') and matching stateCode.
 */
export function getStateSchemes(stateCode: StateCode, schemes: Scheme[] = SCHEMES): Scheme[] {
  return schemes.filter(s => 
    (s.governmentLevel === 'state' || s.governmentLevel === 'union-territory') && 
    s.stateCode === stateCode
  );
}

/**
 * Returns all schemes administered by a given government (by slug, id, or stateCode).
 */
export function getSchemesByGovernment(governmentIdOrSlug: string, schemes: Scheme[] = SCHEMES): Scheme[] {
  const gov = getGovernmentBySlug(governmentIdOrSlug);
  if (!gov) {
    // If not matching slug, check by id or stateCode
    const found = GOVERNMENTS.find(g => 
      g.id.toLowerCase() === governmentIdOrSlug.toLowerCase() ||
      g.slug.toLowerCase() === governmentIdOrSlug.toLowerCase() ||
      (g.stateCode && g.stateCode.toLowerCase() === governmentIdOrSlug.toLowerCase())
    );
    if (!found) return [];
    if (found.level === 'central') {
      return getCentralSchemes(schemes);
    }
    if (found.stateCode) {
      return getStateSchemes(found.stateCode, schemes);
    }
    return [];
  }

  if (gov.level === 'central') {
    return getCentralSchemes(schemes);
  }
  if (gov.stateCode) {
    return getStateSchemes(gov.stateCode, schemes);
  }
  return [];
}

/**
 * Returns Central Government schemes that are accessible in a specific state.
 * These are strictly central schemes and are marked as such (never mixed into state counts).
 */
export function getCentralSchemesAvailableInState(schemes: Scheme[] = SCHEMES): Scheme[] {
  return schemes.filter(s => s.governmentLevel === 'central');
}

/**
 * Filters schemes by category within an optional government scope.
 */
export function getSchemesByCategory(
  category: SchemeCategory | 'all',
  governmentIdOrSlug?: string,
  schemes: Scheme[] = SCHEMES
): Scheme[] {
  const baseList = governmentIdOrSlug ? getSchemesByGovernment(governmentIdOrSlug, schemes) : schemes;
  if (category === 'all') return baseList;
  return baseList.filter(s => s.category === category);
}

/**
 * Filters schemes by operational status (active, upcoming, etc.).
 */
export function getSchemesByStatus(
  status: SchemeOperationalStatus,
  governmentIdOrSlug?: string,
  schemes: Scheme[] = SCHEMES
): Scheme[] {
  const baseList = governmentIdOrSlug ? getSchemesByGovernment(governmentIdOrSlug, schemes) : schemes;
  return baseList.filter(s => s.schemeStatus === status);
}

/**
 * Search schemes across multiple localized names, taglines, summaries, and beneficiaries.
 */
export function searchSchemes(
  query: string,
  governmentIdOrSlug?: string,
  schemes: Scheme[] = SCHEMES
): Scheme[] {
  const baseList = governmentIdOrSlug ? getSchemesByGovernment(governmentIdOrSlug, schemes) : schemes;
  if (!query.trim()) return baseList;

  const q = query.toLowerCase().trim();
  return baseList.filter(scheme => {
    const matchName = scheme.name.toLowerCase().includes(q);
    const matchHindi = scheme.hindiName?.toLowerCase().includes(q) ?? false;
    const matchTelugu = scheme.teluguName?.toLowerCase().includes(q) ?? false;
    const matchTamil = scheme.tamilName?.toLowerCase().includes(q) ?? false;
    const matchTagline = scheme.tagline.toLowerCase().includes(q);
    const matchSummary = scheme.shortSummary.toLowerCase().includes(q);
    const matchBenefit = scheme.financialBenefit.toLowerCase().includes(q);
    const matchCategory = scheme.categoryLabel.toLowerCase().includes(q);
    const matchBeneficiary = scheme.beneficiaries.some(b => b.toLowerCase().includes(q));

    return matchName || matchHindi || matchTelugu || matchTamil || matchTagline || matchSummary || matchBenefit || matchCategory || matchBeneficiary;
  });
}

/**
 * Calculate accurate government statistics from the actual data catalog.
 * Zero fabrication: every number is derived directly from counting the array.
 */
export function getGovernmentStats(schemes: Scheme[] = SCHEMES): GovernmentStats[] {
  return GOVERNMENTS.filter(g => g.isEnabled).map(gov => {
    const govSchemes = getSchemesByGovernment(gov.slug, schemes);
    const verifiedCount = govSchemes.filter(s => s.officialSource.verificationStatus === 'verified').length;
    const partiallyVerifiedCount = govSchemes.filter(s => s.officialSource.verificationStatus === 'partially-verified').length;

    return {
      governmentId: gov.id,
      name: gov.name,
      level: gov.level,
      jurisdictionType: gov.jurisdictionType,
      stateCode: gov.stateCode,
      schemeCount: govSchemes.length,
      verifiedCount,
      partiallyVerifiedCount
    };
  });
}

/**
 * Get catalog-wide summary statistics.
 */
export function getCatalogSummary(schemes: Scheme[] = SCHEMES): CatalogSummary {
  const central = getCentralSchemes(schemes).length;
  const state = schemes.filter(s => s.governmentLevel === 'state').length;
  const ut = schemes.filter(s => s.governmentLevel === 'union-territory').length;

  const breakdown: Record<string, number> = {};
  GOVERNMENTS.filter(g => g.isEnabled).forEach(gov => {
    breakdown[gov.slug] = getSchemesByGovernment(gov.slug, schemes).length;
  });

  return {
    totalSchemes: schemes.length,
    centralCount: central,
    stateCount: state,
    utCount: ut,
    governmentBreakdown: breakdown
  };
}
