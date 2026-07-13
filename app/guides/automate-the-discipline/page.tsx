import type { Metadata } from "next"
import AutomateDisciplineGuideClient from "./AutomateDisciplineGuideClient"

export const metadata: Metadata = {
  title: "Automate the Discipline You Don't Have | Gert Fourie",
  description:
    "Discipline that depends on willpower fails. Discipline that's automated succeeds. Rule 3 of 10.",
}

export default function AutomateDisciplineGuide() {
  return <AutomateDisciplineGuideClient />
}
