import type { Metadata } from "next";
import Link from "next/link";

const assetLimits = [
  { label: "Equity (shares)", limit: "Maximum 75%", note: "Includes both local and offshore equity" },
  { label: "Offshore assets", limit: "Maximum 45%", note: "Raised from 30% in February 2022 budget" },
  { label: "African markets (ex-SA)", limit: "Additional 10%", note: "Above the 45% offshore limit" },
  { label: "Property", limit: "Maximum 25%", note: "Combined direct and listed property" },
  { label: "Hedge funds / private equity", limit: "Maximum 10%", note: "Specific sub-limits apply" },
  { label: "Single issuer", limit: "Maximum 25%", note: "Diversification constraint per issuer" },
] as const;

const fundsCovered = [
  "Pension funds",
  "Provident funds",
  "Retirement Annuity funds",
  "Preservation funds (pension and provident)",
  "Beneficiary funds",
] as const;

const commonMisconceptions = [
  {
    myth: "Regulation 28 limits offshore exposure too aggressively",
    reality:
      "The 45% offshore limit (plus 10% Africa) is significant. A fund using the full allowance can hold 55% of assets outside South Africa — a meaningful global diversification capability.",
  },
  {
    myth: "Reg 28 forces you into poor-performing SA assets",
    reality:
      "The 75% equity limit is generous. A global equity portfolio within the offshore allowance can include the world's best companies. Local equity adds concentration risk — but also access to SA-specific opportunities.",
  },
  {
    myth: "Advisers cannot do anything within these constraints",
    reality:
      "Within the limits, an adviser has significant flexibility in asset selection, fund choice, offshore/local weighting, and defensive positioning. Skill lies in maximising outcomes within the framework.",
  },
] as const;

const structuringApproaches = [
  "Maximise the 45% offshore equity allowance through global index or active funds",
  "Use rand-hedge local shares (resources, dual-listed counters) for additional global exposure within the local equity bucket",
  "Hold listed property selectively — global REITs via the offshore allowance, local REITs domestically",
  "Use the bond/cash allocation defensively during high-risk periods without breaking equity limits",
  "Combine multiple regulated structures (RA + TFSA) to optimise total portfolio construction across Reg 28 and non-Reg 28 wrappers",
] as const;

export const metadata: Metadata = {
  title: "Regulation 28 Explained | Gert Fourie",
  description:
    "How Regulation 28 governs South African retirement fund asset allocation — equity limits, offshore allowances, property exposure, and what it means for your retirement portfolio.",
};

export default function Regulation28Page() {
  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 text-[var(--cream)] sm:pt-28 sm:pb-24">
      <article className="container max-w-4xl">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/insights"
            className="text-sm uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-[var(--gold)]"
          >
            Insights
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">Insight</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Regulation 28 Explained — What It Means for Your Retirement Portfolio
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            South African retirement funds cannot simply invest wherever they want. Regulation 28
            of the Pension Funds Act sets out the investment limits that govern how retirement
            money may be allocated — and understanding these limits is essential for intelligent
            retirement planning.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl surface p-6 sm:p-8">
          <p className="text-xl font-semibold leading-8 text-white">
            Regulation 28 exists to protect retirement savings from concentration risk and
            speculative allocation. It is a constraint — but also a framework within which skilled
            advisers can still build highly effective portfolios.
          </p>
          <p className="mt-4 text-base leading-7 text-white/70">
            The regulation applies to all regulated retirement fund investments in South Africa.
            It sets maximum exposure limits across asset classes — not mandates — meaning a fund
            cannot exceed the limits, but is not required to use the full allowance in any category.
            The rules are designed to ensure diversification and protect members from the
            consequences of concentrated positions.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl space-y-14">

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              1. Which funds are covered
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Regulation 28 applies to all retirement funds registered under the Pension Funds Act.
              This includes:
            </p>
            <ul className="space-y-3">
              {fundsCovered.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-8 text-white/75">
              It does not apply to Tax-Free Savings Accounts (TFSAs), discretionary investment
              accounts, or endowment policies. This is why TFSAs are often positioned alongside
              a Retirement Annuity — the TFSA operates outside Reg 28 constraints, allowing full
              offshore and equity exposure if appropriate.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              2. The key asset allocation limits
            </h2>
            <p className="text-lg leading-8 text-white/75">
              The primary limits under Regulation 28 as currently structured are:
            </p>
            <div className="space-y-3">
              {assetLimits.map((item) => (
                <div key={item.label} className="surface p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-base font-medium text-white">{item.label}</p>
                      <p className="mt-1 text-sm text-white/55">{item.note}</p>
                    </div>
                    <p className="shrink-0 text-sm font-medium text-[var(--gold)]">{item.limit}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-lg leading-8 text-white/75">
              The 2022 increase in the offshore allowance from 30% to 45% (with an additional 10%
              for rest-of-Africa) was a material change — significantly expanding the ability to
              diversify away from South African assets within a regulated retirement structure.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              3. Why these limits exist
            </h2>
            <p className="text-lg leading-8 text-white/75">
              The Regulation 28 framework serves two purposes: protecting members from
              concentration risk, and ensuring that retirement capital contributes to South
              African economic development through meaningful domestic investment.
            </p>
            <p className="text-lg leading-8 text-white/75">
              The constraints are not arbitrary. They reflect a considered balance between:
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Prudent member protection",
                "Domestic capital retention",
                "Global diversification access",
                "Illiquid asset risk management",
                "Single-name concentration control",
                "Speculative investment restriction",
              ].map((item) => (
                <div key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </div>
              ))}
            </div>
            <p className="text-lg leading-8 text-white/75">
              Critics argue the domestic bias works against long-term returns given South
              Africa&rsquo;s structural economic challenges. Supporters argue the constraints
              prevent excessive concentration in any single market or asset class. Both
              perspectives have merit — and the limits have evolved over time to reflect this
              tension.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              4. Common misconceptions
            </h2>
            {commonMisconceptions.map((item) => (
              <div key={item.myth} className="surface p-6">
                <p className="text-sm uppercase tracking-[0.12em] text-[var(--gold)]">Misconception</p>
                <p className="mt-2 text-base font-medium text-white/90">{item.myth}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.12em] text-white/50">Reality</p>
                <p className="mt-2 text-base text-white/75">{item.reality}</p>
              </div>
            ))}
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              5. How advisers structure within Reg 28
            </h2>
            <p className="text-lg leading-8 text-white/75">
              The constraints of Regulation 28 do not prevent intelligent portfolio construction —
              they require it. Experienced advisers work within the framework by:
            </p>
            <ul className="space-y-3">
              {structuringApproaches.map((item) => (
                <li key={item} className="surface p-4 text-base text-white/75">
                  {item}
                </li>
              ))}
            </ul>
            <blockquote className="border-l-2 border-[var(--gold)] pl-6 font-serif text-xl italic text-white/90">
              &ldquo;The TFSA and RA combination is one of the most tax-efficient portfolio
              structures available to South Africans — and the absence of Reg 28 in the TFSA
              is a key part of why.&rdquo;
            </blockquote>
            <p className="text-lg leading-8 text-white/75">
              For most investors, the RA handles tax deductibility and forced discipline.
              The TFSA provides tax-free growth without investment constraints. Used together,
              they extract more from South Africa&rsquo;s tax system than either does alone.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="font-serif text-3xl text-[var(--gold)]">
              6. What changes in Regulation 28 mean for existing investors
            </h2>
            <p className="text-lg leading-8 text-white/75">
              Regulation 28 is not static. The 2022 offshore limit increase was one of several
              amendments over the past decade. Investors with older RA policies may find that
              their underlying fund allocations do not yet reflect the updated allowances —
              particularly if they are in legacy products where fund mandates have not been
              updated to utilise the expanded offshore capacity.
            </p>
            <p className="text-lg leading-8 text-white/75">
              This is one reason why periodic portfolio reviews matter. A retirement fund
              structured ten years ago may be significantly underexposed to offshore assets
              relative to what is now legally permissible — and relative to what would be
              appropriate for the investor&rsquo;s risk profile and time horizon.
            </p>
          </section>

          <section className="surface p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-[var(--gold)]">Conclusion</h2>
            <p className="mt-4 text-lg leading-8 text-white/75">
              Regulation 28 is the structural framework within which most South African
              retirement capital operates. Understanding its limits — and how to build effectively
              within them — is not optional knowledge for anyone serious about long-term
              retirement planning. The constraints are real, but so is the flexibility available
              to skilled advisers working within the framework.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/75">
              If your retirement portfolio has not been reviewed against current Reg 28 allowances
              and your personal risk profile, that review is worth having.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-[var(--gold)] px-6 py-3 text-sm font-medium tracking-[0.08em] text-[#0B0D10] transition-colors hover:bg-white"
            >
              Book a free consultation
            </Link>
          </section>

        </div>
      </article>
    </main>
  );
}
