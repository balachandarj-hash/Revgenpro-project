"use client";

import { whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

export function StickyBottomCta() {
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/15 bg-[#111936]/95 px-4 py-3 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a
          href="#enquiry"
          className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-4 text-sm font-semibold"
        >
          {productAdsContent.stickyBar.enquiryCta}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-[#25D366]/50 bg-[#25D366]/15 px-4 text-sm font-semibold text-[#86EFAC]"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}