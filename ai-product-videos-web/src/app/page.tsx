import type { Metadata } from "next";
import { EnquiryFormSection } from "@/components/enquiry-form-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { ProductShowcase } from "@/components/product-showcase";
import { SampleVideosCarousel } from "@/components/sample-videos-carousel";
import { ServiceIcon } from "@/components/service-icon";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#EC008C] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(236,0,140,0.32)] transition hover:brightness-110";
const secondaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D4C7B8] bg-white/70 px-6 text-sm font-semibold text-[#2C241C] transition hover:bg-white";

export const metadata: Metadata = {
  title: productAdsContent.seo.title,
  description: productAdsContent.seo.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: productAdsContent.seo.siteUrl,
    siteName: brand.legalName,
    title: productAdsContent.seo.ogTitle,
    description: productAdsContent.seo.ogDescription,
    images: [{ url: productAdsContent.seo.ogImage, width: 1200, height: 630, alt: "AI product ad videos" }],
  },
  twitter: {
    card: "summary_large_image",
    title: productAdsContent.seo.ogTitle,
    description: productAdsContent.seo.ogDescription,
    images: [productAdsContent.seo.ogImage],
  },
};

export default function HomePage() {
  const year = new Date().getFullYear();
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);
  const { hero, services, samples, process, enquiry, faqs, footer, price, priceUnit } =
    productAdsContent;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F7F2EA] text-[#2C241C]">
      <SiteHeader />

      <main id="top" className="relative z-10 scroll-mt-24">
        {/* Hero — ivory studio + animated product showcase */}
        <section className="relative overflow-hidden border-b border-[#E8DFD2] bg-[radial-gradient(ellipse_at_top,#FFFCF7_0%,#F7F2EA_55%,#EFE6DA_100%)] px-5 py-10 md:px-10 md:py-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-16 top-24 h-56 w-56 rounded-full bg-[#E8D5C0]/40 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-[#F0E0D0]/50 blur-3xl"
          />

          <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
                {hero.showcaseLabel}
              </p>
              <p className="mt-4 inline-flex max-w-full rounded-full bg-[#EC008C] px-3.5 py-1.5 text-[11px] font-semibold leading-snug text-white sm:text-xs">
                {hero.badge}
              </p>

              <h1 className="mt-5 text-[clamp(1.65rem,4.2vw,3.1rem)] font-bold leading-[1.12] tracking-tight text-balance text-[#2C241C]">
                {hero.headlineBefore}{" "}
                <span className="text-[#C4006A]">{hero.headlineHighlight}</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#5C4E40] sm:text-base">
                {hero.description}
              </p>

              <p className="mt-5 text-sm text-[#5C4E40] sm:text-base">
                {hero.priceLabel}{" "}
                <span className="text-2xl font-bold text-[#15803D] sm:text-3xl">
                  {price}
                  {priceUnit}
                </span>
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enquiry" className={primaryBtn}>
                  {hero.primaryCta}
                  <span aria-hidden>→</span>
                </a>
                <a href={`#${samples.id}`} className={secondaryBtn}>
                  <span aria-hidden>▶</span>
                  {hero.secondaryCta}
                </a>
              </div>
              <p className="mt-4 text-sm text-[#6B5A48]">{hero.supportLine}</p>
            </div>

            <ProductShowcase />
          </div>

          <ul
            id={services.id}
            className="relative mx-auto mt-12 grid max-w-[1440px] scroll-mt-28 gap-3 sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.items.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl border border-[#E8DFD2] bg-[#FFFCF7]/90 p-4 shadow-[0_10px_28px_rgba(58,42,28,0.06)]"
              >
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EC008C]/12 text-[#C4006A]">
                    <ServiceIcon name={item.icon} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#2C241C]">{item.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#6B5A48]">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Sample videos swipe */}
        <section
          id={samples.id}
          className="scroll-mt-28 bg-[#1A1420] px-5 py-14 text-white md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/60">
              {samples.label}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{samples.title}</h2>
            <p className="mt-3 max-w-2xl text-white/70">{samples.subtitle}</p>
            <SampleVideosCarousel />
          </div>
        </section>

        {/* How it works */}
        <section
          id={process.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] px-5 py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
              {process.label}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#2C241C]">{process.title}</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-[#E8DFD2] bg-[#FFFCF7] p-6 shadow-[0_10px_28px_rgba(58,42,28,0.05)]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EC008C]/12 text-sm font-bold text-[#C4006A]">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#2C241C]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6B5A48]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Enquiry */}
        <section
          id={enquiry.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#1A1420] px-5 py-14 text-white md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-xl">
            <EnquiryFormSection />
            <p className="mt-4 text-center text-sm text-white/55">
              Prefer chat?{" "}
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#86EFAC] underline-offset-2 hover:underline"
              >
                Open WhatsApp
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="scroll-mt-28 border-t border-[#E8DFD2] px-5 py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-[#2C241C]">Frequently Asked Questions</h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#E8DFD2] bg-[#F7F2EA] px-5 py-10 text-center md:px-10">
        <p className="text-sm font-semibold text-[#2C241C]">{brand.legalName}</p>
        <p className="mt-1 text-sm text-[#6B5A48]">{footer.serviceLine}</p>
        <p className="mt-4 text-xs text-[#8A735C]">
          © {year} {brand.legalName}. All rights reserved.
        </p>
      </footer>

      <WhatsAppFloat />
      <StickyBottomCta />
    </div>
  );
}
