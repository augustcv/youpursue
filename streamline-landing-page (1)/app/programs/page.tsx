"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { GlobeIcon, Users, Home, Sparkles, Map, RefreshCw } from "lucide-react"
import GetFlyerModal from "@/components/get-flyer-modal"
import Head from "next/head"
import { highSchoolExchangeSchema, universityExchangeSchema } from "../structured-data"

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
  university: [
    {
      icon: RefreshCw,
      title: "Reciprocal Exchange",
      description:
        "Experience university life abroad and then host your partner, creating a balanced exchange that benefits both students.",
    },
    {
      icon: Users,
      title: "Direct Student Matching",
      description: "Our peer-to-peer model connects you directly with compatible university students worldwide.",
    },
    {
      icon: Map,
      title: "Cultural Exploration",
      description: "Discover new cultures, traditions, and perspectives while living in a different country.",
    },
    {
      icon: Sparkles,
      title: "Personal Development",
      description: "Enhance your independence, adaptability, and cross-cultural communication skills.",
    },
  ],
}

export default function Programs() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const structuredData = {
    highSchool: highSchoolExchangeSchema,
    university: universityExchangeSchema,
  }

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Exchange Programs | High School & University Exchanges | YouPursue</title>
        <meta
          name="description"
          content="Explore YouPursue's international exchange programs for high school students (15-18) and university students. Self-organized, peer-to-peer exchanges focused on cultural immersion and personal growth."
        />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.highSchool) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.university) }}
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
                15-18, our self-organized, peer-to-peer exchange program allows you to immerse yourself in a new
                culture, make international friends, and gain a global perspective that will shape your future.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Program Highlights:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Flexible durations: Choose from 1 month, 3 months, or semester-long exchanges</li>
                  <li>Self-organized: Take ownership of your exchange experience with our guidance</li>
                  <li>Peer-to-peer connections: Direct matching with students your age from around the world</li>
                  <li>Cultural immersion: Live with a host family and attend a local high school</li>
                  <li>Comprehensive support: Safety guidance, support network, and 24/7 emergency assistance</li>
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

              <div className="flex gap-4 justify-center">
                <Button size="lg" className="hover:bg-gray-800 hover:text-white">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="hover:bg-gray-800 hover:text-white"
                >
                  Get Flyer
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* University Study Abroad Section */}
        <div>
          <div className="relative h-[500px] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bjStL53SrtcsJcXHZuuuc4ClZJGqFe.png"
              alt="University Study Abroad"
              fill
              className="object-cover"
            />
            <div className="absolute bottom-8 left-8 z-10">
              <h2 className="text-4xl font-bold text-white drop-shadow-lg">University Exchange</h2>
            </div>
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <div className="bg-emerald-50 p-6 rounded-xl mb-8 border-l-4 border-emerald-600">
                <h3 className="text-xl font-bold mb-2 text-gray-800">Peer-to-Peer University Exchange</h3>
                <p className="text-black text-lg">
                  Our reciprocal university exchange connects you directly with students at universities worldwide.
                  Experience campus life abroad, then welcome your exchange partner to your university. This balanced
                  approach creates meaningful international connections and eliminates traditional program costs.
                </p>
              </div>

              <p className="text-black text-lg mb-6">
                Take your university experience global with our exchange programs. Experience authentic university life
                in another country while exploring new cultures and building an international network that will benefit
                your personal and professional development.
              </p>

              <div className="bg-gray-50 p-6 rounded-xl mb-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800">Program Highlights:</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Authentic university life: Experience campus culture in a different country</li>
                  <li>Self-directed learning: Choose courses that align with your interests and goals</li>
                  <li>Peer connections: Connect directly with university students worldwide</li>
                  <li>Cultural exploration: Discover new perspectives and traditions</li>
                  <li>Flexible accommodation: Choose from homestays, student residences, or shared apartments</li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {programFeatures.university.map((feature, index) => (
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

              <div className="flex gap-4 justify-center">
                <Button size="lg" className="hover:bg-gray-800 hover:text-white">
                  <Link href="/apply">Apply Now</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                  className="hover:bg-gray-800 hover:text-white"
                >
                  Get Flyer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <GetFlyerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

