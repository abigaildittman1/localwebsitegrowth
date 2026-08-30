import { ReactNode } from "react";
import { Container } from "@/components/Container";

export function ToolHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-cream pt-16 pb-4 sm:pt-24">
      <Container>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
          {description}
        </p>
      </Container>
    </section>
  );
}

export function ToolShell({ children }: { children: ReactNode }) {
  return (
    <section className="bg-cream py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">{children}</div>
      </Container>
    </section>
  );
}
