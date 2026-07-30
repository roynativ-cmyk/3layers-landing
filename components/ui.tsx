import type { ReactNode } from "react";

/**
 * Sections separate themselves with space, not with a rule. A divider is opt-in
 * now, for the two places where the surface itself changes.
 */
export function Section({
  id,
  children,
  className = "",
  divider = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${divider ? "border-t border-line" : ""} ${className}`}
    >
      <div className="mx-auto w-full max-w-[1120px] px-6 py-24 md:px-8 md:py-36">
        {children}
      </div>
    </section>
  );
}

/**
 * The eyebrow carries each section's hue. Every section picks one from the
 * signal palette, so the page walks through machine → human → learn instead of
 * repeating one accent.
 */
export function Eyebrow({
  children,
  accent = "var(--c-machine)",
}: {
  children: ReactNode;
  accent?: string;
}) {
  return (
    <p
      className="inline-flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.22em]"
      style={{ color: accent }}
    >
      <span
        aria-hidden
        className="h-[5px] w-[5px] shrink-0 rounded-full"
        style={{ background: accent }}
      />
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  accent,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  accent?: string;
}) {
  return (
    <div className="max-w-[54rem]">
      <Eyebrow accent={accent}>{eyebrow}</Eyebrow>
      <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
        {title}
      </h2>
      {lead ? (
        <p className="mt-5 max-w-[60ch] text-[15px] leading-relaxed text-fg-muted md:text-base">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
}) {
  const base =
    "btn-motion inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium";
  const styles =
    variant === "primary"
      ? "bg-fg text-ink hover:bg-fg/85 hover:shadow-[0_14px_32px_-14px_rgba(15,26,34,0.5)]"
      : "border border-line bg-panel text-fg hover:border-line-strong hover:bg-fg/[0.04]";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
    </a>
  );
}

export function Bullets({ items, dot }: { items: string[]; dot?: string }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3 text-[13.5px] leading-relaxed text-fg-muted"
        >
          <span
            aria-hidden
            className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full"
            style={{ background: dot ?? "rgba(15,26,34,0.3)" }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
