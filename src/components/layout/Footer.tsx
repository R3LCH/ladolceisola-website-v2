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

type LinkItem = {
  key: string
  href: string
  label: string
  external: boolean
  icon: ReactNode
}
function FacebookIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm5 4.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6.2-.9a1.1 1.1 0 1 0 1.1 1.1 1.1 1.1 0 0 0-1.1-1.1zM12 9.2A2.8 2.8 0 1 1 9.2 12 2.8 2.8 0 0 1 12 9.2z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5.5A2.5 2.5 0 0 1 5.5 3H8l1.5 3.5-2 1.2a12 12 0 0 0 5.8 5.8l1.2-2L18 13v2.5A2.5 2.5 0 0 1 15.5 18 12.5 12.5 0 0 1 3 5.5z"
      />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16v12H4z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m4 7 8 6 8-6" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3a9 9 0 0 0-7.8 13.5L3 21l4.7-1.2A9 9 0 1 0 12 3zm5.2 12.7c-.2.6-1.2 1.1-1.7 1.2-.4.1-.9.1-1.5-.1-.3-.1-.8-.3-1.3-.5-2.3-1-3.8-3.3-3.9-3.5-.1-.2-1-1.3-1-2.5s.6-1.8.9-2 .6-.3.8-.3h.6c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.2 0 .3-.1.5l-.4.5c-.1.2-.3.3-.1.6.2.3.7 1.2 1.6 1.9.1.1 1.1.9 2.1 1.1.2 0 .4 0 .5-.2l.6-.7c.2-.2.3-.2.5-.1l2 .9c.2.1.4.2.4.3 0 .2 0 .8-.2 1.2z" />
    </svg>
  )
}

export function Footer() {
  const { t } = useTranslation()

  const links: LinkItem[] = []

  if (social.facebook) {
    links.push({
      key: 'facebook',
      href: social.facebook,
      label: t('actions.followUs'),
      external: true,
      icon: <FacebookIcon />,
    })
  }

  if (social.instagram) {
    links.push({
      key: 'instagram',
      href: social.instagram,
      label: t('actions.followUs'),
      external: true,
      icon: <InstagramIcon />,
    })
  }

  if (contact.phone) {
    links.push({
      key: 'phone',
      href: telHref(contact.phone),
      label: t('actions.callNow'),
      external: false,
      icon: <PhoneIcon />,
    })
  }

  if (contact.email) {
    links.push({
      key: 'email',
      href: `mailto:${contact.email}`,
      label: contact.email,
      external: false,
      icon: <EmailIcon />,
    })
  }

  if (contact.whatsapp) {
    links.push({
      key: 'whatsapp',
      href: whatsappHref(contact.whatsapp),
      label: 'WhatsApp',
      external: true,
      icon: <WhatsAppIcon />,
    })
  }

  return (
    <footer className="bg-neutral-charcoal text-neutral-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 py-10 text-center md:flex-row md:justify-center md:gap-10">
        <ul className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
          {links.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="inline-flex items-center gap-2 font-body text-sm text-neutral-cream transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.icon}
                <span>{link.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p className="pb-8 text-center font-body text-sm text-neutral-cream/80">
        {t('footer.copyright')}
      </p>
    </footer>
  )
}
