"use client";

import { cn } from "@/lib/utils";

export default function Button({ label, className, ...props }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center",
        "px-10 py-3 rounded-[9999px] text-2xl font-extrabold uppercase tracking-wide",
        "bg-[#E2B441] text-[#2B1C0E]",                 // fondo crema + texto marrón
        "border-[5px] border-[#2B1C0E]",                // borde marrón
        "shadow-[6px_6px_0px_0px_#2B1C0E]",             // sombra retro marrón
        "hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none",
        "transition-transform duration-150",
        className
      )}
    >
      {label}
    </button>
  );
}
