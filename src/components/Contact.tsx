"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { profile } from "@/data/portfolio";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="border-b border-[var(--border)] bg-[var(--surface-2)]">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 font-mono text-xs tracking-wide text-[var(--accent)]">{"// contact"}</p>
        <h2 className="font-display text-2xl font-semibold text-[var(--text)] sm:text-3xl">
          Let&apos;s work together
        </h2>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              <Mail size={18} className="text-[var(--accent)]" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              <Linkedin size={18} className="text-[var(--accent)]" />
              linkedin.com/in/amitbnaik
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              <Github size={18} className="text-[var(--accent)]" />
              github.com/amitnk88
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--surface)] p-4 text-[var(--text-muted)]">
              <MapPin size={18} className="text-[var(--accent)]" />
              {profile.location}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-lg border border-[var(--border)] bg-[var(--surface)] p-5">
            <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 mb-4 w-full rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text)]"
              placeholder="Your name"
            />
            <label htmlFor="message" className="font-mono text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
              Message
            </label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="mt-1.5 mb-5 w-full resize-none rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2 text-sm text-[var(--text)]"
              placeholder="What would you like to talk about?"
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[#0a0d12]"
            >
              <Send size={15} /> Open in email
            </button>
            <p className="mt-3 text-xs text-[var(--text-muted)]">
              Opens your email client addressed to {profile.email} — this form doesn&apos;t send messages directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
