import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://fortitudostudios.site'),
  title: 'Fortitudo Studios — Timeless Tools for Strength & Faith',
  description: 'Old-money aesthetic journals and practices.',
  openGraph: { title: 'Fortitudo Studios', description: 'Timeless Tools for Strength & Faith', url: 'https://fortitudostudios.site', images: ['/cover.png'], siteName: 'Fortitudo Studios' }
}

function Nav(){
  return (<header style={{background:'var(--green)'}}>
    <div className="container" style={{padding:'1rem 0',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <Link href="/" className="text-white font-serif" style={{fontSize:'1.25rem'}}>Fortitudo Studios</Link>
      <nav className="hidden md:flex" style={{gap:'1.25rem',display:'flex'}}>
        <Link href="/journal" className="text-white/90 hover:text-white">Journal</Link>
        <Link href="/about" className="text-white/90 hover:text-white">About</Link>
        <Link href="/contact" className="text-white/90 hover:text-white">Contact</Link>
      </nav>
    </div>
  </header>)
}

function Footer(){
  return (<footer style={{background:'var(--cream)'}}>
    <div className="container" style={{padding:'2rem 0',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
      <p className="text-xs" style={{letterSpacing:'.2em',color:'var(--gold)'}}>FORTITUDO STUDIOS</p>
      <p className="text-xs" style={{color:'#666'}}>© {new Date().getFullYear()} Fortitudo Studios. All rights reserved.</p>
    </div>
  </footer>)
}

export default function RootLayout({children}:{children:React.ReactNode}){
  return (<html lang="en"><body><Nav/>{children}<Footer/></body></html>)
}
