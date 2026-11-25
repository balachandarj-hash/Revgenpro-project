import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { brand } from "@/lib/brand";
import { productAdsContent } from "@/lib/product-ads-content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const { seo } = productAdsContent;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: brand.name,
  icons: {
    icon: [
      { url: brand.faviconSrc, sizes: "any" },
      { url: brand.faviconPngSrc, sizes: "32x32", type: "image/png" },
      { url: brand.logoMarkSrc, sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "192x192", type: "image/png" }],
    shortcut: brand.faviconSrc,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: seo.siteUrl,
    siteName: brand.legalName,
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: [
      {
        url: seo.ogImage,
        width: 1200,
        height: 630,
        alt: "AI promotional product video samples",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: [seo.ogImage],
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#0b1024] pb-[4.5rem] font-[family-name:var(--font-jakarta)] text-white md:pb-0">
        {children}
      </body>
    </html>
  );
}
