import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-mono text-xs text-[var(--text-muted)]">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind.
        </p>
        <div className="flex items-center gap-4 text-[var(--text-muted)]">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[var(--accent)]">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[var(--accent)]">
            <Linkedin size={16} />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-[var(--accent)]">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
