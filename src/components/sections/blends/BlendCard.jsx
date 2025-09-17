"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function BlendCard({ data, onOpen }) {
  const { image, tag, name, cta } = data;

  return (
    <div className="bg-[#FBF1C6] p-4 md:p-2 flex flex-col items-center text-center">
      <button onClick={onOpen} className="w-full">
        <motion.div
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="relative h-[170px] sm:h-[200px] md:h-[150px] cursor-pointer">
          <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 320px" className="object-contain" />
        </motion.div>
        <div className="mt-3 cursor-pointer" onClick={onOpen}>
          <p className="font-heading text-[clamp(12px,1.8vw,16px)] leading-none opacity-90">{tag}</p>
          <h4 className="mt-1 font-heading text-[clamp(16px,2.2vw,22px)] leading-tight">{name}</h4>
        </div>
      </button>
      <a href={cta.href} className="mt-4 inline-flex items-center justify-center px-5 py-2 rounded-[9999px] text-sm sm:text-base font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[3px_3px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150">Comprar</a>
    </div>
  );
}
