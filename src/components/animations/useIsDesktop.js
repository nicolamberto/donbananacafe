import { useEffect, useState } from 'react';

export default function useIsDesktop(minWidth = 1024) {
  const getValue = () => {
    if (typeof window === 'undefined') {
      return false;
    }

    return window.innerWidth >= minWidth;
  };

  const [isDesktop, setIsDesktop] = useState(getValue);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return undefined;
    }

    const mediaQuery = window.matchMedia(`(min-width: ${minWidth}px)`);
    const handleChange = () => setIsDesktop(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [minWidth]);

  return isDesktop;
}
