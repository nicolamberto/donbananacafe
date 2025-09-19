"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { containerStagger } from "@/components/animations/motionConfig";
import HowItWorksStepCard from "./HowItWorksStepCard";

export default function HowItWorksSteps({ steps }) {
  const isDesktop = useIsDesktop();
  const stepsVariants = isDesktop ? containerStagger : undefined;

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20"
      variants={stepsVariants}
      initial={isDesktop ? undefined : false}
    >
      {steps.map((step, index) => (
        <HowItWorksStepCard key={index} step={step} index={index} />
      ))}
    </motion.div>
  );
}
