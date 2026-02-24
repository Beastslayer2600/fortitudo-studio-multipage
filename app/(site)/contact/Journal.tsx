
export default function Contact(){
  return (
    <main className="bg-[#0B0D10] text-[var(--cream)] pt-24 pb-16 sm:pt-28 sm:pb-24">
      <div className="container max-w-xl">
        <h1 className="font-serif text-3xl text-[var(--cream)]">Contact</h1>
        <p className="mt-2 text-sm text-white/70">Questions or collaborations? Send a note.</p>
        <form className="mt-6 grid gap-3" action="#" method="post">
          <input
            className="rounded-2xl px-4 py-3 border border-white/10 bg-[#0f1216] text-[var(--cream)]"
            placeholder="Your name"
          />
          <input
            className="rounded-2xl px-4 py-3 border border-white/10 bg-[#0f1216] text-[var(--cream)]"
            placeholder="you@email.com"
            type="email"
          />
          <textarea
            className="rounded-2xl px-4 py-3 border border-white/10 bg-[#0f1216] text-[var(--cream)]"
            placeholder="Message"
            rows={5}
          />
          <button
            className="inline-flex items-center justify-center border border-[var(--gold)] text-[var(--gold)] px-6 py-3 text-xs tracking-[0.18em] uppercase hover:bg-[var(--gold)] hover:text-[#0B0D10] transition-colors"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
}
