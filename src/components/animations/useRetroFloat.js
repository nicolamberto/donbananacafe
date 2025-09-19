import { useMemo } from 'react';
import { useReducedMotion } from 'framer-motion';

export default function useRetroFloat({ amplitude = 14, rotate = 2.5, duration = 5.5, delay = 0, enabled = true } = {}) {
  const shouldReduceMotion = useReducedMotion();

  return useMemo(() => {
    if (shouldReduceMotion || !enabled) return {};

    return {
      animate: {
        y: [0, -amplitude, 0],
        rotate: [0, -rotate, rotate * 0.4, 0],
      },
      transition: {
        duration,
        repeat: Infinity,
        repeatType: 'mirror',
        ease: 'easeInOut',
        delay,
      },
    };
  }, [shouldReduceMotion, amplitude, rotate, duration, delay, enabled]);
}
