import Image from "next/image";

/**
 * Single hero product with play affordance — matches mockup instruction:
 * one featured product + video play icon.
 */
export function LuxuryProductStage() {
  return (
    <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none lg:justify-self-end">
      <a
        href="#samples"
        className="group relative block aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] shadow-[0_28px_64px_rgba(58,42,20,0.22)] ring-1 ring-[#E8DFD2]/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1410]"
        aria-label="Watch sample product videos"
      >
        <Image
          src="/product-ads/hero-perfume-spray.jpg"
          alt="Luxury perfume — sample AI product video"
          fill
          priority
          quality={95}
          sizes="(max-width: 1024px) 90vw, 48vw"
          className="object-cover object-center transition duration-700 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(26,20,16,0.28)_100%)]"
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#1A1410] shadow-[0_12px_32px_rgba(26,20,16,0.28)] transition group-hover:scale-105 sm:h-[4.5rem] sm:w-[4.5rem]">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current" aria-hidden>
              <path d="M8 5.14v13.72L19 12 8 5.14z" />
            </svg>
          </span>
        </span>
      </a>
    </div>
  );
}
