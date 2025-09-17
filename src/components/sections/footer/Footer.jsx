"use client";

import Section from "@/components/ui/Section";
import { footer } from "@/lib/data";
import FooterBrandCard from "./components/FooterBrandCard";
import FooterContactCard from "./components/FooterContactCard";
import FooterNavigation from "./components/FooterNavigation";

export default function Footer() {
  const { id, colors, brand, contactCard, nav, image } = footer;

  return (
    <Section
      id={id}
      className={`bg-[${colors.bg}] text-[${colors.textLight}]`}
      innerClassName="grid grid-cols-1 md:grid-cols-12 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-6 md:gap-10 pt-10 md:pt-16 pb-12"
    >
      <FooterBrandCard brand={brand} />
      <FooterContactCard contactCard={contactCard} image={image} />
      <FooterNavigation nav={nav} />
    </Section>
  );
}
