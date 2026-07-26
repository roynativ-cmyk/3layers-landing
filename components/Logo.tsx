/**
 * The mark: three plates seen edge-on — three layers between the model and the
 * customer. Deliberately static; the motion on this page belongs to the hero.
 */
const PLATES = [
  "M12 14.1 L21 17.4 L12 20.7 L3 17.4 Z",
  "M12 8.35 L21 11.65 L12 14.95 L3 11.65 Z",
  "M12 2.6 L21 5.9 L12 9.2 L3 5.9 Z",
];

export function Mark({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      role="img"
      aria-label="3layers.ai"
      fill="none"
    >
      {PLATES.map((d) => (
        // opaque fill so each plate occludes the one below it
        <path
          key={d}
          d={d}
          fill="var(--ink)"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      ))}
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
      <Mark className="h-[22px] w-[22px] text-fg" />
      <span className="text-[17px] font-semibold tracking-[-0.02em] leading-none">
        3layers<span className="text-fg-dim">.ai</span>
      </span>
    </a>
  );
}
