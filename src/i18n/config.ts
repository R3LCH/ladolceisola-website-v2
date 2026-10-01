import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import itTranslations from '../../public/locales/it/translation.json'
import enTranslations from '../../public/locales/en/translation.json'
import ruTranslations from '../../public/locales/ru/translation.json'
import ukTranslations from '../../public/locales/uk/translation.json'
import plTranslations from '../../public/locales/pl/translation.json'
import deTranslations from '../../public/locales/de/translation.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'it',
    supportedLngs: ['it', 'en', 'ru', 'uk', 'pl', 'de'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      it: { translation: itTranslations },
      en: { translation: enTranslations },
      ru: { translation: ruTranslations },
      uk: { translation: ukTranslations },
      pl: { translation: plTranslations },
      de: { translation: deTranslations },
    },
  })

export default i18n
