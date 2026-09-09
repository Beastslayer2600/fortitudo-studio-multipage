import type { Metadata } from "next";
import IncomeInterruptionClient from "./IncomeInterruptionClient";

export const metadata: Metadata = {
  title: "The Income Interruption Test | Gert Fourie",
  description:
    "Your salary stops. Your debit orders do not. Work out exactly how many months you have — in ninety seconds, in your browser.",
};

export default function IncomeInterruptionTestPage() {
  return <IncomeInterruptionClient />;
}
