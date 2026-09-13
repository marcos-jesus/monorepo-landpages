"use client";

import { motion } from "framer-motion";
import type { ReactNode, MouseEventHandler } from "react";

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
}: {
  href?: string;
  onClick?: MouseEventHandler;
  variant?: "primary" | "outline";
  children: ReactNode;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-6 py-3 font-body font-bold uppercase tracking-wide text-sm transition-colors";
  const styles =
    variant === "primary"
      ? "bg-brand text-white shadow-[0_0_24px_rgba(7,95,255,0.45)] hover:bg-brandHover"
      : "border border-white/20 text-white hover:border-brand hover:text-brand";

  const content = (
    <motion.span
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`${base} ${styles}`}
    >
      {children}
      <motion.span
        className="inline-block"
        initial={{ x: 0 }}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        aria-hidden="true"
      >
        →
      </motion.span>
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {content}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
}
