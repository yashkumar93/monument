import { Reveal } from "@/components/reveal";

const LOGOS = [
  "PrivateEquityLife",
  "Tax Acumen",
  "Audit & Assurance",
  "Financial Advisory",
  "Anderson Law",
  "Zenith Solutions",
  "Evergreen CPA",
  "Hive Insurance",
  "Lockwood & Ash",
  "Bright Counsel",
  "North Tax Group",
  "Atlas Advisory",
];

export function LogoWall() {
  return (
    <section
      aria-label="Clients"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(60px,8vw,96px)]"
    >
      <div className="mb-9 flex flex-wrap items-baseline justify-between gap-6">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
          Trusted by founders &amp; partners at
        </span>
        <Reveal inline>
          <span className="font-serif font-soft text-[clamp(18px,1.6vw,22px)] font-light italic tracking-tight text-ink-dim">
            100+ businesses across North America
          </span>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-3 lg:grid-cols-4">
        {LOGOS.map((logo) => (
          <div
            key={logo}
            className="grid min-h-[86px] place-items-center bg-page px-4.5 py-7 text-center font-serif font-soft text-[clamp(15px,1.4vw,19px)] font-light italic tracking-tight text-ink-dim transition-[background-color,color] duration-300 hover:bg-soft hover:text-accent"
          >
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
}
