import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { CtaBanner } from "@/components/CtaBanner";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: siteConfig.founder },
    publisher: { "@type": "Organization", name: siteConfig.name },
  };

  return (
    <>
      <article className="bg-cream py-16 sm:py-24">
        <Container className="max-w-3xl">
          <Link
            href="/blog"
            className="text-sm font-medium text-accent hover:underline"
          >
            &larr; Back to blog
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs text-ink-soft">
            <span className="font-semibold uppercase tracking-wide text-accent">
              {post.category}
            </span>
            <span>&middot;</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>&middot;</span>
            <span>{post.readMinutes} min read</span>
          </div>

          <h1 className="font-display mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-8 space-y-5">
            {post.content.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </article>

      <CtaBanner
        title="Want this handled for you?"
        description="We build the plan and produce the content — book a free consultation to see where to start."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
    </>
  );
}
