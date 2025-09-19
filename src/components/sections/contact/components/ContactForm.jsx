"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { containerStagger } from "@/components/animations/motionConfig";
import ContactFormField from "./ContactFormField";
import ContactSubmitButton from "./ContactSubmitButton";

export default function ContactForm({ fields, submit }) {
  const isDesktop = useIsDesktop();
  const formVariants = isDesktop ? containerStagger : undefined;

  return (
    <motion.form className="w-full flex flex-col gap-5" variants={formVariants} initial={isDesktop ? undefined : false}>
      {fields.map((field, index) => (
        <ContactFormField key={index} field={field} index={index} />
      ))}
      <ContactSubmitButton label={submit.label} />
    </motion.form>
  );
}
