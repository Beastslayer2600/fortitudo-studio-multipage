import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import CostOfWaitingGuideClient from "./CostOfWaitingGuideClient"

export const metadata = articleMetadata("/guides/the-cost-of-waiting");

function CostOfWaitingGuideContent() {
  return <CostOfWaitingGuideClient />
}

export default function CostOfWaitingGuide() {
  return (
    <>
      <CostOfWaitingGuideContent />
      <ArticleMeta path="/guides/the-cost-of-waiting" />
    </>
  );
}
