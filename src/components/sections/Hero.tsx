import { useTranslation } from 'react-i18next'

export function Hero() {
  const { t } = useTranslation()

  const handleCTAClick = () => {
    const menuSection = document.getElementById('menu')
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden"
      aria-label="Hero section"
    >
      {/* Content Container */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="font-heading text-white mb-4 sm:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
          {t('hero.title')}
        </h1>

        {/* Subtitle */}
        <p className="font-body text-white/90 mb-8 sm:mb-10 md:mb-12 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
          {t('hero.subtitle')}
        </p>

        {/* CTA Button */}
        <button
          onClick={handleCTAClick}
          className="inline-block font-body text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-3 sm:py-4 md:py-5 bg-secondary hover:bg-secondary-dark text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-secondary/50 active:scale-95"
          aria-label={t('hero.cta')}
        >
          {t('hero.cta')}
        </button>
      </div>

      {/* Decorative gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  )
}
