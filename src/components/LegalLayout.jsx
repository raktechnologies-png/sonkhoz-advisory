import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function LegalLayout({ title, lastUpdated, children }) {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="font-sans text-charcoal antialiased">

      {/* ── Header ── */}
      <header className="bg-navy border-b border-white/5 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-18 py-4 flex items-center justify-between">
          <Link to="/" className="flex flex-col leading-none hover:opacity-80 transition-opacity duration-200">
            <span className="text-gold font-bold text-xl tracking-[0.08em] uppercase">SonKhoz</span>
            <span className="text-offwhite/45 font-light text-[0.7rem] tracking-[0.28em] mt-0.5 uppercase">Advisory</span>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-offwhite/45 text-xs tracking-wider hover:text-gold transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
            </svg>
            Back to site
          </Link>
        </div>
      </header>

      {/* ── Content ── */}
      <main className="bg-cream min-h-screen">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

          {/* Page heading */}
          <div className="mb-14 pb-10 border-b border-charcoal/10">
            <span className="text-gold text-[11px] tracking-[0.32em] uppercase font-medium">Legal</span>
            <h1 className="font-serif text-charcoal text-4xl md:text-5xl font-semibold mt-5 mb-3 leading-tight">
              {title}
            </h1>
            <p className="text-charcoal/35 text-sm">Last updated: {lastUpdated}</p>
          </div>

          {/* Legal body */}
          <div>{children}</div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-navy border-t border-white/5 py-10">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-offwhite/20 text-[11px]">
            © {new Date().getFullYear()} SonKhoz Advisory (Pty) Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {[
              { label: 'Privacy Policy',     to: '/privacy-policy' },
              { label: 'Cookie Policy',      to: '/cookie-policy'  },
              { label: 'Terms & Conditions', to: '/terms'          },
            ].map(l => (
              <Link key={l.to} to={l.to} className="text-offwhite/30 text-xs hover:text-gold transition-colors duration-200">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
