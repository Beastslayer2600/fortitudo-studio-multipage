import type { MetadataRoute } from "next";

const SITE_URL = "https://www.fortitudostudios.site";

const guideSlugs = [
  "building-wealth-on-a-starter-salary",
  "why-saving-feels-painful",
  "rules-of-a-wealthy-mindset",
  "define-your-purpose",
  "assets-vs-liabilities",
  "automate-the-discipline",
  "loss-aversion",
  "the-cost-of-waiting",
  "delayed-gratification",
  "financial-education-compounds",
  "plan-on-paper",
  "review-beats-avoidance",
  "your-environment-shapes-you",
];

const insightSlugs = [
  "sequence-of-returns-risk",
  "two-pot-retirement-system",
  "why-diversification-isnt-just-about-asset-classes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/process",
    "/guides",
    "/insights",
    "/contact",
    "/disclaimer",
    "/privacy",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const guideRoutes = guideSlugs.map((slug) => ({
    url: `${SITE_URL}/guides/${slug}`,
    lastModified: new Date(),
  }));

  const insightRoutes = insightSlugs.map((slug) => ({
    url: `${SITE_URL}/insights/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...guideRoutes, ...insightRoutes];
}
