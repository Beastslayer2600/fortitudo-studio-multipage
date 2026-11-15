import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import AssetsLiabilitiesGuideClient from './AssetsLiabilitiesGuideClient'

export const metadata = articleMetadata("/guides/assets-vs-liabilities");

function AssetsLiabilitiesGuideContent() {
  return <AssetsLiabilitiesGuideClient />
}

export default function AssetsLiabilitiesGuide() {
  return (
    <>
      <AssetsLiabilitiesGuideContent />
      <ArticleMeta path="/guides/assets-vs-liabilities" />
    </>
  );
}
