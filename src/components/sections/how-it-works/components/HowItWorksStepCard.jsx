"use client";

import Image from "next/image";

export default function HowItWorksStepCard({ step }) {
  return (
    <div className="flex flex-col items-center text-center px-2 md:px-0 relative">
      <div className="relative w-full max-w-[380px] mx-auto">
        <div className="relative h-[220px] sm:h-[240px] md:h-[260px] lg:h-[300px] 2xl:h-[400px]">
          <Image
            src={step.image.src}
            alt={step.image.alt}
            fill
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 30vw, 380px"
            className="object-contain"
          />
        </div>
      </div>
      <p className="mt-4 font-sub text-[#F4DEAA] text-[clamp(18px,2.6vw,28px)] leading-tight">
        {step.title}
      </p>
    </div>
  );
}
