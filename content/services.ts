// Services shown on /services. The JSON-LD offer catalog in app/layout.tsx is
// generated from this same list, so the markup always matches the page.

export const SERVICES = [
  {
    id: "financial-planning",
    title: "Financial Planning",
    problem: "Earning well without a written plan leaves you guessing.",
    keeping: "One plan you can follow, instead of decisions made one at a time.",
    description:
      "Retirement planning, cash-flow structure, and tax-aware decisions organised into one plan you can follow.",
    benefits: ["A clear picture of where you stand", "Priorities instead of scattered products", "Decisions that survive market noise"],
  },
  {
    id: "investment-strategy",
    title: "Investment Strategy",
    problem: "Most people invest. Fewer people know why the pieces belong together.",
    keeping: "Built around your time horizon, so a bad year doesn’t push you out.",
    description:
      "Portfolio construction and risk management designed around time horizon and behaviour, not headlines.",
    benefits: ["A defined risk range", "Less reactive switching", "Growth inside a protective framework"],
  },
  {
    id: "protection",
    title: "Insurance and Protection",
    problem: "Unprotected income is the fastest way a good plan collapses.",
    keeping: "So one bad event doesn’t undo ten good years.",
    description:
      "Life, disability, and health cover reviewed against actual needs rather than leftover policies.",
    benefits: ["Family protection that matches reality", "Fewer gaps between policies", "Peace of mind before growth conversations"],
  },
  {
    id: "retirement",
    title: "Retirement Clarity",
    problem: "“Will I have enough?” is the question everyone eventually asks.",
    keeping: "Milestones you can check, so retirement runs on a plan, not on hope.",
    description:
      "Turn retirement from a vague hope into an income plan with milestones and contribution structure.",
    benefits: ["Visible progress markers", "Contribution discipline", "A plan that can be reviewed, not guessed"],
  },
  {
    id: "estate",
    title: "Estate and Legacy",
    problem: "Without structure, families inherit confusion as well as assets.",
    keeping: "So the plan you kept outlasts you.",
    description:
      "Estate planning that keeps beneficiaries, cover, and ownership aligned.",
    benefits: ["Less ambiguity for the people you love", "Ownership that matches intent", "Decisions recorded while they are calm"],
  },
  {
    id: "business",
    title: "Business and Wealth Structuring",
    problem: "Business owners often keep personal and business wealth tangled.",
    keeping: "So the business and the family plan stop pulling against each other.",
    description:
      "Practical structuring so the business, family, and long-term wealth do not compete with each other.",
    benefits: ["Cleaner separation of risks", "Tax-aware organisation", "A system that can scale without chaos"],
  },
] as const;
