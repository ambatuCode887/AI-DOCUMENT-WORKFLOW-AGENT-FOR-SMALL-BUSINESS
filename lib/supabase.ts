import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export function getSupabaseConfigError() {
  if (!supabaseUrl) {
    return "Missing NEXT_PUBLIC_SUPABASE_URL in .env.local.";
  }

  if (!supabaseAnonKey) {
    return "Missing NEXT_PUBLIC_SUPABASE_ANON_KEY in .env.local.";
  }

  if (!supabaseUrl.startsWith("https://") || !supabaseUrl.includes(".supabase.co")) {
    return "NEXT_PUBLIC_SUPABASE_URL should look like https://your-project-ref.supabase.co.";
  }

  if (!supabaseAnonKey.startsWith("eyJ") || supabaseAnonKey.length < 100) {
    return "NEXT_PUBLIC_SUPABASE_ANON_KEY does not look like a valid Supabase anon public key. Copy the full anon public key from Supabase Project Settings > API.";
  }

  return null;
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      documents: {
        Row: {
          id: string
          user_id: string | null
          title: string
          file_name: string | null
          file_type: string | null
          file_url: string | null
          status: string | null
          created_at: string
        }
        Insert: {
          title: string
          // ... other fields optional for insert
        }
      }
      document_chunks: {
        Row: {
          id: string
          document_id: string
          content: string
          embedding: number[] | null
          page_number: number | null
        }
      }
      ai_runs: {
        Row: {
          id: string
          run_type: string
          output: string | null
        }
      }
      extraction_results: {
        Row: {
          id: string
          result_json: Json
        }
      }
    }
  }
}
