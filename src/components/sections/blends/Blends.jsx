"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { blends } from "@/lib/data";

export default function Blends() {
    const { id, sectionTitle, sectionSubtitle, colors, featured, items } = blends;

    return (
        <Section id={id} className="bg-[#FBF1C6] text-[#2B1C0E] pb-10" innerClassName="grid grid-cols-1 md:grid-cols-12 py-20 md:pt-10 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-6 md:gap-10">
            {/* Header (full width) */}
            <div className="md:col-span-12 flex flex-col items-center text-center mb-2 md:mb-0">
                <h2 className="font-heading leading-[0.9] tracking-[-0.02em] text-[clamp(42px,7vw,6rem)]"> {sectionTitle} </h2>
                <p className="mt-2 font-sub text-[#2B1C0E]/80 text-[clamp(16px,2.2vw,24px)]"> {sectionSubtitle} </p>
            </div>

            {/* Featured */}
            <div className="md:col-span-6">
                <div className="w-full rounded-[28px] border-[6px] border-[#2B1C0E] bg-[#1B4965]  p-6 md:p-5 flex flex-col">
                    <div className="flex-1 grid grid-cols-1 gap-4 items-center">
                        <div className="order-2 text-[#F3A11A] text-center">
                            <p className="font-heading text-[clamp(14px,2vw,22px)] leading-none mb-2">{featured.tag}</p>
                            <h3 className="font-heading leading-[0.9] tracking-[-0.02em] text-[clamp(36px,6vw,65px)] mb-2">{featured.name}</h3>
                            <p className="font-sub text-[clamp(14px,2vw,20px)]">{featured.note}</p>
                        </div>
                        <div className="order-1 relative w-full">
                            <div className="relative h-[220px] sm:h-[260px] md:h-[320px] lg:h-[360px]">
                                <Image src={featured.image.src} alt={featured.image.alt} fill priority sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 520px" className="object-contain" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <a href={featured.cta.href} className="inline-flex items-center justify-center px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150 w-full">{featured.cta.label}</a>
                    </div>
                </div>
            </div>

            {/* Grid 2x2 de blends */}
            <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-4 content-center ">
                {items.map((b, i) => (
                    <div key={i} className=" bg-[#FBF1C6] p-4 md:p-2 flex flex-col items-center text-center">
                        <div className="relative w-full">
                            <div className="relative h-[170px] sm:h-[200px] md:h-[150px]">
                                <Image src={b.image.src} alt={b.image.alt} fill sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 320px" className="object-contain" />
                            </div>
                        </div>
                        <div className="mt-3">
                            <p className="font-heading text-[clamp(12px,1.8vw,16px)] leading-none opacity-90">{b.tag}</p>
                            <h4 className="mt-1 font-heading text-[clamp(16px,2.2vw,22px)] leading-tight">{b.name}</h4>
                        </div>
                        <a href={b.cta.href} className="mt-4 inline-flex items-center justify-center px-5 py-2 rounded-[9999px] text-sm sm:text-base font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[3px_3px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150">Comprar</a>
                    </div>
                ))}
            </div>
        </Section>
    );
}
