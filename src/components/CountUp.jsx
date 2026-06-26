import { useEffect, useRef, useState } from 'react'

function parse(str) {
  const m = str.match(/^([A-Za-z]*)(\d+\.?\d*)(.*)$/)
  if (!m) return { prefix: '', num: 0, suffix: str, dec: 0 }
  const dec = m[2].includes('.') ? m[2].split('.')[1].length : 0
  return { prefix: m[1], num: parseFloat(m[2]), suffix: m[3], dec }
}

// Starts fast, decelerates toward target (cubic ease-out)
function easeOut(t) { return 1 - (1 - t) ** 3 }

export default function CountUp({ value, duration = 1800, started }) {
  const { prefix, num, suffix, dec } = parse(value)
  const [cur, setCur] = useState(0)
  const t0  = useRef(null)
  const raf = useRef(null)

  useEffect(() => {
    if (!started) return
    t0.current = null

    const tick = ts => {
      if (!t0.current) t0.current = ts
      const p = Math.min((ts - t0.current) / duration, 1)
      setCur(easeOut(p) * num)
      if (p < 1) raf.current = requestAnimationFrame(tick)
      else setCur(num)
    }

    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [started, num, duration])

  return <>{prefix}{cur.toFixed(dec)}{suffix}</>
}
