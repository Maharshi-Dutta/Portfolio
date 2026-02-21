'use client'
import { useEffect, useRef, useState, ReactNode, CSSProperties } from 'react'

type Dir = 'up' | 'left' | 'right' | 'scale'

interface Props {
  children: ReactNode
  delay?: number   // seconds
  dir?: Dir
  style?: CSSProperties
  className?: string
}

const dirClass: Record<Dir, string> = {
  up:    'reveal',
  left:  'reveal-left',
  right: 'reveal-right',
  scale: 'reveal-scale',
}

/**
 * Bidirectional scroll-reveal wrapper.
 * Elements animate IN when entering viewport, OUT when leaving.
 * rootMargin "-8% 0px -8% 0px" means the element must be 8% inside
 * the viewport before it triggers — preventing accidental half-triggers.
 */
export default function Reveal({ children, delay = 0, dir = 'up', style, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: '-8% 0px -8% 0px', threshold: 0.01 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${dirClass[dir]} ${visible ? 'in' : ''} ${className}`}
      style={{ transitionDelay: delay ? `${delay}s` : undefined, ...style }}
    >
      {children}
    </div>
  )
}
