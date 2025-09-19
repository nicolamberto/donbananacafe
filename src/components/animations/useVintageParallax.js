import { useRef } from 'react';
import { useReducedMotion, useScroll, useTransform } from 'framer-motion';

export default function useVintageParallax({ offset = ['start end', 'end start'], range = [-16, 16], axis = 'y', enabled = true } = {}) {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset });
  const translated = useTransform(scrollYProgress, [0, 1], range);

  if (shouldReduceMotion || !enabled) {
    return { ref, style: undefined };
  }

  return {
    ref,
    style: axis === 'x' ? { x: translated } : { y: translated },
  };
}
