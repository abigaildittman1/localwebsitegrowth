import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Prior Work | Case Studies",
  description:
    "See the content plans, video production, and automation builds I've delivered for small businesses, medium businesses, and franchises — with real results.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Prior Work
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Businesses I&apos;ve helped grow roots — and grow large.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            A sample of the content plans, production work, and automation
            builds I&apos;ve delivered. Placeholder results shown below —
            replace with your own client case studies as they&apos;re ready
            to share.
          </p>
        </Container>
      </section>

      <section className="bg-cream pb-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Want results like these for your business?"
        description="Let's talk through what's possible for your content and workflows."
      />
    </>
  );
}
