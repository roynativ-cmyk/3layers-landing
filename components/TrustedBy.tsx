/**
 * Trusted by. Brand marks sit grey on the black surface and return to full
 * colour on hover — the same "prove it, then show it" idea as the product.
 * The SVGs in public/logos are cropped to their badge (see the viewBox in each
 * file), so they scale cleanly at any tile size without clipping tricks.
 */

const brands = [
  { name: "ExpressVPN", file: "Express-d.svg" },
  { name: "Private Internet Access", short: "PIA", file: "pia-brand.svg" },
  { name: "CyberGhost", file: "cg-brand.svg" },
  { name: "Intego", file: "intego-brand.svg" },
];

export function TrustedBy() {
  return (
    <div className="border-t border-line">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-12 md:px-8 md:py-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          Trusted by consumer-security brands
        </p>

        <ul className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {brands.map((brand) => (
            <li key={brand.name}>
              <span className="brand group flex h-full min-h-[76px] items-center gap-3 rounded-xl border border-line px-4 py-4 transition-colors duration-300 hover:border-line-strong hover:bg-white/[0.03] sm:gap-4 sm:px-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/logos/${brand.file}`}
                  alt={`${brand.name} logo`}
                  width={40}
                  height={40}
                  className="brand-img h-9 w-9 shrink-0 sm:h-11 sm:w-11"
                />
                <span className="min-w-0 text-[13px] font-medium leading-tight tracking-[-0.01em] text-fg-muted transition-colors duration-300 group-hover:text-fg sm:text-[14px]">
                  <span className="sm:hidden">{brand.short ?? brand.name}</span>
                  <span className="hidden sm:inline">{brand.name}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>

        <p className="mt-7 max-w-[62ch] text-[12.5px] leading-relaxed text-fg-dim">
          Built and hardened on live consumer-support traffic — millions of
          subscribers, every channel, in dozens of languages.
        </p>
      </div>
    </div>
  );
}
