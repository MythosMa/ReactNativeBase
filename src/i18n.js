// i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import your language resources
import translationEN from '../public/locales/en.json';
import translationCN from '../public/locales/zh-CN.json';

// Configure i18next
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: translationEN,
    },
    'zh-CN': {
      translation: translationCN,
    },
  },
  lng: 'zh-CN', // Default language
  fallbackLng: 'zh-CN', // Fallback language
  interpolation: {
    escapeValue: false, // React already escapes the values
  },
});

export default i18n;
