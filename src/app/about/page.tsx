import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "About Us | DirectChoice Referral Network",
  description: "Learn about DirectChoice Quotes, an independent US consumer referral network connecting homeowners and drivers with licensed providers.",
  alternates: {
    canonical: `${siteConfig.domain}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <BreadcrumbJsonLd items={[{ name: "Home", item: "/" }, { name: "About Us", item: "/about" }]} />
      
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
          <div className="border-b border-sand pb-6 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
              About Our Service
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-3">
              Connecting Consumers with Verified Specialists
            </h1>
          </div>

          <div className="space-y-6 text-base text-ink-muted leading-relaxed">
            <p>
              <strong>{siteConfig.siteName}</strong> is an independent advertising and marketing referral service operated by <strong>{siteConfig.operator}</strong>. Our mission is to make finding reputable home services and insurance specialists straightforward, fast, and transparent.
            </p>

            <h2 className="font-display text-2xl font-bold text-ink pt-4">Our Model: Direct Phone Connection</h2>
            <p>
              Traditional online comparison platforms frequently require users to complete multi-step lead forms, often resulting in personal data being resold to dozens of third-party call centers. We built our platform around a simple principle: <strong>direct, one-to-one phone routing</strong>.
            </p>
            <p>
              When you call one of the telephone numbers featured on our website, your call is connected directly to a participating licensed insurance agency, insurance carrier, or local contractor serving your geographic region.
            </p>

            <div className="my-6 p-6 rounded-2xl bg-sand/30 border border-sand">
              <h3 className="font-bold text-ink text-lg mb-2">Our Core Commitments</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-pine font-bold">✓</span>
                  <span><strong>100% Free for Callers:</strong> We never charge consumer callers any fee for using our referral directory.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pine font-bold">✓</span>
                  <span><strong>Zero Form Spam:</strong> You do not have to provide your email address or fill out endless questionnaires to get basic answers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-pine font-bold">✓</span>
                  <span><strong>Clear Independence:</strong> We do not underwrite insurance policies or perform contracting work; we connect you to licensed professionals who do.</span>
                </li>
              </ul>
            </div>

            <h2 className="font-display text-2xl font-bold text-ink pt-4">Business Information</h2>
            <p>
              <strong>Operating Entity:</strong> {siteConfig.operator}<br />
              <strong>Registered Address:</strong> {siteConfig.businessAddress}<br />
              <strong>Compliance Contact:</strong> {siteConfig.contactEmail}
            </p>
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
