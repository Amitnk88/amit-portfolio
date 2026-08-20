import { projects } from "@/data/portfolio";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-[var(--border)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 font-mono text-xs tracking-wide text-[var(--accent)]">{"// projects"}</p>
        <h2 className="font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">
          Featured work
        </h2>

        <div className="mt-10 grid gap-6">
          {featured && <ProjectCard project={featured} />}
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
