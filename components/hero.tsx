"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import ImageGallery from "./image-gallery"
import Link from "next/link"
import GetFlyerModal from "@/components/get-flyer-modal"
import { motion } from "framer-motion"

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFlierRequested, setIsFlierRequested] = useState(false)

  const handleFlyerRequest = (email: string) => {
    // Here you would typically handle the flyer request
    setIsModalOpen(false)
    setIsFlierRequested(true)
    setTimeout(() => setIsFlierRequested(false), 3000) // Reset after 3 seconds
  }

  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32 w-full overflow-hidden">
      <div className="space-y-4 px-4 sm:px-0 w-full">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          Discover the World
          <br />
          with YouPursue
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Embark on life-changing international exchange experiences. Connect with students worldwide, immerse yourself
          in new cultures, and broaden your horizons.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <Link href="/apply" className="w-full sm:w-auto">
          <Button size="lg" className="bg-blue-600 hover:bg-black hover:text-white text-white transition-colors w-full">
            Start Your Application
          </Button>
        </Link>
        <Button
          variant="outline"
          size="lg"
          className="bg-background text-foreground hover:bg-black hover:text-white transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          Receive Flyer
        </Button>
      </div>

      <div className="w-full max-w-full overflow-hidden">
        <ImageGallery />
      </div>

      <GetFlyerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleFlyerRequest} />

      {isFlierRequested && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed bottom-8 right-8 bg-emerald-600 text-white p-4 rounded-lg shadow-lg"
        >
          Flyer request submitted successfully!
        </motion.div>
      )}
    </section>
  )
}
