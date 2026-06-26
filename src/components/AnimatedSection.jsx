import { useEffect, useRef, useState } from 'react'

const VARIANTS = {
  fade: {
    from: { opacity: 0 },
    to:   { opacity: 1 },
  },
  up: {
    from: { opacity: 0, transform: 'translateY(32px)' },
    to:   { opacity: 1, transform: 'translateY(0)'    },
  },
  left: {
    from: { opacity: 0, transform: 'translateX(-32px)' },
    to:   { opacity: 1, transform: 'translateX(0)'     },
  },
}

export default function AnimatedSection({
  children,
  variant   = 'up',
  delay     = 0,
  threshold = 0.12,
  className = '',
}) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  const { from, to } = VARIANTS[variant] ?? VARIANTS.up

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transitionProperty:       'opacity, transform',
        transitionDuration:       '700ms',
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        transitionDelay:          `${delay}ms`,
        ...(vis ? to : from),
      }}
    >
      {children}
    </div>
  )
}
