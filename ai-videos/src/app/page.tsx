import Image from "next/image";
import { FaqAccordion } from "@/components/faq-accordion";
import { HeroVisual } from "@/components/hero-visual";
import { LeadForm } from "@/components/lead-form";
import { SiteHeader } from "@/components/site-header";
import { StickyBottomCta } from "@/components/sticky-bottom-cta";
import { brand, whatsappUrl } from "@/lib/brand";
import { siteContent } from "@/lib/site-content";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
      {children}
    </p>
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

      <main id="home" className="relative z-10 scroll-mt-20">
        {/* Hero — left copy / right cinematic stage; mobile: headline → media → bullets */}
        <section className="relative mx-auto w-full max-w-[1440px] overflow-hidden px-5 pb-10 pt-7 md:px-10 md:pb-14 md:pt-10 lg:pb-16 lg:pt-12">
          {/* Mobile brand + headline first */}
          <div className="min-w-0 lg:hidden">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-300/80">
              {brand.name}
            </p>
            <p className="mt-3 inline-flex max-w-full items-center rounded-full border border-violet-400/40 bg-violet-600/20 px-3 py-1.5 text-[11px] font-semibold leading-snug tracking-wide text-violet-100 sm:text-xs">
              {siteContent.hero.hook}
            </p>
            <h1 className="mt-4 text-[clamp(1.35rem,6vw,1.85rem)] font-semibold leading-[1.15] tracking-tight">
              {siteContent.hero.headlineMobile}
            </h1>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70">
              {siteContent.hero.lead}
            </p>
          </div>

          <div className="mt-5 grid w-full gap-8 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:items-center lg:gap-14 xl:gap-16">
            {/* Right on desktop / second on mobile: cinematic media */}
            <div className="order-1 w-full lg:order-2">
              <HeroVisual />
            </div>

            {/* Left on desktop: spacious copy column */}
            <div className="order-2 min-w-0 lg:order-1 lg:pr-4">
              <div className="hidden lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/85">
                  {brand.name}
                </p>
                <p className="mt-4 inline-flex max-w-full items-center rounded-full border border-violet-400/40 bg-violet-600/20 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-violet-100">
                  {siteContent.hero.hook}
                </p>
                <h1 className="mt-5 max-w-[14ch] text-[clamp(2rem,2.4vw+1rem,3.15rem)] font-semibold leading-[1.08] tracking-tight">
                  {siteContent.hero.headline}
                </h1>
                <p className="mt-5 max-w-md text-base leading-relaxed text-white/72">
                  {siteContent.hero.lead}
                </p>
              </div>

              <ul className="mt-5 space-y-3 lg:mt-7">
                {siteContent.hero.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-3 text-sm leading-snug text-white/82 sm:text-[0.95rem] sm:leading-relaxed"
                  >
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 shadow-[0_0_8px_rgba(34,211,238,0.7)]"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="studio-glass mt-6 inline-flex max-w-full flex-wrap items-baseline gap-x-2.5 gap-y-1 rounded-2xl border border-cyan-400/20 px-5 py-3 shadow-[0_0_28px_rgba(34,211,238,0.12)] sm:mt-8 sm:rounded-full">
                <span className="text-xs font-medium text-white/65 sm:text-sm">
                  {siteContent.hero.priceLabel}
                </span>
                <span className="text-3xl font-bold leading-none text-white sm:text-4xl">
                  {siteContent.price}
                </span>
                <span className="text-sm font-semibold text-cyan-300">
                  {siteContent.priceUnit}
                </span>
              </div>

              <div className="mt-7 flex flex-wrap gap-3 sm:mt-8">
                <a
                  href="#enquiry"
                  className="cta-neon inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold"
                >
                  {siteContent.hero.primaryCta}
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex min-h-12 items-center rounded-full border border-white/25 bg-white/5 px-6 text-sm font-semibold backdrop-blur-sm transition hover:border-cyan-300/40 hover:bg-white/10"
                >
                  {siteContent.hero.secondaryCta}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Styles */}
        <section id="styles" className="scroll-mt-28 px-5 py-10 md:px-10 md:py-14">
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{siteContent.stylesSection.label}</SectionLabel>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              {siteContent.stylesSection.title}
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">{siteContent.stylesSection.subtitle}</p>
            <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {siteContent.styles.map((style) => (
                <li
                  key={style.id}
                  className="studio-glass overflow-hidden rounded-3xl border border-white/10 shadow-[0_16px_40px_rgba(5,8,22,0.4)]"
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-cyan-300/90">
                      {style.emoji} {style.title}
                    </p>
                    <p className="mt-2 text-sm text-white/75">{style.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Portfolio */}
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
                  <p className="px-3 pb-3 text-xs text-white/60">{item.duration}</p>
                </li>
              ))}
            </ul>
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
                  <span className="text-xs font-bold text-cyan-300">Step {index + 1}</span>
                  <h3 className="mt-2 font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Offer */}
        <section
          id={siteContent.offer.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-10 md:px-10 md:py-14"
        >
          <div className="studio-glass mx-auto max-w-2xl rounded-3xl border border-violet-400/30 p-8 text-center shadow-[0_24px_60px_rgba(124,58,237,0.22)]">
            <SectionLabel>{siteContent.offer.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{siteContent.offer.title}</h2>
            <p className="mt-4 text-white/75">{siteContent.offer.body}</p>
            <p className="mt-4 text-sm text-white/60">{siteContent.offer.includesNote}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#enquiry"
                className="cta-neon inline-flex min-h-12 items-center rounded-full px-6 text-sm font-semibold"
              >
                {siteContent.offer.cta}
              </a>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 text-sm font-semibold"
              >
                {siteContent.offer.secondaryCta}
              </a>
            </div>
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
              <div className="mt-6">
                <LeadForm />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">{siteContent.enquiry.faqTitle}</h2>
              <div className="mt-6">
                <FaqAccordion items={siteContent.faqs} />
              </div>
            </div>
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
