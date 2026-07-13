"use client"

import RuleGuideLayout from "../../components/RuleGuideLayout"

export default function AutomateDisciplineGuideClient() {
  return (
    <RuleGuideLayout
      ruleNumber={3}
      totalRules={10}
      titleLine1="Automate the Discipline"
      titleLine2="You Don't Have"
      subtitle="Discipline that depends on willpower fails. Discipline that's automated doesn't need to."
      intro={[
        "Nobody saves consistently through sheer willpower forever. Willpower is a finite resource that gets spent on a hundred other decisions before money even enters the picture. The people who save consistently have usually just removed the decision entirely.",
      ]}
      sections={[
        {
          number: "01",
          title: "Why Willpower Was Never Going to Be Enough",
          paragraphs: [
            "Every month, saving competes against dozens of small, tempting decisions — and it competes at the worst possible moment, right after money has landed in an account and feels most spendable.",
            "Discipline that depends on making the right choice every single time will eventually lose, not because you lack character, but because that's simply how decision fatigue works. The fix isn't more willpower. It's fewer decisions.",
          ],
          practice:
            "Set up an automatic transfer to savings or investments for payday, before any other spending happens.",
        },
        {
          number: "02",
          title: "What Automation Actually Removes",
          paragraphs: [
            "When money moves before you see it, saving stops being a monthly negotiation with yourself. There's no moment where you have to decide, again, to do the harder thing. The decision was made once, in a calm moment, and it now executes itself every month regardless of how you feel.",
            "This is the same principle behind why gym memberships with automatic debit orders see better attendance than pay-per-visit arrangements — removing daily friction changes behaviour more reliably than motivation does.",
          ],
          quote:
            "Millionaires frequently show a “saver identity” — a learned habit of choosing long-term goals over short-term consumption. It's trained, not innate.",
          practice:
            "Time the transfer for the day your salary lands, not a few days later. The gap is where spending happens.",
        },
        {
          number: "03",
          title: "Building the System, Not the Streak",
          paragraphs: [
            "Automation turns a fragile daily streak into a durable system. A streak breaks the first time life gets chaotic. A system just keeps running in the background, whether or not you're paying close attention that month.",
            "Start with whatever percentage is realistic today — even a small one. The habit of automation matters more at first than the size of the transfer. You can increase the amount later, once the system is proven and boring.",
          ],
          practice:
            "Review your automated transfers once a year and increase them in line with any salary increase, before the extra income has a chance to become a lifestyle upgrade.",
        },
      ]}
      bottomLineTitle="The Bottom Line"
      bottomLineParagraphs={[
        "The goal isn't to become a more disciplined person. It's to build a system that doesn't require discipline to work.",
        "Every rule in this series is easier to apply once the basic saving habit is automated and out of your hands.",
      ]}
      hubHref="/guides/rules-of-a-wealthy-mindset"
      hubLabel="Rules & Foundations of a Wealthy Mindset"
      prevHref="/guides/assets-vs-liabilities"
      prevLabel="Rule 2 — Assets vs. Liabilities"
      nextHref="/guides/loss-aversion"
      nextLabel="Rule 4 — Loss Aversion"
    />
  )
}
