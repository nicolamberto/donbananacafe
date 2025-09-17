"use client";

export default function ContactTitle({ title }) {
  return (
    <h2 className="font-heading text-[clamp(36px,7vw,72px)] leading-[0.9] tracking-[-0.02em] mb-6">
      {title}
    </h2>
  );
}
