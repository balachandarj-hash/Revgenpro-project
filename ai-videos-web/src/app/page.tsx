import type { Metadata } from "next";
import Image from "next/image";
import { LeadForm, type LeadFormCopy } from "@/components/lead-form";
import { ProductAdsHeroVisual } from "@/components/product-ads-hero-visual";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";


function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4B5FD]">{children}</p>
  );
}

const leadCopy: LeadFormCopy = {
  packageName: productAdsContent.packageName,
  price: `${productAdsContent.price}${productAdsContent.priceUnit}`,
  whatsappPrefill: productAdsContent.whatsappPrefill,
  formSubmitCta: productAdsContent.enquiry.formSubmitCta,
  messagePlaceholder: productAdsContent.enquiry.messagePlaceholder,
};

export const metadata: Metadata = {
  title: productAdsContent.seo.title,
  description: productAdsContent.seo.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: new URL(productAdsContent.seo.path, productAdsContent.seo.siteUrl).toString(),
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
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);
  const telHref = `tel:+${brand.whatsapp.phoneDigits}`;

  return (
    <div className="studio-page relative min-h-screen overflow-x-hidden text-white">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="studio-orb studio-orb-purple" />
        <span className="studio-orb studio-orb-pink" />
        <span className="studio-orb studio-orb-blue" />
      </div>

      <SiteHeader />

      <main id="top" className="relative z-10 scroll-mt-20">
        {/* Hero */}
        <section className="mx-auto grid w-full max-w-[1440px] items-center gap-6 px-5 py-6 md:gap-8 md:px-10 md:py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-12">
          <div className="min-w-0">
            <p className="text-xs font-medium text-white/55">{productAdsContent.hero.eyebrow}</p>
            <h1 className="mt-4 text-[clamp(1.35rem,4.2vw,2.75rem)] font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {productAdsContent.hero.headlinePrefix}{" "}
              <span className="text-[#C4B5FD]">{productAdsContent.hero.headlineHighlight}</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base">
              {productAdsContent.hero.description}
            </p>
            <div className="studio-glass mt-4 inline-flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 rounded-2xl border border-white/15 px-4 py-2.5 sm:mt-5 sm:rounded-full">
              <span className="text-xs font-medium text-white/70 sm:text-sm">
                {productAdsContent.hero.priceLabel}
              </span>
              <span className="text-3xl font-bold leading-none text-white sm:text-4xl">
                {productAdsContent.price}
              </span>
              <span className="text-sm font-semibold text-[#C4B5FD]">{productAdsContent.priceUnit}</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="inline-flex min-h-11 items-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-5 text-sm font-semibold"
              >
                {productAdsContent.hero.primaryCta}
              </a>
              <a
                href="#samples"
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold"
              >
                {productAdsContent.hero.secondaryCta}
              </a>
            </div>
          </div>
          <ProductAdsHeroVisual />
        </section>

        {/* Services */}
        <section
          id={productAdsContent.services.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{productAdsContent.services.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {productAdsContent.services.title}
            </h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {productAdsContent.services.items.map((item) => (
                <li
                  key={item.title}
                  className="studio-glass rounded-3xl border border-white/10 p-6 shadow-[0_16px_40px_rgba(9,13,36,0.28)]"
                >
                  <h3 className="text-lg font-semibold text-[#EDE9FE]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{item.description}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="inline-flex min-h-11 items-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-5 text-sm font-semibold"
              >
                {productAdsContent.hero.primaryCta}
              </a>
              <a
                href="#samples"
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold"
              >
                {productAdsContent.hero.secondaryCta}
              </a>
            </div>
          </div>
        </section>

        {/* Category preview */}
        <section
          id={productAdsContent.showcase.id}
          className="scroll-mt-28 bg-[#0d1330]/80 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px] text-center">
            <h2 className="text-2xl font-semibold sm:text-3xl">{productAdsContent.showcase.title}</h2>
            <ul className="mx-auto mt-8 flex max-w-4xl snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-5">
              {productAdsContent.categories.map((category) => (
                <li
                  key={category.id}
                  className="studio-glass w-[min(70vw,220px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 sm:w-auto"
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 70vw, 20vw"
                    />
                  </div>
                  <p className="px-3 py-2 text-sm font-semibold">{category.label}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Sample videos */}
        <section
          id={productAdsContent.samples.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{productAdsContent.samples.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold">{productAdsContent.samples.title}</h2>
            <p className="mt-3 max-w-2xl text-white/75">{productAdsContent.samples.subtitle}</p>
            <p className="mt-2 text-sm text-white/55 md:hidden">{productAdsContent.samples.swipeHint}</p>
            <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible lg:grid-cols-5">
              {productAdsContent.samples.videos.map((item) => (
                <li
                  key={item.id}
                  className="studio-glass w-[min(85vw,280px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 md:w-auto"
                >
                  <video
                    className="aspect-[9/16] w-full bg-black object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster={item.poster}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                  <p className="px-3 py-3 text-sm font-semibold">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA + enquiry */}
        <section
          id={productAdsContent.cta.id}
          className="scroll-mt-28 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <h2 className="text-2xl font-semibold sm:text-3xl">{productAdsContent.cta.title}</h2>
              <p className="mt-3 text-white/75">{productAdsContent.cta.body}</p>
              <ul className="mt-6 space-y-2">
                {productAdsContent.cta.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="studio-glass flex gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/85"
                  >
                    <span className="text-[#C4B5FD]" aria-hidden>
                      —
                    </span>
                    {bullet}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/60">{productAdsContent.cta.whatsappLabel}</p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex min-h-11 items-center rounded-full border border-[#25D366]/50 px-5 text-sm font-semibold text-[#86EFAC]"
              >
                {productAdsContent.cta.whatsappCta}
              </a>
            </div>

            <div
              id={productAdsContent.enquiry.id}
              className="studio-glass scroll-mt-28 rounded-3xl border border-white/10 p-6 sm:p-8"
            >
              <SectionLabel>{productAdsContent.enquiry.label}</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold">{productAdsContent.enquiry.title}</h2>
              <p className="mt-2 text-sm text-white/70">{productAdsContent.enquiry.subtitle}</p>
              <p className="mt-2 text-sm">
                <span className="text-white/50">Email </span>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="font-medium text-[#C4B5FD] hover:underline"
                >
                  {brand.contact.email}
                </a>
              </p>
              <div className="mt-6">
                <LeadForm copy={leadCopy} />
              </div>
              <p className="mt-4 text-xs text-white/50">{productAdsContent.enquiry.footnote}</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id={productAdsContent.contact.id}
          className="scroll-mt-28 border-t border-white/10 bg-[#0d1330]/80 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionLabel>{productAdsContent.contact.label}</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold">{productAdsContent.contact.title}</h2>
              <dl className="mt-6 space-y-4 text-sm">
                <div>
                  <dt className="text-white/50">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${brand.contact.email}`}
                      className="font-medium text-[#C4B5FD] hover:underline"
                    >
                      {brand.contact.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50">Phone</dt>
                  <dd>
                    <a href={telHref} className="font-medium hover:text-[#C4B5FD]">
                      {brand.contact.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50">WhatsApp</dt>
                  <dd>
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-[#86EFAC] hover:underline"
                    >
                      Chat with us
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-white/50">Location</dt>
                  <dd className="font-medium">
                    {brand.location.locality}, {brand.location.region}, {brand.location.country}
                  </dd>
                </div>
              </dl>
            </div>
            <ul className="mt-8 flex flex-col gap-3 lg:mt-0">
              <li>
                <a
                  href={brand.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-glass flex min-h-12 items-center justify-between rounded-2xl border border-white/10 px-5 text-sm font-semibold transition-colors hover:border-white/25"
                >
                  Facebook
                  <span className="text-white/50" aria-hidden>
                    ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="studio-glass flex min-h-12 items-center justify-between rounded-2xl border border-white/10 px-5 text-sm font-semibold transition-colors hover:border-white/25"
                >
                  Instagram
                  <span className="text-white/50" aria-hidden>
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-8 text-center text-sm text-white/50 md:px-10">
        <p>
          © {new Date().getFullYear()} {brand.legalName}. {brand.location.locality},{" "}
          {brand.location.region}.
        </p>
      </footer>

      <StickyBottomCta />
    </div>
  );
}