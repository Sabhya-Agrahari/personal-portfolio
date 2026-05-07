"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface ShimmerButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  href?: string;
  className?: string;
  target?: string;
  onClick?: () => void;
}

export default function ShimmerButton({
  children,
  href,
  className = "",
  target,
  onClick,
  ...props
}: ShimmerButtonProps) {
  const baseClasses = `
    group relative inline-flex items-center justify-center
    text-[12px] uppercase tracking-[0.2em]
    px-8 py-3
    rounded-xl
    border border-white/20
    text-gray-300 hover:text-white
    overflow-hidden
    backdrop-blur-md
    transition-all duration-300
    shadow-[0_0_10px_rgba(255,255,255,0.05)]
    ${className}
  `;

  const content = (
    <>
      <span
        className="
          absolute inset-0
          -translate-x-full
          group-hover:translate-x-full
          transition-transform duration-700 ease-in-out
          bg-gradient-to-r from-transparent via-white/20 to-transparent
        "
      />
      <span className="relative z-10">{children}</span>
    </>
  );

  // 🔹 Anchor version
  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className={baseClasses}
      >
        {content}
      </motion.a>
    );
  }

  // 🔹 Button version
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={baseClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
}