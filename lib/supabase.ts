import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create a single supabase client for interacting with your database
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