import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export type DocumentCardProps = {
  id: string;
  title: string;
  type: string;
  status: "Ready" | "Processing" | "Needs review";
  updatedAt: string;
};

export function DocumentCard({ id, title, type, status, updatedAt }: DocumentCardProps) {
  return (
    <Link
      href={`/documents/${id}`}
      className="block rounded-lg border border-[#d9e0ea] bg-white p-4 transition hover:border-[#2563eb] hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-3">
          <span className="mt-1 flex h-10 w-10 items-center justify-center rounded-md bg-[#eef4ff] text-[#2563eb]">
            <FileText size={19} />
          </span>
          <div>
            <h3 className="text-sm font-semibold text-[#172033]">{title}</h3>
            <p className="mt-1 text-xs text-[#667085]">{type} · Updated {updatedAt}</p>
          </div>
        </div>
        <ArrowRight className="text-[#98a2b3]" size={18} />
      </div>
      <span className="mt-4 inline-flex rounded-full bg-[#ecfdf3] px-2.5 py-1 text-xs font-medium text-[#027a48]">
        {status}
      </span>
    </Link>
  );
}
