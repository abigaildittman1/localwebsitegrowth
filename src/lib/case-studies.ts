export type CaseStudy = {
  slug: string;
  business: string;
  category: string;
  summary: string;
  services: string[];
  results: { label: string; value: string }[];
};

// Placeholder case studies — swap in real client results once collected.
export const caseStudies: CaseStudy[] = [
  {
    slug: "corner-bakehouse",
    business: "The Corner Bakehouse",
    category: "Restaurant / Bakery",
    summary:
      "A 12-week content plan and weekly short-form filming day turned a dormant Instagram into the bakery's top traffic driver.",
    services: ["Content Strategy", "Short-Form Video", "Content Plan"],
    results: [
      { label: "Avg. reel views", value: "22.4k" },
      { label: "Follower growth", value: "+3,100" },
      { label: "Walk-in lift", value: "~18%" },
    ],
  },
  {
    slug: "okafor-home-services",
    business: "Okafor Home Services",
    category: "Home Services",
    summary:
      "Automated scheduling, review requests, and follow-up emails freed up the owner's week and improved response time to leads.",
    services: ["Automation Build", "Strategy & Consulting"],
    results: [
      { label: "Hours saved / week", value: "8+" },
      { label: "Lead response time", value: "-64%" },
      { label: "5-star reviews", value: "+41" },
    ],
  },
  {
    slug: "bloom-and-board-studio",
    business: "Bloom & Board Studio",
    category: "Retail / Studio",
    summary:
      "A simple, repeatable content calendar replaced scramble-for-post-ideas with a rhythm the two-person team could actually keep up.",
    services: ["Content Plan", "Mid-Form Video"],
    results: [
      { label: "Posting consistency", value: "3x/week" },
      { label: "Engagement rate", value: "+2.6x" },
      { label: "New customers / mo.", value: "+30" },
    ],
  },
  {
    slug: "sunrise-donuts-franchise",
    business: "Sunrise Donuts (3 locations)",
    category: "Franchise / Multi-Location",
    summary:
      "A shared short-form content playbook let three franchise locations post consistent, on-brand videos every week — without a corporate marketing team.",
    services: ["Multi-Location Content", "Short-Form Video", "Strategy & Consulting"],
    results: [
      { label: "Locations onboarded", value: "3" },
      { label: "Videos per week", value: "9" },
      { label: "Combined follower growth", value: "+6,800" },
    ],
  },
  {
    slug: "reyes-family-dental",
    business: "Reyes Family Dental",
    category: "Healthcare",
    summary:
      "An honest automation audit identified which workflows were worth automating now versus later, avoiding wasted tooling spend.",
    services: ["Automation Audit", "Strategy & Consulting"],
    results: [
      { label: "Tools consolidated", value: "5 to 2" },
      { label: "Admin hours saved", value: "6/week" },
      { label: "No-show rate", value: "-22%" },
    ],
  },
  {
    slug: "brooks-outdoor-fitness",
    business: "Brooks Outdoor Fitness",
    category: "Fitness",
    summary:
      "A weekly TikTok + Instagram rhythm, built around class highlights and member wins, made social the studio's second-largest booking channel.",
    services: ["Short-Form Video", "Content Plan"],
    results: [
      { label: "Bookings from social", value: "2nd largest channel" },
      { label: "Follower growth", value: "+5,400" },
      { label: "Video output", value: "4/week" },
    ],
  },
];
