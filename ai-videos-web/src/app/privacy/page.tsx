import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { brand } from "@/lib/brand";
import { privacyContent } from "@/lib/privacy-content";
import { absoluteUrl, routes } from "@/lib/routes";
import { siteContent } from "@/lib/site-content";

export const metadata: Metadata = {
  title: privacyContent.seo.title,
  description: privacyContent.seo.description,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl(routes.privacy, siteContent.seo.siteUrl),
    siteName: brand.legalName,
    title: privacyContent.seo.title,
    description: privacyContent.seo.description,
  },
};

export default function PrivacyPage() {
  const telHref = `tel:+${brand.whatsapp.phoneDigits}`;

  return (
    <div className="studio-page relative min-h-screen overflow-x-hidden text-white">
      <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <span className="studio-orb studio-orb-purple" />
        <span className="studio-orb studio-orb-pink" />
        <span className="studio-orb studio-orb-blue" />
      </div>

      <SiteHeader page="privacy" />

      <main id="privacy" className="relative z-10 scroll-mt-24">
        <section className="mx-auto max-w-3xl px-5 py-10 md:px-10 md:py-14">
          <p className="text-xs font-medium text-white/55">{privacyContent.hero.eyebrow}</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{privacyContent.hero.title}</h1>

          <div className="mt-10 space-y-10">
            {privacyContent.sections.map((section) => (
              <article key={section.id} id={section.id} className="scroll-mt-32">
                <h2 className="text-xl font-semibold text-[#EDE9FE]">{section.title}</h2>
                {section.body ? (
                  <p className="mt-3 text-base leading-relaxed text-white/80">{section.body}</p>
                ) : (
                  <dl className="mt-4 space-y-4 text-base">
                    <div>
                      <dt className="text-sm text-white/50">Email</dt>
                      <dd className="mt-1">
                        <a
                          href={`mailto:${brand.contact.email}`}
                          className="font-medium text-[#C4B5FD] hover:underline"
                        >
                          {brand.contact.email}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-white/50">Phone</dt>
                      <dd className="mt-1">
                        <a href={telHref} className="font-medium text-white/90 hover:text-[#C4B5FD]">
                          {brand.contact.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-white/50">Studio</dt>
                      <dd className="mt-1 font-medium text-white/90">
                        {brand.location.locality}, {brand.location.region}
                      </dd>
                    </div>
                  </dl>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}