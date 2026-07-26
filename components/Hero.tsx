import { ButtonLink } from "@/components/ui";
import { LoopVisual } from "@/components/LoopVisual";
import { Reveal } from "@/components/Reveal";

const stats = [
  { value: "3", label: "layers between the model and your customer" },
  { value: "0", label: "releases that ship without a regression run" },
  { value: "100%", label: "of answers verified before they are sent" },
  { value: "1", label: "AWS account involved — yours" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 glow" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[620px] bg-grid fade-b"
      />

      <div className="relative mx-auto w-full max-w-[1120px] px-6 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-16">
          <div>
            <Reveal>
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-muted">
                Support AI · three layers of proof
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-7 max-w-[17ch] text-[clamp(2.25rem,4.6vw,3.6rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance">
                Support AI that proves it works.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-[56ch] text-[16px] leading-relaxed text-fg-muted md:text-[17px]">
                It answers from your own knowledge base, verifies every answer
                against your sources and your rules, and regression-tests every
                change before it ships. A human agent is pulled in only when a
                conversation genuinely needs one.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="#demo">Book a demo</ButtonLink>
                <ButtonLink href="#layers" variant="ghost">
                  See the three layers
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 font-mono text-[10.5px] uppercase leading-relaxed tracking-[0.14em] text-fg-dim">
                Your AWS account · Your VPC · Any Bedrock or Anthropic model
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pl-4">
            <LoopVisual />
          </Reveal>
        </div>

        <Reveal delay={80}>
          <dl className="mt-20 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10 md:mt-24 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="text-[clamp(2rem,3.4vw,2.75rem)] font-semibold leading-none tracking-[-0.04em]">
                  {stat.value}
                </dt>
                <dd className="mt-3 max-w-[24ch] text-[12.5px] leading-relaxed text-fg-dim">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
