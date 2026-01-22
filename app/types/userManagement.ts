import { Department } from "./department";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: Department;
  departmentId: string;
  role: string;
  position: string;
  agency: string;
  cotton: string;
  line: string;
  status: "active" | "inactive" | "suspended";
};
