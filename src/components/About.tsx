import { profile, education } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 font-mono text-xs tracking-wide text-[var(--accent)]">{"// about"}</p>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <p className="text-lg leading-relaxed text-[var(--text)] sm:text-xl">
            {profile.summary}
          </p>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
              Education
            </p>
            <p className="mt-2 font-display text-base font-medium text-[var(--text)]">
              {education.degree}
            </p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">{education.institution}</p>
            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {education.detail} &middot; {education.duration}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
