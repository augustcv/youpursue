import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RotaryCollaboration() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-50 rounded-xl p-8 md:p-12 shadow-md border-l-4 border-blue-600">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/4 flex justify-center">
              <div className="relative w-48 h-48">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lS4mMrAxeCZhiRyo5DqC8y2WhxBF4q.png"
                  alt="Rotary International Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="md:w-3/4">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Proud Collaboration with Rotary International
              </h2>
              <p className="text-gray-700 mb-6">
                YouPursue is honored to collaborate with Rotary International, a global network of 1.4 million
                neighbors, friends, leaders, and problem-solvers who see a world where people unite and take action to
                create lasting change. This partnership enhances our exchange programs with Rotary's century-long
                experience in international youth exchanges and their commitment to cultural understanding and peace.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-600 hover:bg-black hover:text-white text-white transition-colors w-full sm:w-auto">
                  <Link href="/programs" className="w-full h-full flex items-center justify-center">
                    Explore Our Programs
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  className="hover:bg-black hover:text-white transition-colors w-full sm:w-auto"
                >
                  <a
                    href="https://www.rotary.org/en/our-programs/youth-exchanges"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center"
                  >
                    Learn About Rotary Exchanges
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
