"use client";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';
import { useState } from 'react';
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import TEXT from "@/lang/es.json";

// Static gallery images
const staticImages = [
  { id: 1, src: '/images/gallery-img-1.jpg', alt: 'Mamalakandam Nature View 1' },
  { id: 2, src: '/images/gallery-img-2.jpg', alt: 'Mamalakandam Nature View 2' },
  { id: 3, src: '/images/gallery-img-3.jpg', alt: 'Mamalakandam Nature View 3' },
  { id: 4, src: '/images/gallery-img-4.jpg', alt: 'Mamalakandam Nature View 4' },
  { id: 5, src: '/images/gallery-img-5.jpg', alt: 'Mamalakandam Nature View 5' },
  { id: 6, src: '/images/gallery-img-6.jpg', alt: 'Mamalakandam Nature View 6' },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section className="gallery section" id="news">
      <div className="gallery-section section-container">

        <div className="gallery-text relative mb-10 mt-12 xl:mt-0">
          <h2 className="section-title text-4xl text-end lg:text-center lg:text-5xl">
            <span className="font-dancing text-amber-600">{TEXT.novedades}</span>
          </h2>
          <p className="text-base text-muted-foreground mb-5 text-end lg:text-center">
            {TEXT.descubreNovedades}
          </p>
        </div>

        <ImageList variant="masonry" cols={2} gap={8}>
          {staticImages.map((image, idx) => (
            <ImageListItem key={image.id} onClick={() => setIndex(idx)} className="cursor-pointer rounded-lg overflow-hidden">
              <Image
                width={450}
                height={450}
                src={image.src}
                alt={image.alt}
                quality={85}
                className="hover:scale-105 transition-transform duration-300"
              />
            </ImageListItem>
          ))}
        </ImageList>

        <Lightbox
          index={index}
          open={index >= 0}
          close={() => setIndex(-1)}
          slides={staticImages.map((image) => ({ src: image.src }))}
        />
        
      </div>
    </section>
  );
}