"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { containerStagger } from "@/components/animations/motionConfig";
import FooterNavLink from "./FooterNavLink";

export default function FooterNavigation({ nav }) {
  const isDesktop = useIsDesktop();
  const navVariants = isDesktop ? containerStagger : undefined;

  return (
    <motion.div
      className="md:col-span-12 mt-4 flex flex-wrap items-center justify-start gap-4 md:gap-6"
      variants={navVariants}
      initial={isDesktop ? undefined : false}
    >
      {nav.links.map((link, index) => (
        <FooterNavLink key={link.href} link={link} active={index === nav.activeIndex} index={index} />
      ))}
    </motion.div>
  );
}
