import { useEffect, useRef, useState } from 'react'

export default function CursorEffect() {
  const [active] = useState(
    () => window.matchMedia('(hover: hover) and (pointer: fine)').matches
  )
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    if (!active) return

    const dot   = dotRef.current
    const ring  = ringRef.current
    let mouse   = { x: -999, y: -999 }
    let ringPos = { x: -999, y: -999 }
    let isLight = false
    let lastSample = 0
    let raf

    function sampleBackground(x, y) {
      const el = document.elementFromPoint(x, y)
      if (!el) return
      let node = el
      while (node && node !== document.documentElement) {
        const bg = window.getComputedStyle(node).backgroundColor
        if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
          const m = bg.match(/\d+/g)
          if (m) {
            // Perceived brightness (0–255); above 100 = light background
            const brightness = 0.2126 * +m[0] + 0.7152 * +m[1] + 0.0722 * +m[2]
            isLight = brightness > 100
            return
          }
        }
        node = node.parentElement
      }
    }

    function loop() {
      const now = Date.now()
      if (now - lastSample > 80) {
        sampleBackground(mouse.x, mouse.y)
        lastSample = now
      }

      dot.style.backgroundColor = isLight ? '#0E1E38'                : '#C2A476'
      ring.style.borderColor    = isLight ? 'rgba(14,30,56,0.55)'    : 'rgba(194,164,118,0.55)'

      ringPos.x += (mouse.x - ringPos.x) * 0.12
      ringPos.y += (mouse.y - ringPos.y) * 0.12
      dot.style.transform  = `translate(${mouse.x - 3}px, ${mouse.y - 3}px)`
      ring.style.transform = `translate(${ringPos.x - 16}px, ${ringPos.y - 16}px)`
      raf = requestAnimationFrame(loop)
    }

    const onMove = e => { mouse = { x: e.clientX, y: e.clientY } }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf) }
  }, [active])

  if (!active) return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          width: 6, height: 6,
          backgroundColor: '#C2A476',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'background-color 0.25s ease',
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none rounded-full"
        style={{
          width: 32, height: 32,
          border: '1.5px solid rgba(194,164,118,0.55)',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'border-color 0.25s ease',
        }}
      />
    </>
  )
}
