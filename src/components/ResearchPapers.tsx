'use client'
import { useState } from 'react'
import Reveal from './Reveal'
import TiltCard from './TiltCard'
import ProjectVisual from './ProjectVisual'

const papers = [
  {
    visual: 'paper-yolo' as const,
    title: 'YOLOv8 vs YOLOv11: Object Detection Model Comparison',
    abstract: 'A systematic benchmark study of YOLOv8 and YOLOv11 on the COCO validation set, evaluating mAP@0.5, mAP@0.5:0.95, inference latency, and model size. YOLOv11 demonstrates a 5.8 percentage-point mAP improvement over YOLOv8 with comparable throughput.',
    venue: 'MSc Research — University of Limerick', year: '2024',
    tags: ['Object Detection', 'YOLO', 'Computer Vision', 'COCO', 'Benchmark'],
    accent: '#e8602c',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7292463655462305792/',
  },
  {
    visual: 'paper-traffic' as const,
    title: 'Smart Traffic Violation Detection using Deep Learning & GAN Augmentation',
    abstract: 'Novel computer vision pipeline combining CNN-based violation classifiers with GAN-synthesised rare-event training data. Addresses class imbalance in real-world traffic surveillance, achieving 83% detection accuracy with +12.4% accuracy gain from GAN augmentation.',
    venue: 'Industry 4.0 / MSc Research — University of Limerick', year: '2023',
    tags: ['Traffic Detection', 'CNN', 'GAN', 'Computer Vision', 'Industry 4.0'],
    accent: '#8ec8e8',
    link: 'https://www.linkedin.com/posts/maharshi007_enhancing-surveillance-footage-with-deep-ugcPost-7389095074262859778-wVvN',
  },
  {
    visual: 'paper-classifier' as const,
    title: 'Pre-trained Models for Binary Classification: VGG16 vs ResNet50',
    abstract: 'Comparative evaluation of VGG16 and ResNet50 transfer learning strategies for binary (negative/positive) sample classification. Analyses fine-tuning depth, class imbalance handling, data augmentation, and accuracy-efficiency tradeoffs across both architectures.',
    venue: 'Applied Machine Learning — University of Limerick', year: '2023',
    tags: ['Transfer Learning', 'VGG16', 'ResNet50', 'Binary Classification', 'TensorFlow'],
    accent: '#d4a5f5',
    link: 'https://github.com/Maharshi-Dutta/Image-classifier',
  },
]

function PaperCard({ p }: { p: typeof papers[0] }) {
  const [expanded, setExpanded] = useState(false)
  const [hov, setHov] = useState(false)

  return (
    <TiltCard intensity={5}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: 'linear-gradient(145deg, rgba(255,255,255,0.032), rgba(255,255,255,0.015))',
        border: `1px solid ${hov ? p.accent + '28' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '18px', backdropFilter: 'blur(24px)',
        boxShadow: hov
          ? `inset 0 1px 0 rgba(255,255,255,0.08), 0 16px 60px ${p.accent}0e, 0 4px 24px rgba(0,0,0,0.5)`
          : 'inset 0 1px 0 rgba(255,255,255,0.04), 0 4px 24px rgba(0,0,0,0.4)',
        overflow: 'hidden', display:'flex', flexDirection:'column',
      }}>
      {/* Top accent line on hover */}
      <div style={{ position:'absolute', top:0, left:'10%', right:'10%', height:'1px', background:`linear-gradient(90deg,transparent,${p.accent},transparent)`, opacity:hov?0.6:0, transition:'opacity 0.6s', zIndex:5 }} />

      {/* Document image */}
      <div className="card-img">
        <ProjectVisual type={p.visual} accent={p.accent} style={{ height:'180px', borderRadius:'17px 17px 0 0' }} />
      </div>

      <div style={{ padding:'24px 28px 28px', flex:1, display:'flex', flexDirection:'column' }}>
        <div className="card-meta" style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'14px', flexWrap:'wrap', gap:'8px' }}>
          <span style={{ fontFamily:'monospace', fontSize:'9px', letterSpacing:'0.12em', padding:'3px 10px', borderRadius:'40px', border:`1px solid ${p.accent}30`, color:p.accent, opacity:0.85 }}>RESEARCH · {p.year}</span>
          <a href={p.link} target="_blank" rel="noreferrer" style={{ fontFamily:'monospace', fontSize:'10px', color:'rgba(255,255,255,0.2)', textDecoration:'none', transition:'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color=p.accent} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}>View ↗</a>
        </div>
        <h3 className="card-title" style={{ fontSize:'16px', fontWeight:600, color:hov?'white':'rgba(255,255,255,0.88)', marginBottom:'8px', lineHeight:1.4, transition:'color 0.4s' }}>{p.title}</h3>
        <p style={{ fontFamily:'monospace', fontSize:'10px', color:'rgba(255,255,255,0.28)', marginBottom:'12px' }}>{p.venue}</p>

        <div style={{ maxHeight:expanded?'220px':'0', overflow:'hidden', transition:'max-height 0.75s cubic-bezier(0.16,1,0.3,1)' }}>
          <p className="card-body" style={{ fontSize:'13px', lineHeight:1.75, color:'rgba(255,255,255,0.35)', marginBottom:'16px' }}>{p.abstract}</p>
        </div>
        <button onClick={()=>setExpanded(!expanded)} style={{ background:'none', border:'none', padding:0, fontFamily:'monospace', fontSize:'10px', letterSpacing:'0.15em', color:'rgba(255,255,255,0.2)', textTransform:'uppercase', marginBottom:'16px', textAlign:'left', transition:'color 0.3s' }} onMouseEnter={e=>e.currentTarget.style.color=p.accent} onMouseLeave={e=>e.currentTarget.style.color='rgba(255,255,255,0.2)'}>
          {expanded ? '− Abstract' : '+ Abstract'}
        </button>

        <div className="card-tags" style={{ display:'flex', flexWrap:'wrap', gap:'7px', marginTop:'auto' }}>
          {p.tags.map(t=><span key={t} style={{ fontFamily:'monospace', fontSize:'10px', padding:'4px 11px', borderRadius:'40px', border:`1px solid ${p.accent}18`, color:'rgba(255,255,255,0.3)', background:`${p.accent}06` }}>{t}</span>)}
        </div>
      </div>
    </TiltCard>
  )
}

export default function ResearchPapers() {
  return (
    <section id="research" style={{ padding:'160px 48px', background:'rgba(8,8,16,0.4)' }}>
      <div style={{ maxWidth:'1240px', margin:'0 auto' }}>
        <div style={{ display:'flex', justifyContent:'center', marginBottom:'100px' }}>
          <div className="scene-line" />
        </div>
        <Reveal><p className="section-label" style={{ marginBottom:'24px' }}>04 — Research</p></Reveal>
        <Reveal delay={0.1}>
          <h2 className="display" style={{ fontSize:'clamp(42px, 6vw, 72px)', marginBottom:'28px' }}>
            Published{' '}
            <em style={{ fontStyle:'italic', background:'linear-gradient(135deg, var(--ice), white)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>work</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p style={{ fontSize:'15px', lineHeight:1.8, color:'rgba(255,255,255,0.35)', maxWidth:'560px', marginBottom:'72px' }}>
            Academic research at the intersection of computer vision, deep learning, and applied AI — conducted during MSc at the University of Limerick.
          </p>
        </Reveal>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(320px, 1fr))', gap:'24px' }}>
          {papers.map((p,i)=>(
            <Reveal key={i} delay={0.06+i*0.1} dir={i===1?'scale':i%2===0?'left':'right'}>
              <PaperCard p={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
