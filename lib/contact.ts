// Server-side rules for the one enquiry path (POST /api/contact).
// Pure functions only, so `npm test` can exercise them without Next.js.

export const ENQUIRY_SOURCES = ["Contact page", "7-Question Financial Health Check"] as const;
export type EnquirySource = (typeof ENQUIRY_SOURCES)[number];

/** Name of the hidden honeypot input. Humans never see it; bots fill it in. */
export const HONEYPOT_FIELD = "company";

const LIMITS = {
  name: 100,
  email: 254,
  phone: 30,
  message: 5000,
  stoodOutOn: 100,
} as const;

export type Enquiry = {
  name: string;
  email: string;
  phone: string;
  message: string;
  source: EnquirySource;
  stoodOutOn: string;
};

export type FieldErrors = Partial<Record<keyof Enquiry, string>>;

/** Body returned by POST /api/contact. */
export type ContactResponse =
  | { ok: true }
  | {
      ok: false;
      error: "invalid" | "rate_limited" | "not_configured" | "send_failed";
      message: string;
      fields?: FieldErrors;
    };

export type ParseResult =
  | { kind: "ok"; enquiry: Enquiry }
  | { kind: "spam" }
  | { kind: "invalid"; errors: FieldErrors };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+()\d\s-]{6,30}$/;

function field(body: Record<string, unknown>, key: string): string {
  const value = body[key];
  return typeof value === "string" ? value.trim() : "";
}

/** One line, no control characters. Used for anything that may reach a header. */
function singleLine(value: string): string {
  return value.replace(/[\u0000-\u001f\u007f]+/g, " ").replace(/\s+/g, " ").trim();
}

export function parseEnquiry(body: unknown): ParseResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { kind: "invalid", errors: { message: "Invalid request." } };
  }
  const input = body as Record<string, unknown>;

  if (field(input, HONEYPOT_FIELD) !== "") {
    return { kind: "spam" };
  }

  const name = singleLine(field(input, "name"));
  const email = singleLine(field(input, "email"));
  const phone = singleLine(field(input, "phone"));
  const message = field(input, "message").replace(/\r\n?/g, "\n");
  const stoodOutOn = singleLine(field(input, "stoodOutOn"));
  const rawSource = field(input, "source");
  const source: EnquirySource = (ENQUIRY_SOURCES as readonly string[]).includes(rawSource)
    ? (rawSource as EnquirySource)
    : "Contact page";

  const errors: FieldErrors = {};
  if (!name) errors.name = "Please enter your name.";
  else if (name.length > LIMITS.name) errors.name = "Please shorten your name.";

  if (!email) errors.email = "Please enter your email address.";
  else if (email.length > LIMITS.email || !EMAIL_RE.test(email))
    errors.email = "Please enter a valid email address.";

  if (phone && !PHONE_RE.test(phone)) errors.phone = "Please enter a valid phone number.";

  if (!message) errors.message = "Please enter a message.";
  else if (message.length > LIMITS.message)
    errors.message = `Please keep your message under ${LIMITS.message} characters.`;

  if (stoodOutOn.length > LIMITS.stoodOutOn) errors.stoodOutOn = "Invalid selection.";

  if (Object.keys(errors).length > 0) return { kind: "invalid", errors };

  return { kind: "ok", enquiry: { name, email, phone, message, source, stoodOutOn } };
}

/**
 * The notification is sent as plain text only, so nothing a visitor types can
 * render as HTML in the inbox.
 */
export function buildNotification(enquiry: Enquiry): { subject: string; text: string } {
  const lines = [
    `Source: ${enquiry.source}`,
    `Name: ${enquiry.name}`,
    `Email: ${enquiry.email}`,
    `Phone: ${enquiry.phone || "(not provided)"}`,
  ];
  if (enquiry.stoodOutOn) lines.push(`Question that stood out: ${enquiry.stoodOutOn}`);
  lines.push("", "Message:", enquiry.message);

  return {
    subject: `New enquiry from ${enquiry.name} (${enquiry.source})`,
    text: lines.join("\n"),
  };
}

export type RateLimiter = (key: string, now?: number) => boolean;

/**
 * Fixed-window limiter held in memory. On Vercel each warm function instance
 * keeps its own window, so this stops a single scripted burst but is not a
 * global guarantee. Move to a shared store (e.g. Upstash) if abuse continues.
 */
export function createRateLimiter(limit: number, windowMs: number): RateLimiter {
  const hits = new Map<string, { count: number; resetAt: number }>();

  return (key, now = Date.now()) => {
    const entry = hits.get(key);
    if (!entry || now >= entry.resetAt) {
      hits.set(key, { count: 1, resetAt: now + windowMs });
      if (hits.size > 5000) {
        hits.forEach((v, k) => {
          if (now >= v.resetAt) hits.delete(k);
        });
      }
      return true;
    }
    entry.count += 1;
    return entry.count <= limit;
  };
}

export function clientIp(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return headers.get("x-real-ip")?.trim() || "unknown";
}
