import { NextResponse } from "next/server";
import { whatsappUrl } from "@/lib/brand";
import { formatLeadForWhatsApp, validateLead } from "@/lib/lead";

/**
 * Lead intake for the AI Promotional Product Video landing page.
 * Validates and normalizes the payload, then returns a structured response
 * ready for a future CRM / API hook. Delivery today: WhatsApp deep link
 * for the team to receive the enquiry (nothing is fake-saved client-side).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not read your request. Please try again." },
      { status: 400 },
    );
  }

  const result = validateLead(body);
  if (!result.ok) {
    return NextResponse.json(
      { ok: false, message: result.message, errors: result.errors },
      { status: 422 },
    );
  }

  const { lead } = result;

  // Future CRM hook: await sendToCrm(lead)
  // For now we accept the validated lead and return a WhatsApp handoff URL
  // so the team receives a real enquiry thread.
  const handoffUrl = whatsappUrl(formatLeadForWhatsApp(lead));

  return NextResponse.json({
    ok: true,
    message: "Enquiry received. Continue on WhatsApp so our team can reply.",
    lead: {
      fullName: lead.fullName,
      businessName: lead.businessName,
      productCategory: lead.productCategory,
    },
    handoffUrl,
  });
}
