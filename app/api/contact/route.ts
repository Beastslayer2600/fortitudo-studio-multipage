import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildNotification,
  clientIp,
  createRateLimiter,
  parseEnquiry,
  type ContactResponse,
} from "@/lib/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Five submissions per IP per minute; the sixth gets 429.
const allow = createRateLimiter(5, 60_000);

function reply(body: ContactResponse, status: number) {
  return NextResponse.json(body, { status });
}

export async function POST(request: Request) {
  if (!allow(clientIp(request.headers))) {
    return reply(
      {
        ok: false,
        error: "rate_limited",
        message: "Too many messages in a short time. Please wait a minute and try again.",
      },
      429,
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = parseEnquiry(body);

  if (parsed.kind === "spam") {
    // Pretend it worked so bots get no signal.
    return reply({ ok: true }, 200);
  }

  if (parsed.kind === "invalid") {
    return reply(
      {
        ok: false,
        error: "invalid",
        message: "Please check the highlighted fields.",
        fields: parsed.errors,
      },
      400,
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM;
  if (!apiKey || !to || !from) {
    console.error("Contact form is not configured: set RESEND_API_KEY, CONTACT_TO and CONTACT_FROM.");
    return reply(
      {
        ok: false,
        error: "not_configured",
        message: "The form is unavailable right now. Please use WhatsApp or email instead.",
      },
      503,
    );
  }

  const { subject, text } = buildNotification(parsed.enquiry);

  try {
    const { error } = await new Resend(apiKey).emails.send({
      from,
      to,
      replyTo: parsed.enquiry.email,
      subject,
      text,
    });
    if (error) throw error;
    return reply({ ok: true }, 200);
  } catch (err) {
    console.error("Contact send failed:", err);
    return reply(
      {
        ok: false,
        error: "send_failed",
        message: "Your message could not be sent. Please try again, or use WhatsApp.",
      },
      502,
    );
  }
}
