import { CSSProperties } from 'react'

type CertType = 'aws' | 'ibm' | 'oracle' | 'javascript'

interface Props {
  type: CertType
  style?: CSSProperties
}

export default function CertVisual({ type, style = {} }: Props) {
  const base: CSSProperties = {
    width: '100%', height: '180px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden',
    borderRadius: '16px 16px 0 0',
    ...style,
  }

  const visuals: Record<CertType, React.ReactNode> = {

    aws: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #060a10 0%, #080d16 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="awsg" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#8ec8e8" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="90" r="130" fill="url(#awsg)"/>
          {/* AWS cloud shape */}
          <ellipse cx="200" cy="85" rx="80" ry="40" fill="#8ec8e8" fillOpacity="0.1" stroke="#8ec8e8" strokeOpacity="0.3" strokeWidth="1.5"/>
          <ellipse cx="155" cy="95" rx="50" ry="32" fill="#8ec8e8" fillOpacity="0.08" stroke="#8ec8e8" strokeOpacity="0.2" strokeWidth="1"/>
          <ellipse cx="245" cy="95" rx="50" ry="32" fill="#8ec8e8" fillOpacity="0.08" stroke="#8ec8e8" strokeOpacity="0.2" strokeWidth="1"/>
          {/* Services */}
          {[['EC2','#8ec8e8',120,75],['S3','#e8602c',200,68],['IAM','#d4a84b',280,75]].map(([l,c,x,y]) => (
            <g key={String(l)}>
              <circle cx={Number(x)} cy={Number(y)} r="14" fill={String(c)} fillOpacity="0.15" stroke={String(c)} strokeOpacity="0.4" strokeWidth="1"/>
              <text x={Number(x)} y={Number(y)+4} textAnchor="middle" fill={String(c)} fillOpacity="0.8" fontSize="8" fontFamily="monospace" fontWeight="bold">{String(l)}</text>
            </g>
          ))}
          {/* Badge ribbon */}
          <polygon points="200,30 215,50 200,45 185,50" fill="#8ec8e8" fillOpacity="0.3"/>
          <circle cx="200" cy="28" r="12" fill="#8ec8e8" fillOpacity="0.12" stroke="#8ec8e8" strokeOpacity="0.4" strokeWidth="1.5"/>
          <text x="200" y="32" textAnchor="middle" fill="#8ec8e8" fillOpacity="0.8" fontSize="8" fontFamily="monospace">★</text>
          <text x="200" y="168" textAnchor="middle" fill="#8ec8e8" fillOpacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="3">AWS ACADEMY · 2024</text>
        </svg>
      </div>
    ),

    ibm: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #060608 0%, #0a0a12 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="ibmg" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#6ea6e8" stopOpacity="0.35"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="90" r="130" fill="url(#ibmg)"/>
          {/* IBM stripes logo style */}
          {[0,1,2,3,4,5,6,7].map(i => (
            <rect key={i} x="110" y={38+i*14} width="180" height="8" rx="1" fill="#6ea6e8" fillOpacity={0.08+i*0.02}/>
          ))}
          {/* IBM Professional Certificate badge */}
          <circle cx="200" cy="90" r="45" fill="none" stroke="#6ea6e8" strokeOpacity="0.25" strokeWidth="1.5"/>
          <circle cx="200" cy="90" r="32" fill="#6ea6e8" fillOpacity="0.08" stroke="#6ea6e8" strokeOpacity="0.35" strokeWidth="1"/>
          <text x="200" y="86" textAnchor="middle" fill="#6ea6e8" fillOpacity="0.8" fontSize="11" fontFamily="monospace" fontWeight="bold">IBM</text>
          <text x="200" y="98" textAnchor="middle" fill="#6ea6e8" fillOpacity="0.55" fontSize="7" fontFamily="monospace">AI ENGINEER</text>
          {/* Laurel arcs */}
          {[-60,-40,-20,0,20,40,60].map((a,i) => {
            const r1 = 55; const rad = (a-90)*Math.PI/180
            const x = 200 + r1*Math.cos(rad); const y = 90 + r1*Math.sin(rad)
            return <circle key={i} cx={x} cy={y} r="2.5" fill="#6ea6e8" fillOpacity="0.35"/>
          })}
          <text x="200" y="168" textAnchor="middle" fill="#6ea6e8" fillOpacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="2">IBM AI ENGINEERING PROFESSIONAL</text>
        </svg>
      </div>
    ),

    oracle: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0a0605 0%, #100806 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="oracg" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#e84040" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="90" r="130" fill="url(#oracg)"/>
          {/* Oracle ellipse logo */}
          <ellipse cx="200" cy="90" rx="80" ry="45" fill="none" stroke="#e84040" strokeOpacity="0.4" strokeWidth="2"/>
          <ellipse cx="200" cy="90" rx="55" ry="30" fill="#e84040" fillOpacity="0.08" stroke="#e84040" strokeOpacity="0.25" strokeWidth="1.5"/>
          {/* Database stack */}
          {[0,1,2].map(i => (
            <ellipse key={i} cx="200" cy={118-i*22} rx="30" ry="9" fill="#e84040" fillOpacity={0.06+i*0.03} stroke="#e84040" strokeOpacity={0.2+i*0.05} strokeWidth="1"/>
          ))}
          {[0,1].map(i => (
            <rect key={i} x="170" y={109-i*22} width="60" height="22" fill="#e84040" fillOpacity="0.04" stroke="none"/>
          ))}
          <text x="200" y="57" textAnchor="middle" fill="#e84040" fillOpacity="0.7" fontSize="10" fontFamily="monospace" fontWeight="bold">ORACLE</text>
          <text x="200" y="168" textAnchor="middle" fill="#e84040" fillOpacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="3">ORACLE ACADEMY · 2023</text>
        </svg>
      </div>
    ),

    javascript: (
      <div style={{ ...base, background: 'linear-gradient(135deg, #0a0a04 0%, #100f06 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 400 180" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="jsg" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#f0d060" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="transparent"/>
            </radialGradient>
          </defs>
          <circle cx="200" cy="90" r="130" fill="url(#jsg)"/>
          {/* JS Logo square */}
          <rect x="145" y="40" width="110" height="110" rx="8" fill="#f0d060" fillOpacity="0.1" stroke="#f0d060" strokeOpacity="0.3" strokeWidth="1.5"/>
          <text x="163" y="115" fill="#f0d060" fillOpacity="0.8" fontSize="48" fontFamily="monospace" fontWeight="bold" fontStyle="italic">JS</text>
          {/* University of Arizona badge */}
          <rect x="250" y="38" width="90" height="28" rx="5" fill="#e84040" fillOpacity="0.2" stroke="#e84040" strokeOpacity="0.3" strokeWidth="1"/>
          <text x="295" y="56" textAnchor="middle" fill="#e84040" fillOpacity="0.75" fontSize="8" fontFamily="monospace">UNIV. ARIZONA</text>
          {/* Code lines */}
          {['const fn = () => {','  return true;','}'].map((line, i) => (
            <text key={i} x="90" y={135+i*14} fill="#f0d060" fillOpacity={0.15+i*0.05} fontSize="9" fontFamily="monospace">{line}</text>
          ))}
          <text x="200" y="168" textAnchor="middle" fill="#f0d060" fillOpacity="0.4" fontSize="9" fontFamily="monospace" letterSpacing="2">JAVASCRIPT · UNIV. OF ARIZONA</text>
        </svg>
      </div>
    ),
  }

  return <>{visuals[type]}</>
}
