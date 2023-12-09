import { type SupabaseClient, createClient } from '@supabase/supabase-js';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABSE_PROJECT_URL ?? "";
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_PUBLIC ?? "";

// connection
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
