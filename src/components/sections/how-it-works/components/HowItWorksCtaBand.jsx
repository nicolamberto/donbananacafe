"use client";

import HowItWorksCtaButton from "./HowItWorksCtaButton";

export default function HowItWorksCtaBand({ cta }) {
  return (
    <div className="relative mt-12 md:mt-16 flex justify-center">
      <div className="relative inline-flex items-center gap-4 rounded-full border-[6px] border-[#D18B28] px-6 md:px-10 py-0 md:py-3 bg-[#D18B28]">
        <span className="font-heading text-[#3D1C0F] text-[clamp(20px,3vw,36px)] font-bold text-nowrap">
          {cta.leftLabel}
          <br className="block md:hidden" />
          <span> a partir de $100</span>
        </span>
        <HowItWorksCtaButton href={cta.button.href} label={cta.button.label} />
      </div>
    </div>
  );
}
