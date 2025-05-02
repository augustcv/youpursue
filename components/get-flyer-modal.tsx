"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface GetFlyerModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (email: string) => void
}

export default function GetFlyerModal({ isOpen, onClose, onSubmit }: GetFlyerModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      // Validate email
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        throw new Error("Please enter a valid email address")
      }

      // Submit the request to the API
      const response = await fetch("/api/request-flyer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to request flyer")
      }

      // Call the onSubmit callback if provided
      if (onSubmit) {
        await onSubmit(email)
      }

      setEmail("")
      onClose()
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          <X className="h-6 w-6" />
        </button>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Get Our Program Flyer</h2>
          <p className="text-gray-600 mb-6">
            Enter your email below to receive our detailed program flyer with information about our exchange programs,
            destinations, and pricing.
          </p>
          {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                placeholder="your@email.com"
                required
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300"
            >
              <span className="w-full h-full flex items-center justify-center">
                {isSubmitting ? "Sending..." : "Get Flyer"}
              </span>
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4">
            By submitting this form, you agree to receive emails from us. We'll never share your email with third
            parties.
          </p>
        </div>
      </div>
    </div>
  )
}
