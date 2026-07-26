import { Reveal } from "@/components/Reveal";
import { Mark } from "@/components/Logo";
import { PlatformIcon, type Platform } from "@/components/PlatformIcon";

/* ---------------------------------------------------------------------------
   The one light section on the page: the product itself.

   The frames below mirror the real internal tool — the same navigation, the
   same live-review queue, the same regression run — rebuilt in markup so the
   page ships with zero customer data. To publish real captures instead, drop
   redacted PNGs into public/screenshots/ and swap each frame body for an
   <Image>; keep the chrome and the captions.
--------------------------------------------------------------------------- */

const NAV = [
  "Dashboard",
  "Inbox",
  "Live review",
  "Review tasks",
  "Regression",
  "Settings",
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
    <div className="light-frame overflow-hidden rounded-xl">
      <div className="flex items-center gap-3 border-b border-cream-line px-4 py-2.5">
        <span aria-hidden className="flex gap-1.5">
          {[0.18, 0.13, 0.09].map((o) => (
            <span
              key={o}
              className="h-[7px] w-[7px] rounded-full"
              style={{ background: `rgba(12,12,13,${o})` }}
            />
          ))}
        </span>
        <span className="font-mono text-[11px] text-cream-muted">{app}</span>
        {title ? (
          <span className="text-[12px] font-medium tracking-[-0.01em]">
            {title}
          </span>
        ) : null}
        {meta ? (
          <span className="ml-auto flex items-center gap-2">{meta}</span>
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
        className="font-mono text-[10px] uppercase tracking-[0.2em]"
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

/* --- Layer 01: the live review queue + the trace behind one answer -------- */

function ReviewFrame() {
  const queue: {
    t: string;
    ch: string;
    platform: Platform;
    snippet: string;
    state: string;
    active?: boolean;
  }[] = [
    {
      t: "09:41",
      ch: "WhatsApp",
      platform: "whatsapp",
      snippet: "Can I use it on my router?",
      state: "ok",
    },
    {
      t: "09:39",
      ch: "Web",
      platform: "web",
      snippet: "Charged twice this month",
      state: "ok",
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
      state: "ok",
    },
  ];

  return (
    <Frame
      app="3layers.ai"
      title="Live review"
      meta={
        <>
          <span className="chip chip-neutral">Today · 1,284</span>
          <span className="chip chip-human">12 need a human</span>
        </>
      }
    >
      <div className="grid md:grid-cols-[132px_minmax(0,1fr)_minmax(0,300px)]">
        {/* sidebar */}
        <div className="hidden border-r border-cream-line px-3 py-3.5 md:block">
          <span className="flex items-center gap-2 px-1.5 pb-3">
            <Mark className="h-[14px] w-[14px] text-cream-ink" animated={false} />
            <span className="text-[11.5px] font-semibold tracking-[-0.01em]">
              3layers
            </span>
          </span>
          {NAV.map((item) => (
            <span
              key={item}
              className={`mt-0.5 flex items-center justify-between rounded-md px-1.5 py-1.5 text-[11.5px] ${
                item === "Live review"
                  ? "bg-black/[0.06] font-medium"
                  : "text-cream-muted"
              }`}
            >
              {item}
              {item === "Live review" ? (
                <span className="chip chip-human">12</span>
              ) : null}
            </span>
          ))}
        </div>

        {/* queue */}
        <div className="border-r border-cream-line">
          <div className="flex flex-wrap items-center gap-1.5 border-b border-cream-line px-3 py-2.5">
            {["All", "Unreviewed", "Escalated", "Source · all"].map((chip) => (
              <span
                key={chip}
                className={`chip ${chip === "Unreviewed" ? "chip-machine" : "chip-neutral"}`}
              >
                {chip}
              </span>
            ))}
          </div>
          <ul>
            {queue.map((row) => (
              <li
                key={row.t}
                className={`flex items-start gap-3 border-b border-cream-line/70 px-3 py-2.5 last:border-0 ${
                  row.active ? "bg-black/[0.04]" : ""
                }`}
              >
                <span className="font-mono text-[10.5px] text-cream-muted">
                  {row.t}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[12px]">
                    {row.snippet}
                  </span>
                  <span className="mt-1 flex items-center gap-2">
                    <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-cream-muted">
                      <PlatformIcon platform={row.platform} size={11} />
                      {row.ch}
                    </span>
                    {row.state === "ok" ? (
                      <span className="chip chip-pass">verified</span>
                    ) : row.state === "repaired" ? (
                      <span className="chip chip-fail">rule fired · fixed</span>
                    ) : (
                      <span className="chip chip-human">→ human agent</span>
                    )}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* the trace for the selected conversation */}
        <div className="border-t border-cream-line px-3.5 py-3 md:border-t-0">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 font-mono text-[11px]">
              <PlatformIcon platform="ios" size={12} title="iOS" />
              #48212 · iOS
            </span>
            <span className="chip chip-human">escalated</span>
          </div>

          <div className="mt-3 space-y-2">
            <p className="max-w-[92%] rounded-lg rounded-bl-sm bg-black/[0.05] px-2.5 py-1.5 text-[11.5px]">
              I want to cancel and get my money back.
            </p>
            <p className="ml-auto max-w-[94%] rounded-lg rounded-br-sm bg-black/[0.02] px-2.5 py-1.5 text-[11.5px] ring-1 ring-cream-line">
              Of course — may I ask what&apos;s prompting the cancellation? If
              it&apos;s a connection problem there is usually a quick fix, and
              your refund window stays open either way.
            </p>
            <p className="max-w-[92%] rounded-lg rounded-bl-sm bg-black/[0.05] px-2.5 py-1.5 text-[11.5px]">
              It keeps dropping on my router.
            </p>
          </div>

          <div className="mt-3.5 rounded-lg border border-cream-line">
            <div className="border-b border-cream-line px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-cream-muted">
              verification
            </div>
            <ul className="space-y-1.5 px-2.5 py-2 text-[11px]">
              <li className="flex items-center gap-2">
                <span className="chip chip-pass">grounded</span>
                every claim traced to a source
              </li>
              <li className="flex items-center gap-2">
                <span className="chip chip-pass">on-policy</span>
                cancellation reason asked first
              </li>
              <li className="flex items-center gap-2">
                <span className="chip chip-pass">on-policy</span>
                refund window stated, not promised
              </li>
              <li className="flex items-center gap-2">
                <span className="chip chip-human">handoff</span>
                if the fix fails — account action
              </li>
            </ul>
            <div className="border-t border-cream-line px-2.5 py-2 font-mono text-[10.5px] text-cream-muted">
              sources · refund-policy.md · troubleshooting/router.md
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="rounded-full bg-cream-ink px-2.5 py-1.5 text-[11px] font-medium text-cream">
              ✓ Correct
            </span>
            <span className="rounded-full border border-cream-line px-2.5 py-1.5 text-[11px] font-medium">
              ✗ Wrong
            </span>
            <span className="rounded-full border border-cream-line px-2.5 py-1.5 text-[11px] font-medium">
              KB gap
            </span>
          </div>
        </div>
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
      meta={<span className="chip chip-fail">gate blocked</span>}
    >
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-cream-line px-4 py-3 text-[11.5px]">
        <span className="font-mono text-[10.5px] text-cream-muted">
          candidate prompt-v37 → live
        </span>
        <span>
          <strong className="text-[15px] font-semibold">214</strong>{" "}
          <span className="text-cream-muted">cases replayed</span>
        </span>
        <span className="flex items-center gap-1.5">
          <i
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--c-pass)" }}
          />
          209 passed
        </span>
        <span className="flex items-center gap-1.5">
          <i
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--c-fail)" }}
          />
          5 failed
        </span>
      </div>

      <ul className="divide-y divide-cream-line/70">
        {cases.map((c) => (
          <li key={c.name} className="flex items-start gap-3 px-4 py-2.5">
            <span
              className={`chip mt-[1px] ${c.state === "pass" ? "chip-pass" : "chip-fail"}`}
            >
              {c.state}
            </span>
            <span className="min-w-0">
              <span className="block text-[12px]">{c.name}</span>
              {c.note ? (
                <span className="mt-1 block font-mono text-[10.5px] text-cream-muted">
                  {c.note}
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t border-cream-line px-4 py-2.5 text-[11px] text-cream-muted">
        Simulated customers, judged against your team&apos;s verdicts. The
        release stays blocked until each failure is fixed or accepted.
      </div>
    </Frame>
  );
}

/* --- Layer 03: the fix the system writes for itself ----------------------- */

function ProposalFrame() {
  return (
    <Frame
      app="3layers.ai"
      title="Proposal 42"
      meta={<span className="chip chip-learn">written by the system</span>}
    >
      <div className="px-4 py-3.5">
        <p className="text-[12px]">
          18 conversations in 7 days ended with a human because no article
          covers re-pairing after a firmware update.
        </p>

        <div className="mt-3 overflow-hidden rounded-lg border border-cream-line font-mono text-[10.5px]">
          <div className="border-b border-cream-line bg-black/[0.03] px-3 py-1.5 text-cream-muted">
            knowledge-base/router-setup.md
          </div>
          <div className="space-y-1 px-3 py-2.5">
            {[
              "+ After a firmware update, re-pair the app: Settings → Devices → Re-pair.",
              "+ If pairing fails twice, hand over to a human — never suggest a factory reset.",
            ].map((line) => (
              <div
                key={line}
                className="rounded px-1.5 py-0.5"
                style={{
                  background:
                    "color-mix(in srgb, var(--c-pass) 16%, transparent)",
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          <span className="chip chip-pass">re-tested · 214/214</span>
          <span className="chip chip-neutral">awaiting approval</span>
          <span className="ml-auto flex items-center gap-2">
            <span className="rounded-full bg-cream-ink px-3 py-1.5 text-[11px] font-medium text-cream">
              Approve
            </span>
            <span className="rounded-full border border-cream-line px-3 py-1.5 text-[11px] font-medium">
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
            conversation arrives with its verification result and its sources, a
            release gate that replays your whole history before anything ships,
            and fixes the system writes for its own failures — waiting for a yes.
          </p>
        </div>

        <Reveal className="light-dots mt-12 rounded-2xl p-4 md:mt-14 md:p-8">
          <FrameCaption layer="Layer 01" accent="#0d4f78">
            Every answer verified, every turn reviewable — a human only where one
            is needed.
          </FrameCaption>
          <ReviewFrame />

          <div className="mt-8 grid gap-8 md:mt-10 md:grid-cols-2 md:gap-6">
            <div>
              <FrameCaption layer="Layer 02" accent="#14724c">
                Nothing ships until your own history passes.
              </FrameCaption>
              <RegressionFrame />
            </div>
            <div>
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
