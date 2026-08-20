import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/portfolio";

export default function Certifications() {
  return (
    <section id="certifications" className="border-b border-[var(--border)] bg-[var(--surface-2)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 font-mono text-xs tracking-wide text-[var(--accent)]">{"// certifications"}</p>
        <h2 className="font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">
          Certifications &amp; achievements
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {certifications.map((cert) => {
            const hasUrl = cert.url && cert.url !== "TODO: ADD URL";
            return (
              <div
                key={cert.name}
                className="flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4"
              >
                <Award size={18} className="mt-0.5 shrink-0 text-[var(--accent)]" />
                <div className="min-w-0">
                  <p className="font-medium leading-snug text-[var(--text)]">{cert.name}</p>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">{cert.issuer}</p>
                  {hasUrl && (
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 font-mono text-[11px] text-[var(--accent)]"
                    >
                      <ExternalLink size={11} /> credential
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
