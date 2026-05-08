"use client";

import type { MouseEvent } from "react";
import { Reveal } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

type Service = {
  num: string;
  title: string;
  body: string;
  tags: string[];
};

const SERVICES: Service[] = [
  {
    num: "01",
    title: "Market Analysis & Offer Validation",
    body: "We map your market, validate your offer with real customer signal, and find the angle competitors haven't moved on yet.",
    tags: ["VoC", "Positioning", "Validation"],
  },
  {
    num: "02",
    title: "Sales & Marketing Assets",
    body: "A complete kit — sales decks, landing pages, scripts, and collateral — built around the offer we just validated.",
    tags: ["Decks", "Pages", "Scripts"],
  },
  {
    num: "03",
    title: "Offer Refinement & Campaign Brief",
    body: "Iteration on the moments that matter most: pricing, packaging, and the first 30 seconds of every sales call.",
    tags: ["Pricing", "Packaging", "Briefs"],
  },
  {
    num: "04",
    title: "Monumental Force",
    body: "Outbound, inbound, and team training to put the whole infrastructure to work — predictably, every month.",
    tags: ["Outbound", "Inbound", "Training"],
  },
];

export function Services() {
  return (
    <section id="why" className="border-y border-line bg-soft">
      <div className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] py-[clamp(64px,12vw,160px)]">
        <Reveal>
          <span className="kicker">Why Monument</span>
        </Reveal>

        <div className="mb-12 grid items-end gap-8 md:mb-16 md:gap-12 md:grid-cols-[1.2fr_1fr] md:gap-15">
          <Reveal>
            <h2 className="font-serif font-display text-[clamp(38px,5.4vw,76px)] font-light leading-[1.02] tracking-[-0.02em] text-balance">
              Use Monument to{" "}
              <em>build your scaling infrastructure.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-[44ch] text-[clamp(15px,1.3vw,18px)] text-ink-dim">
              Four interlocking systems, deployed in parallel — so growth stops
              depending on referrals, hustle, or hope.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[28px] border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <ServiceCard key={s.num} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <div
      onMouseMove={onMove}
      className="group relative flex min-h-[360px] flex-col gap-6 overflow-hidden bg-page px-9 pb-8 pt-10 transition-colors duration-500 hover:bg-card"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx) var(--my), var(--c-accent-tint), transparent 60%)",
        }}
      />

      <div className="flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">
        <span className="text-accent">{service.num}</span>
        <span>—</span>
        <span>Pillar</span>
      </div>

      <div>
        <h3 className="mb-3.5 font-serif font-soft text-[clamp(22px,2.2vw,28px)] font-light leading-[1.1] tracking-[-0.015em]">
          {service.title}
        </h3>
        <p className="text-[14.5px] leading-[1.55] text-ink-dim">{service.body}</p>
      </div>

      <div className="mt-auto flex flex-wrap gap-2">
        {service.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-dim"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="absolute right-7 top-8 grid h-9 w-9 place-items-center rounded-full border border-line-strong text-ink-mute transition-[transform,background-color,color,border-color] duration-500 group-hover:-rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
        <ArrowIcon />
      </div>
    </div>
  );
}
