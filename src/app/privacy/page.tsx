import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Privacy Policy | DirectChoice",
  description: "Privacy Policy for DirectChoice Quotes explaining consumer privacy rights, cookies, analytics, and CCPA/CPRA disclosures.",
  alternates: {
    canonical: `${siteConfig.domain}/privacy`,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <BreadcrumbJsonLd items={[{ name: "Home", item: "/" }, { name: "Privacy Policy", item: "/privacy" }]} />

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
          <h1 className="font-display text-3xl font-extrabold text-ink mb-2">Privacy Policy</h1>
          <p className="text-xs text-ink-muted mb-8">Last Updated: March 2026 [PLACEHOLDER - Have reviewed by legal counsel]</p>

          <div className="space-y-6 text-sm text-ink-muted leading-relaxed">
            <section>
              <h2 className="font-bold text-ink text-lg mb-2">1. Overview</h2>
              <p>
                This Privacy Policy describes how <strong>{siteConfig.operator}</strong> ("we," "us," or "our") collects, uses, and shares information when you visit <strong>{siteConfig.domain}</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">2. Information We Collect</h2>
              <p>
                <strong>Direct Website Usage:</strong> When you browse our website, we may automatically collect standard web server log information, including your IP address, browser type, referring URL, operating system, and timestamp.
              </p>
              <p className="mt-2">
                <strong>Telephone Inquiries:</strong> When you initiate a telephone call through telephone numbers displayed on this website, your call is connected directly to third-party participating advertisers or call networks. The third-party advertiser may collect personal information necessary to underwrite insurance or provide home improvement estimates. We do not store or process call audio recordings on this website.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">3. Cookies & Analytics</h2>
              <p>
                We use first-party and third-party analytical cookies (such as Google Analytics) to understand website performance and improve user experience. You can adjust your browser settings to refuse cookies or notify you when cookies are placed.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">4. State Privacy Rights (CCPA / CPRA / VCDPA)</h2>
              <p>
                Residents of California, Virginia, Colorado, and other applicable states have specific rights regarding their personal information, including the right to know what personal data is collected and the right to request deletion. To submit a verifiable consumer request, contact us at <strong>{siteConfig.contactEmail}</strong>.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">5. Contact Information</h2>
              <p>
                If you have questions about this policy, please email <strong>{siteConfig.contactEmail}</strong> or mail: {siteConfig.operator}, {siteConfig.businessAddress}.
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
