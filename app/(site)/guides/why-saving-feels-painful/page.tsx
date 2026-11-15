import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import SavingPainfulGuideClient from './SavingPainfulGuideClient'

export const metadata = articleMetadata("/guides/why-saving-feels-painful");

function SavingPainfulGuideContent() {
  return <SavingPainfulGuideClient />
}

export default function SavingPainfulGuide() {
  return (
    <>
      <SavingPainfulGuideContent />
      <ArticleMeta path="/guides/why-saving-feels-painful" />
    </>
  );
}
