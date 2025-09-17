"use client";

export default function AboutParagraphs({ items }) {
  return (
    <div className="mt-6 space-y-2 md:space-y-6">
      {items.map((paragraph, index) => (
        <p key={index} className="text-[#2B1C0E] text-lg sm:text-xl lg:text-2xl font-sub">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
