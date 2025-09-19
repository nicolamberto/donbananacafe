"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function HowItWorksDivider() {
  const isDesktop = useIsDesktop();
  const dividerVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.div
      className="h-[3px] md:h-[6px] w-full rounded-full bg-[#D18B28] mb-8 md:mb-12"
      variants={dividerVariants}
      initial={isDesktop ? undefined : false}
    />
  );
}
