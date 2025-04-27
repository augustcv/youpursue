"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    quote:
      "My exchange year in Germany was life-changing. YouPursue made the entire process so smooth, from matching me with the perfect host family to providing support throughout my stay.",
    author: "Felicitas Johnson",
    role: "Exchange Student",
    country: "South Africa",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "As parents, we were nervous about sending our daughter abroad, but YouPursue's thorough verification process and constant communication gave us peace of mind. The experience transformed her.",
    author: "Marina and João Machado",
    role: "Parents of Exchange Student",
    country: "Brazil",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "Hosting an exchange student through YouPursue brought so much joy to our family. The matching process was spot-on, and we've built a lifelong connection with our student from Brazil.",
    author: "Konrad von Stehner",
    role: "Host Parent",
    country: "Germany",
    rating: 5,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from students, parents, and host families who have experienced the transformative power of
            international exchange with YouPursue.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg relative"
            >
              <div className="absolute -top-5 -left-5">
                <div className="bg-blue-600 rounded-full p-3">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>
              <div className="mb-6 pt-4">
                <p className="text-gray-700 italic">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
              <div className="flex items-center">
                <div className="mr-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden relative">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.country}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-blue-600 font-medium">
            Join thousands of students who have transformed their lives through international exchange
          </p>
        </div>
      </div>
    </section>
  )
}
