import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact | Book a Free Consultation",
  description:
    "Book a free consultation with That One Local Girl. Tell me about your business and I'll follow up within one business day.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="bg-cream py-16 sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Let&apos;s build your plan.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Tell me a bit about your business and what you&apos;re looking
            for. I&apos;ll follow up within one business day to schedule a
            free 20-minute consultation.
          </p>

          <div className="mt-10 space-y-4 border-t border-tan-dark pt-8">
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="text-sm font-semibold text-ink hover:text-accent"
              >
                {siteConfig.contact.email}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Phone
              </p>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                className="text-sm font-semibold text-ink hover:text-accent"
              >
                {siteConfig.contact.phone}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-ink-soft">
                Serving
              </p>
              <p className="text-sm font-semibold text-ink">
                {siteConfig.location.areaServed}
              </p>
            </div>
          </div>
        </div>

        <ContactForm />
      </Container>
    </section>
  );
}
