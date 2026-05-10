import Link from "next/link";
import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

type Article = {
  cat: string;
  date: string;
  title: string;
  gradient: string;
  glyph: string;
  href: string;
};

const ARTICLES: Article[] = [
  {
    cat: "Scaling",
    date: "Apr 8, 2026",
    title:
      "The CPA's Playbook for Exponential Growth: How to Scale Your Firm Without a Sales Army",
    gradient:
      "linear-gradient(155deg, #5e6b73 0%, #2a2f33 50%, #0f1216 100%)",
    glyph: "⌘",
    href: "/resources/scaling",
  },
  {
    cat: "Processes",
    date: "Feb 28, 2026",
    title:
      "From Manual to Magic: How AI-Powered Workflows are Transforming Accounting Firms",
    gradient:
      "linear-gradient(135deg, #c97a3e 0%, #6e3a1c 50%, #1a1410 100%)",
    glyph: "AI",
    href: "/resources/from-manual-to-magic",
  },
  {
    cat: "Landing Pages",
    date: "Mar 15, 2026",
    title:
      "Unlocking Growth Through Data: How CPA Firms Can Leverage Analytics for Strategic Decision-Making",
    gradient:
      "linear-gradient(135deg, #2d5a8a 0%, #c93a6e 70%, #1a0f1a 100%)",
    glyph: "01",
    href: "/resources/unlocking-growth-data",
  },
];

export function ResourcesHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-14 pt-[140px] md:pt-[180px]"
    >
      <h1 className="mb-6 max-w-full font-serif font-display text-[clamp(60px,9vw,120px)] font-light leading-[0.95] tracking-[-0.04em]">
        <RevealLine>Resources</RevealLine>
      </h1>

      <Reveal>
        <p className="mb-7 max-w-[44ch] text-[16px] leading-[1.55] text-ink-dim">
          Access industry trends, expert advice, and practical tips to elevate
          your marketing success.
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

export function ArticlesGrid() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-[clamp(80px,10vw,140px)] pt-6">
      <div className="grid max-w-[1080px] grid-cols-1 gap-9 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
        {ARTICLES.map((a) => (
          <Reveal key={a.title}>
            <Link
              href={a.href}
              className="group flex flex-col text-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1"
            >
              <div
                className="relative mb-[18px] overflow-hidden rounded-[8px]"
                style={{ aspectRatio: "16 / 11", background: a.gradient }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 mix-blend-overlay"
                  style={{
                    backgroundImage: [
                      "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 50%)",
                      "radial-gradient(circle at 75% 70%, rgba(0,0,0,0.4), transparent 55%)",
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0 2px, transparent 2px 4px)",
                    ].join(","),
                  }}
                />
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 font-serif font-display font-light italic leading-none tracking-[-0.03em]"
                  style={{
                    fontSize: "7rem",
                    color: "rgba(255, 247, 238, 0.85)",
                    transform: "translate(-50%, -52%)",
                  }}
                >
                  {a.glyph}
                </div>
                <span
                  aria-hidden
                  className="absolute right-[14px] top-[14px] grid h-[34px] w-[34px] -translate-y-1 scale-90 place-items-center rounded-full border border-[rgba(244,237,225,0.18)] bg-[rgba(20,17,13,0.55)] text-[#f4ede1] opacity-0 backdrop-blur-md transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                >
                  <ArrowIcon width={14} height={14} />
                </span>
              </div>

              <div className="mb-[14px] inline-flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-[0.18em] text-ink-mute">
                <span>{a.cat}</span>
                <span className="opacity-50">—</span>
                <span>{a.date}</span>
              </div>

              <h2 className="m-0 font-serif font-soft text-[clamp(18px,1.5vw,22px)] font-normal leading-[1.25] tracking-[-0.012em] text-pretty transition-colors duration-300 group-hover:text-accent">
                {a.title}
              </h2>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 2l2.9 6.9L22 10l-5.5 4.8L18 22l-6-3.6L6 22l1.5-7.2L2 10l7.1-1.1z" />
    </svg>
  );
}
