"use client";

import Image from "next/image";

export default function HeroIllustration({ image }) {
  return (
    <div className="md:col-span-6 flex md:justify-end md:items-center">
      <div className="relative w-full md:w-[min(60vw,860px)] lg:w-[min(56vw,980px)]">
        <div className="h-[38vh] sm:h-[64vh] md:h-[min(80vh,820px)] lg:h-[min(86vh,920px)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 60vw, 980px"
            className="object-contain mt-10 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
