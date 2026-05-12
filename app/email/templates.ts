interface ContactData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const DARK = "#0a1a10";
const DARK_CARD = "#0d2a1f";
const GOLD = "#bca472";
const CREAM = "#f8f4ea";
const MUTED = "#a89b7a";
const BORDER = "#1e3d28";

function base(content: string, preheader: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<meta name="color-scheme" content="dark" />
<title>Fortitudo Studios</title>
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:${DARK};font-family:Georgia,'Times New Roman',serif;">
<!-- preheader -->
<span style="display:none;max-height:0;overflow:hidden;mso-hide:all;">${preheader}&nbsp;&zwnj;&hairsp;&zwnj;&hairsp;</span>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:${DARK};">
  <tr>
    <td align="center" style="padding:32px 16px;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

        <!-- Header -->
        <tr>
          <td align="center" style="background-color:${DARK_CARD};border-radius:12px 12px 0 0;padding:36px 48px 28px;border:1px solid ${BORDER};border-bottom:none;">
            <p style="margin:0 0 4px;font-family:Georgia,serif;font-size:11px;letter-spacing:0.2em;color:${GOLD};text-transform:uppercase;">Liberty Group · FSP 2409 · Pretoria</p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:normal;letter-spacing:0.1em;color:${CREAM};text-transform:uppercase;">Gert Fourie</h1>
            <p style="margin:4px 0 0;font-family:Georgia,serif;font-size:12px;letter-spacing:0.15em;color:${MUTED};text-transform:uppercase;">Financial Advisor</p>
            <!-- gold rule -->
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
              <tr><td style="height:1px;background:linear-gradient(90deg,transparent,${GOLD},transparent);font-size:0;line-height:0;">&nbsp;</td></tr>
            </table>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="background-color:${DARK_CARD};padding:32px 48px 40px;border-left:1px solid ${BORDER};border-right:1px solid ${BORDER};">
            ${content}
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background-color:#060e09;border-radius:0 0 12px 12px;padding:24px 48px;border:1px solid ${BORDER};border-top:none;">
            <p style="margin:0 0 8px;font-size:11px;color:${MUTED};line-height:1.6;">
              Liberty Group Limited is an Authorised Financial Services Provider (FSP 2409). Gert Fourie is a representative of Liberty Group Limited. Content is general information only and does not constitute financial advice. Past performance is not indicative of future results.
            </p>
            <p style="margin:0;font-size:11px;color:#4a6050;">
              <a href="https://fortitudostudios.site/disclaimer" style="color:${MUTED};text-decoration:none;">Disclaimer</a>
              &nbsp;&bull;&nbsp;
              <a href="https://fortitudostudios.site/privacy" style="color:${MUTED};text-decoration:none;">Privacy (POPIA)</a>
              &nbsp;&bull;&nbsp;
              <a href="https://fortitudostudios.site" style="color:${MUTED};text-decoration:none;">fortitudostudios.site</a>
            </p>
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
</body>
</html>`;
}

function goldButton(href: string, label: string) {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;">
    <tr>
      <td align="center" style="border-radius:8px;background-color:${GOLD};">
        <a href="${href}" style="display:inline-block;padding:14px 32px;font-family:Georgia,serif;font-size:15px;font-weight:bold;color:#0a231a;text-decoration:none;letter-spacing:0.04em;">${label}</a>
      </td>
    </tr>
  </table>`;
}

function divider() {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:28px 0;">
    <tr><td style="height:1px;background-color:${BORDER};font-size:0;line-height:0;">&nbsp;</td></tr>
  </table>`;
}

export function contactNotificationHtml({ name, email, phone, message }: ContactData) {
  const safeMessage = message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />");

  const content = `
    <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;color:${GOLD};text-transform:uppercase;">New Enquiry</p>
    <h2 style="margin:0 0 24px;font-family:Georgia,serif;font-size:22px;font-weight:normal;color:${CREAM};">Strategy Session Request</h2>
    <p style="margin:0 0 24px;font-size:15px;color:#c8bfa4;line-height:1.6;">
      <strong style="color:${CREAM};">${name}</strong> has submitted a contact form and is enquiring about your services.
    </p>

    <!-- Contact card -->
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#061510;border-radius:8px;border:1px solid ${BORDER};">
      <tr>
        <td style="padding:24px 28px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td style="padding:6px 0;width:80px;font-size:12px;letter-spacing:0.1em;color:${MUTED};text-transform:uppercase;vertical-align:top;">Name</td>
              <td style="padding:6px 0;font-size:15px;color:${CREAM};">${name}</td>
            </tr>
            <tr>
              <td style="padding:6px 0;font-size:12px;letter-spacing:0.1em;color:${MUTED};text-transform:uppercase;vertical-align:top;">Email</td>
              <td style="padding:6px 0;font-size:15px;color:${CREAM};"><a href="mailto:${email}" style="color:${GOLD};text-decoration:none;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding:6px 0;font-size:12px;letter-spacing:0.1em;color:${MUTED};text-transform:uppercase;vertical-align:top;">Phone</td>
              <td style="padding:6px 0;font-size:15px;color:${CREAM};">${phone || "<span style='color:#4a6050;font-style:italic;'>Not provided</span>"}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>

    ${divider()}

    <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.1em;color:${MUTED};text-transform:uppercase;">Message</p>
    <p style="margin:0;font-size:15px;color:#c8bfa4;line-height:1.8;padding:20px 24px;background-color:#061510;border-radius:8px;border-left:3px solid ${GOLD};">
      ${safeMessage}
    </p>

    ${goldButton(`mailto:${email}?subject=Re: Your enquiry – Fortitudo Studios`, `Reply to ${name}`)}
  `;

  return base(content, `New strategy session enquiry from ${name}`);
}

export function contactAutoReplyHtml({ name }: Pick<ContactData, "name">) {
  const content = `
    <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:11px;letter-spacing:0.15em;color:${GOLD};text-transform:uppercase;">Message Received</p>
    <h2 style="margin:0 0 24px;font-family:Georgia,serif;font-size:22px;font-weight:normal;color:${CREAM};">Thank you, ${name}.</h2>
    <p style="margin:0 0 20px;font-size:15px;color:#c8bfa4;line-height:1.8;">
      Your message has been received. I will review your enquiry and reply personally within <strong style="color:${CREAM};">24–48 hours</strong>.
    </p>
    <p style="margin:0 0 20px;font-size:15px;color:#c8bfa4;line-height:1.8;">
      In the meantime, feel free to explore how I work and what structured financial planning can look like for someone at your stage.
    </p>

    ${divider()}

    <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:20px;font-style:italic;color:${GOLD};">&ldquo;Strategy first. Emotion second.&rdquo;</p>
    <p style="margin:8px 0 0;font-size:13px;color:${MUTED};">— Gert Fourie, Financial Advisor</p>

    ${divider()}

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding-right:12px;vertical-align:top;width:50%;">
          <a href="https://fortitudostudios.site/process" style="display:block;padding:18px 20px;background-color:#061510;border-radius:8px;border:1px solid ${BORDER};text-decoration:none;">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.12em;color:${GOLD};text-transform:uppercase;">Explore</p>
            <p style="margin:0;font-size:14px;color:${CREAM};font-family:Georgia,serif;">My Process &rarr;</p>
          </a>
        </td>
        <td style="padding-left:12px;vertical-align:top;width:50%;">
          <a href="https://fortitudostudios.site/guides" style="display:block;padding:18px 20px;background-color:#061510;border-radius:8px;border:1px solid ${BORDER};text-decoration:none;">
            <p style="margin:0 0 4px;font-size:11px;letter-spacing:0.12em;color:${GOLD};text-transform:uppercase;">Read</p>
            <p style="margin:0;font-size:14px;color:${CREAM};font-family:Georgia,serif;">Financial Guides &rarr;</p>
          </a>
        </td>
      </tr>
    </table>

    ${goldButton("https://fortitudostudios.site", "Visit Fortitudo Studios")}
  `;

  return base(content, `We received your enquiry, ${name} — Gert will be in touch within 24–48 hours.`);
}
