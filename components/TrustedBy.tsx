/**
 * Trusted by. Brand marks sit grey on the black surface and come back to full
 * colour on hover — the same "prove it, then show it" idea as the product.
 * SVGs live in public/logos and are cropped to the badge with a square clip,
 * because the source files carry decorative artwork to the right of the mark.
 */

const brands = [
  { name: "ExpressVPN", file: "Express-d.svg" },
  { name: "Private Internet Access", file: "pia-brand.svg" },
  { name: "CyberGhost", file: "cg-brand.svg" },
  { name: "Intego", file: "intego-brand.svg" },
];

export function TrustedBy() {
  return (
    <div className="border-t border-line">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-12 md:px-8 md:py-14">
        <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          Trusted by consumer-security brands
        </p>

        <ul className="mt-7 flex flex-wrap items-center gap-x-10 gap-y-7">
          {brands.map((brand) => (
            <li key={brand.name}>
              <span className="brand group inline-flex items-center gap-3">
                <span className="brand-clip">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`/logos/${brand.file}`}
                    alt={`${brand.name} logo`}
                    className="brand-img"
                  />
                </span>
                <span className="text-[14px] font-medium tracking-[-0.01em] text-fg-muted transition-colors duration-300 group-hover:text-fg">
                  {brand.name}
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
