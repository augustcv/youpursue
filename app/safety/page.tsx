import type { Metadata } from "next"
import { Shield, AlertTriangle, Phone, Globe, BookOpen, Lock, FileCheck, Users } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Student Safety Abroad | International Exchange Program Safety | YouPursue",
  description:
    "Learn about YouPursue's comprehensive safety measures for international student exchanges. Our thorough vetting process, 24/7 support, and emergency protocols ensure a secure global education experience.",
  keywords: [
    "student exchange safety",
    "international student safety",
    "study abroad safety",
    "exchange program security",
    "safe host families",
    "student travel safety",
    "international education safety",
  ],
  alternates: {
    canonical: "https://www.youpursue.com/safety",
  },
}

export default function Safety() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Safety Is Our Number 1 Priority</h1>

        <div className="prose prose-lg max-w-none text-gray-600 mb-12">
          <p className="lead text-xl">
            At YouPursue, we understand that safety is the foundation of a successful international exchange experience.
            Our comprehensive safety framework is designed to provide peace of mind for students, parents, and host
            families throughout the entire exchange journey.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl shadow-md mb-12 border-l-4 border-blue-600">
          <div className="flex items-center mb-4">
            <Lock className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">Our Safety Guarantee</h2>
          </div>
          <p className="text-gray-700 mb-4">
            We take safety extremely seriously. Every host family undergoes a rigorous verification process, including
            background checks, reference verification, and detailed interviews. Our peer-to-peer model means that both
            families have a vested interest in ensuring a safe, positive experience for all participants.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button variant="outline">
              <Link href="/how-it-works">Learn About Our Process</Link>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Our Safety Commitment</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Safety isn't just a feature of our program—it's the cornerstone of everything we do. Our peer-to-peer
              exchange model is built on a foundation of thorough screening, continuous monitoring, and proactive
              support.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Comprehensive background checks for all host families</li>
              <li>Strict safety and wellbeing investigation protocols</li>
              <li>Regular check-ins throughout the exchange period</li>
              <li>Clear communication protocols for emergencies</li>
              <li>Global support network in each destination</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-md">
            <div className="flex items-center mb-4">
              <FileCheck className="h-8 w-8 text-emerald-600 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-800">Thorough Vetting Process</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Our rigorous selection process ensures that all participants—both exchange students and host families—meet
              our high standards for safety and suitability.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              <li>In-depth interviews with potential host families</li>
              <li>Home inspections to ensure suitable living conditions</li>
              <li>Reference checks from community members</li>
              <li>Criminal background screening for all adult household members</li>
              <li>Careful matching based on compatibility factors</li>
            </ul>
          </div>
        </div>

        <div className="bg-emerald-50 p-8 rounded-xl shadow-md mb-16">
          <div className="flex items-center mb-4">
            <AlertTriangle className="h-8 w-8 text-emerald-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">Emergency Response System</h2>
          </div>
          <p className="text-gray-600 mb-6">
            While we take every precaution to prevent issues, we're also prepared to respond quickly and effectively
            when needed. Our multi-tiered emergency response system includes:
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">24/7 Emergency Hotline</h3>
              <p className="text-gray-600">
                Our dedicated emergency line is staffed around the clock to provide immediate assistance for urgent
                situations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Global Support Network</h3>
              <p className="text-gray-600">
                Our network of contacts in each destination can provide guidance and assistance when needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-2">Medical Emergency Protocols</h3>
              <p className="text-gray-600">
                Clear procedures for accessing healthcare and managing medical emergencies in unfamiliar environments.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Safety Preparation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex">
              <div className="mr-4">
                <Phone className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Communication Planning</h3>
                <p className="text-gray-600">
                  Students receive guidance on maintaining regular contact with their natural families and program
                  support network.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <Globe className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cultural Awareness</h3>
                <p className="text-gray-600">
                  Understanding local customs and norms helps students navigate new environments safely and
                  respectfully.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <BookOpen className="h-6 w-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Safety Handbook</h3>
                <p className="text-gray-600">
                  Each student receives a comprehensive guide with safety tips, emergency contacts, and
                  situation-specific advice.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Insurance and Health Coverage</h2>
          <p className="text-gray-600 mb-6">
            All YouPursue exchange participants are required to have comprehensive health and travel insurance that
            includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-600 mb-6">
            <li>Emergency medical treatment and hospitalization</li>
            <li>Medical evacuation if necessary</li>
            <li>Coverage for pre-existing conditions</li>
            <li>24/7 assistance services</li>
            <li>Coverage for emergency medical situations</li>
          </ul>
          <p className="text-gray-600">
            We partner with reputable international insurance providers to offer affordable options that meet our high
            standards for coverage.
          </p>
        </div>

        <div className="bg-blue-50 p-8 rounded-xl shadow-md mb-16">
          <div className="flex items-center mb-4">
            <Users className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-800">Safety Through Community</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Our peer-to-peer model creates an inherent safety advantage. Unlike traditional programs where students are
            placed with unknown host families, our exchanges involve families who are both sending and hosting students.
            This reciprocal relationship creates mutual accountability and a shared commitment to safety and wellbeing.
          </p>
          <p className="text-gray-600">
            Additionally, our community of exchange families provides support, advice, and resources to ensure everyone
            has a positive, safe experience. Many of our families maintain relationships long after the exchange period
            ends, creating a global network of trusted connections.
          </p>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Safety Promise</h2>
          <p className="text-gray-600 mb-8">
            At YouPursue, safety isn't just a checklist—it's a continuous commitment. We constantly review and enhance
            our safety protocols based on feedback, evolving global conditions, and best practices in international
            education.
          </p>
          <p className="text-gray-600 font-medium mb-10">
            Your safety and well-being are at the heart of everything we do at YouPursue. We are committed to providing
            you with a secure platform to explore the world, make new connections, and grow both personally and
            academically.
          </p>

          <Button className="bg-blue-600 hover:bg-black hover:text-white text-white px-8 py-3 text-lg rounded-md transition-colors duration-300">
            <Link href="/apply">Apply Now</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
