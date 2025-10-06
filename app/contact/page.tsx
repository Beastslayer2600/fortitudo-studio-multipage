export default function Contact(){
  return (<main style={{padding:'4rem 0'}}>
    <div className="container" style={{maxWidth:'42rem'}}>
      <h1 className="font-serif" style={{color:'var(--green)',fontSize:'2rem'}}>Contact</h1>
      <p className="mt-3 text-sm">Questions or collaborations? Send a note.</p>
      <form className="mt-6" action="#" method="post" style={{display:'grid',gap:'.75rem'}}>
        <input className="rounded-xl px-4 py-3 text-sm" placeholder="Your name" />
        <input className="rounded-xl px-4 py-3 text-sm" placeholder="you@email.com" type="email" />
        <textarea className="rounded-xl px-4 py-3 text-sm" placeholder="Message" rows={5} />
        <button className="btn-primary" type="submit">Send</button>
      </form>
    </div>
  </main>)
}
