import { useTranslation } from 'react-i18next'
import { MapPin, Star, ExternalLink } from 'lucide-react'
import venueData from '../../data/venue.json'

export function Location() {
  const { t } = useTranslation()
  const { venue } = venueData

  // Construct full address
  const fullAddress = `${venue.address.street}, ${venue.address.city}, ${venue.address.province} ${venue.address.postalCode}, ${venue.address.country}`
  
  // Google Maps directions URL
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${venue.address.coordinates.lat},${venue.address.coordinates.lng}`
  
  // Google Maps embed URL with coordinates
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.3!2d${venue.address.coordinates.lng}!3d${venue.address.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM5KwNDgnNTMuMyJOIDE1wrA0Nyc0Mi44IkU!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s`

  return (
    <section
      id="location"
      className="bg-neutral-cream py-20 md:py-28 lg:py-32"
      aria-labelledby="location-title"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="location-title"
          className="font-heading text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-neutral-charcoal text-center mb-12 md:mb-16"
        >
          {t('nav.location')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Map Column */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="La Dolce Isola Location Map"
                className="absolute inset-0"
              />
            </div>
          </div>

          {/* Info Column */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Address */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-charcoal mb-3">
                    {t('nav.location')}
                  </h3>
                  <p className="font-body text-base md:text-lg text-neutral-charcoal/80 mb-4 leading-relaxed">
                    {fullAddress}
                  </p>
                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 font-body text-base md:text-lg px-6 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30"
                  >
                    <span>{t('actions.getDirections')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-charcoal mb-3">
                {t('hours.title')}
              </h3>
              <p className="font-body text-base md:text-lg text-neutral-charcoal/80">
                {t('hours.daily')}
              </p>
            </div>

            {/* Ratings */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
              <h3 className="font-heading text-xl md:text-2xl font-semibold text-neutral-charcoal mb-6">
                {t('nav.reviews')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Google Rating */}
                <div className="flex items-center space-x-3 p-4 bg-neutral-cream rounded-xl">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" fill="#FFC107"/>
                      <path d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" fill="#FF3D00"/>
                      <path d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" fill="#4CAF50"/>
                      <path d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" fill="#1976D2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="font-heading text-2xl font-bold text-neutral-charcoal">
                        {venue.rating.google}
                      </span>
                      <Star className="w-5 h-5 fill-accent text-accent" />
                    </div>
                    <p className="font-body text-sm text-neutral-charcoal/60">
                      {venue.rating.googleReviews} reviews
                    </p>
                  </div>
                </div>

                {/* TripAdvisor Rating */}
                <a
                  href={venue.social.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-neutral-cream rounded-xl hover:bg-neutral-charcoal/5 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="24" cy="24" r="20" fill="#00AA6C"/>
                      <circle cx="16" cy="24" r="6" fill="white"/>
                      <circle cx="16" cy="24" r="3" fill="#000000"/>
                      <circle cx="32" cy="24" r="6" fill="white"/>
                      <circle cx="32" cy="24" r="3" fill="#000000"/>
                      <path d="M24 8C18 8 13 11 10 15h28c-3-4-8-7-14-7z" fill="#000000" opacity="0.2"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center space-x-1 mb-1">
                      <span className="font-heading text-2xl font-bold text-neutral-charcoal">
                        {venue.rating.tripadvisor}
                      </span>
                      <Star className="w-5 h-5 fill-accent text-accent" />
                    </div>
                    <p className="font-body text-sm text-neutral-charcoal/60">
                      {venue.rating.tripadvisorReviews} reviews
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
