"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

export function SiteHeader() {
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-5 md:px-10">
        <Link href="#top" aria-label={`${brand.legalName}, home`} className="shrink-0">
          <Image
            src={brand.logoSrc}
            alt={brand.name}
            width={168}
            height={42}
            className="h-9 w-auto sm:h-10"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {productAdsContent.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#374151] transition-colors hover:text-[#111827]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center gap-2 rounded-full bg-[#1d4ed8] px-4 text-sm font-semibold text-white transition hover:brightness-110 sm:inline-flex"
          >
            <span aria-hidden>💬</span>
            {productAdsContent.header.whatsappCta}
          </a>
          <a
            href="#enquiry"
            className="hidden min-h-10 items-center gap-1.5 rounded-full bg-[#EC008C] px-4 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(236,0,140,0.28)] transition hover:brightness-110 sm:inline-flex"
          >
            {productAdsContent.header.cta}
            <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] bg-white text-[#111827] lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          className="border-t border-[#E5E7EB] bg-white px-4 pb-4 pt-2 lg:hidden"
        >
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {productAdsContent.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-[#111827] hover:bg-[#F3F4F6]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="#enquiry"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#EC008C] px-4 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {productAdsContent.header.cta}
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1d4ed8] px-4 text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              {productAdsContent.header.whatsappCta}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
