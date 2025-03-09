import { Button } from "@/components/ui/button"
import Head from "next/head"

export default function Login() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <Head>
        <title>Login | YouPursue - International Student Exchange Program</title>
        <meta
          name="description"
          content="Access your YouPursue account to manage your international exchange program application and experience."
        />
      </Head>
      <div className="max-w-md w-full space-y-8 p-8 bg-gray-100 rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Login to Your Account</h2>
          <p className="mt-2 text-sm text-gray-600">Access your YouPursue dashboard</p>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                disabled
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                disabled
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white transition-colors duration-300"
              disabled
            >
              Login
            </Button>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">This feature is not yet available. Please check back later.</p>
        </div>
      </div>
    </div>
  )
}

