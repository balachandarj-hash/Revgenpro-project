"use client";

import { useId, useState } from "react";
import { productAdsContent } from "@/lib/product-ads-content";
import type { LeadFieldErrors } from "@/lib/lead";
import { isValidIndianMobile } from "@/lib/phone";

type FormStatus = "idle" | "submitting" | "success" | "error";

const fieldClass =
  "mt-1.5 w-full rounded-xl border border-white/15 bg-[#0a0a0c]/70 px-4 py-3 text-white outline-none ring-[#7C3AED] placeholder:text-white/35 focus:ring-2";
const errorFieldClass =
  "mt-1.5 w-full rounded-xl border border-[#F87171]/60 bg-[#0a0a0c]/70 px-4 py-3 text-white outline-none ring-[#F87171] placeholder:text-white/35 focus:ring-2";

export function ProductLeadForm({ preferredStyle = "" }: { preferredStyle?: string }) {
  const formId = useId();
  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDetails, setProductDetails] = useState("");
  const [stylePreference, setStylePreference] = useState(preferredStyle);
  const [errors, setErrors] = useState<LeadFieldErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState<string | null>(null);
  const [handoffUrl, setHandoffUrl] = useState<string | null>(null);

  function validateClient(): LeadFieldErrors {
    const next: LeadFieldErrors = {};
    if (!fullName.trim()) next.fullName = "Full name is required.";
    if (!businessName.trim()) next.businessName = "Business name is required.";
    if (!whatsapp.trim()) {
      next.whatsapp = "WhatsApp number is required.";
    } else if (!isValidIndianMobile(whatsapp)) {
      next.whatsapp = "Enter a valid 10-digit Indian mobile number (starts with 6–9).";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = "Enter a valid email address, or leave this field blank.";
    }
    if (!productCategory) next.productCategory = "Select a product category.";
    return next;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setServerMessage(null);

    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      setStatus("idle");
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: fullName.trim(),
          businessName: businessName.trim(),
          whatsapp: whatsapp.trim(),
          email: email.trim() || undefined,
          productCategory,
          productDetails: productDetails.trim() || undefined,
          preferredStyle: stylePreference.trim() || undefined,
        }),
      });

      const data = (await res.json()) as {
        ok?: boolean;
        message?: string;
        errors?: LeadFieldErrors;
        handoffUrl?: string;
      };

      if (!res.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setServerMessage(data.message ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setHandoffUrl(data.handoffUrl ?? null);
      setServerMessage(data.message ?? "Enquiry received.");
      setStatus("success");

      if (data.handoffUrl) {
        window.open(data.handoffUrl, "_blank", "noopener,noreferrer");
      }
    } catch {
      setServerMessage("Network error. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-2xl border border-[#34D399]/35 bg-[#052e16]/40 p-6 text-center"
        role="status"
        aria-live="polite"
      >
        <p className="text-lg font-semibold text-[#6EE7B7]">Enquiry submitted</p>
        <p className="mt-2 text-sm text-white/75">
          {serverMessage ??
            "Your details were validated and sent for follow-up. Continue on WhatsApp if a chat window did not open."}
        </p>
        {handoffUrl ? (
          <a
            href={handoffUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#25D366] px-5 text-sm font-semibold text-[#052e16] transition hover:brightness-110"
          >
            Open WhatsApp
          </a>
        ) : null}
        <button
          type="button"
          className="mt-3 block w-full text-sm text-white/60 underline-offset-2 hover:underline"
          onClick={() => {
            setStatus("idle");
            setServerMessage(null);
            setHandoffUrl(null);
          }}
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <label className="block text-sm" htmlFor={`${formId}-fullName`}>
        <span className="font-medium text-white/90">Full Name *</span>
        <input
          id={`${formId}-fullName`}
          required
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
          }}
          className={errors.fullName ? errorFieldClass : fieldClass}
          placeholder="e.g. Priya Sharma"
          autoComplete="name"
          aria-invalid={errors.fullName ? true : undefined}
          aria-describedby={errors.fullName ? `${formId}-fullName-error` : undefined}
        />
        {errors.fullName ? (
          <p id={`${formId}-fullName-error`} className="mt-1.5 text-xs text-[#FCA5A5]" role="alert">
            {errors.fullName}
          </p>
        ) : null}
      </label>

      <label className="block text-sm" htmlFor={`${formId}-business`}>
        <span className="font-medium text-white/90">Business Name *</span>
        <input
          id={`${formId}-business`}
          required
          value={businessName}
          onChange={(e) => {
            setBusinessName(e.target.value);
            if (errors.businessName) setErrors((prev) => ({ ...prev, businessName: undefined }));
          }}
          className={errors.businessName ? errorFieldClass : fieldClass}
          placeholder="e.g. Glow Botanics"
          autoComplete="organization"
          aria-invalid={errors.businessName ? true : undefined}
          aria-describedby={errors.businessName ? `${formId}-business-error` : undefined}
        />
        {errors.businessName ? (
          <p id={`${formId}-business-error`} className="mt-1.5 text-xs text-[#FCA5A5]" role="alert">
            {errors.businessName}
          </p>
        ) : null}
      </label>

      <label className="block text-sm" htmlFor={`${formId}-whatsapp`}>
        <span className="font-medium text-white/90">WhatsApp Number *</span>
        <input
          id={`${formId}-whatsapp`}
          required
          type="tel"
          inputMode="numeric"
          value={whatsapp}
          onChange={(e) => {
            setWhatsapp(e.target.value);
            if (errors.whatsapp) setErrors((prev) => ({ ...prev, whatsapp: undefined }));
          }}
          onBlur={() => {
            if (whatsapp && !isValidIndianMobile(whatsapp)) {
              setErrors((prev) => ({
                ...prev,
                whatsapp: "Enter a valid 10-digit Indian mobile number (starts with 6–9).",
              }));
            }
          }}
          className={errors.whatsapp ? errorFieldClass : fieldClass}
          placeholder="e.g. 98765 43210"
          autoComplete="tel"
          aria-invalid={errors.whatsapp ? true : undefined}
          aria-describedby={errors.whatsapp ? `${formId}-whatsapp-error` : undefined}
        />
        {errors.whatsapp ? (
          <p id={`${formId}-whatsapp-error`} className="mt-1.5 text-xs text-[#FCA5A5]" role="alert">
            {errors.whatsapp}
          </p>
        ) : null}
      </label>

      <label className="block text-sm" htmlFor={`${formId}-email`}>
        <span className="font-medium text-white/90">
          Email <span className="text-white/45">(optional)</span>
        </span>
        <input
          id={`${formId}-email`}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
          }}
          className={errors.email ? errorFieldClass : fieldClass}
          placeholder="you@brand.com"
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? `${formId}-email-error` : undefined}
        />
        {errors.email ? (
          <p id={`${formId}-email-error`} className="mt-1.5 text-xs text-[#FCA5A5]" role="alert">
            {errors.email}
          </p>
        ) : null}
      </label>

      <label className="block text-sm" htmlFor={`${formId}-category`}>
        <span className="font-medium text-white/90">Product Category *</span>
        <select
          id={`${formId}-category`}
          required
          value={productCategory}
          onChange={(e) => {
            setProductCategory(e.target.value);
            if (errors.productCategory) {
              setErrors((prev) => ({ ...prev, productCategory: undefined }));
            }
          }}
          className={errors.productCategory ? errorFieldClass : fieldClass}
          aria-invalid={errors.productCategory ? true : undefined}
          aria-describedby={errors.productCategory ? `${formId}-category-error` : undefined}
        >
          <option value="" disabled>
            Select a category
          </option>
          {productAdsContent.enquiry.categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        {errors.productCategory ? (
          <p id={`${formId}-category-error`} className="mt-1.5 text-xs text-[#FCA5A5]" role="alert">
            {errors.productCategory}
          </p>
        ) : null}
      </label>

      <input type="hidden" name="preferredStyle" value={stylePreference} readOnly />
      {stylePreference ? (
        <p className="rounded-xl border border-[#7C3AED]/35 bg-[#7C3AED]/10 px-3 py-2 text-xs text-[#DDD6FE]">
          Preferred style: <span className="font-semibold">{stylePreference}</span>
          <button
            type="button"
            className="ml-2 underline underline-offset-2 hover:text-white"
            onClick={() => setStylePreference("")}
          >
            Clear
          </button>
        </p>
      ) : null}

      <label className="block text-sm" htmlFor={`${formId}-details`}>
        <span className="font-medium text-white/90">
          Tell Us About Your Product <span className="text-white/45">(optional)</span>
        </span>
        <textarea
          id={`${formId}-details`}
          value={productDetails}
          onChange={(e) => setProductDetails(e.target.value)}
          rows={3}
          className={`${fieldClass} resize-y`}
          placeholder="Product name, what makes it special, and any style notes…"
        />
      </label>

      {status === "error" && serverMessage ? (
        <p className="rounded-xl border border-[#F87171]/40 bg-[#450a0a]/40 px-3 py-2 text-sm text-[#FCA5A5]" role="alert">
          {serverMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#EC008C] text-sm font-semibold text-white shadow-[0_12px_28px_rgba(236,0,140,0.35)] transition hover:brightness-110 disabled:cursor-wait disabled:opacity-70"
      >
        {status === "submitting" ? "Submitting…" : productAdsContent.enquiry.formSubmitCta}
      </button>

      <p className="text-xs leading-relaxed text-white/50">{productAdsContent.enquiry.consent}</p>
    </form>
  );
}
