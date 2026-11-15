// Registry of every guide and insight. The sitemap, the /guides and /insights
// indexes, page metadata and Article JSON-LD all read from here.
//
// To add a guide: add one entry below and one page folder under
// app/(site)/guides/<slug>/. lib/articles.test.mjs fails if either is missing.
//
// Dates are ISO (YYYY-MM-DD). The ones below were taken from git history
// (first commit that added the page, last commit that changed it) on
// 15 Nov 2026. Bump `updated` when you change a page's substance.

export type Principle = "Courage" | "Firmness" | "Patience";

export type Article = {
  type: "guide" | "insight";
  slug: string;
  /** Page title without the " | Gert Fourie" suffix the layout adds. */
  title: string;
  /** Meta and Open Graph description. */
  description: string;
  published: string;
  updated: string;
  principle?: Principle;
  /** Index card. Guides without a card do not appear in the principle rows. */
  card?: { title?: string; blurb: string; category?: string; featured?: boolean };
};

export const ARTICLES: Article[] = [
  // ---- Guides, in the order they appear on /guides ----
  {
    type: "guide",
    slug: "financial-health-check",
    title: "The 7-Question Financial Health Check",
    description:
      "A two-minute, scored self-assessment covering the seven areas that decide whether your financial position holds up under pressure.",
    published: "2026-08-14",
    updated: "2026-11-02",
    principle: "Courage",
    card: { blurb: "Seven questions, two minutes. Know where you stand before you change anything." },
  },
  {
    type: "guide",
    slug: "building-wealth-on-a-starter-salary",
    title: "Building Wealth on a Starter Salary",
    description:
      "A practical guide for young professionals who want to start building wealth early through structure, protection, and disciplined investing.",
    published: "2026-05-11",
    updated: "2026-05-11",
    principle: "Courage",
    card: { blurb: "Reserves, cover and investing, in the right order, for your first years of earning." },
  },
  {
    type: "guide",
    slug: "why-saving-feels-painful",
    title: "Why Saving Feels Painful",
    description:
      "The neuroscience of instant gratification vs delayed reward — and why your brain is working against your bank account.",
    published: "2026-05-12",
    updated: "2026-07-13",
    principle: "Courage",
    card: { blurb: "The psychology behind spending impulses, and why starting feels harder than it should." },
  },
  {
    type: "guide",
    slug: "the-cost-of-waiting",
    title: "Time Is the One Input You Can't Buy Back",
    description:
      "Compound growth has one requirement no amount of skill can substitute for: time. Rule 5 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Courage",
    card: { blurb: "You can earn more money later. You can't earn more years." },
  },
  {
    type: "guide",
    slug: "define-your-purpose",
    title: "Define a Specific Purpose for Your Money",
    description:
      "Why vague financial goals rarely survive a setback — and how a number and a date change the way you make money decisions. Rule 1 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Courage",
    card: { title: "Define Your Purpose", blurb: "Vague hopes rarely survive a setback. A definite purpose does." },
  },
  {
    type: "guide",
    slug: "assets-vs-liabilities",
    title: "Know Assets From Liabilities",
    description:
      "An asset puts money in your pocket. A liability takes it out — regardless of how either one looks on the surface. Rule 2 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Courage",
    card: { title: "Assets vs Liabilities", blurb: "What builds wealth, what drains it, and how to tell them apart." },
  },
  {
    type: "guide",
    slug: "plan-on-paper",
    title: "A Plan on Paper Beats a Good Intention",
    description:
      "Organised plans consistently outperform vague ambition, because they turn intention into a sequence of decisions you can actually execute. Rule 10 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Firmness",
    card: { blurb: "Why a written plan survives a bad month when a good intention doesn't." },
  },
  {
    type: "guide",
    slug: "automate-the-discipline",
    title: "Automate the Discipline You Don't Have",
    description:
      "Discipline that depends on willpower fails. Discipline that's automated succeeds. Rule 3 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Firmness",
    card: { blurb: "Make the right choice the default, so willpower isn't needed." },
  },
  {
    type: "guide",
    slug: "review-beats-avoidance",
    title: "Review Beats Avoidance",
    description:
      "Most people who feel behind financially haven't looked closely enough to know whether that feeling is even accurate. Rule 9 of 10.",
    published: "2026-07-13",
    updated: "2026-10-31",
    principle: "Firmness",
    card: { blurb: "Looking at your money regularly is how a plan stays alive." },
  },
  {
    type: "guide",
    slug: "loss-aversion",
    title: "Loss Aversion Runs the Show Unless You Notice It",
    description:
      "We feel losses roughly twice as intensely as equivalent gains. Left unmanaged, that bias drives most bad financial decisions. Rule 4 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Firmness",
    card: { blurb: "Why losses feel heavier than gains, and how that breaks plans in a crash." },
  },
  {
    type: "guide",
    slug: "your-environment-shapes-you",
    title: "Your Environment Is Doing More Than You Think",
    description:
      "The people around you measurably shift your own financial behaviour, for better or worse. Rule 8 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Firmness",
    card: { blurb: "Shape your surroundings so the plan survives your habits." },
  },
  {
    type: "guide",
    slug: "delayed-gratification",
    title: "Delayed Gratification Is Trained, Not Inherited",
    description:
      "Good financial habits feel harder than bad ones because the brain is wired for immediate reward. Here's how to train the opposite. Rule 6 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Patience",
    card: { blurb: "The skill underneath patience, and how to build it." },
  },
  {
    type: "guide",
    slug: "financial-education-compounds",
    title: "Financial Education Compounds Too",
    description:
      "Financial intelligence compounds over time, just like capital does. Twenty minutes a week adds up. Rule 7 of 10.",
    published: "2026-07-13",
    updated: "2026-07-13",
    principle: "Patience",
    card: { blurb: "Understanding grows the way money does: slowly, then quickly." },
  },
  // Series hub and interactive tools (shown in their own sections on /guides)
  {
    type: "guide",
    slug: "rules-of-a-wealthy-mindset",
    title: "Rules & Foundations of a Wealthy Mindset",
    description:
      "Ten research-backed principles — from classic wealth literature to modern behavioural finance — for building a mindset that actually builds wealth. Read the full series, one rule per guide.",
    published: "2026-07-13",
    updated: "2026-11-09",
  },
  {
    type: "guide",
    slug: "january-already-spent",
    title: "How Much of January Have You Already Spent?",
    description:
      "Pay later still gets paid. Add up your instalments and see how much of your next six paydays is already gone — in ninety seconds, in your browser.",
    published: "2026-11-09",
    updated: "2026-11-11",
  },
  {
    type: "guide",
    slug: "what-are-you-worth",
    title: "What Are You Worth?",
    description: "You know what your car is worth. See what you are, in sixty seconds.",
    published: "2026-11-11",
    updated: "2026-11-11",
  },

  // ---- Insights, in the order they appear on /insights ----
  {
    type: "insight",
    slug: "betting-twice-on-ai",
    title: "You're Betting Twice on AI",
    description:
      "Your career and your retirement fund were supposed to balance each other out. In 2026, they're quietly riding on the same trade.",
    published: "2026-10-27",
    updated: "2026-10-27",
    principle: "Firmness",
    card: {
      category: "Portfolio Construction",
      featured: true,
      blurb:
        "Your career and your retirement fund were supposed to balance each other out. In 2026, they're quietly riding on the same trade.",
    },
  },
  {
    type: "insight",
    slug: "sequence-of-returns-risk",
    title: "Sequence-of-Returns Risk Explained",
    description:
      "Why the order of investment returns - not just the average - can determine whether a retirement income plan survives. A structured look at sequence-of-returns risk and how to plan around it.",
    published: "2026-08-04",
    updated: "2026-08-04",
    principle: "Firmness",
    card: {
      category: "Risk Management",
      title: "Sequence-of-Returns Risk: The Retirement Danger Few People Plan For",
      blurb:
        "Why the order investment returns arrive in - not just the average - can determine whether a retirement income plan survives.",
    },
  },
  {
    type: "insight",
    slug: "two-pot-retirement-system",
    title: "South Africa's Two-Pot Retirement System",
    description:
      "What the two-pot retirement reform actually changes for your contributions, access to funds, and long-term retirement planning - explained plainly.",
    published: "2026-08-04",
    updated: "2026-08-04",
    principle: "Patience",
    card: {
      category: "Legislative & Tax Developments",
      title: "South Africa's Two-Pot Retirement System: What It Actually Changes",
      blurb:
        "What the two-pot retirement reform changes for your contributions, access to funds, and long-term retirement planning - explained plainly.",
    },
  },
  {
    type: "insight",
    slug: "why-diversification-isnt-just-about-asset-classes",
    title: "Why Diversification Isn't Just About Asset Classes",
    description:
      "Real diversification goes deeper than splitting money between shares, bonds, and cash. A look at the hidden correlations that undermine portfolios that look diversified on paper.",
    published: "2026-08-04",
    updated: "2026-08-04",
    principle: "Firmness",
    card: {
      category: "Portfolio Construction",
      blurb:
        "Real diversification goes deeper than splitting money between shares, bonds, and cash. The hidden correlations that undermine portfolios that look diversified on paper.",
    },
  },
];

export function articlePath(a: Pick<Article, "type" | "slug">): string {
  return `/${a.type === "guide" ? "guides" : "insights"}/${a.slug}`;
}

export function getArticle(path: string): Article {
  const found = ARTICLES.find((a) => articlePath(a) === path);
  if (!found) throw new Error(`No registry entry for ${path} in content/articles.ts`);
  return found;
}
