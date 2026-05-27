import Link from "next/link";
import {
  LayoutDashboard,
  FileText,
  Settings,
  BarChart3,
  Bot,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Documents", href: "/dashboard", icon: FileText },
  { name: "Evaluation", href: "/dashboard", icon: BarChart3 },
  { name: "Settings", href: "/dashboard", icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="flex items-center gap-2 px-2 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563eb] text-white">
          <Bot size={20} />
        </div>
        <span className="text-xl font-bold tracking-tight text-[#0f766e]">
          DocAgent
        </span>
      </div>

      <nav className="mt-8 flex-1 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-[#475467] hover:bg-[#eef4ff] hover:text-[#2563eb] transition-colors"
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto border-t border-[#d9e0ea] pt-4">
        <div className="flex items-center gap-3 px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-[#d9e0ea]" />
          <span className="text-sm font-medium">Business User</span>
        </div>
      </div>
    </div>
  );
}
