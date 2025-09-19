"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function HeroSubtitle({ text }) {
  const isDesktop = useIsDesktop();
  const subtitleVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.p
      className="mt-2 md:mt-20 text-[#FFFFFF]/70 text-lg sm:text-xl md:text-2xl font-sub"
      variants={subtitleVariants}
      initial={isDesktop ? undefined : false}
    >
      {text}
    </motion.p>
  );
}
