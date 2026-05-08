"use client";

import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

type Period = "installments" | "upfront";

const INCLUDES = [
  "360-Degree Infrastructure Setup",
  "Sales & Status Asset Creation",
  "Outbound / Inbound Acquisition Channels",
  "Team Leadership & Sales Process Training",
  "Voice-of-Customer Discovery (3+ interviews)",
  "Weekly Operating Cadence",
];

const ADDONS = [
  {
    n: "SEER Operating System",
    p: "$400/yr",
    body: "Our internal OS for tracking pipeline, content, and team rituals — in one tab.",
  },
  {
    n: "OPS AI Agent",
    p: "$500/mo + onboarding",
    body: "A trained AI operator that runs your standard workflows and reports daily.",
  },
];

export function Pricing() {
  const [period, setPeriod] = useState<Period>("installments");

  return (
    <section
      id="pricing"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(64px,12vw,160px)]"
    >
      <Reveal>
        <span className="kicker">Pricing</span>
      </Reveal>

      <div className="mb-12 grid items-end gap-8 md:mb-16 md:gap-12 md:grid-cols-[1.1fr_1fr] md:gap-15">
        <Reveal>
          <h2 className="font-serif font-display text-[clamp(38px,5.4vw,76px)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
            Plans to fit your <em>business.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-[56ch] text-[clamp(15px,1.3vw,18px)] text-ink-dim">
            A 3-month collaboration that builds, ships, and trains. Pay across
            the engagement or upfront — your call.
          </p>
        </Reveal>
      </div>

      <div className="grid items-start gap-6 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <PricingMain period={period} setPeriod={setPeriod} />
        </Reveal>

        <div className="flex flex-col gap-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute">
            Add-ons
          </div>
          {ADDONS.map((a) => (
            <Reveal key={a.n}>
              <div className="rounded-[18px] border border-line bg-surface p-6 transition-[border-color,transform] duration-500 hover:-translate-y-0.5 hover:border-accent">
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <div className="font-serif font-soft text-[22px] font-light tracking-tight">
                    {a.n}
                  </div>
                  <div className="whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.15em] text-accent">
                    {a.p}
                  </div>
                </div>
                <p className="m-0 text-[13.5px] leading-[1.5] text-ink-dim">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingMain({
  period,
  setPeriod,
}: {
  period: Period;
  setPeriod: (p: Period) => void;
}) {
  return (
    <div className="relative overflow-hidden rounded-[24px] bg-ink p-7 text-page sm:rounded-[28px] sm:p-10 md:p-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[15%] -top-[30%] aspect-square w-1/2"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--c-accent) 50%, transparent), transparent 60%)",
        }}
      />

      <div className="relative mb-8 flex flex-col gap-6 sm:mb-10 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-5">
        <div>
          <span className="mb-5 inline-block rounded-full border border-accent/40 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-accent sm:mb-6">
            3-Month Collaboration
          </span>
          <div className="flex items-baseline gap-2">
            <span className="font-serif font-display text-[clamp(56px,7vw,96px)] font-light leading-[0.9] tracking-[-0.04em]">
              $3,500
            </span>
            <span className="font-serif text-[20px] italic opacity-70 sm:text-[22px]">
              /{period === "installments" ? "month" : "one-time"}
            </span>
          </div>
          <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.15em] opacity-60">
            {period === "installments"
              ? "Billed monthly across the engagement"
              : "Save 8% — billed once at start"}
          </div>
        </div>

        <div className="inline-flex self-start rounded-full border border-page/20 bg-page/5 p-1">
          {(["installments", "upfront"] as const).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPeriod(p)}
              className={`rounded-full px-3.5 py-2 font-medium text-xs capitalize transition-[background-color,color,opacity] duration-300 sm:px-4 ${
                period === p
                  ? "bg-accent text-accent-fg opacity-100"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="relative mb-5 border-t border-page/15 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] opacity-60 sm:pt-8">
        What&apos;s included
      </div>
      <ul className="relative m-0 mb-8 grid list-none gap-3 p-0">
        {INCLUDES.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3 font-serif font-soft text-[14.5px] font-light leading-[1.35] opacity-95 sm:text-[15px]"
          >
            <CheckIcon />
            {item}
          </li>
        ))}
      </ul>

      <a
        href="#cta"
        className="btn btn--accent btn--lg relative w-full justify-center sm:w-auto"
      >
        Book a discovery call
        <ArrowIcon />
      </a>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className="flex-shrink-0 text-accent"
    >
      <path
        d="M2 7l3.5 3.5L12 4"
        stroke="currentColor"
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
