"use client";

export default function AboutTitle({ top, mid, bottom }) {
  return (
    <h2 className="font-heading leading-[0.9] tracking-[-0.02em] text-[clamp(38px,6.5vw,5rem)]">
      {top}
      <br className="hidden md:block" /> {mid}
      <br />
      {bottom}
    </h2>
  );
}
