"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function PricingPackages() {
  const [annualBilling, setAnnualBilling] = useState(false)

  const standardFeatures = [
    { name: "Basic matching service", included: true },
    { name: "Email and Phone immediate support", included: true },
    { name: "Self-guided preparation materials", included: true },
    { name: "Verification process", included: true },
    { name: "Premium matching service", included: false },
    { name: "Personalized preparation and orientation", included: false },
    { name: "Language learning resources", included: false },
    { name: "24/7 emergency support during exchange", included: true },
    { name: "Post-exchange follow-up and resources", included: false },
    { name: "Priority support with dedicated advisor", included: false },
  ]

  const premiumFeatures = [
    { name: "Email and Phone immediate support", included: true },
    { name: "Self-guided preparation materials", included: true },
    { name: "Verification process", included: true },
    { name: "Premium matching service", included: true },
    { name: "Personalized preparation and orientation", included: true },
    { name: "Language learning resources", included: true },
    { name: "24/7 emergency support during exchange", included: true },
    { name: "Post-exchange follow-up and resources", included: true },
    { name: "Priority support with dedicated advisor", included: true },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Exchange Package</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select the package that best fits your needs and budget. Both options provide a life-changing international
            exchange experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Package */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
          >
            <div className="p-8 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Standard</h3>
              <p className="text-gray-600 mb-6">
                Our standard package provides all the essentials for a successful exchange experience.
              </p>
              <div className="h-[72px]">
                <Button
                  className="w-full bg-blue-600 hover:bg-black hover:text-white text-white transition-colors"
                  size="lg"
                >
                  <Link href="/apply?package=standard" className="w-full">
                    Select Standard
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-gray-50 p-8">
              <h4 className="font-semibold text-gray-800 mb-4">What's included:</h4>
              <ul className="space-y-3">
                {standardFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Premium Package */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-blue-500 relative"
          >
            <div className="absolute top-0 right-0">
              <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium</h3>
              <p className="text-gray-600 mb-6">
                Our premium package offers enhanced support and personalized services for the ultimate exchange
                experience.
              </p>
              <div className="h-[72px]">
                <Button
                  className="w-full bg-blue-600 hover:bg-black hover:text-white text-white transition-colors"
                  size="lg"
                >
                  <Link href="/apply?package=premium" className="w-full">
                    Select Premium
                  </Link>
                </Button>
              </div>
            </div>
            <div className="bg-blue-50 p-8">
              <h4 className="font-semibold text-gray-800 mb-4">What's included:</h4>
              <ul className="space-y-3">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    ) : (
                      <X className="h-5 w-5 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            All packages include the core YouPursue exchange experience. Travel expenses are not included.
          </p>
        </div>
      </div>
    </section>
  )
}
