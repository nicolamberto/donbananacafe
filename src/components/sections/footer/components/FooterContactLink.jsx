"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function FooterContactLink({ href, label, icon: Icon, target }) {
  const isDesktop = useIsDesktop();
  const linkVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.a
      href={href}
      target={target}
      className="flex items-center gap-3 text-[clamp(16px,2.5vw,28px)] font-heading"
      variants={linkVariants}
      initial={isDesktop ? undefined : false}
      whileHover={{ x: 4 }}
    >
      <Icon className="w-5 h-5" />
      <span className="whitespace-pre-line">{label}</span>
    </motion.a>
  );
}
