import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import englishTranslation from './assets/locales/en.json';
import frenchTranslation from './assets/locales/fr.json';

void i18n.use(initReactI18next).init({
  lng: 'en',
  resources: {
    en: {
      englishTranslation,
    },
    fr: {
      // eslint-disable-next-line
      frenchTranslation,
    },
  },
});

export { i18n };
