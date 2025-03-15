"use client"

import { supabase } from "@/lib/supabase"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import GetFlyerModal from "@/components/get-flyer-modal"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import { Info } from "lucide-react"

// Define the application data type
type ApplicationData = {
  firstName: string | null
  lastName: string | null
  email: string | null
  phone: string | null
  country: string | null
  gender: string | null
  program: string | null
  exchangeLength: string | null
  message: string | null
  guardianFirstName: string | null
  guardianLastName: string | null
  desiredDestinations: string | null
}

export default function Apply() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFlierRequested, setIsFlierRequested] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedExchangeLength, setSelectedExchangeLength] = useState<string>("")

  const destinations = [
    "Germany",
    "South Africa",
    "Brazil",
    "United Kingdom",
    "Ireland",
    "Finland",
    "Namibia",
    "Argentina",
    "Mexico",
    "Kenya",
    "Italy",
    "Spain",
  ]

  // Handle flyer request form submission
  const handleFlyerRequest = async (email: string) => {
    try {
      const { data, error } = await supabase.from("flyer_requests").insert([{ email }])

      if (error) {
        console.error("Supabase error:", error)
        throw new Error(error.message)
      }

      console.log("Flyer request submitted successfully:", data)
      setIsFlierRequested(true)
      setTimeout(() => setIsFlierRequested(false), 3000)
      setIsModalOpen(false)
    } catch (error: any) {
      console.error("Error requesting flyer:", error)
      setError("Failed to request flyer. Please try again.")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)
    const selectedDestinations = formData.getAll("desiredDestinations") as string[]

    const applicationData: ApplicationData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
      gender: formData.get("gender") as string,
      program: formData.get("program") as string,
      exchangeLength: formData.get("exchangeLength") as string,
      message: formData.get("message") as string,
      guardianFirstName: formData.get("guardianFirstName") as string,
      guardianLastName: formData.get("guardianLastName") as string,
      desiredDestinations: selectedDestinations.join(", "),
    }

    try {
      if (!supabase) {
        throw new Error("Supabase connection not established")
      }

      const { data, error: supabaseError } = await supabase.from("applications").insert([applicationData])

      if (supabaseError) {
        console.error("Supabase error:", supabaseError)
        setError("Failed to submit application. Please try again.")
        return
      }

      console.log("Application submitted successfully:", data)
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
      e.currentTarget.reset()
      setSelectedExchangeLength("")
    } catch (error: any) {
      console.error("Error:", error)
      setError("Failed to submit application. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleExchangeLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExchangeLength(e.target.value)
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Apply for International Student Exchange Program | YouPursue</title>
        <meta
          name="description"
          content="Apply now for life-changing high school and university exchange programs. Experience global education, cultural immersion, and personal growth with YouPursue."
        />
      </Head>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Start Your Global Education Journey</h1>
            <p className="text-xl text-gray-600 mb-8">
              Apply now for an unforgettable international exchange experience with YouPursue.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="hover:bg-black hover:text-white transition-colors duration-300"
            >
              Get Program Flyer
            </Button>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl space-y-8">
            <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block mb-2 text-gray-700 font-medium">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block mb-2 text-gray-700 font-medium">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="block mb-2 text-gray-700 font-medium">
                  Country of Residence
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="gender" className="block mb-2 text-gray-700 font-medium">
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Program Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="program" className="block mb-2 text-gray-700 font-medium">
                  Preferred Program
                </label>
                <select
                  id="program"
                  name="program"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                >
                  <option value="">Select a program</option>
                  <option value="high-school">High School</option>
                  <option value="university">University</option>
                </select>
              </div>
              <div>
                <label htmlFor="exchangeLength" className="block mb-2 text-gray-700 font-medium">
                  Desired Exchange Length
                </label>
                <select
                  id="exchangeLength"
                  name="exchangeLength"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                  value={selectedExchangeLength}
                  onChange={handleExchangeLengthChange}
                >
                  <option value="">Select length</option>
                  <option value="1-month">1 month</option>
                  <option value="3-months">3 months</option>
                  <option value="one-semester">One semester (4-5 months)</option>
                  <option value="individual">Individual (specify in message)</option>
                </select>
                <p className="text-sm text-gray-500 mt-1">
                  The exchange length determines how long you'll stay with your host family abroad.
                </p>
                {selectedExchangeLength === "individual" && (
                  <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-sm text-yellow-700">
                      Please specify your desired exchange length in the message section below.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Desired Destinations (select all that interest you)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {destinations.map((destination) => (
                  <div key={destination} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`destination-${destination}`}
                      name="desiredDestinations"
                      value={destination}
                      className="mr-2"
                    />
                    <label htmlFor={`destination-${destination}`} className="text-gray-700">
                      {destination}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Legal Guardian Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="guardianFirstName" className="block mb-2 text-gray-700 font-medium">
                  Guardian's First Name
                </label>
                <input
                  type="text"
                  id="guardianFirstName"
                  name="guardianFirstName"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="guardianLastName" className="block mb-2 text-gray-700 font-medium">
                  Guardian's Last Name
                </label>
                <input
                  type="text"
                  id="guardianLastName"
                  name="guardianLastName"
                  className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                Why do you want to join our program?
                {selectedExchangeLength === "individual" && (
                  <span className="text-yellow-600 ml-1">
                    (Please include your desired exchange length in your message)
                  </span>
                )}
              </label>
              <div className="bg-blue-50 p-4 rounded-lg mb-3 flex items-start">
                <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-blue-700">
                  Please share your motivation for participating in an exchange program. Include any specific goals,
                  interests, or experiences you hope to gain.
                  {selectedExchangeLength === "individual" && (
                    <strong className="text-blue-800">
                      {" "}
                      Also, please specify your desired exchange length in this section.
                    </strong>
                  )}{" "}
                  This helps us better understand your expectations and find the most suitable match for your exchange.
                </p>
              </div>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                required
                placeholder={
                  selectedExchangeLength === "individual"
                    ? "I'm interested in joining this program because... (Please specify your desired exchange length here)"
                    : "I'm interested in joining this program because..."
                }
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full bg-emerald-600 hover:bg-black hover:text-white transition-colors duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Application Request"}
            </Button>
          </form>

          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-lg shadow-lg"
              >
                Application submitted successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <GetFlyerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleFlyerRequest} />

      <AnimatePresence>
        {isFlierRequested && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-8 right-8 bg-green-600 text-white p-4 rounded-lg shadow-lg"
          >
            Flyer request submitted successfully!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

