import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://adkwntrorxyvbtlcbnax.supabase.co"; // ✅ Wrapped in quotes
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFka3dudHJvcnh5dmJ0bGNibmF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAzMzAyODUsImV4cCI6MjA1NTkwNjI4NX0.mWzyrC5DCVSEZe69b4FYPv8_aQcyNpG8LzDq1hTMDuY"; // ✅ Wrapped in quotes

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
