import { getDepartments } from "@/lib/api/getDepartment";
import DepartmentClient from "@/components/department/departmentClient";

export default async function Page() {
  const departments = await getDepartments();
   //log departments for debugging

  return <DepartmentClient departments={departments.data.items} />;
}

// import DepartmentPage from "@/components/department/departmentClient";
// import { departments } from "@/lib/data";

// export default async function Page() {
//    const departments = await getDepartments();
//   return <DepartmentPage departments={departments}/>;
// }
