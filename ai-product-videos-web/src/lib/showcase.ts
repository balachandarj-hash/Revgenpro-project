/**
 * Hero product showcase slides.
 * Only `kind: "video"` entries use real looping MP4 assets that exist in /public.
 * `kind: "placeholder"` is for categories without a usage-demo asset yet.
 */
export type ShowcaseSlide =
  | {
      id: string;
      category: string;
      title: string;
      description: string;
      kind: "video";
      src: string;
      poster: string;
    }
  | {
      id: string;
      category: string;
      title: string;
      description: string;
      kind: "placeholder";
      poster: string;
      placeholderNote: string;
    };

export const showcaseSlides: readonly ShowcaseSlide[] = [
  {
    id: "perfume",
    category: "Perfume",
    title: "Fragrance mist showcase",
    description: "Luxury bottle in a studio setting — looping promotional film.",
    kind: "video",
    src: "/product-ads/perfume.mp4",
    poster: "/product-ads/perfume-poster.jpg",
  },
  {
    id: "skincare",
    category: "Skincare",
    title: "Cream & texture showcase",
    description: "Premium skincare jar with cinematic product motion.",
    kind: "video",
    src: "/product-ads/skincare.mp4",
    poster: "/product-ads/skincare-poster.jpg",
  },
  {
    id: "electronics",
    category: "Electronics",
    title: "Gadget detail showcase",
    description: "Smart device highlights with subtle camera movement.",
    kind: "video",
    src: "/product-ads/gadget.mp4",
    poster: "/product-ads/gadget-poster.jpg",
  },
  {
    id: "beverage",
    category: "Food & Beverage",
    title: "Beverage showcase",
    description: "Premium bottle still — ready for a steam/splash usage loop.",
    kind: "placeholder",
    poster: "/product-ads/lifestyle-bottle.png",
    placeholderNote:
      "Usage animation (steam / splash) not available yet — slot prepared for GIF or MP4.",
  },
] as const;

/** Dwell time per slide before auto-advancing (ms). */
export const SHOWCASE_DWELL_MS = 7000;
/** Crossfade duration (ms). */
export const SHOWCASE_FADE_MS = 700;
