"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function TestApplication() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const testConnection = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/test-db")
      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  const testSubmission = async () => {
    setLoading(true)
    setError(null)
    try {
      // Create a minimal test application
      const testData = {
        first_name: "Test",
        last_name: "User",
        email: "test@example.com",
        phone: "+1234567890",
        country: "Test Country",
        gender: "other",
        exchange_length: "1-month",
        message: "This is a test submission.",
        guardian_first_name: "Guardian",
        guardian_last_name: "Test",
        desired_destinations: "Germany, Brazil",
        package_type: "standard",
        address: "123 Test St",
        city: "Test City",
        postal_code: "12345",
        state: "Test State",
        birth_date: new Date().toISOString().split("T")[0], // Today's date in YYYY-MM-DD format
        school_name: "Test School",
        school_grade: "10",
        languages: "English",
        allergies: null,
        dietary_restrictions: null,
        application_id: `TEST-${Date.now()}`,
        payment_status: "pending",
        payment_id: null,
      }

      const response = await fetch("/api/submit-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testData),
      })

      const data = await response.json()
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Application Database Test</h1>

      <div className="flex gap-4 mb-8">
        <Button onClick={testConnection} disabled={loading}>
          {loading ? "Testing..." : "Test Database Connection"}
        </Button>

        <Button onClick={testSubmission} disabled={loading}>
          {loading ? "Submitting..." : "Test Application Submission"}
        </Button>
      </div>

      {error && (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {result && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Result:</h2>
          <pre className="bg-black text-green-400 p-4 rounded overflow-auto max-h-96">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}
