import clsx from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p
          className={clsx(
            "mb-3 text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-accent-soft" : "text-accent",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={clsx(
          "font-display text-3xl font-semibold leading-tight sm:text-4xl",
          light ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={clsx(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-cream/80" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
