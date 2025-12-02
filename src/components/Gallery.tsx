"use client";

import ImageDataResponse from '@/interfaces/image_data_response.interface';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { RiLightbulbFlashLine } from '@remixicon/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import TEXT from "@/lang/es.json";

export default function Gallery() {
  const [images, setImages] = useState<ImageDataResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(-1)

  // Función para obtener las imagenes
  async function getImages() {
    try {
      setLoading(true)
      const response = await fetch("/api/images/list")

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message)
      }

      // Si la respuesta es un objeto con un mensaje de error, mostrar el error
      if (data.message && !Array.isArray(data)) {
        setImages([])
      } else {
        setImages(data)
      }
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getImages()

    // Suscribirse a eventos de actualización de imágenes
    const handleStorageChange = () => {
      getImages()
    }

    // Escuchar cambios en localStorage (para desarrollo)
    window.addEventListener("storage", handleStorageChange)

    // Limpiar el event listener
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])
  
    if (loading) {
      return (
        // SKELETON
        <div className="gallery-skeleton section mb-10 mt-12 xl:mt-0" id="news">
          <div className="section-container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[...Array(2)].map((_, index) => (
                <div key={index} className="animate-pulse bg-gray-200 h-64 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      )
    }

    if (!images.length) {
      return (
      <div className="gallery-empty section mb-10 mt-12 xl:mt-0" id="news">
        <div className="section-container">
          <div className="gallery-text relative mb-10 mt-12 xl:mt-0">
            <h2 className="section-title text-4xl text-center lg:text-5xl">{TEXT.novedades}</h2>
            {/* <span className="absolute top-0 left-[270px] translate-x-1/2 -translate-y-1/2 lg:right-0">
              <span className="relative inline-flex w-6 h-6 items-center justify-center rounded-full bg-primary-1 opacity-75 text-white text-xs">
                {images.length}
              </span>
            </span> */}
            <p className="text-base text-muted-foreground mb-5 text-center">
              {TEXT.descubreNovedades}
            </p>
          </div>
          <div className="gallery-nothing flex justify-center items-center">
            <span className="inline-flex gap-2 items-center px-4 py-3 rounded-full text-sm font-medium text-white bg-primary-1 opacity-75">
              <RiLightbulbFlashLine />
              {TEXT.noHayNovedades}
            </span>
          </div>
        </div>
      </div>
      )
    }

  return (
    <section className="gallery section" id="news">
      <div className="gallery-section section-container">

        <div className="gallery-text relative mb-10 mt-12 xl:mt-0">
          <h2 className="section-title text-4xl text-end lg:text-center lg:text-5xl">{TEXT.novedades}</h2>
          {/* <span className="absolute top-0 left-[270px] translate-x-1/2 -translate-y-1/2 lg:right-0">
            <span className="absolute inline-flex h-6 w-6 rounded-full bg-primary-1 opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-6 h-6 items-center justify-center rounded-full bg-primary-1 text-white text-xs">
              {images.length}
            </span>
          </span> */}
          <p className="text-base text-muted-foreground mb-5 text-end lg:text-center">
            {TEXT.descubreNovedades}
          </p>
        </div>

        <ImageList variant="masonry" cols={2} gap={4}>
        {images && images.map((image, index) => (
          <ImageListItem key={index} onClick={() => setIndex(index)} className="cursor-pointer">
            <Image
              width={450}
              height={450}
              src={image.secure_url}
              alt={image.public_id}
              quality={100}
            />
          </ImageListItem>
        ))}
        </ImageList>

        <Lightbox
            index={index} // index of the image to display
            open={index >= 0} // open the lightbox when index is set
            close={() => setIndex(-1)} // close the lightbox by setting index to -1
            slides={images.map((image) => ({
              src: image.secure_url,}
            ))}
        />
        
      </div>
    </section>
  );
}