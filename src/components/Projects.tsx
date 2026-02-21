'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import ProjectVisual from './ProjectVisual'

const featured = [
  {
    num: '01', visual: 'rag' as const,
    name: 'Agentic RAG Integration Pipeline',
    summary: 'Multi-system middleware integration: document ingestion → semantic chunking → hybrid vector search → LLM inference → streaming REST API layer.',
    stack: ['Python', 'FastAPI', 'pgvector', 'LangChain', 'OpenAI', 'Docker', 'OpenAPI'],
    metrics: ['Sub-200ms retrieval · 100k chunks', 'Precision@5 > 0.85 on eval set'],
    accent: '#e8602c', repo: 'https://github.com/Maharshi-Dutta', featured: true,
  },
  {
    num: '02', visual: 'supplier' as const,
    name: 'Supplier RAG System',
    summary: 'Multi-agent RAG for automated supplier quotation analysis. ExtractorAgent → RetrieverAgent → EvaluatorAgent scoring across price, delivery, and risk.',
    stack: ['Python', 'FastAPI', 'pgvector', 'Ollama', 'Llama 3.2', 'Docker', 'SQLAlchemy'],
    metrics: ['Full OpenAPI docs at /docs', 'Local LLM stack — no cloud dependency'],
    accent: '#e8602c', repo: 'https://github.com/Maharshi-Dutta/supplier-rag-system', featured: true,
  },
  {
    num: '03', visual: 'traffic' as const,
    name: 'Traffic Analytics & Industry 4.0 Platform',
    summary: 'Real-time CV pipeline for traffic violation detection. GAN-augmented training, CNN classifier, async FastAPI ingestion, full AWS deployment via CI/CD.',
    stack: ['Python', 'TensorFlow', 'CNN', 'GAN', 'FastAPI', 'Docker', 'AWS EC2/S3'],
    metrics: ['83% detection accuracy', 'GAN augmentation +12.4%'],
    accent: '#8ec8e8', repo: 'https://github.com/Maharshi-Dutta', featured: false,
  },
]

const more = [
  { num:'04', visual:'eleva' as const,      name:'Eleva — AI Pitch Narrative Builder',      summary:'AI-powered pitch narrative builder generating investor-ready pitch decks from structured startup data.',                                                                  stack:['Python','LLM','FastAPI','React'],                       accent:'#d4a84b', repo:'https://github.com/Maharshi-Dutta' },
  { num:'05', visual:'billing' as const,    name:'Smart Electricity Billing System',        summary:'Full-stack utility management platform with Java backend, multi-tariff billing engine, and admin/consumer portals.',                                                    stack:['Java','MySQL','JDBC','REST APIs','Docker'],             accent:'#d4a84b', repo:'https://github.com/Maharshi-Dutta/Electricity-bill' },
  { num:'06', visual:'classifier' as const, name:'Image Classifier — VGG16 vs ResNet50',   summary:'Transfer learning comparison: VGG16 vs ResNet50 for binary image classification with fine-tuning strategy analysis.',                                                   stack:['Python','TensorFlow','VGG16','ResNet50','Jupyter'],     accent:'#8ec8e8', repo:'https://github.com/Maharshi-Dutta/Image-classifier' },
  { num:'07', visual:'bike' as const,       name:'Bike Dealership — AWS Ecommerce',         summary:'Full-featured ecommerce site for a bike dealership hosted on AWS with product catalogue, cart, and checkout.',                                                          stack:['HTML','CSS','JavaScript','AWS','PHP'],                  accent:'#e8602c', repo:'https://github.com/Maharshi-Dutta/Web-project-Bike-Ecommerce-' },
  { num:'08', visual:'games' as const,      name:'AI for Games',                            summary:'AI pathfinding, decision-making, and game-playing agents: A*, minimax, alpha-beta pruning, and reinforcement learning strategies.',                                     stack:['Python','A*','Minimax','MCTS','Reinforcement'],         accent:'#7ee8a2', repo:'https://github.com/Maharshi-Dutta/AI-for-Games' },
  { num:'09', visual:'surveillance' as const,name:'Surveillance Enhancement — Deep Learning',summary:'Enhancing low-quality CCTV footage using deep learning for improved person detection and tracking accuracy in adverse conditions.',                                   stack:['Python','Deep Learning','OpenCV','TensorFlow'],         accent:'#e8602c', repo:'https://www.linkedin.com/posts/maharshi007_enhancing-surveillance-footage-with-deep-ugcPost-7389095074262859778-wVvN' },
  { num:'10', visual:'anime' as const,      name:'AnimeWatch — Streaming Platform',        summary:'Full-stack anime streaming app with user auth, episode browsing, category filters, and a custom SCSS UI.',                                                              stack:['JavaScript','PHP','SCSS','HTML','MySQL'],               accent:'#d4a5f5', repo:'https://github.com/Maharshi-Dutta/Anime-Watch' },
]

function FeaturedCard({ p, i }: { p: typeof featured[0]; i: number }) {
  const [hov, setHov] = useState(false)
  return (
    <TiltCard intensity={6}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.038), rgba(255,255,255,0.018))',
        border: `1px solid ${hov ? p.accent + '2a' : 'rgba(255,255,255,0.075)'}`,
        borderRadius: '20px', backdropFilter: 'blur(28px)',
        boxShadow: hov
          ? `inset 0 1px 0 rgba(255,255,255,0.09), 0 0 0 1px ${p.accent}08, 0 14px 50px ${p.accent}12, 0 24px 80px rgba(0,0,0,0.45)`
          : 'inset 0 1px 0 rgba(255,255,255,0.05), 0 8px 40px rgba(0,0,0,0.45)',
        overflow: 'hidden',
      }}>
      {/* Top sweep */}
      <div style={{ position:'absolute', top:0, left:'15%', right:'15%', height:'1px', background:`linear-gradient(90deg,transparent,${p.accent},transparent)`, opacity:hov?0.65:0, transition:'opacity 0.6s', zIndex:5, borderRadius:'1px' }} />

      <div className="card-img"><ProjectVisual type={p.visual} accent={p.accent} /></div>

      <div style={{ padding: '28px 32px 32px' }}>
        <div className="card-meta" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'16px' }}>
          <div style={{ display:'flex', gap:'12px', alignItems:'center' }}>
            <span style={{ fontFamily:'monospace', fontSize:'10px', color:p.accent, opacity:0.55 }}>{p.num}</span>
            {p.featured && <span style={{ fontFamily:'monospace', fontSize:'9px', padding:'3px 10px', borderRadius:'40px', border:`1px solid ${p.accent}35`, color:p.accent }}>FEATURED</span>}
          </div>
          <a href={p.repo} target="_blank" rel="noreferrer" style={{ fontFamily:'monospace', fontSize:'10px', color:'rgba(255,255,255,0.2)', textDecoration:'none', transition:'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color=p.accent} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}>GitHub ↗</a>
        </div>
        <h3 className="card-title" style={{ fontSize:'18px', fontWeight:600, color:hov?'white':'rgba(255,255,255,0.9)', marginBottom:'10px', lineHeight:1.3, transition:'color 0.4s' }}>{p.name}</h3>
        <p className="card-body" style={{ fontSize:'13.5px', lineHeight:1.78, color:'rgba(255,255,255,0.38)', marginBottom:'20px' }}>{p.summary}</p>
        <div className="card-tags" style={{ display:'flex', flexWrap:'wrap', gap:'7px', marginBottom:'16px' }}>
          {p.stack.map(t=><span key={t} style={{ fontFamily:'monospace', fontSize:'10px', padding:'4px 11px', borderRadius:'40px', border:`1px solid ${p.accent}18`, color:'rgba(255,255,255,0.3)', background:`${p.accent}06` }}>{t}</span>)}
        </div>
        {p.metrics?.map((m,j)=>(
          <div key={j} style={{ display:'flex', gap:'8px', fontSize:'12px', color:'rgba(255,255,255,0.32)', marginBottom:'5px' }}>
            <span style={{ color:p.accent, fontSize:'8px', marginTop:'3px' }}>▸</span>{m}
          </div>
        ))}
      </div>
    </TiltCard>
  )
}

function MiniCard({ p }: { p: typeof more[0] }) {
  const [hov, setHov] = useState(false)
  return (
    <TiltCard intensity={8}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.032), rgba(255,255,255,0.015))',
        border: `1px solid ${hov ? p.accent + '22' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '16px', backdropFilter: 'blur(24px)',
        boxShadow: hov ? `0 14px 50px ${p.accent}0e, inset 0 1px 0 rgba(255,255,255,0.07)` : 'inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 20px rgba(0,0,0,0.4)',
        overflow: 'hidden', display:'flex', flexDirection:'column',
      }}>
      <div className="card-img"><ProjectVisual type={p.visual} accent={p.accent} style={{ height:'140px', borderRadius:'15px 15px 0 0' }} /></div>
      <div style={{ padding:'20px 24px 24px', flex:1 }}>
        <div className="card-meta" style={{ display:'flex', justifyContent:'space-between', marginBottom:'10px' }}>
          <span style={{ fontFamily:'monospace', fontSize:'10px', color:p.accent, opacity:0.5 }}>{p.num}</span>
          <a href={p.repo} target="_blank" rel="noreferrer" style={{ fontFamily:'monospace', fontSize:'12px', color:'rgba(255,255,255,0.18)', textDecoration:'none', transition:'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color=p.accent} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.18)'}>↗</a>
        </div>
        <h3 className="card-title" style={{ fontSize:'15px', fontWeight:600, color:hov?'white':'rgba(255,255,255,0.86)', marginBottom:'8px', lineHeight:1.35, transition:'color 0.4s' }}>{p.name}</h3>
        <p className="card-body" style={{ fontSize:'12.5px', lineHeight:1.72, color:'rgba(255,255,255,0.35)', marginBottom:'16px' }}>{p.summary}</p>
        <div className="card-tags" style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
          {p.stack.slice(0,4).map(t=><span key={t} style={{ fontFamily:'monospace', fontSize:'9px', padding:'3px 9px', borderRadius:'40px', border:`1px solid ${p.accent}15`, color:'rgba(255,255,255,0.28)', background:`${p.accent}05` }}>{t}</span>)}
        </div>
      </div>
    </TiltCard>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding:'160px 48px' }}>
      <div style={{ maxWidth:'1240px', margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'center', marginBottom:'100px' }}>
          <div className="scene-line" />
        </div>
        <Reveal><p className="section-label" style={{ marginBottom:'24px' }}>03 — Build</p></Reveal>
        <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-end', marginBottom:'72px', flexWrap:'wrap', gap:'16px' }}>
          <Reveal delay={0.1}>
            <h2 className="display" style={{ fontSize:'clamp(42px, 6vw, 72px)' }}>
              Things I&apos;ve{' '}
              <em style={{ fontStyle:'italic', background:'linear-gradient(135deg, var(--ember), var(--gold))', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>built</em>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <a href="https://github.com/Maharshi-Dutta" target="_blank" rel="noreferrer"
              style={{ fontFamily:'monospace', fontSize:'10px', letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.25)', textDecoration:'none', transition:'color 0.4s' }}
              onMouseEnter={e=>e.currentTarget.style.color='var(--ember)'} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.25)'}
            >All repos ↗</a>
          </Reveal>
        </div>

        {/* Featured 3-col */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:'24px', marginBottom:'48px' }}>
          {featured.map((p,i)=>(
            <Reveal key={i} delay={0.06+i*0.1} dir={i===1?'scale':'up'}>
              <FeaturedCard p={p} i={i} />
            </Reveal>
          ))}
        </div>

        {/* More projects */}
        <Reveal delay={0.1}>
          <p style={{ fontFamily:'monospace', fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(255,255,255,0.22)', marginBottom:'32px' }}>More Projects</p>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(260px, 1fr))', gap:'20px' }}>
          {more.map((p,i)=>(
            <Reveal key={i} delay={0.03+i*0.06} dir="up">
              <MiniCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
