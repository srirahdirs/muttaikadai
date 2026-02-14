import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Resend } from "resend";

const TO_EMAIL = "nkarthikeyan@live.com";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, comment } = body;

    if (!name || !email || !comment) {
      return NextResponse.json(
        { success: false, error: "Name, email and comment are required" },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM || "Muttaikadai <onboarding@resend.dev>";

    // Try Resend first (no Gmail auth issues)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: TO_EMAIL,
        subject: `Contact form: ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "—"}</p>
          <p><strong>Address:</strong> ${address || "—"}</p>
          <p><strong>Message:</strong></p>
          <p>${comment.replace(/\n/g, "<br>")}</p>
        `,
      });
      if (error) throw new Error(error.message);
      return NextResponse.json({ success: true, message: "Message sent successfully" });
    }

    // Fallback to SMTP
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

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: TO_EMAIL,
      subject: `Contact form: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nAddress: ${address || "—"}\n\nMessage:\n${comment}`,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Phone:</strong> ${phone || "—"}</p><p><strong>Address:</strong> ${address || "—"}</p><p><strong>Message:</strong></p><p>${comment.replace(/\n/g, "<br>")}</p>`,
    });

    return NextResponse.json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        error: process.env.NODE_ENV === "development"
          ? error.message
          : "Failed to send message. Please try again or email directly.",
      },
      { status: 500 }
    );
  }
}
