import StaffTable from "@/components/department/staffTable";
import { getDepartmentById } from "@/lib/api/getDepartment";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Link from "next/link";

export default async function DepartmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log("Department ID:", id); //log id for debugging
  const department = await getDepartmentById(id);
  console.log("Department Detail:", department);
  console.log("staff members:", department.data.staff); //log department for debugging

  return (
    <div>
      <div>
        <Link
          href="/training-plans"
          className="text-[#006022] border-[#006022] border px-4 py-2 inline-flex items-center gap-2 rounded-lg mb-4"
        >
          <ArrowLeft />
          Back to Training Plans
        </Link>
        <h2 className="font-bold text-2xl mb-4">
          {department.data.name} - Staff List
        </h2>
        <p>Total - {department.data.totalStaff} staff members</p>

        <p>Total Staff: {department.data.totalStaff}</p>
        <div className="mt-4">
          <StaffTable staff={department.data.staff} />
        </div>
      </div>
    </div>
  );
}
