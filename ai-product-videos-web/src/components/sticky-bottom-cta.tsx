"use client";

import { whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

export function StickyBottomCta() {
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#E8DFD2] bg-[#FBF7F0] px-4 py-3 md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href="#enquiry"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[#1A1410] px-4 text-sm font-semibold text-[#FBF7F0]"
        >
          {productAdsContent.stickyBar.enquiryCta}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-[#D4C2A4] bg-white px-4 text-sm font-semibold text-[#1A1410]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
