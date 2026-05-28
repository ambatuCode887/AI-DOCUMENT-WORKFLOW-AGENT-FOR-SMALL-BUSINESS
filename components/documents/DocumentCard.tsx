import Link from "next/link";
import { FileText } from "lucide-react";

interface DocumentCardProps {
  id: string;
  title: string;
  type: string;
  status: "Ready" | "Needs review";
  updatedAt: string;
}

export function DocumentCard({
  id,
  title,
  type,
  status,
  updatedAt,
}: DocumentCardProps) {
  return (
    <Link
      href={`/documents/${id}`}
      className="group flex items-center justify-between rounded-lg border border-[#d9e0ea] bg-white p-4 hover:border-[#2563eb] hover:shadow-sm transition-all"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f2f4f7] text-[#475467] group-hover:bg-[#eef4ff] group-hover:text-[#2563eb]">
          <FileText size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-[#172033]">{title}</h3>
          <p className="text-xs text-[#667085]">
            {type} - Updated {updatedAt}
          </p>
        </div>
      </div>
      <span
        className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${status === "Ready" ? "bg-green-50 text-green-700" : "bg-orange-50 text-orange-700"}`}
      >
        {status}
      </span>
    </Link>
  );
}
