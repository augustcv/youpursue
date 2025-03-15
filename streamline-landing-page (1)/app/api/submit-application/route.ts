import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const applicationData = await request.json()
    // Important: Remove any existing created_at field to let Supabase handle it
    const { created_at, ...data } = applicationData

    const { data: insertedData, error } = await supabase.from("applications").insert([data]).select()

    if (error) throw error

    return NextResponse.json({ success: true, application: insertedData[0] })
  } catch (error) {
    console.error("Application submission error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit application" }, { status: 500 })
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase.from("applications").select("*").order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json({ success: true, applications: data })
  } catch (error) {
    console.error("Error fetching applications:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch applications" }, { status: 500 })
  }
}

