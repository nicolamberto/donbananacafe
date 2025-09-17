'use client';

import React from 'react';
import LenisProvider from '@/components/providers/LenisProvider';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import HeroSection from '@/components/sections/hero/HeroSection';
import AboutUs from '@/components/sections/about/AboutUs';
import HowItWorks from '@/components/sections/how-it-works/HowItWorks';
import BlendsSection from '@/components/sections/blends/BlendsSection';
import Contact from '@/components/sections/contact/Contact';
import Footer from '@/components/sections/footer/Footer';

export default function Page() {
  return (
    <LenisProvider>
      {/* Estilos del contenedor PADRE según tu ejemplo */}
      <div className="">
        {/* Columna de secciones sticky, cada una ocupa 100% ancho/alto */}
        <div className="flex flex-col">
          <HeroSection />
          <BlendsSection />
          <HowItWorks />
          <AboutUs />
          <Contact />
          <Footer />
        </div>
      </div>
    </LenisProvider>
  );
}
