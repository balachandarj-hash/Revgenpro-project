import Image from "next/image";
import Link from "next/link";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";
import { siteContent } from "@/lib/site-content";

type HeaderPage = "home" | "product-ads";

type NavLink = { href: string; label: string };

const homeNav: NavLink[] = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#offer", label: "Offer" },
  { href: "#enquiry", label: "Enquire" },
];

const productNav: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#samples", label: "Samples" },
  { href: "#enquiry", label: "Enquire" },
];

export function SiteHeader({ page = "home" }: { page?: HeaderPage }) {
  const isProduct = page === "product-ads";
  const content = isProduct ? productAdsContent : siteContent;
  const wa = whatsappUrl(content.whatsappPrefill);
  const navLinks: NavLink[] = isProduct ? productNav : homeNav;
  const logoHref = isProduct ? "#top" : "/#home";
  const enquiryHref = "#enquiry";
  const ctaLabel = isProduct ? productAdsContent.header.cta : siteContent.header.cta;

  const NavAnchor = ({ link }: { link: NavLink }) => {
    const isRoute = link.href.startsWith("/");
    const className = "text-sm font-medium text-white/80 transition-colors hover:text-white";
    if (isRoute) {
      return (
        <Link href={link.href} className={className}>
          {link.label}
        </Link>
      );
    }
    return (
      <a href={link.href} className={className}>
        {link.label}
      </a>
    );
  };

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
          {navLinks.map((link) => (
            <NavAnchor key={link.href} link={link} />
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
            href={enquiryHref}
            className="inline-flex min-h-10 items-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] px-4 text-sm font-semibold"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}