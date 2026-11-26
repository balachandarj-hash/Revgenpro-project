import type { Metadata } from "next";
import Image from "next/image";
import { CategoryIcon } from "@/components/category-icon";
import { EnquiryFormSection } from "@/components/enquiry-form-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { LuxuryProductStage } from "@/components/luxury-product-stage";
import { ProcessStepIcon } from "@/components/process-step-icon";
import { SampleVideosCarousel } from "@/components/sample-videos-carousel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { WatchExplainerButton } from "@/components/watch-explainer-button";
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
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);
  const {
    hero,
    categories,
    styles,
    beforeAfter,
    samples,
    process,
    pricing,
    enquiry,
    trust,
    faqs,
  } = productAdsContent;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#F7EFE4] text-[#1A1410]">
      <SiteHeader />

      <main id="top" className="relative z-10 w-full scroll-mt-24">
        {/* 1. Hero — benefit headline, single product + play, quick benefits, bold CTA */}
        <section className="relative isolate overflow-hidden">
          <Image
            src="/product-ads/luxury-silk-bg.jpg"
            alt=""
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(100deg,rgba(251,247,240,0.96)_0%,rgba(251,247,240,0.88)_34%,rgba(247,239,228,0.45)_58%,rgba(247,239,228,0.12)_100%)]"
          />

          <div className="relative mx-auto grid w-full max-w-[1440px] items-center gap-8 px-4 py-10 sm:px-6 md:px-10 md:py-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8 lg:py-16">
            <div className="relative z-10 min-w-0 max-w-xl lg:pr-2">
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-[#1A1410] sm:text-xs">
                <span>{hero.eyebrow}</span>
                <span aria-hidden className="h-px w-12 bg-[#1A1410]/55" />
              </p>

              <p className="mt-4 max-w-lg text-[15px] font-semibold leading-snug text-[#2A1F16] sm:text-base md:text-lg">
                {hero.hook}
              </p>

              <h1 className="mt-3 font-[family-name:var(--font-display)] text-[clamp(2.15rem,4.6vw,3.75rem)] font-semibold leading-[1.08] tracking-[-0.02em] text-[#1A1410] text-balance">
                {hero.headline}
              </h1>

              <p className="mt-5 max-w-md text-[15px] font-medium leading-relaxed text-[#2A1F16] sm:text-base">
                {hero.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {hero.benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="inline-flex items-center rounded-full border border-[#C4A574]/75 bg-[#F0E4D2]/90 px-3.5 py-1.5 text-xs font-semibold text-[#1A1410] sm:text-sm"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#enquiry"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2A1F16] px-7 text-sm font-semibold text-[#FBF7F0] shadow-[0_14px_32px_rgba(26,20,16,0.22)] transition hover:bg-[#1A1410]"
                >
                  {hero.primaryCta}
                  <span aria-hidden>→</span>
                </a>
                <WatchExplainerButton className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#1A1410]/25 bg-white/55 px-5 text-sm font-semibold text-[#1A1410] backdrop-blur-sm transition hover:bg-white/85" />
              </div>
            </div>

            <LuxuryProductStage />
          </div>

          <div className="relative mx-auto w-full max-w-[1440px] px-4 pb-10 sm:px-6 md:px-10">
            <div className="overflow-x-auto rounded-[1.75rem] border border-white/70 bg-white/55 shadow-[0_18px_44px_rgba(58,42,20,0.1)] backdrop-blur-xl">
              <ul className="flex min-w-max items-stretch justify-between gap-1 px-2 py-3.5 sm:min-w-0 sm:px-5 md:py-4">
                {categories.map((cat) => (
                  <li key={cat.id} className="flex-1">
                    <a
                      href={`#${styles.id}`}
                      className="flex min-w-[7.5rem] flex-col items-center gap-2 rounded-xl px-3 py-2 text-center text-[#5C4A3A] transition hover:bg-white/80 hover:text-[#1A1410] sm:min-w-0"
                    >
                      <span className="text-[#6B5544]">
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

        {/* 2. Video styles — cinematic cards + play icons */}
        <section
          id={styles.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#FFFCF7] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6B5544]">
              {styles.label}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-tight text-[#1A1410]">
              {styles.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] font-medium leading-relaxed text-[#3D2F22] sm:text-base">
              {styles.subtitle}
            </p>
            <ul className="mt-8 mx-auto grid max-w-[1080px] justify-items-center gap-5 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4">
              {styles.items.map((item) => (
                <li
                  key={item.title}
                  className="group flex w-full max-w-[280px] justify-center sm:max-w-none"
                >
                  <a
                    href={`#${samples.id}`}
                    className="relative mx-auto aspect-[3/4] w-full overflow-hidden rounded-2xl shadow-[0_14px_36px_rgba(58,42,20,0.14)] ring-1 ring-[#E8DFD2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1410]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      quality={95}
                      className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 50vw, 22vw"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(to_top,rgba(26,20,16,0.92)_0%,rgba(26,20,16,0.55)_38%,rgba(26,20,16,0.08)_62%,transparent_100%)]"
                    />
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-[42%] flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#1A1410] shadow-[0_10px_24px_rgba(26,20,16,0.25)] transition group-hover:scale-105"
                    >
                      <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5 fill-current">
                        <path d="M8 5.14v13.72L19 12 8 5.14z" />
                      </svg>
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                      <h3 className="text-base font-bold tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.55)] sm:text-lg">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs font-medium leading-relaxed text-white/95 drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)] sm:text-[13px]">
                        {item.description}
                      </p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3. Before & After */}
        <section
          id={beforeAfter.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#F7EFE4] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1100px] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#6B5544]">
              {beforeAfter.label}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold leading-tight text-[#1A1410]">
              {beforeAfter.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-[15px] font-medium leading-relaxed text-[#3D2F22] sm:text-base">
              {beforeAfter.subtitle}
            </p>

            <div className="mt-10 mx-auto grid max-w-[720px] items-center gap-5 sm:max-w-[820px] sm:grid-cols-[1fr_auto_1fr] sm:gap-5">
              <figure className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl bg-[#FFFCF7] shadow-[0_14px_36px_rgba(58,42,20,0.12)] ring-1 ring-[#E8DFD2] sm:max-w-none">
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src={beforeAfter.beforeImage}
                    alt="Original sunscreen product photo"
                    fill
                    quality={90}
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 80vw, 28vw"
                  />
                </div>
                <figcaption className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {beforeAfter.beforeLabel}
                </figcaption>
              </figure>

              <div
                aria-hidden
                className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#1A1410] text-sm font-bold text-[#FBF7F0] sm:h-12 sm:w-12"
              >
                →
              </div>

              <figure className="relative mx-auto w-full max-w-[320px] overflow-hidden rounded-2xl bg-black shadow-[0_14px_36px_rgba(58,42,20,0.16)] ring-1 ring-[#E8DFD2] sm:max-w-none">
                <div className="relative aspect-[9/16] w-full">
                  <video
                    className="absolute inset-0 h-full w-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={beforeAfter.afterPoster}
                  >
                    <source src={beforeAfter.afterVideo} type="video/mp4" />
                  </video>
                </div>
                <figcaption className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {beforeAfter.afterLabel}
                </figcaption>
              </figure>
            </div>

            <a
              href={`#${enquiry.id}`}
              className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#2A1F16] px-7 text-sm font-semibold text-[#FBF7F0] shadow-[0_14px_32px_rgba(26,20,16,0.2)] transition hover:bg-[#1A1410]"
            >
              {beforeAfter.cta}
              <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* 4. Sample films — bigger 9:16 */}
        <section
          id={samples.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#FFFCF7] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
              {samples.label}
            </p>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-[clamp(1.85rem,3.5vw,2.75rem)] font-semibold text-[#1A1410]">
              {samples.title}
            </h2>
            <p className="mt-3 max-w-2xl text-[#5C4A3A]">{samples.subtitle}</p>
            <div className="mt-2 [&_h2]:text-[#1A1410] [&_p]:text-[#5C4A3A]">
              <SampleVideosCarousel />
            </div>
          </div>
        </section>

        {/* 5. How it works — 3 visual steps */}
        <section
          id={process.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#F7EFE4] px-4 py-14 sm:px-6 md:px-10 md:py-16"
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
                  className="rounded-3xl border border-[#E8DFD2] bg-[#FFFCF7] p-6 shadow-[0_10px_28px_rgba(58,42,20,0.05)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1A1410] text-[#FBF7F0]">
                      <ProcessStepIcon name={step.icon} />
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8A735C]">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1A1410]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C4A3A]">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6. Pricing + Form — one-time badge, checklist, stronger CTA */}
        <section
          id={pricing.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#FFFCF7] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
            <div className="flex flex-col items-stretch justify-center self-start rounded-[1.75rem] border border-[#E8DFD2] bg-[#FBF7F0] p-6 shadow-[0_16px_40px_rgba(58,42,20,0.08)] sm:p-8 lg:self-stretch">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B5544]">
                {pricing.label}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#1A1410] sm:text-[2.35rem]">
                {pricing.title}
              </h2>

              <span className="mt-4 inline-flex w-fit items-center rounded-full border border-[#C4A574]/70 bg-[#F0E4D2] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#1A1410]">
                {pricing.badge}
              </span>

              <div className="mt-5 w-full text-center lg:text-left">
                <p className="font-[family-name:var(--font-display)] text-5xl font-semibold text-[#1A1410] sm:text-6xl">
                  {pricing.amount}
                </p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-[#3D2F22]">
                  {pricing.unit}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-left">
                {pricing.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-[#2A1F16]">
                    <span
                      aria-hidden
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1A1410] text-[10px] text-[#FBF7F0]"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm font-medium leading-relaxed text-[#3D2F22]">{pricing.note}</p>

              <a
                href={`#${enquiry.id}`}
                className="mt-8 inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-[#1A1410] px-7 text-sm font-semibold text-[#FBF7F0] transition hover:bg-[#2C241C]"
              >
                {pricing.cta}
                <span aria-hidden>→</span>
              </a>
              <p className="mt-6 text-sm text-[#3D2F22]">
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

            <div id={enquiry.id} className="scroll-mt-28">
              <EnquiryFormSection />
            </div>
          </div>
        </section>

        {/* 7. Trust & FAQ — FAQ + testimonial */}
        <section
          id={trust.id}
          className="scroll-mt-28 border-t border-[#E8DFD2] bg-[#F7EFE4] px-4 py-14 sm:px-6 md:px-10 md:py-16"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
                FAQ
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#1A1410] sm:text-4xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-8">
                <FaqAccordion items={faqs} />
              </div>
            </div>

            <aside className="rounded-[1.75rem] border border-[#E8DFD2] bg-[#FFFCF7] p-6 shadow-[0_16px_40px_rgba(58,42,20,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
                {trust.label}
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold text-[#1A1410] sm:text-3xl">
                {trust.title}
              </h2>
              <div className="mt-6 flex gap-1 text-[#B78B55]" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-5 w-5 fill-current" aria-hidden>
                    <path d="M10 1.5l2.35 5.1 5.55.7-4.1 3.85 1.1 5.45L10 13.9 5.1 16.6l1.1-5.45-4.1-3.85 5.55-.7L10 1.5z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-base leading-relaxed text-[#2A1F16]">
                “{trust.testimonial.quote}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5C7A5] font-[family-name:var(--font-display)] text-lg font-semibold text-[#1A1410]"
                >
                  {trust.testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")
                    .slice(0, 2)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#1A1410]">{trust.testimonial.name}</p>
                  <p className="text-xs text-[#6B5544]">{trust.testimonial.role}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <SiteFooter />

      <WhatsAppFloat />
      <StickyBottomCta />
    </div>
  );
}
