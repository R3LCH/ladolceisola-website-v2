import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  it: {
    translation: require('../../public/locales/it/translation.json'),
  },
  en: {
    translation: require('../../public/locales/en/translation.json'),
  },
  ru: {
    translation: require('../../public/locales/ru/translation.json'),
  },
  uk: {
    translation: require('../../public/locales/uk/translation.json'),
  },
  pl: {
    translation: require('../../public/locales/pl/translation.json'),
  },
  de: {
    translation: require('../../public/locales/de/translation.json'),
  },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'it',
    supportedLngs: ['it', 'en', 'ru', 'uk', 'pl', 'de'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
