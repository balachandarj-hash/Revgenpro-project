import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111113]/90 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between gap-3 px-5 md:px-10">
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
        <a
          href="#enquiry"
          className="inline-flex min-h-10 items-center rounded-full bg-[linear-gradient(135deg,#7C3AED,#2563EB)] px-4 text-sm font-semibold shadow-[0_8px_24px_rgba(124,58,237,0.35)] transition hover:brightness-110"
        >
          {productAdsContent.header.cta}
        </a>
      </div>
    </header>
  );
}
