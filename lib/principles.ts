// The three principles behind "a plan you'll actually keep".
// Single source of truth for guide/insight tags, the Guides page rows,
// the "Part of" line under each piece, and the Start Here path.

import { ARTICLES, articlePath, type Principle } from "@/content/articles";

export type { Principle };

export const PRINCIPLES: { name: Principle; id: string; line: string; short: string }[] = [
  { name: "Courage", id: "courage", line: "The hardest part is the first step.", short: "starting the plan" },
  { name: "Firmness", id: "firmness", line: "A plan only works if it holds when it's tested.", short: "holding the plan when it's tested" },
  { name: "Patience", id: "patience", line: "Time does the heavy lifting, for people who stay.", short: "letting the plan work" },
];

export type Piece = {
  title: string;
  href: string;
  blurb: string;
  principle: Principle;
};

// Guide cards and insight tags are generated from content/articles.ts.
export const GUIDES: Piece[] = ARTICLES.filter((a) => a.type === "guide" && a.principle && a.card).map((a) => ({
  title: a.card!.title ?? a.title,
  href: articlePath(a),
  blurb: a.card!.blurb,
  principle: a.principle!,
}));

export const INSIGHT_PRINCIPLES: Record<string, Principle> = Object.fromEntries(
  ARTICLES.filter((a) => a.type === "insight" && a.principle).map((a) => [articlePath(a), a.principle!]),
);

export const START_HERE: string[] = [
  "/guides/financial-health-check",
  "/guides/building-wealth-on-a-starter-salary",
  "/guides/the-cost-of-waiting",
  "/guides/plan-on-paper",
  "/guides/automate-the-discipline",
];

export function principleForPath(path: string): Principle | null {
  const clean = path.replace(/\/$/, "");
  const guide = GUIDES.find((g) => g.href === clean);
  if (guide) return guide.principle;
  return INSIGHT_PRINCIPLES[clean] ?? null;
}

export function principleMeta(name: Principle) {
  return PRINCIPLES.find((p) => p.name === name)!;
}
