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
  const user = users.find((u: User) => u.id === userId);

  if (!user) {
    return <div className="p-6">User not found</div>;
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-xl font-semibold mb-6">User Details</h1>

      <UserDetails user={user} />
    </div>
  );
}
