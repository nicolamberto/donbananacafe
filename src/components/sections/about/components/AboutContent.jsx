"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { containerStagger } from "@/components/animations/motionConfig";
import AboutTitle from "./AboutTitle";
import AboutParagraphs from "./AboutParagraphs";
import AboutCTA from "./AboutCTA";

export default function AboutContent({ title, paragraphs, cta }) {
  const isDesktop = useIsDesktop();
  const contentVariants = isDesktop ? containerStagger : undefined;

  return (
    <motion.div
      className="order-1 md:order-2 md:col-span-6 flex flex-col justify-center pt-0 md:pt-6"
      variants={contentVariants}
      initial={isDesktop ? undefined : false}
    >
      <AboutTitle {...title} />
      <AboutParagraphs items={paragraphs} />
      <AboutCTA cta={cta} />
    </motion.div>
  );
}
