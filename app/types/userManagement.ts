import { Certificate } from "./certificate";
import { Department } from "./department";

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
  employeeID: string;
  name: string;
  email: string;
  phone: string;
  departmentId: number;
  department: Department;
  certificates: Certificate[];
  role: string;
  status: string;
  position: string;
  createdBy: string;
  createdAt: number;
  updatedAt: number;
};
