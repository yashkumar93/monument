const COLS = [
  { title: "Pages", links: ["Home", "Our Team", "Careers", "Resources"] },
  {
    title: "Services",
    links: ["Market Analysis", "Sales Assets", "Offer Refinement", "AI Agents"],
  },
  { title: "Follow Us", links: ["LinkedIn", "Facebook", "Twitter / X", "YouTube"] },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-page">
      <div
        aria-hidden
        className="pt-10 text-center font-serif font-display text-[clamp(120px,22vw,300px)] font-light italic leading-[0.85] tracking-[-0.05em] opacity-15 select-none"
        style={{
          background: "linear-gradient(180deg, var(--c-ink) 0%, transparent 88%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Monument
      </div>

      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-6 gap-y-10 border-t border-line px-[clamp(20px,4vw,48px)] pb-9 pt-14 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-3 font-serif font-soft text-[24px] tracking-tight sm:text-[26px]">
            Monument <em>Solutions</em>
          </div>
          <div className="mb-5 max-w-[38ch] text-sm text-ink-dim">
            We solve client acquisition and scaling for ambitious businesses.
          </div>
          <address className="mb-5 not-italic text-[13px] leading-[1.6] text-ink-dim">
            <a
              href="mailto:hello@monument.solutions"
              className="text-accent hover:underline"
            >
              hello@monument.solutions
            </a>
          </address>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Open for projects · 2026 Q2
          </div>
        </div>

        {COLS.map((col) => (
          <div key={col.title}>
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
              {col.title}
            </div>
            <ul className="space-y-1.5">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="text-sm text-ink-dim transition-colors duration-300 hover:text-accent"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 border-t border-line px-[clamp(20px,4vw,48px)] py-5 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute sm:flex-row sm:flex-wrap">
        <span>© Monument Solutions 2026 — All rights reserved</span>
        <span>Built for founders &amp; partners who scale</span>
      </div>
    </footer>
  );
}
