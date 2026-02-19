/**
 * Email utility - sends emails via Resend or SMTP (nodemailer)
 * Used for order notifications, contact form, etc.
 */
import nodemailer from "nodemailer";
import { Resend } from "resend";

/**
 * Send an email using Resend or SMTP
 * @param {Object} options - { to, subject, html, text }
 * @returns {Promise<boolean>} - true if sent successfully
 */
export async function sendEmail({ to, subject, html, text }) {
  const fromEmail = process.env.RESEND_FROM || "Muttaikadai <onboarding@resend.dev>";
  const fromSmtp = process.env.SMTP_FROM || process.env.SMTP_USER || "noreply@muttaikadai.com";

  try {
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: fromEmail,
        to: Array.isArray(to) ? to : [to],
        subject,
        html: html || text?.replace(/\n/g, "<br>"),
      });
      if (error) throw new Error(error.message);
      return true;
    }

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
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
        from: fromSmtp,
        to: Array.isArray(to) ? to.join(", ") : to,
        subject,
        html: html || text?.replace(/\n/g, "<br>"),
        text,
      });
      return true;
    }

    console.warn("Email not configured. Add RESEND_API_KEY or SMTP credentials to .env");
    return false;
  } catch (error) {
    console.error("Email send error:", error);
    return false;
  }
}
