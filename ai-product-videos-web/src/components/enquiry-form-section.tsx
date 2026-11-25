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
    <div className="relative overflow-hidden rounded-[1.75rem] border border-[#E8DFD2] bg-[#FFFCF7] p-6 shadow-[0_20px_50px_rgba(58,42,20,0.08)] sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8A735C]">
        {productAdsContent.enquiry.label}
      </p>
      <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-[#1A1410] sm:text-4xl">
        {productAdsContent.enquiry.title}
      </h2>
      <p className="mt-2 text-sm text-[#5C4A3A]">{productAdsContent.enquiry.subtitle}</p>
      <div className="relative mt-6">
        <ProductLeadForm key={formKey} preferredStyle={preferredStyle} />
      </div>
    </div>
  );
}
