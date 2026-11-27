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

      <main id="home" className="relative z-10 scroll-mt-20">
        {/* Hero — mobile: headline → video → bullets; desktop: full-width headline, then copy | 16:9 */}
        <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-5 px-5 py-6 md:gap-6 md:px-10 md:py-8 lg:gap-8 lg:py-12">
          <div className="min-w-0">
            <p className="inline-flex max-w-full items-center rounded-full border border-[#A78BFA]/45 bg-[#6D28D9]/20 px-3 py-1.5 text-[11px] font-semibold leading-snug tracking-wide text-[#EDE9FE] sm:text-xs sm:tracking-[0.18em]">
              {siteContent.hero.hook}
            </p>
            <h1 className="mt-4 whitespace-nowrap text-[clamp(1.15rem,5.2vw,1.55rem)] font-semibold leading-none tracking-tight sm:text-[clamp(1.6rem,2.6vw+0.4rem,2.75rem)]">
              <span className="sm:hidden">{siteContent.hero.headlineMobile}</span>
              <span className="hidden sm:inline">{siteContent.hero.headline}</span>
            </h1>
          </div>

          <div className="grid w-full gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10">
            <div className="order-1 w-full lg:order-2">
              <HeroVisual />
            </div>

            <div className="order-2 min-w-0 lg:order-1">
              <ul className="space-y-2.5">
                {siteContent.hero.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2.5 text-sm leading-snug text-white/85 sm:text-[0.95rem] sm:leading-relaxed"
                  >
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-[#C4B5FD]"
                      aria-hidden
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="studio-glass mt-5 inline-flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 rounded-2xl border border-white/15 px-4 py-2.5 sm:mt-6 sm:rounded-full">
                <span className="text-xs font-medium text-white/70 sm:text-sm">
                  {siteContent.hero.priceLabel}
                </span>
                <span className="text-3xl font-bold leading-none text-white sm:text-4xl">
                  {siteContent.price}
                </span>
                <span className="text-sm font-semibold text-[#C4B5FD]">{siteContent.priceUnit}</span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 sm:mt-7">
                <a
                  href="#enquiry"
                  className="inline-flex min-h-11 items-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-5 text-sm font-semibold"
                >
                  {siteContent.hero.primaryCta}
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold"
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
                  <span className="text-xs font-bold text-[#C4B5FD]">Step {index + 1}</span>
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
          <div className="studio-glass mx-auto max-w-2xl rounded-3xl border border-[#A78BFA]/35 p-8 text-center shadow-[0_24px_60px_rgba(109,40,217,0.25)]">
            <SectionLabel>{siteContent.offer.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{siteContent.offer.title}</h2>
            <p className="mt-4 text-white/75">{siteContent.offer.body}</p>
            <p className="mt-4 text-sm text-white/60">{siteContent.offer.includesNote}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#enquiry"
                className="inline-flex min-h-12 items-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-6 text-sm font-semibold"
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
