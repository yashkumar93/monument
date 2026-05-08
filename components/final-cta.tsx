import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

const META = [
  { label: "Email", value: "hello@monument.solutions" },
  { label: "Booking", value: "2026 Q2 — limited slots" },
  { label: "Response time", value: "Within 24 hours" },
];

export function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-t border-line px-[clamp(20px,4vw,48px)] py-[clamp(100px,14vw,180px)] text-center"
      style={{
        background: "linear-gradient(180deg, var(--c-soft), var(--c-page))",
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 1200,
          height: 1200,
          background:
            "radial-gradient(circle, var(--c-accent-tint), transparent 60%)",
        }}
      />

      <div className="relative">
        <Reveal className="flex justify-center">
          <span className="kicker">Let&apos;s Build</span>
        </Reveal>

        <h2 className="mb-8 font-serif font-display text-[clamp(44px,7.5vw,110px)] font-light leading-[0.96] tracking-[-0.035em] text-balance">
          <RevealLine>We solve client</RevealLine>
          <RevealLine delay={0.08}>
            acquisition <em>&amp; scaling.</em>
          </RevealLine>
        </h2>

        <Reveal>
          <p className="mx-auto mb-10 max-w-[58ch] text-[clamp(16px,1.4vw,19px)] text-ink-dim">
            Never rely on referrals or another agency again. Build a reliable,
            scalable infrastructure that runs in the background and delivers
            predictable clients — every month.
          </p>
        </Reveal>

        <Reveal>
          <a href="#" className="btn btn--accent btn--lg mb-16">
            Book a discovery call
            <ArrowIcon width={16} height={16} />
          </a>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mx-auto grid max-w-[820px] grid-cols-1 gap-6 border-t border-line pt-10 sm:grid-cols-3">
            {META.map((m) => (
              <div key={m.label} className="text-center">
                <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                  {m.label}
                </div>
                <div className="font-serif font-soft text-[clamp(15px,1.4vw,18px)] font-light tracking-tight text-ink">
                  {m.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
