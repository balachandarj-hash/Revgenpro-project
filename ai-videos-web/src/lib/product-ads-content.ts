export const productAdsContent = {
  price: "₹1,499",
  priceUnit: " per Video",
  packageName: "AI Product Advertisement Videos",
  whatsappPrefill:
    "Hi RevGenPro, I'm interested in AI product advertisement videos (₹1,499 per video). Please share next steps.",

  header: {
    cta: "Create My Ad Video",
    nav: [
      { href: "#services", label: "Services" },
      { href: "#samples", label: "Samples" },
      { href: "#enquiry", label: "Enquire" },
    ] as const,
  },
  stickyBar: {
    enquiryCta: "Create My Ad Video",
  },

  seo: {
    title: "Product Selling & Promotional Videos | RevGenPro Solutions",
    description:
      "Turn product photos into cinematic AI video ads. Showcase, features, creative commercials, and offer campaigns from RevGenPro — professional AI video creation from ₹1,499 per video.",
    ogTitle: "AI Product Video Ads — from ₹1,499 | RevGenPro",
    ogDescription:
      "Skincare, perfume, fashion, electronics, and seasonal offer campaigns as stunning 9:16 AI product videos. Hosur, Tamil Nadu — serving businesses across India.",
    ogImage: "/product-ads/skincare.jpg",
    path: "/product-advertisements",
  },

  hero: {
    eyebrow: "Still Using Static Photos to Promote Your Products?",
    headlinePrefix: "Your Products Deserve",
    headlineHighlight: "More Than Just Ordinary Photos!",
    description:
      "Turn your products into stunning AI-powered video ads with cinematic visuals and storytelling that make customers want to know more.",
    priceLabel: "Professional AI Video Creation Starting at Just",
    primaryCta: "Create My Ad Video",
    secondaryCta: "Watch Video Samples",
    heroImage: "/product-ads/skincare.jpg",
    heroImageAlt: "Skincare product in cinematic purple studio lighting for an AI video advertisement",
  },

  categories: [
    {
      id: "skincare",
      label: "Skincare showcase",
      image: "/product-ads/skincare.jpg",
      imageAlt: "Skincare bottles in soft cinematic lighting",
    },
    {
      id: "perfume",
      label: "Luxury perfume",
      image: "/product-ads/perfume.jpg",
      imageAlt: "Luxury perfume bottle with golden highlights",
    },
    {
      id: "fashion",
      label: "Fashion lifestyle",
      image: "/product-ads/fashion.jpg",
      imageAlt: "Fashion lifestyle product in a styled shoot",
    },
    {
      id: "gadget",
      label: "Electronics",
      image: "/product-ads/gadget.jpg",
      imageAlt: "Consumer electronics product highlight",
    },
    {
      id: "offer",
      label: "Offer campaign",
      image: "/product-ads/offer.jpg",
      imageAlt: "Promotional offer campaign visual",
    },
  ] as const,

  services: {
    id: "services",
    label: "Services we offer",
    title: "Services we offer",
    items: [
      {
        title: "AI Product Showcase Videos",
        description:
          "Cinematic lighting, professional backgrounds, attractive camera movements, and premium product displays.",
      },
      {
        title: "Product Features & Benefits Videos",
        description:
          "Features, USPs, benefits, and clear product demonstrations that help customers decide.",
      },
      {
        title: "Creative Product Advertisement Videos",
        description:
          "Transform product images into commercial ads with AI scenes, models, and storytelling.",
      },
      {
        title: "Creative Promotional & Offer Videos",
        description:
          "Discounts, seasonal campaigns, limited-time deals, and strong calls to action.",
      },
    ],
  },

  showcase: {
    id: "showcase",
    title: "Have a product business? Let's create an advertisement that stands out!",
  },

  samples: {
    id: "samples",
    label: "Sample videos",
    title: "Sample videos",
    subtitle:
      "Short 9:16 sample clips of AI product advertisements. Swipe on a phone, or play any film on desktop.",
    swipeHint: "Swipe sideways for every sample.",
    videos: [
      {
        id: "skincare",
        title: "Skincare showcase",
        src: "/product-ads/skincare.mp4",
        poster: "/product-ads/skincare-poster.jpg",
      },
      {
        id: "perfume",
        title: "Luxury perfume",
        src: "/product-ads/perfume.mp4",
        poster: "/product-ads/perfume-poster.jpg",
      },
      {
        id: "gadget",
        title: "Electronics",
        src: "/product-ads/gadget.mp4",
        poster: "/product-ads/gadget-poster.jpg",
      },
      {
        id: "offer",
        title: "Offer campaign",
        src: "/product-ads/offer.mp4",
        poster: "/product-ads/offer-poster.jpg",
      },
      {
        id: "fashion",
        title: "Fashion lifestyle",
        src: "/product-ads/fashion.mp4",
        poster: "/product-ads/fashion-poster.jpg",
      },
    ],
  },

  cta: {
    id: "cta",
    title: "Have a product business? Let's create an advertisement that stands out!",
    body: "Tell us the product and the kind of advertisement you need. Our team will contact you with the next step.",
    bullets: [
      "Cinematic product showcase videos.",
      "Feature and benefit films.",
      "Creative advertisements from product images.",
      "Offer and seasonal campaign videos.",
    ],
    whatsappLabel: "Prefer WhatsApp?",
    whatsappCta: "Open a chat",
  },

  enquiry: {
    id: "enquiry",
    label: "Enquiry",
    title: "Tell us about your product",
    subtitle:
      "Share your product and the kind of ad you need. Submit opens WhatsApp with your details — our team replies with next steps.",
    formSubmitCta: "Create My Ad Video",
    footnote:
      "We don't store form data on this website. If WhatsApp didn't open, nothing was sent — try again or email us directly.",
    messagePlaceholder:
      "Product name, category, and the style of advertisement you want (showcase, features, offer campaign, etc.)",
  },

  contact: {
    id: "contact",
    label: "Contact",
    title: "Contact",
  },
} as const;

export type ProductCategory = (typeof productAdsContent.categories)[number];
export type ProductSampleVideo = (typeof productAdsContent.samples.videos)[number];