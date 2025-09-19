"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function ContactTitle({ title }) {
  const isDesktop = useIsDesktop();
  const titleVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.h2
      className="font-heading text-[clamp(36px,7vw,72px)] leading-[0.9] tracking-[-0.02em] mb-6"
      variants={titleVariants}
      initial={isDesktop ? undefined : false}
    >
      {title}
    </motion.h2>
  );
}
