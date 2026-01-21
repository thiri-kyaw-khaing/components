import type { Department } from "@/app/types/department";

export const departments: Department[] = [
  {
    id: "dept-hr",
    name: "Human Resources",
    manager: {
      id: "staff-001",
      name: "Sarah Johnson",
      position: "HR Manager",
    },
    staff: [
      {
        id: "staff-002",
        name: "Emily Carter",
        position: "HR Officer",
      },
      {
        id: "staff-003",
        name: "Daniel Lee",
        position: "Recruitment Specialist",
      },
      {
        id: "staff-004",
        name: "Sophia Brown",
        position: "Training Coordinator",
      },
    ],
  },
  {
    id: "dept-it",
    name: "Information Technology",
    manager: {
      id: "staff-005",
      name: "Michael Chen",
      position: "IT Manager",
    },
    staff: [
      {
        id: "staff-006",
        name: "Alex Turner",
        position: "Frontend Developer",
      },
      {
        id: "staff-007",
        name: "Priya Patel",
        position: "Backend Developer",
      },
      {
        id: "staff-008",
        name: "James Miller",
        position: "DevOps Engineer",
      },
      {
        id: "staff-009",
        name: "Linda Wong",
        position: "QA Engineer",
      },
    ],
  },
  {
    id: "dept-fin",
    name: "Finance",
    manager: {
      id: "staff-010",
      name: "Emily Brown",
      position: "Finance Manager",
    },
    staff: [
      {
        id: "staff-011",
        name: "Robert Wilson",
        position: "Accountant",
      },
      {
        id: "staff-012",
        name: "Anna Taylor",
        position: "Financial Analyst",
      },
    ],
  },
];
