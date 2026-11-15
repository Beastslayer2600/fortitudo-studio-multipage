import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import AutomateDisciplineGuideClient from "./AutomateDisciplineGuideClient"

export const metadata = articleMetadata("/guides/automate-the-discipline");

function AutomateDisciplineGuideContent() {
  return <AutomateDisciplineGuideClient />
}

export default function AutomateDisciplineGuide() {
  return (
    <>
      <AutomateDisciplineGuideContent />
      <ArticleMeta path="/guides/automate-the-discipline" />
    </>
  );
}
