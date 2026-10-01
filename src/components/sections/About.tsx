import { useTranslation } from 'react-i18next'
import { ScrollReveal } from '../layout/ScrollReveal'

export function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="bg-neutral-cream py-20 md:py-28 lg:py-32"
      aria-labelledby="about-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="slideUp" duration={1}>
          <div className="max-w-3xl mx-auto text-center">
            <h2
              id="about-title"
              className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-charcoal"
            >
              {t('about.title')}
            </h2>
            <p className="font-body mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-neutral-charcoal/80">
              {t('about.description')}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
