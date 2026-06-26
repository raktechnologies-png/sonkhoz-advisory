import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('sk_cookie_consent')
    if (!stored) {
      // Small delay so the page renders first
      const t = setTimeout(() => setVisible(true), 900)
      return () => clearTimeout(t)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('sk_cookie_consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('sk_cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-slide-up fixed bottom-0 left-0 right-0 z-[9980] bg-navy border-t border-gold/25 shadow-[0_-8px_40px_rgba(14,30,56,0.6)]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

        {/* Message */}
        <div className="flex items-start gap-3 flex-1">
          {/* Small cookie icon */}
          <svg className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5" />
            <path d="M8.5 8.5v.01M16 15.5v.01M12 12v.01" />
          </svg>
          <p className="text-offwhite/70 text-sm leading-relaxed">
            We use cookies to improve your experience on our site.{' '}
            <Link
              to="/cookie-policy"
              className="text-gold underline underline-offset-2 hover:text-gold/80 transition-colors duration-200"
            >
              Cookie Policy
            </Link>
            {' '}·{' '}
            <Link
              to="/privacy-policy"
              className="text-gold underline underline-offset-2 hover:text-gold/80 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={decline}
            className="text-offwhite/45 text-[11px] tracking-[0.2em] uppercase px-4 py-2.5 border border-offwhite/12 hover:border-offwhite/30 hover:text-offwhite/70 transition-all duration-200"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="bg-gold text-navy text-[11px] tracking-[0.2em] uppercase px-6 py-2.5 font-semibold hover:bg-gold/88 transition-all duration-200 btn-sweep"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
