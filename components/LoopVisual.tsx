/**
 * The hero visual: two scenes on one 24s beat.
 *
 *   Scene A — the conversation, with each layer reporting what it did.
 *   Scene B — the same turn from behind: what was retrieved, what was checked,
 *             what was replayed, what it queued to learn.
 *
 * Pure CSS keyframes; the windows live in globals.css so the timing is tuned
 * in one place.
 */

const NOTES = [
  {
    n: "01",
    accent: "var(--c-machine)",
    label: "AI Bot",
    text: "answered from your approved content · in 4 seconds",
  },
  {
    n: "02",
    accent: "var(--c-pass)",
    label: "Agent Assist",
    text: "draft, summary and next action ready for your agent",
  },
  {
    n: "03",
    accent: "var(--c-human)",
    label: "Your Expert",
    text: "escalated to your agent for judgment — full history attached",
  },
];

const STAGES = [
  {
    k: "understand",
    accent: "var(--c-machine)",
    value: "intent · billing",
    detail: "confidence 0.91 · language matched",
  },
  {
    k: "retrieve",
    accent: "var(--c-machine)",
    value: "3 of 412 passages",
    detail: "Refund policy · Router setup · Cancelling",
  },
  {
    k: "route",
    accent: "var(--c-pass)",
    value: "layer 1 · resolved",
    detail: null,
  },
  {
    k: "measure",
    accent: "var(--c-learn)",
    value: "$0.04 · 11 min saved",
    detail: "logged to your cost report",
  },
];

function SceneHeader({
  left,
  right,
}: {
  left: React.ReactNode;
  right: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
        {left}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
        {right}
      </span>
    </div>
  );
}

function ChatScene() {
  return (
    <div className="scene scene-a">
      <SceneHeader
        left={
          <>
            <span className="cw-dot" aria-hidden />
            live · web widget
          </>
        }
        right="#48212"
      />

      <div className="mt-6 min-h-[126px] space-y-2.5">
        <p
          className="cw-msg w-fit max-w-[88%] rounded-2xl rounded-bl-md bg-white/[0.07] px-3.5 py-2 text-[12.5px] leading-relaxed text-fg"
          data-i="1"
        >
          I want to cancel and get my money back.
        </p>

        <span
          className="cw-typing ml-auto flex w-fit items-center gap-1 rounded-full border border-line px-2.5 py-2"
          aria-hidden
        >
          <i />
          <i style={{ animationDelay: "0.15s" }} />
          <i style={{ animationDelay: "0.3s" }} />
        </span>

        <p
          className="cw-msg ml-auto w-fit max-w-[94%] rounded-2xl rounded-br-md border border-line bg-white/[0.03] px-3.5 py-2 text-[12.5px] leading-relaxed text-fg-muted"
          data-i="2"
        >
          Of course — may I ask what&apos;s prompting it? If it&apos;s a
          connection issue there is usually a quick fix, and your refund window
          stays open either way.
        </p>
      </div>

      <div className="mt-6 space-y-2.5 border-t border-line pt-5">
        {NOTES.map((note, i) => (
          <div
            key={note.n}
            className="cw-note flex items-start gap-3"
            data-i={String(i + 1)}
          >
            <span
              aria-hidden
              className="mt-[5px] h-[6px] w-[6px] shrink-0 rounded-full"
              style={{ background: note.accent }}
            />
            <span
              className="font-mono text-[10px] uppercase tracking-[0.16em]"
              style={{ color: note.accent }}
            >
              {note.n}
            </span>
            <span className="min-w-0 text-[12px] leading-relaxed text-fg-muted">
              <span className="font-medium text-fg">{note.label}</span>
              {" — "}
              {note.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TraceScene() {
  return (
    <div className="scene scene-b">
      <SceneHeader left="behind that one reply" right="#48212" />

      <div className="mt-6 space-y-4">
        {STAGES.map((stage, i) => (
          <div
            key={stage.k}
            className="tr-row"
            data-i={String(i + 1)}
            style={{ ["--accent" as string]: stage.accent }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <span
                className="font-mono text-[10.5px] uppercase tracking-[0.16em]"
                style={{ color: stage.accent }}
              >
                {stage.k}
              </span>
              <span className="text-[12px] font-medium tracking-[-0.01em]">
                {stage.value}
              </span>
            </div>

            <div className="tr-bar mt-2" aria-hidden />

            {stage.k === "route" ? (
              <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                {Array.from({ length: 14 }).map((_, c) => (
                  <span
                    key={c}
                    className="tr-cell"
                    style={{
                      ["--cell" as string]:
                        c === 9 ? "var(--c-human)" : "var(--c-pass)",
                      animationDelay: `${c * 0.05}s`,
                    }}
                    aria-hidden
                  />
                ))}
                <span className="ml-1 font-mono text-[10px] uppercase tracking-[0.12em] text-fg-dim">
                  14 rules checked
                </span>
              </div>
            ) : stage.detail ? (
              <p className="mt-2 text-[11.5px] leading-relaxed text-fg-dim">
                {stage.detail}
              </p>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export function LoopVisual() {
  return (
    <div className="panel relative grid rounded-[20px] p-5 md:p-6">
      <ChatScene />
      <TraceScene />
    </div>
  );
}
