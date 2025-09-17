"use client";

import HowItWorksStepCard from "./HowItWorksStepCard";

export default function HowItWorksSteps({ steps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20">
      {steps.map((step, index) => (
        <HowItWorksStepCard key={index} step={step} />
      ))}
    </div>
  );
}
