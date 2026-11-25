"use client";

import { productAdsContent } from "@/lib/product-ads-content";

export function SampleVideosCarousel() {
  const { samples } = productAdsContent;

  return (
    <div>
      <p className="mt-2 text-sm text-white/60 md:hidden">{samples.swipeHint}</p>
      <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {samples.videos.map((item) => (
          <li
            key={item.id}
            className="relative w-[min(72vw,260px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:w-[220px]"
          >
            <div className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              <span className="text-[#F472B6]" aria-hidden>
                ▶
              </span>
              {item.title}
            </div>
            <video
              className="aspect-[9/16] w-full bg-black object-cover"
              controls
              playsInline
              preload="metadata"
              poster={item.poster}
            >
              <source src={item.src} type="video/mp4" />
            </video>
          </li>
        ))}
      </ul>
    </div>
  );
}
