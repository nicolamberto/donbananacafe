"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem, retroQuickSpring } from "@/components/animations/motionConfig";

export default function HowItWorksCtaButton({ href, label }) {
  const isDesktop = useIsDesktop();
  const buttonVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.a
      href={href}
      className="inline-flex items-center justify-center px-4 sm:px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150 text-nowrap"
      variants={buttonVariants}
      initial={isDesktop ? undefined : false}
      whileHover={{ rotate: -1.2, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ ...retroQuickSpring, stiffness: 240 }}
    >
      {label}
    </motion.a>
  );
}
