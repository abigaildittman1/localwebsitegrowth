export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "content-plan-small-business",
    title: "How to Build a Content Plan Your Small Business Can Actually Keep Up With",
    excerpt:
      "Most content calendars fail because they're built for a marketing team, not a two-person shop. Here's how to build one you'll actually stick to.",
    date: "2026-07-14",
    readMinutes: 6,
    category: "Content Strategy",
    content: [
      "Most content calendars fail for one reason: they're designed for a marketing department, not a business owner who's also answering phones, running the register, and closing up at night.",
      "Before you plan a single post, figure out your real capacity. Not the capacity you wish you had — the hours you can realistically give to content each week without something else slipping.",
      "Start with three to five content pillars: recurring themes tied directly to what you sell and who you serve. A bakery might use 'behind the counter,' 'customer favorites,' and 'new this week.' A home services company might use 'before & after,' 'ask the expert,' and 'team spotlight.'",
      "Batch when you can. Filming four short-form videos in one sitting is almost always more sustainable than filming one video four separate times.",
      "Finally, track what's working every month, not every day. Early on, consistency matters more than optimization — you can't optimize a content plan you haven't given time to work.",
    ],
  },
  {
    slug: "signs-you-need-automation",
    title: "5 Signs Your Business Is Ready for Automation (And 3 Signs It's Not)",
    excerpt:
      "Automation isn't always the right first move. Here's how to tell whether it'll actually save you money — or just add another tool to manage.",
    date: "2026-06-22",
    readMinutes: 5,
    category: "Automation",
    content: [
      "Automation gets sold as a universal fix, but it's not free — it costs setup time, tooling budget, and someone to maintain it. The question isn't 'can this be automated,' it's 'should it be, right now.'",
      "You're ready if: the task is repetitive and rule-based, it happens often enough to matter, a human doing it manually is genuinely expensive, the process is stable enough not to change every month, and you have someone (even part-time) to own the automation once it's live.",
      "You're probably not ready if: the process still changes weekly, the task happens so rarely that manual is cheaper than setup, or you don't yet have clean data flowing through the systems you'd be connecting.",
      "The businesses that get the most out of automation start with one workflow — usually scheduling, review requests, or follow-up emails — prove it out, then expand.",
    ],
  },
  {
    slug: "short-form-vs-podcast",
    title: "Short-Form Video vs. Podcast: Where Should Your Business Start?",
    excerpt:
      "Both work. But they solve different problems, and starting with the wrong one wastes months. Here's how to choose.",
    date: "2026-05-30",
    readMinutes: 7,
    category: "Content Strategy",
    content: [
      "Short-form video (TikTok, Reels, Shorts) is a discovery engine — it's built to put your business in front of people who've never heard of you.",
      "Podcasts are a trust engine — they're built to deepen the relationship with people who already know you exist, and they repurpose beautifully into weeks of short-form clips.",
      "If you need new customers and awareness first, start with short-form. If you already have an audience (email list, regulars, local reputation) and want to build authority and repeat business, a podcast — even a monthly one — punches above its weight.",
      "Many of the businesses we work with eventually do both: short-form to grow reach, podcast to convert that reach into loyalty. But starting with both at once is usually how businesses burn out and quit after six weeks.",
    ],
  },
  {
    slug: "grow-roots-grow-large",
    title: "Grow Roots, Grow Large: A Framework for Small and Medium Business Growth",
    excerpt:
      "Small businesses and medium businesses need fundamentally different things from a growth plan. Here's the framework we use with each.",
    date: "2026-04-18",
    readMinutes: 5,
    category: "Strategy",
    content: [
      "A five-person local business and a fifty-person regional business are not on the same growth curve, even if they're in the same industry.",
      "Small businesses need roots: consistent content, a repeatable process, and enough automation to free up the owner's time without adding complexity they can't maintain.",
      "Medium businesses need scale: a content system that doesn't depend on one person, automation that connects across departments, and a strategy built for a team, not an individual.",
      "The mistake we see most often is a small business trying to run a medium-business playbook (too many channels, too much tooling) or a medium business still running on small-business instincts (no documented process, no automation, everything routed through one inbox).",
      "The right growth plan meets you where you are — roots first, then scale.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
