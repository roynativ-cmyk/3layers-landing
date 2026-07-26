/**
 * The mark: a mirrored 3 built from two stacked bowls — three strokes, two
 * turns — closing into a chat bubble with a tail, set inside a hairline
 * rounded tile. Everything is drawn in currentColor so the same glyph works on
 * the black page and on the console's light rail. app/icon.svg is the same
 * artwork as the site icon.
 */
export function Mark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label="3layers.ai"
      fill="none"
    >
      <rect
        x="1.1"
        y="1.1"
        width="21.8"
        height="21.8"
        rx="6.2"
        stroke="currentColor"
        strokeWidth="1.15"
        opacity="0.9"
      />
      <g
        transform="translate(4.21 3.3) scale(0.68)"
        stroke="currentColor"
        strokeWidth="2.7"
        strokeLinecap="butt"
        strokeLinejoin="round"
      >
        {/* upper bowl: top bar → turn → middle bar */}
        <path d="M6 5.4 H13.6 A3.3 3.3 0 0 1 13.6 12 H6" />
        {/* lower bowl: middle bar → turn → bottom bar */}
        <path d="M6 12 H13.6 A3.3 3.3 0 0 1 13.6 18.6 H6.9" />
        {/* the bubble's tail */}
        <path
          d="M6.6 17.25 L6.6 21.6 L9.9 18.6 Z"
          fill="currentColor"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="3layers.ai — home"
    >
      <Mark className="h-[24px] w-[24px] text-fg" />
      <span className="text-[17px] font-semibold tracking-[-0.02em] leading-none">
        3layers<span className="text-fg-dim">.ai</span>
      </span>
    </a>
  );
}
