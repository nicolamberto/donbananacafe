"use client";

import HeroCTAButton from "./HeroCTAButton";

export default function HeroCTAs({ ctas }) {
  const buttons = [
    {
      ...ctas.primary,
      variant: "primary",
    },
    {
      ...ctas.secondary,
      variant: "secondary",
    },
  ];

  return (
    <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-5">
      {buttons.map((button) => (
        <HeroCTAButton key={button.href} {...button} />
      ))}
    </div>
  );
}
