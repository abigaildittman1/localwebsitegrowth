import type { Metadata } from "next";
import { ToolHero } from "@/components/tools/ToolHero";
import { AiReadinessQuiz } from "@/components/tools/AiReadinessQuiz";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "AI Readiness Quiz | Free 8-Question Assessment",
  description:
    "Take our free 8-question AI readiness quiz to see how prepared your business is for AI and automation, plus a personalized recommendation.",
  alternates: { canonical: "/tools/ai-readiness-quiz" },
};

export default function AiReadinessQuizPage() {
  return (
    <>
      <ToolHero
        eyebrow="Free Tool"
        title="AI Readiness Quiz"
        description="8 quick questions on your content, workflows, and tooling. Get a maturity score — Just Starting, Growing Roots, Scaling Up, or AI-Native — plus a personalized recommendation."
      />
      <section className="bg-cream py-12">
        <Container>
          <AiReadinessQuiz />
        </Container>
      </section>
      <CtaBanner
        eyebrow="Ready for the next step?"
        title="Turn your score into a growth roadmap"
        description="We'll take your results and build a plan sized to exactly where your business is today."
      />
    </>
  );
}
