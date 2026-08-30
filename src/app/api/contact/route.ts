import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

type ContactPayload = {
  name: string;
  business: string;
  email: string;
  phone?: string;
  interest: string;
  message: string;
  // honeypot field — bots fill it, humans never see it
  company_website?: string;
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  if (body.company_website) {
    // Honeypot tripped — silently pretend success so bots move on.
    return NextResponse.json({ ok: true });
  }

  const { name, business, email, interest, message } = body;

  if (!name || !business || !email || !interest || !message) {
    return NextResponse.json(
      { error: "Please fill out all required fields." },
      { status: 400 },
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const submission = {
    name,
    business,
    email,
    phone: body.phone,
    interest,
    message,
    receivedAt: new Date().toISOString(),
  };

  // Sends via Resend (https://resend.com) once RESEND_API_KEY is set in the
  // environment. Until then, submissions are only logged server-side so the
  // form still works end-to-end during development.
  //
  // Setup: create a free Resend account, verify your sending domain (or use
  // the default onboarding@resend.dev sender for testing), then set:
  //   RESEND_API_KEY=your_key
  //   RESEND_FROM_EMAIL=hello@thatonelocalgirl.com  (optional, once domain is verified)
  //   RESEND_TO_EMAIL=hello@thatonelocalgirl.com    (optional, defaults below)
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev",
        to: process.env.RESEND_TO_EMAIL ?? siteConfig.contact.email,
        replyTo: email,
        subject: `New consultation request from ${business}`,
        html: `
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Business:</strong> ${escapeHtml(business)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(body.phone || "—")}</p>
          <p><strong>Interested in:</strong> ${escapeHtml(interest)}</p>
          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
        `,
      });
    } catch (err) {
      console.error("Failed to send contact email via Resend:", err);
      console.log("New contact form submission (email send failed):", submission);
      return NextResponse.json(
        { error: "Something went wrong sending your message. Please try again." },
        { status: 502 },
      );
    }
  } else {
    console.log("New contact form submission:", submission);
  }

  return NextResponse.json({ ok: true });
}
