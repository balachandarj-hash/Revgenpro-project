"use client";

import { useState } from "react";
import { brand, whatsappUrl } from "@/lib/brand";
import { isValidIndianMobile, normalizeIndianMobile } from "@/lib/phone";
import { siteContent } from "@/lib/site-content";

type FormState = "idle" | "success";

export type LeadFormCopy = {
  packageName: string;
  price: string;
  whatsappPrefill: string;
  formSubmitCta: string;
  messagePlaceholder?: string;
};

const defaultCopy: LeadFormCopy = {
  packageName: siteContent.offer.packageName,
  price: siteContent.price,
  whatsappPrefill: siteContent.whatsappPrefill,
  formSubmitCta: siteContent.enquiry.formSubmitCta,
  messagePlaceholder: "Website, Google listing, social pages, AI promo video…",
};

export function LeadForm({ copy = defaultCopy }: { copy?: LeadFormCopy }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setPhoneError(null);

    const trimmedName = name.trim();
    if (!trimmedName) return;

    const mobile = normalizeIndianMobile(phone);
    if (!mobile) {
      setPhoneError("Enter a valid 10-digit Indian mobile number (starts with 6–9).");
      return;
    }

    const lines = [
      `Hi ${brand.name}, I want ${copy.packageName} (${copy.price}).`,
      `Name: ${trimmedName}`,
      `Mobile: +91 ${mobile}`,
      business.trim() ? `Business: ${business.trim()}` : null,
      message.trim() ? `Message: ${message.trim()}` : null,
    ].filter(Boolean);

    const url = whatsappUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div className="rounded-2xl border border-[#25D366]/40 bg-[#052e16]/30 p-6 text-center">
        <p className="text-lg font-semibold text-[#86EFAC]">Enquiry ready on WhatsApp</p>
        <p className="mt-2 text-sm text-white/75">
          We don&apos;t save form data on this website. Your details were sent in a new WhatsApp
          chat — our team will reply there. You can also message us anytime.
        </p>
        <a
          href={whatsappUrl(copy.whatsappPrefill)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#25D366] px-5 text-sm font-semibold text-[#052e16]"
        >
          Open WhatsApp again
        </a>
        <button
          type="button"
          className="mt-3 block w-full text-sm text-white/60 underline-offset-2 hover:underline"
          onClick={() => setFormState("idle")}
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <p className="text-sm text-white/65">
        No account or payment here — valid details open WhatsApp with your message prefilled.
      </p>
      <label className="block text-sm">
        <span className="font-medium text-white/90">Your name *</span>
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#090D24]/80 px-4 py-3 text-white outline-none ring-[#9333EA] placeholder:text-white/35 focus:ring-2"
          placeholder="e.g. Priya Sharma"
          autoComplete="name"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-white/90">Mobile number *</span>
        <input
          required
          type="tel"
          inputMode="numeric"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (phoneError) setPhoneError(null);
          }}
          onBlur={() => {
            if (phone && !isValidIndianMobile(phone)) {
              setPhoneError("Enter a valid 10-digit Indian mobile number (starts with 6–9).");
            }
          }}
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#090D24]/80 px-4 py-3 text-white outline-none ring-[#9333EA] placeholder:text-white/35 focus:ring-2"
          placeholder="e.g. 98765 43210"
          autoComplete="tel"
          aria-invalid={phoneError ? true : undefined}
          aria-describedby={phoneError ? "phone-error" : undefined}
        />
        {phoneError ? (
          <p id="phone-error" className="mt-1.5 text-xs text-[#FCA5A5]" role="alert">
            {phoneError}
          </p>
        ) : null}
      </label>
      <label className="block text-sm">
        <span className="font-medium text-white/90">Business name</span>
        <input
          value={business}
          onChange={(e) => setBusiness(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#090D24]/80 px-4 py-3 text-white outline-none ring-[#9333EA] placeholder:text-white/35 focus:ring-2"
          placeholder="Optional"
          autoComplete="organization"
        />
      </label>
      <label className="block text-sm">
        <span className="font-medium text-white/90">What do you need?</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={3}
          className="mt-1.5 w-full resize-y rounded-xl border border-white/15 bg-[#090D24]/80 px-4 py-3 text-white outline-none ring-[#9333EA] placeholder:text-white/35 focus:ring-2"
          placeholder={copy.messagePlaceholder ?? defaultCopy.messagePlaceholder}
        />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] text-sm font-semibold"
      >
        {copy.formSubmitCta}
      </button>
    </form>
  );
}