import { en } from './locales/en';
import { hi } from './locales/hi';
import { te } from './locales/te';
import { ta } from './locales/ta';
import type { LanguageCode } from './types';
import type { TranslationKey } from './locales/en';

export const translations: Record<LanguageCode, Record<TranslationKey, string>> = {
  en,
  hi,
  te,
  ta
};

export { type TranslationKey } from './locales/en';
export { SUPPORTED_LANGUAGES, type LanguageCode, type LanguageInfo } from './types';
