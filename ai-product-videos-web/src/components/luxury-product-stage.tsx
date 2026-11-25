import Image from "next/image";

/**
 * Premium product stage matching the mockup composition,
 * built from real product-ads assets (not a low-res crop).
 */
export function LuxuryProductStage() {
  return (
    <div className="relative mx-auto aspect-[5/5.2] w-full max-w-[540px]">
      <div
        aria-hidden
        className="absolute inset-[8%] rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(255,248,238,0.55)_0%,rgba(232,214,186,0.25)_55%,transparent_75%)]"
      />

      <div className="absolute left-[2%] top-[6%] z-20 w-[42%] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(58,42,20,0.28)] ring-1 ring-[#D4C2A4]/50">
        <div className="relative aspect-[4/5]">
          <Image
            src="/product-ads/perfume.jpg"
            alt="Luxury perfume"
            fill
            className="object-cover"
            sizes="220px"
            priority
          />
        </div>
      </div>

      <div className="absolute right-[4%] top-[2%] z-10 w-[48%] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(58,42,20,0.22)] ring-1 ring-[#D4C2A4]/40">
        <div className="relative aspect-[4/3]">
          <Image
            src="/product-ads/skincare.jpg"
            alt="Skincare cream"
            fill
            className="object-cover"
            sizes="240px"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-[28%] right-[6%] z-30 w-[36%] overflow-hidden rounded-2xl shadow-[0_16px_36px_rgba(58,42,20,0.3)] ring-1 ring-[#D4C2A4]/45">
        <div className="relative aspect-square">
          <Image
            src="/product-ads/gadget.jpg"
            alt="Electronics"
            fill
            className="object-cover"
            sizes="180px"
          />
        </div>
      </div>

      <div className="absolute bottom-[4%] left-[8%] z-20 w-[44%] overflow-hidden rounded-2xl shadow-[0_16px_36px_rgba(58,42,20,0.28)] ring-1 ring-[#D4C2A4]/45">
        <div className="relative aspect-[5/3]">
          <Image
            src="/product-ads/lifestyle-bottle.png"
            alt="Food and beverage"
            fill
            className="object-cover object-center"
            sizes="220px"
          />
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[2%] z-40 w-[28%] overflow-hidden rounded-2xl shadow-[0_14px_32px_rgba(58,42,20,0.28)] ring-1 ring-[#D4C2A4]/45">
        <div className="relative aspect-[3/4]">
          <Image
            src="/product-ads/fashion.jpg"
            alt="Fashion lifestyle"
            fill
            className="object-cover"
            sizes="140px"
          />
        </div>
      </div>
    </div>
  );
}
