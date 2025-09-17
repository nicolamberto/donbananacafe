"use client";

import Image from "next/image";

export default function ContactIllustration({ image }) {
  return (
    <div className="pb-10 md:pb-0 md:col-span-6 flex justify-center md:justify-end items-center">
      <div className="relative w-full md:w-[min(60vw,600px)] lg:w-[min(56vw,720px)]">
        <div className="relative h-[40vh] sm:h-[50vh] md:h-[min(70vh,720px)]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
            className="object-contain mt-10 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
}
