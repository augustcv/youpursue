import { NextResponse } from "next/server"

export async function GET() {
  try {
    const flyerRequestsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/request-flyer`)
    const applicationsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/submit-application`)

    const { flyerRequests } = await flyerRequestsResponse.json()
    const { applications } = await applicationsResponse.json()

    return NextResponse.json({ success: true, flyerRequests, applications })
  } catch (error) {
    console.error("Error fetching data:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch data" }, { status: 500 })
  }
}

