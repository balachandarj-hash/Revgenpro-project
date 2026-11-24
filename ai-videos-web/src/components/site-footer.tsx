import Link from "next/link";
import { brand, whatsappUrl } from "@/lib/brand";
import { routes } from "@/lib/routes";
import { siteContent } from "@/lib/site-content";

const footerNav = [
  { href: routes.home, label: "Home" },
  { href: routes.productAdvertisements, label: "Product ads" },
  { href: routes.privacy, label: "Privacy" },
] as const;

export function SiteFooter() {
  const wa = whatsappUrl(siteContent.whatsappPrefill);
  const telHref = `tel:+${brand.whatsapp.phoneDigits}`;

  return (
    <footer className="relative z-10 border-t border-white/10 px-5 py-10 text-sm text-white/70 md:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">Navigate</p>
          <ul className="mt-4 space-y-2">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-medium text-white/85 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">Contact</p>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="text-white/50">Email</dt>
              <dd>
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="font-medium text-white/90 hover:text-[#C4B5FD] hover:underline"
                >
                  {brand.contact.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Phone</dt>
              <dd>
                <a href={telHref} className="font-medium text-white/90 hover:text-[#C4B5FD]">
                  {brand.contact.phoneDisplay}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">WhatsApp</dt>
              <dd>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#86EFAC] hover:underline"
                >
                  Chat with us
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-white/50">Studio</dt>
              <dd className="font-medium text-white/90">
                {brand.location.locality}, {brand.location.region}, {brand.location.country}
              </dd>
            </div>
          </dl>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C4B5FD]">Follow</p>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href={brand.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/85 transition-colors hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/85 transition-colors hover:text-white"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-[1440px] border-t border-white/10 pt-6 text-center text-white/45">
        © {new Date().getFullYear()} {brand.legalName}. {brand.location.locality}, {brand.location.region}.
      </p>
    </footer>
  );
}