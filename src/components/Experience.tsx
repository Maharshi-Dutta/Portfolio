'use client'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import CompanyVisual from './CompanyVisual'

const jobs = [
  {
    company: 'outlier' as const,
    role: 'AI Systems & Backend Integration Engineer',
    employer: 'Outlier.ai',
    period: 'May 2025 – Present',
    location: 'Remote',
    current: true,
    accent: 'var(--ember)',
    bullets: [
      'Supported integration of AI model outputs into structured backend pipelines, validating data consistency and reliability across integrated services in a production-style environment',
      'Analysed API and system behaviour patterns, documented discrepancies, and collaborated cross-functionally with engineering teams to troubleshoot integration-level issues',
      'Contributed to structured testing and validation of data flows — building disciplined integration testing and documentation practices applicable to financial-grade middleware environments',
    ],
    tech: ['Python', 'LLMs', 'RLHF', 'API Integration', 'Data Validation', 'Integration Testing'],
  },
  {
    company: 'ineusrg' as const,
    role: 'Full Stack / Backend & Integration Engineer',
    employer: 'INEUSRG — NIIT Technologies',
    period: 'Aug 2022 – Mar 2024',
    location: 'India',
    current: false,
    accent: 'var(--gold)',
    bullets: [
      'Planned and developed middleware-style logic layers to process, transform, and route structured data between disparate applications and backend systems',
      'Designed and implemented RESTful APIs using Python (FastAPI), documenting endpoints to OpenAPI specification conventions for developer and stakeholder consumption',
      'Designed normalised relational database schemas in MySQL and PostgreSQL to reduce redundancy and support multi-source data integration',
      'Conducted unit-level and integration-level testing — including root cause analysis and post-deployment support coordination with IT teams',
      'Containerised backend applications using Docker and implemented CI/CD pipeline workflows for consistent deployments to AWS (EC2, S3)',
      'Maintained structured Git repositories and authored technical documentation on system architecture, integration structures, and API specifications',
    ],
    tech: ['Python', 'FastAPI', 'Node.js', 'React', 'TypeScript', 'PostgreSQL', 'MySQL', 'Docker', 'AWS EC2/S3', 'CI/CD', 'Git', 'OpenAPI'],
  },
  {
    company: 'ul-ta' as const,
    role: 'Teaching Assistant',
    employer: 'University of Limerick',
    period: 'Jan 2025 – May 2025',
    location: 'Limerick, Ireland',
    current: false,
    accent: 'var(--ice)',
    bullets: [
      'Delivered lab sessions and tutorials for undergraduate CS and programming modules',
      'Provided one-to-one mentoring and structured code review during office hours',
      'Supported assessment design and delivered constructive feedback across multiple student cohorts',
    ],
    tech: ['Python', 'Java', 'Algorithms', 'Data Structures', 'SQL'],
  },
  {
    company: 'maldron' as const,
    role: 'Front Office & Operations',
    employer: 'Maldron Hotel',
    period: 'May 2025 – Present',
    location: 'Limerick, Ireland',
    current: false,
    accent: 'rgba(255,255,255,0.28)',
    bullets: [
      'Managed guest check-in/check-out and front desk communications in a high-traffic hotel environment',
      'Streamlined front-office processes, contributing to improved team efficiency and guest satisfaction scores',
    ],
    tech: ['Customer Operations', 'Process Improvement', 'Team Collaboration'],
  },
  {
    company: 'testbirds' as const,
    role: 'App & Web Tester',
    employer: 'Testbirds GmbH',
    period: 'Jun 2025 – Present',
    location: 'Remote',
    current: false,
    accent: '#7ee8a2',
    bullets: [
      'Conducted structured and exploratory testing across web and mobile applications for global clients',
      'Filed detailed, reproducible bug reports — reducing developer triage time across multiple client projects',
    ],
    tech: ['QA Testing', 'Exploratory Testing', 'Bug Reporting', 'Mobile', 'Web'],
  },
]

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineIn, setLineIn] = useState(false)

  useEffect(() => {
    const el = lineRef.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => setLineIn(e.isIntersecting), { threshold: 0 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" style={{ padding: '160px 48px', background: 'rgba(8,8,16,0.5)' }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
          <div className="scene-line" />
        </div>

        <Reveal>
          <p className="section-label" style={{ marginBottom: '24px' }}>02 — Craft</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display" style={{ fontSize: 'clamp(42px, 6vw, 72px)', marginBottom: '88px' }}>
            Shaping the{' '}
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, var(--ice), white)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>craft</em>
          </h2>
        </Reveal>

        {/* Timeline layout */}
        <div style={{ position: 'relative' }}>
          {/* Animated vertical line — desktop only */}
          <div ref={lineRef} className="exp-timeline-line" style={{ position: 'absolute', left: '319px', top: 0, bottom: 0, width: '1px', overflow: 'hidden' }}>
            <div style={{
              height: '100%', width: '1px',
              background: 'linear-gradient(to bottom, var(--ember), rgba(232,96,44,0.08), transparent)',
              transform: lineIn ? 'scaleY(1)' : 'scaleY(0)',
              transformOrigin: 'top',
              transition: 'transform 2.8s cubic-bezier(0.16,1,0.3,1)',
            }} />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {jobs.map((job, i) => (
              <Reveal key={i} delay={0.04 * i} dir="up">
                <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '48px', alignItems: 'start' }}>

                  {/* LEFT — image card */}
                  <div style={{ position: 'relative' }}>
                    <TiltCard intensity={8} style={{
                      borderRadius: '16px',
                      border: `1px solid ${job.current ? 'rgba(232,96,44,0.25)' : 'rgba(255,255,255,0.07)'}`,
                      background: 'rgba(255,255,255,0.025)',
                      backdropFilter: 'blur(20px)',
                      overflow: 'hidden',
                      boxShadow: job.current
                        ? 'inset 0 1px 0 rgba(255,255,255,0.06), 0 0 40px rgba(232,96,44,0.1), 0 8px 32px rgba(0,0,0,0.45)'
                        : 'inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 20px rgba(0,0,0,0.4)',
                    }}>
                      <div className="card-img"><CompanyVisual company={job.company} /></div>
                      {/* Period + location below image */}
                      <div style={{ padding: '14px 18px 16px' }}>
                        <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.22)', marginBottom: '3px' }}>{job.period}</p>
                        <p style={{ fontFamily: 'monospace', fontSize: '10px', color: 'rgba(255,255,255,0.15)' }}>{job.location}</p>
                      </div>
                    </TiltCard>
                    {/* Timeline node */}
                    <div className="exp-timeline-dot" style={{
                      position: 'absolute', top: '12px', right: '-28px',
                      width: '14px', height: '14px', borderRadius: '50%',
                      border: `1.5px solid ${job.accent}`,
                      background: 'var(--noir)',
                      boxShadow: job.current ? `0 0 18px ${job.accent}, 0 0 6px ${job.accent}` : 'none',
                      zIndex: 2,
                    }} />
                  </div>

                  {/* RIGHT — content */}
                  <div className="exp-content" style={{ paddingTop: '4px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '6px', flexWrap: 'wrap' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', lineHeight: 1.3 }}>{job.role}</h3>
                      {job.current && (
                        <span style={{
                          fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.1em',
                          padding: '3px 10px', borderRadius: '40px',
                          border: '1px solid var(--ember)', color: 'var(--ember)',
                          background: 'rgba(232,96,44,0.08)',
                          boxShadow: '0 0 12px rgba(232,96,44,0.2)',
                        }}>CURRENT</span>
                      )}
                    </div>
                    <p style={{ fontFamily: 'monospace', fontSize: '12px', color: job.accent, opacity: 0.82, marginBottom: '20px' }}>{job.employer}</p>

                    <ul style={{ listStyle: 'none', marginBottom: '24px' }}>
                      {job.bullets.map((b, j) => (
                        <li key={j} style={{ display: 'flex', gap: '10px', fontSize: '13.5px', lineHeight: 1.78, color: 'rgba(255,255,255,0.42)', marginBottom: '9px' }}>
                          <span style={{ color: job.accent, flexShrink: 0, fontSize: '8px', marginTop: '5px' }}>▸</span>{b}
                        </li>
                      ))}
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {job.tech.map(t => <span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
