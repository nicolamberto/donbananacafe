"use client";

import { useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { retroQuickSpring, retroSoftSpring } from "@/components/animations/motionConfig";

export default function BlendModal({ blend, onClose }) {
  const data = useMemo(() => {
    const modal = blend?.modal ?? {};
    return {
      title: modal.title ?? blend?.name ?? "",
      description: modal.description ?? "",
      attributes: Array.isArray(modal.attributes) ? modal.attributes : [],
      notes: Array.isArray(modal.notes) ? modal.notes : [],
      priceFrom: modal.priceFrom ?? "",
      ctaHref: blend?.cta?.href ?? "#",
      imageSrc: blend?.image?.src ?? modal.gallery?.[0] ?? "",
      imageAlt: blend?.image?.alt ?? modal.title ?? blend?.name ?? "Producto",
    };
  }, [blend]);

  const imageLayoutId = data.imageSrc ? "blend-modal-" + data.imageSrc : undefined;

  useEffect(() => {
    if (!blend) return;
    const onKey = (event) => event.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [blend, onClose]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {blend && (
        <>
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[70] bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={onClose}
          />

          <div className="fixed inset-0 z-[80] flex items-center justify-center p-3 md:p-6">
            <motion.div
              key="panel"
              className="w-[98vw] max-w-[1080px] max-h-[90vh] overflow-hidden rounded-[24px] border-[6px] border-[#2B1C0E] bg-[#FBF1C6] shadow-[8px_8px_0_0_#2B1C0E] relative"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ ...retroSoftSpring, duration: 0.35 }}
            >
              <button
                onClick={onClose}
                className="absolute cursor-pointer top-3 right-3 inline-flex items-center justify-center w-10 h-10 rounded-full border-[3px] border-[#2B1C0E] bg-white text-[#2B1C0E] shadow-[3px_3px_0_0_#2B1C0E] hover:-translate-y-[1px] transition-transform z-10"
                aria-label="Cerrar"
              >
                X
              </button>

              <div className="block md:hidden p-4">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="relative h-[32vh]"
                    layoutId={imageLayoutId}
                    transition={{ ...retroQuickSpring, duration: 0.45 }}
                  >
                    {data.imageSrc && (
                      <Image
                        src={data.imageSrc}
                        alt={data.imageAlt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 45vw"
                      />
                    )}
                  </motion.div>

                  <div className="flex flex-col text-[#2B1C0E]">
                    <h3 className="font-heading leading-[0.95] tracking-[-0.02em] text-[clamp(18px,5.2vw,42px)]">
                      {data.title}
                    </h3>
                    {data.description && (
                      <p className="mt-2 md:mt-3 font-sub text-[clamp(13px,3.5vw,18px)] opacity-80">
                        {data.description}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-5 md:mt-6 text-[#2B1C0E] flex flex-col gap-4">
                  {data.attributes.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {data.attributes.map((attribute, index) => (
                        <div
                          key={index}
                          className="rounded-[14px] border-[3px] border-[#2B1C0E] bg-white/70 px-3 py-2 shadow-[3px_3px_0_0_#2B1C0E]"
                        >
                          <p className="text-[12px] font-semibold opacity-70">{attribute.k}</p>
                          <p className="text-[14px]">{attribute.v}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {data.notes.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {data.notes.map((note, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full border-[3px] border-[#2B1C0E] bg-[#F7D58A] text-[#2B1C0E] text-[13px] shadow-[2px_2px_0_0_#2B1C0E]"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4">
                    {data.priceFrom && (
                      <span className="font-heading text-[clamp(15px,3.5vw,22px)]">
                        Desde {data.priceFrom}
                      </span>
                    )}
                    <a
                      href={data.ctaHref}
                      className="inline-flex items-center justify-center px-6 py-2 rounded-[9999px] text-base font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[3px_3px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150"
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </div>

              <div className="hidden md:grid md:h-full md:grid-cols-12 md:gap-8 md:p-8">
                <motion.div
                  className="md:col-span-5 relative h-[500px]"
                  layoutId={imageLayoutId}
                  transition={{ ...retroQuickSpring, duration: 0.45 }}
                >
                  {data.imageSrc && (
                    <Image
                      src={data.imageSrc}
                      alt={data.imageAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1200px) 40vw, 520px"
                    />
                  )}
                </motion.div>

                <div className="md:col-span-7 flex min-h-0 flex-col text-[#2B1C0E]">
                  <div className="flex-1 min-h-0 overflow-auto pr-2">
                    <h3 className="font-heading uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(18px,5.2vw,42px)]">
                      {data.title}
                    </h3>

                    {data.description && (
                      <p className="mt-2 md:mt-3 font-sub text-[clamp(18px,2vw,20px)] opacity-80">
                        {data.description}
                      </p>
                    )}

                    {data.attributes.length > 0 && (
                      <div className="mt-5 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {data.attributes.map((attribute, index) => (
                          <div
                            key={index}
                            className="rounded-[14px] border-[3px] border-[#2B1C0E] bg-white/70 px-3 py-2 shadow-[3px_3px_0_0_#2B1C0E]"
                          >
                            <p className="text-[18px] font-semibold">{attribute.k}</p>
                            <p className="text-[16px]">{attribute.v}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {data.notes.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {data.notes.map((note, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 rounded-full border-[3px] border-[#2B1C0E] bg-[#F7D58A] text-[#2B1C0E] text-[13px] shadow-[2px_2px_0_0_#2B1C0E]"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 md:mt-6 flex flex-wrap items-center gap-4 pt-2">
                    {data.priceFrom && (
                      <span className="font-heading text-[clamp(15px,3.5vw,22px)]">
                        Desde {data.priceFrom}
                      </span>
                    )}
                    <a
                      href={data.ctaHref}
                      className="inline-flex items-center justify-center px-6 py-2 rounded-[9999px] text-base font-semibold bg-[#F7D58A] text-[#2B1C0E] border-[3px] border-[#2B1C0E] shadow-[3px_3px_0px_0px_#2B1C0E] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-transform duration-150"
                    >
                      Comprar
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
