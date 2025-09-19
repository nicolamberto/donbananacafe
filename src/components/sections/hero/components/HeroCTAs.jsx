"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { containerStagger } from "@/components/animations/motionConfig";
import HeroCTAButton from "./HeroCTAButton";

export default function HeroCTAs({ ctas }) {
  const buttons = [
    {
      ...ctas.primary,
      variant: "primary",
    },
    {
      ...ctas.secondary,
      variant: "secondary",
    },
  ];

  const isDesktop = useIsDesktop();
  const ctaVariants = isDesktop ? containerStagger : undefined;

  return (
    <motion.div
      className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5"
      variants={ctaVariants}
      initial={isDesktop ? undefined : false}
    >
      {buttons.map((button, index) => (
        <HeroCTAButton key={index} {...button} />
      ))}
    </motion.div>
  );
}
