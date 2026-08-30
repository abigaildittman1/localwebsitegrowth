import type { Metadata } from "next";
import { ToolHero } from "@/components/tools/ToolHero";
import { AutomationReadinessQuiz } from "@/components/tools/AutomationReadinessQuiz";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Automation Readiness Quiz | Free 8-Question Assessment",
  description:
    "Take my free 8-question automation readiness quiz to see how prepared your business is for automation, plus a personalized recommendation.",
  alternates: { canonical: "/tools/automation-readiness-quiz" },
};

export default function AutomationReadinessQuizPage() {
  return (
    <>
      <ToolHero
        eyebrow="Free Tool"
        title="Automation Readiness Quiz"
        description="8 quick questions on your content, workflows, and tooling. Get a maturity score — Just Starting, Growing Roots, Scaling Up, or Fully Automated — plus a personalized recommendation."
      />
      <section className="bg-cream py-12">
        <Container>
          <AutomationReadinessQuiz />
        </Container>
      </section>
      <CtaBanner
        eyebrow="Ready for the next step?"
        title="Turn your score into a growth roadmap"
        description="I'll take your results and build a plan sized to exactly where your business is today."
      />
    </>
  );
}
