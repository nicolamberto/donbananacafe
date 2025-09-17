"use client";

export default function ContactSubmitButton({ label }) {
  return (
    <button
      type="submit"
      className="inline-flex cursor-pointer items-center justify-center px-8 py-3 rounded-[9999px] text-lg font-semibold bg-[#B74728] text-[#FFFFFF] border-[3px] border-[#2B1C0E] shadow-[4px_4px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150 mt-4"
    >
      {label}
    </button>
  );
}
