"use client"

import { useState } from "react"
import { Users, Globe, Calendar, Home, MessageCircle, Plane, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import GetFlyerModal from "@/components/get-flyer-modal"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Head from "next/head"
import { faqSchema } from "../structured-data"

export default function HowItWorks() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFlierRequested, setIsFlierRequested] = useState(false)
  const [activeTab, setActiveTab] = useState("process")

  const handleFlyerRequest = (email: string) => {
    setIsFlierRequested(true)
    setTimeout(() => setIsFlierRequested(false), 3000)
  }

  const steps = [
    {
      icon: Users,
      title: "Sign Up & Create a Profile",
      description: "Share your interests, country preferences, and exchange duration to get started on your journey.",
      details:
        "Complete our comprehensive application form with information about your personality, interests, hobbies, background, and what you hope to gain from the exchange experience. Upload photos and a personal video to help your match get to know you better.",
    },
    {
      icon: Globe,
      title: "Get Matched",
      description: "Connect with like-minded students and their families from around the world.",
      details:
        "Our team carefully matches you with compatible exchange partners based on shared interests, complementary personalities, and mutual exchange goals. You don't choose your partner directly - we handle the matching process to ensure the best possible fit. Once matched, you'll get to know your exchange partner through our guided introduction process for an enriching exchange experience.",
    },
    {
      icon: MessageCircle,
      title: "Connect & Plan",
      description:
        "Communicate directly with your exchange partner and their family to establish rapport and plan details.",
      details:
        "Once you're matched, engage in video calls to get to know each other better. Discuss expectations, daily routines, school requirements, and any other important aspects of your exchange. Our team provides guidance throughout this process to ensure all important topics are covered.",
    },
    {
      icon: Plane,
      title: "Travel & Experience",
      description: "Embark on your exciting exchange adventure with the support of your host family and our team.",
      details:
        "After finalizing plans and completing safety preparations, book your flight to your host country. After booking your flight, your host family will welcome you into their home, and you'll begin attending a local school. Throughout your stay, you'll participate in family activities, explore the local culture, and develop your language skills.",
    },
    {
      icon: Home,
      title: "Host in Return",
      description: "Complete the circle by offering the same enriching experience to your exchange partner.",
      details:
        "After your time abroad, it's your turn to host your exchange partner. You'll welcome them into your home, introduce them to your family, friends, and school, and help them experience your culture firsthand. This reciprocal arrangement creates a balanced exchange and deepens the connection between both families.",
    },
  ]

  const benefits = [
    {
      icon: RefreshCw,
      title: "Reciprocal – Balanced exchange experience",
      description:
        "Our peer-to-peer model means you both travel abroad AND host in return, creating meaningful connections and balanced relationships.",
    },
    {
      icon: Calendar,
      title: "Flexible – Customizable durations and timing",
      description:
        "Choose exchange periods that work for your schedule, from one month to a semester, with start dates that accommodate both families.",
    },
    {
      icon: Users,
      title: "Personalized – Matches based on compatibility",
      description:
        "Our matching process considers personalities, interests, and goals to create meaningful connections that often develop into lifelong friendships.",
    },
  ]

  const faqs = [
    {
      question: "How does the peer-to-peer model differ from traditional exchange programs?",
      answer:
        "Traditional exchange programs typically involve agencies that place students with host families who aren't sending a student in return. Our peer-to-peer model directly connects families who both want to host and send a student, creating a more balanced, reciprocal relationship and eliminating expensive agency fees.",
    },
    {
      question: "When to host is determined individually between the families?",
      answer:
        "Yes, hosting arrangements are flexible and determined by mutual agreement between matched families. Your exchange partner can come before or after your child's exchange period, depending on what works best for both families. This flexibility allows for non-simultaneous exchanges that accommodate school calendars and family schedules.",
    },
    {
      question: "How do you ensure the safety of participants?",
      answer:
        "Safety is our top priority. We implement comprehensive verification processes for all participants, including background checks, reference verification, and video interviews. We provide continuous support throughout the exchange, with a global support network and a 24/7 emergency assistance line.",
    },
    {
      question: "What support does YouPursue provide during the exchange?",
      answer:
        "We offer safety guidance, arrival support, regular check-ins throughout the exchange, and assistance with any challenges that arise. Our team includes experienced educators and former exchange students who understand the dynamics of successful exchanges and can provide guidance when needed.",
    },
    {
      question: "Can we participate if we don't speak the language of our host country?",
      answer:
        "Many of our participants begin with limited language skills. Immersion is actually one of the most effective ways to learn a language. Many host families are also eager to practice English, creating a mutually beneficial language learning environment.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>How YouPursue Exchange Programs Work | Peer-to-Peer Student Exchange</title>
        <meta
          name="description"
          content="Learn how YouPursue's innovative peer-to-peer exchange program works. Our 5-step process connects students worldwide for flexible and personalized international exchanges."
        />
      </Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-black text-center">How YouPursue Works</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          Our innovative peer-to-peer exchange model connects students and families directly, creating meaningful
          cultural exchanges without the high costs of traditional programs.
        </p>

        <div className="mb-12 border-b">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab("process")}
              className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === "process" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              The Process
            </button>
            <button
              onClick={() => setActiveTab("benefits")}
              className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === "benefits" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              Why YouPursue?
            </button>
            <button
              onClick={() => setActiveTab("faq")}
              className={`px-4 py-2 font-medium rounded-t-lg ${activeTab === "faq" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              FAQs
            </button>
          </div>
        </div>

        {activeTab === "process" && (
          <div className="max-w-4xl mx-auto space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start bg-white p-8 rounded-xl shadow-xl border border-gray-200 transition-all duration-300"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-black">{step.title}</h2>
                  <p className="text-gray-700 mb-3">{step.description}</p>
                  <p className="text-gray-600 text-sm">{step.details}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === "benefits" && (
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white p-8 rounded-xl shadow-xl border border-gray-200 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto mb-6">
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-center text-black">{benefit.title}</h3>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center text-black">The YouPursue Difference</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-black mb-2">Traditional Exchange Programs</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>High agency fees</li>
                    <li>Limited destination options</li>
                    <li>Rigid schedules and durations</li>
                    <li>One-way hosting arrangement</li>
                    <li>Limited family involvement in matching</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-black mb-2">YouPursue Peer-to-Peer Exchange</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Direct family-to-family connections</li>
                    <li>Diverse destinations worldwide</li>
                    <li>Flexible timing and duration options</li>
                    <li>Reciprocal hosting creates balance</li>
                    <li>Direct family involvement in matching</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-lg text-gray-700 mb-6">
                Our peer-to-peer model creates meaningful connections between families worldwide, fostering cultural
                understanding and lifelong friendships.
              </p>
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-col items-center gap-4 mt-16">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-black hover:text-white text-white transition-colors duration-300"
          >
            <Link href="/apply">Start Application</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsModalOpen(true)}
            className="hover:bg-black hover:text-white transition-colors duration-300"
          >
            Receive Flyer
          </Button>
        </div>
      </div>

      <GetFlyerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleFlyerRequest} />

      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  )
}
