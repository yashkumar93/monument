import { Reveal } from "@/components/reveal";

type Testimonial = { q: string; n: string; r: string };

const LIST: Testimonial[] = [
  {
    q: "Monument Solutions' structured approach to scaling our practice was a game changer. Within the first quarter we'd already redefined how we acquire and retain high-value clients.",
    n: "Sophia Rodriguez",
    r: "Managing Partner · Tax Acumen LLC",
  },
  {
    q: "Their infrastructure has fundamentally changed how we operate. Predictable inbound, a sales process the team actually follows, and clean handoffs at every stage.",
    n: "William Brown",
    r: "Principal · Audit & Assurance Firm",
  },
  {
    q: "We tried agencies. We tried hiring. Monument was the first partner who actually built the system and handed us the keys — instead of selling us another retainer.",
    n: "Jane Smith",
    r: "Partner · Financial Advisory Group",
  },
  {
    q: "The discovery work alone was worth the engagement. They surfaced what our best clients actually valued — and rewrote our entire intake around it.",
    n: "Michael Anderson",
    r: "Founder & CEO · Anderson Law",
  },
  {
    q: "Monument helped us go from referral-dependent to a real acquisition engine. Quarterly revenue is up, but more importantly the pipeline is finally predictable.",
    n: "Liam Patel",
    r: "Founder · Zenith Solutions Group",
  },
  {
    q: "Operationally, we've never been tighter. The team training was the part nobody else offered — and it's the reason the system actually runs without us calling Monument every week.",
    n: "Emily Chang",
    r: "COO · Evergreen CPA Agency",
  },
];

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(64px,12vw,160px)]"
    >
      <div className="mb-12 flex flex-wrap items-end justify-between gap-10">
        <div>
          <Reveal>
            <span className="kicker">Client Voices</span>
          </Reveal>
          <Reveal>
            <h2 className="max-w-[18ch] font-serif font-display text-[clamp(38px,5.4vw,76px)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
              Partners on the <em>other side</em> of the build.
            </h2>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <p className="max-w-[40ch] text-[clamp(15px,1.3vw,18px)] text-ink-dim">
            Real words from operators who&apos;ve run the playbook — not
            curated press quotes.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {LIST.map((t) => (
          <Reveal key={t.n}>
            <figure className="group relative flex h-full flex-col gap-5 rounded-[18px] border border-line bg-surface px-6 pb-7 pt-8 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-accent sm:gap-6 sm:px-8 sm:pb-8 sm:pt-9">
              <div className="font-serif font-display text-[68px] font-light italic leading-[0.4] text-accent sm:text-[80px]">
                &ldquo;
              </div>
              <blockquote className="m-0 flex-1 font-serif font-soft text-[17px] font-light leading-[1.4] sm:text-[19px]">
                {t.q}
              </blockquote>
              <figcaption className="flex items-center gap-3.5 border-t border-line pt-5">
                <div className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-ink text-[13px] text-page font-mono">
                  {initials(t.n)}
                </div>
                <div className="min-w-0">
                  <div className="font-serif font-soft text-[16px] leading-tight sm:text-[17px]">
                    {t.n}
                  </div>
                  <div className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-mute">
                    {t.r}
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
