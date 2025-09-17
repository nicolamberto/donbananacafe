"use client";

import Section from "@/components/ui/Section";
import { hero } from "@/lib/data";
import HeroContent from "./components/HeroContent";
import HeroIllustration from "./components/HeroIllustration";

export default function HeroSection() {
  const { titleTop, titleMid, titleBottom, subtitle, image, ctas } = hero;

  return (
    <Section
      id="hero"
      className="bg-[#E3551E] text-[#2B1C0E]"
      innerClassName="grid grid-cols-1 md:grid-cols-12 py-26 md:py-0 md:pt-10 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-2 md:gap-20"
    >
      <HeroContent
        title={{ top: titleTop, mid: titleMid, bottom: titleBottom }}
        subtitle={subtitle}
        ctas={ctas}
      />
      <HeroIllustration image={image} />
    </Section>
  );
}
