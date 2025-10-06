import Link from 'next/link'
export default function Home(){
  return (<main>
    <section style={{background:'var(--green)'}}>
      <div className="container" style={{padding:'4.5rem 0 5.5rem'}}>
        <h1 className="text-white font-serif" style={{fontSize:'3rem'}}>Timeless Tools for Strength & Faith</h1>
        <p className="mt-4" style={{color:'rgba(255,255,255,.85)',maxWidth:'42rem'}}>Old‑money aesthetic journals and practices. Crafted to be printed or used in GoodNotes.</p>
        <div className="mt-8" style={{display:'flex',gap:'.75rem'}}>
          <Link href="/journal" className="btn-primary">Explore the Journal</Link>
          <Link href="/about" className="btn-ghost">Our Story</Link>
        </div>
      </div>
    </section>
    <section style={{padding:'4rem 0'}}>
      <div className="container" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'1rem'}}>
        <div className="card"><h3 className="font-serif" style={{color:'var(--green)',fontSize:'1.25rem'}}>Discipline</h3><p className="mt-2 text-sm">Morning intention + evening reflection.</p></div>
        <div className="card"><h3 className="font-serif" style={{color:'var(--green)',fontSize:'1.25rem'}}>Stewardship</h3><p className="mt-2 text-sm">Design that keeps you focused.</p></div>
        <div className="card"><h3 className="font-serif" style={{color:'var(--green)',fontSize:'1.25rem'}}>Faith</h3><p className="mt-2 text-sm">Scripture anchors for each week.</p></div>
      </div>
    </section>
  </main>)
}
