import { articlePath, getArticle } from "@/content/articles";
import { AUTHOR_BIO, DEFAULT_OG_IMAGE, SITE_URL } from "@/lib/site";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-ZA", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Visible author line, dates and bio under a guide or insight, plus the
 * matching Article and BreadcrumbList JSON-LD. Everything comes from
 * content/articles.ts so the markup and the page cannot disagree.
 */
export default function ArticleMeta({ path }: { path: string }) {
  const a = getArticle(path);
  const url = `${SITE_URL}${articlePath(a)}`;
  const section = a.type === "guide" ? { name: "Guides", path: "/guides" } : { name: "Insights", path: "/insights" };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: a.title,
        description: a.description,
        datePublished: a.published,
        dateModified: a.updated,
        inLanguage: "en-ZA",
        url,
        mainEntityOfPage: url,
        image: `${SITE_URL}${DEFAULT_OG_IMAGE.url}`,
        author: { "@id": `${SITE_URL}/#gert-fourie` },
        publisher: { "@id": `${SITE_URL}/#gert-fourie` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: section.name, item: `${SITE_URL}${section.path}` },
          { "@type": "ListItem", position: 3, name: a.title, item: url },
        ],
      },
    ],
  };

  return (
    <aside
      aria-label="About this article"
      className="relative z-10 border-t border-[var(--gold)]/15 bg-[#0b0d10]/92 px-6 py-10 text-[var(--cream)]"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl text-sm leading-relaxed text-white/70">
        <p>
          <span className="text-[var(--cream)]">By Gert Fourie</span>, financial adviser.{" "}
          Published <time dateTime={a.published}>{formatDate(a.published)}</time>
          {a.updated !== a.published && (
            <>
              {" "}
              · Updated <time dateTime={a.updated}>{formatDate(a.updated)}</time>
            </>
          )}
        </p>
        <p className="mt-2">{AUTHOR_BIO}</p>
      </div>
    </aside>
  );
}
