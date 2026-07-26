/**
 * Trusted by — a continuously moving logo wall. Marks are grey on the black
 * surface and return to full colour on hover (which also pauses the track).
 * The SVGs in public/logos are cropped and clipped to their badge, so they
 * scale cleanly at any size.
 */

const brands = [
  { name: "ExpressVPN", file: "Express-d.svg" },
  { name: "Private Internet Access", file: "pia-brand.svg" },
  { name: "CyberGhost", file: "cg-brand.svg" },
  { name: "Intego", file: "intego-brand.svg" },
];

function Item({ name, file }: { name: string; file: string }) {
  return (
    <span className="brand group flex shrink-0 items-center gap-4 px-6 sm:gap-5 sm:px-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${file}`}
        alt={`${name} logo`}
        width={72}
        height={72}
        className="brand-img h-14 w-14 shrink-0 sm:h-[72px] sm:w-[72px]"
      />
      <span className="text-[13px] font-medium whitespace-nowrap tracking-[-0.01em] text-fg-muted transition-colors duration-300 group-hover:text-fg sm:text-[14px]">
        {name}
      </span>
    </span>
  );
}

export function TrustedBy() {
  // three copies so translateX(-33.33%) loops seamlessly
  const track = [...brands, ...brands, ...brands];

  return (
    <div className="border-t border-line">
      <div className="py-12 md:py-16">
        <p className="mx-auto w-full max-w-[1120px] px-6 font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim md:px-8">
          Trusted by consumer-security brands
        </p>

        <div className="marquee mt-8">
          <div className="marquee-track" aria-hidden>
            {track.map((brand, i) => (
              <Item key={`${brand.name}-${i}`} {...brand} />
            ))}
          </div>
        </div>

        {/* the same names, once, for assistive tech and no-motion contexts */}
        <p className="sr-only">
          {brands.map((brand) => brand.name).join(", ")}
        </p>

        <p className="mx-auto mt-8 w-full max-w-[1120px] px-6 text-[12.5px] leading-relaxed text-fg-dim md:px-8">
          Built and hardened on live consumer-support traffic — millions of
          subscribers, every channel, in dozens of languages.
        </p>
      </div>
    </div>
  );
}
