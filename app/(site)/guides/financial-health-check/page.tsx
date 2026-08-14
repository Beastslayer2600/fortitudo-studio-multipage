import type { Metadata } from "next";
import HealthCheckClient from "./HealthCheckClient";

export const metadata: Metadata = {
  title: "The 7-Question Financial Health Check | Gert Fourie",
  description:
    "A two-minute, scored self-assessment covering the seven areas that decide whether your financial position holds up under pressure.",
};

export default function FinancialHealthCheckPage() {
  return <HealthCheckClient />;
}
