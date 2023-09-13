import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEn from './assets/locales/en.json';
import translationFr from './assets/locales/fr.json';

void i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translation: translationEn,
    },
    fr: {
      translation: translationFr,
    },
  },
});

export { i18n };
