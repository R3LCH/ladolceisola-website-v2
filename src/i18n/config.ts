import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Translation resources will be loaded dynamically
const loadTranslations = async (lang: string) => {
  const response = await fetch(`/locales/${lang}/translation.json`)
  return response.json()
}

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
    resources: {},
  })

// Load translations for all languages
;['it', 'en', 'ru', 'uk', 'pl', 'de'].forEach((lang) => {
  loadTranslations(lang).then((translations) => {
    i18n.addResourceBundle(lang, 'translation', translations)
  })
})

export default i18n
