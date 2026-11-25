export const brand = {
  legalName: "RevGenPro Solutions Pvt Ltd",
  name: "RevGenPro",
  description:
    "RevGenPro Solutions is a digital branding and digital marketing agency in Chennai, Tamil Nadu.",
  location: {
    locality: "Madipakkam, Chennai",
    region: "Tamil Nadu",
    country: "India",
    postalCode: "600091",
    fullAddress:
      "No.5, MSP Complex, F-3, Medavakkam Main Rd, opposite Kumaran Theatre, Vigneshwar Nagar, Balaji Nagar, Madipakkam, Chennai, Tamil Nadu 600091",
  },
  logoSrc: "/brand/revgenpro-logo.png",
  logoOnDarkSrc: "/brand/revgenpro-logo-on-dark.png",
  /** Round quadrant mark — used for favicon / browser tab */
  logoMarkSrc: "/brand/icon-512x512.png",
  faviconSrc: "/favicon.ico",
  faviconPngSrc: "/brand/favicon-32x32.png",
  contact: {
    email: "info@revgenprosolutions.com",
    phoneDisplay: "+91 70104 42618",
    phoneHref: "tel:+917010442618",
  },
  /** Change phoneDigits only here — all WhatsApp links use this value. */
  whatsapp: {
    /** Country code + number, no + or spaces (e.g. 919876543210). */
    phoneDigits: "917010442618",
  },
  social: {
    instagram: "https://www.instagram.com/revgenpro_crm",
    facebook: "https://www.facebook.com/revgenpro/",
  },
} as const;

export function whatsappUrl(text: string) {
  return `https://wa.me/${brand.whatsapp.phoneDigits}?text=${encodeURIComponent(text)}`;
}