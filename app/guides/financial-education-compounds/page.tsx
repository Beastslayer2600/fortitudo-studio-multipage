import type { Metadata } from "next"
import FinancialEducationGuideClient from "./FinancialEducationGuideClient"

export const metadata: Metadata = {
  title: "Financial Education Compounds Too | Gert Fourie",
  description:
    "Financial intelligence compounds over time, just like capital does. Twenty minutes a week adds up. Rule 7 of 10.",
}

export default function FinancialEducationGuide() {
  return <FinancialEducationGuideClient />
}
