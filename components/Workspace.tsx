import { Reveal } from "@/components/Reveal";
import { Mark } from "@/components/Logo";
import { PlatformIcon, type Platform } from "@/components/PlatformIcon";
import { RailIcon, type RailGlyph } from "@/components/RailIcon";

/* ---------------------------------------------------------------------------
   The one light section on the page: the product itself.

   These frames are the support console rebuilt in markup — same rail, same
   ~300px live queue beside a wide conversation pane, same design tokens (see
   the .xv block in globals.css, mirrored from tools/ui). Nothing here contains
   customer data. To publish real captures instead, drop redacted PNGs into
   public/screenshots/ and swap each frame body for an <Image>, keeping the
   chrome and the captions.
--------------------------------------------------------------------------- */

const NAV: { label: string; glyph: RailGlyph; badge?: string }[] = [
  { label: "Dashboard", glyph: "dashboard" },
  { label: "Inbox", glyph: "inbox" },
  { label: "Live review", glyph: "live", badge: "12" },
  { label: "Review tasks", glyph: "review", badge: "4" },
  { label: "Regression", glyph: "regression" },
  { label: "Settings", glyph: "settings" },
];

export function Frame({
  app,
  title,
  meta,
  children,
}: {
  app: string;
  title?: string;
  meta?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="light-frame xv flex h-full flex-col overflow-hidden rounded-xl">
      <div
        className="flex flex-wrap items-center gap-x-3 gap-y-1.5 border-b px-4 py-2.5"
        style={{
          borderColor: "var(--xv-border)",
          background: "var(--xv-surface-2)",
        }}
      >
        <span aria-hidden className="flex gap-1.5">
          {[0.2, 0.14, 0.09].map((o) => (
            <span
              key={o}
              className="h-[7px] w-[7px] rounded-full"
              style={{ background: `rgba(10,34,49,${o})` }}
            />
          ))}
        </span>
        <span
          className="font-mono text-[11px]"
          style={{ color: "var(--xv-faint)" }}
        >
          {app}
        </span>
        {title ? (
          <span className="text-[12px] font-semibold tracking-tight">
            {title}
          </span>
        ) : null}
        {meta ? (
          <span className="ml-auto flex flex-wrap items-center gap-2">
            {meta}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

/* --- Layer 01: the live queue and the trace behind one answer -------------- */

type Row = {
  t: string;
  ch: string;
  platform: Platform;
  snippet: string;
  state: "verified" | "repaired" | "human";
  active?: boolean;
};

const QUEUE: Row[] = [
  {
    t: "09:41",
    ch: "WhatsApp",
    platform: "whatsapp",
    snippet: "Can I use it on my router?",
    state: "verified",
  },
  {
    t: "09:39",
    ch: "Web",
    platform: "web",
    snippet: "Can I add my partner to my plan?",
    state: "verified",
  },
  {
    t: "09:36",
    ch: "iOS",
    platform: "ios",
    snippet: "Can we move to the family plan?",
    state: "human",
    active: true,
  },
  {
    t: "09:31",
    ch: "Android",
    platform: "android",
    snippet: "Which locations work with streaming?",
    state: "repaired",
  },
  {
    t: "09:28",
    ch: "Web",
    platform: "web",
    snippet: "Setting it up on a new laptop",
    state: "verified",
  },
  {
    t: "09:24",
    ch: "iOS",
    platform: "ios",
    snippet: "Do you keep any logs?",
    state: "verified",
  },
  {
    t: "09:19",
    ch: "WhatsApp",
    platform: "whatsapp",
    snippet: "Need the invoice for last year",
    state: "human",
  },
];

function StateChip({ state }: { state: Row["state"] }) {
  if (state === "verified")
    return <span className="xv-chip xv-chip-good">verified</span>;
  if (state === "repaired")
    return <span className="xv-chip xv-chip-warn">rule fired · fixed</span>;
  return <span className="xv-chip xv-chip-handoff">→ human agent</span>;
}

function Rail({
  collapsed = false,
  current = "Live review",
}: {
  collapsed?: boolean;
  current?: string;
}) {
  return (
    <div
      className={`flex flex-col justify-between border-r py-3.5 ${
        collapsed ? "items-center px-2" : "px-3"
      }`}
      style={{
        background: "var(--xv-rail)",
        borderColor: "var(--xv-rail-border)",
        color: "var(--xv-rail-text)",
      }}
    >
      <div className={collapsed ? "flex flex-col items-center" : undefined}>
        <span
          className={`flex items-center gap-2 pb-3.5 ${collapsed ? "" : "px-1.5"}`}
        >
          <Mark className="h-[15px] w-[15px]" />
          {collapsed ? null : (
            <span
              className="text-[12px] font-semibold tracking-[-0.01em]"
              style={{ color: "var(--xv-rail-text-strong)" }}
            >
              3layers
            </span>
          )}
        </span>

        <div className="flex flex-col gap-[3px]">
          {NAV.map((item) => {
            const active = item.label === current;
            return (
              <span
                key={item.label}
                title={item.label}
                className={`relative flex items-center rounded-lg text-[12.5px] font-medium ${
                  collapsed
                    ? "h-8 w-8 justify-center"
                    : "gap-2 px-2 py-[7px]"
                }`}
                style={{
                  background: active ? "var(--xv-rail-active)" : "transparent",
                  color: active
                    ? "var(--xv-rail-text-strong)"
                    : "var(--xv-rail-text)",
                }}
              >
                <RailIcon glyph={item.glyph} />
                {collapsed ? null : (
                  <span className="truncate">{item.label}</span>
                )}
                {item.badge ? (
                  collapsed ? (
                    <span
                      className="absolute right-[7px] top-[6px] h-[5px] w-[5px] rounded-full"
                      style={{ background: "var(--xv-mint)" }}
                      aria-hidden
                    />
                  ) : (
                    <span
                      className="ml-auto inline-flex h-[15px] min-w-[15px] items-center justify-center rounded-full px-1 text-[9px] font-bold"
                      style={{
                        background: active
                          ? "var(--xv-mint)"
                          : "var(--xv-surface-2)",
                        color: active ? "var(--xv-on-mint)" : "var(--xv-muted)",
                      }}
                    >
                      {item.badge}
                    </span>
                  )
                ) : null}
              </span>
            );
          })}
        </div>
      </div>

      <div
        className={`mt-6 flex items-center gap-2 border-t pt-3 ${
          collapsed ? "justify-center" : ""
        }`}
        style={{ borderColor: "var(--xv-rail-border)" }}
      >
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold"
          style={{ background: "var(--xv-mint)", color: "var(--xv-on-mint)" }}
        >
          3L
        </span>
        {collapsed ? null : <span className="text-[11px]">Reviewer</span>}
      </div>
    </div>
  );
}

function QueuePane({
  rows = QUEUE,
  className = "",
  compact = false,
}: {
  rows?: Row[];
  className?: string;
  compact?: boolean;
}) {
  return (
        <div
          className={className}
          style={{
            borderColor: "var(--xv-border)",
            background: "var(--xv-surface)",
          }}
        >
          <div
            className="border-b px-3.5 py-3"
            style={{ borderColor: "var(--xv-border)" }}
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-[13px] font-semibold tracking-tight">
                Live queue
              </h3>
              <span
                className="text-[11px] tabular-nums"
                style={{ color: "var(--xv-faint)" }}
              >
                7 of 1,284
              </span>
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-1">
              {compact ? null : <span className="xv-chip">All</span>}
              <span className="xv-chip xv-chip-info">Unreviewed · 12</span>
              <span className="xv-chip">Escalated</span>
              {compact ? null : <span className="xv-chip">Source</span>}
            </div>
          </div>

          <ul>
            {rows.map((row) => (
              <li
                key={row.t}
                className="flex items-start gap-3 border-b px-3.5 py-3"
                style={{
                  borderColor: "var(--xv-border)",
                  background: row.active ? "var(--xv-selected)" : "transparent",
                  borderLeft: `2px solid ${
                    row.active ? "var(--xv-mint)" : "transparent"
                  }`,
                }}
              >
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <span className="truncate text-[12.5px] font-medium">
                      {row.snippet}
                    </span>
                    <span
                      className="shrink-0 text-[10.5px] tabular-nums"
                      style={{ color: "var(--xv-faint)" }}
                    >
                      {row.t}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center gap-2">
                    <span
                      className="flex items-center gap-1 text-[10px] uppercase tracking-wide"
                      style={{ color: "var(--xv-muted)" }}
                    >
                      <PlatformIcon platform={row.platform} size={11} />
                      {row.ch}
                    </span>
                    <StateChip state={row.state} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

  );
}

/** A source pill, as the console renders them: read-in-full or hit-only. */
function SourcePill({
  title,
  cited,
  read = true,
}: {
  title: string;
  cited?: number;
  read?: boolean;
}) {
  return (
    <span
      className={`flex min-w-0 items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] ${
        read ? "" : "opacity-55"
      }`}
      style={{
        background: "var(--xv-surface)",
        border: "1px solid var(--xv-border)",
      }}
    >
      {read ? (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a1.6 1.6 0 0 0-1.6-1.5H5.5A1.5 1.5 0 0 1 4 16zM20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a1.6 1.6 0 0 1 1.6-1.5h4.9A1.5 1.5 0 0 0 20 16z"
            stroke="var(--xv-muted)"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"
            stroke="var(--xv-faint)"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="2.6" stroke="var(--xv-faint)" strokeWidth="1.6" />
        </svg>
      )}
      <span
        className="truncate font-medium"
        style={{ color: "var(--xv-text)" }}
      >
        {title}
      </span>
      {cited ? (
        <span
          className="shrink-0 rounded-full px-1.5 py-0.5 text-[9.5px] font-medium tabular-nums"
          style={{
            background: "var(--xv-card-good)",
            color: "var(--xv-good)",
          }}
        >
          {cited} cited
        </span>
      ) : null}
    </span>
  );
}

function ConversationPane({ compact = false }: { compact?: boolean }) {
  return (
        <div
          className="flex min-w-0 flex-col"
          style={{
            borderColor: "var(--xv-border)",
            background: "var(--xv-surface)",
          }}
        >
          {compact ? (
            <div
              className="flex items-center gap-2 border-b px-4 py-2"
              style={{
                borderColor: "var(--xv-border)",
                background: "var(--xv-surface-2)",
              }}
            >
              <span
                className="text-[11.5px] font-medium"
                style={{ color: "var(--xv-text-2)" }}
              >
                ‹ Live queue
              </span>
              <span className="xv-chip xv-chip-info ml-auto">12 unreviewed</span>
            </div>
          ) : null}

          <div
            className="flex flex-wrap items-center gap-2 border-b px-4 py-2.5"
            style={{ borderColor: "var(--xv-border)" }}
          >
            <span className="flex items-center gap-1.5 font-mono text-[11.5px]">
              <PlatformIcon platform="ios" size={12} title="iOS" />
              #48212
            </span>
            {compact ? null : (
              <span
                className="text-[11px]"
                style={{ color: "var(--xv-muted)" }}
              >
                iOS · 4 turns · 09:36
              </span>
            )}
            <span className="ml-auto flex items-center gap-2">
              <span className="xv-chip xv-chip-handoff">escalated</span>
              {compact ? null : <span className="xv-chip">unreviewed</span>}
            </span>
          </div>

          <div className="flex-1 space-y-2.5 px-4 py-3.5">
            <p
              className="w-fit max-w-[78%] rounded-xl rounded-bl-sm px-3 py-2 text-[12px] leading-relaxed"
              style={{
                background: "var(--xv-cust-bg)",
                color: "var(--xv-cust-fg)",
              }}
            >
              We&apos;re five people now — can we move to the family plan?
            </p>
            <p
              className="ml-auto w-fit max-w-[82%] rounded-xl rounded-br-sm border px-3 py-2 text-[12px] leading-relaxed"
              style={{
                background: "var(--xv-ai-bg)",
                color: "var(--xv-ai-fg)",
                borderColor: "var(--xv-ai-border)",
              }}
            >
              Yes — the family plan covers six people, each with their own login,
              and everything you have set up stays exactly as it is.
            </p>
            {compact ? (
              <p
                className="flex items-center gap-2 pt-1 font-mono text-[10.5px] uppercase tracking-[0.12em]"
                style={{ color: "var(--xv-faint)" }}
              >
                <span aria-hidden>⌄</span> 2 more turns
              </p>
            ) : (
              <>
                <p
                  className="w-fit max-w-[78%] rounded-xl rounded-bl-sm px-3 py-2 text-[12px] leading-relaxed"
                  style={{
                    background: "var(--xv-cust-bg)",
                    color: "var(--xv-cust-fg)",
                  }}
                >
                  Do we lose what we have already paid for?
                </p>
                <p
                  className="ml-auto w-fit max-w-[82%] rounded-xl rounded-br-sm border px-3 py-2 text-[12px] leading-relaxed"
                  style={{
                    background: "var(--xv-ai-bg)",
                    color: "var(--xv-ai-fg)",
                    borderColor: "var(--xv-ai-border)",
                  }}
                >
                  No — your current plan runs to 12 August and the unused part is
                  credited against the family plan, so you only pay the
                  difference. Changing a plan is an account action, so I&apos;ll
                  bring in a specialist to make the switch with you.
                </p>
              </>
            )}

            <div
              className="mt-3.5 overflow-hidden rounded-xl border"
              style={{
                borderColor: "var(--xv-border)",
                background: "var(--xv-surface-2)",
              }}
            >
              <div className="px-3 py-2.5">
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.14em]"
                  style={{ color: "var(--xv-muted)" }}
                >
                  verification
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  <span className="xv-chip xv-chip-good">✓ grounded</span>
                  <span className="xv-chip xv-chip-good">✓ on-policy</span>
                  <span className="xv-chip xv-chip-handoff">⚑ handoff</span>
                </div>
                <p className="mt-2 text-[11px]" style={{ color: "var(--xv-muted)" }}>
                  every claim traced to a source · credit confirmed before the
                  quote · account change needs a person
                </p>
              </div>

              <div
                className="border-t px-3 py-2.5"
                style={{ borderColor: "var(--xv-border)" }}
              >
                <p
                  className="flex items-center gap-1.5 text-[10px] font-medium"
                  style={{ color: "var(--xv-muted)" }}
                >
                  <span aria-hidden style={{ color: "var(--xv-good)" }}>
                    ●
                  </span>
                  3 sources · 2 read in full
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  <SourcePill title="Family plan · six seats" cited={2} />
                  <SourcePill title="Plan changes · proration" cited={1} />
                  <SourcePill title="Device limits" read={false} />
                </div>
              </div>

              <div
                className="flex flex-wrap items-center gap-x-3 gap-y-1 border-t px-3 py-2 font-mono text-[10px]"
                style={{
                  borderColor: "var(--xv-border)",
                  color: "var(--xv-faint)",
                }}
              >
                <span>claude-sonnet-5</span>
                <span>bedrock · eu-central-1</span>
                <span>2.4s</span>
                <span>$0.004</span>
                <span>step by step ›</span>
              </div>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-2 border-t px-4 py-3"
            style={{ borderColor: "var(--xv-border)" }}
          >
            <span
              className="rounded-full px-3 py-1.5 text-[11.5px] font-medium"
              style={{
                background: "var(--xv-mint)",
                color: "var(--xv-on-mint)",
              }}
            >
              ✓ Correct
            </span>
            <span
              className="rounded-full border px-3 py-1.5 text-[11.5px] font-medium"
              style={{ borderColor: "var(--xv-border-strong)" }}
            >
              ✗ Wrong
            </span>
            <span
              className="rounded-full border px-3 py-1.5 text-[11.5px] font-medium"
              style={{ borderColor: "var(--xv-border-strong)" }}
            >
              KB gap
            </span>
            {compact ? null : (
              <span
                className="ml-auto min-w-[180px] flex-1 rounded-full border px-3 py-1.5 text-[11.5px]"
                style={{
                  borderColor: "var(--xv-border)",
                  color: "var(--xv-faint)",
                }}
              >
                Add a note for the next reviewer…
              </span>
            )}
          </div>
        </div>
  );
}

function ReviewFrame() {
  return (
    <Frame
      app="3layers.ai"
      title="Live review"
      meta={
        <>
          <span className="xv-chip">Today · 1,284</span>
          <span className="xv-chip xv-chip-handoff">12 need a human</span>
        </>
      }
    >
      <div className="grid grid-cols-[186px_300px_minmax(0,1fr)]">
        <Rail />
        <QueuePane className="border-r" />
        <ConversationPane />
      </div>
    </Frame>
  );
}

/**
 * The phone gets the same screen, not a different one: the console's collapsed
 * icon rail buys width, and the frame is scaled to fit (see .app-scale-sm).
 */
function ReviewFrameMobile() {
  return (
    <Frame
      app="3layers.ai"
      title="Live review"
      meta={<span className="xv-chip xv-chip-handoff">12 need a human</span>}
    >
      <div className="grid grid-cols-[56px_minmax(0,1fr)]">
        <Rail collapsed />
        <ConversationPane compact />
      </div>
    </Frame>
  );
}

/* --- The overview the owner opens in the morning ---------------------------
   The console's own dashboard, rebuilt here so the numbers stay in step with
   every other screen on the page: 1,284 conversations, split 917 / 254 / 113
   across the three layers, $1,055 of cost at $0.82 a conversation.

   The sparklines are trend only — the value beside each one is the content, so
   they carry no axis and no tooltip. Total gets a neutral stroke because it is
   not one of the three layers; only the layers wear the categorical hues, and
   each tile is titled, so identity never rests on colour.
------------------------------------------------------------------------- */

function Spark({ points, color }: { points: string; color: string }) {
  return (
    <svg
      viewBox="0 0 100 30"
      preserveAspectRatio="none"
      className="h-7 w-[86px] shrink-0"
      aria-hidden
    >
      <polyline
        points={points}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const HEADLINE = [
  {
    k: "total",
    v: "1,284",
    sub: "37 open · 6.2 msg/conv",
    dot: "var(--xv-faint)",
    spark: "0,24 10,20 20,22 30,16 40,18 50,11 60,14 70,8 80,12 90,6 100,9",
  },
  {
    k: "bot handled",
    v: "75.0%",
    sub: "963 · no agent time",
    dot: "var(--c-machine-mark)",
    spark: "0,26 10,22 20,24 30,18 40,15 50,17 60,11 70,9 80,12 90,7 100,5",
  },
  {
    k: "our specialists",
    v: "20.0%",
    sub: "257 · 78% drafts kept",
    dot: "var(--c-pass-mark)",
    spark: "0,14 10,17 20,13 30,18 40,15 50,20 60,16 70,19 80,14 90,18 100,15",
  },
  {
    k: "joint sessions",
    v: "5.0%",
    sub: "64 · live with your team",
    dot: "var(--c-human-mark)",
    spark: "0,17 10,15 20,19 30,16 40,20 50,18 60,22 70,19 80,23 90,21 100,25",
  },
];

const STRIP = [
  { k: "Avg first reply", v: "8.4s", sub: "p50 6.1s · p90 19.4s" },
  { k: "Customer msgs", v: "4,062", sub: "3.2 / conv" },
  { k: "AI msgs", v: "5,180", sub: "4.0 / conv" },
  { k: "Awaiting review", v: "12", sub: "of 1,284" },
  { k: "Knowledge gaps", v: "6%", sub: "12 questions" },
  { k: "Delivery failures", v: "0", sub: "0.0% of convs", good: true },
];

const MONEY = [
  { k: "Total cost", v: "$1,327", sub: "all three layers" },
  { k: "Cost / conversation", v: "$1.03", sub: "over 1,284 conversations" },
  { k: "Model spend", v: "$36", sub: "3% of total · 118.7M tokens" },
  { k: "Saved this month", v: "$4,180", sub: "−38% vs June" },
];

export function DashboardFrame() {
  return (
    <Frame
      app="3layers.ai"
      title="Dashboard"
      meta={
        <>
          <span className="xv-chip">All channels</span>
          <span className="xv-chip xv-chip-good">updated 09:41</span>
        </>
      }
    >
      <div className="grid grid-cols-[56px_minmax(0,1fr)]">
        <Rail collapsed current="Dashboard" />

        <div className="min-w-0">
          <div
            className="flex flex-wrap items-start gap-x-4 gap-y-2 border-b px-4 py-3.5"
            style={{ borderColor: "var(--xv-border)" }}
          >
            <div className="min-w-0">
              <p className="text-[15px] font-semibold tracking-[-0.015em]">
                Good morning, Mike
              </p>
              <p
                className="mt-0.5 text-[11.5px]"
                style={{ color: "var(--xv-muted)" }}
              >
                Here is how your support performed in this window.
              </p>
            </div>
            <div className="ml-auto flex flex-wrap items-center gap-2">
              <span className="xv-chip">From 30 Jul 08:00</span>
              <span
                className="rounded-full px-3 py-1.5 text-[11px] font-medium"
                style={{
                  background: "var(--xv-mint)",
                  color: "var(--xv-on-mint)",
                }}
              >
                Refresh
              </span>
            </div>
          </div>

          <div
            className="flex flex-wrap items-center gap-1.5 border-b px-4 py-2.5"
            style={{ borderColor: "var(--xv-border)" }}
          >
            {["Overview", "Analyze", "Regression"].map((tab) => (
              <span
                key={tab}
                className="rounded-full px-3 py-1 text-[11.5px] font-medium"
                style={
                  tab === "Overview"
                    ? {
                        background: "var(--xv-surface-2)",
                        border: "1px solid var(--xv-border-strong)",
                      }
                    : { color: "var(--xv-muted)" }
                }
              >
                {tab}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 px-4 py-3.5 lg:grid-cols-4">
            {HEADLINE.map((tile) => (
              <div
                key={tile.k}
                className="rounded-xl border px-3 py-2.5"
                style={{
                  borderColor: "var(--xv-border)",
                  background: "var(--xv-surface)",
                }}
              >
                <p
                  className="flex items-center gap-1.5 font-mono text-[9.5px] uppercase tracking-[0.14em]"
                  style={{ color: "var(--xv-muted)" }}
                >
                  <span
                    aria-hidden
                    className="h-[6px] w-[6px] shrink-0 rounded-full"
                    style={{ background: tile.dot }}
                  />
                  {tile.k}
                </p>
                <div className="mt-1.5 flex items-end justify-between gap-2">
                  <span className="text-[22px] font-semibold leading-none tracking-[-0.03em] tabular-nums">
                    {tile.v}
                  </span>
                  <Spark points={tile.spark} color={tile.dot} />
                </div>
                <p
                  className="mt-1.5 text-[10.5px] tabular-nums"
                  style={{ color: "var(--xv-faint)" }}
                >
                  {tile.sub}
                </p>
              </div>
            ))}
          </div>

          <div
            className="grid grid-cols-2 gap-x-4 gap-y-3 border-t px-4 py-3 sm:grid-cols-3 lg:grid-cols-6"
            style={{ borderColor: "var(--xv-border)" }}
          >
            {STRIP.map((cell) => (
              <div key={cell.k} className="min-w-0">
                <p
                  className="truncate text-[10.5px]"
                  style={{ color: "var(--xv-muted)" }}
                >
                  {cell.k}
                </p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[15px] font-semibold tracking-[-0.02em] tabular-nums">
                  {cell.good ? (
                    <span aria-hidden style={{ color: "var(--xv-good)" }}>
                      ✓
                    </span>
                  ) : null}
                  {cell.v}
                </p>
                <p
                  className="mt-0.5 truncate text-[10px] tabular-nums"
                  style={{ color: "var(--xv-faint)" }}
                >
                  {cell.sub}
                </p>
              </div>
            ))}
          </div>

          <div
            className="grid grid-cols-2 gap-2 border-t px-4 py-3.5 lg:grid-cols-4"
            style={{ borderColor: "var(--xv-border)" }}
          >
            {MONEY.map((tile) => (
              <div
                key={tile.k}
                className="rounded-xl px-3 py-2.5"
                style={{ background: "var(--xv-surface-2)" }}
              >
                <p
                  className="text-[10.5px]"
                  style={{ color: "var(--xv-muted)" }}
                >
                  {tile.k}
                </p>
                <p
                  className="mt-1 text-[20px] font-semibold leading-none tracking-[-0.03em] tabular-nums"
                  style={{ color: "var(--c-machine)" }}
                >
                  {tile.v}
                </p>
                <p
                  className="mt-1.5 text-[10px] tabular-nums"
                  style={{ color: "var(--xv-faint)" }}
                >
                  {tile.sub}
                </p>
              </div>
            ))}
          </div>

          <div
            className="border-t px-4 py-2.5 text-[11px]"
            style={{ borderColor: "var(--xv-border)", color: "var(--xv-muted)" }}
          >
            Model spend is a list-price estimate and can run a little higher on
            regional inference — reconcile against your cloud bill before you
            report it. Everything else is measured, per layer, from your own
            conversations.
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* --- The rules the platform is held to ------------------------------------- */

export function RulesFrame() {
  const rules = [
    {
      when: "confidence < 0.75",
      then: "our specialist takes over",
      chip: "handoff",
      tone: "handoff",
    },
    {
      when: "topic · plan change",
      then: "confirm the credit, our specialist closes it",
      chip: "handoff",
      tone: "handoff",
    },
    {
      when: "topic · legal, medical, tax",
      then: "never answer",
      chip: "blocked",
      tone: "danger",
    },
    {
      when: "customer asks for a person",
      then: "our specialist takes over immediately",
      chip: "handoff",
      tone: "handoff",
    },
    {
      when: "sentiment · frustrated",
      then: "our team lead responds",
      chip: "priority",
      tone: "warn",
    },
    {
      when: "needs your system or your call",
      then: "live session with your team",
      chip: "rare · 5%",
      tone: "info",
    },
  ];

  return (
    <Frame
      app="3layers.ai"
      title="Escalation rules"
      meta={<span className="xv-chip xv-chip-info">12 active</span>}
    >
      <div
        className="border-b px-4 py-3 text-[11.5px]"
        style={{ borderColor: "var(--xv-border)", color: "var(--xv-muted)" }}
      >
        Written in your words, checked on every single turn — the trace on each
        conversation shows which of these fired.
      </div>

      <ul className="flex-1">
        {rules.map((rule) => (
          <li
            key={rule.when}
            className="flex flex-wrap items-center gap-x-3 gap-y-1 border-b px-4 py-2.5"
            style={{ borderColor: "var(--xv-border)" }}
          >
            <span
              className="font-mono text-[11px]"
              style={{ color: "var(--xv-text-2)" }}
            >
              {rule.when}
            </span>
            <span aria-hidden style={{ color: "var(--xv-faint)" }}>
              →
            </span>
            <span className="text-[12px] font-medium">{rule.then}</span>
            <span className={`ml-auto xv-chip xv-chip-${rule.tone}`}>
              {rule.chip}
            </span>
          </li>
        ))}
      </ul>

      <div
        className="flex flex-wrap items-center gap-2 border-t px-4 py-2.5"
        style={{ borderColor: "var(--xv-border)" }}
      >
        <span className="xv-chip xv-chip-good">every decision logged</span>
        <span className="xv-chip">rules editable by your team</span>
        <span
          className="ml-auto font-mono text-[10.5px]"
          style={{ color: "var(--xv-faint)" }}
        >
          14 rules checked · 09:41
        </span>
      </div>
    </Frame>
  );
}

export function Workspace() {
  return (
    <section id="workspace" className="light">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="lg:w-[380px] lg:shrink-0">
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-muted">
              Layer 01 · AI Bot
            </p>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.7rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
              Every automated answer, with its sources.
            </h2>
            <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-cream-muted">
              Every reply the bot sends lands here first: what it answered,
              which sources it used, and whether it was right — reviewed
              before the same gap can ever answer a customer wrong twice.
            </p>
          </div>

          {/* the crop: its own width, same treatment as the dashboard above */}
          <Reveal delay={120} className="min-w-0 lg:w-[920px] lg:shrink-0">
            <div className="hidden md:block">
              <div className="app-scale">
                <ReviewFrame />
              </div>
            </div>
            <div className="md:hidden">
              <div className="app-scale-sm">
                <ReviewFrameMobile />
              </div>
            </div>
          </Reveal>
        </div>

        <p className="mt-6 text-[11.5px] text-cream-muted">
          Screens rebuilt with synthetic conversations — your customer data never
          leaves your deployment.
        </p>
      </div>
    </section>
  );
}
