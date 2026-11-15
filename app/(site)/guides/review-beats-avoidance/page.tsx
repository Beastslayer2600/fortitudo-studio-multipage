import ArticleMeta from "@/components/ArticleMeta";
import { articleMetadata } from "@/lib/seo";
import ReviewBeatsAvoidanceGuideClient from "./ReviewBeatsAvoidanceGuideClient"

export const metadata = articleMetadata("/guides/review-beats-avoidance");

function ReviewBeatsAvoidanceGuideContent() {
  return <ReviewBeatsAvoidanceGuideClient />
}

export default function ReviewBeatsAvoidanceGuide() {
  return (
    <>
      <ReviewBeatsAvoidanceGuideContent />
      <ArticleMeta path="/guides/review-beats-avoidance" />
    </>
  );
}
