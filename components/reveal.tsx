"use client";

import { motion, useInView, type HTMLMotionProps } from "framer-motion";
import { useRef, type ReactNode } from "react";

const ART_EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = Omit<HTMLMotionProps<"div">, "children"> & {
  children: ReactNode;
  delay?: number;
  /** Render an inline element instead of block. */
  inline?: boolean;
};

/**
 * Fade + slide-up reveal. Uses `useInView` (not `whileInView`) so the
 * trigger is explicit — `whileInView` with viewport margins becomes
 * flaky once web fonts swap and trigger layout shifts mid-mount.
 */
export function Reveal({
  children,
  delay = 0,
  inline = false,
  className,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0 });
  const Tag = inline ? motion.span : motion.div;

  return (
    <Tag
      ref={ref as never}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.9, ease: ART_EASE, delay }}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/**
 * Two-layer text reveal — wraps the line in overflow:hidden and slides
 * the inner span up from below. Mirrors the CSS `reveal-line` pattern.
 */
export function RevealLine({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0 });

  return (
    <span
      ref={ref}
      className={`block overflow-hidden pb-[0.05em] ${className ?? ""}`}
    >
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={inView ? { y: 0 } : { y: "110%" }}
        transition={{ duration: 1.1, ease: ART_EASE, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
