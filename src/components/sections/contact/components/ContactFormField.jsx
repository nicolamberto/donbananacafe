"use client";

import { motion } from "framer-motion";
import useIsDesktop from "@/components/animations/useIsDesktop";
import { fadeInItem } from "@/components/animations/motionConfig";

function renderField(field) {
  const baseClasses =
    "w-full rounded-[28px] border-[3px] border-[#2B1C0E] bg-[#F4DFC6]/80 px-4 py-3 shadow-[3px_3px_0px_0px_#2B1C0E] focus:outline-none transition-shadow duration-200 focus:shadow-[1px_1px_0px_0px_#2B1C0E]";

  if (field.type === "textarea") {
    return (
      <textarea
        id={field.name}
        placeholder={field.placeholder}
        className={`${baseClasses} resize-none`}
        rows={4}
      />
    );
  }

  return (
    <input
      id={field.name}
      type={field.type}
      placeholder={field.placeholder}
      className={baseClasses}
    />
  );
}

export default function ContactFormField({ field, index = 0 }) {
  const isDesktop = useIsDesktop();
  const fieldVariants = isDesktop ? fadeInItem : undefined;

  return (
    <motion.div className="flex flex-col gap-1" variants={fieldVariants} custom={index} initial={isDesktop ? undefined : false}>
      <label htmlFor={field.name} className="font-heading text-lg">
        {field.label}
      </label>
      {renderField(field)}
    </motion.div>
  );
}
