"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { productAdsContent } from "@/lib/product-ads-content";

/**
 * Hero product collage with play → 16:9 explainer video popup.
 */
export function LuxuryProductStage() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleId = useId();
  const { hero } = productAdsContent;
  const explainer = hero.explainer;

  const close = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }
    setOpen(false);
    dialogRef.current?.close();
  }, []);

  const openModal = useCallback(() => {
    setOpen(true);
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onClose = () => {
      setOpen(false);
      const video = videoRef.current;
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  useEffect(() => {
    if (!open) return;
    const video = videoRef.current;
    if (!video) return;
    const play = video.play();
    if (play && typeof play.catch === "function") {
      play.catch(() => {
        /* autoplay may be blocked — controls remain */
      });
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  useEffect(() => {
    const onOpen = () => openModal();
    window.addEventListener("revgenpro:explainer", onOpen);
    return () => window.removeEventListener("revgenpro:explainer", onOpen);
  }, [openModal]);

  return (
    <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none lg:justify-self-end">
      <button
        type="button"
        onClick={openModal}
        className="group relative block w-full overflow-hidden rounded-[1.5rem] text-left shadow-[0_28px_64px_rgba(58,42,20,0.22)] ring-1 ring-[#E8DFD2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1410]"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls={open ? titleId : undefined}
        aria-label={explainer.openLabel}
      >
        <span className="relative block aspect-[1560/1200] w-full">
          <Image
            src={explainer.stageImage}
            alt={explainer.posterAlt}
            fill
            priority
            quality={100}
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain object-center transition duration-700 group-hover:scale-[1.02]"
          />
        </span>
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(26,20,16,0.22)_100%)]"
        />
        <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/92 text-[#1A1410] shadow-[0_12px_32px_rgba(26,20,16,0.28)] transition group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        className="fixed inset-0 z-[100] m-0 hidden h-full max-h-none w-full max-w-none items-center justify-center bg-transparent p-4 open:flex open:backdrop:bg-black/70 open:backdrop:backdrop-blur-[2px]"
        aria-labelledby={titleId}
        onClick={(e) => {
          if (e.target === dialogRef.current) close();
        }}
      >
        <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-[0_32px_80px_rgba(0,0,0,0.55)] ring-1 ring-white/15">
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <h2 id={titleId} className="text-sm font-semibold text-white sm:text-base">
              {explainer.title}
            </h2>
            <button
              type="button"
              onClick={close}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
              aria-label="Close video"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            {open ? (
              <video
                ref={videoRef}
                className="absolute inset-0 block h-full w-full object-cover object-center"
                controls
                playsInline
                autoPlay
                preload="metadata"
                poster={explainer.poster}
              >
                <source src={explainer.src} type="video/mp4" />
              </video>
            ) : null}
          </div>
        </div>
      </dialog>
    </div>
  );
}
