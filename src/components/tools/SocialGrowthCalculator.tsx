"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";

function tierFor(score: number) {
  if (score < 40) {
    return {
      label: "Needs Work",
      note: "Engagement and posting rhythm both have room to grow. A content plan built around your actual capacity usually moves this fastest.",
    };
  }
  if (score < 70) {
    return {
      label: "Solid Foundation",
      note: "You've got real traction. Tightening posting consistency or content pillars is usually the next lever.",
    };
  }
  return {
    label: "Strong Growth Engine",
    note: "This is genuinely strong performance for a local business account. Focus now shifts to converting followers into customers.",
  };
}

export function SocialGrowthCalculator() {
  const [followers, setFollowers] = useState(2500);
  const [avgLikes, setAvgLikes] = useState(120);
  const [avgComments, setAvgComments] = useState(8);
  const [postsPerWeek, setPostsPerWeek] = useState(3);

  const results = useMemo(() => {
    const engagementRate =
      followers > 0 ? ((avgLikes + avgComments) / followers) * 100 : 0;
    const engagementScore = Math.min(100, (engagementRate / 6) * 100);
    const frequencyScore = Math.min(100, (postsPerWeek / 5) * 100);
    const score = Math.round(engagementScore * 0.7 + frequencyScore * 0.3);
    return { engagementRate, score, tier: tierFor(score) };
  }, [followers, avgLikes, avgComments, postsPerWeek]);

  return (
    <>
      <div className="rounded-2xl border border-tan-dark bg-tan/30 p-6 sm:p-8">
        <h2 className="font-display text-lg font-semibold text-ink">
          Your account
        </h2>

        <div className="mt-6 space-y-5">
          <Field
            label="Follower count"
            value={followers}
            onChange={setFollowers}
            min={0}
            max={100000}
            step={100}
          />
          <Field
            label="Avg. likes per post"
            value={avgLikes}
            onChange={setAvgLikes}
            min={0}
            max={5000}
            step={10}
          />
          <Field
            label="Avg. comments per post"
            value={avgComments}
            onChange={setAvgComments}
            min={0}
            max={500}
            step={1}
          />
          <Field
            label="Posts per week"
            value={postsPerWeek}
            onChange={setPostsPerWeek}
            min={0}
            max={14}
            step={1}
          />
        </div>
      </div>

      <div className="rounded-2xl border-2 border-accent bg-ink p-6 text-cream sm:p-8">
        <h2 className="font-display text-lg font-semibold">Your score</h2>

        <div className="mt-6 flex items-end gap-3">
          <p className="font-display text-6xl font-bold text-accent-soft">
            {results.score}
          </p>
          <p className="pb-2 text-sm text-cream/60">/ 100</p>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 border-t border-cream/15 pt-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-cream/60">
              Engagement rate
            </p>
            <p className="mt-1 font-display text-2xl font-bold">
              {results.engagementRate.toFixed(2)}%
            </p>
            <p className="mt-1 text-xs text-cream/50">
              Local business accounts typically land between 1% (low) and 6%+
              (excellent).
            </p>
          </div>
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
            Get a content plan
          </Button>
        </div>

        <p className="mt-4 text-center text-xs text-cream/50">
          Estimate for planning purposes only, based on typical local
          business benchmarks.{" "}
          <Link href="/tools" className="underline hover:text-cream">
            Try another tool
          </Link>
        </p>
      </div>
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  min,
  max,
  step,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step: number;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">{label}</label>
      <input
        type="number"
        inputMode="numeric"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value) || 0)}
        className="mt-1.5 w-full rounded-lg border border-tan-dark bg-cream px-4 py-2.5 text-sm text-ink outline-none focus:border-accent"
      />
    </div>
  );
}
