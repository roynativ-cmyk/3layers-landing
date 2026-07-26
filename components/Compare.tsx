import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const rows = [
  {
    q: "Can you see why an answer was given?",
    ours: "Full trace per turn: retrieved sources, tool calls, decision",
    theirs: "The chat log",
  },
  {
    q: "Is an answer checked before it is sent?",
    ours: "Groundedness and policy check on every turn, by a second model",
    theirs: "The model's own confidence, after the fact",
  },
  {
    q: "When does a human get involved?",
    ours: "Only when a turn can't be verified — with full context attached",
    theirs: "On a keyword, a sentiment flag, or a dead end",
  },
  {
    q: "What happens before a change ships?",
    ours: "AI-to-AI regression over your real history, per-case diffs, CI gate",
    theirs: "Ship it and watch the dashboard",
  },
  {
    q: "What happens to the chats a human had to take over?",
    ours: "We read what your agent answered, find what the AI was missing, and propose the data or source that closes it",
    theirs: "They leave the funnel — the AI never learns from them",
  },
  {
    q: "How does it get better?",
    ours: "Your verified failures become proposed fixes, gated and approved",
    theirs: "The vendor's roadmap",
  },
  {
    q: "Where does your data live?",
    ours: "Your AWS account, your VPC, your retention rules",
    theirs: "The vendor's cloud",
  },
  {
    q: "How are you charged?",
    ours: "Per resolved ticket — and every resolution is auditable",
    theirs: "Per resolution, on the vendor's own definition of resolved",
  },
];

export function Compare() {
  return (
    <Section id="compare">
      <SectionHead
        eyebrow="Comparison"
        title="The questions to ask any support AI."
        lead="If you are evaluating Fin, Zendesk AI or any hosted assistant, these are the answers that decide whether you can defend it in production. Ours are in the middle column."
      />

      <Reveal delay={80} className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line-strong">
              <th className="py-4 pr-6 font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-fg-dim">
                The question
              </th>
              <th className="py-4 pr-6 text-[13px] font-medium tracking-[-0.01em]">
                3layers.ai
              </th>
              <th className="py-4 font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-fg-dim">
                Typical hosted assistant
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.q} className="border-b border-line align-top">
                <td className="py-5 pr-6 text-[13.5px] leading-relaxed text-fg">
                  {row.q}
                </td>
                <td className="py-5 pr-6 text-[13.5px] leading-relaxed text-fg-muted">
                  {row.ours}
                </td>
                <td className="py-5 text-[13.5px] leading-relaxed text-fg-dim">
                  {row.theirs}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-6 max-w-[70ch] text-[12.5px] leading-relaxed text-fg-dim">
          Hosted assistants are good at deflection and fast to switch on. The
          right-hand column describes how they are typically packaged, not a
          claim about any single product — check it yourself against whichever
          vendor you are comparing.
        </p>
      </Reveal>
    </Section>
  );
}
