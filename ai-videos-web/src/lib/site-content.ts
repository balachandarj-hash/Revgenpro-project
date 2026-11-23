export const siteContent = {
  price: "₹1,499",
  priceUnit: "/ Video",
  whatsappPrefill: "Hi RevGenPro, I want an AI video for ₹1,499.",
  seo: {
    title: "AI Videos from ₹1,499 | RevGenPro Solutions",
    description:
      "From hilarious cartoon animations and manga-inspired storytelling to cinematic advertisements, product promotions, realistic AI presenters, and creative social media videos — we bring your ideas to life using AI. Starting at ₹1,499 per video.",
  },
  hero: {
    hook: "Still Promoting Your Business With Boring Videos?",
    headline: "Turn Any Idea Into an Attention-Grabbing AI Video!",
    description:
      "From hilarious cartoon animations and manga-inspired storytelling to cinematic advertisements, product promotions, realistic AI presenters, and creative social media videos — we bring your ideas to life using AI.",
    priceLine: "AI Videos Starting at Just ₹1,499 / Video",
    primaryCta: "Create My AI Video",
    secondaryCta: "Watch Video Samples",
    image: "/ai-videos/hero.jpg",
    imageAlt:
      "Creator in a dark studio watching floating AI video screens in purple and blue light",
  },
  styles: [
    {
      id: "love",
      emoji: "❤️",
      title: "AI Love Story Series",
      description:
        "Romantic films for couples, proposals, and emotional love stories.",
      poster: "/ai-videos/love.jpg",
      imageAlt: "Illustrated couple in a sunlit room from a romantic love story",
    },
    {
      id: "kids",
      emoji: "🧸",
      title: "AI Cartoon Stories for Kids",
      description: "Cute, wholesome cartoon stories made for children.",
      poster: "/ai-videos/kids.jpg",
      imageAlt: "Two cute cartoon children whispering on a park bench",
    },
    {
      id: "village",
      emoji: "🏡",
      title: "AI Village Stories",
      description: "Indian village cartoons and countryside storytelling.",
      poster: "/ai-videos/village.jpg",
      imageAlt: "Original cartoon village kids in a rustic kitchen",
    },
    {
      id: "comedy",
      emoji: "😂",
      title: "AI Comedy Stories",
      description:
        "Funny characters, product mascots, and short comedy films.",
      poster: "/ai-videos/comedy-cast.jpg",
      imageAlt:
        "Vegetable characters acting out a comedy scene in a living room",
    },
    {
      id: "horror",
      emoji: "👻",
      title: "AI Horror Stories",
      description: "Atmospheric scare stories and ghostly short films.",
      poster: "/ai-videos/horror.jpg",
      imageAlt: "A misty haunted hallway with a ghostly figure",
    },
    {
      id: "myth",
      emoji: "🕉️",
      title: "AI Mythological Stories",
      description:
        "Epic gods, warriors, and temple legends told as short films.",
      poster: "/ai-videos/myth.jpg",
      imageAlt:
        "A glowing warrior in golden armor in an ancient temple courtyard",
    },
    {
      id: "manga",
      emoji: "⚡",
      title: "AI Manga / Anime Stories",
      description:
        "Japanese manga energy, expressive characters, and anime-style stories.",
      poster: "/ai-videos/manga-story.jpg",
      imageAlt: "Anime character with windblown hair against magenta lightning",
    },
    {
      id: "brand",
      emoji: "✨",
      title: "AI Brand Storytelling",
      description:
        "Product and business stories that make a brand feel cinematic.",
      poster: "/ai-videos/brand.jpg",
      imageAlt: "A glowing boutique storefront at dusk for a brand story",
    },
  ],
  portfolio: [
    {
      id: "cartoon-animal",
      title: "Cartoon Animal Story",
      src: "/videos/creative/cartoon-animal.mp4",
      poster: "/videos/creative/cartoon-animal-poster.jpg",
      duration: "8s demo",
    },
    {
      id: "office-love",
      title: "Office Love Story",
      src: "/videos/creative/office-love.mp4",
      poster: "/videos/creative/office-love-poster.jpg",
      duration: "8s demo",
    },
    {
      id: "cartoon-kids",
      title: "Cartoon Kids Story",
      src: "/videos/creative/cartoon-kids.mp4",
      poster: "/videos/creative/cartoon-kids-poster.jpg",
      duration: "8s demo",
    },
    {
      id: "product-story",
      title: "Product Character Story",
      src: "/videos/creative/product-story.mp4",
      poster: "/videos/creative/product-story-poster.jpg",
      duration: "8s demo",
    },
    {
      id: "indian-cartoon",
      title: "Indian Cartoon Story",
      src: "/videos/creative/indian-cartoon.mp4",
      poster: "/videos/creative/indian-cartoon-poster.jpg",
      duration: "8s demo",
    },
  ],
  steps: [
    { title: "Share Your Idea", body: "Tell us what type of video you want." },
    {
      title: "Choose Your Style",
      body: "Pick love story, kids cartoon, village, comedy, horror, mythology, manga, or brand storytelling.",
    },
    {
      title: "AI Video Creation",
      body: "Our creative team transforms your idea into an engaging AI video.",
    },
    {
      title: "Receive Your Video",
      body: "Get your completed video ready for your intended platform.",
    },
  ],
  faqs: [
    {
      question: "What types of AI videos do you create?",
      answer:
        "Love stories, cartoon stories for kids, village stories, comedy, horror, mythological stories, manga and anime, and brand storytelling.",
    },
    {
      question: "How much does one AI video cost?",
      answer: "₹1,499 per video.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Fill the form on this page. Submit opens WhatsApp with your name, number, video type, and idea.",
    },
  ],
} as const;

export const heroAccentIds = ["love", "kids", "horror"] as const;

export type VideoStyle = (typeof siteContent.styles)[number];