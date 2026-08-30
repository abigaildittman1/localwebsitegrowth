import Link from "next/link";
import { Container } from "./Container";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl font-bold">{siteConfig.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/70">
            {siteConfig.tagline} AI consulting, content, and automation for
            small and medium businesses in {siteConfig.location.city},{" "}
            {siteConfig.location.region} and beyond.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-accent-soft hover:text-cream"
            >
              Instagram
            </a>
            <a
              href={siteConfig.contact.tiktok}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-accent-soft hover:text-cream"
            >
              TikTok
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/80 hover:text-cream"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Free Tools
          </p>
          <ul className="mt-4 space-y-3">
            <li>
              <Link
                href="/tools/automation-savings-calculator"
                className="text-sm text-cream/80 hover:text-cream"
              >
                Automation Savings Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/tools/social-growth-calculator"
                className="text-sm text-cream/80 hover:text-cream"
              >
                Social Growth Calculator
              </Link>
            </li>
            <li>
              <Link
                href="/tools/ai-readiness-quiz"
                className="text-sm text-cream/80 hover:text-cream"
              >
                AI Readiness Quiz
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
            Get in touch
          </p>
          <ul className="mt-4 space-y-3 text-sm text-cream/80">
            <li>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="hover:text-cream"
              >
                {siteConfig.contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.contact.phone.replace(/[^\d+]/g, "")}`}
                className="hover:text-cream"
              >
                {siteConfig.contact.phone}
              </a>
            </li>
            <li>{siteConfig.location.areaServed}</li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-cream/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-2 text-xs text-cream/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>Huntsville, TX &middot; Serving small &amp; medium businesses</p>
        </Container>
      </div>
    </footer>
  );
}
