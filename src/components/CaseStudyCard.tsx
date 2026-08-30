import { CaseStudy } from "@/lib/case-studies";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-tan-dark bg-cream p-6">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">
        {study.category}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink">
        {study.business}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">
        {study.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {study.services.map((s) => (
          <span
            key={s}
            className="rounded-full bg-tan px-3 py-1 text-xs font-medium text-ink-soft"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-tan-dark/60 pt-4">
        {study.results.map((r) => (
          <div key={r.label}>
            <p className="font-display text-lg font-bold text-ink">
              {r.value}
            </p>
            <p className="text-[11px] leading-tight text-ink-soft">
              {r.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
