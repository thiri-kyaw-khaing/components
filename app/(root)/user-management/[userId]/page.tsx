import UserDetails from "@/components/userManagement/UserDetails";
import { User } from "@/app/types/userManagement";
import { users } from "@/lib/data";

type Props = {
  params: {
    userId: string;
  };
};

export default async function UserDetailsPage({ params }: Props) {
  const { userId } = await params;
  //   const user = users.find((u: User) => u.id === userId);
  const user: any = {
    id: "EMP001",
    name: "John Smith",
    email: "john.smith@company.com",
    phone: "+1 234-567-8901",
    department: {
      id: "DPT001",
      name: "IT",
      manager: { id: "EMP003", name: "Michael Chen", position: "IT Manager" },
      staff: [],
      division: "Technology Services",
    },
    departmentId: "DPT001",
    role: "Developer",
    position: "Senior Developer",
    agency: "HQ",
    cotton: "A",
    line: "1",
    status: "active",
    certifications: [
      {
        id: "CERT001",
        name: "AWS Certified Solutions Architect",
        trainingPlan: "Cloud Infrastructure",
        category: "Cloud Computing",
      },
      {
        id: "CERT002",
        name: "Certified Kubernetes Administrator",
        trainingPlan: "Container Orchestration",
        category: "DevOps",
      },
    ],
  };

  if (!user) {
    return <div className="p-6">User not found</div>;
  }

  return (
    <div className="mx-auto">
      <UserDetails user={user} />
    </div>
  );
}
