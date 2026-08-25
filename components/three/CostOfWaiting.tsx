'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Scene3D from './Scene3D';
import type { SceneHandle } from '@/lib/three/scenes';

const START = 500_000;
const INFL = 0.05;   // inflation
const GROW = 0.09;   // nominal growth
const CAP = 1_800_000;

const rands = (n: number) =>
  'R' + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0');

/**
 * Both figures are deliberately expressed in today's money. Showing an
 * eroding cash balance against a *nominal* growth figure mixes real and
 * nominal terms and overstates the gap — which is both misleading and
 * exactly the sort of thing a compliance review will stop.
 */
export default function CostOfWaiting() {
  const [years, setYears] = useState(30);
  const handleRef = useRef<SceneHandle | null>(null);

  const cash = START / Math.pow(1 + INFL, years);
  const grown = START * Math.pow((1 + GROW) / (1 + INFL), years);

  const onHandle = useCallback((h: SceneHandle) => { handleRef.current = h; }, []);

  useEffect(() => {
    handleRef.current?.set?.(
      Math.max(0.06, cash / START),
      Math.min(1, grown / CAP),
    );
  }, [cash, grown]);

  return (
    <section className="py-14 md:py-24">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-14">
        <Scene3D
          variant="compare"
          onHandle={onHandle}
          className="relative order-first aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-md lg:aspect-square"
        />

        <div>
          <p className="mb-4 text-[.68rem] uppercase tracking-[.18em] text-[#c8a45c]">
            The cost of waiting
          </p>
          <h2 className="max-w-[22ch] font-serif text-3xl font-light leading-[1.08] tracking-[-.015em] md:text-[2.6rem]">
            Doing nothing <em className="not-italic text-[#e6cf9c]"><i>is also a decision.</i></em>
          </h2>
          <p className="mt-4 max-w-[54ch] text-[#a9bcb0]">
            Cash feels safe because its number never falls. But the number is not the value. Over
            thirty years, the quiet loss of purchasing power does more damage to most people&apos;s
            retirement than any market crash they were afraid of.
          </p>

          <div className="mt-7 grid max-w-[28rem] gap-4" aria-live="polite">
            <Row
              dot="#7d8f85"
              title="R500 000 left in cash"
              note="What it still buys, in today's money"
              value={rands(cash)}
            />
            <Row
              dot="#c8a45c"
              title="R500 000 structured"
              note="Also in today's money, after inflation"
              value={rands(grown)}
            />
          </div>

          <div className="mt-7 max-w-[26rem]">
            <label
              htmlFor="cow-years"
              className="flex items-baseline justify-between gap-4 text-[.72rem] uppercase tracking-[.1em] text-[#8aa094]"
            >
              Years
              <output className="font-serif text-lg tabular-nums text-[#e6cf9c]">{years}</output>
            </label>
            <input
              id="cow-years"
              type="range"
              min={0}
              max={30}
              step={1}
              value={years}
              onChange={(e) => setYears(+e.target.value)}
              className="mt-3 h-[2px] w-full cursor-pointer appearance-none rounded bg-[rgba(242,239,230,.18)] accent-[#c8a45c]"
            />
          </div>

          <p className="mt-4 max-w-[36rem] text-[.75rem] leading-relaxed text-[#7e9186]">
            Illustration only, not advice or a forecast. Both figures are expressed in today&apos;s
            money, so they are directly comparable: cash at 5% inflation, and growth at 9% nominal
            less the same 5% inflation. Before fees and tax, and assuming constant rates — which
            real markets do not provide.
          </p>
        </div>
      </div>
    </section>
  );
}

function Row({ dot, title, note, value }: { dot: string; title: string; note: string; value: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] items-baseline gap-3 border-b border-[rgba(242,239,230,.12)] pb-3">
      <span className="h-[9px] w-[9px] self-center rounded-[2px]" style={{ background: dot }} />
      <span className="text-[.92rem]">
        {title}
        <span className="block text-[.84rem] text-[#8aa094]">{note}</span>
      </span>
      <b className="font-serif text-xl font-light tabular-nums text-[#f2efe6]">{value}</b>
    </div>
  );
}
