import type { Metadata } from "next"
import PlanOnPaperGuideClient from "./PlanOnPaperGuideClient"

export const metadata: Metadata = {
  title: "A Plan on Paper Beats a Good Intention | Gert Fourie",
  description:
    "Organised plans consistently outperform vague ambition, because they turn intention into a sequence of decisions you can actually execute. Rule 10 of 10.",
}

export default function PlanOnPaperGuide() {
  return <PlanOnPaperGuideClient />
}
