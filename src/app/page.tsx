import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { caseStudies } from "@/lib/case-studies";
import { blogPosts } from "@/lib/blog";
import { strategyServices, doneForYouServices } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "AI Consulting, Content & Automation for Small Businesses & Franchises",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="overflow-hidden bg-cream pt-16 pb-20 sm:pt-24 sm:pb-28">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-accent-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-accent-dark">
              AI Consulting for Local &amp; Growing Businesses
            </p>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-ink sm:text-5xl lg:text-6xl">
              We help small businesses{" "}
              <span className="text-accent">grow roots</span> — and medium
              businesses <span className="text-accent">grow large</span>.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              {siteConfig.name} builds content plans, produces short-form and
              mid-form video content, and cuts costs with automation — so you
              spend less time guessing and more time growing, whether
              you&apos;re a single location or a growing franchise.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact" variant="primary">
                Book a Free Consultation
              </Button>
              <Button href="/tools" variant="secondary">
                Try a Free Tool
              </Button>
            </div>
            <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-tan-dark pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft">
                  Businesses helped
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-ink">
                  25+
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft">
                  Avg. hours saved / wk
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-ink">
                  6-8
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wide text-ink-soft">
                  Content pieces / mo.
                </dt>
                <dd className="mt-1 font-display text-2xl font-bold text-ink">
                  1,000+
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] w-full rounded-3xl border border-tan-dark bg-tan p-2">
              <div className="flex h-full w-full flex-col justify-between rounded-2xl bg-ink p-8 text-cream">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-accent-soft">
                    This week&apos;s content plan
                  </p>
                  <ul className="mt-4 space-y-3 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Mon &mdash; Behind the counter (Reel)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Wed &mdash; Customer favorite (TikTok)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Fri &mdash; Weekly recap (Mid-form)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Automated review request &mdash; live
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl bg-cream/10 p-4">
                  <p className="text-xs text-cream/70">Automation saving</p>
                  <p className="font-display text-3xl font-bold">
                    $1,240<span className="text-base font-normal">/mo</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services split */}
      <section className="bg-tan/50 py-20">
        <Container>
          <SectionHeading
            eyebrow="How we work"
            title="Strategy you lead, or done-for-you execution"
            description="Some businesses want a roadmap and the confidence to run it themselves. Others want it handled. We do both — pick what fits."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-tan-dark bg-cream p-8">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                You lead
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-ink">
                Strategy &amp; Consulting
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                We build the content plan and automation roadmap, train your
                team, and hand you a system you can run.
              </p>
              <ul className="mt-6 space-y-2">
                {strategyServices.map((s) => (
                  <li key={s.title} className="text-sm text-ink-soft">
                    &bull; {s.title}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink bg-ink p-8 text-cream">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
                We execute
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold">
                Done-For-You
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/75">
                We film, edit, produce, and build the automations directly —
                you approve, we handle the rest.
              </p>
              <ul className="mt-6 space-y-2">
                {doneForYouServices.map((s) => (
                  <li key={s.title} className="text-sm text-cream/80">
                    &bull; {s.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button href="/services" variant="ghost">
              See full service breakdown &rarr;
            </Button>
          </div>
        </Container>
      </section>

      {/* Tools teaser */}
      <section className="bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Free Tools"
            title="Get a real number before you book a call"
            description="Three free calculators built from the same benchmarks we use with clients."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Link
              href="/tools/automation-savings-calculator"
              className="group flex flex-col rounded-2xl border-2 border-accent bg-accent-soft/40 p-6 transition-colors hover:bg-accent-soft/70"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-accent-dark">
                Featured
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">
                Automation Savings Calculator
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                See how many hours and dollars automation could save your
                business each year.
              </p>
              <span className="mt-4 text-sm font-semibold text-accent-dark group-hover:underline">
                Calculate your savings &rarr;
              </span>
            </Link>

            <Link
              href="/tools/social-growth-calculator"
              className="group flex flex-col rounded-2xl border border-tan-dark bg-tan/40 p-6 transition-colors hover:bg-tan/70"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                Social Growth Calculator
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                Score your engagement rate and benchmark it against similar
                local business accounts.
              </p>
              <span className="mt-4 text-sm font-semibold text-accent group-hover:underline">
                Check your score &rarr;
              </span>
            </Link>

            <Link
              href="/tools/ai-readiness-quiz"
              className="group flex flex-col rounded-2xl border border-tan-dark bg-tan/40 p-6 transition-colors hover:bg-tan/70"
            >
              <h3 className="font-display text-lg font-semibold text-ink">
                AI Readiness Quiz
              </h3>
              <p className="mt-2 text-sm text-ink-soft">
                An 8-question quiz that scores how ready your business is for
                AI and automation.
              </p>
              <span className="mt-4 text-sm font-semibold text-accent group-hover:underline">
                Take the quiz &rarr;
              </span>
            </Link>
          </div>
        </Container>
      </section>

      <Testimonials />

      {/* Prior work preview */}
      <section className="bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Prior Work"
            title="A few businesses we've grown"
            description="From bakeries to home services to multi-location franchises — see the plan and the results."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.slice(0, 3).map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/work" variant="ghost">
              View all prior work &rarr;
            </Button>
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Not sure where to start? Let's talk it through."
        description="A free 20-minute consultation — we'll look at your content, your workflows, and tell you honestly where the biggest opportunity is."
        secondaryLabel="Browse services"
        secondaryHref="/services"
      />

      {/* Blog preview */}
      <section className="bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="From the Blog"
            title="Practical guides on content & automation"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.slice(0, 4).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-tan-dark bg-tan/30 p-5 transition-colors hover:bg-tan/60"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {post.category}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold leading-snug text-ink group-hover:underline">
                  {post.title}
                </h3>
                <p className="mt-2 text-xs text-ink-soft">
                  {post.readMinutes} min read
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button href="/blog" variant="ghost">
              Read all posts &rarr;
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
