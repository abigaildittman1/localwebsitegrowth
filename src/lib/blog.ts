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
    slug: "franchise-content-consistency",
    title: "How Franchise Locations Can Stay On-Brand Without Losing Their Local Voice",
    excerpt:
      "Multi-location brands face a real tension: consistent enough to look like one company, local enough to still feel like a neighborhood business. Here's how to hold both.",
    date: "2026-05-30",
    readMinutes: 6,
    category: "Franchise & Multi-Location",
    content: [
      "The biggest content mistake franchises make is picking one extreme: either every location posts whatever it wants (and the brand looks scattered), or corporate mandates identical content everywhere (and every location feels like a chain, not a neighbor).",
      "The fix is a shared playbook, not a shared feed. Give every location the same content pillars, the same visual style, and the same posting rhythm — but let the actual subject matter (which employee, which regular customer, which local event) come from that location.",
      "Assign one point person per location responsible for filming, even part-time. Content that depends on 'whoever has time that week' is the first thing to slip once things get busy.",
      "Centralize what should be centralized — brand guidelines, caption templates, automation for review requests and scheduling — and localize what should be local: the actual footage.",
      "Done well, this is one of the highest-leverage moves available to a franchise: one strategy investment that scales across every location, instead of paying for marketing from scratch at each one.",
    ],
  },
  {
    slug: "grow-roots-grow-large",
    title: "Grow Roots, Grow Large: A Framework for Small and Medium Business Growth",
    excerpt:
      "Small businesses and medium businesses need fundamentally different things from a growth plan. Here's the framework I use with each.",
    date: "2026-04-18",
    readMinutes: 5,
    category: "Strategy",
    content: [
      "A five-person local business and a fifty-person regional business are not on the same growth curve, even if they're in the same industry.",
      "Small businesses need roots: consistent content, a repeatable process, and enough automation to free up the owner's time without adding complexity they can't maintain.",
      "Medium businesses need scale: a content system that doesn't depend on one person, automation that connects across departments, and a strategy built for a team, not an individual.",
      "The mistake I see most often is a small business trying to run a medium-business playbook (too many channels, too much tooling) or a medium business still running on small-business instincts (no documented process, no automation, everything routed through one inbox).",
      "The right growth plan meets you where you are — roots first, then scale.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
