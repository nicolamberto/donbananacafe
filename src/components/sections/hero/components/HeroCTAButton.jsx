"use client";

import { useCallback } from "react";

const baseClasses =
  "inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold border-[3px] shadow-[4px_4px_0px_0px_#2B1C0E] transition-transform duration-150 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none";

const variantClasses = {
  primary: "bg-[#F7D58A] text-[#2B1C0E] border-[#2B1C0E]",
  secondary: "bg-[#B74728] text-[#FFFFFF] border-[#2B1C0E]",
};

export default function HeroCTAButton({ href, label, variant = "primary" }) {
  const handleClick = useCallback(
    (event) => {
      if (href.startsWith("#")) {
        event.preventDefault();
        const targetId = href.replace("#", "");
        document.getElementById(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    },
    [href]
  );

  return (
    <a href={href} onClick={handleClick} className={`${baseClasses} ${variantClasses[variant]}`}>
      {label}
    </a>
  );
}
