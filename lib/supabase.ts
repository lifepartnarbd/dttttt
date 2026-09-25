import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL/Key পাওয়া যায়নি। .env.local অথবা হোস্টিং এর Environment Variables চেক করুন।');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
