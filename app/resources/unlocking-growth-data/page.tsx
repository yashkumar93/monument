import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "Unlocking Growth Through Data: How CPA Firms Can Leverage Analytics for Strategic Decision-Making — Monument Solutions",
  description:
    "How modern CPA firms use data analytics to move from reactive reporting to proactive, strategic decision-making — and what it takes to build a data-driven culture.",
};

export default function UnlockingGrowthDataPage() {
  return (
    <main>
      <article className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-[clamp(80px,10vw,140px)] pt-[140px] md:pt-[180px]">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
            <span>Landing Pages</span>
            <span className="opacity-50">—</span>
            <span>Last edited: Mar 15, 2022</span>
            <span className="opacity-50">—</span>
            <span>by Teo</span>
          </div>
        </Reveal>

        <h1 className="mb-10 max-w-[22ch] font-serif font-display text-[clamp(40px,6.5vw,84px)] font-light leading-[1.02] tracking-[-0.035em] text-pretty">
          <RevealLine>Unlocking Growth Through Data:</RevealLine>
          <RevealLine>
            <em>How CPA Firms Can Leverage</em>
          </RevealLine>
          <RevealLine>Analytics for Strategic Decision-Making</RevealLine>
        </h1>

        <Reveal>
          <div
            className="relative mb-14 aspect-[16/9] w-full overflow-hidden rounded-[10px] md:mb-20"
            style={{
              background:
                "linear-gradient(135deg, #7fd8c7 0%, #2d8a82 45%, #0f3a3a 100%)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 mix-blend-overlay"
              style={{
                backgroundImage: [
                  "radial-gradient(circle at 28% 32%, rgba(255,255,255,0.30), transparent 50%)",
                  "radial-gradient(circle at 72% 70%, rgba(0,0,0,0.35), transparent 55%)",
                  "repeating-linear-gradient(45deg, rgba(255,255,255,0.04) 0 2px, transparent 2px 4px)",
                ].join(","),
              }}
            />
            <div
              aria-hidden
              className="absolute left-1/2 top-1/2 -translate-x-1/2 font-serif font-display font-light italic leading-none tracking-[-0.03em]"
              style={{
                fontSize: "clamp(96px, 14vw, 220px)",
                color: "rgba(255, 247, 238, 0.85)",
                transform: "translate(-50%, -54%)",
              }}
            >
              ❀
            </div>
            <div className="absolute bottom-5 right-6 font-mono text-[11px] uppercase tracking-[0.22em] text-[rgba(244,237,225,0.75)]">
              Teal Flower
            </div>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-[1fr_minmax(0,720px)_1fr]">
          <aside className="hidden self-start lg:block">
            <Reveal>
              <div className="sticky top-32 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                <span>On this page</span>
                <a
                  href="#advantage"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  01 — The Data Advantage
                </a>
                <a
                  href="#areas"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  02 — Key Areas
                </a>
                <a
                  href="#tools"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  03 — Tools &amp; Technology
                </a>
                <a
                  href="#culture"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  04 — Data-Driven Culture
                </a>
                <a
                  href="#future"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  05 — The Future
                </a>
              </div>
            </Reveal>
          </aside>

          <div className="lg:col-start-2">
            <Reveal>
              <p className="mb-10 text-[clamp(20px,1.6vw,24px)] font-light leading-[1.55] text-ink">
                In today&rsquo;s data-driven world, the ability to extract
                meaningful insights from vast amounts of information is a
                game-changer for businesses across industries. For CPA firms,
                data analytics is no longer a luxury; it&rsquo;s a necessity for
                making informed decisions, optimizing operations, and driving
                growth.
              </p>
            </Reveal>

            <Reveal>
              <p className="mb-10 text-[16.5px] leading-[1.7] text-ink-dim">
                Gone are the days when accounting was solely about crunching
                numbers and preparing reports. Modern CPA firms are embracing
                data analytics to unlock a wealth of insights that can inform
                strategic decision-making, enhance client services, and fuel
                business growth.
              </p>
            </Reveal>

            <Section
              id="advantage"
              kicker="01"
              title="The Data Advantage: From Reactive to Proactive"
            >
              <p>
                Traditionally, accounting firms have operated reactively,
                relying on historical data to prepare financial statements and
                tax returns. But with the advent of advanced analytics tools,
                CPA firms can now take a proactive approach, using data to
                anticipate trends, identify opportunities, and mitigate risks.
              </p>
              <p>
                This shift from reactive to proactive decision-making is a
                game-changer for CPA firms. By leveraging data analytics, they
                can:
              </p>
              <FeatureList
                items={[
                  {
                    title: "Identify Growth Opportunities",
                    body: "Analyze client data to identify underserved segments, upsell opportunities, and potential new service offerings.",
                  },
                  {
                    title: "Predict Financial Performance",
                    body: "Utilize predictive analytics to forecast client financial performance, identify potential red flags, and provide proactive guidance.",
                  },
                  {
                    title: "Optimize Pricing & Profitability",
                    body: "Analyze pricing data to identify optimal fee structures, maximize profitability, and ensure competitive pricing.",
                  },
                  {
                    title: "Improve Client Retention",
                    body: "Track client satisfaction metrics, identify at-risk clients, and implement targeted retention strategies.",
                  },
                ]}
              />
            </Section>

            <Section
              id="areas"
              kicker="02"
              title="Key Areas for Data Analytics in CPA Firms"
            >
              <FeatureList
                items={[
                  {
                    title: "Client Analytics",
                    body: "Analyze client demographics, financials, and engagement patterns to segment clients, personalize services, and identify cross-selling opportunities.",
                  },
                  {
                    title: "Operational Analytics",
                    body: "Track internal metrics like billable hours, project profitability, and employee productivity to identify bottlenecks and optimize workflows.",
                  },
                  {
                    title: "Financial Analytics",
                    body: "Monitor key financial indicators like revenue, expenses, and cash flow to identify trends, forecast performance, and make informed financial decisions.",
                  },
                  {
                    title: "Competitive Analytics",
                    body: "Analyze competitor data to identify market trends, benchmark performance, and develop differentiation strategies.",
                  },
                ]}
              />
            </Section>

            <Section
              id="tools"
              kicker="03"
              title="Choosing the Right Tools & Technology"
            >
              <p>
                The right tools and technology are essential for harnessing the
                power of data analytics. Consider the following options:
              </p>
              <FeatureList
                items={[
                  {
                    title: "Business Intelligence (BI) Platforms",
                    body: "BI platforms provide a centralized view of data, enabling you to create custom dashboards, reports, and visualizations.",
                  },
                  {
                    title: "Data Warehousing Solutions",
                    body: "Data warehouses store and organize large amounts of data from multiple sources, making it easier to analyze and extract insights.",
                  },
                  {
                    title: "Machine Learning (ML) Algorithms",
                    body: "ML algorithms can identify patterns and anomalies in data that humans might miss, enabling predictive analytics and anomaly detection.",
                  },
                ]}
              />
            </Section>

            <Section
              id="culture"
              kicker="04"
              title="Building a Data-Driven Culture"
            >
              <p>
                Implementing data analytics tools is just the first step. To
                truly become a data-driven organization, you need to foster a
                culture of data literacy and curiosity. Encourage your team to
                ask questions, explore data, and use insights to inform
                decision-making.
              </p>
              <p>Here are some tips for building a data-driven culture:</p>
              <FeatureList
                items={[
                  {
                    title: "Invest in Training",
                    body: "Provide training and resources to help your team develop data literacy skills.",
                  },
                  {
                    title: "Encourage Collaboration",
                    body: "Create a collaborative environment where team members share insights and brainstorm ideas.",
                  },
                  {
                    title: "Celebrate Successes",
                    body: "Recognize and reward team members who use data to achieve positive outcomes.",
                  },
                ]}
              />
            </Section>

            <Section
              id="future"
              kicker="05"
              title="The Future of CPA Firms: Data as a Strategic Asset"
            >
              <p>
                In the era of big data, CPA firms that embrace data analytics
                will have a distinct advantage. By leveraging data as a
                strategic asset, they can make informed decisions, optimize
                operations, deliver personalized services, and unlock new
                growth opportunities.
              </p>
              <p>
                The future of accounting is not just about numbers; it&rsquo;s
                about using data to tell stories, drive insights, and create
                value for clients. By embracing data analytics, CPA firms can
                position themselves as trusted advisors and strategic partners,
                helping their clients navigate the complexities of the modern
                business landscape.
              </p>
            </Section>

            <Reveal>
              <div className="mt-16 flex justify-start border-t border-line pt-10">
                <Link
                  href="/resources"
                  className="group inline-flex items-center gap-3 font-serif font-soft text-[16px] text-ink"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-full border border-line-strong transition-[background-color,color,border-color,transform] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[-180deg] group-hover:border-accent group-hover:bg-accent group-hover:text-accent-fg">
                    <ArrowIcon
                      width={14}
                      height={14}
                      style={{ transform: "rotate(180deg)" }}
                    />
                  </span>
                  Back to All Articles
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}

function Section({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-14 scroll-mt-32">
      <Reveal>
        <div className="mb-5 inline-flex items-center gap-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
          <span className="text-accent">{kicker}</span>
          <span className="h-px w-10 bg-line" />
        </div>
      </Reveal>
      <Reveal>
        <h2 className="mb-6 max-w-[22ch] font-serif font-soft text-[clamp(26px,2.4vw,36px)] font-normal leading-[1.15] tracking-[-0.018em] text-pretty">
          {title}
        </h2>
      </Reveal>
      <Reveal>
        <div className="space-y-5 text-[16.5px] leading-[1.7] text-ink-dim [&_p]:m-0">
          {children}
        </div>
      </Reveal>
    </section>
  );
}

function FeatureList({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <ul className="my-8 grid grid-cols-1 gap-0 border-t border-line">
      {items.map((it) => (
        <li
          key={it.title}
          className="grid grid-cols-1 gap-1.5 border-b border-line py-5 sm:grid-cols-[minmax(0,260px)_1fr] sm:gap-8"
        >
          <h3 className="font-serif font-soft text-[18px] font-normal leading-[1.3] tracking-[-0.012em] text-ink">
            {it.title}
          </h3>
          <p className="m-0 text-[15.5px] leading-[1.65] text-ink-dim">
            {it.body}
          </p>
        </li>
      ))}
    </ul>
  );
}
