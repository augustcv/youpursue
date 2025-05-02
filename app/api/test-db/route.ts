import { NextResponse } from "next/server"
import { supabase } from "@/lib/supabase"

export async function GET() {
  try {
    // Test Supabase connection
    const { data: tableInfo, error: tableError } = await supabase.from("applications").select("*").limit(0)

    if (tableError) {
      console.error("Error accessing applications table:", tableError)
      return NextResponse.json(
        {
          success: false,
          error: "Database table error",
          details: tableError.message,
          code: tableError.code,
          hint: tableError.hint,
        },
        { status: 500 },
      )
    }

    // Get table structure
    const { data: columns, error: columnsError } = await supabase
      .rpc("get_table_columns", {
        table_name: "applications",
      })
      .catch(() => {
        // If RPC not available, return empty data
        return { data: null, error: { message: "RPC not available" } }
      })

    return NextResponse.json({
      success: true,
      message: "Database connection successful",
      tableInfo,
      columns: columns || "RPC not available to fetch columns",
      supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseKeyMasked: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
        ? `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.substring(0, 5)}...`
        : "not set",
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
