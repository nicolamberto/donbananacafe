"use client";

import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import FooterContactLink from "./FooterContactLink";

export default function FooterContactCard({ contactCard, image }) {
  return (
    <div className="md:col-span-5 relative">
      <div className="w-full h-full min-h-[280px] md:min-h-[340px] rounded-[28px] border-[6px] border-[#2B1C0E] bg-[#F4DFC6] p-6 md:p-8 shadow-[6px_6px_0px_0px_#2B1C0E] flex flex-col justify-center">
        <div className="space-y-4 text-[#2B1C0E]">
          <FooterContactLink href={contactCard.phone.href} label={contactCard.phone.label} icon={FaPhoneAlt} />
          <FooterContactLink href={contactCard.email.href} label={contactCard.email.label} icon={FaEnvelope} />
          <FooterContactLink
            href={contactCard.address.href}
            label={contactCard.address.label}
            icon={FaMapMarkerAlt}
            target="_blank"
          />
        </div>
      </div>
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
  );
}
