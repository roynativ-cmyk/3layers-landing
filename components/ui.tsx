import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  divider = true,
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
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 md:px-8 md:py-28">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
      {children}
    </p>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
}) {
  return (
    <div className="max-w-[54rem]">
      <Eyebrow>{eyebrow}</Eyebrow>
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
    "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "primary"
      ? "bg-white text-black hover:bg-white/88"
      : "border border-line text-fg hover:border-line-strong hover:bg-white/[0.04]";

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
            style={{ background: dot ?? "rgba(255,255,255,0.45)" }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}
