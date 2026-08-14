"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const WHATSAPP_NUMBER = "27773866299";

function waLink(extra?: string) {
  const base = "Hi Gert, I just did the 7-question financial health check on your site";
  const text = extra ? `${base} and ${extra}.` : `${base} and want to talk it through.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

const questions = [
  {
    number: "01",
    title: "The reserve",
    body: "Could you cover three months of essential expenses tomorrow — without borrowing, and without touching long-term investments? Essential means the non-negotiables: housing, food, transport, school fees, insurance, debt repayments. Not your full lifestyle. The floor beneath it.",
    why: "Without a reserve, every unexpected event becomes debt. This is the single item that decides whether a setback stays a setback.",
  },
  {
    number: "02",
    title: "Income continuation",
    body: "If illness or injury stopped you working for six months, would money still arrive every month? Check what actually pays out, when it starts, and for how long — many people have cover for a permanent event but nothing for a temporary one.",
    why: "Your income is the engine behind every other item on this list. Protecting investments while leaving income exposed is the wrong way round.",
  },
  {
    number: "03",
    title: "Dependants and final expenses",
    body: "If you died this month, would cash reach your family within weeks — not months? Two things to check: immediate cash for final expenses, and longer-term capital to replace the income your dependants relied on.",
    why: "Estates take time to wind up. A family can be well provided for on paper and still have nothing accessible in the first three months.",
  },
  {
    number: "04",
    title: "The retirement rate",
    body: "Are you contributing at least 15% of your income toward retirement — and did you set that figure recently, or did you inherit it from a job you started years ago?",
    why: "Time does more work than contribution size. A rate set at 22 and never revisited is usually the wrong rate at 35.",
  },
  {
    number: "05",
    title: "Debt structure",
    body: "Is your short-term, unsecured debt smaller today than it was twelve months ago? Credit cards, store accounts, personal loans, overdraft — not your bond or vehicle finance. The expensive, revolving kind.",
    why: "Growing short-term debt is the earliest visible symptom of a cash-flow structure that doesn't work, and it will outrun investment returns every time.",
  },
  {
    number: "06",
    title: "Education funding",
    body: "If you have children, is there a dedicated plan for their education — sized for education inflation, not general inflation? Education costs have historically run well above headline inflation.",
    why: "Education costs arrive on a fixed timetable. They're the most predictable large expense most families face, and the most commonly underfunded.",
  },
  {
    number: "07",
    title: "Estate readiness",
    body: "Is your will current, and do your beneficiary nominations match what it says? Two documents, two different systems — policy and retirement fund nominations pay out independently of your will, and if they disagree, the nomination usually wins.",
    why: "This is the cheapest item on the list to fix, and the most expensive to leave broken.",
  },
] as const;

const scoreBands = [
  {
    range: "6–7",
    title: "Structurally sound",
    body: "Your foundations hold. The value now is optimisation — contribution efficiency, tax structure, and making sure the plan still matches where your life is going.",
  },
  {
    range: "4–5",
    title: "One or two real gaps",
    body: "This is where most people land. Nothing is broken, but one or two items are quietly carrying risk the rest of the structure can't absorb.",
  },
  {
    range: "0–3",
    title: "Start with the foundations",
    body: "Don't start with investment products. Start with the reserve and income continuation — everything else is built on those two.",
  },
] as const;

export default function HealthCheckClient() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [selected, setSelected] = useState("");

  const defaultMessage =
    "I just completed the 7-Question Financial Health Check. I'd like to talk through my results.";

  const sendEmail = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;

    setStatus("sending");
    setErrorMsg("");

    emailjs
      .sendForm("service_j5nb1ym", "template_5lecm3j", form.current, "N7BQYsyCGc0luSO4R")
      .then(() => {
        setStatus("success");
        form.current?.reset();
        setSelected("");
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setErrorMsg(error?.text || "Failed to send message. Please try again.");
      });
  };

  return (
    <main className="relative z-10 min-h-screen pt-24 pb-16 text-[var(--cream)] sm:pt-28 sm:pb-24">
      <article className="container max-w-4xl">
        {/* ---------- Hero ---------- */}
        <div className="mx-auto max-w-3xl">
          <Link
            href="/guides"
            className="text-sm uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-[var(--gold)]"
          >
            Guides
          </Link>
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">Guide</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            Where does your money actually stand?
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/75">
            Seven questions. Two minutes. No jargon, no products, no pitch — just an honest look at
            the seven areas that decide whether your financial position holds up under pressure.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary justify-center"
            >
              Chat on WhatsApp
            </a>
            <a href="#check" className="btn btn-ghost justify-center">
              Take the check ↓
            </a>
          </div>
        </div>

        {/* ---------- Questions ---------- */}
        <div id="check" className="mx-auto mt-14 max-w-3xl space-y-5 scroll-mt-24">
          {questions.map((q) => (
            <div key={q.number} className="surface p-6 sm:p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">{q.number}</p>
              <h2 className="mt-3 font-serif text-2xl text-white">{q.title}</h2>
              <p className="mt-3 text-base leading-7 text-white/70">{q.body}</p>
              <p className="mt-4 border-l-2 border-[var(--gold)] pl-4 text-sm leading-6 text-white/80">
                <span className="font-semibold text-[var(--gold)]">Why it matters — </span>
                {q.why}
              </p>
            </div>
          ))}

          {/* ---------- Cost of waiting callout ---------- */}
          <div className="surface p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">
              The cost of waiting
            </p>
            <div className="mt-5 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="font-serif text-3xl text-white sm:text-4xl">~15%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/55">Start at 25</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-white sm:text-4xl">~25%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/55">Start at 35</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-white sm:text-4xl">~47%</p>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/55">Start at 45</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-white/60">
              Illustrative figures based on assumed contribution escalation and investment return,
              excluding fees and taxes. Not a guarantee — your own position depends on your fund,
              your term, and your assumptions. For every ten years a retirement plan is delayed, the
              contribution rate needed to reach the same target roughly doubles.
            </p>
          </div>
        </div>

        {/* ---------- Score bands ---------- */}
        <div className="mx-auto mt-14 max-w-3xl">
          <h2 className="font-serif text-3xl text-[var(--gold)]">Your score</h2>
          <div className="mt-6 space-y-4">
            {scoreBands.map((band) => (
              <div key={band.range} className="surface flex gap-5 p-5 sm:p-6">
                <p className="w-16 shrink-0 font-serif text-xl text-[var(--gold)]">{band.range}</p>
                <div>
                  <h3 className="text-base font-semibold text-white">{band.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/70">{band.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- Lead capture ---------- */}
        <div className="mx-auto mt-14 max-w-2xl surface p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-[var(--gold)]">
            If a question made you pause, that pause is the useful part
          </h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            A first conversation is a structured needs analysis — no cost, no obligation, and no
            product discussion until the analysis is done.
          </p>

          <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm">
                Phone Number
              </label>
              <input
                id="phone"
                type="tel"
                name="phone"
                className="w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="stood-out" className="mb-2 block text-sm">
                Which question stood out? (optional)
              </label>
              <select
                id="stood-out"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
              >
                <option value="">Prefer not to say</option>
                {questions.map((q) => (
                  <option key={q.number} value={q.title}>
                    {q.number} — {q.title}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                defaultValue={defaultMessage}
                className="w-full resize-y rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
              />
            </div>

            {/* Hidden field so the notification email carries context even if the visible message is left as-is */}
            <input type="hidden" name="source" value="7-Question Financial Health Check" />
            {selected && <input type="hidden" name="stood_out_on" value={selected} />}

            <button
              type="submit"
              disabled={status === "sending"}
              className="btn btn-primary w-full"
            >
              {status === "sending" ? "Sending..." : "Book a strategy session"}
            </button>

            {status === "success" && (
              <p className="text-center text-green-400">
                Message sent — I&apos;ll be in touch shortly.
              </p>
            )}
            {status === "error" && <p className="text-center text-red-400">{errorMsg}</p>}
          </form>

          <div className="mt-6 border-t border-[var(--gold)]/20 pt-6 text-center">
            <p className="text-sm text-white/60">Prefer to chat first?</p>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-3 w-full justify-center"
            >
              Chat on WhatsApp — 077 386 6299
            </a>
          </div>
        </div>

        {/* ---------- Compliance note ---------- */}
        <p className="mx-auto mt-10 max-w-3xl text-xs leading-6 text-white/45">
          This guide is general information only. It does not constitute financial advice, a
          recommendation, or a solicitation, and does not take your personal circumstances,
          objectives, or needs into account. Personalised advice is provided only after a full
          financial needs analysis. All figures referenced are illustrative and based on stated
          assumptions; they are not guarantees. Investments carry risk, including possible loss of
          capital.
        </p>
      </article>
    </main>
  );
}
