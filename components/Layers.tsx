import { Section, SectionHead, Bullets } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const layers = [
  {
    n: "01",
    accent: "var(--c-machine)",
    soft: "var(--c-machine-soft)",
    label: "AI Bot",
    name: "Instant answers at the lowest cost",
    claim: "100% AI, start to finish — resolved without an agent ever touching it.",
    body: "The AI Bot handles repetitive and common customer requests instantly, 24 hours a day. It learns from your website, help center, product information, internal procedures and approved support content — and it answers only from what you approved.",
    bullets: [
      "Answers frequent questions and guides common processes",
      "Handles basic troubleshooting and service information",
      "Collects the details an agent would have to ask for",
      "Answers outside business hours, consistently every time",
    ],
  },
  {
    n: "02",
    accent: "var(--c-pass)",
    soft: "var(--c-pass-soft)",
    label: "AI Agent Assist",
    name: "Make every agent faster",
    claim: "AI drafts the answer in real time; your agent reviews, edits and sends it.",
    body: "When a human agent is needed, the AI copilot works alongside your team. It understands the conversation, searches your approved knowledge sources and recommends an accurate response in real time — with the summary and the next best action already prepared.",
    bullets: [
      "Suggests complete responses and summarises long threads",
      "Finds the relevant procedure or product detail instantly",
      "Recommends the next action and flags missing information",
      "New agents perform like experienced ones, sooner",
    ],
  },
  {
    n: "03",
    accent: "var(--c-human)",
    soft: "var(--c-human-soft)",
    label: "Your Human Experts",
    name: "Escalation only when it is real",
    claim: "A person from your team — brought in only when the case genuinely needs one.",
    body: "Some conversations need judgment, empathy, negotiation or deeper technical understanding. The platform recognises those cases — by confidence, topic, sentiment and your own rules — and escalates them to your support team, who arrive with the full history and a prepared summary instead of a cold ticket. The people in this layer are yours; what we provide is the intelligence that decides when they are genuinely needed.",
    bullets: [
      "Plan changes, upgrades and renewals",
      "Billing and account questions, sensitive situations",
      "Deeper technical troubleshooting",
      "Anything that needs a judgment call or an approval",
    ],
  },
];

export function Layers() {
  return (
    <Section id="layers">
      <SectionHead
        eyebrow="The right support at the right layer"
        title="Three layers, one operation."
        lead="A hybrid model, not a single bot: layer one resolves the request entirely on its own, layer two pairs AI with your agent, and layer three brings in a person only when the case genuinely needs one. Every conversation goes to the layer that fits it — monitored in the same console, so you can see what it cost and whether it was right."
      />

      <div className="mt-14 space-y-4">
        {layers.map((layer, i) => (
          <Reveal
            key={layer.n}
            delay={i * 70}
            className="panel tint relative overflow-hidden rounded-2xl p-7 md:p-10"
          >
            {/* the layer's hue, capping the card */}
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{
                background: `linear-gradient(90deg, ${layer.accent}, color-mix(in srgb, ${layer.accent} 12%, transparent))`,
              }}
            />
            <div
              style={{ ["--accent" as string]: layer.accent }}
              className="relative grid gap-8 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-12"
            >
              <div>
                <div
                  className="font-mono text-[clamp(2.5rem,5vw,3.75rem)] font-medium leading-none tracking-[-0.04em]"
                  style={{ color: layer.accent }}
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
                <span
                  className="inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.01em]"
                  style={{ background: layer.soft, color: layer.accent }}
                >
                  {layer.label}
                </span>
                <h3 className="mt-4 text-[clamp(1.3rem,2.4vw,1.8rem)] font-semibold leading-tight tracking-[-0.025em]">
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

      <Reveal delay={120}>
        <p className="mt-10 max-w-[70ch] text-[14px] leading-relaxed text-fg-muted">
          A simple question is resolved instantly by the bot. A question that
          needs account context is prepared by AI and completed by one of your
          agents. A complex or sensitive issue is escalated to your specialists,
          in context. You pay human-level cost only where your human expertise is
          actually required.
        </p>
      </Reveal>
    </Section>
  );
}
