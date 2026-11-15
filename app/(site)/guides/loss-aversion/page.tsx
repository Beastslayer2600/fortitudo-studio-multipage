import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import LossAversionGuideClient from "./LossAversionGuideClient"

export const metadata = articleMetadata("/guides/loss-aversion");

function LossAversionGuideContent() {
  return <LossAversionGuideClient />
}

export default function LossAversionGuide() {
  return (
    <>
      <LossAversionGuideContent />
      <ArticleMeta path="/guides/loss-aversion" />
    </>
  );
}
