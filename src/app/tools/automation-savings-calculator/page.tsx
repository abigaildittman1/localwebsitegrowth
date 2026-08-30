import type { Metadata } from "next";
import { ToolHero, ToolShell } from "@/components/tools/ToolHero";
import { AutomationSavingsCalculator } from "@/components/tools/AutomationSavingsCalculator";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Automation Savings Calculator | Free Tool",
  description:
    "See how many hours and dollars business automation could save you each year. Free calculator — no signup required.",
  alternates: { canonical: "/tools/automation-savings-calculator" },
};

export default function AutomationSavingsCalculatorPage() {
  return (
    <>
      <ToolHero
        eyebrow="Free Tool"
        title="Automation Savings Calculator"
        description="Estimate how many hours and dollars you could save each year by automating repetitive manual tasks — scheduling, review requests, invoicing, follow-ups, and more."
      />
      <ToolShell>
        <AutomationSavingsCalculator />
      </ToolShell>
      <CtaBanner
        eyebrow="Like what you see?"
        title="Turn this estimate into a real automation plan"
        description="We'll audit your actual workflows and tell you exactly what's worth automating first."
      />
    </>
  );
}
