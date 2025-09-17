"use client";

export default function HeroTitle({ top, mid, bottom }) {
  return (
    <h1 className="font-heading leading-[0.78] tracking-[-0.02em] text-[clamp(58px,15vw,15rem)] text-nowrap">
      {top}
      <br className="hidden md:block" /> {mid}
      <br />
      <span className="sm:w-full sm:text-center">{bottom}</span>
    </h1>
  );
}
