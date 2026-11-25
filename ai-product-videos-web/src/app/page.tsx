import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryFormSection } from "@/components/enquiry-form-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { SampleVideosCarousel } from "@/components/sample-videos-carousel";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#EC008C] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(236,0,140,0.35)] transition hover:brightness-110";
const secondaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/70 bg-transparent px-6 text-sm font-semibold text-white transition hover:bg-white/10";

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
    images: [
      {
        url: productAdsContent.seo.ogImage,
        width: 1200,
        height: 630,
        alt: "AI promotional product video samples",
      },
    ],
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
  const { hero, samples, gallery, process, pricing, enquiry, faqs, footer } = productAdsContent;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#12081f] text-white">
      <SiteHeader />

      <main id="top" className="relative z-10 scroll-mt-20">
        {/* Hero — clear hook, no studio label */}
        <section className="relative overflow-hidden bg-[linear-gradient(135deg,#2a0a3d_0%,#4a1468_42%,#1a0b2e_100%)] px-5 py-12 md:px-10 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#EC008C]/20 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#7C3AED]/25 blur-3xl"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <h1 className="text-[clamp(1.75rem,5vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-balance">
              {hero.headline}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {hero.description}
            </p>

            <p className="mx-auto mt-6 max-w-2xl text-sm font-semibold text-[#F9A8D4] sm:text-base">
              {hero.categoriesLine}
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {hero.categories.map((cat) => (
                <li
                  key={cat}
                  className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90"
                >
                  {cat}
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-8 max-w-md rounded-3xl border border-[#F9A8D4]/35 bg-black/25 px-6 py-6 shadow-[0_20px_50px_rgba(0,0,0,0.28)] backdrop-blur-sm">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F9A8D4]">
                {hero.offerLabel}
              </p>
              <p className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold tracking-tight">{hero.offerPrice}</span>
                <span className="text-lg font-semibold text-[#F9A8D4]">{hero.offerUnit}</span>
              </p>
              <p className="mt-3 text-sm text-white/75">{hero.offerBody}</p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#enquiry" className={primaryBtn}>
                {hero.primaryCta}
                <span aria-hidden>→</span>
              </a>
              <a href={`#${samples.id}`} className={secondaryBtn}>
                {hero.secondaryCta}
                <span aria-hidden>▶</span>
              </a>
            </div>
            <p className="mt-4 text-sm text-white/70">{hero.supportLine}</p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#25D366]/55 bg-[#25D366]/15 px-5 text-sm font-semibold text-[#86EFAC] transition hover:bg-[#25D366]/25"
            >
              <span aria-hidden>●</span>
              {hero.whatsappCta}
            </a>
          </div>
        </section>

        {/* Sample videos — swipe model */}
        <section
          id={samples.id}
          className="scroll-mt-24 bg-[linear-gradient(90deg,#5b0f4a_0%,#2d0b45_45%,#12081f_100%)] px-5 py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
              {samples.label}
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{samples.title}</h2>
            <p className="mt-3 max-w-2xl text-white/75">{samples.subtitle}</p>
            <SampleVideosCarousel />
          </div>
        </section>

        {/* Different product stills */}
        <section
          id={gallery.id}
          className="scroll-mt-24 border-t border-white/10 px-5 py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{gallery.title}</h2>
            <p className="mt-3 max-w-2xl text-white/70">{gallery.subtitle}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {gallery.items.map((item) => (
                <li
                  key={item.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <p className="px-4 py-3 text-sm font-semibold">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section
          id={process.id}
          className="scroll-mt-24 bg-[#0c0618] px-5 py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#F9A8D4]">
              {process.label}
            </p>
            <h2 className="mt-2 text-3xl font-bold">{process.title}</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EC008C]/25 text-sm font-bold text-[#F9A8D4]">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing highlight */}
        <section
          id={pricing.id}
          className="scroll-mt-24 px-5 py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-xl rounded-3xl border border-[#EC008C]/35 bg-[linear-gradient(160deg,rgba(236,0,140,0.18),rgba(76,29,149,0.25))] p-8 text-center shadow-[0_24px_60px_rgba(236,0,140,0.18)]">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#F9A8D4]">
              {pricing.label}
            </p>
            <h2 className="mt-3 text-4xl font-bold">{pricing.title}</h2>
            <p className="mt-3 text-white/75">{pricing.body}</p>
            <ul className="mt-6 space-y-2 text-left text-sm text-white/85">
              {pricing.benefits.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#F9A8D4]" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#enquiry" className={`${primaryBtn} mt-8 w-full sm:w-auto`}>
              {pricing.cta}
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* Lead form */}
        <section id={enquiry.id} className="scroll-mt-24 px-5 py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-xl">
            <EnquiryFormSection />
          </div>
        </section>

        {/* FAQ */}
        <section className="scroll-mt-24 border-t border-white/10 px-5 py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-5 pb-16 md:px-10 md:pb-20">
          <div className="mx-auto max-w-3xl rounded-3xl bg-[linear-gradient(135deg,#4a1468,#EC008C)] px-6 py-12 text-center sm:px-10">
            <h2 className="text-2xl font-bold sm:text-3xl">{hero.headline}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/85">{hero.offerBody}</p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#enquiry"
                className="inline-flex min-h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-[#831843] transition hover:brightness-95"
              >
                {hero.primaryCta}
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full border border-white/70 px-6 text-sm font-semibold text-white"
              >
                {hero.whatsappCta}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-black/5 bg-[#F8F8F8] px-5 py-10 text-center md:px-10">
        <p className="text-sm font-semibold text-[#1a1a1a]">{brand.legalName}</p>
        <p className="mt-1 text-sm text-[#555]">{footer.serviceLine}</p>
        <p className="mt-4 text-xs text-[#777]">
          © {year} {brand.legalName}. All rights reserved.
        </p>
      </footer>

      <WhatsAppFloat />
      <StickyBottomCta />
    </div>
  );
}
