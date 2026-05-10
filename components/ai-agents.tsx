"use client";

import { useState } from "react";
import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

/* ============================================================
   AI Hero
   ============================================================ */

const HERO_CHIPS: [string, string][] = [
  ["30%", "Cut costs by up to"],
  ["60%", "Slash wait times by"],
  ["24/7", "Customer support"],
  ["3×", "Industries served"],
];

export function AIHero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-20 pt-[120px] sm:pb-24 md:pt-[140px]"
    >
      <Reveal>
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4 border-b border-line pb-7 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute sm:mb-14">
          <span className="inline-flex items-center gap-2">
            (01){" "}
            <em className="font-serif text-[14px] not-italic text-accent">
              <span className="italic">AI / Agents</span>
            </em>
          </span>
          <span>Booking · 2026 Q3</span>
        </div>
      </Reveal>

      <h1 className="mb-12 font-serif font-display text-[clamp(48px,9.5vw,152px)] font-normal leading-[0.96] tracking-[-0.035em] sm:mb-16">
        <RevealLine>Transform your</RevealLine>
        <RevealLine delay={0.06}>operations with</RevealLine>
        <span className="block">
          <RevealLine delay={0.12}>
            <span className="inline-flex flex-wrap items-center gap-5 sm:gap-7">
              <em className="font-light italic text-accent">AI-powered</em>
              <span className="inline-flex items-center gap-2 rounded-full border border-line-strong px-4 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-dim">
                <span className="pulse-dot inline-block h-[7px] w-[7px] rounded-full bg-accent" />
                Always on
              </span>
            </span>
          </RevealLine>
        </span>
        <RevealLine delay={0.18}>receptionists.</RevealLine>
      </h1>

      <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="flex flex-col gap-8">
          <Reveal>
            <p className="m-0 max-w-[42ch] font-serif font-soft text-[clamp(17px,1.6vw,22px)] font-light leading-[1.45] tracking-tight text-ink">
              Experience seamless efficiency with AI-Powered Receptionists —
              automate routine tasks, modernize your business, boost customer
              satisfaction, and stay ahead of the competition.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 border-l border-t border-line">
            {HERO_CHIPS.map(([n, l]) => (
              <Reveal key={l}>
                <div className="border-b border-r border-line px-5 py-5 sm:px-6 sm:py-6">
                  <div className="mb-1.5 font-serif font-soft text-[clamp(28px,3vw,42px)] font-normal italic leading-none text-accent">
                    {n}
                  </div>
                  <div className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-dim sm:text-[11px]">
                    {l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="flex flex-wrap items-center gap-5">
              <a href="#demo" className="btn btn--ink btn--lg">
                Book your live demo
                <ArrowIcon />
              </a>
              <span className="max-w-[18ch] font-mono text-[10.5px] uppercase leading-[1.6] tracking-[0.16em] text-ink-mute">
                For Healthcare, Hospitality &amp; Corporate Offices
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <DemoCard />
        </Reveal>
      </div>
    </section>
  );
}

function DemoCard() {
  // Pre-compute wave heights so SSR/CSR match (no Math.random in render).
  const waveHeights = Array.from({ length: 44 }, (_, i) =>
    Math.round(24 + Math.abs(Math.sin(i * 0.5)) * 46 + (i % 5) * 4),
  );

  return (
    <aside className="relative flex flex-col gap-3.5">
      <span className="inline-flex items-center gap-2 self-start rounded-full border border-line-strong px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-dim">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden className="text-accent">
          <path d="M3 9v6a2 2 0 0 0 2 2h2l5 4V3L7 7H5a2 2 0 0 0-2 2z" />
        </svg>
        Listen to the demo
      </span>

      <div className="relative flex min-h-[240px] flex-col gap-5 overflow-hidden rounded-xl bg-ink p-7 text-page">
        <div
          aria-hidden
          className="pointer-events-none absolute right-[-20%] top-[-40%] h-[280px] w-[280px]"
          style={{
            background:
              "radial-gradient(circle, color-mix(in oklch, var(--c-accent) 38%, transparent), transparent 65%)",
          }}
        />

        <div className="relative z-[2] flex flex-col gap-1">
          <span className="font-serif font-soft text-[28px] font-normal italic tracking-tight">
            Emma
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-60">
            Intake Specialist · #00042
          </span>
        </div>

        <button
          type="button"
          aria-label="Play"
          className="absolute right-6 top-6 z-[3] grid h-14 w-14 place-items-center rounded-full border-0 bg-accent text-accent-fg transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-105"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        <div className="relative z-[2] flex h-[60px] items-center gap-[3px]">
          {waveHeights.map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-[2px] ${
                i % 3 === 2 ? "bg-accent opacity-80" : "bg-current opacity-40"
              }`}
              style={{ height: `${h}%`, minHeight: 4 }}
            />
          ))}
        </div>

        <div className="flex justify-between font-mono text-[10px] tracking-[0.14em] opacity-60">
          <span>00:00</span>
          <span>01:42</span>
        </div>
      </div>

      <p className="m-0 pt-1 font-serif font-soft text-[13px] italic leading-[1.5] text-ink-mute">
        Emma — 1 of 100,000 charming intake specialists. Handles even the worst
        German-American accent.
      </p>
    </aside>
  );
}

/* ============================================================
   AI Integrations marquee
   ============================================================ */

const TOOLS = [
  "Zapier",
  "HighLevel",
  "Close",
  "Salesforce",
  "HubSpot",
  "Twilio",
  "Calendly",
  "Notion",
];

export function AIIntegrate() {
  return (
    <section className="overflow-hidden border-y border-line py-14">
      <Reveal>
        <div className="mx-auto mb-9 flex max-w-[1240px] items-baseline gap-6 px-[clamp(20px,4vw,48px)] font-serif font-soft text-[clamp(17px,1.6vw,22px)] font-normal tracking-tight text-ink">
          <span className="font-mono text-[11px] font-medium tracking-[0.18em] text-ink-mute">
            (02)
          </span>
          <span>Stack-native — integrates with the tools you already run.</span>
        </div>
      </Reveal>

      <div className="mask-fade-x overflow-hidden">
        <div className="marquee-track items-center whitespace-nowrap" aria-hidden>
          {[0, 1].map((pass) => (
            <div key={pass} className="flex items-center">
              {TOOLS.map((t, i) => (
                <span
                  key={`${pass}-${t}`}
                  className="inline-flex items-center gap-8 pr-8"
                >
                  <em
                    className={`font-serif font-soft text-[clamp(40px,5vw,72px)] font-normal italic tracking-[-0.025em] ${
                      i % 3 === 2 ? "text-accent" : "text-ink"
                    }`}
                  >
                    {t}
                  </em>
                  <span className="font-serif font-soft text-[clamp(36px,4vw,56px)] font-light text-ink-mute">
                    /
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AI What — “What are MS AI Agents?”
   ============================================================ */

export function AIWhat() {
  return (
    <section
      id="what"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(80px,12vw,160px)]"
    >
      <SectionHead num="(03)" label="The brief" />

      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <Reveal>
            <h2 className="mb-6 font-serif font-display text-[clamp(40px,5.2vw,80px)] font-normal leading-[0.98] tracking-[-0.028em]">
              What are <em className="font-light italic text-accent">MS&nbsp;AI Agents?</em>
            </h2>
          </Reveal>
          <Reveal>
            <div className="font-serif font-soft text-base italic text-ink-mute">
              — Monument Solutions, est. 2024
            </div>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5.5">
          <Reveal>
            <p className="m-0 font-serif font-soft text-[clamp(18px,1.8vw,26px)] font-normal leading-[1.35] tracking-tight text-ink">
              Monument Solutions is a boutique IT and marketing consulting firm.
              In <strong className="font-medium text-accent">2024</strong>, we
              expanded our scope to include highly customizable AI agents for
              the healthcare, hospitality and office industries.
            </p>
          </Reveal>
          <Reveal>
            <p className="m-0 text-[15.5px] leading-[1.6] text-ink-dim text-pretty">
              MS AI Agents are smart, virtual assistants designed to handle
              tasks like answering calls, scheduling appointments, and assisting
              customers with common inquiries. They work 24/7, helping
              businesses improve efficiency and customer satisfaction. Whether
              it&apos;s a busy hospital, a hotel front desk, or an office
              reception, our AI agents manage the repetitive tasks so your
              staff can focus on more important work.
            </p>
          </Reveal>
          <Reveal>
            <p className="m-0 text-[15.5px] leading-[1.6] text-ink-dim text-pretty">
              Additionally, MS AI Agents seamlessly integrate with your CRM
              systems, automatically filling in customer data and updating
              records in real-time. This means less manual entry for your
              staff, fewer errors, and a smoother workflow.
            </p>
          </Reveal>
          <Reveal>
            <p className="m-0 border-t border-line pt-3 text-[15.5px] leading-[1.6] text-ink text-pretty">
              With MS AI Agents, you get an affordable, reliable solution that
              reduces costs, improves your service, and frees up your team for
              higher-value tasks.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   AI Reasons — 4 numbered rows
   ============================================================ */

const REASONS = [
  {
    n: "01",
    t: "24/7 Availability",
    s: "Real-time customer support",
    b: "MS AI Agents are always available, handling customer inquiries, scheduling, and information requests even when your human staff isn't. Your business never misses an opportunity to serve customers — no matter the time zone or workload.",
  },
  {
    n: "02",
    t: "Seamless CRM Integration",
    s: "Enhanced accuracy",
    b: "By automatically integrating with your existing CRM, MS AI Agents fill in and update customer data in real-time, reducing manual entry and minimizing errors. The result: faster decision-making and improved service delivery.",
  },
  {
    n: "03",
    t: "Cost-Effective & Scalable",
    s: "Down up to 30%",
    b: "MS AI Agents reduce the need for full-time staff to manage routine tasks, cutting down operational costs by up to 30%. Whether your business is large or small, the AI solution scales with your needs.",
  },
  {
    n: "04",
    t: "Personalized Interactions",
    s: "Improved satisfaction",
    b: "With advanced natural language processing, MS AI Agents offer personalized, friendly interactions that improve satisfaction and loyalty. They respond quickly, help with common questions, and ensure customers feel valued.",
  },
];

export function AIReasons() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-[clamp(80px,12vw,160px)]">
      <SectionHead num="(04)" label="Why us" />

      <Reveal>
        <h2 className="mb-12 font-serif font-display text-[clamp(38px,5vw,76px)] font-normal leading-[0.98] tracking-[-0.028em] sm:mb-16">
          <span>Four reasons to run your</span>
          <br />
          <em className="font-light italic text-accent">business with us.</em>
        </h2>
      </Reveal>

      <ol className="m-0 list-none border-t border-line-strong p-0">
        {REASONS.map((r) => (
          <Reveal key={r.n}>
            <li className="group relative grid items-start gap-x-4 gap-y-3 border-b border-line py-9 transition-[padding,background-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:px-4 sm:gap-x-10 sm:py-9 md:grid-cols-[60px_1.1fr_1.6fr_40px]">
              <div className="font-mono text-xs uppercase tracking-[0.16em] text-ink-mute sm:pt-2">
                {r.n}
              </div>
              <div>
                <h3 className="m-0 mb-1.5 font-serif font-soft text-[clamp(22px,2.4vw,34px)] font-normal leading-[1.1] tracking-[-0.018em]">
                  {r.t}
                </h3>
                <div className="font-serif font-soft text-base italic text-accent">
                  {r.s}
                </div>
              </div>
              <p className="col-span-full m-0 max-w-[52ch] text-[14.5px] leading-[1.6] text-ink-dim md:col-span-1">
                {r.b}
              </p>
              <div className="hidden text-ink-mute transition-[color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:-rotate-12 group-hover:text-accent md:block md:pt-2">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
                  <path
                    d="M5 11h12m0 0l-5-5m5 5l-5 5"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

/* ============================================================
   AI Quote — pull quote section
   ============================================================ */

export function AIQuote() {
  return (
    <section className="relative mx-auto max-w-[900px] border-y border-line px-[clamp(20px,4vw,48px)] py-[clamp(64px,10vw,130px)] text-center">
      <Reveal>
        <div
          aria-hidden
          className="-mb-12 select-none font-serif font-display text-[clamp(180px,22vw,320px)] font-light italic leading-[0.6] text-accent opacity-20 sm:-mb-12"
        >
          &ldquo;
        </div>
      </Reveal>

      <Reveal>
        <blockquote className="m-0 mb-8 font-serif font-display text-[clamp(26px,3.4vw,52px)] font-normal leading-[1.15] tracking-[-0.022em] text-balance">
          We replaced our after-hours service in a weekend.
          <br />
          <em className="font-light italic text-accent">
            The team thinks Emma is on payroll.
          </em>
        </blockquote>
      </Reveal>

      <Reveal>
        <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-dim">
          <strong className="font-medium text-ink">K. Mendelsohn</strong>{" "}
          &nbsp;·&nbsp; Practice Manager, three-location dental group
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================
   AI Steps — 3-step grid
   ============================================================ */

const STEPS = [
  {
    n: "1",
    t: "Consultation",
    d: "01 / Discovery",
    b: "We start with a free consultation to learn about your business needs. This helps us understand your current processes and identify where AI can make the most impact.",
  },
  {
    n: "2",
    t: "Customization",
    d: "02 / Build",
    b: "Next, we customize the AI to match your business. We integrate it with your systems, set up scheduling and customer-question features, and tailor it to your specific workflows.",
  },
  {
    n: "3",
    t: "Implementation",
    d: "03 / Launch",
    b: "Finally, we implement the AI into your daily operations and train your team. You'll be up and running quickly, with ongoing support to ensure everything works smoothly.",
  },
];

export function AISteps() {
  return (
    <section
      id="process"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(80px,12vw,160px)]"
    >
      <SectionHead num="(05)" label="The process" />

      <Reveal>
        <h2 className="mb-12 font-serif font-display text-[clamp(38px,5vw,76px)] font-normal leading-[0.98] tracking-[-0.028em] sm:mb-16">
          A three-step path to{" "}
          <em className="font-light italic text-accent">get started.</em>
        </h2>
      </Reveal>

      <div className="mb-14 grid grid-cols-1 border-l border-t border-line md:grid-cols-3">
        {STEPS.map((s) => (
          <Reveal key={s.n}>
            <article className="group relative flex h-full flex-col border-b border-r border-line px-7 pb-10 pt-9 transition-colors duration-500 hover:bg-accent-tint">
              <div className="mb-8 flex items-center gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
                  {s.d}
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
              <div className="mb-6 font-serif font-display text-[clamp(96px,11vw,168px)] font-light italic leading-[0.85] tracking-[-0.04em] text-accent">
                {s.n}
              </div>
              <h3 className="m-0 mb-3 font-serif font-soft text-[clamp(22px,2vw,28px)] font-normal tracking-[-0.018em]">
                {s.t}
              </h3>
              <p className="m-0 text-sm leading-[1.6] text-ink-dim">{s.b}</p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-6 text-center">
          <span className="font-serif font-soft text-[clamp(18px,1.8vw,26px)] font-normal italic text-ink-dim">
            Ready to get started?
          </span>
          <a href="#demo" className="btn btn--ink btn--lg">
            Book your live demo
            <ArrowIcon />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================
   AI FAQ — accordion
   ============================================================ */

const FAQ: [string, string][] = [
  [
    "How do MS AI agents integrate with my existing systems?",
    "The agents are designed to work seamlessly with popular CRM systems like Salesforce, HubSpot, and Microsoft Dynamics. Once integrated, they automatically update and pull in customer data, ensuring accuracy and reducing manual data entry for your team.",
  ],
  [
    "Is customer data handled securely?",
    "Yes. The system is compliant with major data privacy regulations, including GDPR and HIPAA. All data is encrypted and securely stored, ensuring that sensitive customer information is protected at all times.",
  ],
  [
    "Can I customize the AI to match my business’s needs?",
    "Absolutely. You can personalize everything from tone of voice, language preferences, to the specific tasks the AI handles. Whether you want it to focus on appointment scheduling, customer service, or data collection, the system can be tailored to your exact needs.",
  ],
  [
    "What happens if the AI can’t answer a customer’s question?",
    "When the AI encounters a question it can’t handle, it escalates the issue to a human staff member, providing all relevant details so they can step in seamlessly. This ensures no interruption in service quality.",
  ],
  [
    "Will this replace my staff?",
    "No. The AI is designed to enhance your staff’s efficiency by automating repetitive tasks, allowing them to focus on more complex, value-driven activities. It complements your team rather than replacing them.",
  ],
  [
    "What is the pricing structure?",
    "Pricing is typically based on your company’s size and specific needs, with a monthly subscription model and a usage fee in the cents per call minute range. On average, businesses see a 30% reduction in administrative costs, making it a cost-effective alternative to traditional staffing.",
  ],
  [
    "How quickly can the system be implemented?",
    "Most businesses can be up and running within 2 to 4 weeks, depending on the complexity of your existing systems. Our team provides full support during setup and customization.",
  ],
  [
    "Can the AI interact with customers in multiple languages?",
    "Yes, the system supports multiple languages, making it ideal for businesses with diverse customer bases. This feature allows for personalized, multilingual customer service experiences.",
  ],
  [
    "What kind of ongoing support is available?",
    "We provide technical support along with regular updates to improve performance and add new features. Our team is always available to troubleshoot and help optimize the system as your needs evolve.",
  ],
  [
    "What if my business grows or changes?",
    "The system is fully scalable, meaning it can grow alongside your business. Whether you need to add more features or handle an increase in customer inquiries, the AI can be easily adapted to meet new demands.",
  ],
];

export function AIFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-[1080px] px-[clamp(20px,4vw,48px)] pb-[clamp(80px,14vw,160px)]"
    >
      <SectionHead num="(06)" label="Still not sure?" />

      <Reveal>
        <h2 className="mb-4 font-serif font-display text-[clamp(38px,5vw,76px)] font-normal leading-[0.98] tracking-[-0.028em]">
          Frequently <em className="font-light italic text-accent">asked questions.</em>
        </h2>
      </Reveal>

      <Reveal>
        <p className="mb-14 max-w-[56ch] font-serif font-soft text-[clamp(16px,1.4vw,20px)] font-light leading-[1.5] text-ink-dim">
          Get answers to your top questions and see how we can help your
          business thrive with cutting-edge AI automation.
        </p>
      </Reveal>

      <ul className="m-0 list-none border-t border-line-strong p-0">
        {FAQ.map(([q, a], i) => {
          const isOpen = i === open;
          return (
            <li
              key={q}
              className="border-b border-line transition-[padding] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="grid w-full cursor-pointer grid-cols-[40px_1fr_36px] items-center gap-4 border-0 bg-transparent py-6 text-left transition-[padding,color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:px-4 sm:grid-cols-[60px_1fr_40px] sm:gap-6 sm:py-7"
              >
                <span className="font-mono text-[11px] tracking-[0.16em] text-ink-mute">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-serif font-soft text-[clamp(17px,1.7vw,24px)] font-normal leading-[1.25] tracking-tight transition-colors duration-300 ${
                    isOpen ? "text-accent" : "text-ink"
                  }`}
                >
                  {q}
                </span>
                <span
                  className={`grid h-9 w-9 place-items-center justify-self-end rounded-full border transition-[transform,background-color,color,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "rotate-180 border-accent bg-accent text-accent-fg"
                      : "border-line-strong text-ink-dim"
                  }`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path
                      d="M2 5l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth={1.4}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div
                  className={`overflow-hidden text-[15px] leading-[1.6] text-ink-dim ${
                    isOpen ? "pb-7" : ""
                  }`}
                  style={{
                    paddingLeft: 56,
                    maxWidth: "70ch",
                  }}
                >
                  {a}
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <Reveal>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          <span className="font-serif font-soft text-[clamp(20px,2vw,28px)] font-normal italic text-ink-dim">
            More questions?
          </span>
          <a href="#demo" className="btn btn--ink btn--lg">
            Book your live demo
            <ArrowIcon />
          </a>
        </div>
      </Reveal>
    </section>
  );
}

/* ============================================================
   Shared section header
   ============================================================ */

function SectionHead({ num, label }: { num: string; label: string }) {
  return (
    <Reveal>
      <div className="mb-12 flex items-baseline gap-4 border-b border-line pb-6 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink-dim sm:mb-14">
        <span className="text-ink-mute">{num}</span>
        <span>{label}</span>
      </div>
    </Reveal>
  );
}
