import type { Metadata } from "next";
import Image from "next/image";
import { CategoryIcon } from "@/components/category-icon";
import { EnquiryFormSection } from "@/components/enquiry-form-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { LuxuryProductStage } from "@/components/luxury-product-stage";
import { SampleVideosCarousel } from "@/components/sample-videos-carousel";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

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
        alt: "AI Product Video Studio",
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
  const { hero, categories, styles, samples, process, pricing, enquiry, faqs, footer, price } =
    productAdsContent;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F7EFE4] text-[#1A1410]">
      <SiteHeader />

      <main id="top" className="relative z-10 w-full scroll-mt-24">
        {/* Hero — champagne silk + product stage */}
        <section className="relative isolate overflow-hidden">
          <Image
            src="/product-ads/luxury-silk-bg.jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center opacity-90"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(105deg,rgba(251,247,240,0.92)_0%,rgba(247,239,228,0.78)_42%,rgba(247,239,228,0.35)_70%,rgba(232,214,186,0.25)_100%)]"
          />

          <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-10 px-4 py-12 sm:px-6 md:px-10 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8 lg:py-20">
            <div className="min-w-0 max-w-xl">
              <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#8A735C] sm:text-xs">
                <span>{hero.eyebrow}</span>
                <span aria-hidden className="h-px w-10 bg-[#C4A574]/80" />
              </p>

              <h1 className="mt-5 font-[family-name:var(--font-display)] text-[clamp(2.35rem,5.5vw,4.4rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-[#1A1410] text-balance">
                {hero.headline}
              </h1>

              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#5C4A3A] sm:text-base">
                {hero.description}
              </p>

              <p className="mt-6 inline-flex max-w-full items-center rounded-full border border-[#E0D5C8] bg-[#F3EBE0]/90 px-4 py-2 text-sm text-[#5C4A3A]">
                {hero.priceBadge}{" "}
                <span className="ml-1.5 font-bold text-[#1A1410]">{price}</span>
              </p>

              <div className="mt-7">
                <a
                  href="#enquiry"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1A1410] px-7 text-sm font-semibold text-[#FBF7F0] shadow-[0_14px_32px_rgba(26,20,16,0.22)] transition hover:bg-[#2C241C]"
                >
                  {hero.primaryCta}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <LuxuryProductStage />
          </div>

          {/* Category glass bar */}
          <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-6 md:px-10">
            <div className="overflow-x-auto rounded-[1.5rem] border border-[#E8DFD2]/90 bg-[#FBF7F0]/75 shadow-[0_16px_40px_rgba(58,42,20,0.08)] backdrop-blur-md">
              <ul className="flex min-w-max items-stretch justify-between gap-1 px-2 py-3 sm:min-w-0 sm:px-4 md:py-4">
                {categories.map((cat) => (
                  <li key={cat.id} className="flex-1">
                    <a
                      href={`#${styles.id}`}
                      className="flex min-w-[7.5rem] flex-col items-center gap-2 rounded-xl px-3 py-2 text-center text-[#5C4A3A] transition hover:bg-white/70 hover:text-[#1A1410] sm:min-w-0"
                    >
                      <span className="text-[#8A735C]">
                        <CategoryIcon name={cat.icon} />
                      </span>
                      <span className="text-[11px] font-medium leading-snug sm:text-xs">
                        {cat.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Video styles */}
        <section
          id={styles.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#FFFCF7] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
              {styles.label}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#1A1410] sm:text-4xl">
              {styles.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[#5C4A3A]">{styles.subtitle}</p>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {styles.items.map((item) => (
                <li key={item.title} className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_14px_36px_rgba(58,42,20,0.12)]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 22vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1410]/70 via-transparent to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <h3 className="text-base font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-white/80">{item.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Samples */}
        <section
          id={samples.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#F7EFE4] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
              {samples.label}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#1A1410] sm:text-4xl">
              {samples.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[#5C4A3A]">{samples.subtitle}</p>
            <div className="mt-2 [&_h2]:text-[#1A1410] [&_p]:text-[#5C4A3A]">
              <SampleVideosCarousel />
            </div>
          </div>
        </section>

        {/* How it works */}
        <section
          id={process.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#FFFCF7] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
              {process.label}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#1A1410] sm:text-4xl">
              {process.title}
            </h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-[#E8DFD2] bg-[#FBF7F0] p-6 shadow-[0_10px_28px_rgba(58,42,20,0.05)]"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1A1410] text-sm font-bold text-[#FBF7F0]">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#1A1410]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C4A3A]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Pricing */}
        <section
          id={pricing.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#F7EFE4] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
              {pricing.label}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#1A1410] sm:text-4xl">
              {pricing.title}
            </h2>
            <p className="mt-6 font-[family-name:var(--font-display)] text-5xl font-semibold text-[#1A1410] sm:text-6xl">
              {pricing.amount}
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.18em] text-[#8A735C]">
              {pricing.unit}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#5C4A3A]">{pricing.note}</p>
            <a
              href="#enquiry"
              className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#1A1410] px-7 text-sm font-semibold text-[#FBF7F0] transition hover:bg-[#2C241C]"
            >
              {pricing.cta}
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* Enquiry */}
        <section
          id={enquiry.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#FFFCF7] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-xl">
            <EnquiryFormSection />
            <p className="mt-4 text-center text-sm text-[#6B5A48]">
              Prefer chat?{" "}
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#1A1410] underline-offset-2 hover:underline"
              >
                Open WhatsApp
              </a>
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#F7EFE4] px-4 py-14 sm:px-6 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[#1A1410] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#E8DFD2] bg-[#FBF7F0] px-4 py-10 text-center sm:px-6 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-3">
          <Image
            src={brand.logoSrc}
            alt={brand.name}
            width={168}
            height={42}
            className="h-9 w-auto sm:h-10"
          />
          <p className="text-sm font-semibold text-[#1A1410]">{brand.legalName}</p>
          <p className="text-sm text-[#6B5A48]">{footer.serviceLine}</p>
          <p className="mt-2 text-xs text-[#8A735C]">
            © {year} {brand.legalName}. All rights reserved.
          </p>
        </div>
      </footer>

      <WhatsAppFloat />
      <StickyBottomCta />
    </div>
  );
}
