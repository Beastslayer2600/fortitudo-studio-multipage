import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import DefinePurposeGuideClient from './DefinePurposeGuideClient'

export const metadata = articleMetadata("/guides/define-your-purpose");

function DefinePurposeGuideContent() {
  return <DefinePurposeGuideClient />
}

export default function DefinePurposeGuide() {
  return (
    <>
      <DefinePurposeGuideContent />
      <ArticleMeta path="/guides/define-your-purpose" />
    </>
  );
}
