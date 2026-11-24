import Image from "next/image";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

const navLinks = productAdsContent.header.nav;

export function SiteHeader() {
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);

  return (
    <header className="sticky top-0 z-50 border-b border-white/15 bg-[#111936]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] max-w-[1440px] items-center justify-between gap-3 px-5 md:px-10">
        <a href="#top" aria-label={`${brand.legalName}, top of page`} className="shrink-0">
          <Image
            src={brand.logoOnDarkSrc}
            alt={brand.name}
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
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
            className="hidden min-h-10 items-center rounded-full border border-[#25D366]/45 px-4 text-sm font-semibold text-[#86EFAC] sm:inline-flex"
          >
            WhatsApp
          </a>
          <a
            href="#enquiry"
            className="inline-flex min-h-10 items-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-4 text-sm font-semibold"
          >
            {productAdsContent.header.cta}
          </a>
        </div>
      </div>
    </header>
  );
}