import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    // Parse the request body
    let requestData
    try {
      requestData = await request.json()
    } catch (error) {
      console.error("Error parsing request body:", error)
      return NextResponse.json(
        { success: false, error: "Invalid request format", details: "Could not parse request body" },
        { status: 400 },
      )
    }

    const { email } = requestData

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Missing email", details: "Email is required" },
        { status: 400 },
      )
    }

    console.log("Submitting flyer request for email:", email)

    // Insert the flyer request into the flyer_requests table
    const { data, error } = await supabase.from("flyer_requests").insert([{ email }]).select()

    if (error) {
      console.error("Supabase insertion error:", error)
      return NextResponse.json(
        {
          success: false,
          error: "Database error",
          details: error.message,
          code: error.code,
        },
        { status: 500 },
      )
    }

    console.log("Flyer request submitted successfully:", data)
    return NextResponse.json({ success: true, request: data?.[0] || null })
  } catch (error) {
    console.error("Flyer request submission error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit flyer request",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase.from("flyer_requests").select("*").order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ success: true, flyerRequests: data })
  } catch (error) {
    console.error("Error fetching flyer requests:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch flyer requests" }, { status: 500 })
  }
}
