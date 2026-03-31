// API response (backend)
export type ApiUser = {
  employeeID: string;
  name: string;
  email: string;
  phone: string;
  departmentId: number;
  department: string;
  role: string;
  position: string;
  status: string;
};

// Frontend clean type
export type User = {
  id: number;
  employeeId: string;
  fullName: string;
  email: string;
  phone: string;
  departmentName: string;
  departmentId: number;
  jobRole: string;
  position: string;
  status: "active" | "inactive" | "suspended";
};
