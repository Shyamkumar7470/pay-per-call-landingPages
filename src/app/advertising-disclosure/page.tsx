import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Advertising & Referral Disclosure | DirectChoice",
  description: "Complete advertising disclosure explaining how DirectChoice earns referral compensation and how calls are routed.",
  alternates: {
    canonical: `${siteConfig.domain}/advertising-disclosure`,
  },
};

export default function AdvertisingDisclosurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <BreadcrumbJsonLd items={[{ name: "Home", item: "/" }, { name: "Advertising Disclosure", item: "/advertising-disclosure" }]} />

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
          <h1 className="font-display text-3xl font-extrabold text-ink mb-2">Advertising & Referral Disclosure</h1>
          <p className="text-xs text-ink-muted mb-8">FTC & Compliance Statement • Last Updated: March 2026</p>

          <div className="space-y-6 text-sm text-ink-muted leading-relaxed">
            <div className="p-5 rounded-2xl bg-sand/30 border border-sand">
              <h3 className="font-bold text-ink text-base mb-1">Clear FTC Notice</h3>
              <p>
                <strong>{siteConfig.siteName}</strong> is an independent, commercial advertising referral website. We are compensated by participating advertisers and pay-per-call affiliate networks when consumers connect with service providers via phone numbers on this website.
              </p>
            </div>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">1. How We Are Compensated</h2>
              <p>
                When you tap a telephone number or call button on this website, your call is connected to an independent third-party insurance agency, carrier, contractor matching network, or licensed home repair provider. We may receive referral compensation based on qualified call duration, call volume, or completed inquiries.
              </p>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">2. What We Do NOT Do</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do <strong>not</strong> underwrite insurance policies or calculate binding insurance premiums.</li>
                <li>We do <strong>not</strong> act as a licensed fiduciary insurance broker or agent.</li>
                <li>We do <strong>not</strong> perform roofing, construction, or home improvement contracting services.</li>
                <li>We do <strong>not</strong> guarantee that you will receive a quote, save money, or be approved for coverage.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-bold text-ink text-lg mb-2">3. Advertiser Independence</h2>
              <p>
                All insurance quotes, policy conditions, contractor licensing verifications, and project estimates are determined solely by the independent third-party provider who answers your call. Always verify provider licensing and insurance credentials in your state before purchasing policies or entering into construction agreements.
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
