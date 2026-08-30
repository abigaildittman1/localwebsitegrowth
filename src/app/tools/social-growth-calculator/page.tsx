import type { Metadata } from "next";
import { ToolHero, ToolShell } from "@/components/tools/ToolHero";
import { SocialGrowthCalculator } from "@/components/tools/SocialGrowthCalculator";
import { CtaBanner } from "@/components/CtaBanner";

export const metadata: Metadata = {
  title: "Social Media Growth Calculator | Free Engagement Rate Tool",
  description:
    "Calculate your Instagram or TikTok engagement rate and get a growth score benchmarked against local business accounts. Free — no signup required.",
  alternates: { canonical: "/tools/social-growth-calculator" },
};

export default function SocialGrowthCalculatorPage() {
  return (
    <>
      <ToolHero
        eyebrow="Free Tool"
        title="Social Media Growth Calculator"
        description="Enter your follower count, average engagement, and posting frequency to see your engagement rate and a growth score benchmarked against similar local business accounts."
      />
      <ToolShell>
        <SocialGrowthCalculator />
      </ToolShell>
      <CtaBanner
        eyebrow="Want a better score?"
        title="Let's build a content plan around this"
        description="A documented content plan is usually the fastest way to move engagement and posting consistency."
      />
    </>
  );
}
