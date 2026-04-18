import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/ui/app-sidebar";
import { redirect } from "next/navigation";
import { getMe } from "@/lib/api/getMe";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await getMe();
  const user = me?.user;

  if (!user) {
    redirect("/login");
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        {/* Sidebar: fixed on desktop (lg+), drawer on mobile */}
        <AppSidebar
          user={{
            name: user.name,
            position: user.position,
            employeeID: user.employeeID,
          }}
        />

        {/* Main content area */}
        <div className="flex flex-1 flex-col min-w-0">
          {/* Top bar with hamburger toggle (visible below lg) */}
          <header className="sticky top-0 z-30 flex h-14 items-center gap-2 border-b bg-background px-4 lg:hidden">
            <SidebarTrigger className="-ml-1" />
            <span className="text-sm font-semibold">Admin Dashboard</span>
          </header>

          {/* Scrollable page content */}
          <main className="flex-1 overflow-y-auto overflow-x-hidden p-4 lg:p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
