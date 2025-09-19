"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useIsDesktop from "@/components/animations/useIsDesktop";
import useRetroFloat from "@/components/animations/useRetroFloat";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function HeroIllustration({ image }) {
  const isDesktop = useIsDesktop();
  const floatAnimation = useRetroFloat({ amplitude: 22, rotate: 3.5, duration: 7, delay: 0.4 });
  const illustrationVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.div
      className="md:col-span-6 flex md:justify-end md:items-center"
      variants={illustrationVariants}
      initial={isDesktop ? undefined : false}
    >
      <motion.div
        className="relative w-full md:w-[min(60vw,860px)] lg:w-[min(56vw,980px)]"
        {...floatAnimation}
      >
        <div className="h-[38vh] sm:h-[64vh] md:h-[min(80vh,820px)] lg:h-[min(86vh,920px)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 60vw, 980px"
            className="object-contain mt-10 md:mt-0"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
