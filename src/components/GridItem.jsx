import { useEffect, useRef, useState } from 'react'

/**
 * Clip-path wipe reveal: starts as a zero-height slice at the bottom,
 * expands upward to full height on scroll-into-view.
 * Includes a 1.2s fallback timer so content always appears even if
 * IntersectionObserver misfires (e.g. Firefox quirks).
 */
export default function GridItem({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const timer = setTimeout(() => setVis(true), 1200)
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true)
          clearTimeout(timer)
          obs.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    obs.observe(el)
    return () => { obs.disconnect(); clearTimeout(timer) }
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath:   vis
          ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
        transition: `clip-path 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
