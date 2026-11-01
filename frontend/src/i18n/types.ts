export type LanguageCode = 'en' | 'hi' | 'te' | 'ta';

export interface LanguageInfo {
  code: LanguageCode;
  name: string;
  nativeName: string;
  speechLocale: string;
}

export const SUPPORTED_LANGUAGES: LanguageInfo[] = [
  { code: 'en', name: 'English', nativeName: 'English', speechLocale: 'en-IN' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी (Hindi)', speechLocale: 'hi-IN' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు (Telugu)', speechLocale: 'te-IN' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ் (Tamil)', speechLocale: 'ta-IN' }
];
