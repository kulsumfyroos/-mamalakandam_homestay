"use client";

import { RiWifiLine, RiHotelBedLine, RiRestaurantLine, RiTimeLine, RiCompassLine, RiSnowflakeLine, RiTempHotLine, RiBaiduLine, RiLeafLine, RiKeynoteLine } from "@remixicon/react";
import Image from "next/image";
import Button from "./ui/Button";
import React, { useEffect, useRef } from "react";
import Swiper from "swiper";
import { FreeMode, Thumbs, Navigation, Pagination } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import TEXT from "@/lang/es.json";

const BirdSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgba(0, 0, 0, 0.6)">
      <path d="M22 3l-1.67 1.67L18.67 3L17 4.67L15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3L7 4.67L5.33 3L3.67 4.67L2 3v9c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.75-1.24-5.21-3.18-6.86L22 3zM11 19c-3.86 0-7-3.14-7-7V7.83l1.26 1.26C5.09 9.78 5 10.38 5 11c0 3.31 2.69 6 6 6s6-2.69 6-6c0-.62-.09-1.22-.26-1.79L18 7.83V12c0 3.86-3.14 7-7 7z"/>
      <circle cx="9" cy="10" r="1"/>
    </svg>
  )
}

export default function Service() {
  const images = [
    {src: '/images/gallery-img-1.jpg'},
    {src: '/images/gallery-img-2.jpg'},
    {src: '/images/gallery-img-3.jpg'},
    {src: '/images/gallery-img-4.jpg'},
    {src: '/images/gallery-img-5.jpg'},
    {src: '/images/gallery-img-6.jpg'},
    {src: '/images/gallery-img-7.jpg'},
    {src: '/images/gallery-img-8.jpg'},
    {src: '/images/gallery-img-9.jpg'},
    {src: '/images/gallery-img-11.jpg'},
    {src: '/images/gallery-img-12.jpg'},
    {src: '/images/gallery-img-13.jpg'},
    {src: '/images/gallery-img-14.jpg'},
    {src: '/images/gallery-img-15.jpg'},
    {src: '/images/gallery-img-16.jpg'},
    {src: '/images/gallery-img-17.jpg'},
    {src: '/images/gallery-img-18.jpg'},
    {src: '/images/gallery-img-20.jpg'},
  ];
  const galleryRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const thumbSwiperRef = useRef<Swiper | null>(null);
  const gallerySwiperRef = useRef<Swiper | null>(null);

  useEffect(() => {
    if (!galleryRef.current || !thumbsRef.current) return;

    // Initialize Swiper for thumbnails
    const thumbsSwiper = new Swiper(thumbsRef.current, {
      modules: [Thumbs, FreeMode],
      thumbs: {
        slideThumbActiveClass: 'swiper-slide-thumb-active',
      },
      spaceBetween: 12,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    thumbSwiperRef.current = thumbsSwiper;

    // Initialize Swiper for gallery
    const gallerySwiper = new Swiper(galleryRef.current, {
      modules: [FreeMode, Navigation, Pagination, Thumbs],
      pagination: { 
        type: 'fraction',
        el: '.swiper-pagination',
      },
      navigation: { 
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: { swiper: thumbSwiperRef.current },
      spaceBetween: 0,
      slidesPerView: 1,
      on: {
        slideChange() {
          if (thumbSwiperRef.current) {
            thumbSwiperRef.current.update();
          }
        }
      },
    });
    gallerySwiperRef.current = gallerySwiper;

    return () => {
      // Clean up the Swipers
      gallerySwiper.destroy();
      thumbsSwiper.destroy();
    };
  }, []);

  return (
    <section className="services section" id="place">
      <div className="services-section section-container">

        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2">

          <div className="services-data">
            <span className="block font-dancing text-2xl text-primary-1 font-normal text-start mb-2">{TEXT.serviceTitle1}</span>
            <h2 className="section-title text-3xl text-start lg:text-4xl xl:text-5xl font-bold">
              <span className="font-dancing text-amber-600">{TEXT.brandName1}</span>
            </h2>
            <p className="text-base text-muted-foreground mb-6 text-start leading-relaxed">{TEXT.servicesDescription1}</p>

            <div className="section-data grid grid-cols-2 text-start gap-y-2 gap-x-2">
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiHotelBedLine /><span className="font-medium">{TEXT.serviceTextGroup1[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup1[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiWifiLine /><span className="font-medium">{TEXT.serviceTextGroup2[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup2[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiRestaurantLine /><span className="font-medium">{TEXT.serviceTextGroup3[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup3[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiTimeLine /><span className="font-medium">{TEXT.serviceTextGroup4[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup4[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiCompassLine /><span className="font-medium">{TEXT.serviceTextGroup5[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup5[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiLeafLine /><span className="font-medium">{TEXT.serviceTextGroup6[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup6[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiTempHotLine /><span className="font-medium">{TEXT.serviceTextGroup7[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup7[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><BirdSvg /><span className="font-medium">{TEXT.serviceTextGroup8[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup8[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiBaiduLine /><span className="font-medium">{TEXT.serviceTextGroup9[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup9[1]}</span></div>
              <div className="grid grid-cols-max2 items-center gap-x-2 text-muted-foreground"><RiKeynoteLine /><span className="font-medium">{TEXT.serviceTextGroup10[0]}</span><span className="col-start-2 text-sm text-primary-1 font-medium">{TEXT.serviceTextGroup10[1]}</span></div>
            </div>
          </div>

          {/* gallery and thumbnails */}
          <div className="services-image md:p-6 lg:p-0">

            {/* gallery */}
            <div ref={galleryRef} className="swiper gallery-swiper w-full rounded-2xl shadow-md">
              <div className="swiper-wrapper">
                {images.map(el => (
                  <div key={crypto.randomUUID()} className="swiper-slide gallery-slide h-96 aspect-square lg:aspect-video">
                    <Image className="block h-full w-full object-cover" src={`${el.src}`}
                      height={380}
                      width={380}
                      sizes="(max-width: 425px) 75vw,(max-width: 768px) 45vw, (max-width: 1200px) 50vw, 45vw"
                      loading="lazy"
                      alt="Gallery image"
                      />
                  </div>
                ))}
              </div>
              <div className="swiper-button-next"></div>
              <div className="swiper-button-prev"></div>
              <div className="swiper-pagination"></div>
            </div>

            {/* thumbnails */}
            <div ref={thumbsRef} className="swiper thumbs-swiper w-full h-32 rounded-lg mt-3">
              <div className="swiper-wrapper">
                {images.map(el => (
                  <div key={crypto.randomUUID()} className="swiper-slide thumb-slide">
                    <Button className="flex h-full w-full items-center justify-center p-0">
                      <Image className="block h-full w-full object-cover" src={`${el.src}`} 
                      height={60}
                      width={60}                      
                      sizes="(max-width: 375px) 25vw, (max-width: 425px) 20vw, (max-width: 768px) 20vw, (max-width: 1200px) 15vw, 10vw"
                      loading="lazy" 
                      alt="Thumbnails image" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
