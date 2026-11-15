import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import WealthyMindsetGuideClient from './WealthyMindsetGuideClient'

export const metadata = articleMetadata("/guides/rules-of-a-wealthy-mindset");

function WealthyMindsetGuideContent() {
  return <WealthyMindsetGuideClient />
}

export default function WealthyMindsetGuide() {
  return (
    <>
      <WealthyMindsetGuideContent />
      <ArticleMeta path="/guides/rules-of-a-wealthy-mindset" />
    </>
  );
}
