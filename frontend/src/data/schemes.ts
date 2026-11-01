import type { Scheme } from '../types/scheme';
import { CENTRAL_SCHEMES } from './schemes/central';
import { SOUTH_STATES_SCHEMES } from './schemes/statesSouth';
import { NORTH_STATES_SCHEMES } from './schemes/statesNorth';
import { EAST_STATES_SCHEMES } from './schemes/statesEast';
import { WEST_STATES_SCHEMES } from './schemes/statesWest';
import { NORTHEAST_STATES_SCHEMES } from './schemes/statesNorthEast';
import { UT_SCHEMES } from './schemes/unionTerritories';
import { GOVERNMENTS } from './governments';

export const SCHEMES: Scheme[] = [
  ...CENTRAL_SCHEMES,
  ...SOUTH_STATES_SCHEMES,
  ...NORTH_STATES_SCHEMES,
  ...EAST_STATES_SCHEMES,
  ...WEST_STATES_SCHEMES,
  ...NORTHEAST_STATES_SCHEMES,
  ...UT_SCHEMES,
];

export const CATEGORIES_CONFIG = [
  { id: 'all', label: 'All Schemes', icon: 'Sparkles', count: SCHEMES.length },
  { id: 'agriculture', label: 'Agriculture & Farming', icon: 'Wheat', count: SCHEMES.filter(s => s.category === 'agriculture').length },
  { id: 'disability-pwd', label: 'Persons with Disabilities', icon: 'Accessibility', count: SCHEMES.filter(s => s.category === 'disability-pwd').length },
  { id: 'children-nutrition', label: 'Children & Early Nutrition', icon: 'Baby', count: SCHEMES.filter(s => s.category === 'children-nutrition').length },
  { id: 'education', label: 'Education & Scholarships', icon: 'GraduationCap', count: SCHEMES.filter(s => s.category === 'education').length },
  { id: 'unemployment-skills', label: 'Unemployment & Skills', icon: 'Briefcase', count: SCHEMES.filter(s => s.category === 'unemployment-skills').length },
  { id: 'workers-social-security', label: 'Workers & Social Security', icon: 'HardHat', count: SCHEMES.filter(s => s.category === 'workers-social-security').length },
  { id: 'women', label: 'Women & Child Development', icon: 'HeartHandshake', count: SCHEMES.filter(s => s.category === 'women').length },
  { id: 'seniors-elderly', label: 'Senior Citizens', icon: 'UserCheck', count: SCHEMES.filter(s => s.category === 'seniors-elderly').length },
  { id: 'healthcare', label: 'Healthcare & Wellness', icon: 'Activity', count: SCHEMES.filter(s => s.category === 'healthcare').length },
  { id: 'housing', label: 'Housing & Clean Energy', icon: 'Home', count: SCHEMES.filter(s => s.category === 'housing').length },
  { id: 'low-income-welfare', label: 'Food & Essential Welfare', icon: 'ShieldCheck', count: SCHEMES.filter(s => s.category === 'low-income-welfare').length },
  { id: 'business', label: 'Business & Micro-Credit', icon: 'Coins', count: SCHEMES.filter(s => s.category === 'business').length },
  { id: 'artisans', label: 'Artisans & Handcrafts', icon: 'Hammer', count: SCHEMES.filter(s => s.category === 'artisans').length }
];

export const STATES_CONFIG = [
  { id: 'all', label: 'All India & All Governments' },
  { id: 'central', label: 'Central Government of India' },
  ...GOVERNMENTS.filter(g => g.level !== 'central').map(g => ({
    id: g.stateCode || g.slug,
    label: g.name
  }))
];

export const CATEGORIES = CATEGORIES_CONFIG;
