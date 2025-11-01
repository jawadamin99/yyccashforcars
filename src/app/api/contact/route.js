import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// --- embed logo as inline attachment (cid) ---
const logoCid = "logo@cid";
export const config = {
  api: {
    bodyParser: false, // disable Next’s JSON parser
  },
};

export async function POST(request) {
  // Parse multipart/form-data
  const formData = await request.formData();

  const name = formData.get("name")?.toString() || "";
  const phone = formData.get("phone")?.toString() || "";
  const email = formData.get("email")?.toString() || "";
  const city = formData.get("city")?.toString() || "";
  const carDetail = formData.get("carDetail")?.toString() || "";
  const reason = formData.get("reason")?.toString() || "";

  // Gather file attachments (now expects field name "images")
  const attachments = [];
  for (const file of formData.getAll("images")) {
    // file is a File (Web API)
    if (file instanceof File) {
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
      });
    }
  }
  // Nodemailer transporter (Gmail)
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    const logoPath = path.join(
      process.cwd(),
      "public",
      "images",
      "yyc-car-logo.png"
    );
    if (fs.existsSync(logoPath)) {
      const logoBuffer = fs.readFileSync(logoPath);
      // prepend so logo is available as cid:logo@cid
      attachments.unshift({
        filename: "logo.svg",
        content: logoBuffer,
        cid: logoCid,
        contentType: "image/svg+xml",
      });
    } else {
      console.warn("Logo not found at", logoPath);
    }
  } catch (err) {
    console.warn("Error loading logo file:", err);
  }

  const escapeHtml = (unsafe) =>
    (unsafe || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const attachmentsListHtml = attachments.length
    ? `<ul style="margin:0;padding-left:18px;color:var(--color-secondary)">${attachments
        .map(
          (a) => `<li style="margin-bottom:6px">${escapeHtml(a.filename)}</li>`
        )
        .join("")}</ul>`
    : `<p style="margin:0;color:#666">No attachments provided.</p>`;

  // Modern + futuristic email template using provided color scheme
  const html = `
  <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New Contact — yycCash for Cars</title>
</head>
<body style="margin:0; padding:0; background-color: #f8fafc; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; color: #1e293b; -webkit-font-smoothing: antialiased;">
  <div style="padding: 28px; display: flex; justify-content: center; align-items: center;">
    <div style="width: 100%; max-width: 780px;margin:auto; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1); border: 1px solid #e2e8f0; background-color: #ffffff;">
      <div style="background: linear-gradient(135deg, #4d88a9, #bd3747); padding: 24px 28px; color: white;">
        <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
          <div style="flex: 1;">
            <h1 style="font-size: 20px;color:white; font-weight: 700; margin: 0; line-height: 1.3;">Yyc Cash for Cars — New Website Lead</h1>
            <p style="font-size: 14px; opacity: 0.9; margin: 4px 0 0; font-weight: 500;">Received ${new Date().toLocaleString()}</p>
            <span style="display: inline-block; background: rgba(255, 255, 255, 0.2); color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; margin-top: 12px; backdrop-filter: blur(5px);">Website Contact</span>
          </div>
        </div>
      </div>

      <div style="padding: 28px;">
        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 14px; font-weight: 600; color: #64748b; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Contact Information</h2>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
            <div style="margin-bottom: 14px; background: rgba(248, 250, 252, 0.8); padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0; min-width: 0;">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</div>
              <div style="font-weight: 600; font-size: 15px; word-break: break-word; line-height: 1.4;">${escapeHtml(
                name || "—"
              )}</div>
            </div>

            <div style="margin-bottom: 14px; background: rgba(248, 250, 252, 0.8); padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0; min-width: 0;">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Phone</div>
              <div style="font-weight: 600; font-size: 15px; word-break: break-word; line-height: 1.4;">${escapeHtml(
                phone || "—"
              )}</div>
            </div>

            <div style="margin-bottom: 14px; background: rgba(248, 250, 252, 0.8); padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0; min-width: 0;">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Email</div>
              <div style="font-weight: 600; font-size: 15px; word-break: break-word; line-height: 1.4;">${escapeHtml(
                email || "—"
              )}</div>
            </div>

            <div style="margin-bottom: 14px; background: rgba(248, 250, 252, 0.8); padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0; min-width: 0;">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">City</div>
              <div style="font-weight: 600; font-size: 15px; word-break: break-word; line-height: 1.4;">${escapeHtml(
                city || "—"
              )}</div>
            </div>

            <div style="margin-bottom: 14px; background: rgba(248, 250, 252, 0.8); padding: 16px; border-radius: 12px; border: 1px solid #e2e8f0; min-width: 0; grid-column: span 2;">
              <div style="font-size: 12px; color: #64748b; margin-bottom: 6px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Car Details</div>
              <div style="font-weight: 600; font-size: 15px; word-break: break-word; line-height: 1.4;">${escapeHtml(
                carDetail || "—"
              )}</div>
            </div>
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 14px; font-weight: 600; color: #64748b; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Reason for Sale</h2>
          <div style="background: rgba(248, 250, 252, 0.8); border-radius: 12px; padding: 18px; border: 1px solid #e2e8f0; line-height: 1.6; font-size: 15px; min-height: 80px; display: flex; align-items: center;">${escapeHtml(
            reason || "—"
          ).replace(/\n/g, "<br/>")}</div>
        </div>

        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 14px; font-weight: 600; color: #64748b; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Attachments</h2>
          <div style="background: rgba(248, 250, 252, 0.8); border-radius: 12px; padding: 16px; border: 1px solid #e2e8f0;">
            ${
              attachments.length
                ? `<ul style="margin: 0; padding-left: 20px; color: #64748b;">${attachments
                    .map(
                      (a) =>
                        `<li style="margin-bottom: 6px; font-size: 14px;">${escapeHtml(
                          a.filename
                        )}</li>`
                    )
                    .join("")}</ul>`
                : `<p style="margin: 0; color: #64748b; font-style: italic;">No attachments provided.</p>`
            }
          </div>
        </div>

        <div style="display: flex; padding-top: 16px; flex-wrap: wrap;" aria-hidden="true">
          <a href="mailto:${escapeHtml(
            email || ""
          )}" style="display: inline-flex;margin-right: 16px; align-items: center; justify-content: center; padding: 10px 18px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; background: #1e3a8a; color: white; transition: all 0.2s ease;">Reply to Lead</a>
          <a href="tel:${escapeHtml(
            phone || ""
          )}" style="display: inline-flex; align-items: center; justify-content: center; padding: 10px 18px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px; background: transparent; color: #dc2626; border: 2px solid #dc2626;">Call Customer</a>
        </div>
      </div>

      <div style="padding: 20px 28px; background: rgba(248, 250, 252, 0.8); border-top: 1px solid #e2e8f0; display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
        <div style="flex: 1;">
          <div style="font-weight: 700; font-size: 16px; color: #1e3a8a; margin-bottom: 4px;">Yyc Cash for Cars</div>
          <div style="color: #64748b; font-size: 14px;">Buying cars across Calgary and nearby areas</div>
        </div>

        <div style="text-align: right; min-width: 200px;">
          <div style="font-weight: 600; font-size: 15px; margin-bottom: 4px;">Phone: 587-700-9806</div>
          <div style="color: #64748b; font-size: 14px;">Email: info@yyccashforcars.com</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  try {
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.GMAIL_USER}>`,
      to: "Parwez.elham@gmail.com",
      subject: `New contact from ${name} — ${city}`,
      html,
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 }
    );
  }
}
