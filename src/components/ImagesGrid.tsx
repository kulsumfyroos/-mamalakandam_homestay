"use client"

import ImageDataResponse from "@/interfaces/image_data_response.interface"
import Image from "next/image"
import { useEffect, useState } from "react"
import { toast } from "sonner"

export default function ImagesGrid() {
  const [images, setImages] = useState<ImageDataResponse[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Función para obtener las imagenes
  async function getImages() {
    try {
      setLoading(true)
      const response = await fetch("/api/images/list")
      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message)
      }

      if (data.message && !Array.isArray(data)) {
        setError(data.message)
        setImages([])
      } else {
        setImages(data)
        setError(null)
      }
    } catch (error: any) {
      setError(error?.message || "Error inesperado")
    } finally {
      setLoading(false)
    }
  }

  // Función para eliminar una imagen
  async function deleteImage(publicId: string) {
    try {
      const response = await fetch("/api/images/remove", {
        method: "POST",
        body: JSON.stringify({ public_id: publicId }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      const data = await response.json()
      
      if (!response.ok) {
        throw new Error(data.message)
      }

      setImages((prevImages) =>
        prevImages.filter((image: ImageDataResponse) => image.public_id !== publicId)
      )
      toast.success(data.message)
    } catch (error: any) {
      toast.error(error?.message || "Error inesperado")
    }
  }

  useEffect(() => {
    getImages()

    const handleStorageChange = () => {
      getImages()
    }

    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-200 h-48 lg:h-64 rounded-lg"></div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          <p>Error al cargar las imágenes: {error}</p>
          <button onClick={getImages} className="mt-2 bg-red-600 text-white py-1 px-4 rounded hover:bg-red-700">
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (images.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-200 text-blue-700 p-4 rounded-lg text-center">
          <p>No hay imágenes disponibles. ¡Sube algunas!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium text-gray-700">Imágenes Subidas ({images.length})</h3>
        <button onClick={getImages} className="bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600">
          Actualizar
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image: ImageDataResponse) => (
          <div key={image.public_id} className="relative border border-gray-200 rounded-lg overflow-hidden group">
            <Image
              src={image.secure_url || "/placeholder.svg"}
              alt={image.public_id}
              width={500}
              height={500}
              className="w-full h-48 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
              <button
                onClick={() => deleteImage(image.public_id)}
                className="opacity-0 group-hover:opacity-100 bg-red-500 text-white py-2 px-4 rounded-full shadow-md hover:bg-red-600 transition-opacity duration-300"
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
