import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Terms of Service | DirectChoice",
  description: "Terms of Service governing use of DirectChoice Quotes and telephone referral services.",
  alternates: {
    canonical: `${siteConfig.domain}/terms`,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <BreadcrumbJsonLd items={[{ name: "Home", item: "/" }, { name: "Terms of Service", item: "/terms" }]} />

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
          <h1 className="font-display text-3xl font-extrabold text-ink mb-2">Terms of Service</h1>
          <p className="text-xs text-ink-muted mb-8">Last Updated: March 2026 [PLACEHOLDER - Have reviewed by legal counsel]</p>

          <div className="space-y-6 text-sm text-ink-muted leading-relaxed">
            <section>
              <h2 className="font-bold text-ink text-lg mb-2">1. Acceptance of Terms</h2>
              <p>
                By accessing or using <strong>{siteConfig.domain}</strong> (the "Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">2. Nature of Services (Independent Referral Service)</h2>
              <p>
                {siteConfig.siteName} is an advertising and marketing referral platform. <strong>We are NOT an insurance company, insurance agency, insurance broker, or licensed general contractor.</strong> We do not issue insurance policies, underwrite risk, bind coverage, or perform home improvement contracting services.
              </p>
              <p className="mt-2">
                All quotes, estimates, terms, and products discussed during telephone calls are provided solely by third-party participating advertisers and licensed providers.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">3. Disclaimers & No Warranty</h2>
              <p>
                THE SITE AND ITS EDUCATIONAL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. WE MAKE NO WARRANTIES OR GUARANTEES REGARDING QUOTE ACCURACY, RATES, SAVINGS, POLICY APPROVALS, CONTRACTOR LICENSING, OR WORKMANSHIP.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">4. Limitation of Liability</h2>
              <p>
                Under no circumstances shall {siteConfig.operator} or its affiliates be liable for any indirect, incidental, or consequential damages resulting from your interaction with third-party service providers connected through this site.
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
