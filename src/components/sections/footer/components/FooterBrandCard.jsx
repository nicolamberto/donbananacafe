"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";
import { FaCoffee } from "react-icons/fa";

export default function FooterBrandCard({ brand }) {
  const isDesktop = useIsDesktop();
  const cardVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.div className="md:col-span-7" variants={cardVariants} initial={isDesktop ? undefined : false}>
      <div className="w-full h-full min-h-[280px] md:min-h-[340px] rounded-[28px] border-[6px] border-[#2B1C0E] bg-[#F4DFC6] p-6 md:p-10 shadow-[6px_6px_0px_0px_#2B1C0E] flex flex-col justify-center">
        <h3 className="font-heading text-[#2B1C0E] leading-[0.85] tracking-[-0.02em] text-[clamp(46px,7vw,96px)]">
          {brand.titleTop}
        </h3>
        <h3 className="font-heading text-[#2B1C0E] leading-[0.85] tracking-[-0.02em] text-[clamp(46px,7vw,96px)]">
          {brand.titleBottom}
        </h3>
        <div className="mt-4 flex items-center gap-3">
          <p className="font-sub text-[#2B1C0E] text-[clamp(16px,2.5vw,28px)]">{brand.tagline}</p>
          {brand.showCupIcon && <FaCoffee className="w-7 h-7" color="#2B1C0E" />}
        </div>
      </div>
    </motion.div>
  );
}
