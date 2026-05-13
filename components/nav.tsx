"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "@/lib/theme";
import { ArrowIcon, MoonIcon, SunIcon } from "@/components/icons";

type NavLink = { label: string; href: string };

const links: NavLink[] = [
  { label: "Our Team", href: "/team" },
  { label: "Resources", href: "/resources" },
  { label: "AI Agents", href: "/ai-agents" },
  { label: "Careers", href: "/careers" },
];

function isInternalRoute(href: string) {
  return href.startsWith("/") && !href.startsWith("/#");
}

export function Nav() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-[clamp(20px,4vw,48px)] py-5">
        <div className="nav-pill mx-auto max-w-[1240px]">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-serif font-soft text-[19px] tracking-tight text-ink"
          >
            <span className="relative grid h-7 w-7 flex-shrink-0 place-items-center rounded-lg bg-ink text-[17px] italic text-page">
              M
              <span
                aria-hidden
                className="absolute right-[5px] top-[5px] h-[5px] w-[5px] rounded-full bg-accent"
              />
            </span>
            <span>Monument</span>
          </Link>

          <nav className="hidden flex-1 justify-center gap-0.5 md:flex">
            {links.map((l) =>
              isInternalRoute(l.href) ? (
                <Link
                  key={l.label}
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-[13.5px] text-ink-dim transition-colors hover:bg-soft hover:text-ink"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-full px-3.5 py-2 text-[13.5px] text-ink-dim transition-colors hover:bg-soft hover:text-ink"
                >
                  {l.label}
                </a>
              ),
            )}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle theme"
              className="grid h-9 w-9 place-items-center rounded-full border border-line-strong text-ink transition-[transform,background-color] duration-300 hover:rotate-12 hover:bg-soft"
            >
              {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>

            <a
              href="https://seer.monument.solutions/"
              rel="noopener noreferrer"
              className="hidden rounded-full px-3.5 py-2 text-[13.5px] text-ink-dim transition-colors hover:bg-soft hover:text-ink md:inline-block"
            >
              Log in
            </a>

            <Link
              href="/get-pricing"
              className="hidden items-center gap-2 rounded-full border border-ink bg-ink px-4 py-2.5 text-[13.5px] font-medium text-page transition-[transform,background-color,color,border-color] duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-accent-fg md:inline-flex"
            >
              Get Pricing
              <ArrowIcon width={13} height={13} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="relative grid h-9 w-9 place-items-center rounded-full border border-line-strong text-ink md:hidden"
            >
              <Burger open={open} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={open} close={() => setOpen(false)} />
    </>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <span className="block h-3.5 w-4">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="absolute left-3 right-3 h-[1.5px] bg-ink transition-[transform,opacity,top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            top: open ? "50%" : `${30 + i * 20}%`,
            transform:
              open && i === 0
                ? "rotate(45deg)"
                : open && i === 2
                  ? "rotate(-45deg)"
                  : undefined,
            opacity: open && i === 1 ? 0 : 1,
          }}
        />
      ))}
    </span>
  );
}

function MobileMenu({ open, close }: { open: boolean; close: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-40 flex flex-col bg-page px-[clamp(20px,4vw,48px)] pb-10 pt-[100px] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        open ? "translate-y-0" : "pointer-events-none -translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-lg flex-1 flex-col justify-center gap-1">
        {links.map((l, i) => {
          const className = `flex items-baseline gap-4 border-b border-line py-2 font-serif font-soft text-[clamp(34px,9vw,52px)] font-light leading-tight transition-[opacity,transform,color] duration-500 hover:text-accent ${
            open ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
          }`;
          const style = { transitionDelay: open ? `${50 + i * 50}ms` : "0ms" };
          const inner = (
            <>
              <span className="font-mono text-[11px] tracking-[0.2em] text-ink-mute">
                0{i + 1}
              </span>
              {l.label}
            </>
          );
          return isInternalRoute(l.href) ? (
            <Link
              key={l.label}
              href={l.href}
              onClick={close}
              className={className}
              style={style}
            >
              {inner}
            </Link>
          ) : (
            <a
              key={l.label}
              href={l.href}
              onClick={close}
              className={className}
              style={style}
            >
              {inner}
            </a>
          );
        })}

        <Link
          href="/get-pricing"
          onClick={close}
          className="btn btn--accent btn--lg mt-8 self-start"
        >
          Get Pricing →
        </Link>
      </div>
    </div>
  );
}
