"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { howItWorks } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function HowItWorks() {
    const { id, title, steps, ctaBand } = howItWorks;

    return (
        <Section
            id={id}
            className="bg-[#3D1C0F] text-[#F4DEAA]"
            innerClassName="w-full mx-auto relative px-2 md:px-6 max-w-[1480px] py-20 md:py-0 md:pt-0 pb-20 md:pb-0"
        >
            {/* Contenedor con marco retro */}
            <div className="relative w-full p-0 md:p-0 ">
                {/* Ornamentos de las esquinas */}


                {/* Título */}
                <h2 className="font-heading text-[#F4DEAA] leading-[0.9] tracking-[-0.02em] text-center text-[clamp(40px,7vw,6rem)] mb-6 md:mb-10">
                    {title}
                </h2>

                {/* Línea decorativa bajo el título */}
                <div className="h-[3px] md:h-[6px] w-full rounded-full bg-[#D18B28] mb-8 md:mb-12" />

                {/* Grid de pasos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
                    {steps.map((step, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center px-2 md:px-0 relative"
                        >
                            {/* Divisor vertical entre columnas en desktop */}

                            {/* Ilustración */}
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
                            {/* Texto del paso */}
                            <p className="mt-4 font-sub text-[#F4DEAA] text-[clamp(18px,2.6vw,28px)] leading-tight">
                                {step.title}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Banda CTA inferior */}
                <div className="relative mt-12 md:mt-16 flex justify-center ">
                    {/* Línea horizontal que se extiende */}

                    {/* Pill encima de la línea */}
                    <div className="relative inline-flex items-center gap-4 rounded-full border-[6px] border-[#D18B28] px-6 md:px-10 py-0 md:py-3 bg-[#D18B28]">
                        <span className="font-heading text-[#3D1C0F] text-[clamp(20px,3vw,36px)] font-bold text-nowrap">
                            {ctaBand.leftLabel}
                            <br className="block md:hidden"/>
                            <span> a partir de $100</span> 
                        </span>

                        <a href={'#'} className="inline-flex items-center justify-center px-4 sm:px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150 text-nowrap">Aprovechar</a>
                    </div>
                </div>

            </div>
        </Section>
    );
}
