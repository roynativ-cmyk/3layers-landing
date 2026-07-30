import { Logo } from "@/components/Logo";

const links = [
  { href: "#layers", label: "The three layers" },
  { href: "#how", label: "How it works" },
  { href: "#deploy", label: "Oversight" },
  { href: "#compare", label: "Cost" },
  { href: "#faq", label: "FAQ" },
];

/**
 * The nav spans the full viewport rather than the page's 1120px content
 * column — a fixed side padding instead of a centered max-width, so the logo
 * sits at the true left edge on a wide screen instead of floating as an island
 * in the middle of it. Everything else — links, then the CTA — is one group
 * pinned to the right, not spread across the bar.
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <nav className="flex h-16 w-full items-center justify-between px-6 md:px-10">
        <Logo />
        <div className="flex items-center gap-7">
          <div className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[13px] text-fg-muted transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#demo"
            className="inline-flex h-9 items-center rounded-full bg-fg px-4 text-[13px] font-medium text-ink transition-colors hover:bg-fg/85"
          >
            Book a consultation
          </a>
        </div>
      </nav>
    </header>
  );
}
