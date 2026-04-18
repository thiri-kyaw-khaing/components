export type CertificateStatus = "Pending" | "Approved" | "Rejected";

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
  status: CertificateStatus;
  createdAt: string;
  updatedAt: string;
};
