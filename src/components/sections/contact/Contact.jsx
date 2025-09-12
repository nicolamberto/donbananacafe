"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { contact } from "@/lib/data";

export default function Contact() {
    const { id, title, fields, submit, image, band } = contact;

    return (
        <Section
            id={id}
            className="bg-[#4B4B44] text-[#2B1C0E]"
            innerClassName="grid grid-cols-1 md:grid-cols-12 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-6 md:gap-20 pt-10 md:pt-16"
        >
            {/* Formulario */}
            <div className="md:col-span-6 flex flex-col justify-center border-[6px] border-[#2B1C0E] bg-[#FBF1C6] rounded-[28px] p-5 md:p-10 shadow-[6px_6px_0px_0px_#2B1C0E]">
                <h2 className="font-heading text-[clamp(36px,7vw,72px)] leading-[0.9] tracking-[-0.02em] mb-6">
                    {title}
                </h2>

                <form className="w-full flex flex-col gap-5">
                    {fields.map((field, i) => (
                        <div key={i} className="flex flex-col gap-1">
                            <label htmlFor={field.name} className="font-heading text-lg">
                                {field.label}
                            </label>
                            {field.type === "textarea" ? (
                                <textarea
                                    id={field.name}
                                    placeholder={field.placeholder}
                                    className="w-full rounded-[28px] border-[3px] border-[#2B1C0E] bg-[#F4DFC6]/80 px-4 py-3 shadow-[3px_3px_0px_0px_#2B1C0E] focus:outline-none resize-none"
                                    rows={4}
                                />
                            ) : (
                                <input
                                    id={field.name}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    className="w-full rounded-[28px] border-[3px] border-[#2B1C0E] px-4 bg-[#F4DFC6]/80 py-3 shadow-[3px_3px_0px_0px_#2B1C0E] focus:outline-none"
                                />
                            )}
                        </div>
                    ))}

                    <button
                        type="submit"
                        className="inline-flex cursor-pointer items-center justify-center px-8 py-3 rounded-[9999px] text-lg font-semibold bg-[#B74728] text-[#FFFFFF] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150 mt-4"
                    >
                        {submit.label}
                    </button>
                </form>
            </div>

            {/* Banana */}
            <div className="pb-10 md:pb-0 md:col-span-6 flex justify-center md:justify-end items-center">
                <div className="relative w-full md:w-[min(60vw,600px)] lg:w-[min(56vw,720px)]">
                    <div className="relative h-[40vh] sm:h-[50vh] md:h-[min(70vh,720px)]">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority
                            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 600px"
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* Franja inferior */}
            {/*             <div className="md:col-span-12 mt-10">
                <div className="w-full bg-[#B74728] text-[#FFFFFF] rounded-full flex justify-center items-center px-6 py-3 text-center font-heading text-[clamp(16px,3vw,24px)] shadow-[3px_3px_0px_0px_#2B1C0E]">
                    <span className="mr-2">{band.icon}</span>
                    {band.text}
                </div>
            </div> */}
        </Section>
    );
}
