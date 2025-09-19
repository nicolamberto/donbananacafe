"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { containerStagger } from "@/components/animations/motionConfig";
import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroCTAs from "./HeroCTAs";

export default function HeroContent({ title, subtitle, ctas }) {
  const isDesktop = useIsDesktop();
  const contentVariants = isDesktop ? containerStagger : undefined;

  return (
    <motion.div
      className="md:col-span-6 flex flex-col justify-center md:pt-6"
      variants={contentVariants}
      initial={isDesktop ? undefined : false}
    >
      <HeroTitle {...title} />
      <HeroSubtitle text={subtitle} />
      <HeroCTAs ctas={ctas} />
    </motion.div>
  );
}
