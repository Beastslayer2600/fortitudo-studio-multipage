import type { Metadata } from "next"
import CostOfWaitingGuideClient from "./CostOfWaitingGuideClient"

export const metadata: Metadata = {
  title: "Time Is the One Input You Can't Buy Back | Gert Fourie",
  description:
    "Compound growth has one requirement no amount of skill can substitute for: time. Rule 5 of 10.",
}

export default function CostOfWaitingGuide() {
  return <CostOfWaitingGuideClient />
}
