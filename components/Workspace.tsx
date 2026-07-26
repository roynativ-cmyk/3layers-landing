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

function Frame({
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

function FrameCaption({
  layer,
  accent,
  children,
}: {
  layer: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3 flex items-baseline gap-3">
      <span
        className="font-mono text-[10px] whitespace-nowrap uppercase tracking-[0.2em]"
        style={{ color: accent }}
      >
        {layer}
      </span>
      <span className="text-[13px] font-medium tracking-[-0.01em]">
        {children}
      </span>
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
    snippet: "Charged twice this month",
    state: "verified",
  },
  {
    t: "09:36",
    ch: "iOS",
    platform: "ios",
    snippet: "I want to cancel and get a refund",
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
    snippet: "App won't connect on 5 GHz",
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

function Rail({ collapsed = false }: { collapsed?: boolean }) {
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
            const active = item.label === "Live review";
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
                      className="absolute -right-[1px] -top-[1px] h-[7px] w-[7px] rounded-full"
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
              I want to cancel and get my money back.
            </p>
            <p
              className="ml-auto w-fit max-w-[82%] rounded-xl rounded-br-sm border px-3 py-2 text-[12px] leading-relaxed"
              style={{
                background: "var(--xv-ai-bg)",
                color: "var(--xv-ai-fg)",
                borderColor: "var(--xv-ai-border)",
              }}
            >
              Of course — may I ask what&apos;s prompting the cancellation? If
              it&apos;s a connection problem there is usually a quick fix, and
              your refund window stays open either way.
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
                  It keeps dropping on my router.
                </p>
                <p
                  className="ml-auto w-fit max-w-[82%] rounded-xl rounded-br-sm border px-3 py-2 text-[12px] leading-relaxed"
                  style={{
                    background: "var(--xv-ai-bg)",
                    color: "var(--xv-ai-fg)",
                    borderColor: "var(--xv-ai-border)",
                  }}
                >
                  That is usually the firmware update: the app has to be
                  re-paired from Settings → Devices → Re-pair. If it drops again
                  after that, I&apos;ll bring in a specialist who can take the
                  refund from here — your window stays open until then.
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
                  every claim traced to a source · reason asked before refund ·
                  account action needs a person
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
                  <SourcePill title="Refund policy · 30-day" cited={2} />
                  <SourcePill title="Router setup · drops" cited={1} />
                  <SourcePill title="Cancelling a subscription" read={false} />
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

/* --- Layer 02: the release gate ------------------------------------------- */

function RegressionFrame() {
  const cases = [
    {
      name: "cancellation · reason not asked",
      state: "fail",
      note: "candidate jumps straight to the refund flow",
    },
    { name: "refund outside the 30-day window", state: "pass", note: "" },
    { name: "streaming location not supported", state: "pass", note: "" },
    { name: "hostile tone · asks for a human", state: "pass", note: "" },
  ];

  return (
    <Frame
      app="3layers.ai"
      title="Regression · run 1284"
      meta={<span className="xv-chip xv-chip-danger">gate blocked</span>}
    >
      <div
        className="border-b px-4 py-3"
        style={{ borderColor: "var(--xv-border)" }}
      >
        <p
          className="font-mono text-[10.5px]"
          style={{ color: "var(--xv-muted)" }}
        >
          candidate prompt-v37 → live
        </p>
        <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[11.5px]">
          <span>
            <strong className="text-[15px] font-semibold">214</strong>{" "}
            <span style={{ color: "var(--xv-muted)" }}>cases replayed</span>
          </span>
          <span className="flex items-center gap-1.5">
            <i
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--xv-good)" }}
            />
            209 passed
          </span>
          <span className="flex items-center gap-1.5">
            <i
              className="h-2 w-2 rounded-full"
              style={{ background: "var(--xv-danger)" }}
            />
            5 failed
          </span>
        </div>
      </div>

      <ul className="flex-1">
        {cases.map((c) => (
          <li
            key={c.name}
            className="flex items-start gap-3 border-b px-4 py-2.5"
            style={{ borderColor: "var(--xv-border)" }}
          >
            <span
              className={`xv-chip mt-[1px] ${
                c.state === "pass" ? "xv-chip-good" : "xv-chip-danger"
              }`}
            >
              {c.state}
            </span>
            <span className="min-w-0">
              <span className="block text-[12px] font-medium">{c.name}</span>
              {c.note ? (
                <span
                  className="mt-1 block font-mono text-[10.5px]"
                  style={{ color: "var(--xv-muted)" }}
                >
                  {c.note}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>

      <div
        className="border-t px-4 py-2.5 text-[11px]"
        style={{ borderColor: "var(--xv-border)", color: "var(--xv-muted)" }}
      >
        Simulated customers, judged against your team&apos;s verdicts. The
        release stays blocked until each failure is fixed or accepted.
      </div>
    </Frame>
  );
}

/* --- Layer 03: the fix the system writes for itself ------------------------ */

function ProposalFrame() {
  return (
    <Frame
      app="3layers.ai"
      title="Proposal 42"
      meta={<span className="xv-chip xv-chip-info">written by the system</span>}
    >
      <div className="flex flex-1 flex-col px-4 py-3.5">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="xv-chip">18 conversations</span>
          <span className="xv-chip">last 7 days</span>
          <span className="xv-chip xv-chip-handoff">all handed to a person</span>
        </div>
        <p className="mt-3 text-[12.5px] leading-relaxed">
          Your agents answered the same thing every time — re-pair the app after
          a firmware update. Nothing in the knowledge base says it, so the AI
          kept handing the conversation over.
        </p>

        <div
          className="mt-3.5 rounded-xl border p-3"
          style={{ borderColor: "var(--xv-border)" }}
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[12px] font-semibold tracking-tight">
              Router setup
            </span>
            <span
              className="text-[11px]"
              style={{ color: "var(--xv-muted)" }}
            >
              knowledge base
            </span>
            <span className="xv-chip xv-chip-good ml-auto">
              suggested addition
            </span>
          </div>

          <ul className="mt-3 space-y-2.5">
            {[
              "After a firmware update, ask the customer to re-pair the app: Settings → Devices → Re-pair.",
              "If pairing fails twice, hand the conversation to a person — never suggest a factory reset.",
            ].map((line) => (
              <li key={line} className="flex gap-2.5 text-[11.5px] leading-relaxed">
                <span
                  aria-hidden
                  className="mt-[2px] inline-flex h-[15px] w-[15px] shrink-0 items-center justify-center rounded-full text-[11px] font-semibold"
                  style={{
                    background: "var(--xv-card-good)",
                    color: "var(--xv-good)",
                  }}
                >
                  +
                </span>
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          <span className="xv-chip xv-chip-good">re-tested · 214/214</span>
          <span className="xv-chip">awaiting approval</span>
          <span className="ml-auto flex items-center gap-2">
            <span
              className="rounded-full px-3 py-1.5 text-[11.5px] font-medium"
              style={{
                background: "var(--xv-mint)",
                color: "var(--xv-on-mint)",
              }}
            >
              Approve
            </span>
            <span
              className="rounded-full border px-3 py-1.5 text-[11.5px] font-medium"
              style={{ borderColor: "var(--xv-border-strong)" }}
            >
              Reject
            </span>
          </span>
        </div>
      </div>
    </Frame>
  );
}

export function Workspace() {
  return (
    <section id="workspace" className="light">
      <div className="mx-auto w-full max-w-[1120px] px-6 py-20 md:px-8 md:py-28">
        <div className="max-w-[54rem]">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-cream-muted">
            The workspace
          </p>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.03] tracking-[-0.03em]">
            This is what your team works in.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[15px] leading-relaxed text-cream-muted">
            Not a chat log and a resolution percentage. A queue where every
            conversation arrives with its verification result and the sources it
            used, a release gate that replays your whole history before anything
            ships, and fixes the system writes for its own failures — waiting for
            a yes.
          </p>
        </div>

        <Reveal className="light-dots mt-12 rounded-2xl p-4 md:mt-14 md:p-8">
          <FrameCaption layer="Layer 01" accent="#0d4f78">
            Every answer verified, every turn reviewable — a human only where one
            is needed.
          </FrameCaption>
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

          <div className="mt-8 grid items-stretch gap-8 md:mt-10 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col">
              <FrameCaption layer="Layer 02" accent="#14724c">
                Nothing ships until your own history passes.
              </FrameCaption>
              <RegressionFrame />
            </div>
            <div className="flex flex-col">
              <FrameCaption layer="Layer 03" accent="#4a2f9c">
                The system proposes the fix; a person approves it.
              </FrameCaption>
              <ProposalFrame />
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-[11.5px] text-cream-muted">
          Screens rebuilt with synthetic conversations — your customer data never
          leaves your deployment.
        </p>
      </div>
    </section>
  );
}
