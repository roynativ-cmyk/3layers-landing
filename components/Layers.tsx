import { Section, SectionHead, Bullets } from "@/components/ui";
import { Reveal } from "@/components/Reveal";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/* --- the right-hand visual of each card ------------------------------------
   Layer one and three get small in-house illustrations built from the same
   parts as the hero (bubbles, chips, tool logos); layer two gets the real
   photo — our specialist — bleeding off the card's right edge behind a
   left-fading mask so it settles into the card instead of sitting on it. */

function BotIllustration() {
  return (
    <div className="xv flex w-full flex-col gap-2.5">
      <p
        className="w-fit max-w-[92%] rounded-2xl rounded-bl-md px-3.5 py-2 text-[12px] leading-relaxed"
        style={{ background: "var(--xv-cust-bg)", color: "var(--xv-cust-fg)" }}
      >
        Where is my order?
      </p>
      <p
        className="ml-auto w-fit max-w-[92%] rounded-2xl rounded-br-md border px-3.5 py-2 text-[12px] leading-relaxed"
        style={{
          background: "var(--xv-ai-bg)",
          color: "var(--xv-ai-fg)",
          borderColor: "var(--xv-ai-border)",
        }}
      >
        On its way — arriving tomorrow. Here&apos;s your tracking link.
      </p>
      <span
        className="ml-auto inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold"
        style={{ background: "var(--c-machine-soft)", color: "var(--c-machine)" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M13 2 3 14h7l-1 8 10-12h-7z" />
        </svg>
        Instant · 24/7
      </span>
    </div>
  );
}

const JOINT_TOOLS = [
  { file: "zoom.png", label: "Zoom", blend: false },
  { file: "meet.jpg", label: "Meet", blend: true },
  { file: "anydesk.png", label: "AnyDesk", blend: false },
];

function JointIllustration() {
  return (
    <div className="xv flex w-full flex-col gap-2.5">
      <div className="light-frame rounded-xl p-2.5">
        <div className="grid grid-cols-2 gap-1.5">
          {[
            { label: "3Layers", accent: "var(--c-pass)", soft: "var(--c-pass-soft)" },
            { label: "Your team", accent: "var(--c-human)", soft: "var(--c-human-soft)" },
          ].map((p) => (
            <div
              key={p.label}
              className="flex flex-col items-center gap-1.5 rounded-lg py-3"
              style={{ background: "var(--xv-surface-2)" }}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ background: p.soft }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="8" r="3.6" />
                  <path d="M4.5 20c0-4.7 3.4-8 7.5-8s7.5 3.3 7.5 8" />
                </svg>
              </span>
              <span className="text-[10px] font-medium" style={{ color: "var(--xv-text-2)" }}>
                {p.label}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1.5 px-0.5">
          <span
            aria-hidden
            className="h-[6px] w-[6px] rounded-full"
            style={{ background: "var(--c-fail)" }}
          />
          <span className="font-mono text-[9.5px] uppercase tracking-[0.12em]" style={{ color: "var(--xv-muted)" }}>
            Live · together in real time
          </span>
        </div>
      </div>
      <div className="flex items-center gap-1.5">
        {JOINT_TOOLS.map((t) => (
          <span
            key={t.label}
            className="inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-medium"
            style={{ background: "var(--c-human-soft)", color: "var(--c-human)" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${BASE}/logos/${t.file}`}
              alt=""
              className="h-[13px] w-[13px] rounded-[3px]"
              style={t.blend ? { mixBlendMode: "multiply" } : undefined}
            />
            {t.label}
          </span>
        ))}
      </div>
    </div>
  );
}

const layers = [
  {
    n: "01",
    accent: "var(--c-machine)",
    soft: "var(--c-machine-soft)",
    visual: "bot",
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
    visual: "photo",
    label: "Our Support Team",
    name: "Resolved by our specialists, not routed to yours",
    claim: "AI drafts the answer; one of our specialists reviews, edits and sends it.",
    body: "When the bot can't finish a request, it doesn't land on your desk — it goes to a trained 3Layers specialist. Our copilot understands the conversation, searches your approved knowledge sources and prepares an accurate response in real time; our specialist checks it, adjusts anything that needs a human touch, and sends it. The ticket is resolved, not just handed off.",
    bullets: [
      "Every ticket the bot can't close is answered and resolved",
      "AI-drafted, human-checked — accurate and fast",
      "No queue lands on your own team",
      "Consistent tone and policy on every reply",
    ],
  },
  {
    n: "03",
    accent: "var(--c-human)",
    soft: "var(--c-human-soft)",
    visual: "joint",
    label: "Joint Escalation",
    name: "The rare case that needs you, too",
    claim: "About 5% of cases need your systems or your call — we get on with your team to close it.",
    body: "Occasionally a case needs something only your business has: access to an internal system, a policy call only you can make, account context we don't have. For that handful of cases, our team sets up a live session with yours — Zoom, Meet or a remote screen-share — and we close it together in real time, instead of lobbing a ticket over the wall.",
    bullets: [
      "Access to a system or account only you control",
      "A judgment call or approval only your business can make",
      "Live, not a ticket — Zoom, Meet or screen-share",
      "The rare exception, not the default path",
    ],
  },
];

export function Layers() {
  return (
    <Section id="layers">
      <SectionHead
        eyebrow="The right support at the right layer"
        title="Three layers, one operation."
        lead="A fully managed operation, not a single bot: layer one resolves the request entirely on its own, layer two is closed out by our own human specialists, and layer three — rare, and only when your systems or your call are genuinely required — brings our team together with yours, live. Every conversation goes to the layer that fits it, monitored in the same console."
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

            {/* the right-hand visual — behind the (relative) text grid */}
            {layer.visual === "photo" ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={`${BASE}/photos/specialist.jpg`}
                alt="A 3Layers support specialist"
                className="pointer-events-none absolute bottom-0 right-0 hidden h-[290px] w-[250px] object-cover object-top lg:block"
                style={{
                  WebkitMaskImage:
                    "radial-gradient(130% 120% at 92% 74%, black 40%, transparent 70%)",
                  maskImage:
                    "radial-gradient(130% 120% at 92% 74%, black 40%, transparent 70%)",
                }}
              />
            ) : (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-y-0 right-10 hidden w-[250px] items-center lg:flex"
              >
                {layer.visual === "bot" ? <BotIllustration /> : <JointIllustration />}
              </div>
            )}

            <div
              style={{ ["--accent" as string]: layer.accent }}
              className="relative grid gap-8 md:grid-cols-[7.5rem_minmax(0,1fr)] md:gap-12 lg:pr-[300px]"
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
          needs judgment is closed out by one of our own human
          specialists — not routed to your desk. Only the rare case that
          genuinely needs your systems or your people brings the two teams
          together, live. You get a complete support operation without
          building one.
        </p>
      </Reveal>
    </Section>
  );
}
