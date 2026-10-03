import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us & Support | DirectChoice",
  description: "Get in touch with the DirectChoice team for general inquiries, compliance questions, or partner inquiries.",
  alternates: {
    canonical: `${siteConfig.domain}/contact`,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <BreadcrumbJsonLd items={[{ name: "Home", item: "/" }, { name: "Contact Us", item: "/contact" }]} />
      
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
              Get in Touch
            </span>
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-ink mt-3">
              Contact & Compliance Inquiries
            </h1>
            <p className="mt-3 text-ink-muted text-base">
              Have questions regarding our referral directory, editorial content, or marketing compliance? Reach out below.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="p-6 rounded-2xl bg-paper-card border border-sand shadow-sm">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="font-bold text-ink text-lg">Email Inquiries</h3>
              <p className="text-xs text-ink-muted mt-1">For general, media, and compliance matters:</p>
              <a href={`mailto:${siteConfig.contactEmail}`} className="mt-3 inline-block font-semibold text-pine underline text-sm">
                {siteConfig.contactEmail}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-paper-card border border-sand shadow-sm">
              <div className="text-2xl mb-2">🏢</div>
              <h3 className="font-bold text-ink text-lg">Mailing Address</h3>
              <p className="text-xs text-ink-muted mt-1">Official corporate headquarters:</p>
              <p className="mt-3 text-xs text-ink font-medium leading-relaxed">
                {siteConfig.operator}<br />
                {siteConfig.businessAddress}
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-sand/30 border border-sand text-xs text-ink-muted leading-relaxed">
            <h4 className="font-bold text-ink text-sm mb-1">Looking for a Quote or Service Consultation?</h4>
            <p>
              Please note that customer quote inquiries cannot be processed via email. To explore options or speak with a participating specialist, please browse our <Link href="/home-insurance" className="underline font-semibold text-pine">Home Insurance</Link>, <Link href="/auto-insurance" className="underline font-semibold text-pine">Auto Insurance</Link>, or <Link href="/roofing" className="underline font-semibold text-pine">Roofing</Link> directory pages and tap the direct telephone line.
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
