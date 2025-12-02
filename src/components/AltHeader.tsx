"use client";

import { RiArrowLeftSLine } from "@remixicon/react";
import Link from "next/link";
import React from "react";
import Button from "@/components/ui/Button";
import Avatar from "./ui/Avatar";

export default function Header() {

  const scrollRef = React.useRef<Boolean>(false);

  const addBlur = () => {
    const header = document.getElementById('alt-header');
    const back = document.getElementById('nav-back');
    if(header && back) {
      header.classList.toggle('isBlur', Boolean(scrollRef.current));
      back.classList.toggle('!text-muted-foreground', Boolean(scrollRef.current));
    }
  }

  const handleScroll = () => { 
    window.scrollY >= 50 
    ? scrollRef.current = true
    : scrollRef.current = false;
    addBlur();
  };

  React.useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  
  
  return (
    <header className='alt-header fixed w-full top-0 left-0 z-50' id="alt-header">
      
      <nav className="nav section-container h-14 flex justify-between items-center xl:h-20">
  
        <Link href="/">
        <Button id="nav-back"
          className="rounded-md p-0 flex items-center justify-center backdrop-blur-none bg-[rgba(0,0,0,0)] shadow-none cursor-pointer"
          aria-label="Volver">
          <RiArrowLeftSLine className="w-9 h-9" />
        </Button>
        </Link>

        <Avatar className="nav-logo"
          alt="logo del hotel"
          src="/images/logo.webp"
        />
      </nav>

  </header>
  )
  
}