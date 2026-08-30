import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Free Tools | Calculators & Quizzes for Small Businesses",
  description:
    "Free tools for small and medium businesses: an automation savings calculator, a social media growth calculator, and an AI readiness quiz.",
  alternates: { canonical: "/tools" },
};

const tools = [
  {
    href: "/tools/automation-savings-calculator",
    title: "Automation Savings Calculator",
    description:
      "See how many hours and dollars you could save each year by automating repetitive manual tasks.",
    featured: true,
  },
  {
    href: "/tools/social-growth-calculator",
    title: "Social Media Growth Calculator",
    description:
      "Calculate your engagement rate and get a growth score benchmarked against local business accounts.",
    featured: false,
  },
  {
    href: "/tools/ai-readiness-quiz",
    title: "AI Readiness Quiz",
    description:
      "An 8-question quiz that scores how ready your business is for AI and automation, with a personalized recommendation.",
    featured: false,
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Free Tools
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Get a real number before you book a call.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Three free tools built from the same benchmarks we use with
            clients. No signup required.
          </p>
        </Container>
      </section>

      <section className="bg-cream pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className={`group flex flex-col rounded-2xl p-6 transition-colors ${
                  tool.featured
                    ? "border-2 border-accent bg-accent-soft/40 hover:bg-accent-soft/70"
                    : "border border-tan-dark bg-tan/30 hover:bg-tan/60"
                }`}
              >
                {tool.featured ? (
                  <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">
                    Featured
                  </p>
                ) : null}
                <h2 className="mt-2 font-display text-lg font-semibold text-ink">
                  {tool.title}
                </h2>
                <p className="mt-2 text-sm text-ink-soft">
                  {tool.description}
                </p>
                <span
                  className={`mt-4 text-sm font-semibold group-hover:underline ${
                    tool.featured ? "text-accent-dark" : "text-accent"
                  }`}
                >
                  Try it now &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Want us to interpret the results?"
        description="A free consultation is the fastest way to turn any of these numbers into an actual plan."
      />
    </>
  );
}
