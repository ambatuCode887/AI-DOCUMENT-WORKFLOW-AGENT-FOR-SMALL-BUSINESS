import { AppShell } from "@/components/layout/AppShell";
import { DocumentCard } from "@/components/documents/DocumentCard";
import { UploadPlaceholder } from "@/components/upload/UploadPlaceholder";

const sampleDocuments = [
  {
    id: "sample-invoice",
    title: "Supplier Invoice - April",
    type: "Invoice",
    status: "Ready" as const,
    updatedAt: "today"
  },
  {
    id: "sample-contract",
    title: "Client Service Agreement",
    type: "Contract",
    status: "Needs review" as const,
    updatedAt: "yesterday"
  }
];

export default function DashboardPage() {
  return (
    <AppShell>
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f766e]">Phase 1 shell</p>
          <h1 className="mt-2 text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[#667085]">
            This is the starting surface for upload, document review, cited Q&A, extraction, and action generation.
          </p>
        </div>
      </header>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-[#d9e0ea] bg-white p-5">
          <p className="text-sm text-[#667085]">Documents</p>
          <p className="mt-2 text-3xl font-bold">2</p>
        </div>
        <div className="rounded-lg border border-[#d9e0ea] bg-white p-5">
          <p className="text-sm text-[#667085]">AI runs</p>
          <p className="mt-2 text-3xl font-bold">0</p>
        </div>
        <div className="rounded-lg border border-[#d9e0ea] bg-white p-5">
          <p className="text-sm text-[#667085]">Status</p>
          <p className="mt-2 text-3xl font-bold">Setup</p>
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
