"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { brand } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

export function SiteHeader() {
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
    <header className="sticky top-0 z-50 border-b border-[#E8DFD2]/80 bg-[#FBF7F0]/92 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 md:px-10">
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

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {productAdsContent.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#5C4A3A] transition-colors hover:text-[#1A1410]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#enquiry"
            className="hidden min-h-10 items-center rounded-full bg-[#1A1410] px-5 text-sm font-semibold text-[#FBF7F0] transition hover:bg-[#2C241C] sm:inline-flex"
          >
            {productAdsContent.header.cta}
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E0D5C8] bg-white text-[#1A1410] lg:hidden"
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
        <div id={menuId} className="border-t border-[#E8DFD2] bg-[#FBF7F0] px-4 pb-4 pt-2 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {productAdsContent.header.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-[#1A1410] hover:bg-[#F3EBE0]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#enquiry"
            className="mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#1A1410] px-4 text-sm font-semibold text-[#FBF7F0]"
            onClick={() => setOpen(false)}
          >
            {productAdsContent.header.cta}
          </a>
        </div>
      ) : null}
    </header>
  );
}
