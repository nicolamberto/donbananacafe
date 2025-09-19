"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { retroSpring } from "@/components/animations/motionConfig";

const stepVariants = {
  hidden: (index = 0) => ({
    opacity: 0,
    y: 64,
    skewY: index % 2 === 0 ? -6 : 6,
  }),
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    skewY: 0,
    transition: { ...retroSpring, delay: 0.08 * index },
  }),
};

export default function HowItWorksStepCard({ step, index = 0 }) {
  const isDesktop = useIsDesktop();
  const variants = isDesktop ? stepVariants : undefined;
  const hoverProps = isDesktop
    ? { whileHover: { rotate: index % 2 === 0 ? -1.8 : 1.8, scale: 1.02 } }
    : {};

  return (
    <motion.div
      className="flex flex-col items-center text-center px-2 md:px-0 relative"
      variants={variants}
      custom={index}
      initial={isDesktop ? undefined : false}
      transition={{ ...retroSpring, stiffness: 160 }}
      {...hoverProps}
    >
      <motion.div className="relative w-full max-w-[380px] mx-auto" layout>
        <div className="relative h-[220px] sm:h-[240px] md:h-[260px] lg:h-[300px] 2xl:h-[400px]">
          <Image
            src={step.image.src}
            alt={step.image.alt}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 30vw, 380px"
            className="object-contain"
          />
        </div>
      </motion.div>
      <motion.p
        className="mt-4 font-sub text-[#F4DEAA] text-[clamp(18px,2.6vw,28px)] leading-tight"
        variants={variants}
        custom={index}
        initial={isDesktop ? undefined : false}
      >
        {step.title}
      </motion.p>
    </motion.div>
  );
}
