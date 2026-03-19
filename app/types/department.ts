export type Staff = {
  id: number;
  employeeID: string;
  name: string;
  email: string;
  phone: string;
  departmentId: number;
  department: string;
  role: string;
  status: "active" | "inactive";
  position: string;
};

export type Department = {
  id: string;
  name: string;
  manager: Staff;
  totalStaff: number;
  staff: Staff[];
  division: string;
};
