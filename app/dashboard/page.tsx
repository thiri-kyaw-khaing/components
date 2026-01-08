import Title from "@/components/title";
import subTitle from "@/components/subTitle";
import SubTitle from "@/components/subTitle";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { UsersIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="m-6 space-y-4">
      <Title text="Admin Dashboard" />
      <SubTitle text="Organization-wide training overview and analytics" />
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
      </div>
    </div>
  );
}
