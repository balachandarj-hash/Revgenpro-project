"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";
import { siteContent } from "@/lib/site-content";

type HeaderPage = "home" | "product-ads";

type NavLink = { href: string; label: string };

const homeNav: NavLink[] = [
  { href: "#styles", label: "Styles" },
  { href: "#portfolio", label: "Demos" },
  { href: "#process", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#faq", label: "FAQ" },
];

/** Home: full classic nav. Product ads: CTA only. */
export function SiteHeader({ page = "home" }: { page?: HeaderPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isProduct = page === "product-ads";
  const content = isProduct ? productAdsContent : siteContent;
  const wa = whatsappUrl(content.whatsappPrefill);
  const logoHref = isProduct ? "#top" : "/#home";
  const enquiryHref = "#enquiry";
  const ctaLabel = isProduct ? productAdsContent.header.cta : siteContent.header.cta;
  const ctaClass = isProduct
    ? "inline-flex min-h-10 items-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#2563EB)] px-4 text-sm font-semibold shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition hover:brightness-110"
    : "cta-studio inline-flex min-h-10 items-center gap-1.5 rounded-full px-4 text-sm font-semibold";

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#111936]/85 shadow-[0_8px_28px_rgba(9,13,36,0.45)] backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-3 px-5 md:px-10">
        <Link href={logoHref} aria-label={`${brand.legalName}, home`} className="shrink-0">
          <Image
            src={brand.logoOnDarkSrc}
            alt={brand.name}
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        {!isProduct ? (
          <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
            {homeNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        ) : null}

        <div className="flex items-center gap-2 sm:gap-3">
          {!isProduct ? (
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden min-h-10 items-center rounded-full border border-[#25D366]/45 px-4 text-sm font-semibold text-[#86EFAC] sm:inline-flex"
            >
              WhatsApp
            </a>
          ) : null}
          <a href={enquiryHref} className={`${ctaClass} hidden sm:inline-flex`}>
            {ctaLabel}
            {!isProduct ? <span aria-hidden>→</span> : null}
          </a>
          {!isProduct ? (
            <button
              type="button"
              className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 text-sm font-semibold lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="studio-menu"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span aria-hidden className="flex flex-col gap-1">
                <span className="block h-0.5 w-4 bg-white" />
                <span className="block h-0.5 w-4 bg-white" />
                <span className="block h-0.5 w-4 bg-white" />
              </span>
              {menuOpen ? "Close" : "Menu"}
            </button>
          ) : (
            <a href={enquiryHref} className={`${ctaClass} sm:hidden`}>
              {ctaLabel}
            </a>
          )}
        </div>
      </div>

      {!isProduct && menuOpen ? (
        <nav
          id="studio-menu"
          aria-label="On this page"
          className="border-t border-white/10 bg-[#111936] px-5 py-4 lg:hidden"
        >
          <ul className="space-y-2">
            {homeNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={enquiryHref}
                className="cta-studio mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-full px-4 text-sm font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                {ctaLabel}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
