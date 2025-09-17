"use client";

export default function HowItWorksTitle({ title }) {
  return (
    <h2 className="font-heading text-[#F4DEAA] leading-[0.9] tracking-[-0.02em] text-center text-[clamp(40px,7vw,6rem)] mb-6 md:mb-10">
      {title}
    </h2>
  );
}
