import Link from "next/link";
import { FileText, LayoutDashboard, UploadCloud } from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard#upload", label: "Upload", icon: UploadCloud }
];

export function AppShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#172033]">
      <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-[#d9e0ea] bg-white px-5 py-6 lg:block">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2563eb] text-white">
            <FileText size={21} />
          </span>
          <span>
            <span className="block text-sm font-semibold">Doc Workflow AI</span>
            <span className="block text-xs text-[#667085]">Small business ops</span>
          </span>
        </Link>

        <nav className="mt-8 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#334155] hover:bg-[#eef4ff] hover:text-[#1d4ed8]"
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <main className="lg:pl-64">
        <div className="mx-auto max-w-7xl px-5 py-6 sm:px-8">{children}</div>
      </main>
    </div>
  );
}
