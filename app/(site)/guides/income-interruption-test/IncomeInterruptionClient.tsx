"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { track } from "@vercel/analytics";

const WHATSAPP_NUMBER = "27773866299";

/**
 * All copy lives here so wording can be edited without touching the
 * calculator logic below.
 */
export const COPY = {
  heroIntro: [
    "Your salary stopping is not a remote event. It is a specific date on a calendar — and your debit orders do not know it happened.",
    "Bond or rent, vehicle finance, medical aid, school fees, subscriptions — all of it still runs on the 1st, whether you worked that month or not.",
    "The question worth answering is not whether you would cope. It is how many months you actually have.",
  ],
  inputs: {
    income: {
      label: "Monthly take-home income",
    },
    commitments: {
      label: "Fixed monthly commitments",
      helper:
        "Bond or rent, vehicle, medical aid, insurance, debt repayments, school fees, subscriptions. Everything that runs whether you work or not.",
    },
    savings: {
      label: "Savings you could actually reach within 30 days",
      helper: "Not your retirement annuity. Not your pension. Money you can touch.",
    },
    existingBenefit: {
      label: "Existing income protection benefit, per month",
      helper: "If you have no income protection, leave this at zero.",
    },
    employerCover: {
      label: "Does your employer cover pay you if you cannot work?",
    },
  },
  resultHeadline: (runOutDate: string) =>
    `Your income stops today. Your commitments run until ${runOutDate}.`,
  noCommitmentsHeadline: "You have no fixed monthly commitments entered — there is nothing to run out.",
  statLabels: {
    runway: "Runway",
    shortfall: "Monthly shortfall once savings run out",
    protected: "Currently protected",
  },
  tiers: {
    exposed: {
      title: "Exposed.",
      body: "There is no buffer between an interruption and your credit record.",
    },
    thin: {
      title: "Thin.",
      body: "Enough to absorb a delay. Not enough to absorb an illness.",
    },
    buffered: {
      title: "Buffered.",
      body: "You would survive a shock. You would spend everything surviving it.",
    },
    coveredOnLiquidity: {
      title: "Covered on liquidity.",
      body: "The next question is whether your cover replaces income, or only settles debt.",
    },
  },
  dontKnowNote:
    "Most people who say they do not know are not covered for the scenario they are imagining. That is the single cheapest thing on this page to go and check.",
  ctaButtonLabel: "Send me this result on WhatsApp",
  ctaSubtext: "Opens WhatsApp with the message already written. No form, no call-back list.",
  secondaryLink: "Prefer email? Use the contact page instead.",
  privacyNote:
    "These numbers stay in your browser. Nothing is sent anywhere until you choose to send it.",
  closingEditorial: [
    "A thin runway is fixed in four layers, not one.",
    "Liquidity comes first — money you can reach within days, sized to your actual fixed commitments, not your lifestyle. It buys time for everything else to work.",
    "Income protection comes second. Not cover that pays out once, on death — cover that keeps paying, every month, for as long as you genuinely cannot work.",
    "Structure comes third. The order in which your accounts get drawn down, and which commitments get protected first, matters as much as how much cover you hold.",
    "Review comes fourth, and it is the layer people skip. Income, commitments, and dependants all change. A structure built for who you were five years ago is not automatically right for who you are now.",
    "None of this requires a product decision today. It requires an honest look at where the gaps actually are.",
  ],
  complianceBlock:
    "Gert Fourie — Financial Adviser, Liberty Group Limited (FSP 2409), Pretoria. Website: www.fortitudostudios.site Contact: www.fortitudostudios.site/contact This tool provides general information, not personal financial advice. The result is an arithmetic estimate based only on what you entered. Any recommendation must follow a full analysis of your own circumstances, needs and objectives.",
} as const;

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

type EmployerCover = "Yes" | "No" | "I do not know";
type Tier = "exposed" | "thin" | "buffered" | "coveredOnLiquidity";

function formatZAR(value: number): string {
  return new Intl.NumberFormat("en-ZA").format(Math.round(value));
}

function parseDigits(raw: string): number | undefined {
  const digits = raw.replace(/[^\d]/g, "");
  if (!digits) return undefined;
  return parseInt(digits, 10);
}

function formatRunOutDate(runwayMonths: number): string {
  const days = runwayMonths * 30.4368;
  const result = new Date();
  result.setDate(result.getDate() + Math.round(days));
  return `${result.getDate()} ${MONTH_NAMES[result.getMonth()]} ${result.getFullYear()}`;
}

function tierFor(runwayMonths: number): Tier {
  if (runwayMonths < 1) return "exposed";
  if (runwayMonths < 3) return "thin";
  if (runwayMonths < 6) return "buffered";
  return "coveredOnLiquidity";
}

interface MoneyFieldProps {
  id: string;
  label: string;
  helper?: string;
  value: number | undefined;
  onChange: (value: number | undefined) => void;
}

function MoneyField({ id, label, helper, value, onChange }: MoneyFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm">
        {label}
      </label>
      <div className="flex items-center rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 focus-within:border-[var(--gold)]">
        <span className="text-white/50">R</span>
        <input
          id={id}
          type="text"
          inputMode="numeric"
          value={value === undefined ? "" : formatZAR(value)}
          onChange={(e) => onChange(parseDigits(e.target.value))}
          className="w-full bg-transparent py-3 pl-2 text-base focus:outline-none"
        />
      </div>
      {helper && <p className="mt-2 text-xs leading-5 text-white/50">{helper}</p>}
    </div>
  );
}

export default function IncomeInterruptionClient() {
  const [income, setIncome] = useState<number | undefined>(undefined);
  const [commitments, setCommitments] = useState<number | undefined>(undefined);
  const [savings, setSavings] = useState<number | undefined>(undefined);
  const [existingBenefit, setExistingBenefit] = useState<number | undefined>(0);
  const [employerCover, setEmployerCover] = useState<EmployerCover>("I do not know");

  const hasStarted = useRef(false);
  const resultShownFired = useRef(false);

  const registerStart = () => {
    if (!hasStarted.current) {
      hasStarted.current = true;
      track("iit_started");
    }
  };

  const resultVisible = commitments !== undefined && savings !== undefined;

  const benefit = existingBenefit ?? 0;
  const runwayMonths =
    resultVisible && commitments! > 0 ? savings! / commitments! : Infinity;
  const runwayRounded = Number.isFinite(runwayMonths)
    ? Math.round(runwayMonths * 10) / 10
    : Infinity;
  const monthlyShortfall = resultVisible ? Math.max(0, commitments! - benefit) : 0;
  const tier: Tier = Number.isFinite(runwayRounded)
    ? tierFor(runwayRounded)
    : "coveredOnLiquidity";
  const tierCopy = COPY.tiers[tier];

  const runwayDisplay =
    commitments === 0
      ? "No fixed commitments"
      : runwayRounded < 0.1
      ? "less than a week"
      : `${runwayRounded.toFixed(1)} months`;

  useEffect(() => {
    if (resultVisible && !resultShownFired.current) {
      resultShownFired.current = true;
      track("iit_result_shown", { tier });
    }
  }, [resultVisible, tier]);

  const runwayForMessage = Number.isFinite(runwayRounded)
    ? `${runwayRounded.toFixed(1)} months`
    : "no fixed commitments to measure against";

  const whatsappMessage = `Hi Gert. I ran the Income Interruption Test on your site.\nRunway: ${runwayForMessage}. Monthly shortfall: R${formatZAR(
    monthlyShortfall
  )}.\nEmployer cover: ${employerCover}. Can you tell me what to do about it?`;

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleWhatsappClick = () => {
    track("iit_whatsapp_click", { tier, runwayBucket: tier });
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
          <p className="mt-6 text-sm uppercase tracking-[0.18em] text-[var(--gold)]">
            Interactive Guide
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">
            The Income Interruption Test
          </h1>
          <div className="mt-6 space-y-4">
            {COPY.heroIntro.map((p) => (
              <p key={p} className="text-lg leading-8 text-white/75">
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* ---------- Calculator ---------- */}
        <div id="test" className="mx-auto mt-14 max-w-2xl scroll-mt-24 surface p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">
            Ninety seconds
          </p>
          <h2 className="mt-3 font-serif text-2xl text-white">Work out your runway</h2>

          <div className="mt-8 space-y-6" onChangeCapture={registerStart}>
            <MoneyField
              id="income"
              label={COPY.inputs.income.label}
              value={income}
              onChange={setIncome}
            />
            <MoneyField
              id="commitments"
              label={COPY.inputs.commitments.label}
              helper={COPY.inputs.commitments.helper}
              value={commitments}
              onChange={setCommitments}
            />
            <MoneyField
              id="savings"
              label={COPY.inputs.savings.label}
              helper={COPY.inputs.savings.helper}
              value={savings}
              onChange={setSavings}
            />
            <MoneyField
              id="existingBenefit"
              label={COPY.inputs.existingBenefit.label}
              helper={COPY.inputs.existingBenefit.helper}
              value={existingBenefit}
              onChange={setExistingBenefit}
            />

            <div>
              <label htmlFor="employerCover" className="mb-2 block text-sm">
                {COPY.inputs.employerCover.label}
              </label>
              <select
                id="employerCover"
                value={employerCover}
                onChange={(e) => setEmployerCover(e.target.value as EmployerCover)}
                className="w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 focus:border-[var(--gold)] focus:outline-none"
              >
                <option value="I do not know">I do not know</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <p className="mt-6 text-xs leading-5 text-white/45">{COPY.privacyNote}</p>
        </div>

        {/* ---------- Result panel ---------- */}
        {resultVisible && (
          <div className="mx-auto mt-8 max-w-2xl surface p-6 sm:p-8">
            <h2 className="font-serif text-2xl leading-tight text-white sm:text-3xl">
              {commitments === 0
                ? COPY.noCommitmentsHeadline
                : COPY.resultHeadline(formatRunOutDate(runwayRounded))}
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[var(--gold)]/20 p-4 text-center">
                <p className="font-serif text-2xl text-white">{runwayDisplay}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/55">
                  {COPY.statLabels.runway}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--gold)]/20 p-4 text-center">
                <p className="font-serif text-2xl text-white">R{formatZAR(monthlyShortfall)}</p>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/55">
                  {COPY.statLabels.shortfall}
                </p>
              </div>
              <div className="rounded-xl border border-[var(--gold)]/20 p-4 text-center">
                <p className="font-serif text-2xl text-white">
                  R{formatZAR(benefit)} of R{formatZAR(income ?? 0)}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.1em] text-white/55">
                  {COPY.statLabels.protected}
                </p>
              </div>
            </div>

            <div className="mt-6 border-l-2 border-[var(--gold)] pl-4">
              <p className="text-lg font-semibold text-[var(--gold)]">{tierCopy.title}</p>
              <p className="mt-1 text-base leading-7 text-white/75">{tierCopy.body}</p>
            </div>

            {employerCover === "I do not know" && (
              <p className="mt-4 text-sm leading-6 text-[var(--gold)]">{COPY.dontKnowNote}</p>
            )}

            {/* ---------- WhatsApp CTA ---------- */}
            <div className="mt-8 text-center">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsappClick}
                className="btn btn-primary w-full justify-center sm:w-auto sm:px-10"
              >
                {COPY.ctaButtonLabel}
              </a>
              <p className="mt-3 text-xs text-white/50">{COPY.ctaSubtext}</p>
              <p className="mt-4">
                <Link
                  href="/contact"
                  className="text-sm text-white/50 underline underline-offset-2 transition-colors hover:text-[var(--gold)]"
                >
                  {COPY.secondaryLink}
                </Link>
              </p>
            </div>
          </div>
        )}

        {/* ---------- Editorial close ---------- */}
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          <h2 className="font-serif text-3xl text-[var(--gold)]">Fixing a thin runway</h2>
          {COPY.closingEditorial.map((p) => (
            <p key={p} className="text-lg leading-8 text-white/75">
              {p}
            </p>
          ))}
        </div>

        {/* ---------- Compliance ---------- */}
        <p className="mx-auto mt-10 max-w-3xl text-xs leading-6 text-white/45">
          {COPY.complianceBlock}
        </p>
      </article>
    </main>
  );
}
