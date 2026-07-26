import { Section, SectionHead } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const gaps = [
  {
    title: "Silent wrong answers",
    body: "A confident, fluent, wrong reply looks exactly like a good one in a deflection dashboard. The customer finds out first.",
  },
  {
    title: "Blind changes",
    body: "Prompt, model and knowledge edits ship on hope. Nothing tells you which behaviours you just broke on the way to fixing one.",
  },
  {
    title: "Borrowed intelligence",
    body: "Your conversations improve someone else's product. The judgment your support team builds stays locked in a vendor's console.",
  },
];

export function Problem() {
  return (
    <Section>
      <SectionHead
        eyebrow="The gap"
        title="Deflection rates are easy to claim. Correctness is hard to prove."
        lead="Most support AI is a hosted black box. You get a resolution percentage and a chat log — not the reason an answer was given, not a way to test a change before customers meet it, and not the data to fix what went wrong."
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
