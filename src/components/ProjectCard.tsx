"use client";

import { useState } from "react";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";
import FraudLensDiagram from "./FraudLensDiagram";

export default function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const hasRealGithub = project.github && project.github !== "TODO: ADD URL";

  return (
    <div
      className={`rounded-lg border bg-[var(--surface)] transition-colors ${
        project.featured
          ? "border-[var(--accent)]"
          : "border-[var(--border)]"
      }`}
    >
      <div className="flex items-center gap-1.5 border-b border-[var(--border)] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8635a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#e8b93d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#3ddc97]" />
        <span className="ml-3 font-mono text-[11px] text-[var(--text-muted)]">
          {project.slug}.project
        </span>
        {project.featured && (
          <span className="ml-auto rounded-full bg-[var(--accent-soft)] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[var(--accent)]">
            featured
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display text-lg font-semibold text-[var(--text)]">{project.name}</h3>
        <p className="mt-1 text-sm text-[var(--text-muted)]">{project.tagline}</p>

        {project.featured && (
          <div className="my-5">
            <FraudLensDiagram />
          </div>
        )}

        <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-[var(--border)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
            >
              {s}
            </span>
          ))}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-4 inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--accent)]"
        >
          <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
          {open ? "hide details" : "key features"}
        </button>

        {open && (
          <ul className="mt-3 space-y-1.5 border-l-2 border-[var(--border)] pl-4">
            {project.highlights.map((h) => (
              <li key={h} className="text-sm text-[var(--text-muted)]">
                {h}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-5 flex items-center gap-4 border-t border-[var(--border)] pt-4">
          <a
            href={hasRealGithub ? project.github : undefined}
            target={hasRealGithub ? "_blank" : undefined}
            rel="noreferrer"
            aria-disabled={!hasRealGithub}
            className={`inline-flex items-center gap-1.5 font-mono text-[12px] ${
              hasRealGithub
                ? "text-[var(--text)] hover:text-[var(--accent)]"
                : "cursor-not-allowed text-[var(--text-muted)] opacity-60"
            }`}
          >
            <Github size={14} /> {hasRealGithub ? "GitHub" : "GitHub — TODO: ADD URL"}
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] text-[var(--text)] hover:text-[var(--accent)]"
            >
              <ExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
