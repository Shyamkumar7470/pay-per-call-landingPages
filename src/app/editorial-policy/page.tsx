import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Editorial Policy & Standards | DirectChoice",
  description: "Learn how DirectChoice researches, writes, fact-checks, and updates educational insurance and home service guides.",
  alternates: {
    canonical: `${siteConfig.domain}/editorial-policy`,
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <BreadcrumbJsonLd items={[{ name: "Home", item: "/" }, { name: "Editorial Policy", item: "/editorial-policy" }]} />

      <header className="sticky top-0 z-40 border-b border-sand/60 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-lg font-bold text-pine">
            {siteConfig.siteName}
          </Link>
          <Link href="/" className="text-sm font-semibold text-ink-muted hover:text-pine">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-5">
          <h1 className="font-display text-3xl font-extrabold text-ink mb-2">Editorial Policy & Research Standards</h1>
          <p className="text-xs text-ink-muted mb-8">E-E-A-T Commitment • Last Updated: March 2026</p>

          <div className="space-y-6 text-sm text-ink-muted leading-relaxed">
            <p>
              At <strong>{siteConfig.siteName}</strong>, our editorial mission is to provide accurate, objective, and understandable educational content to help American consumers navigate insurance options and home maintenance decisions.
            </p>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">1. Author Expertise & Bylines</h2>
              <p>
                Our guides are researched and authored by contributors with verifiable industry experience in property-casualty insurance, roofing mechanics, or consumer advocacy. Every article features an explicit author byline, biographical credentials, and the date of last review.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">2. Fact-Checking & Primary Sources</h2>
              <p>
                We prioritize primary regulatory and industry data sources, including:
              </p>
              <ul className="list-disc pl-6 space-y-1.5 mt-2">
                <li>National Association of Insurance Commissioners (NAIC)</li>
                <li>Insurance Information Institute (III)</li>
                <li>State Departments of Insurance (DOIs)</li>
                <li>National Roofing Contractors Association (NRCA)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">3. Separation of Editorial and Advertising</h2>
              <p>
                While our site features telephone referral numbers connected to advertising partners, our educational analysis, policy definitions, and coverage calculations remain objective. Advertisers do not dictate or influence our educational guide conclusions.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-sand bg-paper-warm py-6 text-center text-xs text-ink-muted">
        <div className="mx-auto max-w-5xl px-5">
          © {new Date().getFullYear()} {siteConfig.operator}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
