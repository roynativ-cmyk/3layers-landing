import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

/* the palette walks down the six steps, so no two neighbours read the same */
const HUES = [
  "var(--c-machine)",
  "var(--c-machine)",
  "var(--c-pass)",
  "var(--c-pass)",
  "var(--c-human)",
  "var(--c-learn)",
];

const steps = [
  {
    k: "We learn your business",
    v: "We review your products, services, support channels, customer questions, policies and the support content you already have.",
  },
  {
    k: "We build your support knowledge",
    v: "Your approved documentation, help center, workflows and escalation rules are connected to the platform — nothing else is used.",
  },
  {
    k: "We launch the AI Bot",
    v: "Layer 1 starts answering common questions and collecting the details an agent would otherwise have to ask for.",
  },
  {
    k: "We staff layer 2 with our team",
    v: "Our own human specialists close out what the bot can't — summaries, drafts and the next best action, resolved end to end.",
  },
  {
    k: "We define the rare exception",
    v: "Layer 3 is rare, by design. Together we define what genuinely needs your systems or your call, and how that live session runs — Zoom, Meet or a screen-share.",
  },
  {
    k: "We continuously improve",
    v: "We review conversations, identify gaps, improve answers and expand automation as the results come in.",
  },
];


export function Flow() {
  return (
    <Section id="how">
      <SectionHead
        accent="var(--c-pass)"
        eyebrow="How 3Layers.ai works"
        title="From setup to launch."
        lead="You do not need to automate your entire support operation on day one. We start with the repetitive conversations that cost the most."
      />

      <ol className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {steps.map((step, i) => (
          <Reveal key={step.k} as="li" delay={i * 70} className="relative">
            <div className="flex items-center gap-3">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: HUES[i] }}
              >
                step {i + 1}
              </span>
              <span aria-hidden className="flow-dash h-px flex-1 opacity-60" />
            </div>
            <h3 className="mt-5 text-[16px] font-medium tracking-[-0.015em]">
              {step.k}
            </h3>
            <p className="mt-3 max-w-[40ch] text-[13.5px] leading-relaxed text-fg-muted">
              {step.v}
            </p>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={120}>
        <p className="mt-8 max-w-[64ch] text-[14px] leading-relaxed text-fg-dim">
          A limited pilot normally launches before a full deployment — one
          channel, or one high-volume use case, with the savings measured from
          day one.
        </p>
      </Reveal>
    </Section>
  );
}
