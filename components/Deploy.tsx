import { Section, SectionHead, Bullets } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { RulesFrame } from "@/components/Workspace";

const options = [
  {
    tag: "Quality & control",
    title: "Your business defines the rules",
    body: "Automation should reduce work, not create new risks. You control which sources the AI may use, when it escalates, which topics it must never touch, and what happens when confidence drops. The platform follows those rules and records every decision.",
    bullets: [
      "Approved knowledge sources only",
      "Custom escalation rules and restricted topics",
      "Confidence-based handoff to a human",
      "Conversation monitoring, quality reviews and response fixes",
    ],
  },
  {
    tag: "Reporting",
    title: "See what customers ask and where costs go",
    body: "One report across all three layers: how much the bot resolved, how much our specialists closed out, how much needed a live session with your team — and what each of those actually cost you. Knowledge gaps come with the conversations that exposed them.",
    bullets: [
      "AI resolution rate, escalation rate, human-handled cases",
      "First response, average resolution, agent productivity",
      "Frequent questions and the knowledge gaps behind them",
      "Estimated cost savings and satisfaction trends",
    ],
  },
];


export function Deploy() {
  return (
    <Section id="deploy">
      <SectionHead
        accent="var(--c-learn)"
        eyebrow="Oversight"
        title="AI support with human oversight."
        lead="Deployed in our managed environment or inside your own cloud account — either way the controls, the audit trail and the reporting are yours."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {options.map((option, i) => (
          <Reveal
            key={option.title}
            delay={i * 80}
            className="panel flex flex-col rounded-2xl p-7 md:p-9"
          >
            <span className="inline-flex w-fit items-center rounded-full border border-line px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.2em] text-fg-muted">
              {option.tag}
            </span>
            <h3 className="mt-6 text-[clamp(1.3rem,2.2vw,1.6rem)] font-semibold tracking-[-0.025em]">
              {option.title}
            </h3>
            <p className="mt-4 text-[13.5px] leading-relaxed text-fg-muted">
              {option.body}
            </p>
            <Bullets items={option.bullets} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={110} className="mt-14 md:mt-16">
        <p className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span
            className="font-mono text-[10px] whitespace-nowrap uppercase tracking-[0.2em]"
            style={{ color: "var(--c-learn)" }}
          >
            Your rules
          </span>
          <span className="text-[13px] font-medium tracking-[-0.01em]">
            When the AI must stop, and what it may never touch.
          </span>
        </p>
        <div className="app-zoom-sm">
          <RulesFrame />
        </div>
      </Reveal>
    </Section>
  );
}
