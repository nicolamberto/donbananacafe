"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { containerStagger, heroLineVariants } from "@/components/animations/motionConfig";

export default function HeroTitle({ top, mid, bottom }) {
  const isDesktop = useIsDesktop();
  const containerVariants = isDesktop ? containerStagger : undefined;
  const lineVariants = isDesktop ? heroLineVariants : undefined;

  return (
    <motion.h1
      className="font-heading leading-[0.78] tracking-[-0.02em] text-[clamp(58px,15vw,15rem)] text-nowrap"
      variants={containerVariants}
      initial={isDesktop ? undefined : false}
    >
      <motion.span variants={lineVariants} className="inline-block">
        {top}
      </motion.span>
      <br className="hidden md:block" />
      <motion.span variants={lineVariants} className="inline-block">
        {mid}
      </motion.span>
      <br />
      <motion.span
        variants={lineVariants}
        className="inline-block sm:w-full sm:text-center"
      >
        {bottom}
      </motion.span>
    </motion.h1>
  );
}
