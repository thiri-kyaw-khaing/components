import { id, is } from "date-fns/locale";
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

export type UserList = {
  id: number;
  employeeId: string;
  fullName: string;
  email: string;
  phone: string;
  departmentId: number;
  departmentName: string;
  role: string;
  jobRole: string;
  status: string;
  isManager: boolean;
};

export type UserMeta = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};
