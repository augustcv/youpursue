"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { GlobeIcon, Users, Home, RefreshCw, Calendar, GraduationCap, Clock } from "lucide-react"
import GetFlyerModal from "@/components/get-flyer-modal"
import PricingPackages from "@/components/pricing-packages"
import Head from "next/head"
import { highSchoolExchangeSchema } from "../structured-data"

const programFeatures = {
  highSchool: [
    {
      icon: RefreshCw,
      title: "Reciprocal Exchange",
      description:
        "Our unique peer-to-peer model means you both travel abroad AND host your exchange partner, creating balanced relationships and deeper connections.",
    },
    {
      icon: Users,
      title: "Direct Family Matching",
      description:
        "Connect directly with compatible families worldwide, eliminating middlemen and creating authentic relationships.",
    },
    {
      icon: GlobeIcon,
      title: "Global Perspective",
      description: "Develop cross-cultural understanding and build international friendships that last a lifetime.",
    },
    {
      icon: Home,
      title: "Support Network",
      description: "Receive continuous support from our global network throughout your stay.",
    },
  ],
}

const programLengths = [
  {
    icon: Clock,
    title: "1-Month Summer Program",
    description:
      "Perfect for first-time travelers or those with limited time. Experience cultural immersion during summer break without missing school.",
    benefits: [
      "Quick cultural immersion experience",
      "Minimal school disruption",
      "Ideal for younger students (15-16)",
      "Focus on language acquisition and cultural activities",
    ],
  },
  {
    icon: Calendar,
    title: "3-Month Program",
    description:
      "A balanced option that provides deeper cultural immersion while still fitting within a single school term or semester.",
    benefits: [
      "Meaningful school integration",
      "Significant language improvement",
      "Experience seasonal cultural events",
      "Develop lasting international friendships",
    ],
  },
  {
    icon: GraduationCap,
    title: "Semester Program (4-5 months)",
    description:
      "Our most comprehensive option for full cultural and academic immersion. Experience life as a local student for an entire semester.",
    benefits: [
      "Complete academic integration",
      "Advanced language acquisition",
      "Deep cultural understanding",
      "Transformative personal growth",
      "College application enhancement",
    ],
  },
]

const destinations = [
  {
    region: "Europe",
    countries: ["Germany", "United Kingdom", "Ireland", "Finland", "Italy", "Spain"],
    description:
      "Experience diverse European cultures, from the historic cities of Germany and Italy to the stunning landscapes of Ireland and Finland.",
  },
  {
    region: "Latin America",
    countries: ["Brazil", "Argentina", "Mexico"],
    description:
      "Immerse yourself in the vibrant cultures, rich traditions, and warm hospitality of Latin American countries.",
  },
  {
    region: "Africa",
    countries: ["South Africa", "Namibia", "Kenya"],
    description:
      "Discover the incredible diversity, wildlife, and cultural heritage of African nations while gaining a unique global perspective.",
  },
]

export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("overview")

  const structuredData = {
    highSchool: highSchoolExchangeSchema,
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>High School Exchange Program | YouPursue</title>
        <meta
          name="description"
          content="Explore YouPursue's international exchange programs for high school students (15-18). Self-organized, peer-to-peer exchanges focused on cultural immersion and personal growth."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.highSchool) }}
      />
      <div className="space-y-16">
        {/* High School Exchange Section */}
        <div>
          <div className="relative h-[500px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ho5byR969HMeG0TXVQMC23IPGiUUma.png"
              alt="High School Exchange Program"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">High School Exchange</h2>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-emerald-50 p-6 rounded-xl mb-8 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Peer-to-Peer Exchange Model</h3>
                <p className="text-black text-lg">
                  Our unique reciprocal exchange program connects you directly with students your age worldwide. You'll
                  experience life abroad with your matched family, and then host your exchange partner in return. This
                  balanced approach creates deeper connections and eliminates expensive agency fees.
                </p>
              </div>

              <p className="text-black text-lg mb-6">
                Experience a life-changing time abroad as a high school exchange student. Designed for students aged
                14-19, our self-organized, peer-to-peer exchange program allows you to immerse yourself in a new
                culture, make international friends, and gain a global perspective that will shape your future.
              </p>

              {/* Program Navigation Tabs */}
              <div className="mb-8 border-b">
                <div className="flex space-x-4 mb-0">
                  <button
                    onClick={() => setActiveTab("overview")}
                    className={`px-4 py-2 font-medium rounded-t-lg ${
                      activeTab === "overview" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Program Overview
                  </button>
                  <button
                    onClick={() => setActiveTab("lengths")}
                    className={`px-4 py-2 font-medium rounded-t-lg ${
                      activeTab === "lengths" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Program Lengths
                  </button>
                  <button
                    onClick={() => setActiveTab("destinations")}
                    className={`px-4 py-2 font-medium rounded-t-lg ${
                      activeTab === "destinations" ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    Destinations
                  </button>
                </div>
              </div>

              {activeTab === "overview" && (
                <>
                  <div className="bg-gray-50 p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">Program Highlights:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Flexible durations: Choose from 1 month, 3 months, or semester-long exchanges</li>
                      <li>Self-organized: Take ownership of your exchange experience with our guidance</li>
                      <li>Peer-to-peer connections: Direct matching with students your age from around the world</li>
                      <li>Cultural immersion: Live with a host family and attend a local high school</li>
                      <li>Comprehensive support: Safety guidance, support network, and 24/7 emergency assistance</li>
                      <li>
                        Academic integration: Experience local education systems while studying abroad (available for
                        all program lengths)
                      </li>
                      <li>
                        Language learning: Immerse yourself in a new language with support from your host family and
                        school
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {programFeatures.highSchool.map((feature, index) => (
                      <div key={index} className="bg-white p-8 rounded-xl shadow-xl">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="rounded-full bg-black p-2">
                            <feature.icon className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-bold text-black">{feature.title}</h3>
                        </div>
                        <p className="text-gray-700">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {activeTab === "lengths" && (
                <div className="space-y-8">
                  <p className="text-gray-700 mb-6">
                    YouPursue offers flexible program lengths to accommodate different schedules, goals, and comfort
                    levels. Choose the option that best fits your educational journey and personal aspirations.
                  </p>

                  {programLengths.map((program, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="rounded-full bg-emerald-100 p-3">
                          <program.icon className="h-6 w-6 text-emerald-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">{program.title}</h3>
                      </div>
                      <p className="text-gray-700 mb-4">{program.description}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-800 mb-2">Key Benefits</h4>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                          {program.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Customized Options Available</h3>
                    <p className="text-gray-700">
                      Need a different program length? We understand that every student's situation is unique. Contact
                      us to discuss customized program durations that fit your specific needs and schedule.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === "destinations" && (
                <div className="space-y-8">
                  <p className="text-gray-700 mb-6">
                    YouPursue offers exchange opportunities in diverse countries across multiple continents. Each
                    destination provides unique cultural experiences, educational systems, and personal growth
                    opportunities.
                  </p>

                  {destinations.map((region, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">{region.region}</h3>
                      <p className="text-gray-700 mb-4">{region.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {region.countries.map((country, i) => (
                          <span
                            key={i}
                            className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">Destination Matching</h3>
                    <p className="text-gray-700">
                      During the application process, you'll have the opportunity to indicate your preferred
                      destinations. While we can't guarantee specific countries, we work diligently to match you with a
                      host family in one of your preferred locations. If you have interest in destinations not listed,
                      you can specify them in the message section of your application.
                    </p>
                  </div>
                </div>
              )}

              <div className="flex gap-4 justify-center mt-12">
                <Button className="bg-blue-600 hover:bg-black hover:text-white text-white transition-colors duration-300">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Get Flyer
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Packages Section */}
        <PricingPackages />
      </div>

      <GetFlyerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
