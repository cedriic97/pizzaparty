export enum LanguageCodes {
  GERMAN = 'de',
  ENGLISH = 'en',
  SPANISH = 'es',
}

export interface LanguageDetail {
  iconPath: string;
  name: string;
  code: LanguageCodes;
}

export const AVAILABLE_LANGUAGES: LanguageDetail[] = [
  {code: LanguageCodes.GERMAN, iconPath: 'assets/img/ger.png', name: 'Deutsch'},
  {code: LanguageCodes.ENGLISH, iconPath: 'assets/img/uk.png', name: 'English'},
  // {code: LanguageCodes.SPANISH, iconPath: 'assets/img/spain.png', name: 'Espanol'},
];
