"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface GetFlyerModalProps {
  isOpen: boolean
  onClose: () => void
  onSubmit?: (email: string) => void
}

export default function GetFlyerModal({ isOpen, onClose, onSubmit }: GetFlyerModalProps) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const apiUrl = `${window.location.origin}/api/request-flyer`
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit flyer request")
      }

      setIsSubmitted(true)
      if (onSubmit) {
        onSubmit(email)
      }
      setTimeout(() => {
        setIsSubmitted(false)
        onClose()
      }, 3000)
    } catch (error) {
      console.error("Error:", error)
      setError("Failed to submit flyer request. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white p-8 rounded-xl max-w-md w-full relative"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black">
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Our Program Flyer</h2>
            <p className="text-gray-600 mb-6">
              Enter your email to receive our detailed program flyer and start your journey with YouPursue.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg text-gray-700"
                required
              />
              <Button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-black hover:text-white transition-colors duration-300"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Receive Flyer"}
              </Button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  className="absolute bottom-4 left-4 right-4 bg-emerald-600 text-white p-4 rounded-lg"
                >
                  Flyer request submitted successfully!
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

