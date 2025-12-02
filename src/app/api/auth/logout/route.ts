import { NextResponse } from "next/server"
import { removeTokenCookie } from "@/lib/jwt"

export async function POST() {
  try {
    // Eliminar la cookie de autenticación
    removeTokenCookie()

    return NextResponse.json({ message: "Sesión cerrada exitosamente" })
  } catch (error) {
    console.error("Error al cerrar sesión:", error)
    return NextResponse.json({ message: "Error en el servidor" }, { status: 500 })
  }
}