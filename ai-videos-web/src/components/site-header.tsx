"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";
import { routes } from "@/lib/routes";
import { siteContent } from "@/lib/site-content";

type HeaderPage = "home" | "product-ads" | "privacy";

type NavLink = { href: string; label: string };

const homeNav: NavLink[] = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#offer", label: "Offer" },
  { href: "#enquiry", label: "Enquire" },
];

const productNav: NavLink[] = [
  { href: `${routes.productAdvertisements}#services`, label: "Services" },
  { href: `${routes.productAdvertisements}#samples`, label: "Samples" },
  { href: `${routes.productAdvertisements}#enquiry`, label: "Enquire" },
];

const crossPageLinks: NavLink[] = [
  { href: routes.home, label: "Home" },
  { href: routes.productAdvertisements, label: "Product ads" },
  { href: routes.privacy, label: "Privacy" },
];

function NavAnchor({ link, onNavigate }: { link: NavLink; onNavigate?: () => void }) {
  const isRoute = link.href.startsWith("/");
  const className = "text-sm font-medium text-white/80 transition-colors hover:text-white";
  if (isRoute) {
    return (
      <Link href={link.href} className={className} onClick={onNavigate}>
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className={className} onClick={onNavigate}>
      {link.label}
    </a>
  );
}

export function SiteHeader({ page = "home" }: { page?: HeaderPage }) {
  const isProduct = page === "product-ads";
  const isPrivacy = page === "privacy";
  const content = isProduct ? productAdsContent : siteContent;
  const wa = whatsappUrl(content.whatsappPrefill);
  const sectionLinks: NavLink[] = isProduct ? productNav : isPrivacy ? [] : homeNav;
  const logoHref = isProduct
    ? routes.productAdvertisements
    : isPrivacy
      ? routes.home
      : routes.home;
  const enquiryHref = isProduct
    ? `${routes.productAdvertisements}#enquiry`
    : isPrivacy
      ? `${routes.home}#enquiry`
      : "#enquiry";
  const ctaLabel = isProduct ? productAdsContent.header.cta : siteContent.header.cta;

  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const desktopCrossLink = !isProduct ? (
    <Link
      href={routes.productAdvertisements}
      className="text-sm font-medium text-[#C4B5FD] transition-colors hover:text-white"
    >
      Product ads
    </Link>
  ) : (
    <Link href={routes.home} className="text-sm font-medium text-white/80 transition-colors hover:text-white">
      Home
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#111936]/95 backdrop-blur-md">
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
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {isPrivacy ? (
            <>
              <Link href={routes.home} className="text-sm font-medium text-white/80 hover:text-white">
                Home
              </Link>
              <Link
                href={routes.productAdvertisements}
                className="text-sm font-medium text-white/80 hover:text-white"
              >
                Product ads
              </Link>
              <Link href={routes.privacy} className="text-sm font-medium text-[#C4B5FD]">
                Privacy
              </Link>
            </>
          ) : (
            <>
              {desktopCrossLink}
              {sectionLinks.map((link) => (
                <NavAnchor key={link.href} link={link} />
              ))}
            </>
          )}
        </nav>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="inline-flex min-h-10 min-w-10 items-center justify-center rounded-full border border-white/20 text-sm font-semibold text-white/90 md:hidden"
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            <span aria-hidden>{menuOpen ? "✕" : "☰"}</span>
          </button>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden min-h-10 items-center rounded-full border border-[#25D366]/45 px-4 text-sm font-semibold text-[#86EFAC] sm:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href={enquiryHref}
            className="inline-flex min-h-10 items-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-4 text-sm font-semibold"
          >
            {isPrivacy ? siteContent.header.cta : ctaLabel}
          </a>
        </div>
      </div>

      <nav
        aria-label="Site pages"
        className="flex gap-4 overflow-x-auto border-t border-white/10 px-5 py-2 md:hidden [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {crossPageLinks.map((link) => {
          const active =
            (link.href === routes.home && page === "home") ||
            (link.href === routes.productAdvertisements && page === "product-ads") ||
            (link.href === routes.privacy && page === "privacy");
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`shrink-0 text-xs font-semibold uppercase tracking-wide ${
                active ? "text-[#C4B5FD]" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {menuOpen && (
        <div
          id={menuId}
          className="fixed inset-0 top-[calc(4.5rem+2.5rem)] z-40 border-t border-white/10 bg-[#0d1330]/98 px-5 py-6 md:hidden"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">Pages</p>
          <ul className="mt-3 flex flex-col gap-3">
            {crossPageLinks.map((link) => (
              <li key={link.href}>
                <NavAnchor link={link} onNavigate={closeMenu} />
              </li>
            ))}
          </ul>
          {sectionLinks.length > 0 ? (
            <>
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">
                On this page
              </p>
              <ul className="mt-3 flex flex-col gap-3">
                {sectionLinks.map((link) => (
                  <li key={link.href}>
                    <NavAnchor link={link} onNavigate={closeMenu} />
                  </li>
                ))}
              </ul>
            </>
          ) : null}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full border border-[#25D366]/45 px-4 text-sm font-semibold text-[#86EFAC]"
            onClick={closeMenu}
          >
            WhatsApp
          </a>
          <button
            type="button"
            className="mt-3 w-full rounded-full border border-white/15 py-2 text-sm text-white/70"
            onClick={closeMenu}
          >
            Close
          </button>
        </div>
      )}
    </header>
  );
}