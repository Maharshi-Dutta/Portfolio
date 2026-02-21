import { CSSProperties } from 'react'

type Company = 'outlier' | 'ineusrg' | 'ul-ta' | 'maldron' | 'testbirds'

interface Props {
  company: Company
  style?: CSSProperties
}

export default function CompanyVisual({ company, style = {} }: Props) {
  const base: CSSProperties = {
    width: '100%', height: '160px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden',
    borderRadius: '16px 16px 0 0',
    flexShrink: 0,
    ...style,
  }

  const visuals: Record<Company, React.ReactNode> = {

    outlier: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #070710 0%, #0f0720 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 420 160" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="og1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#e8602c" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="210" cy="80" r="130" fill="url(#og1)"/>
          {/* AI circuit board pattern */}
          {[30,60,90,120,150].map(y => (
            <line key={y} x1="40" y1={y} x2="380" y2={y} stroke="#e8602c" strokeOpacity="0.06" strokeWidth="1"/>
          ))}
          {[60,110,160,210,260,310,360].map(x => (
            <line key={x} x1={x} y1="20" x2={x} y2="140" stroke="#e8602c" strokeOpacity="0.06" strokeWidth="1"/>
          ))}
          {/* Nodes */}
          {[[110,60],[210,40],[310,60],[160,100],[260,100],[210,130]].map(([cx,cy],i) => (
            <circle key={i} cx={cx} cy={cy} r="5" fill="#e8602c" fillOpacity="0.7"/>
          ))}
          {/* Connections */}
          {[[110,60,210,40],[210,40,310,60],[110,60,160,100],[310,60,260,100],[160,100,210,130],[260,100,210,130],[210,40,210,130]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#e8602c" strokeOpacity="0.25" strokeWidth="1.5"/>
          ))}
          {/* Pulsing center */}
          <circle cx="210" cy="80" r="22" fill="none" stroke="#e8602c" strokeOpacity="0.2" strokeWidth="1"/>
          <circle cx="210" cy="80" r="12" fill="#e8602c" fillOpacity="0.15"/>
          <text x="210" y="85" textAnchor="middle" fill="#e8602c" fillOpacity="0.6" fontSize="8" fontFamily="monospace">AI</text>
          {/* Label */}
          <text x="210" y="152" textAnchor="middle" fill="#e8602c" fillOpacity="0.35" fontSize="9" fontFamily="monospace" letterSpacing="3">OUTLIER.AI · REMOTE</text>
        </svg>
      </div>
    ),

    ineusrg: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0a0a06 0%, #0f100a 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 420 160" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="ig1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#d4a84b" stopOpacity="0.28"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="210" cy="80" r="130" fill="url(#ig1)"/>
          {/* Server rack / middleware diagram */}
          {[0,1,2,3].map(i => (
            <rect key={i} x={70+i*75} y="35" width="60" height="36" rx="5"
              fill="#d4a84b" fillOpacity={0.06+i*0.025}
              stroke="#d4a84b" strokeOpacity={0.2+i*0.06} strokeWidth="1.2"/>
          ))}
          {/* API arrows between boxes */}
          {[0,1,2].map(i => (
            <g key={i}>
              <line x1={130+i*75} y1="53" x2={145+i*75} y2="53" stroke="#d4a84b" strokeOpacity="0.5" strokeWidth="1.5" markerEnd="url(#arr)"/>
            </g>
          ))}
          <defs>
            <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
              <path d="M0,0 L6,3 L0,6 Z" fill="#d4a84b" fillOpacity="0.5"/>
            </marker>
          </defs>
          {/* Labels */}
          {['FastAPI','Middleware','PostgreSQL','Docker'].map((l,i) => (
            <text key={l} x={100+i*75} y="57" textAnchor="middle" fill="#d4a84b" fillOpacity="0.65" fontSize="7.5" fontFamily="monospace">{l}</text>
          ))}
          {/* Data flow lines */}
          {[80,100,120].map(y => (
            <line key={y} x1="55" y1={y} x2="365" y2={y} stroke="#d4a84b" strokeOpacity="0.06" strokeDasharray="6 4" strokeWidth="1"/>
          ))}
          <text x="210" y="152" textAnchor="middle" fill="#d4a84b" fillOpacity="0.35" fontSize="9" fontFamily="monospace" letterSpacing="3">INEUSRG — NIIT · INDIA</text>
        </svg>
      </div>
    ),

    'ul-ta': (
      <div style={{ ...base, background: 'linear-gradient(135deg, #060810 0%, #080d10 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 420 160" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="ulg1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8ec8e8" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="210" cy="80" r="130" fill="url(#ulg1)"/>
          {/* Graduation / academic cap silhouette */}
          <rect x="155" y="70" width="110" height="8" rx="2" fill="#8ec8e8" fillOpacity="0.5"/>
          <polygon points="210,35 160,70 260,70" fill="#8ec8e8" fillOpacity="0.25" stroke="#8ec8e8" strokeOpacity="0.4" strokeWidth="1.2"/>
          <rect x="190" y="42" width="14" height="30" rx="2" fill="#8ec8e8" fillOpacity="0.15"/>
          <line x1="250" y1="70" x2="250" y2="100" stroke="#8ec8e8" strokeOpacity="0.4" strokeWidth="2"/>
          <circle cx="250" cy="105" r="6" fill="#8ec8e8" fillOpacity="0.5"/>
          {/* Whiteboard / code lines */}
          {[100,112,124,136].map((y,i) => (
            <rect key={y} x={80+i*10} y={y} width={100-i*15} height="5" rx="2" fill="#8ec8e8" fillOpacity="0.1"/>
          ))}
          <text x="210" y="152" textAnchor="middle" fill="#8ec8e8" fillOpacity="0.35" fontSize="9" fontFamily="monospace" letterSpacing="3">UNIVERSITY OF LIMERICK · IRELAND</text>
        </svg>
      </div>
    ),

    maldron: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #080608 0%, #0a0808 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 420 160" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="mg1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.12)"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="210" cy="80" r="120" fill="url(#mg1)"/>
          {/* Hotel building silhouette */}
          <rect x="110" y="60" width="200" height="80" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1"/>
          {/* Windows */}
          {[0,1,2,3,4].map(col => [0,1,2].map(row => (
            <rect key={`${col}${row}`} x={120+col*36} y={68+row*22} width="20" height="14" rx="2"
              fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5"/>
          )))}
          {/* Door */}
          <rect x="190" y="120" width="40" height="20" rx="2" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
          <text x="210" y="152" textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="9" fontFamily="monospace" letterSpacing="3">MALDRON HOTEL · LIMERICK</text>
        </svg>
      </div>
    ),

    testbirds: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #080a06 0%, #0a0a08 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 420 160" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="tbird1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#7ee8a2" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="210" cy="80" r="120" fill="url(#tbird1)"/>
          {/* Bug/test report visual */}
          <rect x="90" y="30" width="240" height="110" rx="7" fill="rgba(126,232,162,0.04)" stroke="rgba(126,232,162,0.15)" strokeWidth="1"/>
          {/* Header */}
          <rect x="90" y="30" width="240" height="20" rx="7" fill="rgba(126,232,162,0.08)"/>
          <text x="210" y="44" textAnchor="middle" fill="rgba(126,232,162,0.6)" fontSize="9" fontFamily="monospace">BUG REPORT #4821</text>
          {/* Bug rows */}
          {['CRITICAL','HIGH','MEDIUM','LOW'].map((sev,i) => (
            <g key={sev}>
              <rect x="100" y={56+i*18} width="220" height="13" rx="2"
                fill={['rgba(232,96,44,0.12)','rgba(232,96,44,0.07)','rgba(212,168,75,0.07)','rgba(126,232,162,0.05)'][i]}
                stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
              <text x="110" y={66+i*18} fill={['#e8602c','#e8602c','#d4a84b','#7ee8a2'][i]} fillOpacity="0.7" fontSize="8" fontFamily="monospace">{sev}</text>
              <text x="300" y={66+i*18} fill="rgba(255,255,255,0.25)" fontSize="8" fontFamily="monospace">Repro: {['100%','95%','80%','60%'][i]}</text>
            </g>
          ))}
          <text x="210" y="152" textAnchor="middle" fill="rgba(126,232,162,0.35)" fontSize="9" fontFamily="monospace" letterSpacing="3">TESTBIRDS GMBH · REMOTE</text>
        </svg>
      </div>
    ),
  }

  return <>{visuals[company]}</>
}
