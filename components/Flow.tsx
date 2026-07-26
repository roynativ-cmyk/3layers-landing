import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

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
    k: "We assist your agents",
    v: "Layer 2 gives your existing team summaries, recommended responses and the next best action, in real time.",
  },
  {
    k: "We provide human coverage",
    v: "Layer 3 handles conversations that need extra expertise or capacity — including outside your business hours.",
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
        eyebrow="How 3Layers.ai works"
        title="From setup to launch."
        lead="You do not need to automate your entire support operation on day one. We start with the repetitive conversations that cost the most."
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal
            key={step.k}
            as="li"
            delay={i * 70}
            className="relative bg-ink p-7 md:p-8"
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
                step {i + 1}
              </span>
              <span aria-hidden className="flow-dash h-px flex-1 opacity-60" />
            </div>
            <h3 className="mt-5 text-[15px] font-medium tracking-[-0.01em]">
              {step.k}
            </h3>
            <p className="mt-3 text-[13px] leading-relaxed text-fg-muted">
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
