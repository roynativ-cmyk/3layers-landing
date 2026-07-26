type MarkProps = {
  className?: string;
  animated?: boolean;
};

/**
 * The mark: three plates seen edge-on.
 * A pulse runs top → bottom — answer, verify, learn — then the wordmark
 * carries the loop no further: the hero visual finishes the story.
 */
export function Mark({ className = "h-6 w-6", animated = true }: MarkProps) {
  const plates: { d: string; delay: string; top?: boolean }[] = [
    { d: "M12 14.1 L21 17.4 L12 20.7 L3 17.4 Z", delay: "0.36s" },
    { d: "M12 8.35 L21 11.65 L12 14.95 L3 11.65 Z", delay: "0.18s" },
    { d: "M12 2.6 L21 5.9 L12 9.2 L3 5.9 Z", delay: "0s", top: true },
  ];

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label="3layers.ai"
      fill="none"
    >
      {plates.map((plate) => (
        <g key={plate.d}>
          {/* opaque base so the plate above visually occludes the one below */}
          <path
            d={plate.d}
            fill="var(--ink)"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          {animated ? (
            <path
              d={plate.d}
              className="mark-plate"
              data-top={plate.top ? "true" : undefined}
              style={{ animationDelay: plate.delay }}
            />
          ) : null}
        </g>
      ))}
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a
      href="#top"
      className={`mark-link group inline-flex items-center gap-2.5 ${className}`}
      aria-label="3layers.ai — home"
    >
      <Mark className="h-[22px] w-[22px] text-fg" />
      <span className="text-[17px] font-semibold tracking-[-0.02em] leading-none">
        3layers<span className="text-fg-dim">.ai</span>
      </span>
    </a>
  );
}
