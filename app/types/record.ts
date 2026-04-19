import { Course } from "./trainingPlan";
import { User } from "./userManagement";

export type OjtRecord = {
  id: number;
  staff: User;
  course: Course;
  status: "COMPLETED" | "IN_PROGRESS" | "NOT_STARTED";
  evaluation?: string;
  prePostTestScore?: string;
};

export type TrainingRecord = {
  id: number;
  trainingPlanName: string;
  location: string;
  costPerPerson: number;
  budgetCode: string;
  employeeId: string;
  employeeName: string;
  position: string;
  department: string;
  division: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  preTestScore?: number | null;
  postTestScore?: number | null;
  evaluation?: string | null;
};

export type TrainingRecordMeta = {
  page: number;
  limit: number;
  totalItems: number;
  totalPages: number;
};
