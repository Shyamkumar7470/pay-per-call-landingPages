import Link from "next/link";
import Script from "next/script";
import { tracking, Vertical } from "@/config/site";
import CallButton from "./CallButton";

export type Content = {
  vertical: Vertical;
  headline: string;
  sub: string;
  cta: string;
  services: { t: string; d: string }[];
  steps: string[];
  faqs: { q: string; a: string }[];
  disclosures: string[];
  prepare: string[];
};

export default function LandingPage({ c }: { c: Content }) {
  const isAuto = c.vertical === "auto";

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink selection:bg-signal/30">
      {tracking.dniScriptUrl && <Script src={tracking.dniScriptUrl} strategy="afterInteractive" />}
      {tracking.gaId && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${tracking.gaId}`}
          strategy="afterInteractive"
        />
      )}

      {/* Top Navbar */}
      <header className="sticky top-0 z-40 border-b border-sand/60 bg-paper/90 backdrop-blur-md transition-colors duration-200">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-pine text-paper shadow-sm group-hover:scale-105 group-hover:bg-pine-light transition-all duration-300 ease-spring">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <span className="font-display text-lg font-bold tracking-tight text-pine block leading-tight group-hover:text-pine-light transition-colors duration-200">
                {tracking.siteName === "YourSiteName" ? "DirectChoice" : tracking.siteName}
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-semibold text-ink-muted hover:text-pine transition-colors duration-200">
              ← All Services
            </Link>
            <a href="#disclosure" className="hidden sm:inline text-xs text-ink-muted underline hover:text-pine transition-colors duration-200">
              Advertising Disclosure
            </a>
          </div>
        </div>
      </header>

      <main id="main" className="flex-1 pb-24 md:pb-0">
        {/* Hero Banner */}
        <section className="relative overflow-hidden bg-gradient-to-b from-pine via-pine to-pine-dark text-paper py-12 md:py-20">
          <div className="absolute top-0 right-1/4 w-80 h-80 bg-signal/15 rounded-full blur-3xl pointer-events-none animate-float-slow" />
          
          <div className="relative mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              {/* Vertical Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-paper/10 border border-paper/15 px-3.5 py-1 text-xs font-semibold text-sand-light mb-5 backdrop-blur-md shadow-sm">
                <span>{isAuto ? "🚗 AUTO INSURANCE SPECIALISTS" : "🏠 ROOFING & REPAIR SPECIALISTS"}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] text-paper animate-fade-in-up">
                {c.headline}
              </h1>
              
              <p className="mt-4 text-base sm:text-lg text-paper/90 leading-relaxed max-w-xl">
                {c.sub}
              </p>

              <div className="mt-7">
                <CallButton vertical={c.vertical} label={c.cta} placement="hero" className="w-full sm:w-auto" />
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-paper/75">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{tracking.hours || "Participating providers are available during normal business hours."}</span>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="md:col-span-5">
              <div className="rounded-2xl border border-paper/15 bg-paper/10 p-6 sm:p-8 backdrop-blur-md shadow-float hover:border-paper/25 transition-all duration-300 ease-spring">
                <div className="flex items-center justify-between pb-4 border-b border-paper/10">
                  <div className="flex items-center gap-2">
                    <span className="flex h-3 w-3 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-300">Live Provider Line</span>
                  </div>
                  <span className="text-xs text-sand-light font-medium">100% Free Call</span>
                </div>

                <div className="my-5 space-y-3">
                  <div className="text-sm font-semibold text-paper">Why callers prefer direct phone inquiries:</div>
                  <div className="space-y-2 text-xs text-paper/85">
                    <div className="flex items-center gap-2.5">
                      <span className="text-signal font-bold">✓</span>
                      <span>Immediate quote and rate discussion</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-signal font-bold">✓</span>
                      <span>No long forms or third-party lead selling</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="text-signal font-bold">✓</span>
                      <span>Speak with licensed, qualified personnel</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-paper/10 text-center">
                  <span className="text-[11px] text-paper/70 block leading-tight">
                    Connecting to an independent advertiser, not to {tracking.siteName}.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services & Inquiries */}
        <section className="py-14 md:py-20 bg-paper">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
                What to Ask
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-3">
                {c.vertical === "auto" ? "What you can ask the provider about" : "What the roofing provider may help with"}
              </h2>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {c.services.map((s, idx) => (
                <div key={s.t || idx} className="group rounded-2xl border border-sand bg-paper-card p-6 shadow-sm hover:border-pine/40 hover:shadow-float hover:-translate-y-1.5 transition-all duration-300 ease-spring">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pine/10 text-pine font-bold text-sm mb-3 group-hover:bg-pine group-hover:text-paper transition-colors duration-200">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-ink text-lg group-hover:text-pine transition-colors duration-200">{s.t}</h3>
                  <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps & Checklist */}
        <section className="py-14 md:py-20 bg-sand/30 border-y border-sand/60">
          <div className="mx-auto max-w-6xl px-5">
            <div className="grid md:grid-cols-12 gap-10 items-start">
              <div className="md:col-span-7">
                <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
                  Step-by-Step
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-3">
                  What happens when you call
                </h2>
                
                <div className="mt-6 space-y-4">
                  {c.steps.map((s, idx) => (
                    <div key={s || idx} className="group flex items-start gap-4 rounded-xl bg-paper p-5 border border-sand hover:border-pine/30 hover:shadow-sm transition-all duration-200">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-pine text-paper font-bold text-sm group-hover:scale-105 group-hover:bg-pine-light transition-all duration-200">
                        {idx + 1}
                      </div>
                      <p className="text-sm sm:text-base text-ink leading-relaxed mt-0.5">{s}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <CallButton vertical={c.vertical} label={c.cta} placement="mid" className="w-full sm:w-auto" />
                </div>
              </div>

              {/* Checklist Box */}
              <div className="md:col-span-5 rounded-2xl bg-paper p-7 border border-sand shadow-sm hover:shadow-md transition-all duration-300">
                <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                  <span>📋</span>
                  <span>Helpful to have on hand</span>
                </h3>
                <p className="text-xs text-ink-muted mt-1">
                  Having these details ready helps the specialist provide faster, more accurate estimates:
                </p>

                <ul className="mt-5 space-y-2.5">
                  {c.prepare.map(p => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-ink font-medium p-1.5 rounded-lg hover:bg-sand/30 transition-colors duration-200">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal/30 text-ink text-xs font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-14 md:py-20 bg-paper">
          <div className="mx-auto max-w-3xl px-5">
            <div className="text-center mb-10">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3.5">
              {c.faqs.map(f => (
                <details key={f.q} className="group rounded-2xl border border-sand bg-paper-card p-5.5 shadow-sm hover:border-pine/30 hover:shadow-md transition-all duration-300 ease-spring">
                  <summary className="flex cursor-pointer items-center justify-between font-bold text-ink text-base select-none">
                    <span>{f.q}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sand/50 text-pine text-xs group-open:rotate-180 group-open:bg-pine group-open:text-paper transition-all duration-300 ease-spring">▼</span>
                  </summary>
                  <p className="mt-3 text-sm text-ink-muted leading-relaxed pt-2 border-t border-sand/40">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Disclosures Section */}
        <section id="disclosure" className="border-t border-sand bg-paper-warm py-10">
          <div className="mx-auto max-w-4xl space-y-3 px-5 text-xs text-ink-muted">
            <h2 className="font-bold text-ink text-sm">Regulatory & Marketing Disclosures</h2>
            {c.disclosures.map(d => (
              <p key={d}>{d}</p>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-sand bg-paper-warm py-6 text-center text-xs text-ink-muted">
        <div className="mx-auto max-w-6xl px-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} {tracking.operator || tracking.siteName}. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/" className="hover:underline transition-colors duration-200">Home</Link>
            <Link href="/auto-insurance" className="hover:underline transition-colors duration-200">Auto Insurance</Link>
            <Link href="/roofing" className="hover:underline transition-colors duration-200">Roofing</Link>
          </div>
        </div>
      </footer>


      {/* Mobile Sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-paper/95 backdrop-blur-md p-3 md:hidden shadow-lg">
        <CallButton vertical={c.vertical} label={c.cta} placement="sticky" className="w-full text-base" />
      </div>
    </div>
  );
}

