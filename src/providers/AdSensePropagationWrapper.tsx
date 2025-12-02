"use client";

import { useEffect } from "react";

interface AdSensePropagationProps {
  dataAdSlot: string;
  children: React.ReactNode;
}

function AdSensePropagationWrapper({ children, dataAdSlot }: AdSensePropagationProps) {
  useEffect(() => {
    const button = document.querySelector<HTMLButtonElement>(".home-button");
    const banner = document.querySelector<HTMLElement>(`#_ad${dataAdSlot}`);

    function handleClickPropagation(event: MouseEvent) {
      // Busca todas las etiquetas <a> dentro del elemento clickeado
      const targetElement = event.target as HTMLElement;
      const links = targetElement?.querySelectorAll<HTMLAnchorElement>("a");

      if (links) {
        links.forEach((link) => {
          // Dispara un evento de click en cada <a>
          link.click();
        });
      }
    }

    function handleClick(event: MouseEvent) {
      // Busca todas las etiquetas <a> dentro del elemento clickeado
      const targetElement = event.target as HTMLElement;
      const links = targetElement?.querySelectorAll<HTMLAnchorElement>("a");
      if (links) {
        links.forEach((link) => {
          // Dispara un evento de click en cada <a>
          link.click();
        });
      };
      banner?.click();
    }

    button?.addEventListener("click", handleClick);
    banner?.addEventListener("click", handleClickPropagation);
    
    return () => {
      button?.removeEventListener("click", handleClick);
      banner?.removeEventListener("click", handleClickPropagation);
    };
  }, []);

  return (
    <div id={`_ref${dataAdSlot}`}>
      {children}
    </div>
  );
}

export default AdSensePropagationWrapper;
