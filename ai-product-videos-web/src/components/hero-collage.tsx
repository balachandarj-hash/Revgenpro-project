import Image from "next/image";
import { productAdsContent } from "@/lib/product-ads-content";

export function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
      {productAdsContent.collage.map((item) => {
        const isOffer = item.id === "offer";
        return (
          <a
            key={item.id}
            href="#samples"
            className={[
              "group absolute overflow-hidden rounded-xl border border-white/20 bg-black/40 shadow-[0_12px_28px_rgba(0,0,0,0.4)] transition hover:scale-[1.03]",
              isOffer ? "ring-2 ring-[#EC008C]/80 shadow-[0_0_24px_rgba(236,0,140,0.45)]" : "",
              item.className,
            ].join(" ")}
            aria-label={`Watch ${item.label} sample`}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={item.image}
                alt={item.label}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 36vw, 160px"
                priority={item.id === "fashion" || item.id === "perfume"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute left-1/2 top-1/2 flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-sm text-[#EC008C] shadow-md transition group-hover:scale-110 sm:h-9 sm:w-9">
                <span className="ml-0.5" aria-hidden>
                  ▶
                </span>
              </span>
              <p className="absolute bottom-1.5 left-2 right-2 text-[10px] font-semibold text-white drop-shadow sm:text-xs">
                {item.label}
              </p>
            </div>
          </a>
        );
      })}
    </div>
  );
}
