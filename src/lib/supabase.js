import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sgahvfajbwmtbhmofqfy.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNnYWh2ZmFqYndtdGJobW9mcWZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMzNjk5NzYsImV4cCI6MjA0ODk0NTk3Nn0.Vs_a6v5aFF4fpkK7K0gefhzTTaFZjYOY0YQVSWVclFE"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})