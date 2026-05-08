import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    n: "01",
    t: "Discovery Call",
    body: "We listen first. A working session to understand your offer, your team, and the specific friction killing growth right now.",
    meta: "Week 1",
  },
  {
    n: "02",
    t: "Roadmap Creation",
    body: "A custom infrastructure plan: assets to build, channels to open, and the operating cadence your team will run.",
    meta: "Weeks 2–3",
  },
  {
    n: "03",
    t: "Fulfillment",
    body: "We build it with you and train your team to operate it. You leave with the system — not a dependency.",
    meta: "Weeks 4+",
  },
];

export function Method() {
  return (
    <section
      id="method"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(64px,12vw,160px)]"
    >
      <Reveal>
        <span className="kicker">Path to Growth</span>
      </Reveal>

      <div className="mb-12 grid items-end gap-8 md:mb-18 md:gap-12 md:grid-cols-[1.3fr_1fr] md:gap-15">
        <Reveal>
          <h2 className="max-w-[18ch] font-serif font-display text-[clamp(38px,5.4vw,76px)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
            Your path to growth <em>starts like this.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[56ch] text-[clamp(16px,1.4vw,19px)] text-ink-dim">
            We build you the infrastructure that will allow you to scale — and
            show you how to operate it.
          </p>
        </Reveal>
      </div>

      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-3">
        {STEPS.map((s) => (
          <Reveal key={s.n}>
            <div className="flex h-full flex-col gap-3.5 bg-page px-7 pb-8 pt-9 transition-colors duration-500 hover:bg-soft">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                {s.n}
              </div>
              <h3 className="font-serif font-soft text-[clamp(26px,2.6vw,34px)] font-light leading-[1.05] tracking-[-0.02em]">
                {s.t}
              </h3>
              <p className="flex-1 text-[14.5px] text-ink-dim">{s.body}</p>
              <div className="border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
                {s.meta}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.05}>
        <div className="mt-14 grid grid-cols-1 items-center gap-10 rounded-[24px] border border-line bg-card px-[clamp(24px,4vw,56px)] py-9 sm:rounded-[28px] sm:py-12 md:mt-18 md:grid-cols-[1.3fr_1fr] md:gap-14">
          <div>
            <p className="mb-4 font-serif font-soft text-[clamp(19px,2.1vw,28px)] font-light leading-[1.3] tracking-tight text-pretty">
              &ldquo;30 days in, the new inbound system{" "}
              <em>booked 55 appointments</em> at $20–$30 per lead. We&apos;ve
              already closed 7 retainers at $900/mo each.&rdquo;
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
              — Hunter Morley · Hive Insurance
            </div>
          </div>

          <div className="border-t border-line pt-6 md:border-l md:border-t-0 md:pl-14 md:pt-0 md:text-right">
            <div className="font-serif font-display text-[clamp(56px,8vw,120px)] font-light leading-none tracking-[-0.04em] text-accent">
              55
            </div>
            <div className="mt-3 max-w-[28ch] font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute md:ml-auto md:mt-3.5">
              Appointments booked in first 30 days
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
