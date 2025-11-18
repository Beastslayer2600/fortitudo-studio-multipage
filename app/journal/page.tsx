export default function Journal(){
  return (
    <main className="py-16 sm:py-24">
      <div className="container grid lg:grid-cols-12 gap-10 items-start">
        <article className="lg:col-span-7">
          <h1 className="font-serif text-3xl" style={{color:"var(--green)"}}>Fortitudo Journal (PDF)</h1>
          <p className="mt-3">
            A 30-day practice with morning and evening prompts, weekly themes, habit tracker, and scripture selections.
          </p>
          <ul className="mt-4 list-disc pl-5 text-sm">
            <li>Printable A4 & GoodNotes-ready (hyperlinked)</li>
            <li>Old-money palette: deep green, cream, muted gold</li>
            <li>Personal use license</li>
          </ul>

          <div className="mt-6 flex gap-3">
            {/* TODO: replace # with your Payhip/Gumroad link */}
            <a href="#" className="btn btn-primary">$7 — Buy Now</a>
            <a href="#" className="btn btn-ghost">Preview Sample</a>
          </div>

          <div className="rule my-10" />
          <h2 className="font-serif text-2xl" style={{color:"var(--green)"}}>Inside the Journal</h2>
          <ol className="mt-4 list-decimal pl-5 text-sm space-y-1">
            <li>Quiet cover and ownership page</li>
            <li>How to use + weekly scripture anchors</li>
            <li>30 days of AM/PM pages</li>
            <li>Habit tracker and review spread</li>
            <li>Closing blessing in hand-script style</li>
          </ol>
        </article>

        <aside className="lg:col-span-5">
          <div className="surface p-6">
            <p className="text-sm tracking-widest" style={{color:"var(--gold)"}}>DIGITAL DOWNLOAD</p>
            <p className="mt-2 text-sm">Instant access after purchase.</p>
            <div className="mt-4 h-48 frame rounded-xl flex items-center justify-center text-sm text-neutral-500">
              Replace with mockup image (public/journal-mock.png)
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
