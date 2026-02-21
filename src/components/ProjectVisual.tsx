import { CSSProperties } from 'react'

type VisualType = 'rag' | 'traffic' | 'billing' | 'supplier' | 'anime' | 'games' | 'bike' | 'classifier' | 'eleva' | 'surveillance' | 'paper' | 'paper-yolo' | 'paper-traffic' | 'paper-classifier'

interface Props {
  type: VisualType
  accent?: string
  style?: CSSProperties
}

export default function ProjectVisual({ type, accent = '#e8602c', style = {} }: Props) {
  const base: CSSProperties = {
    width: '100%', height: '200px', position: 'relative', overflow: 'hidden',
    borderRadius: '12px 12px 0 0',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    ...style,
  }

  const visuals: Record<VisualType, React.ReactNode> = {
    rag: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0d0d1a 0%, #1a0d0d 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="rg1" cx="50%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.3"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#rg1)"/>
          {/* Neural network nodes */}
          {[[60,50],[60,100],[60,150],[140,30],[140,80],[140,130],[140,170],[220,60],[220,100],[220,140],[300,80],[300,120]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill={accent} fillOpacity="0.7"/>
          ))}
          {/* Connections */}
          {[[60,50,140,30],[60,50,140,80],[60,100,140,80],[60,100,140,130],[60,150,140,130],[60,150,140,170],[140,30,220,60],[140,80,220,60],[140,80,220,100],[140,130,220,100],[140,130,220,140],[140,170,220,140],[220,60,300,80],[220,100,300,80],[220,100,300,120],[220,140,300,120]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={accent} strokeOpacity="0.2" strokeWidth="1"/>
          ))}
          <text x="200" y="190" textAnchor="middle" fill={accent} fillOpacity="0.4" fontSize="10" fontFamily="monospace">RAG · VECTOR DB · LLM</text>
        </svg>
      </div>
    ),
    traffic: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #080810 0%, #0d1a0d 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="tg1" cx="50%" cy="50%"><stop offset="0%" stopColor="#8ec8e8" stopOpacity="0.2"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="130" fill="url(#tg1)"/>
          {/* Road grid */}
          <line x1="0" y1="100" x2="400" y2="100" stroke="#8ec8e8" strokeOpacity="0.15" strokeWidth="2"/>
          <line x1="200" y1="0" x2="200" y2="200" stroke="#8ec8e8" strokeOpacity="0.15" strokeWidth="2"/>
          {/* Bounding boxes */}
          <rect x="60" y="60" width="50" height="30" fill="none" stroke="#8ec8e8" strokeWidth="1.5" strokeOpacity="0.7"/>
          <rect x="160" y="55" width="45" height="28" fill="none" stroke={accent} strokeWidth="1.5" strokeOpacity="0.9"/>
          <rect x="250" y="110" width="55" height="32" fill="none" stroke="#8ec8e8" strokeWidth="1.5" strokeOpacity="0.7"/>
          <text x="160" y="52" fill={accent} fillOpacity="0.9" fontSize="9" fontFamily="monospace">VIOLATION 94%</text>
          <text x="200" y="185" textAnchor="middle" fill="#8ec8e8" fillOpacity="0.4" fontSize="10" fontFamily="monospace">YOLOv8 · CNN · GAN AUGMENT</text>
        </svg>
      </div>
    ),
    billing: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0d0d0a 0%, #1a1500 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bg1" cx="50%" cy="50%"><stop offset="0%" stopColor="#d4a84b" stopOpacity="0.25"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#bg1)"/>
          {/* Chart bars */}
          {[30,55,40,70,45,80,60].map((h, i) => (
            <rect key={i} x={60+i*42} y={140-h} width="28" height={h} fill="#d4a84b" fillOpacity={0.2+i*0.08} rx="3"/>
          ))}
          {/* Horizontal grid */}
          {[80,110,140].map(y => <line key={y} x1="50" y1={y} x2="350" y2={y} stroke="#d4a84b" strokeOpacity="0.08" strokeDasharray="4"/>)}
          <text x="200" y="185" textAnchor="middle" fill="#d4a84b" fillOpacity="0.4" fontSize="10" fontFamily="monospace">JAVA · MYSQL · JDBC · REST API</text>
        </svg>
      </div>
    ),
    supplier: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #080810 0%, #0d0d1a 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="sg1" cx="50%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.2"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#sg1)"/>
          {/* Multi-agent boxes */}
          {[['EXTRACTOR',60,70],[['RETRIEVER'],200,50],[['EVALUATOR'],340,70]].flat()}
          <rect x="30" y="65" width="90" height="40" rx="6" fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="1.2"/>
          <rect x="155" y="55" width="90" height="40" rx="6" fill="none" stroke={accent} strokeOpacity="0.8" strokeWidth="1.5"/>
          <rect x="280" y="65" width="90" height="40" rx="6" fill="none" stroke={accent} strokeOpacity="0.5" strokeWidth="1.2"/>
          <text x="75" y="90" textAnchor="middle" fill={accent} fillOpacity="0.7" fontSize="8" fontFamily="monospace">EXTRACTOR</text>
          <text x="200" y="80" textAnchor="middle" fill={accent} fillOpacity="0.9" fontSize="8" fontFamily="monospace">RETRIEVER</text>
          <text x="325" y="90" textAnchor="middle" fill={accent} fillOpacity="0.7" fontSize="8" fontFamily="monospace">EVALUATOR</text>
          <line x1="120" y1="85" x2="155" y2="75" stroke={accent} strokeOpacity="0.4" strokeWidth="1"/>
          <line x1="245" y1="75" x2="280" y2="85" stroke={accent} strokeOpacity="0.4" strokeWidth="1"/>
          {/* Vector store */}
          <rect x="145" y="130" width="110" height="30" rx="5" fill={accent} fillOpacity="0.08" stroke={accent} strokeOpacity="0.3" strokeWidth="1"/>
          <text x="200" y="150" textAnchor="middle" fill={accent} fillOpacity="0.7" fontSize="8" fontFamily="monospace">pgvector · PostgreSQL</text>
          <text x="200" y="185" textAnchor="middle" fill={accent} fillOpacity="0.35" fontSize="10" fontFamily="monospace">MULTI-AGENT · RAG · OLLAMA</text>
        </svg>
      </div>
    ),
    anime: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0d0810 0%, #10080d 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="ag1" cx="50%" cy="50%"><stop offset="0%" stopColor="#d4a5f5" stopOpacity="0.25"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#ag1)"/>
          {/* Browser frame */}
          <rect x="60" y="40" width="280" height="130" rx="8" fill="none" stroke="#d4a5f5" strokeOpacity="0.3" strokeWidth="1.5"/>
          <rect x="60" y="40" width="280" height="24" rx="8" fill="#d4a5f5" fillOpacity="0.08"/>
          <circle cx="82" cy="52" r="4" fill="#d4a5f5" fillOpacity="0.3"/>
          <circle cx="98" cy="52" r="4" fill="#d4a5f5" fillOpacity="0.2"/>
          <circle cx="114" cy="52" r="4" fill="#d4a5f5" fillOpacity="0.15"/>
          {/* Content grid */}
          {[0,1,2].map(col => [0,1].map(row => (
            <rect key={`${col}-${row}`} x={75+col*92} y={74+row*50} width="80" height="42" rx="4" fill="#d4a5f5" fillOpacity={0.04+col*0.02} stroke="#d4a5f5" strokeOpacity="0.1" strokeWidth="1"/>
          )))}
          <text x="200" y="185" textAnchor="middle" fill="#d4a5f5" fillOpacity="0.4" fontSize="10" fontFamily="monospace">JS · PHP · CSS · HTML</text>
        </svg>
      </div>
    ),
    games: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0a100a 0%, #081008 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="gg1" cx="50%" cy="50%"><stop offset="0%" stopColor="#7ee8a2" stopOpacity="0.2"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#gg1)"/>
          {/* Game grid */}
          {Array.from({length:8},(_,i)=>Array.from({length:6},(_,j)=>(
            <rect key={`${i}-${j}`} x={60+i*36} y={30+j*26} width="30" height="20" rx="2" fill="#7ee8a2" fillOpacity={Math.random()*0.15} stroke="#7ee8a2" strokeOpacity="0.08" strokeWidth="0.5"/>
          )))}
          {/* AI path */}
          <polyline points="78,40 114,40 114,66 150,66 150,92 186,92 186,118 222,118" fill="none" stroke="#7ee8a2" strokeWidth="2" strokeOpacity="0.6" strokeDasharray="4 2"/>
          <text x="200" y="185" textAnchor="middle" fill="#7ee8a2" fillOpacity="0.4" fontSize="10" fontFamily="monospace">AI PATHFINDING · PYTHON · ML</text>
        </svg>
      </div>
    ),
    bike: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0a0808 0%, #100a08 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="bikg1" cx="50%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.2"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#bikg1)"/>
          {/* E-commerce layout */}
          <rect x="50" y="30" width="300" height="150" rx="8" fill="none" stroke={accent} strokeOpacity="0.2" strokeWidth="1"/>
          {/* Product cards */}
          {[0,1,2,3].map(i => (
            <rect key={i} x={60+i*74} y="50" width="62" height="80" rx="6" fill={accent} fillOpacity="0.06" stroke={accent} strokeOpacity="0.2" strokeWidth="1"/>
          ))}
          {/* Cart button */}
          <rect x="150" y="145" width="100" height="24" rx="5" fill={accent} fillOpacity="0.25"/>
          <text x="200" y="161" textAnchor="middle" fill={accent} fillOpacity="0.8" fontSize="9" fontFamily="monospace">ADD TO CART</text>
          <text x="200" y="185" textAnchor="middle" fill={accent} fillOpacity="0.35" fontSize="10" fontFamily="monospace">AWS · ECOMMERCE · FULL-STACK</text>
        </svg>
      </div>
    ),
    classifier: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #080d10 0%, #0d0a10 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="clg1" cx="50%" cy="50%"><stop offset="0%" stopColor="#8ec8e8" stopOpacity="0.25"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#clg1)"/>
          {/* VGG16 architecture layers */}
          {[0,1,2,3,4,5,6,7].map((i) => {
            const h = 80 - i*8; const w = 22; const x = 40+i*42; const y = (200-h)/2
            return <rect key={i} x={x} y={y} width={w} height={h} rx="3" fill="#8ec8e8" fillOpacity={0.08+i*0.025} stroke="#8ec8e8" strokeOpacity={0.15+i*0.04} strokeWidth="1"/>
          })}
          {/* Accuracy bars */}
          <text x="360" y="80" textAnchor="end" fill="#8ec8e8" fillOpacity="0.6" fontSize="9" fontFamily="monospace">VGG16</text>
          <rect x="310" y="85" width="60" height="8" rx="3" fill="#8ec8e8" fillOpacity="0.5"/>
          <text x="360" y="105" textAnchor="end" fill="#d4a5f5" fillOpacity="0.6" fontSize="9" fontFamily="monospace">ResNet50</text>
          <rect x="310" y="110" width="45" height="8" rx="3" fill="#d4a5f5" fillOpacity="0.4"/>
          <text x="200" y="185" textAnchor="middle" fill="#8ec8e8" fillOpacity="0.4" fontSize="10" fontFamily="monospace">VGG16 · ResNet50 · TensorFlow</text>
        </svg>
      </div>
    ),
    eleva: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0a0810 0%, #100810 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="elg1" cx="50%" cy="50%"><stop offset="0%" stopColor="#d4a84b" stopOpacity="0.25"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#elg1)"/>
          {/* Pitch deck slide mockup */}
          <rect x="80" y="40" width="240" height="140" rx="8" fill="#d4a84b" fillOpacity="0.06" stroke="#d4a84b" strokeOpacity="0.25" strokeWidth="1.5"/>
          <rect x="90" y="50" width="220" height="16" rx="3" fill="#d4a84b" fillOpacity="0.15"/>
          {['Problem','Solution','Market','Traction','Team'].map((s,i)=>(
            <rect key={s} x={90+i*45} y="80" width="38" height="28" rx="4" fill="#d4a84b" fillOpacity={0.06+i*0.03} stroke="#d4a84b" strokeOpacity="0.15" strokeWidth="0.8"/>
          ))}
          <text x="200" y="185" textAnchor="middle" fill="#d4a84b" fillOpacity="0.4" fontSize="10" fontFamily="monospace">AI NARRATIVE · PITCH BUILDER</text>
        </svg>
      </div>
    ),
    surveillance: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #080a08 0%, #0d0d08 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="svg1" cx="50%" cy="50%"><stop offset="0%" stopColor={accent} stopOpacity="0.2"/><stop offset="100%" stopColor="transparent"/></radialGradient>
          </defs>
          <circle cx="200" cy="100" r="120" fill="url(#svg1)"/>
          {/* CCTV-style view */}
          <rect x="50" y="30" width="300" height="150" rx="4" fill="none" stroke={accent} strokeOpacity="0.3" strokeWidth="1.5"/>
          {/* Scanlines */}
          {Array.from({length:10},(_,i)=><line key={i} x1="50" y1={30+i*15} x2="350" y2={30+i*15} stroke={accent} strokeOpacity="0.04" strokeWidth="1"/>)}
          {/* Detection boxes */}
          <rect x="100" y="55" width="60" height="80" fill="none" stroke={accent} strokeWidth="1.5" strokeOpacity="0.8"/>
          <text x="100" y="50" fill={accent} fillOpacity="0.9" fontSize="9" fontFamily="monospace">PERSON 0.97</text>
          <rect x="230" y="70" width="50" height="60" fill="none" stroke="#8ec8e8" strokeWidth="1.5" strokeOpacity="0.6"/>
          <text x="200" y="185" textAnchor="middle" fill={accent} fillOpacity="0.35" fontSize="10" fontFamily="monospace">DEEP LEARNING · SURVEILLANCE</text>
        </svg>
      </div>
    ),
    'paper-yolo': (
      <div style={{ ...base, background: 'linear-gradient(135deg, #050508 0%, #0a0808 100%)', height: '180px' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
          {/* Document mockup */}
          <rect x="40" y="15" width="320" height="155" rx="6" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <rect x="40" y="15" width="320" height="28" rx="6" fill="rgba(232,96,44,0.12)"/>
          <text x="200" y="33" textAnchor="middle" fill="#e8602c" fillOpacity="0.85" fontSize="10" fontFamily="monospace" fontWeight="bold">YOLOv8 vs YOLOv11 COMPARISON</text>
          {/* Comparison bars */}
          <text x="60" y="65" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">YOLOv8 mAP</text>
          <rect x="60" y="70" width="190" height="8" rx="3" fill="#e8602c" fillOpacity="0.55"/>
          <text x="258" y="79" fill="#e8602c" fillOpacity="0.8" fontSize="8" fontFamily="monospace">68.3%</text>
          <text x="60" y="95" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="monospace">YOLOv11 mAP</text>
          <rect x="60" y="100" width="220" height="8" rx="3" fill="#8ec8e8" fillOpacity="0.55"/>
          <text x="288" y="109" fill="#8ec8e8" fillOpacity="0.8" fontSize="8" fontFamily="monospace">74.1%</text>
          <text x="60" y="130" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">Object Detection · COCO Dataset · Benchmark Analysis</text>
          <text x="60" y="148" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="monospace">University of Limerick · MSc Research · 2024</text>
        </svg>
      </div>
    ),
    'paper-traffic': (
      <div style={{ ...base, background: 'linear-gradient(135deg, #050508 0%, #080a08 100%)', height: '180px' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
          <rect x="40" y="15" width="320" height="155" rx="6" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <rect x="40" y="15" width="320" height="28" rx="6" fill="rgba(142,200,232,0.1)"/>
          <text x="200" y="33" textAnchor="middle" fill="#8ec8e8" fillOpacity="0.85" fontSize="9" fontFamily="monospace" fontWeight="bold">SMART TRAFFIC VIOLATION DETECTION</text>
          <text x="60" y="60" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">Detection Accuracy</text>
          <rect x="60" y="65" width="240" height="10" rx="4" fill="#8ec8e8" fillOpacity="0.12" stroke="#8ec8e8" strokeOpacity="0.2" strokeWidth="0.5"/>
          <rect x="60" y="65" width="200" height="10" rx="4" fill="#8ec8e8" fillOpacity="0.45"/>
          <text x="268" y="75" fill="#8ec8e8" fillOpacity="0.7" fontSize="8" fontFamily="monospace">83%</text>
          <text x="60" y="95" fill="rgba(255,255,255,0.5)" fontSize="8" fontFamily="monospace">GAN Augmentation Gain</text>
          <rect x="60" y="100" width="120" height="10" rx="4" fill="#e8602c" fillOpacity="0.45"/>
          <text x="188" y="110" fill="#e8602c" fillOpacity="0.7" fontSize="8" fontFamily="monospace">+12.4%</text>
          <text x="60" y="130" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">Computer Vision · GAN · CNN · Industry 4.0</text>
          <text x="60" y="148" fill="rgba(255,255,255,0.2)" fontSize="8" fontFamily="monospace">Conference / MSc Research · University of Limerick</text>
        </svg>
      </div>
    ),
    'paper-classifier': (
      <div style={{ ...base, background: 'linear-gradient(135deg, #050508 0%, #080810 100%)', height: '180px' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
          <rect x="40" y="15" width="320" height="155" rx="6" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <rect x="40" y="15" width="320" height="28" rx="6" fill="rgba(212,165,245,0.1)"/>
          <text x="200" y="33" textAnchor="middle" fill="#d4a5f5" fillOpacity="0.85" fontSize="9" fontFamily="monospace" fontWeight="bold">PRE-TRAINED MODELS: VGG16 vs ResNet50</text>
          {/* Confusion matrix-style grid */}
          {[0,1,2,3].map(r=>[0,1,2,3].map(c=>(
            <rect key={`${r}${c}`} x={60+c*40} y={50+r*24} width="36" height="20" rx="2" fill="#d4a5f5" fillOpacity={(r===c?0.3:0.05)+(r*c*0.01)} stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
          )))}
          <text x="60" y="152" fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">Transfer Learning · Negative/Positive Classification · 2024</text>
        </svg>
      </div>
    ),
    paper: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #050508 0%, #0a0810 100%)', height: '180px' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
          <rect x="40" y="15" width="320" height="155" rx="6" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
          <rect x="40" y="15" width="320" height="28" rx="6" fill="rgba(232,96,44,0.1)"/>
          {[60,80,100,120,140].map(y=><rect key={y} x="60" y={y} width={150+Math.sin(y)*80} height="8" rx="2" fill="rgba(255,255,255,0.08)"/>)}
        </svg>
      </div>
    ),
  }

  return <>{visuals[type]}</>
}
