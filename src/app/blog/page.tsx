import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Content Strategy & Automation Guides",
  description:
    "Practical guides on content planning, short-form video, podcasting, and business automation for small and medium businesses.",
  alternates: { canonical: "/blog" },
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <>
      <section className="bg-cream pt-16 pb-12 sm:pt-24">
        <Container>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Blog
          </p>
          <h1 className="font-display max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
            Practical guides on content &amp; automation
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            No fluff — just what we&apos;ve learned helping small and medium
            businesses plan content and cut costs with automation.
          </p>
        </Container>
      </section>

      <section className="bg-cream pb-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-tan-dark bg-tan/30 p-6 transition-colors hover:bg-tan/60"
              >
                <div className="flex items-center gap-3 text-xs text-ink-soft">
                  <span className="font-semibold uppercase tracking-wide text-accent">
                    {post.category}
                  </span>
                  <span>&middot;</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span>&middot;</span>
                  <span>{post.readMinutes} min read</span>
                </div>
                <h2 className="mt-3 font-display text-xl font-semibold leading-snug text-ink group-hover:underline">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaBanner
        title="Want this done for you instead of DIY'd?"
        description="We build the content plan and produce it — so you don't have to piece it together from blog posts."
      />
    </>
  );
}
