'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

// January payday the countdown runs to, and the last day the band shows.
// Both are calendar dates in Africa/Johannesburg.
export const JANUARY_PAYDAY = '2027-01-25';
export const BAND_LAST_DAY = '2027-01-31';

const TZ = 'Africa/Johannesburg';

/** Today's date in Johannesburg as "YYYY-MM-DD". */
function sastToday(now = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now);
}

function daysBetween(fromISO: string, toISO: string): number {
  const [fy, fm, fd] = fromISO.split('-').map(Number);
  const [ty, tm, td] = toISO.split('-').map(Number);
  return Math.round((Date.UTC(ty, tm - 1, td) - Date.UTC(fy, fm - 1, fd)) / 86_400_000);
}

export default function JanuaryBand() {
  // Nothing date-dependent renders on the server: the homepage is prerendered,
  // so the countdown is computed after mount to avoid a hydration mismatch.
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => {
    setToday(sastToday());
    const t = setInterval(() => setToday(sastToday()), 60 * 60 * 1000);
    return () => clearInterval(t);
  }, []);

  if (today && today > BAND_LAST_DAY) return null;

  const days = today ? daysBetween(today, JANUARY_PAYDAY) : null;

  return (
    <section
      aria-label="The January test"
      className="border-y border-[rgba(242,239,230,.12)] bg-[#0a231a] px-6 py-10 md:py-12"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-6 md:flex-row md:items-center md:justify-between md:gap-10 md:px-2">
        <div>
          <p className="max-w-[40ch] font-serif text-2xl font-light leading-[1.15] tracking-[-.01em] md:text-[2rem]">
            Black November is here. <i className="text-[#e6cf9c]">How much of January have you already spent?</i>
          </p>
          <Link
            href="/guides/january-already-spent"
            className="mt-4 inline-flex min-h-[44px] items-center text-sm tracking-[0.12em] text-[var(--gold)] hover:text-white"
          >
            Run the ninety-second test →
          </Link>
        </div>
        <p className="min-h-[1.25rem] shrink-0 text-[.72rem] uppercase tracking-[.18em] text-[#c8a45c] tabular-nums" aria-live="off">
          {days === null ? '' : days > 0 ? `${days} ${days === 1 ? 'DAY' : 'DAYS'} TO JANUARY PAYDAY` : 'JANUARY PAYDAY IS HERE'}
        </p>
      </div>
    </section>
  );
}
