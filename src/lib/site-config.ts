export const siteConfig = {
  name: "That One Local Girl",
  shortName: "TOLG",
  tagline: "Grow roots. Grow large.",
  motto: "Everyone is an influencer.",
  description:
    "AI consulting for small businesses, medium businesses, and franchise locations. We build content plans, produce short-form and mid-form video content, and cut costs with automation — so small businesses grow roots, medium businesses grow large, and franchises stay consistent everywhere.",
  url: "https://thatonelocalgirl.com",
  location: {
    city: "Huntsville",
    region: "TX",
    areaServed: "Huntsville, TX and surrounding communities",
  },
  contact: {
    email: "hello@thatonelocalgirl.com",
    phone: "+1 (832) 599-1425",
    instagram: "https://www.instagram.com/thatonelocalgirl",
    tiktok: "https://www.tiktok.com/@thatonelocalgirl",
  },
  founder: "Abigail Dittman",
} as const;

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Prior Work" },
  { href: "/tools", label: "Free Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
] as const;
