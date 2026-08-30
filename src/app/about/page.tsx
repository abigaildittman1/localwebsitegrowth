import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Us",
  description: `The story behind ${siteConfig.name} — from local business content creator to AI consulting for small and medium businesses.`,
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
              We started by showcasing local businesses. Now we help them
              grow.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              {siteConfig.name} began as {siteConfig.founder}&apos;s
              short-form video project — walking into local restaurants,
              shops, and services around {siteConfig.location.city} and
              showing people why they were worth visiting. Along the way, the
              same question kept coming up from the business owners
              themselves: <em>&ldquo;How do we do what you just did, for
              us?&rdquo;</em>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">
              That question became this business. We now help small and
              medium businesses build the content plans, produce the video
              and podcast content, and put in place the automations that let
              them grow — without needing a marketing department to do it.
            </p>
          </div>
          <div className="aspect-square w-full rounded-3xl border border-tan-dark bg-tan p-2">
            <div className="flex h-full w-full flex-col justify-end rounded-2xl bg-ink p-8 text-cream">
              <p className="font-display text-2xl font-semibold">
                &ldquo;{siteConfig.tagline}&rdquo;
              </p>
              <p className="mt-2 text-sm text-cream/70">
                {siteConfig.founder}, Founder
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-tan/50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Our approach"
            title="Grow roots. Grow large."
            description="Small businesses need consistency and a system they can maintain. Medium businesses need that same system to scale across a team. We meet you at whichever stage you're in."
          />
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
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
