import type { Metadata } from "next";
import Link from "next/link";
import { Reveal, RevealLine } from "@/components/reveal";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title:
    "From Manual to Magic: How AI-Powered Workflows are Transforming Accounting Firms — Monument Solutions",
  description:
    "How AI-powered workflows are reshaping accounting firms — automating mundane work, surfacing insights, and unlocking new growth.",
};

export default function FromManualToMagicPage() {
  return (
    <main>
      <article className="mx-auto max-w-[1240px] px-[clamp(20px,4vw,48px)] pb-[clamp(80px,10vw,140px)] pt-[140px] md:pt-[180px]">
        <Reveal>
          <div className="mb-7 inline-flex items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.22em] text-ink-mute">
            <span>Processes</span>
            <span className="opacity-50">—</span>
            <span>Last edited: Feb 28, 2022</span>
            <span className="opacity-50">—</span>
            <span>by Teo</span>
          </div>
        </Reveal>

        <h1 className="mb-10 max-w-[22ch] font-serif font-display text-[clamp(40px,6.5vw,84px)] font-light leading-[1.02] tracking-[-0.035em] text-pretty">
          <RevealLine>From Manual to Magic:</RevealLine>
          <RevealLine>
            <em>How AI-Powered Workflows</em>
          </RevealLine>
          <RevealLine>are Transforming Accounting Firms</RevealLine>
        </h1>

        <Reveal>
          <div
            className="relative mb-14 aspect-[16/9] w-full overflow-hidden rounded-[10px] md:mb-20"
            style={{
              background:
                "linear-gradient(135deg, #f4b8c5 0%, #c97aa2 45%, #5a3a6a 100%)",
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
              Pink Flower
            </div>
          </div>
        </Reveal>

        <div className="mx-auto grid max-w-[1080px] grid-cols-1 gap-x-12 gap-y-10 lg:grid-cols-[1fr_minmax(0,720px)_1fr]">
          <aside className="hidden self-start lg:block">
            <Reveal>
              <div className="sticky top-32 flex flex-col gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-mute">
                <span>On this page</span>
                <a
                  href="#rise"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  01 — The Rise
                </a>
                <a
                  href="#automating"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  02 — Workflow Optimization
                </a>
                <a
                  href="#beyond"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  03 — Data-Driven Decisions
                </a>
                <a
                  href="#future"
                  className="text-ink-dim transition-colors hover:text-accent"
                >
                  04 — The Firm of the Future
                </a>
              </div>
            </Reveal>
          </aside>

          <div className="lg:col-start-2">
            <Reveal>
              <p className="mb-10 text-[clamp(20px,1.6vw,24px)] font-light leading-[1.55] text-ink">
                The accounting industry, long known for its meticulousness and
                reliance on manual processes, is undergoing a radical
                transformation. Artificial intelligence (AI) is no longer a
                futuristic concept but a present-day reality, reshaping how
                accounting firms operate and scale. By automating repetitive
                tasks, extracting valuable insights from data, and enhancing
                client experiences, AI-powered workflows are unlocking new
                levels of efficiency and growth potential.
              </p>
            </Reveal>

            <Section
              id="rise"
              kicker="01"
              title="The Rise of the AI-Powered Accountant"
            >
              <p>
                The traditional image of an accountant hunched over spreadsheets
                and calculators is fading into the past. Today&rsquo;s
                accounting professionals are leveraging AI to automate mundane
                tasks like data entry, reconciliation, and report generation.
                This shift frees up valuable time for higher-value activities
                like financial analysis, strategic advisory, and client
                relationship building.
              </p>
              <p>
                AI is not replacing accountants; it&rsquo;s empowering them to
                become more efficient, productive, and valuable to their
                clients. By taking over the tedious and repetitive tasks, AI
                allows accountants to focus on what they do best: providing
                expert financial guidance and strategic insights.
              </p>
            </Section>

            <Section
              id="automating"
              kicker="02"
              title="Automating the Mundane: AI in Workflow Optimization"
            >
              <p>
                The accounting industry is ripe for automation. Many tasks that
                were once considered essential but time-consuming can now be
                handled by AI-powered tools. Here are a few examples of how AI
                is revolutionizing workflows:
              </p>

              <FeatureList
                items={[
                  {
                    title: "Data Entry & Reconciliation",
                    body: "AI-powered optical character recognition (OCR) technology can extract data from invoices, receipts, and other documents, eliminating the need for manual data entry. AI algorithms can also reconcile transactions and identify discrepancies, saving hours of manual labor.",
                  },
                  {
                    title: "Invoice Processing & Payments",
                    body: "AI can automate invoice processing, from matching invoices to purchase orders to initiating payments. This not only speeds up the process but also reduces the risk of errors.",
                  },
                  {
                    title: "Report Generation",
                    body: "AI-powered reporting tools can generate financial statements, tax returns, and other reports in a fraction of the time it would take manually. These tools can also customize reports based on client preferences and regulatory requirements.",
                  },
                  {
                    title: "Client Communication",
                    body: "AI-powered chatbots and virtual assistants can handle routine client inquiries, freeing up staff to focus on more complex issues. These tools can also personalize communication and provide 24/7 support.",
                  },
                ]}
              />
            </Section>

            <Section
              id="beyond"
              kicker="03"
              title="Beyond Automation: AI for Data-Driven Decision Making"
            >
              <p>
                AI is not just about automating tasks; it&rsquo;s also about
                extracting valuable insights from data. By analyzing large
                datasets, AI algorithms can identify patterns, trends, and
                anomalies that would be difficult or impossible for humans to
                detect.
              </p>
              <p>
                This data-driven approach can empower accounting firms to:
              </p>
              <FeatureList
                items={[
                  {
                    title: "Identify Growth Opportunities",
                    body: "AI can analyze market trends and client data to identify potential areas for expansion or new service offerings.",
                  },
                  {
                    title: "Predict Financial Performance",
                    body: "AI-powered forecasting models can help businesses anticipate future financial performance and make informed decisions.",
                  },
                  {
                    title: "Detect Fraud & Anomalies",
                    body: "AI can identify suspicious transactions or patterns that may indicate fraudulent activity, helping to protect clients' financial assets.",
                  },
                  {
                    title: "Personalize Client Service",
                    body: "AI can analyze client data to tailor services and recommendations to individual needs and preferences.",
                  },
                ]}
              />
            </Section>

            <Section
              id="future"
              kicker="04"
              title="Building the AI-Powered Accounting Firm of the Future"
            >
              <p>
                The future of accounting is not just about numbers; it&rsquo;s
                about people, technology, and data. By embracing AI-powered
                workflows, accounting firms can streamline operations, unlock
                valuable insights, and deliver exceptional client experiences.
              </p>
              <p>
                The key to building an AI-powered accounting firm is to start
                small and scale gradually. Begin by identifying tasks that are
                ripe for automation and implement AI-powered tools that
                integrate seamlessly with your existing systems. As you gain
                experience and confidence, you can expand your use of AI to
                other areas of your business.
              </p>
              <p>
                Remember, AI is not a magic bullet. It requires careful
                planning, implementation, and ongoing maintenance. But for
                firms that are willing to embrace this new technology, the
                rewards are significant: increased efficiency, improved
                accuracy, enhanced client satisfaction, and a competitive edge
                in the market.
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
