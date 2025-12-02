"use client";

import { useEffect } from "react";

import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, EffectFade } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function MainSwiper() {

  // Nature-themed background images for Mamalakandam Homestay
  const natureImages = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80', // Mountain view
  ];

  const swiperParams: SwiperOptions = {
    modules: [Autoplay, EffectFade],
    autoplay: { delay: 4000, disableOnInteraction: false },
    effect: 'fade',
    grabCursor: true,
    fadeEffect: {
      crossFade: true
    },
    loop: true,
    speed: 1500
  };
  
  useEffect(() => {
    new Swiper('.main-swiper', swiperParams);
  }, [])
  
  return (
    <div className="swiper main-swiper">
      <div className="swiper-wrapper">
        {natureImages.map((imageUrl, index) => (
          <div key={index} className="swiper-slide">
            <div className="swiper-content relative h-screen min-h-[480px] !bg-center !bg-cover" 
              style={{ background: `url('${imageUrl}') no-repeat center center` }}
            >
              <div className="home-shadow dark-filter absolute top-0 left-0 w-full h-full z-10" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}