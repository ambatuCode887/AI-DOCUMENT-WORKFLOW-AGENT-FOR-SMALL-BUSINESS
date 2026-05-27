import { UploadCloud } from "lucide-react";

export function UploadPlaceholder() {
  return (
    <section id="upload" className="rounded-lg border border-dashed border-[#b8c4d6] bg-white p-6">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef4ff] text-[#2563eb]">
            <UploadCloud size={23} />
          </span>
          <div>
            <h2 className="text-base font-semibold">Upload documents</h2>
            <p className="mt-1 max-w-2xl text-sm text-[#667085]">
              Phase 2 will connect this area to Supabase Storage and the PDF parser. For now it marks the product flow.
            </p>
          </div>
        </div>
        <button className="rounded-md bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#1d4ed8]">
          Upload PDF
        </button>
      </div>
    </section>
  );
}
