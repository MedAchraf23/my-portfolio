import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// On importe les JSON manuellement
import translationEN from './locales/en/translation.json';
import translationFR from './locales/fr/translation.json';

// DEBUGGING: Check if JSON files are correctly loaded
console.log("English translations:", translationEN);
console.log("French translations:", translationFR);

const resources = {
  en: { translation: translationEN },
  fr: { translation: translationFR }
};

i18n
  .use(initReactI18next) // Passe i18n à react-i18next
  .init({
    resources,
    lng: 'fr', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si une traduction manque
    interpolation: {
      escapeValue: false // React protège déjà contre les failles XSS
    }
  });

export default i18n;