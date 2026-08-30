export type Service = {
  title: string;
  description: string;
  items: string[];
};

export type Package = {
  title: string;
  price: string;
  description: string;
  items: string[];
};

export const strategyServices: Service[] = [
  {
    title: "Content Strategy & Planning",
    description:
      "We map out what to post, when, and why — a content plan built around your actual capacity, not an influencer's schedule.",
    items: [
      "Content pillars & messaging",
      "Monthly/quarterly content calendars",
      "Platform strategy (TikTok, Instagram, YouTube Shorts)",
      "Performance tracking & reporting",
    ],
  },
  {
    title: "Automation Consulting",
    description:
      "An honest audit of where automation will actually save you time and money — and where it's not worth it yet.",
    items: [
      "Workflow & tooling audit",
      "Automation readiness assessment",
      "Cost-saving automation roadmap",
      "Vendor & tool recommendations",
    ],
  },
  {
    title: "Growth Roadmapping",
    description:
      "For small businesses growing roots and medium businesses scaling up — a roadmap sized to where you are today.",
    items: [
      "Goal setting & benchmarking",
      "Team training & handoff",
      "Quarterly strategy check-ins",
    ],
  },
  {
    title: "Multi-Location & Franchise Systems",
    description:
      "A content and automation system built to stay on-brand across every location, while still feeling locally relevant in each one.",
    items: [
      "Brand-consistent content playbook",
      "Per-location content adaptation",
      "Shared automation across locations",
      "Franchisee onboarding & training",
    ],
  },
];

export const doneForYouServices: Service[] = [
  {
    title: "Short-Form Content",
    description:
      "TikTok- and Reels-ready videos filmed and edited for you, built around the content plan we design together.",
    items: [
      "On-site or remote filming",
      "Editing, captions & sound design",
      "Posting & scheduling",
    ],
  },
  {
    title: "Mid-Form Content",
    description:
      "YouTube-style and long-form social videos that go deeper — behind-the-scenes, tutorials, and customer stories.",
    items: [
      "Scripting & storyboarding",
      "Filming & production",
      "Editing & thumbnails",
    ],
  },
  {
    title: "Automation Implementation",
    description:
      "We build and install the automations we recommend — scheduling, review requests, follow-ups, reporting — done, not just advised.",
    items: [
      "Automation build & setup",
      "Integration with existing tools",
      "Documentation & training",
    ],
  },
];

// A third option for businesses who want to learn to film and produce
// content themselves, plus the gear to actually do it.
export const learnItYourselfPackages: Package[] = [
  {
    title: "Teach-Me-How Training",
    price: "Starting at $350",
    description:
      "A hands-on workshop for you or your team — filming, editing, and posting, taught on your own equipment so it sticks after we leave.",
    items: [
      "1:1 or small-team hands-on session",
      "Filming, editing & posting basics",
      "A simple playbook/SOP to keep afterward",
      "30-day follow-up check-in",
    ],
  },
  {
    title: "Basic Mic & Gear Package",
    price: "Starting at $150",
    description:
      "A curated starter kit sized for short-form and mid-form video recording on a small-business budget — no guesswork on what to buy.",
    items: [
      "Lavalier or shotgun mic",
      "Phone mount & basic lighting",
      "Setup walkthrough included",
      "Recommended add-ons for growing needs",
    ],
  },
];
