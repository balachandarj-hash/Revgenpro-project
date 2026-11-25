import Image from "next/image";
import Link from "next/link";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

export function SiteHeader() {
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b1024]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-3 px-5 md:px-10">
        <Link href="#top" aria-label={`${brand.legalName}, home`} className="shrink-0">
          <Image
            src={brand.logoOnDarkSrc}
            alt={brand.name}
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          {productAdsContent.header.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white/80 transition-colors hover:text-white"
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
            className="inline-flex min-h-10 items-center gap-1.5 rounded-full bg-[#EC008C] px-4 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(236,0,140,0.35)] transition hover:brightness-110"
          >
            {productAdsContent.header.cta}
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
}
