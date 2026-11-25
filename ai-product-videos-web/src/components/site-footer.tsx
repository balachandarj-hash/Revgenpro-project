import Image from "next/image";
import { brand, whatsappUrl } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z" />
    </svg>
  );
}

function ClapperIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M18 4.54 16.46 3 13.24 6.22 14.78 7.76 18 4.54zM11.76 7.7 8.54 4.48 7 6.02l3.22 3.22L11.76 7.7zM20 10H4v10h16V10zm-2 8H6v-6h12v6z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0" fill="currentColor" aria-hidden>
      <path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden>
      <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.4 21 3 13.6 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#25D366" aria-hidden>
      <path d="M17.47 14.38c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.28-.72.9-.88 1.08-.16.18-.33.2-.6.07-.28-.14-1.17-.43-2.23-1.37-.82-.73-1.38-1.64-1.54-1.91-.16-.28-.02-.43.12-.57.13-.12.28-.33.42-.5.14-.16.18-.28.28-.47.09-.18.05-.35-.02-.49-.07-.14-.63-1.51-.86-2.07-.23-.55-.46-.47-.63-.48h-.54c-.18 0-.48.07-.73.35-.25.28-.96.94-.96 2.29s.98 2.65 1.12 2.83c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.57.65.2 1.25.18 1.72.11.53-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.11-.25-.18-.53-.32z" />
      <path d="M12.04 2C6.5 2 2 6.48 2 12c0 1.88.52 3.64 1.43 5.15L2 22l4.98-1.3A9.96 9.96 0 0 0 12.04 22C17.56 22 22 17.52 22 12S17.56 2 12.04 2zm0 18.1c-1.7 0-3.28-.5-4.61-1.36l-.33-.2-2.96.78.79-2.88-.22-.35A8.08 8.08 0 0 1 3.94 12c0-4.46 3.64-8.08 8.1-8.08 4.46 0 8.08 3.62 8.08 8.08 0 4.46-3.62 8.1-8.08 8.1z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="#1877F2" aria-hidden>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.68 9.18 8.49 9.93v-7.02H7.9v-2.91h2.45V9.78c0-2.42 1.44-3.76 3.65-3.76 1.06 0 2.16.19 2.16.19v2.38h-1.22c-1.2 0-1.57.74-1.57 1.5v1.8h2.68l-.43 2.91h-2.25V22c4.81-.75 8.49-4.91 8.49-9.93z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
      <defs>
        <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#515bd4" />
        </linearGradient>
      </defs>
      <path
        fill="url(#ig)"
        d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
      />
    </svg>
  );
}

export function SiteFooter() {
  const { footer } = productAdsContent;
  const year = new Date().getFullYear();
  const wa = whatsappUrl(productAdsContent.whatsappPrefill);

  return (
    <footer className="relative z-10 border-t border-[#E8DFD2] bg-[#FBF7F0] px-4 py-12 text-[#1A1410] sm:px-6 md:px-10 md:py-14">
      <div className="mx-auto grid max-w-[1440px] gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* Brand + location */}
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={brand.logoSrc}
              alt={brand.name}
              width={168}
              height={42}
              className="h-9 w-auto sm:h-10"
            />
          </div>
          <div className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-[#2A1F16]">
            <span className="text-[#8A735C]">
              <PinIcon />
            </span>
            <p>{brand.location.fullAddress}</p>
          </div>
        </div>

        {/* Work */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#6B5544]">
            {footer.workLabel}
          </h2>
          <div className="mt-4 flex items-start gap-2 text-sm text-[#2A1F16]">
            <span className="text-[#8A735C]">
              <ClapperIcon />
            </span>
            <p>{footer.workLine}</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#6B5544]">
            {footer.contactLabel}
          </h2>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li>
              <a
                href={`mailto:${brand.contact.email}`}
                className="flex items-start gap-3 rounded-lg transition hover:bg-[#F0E4D2]/70"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8DFD2] text-[#1A1410]">
                  <MailIcon />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#6B5544]">
                    Email
                  </span>
                  <span className="font-medium text-[#1A1410] underline-offset-2 hover:underline">
                    {brand.contact.email}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={brand.contact.phoneHref}
                className="flex items-start gap-3 rounded-lg transition hover:bg-[#F0E4D2]/70"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E8DFD2] text-[#1A1410]">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#6B5544]">
                    Phone
                  </span>
                  <span className="font-medium text-[#1A1410] underline-offset-2 hover:underline">
                    {brand.contact.phoneDisplay}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 rounded-lg transition hover:bg-[#F0E4D2]/70"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center">
                  <WhatsAppIcon />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-[#6B5544]">
                    WhatsApp
                  </span>
                  <span className="font-medium text-[#1A1410] underline-offset-2 hover:underline">
                    {footer.whatsappLabel}
                  </span>
                </span>
              </a>
            </li>
            <li>
              <a
                href={brand.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open RevGenPro on Facebook"
                className="inline-flex items-center gap-3 rounded-lg py-0.5 transition hover:opacity-80"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <FacebookIcon />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C2185B]">
                  Facebook
                </span>
              </a>
            </li>
            <li>
              <a
                href={brand.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open RevGenPro on Instagram"
                className="inline-flex items-center gap-3 rounded-lg py-0.5 transition hover:opacity-80"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                  <InstagramIcon />
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#C2185B]">
                  Instagram
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-[#6B5544]">
            {footer.policiesLabel}
          </h2>
          <div className="mt-4 flex items-start gap-2 text-sm text-[#2A1F16]">
            <span className="text-[#8A735C]">
              <ShieldIcon />
            </span>
            <p>{footer.privacyLabel}</p>
          </div>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-[1440px] border-t border-[#E8DFD2] pt-6 text-center text-xs text-[#8A735C]">
        © {year} {brand.legalName}. All rights reserved.
      </p>
    </footer>
  );
}
