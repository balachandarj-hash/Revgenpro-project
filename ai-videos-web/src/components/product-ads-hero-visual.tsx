import Image from "next/image";
import { productAdsContent, type ProductCategory } from "@/lib/product-ads-content";

const chipPlacement: Record<
  ProductCategory["id"],
  { className: string; animation?: string }
> = {
  skincare: {
    className:
      "left-[-2%] top-[6%] w-[38%] -rotate-[6deg] max-sm:left-[0%] max-sm:top-[8%] max-sm:w-[36%]",
    animation: "studio-float",
  },
  perfume: {
    className:
      "right-[-4%] top-[14%] w-[34%] rotate-[8deg] max-sm:right-[0%] max-sm:top-[18%] max-sm:w-[32%]",
    animation: "studio-float-delayed",
  },
  fashion: {
    className:
      "bottom-[2%] right-[-2%] w-[36%] rotate-[4deg] max-sm:bottom-[6%] max-sm:right-[0%] max-sm:w-[34%]",
    animation: "studio-float-delayed",
  },
  gadget: {
    className:
      "bottom-[8%] left-[4%] w-[32%] -rotate-[5deg] max-sm:bottom-[10%] max-sm:left-[2%] max-sm:w-[30%]",
    animation: "studio-float",
  },
  offer: {
    className:
      "left-[22%] top-[-2%] w-[30%] rotate-[3deg] max-sm:left-[18%] max-sm:top-[0%] max-sm:w-[28%]",
    animation: "studio-float",
  },
};

function CategoryChip({
  category,
  className = "",
  animation,
}: {
  category: ProductCategory;
  className?: string;
  animation?: string;
}) {
  return (
    <div
      className={[
        "studio-glass absolute overflow-hidden rounded-2xl border border-white/15 shadow-[0_18px_40px_rgba(9,13,36,0.45)]",
        animation,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={category.image}
        alt={category.imageAlt}
        width={400}
        height={500}
        className="aspect-[4/5] w-full object-cover"
        sizes="(max-width: 640px) 34vw, 30vw"
      />
      <p className="truncate px-2 py-1.5 text-[10px] font-semibold uppercase tracking-wide text-white/90 sm:px-3 sm:py-2 sm:text-[11px]">
        {category.label}
      </p>
    </div>
  );
}

export function ProductAdsHeroVisual() {
  const floatingIds = ["skincare", "perfume", "fashion"] as const;
  const floating = productAdsContent.categories.filter((c) =>
    (floatingIds as readonly string[]).includes(c.id),
  );

  return (
    <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
      <div className="relative aspect-[4/3] min-h-[280px] overflow-visible rounded-3xl border border-white/10 shadow-[0_24px_60px_rgba(9,13,36,0.45)] max-sm:pb-6 sm:min-h-[340px]">
        <Image
          src={productAdsContent.hero.heroImage}
          alt={productAdsContent.hero.heroImageAlt}
          fill
          priority
          className="rounded-3xl object-cover"
          sizes="(max-width: 1024px) 100vw, 42vw"
        />
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#090D24]/55 to-transparent" />

        {floating.map((category) => {
          const placement = chipPlacement[category.id];
          return (
            <CategoryChip
              key={category.id}
              category={category}
              className={placement.className}
              animation={placement.animation}
            />
          );
        })}
      </div>

      <ul className="mt-4 flex flex-wrap justify-center gap-2 sm:mt-5">
        {productAdsContent.categories.map((category) => (
          <li key={category.id}>
            <span className="studio-glass inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-white/85">
              <span className="relative h-6 w-6 overflow-hidden rounded-full">
                <Image
                  src={category.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="24px"
                />
              </span>
              {category.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}