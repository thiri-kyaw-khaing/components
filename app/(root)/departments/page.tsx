import ButtonDialog from "@/components/dashboard/buttonDialog";
import DepartmentCard from "@/components/department/departmentCard";
import DialogForm from "@/components/dashboard/dialogForm";
import PageHeader from "@/components/dashboard/pageHeader";
import { Search, UsersIcon } from "lucide-react";

function DepartmentPage() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <PageHeader
        title="Department Management"
        subtitle="Manage departments, assign managers, and view staff"
        action={
          <ButtonDialog name="Add Department">
            <DialogForm />
          </ButtonDialog>
        }
      />
      {/* Search bar */}
      <div className="border border-[#006022] rounded-lg p-2 flex items-center gap-2 mt-6">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search departments..."
          className="w-full outline-none border-none focus:ring-0"
          // value={searchTerm} // ✅ controlled value
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-10">
        <DepartmentCard
          title="Human Resources"
          managerName="Sarah"
          staffCount={12}
        />
        <DepartmentCard title="Finance" managerName="John" staffCount={8} />
        <DepartmentCard title="Marketing" managerName="Emily" staffCount={15} />
        <DepartmentCard title="Marketing" managerName="Emily" staffCount={15} />
        <DepartmentCard title="Marketing" managerName="Emily" staffCount={15} />
        <DepartmentCard title="Marketing" managerName="Emily" staffCount={15} />
        <DepartmentCard title="Marketing" managerName="Emily" staffCount={15} />
        <DepartmentCard title="Marketing" managerName="Emily" staffCount={15} />
      </div>
    </div>
  );
}

export default DepartmentPage;
