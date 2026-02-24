# Maharshi Dutta — Portfolio v2

Dark, immersive Next.js portfolio with Three.js particle field, Primland-style reveal system, frosted glass cards, 3D tilt interactions, and film grain.

## Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Three.js** — particle hero canvas
- **Tailwind CSS** (utility classes + custom CSS variables)
- **Pure CSS** — reveal system, grain, orbs, animations

---

## 🚀 Run Locally

```bash
npm install
npm run dev
```
Open http://localhost:3000

---

## 📦 Deploy to Vercel (recommended)

### Option A — Drag & drop
1. Zip this folder
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the zip → it auto-detects Next.js → Deploy ✅

### Option B — GitHub + Vercel Dashboard
```bash
git init
git add .
git commit -m "portfolio v2"
git branch -M main
git remote add origin https://github.com/Maharshi-Dutta/YOUR-REPO.git
git push -u origin main
```
Then import the repo at vercel.com → **Framework: Next.js** → Deploy ✅

### Option C — Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 📁 Structure

```
src/
├── app/
│   ├── globals.css        ← All CSS: variables, cards, reveal system, grain
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Cursor.tsx         ← Custom magnetic cursor
│   ├── Navbar.tsx         ← Sticky nav with active section detection
│   ├── Hero.tsx           ← Three.js particle hero + staggered entrance
│   ├── About.tsx          ← Stats + education cards
│   ├── Experience.tsx     ← Timeline with animated vertical line + TiltCards
│   ├── Projects.tsx       ← Featured + mini project cards
│   ├── ResearchPapers.tsx ← Expandable abstract cards
│   ├── Skills.tsx         ← Skill pills with canvas particle BG
│   ├── Certifications.tsx ← Cert cards with SVG visuals
│   ├── Contact.tsx        ← Social links + CTA card
│   ├── Reveal.tsx         ← Bidirectional scroll reveal wrapper
│   ├── TiltCard.tsx       ← Perspective tilt + specular shine
│   ├── CompanyVisual.tsx  ← SVG illustrations per company
│   ├── CertVisual.tsx     ← SVG illustrations per cert
│   └── ProjectVisual.tsx  ← SVG illustrations per project
├── hooks/
│   └── useReveal.ts       ← IntersectionObserver hooks
└── lib/
    └── scroll.ts          ← Smooth scroll utilities
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| `--ember` | `#e8602c` (primary accent) |
| `--ember-bright` | `#ff7a42` |
| `--ice` | `#8ec8e8` |
| `--gold` | `#d4a84b` |
| `--noir` | `#04040a` (bg) |
| Font body | `Times New Roman` (serif) |
| Font mono | `SF Mono / Fira Code` |

---

## ✨ Key Features

- **Bidirectional reveal** — elements animate in AND out as you scroll
- **3D TiltCard** — perspective tilt + moving specular highlight on hover
- **Three.js hero** — 3,500 additive-blended particles, mouse parallax, ambient lines
- **Animated timeline** — vertical line draws itself when scrolled into view
- **Film grain** — animated SVG noise overlay
- **Floating orbs** — blurred radial gradients that drift slowly
- **Custom cursor** — ember dot + lagged ring, grows on hover
- **Active nav** — IntersectionObserver highlights current section
