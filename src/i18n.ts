import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './assets/locales/en.json';

void i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      translation,
    },
  },
});

export { i18n };
