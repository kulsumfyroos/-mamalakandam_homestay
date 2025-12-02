"use client"

import type React from "react"

import { useState, type FormEvent, type ChangeEvent, type DragEvent, useRef } from "react"
import { RiCloseLine, RiFileImageLine, RiFileLine, RiFileUnknowLine, RiUploadCloudLine } from "@remixicon/react"
import Button from "./ui/Button"
import { toast } from "sonner"
import axios, { type AxiosResponse, type AxiosProgressEvent } from "axios"

// Tipo de respuesta del servidor
interface ResObjType extends AxiosResponse {
  data: {
    message: string
    data?: {
      public_id: string
      secure_url: string
    }[]
  }
}

// Interfaz para el archivo con metadata adicional
interface FileWithMetadata {
  file: File
  uploadingProgress: number
  estimatedTime: number
  id: string
  status: "pending" | "uploading" | "success" | "error"
  errorMessage?: string
}

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

const formatEstimatedTime = (seconds: number): string => {
  if (seconds < 60) {
    return `${Math.round(seconds)}s`
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.round(seconds % 60)
    return `${minutes}m ${remainingSeconds}s`
  } else {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    return `${hours}h ${minutes}m`
  }
}

export default function FileUpload() {
  const [files, setFiles] = useState<FileWithMetadata[]>([])
  const [isUploading, setIsUploading] = useState(false)
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer && e.dataTransfer.files) {
      const droppedFiles = Array.from(e.dataTransfer.files)
      const newFiles = droppedFiles.map((file) => {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;
        const id = `IMG_${formattedDate}_${formattedTime}`;
        return {
          file,
          uploadingProgress: 0,
          estimatedTime: 0,
          id,
          status: "pending" as const,
        };
      });
      setFiles((prevFiles) => [...prevFiles, ...newFiles])
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files)
      const newFiles = selectedFiles.map((file) => {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}${(now.getMonth() + 1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
        const formattedTime = `${now.getHours().toString().padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now.getSeconds().toString().padStart(2, '0')}`;
        const id = `IMG_${formattedDate}_${formattedTime}`;
        return {
          file,
          uploadingProgress: 0,
          estimatedTime: 0,
          id,
          status: "pending" as const,
        };
      });
      setFiles((prevFiles) => [...prevFiles, ...newFiles])

      // Resetear el valor del input para permitir seleccionar los mismos archivos nuevamente
      if (e.target.value) {
        e.target.value = ""
      }
    }
  }

  const updateFileStatus = (id: string, updates: Partial<FileWithMetadata>) => {
    setFiles((prevFiles) => prevFiles.map((file) => (file.id === id ? { ...file, ...updates } : file)))
  }

  const uploadSingleFile = async (fileWithMetadata: FileWithMetadata) => {
    const { file, id } = fileWithMetadata
    const formData = new FormData()
    formData.append("files[]", file)

    try {
      // Actualizar estado a 'uploading'
      updateFileStatus(id, { status: "uploading" })

      const response: ResObjType = await axios.post("/api/images/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent: AxiosProgressEvent) => {
          if (
            progressEvent.lengthComputable &&
            progressEvent.total !== undefined &&
            progressEvent.estimated !== undefined
          ) {
            const percentComplete = (progressEvent.loaded / progressEvent.total) * 100
            updateFileStatus(id, {
              uploadingProgress: percentComplete,
              estimatedTime: progressEvent.estimated,
            })
          }
        },
      })

      if (response.status === 200) {
        updateFileStatus(id, { status: "success", uploadingProgress: 100 })
        return true
      } else {
        throw new Error(response.data.message || "Error al subir el archivo.")
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Error desconocido"
      updateFileStatus(id, {
        status: "error",
        errorMessage: errorMessage,
      })
      return false
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsUploading(true)

    try {
      // Filtrar archivos pendientes
      const pendingFiles = files.filter((f) => f.status === "pending")

      if (pendingFiles.length === 0) {
        toast.info("No hay archivos pendientes para subir")
        return
      }

      // Subir cada archivo individualmente
      const results = await Promise.all(pendingFiles.map((fileWithMetadata) => uploadSingleFile(fileWithMetadata)))

      // Contar éxitos y fallos
      const successCount = results.filter((result) => result).length
      const failCount = results.filter((result) => !result).length

      // Mostrar mensaje según resultados
      if (successCount > 0 && failCount === 0) {
        toast.success(`${successCount} ${successCount === 1 ? "archivo subido" : "archivos subidos"} exitosamente`)
      } else if (successCount > 0 && failCount > 0) {
        toast.warning(
          `${successCount} ${successCount === 1 ? "archivo subido" : "archivos subidos"}, ${failCount} ${failCount === 1 ? "falló" : "fallaron"}`,
        )
      } else if (successCount === 0 && failCount > 0) {
        toast.error(`No se pudo subir ${failCount} ${failCount === 1 ? "archivo" : "archivos"}`)
      }

      // Limpiar archivos exitosos después de un tiempo
      setTimeout(() => {
        setFiles((prevFiles) => prevFiles.filter((f) => f.status !== "success"))
      }, 3000)
    } catch (error) {
      console.error("Error general al subir archivos:", error)
      toast.error("Ocurrió un error al procesar los archivos")
    } finally {
      setIsUploading(false)

      // Resetear el input de archivo
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }
  }

  const removeFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  const handleCancel = () => {
    setFiles([])
    // Resetear el input de archivo
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Añadir estas líneas justo antes del return en el componente FileUpload
  const pendingCount = files.filter((f) => f.status === "pending").length
  const uploadingCount = files.filter((f) => f.status === "uploading").length
  const successCount = files.filter((f) => f.status === "success").length
  const errorCount = files.filter((f) => f.status === "error").length

  return (
    <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-md bg-gray-50 p-1">
          <RiFileLine className="h-5 w-5 text-gray-600" />
        </div>
        <div>
          <h2 className="text-base font-medium text-gray-900">Upload Files</h2>
          <p className="text-sm text-gray-500">
            A continuación se listan todos los archivos que has seleccionado para subir.
          </p>
        </div>
      </div>

      <div
        className={`mt-4 flex flex-col items-center justify-center rounded-md border border-dashed border-blue-300 bg-blue-50 p-6 ${dragActive && "border-green-500 bg-green-100"}`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <div className="mb-3 rounded-full bg-blue-100 p-3">
          <div className="h-6 w-6 text-blue-500">
            <RiUploadCloudLine />
          </div>
        </div>
        <p className="mb-1 text-sm text-gray-700 text-center">
          Arrastra y suelta tus archivos aquí o{" "}
          <label className="cursor-pointer text-blue-600 hover:underline">
            <span>elige archivos</span>
            <input type="file" className="hidden" multiple onChange={handleFileChange} ref={fileInputRef} />
          </label>
        </p>
        <p className="text-xs text-gray-500">10 MB max file size</p>
      </div>

      {files.length > 0 && (
        <div className="mt-6">
          <h3 className="mb-2 text-sm font-medium text-gray-900">Files</h3>
          <div className="space-y-3">
            {files.map((fileWithMetadata) => (
              <div
                key={fileWithMetadata.id}
                className={`flex items-center justify-between rounded-md border border-gray-200 ${
                  fileWithMetadata.status === "error"
                    ? "bg-red-50 border-red-200"
                    : fileWithMetadata.status === "success"
                      ? "bg-green-50 border-green-200"
                      : "bg-gray-50"
                } px-3 py-2`}
              >
                <div className="flex items-center gap-3 flex-grow">
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      fileWithMetadata.status === "error"
                        ? "bg-red-200 text-red-600"
                        : fileWithMetadata.status === "success"
                          ? "bg-green-200 text-green-600"
                          : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {fileWithMetadata.file.type && fileWithMetadata.file.type.includes("image") ? (
                      <RiFileImageLine className="h-4 w-4" />
                    ) : (
                      <RiFileUnknowLine className="h-4 w-4" />
                    )}
                  </div>
                  <div className="file_info flex-grow min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{fileWithMetadata.file.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{formatFileSize(fileWithMetadata.file.size)}</span>
                      {fileWithMetadata.uploadingProgress > 0 && fileWithMetadata.status === "uploading" && (
                        <>
                          <span className="text-xs text-gray-500">
                            {Math.round(fileWithMetadata.uploadingProgress)}%
                          </span>
                          {fileWithMetadata.estimatedTime > 0 && (
                            <>
                              <span className="text-xs text-gray-500">•</span>
                              <span className="text-xs text-gray-500">
                                {formatEstimatedTime(fileWithMetadata.estimatedTime)}
                              </span>
                            </>
                          )}
                        </>
                      )}
                      {fileWithMetadata.status === "error" && (
                        <span className="text-xs text-red-500">
                          {fileWithMetadata.errorMessage || "Error al subir"}
                        </span>
                      )}
                      {fileWithMetadata.status === "success" && (
                        <span className="text-xs text-green-500">Subido exitosamente</span>
                      )}
                    </div>
                    <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-300 ease-in-out ${
                          fileWithMetadata.status === "error"
                            ? "bg-red-500"
                            : fileWithMetadata.status === "success"
                              ? "bg-green-500"
                              : "bg-blue-500"
                        }`}
                        style={{ width: `${fileWithMetadata.uploadingProgress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeFile(fileWithMetadata.id)}
                  className="ml-2 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-600"
                  disabled={fileWithMetadata.status === "uploading"}
                >
                  <RiCloseLine className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <Button
          disabled={isUploading || files.length === 0}
          onClick={handleCancel}
          className="rounded-md text-error hover:bg-error-soft disabled:cursor-not-allowed [transition:background_.3s]"
        >
          Cancelar
        </Button>
        <form onSubmit={handleSubmit}>
          <Button
            type="submit"
            disabled={isUploading || !files.some((f) => f.status === "pending")}
            className={`rounded-md disabled:bg-blue-300 ${isUploading ? "!cursor-progress" : "cursor-pointer"} disabled:cursor-not-allowed bg-blue-600 hover:bg-blue-700 [transition:background_.3s`}
          >
            {isUploading ? "Subiendo..." : "Enviar"}
          </Button>
        </form>
      </div>
    </div>
  )
}