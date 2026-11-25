"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  SHOWCASE_DWELL_MS,
  SHOWCASE_FADE_MS,
  showcaseSlides,
  type ShowcaseSlide,
} from "@/lib/showcase";

function SlideMedia({
  slide,
  active,
  reducedMotion,
}: {
  slide: ShowcaseSlide;
  active: boolean;
  reducedMotion: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || slide.kind !== "video") return;

    if (active && !reducedMotion) {
      video.currentTime = 0;
      void video.play().catch(() => {
        /* autoplay may be blocked — poster remains visible */
      });
    } else {
      video.pause();
    }
  }, [active, reducedMotion, slide]);

  if (slide.kind === "video") {
    return (
      <>
        <Image
          src={slide.poster}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 48vw"
          priority={active}
        />
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          muted
          loop
          playsInline
          preload={active ? "auto" : "metadata"}
          poster={slide.poster}
          aria-label={slide.title}
        >
          <source src={slide.src} type="video/mp4" />
        </video>
      </>
    );
  }

  return (
    <>
      <Image
        src={slide.poster}
        alt={slide.title}
        fill
        className="object-contain p-8 sm:p-12"
        sizes="(max-width: 1024px) 100vw, 48vw"
        priority={active}
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#2a2118]/80 to-transparent px-5 py-6">
        <p className="text-xs font-medium leading-relaxed text-[#F7F2EA]/90">
          {slide.placeholderNote}
        </p>
      </div>
    </>
  );
}

export function ProductShowcase() {
  const [index, setIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const dwellRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const goTo = useCallback((next: number) => {
    setIndex((next + showcaseSlides.length) % showcaseSlides.length);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    if (dwellRef.current) clearTimeout(dwellRef.current);
    dwellRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % showcaseSlides.length);
    }, SHOWCASE_DWELL_MS);
    return () => {
      if (dwellRef.current) clearTimeout(dwellRef.current);
    };
  }, [index, reducedMotion]);

  const current = showcaseSlides[index];

  return (
    <div className="w-full">
      <div
        className="relative overflow-hidden rounded-[1.75rem] border border-[#E8DFD2] bg-[#FFFCF7] shadow-[0_28px_60px_rgba(58,42,28,0.14)]"
        style={{ aspectRatio: "4 / 5" }}
        aria-roledescription="carousel"
        aria-label="Product demonstration showcase"
      >
        {showcaseSlides.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={slide.id}
              className="absolute inset-0"
              style={{
                opacity: active ? 1 : 0,
                transition: `opacity ${SHOWCASE_FADE_MS}ms ease-in-out`,
                pointerEvents: active ? "auto" : "none",
              }}
              aria-hidden={!active}
            >
              <div className="relative h-full w-full bg-[radial-gradient(ellipse_at_center,#FFF9F0_0%,#F3EBE0_70%,#EDE4D8_100%)]">
                <SlideMedia
                  slide={slide}
                  active={active}
                  reducedMotion={reducedMotion}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3a2a1c]/35 via-transparent to-transparent" />
              </div>
            </div>
          );
        })}

        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-[#E8DFD2]/80 bg-[#FFFCF7]/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#6B5A48] backdrop-blur-sm sm:left-5 sm:top-5">
          {current.category}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="text-sm font-semibold text-[#2C241C]">{current.title}</p>
          <p className="mt-0.5 text-xs text-[#6B5A48] sm:text-sm">{current.description}</p>
        </div>
        <div className="flex flex-wrap gap-2" role="tablist" aria-label="Product categories">
          {showcaseSlides.map((slide, i) => {
            const selected = i === index;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={[
                  "rounded-full px-3 py-1.5 text-xs font-semibold transition",
                  selected
                    ? "bg-[#2C241C] text-[#F7F2EA]"
                    : "border border-[#E0D5C8] bg-white/70 text-[#6B5A48] hover:border-[#C4B5A5]",
                ].join(" ")}
                onClick={() => goTo(i)}
              >
                {slide.category}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
