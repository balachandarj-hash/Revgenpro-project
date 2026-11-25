"use client";

const STYLE_KEY = "revgenpro-preferred-style";

export function setPreferredStyle(styleTitle: string) {
  try {
    sessionStorage.setItem(STYLE_KEY, styleTitle);
    window.dispatchEvent(new CustomEvent("revgenpro:style", { detail: styleTitle }));
  } catch {
    // ignore storage failures
  }
}

export function readPreferredStyle(): string {
  try {
    return sessionStorage.getItem(STYLE_KEY) ?? "";
  } catch {
    return "";
  }
}

export function StyleExploreButton({
  styleTitle,
  label,
}: {
  styleTitle: string;
  label: string;
}) {
  return (
    <a
      href="#enquiry"
      className="inline-flex min-h-10 items-center text-sm font-semibold text-[#A5B4FC] transition hover:text-white"
      onClick={() => setPreferredStyle(styleTitle)}
    >
      {label}
      <span aria-hidden className="ml-1">
        →
      </span>
    </a>
  );
}
