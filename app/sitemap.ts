import type { MetadataRoute } from "next";
import { ARTICLES, articlePath } from "@/content/articles";
import { SITE_URL } from "@/lib/site";

// Top-level pages with the date their content last changed (from git history).
// Bump a date when you change that page's substance.
const PAGES: { path: string; updated: string }[] = [
  { path: "", updated: "2026-11-11" },
  { path: "/about", updated: "2026-11-11" },
  { path: "/services", updated: "2026-10-31" },
  { path: "/process", updated: "2026-10-31" },
  { path: "/guides", updated: "2026-11-11" },
  { path: "/insights", updated: "2026-10-31" },
  { path: "/contact", updated: "2026-11-02" },
  { path: "/disclaimer", updated: "2026-08-04" },
  { path: "/privacy", updated: "2026-03-04" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((p) => ({ url: `${SITE_URL}${p.path}`, lastModified: p.updated })),
    ...ARTICLES.map((a) => ({ url: `${SITE_URL}${articlePath(a)}`, lastModified: a.updated })),
  ];
}
