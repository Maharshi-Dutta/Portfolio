'use client'
import { useEffect, useRef, useState } from 'react'

const NAME = ['M','a','h','a','r','s','h','i',' ','D','u','t','t','a']

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState(0) // 0=hidden 1=badge 2=name 3=sub 4=btns
  const [scrollY, setScrollY] = useState(0)

  // Cinematic staggered entrance
  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1600),
      setTimeout(() => setPhase(4), 2100),
    ]
    return () => t.forEach(clearTimeout)
  }, [])

  // Parallax on scroll
  useEffect(() => {
    const fn = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Three.js particle scene
  useEffect(() => {
    let raf: number
    let renderer: any, scene: any, camera: any, points: any

    async function init() {
      const THREE = await import('three')
      const canvas = canvasRef.current
      if (!canvas) return

      scene = new THREE.Scene()
      scene.fog = new THREE.FogExp2(0x04040a, 0.018)
      camera = new THREE.PerspectiveCamera(55, canvas.clientWidth / canvas.clientHeight, 0.1, 200)
      camera.position.z = 50

      renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      renderer.setClearColor(0x000000, 0)

      // Main stars
      const count = 3500
      const pos = new Float32Array(count * 3)
      const col = new Float32Array(count * 3)
      const sizes = new Float32Array(count)
      const palette = [
        [0.91, 0.38, 0.11], // ember
        [0.56, 0.78, 0.91], // ice
        [0.83, 0.66, 0.29], // gold
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]
      for (let i = 0; i < count; i++) {
        const r = 20 + Math.random() * 80
        const theta = Math.random() * Math.PI * 2
        const phi = Math.acos(2 * Math.random() - 1)
        pos[i*3] = r * Math.sin(phi) * Math.cos(theta)
        pos[i*3+1] = r * Math.sin(phi) * Math.sin(theta)
        pos[i*3+2] = r * Math.cos(phi)
        const c = palette[Math.floor(Math.random() * palette.length)]
        col[i*3] = c[0]; col[i*3+1] = c[1]; col[i*3+2] = c[2]
        sizes[i] = 0.05 + Math.random() * 0.25
      }
      const geo = new THREE.BufferGeometry()
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3))
      geo.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

      const mat = new THREE.PointsMaterial({
        size: 0.18, sizeAttenuation: true, vertexColors: true,
        transparent: true, opacity: 0.9,
        blending: THREE.AdditiveBlending, depthWrite: false,
      })
      points = new THREE.Points(geo, mat)
      scene.add(points)

      // Ambient lines (depth)
      for (let i = 0; i < 60; i++) {
        const linegeo = new THREE.BufferGeometry()
        const x = (Math.random() - 0.5) * 120
        const y = (Math.random() - 0.5) * 120
        const z = (Math.random() - 0.5) * 60
        linegeo.setFromPoints([
          new THREE.Vector3(x, y, z),
          new THREE.Vector3(x + (Math.random()-0.5)*3, y + (Math.random()-0.5)*3, z + (Math.random()-0.5)*3),
        ])
        const lmat = new THREE.LineBasicMaterial({ color: 0xe8602c, transparent: true, opacity: 0.06 + Math.random() * 0.06 })
        scene.add(new THREE.Line(linegeo, lmat))
      }

      let mx = 0, my = 0
      let targetMx = 0, targetMy = 0
      const onMouse = (e: MouseEvent) => {
        targetMx = (e.clientX / window.innerWidth - 0.5) * 0.5
        targetMy = (e.clientY / window.innerHeight - 0.5) * 0.3
      }
      window.addEventListener('mousemove', onMouse)

      const onResize = () => {
        if (!canvas) return
        camera.aspect = canvas.clientWidth / canvas.clientHeight
        camera.updateProjectionMatrix()
        renderer.setSize(canvas.clientWidth, canvas.clientHeight)
      }
      window.addEventListener('resize', onResize)

      const clock = new THREE.Clock()
      function animate() {
        raf = requestAnimationFrame(animate)
        const t = clock.getElapsedTime()
        mx += (targetMx - mx) * 0.03
        my += (targetMy - my) * 0.03
        points.rotation.y = t * 0.018 + mx * 0.3
        points.rotation.x = Math.sin(t * 0.009) * 0.06 + my * 0.2
        camera.position.x += (mx * 2 - camera.position.x) * 0.02
        camera.position.y += (-my * 2 - camera.position.y) * 0.02
        camera.lookAt(scene.position)
        renderer.render(scene, camera)
      }
      animate()
      return () => {
        window.removeEventListener('mousemove', onMouse)
        window.removeEventListener('resize', onResize)
        renderer.dispose()
      }
    }

    const cleanup = init()
    return () => { cancelAnimationFrame(raf); cleanup.then(fn => fn?.()) }
  }, [])

  const parallax = scrollY * 0.4

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Canvas */}
      <canvas ref={canvasRef} style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        transform: `translateY(${parallax}px)`,
        transition: 'transform 0.01s linear',
      }} />

      {/* Vignette */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, rgba(4,4,10,0.7) 100%)',
        pointerEvents: 'none',
      }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '35vh', background: 'linear-gradient(to top, var(--noir), transparent)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '20vh', background: 'linear-gradient(to bottom, rgba(4,4,10,0.5), transparent)', pointerEvents: 'none' }} />

      {/* Orbs */}
      <div className="orb" style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(232,96,44,0.12) 0%, transparent 70%)', top: '10%', left: '-10%', animationDelay: '0s' }} />
      <div className="orb" style={{ width: '350px', height: '350px', background: 'radial-gradient(circle, rgba(142,200,232,0.08) 0%, transparent 70%)', bottom: '15%', right: '-8%', animationDelay: '-4s' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', transform: `translateY(${-parallax * 0.3}px)` }}>

        {/* Badge */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          marginBottom: '48px',
          padding: '8px 20px',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(10px)',
          fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.22em',
          color: 'rgba(255,255,255,0.35)',
          opacity: phase >= 1 ? 1 : 0,
          transform: phase >= 1 ? 'translateY(0)' : 'translateY(-12px)',
          transition: 'opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo)',
        }}>
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--ember)', boxShadow: '0 0 8px var(--ember)', animation: 'pulse 2s infinite' }} />
          LIMERICK, IRELAND — OPEN TO OPPORTUNITIES
          <style>{`@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}`}</style>
        </div>

        {/* Name */}
        <h1 style={{ marginBottom: '28px', lineHeight: 0.9 }}>
          {NAME.map((char, i) => (
            <span key={i} style={{
              display: 'inline-block',
              fontFamily: "'Times New Roman', Georgia, serif",
              fontSize: 'clamp(56px, 11vw, 130px)',
              fontWeight: 300,
              letterSpacing: char === ' ' ? '0.12em' : '-0.01em',
              width: char === ' ' ? '0.3em' : 'auto',
              opacity: phase >= 2 ? 1 : 0,
              transform: phase >= 2 ? 'translateY(0) skewY(0deg)' : 'translateY(60px) skewY(2deg)',
              filter: phase >= 2 ? 'blur(0px)' : 'blur(8px)',
              transition: `opacity 0.9s var(--ease-out-expo) ${i * 0.04}s, transform 0.9s var(--ease-out-expo) ${i * 0.04}s, filter 0.7s var(--ease-out-expo) ${i * 0.04}s`,
            }}>{char}</span>
          ))}
        </h1>

        {/* Subtitle */}
        <div style={{
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 1s var(--ease-out-expo), transform 1s var(--ease-out-expo)',
        }}>
          <p style={{ fontFamily: 'monospace', fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '10px' }}>
            AI & Full-Stack Developer
          </p>
          <p style={{ fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.2)' }}>
            Agentic AI · RAG Systems · Backend · Cloud
          </p>
        </div>

        {/* Line */}
        <div style={{
          width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, var(--ember), transparent)',
          margin: '36px auto',
          opacity: phase >= 3 ? 1 : 0,
          transform: phase >= 3 ? 'scaleY(1)' : 'scaleY(0)',
          transition: 'opacity 0.8s var(--ease-out-expo) 0.2s, transform 0.8s var(--ease-out-expo) 0.2s',
        }} />

        {/* Buttons */}
        <div style={{
          display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap',
          opacity: phase >= 4 ? 1 : 0,
          transform: phase >= 4 ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.8s var(--ease-out-expo), transform 0.8s var(--ease-out-expo)',
        }}>
          <button
            onClick={() => { import('@/lib/scroll').then(m => m.scrollToSection('experience')) }}
            style={{
              padding: '16px 40px', background: 'var(--ember)', color: 'white',
              fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
              border: 'none', boxShadow: '0 0 40px rgba(232,96,44,0.35)',
              transition: 'all 0.4s var(--ease-out-expo)',
              borderRadius: '4px',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--ember-bright)'; e.currentTarget.style.boxShadow = '0 0 60px rgba(232,96,44,0.5)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--ember)'; e.currentTarget.style.boxShadow = '0 0 40px rgba(232,96,44,0.35)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >View My Work</button>
          <button
            onClick={() => { import('@/lib/scroll').then(m => m.scrollToSection('contact')) }}
            style={{
              padding: '16px 40px', border: '1px solid rgba(255,255,255,0.15)',
              color: 'rgba(255,255,255,0.6)', background: 'transparent',
              fontFamily: 'monospace', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
              transition: 'all 0.4s var(--ease-out-expo)',
              borderRadius: '4px',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-3px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >Get In Touch</button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px',
        opacity: phase >= 4 ? 0.4 : 0, transition: 'opacity 1s ease 1s',
      }}>
        <span style={{ fontFamily: 'monospace', fontSize: '9px', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)' }}>SCROLL</span>
        <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)', animation: 'scrollPulse 2s ease-in-out infinite' }} />
        <style>{`@keyframes scrollPulse{0%,100%{opacity:0.4;transform:scaleY(1)}50%{opacity:1;transform:scaleY(1.1)}}`}</style>
      </div>
    </section>
  )
}
