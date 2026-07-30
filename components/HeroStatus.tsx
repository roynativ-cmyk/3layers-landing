import { PlatformIcon } from "@/components/PlatformIcon";
import { ZendeskLogo } from "@/components/BrandLogos";

/**
 * The hero visual: one status pill, updating, with a scene underneath that
 * changes to match — a real bot conversation (from every channel) in layer
 * one, our specialist closing from your knowledge base in layer two, and the
 * named tools for the rare live session in layer three. The pill and the
 * scene share the exact same three-phase cross-fade (the .status-text
 * keyframes); the beats inside each scene (.hs-*) ride the same clock.
 *
 * Every scene ends on its share of the volume — 75 / 20 / 5 — so one full
 * pass of the loop literally adds up to the caption: 100% of support.
 */

const STATES = [
  {
    key: "bot",
    layer: "Layer 1",
    accent: "var(--c-machine)",
    soft: "var(--c-machine-soft)",
    text: "AI Bot is answering",
  },
  {
    key: "specialist",
    layer: "Layer 2",
    accent: "var(--c-pass)",
    soft: "var(--c-pass-soft)",
    text: "Our specialist steps in",
  },
  {
    key: "joint",
    layer: "Layer 3",
    accent: "var(--c-human)",
    soft: "var(--c-human-soft)",
    text: "Your specialists, when we can’t",
  },
  {
    key: "recap",
    layer: "1 · 2 · 3",
    accent: "var(--fg)",
    soft: "var(--xv-surface-2)",
    text: "Every ticket resolved",
  },
];

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/* the closing beat of every scene: this layer's share of the volume,
   drawn as a small bar that fills to its number */
function StatLine({
  i,
  pct,
  color,
  label,
}: {
  i: number;
  pct: number;
  color: string;
  label: string;
}) {
  return (
    <div
      className="hs-stat mt-1.5 flex items-center gap-2 border-t pt-3"
      data-i={i}
      style={{ borderColor: "var(--xv-border)" }}
    >
      <span
        className="h-[4px] w-16 shrink-0 overflow-hidden rounded-full"
        style={{ background: "var(--xv-surface-2)" }}
      >
        <span
          className="hs-fill block h-full rounded-full"
          data-i={i}
          style={{ background: color, width: `${pct}%` }}
        />
      </span>
      <span className="text-[11px] font-bold tabular-nums" style={{ color }}>
        {pct}%
      </span>
      <span className="text-[10.5px]" style={{ color: "var(--xv-muted)" }}>
        {label}
      </span>
    </div>
  );
}

function CustomerMsg({ i, children }: { i: number; children: React.ReactNode }) {
  return (
    <p
      className="hs-m w-fit max-w-[82%] rounded-2xl rounded-bl-md px-3.5 py-2 text-[12.5px] leading-relaxed"
      data-i={i}
      style={{ background: "var(--xv-cust-bg)", color: "var(--xv-cust-fg)" }}
    >
      {children}
    </p>
  );
}

function BotMsg({ i, children }: { i: number; children: React.ReactNode }) {
  return (
    <p
      className="hs-m col-start-1 row-start-1 ml-auto h-fit w-fit max-w-[88%] rounded-2xl rounded-br-md border px-3.5 py-2 text-[12.5px] leading-relaxed"
      data-i={i}
      style={{
        background: "var(--xv-ai-bg)",
        color: "var(--xv-ai-fg)",
        borderColor: "var(--xv-ai-border)",
      }}
    >
      {children}
    </p>
  );
}

/* Both bot answers get the same tell: dots first, then the reply lands in
   the same spot. The two instances run on their own beats (data-i). */
function TypingDots({ i }: { i: number }) {
  return (
    <span
      className="hs-typing col-start-1 row-start-1 ml-auto flex h-fit w-fit items-center gap-1 rounded-full border px-2.5 py-2"
      data-i={i}
      style={{ background: "var(--xv-surface-2)", borderColor: "var(--xv-border)" }}
      aria-hidden
    >
      <i />
      <i style={{ animationDelay: "0.15s" }} />
      <i style={{ animationDelay: "0.3s" }} />
    </span>
  );
}

function ChatScene() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1.5" style={{ color: "var(--xv-faint)" }}>
          <PlatformIcon platform="web" size={12} />
          <PlatformIcon platform="ios" size={12} />
          <PlatformIcon platform="android" size={12} />
          <ZendeskLogo className="h-[10px] w-auto" />
        </span>
        <span className="text-[10px]" style={{ color: "var(--xv-faint)" }}>
          every channel, one bot
        </span>
      </div>

      <CustomerMsg i={1}>Can I use it on my router?</CustomerMsg>

      {/* each answer shares a grid cell with its typing dots — the dots fade
          out exactly where the reply fades in, so nothing jumps */}
      <div className="grid">
        <TypingDots i={1} />
        <BotMsg i={2}>
          Yes — your Pro plan covers routers. I&apos;ve just sent the 3-step
          setup guide for your exact model.
        </BotMsg>
      </div>

      <CustomerMsg i={3}>
        Great — and can you pause my plan while I travel?
      </CustomerMsg>

      <div className="grid">
        <TypingDots i={2} />
        <p
          className="hs-m col-start-1 row-start-1 ml-auto h-fit w-fit max-w-[88%] rounded-2xl rounded-br-md border px-3.5 py-2 text-[12.5px] leading-relaxed"
          data-i={4}
          style={{
            background: "var(--xv-ai-bg)",
            color: "var(--xv-ai-fg)",
            borderColor: "var(--xv-ai-border)",
          }}
        >
          Done — paused until Sep 1, and billing stops with it. Safe travels
          ✈️
        </p>
      </div>

      <StatLine
        i={1}
        pct={75}
        color="var(--c-machine)"
        label="of tickets resolved by the bot, instantly"
      />
    </div>
  );
}

function SpecialistScene() {
  return (
    <div className="flex flex-col gap-3">
      <span
        className="hs-cust2 font-mono text-[10px] uppercase tracking-[0.14em]"
        style={{ color: "var(--xv-faint)" }}
      >
        ↗ escalated by the bot · full context attached
      </span>
      <p
        className="hs-cust2 w-fit max-w-[85%] rounded-2xl rounded-bl-md px-3.5 py-2 text-[12.5px] leading-relaxed"
        style={{ background: "var(--xv-cust-bg)", color: "var(--xv-cust-fg)" }}
      >
        I was charged twice this month — can you fix it?
      </p>
      <span
        className="hs-draft flex w-fit items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em]"
        style={{ color: "var(--xv-faint)" }}
      >
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        </svg>
        AI drafted · specialist reviewing
      </span>

      <div className="flex items-start gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${BASE}/photos/specialist-avatar.jpg`}
          alt=""
          className="hs-draft h-10 w-10 shrink-0 rounded-full object-cover"
          style={{ border: "2px solid var(--c-pass-soft)" }}
        />
        <div
          className="hs-draft rounded-xl border px-3.5 py-2"
          style={{ borderColor: "var(--xv-border)", background: "var(--panel)" }}
        >
          <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--xv-text)" }}>
            I&apos;ve refunded the duplicate charge — it lands back on your
            card within 5 days, and the receipt is already in your inbox.
          </p>
          <span
            className="hs-badge mt-1.5 inline-block rounded-full px-2 py-0.5 text-[10px] font-medium"
            style={{ background: "var(--c-pass-soft)", color: "var(--c-pass)" }}
          >
            ✓ Sent by our specialist — a real person
          </span>
        </div>
      </div>

      <span
        className="hs-kb flex items-center gap-1.5 text-[10.5px]"
        style={{ color: "var(--xv-muted)" }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a1.6 1.6 0 0 0-1.6-1.5H5.5A1.5 1.5 0 0 1 4 16zM20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a1.6 1.6 0 0 1 1.6-1.5h4.9A1.5 1.5 0 0 0 20 16z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
        answered from your knowledge base · Refund policy §4
      </span>

      <StatLine
        i={2}
        pct={20}
        color="var(--c-pass)"
        label="resolved by our support team — never your queue"
      />
    </div>
  );
}

/* Real app icons (public/logos). Meet's source is a JPEG on white, so it
   blends with multiply to sit cleanly on the soft chip background. */
const JOINT_TOOLS = [
  { file: "zoom.png", label: "Zoom", blend: false },
  { file: "meet.jpg", label: "Meet", blend: true },
  { file: "anydesk.png", label: "AnyDesk", blend: false },
];

/* the two seats on the mini call: ours, then yours joining right after */
const CALL_TILES = [
  { label: "3Layers", accent: "var(--c-pass)", soft: "var(--c-pass-soft)" },
  { label: "Your team", accent: "var(--c-human)", soft: "var(--c-human-soft)" },
];

function JointScene() {
  return (
    <div className="flex flex-col gap-3">
      <p className="hs-l3t text-[12.5px] leading-relaxed" style={{ color: "var(--xv-text)" }}>
        This needs your billing system — scheduling a live session with your
        team.
      </p>

      {/* the call assembles: the window, our tile, your tile joins, LIVE */}
      <div
        className="hs-call rounded-xl border p-2.5"
        style={{ borderColor: "var(--xv-border)", background: "var(--panel)" }}
      >
        <div className="grid grid-cols-2 gap-1.5">
          {CALL_TILES.map((p, i) => (
            <div
              key={p.label}
              className="hs-tile flex flex-col items-center gap-1.5 rounded-lg py-3"
              style={{
                background: "var(--xv-surface-2)",
                animationDelay: `${i * 0.7}s`,
              }}
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
        <div className="hs-live mt-2 flex items-center gap-1.5 px-0.5">
          <span
            aria-hidden
            className="h-[6px] w-[6px] rounded-full"
            style={{ background: "var(--c-fail)" }}
          />
          <span
            className="font-mono text-[9.5px] uppercase tracking-[0.12em]"
            style={{ color: "var(--xv-muted)" }}
          >
            Live · screen-share · both teams on
          </span>
        </div>
      </div>

      <div className="flex items-center gap-1.5">
        {JOINT_TOOLS.map((t, i) => (
          <span
            key={t.label}
            className="hs-chip inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-medium"
            style={{
              background: "var(--c-human-soft)",
              color: "var(--c-human)",
              animationDelay: `${i * 0.35}s`,
            }}
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

      <StatLine
        i={3}
        pct={5}
        color="var(--c-human)"
        label="solved live, together with your experts"
      />
    </div>
  );
}

/* the recap: the three layers check off one by one, then the stacked bar
   adds their shares up to the one number that matters */
const RECAP_ROWS = [
  {
    n: "1",
    accent: "var(--c-machine)",
    soft: "var(--c-machine-soft)",
    label: "AI Bot",
    detail: "resolved instantly, day and night",
    share: "75%",
  },
  {
    n: "2",
    accent: "var(--c-pass)",
    soft: "var(--c-pass-soft)",
    label: "Our specialists",
    detail: "closed by our team, never your queue",
    share: "20%",
  },
  {
    n: "3",
    accent: "var(--c-human)",
    soft: "var(--c-human-soft)",
    label: "Your specialists",
    detail: "the rare case, live together",
    share: "5%",
  },
];

function RecapScene() {
  return (
    <div className="flex flex-col gap-3">
      <span
        className="hs-sumh font-mono text-[10px] uppercase tracking-[0.14em]"
        style={{ color: "var(--xv-faint)" }}
      >
        One cycle · every ticket accounted for
      </span>

      {RECAP_ROWS.map((r, i) => (
        <div key={r.n} className="hs-sum flex items-center gap-3" data-i={i + 1}>
          <span
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[12.5px] font-bold"
            style={{ background: r.soft, color: r.accent }}
          >
            {r.n}
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="text-[13px] font-semibold leading-tight" style={{ color: "var(--xv-text)" }}>
              {r.label}
              <span
                className="ml-2 text-[11.5px] font-bold tabular-nums"
                style={{ color: r.accent }}
              >
                {r.share}
              </span>
            </span>
            <span className="text-[10.5px] leading-snug" style={{ color: "var(--xv-muted)" }}>
              {r.detail}
            </span>
          </span>
          <span
            className="hs-chk ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
            data-i={i + 1}
            style={{ background: "var(--c-pass-soft)" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--c-pass)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4.5 12.5l5 5L19.5 7" />
            </svg>
          </span>
        </div>
      ))}

      <div
        className="hs-total mt-1.5 flex items-center gap-2.5 border-t pt-3.5"
        style={{ borderColor: "var(--xv-border)" }}
      >
        <span
          className="h-[6px] w-24 shrink-0 overflow-hidden rounded-full"
          style={{ background: "var(--xv-surface-2)" }}
        >
          {/* one bar, three stripes — 75 / 20 / 5 */}
          <span
            className="hs-fillT block h-full w-full rounded-full"
            style={{
              background:
                "linear-gradient(90deg, var(--c-machine) 0 75%, var(--c-pass) 75% 95%, var(--c-human) 95% 100%)",
            }}
          />
        </span>
        <span className="text-[14px] font-bold tabular-nums" style={{ color: "var(--xv-text)" }}>
          100%
        </span>
        <span className="text-[11px]" style={{ color: "var(--xv-muted)" }}>
          of tickets resolved — one operation
        </span>
      </div>
    </div>
  );
}

const SCENES = [ChatScene, SpecialistScene, JointScene, RecapScene];

export function HeroStatus() {
  return (
    <div className="flex flex-col items-center gap-6" style={{ minHeight: 320 }} aria-hidden>
      {/* each state carries its own pill, sized to its own words — the pill
          the viewer sees always hugs its text, no dead width */}
      <div className="grid">
        {STATES.map((s, i) => (
          <span
            key={s.key}
            className="status-text light-frame xv col-start-1 row-start-1 inline-flex h-fit w-fit items-center gap-2 justify-self-center whitespace-nowrap rounded-full px-4 py-2.5"
            data-i={i + 1}
            style={{ background: "var(--panel)" }}
          >
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.05em]"
              style={{ background: s.soft, color: s.accent }}
            >
              <span
                className="h-[6px] w-[6px] rounded-full"
                style={{ background: s.accent }}
              />
              {s.layer}
            </span>
            <span
              className="text-[14px] font-semibold"
              style={{ color: "var(--xv-text)" }}
            >
              {s.text}
            </span>
          </span>
        ))}
      </div>

      {/* each scene carries its own card, hugging its own height (h-fit) and
          anchored to the top of the stack — every card opens at the same
          fixed distance under the pill, and a short scene simply ends
          sooner instead of floating mid-air */}
      <div className="xv grid w-full max-w-[440px]">
        {SCENES.map((Scene, i) => (
          <div
            key={i}
            className="status-text light-frame col-start-1 row-start-1 h-fit self-start rounded-2xl p-5"
            data-i={i + 1}
          >
            <Scene />
          </div>
        ))}
      </div>

      <p
        className="text-[11px] font-medium uppercase tracking-[0.12em]"
        style={{ color: "var(--fg-dim)" }}
      >
        The cycle for 100% support
      </p>
    </div>
  );
}
