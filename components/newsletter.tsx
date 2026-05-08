"use client";

import { useState, type FormEvent } from "react";
import { ArrowIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-[clamp(48px,7vw,88px)] pt-0"
    >
      <Reveal>
        <div className="relative grid gap-10 overflow-hidden rounded-[28px] border border-line bg-card p-[clamp(32px,3.6vw,52px)] md:grid-cols-[1.05fr_1fr] md:items-center md:gap-14">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--c-accent-tint), transparent 65%)",
            }}
          />

          <div className="relative">
            <h2 className="mb-4 max-w-[18ch] font-serif font-display text-[clamp(28px,3.4vw,46px)] font-light leading-[1.05] tracking-[-0.02em] text-balance">
              Sign up to our <em>scaling</em> newsletter.
            </h2>
            <p className="max-w-[44ch] text-[15px] text-ink-dim">
              Tactical breakdowns, real numbers from real partners, and the
              frameworks we run inside engagements. No fluff, ever.
            </p>
          </div>

          <div className="relative">
            <form
              onSubmit={onSubmit}
              className="mb-4 flex overflow-hidden rounded-full border border-line-strong bg-page transition-[border-color] focus-within:border-accent"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@firm.com"
                aria-label="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3.5 text-sm outline-none placeholder:text-ink-mute sm:px-5 sm:py-4"
              />
              <button
                type="submit"
                className="inline-flex flex-shrink-0 items-center gap-2 bg-ink px-4 text-[13.5px] font-medium text-page transition-colors duration-300 hover:bg-accent hover:text-accent-fg sm:px-5"
              >
                {submitted ? "Thanks ✓" : "Subscribe"}
                {!submitted && <ArrowIcon className="hidden sm:inline" />}
              </button>
            </form>

            <div className="font-mono text-[10px] uppercase leading-[1.6] tracking-[0.18em] text-ink-mute">
              No spam · Unsubscribe anytime · Read by 4,200+ founders &amp;
              partners
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
