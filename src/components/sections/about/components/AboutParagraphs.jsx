"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function AboutParagraphs({ items }) {
  const isDesktop = useIsDesktop();
  const paragraphVariants = isDesktop ? fadeInItem : undefined;

  return (
    <div className="mt-6 space-y-2 md:space-y-6">
      {items.map((paragraph, index) => (
        <motion.p
          key={index}
          className="text-[#2B1C0E] text-lg sm:text-xl lg:text-2xl font-sub"
          variants={paragraphVariants}
          custom={index}
          initial={isDesktop ? undefined : false}
        >
          {paragraph}
        </motion.p>
      ))}
    </div>
  );
}
