"use client";

import { RiArrowUpSLine } from "@remixicon/react";
import Image from "next/image";
import StaticUrl from "@/interfaces/static_url.interface";
import { useEffect, useRef, useState } from "react";
import AdSensePropagationWrapper from "@/providers/AdSensePropagationWrapper";

interface ScrollUpProps {
  url: StaticUrl;
}

export default function ScrollUp({url}: ScrollUpProps) {

  const [show, setShow] = useState('');
  const scrollUpRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => window.scrollY >= 350 ? setShow("bottom-16") : setShow(""); /* 350 es la mitad */

    window.addEventListener('scroll', handleScroll);

    // Limpieza del efecto
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div ref={scrollUpRef} className={`scrollup ${show} z-50 grid gap-4 fixed right-4 -bottom-1/2 transition-all duration-500 md:right-12`}>

      <a href={`${url.whatsapp}`} target="_blank"
        className="scrollup-btn p-2 relative cursor-pointer transition-all duration-500 hover:-translate-y-1">
        <Image src='/images/whatsapp.svg' height={40} width={40} quality={100} loading="lazy"
          className="whatsapp-icon absolute top-0 left-0 -translate-y-1/2 w-10 h-10" alt="whatsapp-logo" />
      </a>

      <a href="#" aria-label="scroll up button"
        className="scrollup-btn rounded-md p-2 bg-muted-foreground text-background inline-flex items-center justify-center backdrop-blur-xl cursor-pointer overflow-hidden transition-all duration-500 hover:-translate-y-1">
        <RiArrowUpSLine className="w-6 h-6 xl:w-7 xl:h-7" />
      </a>

    </div>
  );
}
