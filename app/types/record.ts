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
