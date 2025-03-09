import { Button } from "@/components/ui/button"
import Head from "next/head"

export const runtime = "edge" // Or 'nodejs' if needed

export default function AMPApply() {
  return (
    <>
      <Head>
        <title>Apply for International Student Exchange Program | YouPursue</title>
        <meta
          name="description"
          content="Apply now for life-changing high school and university exchange programs. Experience global education, cultural immersion, and personal growth with YouPursue."
        />
        <link rel="canonical" href="https://www.youpursue.org/apply" />
      </Head>
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 text-gray-800">Start Your Global Education Journey</h1>
              <p className="text-xl text-gray-600 mb-8">
                Apply now for an unforgettable international exchange experience with YouPursue.
              </p>
            </div>

            <form action-xhr="/api/submit-application" method="POST" target="_top">
              <div className="bg-white p-8 rounded-xl shadow-xl space-y-8">
                <h2 className="text-2xl font-semibold mb-6">Personal Information</h2>
                <div className="grid gap-6">
                  <div>
                    <label htmlFor="firstName" className="block mb-2 text-gray-700 font-medium">
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50"
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
                      className="w-full p-3 border rounded-lg text-gray-700 bg-gray-50"
                      required
                    />
                  </div>
                  {/* Add other form fields here, similar to the main application form */}
                </div>

                <div>
                  <Button type="submit" className="w-full bg-emerald-600 text-white p-3 rounded-lg">
                    Submit Application
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

