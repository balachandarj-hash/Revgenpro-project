export const brand = {
  legalName: "RevGenPro Solutions Pvt Ltd",
  name: "RevGenPro",
  description:
    "RevGenPro Solutions is a digital branding and digital marketing agency in Hosur, Tamil Nadu.",
  location: { locality: "Hosur", region: "Tamil Nadu", country: "India" },
  logoSrc: "/brand/revgenpro-logo.png",
  logoOnDarkSrc: "/brand/revgenpro-logo-on-dark.png",
  contact: {
    email: "Info@revgenprosolutions.com",
    phoneDisplay: "+91 70104 42618",
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