"use client";

import ButtonDialog from "@/components/dashboard/buttonDialog";
import DepartmentCard from "@/components/department/departmentCard";
import DialogForm from "@/components/dashboard/dialogForm";
import PageHeader from "@/components/dashboard/pageHeader";
import { Search, UsersIcon } from "lucide-react";
import { departments } from "@/lib/data";
import { Department } from "@/app/types/department";
import { useState } from "react";
import StaffDialog from "@/components/department/staffDialog";

function DepartmentPage() {
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);
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
        {departments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            department={dept}
            onViewStaff={(department) => setSelectedDepartment(department)}
          />
        ))}
      </div>

      <StaffDialog
        department={selectedDepartment}
        onClose={() => setSelectedDepartment(null)}
      />
    </div>
  );
}

export default DepartmentPage;
