import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    // Let Supabase handle the timestamp
    const { data, error } = await supabase.from("flyer_requests").insert([{ email }]).select()

    if (error) throw error

    return NextResponse.json({ success: true, flyerRequest: data[0] })
  } catch (error) {
    console.error("Flyer request error:", error)
    return NextResponse.json({ success: false, error: "Failed to submit flyer request" }, { status: 500 })
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

