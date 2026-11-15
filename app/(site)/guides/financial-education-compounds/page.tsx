import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import FinancialEducationGuideClient from "./FinancialEducationGuideClient"

export const metadata = articleMetadata("/guides/financial-education-compounds");

function FinancialEducationGuideContent() {
  return <FinancialEducationGuideClient />
}

export default function FinancialEducationGuide() {
  return (
    <>
      <FinancialEducationGuideContent />
      <ArticleMeta path="/guides/financial-education-compounds" />
    </>
  );
}
