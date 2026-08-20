import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 font-mono text-xs tracking-wide text-[var(--accent)]">{"// experience"}</p>
        <h2 className="font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">
          Where I&apos;ve worked
        </h2>

        <div className="mt-10 space-y-8 border-l-2 border-[var(--border)] pl-6">
          {experience.map((job) => (
            <div key={job.org} className="relative">
              <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-[var(--bg)] bg-[var(--accent)]" />
              <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
                {job.duration}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-[var(--text)]">
                {job.role}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">{job.org}</p>
              <ul className="mt-3 space-y-1.5">
                {job.points.map((p) => (
                  <li key={p} className="text-sm leading-relaxed text-[var(--text)]">
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-[var(--border)] px-2 py-0.5 font-mono text-[11px] text-[var(--text-muted)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
