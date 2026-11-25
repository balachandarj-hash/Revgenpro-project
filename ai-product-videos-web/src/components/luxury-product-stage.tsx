import Image from "next/image";

/**
 * Exact product composition from the luxury mockup
 * (perfume spray, skincare, phone, watch, earbuds, coffee).
 */
export function LuxuryProductStage() {
  return (
    <div className="relative mx-auto w-full max-w-[600px]">
      <div className="relative aspect-[1475/1075] w-full">
        <Image
          src="/product-ads/luxury-product-scene.jpg"
          alt="Luxury product showcase — perfume, skincare, electronics, coffee"
          fill
          priority
          quality={100}
          sizes="(max-width: 1024px) 100vw, 600px"
          className="object-contain object-center drop-shadow-[0_24px_48px_rgba(58,42,20,0.18)]"
        />
      </div>
    </div>
  );
}
