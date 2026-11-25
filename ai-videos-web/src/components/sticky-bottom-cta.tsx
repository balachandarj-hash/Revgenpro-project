"use client";

import { productAdsContent } from "@/lib/product-ads-content";

export function StickyBottomCta() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-[#111113]/95 px-4 py-3 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <a
        href="#enquiry"
        className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#2563EB)] px-4 text-sm font-semibold shadow-[0_8px_24px_rgba(124,58,237,0.35)]"
      >
        {productAdsContent.stickyBar.enquiryCta}
      </a>
    </div>
  );
}
