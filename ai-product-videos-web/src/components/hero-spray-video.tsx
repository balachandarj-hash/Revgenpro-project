"use client";

/**
 * 2s muted looping spray hero video.
 * Falls back to the poster still if autoplay is blocked.
 */
export function HeroSprayVideo() {
  return (
    <div className="absolute inset-0 bg-[#05060f]">
      <video
        className="absolute inset-0 h-full w-full object-cover object-[82%_center] sm:object-[85%_center] lg:object-right"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/product-ads/hero-perfume-spray.jpg"
        aria-label="Luxury perfume bottle spraying fragrance mist"
      >
        <source src="/product-ads/hero-perfume-spray.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
