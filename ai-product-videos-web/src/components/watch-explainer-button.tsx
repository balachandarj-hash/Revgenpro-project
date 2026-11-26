"use client";

import { productAdsContent } from "@/lib/product-ads-content";

export function WatchExplainerButton({ className }: { className?: string }) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        window.dispatchEvent(new Event("revgenpro:explainer"));
      }}
    >
      <span
        aria-hidden
        className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1410] text-[10px] text-[#FBF7F0]"
      >
        ▶
      </span>
      {productAdsContent.hero.playLabel}
    </button>
  );
}
