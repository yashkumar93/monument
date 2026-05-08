import { Reveal } from "@/components/reveal";

const POSTS = [
  {
    cat: "Scaling",
    date: "APR 8 2026",
    title:
      "The CPA's Playbook for Exponential Growth: How to Scale Your Firm Without a Sales Army.",
  },
  {
    cat: "Processes",
    date: "FEB 28 2026",
    title:
      "From Manual to Magic: How AI-Powered Workflows are Transforming Accounting Firms.",
  },
  {
    cat: "Landing Pages",
    date: "MAR 15 2026",
    title:
      "Unlocking Growth Through Data: How CPA Firms Can Leverage Analytics for Strategic Decisions.",
  },
];

const SHAPE_RADIUS = ["50%", "30% 70% 70% 30% / 30% 30% 70% 70%", "50%"];

export function News() {
  return (
    <section
      id="resources"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(64px,12vw,160px)]"
    >
      <div className="mb-10 flex flex-wrap items-end md:mb-14 justify-between gap-6">
        <div>
          <Reveal>
            <span className="kicker">Resources</span>
          </Reveal>
          <Reveal>
            <h2 className="font-serif font-display text-[clamp(38px,5.4vw,76px)] font-light leading-[1.02] tracking-[-0.02em]">
              Latest from <em>our resources.</em>
            </h2>
          </Reveal>
        </div>
        <a href="#" className="btn">
          All resources →
        </a>
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map((p, i) => (
          <Reveal key={p.title}>
            <a
              href="#"
              className="group flex flex-col gap-4.5 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-line"
                style={{
                  background:
                    "linear-gradient(160deg, var(--c-deep), var(--c-soft))",
                }}
              >
                <div
                  className="absolute inset-0 opacity-80"
                  style={{
                    background:
                      "repeating-linear-gradient(45deg, transparent 0 22px, var(--c-line) 22px 23px)",
                  }}
                  aria-hidden
                />
                <div
                  className="absolute left-1/2 top-1/2 aspect-square w-[60%] -translate-x-1/2 -translate-y-1/2 transition-[transform,filter] duration-700 group-hover:scale-110 group-hover:rotate-[8deg] group-hover:blur-0"
                  style={{
                    borderRadius: SHAPE_RADIUS[i] ?? "50%",
                    background:
                      "radial-gradient(circle at 30% 30%, var(--c-accent), color-mix(in oklch, var(--c-accent) 70%, var(--c-ink)) 70%)",
                    filter: "blur(2px)",
                  }}
                  aria-hidden
                />
                <div className="absolute bottom-3.5 left-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-dim">
                  Monument · Resources
                </div>
              </div>

              <div className="flex gap-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
                <span className="text-accent">{p.cat}</span>
                <span>{p.date}</span>
              </div>
              <h3 className="font-serif font-soft text-[clamp(20px,2vw,26px)] font-light leading-[1.18] tracking-tight text-balance transition-colors duration-300 group-hover:text-accent">
                {p.title}
              </h3>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
