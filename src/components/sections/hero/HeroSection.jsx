"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { hero } from "@/lib/data";

export default function HeroSection() {
  const { titleTop, titleMid, titleBottom, subtitle, image, ctas } = hero;

  return (
    <Section
      id="hero"
      className="bg-[#E3551E] text-[#2B1C0E]"
      innerClassName="grid grid-cols-1 md:grid-cols-12 py-26 md:py-0 md:pt-10 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-2 md:gap-20"
    >
      {/* Texto */}
      <div className="md:col-span-6 flex flex-col justify-center md:pt-6 ">
        <h1 className="font-heading leading-[0.78] tracking-[-0.02em] text-[clamp(58px,15vw,15rem)] text-nowrap">
          {titleTop}<br className="hidden md:block" /> {titleMid}<br /><span className="sm:w-full sm:text-center ">{titleBottom}</span>
        </h1>
        <p className="mt-2 md:mt-20 text-[#FFFFFF]/70 text-lg sm:text-xl md:text-2xl font-sub">{subtitle}</p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
          <a
            href={ctas.primary.href}
            onClick={(e) => {
              if (ctas.primary.href.startsWith("#")) {
                e.preventDefault();
                const id = ctas.primary.href.replace("#", "");
                const section = document.getElementById(id);
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150">{ctas.primary.label}</a>
          <a
            href={ctas.secondary.href}
            onClick={(e) => {
              if (ctas.primary.href.startsWith("#")) {
                e.preventDefault();
                const id = ctas.primary.href.replace("#", "");
                const section = document.getElementById(id);
                section?.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#B74728] text-[#FFFFFF] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150">{ctas.secondary.label}</a>
        </div>
      </div>

      {/* Banana */}
      <div className="md:col-span-6 flex md:justify-end md:items-center">
        <div className="relative w-full md:w-[min(60vw,860px)] lg:w-[min(56vw,980px)] ">
          <div className=" h-[38vh] sm:h-[64vh] md:h-[min(80vh,820px)] lg:h-[min(86vh,920px)]">
            <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 768px) 95vw, (max-width: 1200px) 60vw, 980px" className="object-contain mt-10 md:mt-0" />
          </div>
        </div>
      </div>
    </Section>
  );
}
