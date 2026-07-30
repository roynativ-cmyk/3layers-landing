import { ButtonLink } from "@/components/ui";
import { HeroStatus } from "@/components/HeroStatus";
import { Reveal } from "@/components/Reveal";

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
              <p className="font-mono text-[11px] tracking-[0.04em] text-fg-muted sm:inline-flex sm:items-center sm:rounded-full sm:border sm:border-line sm:px-3 sm:py-1.5 sm:text-[10px] sm:uppercase sm:tracking-[0.2em]">
                Smarter support. Lower costs. Human when it matters.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-7 max-w-[24ch] text-[clamp(1.95rem,4.2vw,3.25rem)] font-semibold leading-[1.06] tracking-[-0.035em] text-balance">
                Reduce support costs without reducing service quality
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="mt-7 max-w-[58ch] text-[16px] leading-relaxed text-fg-muted md:text-[17px]">
                3Layers.ai gives your business a complete, fully managed
                customer-support operation: an AI Bot, real human specialists
                on our team, and — for the rare case that truly needs it —
                live coordination with your own team.
              </p>
              <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-fg-muted">
                Handle more conversations, respond faster, and keep your
                customers satisfied without building a large support department.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <ButtonLink href="#demo">Book a free consultation</ButtonLink>
                <ButtonLink href="#how" variant="ghost">
                  See how it works
                </ButtonLink>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-8 max-w-[52ch] text-[12.5px] leading-relaxed text-fg-dim">
                Built for small and medium businesses that need reliable support
                without enterprise-level overhead.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="lg:pl-4">
            <HeroStatus />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
