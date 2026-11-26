"use client";

import { productAdsContent } from "@/lib/product-ads-content";

export function SampleVideosCarousel() {
  const { samples } = productAdsContent;

  return (
    <div>
      <p className="mt-2 text-sm text-[#6B5544] md:hidden">{samples.swipeHint}</p>
      <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 sm:snap-none lg:mx-auto lg:max-w-5xl lg:grid-cols-3 [&::-webkit-scrollbar]:hidden">
        {samples.videos.map((item) => (
          <li
            key={item.id}
            className="relative w-[min(72vw,300px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#E8DFD2]/90 bg-black shadow-[0_16px_40px_rgba(58,42,20,0.18)] ring-1 ring-[#E8DFD2]/70 sm:w-full sm:max-w-none"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between gap-2 p-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                <span className="text-[#F7EFE4]" aria-hidden>
                  ▶
                </span>
                {item.title}
              </span>
              <span className="rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white backdrop-blur-sm">
                {item.duration}
              </span>
            </div>
            <video
              className="aspect-[9/16] h-auto w-full bg-black object-cover"
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
