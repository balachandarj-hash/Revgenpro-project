import Image from "next/image";
import { productAdsContent } from "@/lib/product-ads-content";

export function HeroCollage() {
  return (
    <div className="relative mx-auto aspect-[5/6] w-full max-w-xl lg:max-w-none">
      {productAdsContent.collage.map((item) => (
        <a
          key={item.id}
          href="#samples"
          className={[
            "group absolute overflow-hidden rounded-2xl border border-white/20 bg-black/40 shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition hover:scale-[1.02]",
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
              sizes="(max-width: 1024px) 45vw, 22vw"
              priority={item.id === "fashion" || item.id === "perfume"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[#EC008C] shadow-lg transition group-hover:scale-110">
              <span className="ml-0.5 text-lg" aria-hidden>
                ▶
              </span>
            </span>
            <p className="absolute bottom-2 left-3 right-3 text-xs font-semibold text-white drop-shadow">
              {item.label}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
