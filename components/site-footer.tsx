type ColLink = { label: string; href: string };
type Col = { title: string; links: ColLink[] };

const COLS: Col[] = [
  {
    title: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Team", href: "/team" },
      { label: "Careers", href: "/careers" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Market Analysis", href: "#" },
      { label: "Sales Assets", href: "#" },
      { label: "Offer Refinement", href: "#" },
      { label: "AI Agents", href: "/ai-agents" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/monument-solutions/" },
      { label: "Facebook", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "YouTube", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-page">
      <div
        aria-hidden
        className="pt-10 text-center font-serif font-display text-[clamp(120px,22vw,300px)] font-light italic leading-[0.85] tracking-[-0.05em] select-none"
      >
        <span
          style={{
            background: "linear-gradient(180deg, var(--c-ink) 0%, transparent 88%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            opacity: 0.13,
          }}
        >
          Monument
        </span>
        <span className="text-accent" style={{ opacity: 0.55 }}>.</span>
      </div>

      <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-x-6 gap-y-10 border-t border-line px-[clamp(20px,4vw,48px)] pb-9 pt-14 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:gap-10">
        <div className="col-span-2 md:col-span-1">
          <div className="mb-5 flex items-center gap-3">
            <span className="relative grid h-8 w-8 flex-shrink-0 place-items-center rounded-[10px] bg-ink text-[19px] italic text-page">
              M
              <span
                aria-hidden
                className="absolute right-[6px] top-[6px] h-[5px] w-[5px] rounded-full bg-accent"
              />
            </span>
            <div>
              <div className="font-serif font-soft text-[20px] leading-none tracking-tight text-ink">
                Monument<em className="text-accent not-italic">.</em>
              </div>
              <div className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-ink-mute">
                Solutions · Est. 2017
              </div>
            </div>
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
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="text-sm text-ink-dim transition-colors duration-300 hover:text-accent"
                  >
                    {l.label}
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
