"use client";

import FooterNavLink from "./FooterNavLink";

export default function FooterNavigation({ nav }) {
  return (
    <div className="md:col-span-12 mt-4 flex flex-wrap items-center justify-start gap-4 md:gap-6">
      {nav.links.map((link, index) => (
        <FooterNavLink key={link.href} link={link} active={index === nav.activeIndex} />
      ))}
    </div>
  );
}
