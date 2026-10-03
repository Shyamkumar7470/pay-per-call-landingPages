import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuides } from "@/lib/guides";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Insurance & Home Repair Guides | DirectChoice Hub",
  description: "Browse comprehensive educational guides on homeowners insurance coverage, policy comparisons, and home improvement best practices.",
  alternates: {
    canonical: `${siteConfig.domain}/guides`,
  },
};

export default function GuidesHubPage() {
  const guides = getAllGuides();

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <BreadcrumbJsonLd items={[{ name: "Home", item: "/" }, { name: "Guides", item: "/guides" }]} />

      <header className="sticky top-0 z-40 border-b border-sand/60 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-lg font-bold text-pine">
            {siteConfig.siteName}
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/home-insurance" className="hover:text-pine">Home Insurance</Link>
            <Link href="/auto-insurance" className="hover:text-pine">Auto Insurance</Link>
            <Link href="/roofing" className="hover:text-pine">Roofing</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
              Resource Library
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-3">
              Insurance & Homeowner Guides
            </h1>
            <p className="mt-3 text-ink-muted text-base sm:text-lg">
              Explore in-depth articles written by insurance and home improvement analysts to help you make informed decisions before calling for quotes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <article
                key={guide.slug}
                className="group flex flex-col justify-between rounded-2xl border border-sand bg-paper-card p-6 shadow-sm hover:shadow-float hover:-translate-y-1.5 hover:border-pine/40 transition-all duration-300 ease-spring"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-ink-muted mb-4">
                    <span className="font-bold text-pine uppercase tracking-wider">{guide.categoryName}</span>
                    <span>{guide.readTime}</span>
                  </div>

                  <h2 className="font-display text-xl font-bold text-ink group-hover:text-pine transition-colors duration-200">
                    <Link href={`/guides/${guide.slug}`}>
                      {guide.title}
                    </Link>
                  </h2>

                  <p className="mt-3 text-sm text-ink-muted leading-relaxed line-clamp-3">
                    {guide.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-sand/80 flex items-center justify-between text-xs text-ink-muted">
                  <span>By {guide.author.name.split(",")[0]}</span>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="font-bold text-pine group-hover:underline flex items-center gap-1"
                  >
                    Read Guide →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-sand bg-paper-warm py-8 text-center text-xs text-ink-muted">
        <div className="mx-auto max-w-6xl px-5">
          © {new Date().getFullYear()} {siteConfig.operator}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
