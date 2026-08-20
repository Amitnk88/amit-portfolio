import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";
import TerminalPanel from "./TerminalPanel";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="bg-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-28 md:pt-24">
        <div>
          <p className="mb-5 font-mono text-xs tracking-wide text-[var(--accent)]">
            {"// fresher"} &middot; open to work
          </p>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--text)] sm:text-5xl lg:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-xl text-lg text-[var(--text-muted)] sm:text-xl">
            {profile.headline}. Full-stack &amp; Android developer with a habit
            of shipping RAG pipelines, semantic search, and offline-first apps.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#0a0d12] transition-transform hover:-translate-y-0.5"
            >
              View projects <ArrowRight size={15} />
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-md border border-[var(--border)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              <Download size={15} /> Resume
            </a>
          </div>

          <div className="mt-7 flex items-center gap-4 text-[var(--text-muted)]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-[var(--accent)]"
            >
              <Github size={19} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[var(--accent)]"
            >
              <Linkedin size={19} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="transition-colors hover:text-[var(--accent)]"
            >
              <Mail size={19} />
            </a>
          </div>
        </div>

        <TerminalPanel />
      </div>
    </section>
  );
}
