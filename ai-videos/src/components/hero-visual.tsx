"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { siteContent } from "@/lib/site-content";

const floatSamples = [
  {
    id: "love",
    src: "/ai-videos/love.jpg",
    alt: "AI love story sample",
    label: "Love",
    className:
      "left-[-4%] top-[6%] w-[26%] -rotate-[8deg] sm:left-[-6%] sm:w-[24%]",
    animation: "studio-float",
  },
  {
    id: "manga",
    src: "/ai-videos/manga-story.jpg",
    alt: "AI manga story sample",
    label: "Manga",
    className:
      "right-[-3%] top-[10%] w-[24%] rotate-[7deg] sm:right-[-5%] sm:w-[22%]",
    animation: "studio-float-delayed",
  },
  {
    id: "brand",
    src: "/ai-videos/brand.jpg",
    alt: "AI brand story sample",
    label: "Brand",
    className:
      "bottom-[14%] left-[-2%] w-[22%] rotate-[4deg] sm:bottom-[16%] sm:left-[-4%] sm:w-[20%]",
    animation: "studio-float-slow",
  },
] as const;

/**
 * Cinematic 16:9 hero — neon glow frame, floating AI samples, reflective floor.
 * Asset: public/videos/hero-explainer-16x9.mp4 (+ poster).
 */
export function HeroVisual() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { explainer } = siteContent.hero;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const play = video.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => {
        /* autoplay may be blocked — controls remain */
      });
    }
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      {/* Atmospheric glow behind the stage */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.2)_0%,rgba(168,85,247,0.16)_40%,transparent_70%)] blur-2xl sm:-inset-10"
      />

      <div className="relative pb-10 sm:pb-12">
        {/* Floating AI sample cards */}
        <ul className="pointer-events-none absolute inset-0 z-20 hidden list-none sm:block" aria-hidden>
          {floatSamples.map((sample) => (
            <li
              key={sample.id}
              className={`absolute ${sample.className}`}
            >
              <div className={sample.animation}>
                <div className="hero-float-card overflow-hidden rounded-xl bg-[#0a1228]/90">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={sample.src}
                      alt={sample.alt}
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                    <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050816]/90 to-transparent px-2 pb-1.5 pt-5 text-[10px] font-semibold uppercase tracking-wider text-cyan-200/90">
                      {sample.label}
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <figure className="hero-glow-frame relative z-10 overflow-hidden rounded-2xl bg-black sm:rounded-3xl">
          <div className="relative aspect-video w-full bg-black">
            <video
              ref={videoRef}
              className="absolute inset-0 h-full w-full object-cover"
              controls
              playsInline
              muted
              loop
              autoPlay
              preload="metadata"
              poster={explainer.poster}
              aria-label={explainer.title}
            >
              <source src={explainer.src} type="video/mp4" />
            </video>
            {/* Soft vignette for cinematic feel */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(5,8,22,0.45)_100%)]"
            />
          </div>
          <figcaption className="relative border-t border-cyan-400/15 bg-[#0a1228]/95 px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white/75 sm:text-sm">
            <span className="inline-flex items-center gap-2">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                aria-hidden
              />
              {explainer.title}
            </span>
          </figcaption>
        </figure>

        {/* Reflective neon floor under the stage */}
        <div className="neon-floor" aria-hidden />
      </div>
    </div>
  );
}
