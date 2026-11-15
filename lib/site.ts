// Single source for site-wide facts used across pages, metadata and JSON-LD.

/**
 * Canonical origin. Every absolute URL (metadataBase, canonicals, sitemap,
 * robots, JSON-LD) is built from this. The `.site` redirect in
 * next.config.mjs must point here too; lib/site.test.mjs checks that.
 */
export const SITE_URL = "https://fortitudostudios.com";

export const SITE_NAME = "Gert Fourie, Financial Adviser";
export const DEFAULT_TITLE = "Financial Adviser in Pretoria | Gert Fourie";
export const TITLE_SUFFIX = " | Gert Fourie";
export const DEFAULT_DESCRIPTION =
  "Financial planning for professionals in Pretoria and Gauteng: a plan you’ll actually keep. Gert Fourie, representative of Liberty Group Limited (FSP 2409).";

export const DEFAULT_OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "Gert Fourie, Financial Adviser, Pretoria",
};

export const PHONE_CELL = "+27773866299";
export const PHONE_OFFICE = "+27124337241";
export const EMAIL = "gert.fourie@liblink.co.za";
export const SAME_AS = [
  "https://www.instagram.com/gert_wealth",
  "https://www.linkedin.com/in/gert-fourie-wealth",
];

/** Short author bio shown under every guide and insight (from the /about page). */
export const AUTHOR_BIO =
  "Gert Fourie is a financial adviser with Liberty Group in Pretoria, helping young professionals, business owners and families build a plan they'll actually keep.";

export const WHATSAPP_NUMBER = "27773866299";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;
export const WHATSAPP_DISPLAY = "077 386 6299";

// TODO(GERT): confirm the response time. "24-48 hours" is the promise the
// existing /thank-you page already made; it is now stated once, here, and
// shown on both /contact and /thank-you.
export const RESPONSE_TIME = "24–48 hours";
