"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import GetFlyerModal from "@/components/get-flyer-modal"
import { motion, AnimatePresence } from "framer-motion"
import Head from "next/head"
import { Info, Check, AlertTriangle, Printer, ExternalLink, CreditCard } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"

// Define the application data type
type ApplicationData = {
  firstName: string | null
  lastName: string | null
  email: string | null
  phone: string | null
  country: string | null
  gender: string | null
  exchangeLength: string | null
  message: string | null
  guardianFirstName: string | null
  guardianLastName: string | null
  desiredDestinations: string | null
  packageType: string | null
  address: string | null
  city: string | null
  postalCode: string | null
  state: string | null
  birthDate: string | null
  schoolName: string | null
  schoolGrade: string | null
  languages: string | null
  allergies: string | null
  dietaryRestrictions: string | null
  applicationId?: string | null
}

export default function Apply() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const initialPackage = searchParams.get("package") || ""

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isFlierRequested, setIsFlierRequested] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [selectedExchangeLength, setSelectedExchangeLength] = useState<string>("")
  const [selectedPackage, setSelectedPackage] = useState<string>(initialPackage)
  const [currentStep, setCurrentStep] = useState<number>(1)
  const [wordCount, setWordCount] = useState<number>(0)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [applicationData, setApplicationData] = useState<ApplicationData | null>(null)
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false)
  const [otherDestination, setOtherDestination] = useState<string>("")
  const [isPrinting, setIsPrinting] = useState(false)

  const printRef = useRef<HTMLDivElement>(null)

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
    "Other (specify in message)",
  ]

  useEffect(() => {
    if (initialPackage) {
      setSelectedPackage(initialPackage)
    }
  }, [initialPackage])

  // Handle flyer request form submission
  const handleFlyerRequest = async (email: string) => {
    try {
      console.log("Flyer request for email:", email)
      setIsFlierRequested(true)
      setTimeout(() => setIsFlierRequested(false), 3000)
      setIsModalOpen(false)
    } catch (error: any) {
      console.error("Error requesting flyer:", error)
      setError("Failed to request flyer. Please try again.")
    }
  }

  const validateForm = (formData: FormData, step: number): boolean => {
    const errors: Record<string, string> = {}

    if (step === 2) {
      // Personal Information validation
      const requiredFields = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "country",
        "gender",
        "address",
        "city",
        "postalCode",
        "state",
        "birthDate",
      ]

      requiredFields.forEach((field) => {
        if (!formData.get(field)) {
          errors[field] = "This field is required"
        }
      })

      // Email validation
      const email = formData.get("email") as string
      if (email && !/\S+@\S+\.\S+/.test(email)) {
        errors["email"] = "Please enter a valid email address"
      }

      // Phone validation
      const phone = formData.get("phone") as string
      if (phone && !/^[+\d\s()-]{7,20}$/.test(phone)) {
        errors["phone"] = "Please enter a valid phone number"
      }

      // Birth date validation
      const birthDate = formData.get("birthDate") as string
      if (birthDate) {
        const today = new Date()
        const birthDateObj = new Date(birthDate)
        const age = today.getFullYear() - birthDateObj.getFullYear()
        if (age < 14 || age > 19) {
          errors["birthDate"] = "Participants must be between 14 and 19 years old"
        }
      }
    }

    if (step === 3) {
      // Message validation
      const message = formData.get("message") as string
      if (!message) {
        errors["message"] = "Please share why you want to join our program"
      } else if (wordCount < 500) {
        errors["message"] = `Please write at least 500 words (current: ${wordCount})`
      }

      // Guardian information validation
      if (!formData.get("guardianFirstName") || !formData.get("guardianLastName")) {
        errors["guardianInfo"] = "Guardian information is required"
      }
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    const words = text.trim() ? text.trim().split(/\s+/) : []
    setWordCount(words.length)
  }

  // Update the handleSubmit function to ensure proper data formatting and error handling
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const formData = new FormData(e.currentTarget)

    // Validate form before submission
    if (!validateForm(formData, 3)) {
      setIsLoading(false)
      window.scrollTo({ top: 0, behavior: "smooth" })
      return
    }

    const selectedDestinations = formData.getAll("desiredDestinations") as string[]

    // Create the data object with snake_case keys to match the database schema
    const data = {
      first_name: formData.get("firstName") as string,
      last_name: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      country: formData.get("country") as string,
      gender: formData.get("gender") as string,
      exchange_length: formData.get("exchangeLength") as string,
      message: formData.get("message") as string,
      guardian_first_name: formData.get("guardianFirstName") as string,
      guardian_last_name: formData.get("guardianLastName") as string,
      desired_destinations: selectedDestinations.length > 0 ? selectedDestinations.join(", ") : null,
      package_type: selectedPackage,
      address: formData.get("address") as string,
      city: formData.get("city") as string,
      postal_code: formData.get("postalCode") as string,
      state: formData.get("state") as string,
      birth_date: formData.get("birthDate") as string,
      school_name: (formData.get("schoolName") as string) || null,
      school_grade: (formData.get("schoolGrade") as string) || null,
      languages: (formData.get("languages") as string) || null,
      allergies: (formData.get("allergies") as string) || null,
      dietary_restrictions: (formData.get("dietaryRestrictions") as string) || null,
      application_id: `APP-${Date.now().toString().slice(-8)}`,
      payment_status: "pending",
      payment_id: null,
    }

    try {
      console.log("Sending application data:", data)

      let response
      try {
        response = await fetch("/api/submit-application", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
      } catch (fetchError) {
        console.error("Fetch error:", fetchError)
        throw new Error("Network error. Please check your connection and try again.")
      }

      let result
      try {
        result = await response.json()
      } catch (parseError) {
        console.error("Error parsing response:", parseError)
        throw new Error("Error processing server response. Please try again.")
      }

      if (!response.ok || !result.success) {
        console.error("API response error:", result)
        let errorMessage = "Failed to submit application"

        if (result.details) {
          errorMessage += `: ${result.details}`
        } else if (result.error) {
          errorMessage += `: ${result.error}`
        }

        if (result.hint) {
          errorMessage += ` (${result.hint})`
        }

        if (result.dbDetails) {
          console.error("Database error details:", result.dbDetails)
        }

        throw new Error(errorMessage)
      }

      console.log("Application submitted successfully:", result)

      // Convert snake_case to camelCase for frontend display
      const applicationDataForDisplay = {
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        gender: data.gender,
        exchangeLength: data.exchange_length,
        message: data.message,
        guardianFirstName: data.guardian_first_name,
        guardianLastName: data.guardian_last_name,
        desiredDestinations: data.desired_destinations,
        packageType: data.package_type,
        address: data.address,
        city: data.city,
        postalCode: data.postal_code,
        state: data.state,
        birthDate: data.birth_date,
        schoolName: data.school_name,
        schoolGrade: data.school_grade,
        languages: data.languages,
        allergies: data.allergies,
        dietaryRestrictions: data.dietary_restrictions,
        applicationId: data.application_id,
      }

      setApplicationData(applicationDataForDisplay)
      setShowConfirmation(true)
    } catch (error: any) {
      console.error("Error submitting application:", error)
      setError(`Failed to submit application: ${error.message || "Unknown error"}. Please try again.`)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } finally {
      setIsLoading(false)
    }
  }

  const handleExchangeLengthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedExchangeLength(e.target.value)
  }

  const handlePackageSelect = (packageType: string) => {
    setSelectedPackage(packageType)
    setCurrentStep(2)
  }

  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    if (validateForm(formData, currentStep)) {
      setCurrentStep(currentStep + 1)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  const handlePrint = () => {
    if (printRef.current) {
      setIsPrinting(true)
      const printContents = printRef.current.innerHTML
      const originalContents = document.body.innerHTML

      document.body.innerHTML = printContents
      window.print()

      // Restore the original content without refreshing
      setTimeout(() => {
        document.body.innerHTML = originalContents

        // Re-run React to restore event handlers
        const event = new Event("DOMContentLoaded", {
          bubbles: true,
          cancelable: true,
        })
        document.dispatchEvent(event)

        // Set isPrinting back to false
        setIsPrinting(false)
      }, 500)
    }
  }

  // Update the getStripePaymentLink function to ensure it returns the correct links
  const getStripePaymentLink = () => {
    return selectedPackage === "premium"
      ? "https://buy.stripe.com/7sIdRE6mM38nb3WcMN"
      : "https://buy.stripe.com/6oE3d06mM9wL3BueUU"
  }

  const standardFeatures = [
    { name: "Basic matching service", included: true },
    { name: "Email and Phone immediate support", included: true },
    { name: "Self-guided preparation materials", included: true },
    { name: "Verification process", included: true },
    { name: "24/7 emergency support during exchange", included: true },
  ]

  const premiumFeatures = [
    { name: "Premium matching service", included: true },
    { name: "Email and Phone immediate support", included: true },
    { name: "Self-guided preparation materials", included: true },
    { name: "Premium verification process", included: true },
    { name: "Personalized preparation and orientation", included: true },
    { name: "Language learning resources", included: true },
    { name: "24/7 emergency support during exchange", included: true },
    { name: "Post-exchange follow-up and resources", included: true },
    { name: "Priority support with dedicated advisor", included: true },
  ]

  if (showConfirmation && applicationData) {
    return (
      <div className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl" ref={printRef}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">Application Submitted Successfully!</h1>
              <p className="text-gray-600 mt-2">
                Thank you for applying to YouPursue's international exchange program. We've received your application.
              </p>
            </div>

            {/* Payment Required Alert */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8 rounded-md">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="text-blue-800 font-medium">Complete Your Application with Payment</h3>
                  <p className="text-sm text-blue-700 mt-1">
                    Your application has been saved, but it is not complete until payment is processed. Please click the
                    "Proceed to Payment" button below to complete your payment securely through Stripe.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4 border-b pb-2">Application Summary</h2>

              {/* Program Details Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-medium text-gray-800 mb-4 border-b pb-2">Program Details</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="mb-2">
                      <span className="font-semibold text-gray-700">Package Type:</span>{" "}
                      <span className={applicationData.packageType === "premium" ? "text-blue-600 font-semibold" : ""}>
                        {applicationData.packageType === "premium" ? "Premium ($10,000)" : "Standard ($1,000)"}
                      </span>
                    </p>
                    <p className="mb-2">
                      <span className="font-semibold text-gray-700">Exchange Length:</span>{" "}
                      {applicationData.exchangeLength === "one-semester"
                        ? "One semester (4-5 months)"
                        : applicationData.exchangeLength}
                    </p>
                  </div>
                  <div>
                    <p className="mb-2">
                      <span className="font-semibold text-gray-700">Desired Destinations:</span>{" "}
                      {applicationData.desiredDestinations || "Not specified"}
                    </p>
                  </div>
                </div>

                {/* Message/Motivation Section */}
                <div className="mt-4">
                  <p className="font-semibold text-gray-700 mb-2">Why you want to join our program:</p>
                  <div className="bg-white p-4 rounded border border-gray-200 max-h-40 overflow-y-auto">
                    <p className="text-gray-700 whitespace-pre-wrap">{applicationData.message}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    (Showing partial content. Full essay is saved with your application.)
                  </p>
                </div>
              </div>

              {/* Guardian Information Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-medium text-gray-800 mb-4 border-b pb-2">Guardian Information</h3>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">Guardian's Name:</span>{" "}
                  {applicationData.guardianFirstName} {applicationData.guardianLastName}
                </p>
              </div>

              {/* Health Information Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-medium text-gray-800 mb-4 border-b pb-2">Health Information</h3>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">Allergies:</span>{" "}
                  {applicationData.allergies || "None specified"}
                </p>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">Dietary Restrictions:</span>{" "}
                  {applicationData.dietaryRestrictions || "None specified"}
                </p>
              </div>

              {/* Payment Information Section */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-medium text-gray-800 mb-4 border-b pb-2">Payment Information</h3>
                <div className="flex items-center mb-4">
                  <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Payment Method:</span> Secure payment via Stripe
                  </p>
                </div>
                <p className="mb-2">
                  <span className="font-semibold text-gray-700">Package Price:</span>{" "}
                  <span className="font-bold">{applicationData.packageType === "premium" ? "$10,000" : "$1,000"}</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Your payment will be securely processed by Stripe. You will receive a receipt via email after your
                  payment is complete.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h3 className="font-semibold text-gray-800 mb-2">Next Steps</h3>
                <ol className="list-decimal pl-5 space-y-2">
                  <li>
                    <strong>Complete your payment</strong> using the secure Stripe checkout.
                  </li>
                  <li>Our team will review your application within 3-5 business days after payment is received.</li>
                  <li>You'll receive an email confirmation with additional information.</li>
                  <li>We'll schedule an initial interview with you and your guardian.</li>
                  <li>Upon approval, we'll begin the matching process with potential host families.</li>
                  <li>
                    You will receive a Trust and Confirmation Agreement and further information once everything is
                    confirmed.
                  </li>
                </ol>
              </div>

              <div className="text-center text-sm text-gray-600 mt-8 border-t pt-4">
                <p>Application ID: {applicationData.applicationId || `APP-${Date.now().toString().slice(-8)}`}</p>
                <p>Submitted on: {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-4 mt-8">
              <Button
                onClick={handlePrint}
                disabled={isPrinting}
                className="flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white transition-colors duration-300"
              >
                <Printer className="h-5 w-5" />
                <span className="w-full h-full flex items-center justify-center">
                  {isPrinting ? "Preparing Print..." : "Print Application Summary"}
                </span>
              </Button>

              {/* Update the payment button in the confirmation section to be more prominent */}
              <a href={getStripePaymentLink()} target="_blank" rel="noopener noreferrer" className="no-underline">
                <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300 w-full py-3 text-lg">
                  <CreditCard className="h-5 w-5" />
                  <span className="w-full h-full flex items-center justify-center">Complete Payment Now</span>
                  <ExternalLink className="h-4 w-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Apply for High School Exchange Program | YouPursue</title>
        <meta
          name="description"
          content="Apply now for a life-changing high school exchange program. Experience global education, cultural immersion, and personal growth with YouPursue."
        />
      </Head>
      <div className="container mx-auto px-4 py-16">
        {error && (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
            <div className="flex items-start">
              <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              <div>
                <h3 className="text-red-800 font-medium">Error</h3>
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">Start Your Global Education Journey</h1>
            <p className="text-xl text-gray-600 mb-8">
              Apply now for an unforgettable high school exchange experience with YouPursue.
            </p>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setIsModalOpen(true)}
              className="hover:bg-black hover:text-white transition-colors duration-300 w-full sm:w-auto"
            >
              <span className="w-full h-full flex items-center justify-center">Get Program Flyer</span>
            </Button>
          </div>

          {/* Form Errors Display */}
          {Object.keys(formErrors).length > 0 && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
                <div>
                  <h3 className="text-red-800 font-medium">Please correct the following errors:</h3>
                  <ul className="mt-2 text-sm text-red-700 list-disc pl-5">
                    {Object.entries(formErrors).map(([field, message]) => (
                      <li key={field}>{message}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Application Process Information */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="font-semibold text-gray-800 mb-2">Application Process</h3>
            <ol className="list-decimal pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Choose your package</strong> - Select either Standard ($1,000) or Premium ($10,000)
              </li>
              <li>
                <strong>Complete application form</strong> - Provide your personal information and program preferences
              </li>
              <li>
                <strong>Submit application</strong> - Review your information and submit your application
              </li>
              <li>
                <strong>Complete payment</strong> - Finalize your application with secure payment through Stripe
              </li>
              <li>
                <strong>Application review</strong> - Our team will review your application and contact you
              </li>
            </ol>
            <p className="text-sm text-blue-700 mt-4 font-medium">
              Note: Your application is only complete after payment is processed through Stripe's secure checkout.
            </p>
          </div>

          {/* Application Steps Progress */}
          <div className="mb-12">
            <div className="flex items-center justify-center">
              <div
                className={`flex items-center ${currentStep >= 1 ? "text-white bg-blue-600" : "text-gray-500 bg-gray-200"} w-10 h-10 rounded-full justify-center font-bold`}
              >
                1
              </div>
              <div className={`h-1 w-24 ${currentStep >= 2 ? "bg-blue-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex items-center ${currentStep >= 2 ? "text-white bg-blue-600" : "text-gray-500 bg-gray-200"} w-10 h-10 rounded-full justify-center font-bold`}
              >
                2
              </div>
              <div className={`h-1 w-24 ${currentStep >= 3 ? "bg-blue-600" : "bg-gray-200"}`}></div>
              <div
                className={`flex items-center ${currentStep >= 3 ? "text-white bg-blue-600" : "text-gray-500 bg-gray-200"} w-10 h-10 rounded-full justify-center font-bold`}
              >
                3
              </div>
            </div>
            <div className="flex justify-center mt-2 text-sm">
              <div className="w-10 text-center">Package</div>
              <div className="w-24"></div>
              <div className="w-10 text-center">Details</div>
              <div className="w-24"></div>
              <div className="w-10 text-center">Payment</div>
            </div>
          </div>

          {currentStep === 1 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6 text-center">Choose Your Package</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Standard Package */}
                <div
                  className={`bg-white rounded-xl shadow-lg overflow-hidden border ${selectedPackage === "standard" ? "border-blue-500 border-2" : "border-gray-200"} cursor-pointer transition-all duration-300 hover:shadow-xl`}
                  onClick={() => handlePackageSelect("standard")}
                >
                  <div className="p-8 bg-gray-50">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Standard</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-5xl font-extrabold text-gray-900">$1,000</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our standard package provides all the essentials for a successful exchange experience.
                    </p>
                    <div className="h-[72px]">
                      <Button
                        className="w-full bg-blue-600 hover:bg-black hover:text-white text-white transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePackageSelect("standard")
                        }}
                      >
                        <span className="w-full h-full flex items-center justify-center">Select Standard</span>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-8">
                    <h4 className="font-semibold text-gray-800 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {standardFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Premium Package */}
                <div
                  className={`bg-white rounded-xl shadow-lg overflow-hidden ${selectedPackage === "premium" ? "border-blue-500 border-2" : "border border-gray-200"} cursor-pointer transition-all duration-300 hover:shadow-xl relative`}
                  onClick={() => handlePackageSelect("premium")}
                >
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Premium</h3>
                    <div className="flex items-baseline mb-4">
                      <span className="text-5xl font-extrabold text-gray-900">$10,000</span>
                    </div>
                    <p className="text-gray-600 mb-6">
                      Our premium package offers enhanced support and personalized services for the ultimate exchange
                      experience.
                    </p>
                    <div className="h-[72px]">
                      <Button
                        className="w-full bg-blue-600 hover:bg-black hover:text-white text-white transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          handlePackageSelect("premium")
                        }}
                      >
                        <span className="w-full h-full flex items-center justify-center">Select Premium</span>
                      </Button>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-8">
                    <h4 className="font-semibold text-gray-800 mb-4">What's included:</h4>
                    <ul className="space-y-3">
                      {premiumFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <form onSubmit={handleNextStep} className="bg-white p-8 rounded-xl shadow-xl space-y-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Personal Information</h2>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                  {selectedPackage === "premium" ? "Premium Package" : "Standard Package"}
                  <button type="button" className="ml-2 text-blue-600 underline" onClick={() => setCurrentStep(1)}>
                    Change
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-gray-700 font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.firstName ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-gray-700 font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.lastName ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-gray-700 font-medium">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.email ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-gray-700 font-medium">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.phone ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="birthDate" className="block mb-2 text-gray-700 font-medium">
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.birthDate ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.birthDate && <p className="text-red-500 text-sm mt-1">{formErrors.birthDate}</p>}
                </div>
                <div>
                  <label htmlFor="gender" className="block mb-2 text-gray-700 font-medium">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.gender ? "border-red-500" : ""
                    }`}
                    required
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  {formErrors.gender && <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>}
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Address Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block mb-2 text-gray-700 font-medium">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.address ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
                </div>
                <div>
                  <label htmlFor="city" className="block mb-2 text-gray-700 font-medium">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.city ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
                </div>
                <div>
                  <label htmlFor="state" className="block mb-2 text-gray-700 font-medium">
                    State/Province <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.state ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.state && <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>}
                </div>
                <div>
                  <label htmlFor="postalCode" className="block mb-2 text-gray-700 font-medium">
                    Postal/Zip Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.postalCode ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.postalCode && <p className="text-red-500 text-sm mt-1">{formErrors.postalCode}</p>}
                </div>
                <div>
                  <label htmlFor="country" className="block mb-2 text-gray-700 font-medium">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.country ? "border-red-500" : ""
                    }`}
                    required
                  />
                  {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Educational Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="schoolName" className="block mb-2 text-gray-700 font-medium">
                    School Name
                  </label>
                  <input
                    type="text"
                    id="schoolName"
                    name="schoolName"
                    className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="schoolGrade" className="block mb-2 text-gray-700 font-medium">
                    Current Grade/Year
                  </label>
                  <select
                    id="schoolGrade"
                    name="schoolGrade"
                    className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  >
                    <option value="">Select grade</option>
                    <option value="9">9th Grade / Year 10</option>
                    <option value="10">10th Grade / Year 11</option>
                    <option value="11">11th Grade / Year 12</option>
                    <option value="12">12th Grade / Year 13</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="languages" className="block mb-2 text-gray-700 font-medium">
                    Languages Spoken
                  </label>
                  <input
                    type="text"
                    id="languages"
                    name="languages"
                    placeholder="e.g., English (native), Spanish (intermediate)"
                    className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold mt-6">Health Information</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="allergies" className="block mb-2 text-gray-700 font-medium">
                    Allergies (if any)
                  </label>
                  <input
                    type="text"
                    id="allergies"
                    name="allergies"
                    placeholder="List any allergies"
                    className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  />
                </div>
                <div>
                  <label htmlFor="dietaryRestrictions" className="block mb-2 text-gray-700 font-medium">
                    Dietary Restrictions (if any)
                  </label>
                  <input
                    type="text"
                    id="dietaryRestrictions"
                    name="dietaryRestrictions"
                    placeholder="e.g., vegetarian, gluten-free, etc."
                    className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300"
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(1)}
                  className="hover:bg-black hover:text-white transition-colors duration-300 w-full sm:w-auto"
                >
                  <span className="w-full h-full flex items-center justify-center">Back to Packages</span>
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-black hover:text-white text-white transition-colors duration-300 w-full sm:w-auto"
                >
                  <span className="w-full h-full flex items-center justify-center">Continue to Program Details</span>
                </Button>
              </div>
            </form>
          )}

          {currentStep === 3 && (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-xl space-y-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">Program Details</h2>
                <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg">
                  {selectedPackage === "premium" ? "Premium Package" : "Standard Package"}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="exchangeLength" className="block mb-2 text-gray-700 font-medium">
                    Desired Exchange Length <span className="text-red-500">*</span>
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
                    The exchange length determines how long you'll stay with your host family abroad. Program lengths
                    can be modified to fit the needs of both families.
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
                    Guardian's First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianFirstName"
                    name="guardianFirstName"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.guardianInfo ? "border-red-500" : ""
                    }`}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="guardianLastName" className="block mb-2 text-gray-700 font-medium">
                    Guardian's Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="guardianLastName"
                    name="guardianLastName"
                    className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                      formErrors.guardianInfo ? "border-red-500" : ""
                    }`}
                    required
                  />
                </div>
                {formErrors.guardianInfo && (
                  <div className="md:col-span-2">
                    <p className="text-red-500 text-sm">{formErrors.guardianInfo}</p>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 font-medium">
                  Why do you want to join our program? <span className="text-red-500">*</span>
                  <span className="text-blue-600 ml-2">(minimum 500 words)</span>
                  {selectedExchangeLength === "individual" && (
                    <span className="text-yellow-600 ml-1">
                      (Please include your desired exchange length in your message)
                    </span>
                  )}
                </label>
                <div className="bg-blue-50 p-4 rounded-lg mb-3 flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-700">
                    <p className="mb-2">
                      Please share your motivation for participating in an exchange program in at least 500 words. This
                      helps us better understand your expectations and find the most suitable match for your exchange.
                    </p>
                    <p className="mb-2">Consider including:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Your personal goals for the exchange experience</li>
                      <li>Why you're interested in cultural immersion</li>
                      <li>Previous international or multicultural experiences</li>
                      <li>Your interests, hobbies, and activities</li>
                      <li>How you plan to contribute to your host family</li>
                      <li>What you hope to learn or achieve during your exchange</li>
                      <li>How this experience aligns with your future plans</li>
                    </ul>
                    {selectedExchangeLength === "individual" && (
                      <p className="mt-2 text-blue-800 font-medium">
                        Also, please specify your desired exchange length in this section.
                      </p>
                    )}
                  </div>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={10}
                  className={`w-full p-3 border rounded-lg text-gray-700 bg-gray-50 hover:bg-purple-100 transition-colors duration-300 ${
                    formErrors.message ? "border-red-500" : ""
                  }`}
                  required
                  onChange={handleMessageChange}
                  placeholder={
                    selectedExchangeLength === "individual"
                      ? "I'm interested in joining this program because... (Please specify your desired exchange length here)"
                      : "I'm interested in joining this program because..."
                  }
                />
                <div className="flex justify-between mt-2 text-sm">
                  <span className={`${wordCount < 500 ? "text-red-500" : "text-green-600"}`}>
                    {wordCount} words {wordCount < 500 ? `(${500 - wordCount} more needed)` : "(minimum reached)"}
                  </span>
                </div>
                {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
              </div>

              {/* Payment Information Notice */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-blue-800 mb-2">Payment Information</h3>
                    <p className="text-sm text-blue-700">
                      After submitting your application, you'll be directed to complete your payment securely through
                      Stripe. Your application will only be processed after payment is confirmed.
                    </p>
                    <div className="mt-4 flex items-center">
                      <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
                      <p className="text-sm font-medium text-blue-800">
                        {selectedPackage === "premium" ? "Premium Package: $10,000" : "Standard Package: $1,000"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start">
                  <input type="checkbox" id="terms" name="terms" className="mt-1 mr-3" required />
                  <label htmlFor="terms" className="text-gray-700 text-sm">
                    I agree to the{" "}
                    <a href="/terms" target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
                      Terms and Conditions
                    </a>{" "}
                    and acknowledge that I have read the{" "}
                    <a href="/privacy" target="_blank" className="text-blue-600 hover:underline" rel="noreferrer">
                      Privacy Policy
                    </a>
                    . I understand that my personal data will be processed as described.
                  </label>
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setCurrentStep(2)}
                  className="hover:bg-black hover:text-white transition-colors duration-300 w-full sm:w-auto"
                >
                  <span className="w-full h-full flex items-center justify-center">Back to Personal Information</span>
                </Button>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-black hover:text-white text-white transition-colors duration-300 w-full sm:w-auto"
                  disabled={isLoading}
                >
                  <span className="w-full h-full flex items-center justify-center">
                    {isLoading ? "Processing..." : "Submit Application"}
                  </span>
                </Button>
              </div>
            </form>
          )}

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
