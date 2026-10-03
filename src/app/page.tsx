import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getAllGuides } from "@/lib/guides";
import CallButton from "@/components/CallButton";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "DirectChoice Referral Network | Connect with Licensed Providers",
  description: "Connect directly with verified local home insurance specialists, auto insurance agents, and roofing contractors over the phone. Free, fast, and no obligation.",
  alternates: {
    canonical: siteConfig.domain,
  },
};

export default function HomePage() {
  const currentYear = new Date().getFullYear();
  const topGuides = getAllGuides().slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-signal/30">
      <BreadcrumbJsonLd items={[{ name: "Home", item: "/" }]} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-sand/60 bg-paper/90 backdrop-blur-md transition-colors duration-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pine text-paper shadow-sm group-hover:scale-105 group-hover:bg-pine-light transition-all duration-300 ease-spring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <span className="font-display text-xl font-bold tracking-tight text-pine block leading-tight group-hover:text-pine-light transition-colors duration-200">
                {siteConfig.siteName}
              </span>
              <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider block">
                Verified US Referral Network
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-muted">
            <a href="#services" className="hover:text-pine transition-colors duration-200">Services</a>
            <Link href="/guides" className="hover:text-pine transition-colors duration-200">Guides</Link>
            <a href="#how-it-works" className="hover:text-pine transition-colors duration-200">How It Works</a>
            <a href="#why-call" className="hover:text-pine transition-colors duration-200">Why Direct Call</a>
            <a href="#faq" className="hover:text-pine transition-colors duration-200">FAQs</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-xl bg-pine px-4 py-2 text-sm font-semibold text-paper shadow-sm hover:bg-pine-light hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-spring"
            >
              Select Vertical
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main id="main" className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-b from-pine via-pine to-pine-dark text-paper py-16 md:py-24">
          {/* Background Ambient Floating Glows */}
          <div className="absolute top-0 left-1/4 -translate-y-1/2 w-96 h-96 bg-signal/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-96 h-96 bg-accent-emerald/20 rounded-full blur-3xl pointer-events-none animate-float-slow" style={{ animationDelay: '-3s' }} />

          <div className="relative mx-auto max-w-6xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 rounded-full bg-paper/10 border border-paper/15 px-4 py-1.5 text-xs font-semibold text-sand-light tracking-wide mb-6 backdrop-blur-md shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-signal animate-pulse" />
                <span>DIRECT PHONE CONNECTION • 100% FREE CONSUMER REFERRAL</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.15] animate-fade-in-up">
                Speak Directly with Licensed <span className="text-gradient">Insurance & Home Specialists</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-paper/90 leading-relaxed max-w-2xl mx-auto">
                Skip tedious web forms and third-party email spam. Connect directly with participating licensed providers in your area for fast quotes and professional advice.
              </p>

              {/* Quick Jump Buttons for 3 Verticals */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <Link
                  href="/home-insurance"
                  className="inline-flex items-center gap-2 rounded-xl bg-signal px-5 py-3 text-sm sm:text-base font-bold text-ink shadow-glow hover:bg-signal-hover hover:shadow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-spring"
                >
                  <span>🏡</span> Homeowners Insurance
                </Link>

                <Link
                  href="/auto-insurance"
                  className="inline-flex items-center gap-2 rounded-xl bg-paper/15 border border-paper/20 px-5 py-3 text-sm sm:text-base font-bold text-paper backdrop-blur-md hover:bg-paper/25 hover:border-paper/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-spring"
                >
                  <span>🚗</span> Auto Insurance
                </Link>

                <Link
                  href="/roofing"
                  className="inline-flex items-center gap-2 rounded-xl bg-paper/15 border border-paper/20 px-5 py-3 text-sm sm:text-base font-bold text-paper backdrop-blur-md hover:bg-paper/25 hover:border-paper/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] transition-all duration-300 ease-spring"
                >
                  <span>🔨</span> Roofing & Repairs
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-paper/10 text-center">
                <div className="p-3 rounded-xl hover:bg-paper/5 transition-colors duration-200">
                  <div className="text-2xl sm:text-3xl font-bold font-display text-signal">Fast</div>
                  <div className="text-xs text-paper/75 mt-0.5">Direct Phone Route</div>
                </div>
                <div className="p-3 rounded-xl hover:bg-paper/5 transition-colors duration-200">
                  <div className="text-2xl sm:text-3xl font-bold font-display text-paper">$0 Cost</div>
                  <div className="text-xs text-paper/75 mt-0.5">Free Referral Directory</div>
                </div>
                <div className="p-3 col-span-2 sm:col-span-1 rounded-xl hover:bg-paper/5 transition-colors duration-200">
                  <div className="text-2xl sm:text-3xl font-bold font-display text-sand-light">Zero Pressure</div>
                  <div className="text-xs text-paper/75 mt-0.5">No Obligation Inquiries</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section (Home, Auto, Roofing) */}
        <section id="services" className="py-16 md:py-24 bg-paper">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
                Featured Verticals
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-3">
                Choose a Service Category
              </h2>
              <p className="mt-3 text-ink-muted text-base sm:text-lg">
                Select your vertical to explore policy options, calculate rebuild needs, or connect directly with an advertiser over the phone.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7">
              {/* Category Card 1: Home Insurance */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-sand bg-paper-card p-7 shadow-premium hover:shadow-float hover:-translate-y-1.5 hover:border-pine/40 transition-all duration-300 ease-spring">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200/60 shadow-sm group-hover:scale-110 transition-all duration-300 ease-spring">
                      🏡
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 shadow-sm">
                      Live Specialists
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-pine transition-colors duration-200">
                    Homeowners Insurance
                  </h3>
                  <p className="mt-2.5 text-ink-muted text-xs sm:text-sm leading-relaxed">
                    Compare dwelling rebuild limits, personal property endorsements, liability protection, and deductible options with licensed providers.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-ink-muted">
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>Dwelling & Rebuild Calculations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>HO-3 vs. HO-5 Policy Options</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>Auto & Home Bundle Discounts</span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-sand/80 flex flex-col gap-2.5">
                  <Link
                    href="/home-insurance"
                    className="text-center rounded-xl bg-pine px-4 py-2.5 text-xs font-bold text-paper hover:bg-pine-light hover:shadow-sm transition-all"
                  >
                    View Home Insurance Hub →
                  </Link>
                  <CallButton vertical="home" label="Call Now" placement="home-card-vertical" className="text-xs" />
                </div>
              </div>

              {/* Category Card 2: Auto Insurance */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-sand bg-paper-card p-7 shadow-premium hover:shadow-float hover:-translate-y-1.5 hover:border-pine/40 transition-all duration-300 ease-spring">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-700 border border-amber-200/60 shadow-sm group-hover:scale-110 transition-all duration-300 ease-spring">
                      🚗
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 shadow-sm">
                      Live Agents
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-pine transition-colors duration-200">
                    Auto Insurance
                  </h3>
                  <p className="mt-2.5 text-ink-muted text-xs sm:text-sm leading-relaxed">
                    Explore comprehensive, collision, and liability policies for your vehicles. Ask licensed agents about state minimums and driver discounts.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-ink-muted">
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>Collision & Comprehensive Coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>Multi-Car & Safe Driver Programs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>Zero email spam phone inquiries</span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-sand/80 flex flex-col gap-2.5">
                  <Link
                    href="/auto-insurance"
                    className="text-center rounded-xl bg-pine px-4 py-2.5 text-xs font-bold text-paper hover:bg-pine-light hover:shadow-sm transition-all"
                  >
                    View Auto Insurance Hub →
                  </Link>
                  <CallButton vertical="auto" label="Call Now" placement="home-card-vertical" className="text-xs" />
                </div>
              </div>

              {/* Category Card 3: Roofing */}
              <div className="group relative flex flex-col justify-between rounded-2xl border border-sand bg-paper-card p-7 shadow-premium hover:shadow-float hover:-translate-y-1.5 hover:border-pine/40 transition-all duration-300 ease-spring">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 border border-teal-200/60 shadow-sm group-hover:scale-110 transition-all duration-300 ease-spring">
                      🔨
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[11px] font-bold text-emerald-700 shadow-sm">
                      Contractors On Call
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-ink group-hover:text-pine transition-colors duration-200">
                    Roofing & Repairs
                  </h3>
                  <p className="mt-2.5 text-ink-muted text-xs sm:text-sm leading-relaxed">
                    Connect with participating local roofing specialists for emergency leak repairs, full roof replacements, and storm damage inspections.
                  </p>

                  <div className="mt-5 space-y-2 text-xs text-ink-muted">
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>Leak Repairs & Shingle Replacements</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>Storm Damage Assessments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-pine font-bold">✓</span>
                      <span>Free project estimates with pros</span>
                    </div>
                  </div>
                </div>

                <div className="mt-7 pt-5 border-t border-sand/80 flex flex-col gap-2.5">
                  <Link
                    href="/roofing"
                    className="text-center rounded-xl bg-pine px-4 py-2.5 text-xs font-bold text-paper hover:bg-pine-light hover:shadow-sm transition-all"
                  >
                    View Roofing Hub →
                  </Link>
                  <CallButton vertical="roofing" label="Call Now" placement="home-card-vertical" className="text-xs" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Educational Guides Section */}
        <section className="py-16 md:py-20 bg-sand/30 border-y border-sand/60">
          <div className="mx-auto max-w-6xl px-5">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
                  Educational Guides
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-2">
                  Learn Before You Call
                </h2>
                <p className="text-sm text-ink-muted mt-1">
                  Objective consumer guides explaining coverage rules, deductibles, and claim procedures.
                </p>
              </div>
              <Link
                href="/guides"
                className="inline-flex items-center font-bold text-sm text-pine hover:underline"
              >
                Browse All Guides →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {topGuides.map((guide) => (
                <div
                  key={guide.slug}
                  className="rounded-2xl bg-paper p-6 border border-sand shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[11px] font-bold text-pine uppercase tracking-wider block mb-2">
                      {guide.categoryName}
                    </span>
                    <h3 className="font-display text-base font-bold text-ink hover:text-pine">
                      <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
                    </h3>
                    <p className="mt-2 text-xs text-ink-muted line-clamp-3 leading-relaxed">
                      {guide.summary}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-sand/60 flex items-center justify-between text-xs text-ink-muted">
                    <span>{guide.readTime}</span>
                    <Link href={`/guides/${guide.slug}`} className="font-bold text-pine hover:underline">
                      Read Article →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-16 md:py-24 bg-paper">
          <div className="mx-auto max-w-6xl px-5">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
                Simple Process
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-3">
                How Direct Referral Works
              </h2>
              <p className="mt-3 text-ink-muted text-base">
                Get the answers and quotes you need in 3 straightforward steps.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative rounded-2xl bg-paper-card p-7 border border-sand shadow-sm hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 ease-spring text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pine text-paper font-display text-xl font-bold mb-5 shadow-sm group-hover:scale-110 group-hover:bg-pine-light transition-all duration-300 ease-spring">
                  1
                </div>
                <h3 className="font-display text-xl font-bold text-ink">Choose Your Vertical</h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                  Select Home Insurance, Auto Insurance, or Roofing to reach the appropriate licensed specialist line.
                </p>
              </div>

              <div className="group relative rounded-2xl bg-paper-card p-7 border border-sand shadow-sm hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 ease-spring text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pine text-paper font-display text-xl font-bold mb-5 shadow-sm group-hover:scale-110 group-hover:bg-pine-light transition-all duration-300 ease-spring">
                  2
                </div>
                <h3 className="font-display text-xl font-bold text-ink">One-Tap Phone Route</h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                  Tap the dedicated phone number to connect directly with an available provider in your state.
                </p>
              </div>

              <div className="group relative rounded-2xl bg-paper-card p-7 border border-sand shadow-sm hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 ease-spring text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pine text-paper font-display text-xl font-bold mb-5 shadow-sm group-hover:scale-110 group-hover:bg-pine-light transition-all duration-300 ease-spring">
                  3
                </div>
                <h3 className="font-display text-xl font-bold text-ink">Explore Options & Decide</h3>
                <p className="mt-2.5 text-sm text-ink-muted leading-relaxed">
                  Discuss details and review quotes directly with the representative. You are under zero obligation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Direct Call Over Web Forms */}
        <section id="why-call" className="py-16 md:py-24 bg-sand/30 border-y border-sand/60">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
                  Why Direct Call
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-3 leading-tight">
                  Stop Filling Out 20-Page Forms That Sell Your Email
                </h2>
                <p className="mt-4 text-ink-muted text-base sm:text-lg leading-relaxed">
                  Traditional comparison websites often collect your personal data and send it to dozens of telemarketers. Our direct phone service connects you one-on-one.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-sand/30 transition-colors duration-200">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-base">Real Humans, Real Time</h4>
                      <p className="text-sm text-ink-muted mt-0.5">Talk to a real representative who can answer your specific questions right away.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-sand/30 transition-colors duration-200">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-base">No Data Selling or Inbox Spam</h4>
                      <p className="text-sm text-ink-muted mt-0.5">No entering your email into endless lead funnels that flood your inbox.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-sand/30 transition-colors duration-200">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 text-sm font-bold">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-base">100% Free & Independent</h4>
                      <p className="text-sm text-ink-muted mt-0.5">Our referral service is completely free for consumers with zero hidden fees.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Callout Card */}
              <div className="rounded-3xl bg-pine p-8 sm:p-10 text-paper shadow-float border border-pine-light/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-signal/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
                <h3 className="font-display text-2xl font-bold text-paper">Ready to Get Started?</h3>
                <p className="mt-3 text-paper/85 text-sm sm:text-base leading-relaxed">
                  Choose your vertical and tap to call our verified provider partner line.
                </p>

                <div className="mt-7 space-y-3.5">
                  <div className="rounded-xl bg-paper/10 p-3.5 border border-paper/15 backdrop-blur-sm">
                    <div className="text-xs text-sand-light font-semibold uppercase tracking-wider mb-1">🏡 Homeowners Insurance</div>
                    <CallButton vertical="home" label="Call Home Insurance Specialist" placement="home-sidebar" className="w-full text-sm" />
                  </div>

                  <div className="rounded-xl bg-paper/10 p-3.5 border border-paper/15 backdrop-blur-sm">
                    <div className="text-xs text-sand-light font-semibold uppercase tracking-wider mb-1">🚗 Auto Insurance</div>
                    <CallButton vertical="auto" label="Call Auto Specialist" placement="home-sidebar" className="w-full text-sm" />
                  </div>

                  <div className="rounded-xl bg-paper/10 p-3.5 border border-paper/15 backdrop-blur-sm">
                    <div className="text-xs text-sand-light font-semibold uppercase tracking-wider mb-1">🔨 Roofing Project</div>
                    <CallButton vertical="roofing" label="Call Roofing Specialist" placement="home-sidebar" className="w-full text-sm" />
                  </div>
                </div>

                <p className="mt-5 text-xs text-paper/70 text-center">
                  Calls are free to connect. Standard carrier voice rates apply.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faq" className="py-16 md:py-24 bg-paper">
          <div className="mx-auto max-w-3xl px-5">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
                Got Questions?
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <details className="group rounded-2xl border border-sand bg-paper p-5.5 shadow-sm hover:border-pine/30 hover:shadow-md transition-all duration-300 ease-spring">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-ink text-base select-none">
                  <span>How does this referral service work?</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sand/50 text-pine text-xs group-open:rotate-180 group-open:bg-pine group-open:text-paper transition-all duration-300 ease-spring">▼</span>
                </summary>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed pt-2 border-t border-sand/40">
                  We are an independent advertising and referral platform. When you tap a phone number on our site, your call is connected directly to a participating licensed insurance provider or contractor in your area who can discuss options and quotes.
                </p>
              </details>

              <details className="group rounded-2xl border border-sand bg-paper p-5.5 shadow-sm hover:border-pine/30 hover:shadow-md transition-all duration-300 ease-spring">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-ink text-base select-none">
                  <span>Does it cost anything to use this website or call?</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sand/50 text-pine text-xs group-open:rotate-180 group-open:bg-pine group-open:text-paper transition-all duration-300 ease-spring">▼</span>
                </summary>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed pt-2 border-t border-sand/40">
                  No. This referral platform does not charge consumers any fee. Standard telephone carrier rates may apply based on your phone plan.
                </p>
              </details>

              <details className="group rounded-2xl border border-sand bg-paper p-5.5 shadow-sm hover:border-pine/30 hover:shadow-md transition-all duration-300 ease-spring">
                <summary className="flex cursor-pointer items-center justify-between font-bold text-ink text-base select-none">
                  <span>Am I obligated to purchase or hire when I call?</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sand/50 text-pine text-xs group-open:rotate-180 group-open:bg-pine group-open:text-paper transition-all duration-300 ease-spring">▼</span>
                </summary>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed pt-2 border-t border-sand/40">
                  No. Calling creates zero obligation. You can ask questions, compare quotes, and decide freely whether you want to work with the provider.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* FTC & Regulatory Disclosures Section */}
        <section className="border-t border-sand bg-sand/20 py-10">
          <div className="mx-auto max-w-4xl px-5 text-xs text-ink-muted space-y-3">
            <h3 className="font-bold text-ink text-sm">Advertising & Referral Disclosures</h3>
            <p>
              This website is an independent advertising and marketing referral service. It is not an insurance company, broker, or licensed roofing contractor, and does not provide insurance policies or perform construction work directly.
            </p>
            <p>
              Calls placed through the telephone numbers on this site are routed to participating licensed providers or contractors who may pay compensation for marketing referrals. Quotes, rates, coverage, and service availability vary by state and provider.
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-sand bg-paper-warm py-10 text-xs text-ink-muted">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-ink uppercase tracking-wider mb-3">Service Verticals</h4>
              <ul className="space-y-2">
                <li><Link href="/home-insurance" className="hover:text-pine">Home Insurance</Link></li>
                <li><Link href="/auto-insurance" className="hover:text-pine">Auto Insurance</Link></li>
                <li><Link href="/roofing" className="hover:text-pine">Roofing Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-ink uppercase tracking-wider mb-3">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/guides" className="hover:text-pine">All Guides</Link></li>
                <li><Link href="/guides/how-much-home-insurance-do-i-need" className="hover:text-pine">Dwelling Limit Guide</Link></li>
                <li><Link href="/guides/ho3-vs-ho5-homeowners-insurance" className="hover:text-pine">HO-3 vs HO-5 Comparison</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-ink uppercase tracking-wider mb-3">About Us</h4>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-pine">About DirectChoice</Link></li>
                <li><Link href="/editorial-policy" className="hover:text-pine">Editorial Policy</Link></li>
                <li><Link href="/contact" className="hover:text-pine">Contact Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-ink uppercase tracking-wider mb-3">Legal & Compliance</h4>
              <ul className="space-y-2">
                <li><Link href="/privacy" className="hover:text-pine">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-pine">Terms of Service</Link></li>
                <li><Link href="/advertising-disclosure" className="hover:text-pine">Advertising Disclosure</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-sand/60 text-center">
            © {currentYear} {siteConfig.operator}. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
