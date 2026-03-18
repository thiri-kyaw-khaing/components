import { getDepartments } from "@/lib/api/getDepartment";
import DepartmentClient from "@/components/department/departmentClient";

export default async function Page() {
  const departments = await getDepartments();

  return <DepartmentClient departments={departments} />;
}
