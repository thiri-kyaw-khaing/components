import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  department: string;
  departmentId: string;
  role: string;
  position: string;
  agency: string;
  cotton: string;
  line: string;
};
