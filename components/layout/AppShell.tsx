import React from "react";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f7f8fb] text-[#172033]">
      {/* Desktop Sidebar */}
      <div className="hidden border-r border-[#d9e0ea] bg-white md:flex md:w-64 md:flex-col">
        <Sidebar />
      </div>

      <div className="flex flex-1 flex-col">
        {/* Mobile Header */}
        <header className="flex h-16 items-center border-b border-[#d9e0ea] bg-white px-4 md:hidden">
          <button className="rounded-md p-2 hover:bg-gray-100">
            <Menu size={24} />
          </button>
          <span className="ml-4 font-bold text-[#0f766e]">DocAgent</span>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-5 sm:p-8">
          <div className="mx-auto max-w-6xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
