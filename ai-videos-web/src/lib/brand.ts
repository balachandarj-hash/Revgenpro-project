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
  whatsapp: {
    phoneDigits: "917010442618",
    prefill: "Hello RevGenPro, I would like to talk about a project.",
  },
} as const;

export function whatsappUrl(text: string) {
  return `https://wa.me/${brand.whatsapp.phoneDigits}?text=${encodeURIComponent(text)}`;
}