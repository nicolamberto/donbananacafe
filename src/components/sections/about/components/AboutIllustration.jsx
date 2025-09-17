"use client";

import Image from "next/image";

export default function AboutIllustration({ image }) {
  return (
    <div className="order-2 md:order-1 md:col-span-6 flex items-center justify-center">
      <div className="relative w-full md:w-[min(60vw,820px)] lg:w-[min(52vw,900px)]">
        <div className="relative h-[36vh] sm:h-[52vh] md:h-[min(70vh,720px)] lg:h-[min(76vh,820px)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 768px) 95vw, (max-width: 1200px) 55vw, 900px"
            className="object-contain mt-10 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
