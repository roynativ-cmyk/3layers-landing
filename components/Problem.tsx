import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

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
        eyebrow="The problem"
        title="Customer support becomes expensive before you notice it."
        lead="As your business grows, customer questions grow with it. You hire more agents, train more people, add more shifts and spend more time managing repetitive requests — while customers expect immediate, accurate and personal answers. Traditional support forces a choice between high costs and poor service."
      />

      <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
        {gaps.map((gap, i) => (
          <Reveal key={gap.title} delay={i * 80} className="bg-ink p-7 md:p-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
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
    </Section>
  );
}
