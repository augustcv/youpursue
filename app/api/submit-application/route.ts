import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
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

    // Format the birth_date field to ensure it's in the correct format for PostgreSQL date type
    if (applicationData.birth_date) {
      // Ensure it's in YYYY-MM-DD format
      const dateObj = new Date(applicationData.birth_date)
      if (!isNaN(dateObj.getTime())) {
        applicationData.birth_date = dateObj.toISOString().split("T")[0]
      }
    }

    // Handle null values for optional fields
    const optionalFields = [
      "school_name",
      "school_grade",
      "languages",
      "allergies",
      "dietary_restrictions",
      "application_id",
      "payment_id",
    ]

    optionalFields.forEach((field) => {
      if (applicationData[field] === null || applicationData[field] === undefined || applicationData[field] === "") {
        applicationData[field] = null
      }
    })

    // Remove any existing created_at and updated_at fields to let Supabase handle them
    delete applicationData.created_at
    delete applicationData.updated_at

    console.log("Submitting application data to Supabase:", applicationData)

    // Insert the application into the applications table
    const { data, error } = await supabase.from("applications").insert([applicationData]).select()

    if (error) {
      console.error("Supabase insertion error:", error)
      return NextResponse.json(
        {
          success: false,
          error: "Database error",
          details: error.message,
          code: error.code,
          hint: error.hint,
          dbDetails: error.details,
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
