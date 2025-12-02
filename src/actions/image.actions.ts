import { prisma } from "@/lib/prisma";

// Función para crear un nuevo admin
export async function createImageAction(data: { authorId: number; secure_url: string; public_id: string }) {
  try {
    return await prisma.images.create({
      data: data,
    });
  } catch (error) {
    console.error("Error creating image:", error);
    throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
  }
}
// Función para obtener imágenes por autor
export async function getImagesByAuthorAction(authorId: number) {
  try {
    return await prisma.images.findMany({
      where: {
        authorId: authorId,
      },
    });
  } catch (error) {
    console.error("Error geting image:", error);
    throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
  }
}

// Función para eliminar una imagen por public_id
export async function removeImageAction(public_id: string) {
  try {
    return await prisma.images.deleteMany({
      where: {
        public_id: public_id,
      },
    });
  } catch (error) {
    console.error("Error deleting image:", error);
    throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
  }
}
