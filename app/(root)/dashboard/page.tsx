import { UsersIcon } from "lucide-react";
import PageHeader from "@/components/dashboard/pageHeader";
import DashboardCard from "@/components/dashboard/DashboardCard";
import Test from "@/components/dashboard/test";

export default function DashboardPage() {
  return (
    <div className="min-h-screen space-y-4 m-2">
      <PageHeader
        title="Admin Dashboard"
        subtitle="Organization-wide training overview and analytics"
      />
      <div className="flex flex-wrap gap-10">
        <DashboardCard
          icon={<UsersIcon className="w-6 h-6" />}
          percentChange="+12%"
          count={245}
          description="Total Staff"
        />

        <DashboardCard
          icon={<UsersIcon className="w-6 h-6" />}
          percentChange="+8%"
          count={120}
          description="Active Trainers"
        />

        <DashboardCard
          icon={<UsersIcon className="w-6 h-6" />}
          percentChange="+5%"
          count={32}
          description="Avg Training Hours"
        />

        <Test />
      </div>
    </div>
  );
}
