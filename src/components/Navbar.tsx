"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./Container";
import { Button } from "./Button";
import { navLinks, siteConfig } from "@/lib/site-config";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-tan-dark/60 bg-cream/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-bold tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" variant="primary">
            Book a Consultation
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </Container>

      {open ? (
        <div className="border-t border-tan-dark/60 bg-cream lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink-soft hover:bg-tan hover:text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/contact" variant="primary" className="w-full">
                Book a Consultation
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
