import { Section, SectionHead, Bullets } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const layers = [
  {
    n: "01",
    accent: "var(--c-machine)",
    name: "Verification on every answer",
    claim:
      "Each answer is checked against your sources and your rules before the customer reads it.",
    body: "A second model reviews every draft turn: is each claim traceable to a retrieved passage, and does the wording follow the rules your business defined — required disclosures, refund and billing policy, what must never be promised, what must never be said, which topics are off limits? Answers that fail are repaired or stopped. When the turn can't be made safe — thin sources, a sensitive account action, a policy edge, or a customer who asks for a person — it goes to a human agent with the full context attached. That is the only time a human is pulled in, and it is why the ones that arrive are worth their time.",
    bullets: [
      "Groundedness check: every claim tied to a retrieved source",
      "Your rule set: disclosures, policy wording, hard prohibitions",
      "Failing answers repaired — or stopped before they are sent",
      "Escalation to a human only when the turn genuinely needs one",
    ],
  },
  {
    n: "02",
    accent: "var(--c-pass)",
    name: "AI-to-AI regression testing",
    claim: "Every change is proven against your real history before release.",
    body: "Before a prompt, model or knowledge change goes live, a fleet of simulated customers replays scenarios drawn from your actual transcripts against the candidate build. An LLM judge scores each conversation against the verdicts your team recorded on real cases, and the run reports per-case pass, fail and diff — not one aggregate number you have to trust. Adversarial cases ride along in the same sweep: hostile tone, mixed languages, deliberate ambiguity, mid-conversation topic switches.",
    bullets: [
      "Simulated customers replay your own conversation history",
      "Judge calibrated on your team's labels, not a generic rubric",
      "Per-case diffs: exactly which behaviours moved, in both directions",
      "Runs as a release gate — a red suite blocks the deploy",
    ],
  },
  {
    n: "03",
    accent: "var(--c-learn)",
    name: "ML that learns automatically",
    claim: "Verified failures turn themselves into the next improvement.",
    body: "The third layer reads every conversation a human had to take over and compares what your agent answered with what the AI had available. That gap is the lesson: a missing knowledge-base article, a source the agent was never given access to, a retrieval blind spot, a rule it keeps tripping over. It writes the concrete fix. Each proposal goes straight back through the regression layer and waits for a human approval. Your people approve improvements instead of hand-authoring them, and the same failure stops coming back.",
    bullets: [
      "Mines escalated chats: what the human answered, what the AI lacked",
      "Proposes the data, the extra source or the rule that closes the gap",
      "Every proposal regression-gated and human-approved",
      "A quality curve that moves weekly instead of per quarter",
    ],
  },
];

export function Layers() {
  return (
    <Section id="layers">
      <SectionHead
        eyebrow="The system"
        title="Three layers, one loop."
        lead="Each layer catches what the layer above it cannot. Together they turn support automation from a bet you place into an engineering process you can run."
      />

      <div className="mt-14 space-y-4">
        {layers.map((layer, i) => (
          <Reveal
            key={layer.n}
            delay={i * 70}
            className="panel tint relative overflow-hidden rounded-2xl p-7 md:p-10"
          >
            <div
              style={{ ["--accent" as string]: layer.accent }}
              className="relative grid gap-8 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-12"
            >
              <div>
                <div
                  className="font-mono text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-none tracking-[-0.04em]"
                  style={{ color: layer.accent, opacity: 0.85 }}
                >
                  {layer.n}
                </div>
                <div
                  aria-hidden
                  className="mt-4 hidden h-px w-10 md:block"
                  style={{
                    background: `linear-gradient(90deg, ${layer.accent}, transparent)`,
                  }}
                />
              </div>

              <div>
                <h3 className="text-[clamp(1.4rem,2.6vw,1.9rem)] font-semibold leading-tight tracking-[-0.025em]">
                  {layer.name}
                </h3>
                <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-fg">
                  {layer.claim}
                </p>
                <p className="mt-4 max-w-[68ch] text-[13.5px] leading-relaxed text-fg-muted">
                  {layer.body}
                </p>

                <div className="mt-2 grid gap-x-10 sm:grid-cols-2">
                  <Bullets items={layer.bullets.slice(0, 2)} dot={layer.accent} />
                  <Bullets items={layer.bullets.slice(2)} dot={layer.accent} />
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
