"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem, retroSoftSpring } from "@/components/animations/motionConfig";

const cardVariants = {
  hidden: { ...fadeInItem.hidden },
  visible: {
    ...fadeInItem.visible,
    scale: 1,
    filter: "sepia(0%)",
  },
  dimmed: {
    scale: 0.96,
    filter: "sepia(16%)",
    transition: { ...retroSoftSpring, duration: 0.2 },
  },
};

export default function BlendCard({ data, onOpen, dimmed }) {
  const isDesktop = useIsDesktop();
  const { image, tag, name, cta } = data;
  const variants = isDesktop ? cardVariants : undefined;
  const animate = isDesktop ? (dimmed ? "dimmed" : "visible") : undefined;

  return (
    <motion.div
      className="bg-[#FBF1C6] p-4 md:p-2 flex flex-col items-center text-center"
      variants={variants}
      animate={animate}
      initial={isDesktop ? undefined : false}
    >
      <button onClick={onOpen} className="w-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="relative h-[170px] sm:h-[200px] md:h-[150px] cursor-pointer"
          transition={{ type: 'spring', stiffness: 240, damping: 20 }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 320px"
            className="object-contain"
          />
        </motion.div>
        <div className="mt-3 cursor-pointer" onClick={onOpen}>
          <p className="font-heading text-[clamp(12px,1.8vw,16px)] leading-none opacity-90">{tag}</p>
          <h4 className="mt-1 font-heading text-[clamp(16px,2.2vw,22px)] leading-tight">{name}</h4>
        </div>
      </button>
      <a
        href={cta.href}
        className="mt-4 inline-flex items-center justify-center px-5 py-2 rounded-[9999px] text-sm sm:text-base font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[3px_3px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150"
      >
        Comprar
      </a>
    </motion.div>
  );
}
