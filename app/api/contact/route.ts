const nodemailer = require("nodemailer");
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readEnv(...keys: string[]) {
  for (const key of keys) {
    const value = process.env[key];
    if (value && value.trim()) {
      return value.trim();
    }
  }

  return undefined;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();
  const phone = String(body.phone || "").trim();
  const message = String(body.message || "").trim();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!isEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const host = readEnv("CONTACT_SMTP_HOST", "SMTP_HOST");
  const port = readEnv("CONTACT_SMTP_PORT", "SMTP_PORT");
  const user = readEnv("CONTACT_SMTP_USER", "SMTP_USER");
  const pass = readEnv("CONTACT_SMTP_PASS", "SMTP_PASS");
  const secure = (readEnv("CONTACT_SMTP_SECURE", "SMTP_SECURE") || "").toLowerCase() === "true";
  const from = readEnv("CONTACT_FROM", "SMTP_FROM", "MAIL_FROM") || user;
  const to = readEnv("CONTACT_TO", "SMTP_TO", "MAIL_TO") || "fortitudostudios@protonmail.com";

  if (!host || !port || !user || !pass || !from) {
    return NextResponse.json(
      { error: "Email service is not configured. Please set SMTP environment variables." },
      { status: 500 }
    );
  }

  const smtpPort = Number(port);
  if (!Number.isInteger(smtpPort) || smtpPort <= 0) {
    return NextResponse.json(
      { error: "Email service is not configured. SMTP port is invalid." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host,
    port: smtpPort,
    secure,
    auth: {
      user,
      pass,
    },
  });

  const subject = `New website enquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    phone ? `Phone: ${phone}` : "Phone: (not provided)",
    "",
    message,
  ].join("\n");

  const html = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || "(not provided)"}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br />")}</p>
  `;

  try {
    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}

