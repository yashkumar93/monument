import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

const ROLES = [
  {
    title: "Cold Email Specialist",
    type: "Remote",
    schedule: "Part-Time",
    body: "The cold email specialist role is to craft cold emails, scrape leads and book calls for our clients. Open to beginners and experienced applicants. Open to beginners and experienced applicants.",
  },
  {
    title: "Appointment Setter",
    type: "Remote",
    schedule: "Part-Time",
    body: "The appointment setters role is to conduct outbound prospecting via social media in order to book them on a discovery call for them to be vetted and closed by Monument.",
  },
  {
    title: "Executive Assistant to the CEO",
    type: "Remote",
    schedule: "Part-Time",
    body: "If you are a highly organized and motivated individual with a passion for supporting executive leadership, we encourage you to apply! Please submit your resume and cover letter outlining your relevant experience and interest in this position.",
  },
];

export function CareersHero() {
  return (
    <section
      id="top"
      className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-14 pt-[140px] md:pt-[180px]"
    >
      <Reveal>
        <div className="mb-7 inline-flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.28em] text-ink-mute">
          Careers
        </div>
      </Reveal>

      <h1 className="mb-5 max-w-full font-serif font-display text-[clamp(48px,8.5vw,112px)] font-light leading-[0.95] tracking-[-0.04em]">
        <RevealLine>
          Open Positions
        </RevealLine>
      </h1>

      <Reveal>
        <p className="mb-7 max-w-[44ch] text-[16px] leading-[1.55] text-ink-dim">
          Discover thrilling career opportunities at Monument and elevate your
          professional journey.
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
            <strong className="border-b border-current font-medium text-accent">
              100+ businesses
            </strong>
          </span>
        </div>
      </Reveal>
    </section>
  );
}

export function OpenRoles() {
  return (
    <section className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-[clamp(80px,10vw,140px)] pt-4">
      <div className="grid max-w-[980px] gap-5">
        {ROLES.map((role) => (
          <Reveal key={role.title}>
            <article className="group grid grid-cols-1 items-start gap-5 rounded-[10px] border border-line bg-[color-mix(in_oklch,var(--c-card)_55%,transparent)] p-6 transition-[border-color,background-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:border-line-strong dark:bg-[color-mix(in_oklch,var(--c-soft)_50%,transparent)] sm:grid-cols-[1.1fr_1.6fr_auto] sm:gap-10 sm:p-8 sm:px-9">
              <div>
                <h2 className="mb-4 font-serif font-soft text-[clamp(20px,1.8vw,24px)] font-normal leading-[1.15] tracking-[-0.012em]">
                  {role.title}
                </h2>
                <div className="flex flex-wrap gap-6">
                  <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.05em] text-ink-dim">
                    <LocationIcon />
                    {role.type}
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-[12px] tracking-[0.05em] text-ink-dim">
                    <ClockIcon />
                    {role.schedule}
                  </span>
                </div>
              </div>

              <div className="max-w-[48ch] text-[14.5px] leading-[1.55] text-ink-dim">
                {role.body}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-3 self-start pt-1 font-serif font-soft text-[15px] font-normal text-ink whitespace-nowrap sm:self-start"
              >
                <span>Apply Now</span>
                <span className="grid h-8 w-8 place-items-center rounded-full border border-line-strong text-ink transition-[background-color,color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[-45deg] group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                  <ArrowIcon width={14} height={14} />
                </span>
              </a>
            </article>
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

function LocationIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="shrink-0 text-ink-mute"
      aria-hidden
    >
      <circle cx="12" cy="10" r="3" />
      <path d="M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      className="shrink-0 text-ink-mute"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
