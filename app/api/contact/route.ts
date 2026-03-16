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

function parseBoolean(value: string | undefined) {
  if (!value) {
    return undefined;
  }

  return /^(true|1|yes)$/i.test(value);
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

  const host = readEnv("CONTACT_SMTP_HOST", "SMTP_HOST", "MAIL_HOST", "EMAIL_HOST");
  const port = readEnv("CONTACT_SMTP_PORT", "SMTP_PORT", "MAIL_PORT", "EMAIL_PORT");
  const user = readEnv(
    "CONTACT_SMTP_USER",
    "CONTACT_SMTP_USERNAME",
    "SMTP_USER",
    "SMTP_USERNAME",
    "MAIL_USER",
    "MAIL_USERNAME",
    "EMAIL_USER"
  );
  const pass = readEnv(
    "CONTACT_SMTP_PASS",
    "CONTACT_SMTP_PASSWORD",
    "SMTP_PASS",
    "SMTP_PASSWORD",
    "MAIL_PASS",
    "MAIL_PASSWORD",
    "EMAIL_PASS",
    "EMAIL_PASSWORD"
  );
  const secureValue = readEnv(
    "CONTACT_SMTP_SECURE",
    "SMTP_SECURE",
    "MAIL_SECURE",
    "EMAIL_SECURE"
  );
  const from = readEnv("CONTACT_FROM", "SMTP_FROM", "MAIL_FROM", "EMAIL_FROM") || user;
  const to = readEnv("CONTACT_TO", "SMTP_TO", "MAIL_TO", "EMAIL_TO") || "fortitudostudios@protonmail.com";

  const missingFields = [
    !host ? "host" : "",
    !port ? "port" : "",
    !user ? "user" : "",
    !pass ? "pass" : "",
    !from ? "from" : "",
  ].filter(Boolean);

  if (missingFields.length > 0) {
    const expectedEnv = {
      host: "CONTACT_SMTP_HOST | SMTP_HOST | MAIL_HOST | EMAIL_HOST",
      port: "CONTACT_SMTP_PORT | SMTP_PORT | MAIL_PORT | EMAIL_PORT",
      user:
        "CONTACT_SMTP_USER | CONTACT_SMTP_USERNAME | SMTP_USER | SMTP_USERNAME | MAIL_USER | MAIL_USERNAME | EMAIL_USER",
      pass:
        "CONTACT_SMTP_PASS | CONTACT_SMTP_PASSWORD | SMTP_PASS | SMTP_PASSWORD | MAIL_PASS | MAIL_PASSWORD | EMAIL_PASS | EMAIL_PASSWORD",
      from: "CONTACT_FROM | SMTP_FROM | MAIL_FROM | EMAIL_FROM",
    };

    return NextResponse.json(
      {
        error: `Email service is not configured. Missing SMTP fields: ${missingFields.join(", ")}.`,
        expectedEnv: Object.fromEntries(
          missingFields.map((field) => [field, expectedEnv[field as keyof typeof expectedEnv]])
        ),
      },
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

  const parsedSecure = parseBoolean(secureValue);
  const secure = parsedSecure ?? smtpPort === 465;

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
    console.log("Sending email with these details:", {
      from: from,
      to: to,
      replyTo: email,
      subject: subject,
    });

    const info = await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject,
      text,
      html,
    });

    console.log("Email successfully sent! Brevo response:", info);

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send email via Nodemailer:", {
      message: (error as Error).message,
      code: (error as { code?: unknown }).code,
      response: (error as { response?: unknown }).response,
      stack: (error as Error).stack,
    });

    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

