"use client";

import { useId, useState } from "react";

type FaqItem = { question: string; answer: string };

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-[#111936]/60">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;

        return (
          <div key={item.question} className="px-4 sm:px-5">
            <h3>
              <button
                id={buttonId}
                type="button"
                className="flex w-full items-center justify-between gap-3 py-4 text-left text-sm font-semibold sm:text-base"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                {item.question}
                <span
                  aria-hidden
                  className={`shrink-0 text-lg text-[#C4B5FD] transition-transform ${isOpen ? "rotate-45" : ""}`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="pb-4 text-sm leading-relaxed text-white/75"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}