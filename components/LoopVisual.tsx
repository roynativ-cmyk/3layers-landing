/**
 * The hero visual: one chat, with the three layers popping in beside it.
 *
 * The conversation plays out — customer, typing, grounded reply — and then each
 * layer announces what it did for that turn: verified, proven, learned. One
 * shared 12s beat, pure CSS keyframes (windows live in globals.css).
 */

const NOTES = [
  {
    n: "01",
    accent: "var(--c-machine)",
    label: "verified",
    text: "grounded in your KB · reason asked before any refund",
  },
  {
    n: "02",
    accent: "var(--c-pass)",
    label: "proven",
    text: "214 replayed cases cover this behaviour · 1 caught",
  },
  {
    n: "03",
    accent: "var(--c-learn)",
    label: "learned",
    text: "from 18 handoffs your agents answered last week",
  },
];

export function LoopVisual() {
  return (
    <div className="panel relative rounded-[20px] p-5 md:p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
          <span className="cw-dot" aria-hidden />
          live · web widget
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg-dim">
          #48212
        </span>
      </div>

      {/* the conversation */}
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

      {/* what each layer did for that one turn */}
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
