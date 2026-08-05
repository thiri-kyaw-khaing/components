import { UsersIcon, BookOpenIcon, Building2Icon } from "lucide-react";
import PageHeader from "@/components/dashboard/pageHeader";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { getAdminDashboardStats } from "@/lib/api/getDashboardStats";

export default async function DashboardPage() {
  const stats = await getAdminDashboardStats();

  return (
    <div className="min-h-screen space-y-4 m-2">
      <PageHeader
        title="Admin Dashboard"
        subtitle="Organization-wide training overview and analytics"
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <DashboardCard
          icon={<UsersIcon className="w-6 h-6" />}
          count={stats?.totalUsers ?? 0}
          description="Total Users"
        />

        <DashboardCard
          icon={<BookOpenIcon className="w-6 h-6" />}
          count={stats?.totalTrainingPlans ?? 0}
          description="Total Training Plans"
        />

        <DashboardCard
          icon={<Building2Icon className="w-6 h-6" />}
          count={stats?.totalDepartments ?? 0}
          description="Total Departments"
        />

        {/* <Test /> */}
      </div>
      {/* Training Calendar */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight">Training Calendar</h2>
        <div className="w-full rounded-2xl shadow-md border overflow-hidden">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=145e678c35bb5fb0c74ca3359c85f0ab6e565f23297871e901550d2297b1f3cc%40group.calendar.google.com&ctz=Asia%2FBangkok"
            className="w-full h-[500px] md:h-[600px]"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}
