import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroVisual } from "@/components/hero-visual";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import { brand, whatsappUrl } from "@/lib/brand";
import { siteContent } from "@/lib/site-content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4B5FD]">{children}</p>
  );
}

export default function HomePage() {
  const wa = whatsappUrl(siteContent.whatsappPrefill);

  return (
    <div className="studio-page relative min-h-screen overflow-x-hidden text-white">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="studio-orb studio-orb-purple" />
        <span className="studio-orb studio-orb-pink" />
        <span className="studio-orb studio-orb-blue" />
      </div>

      <SiteHeader />

      <main id="main" className="relative z-10 scroll-mt-20">
        {/* Hero — left copy, right floating style cards */}
        <section
          id="home"
          className="relative mx-auto grid w-full max-w-[1440px] items-center gap-6 overflow-visible px-5 py-6 md:gap-8 md:px-10 md:py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-12"
        >
          <div aria-hidden className="studio-hero-ambient" />
          <div className="relative z-[1] min-w-0">
            <p className="inline-flex max-w-full items-center rounded-full border border-[#A78BFA]/45 bg-[#6D28D9]/20 px-3 py-1.5 text-[11px] font-semibold leading-snug tracking-wide text-[#EDE9FE] sm:text-xs sm:tracking-[0.18em]">
              {siteContent.hero.hook}
            </p>
            <h1 className="mt-4 text-[clamp(1.35rem,4.2vw,2.75rem)] font-semibold leading-tight tracking-tight sm:text-balance sm:text-4xl lg:text-5xl">
              {siteContent.hero.headline}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base">
              {siteContent.hero.description}
            </p>
            <div className="studio-glass mt-4 inline-flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 rounded-2xl border border-white/15 px-4 py-2.5 sm:mt-5 sm:rounded-full">
              <span className="text-sm font-semibold text-white sm:text-base">
                {siteContent.hero.priceLine}
              </span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="cta-studio inline-flex min-h-11 items-center gap-2 rounded-full px-5 text-sm font-semibold"
              >
                {siteContent.hero.primaryCta}
                <span aria-hidden>→</span>
              </a>
              <a
                href="#portfolio"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/20 bg-white/[0.03] px-5 text-sm font-semibold backdrop-blur-sm transition hover:border-white/35 hover:bg-white/[0.06]"
              >
                <span aria-hidden>▶</span>
                {siteContent.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="relative z-[1]">
            <HeroVisual />
          </div>
        </section>

        {/* Styles */}
        <section
          id="styles"
          className="relative scroll-mt-28 overflow-hidden px-5 py-10 md:px-10 md:py-14"
        >
          {/* Decorative portrait — 95% transparent (5% opacity) */}
          <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
            <Image
              src="/ai-videos/styles-section-bg.png"
              alt=""
              fill
              className="object-cover object-[70%_center] opacity-[0.05] sm:object-right"
              sizes="100vw"
              priority={false}
            />
          </div>
          <div className="relative z-[1] mx-auto max-w-[1440px]">
            <SectionLabel>{siteContent.stylesSection.label}</SectionLabel>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {siteContent.stylesSection.title}
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">{siteContent.stylesSection.subtitle}</p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.styles.map((style) => (
                <li
                  key={style.id}
                  className="studio-glass overflow-hidden rounded-3xl border border-white/10 shadow-[0_16px_40px_rgba(9,13,36,0.28)]"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={style.poster}
                      alt={style.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#C4B5FD]">
                      {style.emoji} {style.title}
                    </p>
                    <p className="mt-2 text-sm text-white/75">{style.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Portfolio / demos */}
        <section
          id={siteContent.portfolio.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-10 md:px-10 md:py-14"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{siteContent.portfolio.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold">{siteContent.portfolio.title}</h2>
            <p className="mt-3 max-w-2xl text-white/75">{siteContent.portfolio.subtitle}</p>
            <ul className="mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5">
              {siteContent.portfolioVideos.map((item) => (
                <li
                  key={item.id}
                  className="studio-glass w-[min(85vw,280px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 sm:w-auto"
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
                  <p className="px-3 py-2 text-sm font-semibold">{item.title}</p>
                  <p className="px-3 pb-3 text-xs uppercase tracking-wide text-white/60">
                    {item.duration}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pricing */}
        <section
          id={siteContent.pricing.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-10 md:px-10 md:py-14"
        >
          <div className="mx-auto max-w-[1440px] text-center">
            <SectionLabel>{siteContent.pricing.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{siteContent.pricing.title}</h2>
            <div className="studio-glass mx-auto mt-8 max-w-lg rounded-3xl border border-[#A78BFA]/35 p-8 shadow-[0_24px_60px_rgba(109,40,217,0.25)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C4B5FD]">
                {siteContent.pricing.packageTitle}
              </p>
              <p className="mt-4 text-5xl font-bold">
                {siteContent.price}
                <span className="ml-2 text-base font-semibold text-[#C4B5FD]">
                  {siteContent.priceUnit}
                </span>
              </p>
              <p className="mt-4 text-white/75">{siteContent.pricing.body}</p>
              <a
                href="#enquiry"
                className="cta-studio mt-8 inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold"
              >
                {siteContent.pricing.cta}
              </a>
            </div>
          </div>
        </section>

        {/* Process */}
        <section
          id={siteContent.process.id}
          className="scroll-mt-28 px-5 py-10 md:px-10 md:py-14"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{siteContent.process.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold">{siteContent.process.title}</h2>
            <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.process.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="studio-glass relative rounded-3xl border border-white/10 p-5"
                >
                  <span className="text-2xl font-bold text-[#C4B5FD]">{index + 1}</span>
                  <h3 className="mt-2 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Benefits */}
        <section
          id={siteContent.benefits.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-10 md:px-10 md:py-14"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{siteContent.benefits.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold">{siteContent.benefits.title}</h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {siteContent.benefits.items.map((item) => (
                <li
                  key={item}
                  className="studio-glass flex gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/85"
                >
                  <span
                    className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4B5FD]"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Enquiry + FAQ */}
        <section
          id={siteContent.enquiry.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="studio-glass rounded-3xl border border-white/10 p-6 sm:p-8">
              <SectionLabel>{siteContent.enquiry.label}</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold">{siteContent.enquiry.title}</h2>
              <p className="mt-2 text-sm text-white/70">{siteContent.enquiry.subtitle}</p>
              <p className="mt-4 text-sm text-white/60">
                {siteContent.enquiry.blankChatLabel}{" "}
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#86EFAC] underline-offset-2 hover:underline"
                >
                  {siteContent.enquiry.blankChatCta}
                </a>
              </p>
              <div className="mt-6">
                <LeadForm />
              </div>
              <p className="mt-4 text-xs text-white/50">{siteContent.enquiry.formNote}</p>
            </div>
            <div id="faq" className="scroll-mt-28">
              <SectionLabel>Questions</SectionLabel>
              <h2 className="mt-3 text-2xl font-semibold">{siteContent.enquiry.faqTitle}</h2>
              <div className="mt-6">
                <FaqAccordion items={siteContent.faqs} />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="border-t border-white/10 px-5 py-12 md:px-10 md:py-16">
          <div className="studio-glass mx-auto max-w-3xl rounded-3xl border border-[#A78BFA]/30 p-8 text-center shadow-[0_24px_60px_rgba(109,40,217,0.22)] sm:p-10">
            <h2 className="text-3xl font-bold sm:text-4xl">{siteContent.finalCta.headline}</h2>
            <p className="mt-4 text-white/75">{siteContent.finalCta.body}</p>
            <a
              href="#enquiry"
              className="cta-studio mt-8 inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold"
            >
              {siteContent.finalCta.cta}
            </a>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 px-5 py-10 md:px-10">
        <div className="mx-auto grid max-w-[1440px] gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-sm font-semibold">{brand.legalName}</p>
            <p className="mt-2 text-sm text-white/55">
              AI videos for any purpose, starting at {siteContent.price} per video.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              On this page
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="#styles" className="hover:text-white">
                  Video styles
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white">
                  Demo videos
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#enquiry" className="hover:text-white">
                  Enquiry
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Follow us
            </p>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={brand.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open RevGenPro on Facebook"
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-[0_0_16px_rgba(24,119,242,0.35)]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M14 8.5h2.5V5.2S14.9 5 13.7 5C11.3 5 10 6.5 10 9v2H7.5v3.3H10V22h3.4v-7.7h2.8l.4-3.3H13.4V9.5c0-1 .3-1.5.6-1.5z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#C4B5FD]">
                      Facebook
                    </span>
                    <span className="text-sm text-white/85 underline-offset-2 group-hover:text-white group-hover:underline">
                      {brand.social.facebookHandle}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={brand.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open RevGenPro on Instagram"
                  className="group flex items-center gap-3"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f58529,#dd2a7b,#515bd4)] text-white shadow-[0_0_16px_rgba(221,42,123,0.35)]">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 .001 10.001A5 5 0 0 0 12 7zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" />
                    </svg>
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#C4B5FD]">
                      Instagram
                    </span>
                    <span className="text-sm text-white/85 underline-offset-2 group-hover:text-white group-hover:underline">
                      {brand.social.instagramHandle}
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
              Policies
            </p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>
                <a href="/privacy" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[1440px] text-center text-sm text-white/45">
          © {new Date().getFullYear()} {brand.legalName}
        </p>
      </footer>

      <WhatsAppFab />
      <StickyBottomCta />
    </div>
  );
}
