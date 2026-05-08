import { Reveal } from "@/components/reveal";

const STATS = [
  { v: "$45M+", l: "Revenue generated for partners" },
  { v: "100+", l: "Firms scaled with Monument" },
  { v: "92%", l: "Client referral rate" },
  { v: "10×", l: "Typical ROI in year one" },
];

export function Numbers() {
  return (
    <section
      aria-label="Monument in Numbers"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(64px,12vw,160px)]"
    >
      <Reveal>
        <span className="kicker">Monument in Numbers</span>
      </Reveal>

      <div className="mb-12 grid items-end gap-8 md:mb-16 md:gap-12 md:grid-cols-[1.1fr_1fr] md:gap-15">
        <Reveal>
          <h2 className="max-w-[16ch] font-serif font-display text-[clamp(38px,5.4vw,76px)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
            Streamlined infrastructure,{" "}
            <em>compounding output.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[56ch] text-[clamp(15px,1.3vw,18px)] text-ink-dim">
            Being highly streamlined is the key to minimize friction and
            maximize operational efficiency. All partners get access to a
            tailored infrastructure that allows them to explosively scale.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 border-l border-t border-line lg:grid-cols-4">
        {STATS.map((s, i) => (
          <Reveal key={s.l}>
            <div className="flex h-full flex-col gap-3 border-b border-r border-line p-6 transition-colors duration-500 hover:bg-surface sm:p-10">
              <div
                className={`font-serif font-display text-[clamp(40px,6vw,96px)] font-light leading-[0.95] tracking-[-0.04em] ${
                  i % 2 === 0 ? "text-accent" : "text-ink"
                }`}
              >
                {s.v}
              </div>
              <div className="max-w-[22ch] font-mono text-[10.5px] uppercase tracking-[0.15em] text-ink-mute sm:text-[11px]">
                {s.l}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
