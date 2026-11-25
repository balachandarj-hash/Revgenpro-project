import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryFormSection } from "@/components/enquiry-form-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroSprayVideo } from "@/components/hero-spray-video";
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
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/55 bg-black/35 px-6 text-sm font-semibold text-white transition hover:bg-white/10";

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
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#05060f] text-white">
      <SiteHeader />

      <main id="top" className="relative z-10 w-full scroll-mt-24">
        {/* Full-bleed 2s looping spray video — bottle sharp on right, copy on left */}
        <section className="relative isolate w-full min-h-[min(100svh,920px)] overflow-hidden bg-[#05060f]">
          <HeroSprayVideo />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,15,0.72)_0%,rgba(5,6,15,0.35)_40%,transparent_70%)] sm:bg-[linear-gradient(90deg,rgba(5,6,15,0.55)_0%,rgba(5,6,15,0.22)_42%,transparent_68%)]"
          />

          <div className="relative mx-auto flex min-h-[min(100svh,920px)] w-full max-w-[1440px] items-center px-4 py-12 sm:px-5 sm:py-14 md:px-10 md:py-16">
            <div className="w-full max-w-xl rounded-3xl border border-white/15 bg-[#07091a]/94 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.55)] sm:p-7 lg:max-w-[560px] lg:p-8">
              <p className="inline-flex max-w-full rounded-full bg-[#EC008C] px-3.5 py-1.5 text-xs font-semibold leading-snug text-white sm:text-[13px]">
                {hero.badge}
              </p>

              <h1 className="mt-5 text-[clamp(1.7rem,5vw,3.35rem)] font-extrabold leading-[1.08] tracking-tight text-balance text-white">
                {hero.headlineBefore}{" "}
                <span className="text-[#FF5EC0]">{hero.headlineHighlight}</span>
              </h1>

              <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/95 sm:text-base">
                {hero.description}
              </p>

              <p className="mt-5 text-[15px] font-medium text-white sm:text-base">
                {hero.priceLabel}{" "}
                <span className="text-2xl font-extrabold text-[#3DFF7A] sm:text-3xl">
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
                    className="rounded-2xl border border-white/15 bg-[#121833] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.35)]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EC008C]/25 text-[#FF5EC0]">
                        <ServiceIcon name={item.icon} />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-white">{item.title}</h3>
                        <p className="mt-1 text-xs leading-relaxed text-white/80">
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
              <p className="mt-4 text-sm font-medium text-white/90">{hero.supportLine}</p>
            </div>
          </div>
        </section>

        <section
          id={samples.id}
          className="scroll-mt-28 border-t border-white/10 bg-[#0a0f22] px-4 py-14 sm:px-5 md:px-10 md:py-16"
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
          className="scroll-mt-28 bg-[linear-gradient(180deg,#0b1024_0%,#1a1040_100%)] px-4 py-14 sm:px-5 md:px-10 md:py-16"
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

        <section
          id={enquiry.id}
          className="scroll-mt-28 px-4 py-14 sm:px-5 md:px-10 md:py-16"
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

        <section className="scroll-mt-28 border-t border-white/10 px-4 py-14 sm:px-5 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#E5E7EB] bg-white px-4 py-10 text-center sm:px-5 md:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-3">
          <Image
            src={brand.logoSrc}
            alt={brand.name}
            width={168}
            height={42}
            className="h-9 w-auto sm:h-10"
          />
          <p className="text-sm font-semibold text-[#111827]">{brand.legalName}</p>
          <p className="text-sm text-[#4B5563]">{footer.serviceLine}</p>
          <p className="mt-2 text-xs text-[#6B7280]">
            © {year} {brand.legalName}. All rights reserved.
          </p>
        </div>
      </footer>

      <WhatsAppFloat />
      <StickyBottomCta />
    </div>
  );
}
