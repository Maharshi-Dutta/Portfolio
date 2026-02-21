'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Bidirectional reveal hook.
 * Elements animate IN when entering viewport, animate OUT when leaving.
 * rootMargin controls how early to trigger (negative = more visible required).
 */
export function useReveal(rootMargin = '-8% 0px -8% 0px') {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Bidirectional: true when intersecting, false when not
        setVisible(entry.isIntersecting)
      },
      { rootMargin, threshold: 0.01 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, visible }
}

/**
 * useScrollProgress — returns a 0-1 value for how far an element has
 * been scrolled through the viewport. Drives parallax and continuous effects.
 */
export function useScrollProgress() {
  const ref = useRef<HTMLElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const update = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when bottom of element enters viewport, 1 when top exits top
      const p = 1 - rect.bottom / (vh + rect.height)
      setProgress(Math.max(0, Math.min(1, p)))
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return { ref, progress }
}
