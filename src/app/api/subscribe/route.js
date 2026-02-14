import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const TO_EMAIL = "nkarthikeyan@live.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.trim()) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const trimmedEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM || "Muttaikadai <onboarding@resend.dev>";

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: TO_EMAIL,
        subject: "Newsletter signup - Muttaikadai",
        html: `<p><strong>New newsletter subscription</strong></p><p><strong>Email:</strong> ${trimmedEmail}</p><p><strong>Date:</strong> ${new Date().toLocaleString()}</p><p><strong>Source:</strong> Footer CTA</p>`,
      });
      if (error) throw new Error(error.message);
      return NextResponse.json({ success: true, message: "Subscribed successfully" });
    }

    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      return NextResponse.json(
        { success: false, error: "Email not configured. Add RESEND_API_KEY or SMTP credentials to .env" },
        { status: 503 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587", 10),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@muttaikadai.com",
      to: TO_EMAIL,
      subject: "Newsletter signup - Muttaikadai",
      text: `
New newsletter subscription

Email: ${trimmedEmail}
Date: ${new Date().toISOString()}
Source: Footer CTA
      `.trim(),
      html: `
        <p><strong>New newsletter subscription</strong></p>
        <p><strong>Email:</strong> ${trimmedEmail}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
        <p><strong>Source:</strong> Footer CTA</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Subscribed successfully" });
  } catch (error) {
    console.error("Subscribe form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to subscribe. Please try again later.",
      },
      { status: 500 }
    );
  }
}
