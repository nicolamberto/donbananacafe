"use client";

export default function FooterContactLink({ href, label, icon: Icon, target }) {
  return (
    <a
      href={href}
      target={target}
      className="flex items-center gap-3 text-[clamp(16px,2.5vw,28px)] font-heading"
    >
      <Icon className="w-5 h-5" />
      <span className="whitespace-pre-line">{label}</span>
    </a>
  );
}
