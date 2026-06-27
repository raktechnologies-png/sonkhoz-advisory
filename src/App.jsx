import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CursorEffect   from './components/CursorEffect'
import AnimatedSection from './components/AnimatedSection'
import RevealText      from './components/RevealText'
import GridItem        from './components/GridItem'
import CountUp         from './components/CountUp'
import useDocumentMeta from './hooks/useDocumentMeta'

// ─── Inline SVG Icons ─────────────────────────────────────────────────────────

const IconMenu = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
  </svg>
)
const IconClose = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)
const IconArrow = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
)
const IconCheck = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)
const IconPhone = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
)
const IconMail = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
)
const IconLocation = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
)
const IconChevron = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
)

// Service Icons
const IconForecasting = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
)
const IconScenario = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98M15.41 6.51L8.59 10.49" />
  </svg>
)
const IconValuation = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 22V8l9-6 9 6v14" /><path d="M9 22V12h6v10" />
  </svg>
)
const IconProfitability = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
)
const IconPricing = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
  </svg>
)
const IconInvestment = () => (
  <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About',    href: '#about'    },
  { label: 'Services', href: '#services' },
  { label: 'Contact',  href: '#contact'  },
]

const STATS = [
  { value: '5+',   label: 'Advisory Engagements' },
  { value: 'R1.5m+', label: 'Capital Advised'      },
  { value: '90%',  label: 'Client Retention Rate' },
  { value: '3+',   label: 'Industry Sectors'      },
]

const DIFFERENTIATORS = [
  'Actuarial expertise applied to real-world business financial challenges',
  'Clear, actionable insight — not just numbers and reports',
  'A trusted financial partner, not a traditional consulting firm',
]

const SERVICES = [
  {
    title: 'Financial Forecasting & Planning',
    desc:  'We build detailed revenue and expense projections that give you a clear view of where your business is headed. Whether planning for the next quarter or the next three years, our forecasts help you make decisions with confidence rather than guesswork.',
    Icon:  IconForecasting,
  },
  {
    title: 'Profitability & Performance Analysis',
    desc:  'We analyse your business financials to identify exactly where you are making money, where you are losing it, and what needs to change. Our performance analysis gives you an honest picture of your margins, costs, and growth opportunities.',
    Icon:  IconProfitability,
  },
  {
    title: 'Scenario & Decision Analysis',
    desc:  'Before making a major business decision — expanding, hiring, entering a new market, or taking on investment — we model the financial outcomes of each scenario so you know the risks and rewards before you commit.',
    Icon:  IconScenario,
  },
  {
    title: 'Pricing & Business Model Optimisation',
    desc:  'We help you find the right price for your product or service and structure your business model for sustainable profitability. Many businesses leave significant revenue on the table simply because their pricing is not aligned with their costs and market position.',
    Icon:  IconPricing,
  },
  {
    title: 'Business Valuation',
    desc:  'We provide independent, data-driven valuations of your business for purposes of fundraising, selling, partnership negotiations, or strategic planning. Know what your business is worth — and what it could be worth.',
    Icon:  IconValuation,
  },
  {
    title: 'Investment Readiness',
    desc:  'We prepare businesses to raise capital with investor-ready financial models, pitch deck financials, and the supporting documentation that investors and lenders expect to see. We help you tell your financial story compellingly and credibly.',
    Icon:  IconInvestment,
  },
]

const CASE_STUDIES = [
  {
    tag:     'SME PRICING STRATEGY',
    title:   'Retail Chain Margin Recovery',
    outcome: '+34% gross margin',
    detail:  'Repriced SKU portfolio across 12 product categories using elasticity data; restructured supplier cost base to align with new margin architecture across 6 retail locations.',
    period:  '8-week engagement',
  },
  {
    tag:     'GROWTH-STAGE EQUITY',
    title:   'Series A Financial Readiness',
    outcome: 'R40M raise facilitated',
    detail:  'Built investor-grade 5-year model, scenario analysis suite, and full data room for a B2B SaaS business targeting institutional venture capital investors.',
    period:  '10-week engagement',
  },
  {
    tag:     'OPERATIONAL PROFITABILITY',
    title:   'Manufacturing Cost Architecture',
    outcome: '−18% operating cost',
    detail:  'Redesigned cost-allocation methodology across 3 production facilities; identified R4.2M in avoidable overhead through a granular contribution analysis framework.',
    period:  '12-week engagement',
  },
]

const SERVICE_OPTIONS = [
  'Financial Forecasting & Planning',
  'Profitability & Performance Analysis',
  'Scenario & Decision Analysis',
  'Pricing & Business Model Optimisation',
  'Business Valuation',
  'Investment Readiness',
]

const FORM_INIT = { name: '', company: '', email: '', phone: '', service: '', message: '' }

// ─── Component ────────────────────────────────────────────────────────────────

export default function SonKhozAdvisory() {
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [form,      setForm]      = useState(FORM_INIT)
  const [submitted, setSubmitted] = useState(false)
  const [sending,   setSending]   = useState(false)
  const [sendError, setSendError] = useState('')

  // CountUp trigger — fires when stats row enters viewport
  const [statsVisible, setStatsVisible] = useState(false)

  const greeting = (() => {
    const h = new Date().getHours()
    if (h >= 5  && h < 12) return 'Good morning'
    if (h >= 12 && h < 17) return 'Good afternoon'
    return 'Good evening'
  })()

  useDocumentMeta({
    title: 'SonKhoz Advisory | Financial Intelligence That Moves Your Business Forward',
    description: 'Sonkhoz Advisory is a South African financial consulting firm helping startups, SMEs, and growing businesses with forecasting, profitability analysis, pricing optimisation, business valuation, and investment readiness.',
    canonical: 'https://sonkhozadvisory.co.za/',
  })
  const statsRef = useRef(null)

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const onChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setSending(true)
    setSendError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Request failed')
      setSubmitted(true)
    } catch {
      setSendError('Something went wrong. Please try again or email us directly.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="font-sans text-charcoal antialiased">

      {/* ── Global cursor effect (desktop only) ── */}
      <CursorEffect />

      {/* ╔══════════════════════════════════════════╗
          ║  NAVIGATION                              ║
          ╚══════════════════════════════════════════╝ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex flex-col leading-none hover:opacity-80 transition-opacity duration-200">
            <span className="text-gold font-bold text-xl tracking-[0.08em] uppercase">SonKhoz</span>
            <span className="text-offwhite/45 font-light text-[0.7rem] tracking-[0.28em] mt-0.5 uppercase">Advisory</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-offwhite/60 text-[11px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 group py-1"
              >
                {l.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 border border-gold/70 text-gold text-[11px] tracking-[0.22em] uppercase px-5 py-2.5 font-medium hover:bg-gold hover:text-navy transition-all duration-300 btn-sweep"
            >
              Request Consultation
            </a>
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="md:hidden text-offwhite/60 hover:text-gold transition-colors duration-200"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden bg-navy border-t border-white/5 overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 py-7 flex flex-col gap-5">
            {NAV_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-offwhite/60 text-[11px] tracking-[0.2em] uppercase hover:text-gold transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-fit inline-flex items-center gap-2 border border-gold/70 text-gold text-[11px] tracking-[0.22em] uppercase px-5 py-2.5 font-medium hover:bg-gold hover:text-navy transition-all duration-300 btn-sweep"
            >
              Request Consultation
            </a>
          </div>
        </div>
      </header>

      <main>

      {/* ╔══════════════════════════════════════════╗
          ║  HERO                                    ║
          ╚══════════════════════════════════════════╝ */}
      <section className="min-h-screen bg-navy relative flex flex-col justify-center overflow-hidden">

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.028] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(243,243,245,1) 1px, transparent 1px), linear-gradient(90deg, rgba(243,243,245,1) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gold/[0.04] rounded-full blur-[140px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-10 md:pt-44 md:pb-28">

          {/* Greeting pill */}
          <AnimatedSection variant="fade" delay={0}>
            <div className="inline-flex items-center gap-2.5 border border-gold/22 bg-gold/[0.07] px-4 py-1.5 mb-6 rounded-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-gold/65 animate-pulse" />
              <span className="text-gold/75 text-[10px] tracking-[0.28em] uppercase font-medium">{greeting}</span>
            </div>
          </AnimatedSection>

          {/* Eyebrow — slides in from left */}
          <AnimatedSection variant="left" delay={80}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-6">
              <span className="hidden sm:inline-block w-10 h-px bg-gold/70" />
              <span className="text-gold text-[11px] tracking-[0.32em] uppercase font-medium">Financial Advisory</span>
            </div>
          </AnimatedSection>

          {/* Heading — per-line curtain reveal */}
          <h1 className="font-serif text-offwhite text-4xl md:text-5xl lg:text-6xl xl:text-[68px] leading-[1.08] font-semibold">
            <RevealText delay={220}>Financial Intelligence That</RevealText>
            <RevealText delay={400}>
              <em className="italic text-gold">Moves Your Business Forward.</em>
            </RevealText>
          </h1>

          {/* Subtitles */}
          <AnimatedSection variant="up" delay={580}>
            <p className="mt-6 text-offwhite/50 text-base md:text-xl leading-relaxed max-w-2xl">
              We turn complex financial data into clear decisions — for startups, SMEs, and
              growing businesses across South Africa.
            </p>
            <p className="hidden sm:block mt-4 text-offwhite/35 text-base leading-relaxed max-w-xl">
              Founded by an actuarial professional — we bring the same financial rigour that
              large corporations rely on, to businesses of every size.
            </p>
          </AnimatedSection>

          {/* CTA Buttons — btn-sweep diagonal shine */}
          <AnimatedSection variant="up" delay={740} className="flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy px-9 py-4 text-[11px] font-bold tracking-[0.22em] uppercase hover:bg-gold/88 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(194,164,118,0.28)] hover:scale-[1.02] active:scale-[0.99] btn-sweep"
            >
              Request Consultation <IconArrow />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-offwhite/20 text-offwhite/65 px-9 py-4 text-[11px] font-medium tracking-[0.22em] uppercase hover:border-gold/50 hover:text-gold transition-all duration-300 btn-sweep"
            >
              Explore Services
            </a>
          </AnimatedSection>

          {/* Stats Row — CountUp numbers (desktop only) */}
          <div
            ref={statsRef}
            className="mt-20 md:mt-32 hidden md:grid grid-cols-4 gap-px bg-white/[0.06] overflow-hidden"
          >
            {STATS.map((s, i) => (
              <AnimatedSection key={s.label} variant="up" delay={880 + i * 80}>
                <div className="bg-navy px-4 py-6 sm:px-6 md:px-9 md:py-10">
                  <div className="font-serif text-gold text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight">
                    <CountUp value={s.value} started={statsVisible} duration={1800} />
                  </div>
                  <div className="text-offwhite/35 text-[10px] tracking-[0.28em] uppercase mt-2.5">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  ABOUT                                   ║
          ╚══════════════════════════════════════════╝ */}
      <section id="about" className="bg-cream py-16 md:py-44 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-28 items-start">

            {/* Left column */}
            <div>
              <AnimatedSection variant="left">
                <div className="flex items-center gap-3 mb-10">
                  <span className="w-10 h-px bg-gold/70" />
                  <span className="text-gold text-[11px] tracking-[0.32em] uppercase font-medium">How We Work</span>
                </div>
              </AnimatedSection>

              <RevealText
                as="h2"
                className="font-serif text-charcoal text-4xl md:text-5xl leading-[1.1] font-semibold mb-8"
                delay={120}
              >
                Every business deserves<br />
                <span className="text-gold">great financial thinking.</span>
              </RevealText>

              <AnimatedSection variant="up" delay={220}>
                <p className="text-charcoal/60 text-base leading-relaxed mb-5">
                  Sonkhoz Advisory is a South African financial consulting and advisory firm built on
                  one belief — that every business, regardless of size, deserves access to the same
                  quality of financial thinking that large corporations rely on.
                </p>
                <p className="text-charcoal/55 text-base leading-relaxed">
                  Founded by an actuarial professional with deep expertise in financial modelling,
                  data analysis, and pricing, we work with founders, entrepreneurs, and business
                  leaders who need more than spreadsheets — they need clarity, confidence, and a
                  trusted financial partner in their corner.
                </p>

                <ul className="mt-10 space-y-4">
                  {DIFFERENTIATORS.map(d => (
                    <li key={d} className="flex items-start gap-3.5 group cursor-default">
                      <span className="flex-shrink-0 text-gold mt-0.5 transition-transform duration-300 group-hover:scale-125"><IconCheck /></span>
                      <span className="text-charcoal/60 text-sm leading-relaxed group-hover:text-charcoal/85 transition-colors duration-300">{d}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            </div>

            {/* Right column — slides in from left, overflow-hidden clips the watermark */}
            <AnimatedSection variant="left" delay={300} className="relative pt-4 overflow-hidden">
              <div className="absolute -top-6 -left-2 font-serif text-gold/[0.07] text-[200px] leading-none select-none pointer-events-none font-bold">
                01
              </div>
              <div className="relative space-y-7">
                {[
                  {
                    title:  'Actuarial Foundations',
                    body:   'We apply the same rigorous quantitative methods used in institutional finance — built on deep expertise in financial modelling, data analysis, and pricing — to help everyday businesses make better decisions.',
                    accent: true,
                  },
                  {
                    title:  'Built for Every Business',
                    body:   'We believe every business, regardless of size, deserves access to world-class financial thinking. We bridge the gap between raw financial data and the decisions that actually grow businesses.',
                    accent: false,
                  },
                  {
                    title:  'Strategic Partners, Not Consultants',
                    body:   'We are not a traditional consulting firm. We are strategic financial partners who speak the language of business and translate numbers into actionable insight you can act on immediately.',
                    accent: false,
                  },
                ].map(({ title, body, accent }) => (
                  <div
                    key={title}
                    className={`pl-8 py-2.5 border-l-2 transition-all duration-300 cursor-default group
                      ${accent
                        ? 'border-gold hover:pl-10 hover:bg-gold/[0.05]'
                        : 'border-gold/25 hover:border-gold hover:pl-10 hover:bg-gold/[0.05]'
                      }`}
                  >
                    <h3 className="font-serif text-charcoal text-xl font-semibold mb-2.5 group-hover:text-navy transition-colors duration-300">{title}</h3>
                    <p className="text-charcoal/55 text-sm leading-relaxed group-hover:text-charcoal/75 transition-colors duration-300">{body}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  SERVICES GRID                           ║
          ╚══════════════════════════════════════════╝ */}
      <section id="services" className="bg-offwhite py-16 md:py-44 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <AnimatedSection className="max-w-2xl mb-10 md:mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-10 h-px bg-gold/70" />
              <span className="text-gold text-[11px] tracking-[0.32em] uppercase font-medium">Services We Offer</span>
            </div>
            <RevealText
              as="h2"
              className="font-serif text-charcoal text-4xl md:text-5xl leading-[1.1] font-semibold"
              delay={120}
            >
              Six services.<br />
              All under one roof.
            </RevealText>
          </AnimatedSection>

          {/* Cards — clip-path wipe reveal, staggered */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-charcoal/[0.07] overflow-hidden">
            {SERVICES.map(({ title, desc, Icon }, i) => (
              <GridItem key={title} delay={i * 80}>
                <div className="bg-offwhite p-8 md:p-10 group hover:bg-white transition-all duration-300 cursor-default relative overflow-hidden h-full">
                  {/* Gold left accent bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gold scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                  <div className="text-gold mb-7 transition-transform duration-300 group-hover:translate-x-1">
                    <Icon />
                  </div>
                  <h3 className="font-serif text-charcoal text-xl font-semibold mb-3 group-hover:text-navy transition-colors duration-300">
                    {title}
                  </h3>
                  <p className="text-charcoal/50 text-sm leading-relaxed">{desc}</p>

                  <div className="mt-7 flex items-center gap-1.5 text-gold text-[10px] tracking-[0.28em] uppercase font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                    Learn more <IconArrow />
                  </div>
                </div>
              </GridItem>
            ))}
          </div>

          {/* Section CTA */}
          <AnimatedSection variant="up" delay={200} className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy text-offwhite px-9 py-4 text-[11px] font-bold tracking-[0.22em] uppercase hover:bg-navy/85 transition-all duration-300 hover:shadow-lg btn-sweep"
            >
              Request a Consultation <IconArrow />
            </a>
            <p className="text-charcoal/38 text-sm">No obligation. We respond within two business days.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  CASE STUDIES  — hidden until populated  ║
          ╚══════════════════════════════════════════╝ */}
      <section id="work" className="hidden bg-navy py-16 md:py-44 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-20">
            <AnimatedSection variant="up">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-10 h-px bg-gold/70" />
                <span className="text-gold text-[11px] tracking-[0.32em] uppercase font-medium">Our Work</span>
              </div>
              <RevealText
                as="h2"
                className="font-serif text-offwhite text-4xl md:text-5xl leading-[1.1] font-semibold"
                delay={120}
              >
                Outcomes that<br />
                <span className="text-gold italic">speak in numbers.</span>
              </RevealText>
            </AnimatedSection>
            <AnimatedSection variant="fade" delay={200}>
              <p className="text-offwhite/30 text-xs leading-relaxed max-w-[220px]">
                All client identities are anonymised in accordance with our confidentiality protocols.
              </p>
            </AnimatedSection>
          </div>

          {/* Cards — clip-path wipe, staggered */}
          <div className="grid md:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c, i) => (
              <GridItem key={c.title} delay={i * 120}>
                <div className="border border-offwhite/[0.08] p-8 md:p-10 group hover:border-gold/35 transition-all duration-300 hover:bg-white/[0.025] relative overflow-hidden h-full">
                  {/* Top shimmer on hover */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-gold/0 via-gold/55 to-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="text-gold text-[10px] tracking-[0.38em] uppercase font-medium mb-7">{c.tag}</div>
                  <h3 className="font-serif text-offwhite text-xl font-semibold mb-4">{c.title}</h3>
                  <div className="font-serif text-gold text-3xl md:text-4xl font-semibold mb-6 tracking-tight">{c.outcome}</div>
                  <p className="text-offwhite/40 text-sm leading-relaxed">{c.detail}</p>
                  <div className="mt-9 pt-6 border-t border-offwhite/[0.07] text-offwhite/25 text-[10px] tracking-[0.28em] uppercase">
                    {c.period}
                  </div>
                </div>
              </GridItem>
            ))}
          </div>

          {/* Section CTA */}
          <AnimatedSection variant="up" delay={200} className="mt-16 flex justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gold text-navy px-10 py-4 text-[11px] font-bold tracking-[0.22em] uppercase hover:bg-gold/88 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(194,164,118,0.28)] hover:scale-[1.02] active:scale-[0.99] btn-sweep"
            >
              Get Results Like These <IconArrow />
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* ╔══════════════════════════════════════════╗
          ║  CLIENT INTAKE FORM                      ║
          ╚══════════════════════════════════════════╝ */}
      <section id="contact" className="bg-cream py-16 md:py-44 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-28 items-start">

            {/* Left: context */}
            <AnimatedSection variant="up">
              <div className="flex items-center gap-3 mb-8">
                <span className="w-10 h-px bg-gold/70" />
                <span className="text-gold text-[11px] tracking-[0.32em] uppercase font-medium">Get In Touch</span>
              </div>
              <RevealText
                as="h2"
                className="font-serif text-charcoal text-4xl md:text-5xl leading-[1.1] font-semibold mb-8"
                delay={120}
              >
                Ready to make smarter<br />
                <span className="text-gold">financial decisions?</span>
              </RevealText>
              <p className="text-charcoal/55 text-base leading-relaxed mb-10">
                Initial consultations are confidential and obligation-free. We review each brief
                carefully and respond within two business days.
              </p>

              <div className="space-y-5">
                {[
                  { Icon: IconPhone,    text: '074 339 0890'              },
                  { Icon: IconMail,     text: 'Info@sonkhozadvisory.co.za' },
                  { Icon: IconLocation, text: 'Midrand, Johannesburg, SA' },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-4">
                    <div className="w-9 h-9 border border-gold/35 flex items-center justify-center text-gold flex-shrink-0">
                      <Icon />
                    </div>
                    <span className="text-charcoal/55 text-sm">{text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: form */}
            <AnimatedSection variant="up" delay={150}>
              {submitted ? (
                <div className="flex flex-col items-start gap-5 py-16">
                  <div className="w-12 h-12 border border-gold flex items-center justify-center text-gold">
                    <IconCheck />
                  </div>
                  <h3 className="font-serif text-charcoal text-2xl font-semibold">Submission received.</h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed max-w-sm">
                    Thank you for reaching out. A member of our advisory team will review your
                    brief and respond within two business days.
                  </p>
                  <button
                    onClick={() => { setForm(FORM_INIT); setSubmitted(false) }}
                    className="text-gold text-xs tracking-[0.22em] uppercase border-b border-gold/40 pb-0.5 hover:border-gold transition-colors duration-200"
                  >
                    Submit another brief
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">

                  {/* Row 1 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: 'name',    label: 'Full Name', placeholder: 'Your full name', type: 'text'  },
                      { name: 'company', label: 'Company',   placeholder: 'Company name',   type: 'text'  },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-charcoal/45 text-[10px] tracking-[0.28em] uppercase mb-2">{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name]}
                          onChange={onChange}
                          required={f.name === 'name'}
                          placeholder={f.placeholder}
                          className="w-full bg-white/70 border border-charcoal/28 px-4 py-3 text-charcoal text-base md:text-sm placeholder-charcoal/38 focus:outline-none focus:border-gold focus:bg-white/90 transition-colors duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Row 2 */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {[
                      { name: 'email', label: 'Email Address', placeholder: 'you@company.com',  type: 'email', required: true  },
                      { name: 'phone', label: 'Phone Number',  placeholder: '+27 00 000 0000',   type: 'tel',   required: false },
                    ].map(f => (
                      <div key={f.name}>
                        <label className="block text-charcoal/45 text-[10px] tracking-[0.28em] uppercase mb-2">{f.label}</label>
                        <input
                          type={f.type}
                          name={f.name}
                          value={form[f.name]}
                          onChange={onChange}
                          required={f.required}
                          placeholder={f.placeholder}
                          className="w-full bg-white/70 border border-charcoal/28 px-4 py-3 text-charcoal text-base md:text-sm placeholder-charcoal/38 focus:outline-none focus:border-gold focus:bg-white/90 transition-colors duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Service select */}
                  <div>
                    <label className="block text-charcoal/45 text-[10px] tracking-[0.28em] uppercase mb-2">Service Required</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={form.service}
                        onChange={onChange}
                        required
                        className="w-full bg-white/70 border border-charcoal/28 px-4 py-3 pr-10 text-charcoal text-base md:text-sm focus:outline-none focus:border-gold transition-colors duration-200 appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select a service...</option>
                        {SERVICE_OPTIONS.map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                      <div className="absolute right-3.5 top-1/2 -translate-y-1/2 text-charcoal/40 pointer-events-none">
                        <IconChevron />
                      </div>
                    </div>
                  </div>

                  {/* Textarea */}
                  <div>
                    <label className="block text-charcoal/45 text-[10px] tracking-[0.28em] uppercase mb-2">Project Brief</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange}
                      rows={5}
                      required
                      placeholder="Briefly describe your engagement requirements, current challenges, and any relevant financial context..."
                      className="w-full bg-white/70 border border-charcoal/28 px-4 py-3 text-charcoal text-base md:text-sm placeholder-charcoal/38 focus:outline-none focus:border-gold focus:bg-white/90 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-navy text-offwhite py-4 text-[11px] tracking-[0.28em] uppercase font-medium hover:bg-navy/85 transition-all duration-300 hover:shadow-lg active:scale-[0.99] flex items-center justify-center gap-2 btn-sweep disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Sending...' : <>Submit Brief <IconArrow /></>}
                  </button>

                  {sendError && (
                    <p className="text-red-600/80 text-xs leading-relaxed">{sendError}</p>
                  )}

                  <p className="text-charcoal/30 text-[11px] leading-relaxed">
                    By submitting this form you consent to SonKhoz Advisory processing your information
                    in accordance with our privacy policy. All information shared is treated with strict
                    commercial confidentiality.
                  </p>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      </main>

      {/* ╔══════════════════════════════════════════╗
          ║  FOOTER                                  ║
          ╚══════════════════════════════════════════╝ */}
      <footer className="bg-navy border-t border-white/[0.05] pt-12 pb-8 md:pt-20 md:pb-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 mb-10 md:mb-16">

            {/* Brand */}
            <div className="sm:col-span-2 md:col-span-1">
              <div className="flex flex-col leading-none mb-6">
                <span className="text-gold font-bold text-xl tracking-[0.08em] uppercase">SonKhoz</span>
                <span className="text-offwhite/35 font-light text-[0.7rem] tracking-[0.28em] mt-0.5 uppercase">Advisory</span>
              </div>
              <p className="text-offwhite/30 text-xs leading-relaxed max-w-[200px]">
                Financial intelligence and strategic advisory for startups, SMEs, and growing
                businesses across South Africa.
              </p>
            </div>

            {/* Services — desktop only */}
            <div className="hidden md:block">
              <h4 className="text-offwhite/40 text-[10px] tracking-[0.32em] uppercase mb-6">Services</h4>
              <ul className="space-y-3.5">
                {SERVICE_OPTIONS.map(s => (
                  <li key={s}>
                    <a href="#services" className="text-offwhite/30 text-xs hover:text-gold transition-colors duration-200">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-offwhite/40 text-[10px] tracking-[0.32em] uppercase mb-6">Company</h4>
              <ul className="space-y-3.5">
                {[
                  { label: 'About',          href: '#about',        internal: false },
                  { label: 'How We Work',    href: '#about',        internal: false },
                  { label: 'Our Work',       href: '#case-studies', internal: false },
                  { label: 'Privacy Policy', href: '/privacy-policy', internal: true },
                  { label: 'Cookie Policy',  href: '/cookie-policy',  internal: true },
                  { label: 'Terms & Conditions', href: '/terms',       internal: true },
                ].map(({ label, href, internal }) => (
                  <li key={label}>
                    {internal
                      ? <Link to={href} className="text-offwhite/30 text-xs hover:text-gold transition-colors duration-200">{label}</Link>
                      : <a href={href} className="text-offwhite/30 text-xs hover:text-gold transition-colors duration-200">{label}</a>
                    }
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-offwhite/40 text-[10px] tracking-[0.32em] uppercase mb-6">Contact</h4>
              <ul className="space-y-4">
                {[
                  { Icon: IconPhone,    text: '074 339 0890'                                },
                  { Icon: IconMail,     text: 'Info@sonkhozadvisory.co.za'                  },
                  { Icon: IconLocation, text: 'Midrand, Johannesburg\nGauteng, South Africa' },
                ].map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0"><Icon /></span>
                    <span className="text-offwhite/30 text-xs leading-relaxed whitespace-pre-line">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <p className="text-offwhite/20 text-[11px]">
              © {new Date().getFullYear()} SonKhoz Advisory (Pty) Ltd. All rights reserved. Registered in South Africa.
            </p>
            <p className="text-offwhite/15 text-[10px] leading-relaxed md:max-w-lg md:text-right">
              SonKhoz Advisory provides financial modelling, analysis, and advisory services. We are not registered
              as a financial services provider under the FAIS Act and do not provide regulated financial advice.
              Clients are encouraged to seek independent legal and regulatory guidance where applicable.
            </p>
          </div>

          {/* Developer credit */}
          <p className="text-offwhite/15 text-[10px] text-center mt-6">
            Proudly developed by{' '}
            <a
              href="https://www.raktechnologies.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold/60 hover:text-gold transition-colors duration-200"
            >
              RAK Technologies
            </a>
          </p>
        </div>
      </footer>

    </div>
  )
}
