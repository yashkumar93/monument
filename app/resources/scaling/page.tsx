import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "The CPA's Playbook for Exponential Growth — Monument Solutions",
  description:
    "How forward-thinking CPA firms scale exponentially without a sales army — by building systems, automating acquisition, and focusing on client experience.",
};

const BLUEPRINT_STEPS: { title: string; body: string }[] = [
  {
    title: "Optimize Your Digital Presence",
    body: "Your website is your virtual storefront. Make sure it's professional, user-friendly, and optimized for search engines. Invest in content marketing to establish yourself as a thought leader in your niche.",
  },
  {
    title: "Automate Client Acquisition",
    body: "Implement lead generation systems that capture potential client information through your website, social media, or email campaigns. Use marketing automation tools to nurture leads and guide them through the sales funnel.",
  },
  {
    title: "Streamline Client Onboarding",
    body: "Create a seamless onboarding process that welcomes new clients, sets clear expectations, and ensures a smooth transition. Use client portals and communication tools to streamline communication and provide a personalized experience.",
  },
  {
    title: "Leverage Technology to Automate Tasks",
    body: "Identify repetitive tasks that can be automated, such as data entry, invoicing, and report generation. Implement software solutions that free up your team's time to focus on higher-value activities.",
  },
  {
    title: "Build a Referral Network",
    body: "Encourage satisfied clients to refer you to their colleagues and network. Offer incentives for referrals and make it easy for clients to spread the word about your services.",
  },
  {
    title: "Focus on Client Retention",
    body: "It's more cost-effective to retain existing clients than to acquire new ones. Invest in client relationships, provide exceptional service, and regularly communicate your value proposition.",
  },
];

const SYSTEM_BENEFITS: { lead: string; rest: string }[] = [
  {
    lead: "Automate processes",
    rest: "Reduce manual tasks, minimize errors, and increase efficiency.",
  },
  {
    lead: "Gain valuable insights",
    rest: "Track key metrics, identify trends, and make data-driven decisions.",
  },
  {
    lead: "Deliver a consistent client experience",
    rest: "Ensure a smooth and personalized journey for every client, from initial contact to ongoing support.",
  },
];

export default function ScalingArticle() {
  return (
    <main>
      <article className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-[clamp(80px,10vw,140px)] pt-[120px] sm:pt-[140px] md:pt-[180px]">
        <Reveal>
          <nav
            aria-label="Breadcrumb"
            className="mb-9 flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-mute sm:mb-12"
          >
            <Link
              href="/resources"
              className="transition-colors hover:text-ink"
            >
              Resources
            </Link>
            <span aria-hidden>/</span>
            <span className="text-accent">Scaling</span>
          </nav>
        </Reveal>

        <Reveal>
          <div className="mb-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute">
            <span className="rounded-full border border-line-strong px-3 py-1 text-accent">
              Scaling
            </span>
            <span>
              Last edited <span className="text-ink">Apr 8, 2022</span>
            </span>
            <span>
              by <span className="font-serif text-[14px] not-italic text-ink"><em className="italic">Teo</em></span>
            </span>
          </div>
        </Reveal>

        <h1 className="mb-12 max-w-[22ch] font-serif font-display text-[clamp(40px,6.4vw,96px)] font-normal leading-[0.96] tracking-[-0.03em] text-balance sm:mb-16">
          <RevealLine>The CPA&apos;s Playbook for</RevealLine>
          <RevealLine delay={0.06}>
            <em className="font-light italic text-accent">Exponential Growth:</em>
          </RevealLine>
          <RevealLine delay={0.12}>
            How to Scale Your Firm
          </RevealLine>
          <RevealLine delay={0.18}>Without a Sales Army.</RevealLine>
        </h1>

        <Reveal>
          <BlueFlowerCover />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-[720px] gap-8 sm:mt-20 sm:gap-9">
          <Reveal>
            <p className="font-serif font-soft text-[clamp(19px,1.7vw,24px)] font-light leading-[1.45] text-ink">
              In the fast-paced world of accounting, traditional growth
              strategies often rely on a robust sales team to drum up new
              business. But what if there was a way to scale your firm
              exponentially{" "}
              <em className="font-normal italic text-accent">
                without the need for a dedicated sales force?
              </em>
            </p>
          </Reveal>

          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              This isn&apos;t just a pipe dream — it&apos;s a reality that many
              forward-thinking CPA firms are embracing. By leveraging
              technology, optimizing processes, and building a strong brand,
              you can create a scalable infrastructure that attracts
              high-value clients and drives sustainable growth.
            </p>
          </Reveal>

          <SectionHead delay={0}>
            The New Growth Paradigm: Systems Over Sales
          </SectionHead>

          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              The traditional sales-driven model can be costly, time-consuming,
              and unpredictable. It often involves significant upfront
              investment in hiring and training salespeople, managing complex
              sales cycles, and dealing with the inherent variability of sales
              performance.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              But a new paradigm is emerging — one that prioritizes systems
              over sales. This approach focuses on building a scalable
              infrastructure that automates client acquisition, streamlines
              processes, and delivers exceptional client experiences.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              By creating a well-oiled machine that consistently attracts and
              serves clients, you can achieve predictable, sustainable growth
              without relying on a large sales team.
            </p>
          </Reveal>

          <SectionHead>The Blueprint for Scalable Growth</SectionHead>

          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              Here&apos;s a blueprint for how CPA firms can embrace this new
              growth paradigm and scale their businesses effectively:
            </p>
          </Reveal>

          <ol className="m-0 grid list-none gap-0 border-t border-line p-0">
            {BLUEPRINT_STEPS.map((s, i) => (
              <Reveal key={s.title}>
                <li className="grid grid-cols-[40px_1fr] gap-x-5 gap-y-2 border-b border-line py-6 sm:grid-cols-[56px_1fr] sm:gap-x-7 sm:py-7">
                  <span className="font-mono text-[11px] tracking-[0.16em] text-accent sm:pt-1.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="m-0 mb-2 font-serif font-soft text-[clamp(20px,1.9vw,24px)] font-normal leading-tight tracking-[-0.012em]">
                      {s.title}
                    </h3>
                    <p className="m-0 text-[15.5px] leading-[1.65] text-ink-dim">
                      {s.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <SectionHead>The Power of End-to-End Systems</SectionHead>

          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              Implementing end-to-end systems is crucial for achieving scalable
              growth. This means integrating all aspects of your business —
              from marketing and sales to client onboarding and service
              delivery — into a cohesive whole.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              By having all your systems work together seamlessly, you can:
            </p>
          </Reveal>

          <ul className="m-0 grid list-none gap-3 p-0">
            {SYSTEM_BENEFITS.map((b) => (
              <Reveal key={b.lead}>
                <li className="grid grid-cols-[14px_1fr] gap-3 text-[16px] leading-[1.65] text-ink-dim">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-accent sm:mt-2.5"
                  />
                  <span>
                    <strong className="font-medium text-ink">{b.lead}:</strong>{" "}
                    {b.rest}
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>

          <SectionHead>
            The Future of CPA Firms: Scalable, Efficient, and Client-Focused
          </SectionHead>

          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              The CPA firms of the future will be those that embrace
              technology, optimize processes, and build strong relationships
              with their clients. By prioritizing systems over sales, they can
              achieve exponential growth without the need for a large sales
              team.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink-dim">
              This new growth paradigm requires a shift in mindset and a
              willingness to invest in the right tools and strategies. But the
              rewards are significant: increased efficiency, improved
              profitability, and a more sustainable business model.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[16.5px] leading-[1.7] text-ink">
              If you&apos;re ready to take your CPA firm to the next level,
              it&apos;s time to start building a scalable infrastructure that
              sets you up for success. Remember, in today&apos;s digital age,
              it&apos;s not about who has the biggest sales team — it&apos;s
              about who has the{" "}
              <em className="font-light italic text-accent">smartest systems.</em>
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mx-auto mt-20 flex max-w-[720px] flex-wrap items-center justify-between gap-6 border-t border-line pt-10 sm:mt-24">
            <Link
              href="/resources"
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink-dim transition-colors hover:text-accent"
            >
              <ArrowIcon className="rotate-180 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to all resources
            </Link>
            <Link
              href="/#cta"
              className="btn btn--accent btn--lg"
            >
              Talk to Monument
              <ArrowIcon />
            </Link>
          </div>
        </Reveal>
      </article>
    </main>
  );
}

function SectionHead({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <h2 className="mt-6 font-serif font-display text-[clamp(28px,3.4vw,42px)] font-normal leading-[1.1] tracking-[-0.02em] text-balance sm:mt-8">
        {children}
      </h2>
    </Reveal>
  );
}

function BlueFlowerCover() {
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] border border-line">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(140deg, #1e3a8a 0%, #3b5fb3 35%, #6e8fd1 65%, #b8d4ff 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 mix-blend-overlay"
        style={{
          backgroundImage: [
            "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.45), transparent 45%)",
            "radial-gradient(circle at 75% 80%, rgba(0,0,0,0.35), transparent 55%)",
            "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 4px)",
          ].join(","),
        }}
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 aspect-square w-[55%] -translate-x-1/2 -translate-y-1/2"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.85), rgba(180,210,255,0.4) 45%, transparent 70%)",
          filter: "blur(8px)",
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
        }}
      />
      <div className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70">
        Cover · Blue Flower
      </div>
      <div className="absolute right-6 top-5 font-serif font-soft text-[14px] italic text-white/80">
        Monument · Resources
      </div>
    </div>
  );
}
