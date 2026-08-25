'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Scene3D from './Scene3D';
import type { SceneHandle } from '@/lib/three/scenes';

const RETIRE = 65;
const RATE = 0.09;   // nominal annual growth
const ESC = 0.05;    // annual contribution escalation

const rands = (n: number) =>
  'R' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');

function model(age: number, monthly: number) {
  const years = Math.max(1, RETIRE - age);
  let fv = 0;
  let put = 0;
  let m = monthly;
  for (let y = 0; y < years; y++) {
    for (let k = 0; k < 12; k++) {
      fv = fv * (1 + RATE / 12) + m;
      put += m;
    }
    m *= 1 + ESC;
  }
  return { years, fv, put, growth: fv - put };
}

export default function PlanCalculator() {
  const [age, setAge] = useState(28);
  const [amt, setAmt] = useState(2500);
  const handleRef = useRef<SceneHandle | null>(null);

  const r = useMemo(() => model(age, amt), [age, amt]);
  const onHandle = useCallback((h: SceneHandle) => { handleRef.current = h; }, []);

  useEffect(() => {
    handleRef.current?.set?.(r.years, 0.6 + Math.min(1, r.fv / 30_000_000) * 0.8);
  }, [r]);

  return (
    <section className="border-y border-[rgba(242,239,230,.12)] bg-[#0a231a] py-14 md:py-24">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="mb-4 text-[.68rem] uppercase tracking-[.18em] text-[#c8a45c]">
            Structure, made visible
          </p>
          <h2 className="max-w-[22ch] font-serif text-3xl font-light leading-[1.08] tracking-[-.015em] md:text-[2.6rem]">
            Forty years is not an abstraction.{' '}
            <i className="text-[#e6cf9c]">It is forty decisions, stacked.</i>
          </h2>
          <p className="mt-4 max-w-[54ch] text-[#a9bcb0]">
            Move the two numbers that actually move outcomes. Every layer is one year of
            contribution; every fifth layer is a review point where the plan gets tested against
            your life.
          </p>

          <div className="mt-7 grid max-w-[26rem] gap-5">
            <Slider
              id="plan-age" label="Your age" value={age} display={String(age)}
              min={22} max={55} step={1} onChange={setAge}
            />
            <Slider
              id="plan-amt" label="Monthly contribution" value={amt} display={rands(amt)}
              min={500} max={25000} step={500} onChange={setAmt}
            />
          </div>

          <div
            className="mt-7 max-w-[26rem] border-t border-[rgba(242,239,230,.12)] pt-5"
            aria-live="polite"
          >
            <p className="text-[.66rem] uppercase tracking-[.16em] text-[#8aa094]">
              Illustrative value at 65
            </p>
            <p className="my-1 font-serif text-4xl font-light leading-none tabular-nums text-[#e6cf9c] md:text-[2.8rem]">
              {rands(r.fv)}
            </p>
            <p className="text-[.82rem] text-[#8aa094]">
              {r.years} years · {rands(r.put)} contributed · {rands(r.growth)} from growth
            </p>
          </div>

          <p className="mt-4 max-w-[36rem] text-[.75rem] leading-relaxed text-[#7e9186]">
            Illustration only — not advice, and not a projection of returns. Assumes 9% nominal
            annual growth with contributions escalating 5% a year, before fees and tax.
          </p>
        </div>

        <Scene3D
          variant="plan"
          onHandle={onHandle}
          className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-md lg:aspect-square"
        />
      </div>
    </section>
  );
}

function Slider({
  id, label, value, display, min, max, step, onChange,
}: {
  id: string; label: string; value: number; display: string;
  min: number; max: number; step: number; onChange: (n: number) => void;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="flex items-baseline justify-between gap-4 text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]"
      >
        {label}
        <output className="font-serif text-lg tabular-nums text-[#e6cf9c]">{display}</output>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(+e.target.value)}
        className="mt-3 h-[2px] w-full cursor-pointer appearance-none rounded bg-[rgba(242,239,230,.18)] accent-[#c8a45c]"
      />
    </div>
  );
}
