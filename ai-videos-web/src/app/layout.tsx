import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { siteContent } from "@/lib/site-content";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  applicationName: "AI Videos",
  themeColor: "#090D24",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${jakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-[#090D24] font-[family-name:var(--font-jakarta)] text-white">
        {children}
      </body>
    </html>
  );
}