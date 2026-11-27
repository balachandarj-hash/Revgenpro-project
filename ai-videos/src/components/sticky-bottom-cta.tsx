"use client";

import { whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";
import { siteContent } from "@/lib/site-content";

type StickyPage = "home" | "product-ads";

export function StickyBottomCta({ page = "home" }: { page?: StickyPage }) {
  const isProduct = page === "product-ads";
  const content = isProduct ? productAdsContent : siteContent;
  const wa = whatsappUrl(content.whatsappPrefill);
  const enquiryHref = "#enquiry";
  const enquiryCta = isProduct
    ? productAdsContent.stickyBar.enquiryCta
    : siteContent.stickyBar.enquiryCta;

  if (isProduct) {
    return (
      <div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/15 bg-[#111936]/95 px-4 py-3 backdrop-blur-md md:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <div className="mx-auto flex max-w-lg gap-2">
          <a
            href={enquiryHref}
            className="inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#2563EB)] px-4 text-sm font-semibold shadow-[0_8px_24px_rgba(124,58,237,0.35)]"
          >
            {enquiryCta}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/15 bg-[#111936]/95 px-4 py-3 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg items-center gap-3">
        <p className="shrink-0 text-lg font-bold text-white">{siteContent.price}</p>
        <a
          href={enquiryHref}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-4 text-sm font-semibold"
        >
          <span aria-hidden>✦</span>
          {enquiryCta}
        </a>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="sr-only"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
}
