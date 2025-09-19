"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { bandReveal, fadeInItem } from "@/components/animations/motionConfig";
import HowItWorksCtaButton from "./HowItWorksCtaButton";

export default function HowItWorksCtaBand({ cta }) {
  const isDesktop = useIsDesktop();
  const wrapperVariants = isDesktop ? fadeInItem : undefined;
  const bandVariants = isDesktop ? bandReveal : undefined;

  return (
    <motion.div className="relative mt-12 md:mt-16 flex justify-center" variants={wrapperVariants} initial={isDesktop ? undefined : false}>
      <motion.div
        className="relative inline-flex items-center gap-4 rounded-full border-[6px] border-[#D18B28] px-6 md:px-10 py-0 md:py-3 bg-[#D18B28]"
        variants={bandVariants}
        initial={isDesktop ? undefined : false}
      >
        <span className="font-heading text-[#3D1C0F] text-[clamp(20px,3vw,36px)] font-bold text-nowrap">
          {cta.leftLabel}
          <br className="block md:hidden" />
          <span> a partir de $100</span>
        </span>
        <HowItWorksCtaButton href={cta.button.href} label={cta.button.label} />
      </motion.div>
    </motion.div>
  );
}
