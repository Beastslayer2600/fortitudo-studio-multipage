import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section style={{background:"var(--green)"}} className="relative overflow-hidden">
        <div className="container py-20 sm:py-28 relative">
          <div className="absolute inset-0 watermark pointer-events-none" />
          <h1 className="font-serif text-4xl sm:text-6xl text-white">
            Timeless Tools for <span className="opacity-90">Strength</span> & <span className="opacity-90">Faith</span>
          </h1>
          <p className="lead mt-4 text-white/85 max-w-2xl">
            The Fortitudo Journal brings order to your mornings and reflection to your evenings—designed with an old-money aesthetic.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/journal" className="btn btn-primary">Explore the Journal</Link>
            <Link href="/about" className="btn btn-ghost">Our Story</Link>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-16 sm:py-24">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            ["Discipline","Daily morning intention and evening review."],
            ["Stewardship","A quiet design that keeps attention where it belongs."],
            ["Faith","Weekly scripture anchors to frame your work."],
          ].map(([t,d])=>(
            <div key={t} className="surface p-6">
              <h3 className="font-serif text-xl" style={{color:"var(--green)"}}>{t}</h3>
              <p className="mt-2 text-sm text-neutral-700">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="pb-20">
        <div className="container surface p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl" style={{color:"var(--green)"}}>Launch List</h2>
          <p className="mt-2 text-sm text-neutral-700">
            Get the sample pages and be first to know about new releases.
          </p>
          <form className="mt-6 mx-auto max-w-md flex gap-3" action="#" method="post">
            <input className="flex-1 rounded-2xl px-4 py-3 border border-[var(--gold)]" type="email" placeholder="you@email.com" />
            <button className="btn btn-primary" type="submit">Notify me</button>
          </form>
        </div>
      </section>
    </main>
  );
}
