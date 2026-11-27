"use client";

import { useEffect, useRef } from "react";
import { siteContent } from "@/lib/site-content";

/**
 * Professional 16:9 hero explainer — replaces the floating category cards cluster.
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
      <figure className="overflow-hidden rounded-2xl border border-white/12 bg-black shadow-[0_24px_60px_rgba(9,13,36,0.5)] sm:rounded-3xl">
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
        </div>
        <figcaption className="border-t border-white/10 bg-[#111936]/90 px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white/70 sm:text-sm">
          {explainer.title}
        </figcaption>
      </figure>
    </div>
  );
}
