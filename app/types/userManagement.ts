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
  employeeID: string;
  name: string;
  email: string;
  phone: string;
  departmentId: number;
  department: {
    id: number;
    name: string;
    division: string;
    totalStaff: number;
  };
  role: string;
  position: string;
  status: "active" | "inactive" | "suspended";
  createdBy: string;
  createdAt: number;
  updatedAt: number;
};
