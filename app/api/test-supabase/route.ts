import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    // Test Supabase connection
    const { data, error } = await supabase.from("applications").select("count").limit(1)

    if (error) {
      console.error("Supabase connection error:", error)
      return NextResponse.json(
        {
          success: false,
          error: error.message,
          details: {
            code: error.code,
            hint: error.hint,
            details: error.details,
          },
        },
        { status: 500 },
      )
    }

    // Get Supabase URL for debugging
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    // Mask the key for security
    const supabaseKeyMasked = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
      ? `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 5)}...`
      : "not set"

    return NextResponse.json({
      success: true,
      message: "Supabase connection successful",
      config: {
        url: supabaseUrl,
        keyStatus: supabaseKeyMasked ? "set" : "not set",
      },
      data,
    })
  } catch (error) {
    console.error("Test endpoint error:", error)
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
