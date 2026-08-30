import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const styles = {
  primary:
    "bg-accent text-cream hover:bg-accent-dark border border-accent hover:border-accent-dark",
  secondary:
    "bg-transparent text-ink border border-ink hover:bg-ink hover:text-cream",
  ghost:
    "bg-transparent text-ink border border-transparent hover:border-ink/30",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const isExternal = href.startsWith("http");
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-150",
    styles[variant],
    className,
  );

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
