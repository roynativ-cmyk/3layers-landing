import { Logo } from "@/components/Logo";

const columns = [
  {
    title: "Product",
    links: [
      { href: "#layers", label: "The three layers" },
      { href: "#how", label: "How it works" },
      { href: "#deploy", label: "Quality & control" },
    ],
  },
  {
    title: "Evaluate",
    links: [
      { href: "#compare", label: "Cost savings" },
      { href: "#faq", label: "FAQ" },
      { href: "#demo", label: "Book a consultation" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-14 md:px-8">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1fr)_auto_auto]">
          <div>
            <Logo />
            <p className="mt-5 max-w-[34ch] text-[13px] leading-relaxed text-fg-dim">
              Smarter support, lower costs, human when it matters: an AI Bot,
              our own human specialists, and live coordination with your
              team for the rare case that needs it — one complete operation.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="md:min-w-[9rem]">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
                {column.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="nav-link text-[13px] text-fg-muted transition-colors hover:text-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-fg-dim">
          <span>© {new Date().getFullYear()} 3layers.ai</span>
          <span className="hidden sm:inline">·</span>
          <span>Smarter support · lower costs · human when it matters</span>
          <a
            href="mailto:hello@3layers.ai"
            className="nav-link w-full transition-colors hover:text-fg sm:ml-auto sm:w-auto"
          >
            hello@3layers.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
