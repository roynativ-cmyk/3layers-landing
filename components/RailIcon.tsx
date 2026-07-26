export type RailGlyph =
  | "dashboard"
  | "inbox"
  | "live"
  | "review"
  | "regression"
  | "settings";

/**
 * 18px stroke glyphs at 1.6 weight — the same rail iconography as the console,
 * drawn inline so the page carries no icon dependency.
 */
export function RailIcon({
  glyph,
  size = 16,
}: {
  glyph: RailGlyph;
  size?: number;
}) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true as const,
  };

  if (glyph === "dashboard") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
      </svg>
    );
  }

  if (glyph === "inbox") {
    return (
      <svg {...common}>
        <path d="M3 13.5 5.6 5.4A2 2 0 0 1 7.5 4h9a2 2 0 0 1 1.9 1.4L21 13.5" />
        <path d="M3 13.5h4.5l1.2 2.2h6.6l1.2-2.2H21v4.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      </svg>
    );
  }

  if (glyph === "live") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="2.5" />
        <path d="M7.8 7.8a6 6 0 0 0 0 8.4M16.2 16.2a6 6 0 0 0 0-8.4" />
        <path d="M4.9 4.9a10 10 0 0 0 0 14.2M19.1 19.1a10 10 0 0 0 0-14.2" />
      </svg>
    );
  }

  if (glyph === "review") {
    return (
      <svg {...common}>
        <path d="M4 5.5h9M4 12h9M4 18.5h6" />
        <path d="M16.5 16.8l2 2 3.2-3.6" />
      </svg>
    );
  }

  if (glyph === "regression") {
    return (
      <svg {...common}>
        <path d="M9 3h6M10.5 3v5.2L5.7 17a2.4 2.4 0 0 0 2.1 3.6h8.4a2.4 2.4 0 0 0 2.1-3.6l-4.8-8.8V3" />
        <path d="M7.6 14.5h8.8" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-2.9 1.2 2 2 0 1 1-4 0 1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1A1.7 1.7 0 0 0 3 15a2 2 0 1 1 0-4 1.7 1.7 0 0 0 1.2-2.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1A1.7 1.7 0 0 0 10 4a2 2 0 1 1 4 0 1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1A1.7 1.7 0 0 0 21 11a2 2 0 1 1 0 4z" />
    </svg>
  );
}
