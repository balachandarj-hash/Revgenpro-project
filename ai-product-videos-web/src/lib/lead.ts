import { isValidIndianMobile, normalizeIndianMobile } from "@/lib/phone";
import { productAdsContent } from "@/lib/product-ads-content";

export type LeadPayload = {
  fullName: string;
  businessName: string;
  whatsapp: string;
  email?: string;
  productCategory: string;
  productDetails?: string;
  preferredStyle?: string;
};

export type LeadFieldErrors = Partial<
  Record<"fullName" | "businessName" | "whatsapp" | "email" | "productCategory" | "productDetails", string>
>;

const categories = new Set<string>(productAdsContent.enquiry.categories);

const MAX = {
  fullName: 80,
  businessName: 120,
  email: 120,
  productDetails: 1000,
  preferredStyle: 80,
} as const;

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function tooLong(value: string, max: number): boolean {
  return value.length > max;
}

/** Validate and normalize a lead for API / future CRM. */
export function validateLead(input: unknown): {
  ok: true;
  lead: LeadPayload;
} | {
  ok: false;
  errors: LeadFieldErrors;
  message: string;
} {
  if (!input || typeof input !== "object") {
    return { ok: false, errors: {}, message: "Invalid request body." };
  }

  const raw = input as Record<string, unknown>;
  const errors: LeadFieldErrors = {};

  const fullName = typeof raw.fullName === "string" ? raw.fullName.trim() : "";
  const businessName = typeof raw.businessName === "string" ? raw.businessName.trim() : "";
  const whatsappRaw = typeof raw.whatsapp === "string" ? raw.whatsapp.trim() : "";
  const emailRaw = typeof raw.email === "string" ? raw.email.trim() : "";
  const productCategory =
    typeof raw.productCategory === "string" ? raw.productCategory.trim() : "";
  const productDetails =
    typeof raw.productDetails === "string" ? raw.productDetails.trim() : "";
  const preferredStyle =
    typeof raw.preferredStyle === "string" ? raw.preferredStyle.trim() : "";

  if (!fullName) errors.fullName = "Full name is required.";
  else if (tooLong(fullName, MAX.fullName)) errors.fullName = `Keep full name under ${MAX.fullName} characters.`;
  if (!businessName) errors.businessName = "Business name is required.";
  else if (tooLong(businessName, MAX.businessName)) {
    errors.businessName = `Keep business name under ${MAX.businessName} characters.`;
  }
  if (!whatsappRaw) {
    errors.whatsapp = "WhatsApp number is required.";
  } else if (!isValidIndianMobile(whatsappRaw)) {
    errors.whatsapp = "Enter a valid 10-digit Indian mobile number (starts with 6–9).";
  }
  if (emailRaw && !isValidEmail(emailRaw)) {
    errors.email = "Enter a valid email address, or leave this field blank.";
  } else if (emailRaw && tooLong(emailRaw, MAX.email)) {
    errors.email = `Keep email under ${MAX.email} characters.`;
  }
  if (!productCategory) {
    errors.productCategory = "Select a product category.";
  } else if (!categories.has(productCategory)) {
    errors.productCategory = "Select a valid product category.";
  }
  if (productDetails && tooLong(productDetails, MAX.productDetails)) {
    errors.productDetails = `Keep product details under ${MAX.productDetails} characters.`;
  }
  if (preferredStyle && tooLong(preferredStyle, MAX.preferredStyle)) {
    return {
      ok: false,
      errors: {},
      message: "Preferred style is too long. Please try again.",
    };
  }

  if (Object.keys(errors).length > 0) {
    return {
      ok: false,
      errors,
      message: "Please fix the highlighted fields and try again.",
    };
  }

  const mobile = normalizeIndianMobile(whatsappRaw);
  if (!mobile) {
    return {
      ok: false,
      errors: { whatsapp: "Enter a valid 10-digit Indian mobile number (starts with 6–9)." },
      message: "Please fix the highlighted fields and try again.",
    };
  }

  const lead: LeadPayload = {
    fullName,
    businessName,
    whatsapp: mobile,
    productCategory,
  };
  if (emailRaw) lead.email = emailRaw;
  if (productDetails) lead.productDetails = productDetails;
  if (preferredStyle) lead.preferredStyle = preferredStyle;

  return { ok: true, lead };
}

export function formatLeadForWhatsApp(lead: LeadPayload): string {
  const lines = [
    `Hi ${productAdsContent.packageName} team — new enquiry (₹1,499 / video).`,
    `Name: ${lead.fullName}`,
    `Business: ${lead.businessName}`,
    `WhatsApp: +91 ${lead.whatsapp}`,
    lead.email ? `Email: ${lead.email}` : null,
    `Category: ${lead.productCategory}`,
    lead.preferredStyle ? `Preferred style: ${lead.preferredStyle}` : null,
    lead.productDetails ? `Product details: ${lead.productDetails}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}
