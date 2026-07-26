import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const faqs = [
  {
    q: "How is this different from Fin or Zendesk AI?",
    a: "Those are hosted assistants tuned for deflection, and they are good at it. 3layers.ai is built for teams that have to prove correctness: you get the trace behind every answer, a regression suite built from your own conversation history, and the option to run the entire stack in your own AWS account. If nobody at your company ever needs to ask “why did it say that?”, you probably don't need us.",
  },
  {
    q: "What exactly does the verification layer check?",
    a: "Two things on every answer. Groundedness: each claim has to trace back to a passage that was actually retrieved — no filling gaps from model memory. Compliance: the wording has to follow the rules your business defined, from required disclosures and refund policy to what must never be promised and which topics are off limits. An answer that fails is repaired and re-checked; if it still can't pass, it is never sent — the conversation goes to a human agent instead.",
  },
  {
    q: "When does a customer actually get a human?",
    a: "When the turn can't be verified: the sources are too thin, the request touches a sensitive account action, it sits on a policy edge, or the customer asks for a person. The handoff carries the full conversation, the retrieved sources and the reason the agent stopped, so your agent starts in the middle of a prepared case. The point isn't to avoid humans — it's to spend them on the conversations that need judgement.",
  },
  {
    q: "What does the AI-to-AI regression suite actually run?",
    a: "Simulated customers replay scenarios drawn from your real transcripts against a candidate build — same knowledge base, same tools, new prompt or model. An LLM judge scores each transcript against the verdicts your team recorded on real cases, and the run reports per-case pass, fail and diff. Adversarial cases run alongside: hostile tone, mixed languages, ambiguous phrasing, mid-conversation topic switches.",
  },
  {
    q: "Does the automatic learning change answers without approval?",
    a: "No. The third layer proposes — a knowledge-base edit, access to a source the agent never had, a policy rule — and it learns those proposals from the conversations your human agents took over: what they answered, and what the AI was missing when it stopped. Every proposal has to pass the regression gate and a human approval before it reaches production. The agent never edits itself into your live queue.",
  },
  {
    q: "Which models does it use?",
    a: "The ones you approve. Anthropic models on Amazon Bedrock by default, with automatic failover between providers when one degrades. The model is a configuration choice, not the architecture — swapping it is a regression run, not a migration.",
  },
  {
    q: "How long does a deployment take?",
    a: "Days for the managed setup. For your own AWS account, expect a short discovery for knowledge and identity, then the stack goes up as code. Review and regression tooling are live from day one: before the agent answers a single new customer, it has already answered your history.",
  },
  {
    q: "What does it plug into?",
    a: "Zendesk (including Sunshine channels), your web and in-app widgets, iOS and Android, WhatsApp. Handoff carries the full conversation and the agent's reasoning into the human queue, so the first thing your agent reads is context — not “how can I help you today?”.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <SectionHead eyebrow="FAQ" title="Straight answers." />

      <div className="mt-12 border-t border-line">
        {faqs.map((faq, i) => (
          <Reveal key={faq.q} delay={i * 50}>
            <details className="group border-b border-line">
              <summary className="flex cursor-pointer list-none items-start gap-6 py-6 text-[15px] font-medium tracking-[-0.01em] transition-colors hover:text-fg-muted">
                <span className="flex-1">{faq.q}</span>
                <span
                  aria-hidden
                  className="mt-1 shrink-0 text-fg-dim transition-transform duration-300 group-open:rotate-45"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1v12M1 7h12"
                      stroke="currentColor"
                      strokeWidth="1.2"
                    />
                  </svg>
                </span>
              </summary>
              <p className="max-w-[74ch] pb-7 pr-10 text-[13.5px] leading-relaxed text-fg-muted">
                {faq.a}
              </p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
