"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem, retroQuickSpring } from "@/components/animations/motionConfig";

export default function AboutCTA({ cta }) {
  const isDesktop = useIsDesktop();
  const ctaVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.div className="mt-2" variants={ctaVariants} initial={isDesktop ? undefined : false}>
      <motion.a
        href={cta.href}
        className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150"
        whileHover={{ rotate: -1, scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        transition={{ ...retroQuickSpring, stiffness: 250 }}
      >
        {cta.label}
      </motion.a>
    </motion.div>
  );
}
