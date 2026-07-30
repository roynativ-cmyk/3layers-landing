import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const rows = [
  {
    q: "A simple, frequent question",
    ours: "Resolved instantly by the AI Bot, from your approved content",
    theirs: "An agent types the same answer again",
  },
  {
    q: "A question that needs account context",
    ours: "Prepared by AI — summary, draft, next action — completed by an agent",
    theirs: "An agent searches, reads, and writes from scratch",
  },
  {
    q: "A complex or sensitive issue",
    ours: "Escalated to your specialist with the full history and the reason it stopped",
    theirs: "Escalated cold, and the customer repeats themselves",
  },
  {
    q: "Outside business hours",
    ours: "Layer 1 keeps answering, and anything that needs a person is ready for your team",
    theirs: "A queue that waits for the morning",
  },
  {
    q: "A busy period or a launch",
    ours: "Automation absorbs the spike — your team keeps only what needs them",
    theirs: "Overtime, temps, or slower replies",
  },
  {
    q: "What you can prove afterwards",
    ours: "Every answer with its sources, cost and quality review",
    theirs: "A chat log and a monthly gut feeling",
  },
];


export function Compare() {
  return (
    <Section id="compare">
      <SectionHead
        accent="var(--c-human)"
        eyebrow="Cost"
        title="Stop paying human-level costs for bot-level questions."
        lead="Many teams use expensive human capacity to answer the same basic questions over and over. Each request moves to the most cost-efficient layer that can actually resolve it."
      />

      <Reveal delay={80} className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="border-b border-line-strong">
              <th className="py-4 pr-6 font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-fg-dim">
                The conversation
              </th>
              <th className="rounded-t-xl bg-pass-soft px-5 py-4 text-[13px] font-semibold tracking-[-0.01em] text-pass">
                3layers.ai
              </th>
              <th className="py-4 pl-5 font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-fg-dim">
                A human-only support team
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.q}
                className="border-b border-line align-top transition-colors duration-200 hover:bg-fg/[0.03]"
              >
                <td className="py-5 pr-6 text-[13.5px] font-medium leading-relaxed text-fg">
                  {row.q}
                </td>
                <td
                  className={`bg-pass-soft/55 px-5 py-5 text-[13.5px] leading-relaxed text-fg ${
                    i === rows.length - 1 ? "rounded-b-xl" : ""
                  }`}
                >
                  <span className="flex gap-2.5">
                    <span aria-hidden className="mt-[3px] shrink-0 text-pass">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M4 12.5l5 5L20 6.5"
                          stroke="currentColor"
                          strokeWidth="2.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    {row.ours}
                  </span>
                </td>
                <td className="py-5 pl-5 text-[13.5px] leading-relaxed text-fg-dim">
                  <span className="flex gap-2.5">
                    <span
                      aria-hidden
                      className="mt-[9px] h-px w-3 shrink-0"
                      style={{ background: "var(--line-strong)" }}
                    />
                    {row.theirs}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-6 max-w-[70ch] text-[12.5px] leading-relaxed text-fg-dim">
          You reduce cost by using human expertise only where human expertise is
          actually required — not by removing it. Share your volume, staffing
          cost and operating hours and we will prepare a practical savings
          estimate.
        </p>
      </Reveal>
    </Section>
  );
}
