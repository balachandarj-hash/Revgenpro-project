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
  const primaryClass = isProduct
    ? "inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#2563EB)] px-4 text-sm font-semibold shadow-[0_8px_24px_rgba(124,58,237,0.35)]"
    : "inline-flex min-h-11 flex-1 items-center justify-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-4 text-sm font-semibold";

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/15 bg-[#111936]/95 px-4 py-3 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <a href={enquiryHref} className={primaryClass}>
          {enquiryCta}
        </a>
        {!isProduct ? (
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border border-[#25D366]/50 bg-[#25D366]/15 px-4 text-sm font-semibold text-[#86EFAC]"
          >
            WhatsApp
          </a>
        ) : null}
      </div>
    </div>
  );
}
