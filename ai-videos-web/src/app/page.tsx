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
        {/* 1 — Hero */}
        <section className="mx-auto grid w-full max-w-[1440px] items-center gap-6 overflow-visible px-5 py-6 md:gap-8 md:px-10 md:py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-12">
          <div className="min-w-0">
            <p className="text-xs font-medium text-white/55">{siteContent.hero.eyebrow}</p>
            <p className="mt-3 inline-flex max-w-full items-center rounded-full border border-[#A78BFA]/45 bg-[#6D28D9]/20 px-3 py-1.5 text-[11px] font-semibold leading-snug tracking-wide text-[#EDE9FE] sm:text-xs sm:tracking-[0.18em]">
              {siteContent.hero.hook}
            </p>
            <h1 className="mt-4 text-[clamp(1.35rem,4.2vw,2.75rem)] font-semibold leading-tight tracking-tight sm:text-balance sm:text-4xl lg:text-5xl">
              <span className="sm:hidden">{siteContent.hero.headlineMobile}</span>
              <span className="hidden sm:inline">{siteContent.hero.headline}</span>
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/80 sm:mt-4 sm:text-base">
              {siteContent.hero.description}
            </p>
            <div className="studio-glass mt-4 inline-flex max-w-full flex-wrap items-baseline gap-x-2 gap-y-1 rounded-2xl border border-white/15 px-4 py-2.5 sm:mt-5 sm:rounded-full">
              <span className="text-xs font-medium text-white/70 sm:text-sm">
                {siteContent.hero.priceLabel}
              </span>
              <span className="text-3xl font-bold leading-none text-white sm:text-4xl">
                {siteContent.price}
              </span>
              <span className="text-sm font-semibold text-[#C4B5FD]">{siteContent.priceUnit}</span>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="inline-flex min-h-11 items-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-5 text-sm font-semibold"
              >
                {siteContent.hero.primaryCta}
              </a>
              <a
                href="#value"
                className="inline-flex min-h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold"
              >
                {siteContent.hero.secondaryCta}
              </a>
            </div>
          </div>
          <HeroVisual />
        </section>

        {/* 2 — Problem */}
        <section
          id={siteContent.problem.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionLabel>{siteContent.problem.label}</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                {siteContent.problem.title}
              </h2>
              <p className="mt-4 max-w-xl text-white/75">{siteContent.problem.body}</p>
            </div>
            <ul className="mt-8 space-y-3 lg:mt-0">
              {siteContent.problem.points.map((point) => (
                <li
                  key={point}
                  className="studio-glass flex gap-3 rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/85"
                >
                  <span className="text-[#C4B5FD]" aria-hidden>
                    —
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 — Awareness */}
        <section
          id={siteContent.awareness.id}
          className="scroll-mt-28 bg-[#0d1330]/80 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{siteContent.awareness.label}</SectionLabel>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
              {siteContent.awareness.title}
            </h2>
            <p className="mt-4 max-w-2xl text-white/75">{siteContent.awareness.body}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {siteContent.awareness.points.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-[#9333EA]/25 bg-[#6D28D9]/10 px-4 py-4 text-sm text-white/85"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4 — Solution */}
        <section
          id={siteContent.solution.id}
          className="scroll-mt-28 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-12">
            <div>
              <SectionLabel>{siteContent.solution.label}</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{siteContent.solution.title}</h2>
              <p className="mt-4 text-white/75">{siteContent.solution.body}</p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[#25D366]/50 px-5 text-sm font-semibold text-[#86EFAC]"
              >
                Chat on WhatsApp
              </a>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-0">
              {siteContent.solution.highlights.map((item) => (
                <li
                  key={item}
                  className="studio-glass rounded-2xl border border-white/10 p-4 text-sm text-white/85"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 5 — Value */}
        <section
          id={siteContent.value.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px]">
            <SectionLabel>{siteContent.value.label}</SectionLabel>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{siteContent.value.title}</h2>
            <p className="mt-3 max-w-2xl text-white/70">{siteContent.value.subtitle}</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {siteContent.value.deliverables.map((item) => (
                <li
                  key={item.title}
                  className="studio-glass rounded-3xl border border-white/10 p-5 shadow-[0_16px_40px_rgba(9,13,36,0.28)]"
                >
                  <h3 className="text-base font-semibold text-[#EDE9FE]">{item.title}</h3>
                  <p className="mt-2 text-sm text-white/75">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 6 — Process */}
        <section
          id={siteContent.process.id}
          className="scroll-mt-28 px-5 py-12 md:px-10 md:py-16"
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

        {/* 7 — Portfolio / creative proof */}
        <section
          id={siteContent.portfolio.id}
          className="scroll-mt-28 border-t border-white/10 px-5 py-12 md:px-10"
        >
          <SectionLabel>{siteContent.portfolio.label}</SectionLabel>
          <h2 className="mt-3 text-3xl font-semibold">{siteContent.portfolio.title}</h2>
          <p className="mt-3 max-w-2xl text-white/75">{siteContent.portfolio.subtitle}</p>
          <ul className="mx-auto mt-6 flex max-w-[1440px] snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5">
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
          <ul className="mx-auto mt-10 grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteContent.styles.slice(0, 4).map((style) => (
              <li
                key={style.id}
                className="studio-glass overflow-hidden rounded-3xl border border-white/10"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={style.poster}
                    alt={style.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                </div>
                <p className="p-3 text-xs font-semibold text-white/80">
                  {style.emoji} {style.title}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* 8 — Trust */}
        <section
          id={siteContent.trust.id}
          className="scroll-mt-28 bg-[#0d1330]/80 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="mx-auto max-w-[1440px] lg:grid lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionLabel>{siteContent.trust.label}</SectionLabel>
              <h2 className="mt-3 text-3xl font-semibold">{siteContent.trust.title}</h2>
              <p className="mt-4 text-white/75">{siteContent.trust.body}</p>
              <dl className="mt-6 space-y-2 text-sm">
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
                  <dd className="font-medium">{brand.contact.phoneDisplay}</dd>
                </div>
                <div>
                  <dt className="text-white/50">Location</dt>
                  <dd className="font-medium">
                    {brand.location.locality}, {brand.location.region}, {brand.location.country}
                  </dd>
                </div>
              </dl>
            </div>
            <ul className="mt-8 space-y-3 lg:mt-0">
              {siteContent.trust.facts.map((fact) => (
                <li
                  key={fact}
                  className="rounded-2xl border border-white/10 bg-[#111936]/50 px-4 py-3 text-sm text-white/85"
                >
                  {fact}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9 — Offer */}
        <section
          id={siteContent.offer.id}
          className="scroll-mt-28 px-5 py-12 md:px-10 md:py-16"
        >
          <div className="studio-glass mx-auto max-w-2xl rounded-3xl border border-[#A78BFA]/35 p-8 text-center shadow-[0_24px_60px_rgba(109,40,217,0.25)]">
            <SectionLabel>{siteContent.offer.label}</SectionLabel>
            <p className="mt-3 text-sm font-medium text-[#EDE9FE]">{siteContent.offer.packageName}</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{siteContent.offer.title}</h2>
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

        {/* 10 — Enquiry + FAQ */}
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