import { AppShell } from "@/components/layout/AppShell";
import { Bot, FileText, ListChecks, MessageSquareText, TableProperties } from "lucide-react";

const panels = [
  { title: "Summary", icon: FileText, copy: "Phase 6 will generate executive summaries, risks, dates, and next steps." },
  { title: "Ask", icon: MessageSquareText, copy: "Phase 5 will answer questions using retrieved chunks and source citations." },
  { title: "Extract", icon: TableProperties, copy: "Phase 6 will convert invoices, contracts, and policies into structured fields." },
  { title: "Actions", icon: ListChecks, copy: "Phase 6 will identify tasks, owners, due dates, and priorities." }
];

export default function DocumentDetailPage({ params }: Readonly<{ params: { id: string } }>) {
  return (
    <AppShell>
      <header className="rounded-lg border border-[#d9e0ea] bg-white p-6">
        <div className="flex items-start gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#eef4ff] text-[#2563eb]">
            <Bot size={24} />
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#0f766e]">Document workspace</p>
            <h1 className="mt-2 text-3xl font-bold">{params.id}</h1>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-[#667085]">
              This placeholder page defines the workflow panels before upload, parsing, retrieval, and AI generation are connected.
            </p>
          </div>
        </div>
      </header>

      <section className="mt-6 grid gap-4 lg:grid-cols-2">
        {panels.map((panel) => {
          const Icon = panel.icon;
          return (
            <article key={panel.title} className="rounded-lg border border-[#d9e0ea] bg-white p-5">
              <Icon className="text-[#2563eb]" size={23} />
              <h2 className="mt-4 text-lg font-semibold">{panel.title}</h2>
              <p className="mt-2 text-sm leading-6 text-[#667085]">{panel.copy}</p>
            </article>
          );
        })}
      </section>
    </AppShell>
  );
}
