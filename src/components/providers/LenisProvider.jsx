'use client';

import React, { useEffect } from 'react';
import Lenis from 'lenis';

export default function LenisProvider({ children }) {
  useEffect(() => {
    // Inicializar Lenis
    const lenis = new Lenis({
      duration: 1.2,   // velocidad del scroll
      smooth: true,    // activa suavizado
      smoothTouch: false, // podés cambiar a true si querés en móviles
    });

    // Loop con requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      // cleanup
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
