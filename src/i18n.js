import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from '../public/locales/en/translation';
import translationFR from '../public/locales/fr/translation';
import translationKIN from '../public/locales/kin/translation';
const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  kin: {
    translation: translationKIN,
  },
};
const languages = ['en', 'fr', 'kin'];
const options = {
  order: ['querystring', 'localStorage', 'sessionStorage'],
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  caches: ['localStorage', 'cookie'],
};
i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources,
    ns: 'translation',
    debug: true,
    whitelist: languages,
    lowerCaseLng: true,
    detection: options,
    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
