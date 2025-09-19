'use client';

import React from 'react';
import HeroSection from '@/components/sections/hero/HeroSection';
import AboutUs from '@/components/sections/about/AboutUs';
import HowItWorks from '@/components/sections/how-it-works/HowItWorks';
import BlendsSection from '@/components/sections/blends/BlendsSection';
import Contact from '@/components/sections/contact/Contact';
import Footer from '@/components/sections/footer/Footer';

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <BlendsSection />
      <HowItWorks />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
