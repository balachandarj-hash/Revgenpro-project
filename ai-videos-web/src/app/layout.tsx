import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { brand } from "@/lib/brand";
import { siteContent } from "@/lib/site-content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const { seo } = siteContent;

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  applicationName: brand.name,
  icons: {
    icon: [
      { url: "/brand/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/brand/favicon-32x32.png",
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
        url: siteContent.hero.image,
        width: 1200,
        height: 630,
        alt: siteContent.hero.imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.ogTitle,
    description: seo.ogDescription,
    images: [siteContent.hero.image],
  },
};

export const viewport: Viewport = {
  themeColor: "#090D24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#090D24] pb-[4.5rem] font-[family-name:var(--font-jakarta)] text-white md:pb-0">
        {children}
      </body>
    </html>
  );
}