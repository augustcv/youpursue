import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  // During static builds, return empty data to avoid errors
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
    console.log('Build-time API call skipped - returning empty data')
    return NextResponse.json({ 
      success: true, 
      flyerRequests: [], 
      applications: [] 
    })
  }
  
  try {
    // Directly query Supabase instead of calling other API endpoints
    const { data: flyerRequests, error: flyerError } = await supabase
      .from("flyer_requests")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (flyerError) throw flyerError

    const { data: applications, error: appError } = await supabase
      .from("applications")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (appError) throw appError

    return NextResponse.json({ success: true, flyerRequests, applications })
  } catch (error) {
    console.error("Error fetching data:", error)
    // In case of failure, return empty data instead of an error
    return NextResponse.json({ 
      success: true, 
      flyerRequests: [], 
      applications: [] 
    })
  }
}

