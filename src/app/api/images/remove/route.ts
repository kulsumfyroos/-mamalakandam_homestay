import { NextResponse, type NextRequest } from "next/server";
import { v2 as cloudinary } from 'cloudinary';
import { removeImageAction } from "@/actions/image.actions";
import config from "@/config";

// Configuration
cloudinary.config({ 
  cloud_name: config.CLOUDINARY_CLOUD_NAME, 
  api_key: config.CLOUDINARY_API_KEY, 
  api_secret: config.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  try {
  const { public_id } = await req.json();

  if (!public_id) {
    return NextResponse.json({ message: "No se proporcionó un public_id" }, { status: 400 });
  }

  // Eliminar la imagen de Cloudinary
  await cloudinary.uploader.destroy(public_id);

  await removeImageAction(public_id);

  return NextResponse.json({ message: "Imagen eliminada exitosamente" }, { status: 200 });
  } catch (error) {
  console.error("Error al eliminar la imagen:", error);
  return NextResponse.json({ message: "Hubo un problema al eliminar la imagen" }, { status: 500 });
  }
}
