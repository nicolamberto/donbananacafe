"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { about } from "@/lib/data";

export default function AboutUs() {
    const { id, titleTop, titleMid, titleBottom, paragraphs, cta, image } = about;

    return (
        <Section
            id={id}
            className="bg-[#FBF1C6] text-[#2B1C0E]"
            innerClassName="grid grid-cols-1 md:grid-cols-12 pt-10 md:pt-20 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-2 md:gap-20"
        >
            {/* Ilustración (izquierda en desktop) */}
            <div className="order-2 md:order-1 md:col-span-6 flex items-center justify-center">
                <div className="relative w-full md:w-[min(60vw,820px)] lg:w-[min(52vw,900px)]">
                    <div className="relative h-[36vh] sm:h-[52vh] md:h-[min(70vh,720px)] lg:h-[min(76vh,820px)]">
                        <Image src={image.src} alt={image.alt} fill priority sizes="(max-width: 768px) 95vw, (max-width: 1200px) 55vw, 900px" className="object-contain" />
                    </div>
                </div>
            </div>

            {/* Texto (derecha en desktop) */}
            <div className="order-1 md:order-2 md:col-span-6 flex flex-col justify-center pt-6">
                <h2 className="font-heading leading-[0.9] tracking-[-0.02em] text-[clamp(38px,6.5vw,5rem)]"> {titleTop}<br className="hidden md:block" /> {titleMid}<br />{titleBottom} </h2>

                <div className="mt-6 space-y-6">
                    {paragraphs.map((p, i) => (
                        <p key={i} className="text-[#2B1C0E] text-lg sm:text-xl lg:text-2xl font-sub">{p}</p>
                    ))}
                </div>

                <div className="mt-2">
                    <a href={cta.href} className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150">
                        {cta.label}
                    </a>
                </div>
            </div>
        </Section>
    );
}
