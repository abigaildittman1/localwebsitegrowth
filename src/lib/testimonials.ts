export type Testimonial = {
  quote: string;
  name: string;
  business: string;
  category: string;
  rating: number;
};

// Placeholder testimonials — swap in real client quotes once collected.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Our reels used to sit at a few hundred views. Within two months of working together we had a real content calendar and started hitting 20k+ regularly. Walk-in traffic noticeably picked up.",
    name: "Maria Sandoval",
    business: "Owner, The Corner Bakehouse",
    category: "Restaurant / Bakery",
    rating: 5,
  },
  {
    quote:
      "I didn't know how much time I was losing to manual scheduling and follow-up emails until we automated it. That's about 8 hours a week back in my life.",
    name: "James Okafor",
    business: "Founder, Okafor Home Services",
    category: "Home Services",
    rating: 5,
  },
  {
    quote:
      "They built us a content plan that actually made sense for a two-person team. We're not scrambling for post ideas anymore — we just film what's on the calendar.",
    name: "Priya Natarajan",
    business: "Co-owner, Bloom & Board Studio",
    category: "Retail / Studio",
    rating: 5,
  },
  {
    quote:
      "We run three locations and used to have three totally different social accounts doing three different things. Now every location posts from the same playbook and actually looks like one brand.",
    name: "Derek Lin",
    business: "Franchisee, Sunrise Donuts",
    category: "Franchise / Multi-Location",
    rating: 5,
  },
  {
    quote:
      "Honest, practical advice — no jargon, no upsell. They told us where automation would actually save money and where it wasn't worth it yet.",
    name: "Courtney Reyes",
    business: "Manager, Reyes Family Dental",
    category: "Healthcare",
    rating: 5,
  },
  {
    quote:
      "We went from posting whenever we remembered to a real weekly rhythm across TikTok and Instagram. Bookings from social are now our second biggest channel.",
    name: "Tyler Brooks",
    business: "Owner, Brooks Outdoor Fitness",
    category: "Fitness",
    rating: 5,
  },
];
