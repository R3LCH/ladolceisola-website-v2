import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from '../ui/LanguageSwitcher'

export function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if header should have solid background
      setIsScrolled(currentScrollY > 20)

      // Hide/show header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Close mobile menu when clicking outside or on navigation
  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { key: 'menu', href: '#menu' },
    { key: 'about', href: '#about' },
    { key: 'location', href: '#location' },
    { key: 'contact', href: '#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            className="font-heading text-2xl sm:text-3xl text-primary hover:text-primary/80 transition-colors"
            onClick={handleNavClick}
          >
            La Dolce Isola
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`font-body text-sm uppercase tracking-wide transition-colors ${
                  isScrolled
                    ? 'text-neutral-charcoal hover:text-primary'
                    : 'text-white hover:text-accent'
                }`}
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Desktop Language Switcher */}
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-charcoal/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className={`w-6 h-6 transition-colors ${
                isScrolled ? 'text-neutral-charcoal' : 'text-white'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white border-t border-neutral-charcoal/10 px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="block font-body text-neutral-charcoal hover:text-primary transition-colors py-2"
              onClick={handleNavClick}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <div className="pt-4 border-t border-neutral-charcoal/10">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </header>
  )
}
