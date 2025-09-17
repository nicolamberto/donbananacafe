"use client";

export default function AboutCTA({ cta }) {
  return (
    <div className="mt-2">
      <a
        href={cta.href}
        className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-[9999px] text-base sm:text-lg font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150"
      >
        {cta.label}
      </a>
    </div>
  );
}
