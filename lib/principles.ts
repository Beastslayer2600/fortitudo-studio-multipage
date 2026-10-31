// The three principles behind "a plan you'll actually keep".
// Single source of truth for guide/insight tags, the Guides page rows,
// the "Part of" line under each piece, and the Start Here path.

export type Principle = "Courage" | "Firmness" | "Patience";

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

export const GUIDES: Piece[] = [
  // Courage
  {
    title: "The 7-Question Financial Health Check",
    href: "/guides/financial-health-check",
    blurb: "Seven questions, two minutes. Know where you stand before you change anything.",
    principle: "Courage",
  },
  {
    title: "Building Wealth on a Starter Salary",
    href: "/guides/building-wealth-on-a-starter-salary",
    blurb: "Reserves, cover and investing, in the right order, for your first years of earning.",
    principle: "Courage",
  },
  {
    title: "Why Saving Feels Painful",
    href: "/guides/why-saving-feels-painful",
    blurb: "The psychology behind spending impulses, and why starting feels harder than it should.",
    principle: "Courage",
  },
  {
    title: "Time Is the One Input You Can't Buy Back",
    href: "/guides/the-cost-of-waiting",
    blurb: "You can earn more money later. You can't earn more years.",
    principle: "Courage",
  },
  {
    title: "Define Your Purpose",
    href: "/guides/define-your-purpose",
    blurb: "Vague hopes rarely survive a setback. A definite purpose does.",
    principle: "Courage",
  },
  {
    title: "Assets vs Liabilities",
    href: "/guides/assets-vs-liabilities",
    blurb: "What builds wealth, what drains it, and how to tell them apart.",
    principle: "Courage",
  },
  // Firmness
  {
    title: "A Plan on Paper Beats a Good Intention",
    href: "/guides/plan-on-paper",
    blurb: "Why a written plan survives a bad month when a good intention doesn't.",
    principle: "Firmness",
  },
  {
    title: "Automate the Discipline You Don't Have",
    href: "/guides/automate-the-discipline",
    blurb: "Make the right choice the default, so willpower isn't needed.",
    principle: "Firmness",
  },
  {
    title: "Review Beats Avoidance",
    href: "/guides/review-beats-avoidance",
    blurb: "Looking at your money regularly is how a plan stays alive.",
    principle: "Firmness",
  },
  {
    title: "Loss Aversion Runs the Show Unless You Notice It",
    href: "/guides/loss-aversion",
    blurb: "Why losses feel heavier than gains, and how that breaks plans in a crash.",
    principle: "Firmness",
  },
  {
    title: "Your Environment Is Doing More Than You Think",
    href: "/guides/your-environment-shapes-you",
    blurb: "Shape your surroundings so the plan survives your habits.",
    principle: "Firmness",
  },
  // Patience
  {
    title: "Delayed Gratification Is Trained, Not Inherited",
    href: "/guides/delayed-gratification",
    blurb: "The skill underneath patience, and how to build it.",
    principle: "Patience",
  },
  {
    title: "Financial Education Compounds Too",
    href: "/guides/financial-education-compounds",
    blurb: "Understanding grows the way money does: slowly, then quickly.",
    principle: "Patience",
  },
];

export const INSIGHT_PRINCIPLES: Record<string, Principle> = {
  "/insights/betting-twice-on-ai": "Firmness",
  "/insights/sequence-of-returns-risk": "Firmness",
  "/insights/why-diversification-isnt-just-about-asset-classes": "Firmness",
  "/insights/two-pot-retirement-system": "Patience",
};

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
