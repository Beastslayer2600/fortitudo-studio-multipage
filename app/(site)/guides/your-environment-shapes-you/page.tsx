import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import EnvironmentGuideClient from "./EnvironmentGuideClient"

export const metadata = articleMetadata("/guides/your-environment-shapes-you");

function EnvironmentGuideContent() {
  return <EnvironmentGuideClient />
}

export default function EnvironmentGuide() {
  return (
    <>
      <EnvironmentGuideContent />
      <ArticleMeta path="/guides/your-environment-shapes-you" />
    </>
  );
}
