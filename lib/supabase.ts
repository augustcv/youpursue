import { createClient } from "@supabase/supabase-js"

// Update the Supabase URL and key to match the ones in the environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://zirwrxixjjoxouljcpqp.supabase.co"
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppcndyeGl4ampveG91bGpjcHFwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA5MTY1OTksImV4cCI6MjA1NjQ5MjU5OX0.brKFV0tUGuJIBdd1n37z9QD0gN6VVdkDTm3FUM79JEE"

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Add a function to check if Supabase is properly configured
export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey)
}

// Add more detailed logging for debugging
export function camelToSnakeCase(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Convert camelCase to snake_case
      const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase()
      result[snakeKey] = obj[key]
    }
  }

  console.log("Converted to snake_case:", result)
  return result
}

// Helper function to convert snake_case to camelCase for frontend use
export function snakeToCamelCase(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Convert snake_case to camelCase
      const camelKey = key.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
      result[camelKey] = obj[key]
    }
  }

  return result
}
