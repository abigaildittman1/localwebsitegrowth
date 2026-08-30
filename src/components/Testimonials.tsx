import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";
import { StarRating } from "./StarRating";
import { testimonials } from "@/lib/testimonials";

export function Testimonials() {
  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: testimonials.map((t, i) => ({
      "@type": "Review",
      position: i + 1,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      itemReviewed: { "@type": "Organization", name: t.business },
    })),
  };

  return (
    <section className="bg-tan py-20">
      <Container>
        <SectionHeading
          eyebrow="Client Results"
          title="Real businesses, real growth"
          description="A few of the small businesses, medium businesses, and franchises we've helped grow roots — and grow large. (Placeholder testimonials shown — swap in your own client quotes anytime.)"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col justify-between rounded-2xl border border-tan-dark bg-cream p-6 shadow-sm"
            >
              <div>
                <StarRating rating={t.rating} />
                <blockquote className="mt-4 text-sm leading-relaxed text-ink-soft">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-tan-dark/60 pt-4">
                <p className="text-sm font-semibold text-ink">{t.name}</p>
                <p className="text-xs text-ink-soft">{t.business}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent">
                  {t.category}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
    </section>
  );
}
