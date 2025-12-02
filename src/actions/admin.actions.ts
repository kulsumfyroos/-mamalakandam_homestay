import { prisma } from "@/lib/prisma";

// Función para obtener todos los usuarios
export async function getAllAdminsAction() {
  try {
    return await prisma.users.findMany();
  } catch (error) {
    console.error(`Error al obtener los usuarios:`, error);
    throw new Error(error instanceof Error ? error.message : "Fallo al obtener los usuarios");
  }
}

// Función para obtener un usuario específico por su nombre de usuario (username)
export async function getAdminByUsernameAction(username: string) {
  try {
    return await prisma.users.findFirst({
      where: {
        name: username,
      },
    });
  } catch (error) {
    console.error(`Error al obtener el usuario ${username}:`, error);
    throw new Error(error instanceof Error ? error.message : "Fallo al obtener el usuario");
  }
}