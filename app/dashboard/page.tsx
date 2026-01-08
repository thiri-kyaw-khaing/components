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
      <DashboardCard
        icon={<UsersIcon />}
        percentChange="+12%"
        count={245}
        description="Total Staff"
      />
    </div>
  );
}
