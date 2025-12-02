"use client";
import Review from '@/interfaces/user_review.interface';
import { useEffect } from 'react';
import TestimonialCard from "./TestimonialCard";

import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
// import { EffectCoverflow } from 'swiper/modules';
// import 'swiper/css/effect-coverflow';
import 'swiper/css';

interface TestimonialsSwiperProps {
  reviews: Review[];
}

export default function TestimonialsSwiper({ reviews }: TestimonialsSwiperProps) {
 
  const swiperParams: SwiperOptions = {
    modules: [Autoplay],
    // modules: [Autoplay, EffectCoverflow],
    // effect: "coverflow",
    // coverflowEffect: {
    //   depth: 100,
    //   modifier: 1,
    //   rotate: 0,
    //   scale: 1,
    //   slideShadows: false,
    //   stretch: 0,
    // },
    autoplay: { delay: 5000, disableOnInteraction: false },
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    speed: 900,
    on: {
      init: function (swiper: Swiper) {
        swiper.slides.forEach((slide, index) => {
          if (swiper.activeIndex === index) {
            slide.style.transform = 'scale(1.1)';
          } else {
            slide.style.transform = 'scale(1)';
          }
        });
      },
      slideChange: function (swiper: Swiper) {
        swiper.slides.forEach((slide, index) => {
          if (swiper.activeIndex === index) {
            slide.style.transform = 'scale(1.1)';
          } else {
            slide.style.transform = 'scale(1)';
          }
        });
      }
    }
  };

  useEffect(() => {
    new Swiper('.testimonials-swiper', swiperParams);
  }, [])

  return (
    <>
      <div className='swiper testimonials-swiper'>
        <div className="swiper-wrapper">
          {reviews && reviews.map((el, virtualIndex) => (
            <div key={crypto.randomUUID()} className="swiper-slide p-5 transition-transform duration-500">
              <TestimonialCard review={el} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}