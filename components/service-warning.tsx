"use client"

import { AlertTriangle } from "lucide-react"

export default function ServiceWarning() {
  return (
    <div className="bg-red-600 text-white py-4 px-6 w-full">
      <div className="container mx-auto flex items-center justify-center gap-3">
        <AlertTriangle className="h-6 w-6 flex-shrink-0" />
        <p className="text-center font-semibold text-lg">
          This service is not yet operational. Applications are not currently being processed.
        </p>
      </div>
    </div>
  )
}
