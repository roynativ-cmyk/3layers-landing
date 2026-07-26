import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const steps = [
  {
    k: "Answered, then verified",
    v: "A message arrives from the web, your app or WhatsApp. The agent retrieves from your knowledge base and drafts a reply in the customer's language — then a second model checks it against those sources and your rules before it is sent, or hands it to a person with the full context.",
  },
  {
    k: "Proven before release",
    v: "Every verified turn, escalation and review verdict becomes a test case. Each candidate prompt, model or knowledge change replays the whole set, case by case, and a failed run blocks the deploy.",
  },
  {
    k: "Improved, then re-proven",
    v: "Failures that survive review turn into concrete fixes — a knowledge-base edit, a retrieval change, a rule. Each one has to pass the suite and a human before it reaches production.",
  },
];

export function Flow() {
  return (
    <Section id="how">
      <SectionHead
        eyebrow="How it works"
        title="How a single answer earns its place."
        lead="Three movements per conversation. The last two are the ones most support AI skips."
      />

      <ol className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
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
