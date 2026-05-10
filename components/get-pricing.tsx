"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";

const INSTRUMENT = "'Instrument Serif', 'Fraunces', serif";

export function GetPricing() {
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section className="relative mx-auto max-w-[1280px] px-[clamp(20px,4vw,48px)] py-[clamp(80px,14vw,180px)] text-center">
      <BackgroundBlobs />

      <Reveal>
        <div className="mb-7 flex items-center justify-center gap-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
          <span className="h-px w-14 bg-line" />
          <span>(A.01)</span>
          <span
            className="text-[14px] tracking-[-0.005em] normal-case italic text-accent"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            Pricing
          </span>
          <span>—</span>
          <span>Discovery</span>
          <span className="h-px w-14 bg-line" />
        </div>
      </Reveal>

      <Reveal>
        <div className="mb-10 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full border border-line-strong bg-[color-mix(in_oklch,var(--c-page)_50%,transparent)] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-dim backdrop-blur-md">
          <span
            className="pulse-dot h-[7px] w-[7px] rounded-full bg-accent"
            aria-hidden
          />
          Booking now · 2026 Q3
        </div>
      </Reveal>

      <Reveal>
        <h1
          className="mb-8 text-[clamp(72px,13vw,220px)] font-normal leading-[0.86] tracking-[-0.045em] text-balance"
          style={{ fontFamily: INSTRUMENT }}
        >
          Arrange your
          <br />
          <em
            className="font-normal italic tracking-[-0.05em] text-accent"
            style={{ fontFamily: INSTRUMENT }}
          >
            AI Discussion.
          </em>
        </h1>
      </Reveal>

      <Reveal>
        <p
          className="mx-auto mb-[clamp(72px,10vw,130px)] max-w-[38ch] text-[clamp(22px,2.2vw,32px)] font-normal italic leading-[1.4] text-ink-dim"
          style={{ fontFamily: INSTRUMENT }}
        >
          A 2-minute call. A real number. No sales theatre.
        </p>
      </Reveal>

      <Reveal>
        <div className="relative mx-auto max-w-[720px] text-left">
          <Corner cls="-top-2 -left-2 border-t border-l" />
          <Corner cls="-top-2 -right-2 border-t border-r" />
          <Corner cls="-bottom-2 -left-2 border-b border-l" />
          <Corner cls="-bottom-2 -right-2 border-b border-r" />

          <form
            onSubmit={onSubmit}
            className="relative rounded-[4px] border border-line bg-[color-mix(in_oklch,var(--c-soft)_60%,transparent)] px-[clamp(28px,4vw,56px)] pb-[clamp(36px,5vw,56px)] pt-[clamp(36px,5vw,64px)] dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] dark:border-[rgba(255,255,255,0.08)]"
          >
            <span className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-line-strong bg-page px-[18px] py-2 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-dim">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-accent"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Discovery form
            </span>

            <h2
              className="mb-[18px] mt-2 text-center text-[clamp(36px,3.8vw,56px)] font-normal leading-[1.05] tracking-[-0.028em]"
              style={{ fontFamily: INSTRUMENT }}
            >
              Tell us{" "}
              <em
                className="font-normal italic text-accent"
                style={{ fontFamily: INSTRUMENT }}
              >
                where to reach you.
              </em>
            </h2>

            <p className="mx-auto mb-[clamp(40px,5vw,56px)] max-w-[42ch] text-center text-[14px] leading-[1.6] text-ink-dim">
              Fill out this short form, and our AI agent will call you to give a
              quick,{" "}
              <strong
                className="font-medium italic text-ink"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                personalized consultation
              </strong>{" "}
              and share detailed pricing information for our solution.
            </p>

            <div className="mx-auto mb-[clamp(36px,4vw,48px)] flex max-w-[200px] items-center gap-3.5 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
              <span className="h-px flex-1 bg-line" />
              The Form
              <span className="h-px flex-1 bg-line" />
            </div>

            {done ? (
              <div className="px-3 py-10 text-center">
                <div
                  className="mb-3 text-[38px] font-light italic tracking-[-0.02em] text-accent"
                  style={{ fontFamily: "var(--font-serif)" }}
                >
                  Got it.
                </div>
                <div className="text-[14px] leading-[1.5] text-ink-dim">
                  Emma will ring you within a few minutes. Keep your phone
                  handy.
                </div>
              </div>
            ) : (
              <>
                <div className="mb-7 grid grid-cols-1 gap-7 sm:grid-cols-2">
                  <Field>
                    <input
                      type="text"
                      placeholder="First Name"
                      required
                      className="w-full bg-transparent py-[22px] pb-[18px] text-[22px] tracking-[-0.012em] text-ink outline-none placeholder:italic placeholder:opacity-60 placeholder:text-ink-mute"
                      style={{ fontFamily: INSTRUMENT }}
                    />
                  </Field>
                  <Field>
                    <input
                      type="text"
                      placeholder="Last Name"
                      required
                      className="w-full bg-transparent py-[22px] pb-[18px] text-[22px] tracking-[-0.012em] text-ink outline-none placeholder:italic placeholder:opacity-60 placeholder:text-ink-mute"
                      style={{ fontFamily: INSTRUMENT }}
                    />
                  </Field>
                </div>

                <div className="mb-7">
                  <Field>
                    <span className="mr-1 inline-flex items-center gap-2 self-stretch border-r border-line pr-3 font-mono text-[12px] tracking-[0.06em] text-ink-dim">
                      <Flag />
                      +91
                    </span>
                    <input
                      type="tel"
                      placeholder="Phone *"
                      required
                      className="w-full bg-transparent py-[22px] pb-[18px] text-[22px] tracking-[-0.012em] text-ink outline-none placeholder:italic placeholder:opacity-60 placeholder:text-ink-mute"
                      style={{ fontFamily: INSTRUMENT }}
                    />
                  </Field>
                </div>

                <div className="mb-7">
                  <Field>
                    <span className="grid place-items-center text-ink-mute">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      >
                        <path d="M3 7a2 2 0 012-2h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
                        <path d="M3 7l9 6 9-6" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      placeholder="Email *"
                      required
                      className="w-full bg-transparent py-[22px] pb-[18px] text-[22px] tracking-[-0.012em] text-ink outline-none placeholder:italic placeholder:opacity-60 placeholder:text-ink-mute"
                      style={{ fontFamily: INSTRUMENT }}
                    />
                  </Field>
                </div>

                <div className="mb-9 mt-2 grid grid-cols-[18px_1fr] items-start gap-3.5 text-[11.5px] leading-[1.6] tracking-[0.01em] text-ink-mute">
                  <input
                    type="checkbox"
                    id="gp-consent"
                    defaultChecked
                    className="gp-check mt-[1px] h-[18px] w-[18px] cursor-pointer appearance-none rounded-[4px] border border-line-strong bg-transparent transition-[background-color,border-color] duration-300 checked:border-accent checked:bg-accent"
                  />
                  <label htmlFor="gp-consent" className="cursor-pointer">
                    By submitting this form you agree to receive a call from our
                    AI agent for the purpose of providing a personalized
                    consultation and detailed pricing. Standard rates apply.
                    View our{" "}
                    <a
                      href="#"
                      className="text-ink-dim underline decoration-1"
                    >
                      Privacy Policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3.5 rounded-full bg-accent p-[26px] text-[24px] font-normal tracking-[-0.012em] text-accent-fg shadow-[0_12px_40px_-12px_color-mix(in_oklch,var(--c-accent)_70%,transparent)] transition-[transform,filter,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:brightness-105 hover:shadow-[0_20px_60px_-16px_color-mix(in_oklch,var(--c-accent)_80%,transparent)]"
                  style={{ fontFamily: INSTRUMENT }}
                >
                  <em
                    className="font-normal italic"
                    style={{ fontFamily: INSTRUMENT, color: "inherit" }}
                  >
                    Call
                  </em>{" "}
                  me
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 14 14"
                    fill="none"
                    className="transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1"
                  >
                    <path
                      d="M1 7h12m0 0L8 2m5 5L8 12"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <div className="mt-7 flex items-center justify-center gap-[18px] font-mono text-[10px] uppercase tracking-[0.22em] text-ink-mute">
                  <FootDot>Encrypted</FootDot>
                  <FootDot>GDPR &amp; HIPAA</FootDot>
                  <FootDot>Avg. call 2 min</FootDot>
                </div>
              </>
            )}
          </form>
        </div>
      </Reveal>

      <style>{`
        .gp-check:checked::after {
          content: "";
          position: absolute;
          inset: 4px;
          background:
            linear-gradient(135deg, transparent 40%, var(--c-accent-fg) 40% 50%, transparent 50%),
            linear-gradient(45deg, transparent 50%, var(--c-accent-fg) 50% 60%, transparent 60%);
        }
        .gp-check { position: relative; }
      `}</style>
    </section>
  );
}

function Field({ children }: { children: React.ReactNode }) {
  return (
    <div className="group/field relative flex items-center gap-3 border-b border-line-strong px-0 pb-1 pt-[2px] transition-colors duration-300 focus-within:border-accent">
      {children}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-focus-within/field:scale-x-100"
      />
    </div>
  );
}

function Corner({ cls }: { cls: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute h-[18px] w-[18px] border-accent ${cls}`}
    />
  );
}

function Flag() {
  return (
    <span
      aria-hidden
      className="relative block h-3 w-[18px] overflow-hidden rounded-[2px]"
      style={{
        background:
          "linear-gradient(180deg, #ff9933 0 33%, #ffffff 33% 66%, #138808 66%)",
      }}
    >
      <span
        className="absolute left-0 right-0"
        style={{
          top: "33%",
          bottom: "33%",
          background: "radial-gradient(circle, #000080 22%, transparent 24%)",
        }}
      />
    </span>
  );
}

function FootDot({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 before:block before:h-1 before:w-1 before:rounded-full before:bg-accent before:content-['']">
      {children}
    </span>
  );
}

function BackgroundBlobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <span
        className="absolute -left-[200px] -top-[200px] h-[600px] w-[600px] rounded-full opacity-[0.18]"
        style={{ background: "var(--c-accent)", filter: "blur(80px)" }}
      />
      <span
        className="absolute -bottom-[200px] -right-[200px] h-[600px] w-[600px] rounded-full opacity-[0.18]"
        style={{
          background:
            "color-mix(in oklch, var(--c-accent) 60%, #5a3a8a)",
          filter: "blur(80px)",
        }}
      />
    </div>
  );
}
