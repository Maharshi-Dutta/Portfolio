'use client'
import { useEffect, useState, useCallback } from 'react'
import { scrollToSection } from '@/lib/scroll'

const links = [
  { id: 'about',          label: 'About' },
  { id: 'experience',     label: 'Experience' },
  { id: 'projects',       label: 'Projects' },
  { id: 'research',       label: 'Research' },
  { id: 'skills',         label: 'Skills' },
  { id: 'certifications', label: 'Certs' },
  { id: 'contact',        label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      const cur = links.find(({ id }) => {
        const el = document.getElementById(id)
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 120 && bottom > 120
      })
      setActive(cur?.id ?? '')
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleClick = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
      padding: '0 48px', height: '68px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(4,4,10,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(1.4)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.055)' : '1px solid transparent',
      transition: 'all 0.6s cubic-bezier(0.16,1,0.3,1)',
    }}>
      {/* Logo → scroll to top */}
      <button
        onClick={() => { import('@/lib/scroll').then(m => m.smoothScroll(0)) }}
        style={{ fontFamily: "'Times New Roman', Georgia, serif", fontSize: '18px', fontWeight: 300, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', background: 'none', border: 'none', transition: 'color 0.3s' }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--ember)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
      >MD</button>

      {/* Desktop nav links */}
      <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
        {links.map(l => (
          <a
            key={l.id}
            href={`#${l.id}`}
            onClick={e => handleClick(e, l.id)}
            style={{
              fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: active === l.id ? 'white' : 'rgba(255,255,255,0.32)',
              textDecoration: 'none', transition: 'color 0.35s',
              position: 'relative',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = active === l.id ? 'white' : 'rgba(255,255,255,0.32)'}
          >
            {l.label}
            {active === l.id && (
              <span style={{
                position: 'absolute', bottom: '-6px', left: '50%',
                transform: 'translateX(-50%)',
                width: '3px', height: '3px', borderRadius: '50%',
                background: 'var(--ember)', boxShadow: '0 0 6px var(--ember)',
              }} />
            )}
          </a>
        ))}

        <a href="mailto:maharshidutta000@gmail.com" style={{
          fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.15em',
          textTransform: 'uppercase', padding: '8px 20px', borderRadius: '8px',
          border: '1px solid rgba(232,96,44,0.4)', color: 'var(--ember)',
          textDecoration: 'none', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--ember)'; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ember)' }}
        >Hire Me</a>
      </div>
    </nav>
  )
}
