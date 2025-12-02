import { SignJWT, jwtVerify } from "jose"
import { cookies } from "next/headers"
import config from "@/config"

// Interfaz para el payload del token
export interface UserJwtPayload {
  id: string
  picture: string
  email: string
  role: string
  name: string
}

// Función para crear un token JWT
export async function createToken(payload: UserJwtPayload) {
  if (!config.JWT_SECRET) {
    throw new Error("JWT_SECRET no está configurado en las variables de entorno")
  }

  const secretKey = new TextEncoder().encode(config.JWT_SECRET)

  const token = await new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h") // El token expira en 24 horas
    .sign(secretKey)

  return token
}

// Función para verificar un token JWT
export async function verifyToken(token: string) {
  if (!config.JWT_SECRET) {
    throw new Error("JWT_SECRET no está configurado en las variables de entorno")
  }

  const secretKey = new TextEncoder().encode(config.JWT_SECRET)

  try {
    const { payload } = await jwtVerify<UserJwtPayload>(token, secretKey)
    return { payload, valid: true }
  } catch (error) {
    return { valid: false, error }
  }
}

// Función para establecer el token en las cookies
export function setTokenCookie(token: string) {
  cookies().set({
    name: "auth-token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax", // Cambiado de "strict" a "lax" para permitir redirecciones
    maxAge: 60 * 60 * 24, // 24 horas en segundos
    path: "/",
  })
}

// Función para eliminar el token de las cookies (logout)
export function removeTokenCookie() {
  cookies().delete("auth-token")
}

// Función para obtener el token de las cookies
export function getTokenFromCookies() {
  return cookies().get("auth-token")?.value
}