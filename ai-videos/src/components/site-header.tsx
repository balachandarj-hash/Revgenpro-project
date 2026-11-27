import Image from "next/image";
import Link from "next/link";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";
import { siteContent } from "@/lib/site-content";

type HeaderPage = "home" | "product-ads";

type NavLink = { href: string; label: string };

const homeNav: NavLink[] = [
  { href: "#styles", label: "Styles" },
  { href: "#portfolio", label: "Samples" },
  { href: "#process", label: "How it works" },
  { href: "#enquiry", label: "Enquire" },
];

/** Product video landing: minimal — CTA only, no distracting nav. */
export function SiteHeader({ page = "home" }: { page?: HeaderPage }) {
  const isProduct = page === "product-ads";
  const content = isProduct ? productAdsContent : siteContent;
  const wa = whatsappUrl(content.whatsappPrefill);
  const logoHref = isProduct ? "#top" : "/#home";
  const enquiryHref = "#enquiry";
  const ctaLabel = isProduct ? productAdsContent.header.cta : siteContent.header.cta;
  const ctaClass = isProduct
    ? "inline-flex min-h-10 items-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#2563EB)] px-4 text-sm font-semibold shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition hover:brightness-110"
    : "cta-neon inline-flex min-h-10 items-center rounded-full px-4 text-sm font-semibold transition hover:brightness-110";

  return (
    <header className="sticky top-0 z-50 border-b border-cyan-400/10 bg-[#050816]/90 backdrop-blur-md">
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
          <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
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
          <a href={enquiryHref} className={ctaClass}>
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
