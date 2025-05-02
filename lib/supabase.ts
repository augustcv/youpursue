import { createClient } from "@supabase/supabase-js"

// Use the provided Supabase credentials
const supabaseUrl = "https://sbblzghnnujrfvpkptlr.supabase.co"
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNiYmx6Z2hubnVqcmZ2cGtwdGxyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MTE3NzIsImV4cCI6MjA2MDM4Nzc3Mn0.GkAd4iekwRtJybZnYVec_KiG-4NkFva9Z6kFVdgaVI4"

// Create the Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Add a function to check if Supabase is properly configured
export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey)
}

// Helper function to convert camelCase to snake_case for database fields
export function camelToSnakeCase(obj: Record<string, any>): Record<string, any> {
  const result: Record<string, any> = {}

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // Convert camelCase to snake_case
      const snakeKey = key.replace(/([A-Z])/g, "_$1").toLowerCase()
      result[snakeKey] = obj[key]
    }
  }

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
