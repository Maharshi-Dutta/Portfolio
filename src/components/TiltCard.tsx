'use client'
import { useRef, useState, useCallback, ReactNode, CSSProperties } from 'react'

interface TiltCardProps {
  children: ReactNode
  style?: CSSProperties
  className?: string
  intensity?: number
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

/**
 * Primland-style 3D magnetic tilt card.
 * Mouse position → perspective tilt + specular shine highlight.
 */
export default function TiltCard({
  children, style, className = '',
  intensity = 10,
  onMouseEnter: externalEnter,
  onMouseLeave: externalLeave,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number | null>(null)
  const [tilt, setTilt] = useState({ rotX: 0, rotY: 0, z: 0 })
  const [shine, setShine] = useState({ x: 50, y: 50, op: 0 })

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current; if (!el) return
    if (rafRef.current) cancelAnimationFrame(rafRef.current)
    rafRef.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setTilt({ rotX: (y - 0.5) * -intensity, rotY: (x - 0.5) * intensity, z: 8 })
      setShine({ x: x * 100, y: y * 100, op: 0.12 })
    })
  }, [intensity])

  const handleEnter = useCallback(() => {
    externalEnter?.()
  }, [externalEnter])

  const handleLeave = useCallback(() => {
    setTilt({ rotX: 0, rotY: 0, z: 0 })
    setShine(s => ({ ...s, op: 0 }))
    externalLeave?.()
  }, [externalLeave])

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className={className}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rotX}deg) rotateY(${tilt.rotY}deg) translateZ(${tilt.z}px)`,
        transition: tilt.z === 0
          ? 'transform 0.8s cubic-bezier(0.16,1,0.3,1)'
          : 'transform 0.05s linear',
        willChange: 'transform',
        position: 'relative',
        ...style,
      }}
    >
      {/* Moving specular shine */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 10, pointerEvents: 'none',
        background: `radial-gradient(circle 180px at ${shine.x}% ${shine.y}%, rgba(255,255,255,${shine.op}), transparent 70%)`,
        borderRadius: 'inherit',
        transition: shine.op === 0 ? 'opacity 0.5s ease' : 'none',
        opacity: shine.op === 0 ? 0 : 1,
      }} />
      {children}
    </div>
  )
}
