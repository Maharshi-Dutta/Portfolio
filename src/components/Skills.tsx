'use client'
import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const groups = [
  { icon: '◆', label: 'Agentic AI & LLMs',     color: 'var(--ember)', skills: ['RAG Systems','LLM Orchestration','Context Engineering','LLM Evaluation','Prompt Engineering','RLHF','LangChain','OpenAI API'] },
  { icon: '◈', label: 'Integration & APIs',      color: 'var(--ice)',   skills: ['REST API Design','FastAPI','OpenAPI Spec','Middleware Design','Data Routing & Transform','Service-to-Service','JSON/XML','SOAP (awareness)'] },
  { icon: '◉', label: 'Backend & OOP',           color: 'var(--gold)',  skills: ['Python','Java','JavaScript ES6+','Node.js','C# OOP','SOLID Principles','Design Patterns','Servlets / DAO'] },
  { icon: '◐', label: 'Cloud & DevOps',          color: '#7ee8a2',      skills: ['AWS EC2','AWS S3','Docker','Docker Compose','CI/CD Pipelines','GitHub Actions','Bash Scripting','Git / Version Control'] },
  { icon: '◑', label: 'Databases',               color: '#d4a5f5',      skills: ['PostgreSQL','MySQL','JDBC','pgvector','MongoDB','Schema Normalisation','Query Optimisation','Multi-source Integration'] },
  { icon: '◇', label: 'Testing & Docs',          color: 'var(--ember)', skills: ['Unit Testing','Integration Testing','Regression Testing','Functional Validation','API Docs (OpenAPI)','System Architecture Docs','HTTPS/TLS','Secure Auth Flows'] },
]

function Pill({ skill, color }: { skill: string; color: string }) {
  const [h, setH] = useState(false)
  return (
    <span onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
      display: 'inline-block', fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.04em',
      padding: '5px 13px', borderRadius: '40px',
      border: `1px solid ${h ? color + '45' : 'rgba(255,255,255,0.08)'}`,
      background: h ? `${color}0f` : 'rgba(255,255,255,0.025)',
      color: h ? color : 'rgba(255,255,255,0.4)',
      transform: h ? 'translateY(-2px)' : 'none',
      boxShadow: h ? `0 4px 14px ${color}18` : 'none',
      transition: 'all 0.45s cubic-bezier(0.16,1,0.3,1)',
    }}>{skill}</span>
  )
}

export default function Skills() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize(); window.addEventListener('resize', resize)
    const dots = Array.from({ length: 65 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.26, vy: (Math.random() - 0.5) * 0.26,
      op: 0.08 + Math.random() * 0.2, sz: 0.8 + Math.random() * 1.8, t: Math.random() * 100,
    }))
    const animate = () => {
      raf = requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach((d, i) => {
        d.x += d.vx; d.y += d.vy; d.t += 0.018
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1
        ctx.beginPath(); ctx.arc(d.x, d.y, d.sz, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(232,96,44,${d.op * (0.6 + 0.4 * Math.sin(d.t))})`; ctx.fill()
        dots.slice(i + 1, i + 7).forEach(d2 => {
          const dist = Math.hypot(d.x - d2.x, d.y - d2.y)
          if (dist < 110) {
            ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(d2.x, d2.y)
            ctx.strokeStyle = `rgba(232,96,44,${(1 - dist / 110) * 0.05})`
            ctx.lineWidth = 0.5; ctx.stroke()
          }
        })
      })
    }
    animate()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="skills" style={{ padding: '160px 48px', position: 'relative', overflow: 'hidden', background: 'rgba(8,8,16,0.45)' }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.4 }} aria-hidden="true" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '100px' }}>
          <div className="scene-line" />
        </div>
        <Reveal><p className="section-label" style={{ marginBottom: '24px' }}>05 — Arsenal</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="display" style={{ fontSize: 'clamp(42px, 6vw, 72px)', marginBottom: '80px' }}>
            The{' '}
            <em style={{ fontStyle: 'italic', background: 'linear-gradient(135deg, var(--ice), white)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>tools</em>
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {groups.map((g, i) => (
            <Reveal key={i} delay={0.05 * i} dir={i % 2 === 0 ? 'left' : 'right'}>
              <div className="card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <span style={{ color: g.color, fontSize: '18px' }}>{g.icon}</span>
                  <span style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>{g.label}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {g.skills.map(s => <Pill key={s} skill={s} color={g.color} />)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
