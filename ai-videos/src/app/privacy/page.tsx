import Link from "next/link";
import { brand } from "@/lib/brand";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#090D24] px-5 py-12 text-white md:px-10">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-semibold text-[#C4B5FD] hover:text-white">
          ← Back to AI Videos
        </Link>
        <h1 className="mt-6 text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-4 text-white/75">
          {brand.legalName} runs this AI Videos enquiry page. The lead form opens WhatsApp with
          the details you enter — we do not store form submissions on this website&apos;s servers.
        </p>
        <p className="mt-4 text-white/75">
          When you continue in WhatsApp, Meta&apos;s WhatsApp terms and privacy policy also apply.
          Contact us at {brand.contact.email} or {brand.contact.phoneDisplay} if you have questions.
        </p>
        <p className="mt-8 text-sm text-white/50">
          © {new Date().getFullYear()} {brand.legalName}
        </p>
      </div>
    </div>
  );
}
