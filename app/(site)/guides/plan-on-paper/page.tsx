import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import PlanOnPaperGuideClient from "./PlanOnPaperGuideClient"

export const metadata = articleMetadata("/guides/plan-on-paper");

function PlanOnPaperGuideContent() {
  return <PlanOnPaperGuideClient />
}

export default function PlanOnPaperGuide() {
  return (
    <>
      <PlanOnPaperGuideContent />
      <ArticleMeta path="/guides/plan-on-paper" />
    </>
  );
}
