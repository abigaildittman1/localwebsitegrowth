import { NextResponse } from "next/server";

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

  // TODO: wire this up to a real email service before launch, e.g.:
  //   - Resend (https://resend.com) with the `resend` npm package, or
  //   - Formspree / Web3Forms if you'd rather skip a backend integration.
  // For now, submissions are logged server-side only.
  console.log("New contact form submission:", {
    name,
    business,
    email,
    phone: body.phone,
    interest,
    message,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
