"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "@/lib/theme";

/**
 * Mirrors the "Tweaks" panel from the design prototype. Hidden by default;
 * press `T` to toggle (or any other key to dismiss when focused on a
 * non-input element).
 */
export function Tweaks() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "t" || e.metaKey || e.ctrlKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      ) {
        return;
      }
      setOpen((v) => !v);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          key="tweaks"
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.96 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 right-6 z-[100] w-[260px] rounded-2xl border border-line-strong bg-card p-4.5 shadow-[0_24px_60px_-16px_rgba(0,0,0,0.35)] backdrop-blur-md"
        >
          <div className="mb-4 flex items-start justify-between">
            <div>
              <div className="font-serif text-lg">Tweaks</div>
              <div className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
                Live preview · press T to close
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close tweaks"
              className="text-ink-mute transition-colors hover:text-ink"
            >
              ×
            </button>
          </div>

          <div>
            <div className="mb-2 font-mono text-[9px] uppercase tracking-[0.2em] text-ink-mute">
              Theme
            </div>
            <div className="grid grid-cols-2 overflow-hidden rounded-[10px] border border-line">
              {(["light", "dark"] as const).map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTheme(t)}
                  className={`px-3 py-2 text-xs capitalize transition-colors duration-300 ${
                    theme === t
                      ? "bg-accent text-accent-fg"
                      : "text-ink-dim hover:text-ink"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
