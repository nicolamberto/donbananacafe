"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem, retroQuickSpring } from "@/components/animations/motionConfig";

export default function FooterNavLink({ link, active, index = 0 }) {
  const isDesktop = useIsDesktop();
  const linkVariants = isDesktop ? fadeInItem : undefined;

  const baseClasses =
    "inline-flex items-center justify-center px-6 py-2 rounded-[9999px] border-[3px] shadow-[4px_4px_0px_0px_#2B1C0E] text-[clamp(14px,2vw,20px)] font-heading transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none";

  const activeClasses = active
    ? "bg-[#C65A1E] text-[#FFEFD0] border-[#2B1C0E]"
    : "bg-[#2B1C0E] text-[#F7D58A] border-[#2B1C0E]";

  return (
    <motion.div
      className="inline-flex"
      variants={linkVariants}
      custom={index}
      initial={isDesktop ? undefined : false}
      whileHover={{ rotate: -1.4, scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      transition={{ ...retroQuickSpring, stiffness: 220 }}
    >
      <Link href={link.href} className={`${baseClasses} ${activeClasses}`}>
        {link.label}
      </Link>
    </motion.div>
  );
}
