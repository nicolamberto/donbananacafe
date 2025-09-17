"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MotionImage = motion(Image)

export default function FeaturedBlendCard({ data, onOpen }) {
  const { image, tag, name, note, cta } = data;

  return (
    <div className="w-full rounded-[28px] border-[6px] border-[#2B1C0E] bg-[#1B4965] p-6 md:p-5 flex flex-col">
      <button onClick={onOpen} className="flex-1 grid grid-cols-1 gap-4 items-center cursor-pointer">
        <div className="order-2 text-[#F3A11A] text-center">
          <p className="font-heading text-[clamp(14px,2vw,22px)] leading-none mb-2">{tag}</p>
          <h3 className="font-heading leading-[0.9] tracking-[-0.02em] text-[clamp(36px,6vw,65px)] mb-2">{name}</h3>
          <p className="font-sub text-[clamp(14px,2vw,20px)]">{note}</p>
        </div>
        <div className="order-1 relative w-full">
          <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]">
            <MotionImage
              whileHover={{scale:1.03}}
              whileTap={{scale:0.98}}
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 520px" 
              className="object-contain cursor-pointer" />
          </div>
        </div>
      </button>

      <div className="mt-6">
        <a href={cta.href} className="inline-flex items-center justify-center px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150 w-full">{cta.label}</a>
      </div>
    </div>
  );
}
