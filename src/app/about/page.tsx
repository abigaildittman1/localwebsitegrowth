import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story behind ${siteConfig.name} — from local business content creator to AI consulting for small businesses, medium businesses, and franchises.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    title: "Honest over impressive",
    description:
      "If automation or a new platform isn't worth it yet, we'll say so — even if it means a smaller invoice.",
  },
  {
    title: "Built for real capacity",
    description:
      "Plans are sized to the team that has to run them, not to what looks good in a proposal.",
  },
  {
    title: "Roots before scale",
    description:
      "Consistency and a working system come before adding more channels, tools, or complexity.",
  },
  {
    title: "Local business, first-hand",
    description:
      "We've spent years inside local businesses, not just advising them from the outside.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 sm:pt-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              About Us
            </p>
            <h1 className="font-display text-4xl font-bold leading-tight text-ink sm:text-5xl">
              It started in a classroom. Now we help businesses grow.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {siteConfig.name} started as a marketing class project —
              {siteConfig.founder} was asked to build a real audience for a
              real business. What began as an assignment turned into short
              videos walking into local restaurants, shops, and services
              around {siteConfig.location.city} and showing people why they
              were worth visiting.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              The follower count kept climbing — and so did a different kind
              of question from the business owners themselves:{" "}
              <em>
                &ldquo;How do we do what you just did, for us?&rdquo;
              </em>{" "}
              That question became this business. We now help small
              businesses, medium businesses, and franchise locations build
              the content plans, produce the short-form and mid-form video
              content, and put in place the automations that let them grow —
              without needing a marketing department to do it.
            </p>
          </div>
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-tan-dark bg-tan p-2">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/abigail-interview.jpg"
                alt={`${siteConfig.founder} filming an on-location interview for ${siteConfig.name}`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent p-8 pt-20">
                <p className="font-display text-2xl font-semibold text-cream">
                  &ldquo;{siteConfig.motto}&rdquo;
                </p>
                <p className="mt-2 text-sm text-cream/70">
                  {siteConfig.founder}, Founder
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream pb-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Our philosophy"
            title={siteConfig.motto}
            description="Influence isn't reserved for a handful of online personalities. We believe every business — no matter how small, how established, or how camera-shy the owner — already has a story worth telling. You don't need to be a celebrity to build real reach. You need consistency, a plan, and someone willing to hit record."
          />
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-tan-dark bg-tan p-2">
            <div className="relative h-full w-full overflow-hidden rounded-2xl">
              <Image
                src="/images/coyote-network-crew.jpg"
                alt={`${siteConfig.founder} with the Coyote Network student broadcast crew`}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tan/50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Grow roots. Grow large."
            description="Small businesses need consistency and a system they can maintain. Medium businesses need that same system to scale across a team. Franchises need it to stay consistent across locations. We meet you at whichever stage you're in."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl border border-tan-dark bg-cream p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Small businesses
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                Grow roots
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A steady content rhythm, a handful of the right automations,
                and a plan sized to a small team — so growth doesn&apos;t
                depend on one overworked owner.
              </p>
            </div>
            <div className="rounded-2xl border border-tan-dark bg-cream p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Medium businesses
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                Grow large
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                A content and automation system that works across a team,
                not just a founder — built to scale without losing what made
                the business work in the first place.
              </p>
            </div>
            <div className="rounded-2xl border border-tan-dark bg-cream p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                Franchises
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">
                Stay consistent
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                One brand playbook, adapted for every location — so each
                franchise still feels like a local business, not a copy-paste
                feed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container>
          <SectionHeading eyebrow="What we value" title="How we work" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-tan-dark bg-tan/30 p-6"
              >
                <h3 className="font-display text-base font-semibold text-ink">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Want to see if we're the right fit?"
        description="A free 20-minute consultation is the easiest way to find out."
      />
    </>
  );
}
