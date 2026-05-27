import { AppShell } from "@/components/layout/AppShell";
import {
  Bot,
  FileText,
  ListChecks,
  MessageSquareText,
  TableProperties,
  Search,
  ExternalLink,
} from "lucide-react";

const panels = [
  {
    title: "Summary",
    icon: FileText,
    copy: "Phase 6 will generate executive summaries, risks, dates, and next steps.",
  },
  {
    title: "Ask",
    icon: MessageSquareText,
    copy: "Phase 5 will answer questions using retrieved chunks and source citations.",
  },
  {
    title: "Extract",
    icon: TableProperties,
    copy: "Phase 6 will convert invoices, contracts, and policies into structured fields.",
  },
  {
    title: "Actions",
    icon: ListChecks,
    copy: "Phase 6 will identify tasks, owners, due dates, and priorities.",
  },
];

export default function DocumentDetailPage({
  params,
}: Readonly<{ params: { id: string } }>) {
  return (
    <AppShell>
      <header className="flex flex-col gap-4 border-b border-[#d9e0ea] bg-[#f7f8fb] pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef4ff] text-[#2563eb]">
            <Bot size={24} />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0f766e]">
                Workspace
              </p>
              <span className="h-1 w-1 rounded-full bg-[#d9e0ea]" />
              <p className="text-xs text-[#667085]">ID: {params.id}</p>
            </div>
            <h1 className="text-2xl font-bold text-[#172033]">
              Sample Document Name
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-[#d9e0ea] bg-white px-3 py-2 text-sm font-medium hover:bg-gray-50">
            <ExternalLink size={16} />
            View Original
          </button>
        </div>
      </header>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {/* Main Work Area: Chat & Sources */}
        <div className="lg:col-span-2 space-y-6">
          <section className="flex flex-col rounded-xl border border-[#d9e0ea] bg-white shadow-sm overflow-hidden h-[500px]">
            <div className="border-b border-[#d9e0ea] bg-gray-50/50 px-4 py-3">
              <h2 className="flex items-center gap-2 text-sm font-semibold text-[#172033]">
                <MessageSquareText size={18} className="text-[#2563eb]" />
                Ask Document
              </h2>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <p className="text-sm text-[#667085] italic">
                Start by asking a question about the document content...
              </p>
            </div>
            <div className="p-4 border-t border-[#d9e0ea]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask a question..."
                  className="w-full rounded-lg border border-[#d9e0ea] bg-gray-50 py-3 pl-4 pr-12 text-sm focus:border-[#2563eb] focus:outline-none transition-colors"
                />
                <button className="absolute right-2 top-1.5 rounded-md bg-[#2563eb] p-1.5 text-white">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar panels: Summary, Extraction, Actions */}
        <div className="space-y-6">
          {panels
            .filter((p) => p.title !== "Ask")
            .map((panel) => {
              const Icon = panel.icon;
              return (
                <article
                  key={panel.title}
                  className="rounded-xl border border-[#d9e0ea] bg-white p-5 shadow-sm hover:border-[#2563eb] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-[#eef4ff] p-2 text-[#2563eb]">
                      <Icon size={20} />
                    </div>
                    <h2 className="text-base font-semibold text-[#172033]">
                      {panel.title}
                    </h2>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[#667085]">
                    {panel.copy}
                  </p>
                </article>
              );
            })}
        </div>
      </div>
    </AppShell>
  );
}
