import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children in an overflow:hidden mask. On scroll-into-view,
 * the inner content slides up from below — a curtain-reveal effect.
 * Pass `as` to control the rendered HTML element (default: 'div').
 */
export default function RevealText({
  children,
  delay     = 0,
  as: Tag   = 'div',
  className = '',
}) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`overflow-hidden ${className}`}
      style={{ display: 'block' }}
    >
      <span
        style={{
          display:    'block',
          transform:  vis ? 'translateY(0)' : 'translateY(105%)',
          transition: `transform 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        }}
      >
        {children}
      </span>
    </Tag>
  )
}
