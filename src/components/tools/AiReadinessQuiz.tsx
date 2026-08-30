"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { quizQuestions, tierForScore, maxQuizScore } from "@/lib/readiness-quiz";

export function AiReadinessQuiz() {
  const [answers, setAnswers] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null),
  );

  const answeredCount = answers.filter((a) => a !== null).length;
  const complete = answeredCount === quizQuestions.length;

  const score = useMemo(
    () => answers.reduce<number>((sum, a) => sum + (a ?? 0), 0),
    [answers],
  );

  const tier = tierForScore(score);
  const scorePercent = Math.round((score / maxQuizScore) * 100);

  function setAnswer(qIndex: number, points: number) {
    setAnswers((prev) => {
      const next = [...prev];
      next[qIndex] = points;
      return next;
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-start">
      <div className="space-y-4">
        {quizQuestions.map((q, qIndex) => (
          <div
            key={q.question}
            className="rounded-2xl border border-tan-dark bg-tan/30 p-6"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Question {qIndex + 1} of {quizQuestions.length}
            </p>
            <p className="mt-2 font-display text-base font-semibold text-ink">
              {q.question}
            </p>
            <div className="mt-4 space-y-2">
              {q.options.map((opt) => {
                const selected = answers[qIndex] === opt.points;
                return (
                  <label
                    key={opt.label}
                    className={`flex cursor-pointer items-center gap-3 rounded-lg border px-4 py-2.5 text-sm transition-colors ${
                      selected
                        ? "border-accent bg-accent-soft/50 text-ink"
                        : "border-tan-dark bg-cream text-ink-soft hover:border-accent/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name={`q-${qIndex}`}
                      className="accent-accent"
                      checked={selected}
                      onChange={() => setAnswer(qIndex, opt.points)}
                    />
                    {opt.label}
                  </label>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="sticky top-24 rounded-2xl border-2 border-accent bg-ink p-6 text-cream sm:p-8">
        <h2 className="font-display text-lg font-semibold">Your result</h2>
        <p className="mt-1 text-xs text-cream/60">
          {answeredCount} of {quizQuestions.length} answered
        </p>

        <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-cream/15">
          <div
            className="h-full rounded-full bg-accent transition-all"
            style={{
              width: `${(answeredCount / quizQuestions.length) * 100}%`,
            }}
          />
        </div>

        {complete ? (
          <>
            <div className="mt-6 flex items-end gap-3">
              <p className="font-display text-5xl font-bold text-accent-soft">
                {scorePercent}%
              </p>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-soft">
              {tier.label}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-cream/80">
              {tier.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream/80">
              {tier.recommendation}
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="primary" className="w-full">
                Get my growth roadmap
              </Button>
            </div>
          </>
        ) : (
          <p className="mt-6 text-sm leading-relaxed text-cream/70">
            Answer all {quizQuestions.length} questions to see your AI
            readiness score and personalized recommendation.
          </p>
        )}

        <p className="mt-4 text-center text-xs text-cream/50">
          <Link href="/tools" className="underline hover:text-cream">
            Try another tool
          </Link>
        </p>
      </div>
    </div>
  );
}
