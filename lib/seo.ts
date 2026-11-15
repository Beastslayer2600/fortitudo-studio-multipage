import type { Metadata } from "next";
import { articlePath, getArticle } from "@/content/articles";
import { DEFAULT_OG_IMAGE, DEFAULT_TITLE, SITE_NAME, TITLE_SUFFIX } from "@/lib/site";

type OgImage = { url: string; width?: number; height?: number; alt?: string };

type PageMetaInput = {
  /** Route path, e.g. "/about". Becomes the self-referencing canonical. */
  path: string;
  /** Title without the suffix. Omit for the home page's default title. */
  title?: string;
  description: string;
  type?: "website" | "article";
  published?: string;
  updated?: string;
  image?: OgImage;
};

/**
 * Metadata for one route. Next.js merges metadata shallowly, so Open Graph and
 * Twitter are rebuilt here every time; otherwise a page would inherit the
 * root layout's title and description in its share card.
 */
export function pageMetadata({
  path,
  title,
  description,
  type = "website",
  published,
  updated,
  image = DEFAULT_OG_IMAGE,
}: PageMetaInput): Metadata {
  const fullTitle = title ? `${title}${TITLE_SUFFIX}` : DEFAULT_TITLE;
  return {
    title: title ? { absolute: fullTitle } : { absolute: DEFAULT_TITLE },
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: "en_ZA",
      title: fullTitle,
      description,
      images: [image],
      ...(type === "article"
        ? { publishedTime: published, modifiedTime: updated, authors: ["Gert Fourie"] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
  };
}

/** Metadata for a guide or insight, read from content/articles.ts. */
export function articleMetadata(path: string, opts: { image?: OgImage } = {}): Metadata {
  const a = getArticle(path);
  return pageMetadata({
    path: articlePath(a),
    title: a.title,
    description: a.description,
    type: "article",
    published: a.published,
    updated: a.updated,
    image: opts.image,
  });
}
