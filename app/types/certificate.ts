export type Certificate = {
  id: number;
  userId: number;
  userName: string;
  employeeId: string;
  department: string;
  division: string;
  category: string;
  trainingId: number;
  trainingName: string;
  image: string;
  description: string;
  status: "Pending" | "Approved" | "Rejected";
  createdAt: string;
  updatedAt: string;
};
