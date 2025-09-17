"use client";

import AboutTitle from "./AboutTitle";
import AboutParagraphs from "./AboutParagraphs";
import AboutCTA from "./AboutCTA";

export default function AboutContent({ title, paragraphs, cta }) {
  return (
    <div className="order-1 md:order-2 md:col-span-6 flex flex-col justify-center pt-0 md:pt-6">
      <AboutTitle {...title} />
      <AboutParagraphs items={paragraphs} />
      <AboutCTA cta={cta} />
    </div>
  );
}
