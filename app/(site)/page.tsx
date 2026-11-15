import { pageMetadata } from "@/lib/seo";
import { DEFAULT_DESCRIPTION } from "@/lib/site";
import HomeClient from "./HomeClient";

export const metadata = pageMetadata({ path: "/", description: DEFAULT_DESCRIPTION });

export default function Home() {
  return <HomeClient />;
}
