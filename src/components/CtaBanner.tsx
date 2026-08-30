import { Container } from "./Container";
import { Button } from "./Button";

export function CtaBanner({
  eyebrow = "Ready to grow?",
  title,
  description,
  primaryLabel = "Book a Free Consultation",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-ink py-20">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-soft">
            {eyebrow}
          </p>
          <h2 className="font-display max-w-2xl text-3xl font-semibold text-cream sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-cream/75">
            {description}
          </p>
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
            <Button href={primaryHref} variant="primary">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button
                href={secondaryHref}
                variant="secondary"
                className="border-cream/40 text-cream hover:bg-cream hover:text-ink"
              >
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
