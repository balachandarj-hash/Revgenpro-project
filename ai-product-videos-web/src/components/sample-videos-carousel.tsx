"use client";

import { productAdsContent } from "@/lib/product-ads-content";

export function SampleVideosCarousel() {
  const { samples } = productAdsContent;

  return (
    <div>
      <p className="mt-2 text-sm text-[#6B5544] md:hidden">{samples.swipeHint}</p>
      {/* Mobile: swipe strip · Desktop: neat 4-up 9:16 grid like Video Styles */}
      <ul className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:overflow-visible sm:pb-0 sm:snap-none lg:grid-cols-4 [&::-webkit-scrollbar]:hidden">
        {samples.videos.map((item) => (
          <li
            key={item.id}
            className="relative w-[min(68vw,280px)] shrink-0 snap-center overflow-hidden rounded-2xl border border-[#E8DFD2]/90 bg-black shadow-[0_14px_36px_rgba(58,42,20,0.16)] ring-1 ring-[#E8DFD2]/70 sm:w-full sm:max-w-none"
          >
            <div className="pointer-events-none absolute left-3 top-3 z-10 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
              <span className="text-[#F7EFE4]" aria-hidden>
                ▶
              </span>
              {item.title}
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
