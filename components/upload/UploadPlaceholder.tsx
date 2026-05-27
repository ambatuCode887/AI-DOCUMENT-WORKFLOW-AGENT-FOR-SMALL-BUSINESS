import { UploadCloud } from "lucide-react";

export function UploadPlaceholder() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#d9e0ea] bg-white py-12 text-center hover:border-[#2563eb] transition-colors cursor-pointer">
      <div className="rounded-full bg-[#f2f4f7] p-3 text-[#475467]">
        <UploadCloud size={28} />
      </div>
      <div className="mt-4">
        <p className="text-sm font-semibold text-[#172033]">
          Click to upload or drag and drop
        </p>
        <p className="mt-1 text-xs text-[#667085]">
          PDF, DOCX, or Images (up to 10MB)
        </p>
      </div>
      <button className="mt-6 rounded-md bg-[#2563eb] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1d4ed8]">
        Select files
      </button>
    </div>
  );
}
