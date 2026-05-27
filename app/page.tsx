import Link from "next/link";
import { ArrowRight, FileSearch, ListChecks, TableProperties } from "lucide-react";

const capabilities = [
  { title: "Cited Q&A", copy: "Ask business questions and inspect the source snippets behind each answer.", icon: FileSearch },
  { title: "Structured extraction", copy: "Turn invoices, contracts, and policies into clean fields for review.", icon: TableProperties },
  { title: "Action items", copy: "Convert document findings into next steps, owners, dates, and priorities.", icon: ListChecks }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f8fb] px-5 py-8 text-[#172033] sm:px-8">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0f766e]">Small business document operations</p>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-6xl">
            AI Document Workflow Agent
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#475467]">
            Upload business documents, ask grounded questions, extract key fields, and generate action items from one focused workflow.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white hover:bg-[#1d4ed8]"
            >
              Open dashboard
              <ArrowRight size={18} />
            </Link>
            <a
              href="/PROJECT_PLAN.md"
              className="inline-flex items-center justify-center rounded-md border border-[#b8c4d6] px-5 py-3 text-sm font-semibold text-[#334155] hover:border-[#2563eb] hover:text-[#1d4ed8]"
            >
              View project plan
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-lg border border-[#d9e0ea] bg-white p-5">
                <Icon className="text-[#2563eb]" size={24} />
                <h2 className="mt-4 text-base font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-[#667085]">{item.copy}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
