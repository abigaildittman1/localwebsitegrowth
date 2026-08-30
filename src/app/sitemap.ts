import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteConfig.url}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteConfig.url}/work`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/about`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${siteConfig.url}/tools`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${siteConfig.url}/tools/automation-savings-calculator`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/tools/social-growth-calculator`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteConfig.url}/tools/automation-readiness-quiz`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
