"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useIsDesktop from "@/components/animations/useIsDesktop";
import useVintageParallax from "@/components/animations/useVintageParallax";
import useRetroFloat from "@/components/animations/useRetroFloat";
import { fadeInItem } from "@/components/animations/motionConfig";

export default function ContactIllustration({ image }) {
  const isDesktop = useIsDesktop();
  const { ref, style } = useVintageParallax({ range: [18, -20], enabled: isDesktop });
  const floatAnimation = useRetroFloat({ amplitude: 10, rotate: 1.6, duration: 7.2, delay: 0.6, enabled: isDesktop });
  const illustrationVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.div
      ref={ref}
      className="pb-10 md:pb-0 md:col-span-6 flex justify-center md:justify-end items-center"
      variants={illustrationVariants}
      initial={isDesktop ? undefined : false}
      style={style}
    >
      <motion.div
        className="relative w-full md:w-[min(60vw,600px)] lg:w-[min(56vw,720px)]"
        {...floatAnimation}
      >
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[min(70vh,720px)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
            className="object-contain mt-10 md:mt-0"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
