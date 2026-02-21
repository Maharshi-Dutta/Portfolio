'use client'
import { useState } from 'react'
import Reveal from './Reveal'

const socials = [
  { label: 'Email',    display: 'maharshidutta000@gmail.com', href: 'mailto:maharshidutta000@gmail.com' },
  { label: 'LinkedIn', display: 'linkedin.com/in/maharshi007', href: 'https://linkedin.com/in/maharshi007' },
  { label: 'GitHub',   display: 'github.com/Maharshi-Dutta',  href: 'https://github.com/Maharshi-Dutta' },
]

function SocialRow({ s }: { s: typeof socials[0] }) {
  const [h, setH] = useState(false)
  return (
    <a href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none', padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', transition: 'all 0.4s' }}>
      <span style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.18)', width: '76px', flexShrink: 0, textTransform: 'uppercase' }}>{s.label}</span>
      <span style={{ fontSize: '15px', color: h ? 'var(--ember)' : 'rgba(255,255,255,0.5)', transform: h ? 'translateX(5px)' : 'none', display: 'block', transition: 'color 0.45s cubic-bezier(0.16,1,0.3,1), transform 0.45s cubic-bezier(0.16,1,0.3,1)' }}>{s.display}</span>
      <span style={{ marginLeft: 'auto', color: h ? 'var(--ember)' : 'rgba(255,255,255,0.1)', fontSize: '16px', transform: h ? 'translate(4px,-4px)' : 'none', transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)' }}>↗</span>
    </a>
  )
}

export default function Contact() {
  return (
    <section id="contact" style={{ padding: '160px 48px', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', bottom: '-80px', left: '50%', transform: 'translateX(-50%)', width: '700px', height: '500px', background: 'radial-gradient(ellipse, rgba(232,96,44,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div className="orb" style={{ width: '280px', height: '280px', background: 'radial-gradient(circle, rgba(142,200,232,0.055) 0%, transparent 70%)', top: '15%', right: '5%' }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
          <div className="scene-line" />
        </div>

        <Reveal><p className="section-label" style={{ marginBottom: '24px' }}>08 — Connect</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="display" style={{ fontSize: 'clamp(48px, 8vw, 100px)', marginBottom: '32px', lineHeight: 0.92 }}>
            Let&apos;s build<br />
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, var(--ember), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>something.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p style={{ fontSize: '16px', lineHeight: 1.82, color: 'rgba(255,255,255,0.36)', maxWidth: '500px', marginBottom: '80px' }}>
            Open to full-time roles in backend, middleware, and AI engineering. Available immediately in Ireland.
            Stamp 1G — full Irish work authorisation. Comfortable hybrid in Tralee.
          </p>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>
          <Reveal delay={0.22} dir="left">
            <div>
              {socials.map(s => <SocialRow key={s.label} s={s} />)}

              {/* Work auth badge */}
              <div style={{ marginTop: '32px', display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '11px 18px', borderRadius: '12px', border: '1px solid rgba(126,232,162,0.2)', background: 'rgba(126,232,162,0.04)' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7ee8a2', boxShadow: '0 0 8px #7ee8a2', animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(126,232,162,0.7)' }}>Stamp 1G — Full Irish Work Authorisation</span>
                <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.32} dir="right">
            <div className="card" style={{ padding: '44px', borderRadius: '20px' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--ember)', borderRadius: '2px', marginBottom: '28px' }} />
              <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: '20px' }}>Best way to reach me</p>
              <p style={{ fontFamily: "'Times New Roman', Georgia, serif", fontSize: '19px', fontStyle: 'italic', lineHeight: 1.68, color: 'rgba(255,255,255,0.48)', marginBottom: '36px' }}>
                &ldquo;Drop me a line — I respond within 24 hours. Always happy to talk about interesting engineering problems.&rdquo;
              </p>

              <a href="mailto:maharshidutta000@gmail.com"
                style={{ display: 'block', textAlign: 'center', padding: '18px 32px', background: 'var(--ember)', color: 'white', borderRadius: '12px', fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 0 40px rgba(232,96,44,0.2)', transition: 'all 0.55s cubic-bezier(0.16,1,0.3,1)', marginBottom: '12px' }}
                onMouseEnter={e => { const t = e.currentTarget; t.style.background='var(--ember-bright)'; t.style.transform='translateY(-3px)'; t.style.boxShadow='0 14px 50px rgba(232,96,44,0.38)' }}
                onMouseLeave={e => { const t = e.currentTarget; t.style.background='var(--ember)'; t.style.transform='none'; t.style.boxShadow='0 0 40px rgba(232,96,44,0.2)' }}
              >Send Email</a>

              <div style={{ display: 'flex', gap: '12px' }}>
                {[{ l: 'LinkedIn', h: 'https://linkedin.com/in/maharshi007' }, { l: 'GitHub', h: 'https://github.com/Maharshi-Dutta' }].map(btn => (
                  <a key={btn.l} href={btn.h} target="_blank" rel="noreferrer"
                    style={{ flex: 1, textAlign: 'center', padding: '14px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.38)', fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor='rgba(232,96,44,0.35)'; e.currentTarget.style.color='var(--ember)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor='rgba(255,255,255,0.08)'; e.currentTarget.style.color='rgba(255,255,255,0.38)' }}
                  >{btn.l}</a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Footer */}
        <Reveal delay={0.4}>
          <div style={{ marginTop: '120px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontFamily: "'Times New Roman', Georgia, serif", fontSize: '20px', fontWeight: 300, color: 'rgba(255,255,255,0.1)', letterSpacing: '0.12em' }}>MD</span>
            <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.1)' }}>© {new Date().getFullYear()} Maharshi Dutta — Limerick, Ireland</p>
            <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.08)' }}>Next.js + Three.js</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
