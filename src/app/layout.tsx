import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Maharshi Dutta — AI & Full-Stack Developer',
  description: 'AI & Full-Stack Developer. RAG systems, Agentic AI, backend engineering. Based in Ireland.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  )
}
