import { Eyebrow, Bullets } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { DashboardFrame } from "@/components/Workspace";

/**
 * The one band on the page where a screen is not politely contained: the
 * dashboard runs past the right edge at its own size, cropped by the band, with
 * the copy held to a narrow column on the left. Below lg it stops bleeding and
 * simply stacks.
 */
export function Showcase() {
  return (
    <section id="overview" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 showcase-band" />

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col gap-12 px-6 py-24 md:px-8 md:py-32 lg:flex-row lg:items-center lg:gap-16">
        <Reveal className="lg:w-[380px] lg:shrink-0">
          <Eyebrow accent="var(--c-learn)">One window</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Every layer, and what it cost, on one screen.
          </h2>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-fg-muted">
            You do not have to trust the automation — you can watch it. Volume,
            where each conversation was resolved, and the cost of resolving it
            there, measured per layer from your own traffic.
          </p>
          <Bullets
            items={[
              "How much the bot resolved, without agent time",
              "How much our specialists closed out, and why",
              "The rare case that needed your own team, live",
            ]}
            dot="var(--c-learn)"
          />
        </Reveal>

        {/* the crop: its own width, overflowing the band on the right */}
        <Reveal delay={120} className="min-w-0 lg:w-[920px] lg:shrink-0">
          <div className="app-zoom-sm">
            <DashboardFrame />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
