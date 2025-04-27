import { NextResponse } from "next/server"
import { supabase, isSupabaseConfigured, camelToSnakeCase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    // Check if Supabase is properly configured
    if (!isSupabaseConfigured()) {
      console.error("Supabase client not properly configured")
      return NextResponse.json(
        {
          success: false,
          error: "Database configuration error",
          details: "Missing Supabase environment variables",
        },
        { status: 500 },
      )
    }

    // Parse the request body
    let applicationData
    try {
      applicationData = await request.json()
    } catch (error) {
      console.error("Error parsing request body:", error)
      return NextResponse.json(
        { success: false, error: "Invalid request format", details: "Could not parse request body" },
        { status: 400 },
      )
    }

    console.log("Received application data:", applicationData)

    // Convert camelCase fields to snake_case for the database
    const dbData = camelToSnakeCase(applicationData)

    // Remove any existing created_at field to let Supabase handle it
    delete dbData.created_at
    delete dbData.updated_at

    console.log("Submitting application data to Supabase:", dbData)

    // Insert the application into the database
    const { data, error } = await supabase.from("applications").insert([dbData]).select()

    if (error) {
      console.error("Supabase insertion error:", error)
      return NextResponse.json(
        {
          success: false,
          error: "Database error",
          details: error.message,
          code: error.code,
          hint: error.hint,
          details: error.details,
        },
        { status: 500 },
      )
    }

    console.log("Application submitted successfully:", data)
    return NextResponse.json({ success: true, application: data?.[0] || null })
  } catch (error) {
    console.error("Application submission error:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to submit application",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    // Check if Supabase is properly configured
    if (!isSupabaseConfigured()) {
      console.error("Supabase client not properly configured")
      return NextResponse.json({ success: false, error: "Database configuration error" }, { status: 500 })
    }

    // Fetch all applications from the database
    const { data, error } = await supabase.from("applications").select("*").order("created_at", { ascending: false })

    if (error) {
      console.error("Supabase query error:", error)
      return NextResponse.json({ success: false, error: "Database error", details: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, applications: data })
  } catch (error) {
    console.error("Error fetching applications:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Failed to fetch applications",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
