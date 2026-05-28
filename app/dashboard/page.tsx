"use client";

import { useEffect, useState } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { DocumentCard } from "@/components/documents/DocumentCard";
import FileUpload from "@/components/upload/FileUpload";
import { BarChart3, Clock, Files } from "lucide-react";
import { getSupabaseConfigError, supabase } from "@/lib/supabase";

type DocumentStatus = "Ready" | "Needs review";

interface DashboardDocument {
  id: string;
  title: string;
  type: string;
  status: DocumentStatus;
  updatedAt: string;
}

interface SupabaseDocumentRecord {
  id: string;
  title?: string | null;
  file_name?: string | null;
  file_type?: string | null;
  status?: string | null;
  created_at?: string | null;
}

function toDisplayStatus(status: string | null | undefined): DocumentStatus {
  return status === "uploaded" || status === "ready" ? "Ready" : "Needs review";
}

function formatDocuments(
  data: SupabaseDocumentRecord[] | null,
): DashboardDocument[] {
  return (data ?? []).map((doc) => ({
    id: doc.id,
    title: doc.file_name ?? doc.title ?? "Untitled document",
    type: doc.file_type ?? "PDF",
    status: toDisplayStatus(doc.status),
    updatedAt: doc.created_at
      ? new Date(doc.created_at).toLocaleDateString()
      : "today",
  }));
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === "object" && error !== null) {
    const maybeError = error as {
      message?: string;
      error_description?: string;
      details?: string;
      hint?: string;
      code?: string;
    };

    return (
      maybeError.message ??
      maybeError.error_description ??
      maybeError.details ??
      maybeError.hint ??
      maybeError.code ??
      JSON.stringify(error)
    );
  }

  return String(error);
}

export default function DashboardPage() {
  const [documents, setDocuments] = useState<DashboardDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDocuments = async () => {
    setLoading(true);
    setError(null);

    const configError = getSupabaseConfigError();
    if (configError) {
      setError(configError);
      setDocuments([]);
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("documents")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      const message = getErrorMessage(error);
      console.error("Error fetching documents:", message, error);
      setError(message);
      setDocuments([]);
    } else {
      setDocuments(formatDocuments(data));
    }

    setLoading(false);
  };

  useEffect(() => {
    let cancelled = false;

    const loadInitialDocuments = async () => {
      const configError = getSupabaseConfigError();
      if (configError) {
        setError(configError);
        setDocuments([]);
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("documents")
        .select("*")
        .order("created_at", { ascending: false });

      if (cancelled) return;

      if (error) {
        const message = getErrorMessage(error);
        console.error("Error fetching documents:", message, error);
        setError(message);
        setDocuments([]);
      } else {
        setDocuments(formatDocuments(data));
      }

      setLoading(false);
    };

    loadInitialDocuments();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleUploadSuccess = () => {
    fetchDocuments();
  };

  return (
    <AppShell>
      <header className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-[#172033]">
          Welcome back
        </h1>
        <p className="mt-2 text-[#667085]">
          Manage your documents and AI workflows.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-[#d9e0ea] bg-white p-5">
          <div className="flex items-center gap-3">
            <Files className="text-[#2563eb]" size={20} />
            <p className="text-sm font-medium text-[#667085]">Documents</p>
          </div>
          <p className="mt-4 text-3xl font-bold text-[#172033]">
            {documents.length}
          </p>
        </div>

        <div className="rounded-lg border border-[#d9e0ea] bg-white p-5">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-[#2563eb]" size={20} />
            <p className="text-sm font-medium text-[#667085]">AI Extractions</p>
          </div>
          <p className="mt-4 text-3xl font-bold text-[#172033]">0</p>
        </div>

        <div className="rounded-lg border border-[#d9e0ea] bg-white p-5">
          <div className="flex items-center gap-3">
            <Clock className="text-[#2563eb]" size={20} />
            <p className="text-sm font-medium text-[#667085]">
              Recent Activity
            </p>
          </div>
          <p className="mt-4 text-lg font-semibold text-[#172033]">
            {documents.length > 0 ? "Updated today" : "No activity yet"}
          </p>
        </div>
      </div>

      <div className="mt-8">
        <FileUpload onUploadSuccess={handleUploadSuccess} />
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold">Recent documents</h2>
          {loading && (
            <span className="text-sm text-[#667085]">Loading documents...</span>
          )}
          {error && (
            <span className="text-sm text-red-600">Error: {error}</span>
          )}
          {!loading && !error && documents.length === 0 && (
            <span className="text-sm text-[#667085]">
              No documents uploaded yet.
            </span>
          )}
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {documents.map((document) => (
            <DocumentCard key={document.id} {...document} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
