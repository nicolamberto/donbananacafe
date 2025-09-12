'use client';

import React from 'react';
import { cn } from '@/lib/utils';

/**
 * Section full-screen sticky
 * - Altura real en mobile con dvh/svh fallbacks
 * - Sticky + top-0 para “stack” de paneles
 */
export default function Section({
  id,
  className,
  innerClassName,
  children,
}) {
  return (
    <section
      id={id}
      className={cn(
        // sticky full screen
        ' lg:sticky top-0 w-full min-h-[100svh] flex justify-center items-center',
        // opcional: snap si quisieras scroll-snap además del sticky
        // 'snap-start',
        className
      )}
    >
      <div
        className={cn(
          'h-full w-full flex items-center justify-center px-3 md:px-6',
          innerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}
