'use client'
import Reveal from './Reveal'

const education = [
  {
    degree: 'MSc — Artificial Intelligence & Machine Learning',
    school: 'University of Limerick',
    location: 'Limerick, Ireland',
    period: 'Aug 2024 – Sep 2025',
    current: true,
    badge: 'In Progress',
    details: [
      'Relevant areas: distributed systems, data engineering, backend architecture, algorithm design',
      'Research focus: RAG architectures, hybrid retrieval, LLM evaluation frameworks',
      'Teaching Assistant — delivered labs for undergraduate CS and programming modules',
    ],
  },
  {
    degree: "Bachelor's in Software Engineering",
    school: 'Institute of Engineering and Management',
    location: 'India',
    period: 'Sep 2021 – June 2024',
    current: false,
    badge: 'Completed',
    details: [
      'Core disciplines: algorithms, data structures, DBMS, object-oriented software engineering',
      'Applied OOP principles (SOLID, design patterns) throughout coursework and projects',
      'Final year project: Smart Electricity Billing & Management System',
    ],
  },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '160px 48px', maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
        <div className="scene-line" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '80px', alignItems: 'start' }}>

        {/* Left column */}
        <div>
          <Reveal delay={0}>
            <p className="section-label" style={{ marginBottom: '28px' }}>01 — Origin</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display" style={{ fontSize: 'clamp(42px, 6vw, 72px)', marginBottom: '28px', color: 'white' }}>
              Where<br />
              <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, var(--ember), var(--gold))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                it began
              </em>
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'rgba(255,255,255,0.4)', maxWidth: '360px' }}>
              A journey from software engineering fundamentals in India to AI & ML at the University of Limerick
              — grounded in rigorous backend engineering, middleware integration, and a drive to build things that actually work in production.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <div style={{ marginTop: '52px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {[
                ['2+', 'Years of experience'],
                ['3',  'Major projects shipped'],
                ['2',  'Degrees earned'],
                ['🇮🇪', 'Ireland'],
              ].map(([v, l]) => (
                <div key={l} style={{ borderLeft: '2px solid rgba(232,96,44,0.22)', paddingLeft: '18px' }}>
                  <div style={{ fontFamily: "'Times New Roman', Georgia, serif", fontSize: '28px', fontWeight: 300, color: 'var(--ember)', marginBottom: '5px' }}>{v}</div>
                  <div style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', lineHeight: 1.4 }}>{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Right column — education cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {education.map((edu, i) => (
            <Reveal key={i} delay={0.12 + i * 0.14} dir="right">
              <div className="card" style={{ padding: '32px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '8px', flexWrap: 'wrap' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: 600, color: 'rgba(255,255,255,0.88)', lineHeight: 1.35, flex: 1 }}>
                    {edu.degree}
                  </h3>
                  <span style={{
                    fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.1em',
                    padding: '4px 12px', borderRadius: '40px', whiteSpace: 'nowrap', flexShrink: 0,
                    border: `1px solid ${edu.current ? 'rgba(232,96,44,0.35)' : 'rgba(255,255,255,0.1)'}`,
                    color: edu.current ? 'var(--ember)' : 'rgba(255,255,255,0.3)',
                    background: edu.current ? 'rgba(232,96,44,0.08)' : 'transparent',
                    boxShadow: edu.current ? '0 0 12px rgba(232,96,44,0.15)' : 'none',
                  }}>
                    {edu.current ? '● ' : ''}{edu.badge}
                  </span>
                </div>

                <p style={{ fontFamily: 'monospace', fontSize: '11px', color: 'var(--ember)', opacity: 0.65, marginBottom: '2px' }}>{edu.school}</p>
                <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.2)', marginBottom: '4px' }}>{edu.location}</p>
                <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.18)', marginBottom: '20px' }}>{edu.period}</p>

                <ul style={{ listStyle: 'none' }}>
                  {edu.details.map((d, j) => (
                    <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '13px', lineHeight: 1.72, color: 'rgba(255,255,255,0.36)', marginBottom: '8px' }}>
                      <span style={{ color: 'var(--ember)', flexShrink: 0, fontSize: '8px', marginTop: '5px' }}>▸</span>{d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
