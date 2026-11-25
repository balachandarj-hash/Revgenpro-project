import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryFormSection } from "@/components/enquiry-form-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { ProductAdsHeroVisual } from "@/components/product-ads-hero-visual";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { StyleExploreButton } from "@/components/style-explore-button";
import { brand } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A5B4FC]">{children}</p>
  );
}

const primaryBtn =
  "inline-flex min-h-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#2563EB)] px-5 text-sm font-semibold shadow-[0_12px_32px_rgba(124,58,237,0.35)] transition hover:brightness-110";
const secondaryBtn =
  "inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 text-sm font-semibold transition hover:border-white/35 hover:bg-white/10";

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
        alt: productAdsContent.hero.heroImageAlt,
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

  return (
    <div className="studio-page relative min-h-screen overflow-x-hidden text-white">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="studio-orb studio-orb-purple" />
        <span className="studio-orb studio-orb-blue" />
        <span className="studio-orb studio-orb-violet" />
      </div>

      <SiteHeader />

      <main id="top" className="relative z-10 scroll-mt-20">
        {/* 1 — Hero */}
        <section className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 py-8 md:gap-10 md:px-10 md:py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-16">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#A5B4FC]">
              {productAdsContent.hero.label}
            </p>
            <p className="mt-4 inline-flex max-w-full rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/15 px-3 py-1.5 text-[11px] font-semibold leading-snug text-[#EDE9FE] sm:text-xs">
              {productAdsContent.hero.hook}
            </p>
            <h1 className="mt-4 text-[clamp(1.55rem,4.4vw,3rem)] font-semibold leading-[1.12] tracking-tight text-balance">
              {productAdsContent.hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/78 sm:text-base">
              {productAdsContent.hero.description}
            </p>
            <div className="studio-glass mt-5 inline-flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 rounded-2xl border border-[#7C3AED]/35 px-4 py-3 sm:rounded-full">
              <span className="text-sm font-semibold text-[#C4B5FD] sm:text-base">
                {productAdsContent.hero.priceHighlight}
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#enquiry" className={primaryBtn}>
                {productAdsContent.hero.primaryCta}
              </a>
              <a href="#styles" className={secondaryBtn}>
                {productAdsContent.hero.secondaryCta}
              </a>
            </div>
            <p className="mt-5 text-sm text-white/55">{productAdsContent.hero.trustLine}</p>
          </div>
          <ProductAdsHeroVisual />
        </section>

        {/* 2 — Problem / Solution */}
        <section
          id={productAdsContent.problem.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-14 md:px-10 md:py-20"
        >
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {productAdsContent.problem.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/75">
                {productAdsContent.problem.description}
              </p>
            </div>
            <ul className="mt-10 grid gap-5 sm:grid-cols-3">
              {productAdsContent.problem.benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="studio-glass rounded-3xl border border-white/10 p-6 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition hover:border-[#7C3AED]/35"
                >
                  <h3 className="text-lg font-semibold text-[#EDE9FE]">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{benefit.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 — Video styles */}
        <section
          id={productAdsContent.styles.id}
          className="scroll-mt-28 bg-[#0c0c10]/80 px-5 py-14 md:px-10 md:py-20"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{productAdsContent.styles.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {productAdsContent.styles.title}
            </h2>
            <p className="mt-3 max-w-2xl text-white/70">{productAdsContent.styles.subtitle}</p>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {productAdsContent.styles.items.map((style) => (
                <li
                  key={style.id}
                  className="studio-glass group overflow-hidden rounded-3xl border border-white/10 shadow-[0_16px_40px_rgba(0,0,0,0.28)] transition hover:border-[#7C3AED]/40"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={style.image}
                      alt={style.imageAlt}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111113]/80 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{style.title}</h3>
                    <p className="mt-1.5 text-sm text-white/70">{style.description}</p>
                    <div className="mt-4">
                      <StyleExploreButton styleTitle={style.title} label={style.cta} />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4 — How it works */}
        <section
          id={productAdsContent.process.id}
          className="scroll-mt-28 px-5 py-14 md:px-10 md:py-20"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{productAdsContent.process.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold">{productAdsContent.process.title}</h2>
            <ol className="mt-10 grid gap-5 md:grid-cols-3">
              {productAdsContent.process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="studio-glass relative rounded-3xl border border-white/10 p-6"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#7C3AED]/25 text-sm font-bold text-[#DDD6FE]">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 5 — Pricing */}
        <section
          id={productAdsContent.pricing.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-14 md:px-10 md:py-20"
        >
          <div className="mx-auto max-w-xl text-center">
            <SectionLabel>{productAdsContent.pricing.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold">{productAdsContent.pricing.title}</h2>
            <div className="studio-glass mt-8 rounded-3xl border border-[#7C3AED]/35 p-8 shadow-[0_24px_60px_rgba(124,58,237,0.22)]">
              <p className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold tracking-tight">{productAdsContent.pricing.price}</span>
                <span className="text-lg font-semibold text-[#A5B4FC]">
                  {productAdsContent.pricing.unit}
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-left">
                {productAdsContent.pricing.benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-white/80">
                    <span className="mt-0.5 text-[#A5B4FC]" aria-hidden>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="#enquiry" className={`${primaryBtn} mt-8 w-full sm:w-auto`}>
                {productAdsContent.pricing.cta}
              </a>
            </div>
          </div>
        </section>

        {/* 6 — Lead form */}
        <section
          id={productAdsContent.enquiry.id}
          className="scroll-mt-28 px-5 py-14 md:px-10 md:py-20"
        >
          <div className="mx-auto max-w-xl">
            <EnquiryFormSection />
          </div>
        </section>

        {/* 7 — FAQ */}
        <section className="scroll-mt-28 border-t border-white/10 px-5 py-14 md:px-10 md:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
            <div className="mt-8">
              <FaqAccordion items={productAdsContent.faqs} />
            </div>
          </div>
        </section>

        {/* 8 — Final CTA */}
        <section
          id={productAdsContent.finalCta.id}
          className="scroll-mt-28 px-5 pb-16 md:px-10 md:pb-24"
        >
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(124,58,237,0.22),rgba(37,99,235,0.18))] px-6 py-12 text-center sm:px-10">
            <h2 className="text-2xl font-semibold sm:text-3xl">{productAdsContent.finalCta.title}</h2>
            <p className="mx-auto mt-3 max-w-xl text-white/75">{productAdsContent.finalCta.body}</p>
            <a href="#enquiry" className={`${primaryBtn} mt-7`}>
              {productAdsContent.finalCta.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-center md:px-10">
        <p className="text-sm font-semibold text-white/80">{brand.legalName}</p>
        <p className="mt-1 text-sm text-white/55">{productAdsContent.footer.serviceLine}</p>
        <p className="mt-4 text-xs text-white/40">
          © {year} {brand.legalName}. All rights reserved.
        </p>
      </footer>

      <StickyBottomCta />
    </div>
  );
}
