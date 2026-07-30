import { Logo } from "@/components/Logo";

const links = [
  { href: "#layers", label: "The three layers" },
  { href: "#how", label: "How it works" },
  { href: "#deploy", label: "Oversight" },
  { href: "#compare", label: "Cost" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 w-full max-w-[1120px] items-center gap-8 px-6 md:px-8">
        <Logo />
        <div className="ml-auto hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#demo"
          className="ml-auto inline-flex h-9 items-center rounded-full bg-fg px-4 text-[13px] font-medium text-ink transition-colors hover:bg-fg/85 lg:ml-0"
        >
          Book a consultation
        </a>
      </nav>
    </header>
  );
}
