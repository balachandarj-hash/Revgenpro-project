type ProcessIcon = "share" | "create" | "publish";

export function ProcessStepIcon({ name }: { name: ProcessIcon }) {
  const common = "h-7 w-7";

  if (name === "share") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <path d="M4 16.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2.5" strokeLinecap="round" />
        <path d="M12 4v11" strokeLinecap="round" />
        <path d="M8.5 7.5 12 4l3.5 3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "create") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
        <rect x="3.5" y="6" width="17" height="12" rx="2.5" />
        <path d="M10 9.5v5l4.5-2.5L10 9.5z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M5 12.5 9.5 17 19 7.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}
