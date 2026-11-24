/** Central route paths for RevGenPro marketing site. */
export const routes = {
  home: "/",
  productAdvertisements: "/product-advertisements",
  privacy: "/privacy",
} as const;

export type SiteRoute = (typeof routes)[keyof typeof routes];

export const siteRoutes: readonly SiteRoute[] = [
  routes.home,
  routes.productAdvertisements,
  routes.privacy,
] as const;

export function absoluteUrl(path: SiteRoute, siteUrl: string): string {
  const base = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  return path === "/" ? `${base}/` : `${base}${path}`;
}