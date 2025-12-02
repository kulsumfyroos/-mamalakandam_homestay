"use client"

import { useAuth } from "@/hooks/useAuth"
import FileUpload from "@/components/FileUpload"

export default function UploadsPage() {
  const { loading, user } = useAuth()

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-4 container mx-auto px-4 py-8">
        <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
        {/* Skeleton para el FileUpload */}
        <div className="w-full max-w-md rounded-lg bg-gray-100 p-6 shadow-sm animate-pulse">
          <div className="flex items-start gap-3 mb-4">
            <div className="rounded-md bg-gray-200 p-3 h-8 w-8"></div>
            <div>
              <div className="h-5 bg-gray-200 rounded w-32 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-64"></div>
            </div>
          </div>
          {/* Área de drop */}
          <div className="mt-4 h-40 rounded-md border border-dashed border-gray-300 bg-gray-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-gray-200 h-12 w-12 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-48 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-32"></div>
            </div>
          </div>
          {/* Botones */}
          <div className="mt-6 flex justify-between">
            <div className="h-9 bg-gray-200 rounded w-24"></div>
            <div className="h-9 bg-gray-200 rounded w-24"></div>
          </div>
        </div>
      </div>
    )
  }

  if(user) {
    return (
      <div className="container mx-auto flex items-center justify-center p-4">
        <FileUpload />
      </div>
    )
  }

  return <></>
}