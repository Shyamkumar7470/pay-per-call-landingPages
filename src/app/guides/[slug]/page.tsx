import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuideBySlug, getAllGuides } from "@/lib/guides";
import { siteConfig } from "@/config/site";
import CallButton from "@/components/CallButton";
import { ArticleJsonLd, BreadcrumbJsonLd, FaqJsonLd } from "@/components/JsonLd";

export async function generateStaticParams() {
  return getAllGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  const url = `${siteConfig.domain}/guides/${guide.slug}`;

  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: url,
      type: "article",
      publishedTime: guide.publishedDate,
      modifiedTime: guide.updatedDate,
      authors: [guide.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
    },
  };
}

export default async function GuideDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const verticalHubUrl = `/${guide.vertical}-insurance`;
  const verticalName = guide.vertical === "home" ? "Home Insurance" : guide.vertical === "auto" ? "Auto Insurance" : "Roofing";

  return (
    <div className="min-h-screen flex flex-col bg-paper text-ink">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", item: "/" },
          { name: "Guides", item: "/guides" },
          { name: guide.title, item: `/guides/${guide.slug}` },
        ]}
      />
      <ArticleJsonLd
        title={guide.title}
        description={guide.metaDescription}
        url={`/guides/${guide.slug}`}
        publishedDate={guide.publishedDate}
        updatedDate={guide.updatedDate}
        authorName={guide.author.name}
      />
      <FaqJsonLd faqs={guide.faqs} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-sand/60 bg-paper/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-lg font-bold text-pine">
            {siteConfig.siteName}
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-ink-muted">
            <Link href="/guides" className="hover:text-pine">← All Guides</Link>
            <Link href={verticalHubUrl} className="hover:text-pine">{verticalName}</Link>
          </div>
        </div>
      </header>

      <main className="flex-1 py-10 md:py-16">
        <article className="mx-auto max-w-4xl px-5">
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs text-ink-muted mb-6">
            <Link href="/" className="hover:underline">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:underline">Guides</Link>
            <span>/</span>
            <span className="text-pine font-medium truncate">{guide.title}</span>
          </nav>

          {/* Article Header */}
          <header className="border-b border-sand pb-8 mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-pine bg-pine/10 px-3 py-1 rounded-full">
              {guide.categoryName}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-ink mt-4 leading-tight">
              {guide.title}
            </h1>
            
            {/* E-E-A-T Author & Review Metadata */}
            <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-ink-muted">
              <div>
                <span className="font-semibold text-ink">Author:</span> {guide.author.name}
              </div>
              <div>
                <span className="font-semibold text-ink">Last Reviewed:</span> {guide.updatedDate}
              </div>
              <div>
                <span className="font-semibold text-ink">Reading Time:</span> {guide.readTime}
              </div>
            </div>
          </header>

          {/* Executive Summary */}
          <div className="rounded-2xl bg-sand/30 border border-sand p-6 mb-10 text-base text-ink leading-relaxed">
            <div className="text-xs font-bold uppercase tracking-wider text-pine mb-1">Key Takeaway & Summary</div>
            <p>{guide.summary}</p>
          </div>

          <div className="grid md:grid-cols-12 gap-10">
            {/* Main Content Body */}
            <div className="md:col-span-8 space-y-10">
              {/* Table of Contents */}
              <div className="rounded-xl border border-sand bg-paper-card p-5">
                <h2 className="text-sm font-bold text-ink uppercase tracking-wider mb-3">In This Guide</h2>
                <ul className="space-y-2 text-sm text-pine font-medium">
                  {guide.sections.map((sec) => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`} className="hover:underline">
                        {sec.heading}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#frequently-asked-questions" className="hover:underline">
                      Frequently Asked Questions
                    </a>
                  </li>
                </ul>
              </div>

              {/* Content Sections */}
              {guide.sections.map((sec) => (
                <section key={sec.id} id={sec.id} className="scroll-mt-24 space-y-4">
                  <h2 className="font-display text-2xl font-bold text-ink border-b border-sand/60 pb-2">
                    {sec.heading}
                  </h2>
                  <div
                    className="prose prose-stone max-w-none text-base text-ink leading-relaxed space-y-4"
                    dangerouslySetInnerHTML={{ __html: sec.contentHtml }}
                  />
                </section>
              ))}

              {/* Mid-Article Call CTA Box */}
              <div className="rounded-2xl bg-pine p-6 sm:p-8 text-paper shadow-float my-10">
                <div className="text-xs font-bold uppercase tracking-widest text-signal mb-1">
                  Ready to Discuss Your Coverage?
                </div>
                <h3 className="font-display text-2xl font-bold text-paper">
                  Speak Directly with a Licensed Specialist
                </h3>
                <p className="mt-2 text-sm text-paper/85 leading-relaxed">
                  Have specific questions about your home's square footage, roof age, or dwelling limits? Call our participating provider line for real-time answers.
                </p>
                <div className="mt-6">
                  <CallButton
                    vertical={guide.vertical}
                    label="Call to Explore Options"
                    placement="guide-inline-cta"
                    className="w-full sm:w-auto"
                  />
                </div>
                <p className="mt-3 text-[11px] text-paper/70">
                  Calls are free. Standard carrier rates apply. Independent referral service.
                </p>
              </div>

              {/* FAQs */}
              <section id="frequently-asked-questions" className="scroll-mt-24 pt-4">
                <h2 className="font-display text-2xl font-bold text-ink mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {guide.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group rounded-xl border border-sand bg-paper-card p-5 transition-all open:shadow-sm"
                    >
                      <summary className="flex cursor-pointer items-center justify-between font-bold text-ink text-base select-none">
                        <span>{faq.question}</span>
                        <span className="text-pine group-open:rotate-180 transition-transform">▼</span>
                      </summary>
                      <p className="mt-3 text-sm text-ink-muted leading-relaxed pt-2 border-t border-sand/40">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>

              {/* Author Bio Box */}
              <div className="rounded-2xl border border-sand bg-sand/20 p-6 flex items-start gap-4 my-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pine text-paper font-display font-bold text-lg">
                  {guide.author.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-ink text-base">{guide.author.name}</div>
                  <div className="text-xs text-pine font-semibold">{guide.author.role}</div>
                  <p className="text-xs text-ink-muted mt-2 leading-relaxed">{guide.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Sticky Sidebar */}
            <aside className="md:col-span-4 space-y-6">
              <div className="sticky top-24 space-y-6">
                {/* Direct Call Widget */}
                <div className="rounded-2xl bg-paper-card border border-sand p-6 shadow-premium">
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
                    ● Direct Hotline
                  </div>
                  <h3 className="font-display text-xl font-bold text-ink">
                    Explore Coverage by Phone
                  </h3>
                  <p className="mt-2 text-xs text-ink-muted leading-relaxed">
                    Skip web forms. Get connected with a participating licensed representative.
                  </p>
                  <div className="mt-5">
                    <CallButton
                      vertical={guide.vertical}
                      label="Call Specialist"
                      placement="guide-sidebar"
                      className="w-full text-base"
                    />
                  </div>
                </div>

                {/* Related Guides */}
                <div className="rounded-2xl bg-paper-card border border-sand p-6 shadow-sm">
                  <h3 className="font-bold text-ink text-sm uppercase tracking-wider mb-4">
                    Related Guides
                  </h3>
                  <div className="space-y-4 text-xs">
                    {getAllGuides()
                      .filter((g) => g.slug !== guide.slug)
                      .slice(0, 3)
                      .map((rg) => (
                        <div key={rg.slug} className="border-b border-sand/60 pb-3 last:border-0 last:pb-0">
                          <Link
                            href={`/guides/${rg.slug}`}
                            className="font-semibold text-ink hover:text-pine hover:underline transition-colors block"
                          >
                            {rg.title}
                          </Link>
                          <span className="text-[11px] text-ink-muted mt-1 block">{rg.readTime}</span>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-sand bg-paper-warm py-8 text-center text-xs text-ink-muted">
        <div className="mx-auto max-w-6xl px-5">
          <p>© {new Date().getFullYear()} {siteConfig.operator}. All rights reserved.</p>
          <div className="mt-3 flex justify-center gap-6">
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
            <Link href="/advertising-disclosure" className="hover:underline">Advertising Disclosure</Link>
            <Link href="/editorial-policy" className="hover:underline">Editorial Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
