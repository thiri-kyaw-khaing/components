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
  employeeId: string;
  name: string;
  email: string;
  phone: string;
  department: {
    id: number;
    name: string;
  };
  departmentId: number;
  role: string;
  position: string;
  status: "active" | "inactive" | "suspended";
};