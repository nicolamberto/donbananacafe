"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function AboutTitle({ top, mid, bottom }) {
  const isDesktop = useIsDesktop();
  const titleVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.h2
      className="font-heading leading-[0.9] tracking-[-0.02em] text-[clamp(38px,6.5vw,5rem)]"
      variants={titleVariants}
      initial={isDesktop ? undefined : false}
    >
      {top}
      <br className="hidden md:block" /> {mid}
      <br />
      {bottom}
    </motion.h2>
  );
}
