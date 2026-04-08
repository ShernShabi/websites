import { NextResponse } from "next/server";
import { Resend } from "resend";
import { config } from "@/site.config";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  moveInDate?: string;
  floorPlan?: string;
  message?: string;
  /** Honeypot — must be empty. */
  company?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot: silently accept to avoid tipping off bots
  if (payload.company && payload.company.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim();
  const email = payload.email?.trim();
  const message = payload.message?.trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set.");
    return NextResponse.json(
      {
        error:
          "The leasing inbox is not configured. Please contact us directly.",
      },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);
  const fromAddress =
    process.env.RESEND_FROM_ADDRESS ?? `${config.businessName} <onboarding@resend.dev>`;

  const prettyRows = [
    ["Name", name],
    ["Email", email],
    ["Phone", payload.phone?.trim() || "—"],
    ["Desired Move-In", payload.moveInDate?.trim() || "—"],
    ["Residence of Interest", payload.floorPlan?.trim() || "—"],
  ];

  const notificationHtml = `
    <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; color: #0a0a0a; max-width: 560px; margin: 0 auto;">
      <h1 style="font-family: Georgia, 'Playfair Display', serif; font-size: 28px; font-weight: 400; margin: 0 0 8px;">
        New Leasing Inquiry
      </h1>
      <p style="color: #737373; font-size: 14px; margin: 0 0 28px;">${config.businessName}</p>
      <table style="width: 100%; border-collapse: collapse;">
        ${prettyRows
          .map(
            ([label, value]) => `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #737373; width: 40%;">${label}</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e5e5e5; font-size: 14px; color: #0a0a0a;">${escapeHtml(value)}</td>
              </tr>`
          )
          .join("")}
      </table>
      <div style="margin-top: 28px;">
        <p style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em; color: #737373; margin: 0 0 10px;">Message</p>
        <div style="font-size: 15px; line-height: 1.6; color: #0a0a0a; white-space: pre-wrap;">${escapeHtml(message)}</div>
      </div>
    </div>
  `;

  const confirmationHtml = `
    <div style="font-family: -apple-system, Helvetica, Arial, sans-serif; color: #0a0a0a; max-width: 560px; margin: 0 auto;">
      <h1 style="font-family: Georgia, 'Playfair Display', serif; font-size: 30px; font-weight: 400; margin: 0 0 16px;">
        Thank you, ${escapeHtml(name.split(" ")[0])}.
      </h1>
      <div style="height: 1px; width: 48px; background: #c9a961; margin: 16px 0 24px;"></div>
      <p style="font-size: 15px; line-height: 1.7; color: #525252;">
        We&rsquo;ve received your inquiry about ${config.businessName}. A member of our
        leasing team will be in touch within 24 hours to arrange a private viewing.
      </p>
      <p style="font-size: 15px; line-height: 1.7; color: #525252; margin-top: 24px;">
        In the meantime, if you&rsquo;d like to reach us directly:
      </p>
      <p style="font-size: 14px; color: #0a0a0a; margin-top: 8px;">
        ${config.email}<br />
        ${config.phone}<br />
        ${config.address.line1}, ${config.address.city}, ${config.address.state} ${config.address.zip}
      </p>
      <p style="font-size: 12px; color: #a3a3a3; margin-top: 32px;">
        — The leasing team at ${config.businessName}
      </p>
    </div>
  `;

  try {
    await Promise.all([
      resend.emails.send({
        from: fromAddress,
        to: [config.email],
        replyTo: email,
        subject: `New Inquiry — ${name}`,
        html: notificationHtml,
      }),
      resend.emails.send({
        from: fromAddress,
        to: [email],
        subject: `Thank you for your inquiry — ${config.businessName}`,
        html: confirmationHtml,
      }),
    ]);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json(
      {
        error:
          "We couldn't deliver your message. Please try again or contact us directly.",
      },
      { status: 502 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
