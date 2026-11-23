import Image from "next/image";
import { heroAccentIds, siteContent, type VideoStyle } from "@/lib/site-content";

const desktopPlacement: Record<
  (typeof heroAccentIds)[number],
  { className: string; animation: string }
> = {
  love: {
    className: "left-0 top-[6%] w-[44%] max-w-[220px] -rotate-6 sm:left-[-4%] sm:top-[8%] sm:w-[42%] sm:max-w-none sm:-rotate-[8deg]",
    animation: "studio-float",
  },
  kids: {
    className:
      "right-0 top-[14%] w-[40%] max-w-[200px] rotate-6 sm:right-[-6%] sm:top-[18%] sm:w-[38%] sm:max-w-none sm:rotate-[7deg]",
    animation: "studio-float-delayed",
  },
  horror: {
    className:
      "bottom-0 left-1/2 w-[46%] max-w-[220px] -translate-x-1/2 -rotate-2 sm:bottom-[-4%] sm:left-[18%] sm:w-[44%] sm:max-w-none sm:translate-x-0 sm:-rotate-[3deg]",
    animation: "studio-float",
  },
};

function AccentCard({
  style,
  variant,
  className = "",
  animation,
}: {
  style: VideoStyle;
  variant: "mobile" | "desktop";
  className?: string;
  animation?: string;
}) {
  return (
    <div
      className={[
        "studio-glass overflow-hidden rounded-2xl border border-white/15 shadow-[0_18px_40px_rgba(9,13,36,0.45)]",
        variant === "desktop" ? "absolute hidden sm:block" : "block sm:hidden",
        animation,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={style.poster}
        alt={style.imageAlt}
        width={480}
        height={360}
        className="aspect-[4/3] w-full object-cover"
        sizes={variant === "mobile" ? "100vw" : "42vw"}
      />
      <p className="truncate px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-white/90">
        <span aria-hidden="true">{style.emoji} </span>
        {style.title}
      </p>
    </div>
  );
}

export function HeroVisual() {
  const accents = siteContent.styles.filter((s) =>
    (heroAccentIds as readonly string[]).includes(s.id),
  );

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 shadow-[0_24px_60px_rgba(9,13,36,0.45)] sm:min-h-[340px] sm:overflow-visible">
        <Image
          src={siteContent.hero.image}
          alt={siteContent.hero.imageAlt}
          fill
          priority
          className="rounded-3xl object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#090D24]/50 to-transparent" />

        {accents.map((style) => (
          <AccentCard
            key={`desktop-${style.id}`}
            style={style}
            variant="desktop"
            className={desktopPlacement[style.id as (typeof heroAccentIds)[number]].className}
            animation={
              desktopPlacement[style.id as (typeof heroAccentIds)[number]].animation
            }
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:hidden">
        {accents.map((style) => (
          <AccentCard key={`mobile-${style.id}`} style={style} variant="mobile" />
        ))}
      </div>
    </div>
  );
}