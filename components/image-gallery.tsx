"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/719E0378-3095-49D5-9F5A-B78C0D4AC386-Rl7VK6uHmrgQAjY0OoWKakTSXcWvEc.jpeg",
    alt: "Student watching elephant during safari",
    location: "South Africa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1F0AE820-3F61-4150-BE6A-740647D3A582_1_105_c-bW8KB5DDBfuzq1OPKB69s9QYlHf4KD.jpeg",
    alt: "Cable car in Rio de Janeiro",
    location: "Brazil",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/EDA041DC-7DA0-46D6-BA07-F000645E0768_1_201_a-aaweCvgrl1cWGgrhzBa0qbBlzVtELn.jpeg",
    alt: "Winter scene with snow",
    location: "Germany",
  },
]

export default function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <>
      <div className="relative w-full max-w-full mx-auto mt-8 overflow-hidden">
        {/* Mobile view - vertical stack */}
        <div className="md:hidden space-y-4 px-4 w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[200px] w-full cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-2 rounded-b-lg">
                <p className="text-sm font-medium">{image.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop view - horizontal layout */}
        <div className="hidden md:flex justify-center items-center gap-0 max-w-full overflow-hidden">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="w-[400px] h-[600px] cursor-pointer relative"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-3 rounded-b-2xl">
                <p className="text-lg font-medium">{image.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen image view */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-[3/2]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
