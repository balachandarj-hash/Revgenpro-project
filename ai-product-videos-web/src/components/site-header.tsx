import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-[#F8F8F8]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.25rem] max-w-[1440px] items-center justify-between gap-3 px-5 md:px-10">
        <Link href="#top" aria-label={`${brand.legalName}, home`} className="shrink-0">
          <Image
            src={brand.logoSrc}
            alt={brand.name}
            width={160}
            height={40}
            className="h-9 w-auto"
            priority
          />
        </Link>
        <a
          href="#enquiry"
          className="inline-flex min-h-10 items-center rounded-full bg-[#EC008C] px-4 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(236,0,140,0.28)] transition hover:brightness-110"
        >
          {productAdsContent.header.cta}
        </a>
      </div>
    </header>
  );
}
