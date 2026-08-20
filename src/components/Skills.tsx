import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-[var(--border)] bg-[var(--surface-2)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 font-mono text-xs tracking-wide text-[var(--accent)]">{"// skills"}</p>
        <h2 className="font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">
          What I build with
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5"
            >
              <p className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
                {"// "}{group.category}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-[var(--border)] px-2.5 py-1 font-mono text-[12px] text-[var(--text)]"
                  >
                    {item}
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
