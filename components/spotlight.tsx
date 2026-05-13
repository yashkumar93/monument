import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";


const TAGS = ["Sales Infrastructure", "Outbound · Inbound", "Ongoing"];

export function Spotlight() {
  return (
    <section
      id="work"
      className="relative mx-auto mt-10 max-w-[1240px] px-[clamp(20px,4vw,48px)] sm:mt-16 lg:mt-20"
    >
      <div className="mb-12 flex flex-col items-start justify-between gap-4 border-b border-line pb-6 sm:flex-row sm:items-center sm:gap-6">
        <Reveal>
          <span className="kicker !mb-0">Client Spotlight · 01 of 100+</span>
        </Reveal>

        <Reveal>
          <div className="flex gap-2 self-end sm:self-auto">
            <NavBtn label="Previous" direction="prev" />
            <NavBtn label="Next" direction="next" />
          </div>
        </Reveal>
      </div>

      <div className="mb-12 grid items-stretch gap-8 sm:gap-10 lg:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        <Reveal>
          <SpotVisual />
        </Reveal>

        <div className="flex flex-col justify-between py-2">
          <div>
            <Reveal>
              <div className="mb-6 flex flex-wrap items-center gap-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
                {TAGS.map((t, i) => (
                  <span key={t} className="inline-flex items-center gap-3.5">
                    {t}
                    {i < TAGS.length - 1 && (
                      <span className="inline-block h-1 w-1 rounded-full bg-accent" />
                    )}
                  </span>
                ))}
              </div>
            </Reveal>

            <div className="relative mb-8">
              <span
                aria-hidden
                className="pointer-events-none absolute left-[-0.05em] top-[-0.3em] z-0 select-none font-serif font-display text-[clamp(180px,22vw,320px)] font-light italic leading-[0.6] text-accent opacity-20"
              >
                &ldquo;
              </span>
              <blockquote className="relative z-[1] m-0 font-serif font-display text-[clamp(36px,4.6vw,72px)] font-light leading-[0.98] tracking-[-0.035em]">
                <RevealLine>I couldn&apos;t recommend</RevealLine>
                <RevealLine delay={0.06}>
                  <em>anybody higher</em> than
                </RevealLine>
                <RevealLine delay={0.12}>Monument Solutions.</RevealLine>
              </blockquote>
            </div>

            <Reveal>
              <p className="mb-8 max-w-[48ch] text-[17px] leading-[1.5] text-ink-dim">
                Monument&apos;s structured approach gave us the systems, the
                playbook, and the team training to scale predictably — without
                leaning on referrals or another agency.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <a
              href="#testimonials"
              className="group inline-flex items-center gap-3.5 self-start rounded-full border border-line-strong py-3.5 pl-6 pr-2 text-sm font-medium transition-[background-color,color,border-color,padding] duration-300 hover:border-ink hover:bg-ink hover:pl-7 hover:text-page"
            >
              Watch the full story
              <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-fg transition-transform duration-500 group-hover:-rotate-45">
                <ArrowIcon width={13} height={13} />
              </span>
            </a>
          </Reveal>
        </div>
      </div>

    </section>
  );
}

function NavBtn({
  label,
  direction,
}: {
  label: string;
  direction: "prev" | "next";
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-ink transition-[background-color,color,border-color,transform] duration-500 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-fg"
    >
      {direction === "prev" ? (
        <ArrowIcon className="rotate-180" />
      ) : (
        <ArrowIcon />
      )}
    </button>
  );
}

function SpotVisual() {
  return (
    <div className="relative aspect-[16/11] overflow-hidden rounded-[24px] border border-line bg-ink text-page sm:rounded-[28px] md:aspect-[5/4] lg:aspect-[4/5]">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(244,237,225,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,237,225,0.07) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(circle at 50% 60%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 60%, black, transparent 75%)",
        }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "75%",
          aspectRatio: 1,
          top: "30%",
          left: "-12%",
          background: "radial-gradient(circle, var(--c-accent), transparent 60%)",
          filter: "blur(28px)",
          opacity: 0.55,
          animation: "var(--animate-float)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          width: "75%",
          aspectRatio: 1,
          top: "-25%",
          right: "-15%",
          background:
            "radial-gradient(circle, var(--c-accent-soft), transparent 60%)",
          filter: "blur(28px)",
          opacity: 0.45,
          animation: "var(--animate-float)",
          animationDelay: "-7s",
        }}
      />

      <div className="absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.22em] text-page/55">
        PEL—2026
      </div>

      {/* Corner brackets */}
      <CornerBracket position="tl" />
      <CornerBracket position="tr" />
      <CornerBracket position="bl" />
      <CornerBracket position="br" />

      <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-[14px] border border-page/20 bg-ink/40 p-3 backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:gap-4 sm:p-4">
        <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-full sm:h-14 sm:w-14">
          <svg viewBox="0 0 80 80" width="100%" height="100%">
            <defs>
              <radialGradient id="spot-av" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stopColor="var(--c-accent-soft)" />
                <stop offset="100%" stopColor="var(--c-accent-deep)" />
              </radialGradient>
            </defs>
            <circle cx="40" cy="40" r="40" fill="url(#spot-av)" />
            <text
              x="40"
              y="52"
              textAnchor="middle"
              fontFamily="Fraunces, serif"
              fontSize="36"
              fontWeight="300"
              fontStyle="italic"
              fill="rgba(255,247,238,0.92)"
            >
              TS
            </text>
          </svg>
        </div>
        <div>
          <div className="font-serif font-soft text-[22px] font-light tracking-tight text-page/95">
            Trent Scott
          </div>
          <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-page/55">
            CEO · PrivateEquityLife
          </div>
        </div>
      </div>
    </div>
  );
}

function CornerBracket({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const base = "absolute h-[18px] w-[18px] border-[1.5px] border-accent";
  const map: Record<typeof position, string> = {
    tl: "top-3.5 left-3.5 border-r-0 border-b-0",
    tr: "top-3.5 right-3.5 border-l-0 border-b-0",
    bl: "bottom-3.5 left-3.5 border-r-0 border-t-0",
    br: "bottom-3.5 right-3.5 border-l-0 border-t-0",
  };
  return <span aria-hidden className={`${base} ${map[position]}`} />;
}
