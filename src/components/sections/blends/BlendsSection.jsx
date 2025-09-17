"use client";

import { useState, useCallback } from "react";
import Section from "@/components/ui/Section";
import { blends } from "@/lib/data";
import FeaturedBlendCard from "./FeaturedBlendCard";
import BlendCard from "./BlendCard";
import BlendModal from "./BlendModal";

export default function BlendsSection() {
    const { id, sectionTitle, sectionSubtitle, colors, featured, items } = blends;
    const [selected, setSelected] = useState(null); // {modal, image, name...} o null

    const openModal = useCallback((blend) => setSelected(blend), []);
    const closeModal = useCallback(() => setSelected(null), []);

    return (
        <>
            <Section id='compra' className="bg-[#FBF1C6] text-[#2B1C0E] pb-10" innerClassName="grid grid-cols-1 md:grid-cols-12 py-20 md:pt-10 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-6 md:gap-10">
                {/* Header */}
                <div className="md:col-span-12 flex flex-col items-center text-center mb-2 md:mb-0">
                    <h2 className="font-heading leading-[0.9] tracking-[-0.02em] text-[clamp(42px,7vw,6rem)]">{sectionTitle}</h2>
                    <p className="mt-2 font-sub text-[#2B1C0E]/80 text-[clamp(16px,2.2vw,24px)]">{sectionSubtitle}</p>
                </div>

                {/* Featured */}
                <div className="md:col-span-6">
                    <FeaturedBlendCard data={featured} onOpen={() => openModal({ ...featured })} />
                </div>

                {/* Grid 2x2 */}
                <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-4 content-center">
                    {items.map((b, idx) => (
                        <BlendCard key={idx} data={b} onOpen={() => openModal({ ...b })} />
                    ))}
                </div>
            </Section>

            {/* Modal */}
            <BlendModal blend={selected} onClose={closeModal} />
        </>
    );
}
