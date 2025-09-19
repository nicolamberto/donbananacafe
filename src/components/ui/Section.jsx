'use client';

import React, { useRef } from 'react';
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import useIsDesktop from '@/components/animations/useIsDesktop';
import { cn } from '@/lib/utils';
import { sectionVariants } from '@/components/animations/motionConfig';

export default function Section({
  id,
  className,
  innerClassName,
  children,
  motionProps = {},
}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const isAnimated = isDesktop && !shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const contrast = useTransform(scrollYProgress, [0, 0.5, 1], [0.82, 1, 0.9]);
  const saturation = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1.05, 0.95]);
  const filter = useMotionTemplate`contrast(${contrast}) saturate(${saturation})`;

  const animatedProps = isAnimated
    ? {
        variants: sectionVariants,
        initial: 'hidden',
        whileInView: 'visible',
        viewport: { once: false, amount: 0.35, margin: '-15%' },
        style: { filter },
      }
    : { initial: false };

  const combinedProps = {
    ...animatedProps,
    ...motionProps,
  };

  if (isAnimated) {
    combinedProps.style = {
      ...(animatedProps.style ?? {}),
      ...(motionProps.style ?? {}),
    };
  }

  const motionKey = isAnimated ? 'section-desktop' : 'section-mobile';

  return (
    <motion.section
      key={motionKey}
      ref={ref}
      id={id}
      className={cn(
        'lg:sticky top-0 w-full min-h-[100svh] flex justify-center items-center',
        className,
      )}
      {...combinedProps}
    >
      <div
        className={cn(
          'h-full w-full flex items-center justify-center px-3 md:px-6',
          innerClassName,
        )}
      >
        {children}
      </div>
    </motion.section>
  );
}
