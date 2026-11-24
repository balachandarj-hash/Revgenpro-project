import Image from "next/image";
import { heroAccentIds, siteContent, type VideoStyle } from "@/lib/site-content";

const accentPlacement: Record<
  (typeof heroAccentIds)[number],
  { shell: string; animation: string }
> = {
  love: {
    shell:
      "left-[-6%] top-[6%] w-[44%] -rotate-[10deg] max-sm:left-[2%] max-sm:top-[8%] max-sm:w-[42%] max-sm:-rotate-[8deg]",
    animation: "studio-float",
  },
  kids: {
    shell:
      "right-[-8%] top-[16%] w-[40%] rotate-[12deg] max-sm:right-[0%] max-sm:top-[20%] max-sm:w-[38%] max-sm:rotate-[8deg]",
    animation: "studio-float-delayed",
  },
  horror: {
    shell:
      "bottom-[-8%] left-[16%] w-[46%] -rotate-[4deg] max-sm:bottom-[4%] max-sm:left-[12%] max-sm:w-[44%] max-sm:-rotate-[3deg]",
    animation: "studio-float",
  },
};

const accentShortTitle: Partial<Record<(typeof heroAccentIds)[number], string>> = {
  love: "AI Love Story",
  horror: "AI Horror Stories",
  kids: "AI Cartoon Stories",
};

function AccentCard({
  style,
  shellClassName,
  animation,
}: {
  style: VideoStyle;
  shellClassName: string;
  animation: string;
}) {
  const accentId = style.id as (typeof heroAccentIds)[number];
  const label = accentShortTitle[accentId] ?? style.title;

  return (
    <div
      className={["pointer-events-none absolute z-20 max-w-[48%] sm:max-w-none", shellClassName].join(
        " ",
      )}
    >
      <div
        className={[
          "studio-glass overflow-hidden rounded-2xl border border-white/15 shadow-[0_18px_40px_rgba(9,13,36,0.55)]",
          animation,
        ].join(" ")}
      >
        <Image
          src={style.poster}
          alt={style.imageAlt}
          width={480}
          height={360}
          className="aspect-[4/3] w-full object-cover"
          sizes="(max-width: 640px) 46vw, 42vw"
        />
        <p className="truncate px-2 py-1.5 text-[9px] font-semibold uppercase tracking-wide text-white/95 sm:px-3 sm:py-2 sm:text-[11px]">
          <span aria-hidden="true">{style.emoji} </span>
          {label}
        </p>
      </div>
    </div>
  );
}

export function HeroVisual() {
  const accents = siteContent.styles.filter((s) =>
    (heroAccentIds as readonly string[]).includes(s.id),
  );

  return (
    <div className="relative z-0 mx-auto w-full max-w-xl overflow-visible lg:max-w-none">
      <div className="relative isolate aspect-[4/3] min-h-[min(72vw,320px)] overflow-visible rounded-3xl border border-white/10 pb-8 shadow-[0_24px_60px_rgba(9,13,36,0.45)] sm:min-h-[340px] sm:pb-0">
        <Image
          src={siteContent.hero.image}
          alt={siteContent.hero.imageAlt}
          fill
          priority
          className="z-0 rounded-3xl object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div className="absolute inset-0 z-[1] rounded-3xl bg-gradient-to-t from-[#090D24]/60 via-[#090D24]/15 to-transparent" />

        {accents.map((style) => {
          const placement = accentPlacement[style.id as (typeof heroAccentIds)[number]];
          return (
            <AccentCard
              key={style.id}
              style={style}
              shellClassName={placement.shell}
              animation={placement.animation}
            />
          );
        })}
      </div>
    </div>
  );
}