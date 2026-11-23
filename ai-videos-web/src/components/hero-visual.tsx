import Image from "next/image";
import { heroAccentIds, siteContent, type VideoStyle } from "@/lib/site-content";

const desktopPlacement: Record<
  (typeof heroAccentIds)[number],
  { className: string; animation: string }
> = {
  love: {
    className:
      "left-[-4%] top-[8%] w-[42%] -rotate-[8deg] max-sm:left-[0%] max-sm:top-[10%] max-sm:w-[40%] max-sm:-rotate-[6deg]",
    animation: "studio-float",
  },
  kids: {
    className:
      "right-[-6%] top-[18%] w-[38%] rotate-[7deg] max-sm:right-[0%] max-sm:top-[22%] max-sm:w-[36%] max-sm:rotate-[6deg]",
    animation: "studio-float-delayed",
  },
  horror: {
    className:
      "bottom-[-4%] left-[18%] w-[44%] -rotate-[3deg] max-sm:bottom-[6%] max-sm:left-[14%] max-sm:w-[42%] max-sm:-rotate-[2deg]",
    animation: "studio-float",
  },
};

function AccentCard({
  style,
  className = "",
  animation,
}: {
  style: VideoStyle;
  className?: string;
  animation?: string;
}) {
  return (
    <div
      className={[
        "studio-glass absolute overflow-hidden rounded-2xl border border-white/15 shadow-[0_18px_40px_rgba(9,13,36,0.45)]",
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
        sizes="(max-width: 640px) 44vw, 42vw"
      />
      <p className="truncate px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white/90 sm:px-3 sm:py-2 sm:text-[11px]">
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
      <div className="relative aspect-[4/3] min-h-[280px] overflow-visible rounded-3xl border border-white/10 shadow-[0_24px_60px_rgba(9,13,36,0.45)] max-sm:pb-6 sm:min-h-[340px]">
        <Image
          src={siteContent.hero.image}
          alt={siteContent.hero.imageAlt}
          fill
          priority
          className="rounded-3xl object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#090D24]/55 to-transparent" />

        {accents.map((style) => (
          <AccentCard
            key={style.id}
            style={style}
            className={desktopPlacement[style.id as (typeof heroAccentIds)[number]].className}
            animation={
              desktopPlacement[style.id as (typeof heroAccentIds)[number]].animation
            }
          />
        ))}
      </div>
    </div>
  );
}