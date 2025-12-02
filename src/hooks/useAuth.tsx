"use client"

import { useState, useEffect, createContext, useContext } from "react"
import { useRouter } from "next/navigation"

// Tipo para el usuario autenticado
interface User {
  id: string
  picture?: string
  email: string
  name?: string
  role: string
}

// Tipo para el contexto de autenticación
interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  verify: () => Promise<void>
}

// Crear el contexto de autenticación
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Hook personalizado para usar el contexto de autenticación
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth debe ser usado dentro de un AuthProvider")
  }
  return context
}

// Proveedor de autenticación
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  // Verificar autenticación al cargar
  useEffect(() => {
    verify()
  }, [router])
  
  useEffect(() => {
    console.log('effect, user:', user)
      if(user) {
        // Redirigir a la página de dashboard después de iniciar sesión
        router.push("/dashboard")
      }
  }, [router, user])

  useEffect(() => {
    if (user) {
    }
  }, [user, router])

  // Función para verificar si el usuario está autenticado
  const verify = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/auth/verify")

      if (response.ok) {
        const data = await response.json()
        setUser(data.user)
      } else {
        setUser(null)
      }
    } catch (err) {
      console.error("Error al verificar autenticación:", err)
      setUser(null)
    } finally {
      setLoading(false)
    }
  }

  // Función para iniciar sesión
  const login = async (username: string, password: string) => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok) {
        setUser(data.user)
      } else {
        setError(data.error || "Error al iniciar sesión")
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err)
      setError("Error al conectar con el servidor")
    } finally {
      setLoading(false)
      router.refresh() // Refrescar la página para obtener el estado actualizado del usuario
    }
  }

  // Función para cerrar sesión
  const logout = async () => {
    try {
      setLoading(true)
      
      await fetch("/api/auth/logout", {
        method: "POST",
      })

      setUser(null)
      router.push("/login") // Redirigir a la página de login después del logout
    } catch (err) {
      console.error("Error al cerrar sesión:", err)
    } finally {
      setLoading(false)
    }
  }

  // Valor del contexto
  const value = {
    user,
    loading,
    error,
    login,
    logout,
    verify,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}