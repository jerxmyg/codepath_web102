import { createClient } from '@supabase/supabase-js'

const URL = 'https://czjjphvnffwfpqppyfxh.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6ampwaHZuZmZ3ZnBxcHB5ZnhoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyMDY3MjEsImV4cCI6MTk5Nzc4MjcyMX0.JO3ErEQmBWDq0ADue2Cet6THZbAQPot_w1lqoAB11Ks';

export const supabase = createClient(URL, API_KEY);