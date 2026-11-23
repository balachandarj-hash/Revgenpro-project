import Image from "next/image";
import Link from "next/link";
import { HeroVisual } from "@/components/hero-visual";
import { brand, whatsappUrl } from "@/lib/brand";
import { siteContent } from "@/lib/site-content";

export default function HomePage() {
  const wa = whatsappUrl(siteContent.whatsappPrefill);

  return (
    <div className="studio-page relative min-h-screen overflow-x-hidden text-white">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="studio-orb studio-orb-purple" />
        <span className="studio-orb studio-orb-pink" />
        <span className="studio-orb studio-orb-blue" />
      </div>

      <header className="relative z-20 border-b border-white/15 bg-[#111936]/95">
        <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-4 px-5 md:px-10">
          <Link href="#home" aria-label={`${brand.legalName}, top of page`}>
            <Image
              src={brand.logoOnDarkSrc}
              alt={brand.name}
              width={160}
              height={40}
              className="h-9 w-auto"
              priority
            />
          </Link>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold hover:border-[#25D366]/50"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main id="home" className="relative z-10 scroll-mt-20">
        <section className="mx-auto grid w-full max-w-[1440px] items-center gap-8 px-5 py-8 md:px-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:py-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4B5FD]">
              {siteContent.hero.hook}
            </p>
            <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {siteContent.hero.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/75">
              {siteContent.hero.description}
            </p>
            <p className="mt-5 text-lg font-semibold text-[#C4B5FD]">{siteContent.hero.priceLine}</p>
            <div className="mt-7 flex flex-wrap gap-3">
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
          <HeroVisual />
        </section>

        <section id="styles" className="scroll-mt-28 px-5 py-8 md:px-10 md:py-12">
          <StylesSectionIntro />
          <ul className="mx-auto mt-7 grid max-w-[1440px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
        </section>

        <section id="portfolio" className="scroll-mt-28 px-5 py-8 md:px-10">
          <h2 className="text-3xl font-semibold">Creative story videos</h2>
          <p className="mt-3 max-w-2xl text-white/75">
            Swipe on your phone, tap a card to watch sample films.
          </p>
          <ul className="mx-auto mt-6 flex max-w-[1440px] snap-x snap-mandatory gap-4 overflow-x-auto pb-2 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5">
            {siteContent.portfolio.map((item) => (
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
        </section>

        <section id="enquiry" className="scroll-mt-28 px-5 py-12 md:px-10">
          <div className="studio-glass mx-auto max-w-xl rounded-3xl border border-white/10 p-6 text-center">
            <h2 className="text-2xl font-semibold">Have an Idea? Let&apos;s Turn It Into an AI Video!</h2>
            <p className="mt-3 text-white/75">
              Submit opens WhatsApp with your name, number, video type, and idea.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-6 text-sm font-semibold text-[#052e16]"
            >
              Order on WhatsApp — {siteContent.price}
              {siteContent.priceUnit}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

function StylesSectionIntro() {
  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#C4B5FD]">
        Video styles we create
      </p>
      <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
        Any idea. Any style.
      </h2>
      <p className="mt-4 max-w-2xl text-white/75">
        Love, kids, village, comedy, horror, mythology, manga, or brand — pick a style.
      </p>
    </>
  );
}