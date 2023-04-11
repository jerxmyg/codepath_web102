import { createClient } from '@supabase/supabase-js'

const URL = 'https://cklnywshoawacnuuxcct.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNrbG55d3Nob2F3YWNudXV4Y2N0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODExODA3MzgsImV4cCI6MTk5Njc1NjczOH0.VX1ElV7JiF9K2fl2H-XvJcWlagCZOxguc6daU_7L77A'

export const supabase = createClient(URL, API_KEY)