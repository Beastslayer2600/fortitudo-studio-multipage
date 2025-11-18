
export default function Contact(){
  return (
    <main className="py-16 sm:py-24">
      <div className="container max-w-xl">
        <h1 className="font-serif text-3xl" style={{color:"var(--green)"}}>Contact</h1>
        <p className="mt-2 text-sm text-neutral-700">Questions or collaborations? Send a note.</p>
        <form className="mt-6 grid gap-3" action="#" method="post">
          <input className="rounded-2xl px-4 py-3 border border-[var(--gold)]" placeholder="Your name" />
          <input className="rounded-2xl px-4 py-3 border border-[var(--gold)]" placeholder="you@email.com" type="email" />
          <textarea className="rounded-2xl px-4 py-3 border border-[var(--gold)]" placeholder="Message" rows={5} />
          <button className="btn btn-primary" type="submit">Send</button>
        </form>
      </div>
    </main>
  );
}
