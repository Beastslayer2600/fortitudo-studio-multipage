export default function Journal(){
  return (<main style={{padding:'4rem 0'}}>
    <div className="container" style={{display:'grid',gap:'2rem',gridTemplateColumns:'1fr'}}>
      <div>
        <h1 className="font-serif" style={{color:'var(--green)',fontSize:'2rem'}}>Fortitudo Journal (PDF)</h1>
        <p className="mt-3">A 30‑day practice with morning & evening prompts, weekly themes, habit tracker, and scripture selections.</p>
        <ul className="mt-3" style={{paddingLeft:'1rem',listStyle:'disc'}}>
          <li>Printable A4 & GoodNotes‑ready (hyperlinked)</li>
          <li>Old‑money palette: deep green, cream, gold</li>
          <li>Personal use license</li>
        </ul>
        <div className="mt-5" style={{display:'flex',gap:'.75rem'}}>
          <a href="#" className="btn-primary">$7 — Buy Now</a>
          <a href="#" className="btn-ghost">Preview Sample</a>
        </div>
      </div>
      <div className="card">
        <p className="text-sm" style={{letterSpacing:'.1em',color:'var(--gold)'}}>DIGITAL DOWNLOAD</p>
        <p className="mt-2 text-sm">Instant access after purchase.</p>
      </div>
    </div>
  </main>)
}
