/**
 * The hero visual. One conversation running the full loop:
 *
 *   01     the agent answers, grounded in your knowledge base and your rules
 *   02     every candidate change is replayed against the whole suite
 *   03     what was learned is proposed as a fix — and re-tested
 *   ↩︎      the feedback bracket returns it to the agent
 *
 * Pure CSS keyframes on one shared 7.2s beat; the row offsets below are the
 * only timing knobs. Accent colour per row carries meaning, not decoration.
 */

const OFFSET = ["0s", "1.9s", "3.8s"];
const ACCENT = ["var(--c-machine)", "var(--c-pass)", "var(--c-learn)"];

function RowShell({
  index,
  label,
  meta,
  children,
}: {
  index: number;
  label: string;
  meta: string;
  children: React.ReactNode;
}) {
  const style = {
    animationDelay: OFFSET[index],
    ["--accent" as string]: ACCENT[index],
  };

  return (
    <div className="loop-row overflow-hidden px-4 py-4" style={style}>
      <div className="flex items-center gap-3">
        <span className="loop-node shrink-0" style={style} aria-hidden />
        <span
          className="font-mono text-[10px] uppercase tracking-[0.2em]"
          style={{ color: ACCENT[index] }}
        >
          0{index + 1}
        </span>
        <span className="text-[13px] font-medium whitespace-nowrap tracking-[-0.01em]">
          {label}
        </span>
        <span className="ml-auto hidden font-mono text-[10px] whitespace-nowrap uppercase tracking-[0.14em] text-fg-dim sm:block">
          {meta}
        </span>
      </div>
      <div className="mt-4 pl-[19px]">{children}</div>
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <span className="ml-2 hidden truncate font-mono text-[10px] whitespace-nowrap uppercase tracking-[0.14em] text-fg-dim sm:inline">
      {children}
    </span>
  );
}

export function LoopVisual() {
  return (
    <div className="panel relative rounded-[20px] p-4 md:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
          one conversation, three layers
        </span>
        <span className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-fg-dim">
          <span
            className="loop-node"
            style={{ ["--accent" as string]: "var(--c-pass)" }}
            aria-hidden
          />
          live
        </span>
      </div>

      <div className="relative pr-11 md:pr-12">
        {/* 01 — the answer itself: retrieved, verified, sent */}
        <RowShell index={0} label="Your agent answers" meta="grounded in your KB">
          <div className="stream space-y-2">
            {[
              { w: "92%", d: "0s" },
              { w: "74%", d: "0.22s" },
              { w: "52%", d: "0.44s" },
            ].map((line) => (
              <i
                key={line.w}
                style={{ width: line.w, animationDelay: line.d }}
              />
            ))}
          </div>
        </RowShell>

        <div
          className="loop-link"
          style={{ animationDelay: OFFSET[0], ["--accent" as string]: ACCENT[0] }}
          aria-hidden
        />

        {/* 02 — the whole suite replays before anything ships */}
        <RowShell
          index={1}
          label="AI-to-AI regression"
          meta="before every release"
        >
          <div className="flex flex-wrap items-center gap-1.5">
            {Array.from({ length: 14 }).map((_, i) => (
              <span
                key={i}
                className="cell"
                style={{
                  ["--cell" as string]:
                    i === 9 ? "var(--c-fail)" : "var(--c-pass)",
                  animationDelay: `calc(${OFFSET[1]} + ${i * 0.05}s)`,
                }}
                aria-hidden
              />
            ))}
            <Caption>1 caught</Caption>
          </div>
        </RowShell>

        <div
          className="loop-link"
          style={{ animationDelay: OFFSET[1], ["--accent" as string]: ACCENT[1] }}
          aria-hidden
        />

        {/* 03 — the fix the system proposes for itself */}
        <RowShell index={2} label="Learns automatically" meta="regression-gated">
          <div className="bars flex h-[26px] flex-wrap items-end gap-1.5">
            {["14px", "22px", "10px", "26px", "18px", "24px"].map((h, i) => (
              <i
                key={h + i}
                style={{
                  ["--h" as string]: h,
                  ["--accent" as string]: ACCENT[2],
                  animationDelay: `calc(${OFFSET[2]} + ${i * 0.07}s)`,
                }}
              />
            ))}
            <Caption>fix → re-tested</Caption>
          </div>
        </RowShell>

        {/* the return path: what layer 03 learns re-enters the agent */}
        <div
          className="loop-return pointer-events-none absolute right-5 top-[34px] bottom-[38px] w-6 rounded-r-[20px] border-y border-r border-dashed md:right-6 md:w-7"
          aria-hidden
        >
          <span className="loop-return absolute -left-[1px] -top-[4px] h-[7px] w-[7px] rotate-45 border-b border-l" />
        </div>
        <span
          className="loop-return-label pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.22em]"
          style={{ writingMode: "vertical-rl" }}
          aria-hidden
        >
          feedback
        </span>
      </div>

      <p className="mt-5 text-[12.5px] leading-relaxed text-fg-dim">
        Answer, prove, improve — on every conversation, not once a quarter.
      </p>
    </div>
  );
}
