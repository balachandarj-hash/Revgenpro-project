import type { Metadata } from "next";
import { EnquiryFormSection } from "@/components/enquiry-form-section";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroCollage } from "@/components/hero-collage";
import { SampleVideosCarousel } from "@/components/sample-videos-carousel";
import { ServiceIcon } from "@/components/service-icon";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

const primaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#EC008C] px-6 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(236,0,140,0.4)] transition hover:brightness-110";
const secondaryBtn =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/55 bg-[#151a33]/60 px-6 text-sm font-semibold text-white transition hover:bg-white/10";

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
    <div className="relative min-h-screen overflow-x-hidden bg-[#0b1024] text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-[linear-gradient(120deg,#0b1024_0%,#1a1040_45%,#4a0d4a_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -right-24 top-20 z-0 h-[420px] w-[420px] rounded-full bg-[#EC008C]/20 blur-3xl"
      />

      <SiteHeader />

      <main id="top" className="relative z-10 scroll-mt-24">
        <section className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 py-10 md:px-10 md:py-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.7fr)] lg:gap-6">
          <div className="min-w-0">
            <p className="inline-flex max-w-full rounded-full bg-[#EC008C] px-3.5 py-1.5 text-[11px] font-semibold leading-snug text-white sm:text-xs">
              {hero.badge}
            </p>

            <h1 className="mt-5 text-[clamp(1.65rem,4.2vw,3.1rem)] font-bold leading-[1.12] tracking-tight text-balance">
              {hero.headlineBefore}{" "}
              <span className="text-[#FF4DB8]">{hero.headlineHighlight}</span>
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
              {hero.description}
            </p>

            <p className="mt-5 text-sm text-white/75 sm:text-base">
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
                  className="rounded-2xl border border-white/10 bg-[#121833]/75 p-4 shadow-[0_12px_30px_rgba(0,0,0,0.25)] backdrop-blur-sm"
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
            <p className="mt-4 text-sm text-white/65">{hero.supportLine}</p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroCollage />
          </div>
        </section>

        <section
          id={samples.id}
          className="scroll-mt-28 border-t border-white/10 bg-[#0a0f22]/70 px-5 py-14 md:px-10 md:py-16"
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
          className="scroll-mt-28 px-5 py-14 md:px-10 md:py-16"
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
