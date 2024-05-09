import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://hjmcuvfhzmhjauagcqrq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqbWN1dmZoem1oamF1YWdjcXJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQyMTQ2OTksImV4cCI6MjAyOTc5MDY5OX0._htO3T110P-KRI-cZAb5uaSxUpa0rWv-H9mgmeQ0hxU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
