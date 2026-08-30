"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function tierFor(annualSavings: number) {
  if (annualSavings < 5000) {
    return {
      label: "Quick Win",
      note: "A focused, single-workflow automation (like review requests or scheduling) likely pays for itself within a few months.",
    };
  }
  if (annualSavings < 20000) {
    return {
      label: "High-Impact",
      note: "Enough recurring savings to justify a proper automation build across two or three workflows.",
    };
  }
  return {
    label: "Major Overhaul",
    note: "This is a strong case for a full workflow audit and multi-system automation rollout.",
  };
}

export function AutomationSavingsCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyCost, setHourlyCost] = useState(25);
  const [efficiency, setEfficiency] = useState(65);

  const results = useMemo(() => {
    const weeklyHoursSaved = hoursPerWeek * (efficiency / 100);
    const annualHoursSaved = weeklyHoursSaved * 52;
    const annualDollarsSaved = annualHoursSaved * hourlyCost;
    return {
      weeklyHoursSaved,
      annualHoursSaved,
      annualDollarsSaved,
      tier: tierFor(annualDollarsSaved),
    };
  }, [hoursPerWeek, hourlyCost, efficiency]);

  return (
    <>
      <div className="rounded-2xl border border-tan-dark bg-tan/30 p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-ink">
          Your numbers
        </h2>

        <div className="mt-6 space-y-6">
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="hours" className="text-sm font-medium text-ink">
                Hours/week on repetitive manual tasks
              </label>
              <span className="font-display text-sm font-semibold text-accent-dark">
                {hoursPerWeek} hrs
              </span>
            </div>
            <input
              id="hours"
              type="range"
              min={1}
              max={40}
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="mt-3 w-full accent-accent"
            />
            <p className="mt-1 text-xs text-ink-soft">
              Scheduling, review requests, invoicing, follow-up emails, data
              entry, etc.
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="cost" className="text-sm font-medium text-ink">
                Value of that hour (wage or your own time)
              </label>
              <span className="font-display text-sm font-semibold text-accent-dark">
                {currency.format(hourlyCost)}/hr
              </span>
            </div>
            <input
              id="cost"
              type="range"
              min={10}
              max={150}
              step={5}
              value={hourlyCost}
              onChange={(e) => setHourlyCost(Number(e.target.value))}
              className="mt-3 w-full accent-accent"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="efficiency"
                className="text-sm font-medium text-ink"
              >
                Estimated automation efficiency
              </label>
              <span className="font-display text-sm font-semibold text-accent-dark">
                {efficiency}%
              </span>
            </div>
            <input
              id="efficiency"
              type="range"
              min={20}
              max={90}
              step={5}
              value={efficiency}
              onChange={(e) => setEfficiency(Number(e.target.value))}
              className="mt-3 w-full accent-accent"
            />
            <p className="mt-1 text-xs text-ink-soft">
              How much of that time a well-built automation typically
              eliminates. 65% is a reasonable default for admin tasks.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border-2 border-accent bg-ink p-6 text-cream sm:p-8">
        <h2 className="font-display text-lg font-semibold">
          Your estimated savings
        </h2>

        <div className="mt-6 grid grid-cols-2 gap-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-cream/60">
              Hours saved / week
            </p>
            <p className="mt-1 font-display text-3xl font-bold">
              {results.weeklyHoursSaved.toFixed(1)}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide text-cream/60">
              Hours saved / year
            </p>
            <p className="mt-1 font-display text-3xl font-bold">
              {Math.round(results.annualHoursSaved)}
            </p>
          </div>
        </div>

        <div className="mt-6 rounded-xl bg-cream/10 p-5">
          <p className="text-xs uppercase tracking-wide text-cream/60">
            Estimated annual savings
          </p>
          <p className="mt-1 font-display text-4xl font-bold text-accent-soft">
            {currency.format(results.annualDollarsSaved)}
          </p>
        </div>

        <div className="mt-6 border-t border-cream/15 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wide text-accent-soft">
            {results.tier.label}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">
            {results.tier.note}
          </p>
        </div>

        <div className="mt-6">
          <Button href="/contact" variant="primary" className="w-full">
            Get a real automation plan
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-cream/50">
          Estimate for planning purposes only, based on typical results
          across similar businesses.{" "}
          <Link href="/tools" className="underline hover:text-cream">
            Try another tool
          </Link>
        </p>
      </div>
    </>
  );
}
