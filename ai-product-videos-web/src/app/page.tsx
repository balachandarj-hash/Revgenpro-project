import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryFormSection } from "@/components/enquiry-form-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { SampleVideosCarousel } from "@/components/sample-videos-carousel";
import { ServiceIcon } from "@/components/service-icon";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#EC008C] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(236,0,140,0.45)] transition hover:brightness-110";
const secondaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/55 bg-black/25 px-6 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10";

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
        alt: "AI product ad videos",
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
  const { hero, services, samples, process, enquiry, faqs, footer, price, priceUnit } =
    productAdsContent;

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#05060f] text-white">
      <SiteHeader />

      <main id="top" className="relative z-10 scroll-mt-24">
        {/* Full-bleed HD spray hero — bottle/spray on right, copy on left */}
        <section className="relative isolate min-h-[min(100svh,920px)] overflow-hidden">
          <Image
            src="/product-ads/hero-perfume-spray.jpg"
            alt="Luxury perfume bottle spraying fragrance mist in a dark studio"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[72%_center] sm:object-[78%_center] lg:object-right"
          />
          {/* Readability veil over the text side (opposite the spray source) */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,15,0.94)_0%,rgba(8,10,28,0.82)_38%,rgba(10,12,32,0.45)_58%,rgba(5,6,15,0.18)_78%,rgba(5,6,15,0.35)_100%)]"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,transparent_20%,rgba(5,6,15,0.35)_100%)]"
          />

          <div className="relative mx-auto flex min-h-[min(100svh,920px)] w-full max-w-[1440px] items-center px-5 py-14 md:px-10 md:py-16">
            <div className="w-full max-w-xl lg:max-w-[560px]">
              <p className="inline-flex max-w-full rounded-full bg-[#EC008C] px-3.5 py-1.5 text-[11px] font-semibold leading-snug text-white sm:text-xs">
                {hero.badge}
              </p>

              <h1 className="mt-5 text-[clamp(1.75rem,4.4vw,3.25rem)] font-bold leading-[1.1] tracking-tight text-balance drop-shadow-[0_2px_24px_rgba(0,0,0,0.55)]">
                {hero.headlineBefore}{" "}
                <span className="text-[#FF4DB8]">{hero.headlineHighlight}</span>
              </h1>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/85 sm:text-base">
                {hero.description}
              </p>

              <p className="mt-5 text-sm text-white/80 sm:text-base">
                {hero.priceLabel}{" "}
                <span className="text-2xl font-bold text-[#22C55E] sm:text-3xl">
                  {price}
                  {priceUnit}
                </span>
              </p>

              <ul
                id={services.id}
                className="mt-7 grid scroll-mt-28 gap-3 sm:grid-cols-2"
              >
                {services.items.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-white/12 bg-[#121833]/70 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.35)] backdrop-blur-md"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EC008C]/20 text-[#FF4DB8]">
                        <ServiceIcon name={item.icon} />
                      </span>
                      <div>
                        <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/65">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

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
              <p className="mt-4 text-sm text-white/70">{hero.supportLine}</p>
            </div>
          </div>
        </section>

        <section
          id={samples.id}
          className="scroll-mt-28 border-t border-white/10 bg-[#0a0f22] px-5 py-14 md:px-10 md:py-16"
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

        <section
          id={process.id}
          className="scroll-mt-28 bg-[linear-gradient(180deg,#0b1024_0%,#1a1040_100%)] px-5 py-14 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4DB8]">
              {process.label}
            </p>
            <h2 className="mt-2 text-3xl font-bold">{process.title}</h2>
            <ol className="mt-8 grid gap-4 md:grid-cols-3">
              {process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-[#121833]/70 p-6"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#EC008C]/25 text-sm font-bold text-[#FF4DB8]">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/70">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id={enquiry.id} className="scroll-mt-28 px-5 py-14 md:px-10 md:py-16">
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

        <section className="scroll-mt-28 border-t border-white/10 px-5 py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#0a0f22] px-5 py-10 text-center md:px-10">
        <p className="text-sm font-semibold text-white/85">{brand.legalName}</p>
        <p className="mt-1 text-sm text-white/50">{footer.serviceLine}</p>
        <p className="mt-4 text-xs text-white/35">
          © {year} {brand.legalName}. All rights reserved.
        </p>
      </footer>

      <WhatsAppFloat />
      <StickyBottomCta />
    </div>
  );
}
