"use client"

import { createContext, useContext } from "react"

// Simplified auth context for static site (no actual auth)
interface AuthContextType {
  user: null
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({ user: null, loading: false })

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthContext.Provider value={{ user: null, loading: false }}>
      {children}
    </AuthContext.Provider>
  )
}