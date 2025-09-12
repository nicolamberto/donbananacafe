"use client";

import Image from "next/image";
import Section from "@/components/ui/Section";
import { footer } from "@/lib/data";
import { FaCoffee, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const { id, colors, brand, contactCard, nav, image } = footer;

  return (
    <Section
      id={id}
      className={`bg-[${colors.bg}] text-[${colors.textLight}]`}
      innerClassName="grid grid-cols-1 md:grid-cols-12 items-stretch w-full mx-auto relative px-2 md:px-6 max-w-[1480px] gap-6 md:gap-10 pt-10 md:pt-16 pb-12"
    >
      {/* Tarjeta marca */}
      <div className="md:col-span-7">
        <div className="w-full h-full min-h-[280px] md:min-h-[340px] rounded-[28px] border-[6px] border-[#2B1C0E] bg-[#F4DFC6] p-6 md:p-10 shadow-[6px_6px_0px_0px_#2B1C0E] flex flex-col justify-center">
          <h3 className="font-heading text-[#2B1C0E] leading-[0.85] tracking-[-0.02em] text-[clamp(46px,7vw,96px)]">
            {brand.titleTop}
          </h3>
          <h3 className="font-heading text-[#2B1C0E] leading-[0.85] tracking-[-0.02em] text-[clamp(46px,7vw,96px)]">
            {brand.titleBottom}
          </h3>
          <div className="mt-4 flex items-center gap-3">
            <p className="font-sub text-[#2B1C0E] text-[clamp(16px,2.5vw,28px)]">
              {brand.tagline}
            </p>
            {brand.showCupIcon && <FaCoffee className="w-7 h-7" color="#2B1C0E" />}
          </div>
        </div>
      </div>

      {/* Tarjeta contacto + banana */}
      <div className="md:col-span-5 relative">
        <div className="w-full h-full min-h-[280px] md:min-h-[340px] rounded-[28px] border-[6px] border-[#2B1C0E] bg-[#F4DFC6] p-6 md:p-8 shadow-[6px_6px_0px_0px_#2B1C0E] flex flex-col justify-center">
          <div className="space-y-4 text-[#2B1C0E]">
            <a
              href={contactCard.phone.href}
              className="flex items-center gap-3 text-[clamp(16px,2.5vw,28px)] font-heading"
            >
              <FaPhoneAlt className="w-5 h-5" />
              <span>{contactCard.phone.label}</span>
            </a>
            <a
              href={contactCard.email.href}
              className="flex items-center gap-3 text-[clamp(16px,2.5vw,28px)] font-heading"
            >
              <FaEnvelope className="w-5 h-5" />
              <span>{contactCard.email.label}</span>
            </a>
            <a
              href={contactCard.address.href}
              target="_blank"
              className="flex items-center gap-3 text-[clamp(16px,2.5vw,28px)] font-heading"
            >
              <FaMapMarkerAlt className="w-5 h-5" />
              <span className="whitespace-pre-line">{contactCard.address.label}</span>
            </a>
          </div>
        </div>

        {/* Banana (superpuesta al borde inferior derecho) */}
        <div className="pointer-events-none absolute -bottom-4 right-2 md:top-1/2 -translate-y-1/2 transform md:right-0 w-[150px] sm:w-[180px] md:w-[220px]">
          <div className="relative justify-center items-center h-[180px] sm:h-[210px] md:h-[200px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 40vw, (max-width: 1200px) 20vw, 220px"
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Navegación inferior en píldoras */}
      <div className="md:col-span-12 mt-4 flex flex-wrap items-center justify-start gap-4 md:gap-6">
        {nav.links.map((l, i) => {
          const active = i === nav.activeIndex;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`inline-flex items-center justify-center px-6 py-2 rounded-[9999px] border-[3px] shadow-[4px_4px_0px_0px_#2B1C0E] text-[clamp(14px,2vw,20px)] font-heading ${
                active
                  ? "bg-[#C65A1E] text-[#FFEFD0] border-[#2B1C0E]"
                  : "bg-[#2B1C0E] text-[#F7D58A] border-[#2B1C0E]"
              } hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
