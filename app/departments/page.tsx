import ButtonDialog from "@/components/dashboard/buttonDialog";
import DepartmentCard from "@/components/dashboard/departmentCard";
import PageHeader from "@/components/dashboard/pageHeader";
import { UsersIcon } from "lucide-react";

function DepartmentPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <PageHeader
        title="Department Management"
        subtitle="Manage departments, assign managers, and view staff"
        action={<ButtonDialog name="Add Department" />}
      />
      <div className="mt-6 flex flex-wrap gap-10">
        <DepartmentCard
          title="Human Resources"
          managerName="Sarah"
          staffCount={12}
        />
        <DepartmentCard title="Finance" managerName="John" staffCount={8} />
        <DepartmentCard title="Marketing" managerName="Emily" staffCount={15} />
      </div>
    </div>
  );
}

export default DepartmentPage;
