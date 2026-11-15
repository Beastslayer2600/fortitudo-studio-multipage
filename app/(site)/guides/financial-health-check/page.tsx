import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import HealthCheckClient from "./HealthCheckClient";

export const metadata = articleMetadata("/guides/financial-health-check");

function FinancialHealthCheckPageContent() {
  return <HealthCheckClient />;
}

export default function FinancialHealthCheckPage() {
  return (
    <>
      <FinancialHealthCheckPageContent />
      <ArticleMeta path="/guides/financial-health-check" />
    </>
  );
}
