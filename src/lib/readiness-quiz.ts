export type QuizOption = { label: string; points: number };
export type QuizQuestion = { question: string; options: QuizOption[] };

export const quizQuestions: QuizQuestion[] = [
  {
    question: "Do you have a documented content plan or calendar?",
    options: [
      { label: "No, we post whenever we think of something", points: 0 },
      { label: "A loose idea, but nothing written down", points: 1 },
      { label: "A basic calendar we mostly follow", points: 2 },
      { label: "A documented plan with pillars and a schedule", points: 3 },
    ],
  },
  {
    question: "How consistently does your business post content?",
    options: [
      { label: "Rarely / a few times a month", points: 0 },
      { label: "About once a week", points: 1 },
      { label: "A few times a week", points: 2 },
      { label: "Daily or near-daily, on a set schedule", points: 3 },
    ],
  },
  {
    question:
      "Do you use scheduling or automation tools (social scheduler, email automation, CRM)?",
    options: [
      { label: "No, everything is done manually", points: 0 },
      { label: "One basic tool, used inconsistently", points: 1 },
      { label: "A couple of tools that mostly work well", points: 2 },
      { label: "Multiple connected tools running our workflows", points: 3 },
    ],
  },
  {
    question: "How do you currently handle customer follow-ups and review requests?",
    options: [
      { label: "We don't — it falls through the cracks", points: 0 },
      { label: "Manually, when someone remembers", points: 1 },
      { label: "A simple template we send by hand", points: 2 },
      { label: "Automated, with minimal manual work", points: 3 },
    ],
  },
  {
    question: "Do you track performance on your content or workflows?",
    options: [
      { label: "No, we don't really look at numbers", points: 0 },
      { label: "Occasionally, when something feels off", points: 1 },
      { label: "Monthly check-ins on the basics", points: 2 },
      { label: "Regular reporting we actually use to decide next steps", points: 3 },
    ],
  },
  {
    question: "Has your team used AI tools (like ChatGPT or Claude) in day-to-day work?",
    options: [
      { label: "No, not yet", points: 0 },
      { label: "A little, informally", points: 1 },
      { label: "Yes, for a few regular tasks", points: 2 },
      { label: "Yes, it's built into how we work", points: 3 },
    ],
  },
  {
    question: "How much of your week goes to repetitive manual tasks?",
    options: [
      { label: "A lot — it feels constant", points: 0 },
      { label: "Several hours most weeks", points: 1 },
      { label: "A few hours here and there", points: 2 },
      { label: "Very little — most of it is streamlined", points: 3 },
    ],
  },
  {
    question:
      "Does anyone on your team (even part-time) own content or systems?",
    options: [
      { label: "No, it's whoever has time", points: 0 },
      { label: "Sort of — it's an extra duty for someone", points: 1 },
      { label: "Yes, a clear part-time owner", points: 2 },
      { label: "Yes, a dedicated person or team", points: 3 },
    ],
  },
];

export type ReadinessTier = {
  label: string;
  range: [number, number];
  description: string;
  recommendation: string;
};

export const readinessTiers: ReadinessTier[] = [
  {
    label: "Just Starting",
    range: [0, 6],
    description:
      "Content and workflows are mostly reactive right now — and that's a completely normal place to start.",
    recommendation:
      "Start with a simple content plan and one automation (like review requests). Small, consistent wins build the foundation for everything else.",
  },
  {
    label: "Growing Roots",
    range: [7, 13],
    description:
      "You've got real pieces in place, but they're not fully connected yet.",
    recommendation:
      "A documented content plan and one or two targeted automations would compound quickly from here.",
  },
  {
    label: "Scaling Up",
    range: [14, 19],
    description:
      "Your systems are working — the opportunity now is consistency and connecting the dots across your team.",
    recommendation:
      "This is a great point to formalize processes so growth doesn't depend on one person remembering everything.",
  },
  {
    label: "AI-Native",
    range: [20, 24],
    description:
      "You're already running lean, connected systems — ahead of most small and medium businesses.",
    recommendation:
      "Focus shifts to optimization: refining what's working and scaling it across more of the business.",
  },
];

export function tierForScore(score: number): ReadinessTier {
  return (
    readinessTiers.find((t) => score >= t.range[0] && score <= t.range[1]) ??
    readinessTiers[0]
  );
}

export const maxQuizScore = quizQuestions.length * 3;
