export const productAdsContent = {
  price: "₹1,499",
  priceUnit: "",
  packageName: "AI Product Video",
  whatsappPrefill:
    "Hi RevGenPro, I want to create an AI product video for ₹1,499. Please share next steps.",

  header: {
    cta: "Get My AI Video",
    whatsappCta: "WhatsApp",
    nav: [
      { href: "#top", label: "Home" },
      { href: "#video-styles", label: "Video Styles" },
      { href: "#how-it-works", label: "How It Works" },
      { href: "#pricing", label: "Pricing" },
    ] as const,
  },
  stickyBar: {
    enquiryCta: "Create My Product Video",
  },

  seo: {
    title: "AI Product Video Studio ₹1,499 | RevGenPro Solutions",
    description:
      "Transform product images into stunning AI promotional videos. AI Product Videos starting at ₹1,499 — RevGenPro Solutions.",
    ogTitle: "AI Product Video Studio — ₹1,499 | RevGenPro",
    ogDescription:
      "Your product deserves more than a photo. Stunning AI promotional videos from ₹1,499.",
    ogImage: "/product-ads/luxury-product-scene.jpg",
    siteUrl: "https://ai-product-videos.apps.grok.bot/",
    path: "/",
  },

  hero: {
    eyebrow: "AI Product Video Studio",
    headline: "Your Product Deserves More Than a Photo.",
    description:
      "Transform ordinary product images into stunning AI promotional videos that capture attention and elevate your brand.",
    priceBadge: "AI Product Videos Starting at",
    primaryCta: "Create My Product Video",
  },

  categories: [
    { id: "skincare", label: "Skincare & Cosmetics", icon: "cream" },
    { id: "perfume", label: "Perfume & Fragrance", icon: "perfume" },
    { id: "electronics", label: "Electronics & Gadgets", icon: "headphones" },
    { id: "food", label: "Food & Beverages", icon: "coffee" },
    { id: "fashion", label: "Fashion & Lifestyle", icon: "bag" },
  ] as const,

  styles: {
    id: "video-styles",
    label: "Video Styles",
    title: "Styles that sell your product",
    subtitle:
      "Pick a look that matches your brand — we craft each film around your product photos.",
    items: [
      {
        title: "Skincare",
        description: "Serum and cream films with glow, texture, and soft studio light.",
        image: "/product-ads/style-card-skincare.jpg",
      },
      {
        title: "Luxury Perfume",
        description: "Elegant bottle motion, spray mist, and premium fragrance presence.",
        image: "/product-ads/style-card-perfume.jpg",
      },
      {
        title: "Electronic Product",
        description: "Phones, watches, and gadgets framed with clean lifestyle detail.",
        image: "/product-ads/style-card-electronics.jpg",
      },
      {
        title: "Face Wash Product",
        description: "Fresh, splashy cleansers that feel clean, natural, and active.",
        image: "/product-ads/style-card-facewash.jpg",
      },
    ],
  },

  samples: {
    id: "samples",
    label: "Samples",
    title: "Watch sample films",
    subtitle:
      "Short clips of AI product advertisements. Swipe on a phone, or play any film on desktop.",
    swipeHint: "Swipe sideways to browse every sample.",
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
        id: "electronics",
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

  process: {
    id: "how-it-works",
    label: "How It Works",
    title: "Three simple steps",
    steps: [
      {
        title: "Share Your Product",
        body: "Send clear product photos and a short brief — category, brand tone, and must-show details.",
      },
      {
        title: "We Create Your AI Video",
        body: "Our studio crafts a promotional product video matched to your product and style.",
      },
      {
        title: "Review & Publish",
        body: "You receive your video ready for ads, Reels, WhatsApp, and product pages.",
      },
    ],
  },

  pricing: {
    id: "pricing",
    label: "Pricing",
    title: "Clear pricing. Premium results.",
    amount: "₹1,499",
    unit: "per video",
    note: "One AI promotional product video. No subscription. Scope confirmed after we review your photos.",
    cta: "Create My Product Video",
  },

  enquiry: {
    id: "enquiry",
    label: "Get started",
    title: "Tell Us About Your Product",
    subtitle:
      "Share a few details. We’ll review your enquiry and follow up with next steps — no payment on this page.",
    formSubmitCta: "Create My Product Video",
    consent:
      "By submitting, you agree to be contacted by RevGenPro Solutions about your AI product video enquiry via WhatsApp or email.",
    categories: [
      "Skincare & Cosmetics",
      "Perfume & Fragrance",
      "Electronics & Gadgets",
      "Fashion & Lifestyle",
      "Food & Beverages",
      "Other",
    ] as const,
  },

  faqs: [
    {
      question: "What do I get for ₹1,499?",
      answer:
        "One AI promotional product video focused on your product. Exact creative direction is confirmed after we review your photos and brief.",
    },
    {
      question: "What do I need to provide?",
      answer:
        "Clear product photos, your business name, and a short description of the product and look you want.",
    },
    {
      question: "Which products work best?",
      answer:
        "Physical products that photograph well — skincare, perfume, electronics, fashion, cosmetics, and similar retail items.",
    },
    {
      question: "How does ordering work?",
      answer:
        "Submit the enquiry form or chat on WhatsApp. Our team reviews your details and contacts you with next steps. No payment is collected on this website.",
    },
    {
      question: "Is ₹1,499 a subscription?",
      answer:
        "No. ₹1,499 is the price per promotional product video unless you agree a different scope with our team.",
    },
  ],

  footer: {
    serviceLine: "AI Product Video Studio",
  },
} as const;
