export const dynamic = 'force-dynamic';

import { NextResponse } from "next/server"
import { getImagesByAuthorAction } from "@/actions/image.actions"

export async function GET() {
  try {
    const imagesData = await getImagesByAuthorAction(1);
    return NextResponse.json(imagesData);
  } catch (error) {
    console.error("Error general al listar las imágenes:", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Error desconocido al listar las imágenes" },
      { status: 500 }
    );
  }
}
