export const siteConfig = {
  name: "That One Local Girl",
  shortName: "TOLG",
  tagline: "Grow roots. Grow large.",
  description:
    "AI consulting for small and medium businesses. We build content plans, produce short-form, mid-form, and podcast content, and cut costs with automation — so small businesses grow roots and medium businesses grow large.",
  url: "https://www.thatonelocalgirl.com",
  location: {
    city: "Huntsville",
    region: "TX",
    areaServed: "Huntsville, TX and surrounding communities",
  },
  contact: {
    email: "hello@thatonelocalgirl.com",
    phone: "+1 (936) 555-0110",
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
