import { AppShell } from "@/components/layout/AppShell";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { UploadPlaceholder } from "@/components/upload/UploadPlaceholder";
import { BarChart3, Clock, Files } from "lucide-react";
import { supabase } from "@/lib/supabase";

const sampleDocuments = [
  {
    id: "sample-invoice",
    title: "Supplier Invoice - April",
    type: "Invoice",
    status: "Ready" as const,
    updatedAt: "today",
  },
  {
    id: "sample-contract",
    title: "Client Service Agreement",
    type: "Contract",
    status: "Needs review" as const,
    updatedAt: "yesterday",
  },
];

export default function DashboardPage() {
  // Debug check: This will log an empty array if connected successfully to an empty DB
  // In Phase 4, we'll replace the hardcoded sampleDocuments with a real fetch
  console.log("Supabase Client initialized:", !!supabase);

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
          <p className="mt-4 text-3xl font-bold text-[#172033]">12</p>
        </div>
        <div className="rounded-lg border border-[#d9e0ea] bg-white p-5">
          <div className="flex items-center gap-3">
            <BarChart3 className="text-[#2563eb]" size={20} />
            <p className="text-sm font-medium text-[#667085]">AI Extractions</p>
          </div>
          <p className="mt-4 text-3xl font-bold text-[#172033]">48</p>
        </div>
        <div className="rounded-lg border border-[#d9e0ea] bg-white p-5">
          <div className="flex items-center gap-3">
            <Clock className="text-[#2563eb]" size={20} />
            <p className="text-sm font-medium text-[#667085]">
              Recent Activity
            </p>
          </div>
          <p className="mt-4 text-lg font-semibold text-[#172033]">
            2 hours ago
          </p>
        </div>
      </div>

      <div className="mt-8">
        <UploadPlaceholder />
      </div>

      <section className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Recent documents</h2>
          <span className="text-sm text-[#667085]">Sample data</span>
        </div>
        <div className="grid gap-4 lg:grid-cols-2">
          {sampleDocuments.map((document) => (
            <DocumentCard key={document.id} {...document} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
