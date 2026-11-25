"use client";

import { useEffect, useState } from "react";
import { ProductLeadForm } from "@/components/product-lead-form";
import { readPreferredStyle } from "@/components/style-explore-button";
import { productAdsContent } from "@/lib/product-ads-content";

export function EnquiryFormSection() {
  const [preferredStyle, setPreferredStyle] = useState("");
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    setPreferredStyle(readPreferredStyle());
    const onStyle = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail ?? readPreferredStyle();
      setPreferredStyle(detail);
      setFormKey((k) => k + 1);
    };
    window.addEventListener("revgenpro:style", onStyle);
    return () => window.removeEventListener("revgenpro:style", onStyle);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#121833]/90 p-6 shadow-[0_28px_80px_rgba(236,0,140,0.18)] sm:p-8">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#EC008C]/25 blur-3xl"
      />
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#FF4DB8]">
        {productAdsContent.enquiry.label}
      </p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
        {productAdsContent.enquiry.title}
      </h2>
      <p className="mt-2 text-sm text-white/70">{productAdsContent.enquiry.subtitle}</p>
      <div className="relative mt-6">
        <ProductLeadForm key={formKey} preferredStyle={preferredStyle} />
      </div>
    </div>
  );
}
