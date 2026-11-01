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

describe('Government-Wise Scheme Classification and Filtering', () => {

  it('correctly classifies all Central Government schemes with stateCode === null', () => {
    const centralSchemes = getCentralSchemes();
    expect(centralSchemes.length).toBeGreaterThan(0);

    centralSchemes.forEach(scheme => {
      expect(scheme.governmentLevel).toBe('central');
      expect(scheme.stateCode).toBeNull();
      expect(scheme.administeringGovernment).toBe('Government of India');
    });
  });

  it('strictly isolates Andhra Pradesh schemes (AP schemes never in TG or TN)', () => {
    const apSchemes = getStateSchemes('AP');
    const tgSchemes = getStateSchemes('TG');
    const tnSchemes = getStateSchemes('TN');

    expect(apSchemes.length).toBe(4);
    
    // Check every AP scheme
    apSchemes.forEach(apScheme => {
      expect(apScheme.governmentLevel).toBe('state');
      expect(apScheme.stateCode).toBe('AP');
      expect(apScheme.administeringGovernment).toBe('Government of Andhra Pradesh');

      // Verify strict isolation: AP scheme id MUST NOT be in TG or TN
      const inTG = tgSchemes.some(s => s.id === apScheme.id);
      const inTN = tnSchemes.some(s => s.id === apScheme.id);
      expect(inTG).toBe(false);
      expect(inTN).toBe(false);
    });
  });

  it('strictly isolates Telangana schemes (TG schemes never in AP or TN)', () => {
    const tgSchemes = getStateSchemes('TG');
    const apSchemes = getStateSchemes('AP');
    const tnSchemes = getStateSchemes('TN');

    expect(tgSchemes.length).toBe(5);

    // Check every TG scheme
    tgSchemes.forEach(tgScheme => {
      expect(tgScheme.governmentLevel).toBe('state');
      expect(tgScheme.stateCode).toBe('TG');
      expect(tgScheme.administeringGovernment).toBe('Government of Telangana');

      // Verify strict isolation: TG scheme id MUST NOT be in AP or TN
      const inAP = apSchemes.some(s => s.id === tgScheme.id);
      const inTN = tnSchemes.some(s => s.id === tgScheme.id);
      expect(inAP).toBe(false);
      expect(inTN).toBe(false);
    });
  });

  it('strictly isolates Tamil Nadu schemes (TN schemes never in AP or TG)', () => {
    const tnSchemes = getStateSchemes('TN');
    const apSchemes = getStateSchemes('AP');
    const tgSchemes = getStateSchemes('TG');

    expect(tnSchemes.length).toBe(5);

    // Check every TN scheme
    tnSchemes.forEach(tnScheme => {
      expect(tnScheme.governmentLevel).toBe('state');
      expect(tnScheme.stateCode).toBe('TN');
      expect(tnScheme.administeringGovernment).toBe('Government of Tamil Nadu');

      // Verify strict isolation: TN scheme id MUST NOT be in AP or TG
      const inAP = apSchemes.some(s => s.id === tnScheme.id);
      const inTG = tgSchemes.some(s => s.id === tnScheme.id);
      expect(inAP).toBe(false);
      expect(inTG).toBe(false);
    });
  });

  it('retrieves schemes by government slug correctly', () => {
    const central = getSchemesByGovernment('central');
    const ap = getSchemesByGovernment('andhra-pradesh');
    const tg = getSchemesByGovernment('telangana');
    const tn = getSchemesByGovernment('tamil-nadu');

    expect(central.length).toBe(25);
    expect(ap.length).toBe(4);
    expect(tg.length).toBe(5);
    expect(tn.length).toBe(5);

    // Non-existent government returns empty array
    expect(getSchemesByGovernment('invalid-gov')).toEqual([]);
  });

  it('calculates exact statistics without fabrication', () => {
    const stats = getGovernmentStats();
    expect(stats.length).toBe(4); // 4 enabled governments

    const centralStat = stats.find(s => s.governmentId === 'central')!;
    const apStat = stats.find(s => s.governmentId === 'andhra-pradesh')!;
    const tgStat = stats.find(s => s.governmentId === 'telangana')!;
    const tnStat = stats.find(s => s.governmentId === 'tamil-nadu')!;

    expect(centralStat.schemeCount).toBe(25);
    expect(apStat.schemeCount).toBe(4);
    expect(tgStat.schemeCount).toBe(5);
    expect(tnStat.schemeCount).toBe(5);

    const summary = getCatalogSummary();
    expect(summary.totalSchemes).toBe(39);
    expect(summary.centralCount).toBe(25);
    expect(summary.stateCount).toBe(14);
    expect(summary.centralCount + summary.stateCount).toBe(summary.totalSchemes);
  });

  it('maintains distinct Central schemes available in state without contaminating state counts', () => {
    const centralInState = getCentralSchemesAvailableInState();
    expect(centralInState.length).toBe(25);
    centralInState.forEach(s => {
      expect(s.governmentLevel).toBe('central');
    });

    const apStateOnly = getStateSchemes('AP');
    expect(apStateOnly.length).toBe(4);
    // Ensure no central schemes are in apStateOnly
    expect(apStateOnly.every(s => s.governmentLevel === 'state')).toBe(true);
  });

  it('filters by category within government scope accurately', () => {
    const tgAgriculture = getSchemesByCategory('agriculture', 'telangana');
    expect(tgAgriculture.length).toBe(1);
    expect(tgAgriculture[0].id).toBe('tg-rythu-bharosa');

    const tnEducation = getSchemesByCategory('education', 'tamil-nadu');
    expect(tnEducation.length).toBe(1);
    expect(tnEducation[0].id).toBe('tn-pudhumai-penn');
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
  });

  it('ensures every scheme has verified official sources with valid gov URLs', () => {
    SCHEMES.forEach(scheme => {
      expect(scheme.officialSource.url).toBeDefined();
      expect(scheme.officialSource.url.startsWith('https://')).toBe(true);
      expect(scheme.officialSource.name).toBeDefined();
      expect(scheme.officialSource.verificationStatus).toBe('verified');
      expect(scheme.schemeStatus).toBe('active');
    });
  });

});
