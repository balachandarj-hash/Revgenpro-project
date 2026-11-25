export function CategoryIcon({ name }: { name: string }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "cream":
      return (
        <svg {...common}>
          <path d="M7 10h10v8a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-8Z" />
          <path d="M9 10V8a3 3 0 0 1 6 0v2" />
          <path d="M10 14h4" />
        </svg>
      );
    case "perfume":
      return (
        <svg {...common}>
          <path d="M10 3h4v3h-4V3Z" />
          <path d="M9 6h6l1 3v9a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2V9l1-3Z" />
          <path d="M12 12v4" />
        </svg>
      );
    case "headphones":
      return (
        <svg {...common}>
          <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
          <path d="M4 14v4a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 2Z" />
          <path d="M20 14v4a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z" />
        </svg>
      );
    case "coffee":
      return (
        <svg {...common}>
          <path d="M5 9h11v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Z" />
          <path d="M16 11h2a2.5 2.5 0 0 1 0 5h-2" />
          <path d="M8 5c.5 1 .5 2 0 3M11 5c.5 1 .5 2 0 3" />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <path d="M6 8h12l1 12H5L6 8Z" />
          <path d="M9 8V7a3 3 0 0 1 6 0v1" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
        </svg>
      );
  }
}
