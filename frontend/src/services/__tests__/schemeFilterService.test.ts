import { describe, it, expect } from 'vitest';
import {
  getCentralSchemes,
  getStateSchemes,
  getSchemesByGovernment,
  getCentralSchemesAvailableInState,
  getSchemesByCategory,
  getGovernmentStats,
  getCatalogSummary,
  searchSchemes
} from '../schemeFilterService';
import { SCHEMES } from '../../data/schemes';
import { GOVERNMENTS } from '../../data/governments';
import type { StateCode } from '../../types/government';

describe('National Master Government-Wise Scheme Classification and Verification Mission', () => {

  it('contains exactly 205 verified schemes across 37 government entities with zero duplicate IDs', () => {
    expect(SCHEMES.length).toBe(205);
    const idSet = new Set<string>();
    const duplicates: string[] = [];

    SCHEMES.forEach(s => {
      if (idSet.has(s.id)) {
        duplicates.push(s.id);
      }
      idSet.add(s.id);
    });

    expect(duplicates).toEqual([]);
    expect(idSet.size).toBe(205);
  });

  it('correctly classifies all 25 Central Government schemes with stateCode === null', () => {
    const centralSchemes = getCentralSchemes();
    expect(centralSchemes.length).toBe(25);

    centralSchemes.forEach(scheme => {
      expect(scheme.governmentLevel).toBe('central');
      expect(scheme.stateCode).toBeNull();
      expect(scheme.administeringGovernment).toBe('Government of India');
    });
  });

  it('verifies that all 28 Indian States have exactly 5 verified schemes each (total: 140 state schemes)', () => {
    const stateGovs = GOVERNMENTS.filter(g => g.jurisdictionType === 'state');
    expect(stateGovs.length).toBe(28);

    let totalStateSchemes = 0;
    stateGovs.forEach(gov => {
      expect(gov.stateCode).toBeDefined();
      const schemes = getStateSchemes(gov.stateCode as StateCode);
      expect(schemes.length).toBe(5);
      totalStateSchemes += schemes.length;

      schemes.forEach(s => {
        expect(s.governmentLevel).toBe('state');
        expect(s.stateCode).toBe(gov.stateCode);
        expect(s.administeringGovernment).toBeDefined();
        expect(s.administeringGovernment.length).toBeGreaterThan(0);
      });
    });

    expect(totalStateSchemes).toBe(140);
  });

  it('verifies that all 8 Union Territories have exactly 5 verified schemes each (total: 40 UT schemes)', () => {
    const utGovs = GOVERNMENTS.filter(g => g.jurisdictionType === 'union-territory');
    expect(utGovs.length).toBe(8);

    let totalUtSchemes = 0;
    utGovs.forEach(gov => {
      expect(gov.stateCode).toBeDefined();
      const schemes = getStateSchemes(gov.stateCode as StateCode);
      expect(schemes.length).toBe(5);
      totalUtSchemes += schemes.length;

      schemes.forEach(s => {
        expect(s.governmentLevel).toBe('union-territory');
        expect(s.stateCode).toBe(gov.stateCode);
        expect(s.administeringGovernment).toBeDefined();
        expect(s.administeringGovernment.length).toBeGreaterThan(0);
      });
    });

    expect(totalUtSchemes).toBe(40);
  });

  it('strictly isolates Andhra Pradesh schemes (AP schemes never leak into TG, TN, or other states)', () => {
    const apSchemes = getStateSchemes('AP');
    const tgSchemes = getStateSchemes('TG');
    const tnSchemes = getStateSchemes('TN');

    expect(apSchemes.length).toBe(5);
    expect(tgSchemes.length).toBe(5);
    expect(tnSchemes.length).toBe(5);

    apSchemes.forEach(apScheme => {
      expect(apScheme.governmentLevel).toBe('state');
      expect(apScheme.stateCode).toBe('AP');

      // Zero leakage
      expect(tgSchemes.some(s => s.id === apScheme.id)).toBe(false);
      expect(tnSchemes.some(s => s.id === apScheme.id)).toBe(false);
    });
  });

  it('retrieves schemes for all 37 governments by their slug accurately', () => {
    expect(GOVERNMENTS.length).toBe(37);

    GOVERNMENTS.forEach(gov => {
      const schemes = getSchemesByGovernment(gov.slug);
      if (gov.level === 'central') {
        expect(schemes.length).toBe(25);
      } else {
        expect(schemes.length).toBe(5);
      }
    });

    // Non-existent government returns empty array
    expect(getSchemesByGovernment('invalid-gov-slug')).toEqual([]);
  });

  it('calculates master statistics and catalog summary with 100% mathematical precision', () => {
    const stats = getGovernmentStats();
    expect(stats.length).toBe(37); // All 37 governments

    const summary = getCatalogSummary();
    expect(summary.totalSchemes).toBe(205);
    expect(summary.centralCount).toBe(25);
    expect(summary.stateCount).toBe(140);
    expect(summary.utCount).toBe(40);
    expect(summary.centralCount + summary.stateCount + summary.utCount).toBe(205);
  });

  it('maintains distinct Central schemes available in state without contaminating state counts', () => {
    const centralInState = getCentralSchemesAvailableInState();
    expect(centralInState.length).toBe(25);
    centralInState.forEach(s => {
      expect(s.governmentLevel).toBe('central');
      expect(s.stateCode).toBeNull();
    });

    const apStateOnly = getStateSchemes('AP');
    expect(apStateOnly.length).toBe(5);
    expect(apStateOnly.every(s => s.governmentLevel === 'state')).toBe(true);

    const dlUtOnly = getStateSchemes('DL');
    expect(dlUtOnly.length).toBe(5);
    expect(dlUtOnly.every(s => s.governmentLevel === 'union-territory')).toBe(true);
  });

  it('filters by category within government scope accurately', () => {
    const tgAgriculture = getSchemesByCategory('agriculture', 'telangana');
    expect(tgAgriculture.length).toBe(1);
    expect(tgAgriculture[0].id).toBe('tg-rythu-bharosa');

    const tnEducation = getSchemesByCategory('education', 'tamil-nadu');
    expect(tnEducation.length).toBe(1);
    expect(tnEducation[0].id).toBe('tn-pudhumai-penn');

    const dlHealth = getSchemesByCategory('healthcare', 'delhi');
    expect(dlHealth.length).toBe(1);
    expect(dlHealth[0].id).toBe('dl-delhi-arogya-kosh');
  });

  it('searches schemes across multilingual names and keywords', () => {
    // English search
    const rythuSearch = searchSchemes('rythu');
    expect(rythuSearch.length).toBeGreaterThanOrEqual(1);

    // Telugu search
    const teluguSearch = searchSchemes('రైతు');
    expect(teluguSearch.length).toBeGreaterThanOrEqual(1);

    // Tamil search
    const tamilSearch = searchSchemes('மகளிர்');
    expect(tamilSearch.length).toBeGreaterThanOrEqual(1);
    expect(tamilSearch.some(s => s.id === 'tn-kmut-women-basic-income')).toBe(true);

    // Hindi search
    const hindiSearch = searchSchemes('किसान');
    expect(hindiSearch.length).toBeGreaterThanOrEqual(1);
  });

  it('ensures every single scheme has verified official sources with valid HTTPS URLs', () => {
    SCHEMES.forEach(scheme => {
      expect(scheme.officialSource.url).toBeDefined();
      expect(scheme.officialSource.url.startsWith('https://')).toBe(true);
      expect(scheme.officialSource.name).toBeDefined();
      expect(scheme.officialSource.department).toBeDefined();
      expect(scheme.officialSource.verificationStatus).toBe('verified');
      expect(scheme.schemeStatus).toBe('active');
      expect(scheme.requiredDocuments.length).toBeGreaterThanOrEqual(1);
      expect(scheme.beneficiaries.length).toBeGreaterThanOrEqual(1);
      expect(scheme.financialBenefit).toBeDefined();
    });
  });

});
