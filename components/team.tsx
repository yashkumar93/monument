import { Reveal, RevealLine } from "@/components/reveal";

const MEMBERS = [
  {
    name: "Brody Billings",
    role: "Founder — CEO",
    bio: "With a proven track record of scaling businesses to seven figures, Brody is our visionary leader, spearheading growth initiatives and setting the pace for success.",
    gradient:
      "linear-gradient(155deg, #d8c8a8 0%, #b89a72 50%, #6e5638 100%)",
    glyph: "B",
    youtube: "#",
    linkedin: "#",
  },
  {
    name: "Talal Tariq",
    role: "COO",
    bio: "Talal brings invaluable experience in scaling CPA businesses to new heights, driving forward-thinking strategies that lead to structure and vision.",
    gradient:
      "linear-gradient(155deg, #f4c97a 0%, #c97a3e 50%, #2a1810 100%)",
    glyph: "T",
    youtube: "#",
    linkedin: "#",
  },
];

export function TeamHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-20 pt-[140px] sm:pb-24 md:pt-[180px]"
    >
      <h1 className="mb-6 max-w-full font-serif font-display text-[clamp(48px,9vw,120px)] font-light leading-[0.95] tracking-[-0.04em]">
        <RevealLine>
          Meet the <em>Team</em>
        </RevealLine>
      </h1>

      <Reveal>
        <p className="mb-8 max-w-[44ch] text-[16px] leading-[1.55] text-ink-dim">
          Get acquainted with the dedicated individuals who bring innovation,
          structure, and excellence to every project.
        </p>
      </Reveal>

      <Reveal>
        <div className="inline-flex items-center gap-3 font-mono text-[12.5px] tracking-[0.02em] text-ink-dim">
          <span className="inline-flex gap-0.5 text-accent" aria-hidden>
            {[0, 1, 2, 3, 4].map((i) => (
              <StarIcon key={i} />
            ))}
          </span>
          <span>
            Trusted by{" "}
            <strong className="font-medium text-ink">100+ businesses</strong>
          </span>
        </div>
      </Reveal>
    </section>
  );
}

export function TeamGrid() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-[clamp(80px,10vw,140px)]">
      <div className="grid max-w-[920px] grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
        {MEMBERS.map((m) => (
          <Reveal key={m.name}>
            <article className="flex flex-col">
              <div
                className="relative mb-5 aspect-square overflow-hidden rounded-[14px] shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)]"
                style={{ background: m.gradient }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    backgroundImage: [
                      "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.22), transparent 45%)",
                      "radial-gradient(circle at 75% 80%, rgba(0,0,0,0.30), transparent 55%)",
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 4px)",
                    ].join(","),
                  }}
                />
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 font-serif font-display font-light italic leading-none"
                  style={{
                    fontSize: "18rem",
                    color: "rgba(255, 247, 238, 0.28)",
                    transform: "translate(-50%, -54%)",
                  }}
                >
                  {m.glyph}
                </div>
              </div>

              <div>
                <h2 className="mb-1.5 font-serif font-soft text-[clamp(22px,2vw,28px)] font-normal leading-[1.1] tracking-[-0.018em]">
                  {m.name}
                </h2>
                <div className="mb-4 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
                  {m.role}
                </div>
                <p className="mb-5 max-w-[42ch] text-[14.5px] leading-[1.55] text-ink-dim">
                  {m.bio}
                </p>
                <div className="flex gap-2">
                  <SocialLink href={m.youtube} label="YouTube">
                    <YoutubeIcon />
                  </SocialLink>
                  <SocialLink href={m.linkedin} label="LinkedIn">
                    <LinkedinIcon />
                  </SocialLink>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-ink transition-[background-color,color,border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-fg"
    >
      {children}
    </a>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23 7.5s-.2-1.5-.9-2.2c-.8-.9-1.7-.9-2.1-1C17 4 12 4 12 4s-5 0-8 .3c-.4.1-1.3.1-2.1 1C1.2 6 1 7.5 1 7.5S.8 9.3.8 11.1v1.7c0 1.8.2 3.6.2 3.6s.2 1.5.9 2.2c.8.9 1.9.9 2.4 1 1.7.2 7.7.3 7.7.3s5 0 8-.3c.4-.1 1.3-.1 2.1-1 .7-.7.9-2.2.9-2.2s.2-1.8.2-3.6v-1.7c0-1.8-.2-3.6-.2-3.6zM9.7 14.6V8.4l6.4 3.1-6.4 3.1z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 17H5.5v-7H8v7zM6.7 8.7c-.8 0-1.4-.6-1.4-1.4s.6-1.4 1.4-1.4 1.4.6 1.4 1.4-.6 1.4-1.4 1.4zM18 17h-2.5v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2V17H10.5v-7H13v1c.4-.7 1.3-1.2 2.3-1.2 2.5 0 2.9 1.6 2.9 3.7V17z" />
    </svg>
  );
}
