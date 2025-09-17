"use client";

import Section from "@/components/ui/Section";
import { contact } from "@/lib/data";
import ContactFormSection from "./components/ContactFormSection";
import ContactIllustration from "./components/ContactIllustration";

export default function Contact() {
  const { id, title, fields, submit, image } = contact;

  return (
    <Section
      id={id}
      className="bg-[#4B4B44] text-[#2B1C0E]"
      innerClassName="grid grid-cols-1 md:grid-cols-12 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-6 md:gap-20 py-20 md:py-0 md:pt-16"
    >
      <ContactFormSection title={title} fields={fields} submit={submit} />
      <ContactIllustration image={image} />
    </Section>
  );
}
