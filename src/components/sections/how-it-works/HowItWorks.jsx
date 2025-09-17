"use client";

import Section from "@/components/ui/Section";
import { howItWorks } from "@/lib/data";
import HowItWorksTitle from "./components/HowItWorksTitle";
import HowItWorksDivider from "./components/HowItWorksDivider";
import HowItWorksSteps from "./components/HowItWorksSteps";
import HowItWorksCtaBand from "./components/HowItWorksCtaBand";

export default function HowItWorks() {
  const { id, title, steps, ctaBand } = howItWorks;

  return (
    <Section
      id={id}
      className="bg-[#3D1C0F] text-[#F4DEAA]"
      innerClassName="w-full mx-auto relative px-2 md:px-6 max-w-[1480px] py-20 md:py-0 md:pt-0 pb-20 md:pb-0"
    >
      <div className="relative w-full">
        <HowItWorksTitle title={title} />
        <HowItWorksDivider />
        <HowItWorksSteps steps={steps} />
        <HowItWorksCtaBand cta={ctaBand} />
      </div>
    </Section>
  );
}
