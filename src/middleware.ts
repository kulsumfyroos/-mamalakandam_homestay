import { NextResponse, type NextRequest } from "next/server"
// import { rateLimit } from "./lib/rateLimit"
import { verifyToken } from "@/lib/jwt"
import { revalidatePath } from "next/cache"

// Tipos de archivos permitidos
const ALLOWED_FILE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp", "image/svg+xml"]

// Tamaño máximo de archivo (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB

// Rutas protegidas que requieren autenticación
const PROTECTED_ROUTES = ["/api/images/upload", "/api/images/remove", "/dashboard"]

// Rutas públicas que no requieren autenticación
const PUBLIC_ROUTES = ["/", "/login", "/api/auth/login", "/api/auth/logout"]

// Configurar límites de velocidad para diferentes rutas
// const uploadRateLimit = rateLimit({ limit: 10, windowMs: 60 * 1000 }) // 10 cargas por minuto
// const apiRateLimit = rateLimit({ limit: 100, windowMs: 60 * 1000 }) // 100 solicitudes por minuto

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // 1. Logging de solicitudes
  console.log(`middleware [${new Date().toISOString()}] ${request.method} ${pathname}`)

  // 2. Aplicar límites de velocidad según la ruta
  if (pathname === "/api/images/upload") {
    // const limitResult = uploadRateLimit(request)
    // if (limitResult) return limitResult
  } else if (pathname.startsWith("/api/")) {
    // const limitResult = apiRateLimit(request)
    // if (limitResult) return limitResult
  }

  // 3. Verificar autenticación para rutas protegidas
  if (PROTECTED_ROUTES.some((route) => pathname.startsWith(route)) && !pathname.startsWith("/api/auth/")) {
    // Obtener el token de las cookies
    const token = request.cookies.get("auth-token")?.value

    // Log para depuración
    console.log(`Token presente: ${!!token}`)

    if (!token) {
      // Si es una solicitud a la API, devolver error JSON
      if (pathname.startsWith("/api/")) {
        return NextResponse.json({ message: "No autorizado. Inicie sesión para continuar." }, { status: 401 })
      }

      // Si es una solicitud a una página, redirigir al login
      return NextResponse.redirect(new URL("/login", request.url))
    }

    // Verificar el token
    const { valid, payload } = await verifyToken(token)

    if (!valid || !payload) {
      // Si el token no es válido, eliminar la cookie y redirigir al login
      const response = pathname.startsWith("/api/")
        ? NextResponse.json({ message: "Sesión expirada o inválida." }, { status: 401 })
        : NextResponse.redirect(new URL("/login", request.url))

      response.cookies.delete("auth-token")
      return response
    }

    // Verificar permisos específicos
    if (pathname === "/api/images/remove" && payload.role !== "admin") {
      return NextResponse.json({message: "No tiene permisos para realizar esta acción."}, { status: 403 })
    }
  }

  // 4. Validación específica para la carga de imágenes
  if (pathname === "/api/images/upload" && request.method === "POST") {
    const response = NextResponse.next()

    // Agregar encabezados con información sobre restricciones
    response.headers.set("X-Max-File-Size", MAX_FILE_SIZE.toString())
    response.headers.set("X-Allowed-File-Types", ALLOWED_FILE_TYPES.join(","))

    return response
  }

  // 5. Agregar encabezados de seguridad a todas las respuestas
  const response = NextResponse.next()

  // Encabezados de seguridad básicos
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")

  // Política de seguridad de contenido (CSP)
  response.headers.set(
    "Content-Security-Policy",
    process.env.NODE_ENV === "development"
      ? "default-src 'self'; img-src 'self' data: https://res.cloudinary.com; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';"
      : "default-src 'self'; img-src 'self' data: https://res.cloudinary.com; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
  )

  // 6. Limitar métodos HTTP para ciertas rutas
  if (pathname.startsWith("/api/images/list") && request.method !== "GET") {
    return NextResponse.json({ message: "Método no permitido" }, { status: 405 })
  }

  if (pathname === "/api/images/remove" && request.method !== "POST") {
    return NextResponse.json({ message: "Método no permitido" }, { status: 405 })
  }

  return response
}

// Configurar en qué rutas se ejecutará el middleware
export const config = {
  matcher: [
    // Aplicar a todas las rutas de API
    "/api/:path*",
    // Aplicar a rutas específicas
    "/dashboard/:path*",
  ],
}