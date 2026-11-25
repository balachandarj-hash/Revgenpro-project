"use client";

import { whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

export function WhatsAppFloat() {
  const href = whatsappUrl(productAdsContent.whatsappPrefill);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[5.5rem] right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:brightness-110 md:bottom-6"
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden>
        <path d="M12.04 2c-5.46 0-9.91 4.43-9.91 9.89 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.9-4.43 9.9-9.89C21.95 6.43 17.5 2 12.04 2zm5.77 14.13c-.24.67-1.39 1.23-1.93 1.31-.49.07-1.11.1-1.79-.11-.41-.13-.94-.3-1.62-.59-2.85-1.23-4.71-4.11-4.85-4.3-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.36.26-.29.57-.36.76-.36h.55c.17 0 .4-.05.62.47.24.56.81 1.97.88 2.11.07.14.12.31.02.5-.1.19-.14.31-.28.48-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.93 1.94 1.22 2.21 1.36.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.23.64-.14.26.1 1.66.78 1.95.93.28.14.47.21.54.33.07.12.07.69-.17 1.36z" />
      </svg>
    </a>
  );
}
