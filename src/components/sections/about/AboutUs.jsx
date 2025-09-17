"use client";

import Section from "@/components/ui/Section";
import { about } from "@/lib/data";
import AboutIllustration from "./components/AboutIllustration";
import AboutContent from "./components/AboutContent";

export default function AboutUs() {
  const { id, titleTop, titleMid, titleBottom, paragraphs, cta, image } = about;

  return (
    <Section
      id={id}
      className="bg-[#FBF1C6] text-[#2B1C0E]"
      innerClassName="grid grid-cols-1 md:grid-cols-12 py-20 md:py-0 md:pt-20 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-2 md:gap-20"
    >
      <AboutIllustration image={image} />
      <AboutContent
        title={{ top: titleTop, mid: titleMid, bottom: titleBottom }}
        paragraphs={paragraphs}
        cta={cta}
      />
    </Section>
  );
}
