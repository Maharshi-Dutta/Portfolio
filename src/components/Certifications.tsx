'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import CertVisual from './CertVisual'

const certs = [
  {
    type: 'ibm' as const,
    name: 'IBM AI Engineering Professional Certificate',
    issuer: 'IBM / Coursera', date: '2025',
    description: 'Professional-level certificate spanning machine learning, deep learning, neural networks, computer vision, NLP, and production AI deployment using TensorFlow, PyTorch, Keras, and Scikit-Learn.',
    skills: ['Machine Learning', 'Deep Learning', 'TensorFlow', 'PyTorch', 'Keras', 'Computer Vision', 'NLP', 'Scikit-Learn'],
    accent: '#6ea6e8', featured: true,
    link: 'https://www.linkedin.com/posts/maharshi007_ibm-ai-engineering-professional-certificate-share-7287680572276051969-kDs1',
  },
  {
    type: 'aws' as const,
    name: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)', date: '2024',
    description: 'AWS Academy certification covering cloud architecture fundamentals, core AWS services, IAM, security best practices, infrastructure management, and cloud pricing models.',
    skills: ['AWS EC2', 'AWS S3', 'IAM', 'Cloud Architecture', 'Security', 'Pricing Models'],
    accent: '#8ec8e8', featured: false,
    link: 'https://linkedin.com/in/maharshi007',
  },
  {
    type: 'oracle' as const,
    name: 'Oracle Academy Certification',
    issuer: 'Oracle', date: '2023',
    description: 'Oracle Academy certification covering relational database fundamentals, SQL programming, PL/SQL, data modelling, schema design, and enterprise database administration.',
    skills: ['Oracle DB', 'SQL', 'PL/SQL', 'Relational Schema', 'Data Modelling', 'Database Admin'],
    accent: '#e84040', featured: false,
    link: 'https://www.linkedin.com/posts/maharshi007_oracle-academiy-activity-7138273283312881664-QQ3K',
  },
  {
    type: 'javascript' as const,
    name: 'JavaScript — University of Arizona',
    issuer: 'University of Arizona / Coursera', date: '2023',
    description: 'University-level JavaScript certification covering ES6+, async/await, closures, DOM manipulation, prototypal inheritance, and modern web development patterns.',
    skills: ['JavaScript ES6+', 'Async/Await', 'Closures', 'DOM', 'Prototypal Inheritance', 'Web APIs'],
    accent: '#f0d060', featured: false,
    link: 'https://www.linkedin.com/posts/maharshi007_javascript-university-arizona-activity-7139561413391302656-dt1n',
  },
]

function CertCard({ cert }: { cert: typeof certs[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <TiltCard intensity={7}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.038), rgba(255,255,255,0.018))',
        border: `1px solid ${hov ? cert.accent + '28' : 'rgba(255,255,255,0.075)'}`,
        borderRadius: '20px', backdropFilter: 'blur(28px)',
        boxShadow: hov
          ? `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 0 1px ${cert.accent}08, 0 16px 60px ${cert.accent}12, 0 4px 24px rgba(0,0,0,0.5)`
          : 'inset 0 1px 0 rgba(255,255,255,0.05), 0 4px 24px rgba(0,0,0,0.4)',
        overflow: 'hidden', display:'flex', flexDirection:'column',
      }}>
      {/* Top sweep */}
      <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'1px', background:`linear-gradient(90deg,transparent,${cert.accent},transparent)`, opacity:hov?0.6:0, transition:'opacity 0.55s', zIndex:5 }} />

      {/* Badge illustration */}
      <div className="card-img"><CertVisual type={cert.type} /></div>

      <div style={{ padding:'24px 28px 32px', flex:1, display:'flex', flexDirection:'column' }}>
        <div className="card-meta" style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:'14px', gap:'12px' }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:'8px', marginBottom:'6px', flexWrap:'wrap' }}>
              {cert.featured && <span style={{ fontFamily:'monospace', fontSize:'9px', padding:'3px 10px', borderRadius:'40px', border:`1px solid ${cert.accent}35`, color:cert.accent }}>PRO CERT</span>}
              <span style={{ fontFamily:'monospace', fontSize:'10px', color:'rgba(255,255,255,0.2)' }}>{cert.date}</span>
            </div>
            <p style={{ fontFamily:'monospace', fontSize:'11px', color:cert.accent, opacity:0.8 }}>{cert.issuer}</p>
          </div>
          <a href={cert.link} target="_blank" rel="noreferrer"
            style={{ fontFamily:'monospace', fontSize:'10px', letterSpacing:'0.1em', color:'rgba(255,255,255,0.2)', textDecoration:'none', transition:'color 0.3s', flexShrink:0 }}
            onMouseEnter={e=>e.currentTarget.style.color=cert.accent}
            onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}
          >LinkedIn ↗</a>
        </div>
        <h3 className="card-title" style={{ fontSize:'17px', fontWeight:600, color:hov?'white':'rgba(255,255,255,0.86)', marginBottom:'12px', lineHeight:1.35, transition:'color 0.4s' }}>{cert.name}</h3>
        <p className="card-body" style={{ fontSize:'13.5px', lineHeight:1.78, color:'rgba(255,255,255,0.36)', marginBottom:'24px' }}>{cert.description}</p>
        <div className="card-tags" style={{ display:'flex', flexWrap:'wrap', gap:'7px', marginTop:'auto' }}>
          {cert.skills.map(s=><span key={s} style={{ fontFamily:'monospace', fontSize:'10px', padding:'4px 12px', borderRadius:'40px', border:`1px solid ${cert.accent}18`, color:'rgba(255,255,255,0.32)', background:`${cert.accent}07` }}>{s}</span>)}
        </div>
      </div>
    </TiltCard>
  )
}

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding:'160px 48px', background:'rgba(8,8,16,0.35)' }}>
      <div style={{ maxWidth:'1240px', margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'center', marginBottom:'100px' }}>
          <div className="scene-line" />
        </div>
        <Reveal><p className="section-label" style={{ marginBottom:'24px' }}>07 — Credentials</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="display" style={{ fontSize:'clamp(42px, 6vw, 72px)', marginBottom:'28px' }}>
            Certified &amp;{' '}
            <em style={{ fontStyle:'italic', background:'linear-gradient(135deg, var(--gold), var(--ember))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>verified</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontSize:'15px', lineHeight:1.8, color:'rgba(255,255,255,0.35)', maxWidth:'520px', marginBottom:'72px' }}>
            Professional certifications from IBM, Amazon, Oracle, and University of Arizona — each verifiable on LinkedIn.
          </p>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(300px, 1fr))', gap:'24px' }}>
          {certs.map((cert,i)=>(
            <Reveal key={i} delay={0.06+i*0.1} dir={i%2===0?'up':'scale'}>
              <CertCard cert={cert} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
