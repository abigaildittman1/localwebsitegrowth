import type { Metadata } from "next";
import { Geist, Bricolage_Grotesque } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Content, Automation & Consulting for Small Businesses & Franchises`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "business consulting for small business",
    "content strategy for small business",
    "short form video agency",
    "franchise social media marketing",
    "multi-location content strategy",
    "business automation consulting",
    "social media content plans",
    "small business marketing Huntsville TX",
  ],
  authors: [{ name: siteConfig.founder }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Content, Automation & Consulting for Small Businesses & Franchises`,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Consulting for Small Businesses & Franchises`,
    description: siteConfig.description,
  },
  alternates: {
    canonical: "/",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.url,
  email: siteConfig.contact.email,
  telephone: siteConfig.contact.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.location.city,
    addressRegion: siteConfig.location.region,
    addressCountry: "US",
  },
  areaServed: siteConfig.location.areaServed,
  sameAs: [siteConfig.contact.instagram, siteConfig.contact.tiktok],
  founder: {
    "@type": "Person",
    name: siteConfig.founder,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
