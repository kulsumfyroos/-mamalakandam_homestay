export const dynamic = 'force-dynamic';

import { type NextRequest, NextResponse } from "next/server"
import { getTokenFromCookies, verifyToken } from "@/lib/jwt"

export async function GET(request: NextRequest) {
  try {
    // Obtener el token de las cookies
    const token = getTokenFromCookies()

    if (!token) {
      return NextResponse.json({ message: "No autenticado" }, { status: 401 })
    }

    // Verificar el token
    const { valid, payload, error } = await verifyToken(token)

    if (!valid || !payload) {
      return NextResponse.json({ message: "Token inválido o expirado" }, { status: 401 })
    }

    // Devolver la información del usuario
    return NextResponse.json({
      user: {
        id: payload.id,
        picture: payload.picture,
        email: payload.email,
        name: payload.name,
        role: payload.role,
      },
    })
  } catch (error) {
    console.error("Error al obtener información del usuario:", error)
    return NextResponse.json({ message: "Error en el servidor" }, { status: 500 })
  } finally {
    NextResponse.next()
  }
}