"use client"

import type React from "react"

import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"
import { RiMailLine, RiLockLine, RiLoginBoxLine, RiCloseLine } from "@remixicon/react"
import Button from "./ui/Button"
import { useRouter } from "next/navigation"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { login, loading, error, user } = useAuth()
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await login(username, password)
  }
  
  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        type="button"
        onClick={() => {
          router.push("/");
        }}
      >
        <RiCloseLine />
      </button>

      <div className="flex items-center justify-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Iniciar Sesión</h1>
      </div>

      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
            Nombre de usuario
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiMailLine className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Username"
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <RiLockLine className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
            />
          </div>
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 rounded-md bg-blue-600 hover:bg-blue-700 text-white font-medium disabled:bg-blue-300"
          startIcon={<RiLoginBoxLine className="h-5 w-5" />}
        >
          {loading ? "Iniciando sesión..." : "Iniciar Sesión"}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        <p>La aplicacion utiliza cookies para mantener la sesión activa y segura, por favor permite el uso de <strong>cookies</strong> en tu navegador.</p>
      </div>
    </div>
  )
}