import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { CtaBanner } from "@/components/CtaBanner";
import {
  strategyServices,
  doneForYouServices,
  learnItYourselfPackages,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "Services | Strategy, Content & Automation for Small Businesses",
  description:
    "Strategy & consulting you can run yourself, or done-for-you content production and automation builds. Content plans, short-form and mid-form video, franchise/multi-location systems, and cost-cutting automation.",
  alternates: { canonical: "/services" },
};

function ServiceBlock({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-tan-dark bg-cream p-8">
      <h3 className="font-display text-xl font-semibold text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {description}
      </p>
      <ul className="mt-5 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PackageBlock({
  title,
  price,
  description,
  items,
}: {
  title: string;
  price: string;
  description: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-tan-dark bg-cream p-8">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl font-semibold text-ink">
          {title}
        </h3>
        <span className="text-sm font-semibold text-accent whitespace-nowrap">
          {price}
        </span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {description}
      </p>
      <ul className="mt-5 space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-soft">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Services
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Three ways to work with me: lead it, learn it, or hand it off.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Every business I work with falls into one of three camps: teams
            that want a clear plan and the confidence to run it, teams that
            want to learn to film and post themselves, and teams that want it
            handled entirely. I built my services around all three.
          </p>
        </Container>
      </section>

      <section className="bg-cream pb-20">
        <Container>
          <SectionHeading
            eyebrow="Option 1 — You lead"
            title="Strategy & Consulting"
            description="I do the thinking, planning, and training. You (and your team) execute with a clear roadmap and ongoing check-ins."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strategyServices.map((s) => (
              <ServiceBlock key={s.title} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-tan/50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Option 2 — I execute"
            title="Done-For-You"
            description="I film, edit, produce, and build the automations directly. You approve the plan, I handle production end-to-end."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {doneForYouServices.map((s) => (
              <ServiceBlock key={s.title} {...s} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-20">
        <Container>
          <SectionHeading
            eyebrow="Option 3 — Learn it yourself"
            title="Teach-Me-How Training & Starter Gear"
            description="For businesses who want to film and post themselves, but need the skills and the right (inexpensive) equipment to start."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {learnItYourselfPackages.map((p) => (
              <PackageBlock key={p.title} {...p} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-tan/50 py-20">
        <Container>
          <SectionHeading
            eyebrow="Not sure which fits?"
            title="Most businesses start with a consultation and blend all three"
            description="A lot of my clients start with Strategy & Consulting to build the plan, add a Teach-Me-How session to get moving, then move some or all of the execution to me as they grow. I'll recommend a starting point on the call — no pressure to buy more than you need."
          />
        </Container>
      </section>

      <CtaBanner
        title="Let's figure out the right starting point for you"
        description="A free 20-minute consultation — no commitment, just a clear next step."
      />
    </>
  );
}
