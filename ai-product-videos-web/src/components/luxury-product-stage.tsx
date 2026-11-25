import Image from "next/image";

/**
 * Exact product composition from the luxury mockup
 * (cream + flower, perfume spray, serum, phone, watch, earbuds, coffee).
 */
export function LuxuryProductStage() {
  return (
    <div className="relative mx-auto w-full max-w-[640px] lg:max-w-none lg:justify-self-end">
      <div className="relative aspect-[1560/1200] w-full">
        <Image
          src="/product-ads/luxury-product-scene.jpg"
          alt="Luxury product showcase — perfume, skincare, electronics, coffee"
          fill
          priority
          quality={100}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}
