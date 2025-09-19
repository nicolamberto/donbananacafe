export const retroSpring = { type: 'spring', stiffness: 140, damping: 18, mass: 0.8 };

export const retroSoftSpring = { type: 'spring', stiffness: 110, damping: 20, mass: 1 };

export const retroQuickSpring = { type: 'spring', stiffness: 220, damping: 22, mass: 0.6 };

export const sectionVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { ...retroSoftSpring, duration: 0.6 },
  },
};

export const containerStagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.12,
    },
  },
};

export const fadeInItem = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ...retroSpring },
  },
};

export const heroLineVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { ...retroQuickSpring, stiffness: 260, damping: 24 },
  },
};

export const bandReveal = {
  hidden: { scaleX: 0.7, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { ...retroQuickSpring },
  },
};


