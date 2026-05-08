import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name    = String(body.name    ?? "").trim();
  const email   = String(body.email   ?? "").trim();
  const phone   = String(body.phone   ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service is not configured." }, { status: 500 });
  }

  // [REPLACE: Update from/to addresses with verified sender domain]
  const toEmail = process.env.CONTACT_EMAIL ?? "advisor@example.com";
  const fromAddress = process.env.FROM_EMAIL ?? "website@yourverifieddomain.com";

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: `Website Contact <${fromAddress}>`,
      to:      toEmail,
      replyTo: email,
      subject: `New enquiry from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;color:#1a1a1a">
          <h2 style="color:#C9A84C;border-bottom:1px solid #eee;padding-bottom:8px">
            New Contact Form Submission
          </h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:6px 0;font-weight:600;width:100px">Name:</td><td>${name}</td></tr>
            <tr><td style="padding:6px 0;font-weight:600">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:6px 0;font-weight:600">Phone:</td><td>${phone || "—"}</td></tr>
          </table>
          <h3 style="margin-top:20px;color:#555">Message</h3>
          <p style="background:#f9f9f9;padding:12px;border-left:3px solid #C9A84C;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
