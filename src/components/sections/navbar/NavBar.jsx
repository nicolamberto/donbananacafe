"use client";

import Link from "next/link";
import { FaCoffee } from "react-icons/fa";
import { nav } from "@/lib/data";
import Button from "@/components/ui/Button";

export default function NavBar() {
    const { links, cta, colors } = nav;

    return (
        <header className="fixed inset-x-0 top-0 z-40">
            <nav className="w-full">
                <div className="mx-auto max-w-[1480px] px-4 md:px-6 py-4 flex items-center justify-between">
                    {/* Izquierda: icono + links */}
                    <div className="flex items-center gap-20">
                        <Link href="#hero" className="inline-flex items-center justify-center w-12 h-12 rounded-full text-[#E2B441]">
                            <FaCoffee className="w-20 h-20" color="#E2B441" />
                        </Link>
                    </div>
{/*                     <ul className="hidden md:flex items-center gap-8">
                        {links.map((item) => (
                            <li key={item.href}><Link href={item.href} className="text-[#FFFFFF]/70 lowercase text-[22px] font-medium hover:opacity-90 transition-opacity">{item.label}</Link></li>
                        ))}
                    </ul> */}

                    {/* Derecha: CTA */}
                    <div className="flex items-center">
                        <Button label={cta.label} className="hidden md:inline-flex text-[13px] md:text-[18px] bg-[#E2B441] cursor-pointer" />
                    </div>
                </div>
            </nav>

            {/* Fondo del header para que se funda con el hero sin separar capas */}
        </header>
    );
}
