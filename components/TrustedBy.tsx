/**
 * Trusted by — a continuously moving logo wall.
 *
 * Monochrome wordmarks from each brand's own kit (grey #9b9b9c, so they sit on
 * the black surface as-is). Each one brightens on hover, which also pauses the
 * track. Heights are set per mark so they carry the same optical weight rather
 * than the same pixel height.
 */

type Brand = { name: string; file: string; h: number };

const brands: Brand[] = [
  { name: "ExpressVPN", file: "Express-mono.svg", h: 24 },
  { name: "CyberGhost", file: "cyber-gohst.svg", h: 26 },
  { name: "Private Internet Access", file: "PIA-grey.png", h: 26 },
  { name: "Intego", file: "intego.svg", h: 26 },
  { name: "Webselense", file: "webselence-1.svg", h: 23 },
  { name: "Holiday.com", file: "holidaycom-mono-2.png", h: 24 },
];

function Item({ name, file, h }: Brand) {
  return (
    <span className="brand flex shrink-0 items-center px-7 sm:px-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/${file}`}
        alt={`${name} logo`}
        className="brand-img w-auto"
        style={{ height: `${h}px` }}
      />
    </span>
  );
}

export function TrustedBy() {
  // three copies so translateX(-33.33%) loops seamlessly
  const track = [...brands, ...brands, ...brands];

  return (
    <div className="border-t border-line">
      <div className="py-12 md:py-16">
        <p className="mx-auto w-full max-w-[1120px] px-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim md:px-8">
          Trusted by consumer brands with millions of subscribers
        </p>

        <div className="marquee mt-9">
          <div className="marquee-track items-center" aria-hidden>
            {track.map((brand, i) => (
              <Item key={`${brand.name}-${i}`} {...brand} />
            ))}
          </div>
        </div>

        {/* the same names, once, for assistive tech */}
        <p className="sr-only">{brands.map((b) => b.name).join(", ")}</p>

      </div>
    </div>
  );
}
