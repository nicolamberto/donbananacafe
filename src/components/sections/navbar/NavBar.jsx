"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaCoffee } from "react-icons/fa";
import { motion } from "framer-motion";
import { nav } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function NavBar() {
  const { cta } = nav;

  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          setHasScrolled(current > 100);

          // si baja y pasó 100px: oculto; si sube (o está arriba): muestro
          if (current > lastScrollY && current > 100) {
            setIsVisible(false);
          } else {
            setIsVisible(true);
          }

          setLastScrollY(current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.22, ease: "easeInOut" }}
        className={`w-full`}
      >
        <nav
          className={`w-full transition-colors duration-300`}
        >
          <div className="mx-auto max-w-[1480px] px-4 md:px-6 py-4 flex items-center justify-between">
            {/* Izquierda: icono */}
            <div className="flex items-center gap-20">
              <Link href="#hero" className="inline-flex items-center justify-center w-12 h-12 rounded-full text-[#E2B441]">
                <FaCoffee className="w-8 h-8 md:w-10 md:h-10" color="#E2B441" />
              </Link>
            </div>

            {/* Derecha: CTA */}
            <div className="flex items-center">
              <Button label={cta.label} className="hidden md:inline-flex text-[13px] md:text-[18px] bg-[#E2B441] cursor-pointer" />
            </div>
          </div>
        </nav>
      </motion.div>
    </header>
  );
}
