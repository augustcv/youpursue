"use client"

import { useState, useEffect } from "react"
import type { FlyerRequest, Application } from "@/types"

export default function AdminPage() {
  const [flyerRequests, setFlyerRequests] = useState<FlyerRequest[]>([])
  const [applications, setApplications] = useState<Application[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const [flyerRequestsResponse, applicationsResponse] = await Promise.all([
          fetch("/api/request-flyer"),
          fetch("/api/submit-application"),
        ])

        const flyerRequestsData = await flyerRequestsResponse.json()
        const applicationsData = await applicationsResponse.json()

        if (flyerRequestsData.success && applicationsData.success) {
          setFlyerRequests(flyerRequestsData.flyerRequests)
          setApplications(applicationsData.applications)
        } else {
          setError("Failed to fetch data")
        }
      } catch (error) {
        setError("An error occurred while fetching data")
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Flyer Requests</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {flyerRequests.map((request) => (
              <tr key={request.id}>
                <td className="border border-gray-300 p-2">{request.email}</td>
                <td className="border border-gray-300 p-2">
                  {request.createdAt ? new Date(request.createdAt).toLocaleString() : "Date not available"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Applications</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Phone</th>
              <th className="border border-gray-300 p-2">Package</th>
              <th className="border border-gray-300 p-2">Exchange Length</th>
              <th className="border border-gray-300 p-2">Desired Destinations</th>
              <th className="border border-gray-300 p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => (
              <tr key={application.id}>
                <td className="border border-gray-300 p-2">{`${application.firstName} ${application.lastName}`}</td>
                <td className="border border-gray-300 p-2">{application.email}</td>
                <td className="border border-gray-300 p-2">{application.phone}</td>
                <td className="border border-gray-300 p-2">
                  {application.packageType === "premium" ? (
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">Premium</span>
                  ) : (
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Standard</span>
                  )}
                </td>
                <td className="border border-gray-300 p-2">{application.exchangeLength}</td>
                <td className="border border-gray-300 p-2">{application.desiredDestinations || "Not specified"}</td>
                <td className="border border-gray-300 p-2">
                  {application.createdAt ? new Date(application.createdAt).toLocaleString() : "Date not available"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
