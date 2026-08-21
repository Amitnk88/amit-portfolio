"use client";

import { useEffect, useRef, useState } from "react";

type Line = { prompt: string; output: string; color?: "text" | "mint" | "accent" };

const LINES: Line[] = [
  { prompt: "whoami", output: "amit-b-naik" },
  { prompt: "cat role.txt", output: "Software Engineer · Full-Stack & Android · AI/ML" },
  { prompt: "cat location.txt", output: "Bengaluru, Karnataka, India" },
  { prompt: "status --check", output: "open to Software Engineering / AI/ML / Full-Stack roles", color: "mint" },
];

export default function TerminalPanel() {
  const [revealed, setRevealed] = useState(0);
  const [typed, setTyped] = useState("");
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion.current) {
      setRevealed(LINES.length);
      return;
    }

    let cancelled = false;

    async function run() {
      for (let i = 0; i < LINES.length; i++) {
        if (cancelled) return;
        const text = LINES[i].prompt;
        for (let c = 1; c <= text.length; c++) {
          if (cancelled) return;
          setTyped(text.slice(0, c));
          await new Promise((r) => setTimeout(r, 22));
        }
        await new Promise((r) => setTimeout(r, 220));
        if (cancelled) return;
        setRevealed((r) => r + 1);
        setTyped("");
        await new Promise((r) => setTimeout(r, 180));
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  const showTypingLine = revealed < LINES.length;

  return (
    <div className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] shadow-sm">
      <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8635a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8b93d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3ddc97]" />
        <span className="ml-3 font-mono text-[11px] text-[var(--text-muted)]">amit@portfolio — zsh</span>
      </div>
      <div className="min-h-[220px] px-4 py-4 font-mono text-[13px] leading-relaxed">
        {LINES.slice(0, revealed).map((line, i) => (
          <div key={i} className="mb-2.5">
            <div className="text-[var(--text-muted)]">
              <span className="text-[var(--accent)]">➜ </span>
              {line.prompt}
            </div>
            <div
              className={
                line.color === "mint"
                  ? "text-[var(--mint)]"
                  : "text-[var(--text)]"
              }
            >
              {line.output}
            </div>
          </div>
        ))}
        {showTypingLine && (
          <div className="text-[var(--text-muted)]">
            <span className="text-[var(--accent)]">➜ </span>
            {typed}
            <span className="caret">▍</span>
          </div>
        )}
      </div>
    </div>
  );
}
