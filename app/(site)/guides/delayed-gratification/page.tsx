import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import DelayedGratificationGuideClient from "./DelayedGratificationGuideClient"

export const metadata = articleMetadata("/guides/delayed-gratification");

function DelayedGratificationGuideContent() {
  return <DelayedGratificationGuideClient />
}

export default function DelayedGratificationGuide() {
  return (
    <>
      <DelayedGratificationGuideContent />
      <ArticleMeta path="/guides/delayed-gratification" />
    </>
  );
}
