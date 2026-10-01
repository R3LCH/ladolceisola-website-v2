import type { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import venueData from '../../data/venue.json'

const { contact, social } = venueData.venue

function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

function whatsappHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, '')}`
}

type ContactLink = {
  key: string
  href: string
  label: string
  external: boolean
  icon: ReactNode
}

function FacebookIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.5 4.5h2.2l1.3 3.2-1.6 1a12.5 12.5 0 0 0 5.9 5.9l1-1.6 3.2 1.3v2.2a1.5 1.5 0 0 1-1.6 1.5A15.5 15.5 0 0 1 5 6.1a1.5 1.5 0 0 1 1.5-1.6z"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5v-9z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 8 7 5 7-5" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 4C7.6 4 4 7.55 4 11.94a7.9 7.9 0 0 0 1.16 4.1L4 20l4.1-1.13a8.1 8.1 0 0 0 3.94 1.02h.01c4.44 0 8.04-3.55 8.04-7.94S16.48 4 12.04 4zm4.67 11.27c-.2.55-1.14 1.05-1.59 1.12-.41.06-.93.09-1.5-.09-.34-.11-.78-.26-1.34-.51-2.36-1.02-3.9-3.4-4.02-3.56-.12-.16-.96-1.28-.96-2.44s.6-1.73.82-1.97c.2-.24.45-.3.6-.3h.43c.14 0 .33-.05.51.39.2.48.67 1.66.73 1.78.06.12.1.26.02.42-.08.16-.12.26-.24.4-.12.14-.25.31-.36.42-.12.12-.24.24-.1.47.14.24.62 1.02 1.33 1.65.91.81 1.68 1.06 1.92 1.18.24.12.38.1.52-.06.14-.16.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.13z" />
    </svg>
  )
}

function TripAdvisorIcon() {
  return (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 4.5c-2.2 0-4.2.5-5.8 1.2L4 4.2v4.4A6.2 6.2 0 0 0 2 13.2C2 16 4.4 18.2 7.4 18.2c1.6 0 3-.6 4-1.6l.6.7.6-.7a5.4 5.4 0 0 1 4-1.6c3 0 5.4-2.2 5.4-5s-2.4-5-5.4-5c-1.6 0-3 .6-4 1.6L12 5.6l-.6.6A5.4 5.4 0 0 0 12 4.5zM7.4 8.2c2 0 3.6 1.5 3.6 3.4s-1.6 3.4-3.6 3.4S3.8 13.5 3.8 11.6 5.4 8.2 7.4 8.2zm9.2 0c2 0 3.6 1.5 3.6 3.4s-1.6 3.4-3.6 3.4-3.6-1.5-3.6-3.4 1.6-3.4 3.6-3.4zM7.4 10.2a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8zm9.2 0a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
    </svg>
  )
}

export function Contact() {
  const { t } = useTranslation()

  const links: ContactLink[] = [
    {
      key: 'facebook',
      href: social.facebook,
      label: t('actions.followUs'),
      external: true,
      icon: <FacebookIcon />,
    },
    {
      key: 'phone',
      href: telHref(contact.phone),
      label: t('actions.callNow'),
      external: false,
      icon: <PhoneIcon />,
    },
    {
      key: 'email',
      href: `mailto:${contact.email}`,
      label: t('actions.emailUs'),
      external: false,
      icon: <EmailIcon />,
    },
    {
      key: 'whatsapp',
      href: whatsappHref(contact.whatsapp),
      label: t('actions.whatsapp'),
      external: true,
      icon: <WhatsAppIcon />,
    },
    {
      key: 'tripadvisor',
      href: social.tripadvisor,
      label: 'TripAdvisor',
      external: true,
      icon: <TripAdvisorIcon />,
    },
  ]

  return (
    <section
      id="contact"
      className="bg-neutral-charcoal py-20 md:py-28 lg:py-32"
      aria-labelledby="contact-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            id="contact-title"
            className="font-heading text-3xl font-semibold tracking-tight text-neutral-cream sm:text-4xl md:text-5xl"
          >
            {t('nav.contact')}
          </h2>

          <ul className="mt-12 grid grid-cols-2 justify-items-center gap-4 sm:gap-5 lg:grid-cols-5">
            {links.map((link) => (
              <li key={link.key} className="w-full max-w-[11rem]">
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="group flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-neutral-cream/15 bg-neutral-cream/5 px-3 py-6 text-neutral-cream transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:bg-accent hover:text-neutral-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-charcoal"
                >
                  <span className="transition-colors duration-300">{link.icon}</span>
                  <span className="font-body text-sm font-medium leading-tight sm:text-base">
                    {link.label}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
