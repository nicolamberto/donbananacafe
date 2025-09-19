"use client";

import { useCallback, useState } from "react";
import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import Section from "@/components/ui/Section";
import { blends } from "@/lib/data";
import FeaturedBlendCard from "./FeaturedBlendCard";
import BlendCard from "./BlendCard";
import BlendModal from "./BlendModal";
import { containerStagger, fadeInItem } from "@/components/animations/motionConfig";

export default function BlendsSection() {
  const { id, sectionTitle, sectionSubtitle, featured, items } = blends;
  const [selected, setSelected] = useState(null);
  const isDesktop = useIsDesktop();

  const openModal = useCallback((blend) => setSelected(blend), []);
  const closeModal = useCallback(() => setSelected(null), []);
  const isModalOpen = Boolean(selected);

  const headerVariants = isDesktop ? containerStagger : undefined;
  const titleVariants = isDesktop ? fadeInItem : undefined;
  const featuredVariants = isDesktop ? fadeInItem : undefined;
  const gridVariants = isDesktop ? containerStagger : undefined;

  return (
    <>
      <Section
        id={id}
        className="bg-[#FBF1C6] text-[#2B1C0E] pb-10"
        innerClassName="grid grid-cols-1 md:grid-cols-12 py-20 md:pt-10 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-6 md:gap-10"
      >
        <motion.div
          className="md:col-span-12 flex flex-col items-center text-center mb-2 md:mb-0"
          variants={headerVariants}
          initial={isDesktop ? undefined : false}
        >
          <motion.h2
            className="font-heading leading-[0.9] tracking-[-0.02em] text-[clamp(42px,7vw,6rem)]"
            variants={titleVariants}
            initial={isDesktop ? undefined : false}
          >
            {sectionTitle}
          </motion.h2>
          <motion.p
            className="mt-2 font-sub text-[#2B1C0E]/80 text-[clamp(16px,2.2vw,24px)]"
            variants={titleVariants}
            initial={isDesktop ? undefined : false}
          >
            {sectionSubtitle}
          </motion.p>
        </motion.div>

        <motion.div className="md:col-span-6" variants={featuredVariants} initial={isDesktop ? undefined : false}>
          <FeaturedBlendCard data={featured} onOpen={() => openModal({ ...featured })} dimmed={isModalOpen} />
        </motion.div>

        <motion.div
          className="md:col-span-6 grid grid-cols-2 sm:grid-cols-2 gap-6 md:gap-4 content-center"
          variants={gridVariants}
          initial={isDesktop ? undefined : false}
        >
          {items.map((blend, index) => (
            <BlendCard
              key={blend.name ?? index}
              data={blend}
              onOpen={() => openModal({ ...blend })}
              dimmed={isModalOpen}
            />
          ))}
        </motion.div>
      </Section>

      <BlendModal blend={selected} onClose={closeModal} />
    </>
  );
}
