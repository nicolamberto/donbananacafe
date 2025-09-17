"use client";

import HeroTitle from "./HeroTitle";
import HeroSubtitle from "./HeroSubtitle";
import HeroCTAs from "./HeroCTAs";

export default function HeroContent({ title, subtitle, ctas }) {
  return (
    <div className="md:col-span-6 flex flex-col justify-center md:pt-6">
      <HeroTitle {...title} />
      <HeroSubtitle text={subtitle} />
      <HeroCTAs ctas={ctas} />
    </div>
  );
}
