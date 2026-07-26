import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    k: "Customer asks",
    v: "A message arrives from the web widget, your mobile app or WhatsApp. Same agent, same knowledge, same rules on every channel.",
  },
  {
    k: "Grounded answer",
    v: "The agent retrieves from your knowledge base, drafts an answer in the customer's language, and records exactly which passages it used.",
  },
  {
    k: "Verified, then sent",
    v: "A second model checks the draft against the retrieved sources and your rule set. It is repaired, sent — or handed to a human agent with full context when it can't be made safe.",
  },
  {
    k: "Regression + learning",
    v: "Verified turns, escalations and review verdicts feed the suite. Candidate builds replay every labelled case, and proposed fixes ship only once it passes.",
  },
];

export function Flow() {
  return (
    <Section id="how">
      <SectionHead
        eyebrow="How it works"
        title="How a single answer earns its place."
        lead="One conversation, four movements. The last two are the ones most support AI skips."
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
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
        <p className="mt-8 max-w-[60ch] text-[14px] leading-relaxed text-fg-dim">
          Then it starts again — against a knowledge base that knows one more
          thing, and a suite that now contains the case you just fixed.
        </p>
      </Reveal>
    </Section>
  );
}
