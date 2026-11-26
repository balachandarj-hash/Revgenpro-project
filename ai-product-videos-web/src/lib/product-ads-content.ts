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
      { href: "#before-after", label: "Before & After" },
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
      "Turn product photos into videos that grab attention. Stunning AI promotional videos from ₹1,499.",
    ogImage: "/product-ads/luxury-product-scene.jpg",
    siteUrl: "https://ai-product-videos.apps.grok.bot/",
    path: "/",
  },

  hero: {
    eyebrow: "AI-Powered Product Videos",
    hook: "Still Promoting Your Products with Just Photos?",
    headline: "Your Product Deserves More Than a Photo.",
    description:
      "Transform ordinary product images into stunning AI promotional videos that capture attention and elevate your brand.",
    benefits: ["AI Product Videos", "No Video Shoot Needed"] as const,
    priceBadge: "Starting at",
    primaryCta: "Create My Product Video",
    playLabel: "Watch explainer",
    explainer: {
      title: "How AI Product Videos Work",
      openLabel: "Play explainer video",
      src: "/product-ads/explainer-16x9.mp4",
      poster: "/product-ads/explainer-poster.jpg",
      stageImage: "/product-ads/luxury-product-scene.jpg",
      posterAlt:
        "Luxury product showcase — perfume, skincare, electronics, and coffee",
    },
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
    title: "Explore Video Styles for Your Product",
    subtitle:
      "Cinematic looks for every category — tap a card to preview the feel.",
    items: [
      {
        title: "Skincare",
        description: "Glow, texture, and soft studio light.",
        image: "/product-ads/style-card-skincare.jpg",
      },
      {
        title: "Perfume",
        description: "Elegant mist and premium presence.",
        image: "/product-ads/style-card-perfume.jpg",
      },
      {
        title: "Electronics",
        description: "Clean lifestyle detail for gadgets.",
        image: "/product-ads/style-card-electronics.jpg",
      },
      {
        title: "Face Wash",
        description: "Fresh, splashy, natural energy.",
        image: "/product-ads/style-card-facewash.jpg",
      },
    ],
  },

  beforeAfter: {
    id: "before-after",
    label: "Before & After",
    title: "One Product Photo. A Whole New Experience.",
    subtitle:
      "See how a plain product shot becomes a cinematic AI promotional video.",
    beforeLabel: "Before",
    afterLabel: "After",
    beforeImage: "/product-ads/perfume.jpg",
    afterImage: "/product-ads/hero-perfume-spray.jpg",
    cta: "Transform My Product",
  },

  samples: {
    id: "samples",
    label: "Sample Films",
    title: "Don't Just Imagine It. Watch It.",
    subtitle:
      "Short AI product films — swipe on phone, play any clip on desktop.",
    swipeHint: "Swipe sideways to browse every sample.",
    videos: [
      {
        id: "skincare",
        title: "Skincare",
        duration: "0:06",
        src: "/product-ads/skincare.mp4",
        poster: "/product-ads/skincare-poster.jpg",
      },
      {
        id: "perfume",
        title: "Luxury Perfume",
        duration: "0:06",
        src: "/product-ads/perfume.mp4",
        poster: "/product-ads/perfume-poster.jpg",
      },
      {
        id: "electronics",
        title: "Electronics",
        duration: "0:06",
        src: "/product-ads/gadget.mp4",
        poster: "/product-ads/gadget-poster.jpg",
      },
      {
        id: "offer",
        title: "Offer Campaign",
        duration: "0:06",
        src: "/product-ads/offer.mp4",
        poster: "/product-ads/offer-poster.jpg",
      },
    ],
  },

  process: {
    id: "how-it-works",
    label: "How It Works",
    title: "Three Simple Steps",
    steps: [
      {
        title: "Share Your Product",
        body: "Send clear product photos and a short brief — category, brand tone, and must-show details.",
        icon: "share" as const,
      },
      {
        title: "We Create Your AI Video",
        body: "Our studio crafts a promotional product video matched to your product and style.",
        icon: "create" as const,
      },
      {
        title: "Review & Publish",
        body: "You receive your video ready for ads, Reels, WhatsApp, and product pages.",
        icon: "publish" as const,
      },
    ],
  },

  pricing: {
    id: "pricing",
    label: "Pricing",
    title: "Clear pricing. Premium results.",
    badge: "One-Time Payment",
    amount: "₹1,499",
    unit: "per video",
    note: "One AI promotional product video. No subscription. Scope confirmed after we review your photos.",
    includes: [
      "One AI promotional product video",
      "Style matched to your brand",
      "Ready for Reels, ads & WhatsApp",
      "Scope review before we create",
      "No monthly subscription",
    ] as const,
    cta: "Create My Product Video",
  },

  enquiry: {
    id: "enquiry",
    label: "Get started",
    title: "Let's Create Something Extraordinary",
    subtitle:
      "Share a few details. We’ll review your enquiry and follow up with next steps — no payment on this page.",
    formSubmitCta: "Get My Video",
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

  trust: {
    id: "trust",
    label: "Trusted by Growing Brands",
    title: "Clarity for buyers. Confidence for you.",
    testimonial: {
      quote:
        "RevGenPro turned our product photos into scroll-stopping videos. We posted the same week — and enquiries went up.",
      name: "Priya Sharma",
      role: "Founder, Glow Botanics",
    },
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
        "No. ₹1,499 is a one-time price per promotional product video unless you agree a different scope with our team.",
    },
  ],

  footer: {
    workLabel: "Work",
    workLine: "Product Selling & Promotional Videos.",
    contactLabel: "Contact",
    policiesLabel: "Policies",
    privacyLabel: "Privacy Policy.",
    whatsappLabel: "Chat with us",
  },
} as const;
