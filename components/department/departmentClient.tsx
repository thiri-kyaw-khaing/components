"use client";

import ButtonDialog from "@/components/dashboard/buttonDialog";
import DepartmentCard from "@/components/department/departmentCard";
import DialogForm from "@/components/dashboard/dialogForm";
import PageHeader from "@/components/dashboard/pageHeader";
import { Search } from "lucide-react";
import { Department } from "@/app/types/department";
import { useState } from "react";
import { useRouter } from "next/navigation";
import DeleteDepartmentDialog from "@/components/department/DeleteDepartmentDialog";
import EditDepartmentDialog from "@/components/department/EditDepartmentDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function DepartmentPage({ departments }: { departments: Department[] }) {
  const router = useRouter();
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);
  const [activeDialog, setActiveDialog] = useState<
    "staff" | "edit" | "delete" | "delete-blocked" | null
  >(null);
  const [search, setSearch] = useState("");

  const filteredDepartments = departments.filter((dept) =>
    dept.name.toLowerCase().includes(search.trim().toLowerCase()),
  );

  return (
    <div className="min-h-screen space-y-4 m-2">
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
          value={search} //controlled value
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        {filteredDepartments.map((dept) => (
          <DepartmentCard
            key={dept.id}
            department={dept}
            onViewStaff={(department) => {
              router.push(`/departments/${department.id}`); // navigate to staff page
            }}
            onEdit={(department) => {
              setSelectedDepartment(department);
              setActiveDialog("edit");
            }}
            onDelete={(department) => {
              const hasStaff =
                department.totalStaff > 0 ||
                (department.staff && department.staff.length > 0);

              setSelectedDepartment(department);
              setActiveDialog(hasStaff ? "delete-blocked" : "delete");
            }}
          />
        ))}
      </div>

      {/* EDIT */}
      {activeDialog === "edit" && selectedDepartment && (
        <EditDepartmentDialog
          department={selectedDepartment}
          onClose={() => {
            setActiveDialog(null);
            setSelectedDepartment(null);
          }}
        />
      )}

      {/* DELETE */}
      {activeDialog === "delete" && selectedDepartment && (
        <DeleteDepartmentDialog
          department={selectedDepartment}
          onCancel={() => {
            setActiveDialog(null);
            setSelectedDepartment(null);
          }}
          onConfirm={() => {
            // deleteDepartment(selectedDepartment.id);
            setActiveDialog(null);
            setSelectedDepartment(null);
          }}
        />
      )}

      {activeDialog === "delete-blocked" && selectedDepartment && (
        <Dialog open={true} onOpenChange={(o) => !o && setActiveDialog(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-red-600">
                Cannot Delete Department
              </DialogTitle>
            </DialogHeader>
            <p>
              This department has staff and can&apos;t be deleted. Please move
              or remove all staff first.
            </p>
            <div className="flex justify-end">
              <Button
                variant="outline"
                onClick={() => {
                  setActiveDialog(null);
                  setSelectedDepartment(null);
                }}
              >
                Close
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default DepartmentPage;
