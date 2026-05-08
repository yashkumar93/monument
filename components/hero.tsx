"use client";

import { useEffect, useState } from "react";
import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

const ROTATING_WORDS = [
  "Client Acquisition",
  "Sales",
  "Growth",
  "Operations",
  "Market Fit",
];

const MARQUEE_ITEMS = [
  "Client Acquisition",
  "Sales Infrastructure",
  "Market Fit",
  "Operations",
  "Growth Systems",
  "SEER Operating System",
];

export function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIdx((i) => (i + 1) % ROTATING_WORDS.length),
      2400,
    );
    return () => clearInterval(t);
  }, []);

  const longest = ROTATING_WORDS.reduce((a, b) =>
    b.length > a.length ? b : a,
  );

  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-screen max-w-[1240px] flex-col overflow-hidden px-[clamp(20px,4vw,48px)] pt-[140px]"
    >
      <div className="mb-9 flex flex-wrap items-center justify-between gap-3 sm:mb-11 sm:gap-4">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-soft/60 px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-dim backdrop-blur-sm">
            <span className="pulse-dot inline-block h-[7px] w-[7px] rounded-full bg-accent" />
            Open for projects · 2026 Q2
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
            MONUMENT SOLUTIONS · SCALING INFRASTRUCTURE
          </span>
        </Reveal>
      </div>

      <h1 className="mb-10 font-serif font-display text-[clamp(38px,9.5vw,140px)] font-light leading-[0.95] tracking-[-0.035em] text-balance sm:mb-12 md:mb-15">
        <RevealLine>We Solve</RevealLine>
        <span className="block">
          <span className="relative inline-block h-[1em] overflow-hidden align-top font-serif italic text-accent">
            <span aria-hidden className="invisible inline-block whitespace-nowrap">
              {longest}
            </span>
            {ROTATING_WORDS.map((w, i) => {
              const isActive = i === idx;
              const isPrev =
                i === (idx - 1 + ROTATING_WORDS.length) % ROTATING_WORDS.length;
              return (
                <span
                  key={w}
                  aria-hidden={!isActive}
                  className="absolute left-0 top-0 whitespace-nowrap transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{
                    transform: isActive
                      ? "translateY(0)"
                      : isPrev
                        ? "translateY(-100%)"
                        : "translateY(100%)",
                    opacity: isActive ? 1 : 0,
                  }}
                >
                  {w}
                </span>
              );
            })}
          </span>
        </span>
        <RevealLine delay={0.08}>for Businesses.</RevealLine>
      </h1>

      <div className="mb-16 grid items-end gap-8 sm:mb-20 md:grid-cols-[1.4fr_1fr] md:gap-12">
        <div>
          <Reveal>
            <p className="mb-7 max-w-[52ch] text-[clamp(16px,1.4vw,19px)] text-ink-dim">
              Monument Solutions empowers companies to unlock hidden revenue
              potential with customizable, proven systems to increase sales and
              optimize resources.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#pricing" className="btn btn--ink btn--lg justify-center">
                Get Pricing
                <ArrowIcon />
              </a>
              <a href="#why" className="btn btn--lg justify-center">
                Why Monument
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="grid grid-cols-2 gap-5 border-t border-line pt-6 sm:gap-6">
            <MetaBlock label="Trusted by" value="100+ businesses" />
            <MetaBlock label="Typical ROI" value="10× in year one" />
          </div>
        </Reveal>
      </div>

      <Marquee />
    </section>
  );
}

function MetaBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-mute">
        {label}
      </div>
      <div className="font-serif font-soft text-[clamp(18px,1.6vw,22px)] font-light leading-tight tracking-tight">
        {value}
      </div>
    </div>
  );
}

function Marquee() {
  const passes = [0, 1];
  return (
    <div className="mask-fade-x -mx-[clamp(20px,4vw,48px)] overflow-hidden border-y border-line py-7">
      <div className="marquee-track items-center gap-10 whitespace-nowrap font-serif font-soft text-[clamp(20px,2.4vw,30px)] font-light tracking-tight">
        {passes.map((p) => (
          <div key={p} className="flex items-center gap-10">
            {MARQUEE_ITEMS.map((item) => (
              <span key={`${p}-${item}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span className="text-accent">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
