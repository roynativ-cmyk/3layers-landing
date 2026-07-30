import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import { CostFrame } from "@/components/Workspace";

const gaps = [
  {
    title: "Repetitive questions eat the team",
    body: "The same handful of questions arrives every day, and experienced agents spend their time on requests that never needed a person.",
  },
  {
    title: "Every peak costs a hire",
    body: "Recruitment, training and extra shifts arrive with every busy period — and response times still slip when volume spikes.",
  },
  {
    title: "Quality drifts as you grow",
    body: "Answers differ between agents, coverage stops outside business hours, and nobody can say which conversations are handled well.",
  },
];


export function Problem() {
  return (
    <Section>
      <SectionHead
        accent="var(--c-fail)"
        eyebrow="The problem"
        title="Customer support becomes expensive before you notice it."
        lead="As your business grows, customer questions grow with it. You hire more agents, train more people, add more shifts and spend more time managing repetitive requests — while customers expect immediate, accurate and personal answers. Traditional support forces a choice between high costs and poor service."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {gaps.map((gap, i) => (
          <Reveal key={gap.title} delay={i * 80} className="bg-panel p-7 md:p-8">
            <span
              className="inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[10px] font-semibold"
              style={{
                background: "var(--c-fail-soft)",
                color: "var(--c-fail)",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-5 text-[17px] font-medium tracking-[-0.01em]">
              {gap.title}
            </h3>
            <p className="mt-3 text-[13.5px] leading-relaxed text-fg-muted">
              {gap.body}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={120} className="mt-14 md:mt-16">
        <p className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span
            className="font-mono text-[10px] whitespace-nowrap uppercase tracking-[0.2em]"
            style={{ color: "var(--c-fail)" }}
          >
            The same month, measured
          </span>
          <span className="text-[13px] font-medium tracking-[-0.01em]">
            One report shows what each conversation actually cost you.
          </span>
        </p>
        <div className="app-zoom-sm">
          <CostFrame />
        </div>
      </Reveal>
    </Section>
  );
}
