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
  messagePlaceholder: "Describe the story, characters, tone, and where you'll post it…",
};

export function LeadForm({ copy = defaultCopy }: { copy?: LeadFormCopy }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [videoType, setVideoType] = useState("");
  const [idea, setIdea] = useState("");
  const [fax, setFax] = useState(""); // honeypot
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [formState, setFormState] = useState<FormState>("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (fax.trim()) return; // bot honeypot
    setPhoneError(null);

    const trimmedName = name.trim();
    if (!trimmedName || !videoType || !idea.trim()) return;

    const mobile = normalizeIndianMobile(phone);
    if (!mobile || !isValidIndianMobile(phone)) {
      setPhoneError("Enter a valid 10-digit Indian mobile number (starts with 6–9).");
      return;
    }

    const lines = [
      copy.whatsappPrefill,
      "",
      `Name: ${trimmedName}`,
      `WhatsApp Number: +91 ${mobile}`,
      `Video Type: ${videoType}`,
      `Video Idea: ${idea.trim()}`,
    ];

    const url = whatsappUrl(lines.join("\n"));
    window.open(url, "_blank", "noopener,noreferrer");
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div className="rounded-2xl border border-[#25D366]/40 bg-[#052e16]/30 p-6 text-center">
        <p className="text-lg font-semibold text-[#86EFAC]">{siteContent.enquiry.successTitle}</p>
        <p className="mt-2 text-sm text-white/75">{siteContent.enquiry.successBody}</p>
        <a
          href={whatsappUrl(copy.whatsappPrefill)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-[#25D366] px-5 text-sm font-semibold text-[#052e16]"
        >
          {siteContent.enquiry.reopenWhatsApp}
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
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden>
        <label htmlFor="fax">Fax</label>
        <input
          id="fax"
          name="fax"
          tabIndex={-1}
          autoComplete="off"
          value={fax}
          onChange={(e) => setFax(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-medium text-white/80">
          Name <span className="text-white/45">Required</span>
        </label>
        <input
          id="name"
          name="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#090D24]/80 px-4 py-3 text-white outline-none ring-[#9333EA] placeholder:text-white/35 focus:ring-2"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="whatsapp" className="text-sm font-medium text-white/80">
          WhatsApp Number <span className="text-white/45">Required</span>
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          required
          inputMode="numeric"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#090D24]/80 px-4 py-3 text-white outline-none ring-[#9333EA] placeholder:text-white/35 focus:ring-2"
          placeholder="10-digit mobile"
        />
        {phoneError ? <p className="mt-1.5 text-sm text-rose-300">{phoneError}</p> : null}
      </div>

      <div>
        <label htmlFor="videoType" className="text-sm font-medium text-white/80">
          Video Type <span className="text-white/45">Required</span>
        </label>
        <select
          id="videoType"
          name="videoType"
          required
          value={videoType}
          onChange={(e) => setVideoType(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-white/15 bg-[#090D24]/80 px-4 py-3 text-white outline-none ring-[#9333EA] focus:ring-2"
        >
          <option value="" disabled>
            Choose a video type
          </option>
          {siteContent.styles.map((style) => (
            <option key={style.id} value={`${style.emoji} ${style.title}`}>
              {style.emoji} {style.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="idea" className="text-sm font-medium text-white/80">
          Describe Your Video Idea <span className="text-white/45">Required</span>
        </label>
        <textarea
          id="idea"
          name="idea"
          required
          rows={4}
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          className="mt-1.5 w-full resize-y rounded-xl border border-white/15 bg-[#090D24]/80 px-4 py-3 text-white outline-none ring-[#9333EA] placeholder:text-white/35 focus:ring-2"
          placeholder={copy.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[linear-gradient(135deg,#9333EA,#EC008C)] text-sm font-semibold"
      >
        {copy.formSubmitCta}
      </button>
      <p className="sr-only">
        Submitting opens WhatsApp for {brand.name}. Nothing is stored on this website.
      </p>
    </form>
  );
}
