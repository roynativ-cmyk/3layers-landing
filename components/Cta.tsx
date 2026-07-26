import { ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { Mark } from "@/components/Logo";

const CONTACT = "hello@3layers.ai";

export function Cta() {
  return (
    <section id="demo" className="relative overflow-hidden border-t border-line">
      <div aria-hidden className="pointer-events-none absolute inset-0 glow" />
      <div className="relative mx-auto w-full max-w-[1120px] px-6 py-24 text-center md:px-8 md:py-32">
        <Reveal>
          <Mark className="mx-auto h-8 w-8 text-fg" />
          <h2 className="mx-auto mt-9 max-w-[24ch] text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            See it answer your own transcripts.
          </h2>
          <p className="mx-auto mt-6 max-w-[58ch] text-[15px] leading-relaxed text-fg-muted">
            Send a redacted export of yesterday's conversations. We run them
            through a demo deployment and walk you through it case by case: what
            it got right, what it handed to a human, and what it would have
            learned by tomorrow.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`mailto:${CONTACT}`}>Book a demo</ButtonLink>
            <ButtonLink href={`mailto:${CONTACT}`} variant="ghost">
              {CONTACT}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
