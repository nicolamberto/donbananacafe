"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function HowItWorksTitle({ title }) {
  const isDesktop = useIsDesktop();
  const titleVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.h2
      className="font-heading text-[#F4DEAA] leading-[0.9] tracking-[-0.02em] text-center text-[clamp(40px,7vw,6rem)] mb-6 md:mb-10"
      variants={titleVariants}
      initial={isDesktop ? undefined : false}
    >
      {title}
    </motion.h2>
  );
}
