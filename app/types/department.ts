export type Staff = {
  id: string;
  name: string;
  position: string;
};

export type Department = {
  id: string;
  name: string;
  manager: Staff;
  staff: Staff[];
  division: string;
};
