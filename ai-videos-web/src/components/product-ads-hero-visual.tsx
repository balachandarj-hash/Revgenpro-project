"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { productAdsContent } from "@/lib/product-ads-content";

const showcase = [
  {
    id: "skincare",
    label: "Skincare",
    image: "/product-ads/skincare.jpg",
    video: "/product-ads/skincare.mp4",
    poster: "/product-ads/skincare-poster.jpg",
    alt: "Skincare product cinematic showcase",
    className: "left-[2%] top-[8%] w-[34%] -rotate-[5deg]",
    animation: "studio-float",
  },
  {
    id: "perfume",
    label: "Perfume",
    image: "/product-ads/perfume.jpg",
    video: "/product-ads/perfume.mp4",
    poster: "/product-ads/perfume-poster.jpg",
    alt: "Perfume bottle cinematic showcase",
    className: "right-[2%] top-[16%] w-[32%] rotate-[6deg]",
    animation: "studio-float-delayed",
  },
  {
    id: "electronics",
    label: "Electronics",
    image: "/product-ads/gadget.jpg",
    video: "/product-ads/gadget.mp4",
    poster: "/product-ads/gadget-poster.jpg",
    alt: "Electronics product cinematic showcase",
    className: "bottom-[4%] left-[18%] w-[36%] -rotate-[2deg]",
    animation: "studio-float",
  },
] as const;

export function ProductAdsHeroVisual() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [useVideo, setUseVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setUseVideo(false);
      return;
    }
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = async () => {
      try {
        video.muted = true;
        await video.play();
        setUseVideo(true);
      } catch {
        setUseVideo(false);
      }
    };
    void tryPlay();
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_28px_70px_rgba(0,0,0,0.45)] sm:min-h-[340px]">
        <Image
          src={productAdsContent.hero.heroImage}
          alt={productAdsContent.hero.heroImageAlt}
          fill
          priority
          className={`rounded-3xl object-cover transition-opacity duration-700 ${useVideo ? "opacity-0" : "opacity-100"}`}
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full rounded-3xl object-cover transition-opacity duration-700 ${useVideo ? "opacity-100" : "opacity-0"}`}
          muted
          loop
          playsInline
          preload="metadata"
          poster={productAdsContent.hero.heroImage}
          aria-label="Muted cinematic product video showcase"
        >
          <source src={productAdsContent.hero.heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#111113]/75 via-transparent to-[#111113]/25" />

        {showcase.map((item) => (
          <div
            key={item.id}
            className={[
              "studio-glass absolute overflow-hidden rounded-2xl border border-white/15 shadow-[0_18px_40px_rgba(0,0,0,0.45)]",
              item.animation,
              item.className,
            ].join(" ")}
          >
            <Image
              src={item.image}
              alt={item.alt}
              width={360}
              height={450}
              className="aspect-[4/5] w-full object-cover"
              sizes="(max-width: 640px) 32vw, 28vw"
            />
            <p className="truncate px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white/90 sm:px-3 sm:py-2 sm:text-[11px]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
