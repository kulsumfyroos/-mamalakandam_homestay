import { NextResponse, type NextRequest } from "next/server"
import { v2 as cloudinary } from "cloudinary"
import type { UploadApiResponse, UploadApiErrorResponse } from "cloudinary"
import config from "@/config"

export default interface ImageDataResponse {
  public_id: string
  secure_url: string
}

// Configuración de Cloudinary
cloudinary.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
})


export async function POST(req: NextRequest) {
  try {
    const data = await req.formData()

    // Obtener todos los archivos subidos
    const files = data.getAll("files[]")

    if (files.length === 0) {
      return NextResponse.json({ message: "No se ha subido ningún archivo válido" }, { status: 400 })
    }

    const uploadedImages: ImageDataResponse[] = []

    // Subir cada archivo individualmente a Cloudinary
    for (const file of files) {
      if (!(file instanceof Blob)) {
        return NextResponse.json({ message: "Uno de los archivos no es válido" }, { status: 400 })
      }

      // Verificar que el archivo sea una imagen
      if (!file.type.startsWith("image/")) {
        return NextResponse.json({ message: "Solo se permiten formatos de imagen" }, { status: 400 })
      }

      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      try {
        // Subir el archivo a Cloudinary
        const uploadResult = await new Promise<UploadApiResponse>((resolve, reject) => {
          cloudinary.uploader
            .upload_stream((error: UploadApiErrorResponse | undefined, result: UploadApiResponse | undefined) => {
              if (error) {
                reject(error)
              } else if (result) {
                resolve(result)
              } else {
                reject(new Error("No se recibió respuesta de Cloudinary"))
              }
            })
            .end(buffer)
        })

        // Crear el objeto con los datos de la imagen
        const imageData: ImageDataResponse = {
          public_id: uploadResult.public_id,
          secure_url: uploadResult.secure_url,
        }

        uploadedImages.push(imageData)

      } catch (error: UploadApiErrorResponse | any) {
        console.error(`${file.name}`, error)
        return NextResponse.json(
          { message: `${error.message}: ${file.name}` },
          { status: error.http_code },
        )
      }
    }

    return NextResponse.json({
      message: "Archivos subidos exitosamente.",
      data: uploadedImages,
    })
  } catch (error) {
    console.error("Error general en la carga de archivos:", error)
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Error desconocido al procesar los archivos" },
      { status: 500 },
    )
  }
}
