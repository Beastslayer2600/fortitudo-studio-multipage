"use client";

import { useId, useMemo, useState } from "react";
import { motion } from "framer-motion";

const rands = (value: number) =>
  "R " + Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const growthOptions = [0, 1, 2, 3] as const;

function futureEarnings(salary: number, years: number, growth: number) {
  let total = 0;
  for (let t = 0; t < years; t++) {
    total += salary * Math.pow(1 + growth, t);
  }
  return total;
}

export default function EarningPowerCalculator() {
  const [salary, setSalary] = useState(450000);
  const [years, setYears] = useState(35);
  const [growth, setGrowth] = useState(1);
  const [savings, setSavings] = useState(150000);

  const uid = useId();
  const salaryId = `${uid}-salary`;
  const yearsId = `${uid}-years`;
  const growthId = `${uid}-growth`;
  const savingsId = `${uid}-savings`;

  const earningPower = useMemo(
    () => futureEarnings(Math.max(0, salary), years, growth / 100),
    [salary, years, growth]
  );

  const ratio = savings > 0 ? earningPower / savings : null;
  const largest = Math.max(earningPower, savings, 1);
  const earningBar = (earningPower / largest) * 100;
  const savingsBar = (savings / largest) * 100;

  const inputClass =
    "w-full rounded-xl border border-[var(--gold)]/30 bg-[#0B0D10] px-4 py-3 tabular-nums focus:border-[var(--gold)] focus:outline-none";
  const labelClass = "mb-2 block text-sm text-white/75";

  return (
    <div className="surface p-6 sm:p-8">
      <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">Calculator</p>
      <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
        What is your earning power worth?
      </h3>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor={salaryId} className={labelClass}>
            Current annual salary before tax (rand)
          </label>
          <input
            id={salaryId}
            type="number"
            inputMode="numeric"
            min={0}
            step={10000}
            value={salary}
            onChange={(event) => setSalary(Math.max(0, Number(event.target.value) || 0))}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor={savingsId} className={labelClass}>
            Current retirement savings and investments combined (rand)
          </label>
          <input
            id={savingsId}
            type="number"
            inputMode="numeric"
            min={0}
            step={10000}
            value={savings}
            onChange={(event) => setSavings(Math.max(0, Number(event.target.value) || 0))}
            className={inputClass}
          />
        </div>

        <div>
          <label
            htmlFor={yearsId}
            className="mb-2 flex items-baseline justify-between gap-4 text-sm text-white/75"
          >
            Years until retirement
            <output htmlFor={yearsId} className="font-serif text-lg tabular-nums text-[var(--gold)]">
              {years}
            </output>
          </label>
          <input
            id={yearsId}
            type="range"
            min={5}
            max={45}
            step={1}
            value={years}
            onChange={(event) => setYears(Number(event.target.value))}
            className="mt-3 h-[2px] w-full cursor-pointer appearance-none rounded bg-white/20 accent-[var(--gold)]"
          />
        </div>

        <div>
          <label htmlFor={growthId} className={labelClass}>
            Salary growth above inflation
          </label>
          <select
            id={growthId}
            value={growth}
            onChange={(event) => setGrowth(Number(event.target.value))}
            className={inputClass}
          >
            {growthOptions.map((option) => (
              <option key={option} value={option}>
                {option}%
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-6" aria-live="polite">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--gold)]">
          Your future earning power
        </p>
        <p className="mt-2 font-serif text-3xl leading-tight tabular-nums text-white sm:text-5xl">
          {rands(earningPower)}
        </p>
        {ratio !== null ? (
          <p className="mt-4 text-base leading-7 text-white/75">
            That&apos;s about {Math.round(ratio).toLocaleString("en-ZA")} times what you currently
            have invested.
          </p>
        ) : null}

        <div className="mt-8 space-y-5">
          <div>
            <div className="flex items-baseline justify-between gap-4 text-sm text-white/70">
              <span>Earning power</span>
              <span className="tabular-nums text-white/90">{rands(earningPower)}</span>
            </div>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-[var(--gold)]"
                initial={false}
                animate={{ width: `${earningBar}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-4 text-sm text-white/70">
              <span>Current investments</span>
              <span className="tabular-nums text-white/90">{rands(savings)}</span>
            </div>
            <div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-white/50"
                initial={false}
                animate={{ width: `${savingsBar}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          </div>
        </div>

        <p className="mt-8 text-base leading-7 text-white/75">
          For most young professionals, this is the biggest asset they own, and the one most exposed
          to how AI changes work.
        </p>
      </div>

      <p className="mt-6 text-xs leading-5 text-white/55">
        Illustrative only. Figures are before tax, in today&apos;s money, and assume uninterrupted
        employment. Growth rates are assumptions, not projections or guarantees.
      </p>
    </div>
  );
}
