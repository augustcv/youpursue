import Hero from "@/components/hero"
import Features from "@/components/features"
import CTA from "@/components/cta"
import Link from "next/link"
import { GlobeIcon, Users, Home } from "lucide-react"

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <main className="flex-grow w-full overflow-hidden">
        <div className="relative w-full">
          {/* Background gradients */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
            <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
          </div>

          <div className="relative z-10 w-full">
            <Hero />
            <Features />

            {/* Enhanced SEO-optimized content section */}
            <section className="py-16 bg-gray-50 w-full">
              <div className="container mx-auto px-4 w-full">
                <div className="max-w-4xl mx-auto space-y-8 w-full">
                  <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                    Your Gateway to International Education Excellence
                  </h2>

                  <div className="prose prose-lg w-full">
                    <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                      <p className="text-black text-lg leading-relaxed">
                        YouPursue stands at the forefront of international education, offering transformative exchange
                        programs that open doors to global opportunities. Our comprehensive approach combines flexible
                        program options with extensive support systems, ensuring students and families can confidently
                        pursue international education experiences.
                      </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-600">Comprehensive Exchange Programs</h3>
                      <p className="text-black mb-4">
                        Whether you're seeking a high school experience abroad or a university semester exchange, our
                        programs cater to diverse personal goals. Students can choose from various program lengths, from
                        one-month cultural immersions to semester exchanges, all designed to foster global competency
                        and personal growth.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6 mt-6">
                        <div className="bg-gray-50 p-5 rounded-lg text-center">
                          <h4 className="font-semibold text-emerald-600 mb-2">High School Exchanges</h4>
                          <p className="text-gray-700 text-sm">
                            For students aged 15-18 seeking international education experiences
                          </p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-lg text-center">
                          <h4 className="font-semibold text-emerald-600 mb-2">1-Month Cultural Immersions</h4>
                          <p className="text-gray-700 text-sm">
                            Short-term programs focused on cultural exploration and language learning
                          </p>
                        </div>
                        <div className="bg-gray-50 p-5 rounded-lg text-center">
                          <h4 className="font-semibold text-emerald-600 mb-2">University Exchanges</h4>
                          <p className="text-gray-700 text-sm">
                            Semester-long programs for university students to study abroad
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-md mb-8">
                      <h3 className="text-xl font-semibold mb-4 text-emerald-600">Why Choose YouPursue?</h3>
                      <ul className="space-y-4">
                        <li className="flex items-center">
                          <Users className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-black">Direct Connections</p>
                            <p className="text-gray-700 text-sm leading-tight">
                              Student-to-student and family-to-family connections, eliminating expensive agency fees
                            </p>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <Shield className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-black">Comprehensive Safety</p>
                            <p className="text-gray-700 text-sm leading-tight">
                              Thorough vetting processes and continuous support throughout your exchange
                            </p>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <Calendar className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-black">Flexible Programs</p>
                            <p className="text-gray-700 text-sm leading-tight">
                              Program lengths and timing options to suit different needs and schedules
                            </p>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <GlobeIcon className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-black">Global Destinations</p>
                            <p className="text-gray-700 text-sm leading-tight">
                              Cultural immersion opportunities in various countries including Germany, South Africa,
                              Brazil, United Kingdom, Ireland, Finland, Namibia, Argentina, Mexico, Kenya, Italy, and
                              Spain. Additional destinations available based on demand.
                            </p>
                          </div>
                        </li>
                        <li className="flex items-center">
                          <Home className="h-5 w-5 text-emerald-600 mr-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-black">Support Network</p>
                            <p className="text-gray-700 text-sm leading-tight">
                              A global network that supports your journey every step of the way
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-emerald-50 p-8 rounded-xl shadow-md mb-8 border-l-4 border-emerald-600">
                      <h3 className="text-xl font-semibold mb-4 text-gray-800">Ready to Start Your Global Journey?</h3>
                      <p className="text-gray-700 mb-6">
                        Take the first step toward your international education adventure. Our team is here to guide you
                        through every step of the process, from program selection to return support.
                      </p>
                      <div className="flex flex-wrap gap-4 mt-6">
                        <Link
                          href="/apply"
                          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-black hover:text-white transition-colors duration-300"
                        >
                          Apply Now
                        </Link>
                        <Link
                          href="/programs"
                          className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-black hover:text-white transition-colors duration-300"
                        >
                          Explore Programs
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <CTA />
          </div>
        </div>
      </main>
    </div>
  )
}

// Add missing components
function Shield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}

function Calendar(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function Globe(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}>
      {/* SVG content */}
    </svg>
  );
}

function Window(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props}>
      {/* SVG content */}
    </svg>
  );
}

