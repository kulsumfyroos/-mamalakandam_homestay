"use client";

import { useEffect } from 'react';

const scrollAnimation = () => {
  import('@/lib/scrollReveal').then(module => {
    module.scrollAnimation();
  });
};

// Función para cargar las animaciones de ScrollReveal
function ScrollRevealLoader({ children }: Readonly<{children?: React.ReactNode;}>) {
  useEffect(() => {
    // Cargar las animaciones al montar
    scrollAnimation();
  }, []);

  return (
    <div>
      {children}
    </div>
  );
}

export default ScrollRevealLoader;
